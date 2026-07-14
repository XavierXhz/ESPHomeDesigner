import { AppState } from '../../core/state';

export {
    addPageSelectorControl as addPageSelector,
    addDropShadowButtonControl as addDropShadowButton,
    addSectionLabelControl as addSectionLabel
} from './property_controls_compound_helpers.js';
export {
    addIconInputControl as addIconInput,
    addLabeledInputWithIconPickerControl as addLabeledInputWithIconPicker,
    addLabeledInputWithDataListControl as addLabeledInputWithDataList
} from './property_controls_picker_helpers.js';

export function addCommonLVGLProperties(controls, widget, props) {
    const updateProp = (key, value) => {
        const newProps = { ...widget.props, [key]: value };
        AppState.updateWidget(widget.id, { props: newProps });
    };

    controls.panel.createSection("通用 LVGL", false);

    const flagContainer = document.createElement("div");
    flagContainer.style.display = "grid";
    flagContainer.style.gridTemplateColumns = "1fr 1fr";
    flagContainer.style.gap = "4px";

    controls.getContainer().appendChild(flagContainer);

    const addFlag = (label, key, def = false) => {
        const wrap = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = props[key] !== undefined ? props[key] : def;
        checkbox.addEventListener("change", () => updateProp(key, checkbox.checked));
        const lbl = document.createElement("span");
        lbl.textContent = " " + label;
        lbl.style.fontSize = "10px";
        wrap.appendChild(checkbox);
        wrap.appendChild(lbl);
        flagContainer.appendChild(wrap);
    };

    addFlag("隐藏", "hidden", false);
    addFlag("可点击", "clickable", true);
    addFlag("可勾选", "checkable", false);
    addFlag("可滚动", "scrollable", true);
    addFlag("浮动", "floating", false);
    addFlag("忽略布局", "ignore_layout", false);

    controls.addSelect("滚动条模式", props.scrollbar_mode || "自动", ["自动", "开启", "关闭", "活动"], (value) => updateProp("scrollbar_mode", value));
    controls.panel.endSection();
}

export function addVisibilityConditions(controls, widget) {
    widget.condition_entity = widget.condition_entity || "";
    widget.condition_operator = widget.condition_operator || "==";
    widget.condition_state = widget.condition_state || "";
    widget.condition_min = widget.condition_min || "";
    widget.condition_max = widget.condition_max || "";

    const helpWrap = document.createElement("div");
    helpWrap.className = "field";
    helpWrap.style.fontSize = "9px";
    helpWrap.style.color = "#9499a6";
    helpWrap.style.marginBottom = "6px";
    helpWrap.innerHTML = "根据实体状态显示/隐藏此组件。";
    controls.getContainer().appendChild(helpWrap);

    controls.addLabeledInputWithPicker("条件实体", "text", widget.condition_entity, (value) => {
        AppState.updateWidget(widget.id, { condition_entity: value });
    }, widget);

    const operators = ["==", "!=", "<", ">", "<=", ">="];
    controls.addSelect("运算符", widget.condition_operator, operators, (value) => {
        AppState.updateWidget(widget.id, { condition_operator: value });
    });

    const commonStates = ["on", "off", "open", "closed", "true", "false", "home", "not_home", "locked", "unlocked", "active", "inactive", "detected", "clear", "occupied"];
    controls.addLabeledInputWithDataList("条件状态", "text", widget.condition_state, commonStates, (value) => {
        AppState.updateWidget(widget.id, { condition_state: value });
    });

    controls.addLabeledInput("最小值(范围)", "text", widget.condition_min, (value) => {
        AppState.updateWidget(widget.id, { condition_min: value });
    });

    controls.addLabeledInput("最大值(范围)", "text", widget.condition_max, (value) => {
        AppState.updateWidget(widget.id, { condition_max: value });
    });

    const clearWrap = document.createElement("div");
    clearWrap.className = "field";
    clearWrap.style.marginTop = "8px";

    const clearBtn = document.createElement("button");
    clearBtn.className = "btn btn-secondary btn-full";
    clearBtn.textContent = "清除条件";
    clearBtn.type = "button";
    clearBtn.addEventListener("click", () => {
        AppState.updateWidget(widget.id, {
            condition_entity: "",
            condition_operator: "==",
            condition_state: "",
            condition_min: "",
            condition_max: ""
        });
    });

    clearWrap.appendChild(clearBtn);
    controls.getContainer().appendChild(clearWrap);
}

export function addLVGLStateTriggerControls(controls, widget) {
    const props = widget.props || {};
    const updateProp = (key, value) => {
        const newProps = { ...widget.props, [key]: value };
        AppState.updateWidget(widget.id, { props: newProps });
    };

    controls.panel.createSection("状态触发", false);

    const helpWrap = document.createElement("div");
    helpWrap.className = "field";
    helpWrap.style.fontSize = "9px";
    helpWrap.style.color = "#9499a6";
    helpWrap.style.marginBottom = "6px";
    helpWrap.innerHTML = "Add a supported Home Assistant trigger that round-trips with the canvas. Paste the YAML actions exactly as they belong under <code>then:</code>.";
    controls.getContainer().appendChild(helpWrap);

    controls.addLabeledInputWithPicker("触发实体", "text", props.state_trigger_entity || "", (value) => {
        updateProp("state_trigger_entity", value);
    }, widget);

    controls.addSelect("触发类型", props.state_trigger_mode || "auto", [
        { value: "auto", label: "自动(二进制用 on_state)" },
        { value: "on_state", label: "状态变化(二进制)" },
        { value: "on_value", label: "数值变化" }
    ], (value) => {
        updateProp("state_trigger_mode", value);
    });

    controls.addLabeledInput("动作 YAML", "textarea", props.state_trigger_actions || "", (value) => {
        updateProp("state_trigger_actions", value);
    });

    const clearWrap = document.createElement("div");
    clearWrap.className = "field";
    clearWrap.style.marginTop = "8px";

    const clearBtn = document.createElement("button");
    clearBtn.className = "btn btn-secondary btn-full";
    clearBtn.textContent = "清除状态触发";
    clearBtn.type = "button";
    clearBtn.addEventListener("click", () => {
        AppState.updateWidget(widget.id, {
            props: {
                ...widget.props,
                state_trigger_entity: "",
                state_trigger_mode: "auto",
                state_trigger_actions: ""
            }
        });
    });

    clearWrap.appendChild(clearBtn);
    controls.getContainer().appendChild(clearWrap);
    controls.panel.endSection();
}