/**
 * ESPHome Substitution Resolver
 * Resolves ${key} → value patterns in YAML widget properties.
 * Populated from p4-panel.yaml substitutions block before loading pages.
 */

/** @type {Record<string, string>} */
let _subs = {};

/**
 * Set the current substitution map.
 * @param {Record<string, string>} subs
 */
export function setSubstitutions(subs) {
    _subs = subs || {};
}

/**
 * Resolve a single value: if it contains ${key}, replace with value.
 * @param {*} val
 * @returns {*}
 */
export function resolveValue(val) {
    if (typeof val !== 'string') return val;
    var result = val;
    var keys = Object.keys(_subs);
    for (var i = 0; i < keys.length; i++) {
        var pattern = '${' + keys[i] + '}';
        if (result.indexOf(pattern) !== -1) {
            result = result.split(pattern).join(_subs[keys[i]]);
        }
    }
    return result;
}

/**
 * Walk an object and resolve all string values in-place.
 * @param {Record<string, any>} obj
 */
export function resolveProps(obj) {
    if (!obj || typeof obj !== 'object') return;
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var v = obj[k];
        if (typeof v === 'string') {
            obj[k] = resolveValue(v);
        } else if (Array.isArray(v)) {
            for (var j = 0; j < v.length; j++) {
                resolveProps(v[j]);
            }
        } else if (v && typeof v === 'object') {
            resolveProps(v);
        }
    }
}

/**
 * Map a custom ESPHome font name to a Designer-compatible font reference.
 * Extracts size from montserrat_96 → font_roboto_400_20 (keeps 20 as default).
 * @param {string} fontName
 * @returns {string}
 */
export function mapFontName(fontName) {
    if (!fontName) return 'font_roboto_400_20';
    // Extract numeric size from montserrat_96, noto_sc_28, etc.
    var m = fontName.match(/(\d+)/);
    var size = m ? parseInt(m[1], 10) : 20;
    // Clamp to reasonable range
    if (size > 96) size = 96;
    if (size < 10) size = 10;
    // Map to designer font with appropriate size
    if (size <= 14) return 'font_roboto_400_14';
    return 'font_roboto_400_20';
}
