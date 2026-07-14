/**
 * ESPHomeDesigner 中文汉化脚本
 * 运行时覆盖，不改源码。上游更新时不冲突。
 * 原理：DOM就绪后替换已知 UI 字符串 + MutationObserver 监控动态内容
 */
(function() {
  'use strict';

  // ============================================================
  // 翻译映射表
  // ============================================================
  const ZH = {
    // ---- 画布控件 ----
    'Toggle Grid (G)': '网格开关 (G)',
    'Toggle Debug Mode (D)': '调试模式 (D)',
    'Toggle Rulers (R)': '标尺开关 (R)',
    'Zoom Out': '缩小',
    'Reset View (Ctrl+0)': '重置视图 (Ctrl+0)',
    'Zoom to Fit All Pages': '适应所有页面',
    'Zoom In': '放大',
    'Loading...': '加载中...',
    'Toggle YAML Panel': 'YAML 面板',

    // ---- 页面操作 ----
    'Add Page After': '在后面添加页面',
    'Add Page': '添加页面',
    'Clear Current Page': '清空当前页面',
    'Clear Page': '清空页面',
    'Delete Page': '删除页面',
    'No pages yet': '暂无页面',
    'Page': '页面',

    // ---- 侧边栏 ----
    'PAGES': '页面',
    'WIDGETS': '组件',
    'LAYOUT': '布局',
    'Save Layout': '保存布局',
    'Import Layout': '导入布局',
    'Layout Manager': '布局管理',
    '+ Add page': '+ 添加页面',
    'Clear Current Page': '清空当前页面',

    // ---- 属性面板 ----
    'SNAP': '吸附',
    'LOCK': '锁定',
    'Select a widget to edit properties': '选择一个组件以编辑属性',
    'Select a widget to begin editing': '选择一个组件开始编辑',
    'Properties': '属性',
    'Hierarchy': '层级',
    'No widgets on this page': '此页面暂无组件',
    'Rename:': '重命名：',

    // ---- 组件库 ----
    'Floating text': '浮动文本',
    'Sensor text': '传感器文本',
    'Date && Time': '日期时间',
    'Date & Time': '日期时间',
    'Date and Time': '日期时间',
    'MDI Icon': 'MDI 图标',
    'Weather Icon': '天气图标',
    'Image': '图片',
    'Label': '标签',
    'Button': '按钮',
    'Shape': '形状',
    'Line': '线',
    'Rectangle': '矩形',
    'Circle': '圆形',
    'Arc': '弧形',
    'QR Code': '二维码',
    'Canvas': '画布',

    // ---- 设备设置 ----
    'Device Settings': '设备设置',
    'Editor Settings': '编辑器设置',
    'Select Device': '选择设备',
    'Hardware Profile': '硬件配置',
    'Display': '显示器',
    'Touchscreen': '触摸屏',
    'Resolution': '分辨率',
    'Orientation': '方向',

    // ---- 布局管理 ----
    'e.g. Living Room Display': '例如：客厅面板',
    'New Layout': '新建布局',
    'Layout Name': '布局名称',
    'Overwrite existing layout?': '覆盖已有布局？',
    'Layout saved': '布局已保存',
    'Layout loaded': '布局已加载',
    'Layout deleted': '布局已删除',
    'Layout imported': '布局已导入',
    'Layout exported': '布局已导出',

    // ---- 搜索 ----
    'Search widgets...': '搜索组件...',
    'Quick Search': '快速搜索',
    'No results': '无结果',

    // ---- 确认/提示 ----
    'Are you sure you want to clear all widgets from': '确认要清空',
    'This cannot be undone.': '此操作不可撤销。',
    'Are you sure you want to delete page': '确认要删除页面',
    'Yes, Delete': '确认删除',
    'Cancel': '取消',
    'OK': '确定',
    'Confirm': '确认',

    // ---- 属性控件 ----
    'Mixed Values': '混合值',
    'Mixed Colors': '混合颜色',
    'Mixed': '混合',
    'Pick entity or type mqtt:topic...': '选择实体或输入 mqtt:主题...',
    'Start typing or browse...': '输入或浏览...',
    'MDI Hex (Fxxxx)': 'MDI 十六进制 (Fxxxx)',
    '-- Quick visual picker --': '-- 快速选取器 --',
    'Quick visual picker': '快速选取器',

    // ---- 通用 ----
    'Generate': '生成',
    'Export': '导出',
    'Import': '导入',
    'Save': '保存',
    'Delete': '删除',
    'Clear': '清空',
    'Close': '关闭',
    'Copy': '复制',
    'Paste': '粘贴',
    'Undo': '撤销',
    'Redo': '重做',
    'Edit': '编辑',
    'Name': '名称',
    'Type': '类型',
    'Value': '值',
    'Width': '宽度',
    'Height': '高度',
    'Position': '位置',
    'Rotation': '旋转',
    'Opacity': '不透明度',
    'Visible': '可见',
    'Locked': '已锁定',
    'Background': '背景',
    'Color': '颜色',
    'Size': '大小',
    'Font': '字体',
    'Text': '文本',
    'Align': '对齐',
    'Padding': '内边距',
    'Margin': '外边距',
    'Radius': '圆角',
    'Border': '边框',
    'Shadow': '阴影',
    'Filter': '筛选',
    'Search': '搜索',
    'Loading': '加载中',
    'Error': '错误',
    'Warning': '警告',
    'Info': '信息',
    'Success': '成功',
    'Failed': '失败',

    // ---- AI ----
    'Generate Layout with AI': 'AI 生成布局',
    'Describe the layout you want...': '描述你想要的布局...',
    'AI Assistant': 'AI 助手',

    // ---- 生成器 ----
    'TARGET DEVICE': '目标设备',
  };

  // ============================================================
  // DOM 文本替换核心函数
  // ============================================================
  function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'SELECT', 'OPTION'].includes(parent.tagName)) return;
      
      let text = node.textContent;
      let changed = false;
      
      // 长优先：按 key 长度降序，避免短 key 误替换
      const keys = Object.keys(ZH).sort((a, b) => b.length - a.length);
      for (const en of keys) {
        if (text.includes(en)) {
          text = text.replaceAll(en, ZH[en]);
          changed = true;
        }
      }
      if (changed) node.textContent = text;
      return;
    }

    // 替换 title 属性
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = /** @type {HTMLElement} */ (node);
      if (el.title && ZH[el.title]) {
        el.title = ZH[el.title];
      }
      // 替换 placeholder
      if (el.hasAttribute?.('placeholder')) {
        const ph = el.getAttribute('placeholder');
        if (ph && ZH[ph]) el.setAttribute('placeholder', ZH[ph]);
      }
    }
  }

  function walkAndReplace(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ALL, null, false);
    let node;
    while ((node = walker.nextNode())) {
      replaceText(node);
    }
  }

  // ============================================================
  // MutationObserver — 监控动态添加的内容
  // ============================================================
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const added of m.addedNodes) {
        if (added.nodeType === Node.ELEMENT_NODE) {
          walkAndReplace(added);
        }
      }
      // 属性变化（title/placeholder 动态设置）
      if (m.type === 'attributes' && m.target) {
        replaceText(m.target);
      }
    }
  });

  // ============================================================
  // 覆盖 confirm/alert/prompt （关键：对话框按钮文字）
  // ============================================================
  const origConfirm = window.confirm;
  const origAlert = window.alert;
  const origPrompt = window.prompt;

  window.confirm = function(msg) {
    for (const [en, zh] of Object.entries(ZH)) {
      if (msg && msg.includes(en)) {
        msg = msg.replaceAll(en, zh);
      }
    }
    return origConfirm.call(window, msg);
  };

  window.alert = function(msg) {
    for (const [en, zh] of Object.entries(ZH)) {
      if (msg && msg.includes(en)) {
        msg = msg.replaceAll(en, zh);
      }
    }
    return origAlert.call(window, msg);
  };

  // ============================================================
  // 覆盖 showToast（如果已定义）
  // ============================================================
  const origDefineProp = Object.defineProperty;
  let patched = false;
  Object.defineProperty = function(obj, prop, desc) {
    if (prop === 'showToast' && typeof desc.value === 'function' && !patched) {
      patched = true;
      const origToast = desc.value;
      desc.value = function(message, type, duration) {
        for (const [en, zh] of Object.entries(ZH)) {
          if (message && message.includes(en)) {
            message = message.replaceAll(en, zh);
          }
        }
        return origToast.call(this, message, type, duration);
      };
    }
    return origDefineProp.call(Object, obj, prop, desc);
  };

  // ============================================================
  // 启动
  // ============================================================
  function boot() {
    walkAndReplace(document.body);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['title', 'placeholder', 'data-text'],
    });
  }

  // 多阶段启动，覆盖动态加载的内容
  const stages = [0, 500, 1500, 3000, 6000, 10000];
  for (const delay of stages) {
    if (delay === 0) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
      } else {
        boot();
      }
    } else {
      setTimeout(boot, delay);
    }
  }

  // 额外补丁：暴力轮询关键元素
  function hardPatch() {
    // 侧栏 WIDGETS 标题（经常动态插入）
    document.querySelectorAll('.sidebar-section-header, .palette-header, [class*="widget"] h3, [class*="palette"] h3').forEach(el => {
      if (el.textContent === 'WIDGETS') el.textContent = '组件';
    });
    // 组件名称（widget palette items）
    document.querySelectorAll('[data-widget-type] .item-label, .widget-label, .palette-item-label').forEach(el => {
      const text = el.textContent.trim();
      if (ZH[text]) el.textContent = ZH[text];
    });
  }

  setTimeout(hardPatch, 100);
  setTimeout(hardPatch, 1000);
  setTimeout(hardPatch, 3000);

  // ============================================================
  // 全局字体放大 CSS 覆写
  // ============================================================
  function injectFontCSS() {
    const style = document.createElement('style');
    style.textContent = `
      /* 基础字体放大 */
      body, .app-content, .main, .sidebar, .panel, .modal-content {
        font-size: 15px !important;
      }

      /* 侧边栏 */
      .sidebar .section-header,
      .sidebar-section-header,
      .palette-header,
      .sidebar h3,
      .sidebar h4 {
        font-size: 14px !important;
      }
      .sidebar .item-label,
      .sidebar .palette-item-label,
      .sidebar [class*="item"]:not([class*="icon"]) {
        font-size: 14px !important;
      }

      /* 页面列表 */
      .page-list .page-item,
      .page-list button {
        font-size: 14px !important;
      }

      /* 属性面板 */
      .properties-panel,
      #propertiesPanel,
      [class*="property"] label,
      .property-label,
      .prop-label,
      .section-title {
        font-size: 14px !important;
      }
      .properties-panel input,
      .properties-panel select,
      .properties-panel textarea,
      #propertiesPanel input,
      #propertiesPanel select,
      #propertiesPanel textarea {
        font-size: 14px !important;
      }

      /* 画布控制栏 */
      .canvas-controls,
      .canvas-controls button,
      .canvas-info,
      .zoom-actions button {
        font-size: 14px !important;
      }

      /* 顶部按钮 */
      .header-button,
      .topbar button,
      .app-header button,
      [id*="header"] button {
        font-size: 14px !important;
      }

      /* YAML 代码面板 */
      .code-panel,
      .code-panel pre,
      .code-panel code,
      #codePanel,
      #codePanel pre,
      #codePanel code {
        font-size: 14px !important;
      }

      /* 模态框 */
      .modal-body,
      .modal-content,
      .modal-header,
      .modal-footer {
        font-size: 15px !important;
      }
      .modal-body label,
      .modal-body input,
      .modal-body select,
      .modal-body textarea {
        font-size: 14px !important;
      }

      /* 布局管理 */
      .layout-manager,
      .layout-manager button,
      .layout-manager input,
      .layout-manager select {
        font-size: 14px !important;
      }

      /* Toast 消息 */
      .toast,
      [class*="toast"] {
        font-size: 14px !important;
      }

      /* 层级视图 */
      .hierarchy-view,
      .hierarchy-item,
      .hierarchy-view button {
        font-size: 14px !important;
      }

      /* 快捷搜索 */
      .quick-search,
      .quick-search input,
      .quick-search .result-item {
        font-size: 14px !important;
      }

      /* 下拉菜单 / 选择器 */
      .entity-picker,
      .entity-picker input,
      .entity-picker select,
      .entity-picker .option-item {
        font-size: 14px !important;
      }

      /* 图标选取器 */
      .icon-picker,
      .icon-picker .icon-item {
        font-size: 14px !important;
      }

      /* 设备设置模态框 */
      .device-settings,
      .device-settings label,
      .device-settings input,
      .device-settings select,
      .device-settings .option-label {
        font-size: 14px !important;
      }

      /* 编辑器设置 */
      .editor-settings,
      .editor-settings label,
      .editor-settings input,
      .editor-settings select {
        font-size: 14px !important;
      }
    `;
    document.head.appendChild(style);
  }

  // 尽早注入 CSS（用多个延迟覆盖不同加载阶段）
  function injectFontCSSWithDelay() {
    if (document.head) {
      injectFontCSS();
    } else {
      setTimeout(injectFontCSS, 50);
    }
  }

  injectFontCSSWithDelay();

})();
