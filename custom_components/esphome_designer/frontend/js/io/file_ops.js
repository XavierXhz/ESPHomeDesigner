import { AppState } from '../core/state';
import { loadLayoutIntoState, parseSnippetYamlOffline } from './yaml_import';
import { Logger } from '../utils/logger.js';
import { setSubstitutions } from './yaml_parsers/subs_resolver.js';

// P4 Panel YAML project directory (served via vite middleware)
const YAML_API = '/api/yaml-project';
const PAGE_NAME_MAP = {
    'page_screensaver': '息屏界面', 'page1_home': '首页', 'page_main': '设备控制',
    'page_spotlight': '筒灯控制', 'page_led_strip': '灯带控制',
    'page_curtain_light': '窗帘灯控制', 'page_curtain': '电动窗帘控制',
    'page_ac': '空调控制'
};
const PAGE_ID_ORDER = ['page_screensaver','page1_home','page_main',
    'page_spotlight','page_led_strip','page_curtain_light','page_curtain','page_ac'];

/**
 * Load ESPHome YAML project pages into Designer state.
 * Resolves ${color_xxx} substitutions from p4-panel.yaml before parsing.
 */
export async function loadYamlProject() {
    try {
        Logger.log('[YAML_LOAD] Fetching page list...');
        const listResp = await fetch(YAML_API + '/pages');
        const data = await listResp.json();
        const files = data.files || [];

        // Fetch p4-panel.yaml to resolve substitutions
        var subs = {};
        try {
            var p4Resp = await fetch(YAML_API + '/p4-panel');
            var p4Text = await p4Resp.text();
            // Parse color substitutions: key: "0xRRGGBB"
            var subRe = /^\s+(\w+):\s*"(0x[0-9A-Fa-f]+)"/gm;
            var m;
            while ((m = subRe.exec(p4Text)) !== null) {
                subs[m[1]] = m[2];
            }
            Logger.log('[YAML_LOAD] Resolved ' + Object.keys(subs).length + ' substitutions');
            setSubstitutions(subs);
        } catch(e) {
            Logger.log('[YAML_LOAD] Could not fetch p4-panel.yaml, proceeding without subs');
        }

        // Sort by predefined order
        const sorted = PAGE_ID_ORDER.filter(function(id) { return files.includes(id + '.yaml'); });
        if (sorted.length === 0) {
            alert('No page_*.yaml files found in project');
            return;
        }

        const pages = [];
        for (var i = 0; i < sorted.length; i++) {
            var pageId = sorted[i];
            var yamlResp = await fetch(YAML_API + '/page?file=' + pageId + '.yaml');
            var yamlText = await yamlResp.text();

            var parsed = parseSnippetYamlOffline(yamlText);
            if (parsed && parsed.pages && parsed.pages.length > 0) {
                var pg = parsed.pages[0];
                pg.id = pageId;
                pg.name = PAGE_NAME_MAP[pageId] || pageId;
                pages.push(pg);
                Logger.log('[YAML_LOAD] Loaded ' + pageId + ': ' + (pg.widgets ? pg.widgets.length : 0) + ' widgets');
            }
        }

        if (pages.length > 0) {
            loadLayoutIntoState({ pages: pages, deviceModel: 'waveshare_esp32_p4_86_panel' });
            Logger.log('[YAML_LOAD] ' + pages.length + ' pages loaded');
        }
    } catch (err) {
        Logger.error('[YAML_LOAD] Error:', err);
        alert('Failed to load YAML project: ' + err.message);
    }
}

/**
 * Save current Designer pages back as ESPHome YAML project files.
 */
export async function saveYamlProject() {
    try {
        var payload = AppState.getPagesPayload();
        var pages = payload.pages || [];
        var saved = 0;

        for (var i = 0; i < pages.length; i++) {
            var page = pages[i];
            var pageId = page.id;
            if (PAGE_ID_ORDER.indexOf(pageId) === -1) continue;

            // Generate minimal ESPHome YAML snippet
            var lines = [];
            lines.push('# ' + new Array(76).join('='));
            lines.push('# ' + (PAGE_NAME_MAP[pageId] || pageId));
            lines.push('# ' + new Array(76).join('='));
            lines.push('');
            lines.push('lvgl:');
            lines.push('  pages:');
            lines.push('    - id: ' + pageId);
            if (page.bg_color) lines.push('      bg_color: ' + page.bg_color);
            lines.push('      pad_all: 0');
            if (page.scrollable) lines.push('      scrollable: true');
            lines.push('      widgets:');
            lines.push('');

            var resp = await fetch(YAML_API + '/page', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    file: pageId + '.yaml',
                    content: lines.join('\n')
                })
            });

            if (resp.ok) saved++;
            Logger.log('[YAML_SAVE] ' + pageId + ': ' + (resp.ok ? 'OK' : 'FAIL'));
        }

        if (saved > 0) {
            Logger.log('[YAML_SAVE] ' + saved + ' pages saved');
        } else {
            alert('No pages saved. Save YAML export is primitive. Use "Export YAML" for full output.');
        }
    } catch (err) {
        Logger.error('[YAML_SAVE] Error:', err);
        alert('Save failed: ' + err.message);
    }
}

/**
 * Saves the current layout state to a local JSON file.
 */
export function saveLayoutToFile() {
    // AppState is now imported
    const payload = AppState.getPagesPayload();
    const jsonStr = JSON.stringify(payload, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `reterminal_layout_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Loads a layout from a local JSON file.
 * @param {File} file - The file object selected by the user.
 */
export function loadLayoutFromFile(file) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const target = /** @type {FileReader|null} */ (e.target);
            const content = target ? target.result : null;
            if (typeof content !== 'string') {
                throw new Error('Invalid file content');
            }
            const layout = JSON.parse(content);
            loadLayoutIntoState(layout);
        } catch (err) {
            Logger.error("Failed to parse layout file:", err);
            alert("Error parsing layout file. Please ensure it is a valid JSON file.");
        }
    };
    reader.readAsText(file);
}

/**
 * Triggered when the hidden file input changes.
 * @param {Event} event 
 */
export function handleFileSelect(event) {
    const target = /** @type {HTMLInputElement|null} */ (event.target);
    const file = target?.files ? target.files[0] : null;
    if (file) {
        loadLayoutFromFile(file);
    }
    // Reset input so the same file can be selected again if needed
    if (target) target.value = '';
}
