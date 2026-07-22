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
 * Map a custom ESPHome font name to a Designer-compatible font reference
 * AND extract font size from the name (montserrat_96 → size 96).
 * Returns an object { fontName, fontSize } so the caller can apply both.
 * @param {string} fontName
 * @returns {{ fontName: string, fontSize: number }}
 */
export function mapFontName(fontName) {
    // Extract numeric size from montserrat_96, noto_sc_28, mdi_weather, etc.
    var m = fontName ? fontName.match(/(\d+)/) : null;
    var size = m ? parseInt(m[1], 10) : 20;
    // Clamp to reasonable range
    if (size > 130) size = 130;
    if (size < 10) size = 10;
    // Map to designer-compatible font reference
    var mappedName = size <= 14 ? 'font_roboto_400_14' : 'font_roboto_400_20';
    return { fontName: mappedName, fontSize: size };
}
