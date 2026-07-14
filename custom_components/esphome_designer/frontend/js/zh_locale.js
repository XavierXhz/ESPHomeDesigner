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

    // ---- 属性面板 ----
    'SNAP': '吸附',
    'LOCK': '锁定',
    'Select a widget to edit properties': '选择一个组件以编辑属性',
    'Select a widget to begin editing': '选择一个组件开始编辑',
    'Properties': '属性',
    'Hierarchy': '层级',
    'No widgets on this page': '此页面暂无组件',
    'Rename:': '重命名：',

    // ---- 组件库分类 ----
    'Core Widgets': '核心组件',
    'Shapes': '形状',
    'OpenDisplay / OEPL': 'OpenDisplay / OEPL',
    'Advanced': '高级',
    'Astronomy': '天文',
    'Inputs': '输入',
    'On Device Sensors': '板载传感器',
    'LVGL Components': 'LVGL 组件',

    // ---- 组件库 ----
    'Floating text': '浮动文本',
    'Sensor text': '传感器文本',
    'Date && Time': '日期时间',
    'Date & Time': '日期时间',
    'Date and Time': '日期时间',
    'MDI Icon': 'MDI 图标',
    'MDI icon': 'MDI 图标',
    'Weather icon': '天气图标',
    'Image': '图片',
    'Puppet image': '远程图片',
    'Label': '标签',
    'Button': '按钮',
    'Shape': '形状',
    'Line': '线',
    'Rectangle': '矩形',
    'Rounded Rect': '圆角矩形',
    'Circle': '圆形',
    'Arc': '弧形',
    'QR Code': '二维码',
    'Canvas': '画布',

    // ---- 其他组件名称 ----
    'Multiline Text': '多行文本',
    'Rectangle Pattern': '矩形图案',
    'Polygon': '多边形',
    'Ellipse': '椭圆',
    'Icon Sequence': '图标序列',
    'Sensor Plot': '传感器曲线',
    'Debug Grid': '调试网格',
    'Graph / Chart': '图表',
    'Progress bar': '进度条',
    'Calendar': '日历',
    'Weather Forecast': '天气预报',
    'Quote / RSS': '引用/RSS',
    'Energy Flow': '能量流',
    'Moon phase': '月相',
    'Sunrise / Sunset': '日出/日落',
    'Sunrise/Sunset': '日出/日落',
    'Touch Area': '触摸区域',
    'Next Page': '下一页',
    'Prev Page': '上一页',
    'Reload Page': '刷新页面',
    'Navigation Bar': '导航栏',
    'Battery': '电池',
    'WiFi Signal': 'WiFi 信号',
    'Temperature': '温度',
    'Humidity': '湿度',
    'On-Board Sensor Bar': '板载传感器条',
    'Base Object': '基础对象',
    'LVGL Line': 'LVGL 线',
    'Switch': '开关',
    'Checkbox': '复选框',
    'Slider': '滑块',
    'Bar': '进度条',
    'Meter': '仪表',
    'Spinner': '加载圈',
    'LED': 'LED指示灯',
    'Chart': '图表',
    'Dropdown': '下拉菜单',
    'Roller': '滚轮选择',
    'Spinbox': '数字旋钮',
    'Textarea': '文本区域',
    'Keyboard': '键盘',
    'Btn Matrix': '按钮矩阵',
    'Tabview': '标签视图',
    'Tileview': '磁贴视图',
    'Nav Bar (Template)': '导航栏(模板)',

    // ---- 组件标签 ----
    'Text': '文本',
    'Entity': '实体',
    'Time': '时间',
    'Icon': '图标',
    'Media': '媒体',
    'Remote': '远程',
    'ODP': 'ODP',
    'Debug': '调试',
    'Data': '数据',
    'Tools': '工具',
    'Events': '事件',
    'Forecast': '预报',
    'Info': '信息',
    'Template': '模板',
    'Moon': '月相',
    'Sun': '太阳',
    'Input': '输入',
    'Nav': '导航',
    'Sensor': '传感器',
    'SHT4x': '温湿度',
    'New': '新',

    // ---- 属性控件 ----
    'Mixed Values': '混合值',
    'Mixed Colors': '混合颜色',
    'Mixed': '混合',
    'Pick entity or type mqtt:topic...': '选择实体或输入 mqtt:主题...',
    'Start typing or browse...': '输入或浏览...',
    'MDI Hex (Fxxxx)': 'MDI 十六进制 (Fxxxx)',
    '-- Quick visual picker --': '-- 快速选取器 --',
    'Quick visual picker': '快速选取器',
    '(Mixed)': '(混合)',
// --- duplicate key 'Mixed' removed (见上文) ---

    // ---- 通用 LVGL 属性 ----
    'Common LVGL': '通用 LVGL',
    'Hidden': '隐藏',
    'Clickable': '可点击',
    'Checkable': '可勾选',
    'Scrollable': '可滚动',
    'Floating': '浮动',
    'Ignore Layout': '忽略布局',
    'Scrollbar Mode': '滚动条模式',
    'AUTO': '自动',
    'ON': '开启',
    'OFF': '关闭',
    'ACTIVE': '活动',

    // ---- 条件/触发属性 ----
    'Condition Entity': '条件实体',
    'Operator': '运算符',
    'Condition State': '条件状态',
    'Min Value (Range)': '最小值(范围)',
    'Max Value (Range)': '最大值(范围)',
    'Clear Condition': '清除条件',
    'State Trigger': '状态触发',
    'Trigger Entity': '触发实体',
    'Trigger Type': '触发类型',
    'Actions YAML': '动作 YAML',
    'Clear State Trigger': '清除状态触发',
    'Auto (binary uses on_state)': '自动(二进制用 on_state)',
    'State Change (binary)': '状态变化(二进制)',
    'Value Change': '数值变化',
    "Show/hide this widget based on an entity's state.": '根据实体状态显示/隐藏此组件。',
    "Add a supported Home Assistant trigger that round-trips with the canvas. Paste the YAML actions exactly as they belong under <code>then:</code>.": '添加支持 Home Assistant 的触发器，与画布双向同步。将 YAML 动作粘贴到 <code>then:</code> 下方。',

    // ---- 条件状态值 ----
    'on': '开',
    'off': '关',
    'open': '开',
    'closed': '关',
    'true': '真',
    'false': '假',
    'home': '在家',
    'not_home': '离家',
    'locked': '已锁定',
    'unlocked': '未锁定',
    'active': '活动',
    'inactive': '非活动',
    'detected': '已检测',
    'clear': '正常',
    'occupied': '有人',

    // ---- 兼容性消息 ----
    'Widget not compatible with LVGL mode': '组件不兼容 LVGL 模式',
    'Widget not compatible with LVGL': '组件不兼容 LVGL',

    // ---- 设备设置 ----
    'Device Settings': '设备设置',
    'Editor Settings': '编辑器设置',
    'Select Device': '选择设备',
    'Hardware Profile': '硬件配置',
    'Display': '显示器',
    'Touchscreen': '触摸屏',
    'Resolution': '分辨率',
    'Orientation': '方向',
    'Device Name': '设备名称',
    'Rendering Mode': '渲染模式',
    'Screen Orientation': '屏幕方向',
    'Dark Mode': '深色模式',
    'Apply Settings': '应用设置',

    // ---- 渲染模式 ----
    'Direct (Display Lambda)': '直接(显示 Lambda)',
    'LVGL (Recommended for LCD)': 'LVGL（推荐用于 LCD）',
    'C/C++ Drawing Code': 'C/C++ 绘图代码',
    'OpenEpaperLink JSON (Drawing Protocol)': 'OpenEpaperLink JSON (绘图协议)',
    'OpenDisplay JSON (ODP)': 'OpenDisplay JSON (ODP)',

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
// --- duplicate key 'Info' removed (见上文) ---
    'Success': '成功',
    'Failed': '失败',

    // ---- AI ----
    'Generate Layout with AI': 'AI 生成布局',
    'Describe the layout you want...': '描述你想要的布局...',
    'AI Assistant': 'AI 助手',

    // ---- 生成器 ----
    'TARGET DEVICE': '目标设备',
    'Output Format': '输出格式',

    // ---- 设备设置扩展 ----
    'Custom Hardware Pinout': '自定义硬件引脚',
    'Chip Type': '芯片类型',
    'Tech': '技术',
    'Resolution Preset': '分辨率预设',
// --- duplicate key 'Shape' removed (见上文) ---
    'Manual Resolution': '手动分辨率',
    'PSRAM': 'PSRAM',
    'Anti-burn (LCD)': '防烧屏(LCD)',
    'Display Interface': '显示接口',
    'Display Model': '显示型号',
    'Backlight & I2C': '背光和 I2C',
    'Backlight': '背光',
    'Touch Controller': '触摸控制器',
    'None': '无',
    'Power / Battery': '电源/电池',
    'Battery ADC': '电池 ADC',
    'Battery Enable': '电池使能',
    'Recipe Name': '配置名称',
    'Editing': '编辑中',
    'Save Profile': '保存配置',
    'Profile Name': '配置名称',
    'Protocol Hardware Specs': '协议硬件参数',
    'Color Mode': '颜色模式',
    'Inverted Colors (E-Paper)': '反色(电子纸)',
    'Power & Refresh Strategy': '电源和刷新策略',
    'Global Refresh Interval': '全局刷新间隔',
    'seconds': '秒',
    'sec': '秒',
    'Default time between updates. Can be overridden on individual pages.': '默认更新间隔。可在各个页面中覆盖。',
    'E-Paper Options': '电子纸选项',
    'LCD / OLED Options': 'LCD / OLED 选项',
    'Full Power (Always On)': '全功率(常开)',
    'Device stays connected to Wi-Fi. Fast response, but high battery drain.': '设备保持 WiFi 连接。响应快，但耗电。',
    'Eco (Scheduled Night Sleep)': '节能(定时夜间休眠)',
    'Stops refreshing during these hours to save energy.': '在指定时间段停止刷新以节省电量。',
    'Daily Scheduled Refresh': '每日定时刷新',
    'Wakes up once per day at a specific time.': '每天在指定时间唤醒一次。',
    'Manual Refresh Only': '仅手动刷新',
    'Never updates automatically. Only refreshes when a button is pressed.': '从不自动更新。仅在按下按钮时刷新。',
    'Ultra Eco (Deep Sleep)': '超级节能(深度睡眠)',
    'Shuts down completely between updates. Best for battery life.': '更新之间完全关机。最省电。',
    'Always On (Full Brightness)': '常亮(全亮度)',
    'Eco (Backlight Off Schedule)': '节能(定时关背光)',
    'Turns off backlight during sleep hours (recommended for LCD).': '在睡眠时段关闭背光(推荐用于 LCD)。',
    'Eco (Dim after timeout)': '节能(超时变暗)',
    'Turns off backlight and pauses LVGL after period of inactivity. Resume on touch.': '一段时间无操作后关闭背光并暂停 LVGL。触摸恢复。',
    'Eco (Halt Loop)': '节能(暂停循环)',
    'Stops update cycle but leaves screen powered.': '停止更新循环但保持屏幕供电。',
    'Power down between updates.': '更新之间断电。',
    'Dim after': '变暗于',
    'Sleep from': '休眠起始',
    'to': '至',
    'Refresh at': '刷新时间',
    'Update every': '更新间隔',
    'Deep Sleep Options': '深度睡眠选项',
    'HA Stay-Awake Switch': 'HA 保持唤醒开关',
    'Adds a Home Assistant switch to prevent deep sleep remotely.': '添加一个 Home Assistant 开关以远程阻止深度睡眠。',
    'Home Assistant entity ID': 'Home Assistant 实体 ID',
    'Firmware Flash Guard': '固件刷写保护',
    'Keeps device awake 90s after new firmware to prevent rollback.': '新固件刷入后保持设备唤醒 90 秒以防止回滚。',
    'Silent Hours (No Refresh Window)': '静默时段(禁止刷新)',
    'Prevent all display updates during this time window. Used to avoid night-time ghosts/noise.': '在此时间窗口内禁止所有显示更新。用于避免夜间残影/噪声。',
    'Disable updates from': '禁用更新从',
    'Page Auto-Cycling': '页面自动切换',
    'Automatically cycle through pages on a timer.': '按定时器自动切换页面。',
    'Enable Automatic Page Cycling': '启用自动页面切换',
    'Cycle every': '切换间隔',

    // ---- 编辑器设置 ----
    'Editor Preferences': '编辑器偏好',
    'View & Theme': '视图和主题',
    'Show Grid': '显示网格',
    'Enable Snapping': '启用吸附',
    'Grid Opacity': '网格透明度',
    'Interface Theme': '界面主题',
    'Use Light Mode interface': '使用浅色模式',
    'Saving': '保存',
    'Automatically save layout changes': '自动保存布局更改',
    'Font Settings': '字体设置',
    'Global Glyphsets': '全局字符集',
    'Select glyphsets to include language specific characters (like å, ö, ä) in the generated YAML for all fonts.': '选择字符集以在所有字体的生成 YAML 中包含特定语言字符。',
    'Latin Kernel': '拉丁核心',
    'Latin Core': '拉丁扩展',
    'Arabic Core': '阿拉伯语',
    'Cyrillic': '西里尔字母',
    'Greek': '希腊字母',
    'Latin African': '拉丁非洲',
    'Latin PriAfrican': '拉丁原始非洲',
    'Vietnamese': '越南语',
    'Extended Latin Glyphs': '扩展拉丁字符',
    'Home Assistant': 'Home Assistant',
    'Resources': '资源',
    'Refresh Entity List': '刷新实体列表',
    'Connection Settings': '连接设置',
    'Configure this if you are using the GitHub-hosted version or an external URL.': '如果你使用的是 GitHub 托管版本或外部 URL，请配置此项。',
    'Connection Tip': '连接提示',
    'If requests are blocked, you may need to add': '如果请求被阻止，你可能需要添加',
// --- duplicate key 'to' removed (见上文) ---
    'and restart HA.': '并重启 Home Assistant。',
    'Base URL': '基础 URL',
    'Long-Lived Access Token': '长期访问令牌',
    'Test Connection': '测试连接',
    'AI Integration (LLM)': 'AI 集成(LLM)',
    'Configure Gemini, OpenAI or OpenRouter to use natural language prompts.': '配置 Gemini、OpenAI 或 OpenRouter 以使用自然语言提示。',
    'Provider': '提供商',
    'Google Gemini': 'Google Gemini',
    'OpenAI': 'OpenAI',
    'OpenRouter': 'OpenRouter',
    'Gemini API Key': 'Gemini API 密钥',
    'OpenAI API Key': 'OpenAI API 密钥',
    'OpenRouter API Key': 'OpenRouter API 密钥',
    'Model Filter (e.g. "free", "flash", "gpt-4")': '模型过滤器(如 "free"、"flash"、"gpt-4")',
    'Test & Load Models': '测试并加载模型',
    'Selected Model': '已选模型',
    'Keyboard Shortcuts': '键盘快捷键',
// --- duplicate key 'Undo' removed (见上文) ---
// --- duplicate key 'Redo' removed (见上文) ---
// --- duplicate key 'Copy' removed (见上文) ---
// --- duplicate key 'Paste' removed (见上文) ---
// --- duplicate key 'Delete' removed (见上文) ---
    'Lock/Unlock': '锁定/解锁',
// --- duplicate key 'Search' removed (见上文) ---
    'Debug Mode': '调试模式',
    'Design Grid': '设计网格',
    'Rulers': '标尺',
    'Zoom Reset': '重置缩放',
    'Snap Off': '临时关闭吸附',
    'Distances': '显示距离',
    'Group': '分组',
    'Ungroup': '取消分组',
    'Done': '完成',

    // ---- AI 设计助手 ----
    'AI Design Assistant': 'AI 设计助手',
    'Configuration Required': '需要配置',
    'An API provider and key must be configured in': '需要在',
    'before using the AI Assistant.': '中配置 API 提供商和密钥后才能使用 AI 助手。',
    'Open Editor Settings': '打开编辑器设置',
    'Describe what you want to change. Example: "Move the selected widget 50px right" or "Make a nice weather layout with 4 days forecast".': '描述你想要更改的内容。例如："将选中组件向右移动 50px"或"创建一个带 4 天预报的天气布局"。',
    'I want to...': '我想...',
    'PREVIEW CHANGES': '预览更改',
// --- duplicate key 'Generate' removed (见上文) ---
    'Apply': '应用',

    // ---- 其他模态框 ----
    'Save 硬件配置': '保存硬件配置',
    'Give your custom hardware configuration a unique name. It will be saved as a reusable recipe.': '为你的自定义硬件配置指定唯一名称。它将保存为可重用的配方。',

    // ---- 页面设置 ----
    'Page Settings': '页面设置',
    'Page Name': '页面名称',
    'Refresh Mode': '刷新模式',
    'Refresh every': '间隔(秒)',
    'Wake at (HH:MM)': '唤醒时间(HH:MM)',
    'Visible Window': '可见时段',
    'Start (optional)': '开始(可选)',
    'End (optional)': '结束(可选)',
    'Visual Style': '视觉风格',
    'Inherit Global': '继承全局',
    'Always Light': '始终浅色',
    'Always Dark': '始终深色',
    'Layout Mode (LVGL)': '布局模式(LVGL)',
    'Absolute Positioning': '绝对定位',
    'Grid Layout': '网格布局',
    'Grid Size (rows x cols)': '网格尺寸(行×列)',
    'Format: rows x cols, e.g. 2x3, 4x4': '格式：行×列，例如 2x3、4x4',
    'Apply Changes': '应用更改',

    // ---- 导入 ----
    'Import from YAML': '从 YAML 导入',
    'Paste ESPHome YAML here...': '在此粘贴 ESPHome YAML...',

    // ---- ESPHome YAML 面板 ----
    'Full YAML': '全部',
    'UI YAML': 'UI',
    'Lambda (C++)': 'λ',
    'OEPL Service': 'OEPL',
    'ODP Service': 'ODP',

    // ---- 属性面板区段标题 ----
    'Transform': '变换',
    'Pos X': '位置 X',
    'Pos Y': '位置 Y',
    'Visibility Conditions': '可见性条件',
    'Data Source': '数据源',
    'Format': '格式',
    'Appearance': '外观',
    'Dynamic Color': '动态颜色',
    'Border Style': '边框样式',
    'Weather Data': '天气数据',
    'Layout': '布局',
    'Typography': '排版',
    'RSS Source': 'RSS 源',
    'HA Integration': 'HA 集成',
    'Content': '内容',
    'Sensor Selection': '传感器选择',
    'Pill Appearance': '药丸外观',
    'Text & Icons': '文本和图标',
    'Range Settings': '范围设置',
    'Labels': '标签',
    'Design': '设计',
    'Icon Settings': '图标设置',
    'Rows': '行',

    // ---- 属性控件 ----
    'Previous (Automatic)': '上一页(自动)',
    'Next (Automatic)': '下一页(自动)',
    'Home / Dashboard': '首页/仪表盘',
    'Create Drop Shadow': '创建投影',

    // ---- 图标选取器 ----
    'Pick MDI Icon': '选择 MDI 图标',
    'Browse all entities': '浏览所有实体',
    'Open full icon browser': '打开完整图标浏览器',
    'Browse Pictogrammers MDI': '浏览 Pictogrammers MDI',

    // ---- 层级视图 ----
    'Toggle All Locks': '切换全部锁定',
    'Toggle All Visibility': '切换全部可见',
    'GROUPING': '分组',
    'LAYER ORDER': '层级顺序',
    'Front': '置顶',
    'Back': '置底',
    'Up': '上移',
    'Down': '下移',
    'Lock': '锁定',
    'Unlock': '解锁',
    'Toggle Visibility': '切换可见性',
    'Delete Widget': '删除组件',
    'Tip: Shift/Ctrl-click or drag an empty canvas area to multi-select.': '提示：按住 Shift/Ctrl 点击或拖拽空白画布区域可多选。',

    // ---- 径向菜单 ----
    'Duplicate': '复制',
    'Bring to Front': '置于顶层',
    'Send to Back': '置于底层',
    'Duplicate Widget': '复制组件',

    // ---- 高级生成 ----
    'Get full YAML from canvas': '从画布获取完整 YAML',
    'Canvas to C': '画布转 C 代码',
    'Copy HA YAML': '复制 HA YAML',

    // ---- 格式化选项 ----
    'Label: Value & Unit': '标签: 值和单位',
    'Label: Value Only': '标签: 仅值',
    'Label [newline] Value & Unit': '标签[换行]值和单位',
    'Label [newline] Value Only': '标签[换行]仅值',
    'Value & Unit': '值和单位',
    'Value Only': '仅值',
    'Daily Forecast': '每日预报',
    'Hourly Forecast': '逐时预报',
    'Fixed Hours': '固定小时',
    'Relative (e.g. +1h, +2h...)': '相对(如 +1h, +2h...)',
    'Daily': '每日',
    'Hourly': '逐时',

    // ---- 进度条相关 ----
    'Bar Mode': '条模式',
    'Bar Thickness': '条厚度',
    'Fill Color': '填充颜色',
    'normal': '标准',
    'symmetrical': '对称',
    'range': '范围',
    'horizontal': '水平',
    'vertical': '垂直',
    'LEFT': '左对齐',
    'CENTER': '居中',
    'RIGHT': '右对齐',

    // ---- 传感器文本 ----
    'Precision': '精度',
    'Prefix': '前缀',
    'Postfix': '后缀',
    'Unit (Manual helper)': '单位(手动)',
    'Hide default unit': '隐藏默认单位',
    'Opacity (%)': '不透明度(%)',
    'Label Size': '标签尺寸',
    'Value Size': '值尺寸',
    'Parse Color Tags': '解析颜色标签',
    'Truncate Overflow': '截断溢出',
    'Enable Dynamic Color': '启用动态颜色',
    'Color Low': '低值颜色',
    'Value Low': '低值',
    'Color High': '高值颜色',
    'Value High': '高值',
    'BPP / Antialias': 'BPP/抗锯齿',

    // ---- 实体属性 ----
    'Entity ID': '实体 ID',
    'Attribute (optional)': '属性(可选)',
    'Text Sensor (string value)': '文本传感器(字符串)',
    'Local / On-Device Sensor': '本地/板载传感器',
    'Secondary Entity ID': '次要实体 ID',
    'Secondary Attribute': '次要属性',
    'Title/Label': '标题/标签',
    'Display Format': '显示格式',
    'Font Weight': '字重',
    'Weight': '字重',
    'Italic': '斜体',
    'Font Family': '字体',
    'Font Size': '字体大小',
    'Font Size (px)': '字号(px)',
    'Text Align': '文本对齐',
    'Corner Radius': '圆角半径',
    'Corners': '圆角',
    'Border Width': '边框宽度',
    'Border Color': '边框颜色',
    // 'Background' 已在通用部分定义
    'Show Background Pill': '显示背景药丸',
    'Pill Color': '药丸颜色',
    'Foreground Color': '前景色',
    'Icon Size (px)': '图标尺寸(px)',
    'Icon Size': '图标大小',
    'Fit icon to frame': '图标适应边框',
    'Icon Color': '图标颜色',
    'Text Color': '文字颜色',

    // ---- 温度/湿度/电池 ----
    'Use Local WiFi': '使用本地 WiFi',
    'WiFi Entity': 'WiFi 实体',
    'WiFi Strength': 'WiFi 强度',
    'Use Local Temp': '使用本地温度',
    'Temp Entity': '温度实体',
    'Use Local Hum': '使用本地湿度',
    'Hum Entity': '湿度实体',
    // 'Humidity' 已在组件库部分定义
    'Battery Level': '电池电量',
    'Battery Entity': '电池实体',
    'Use Local Battery': '使用本地电池',
    'Temp Units': '温度单位',

    // ---- 天气相关 ----
    'Weather Entity': '天气实体',
    'Weather Entity ID': '天气实体 ID',
    'Entity Attribute': '实体属性',
    'Forecast Mode': '预报模式',
    'Day Language': '日期语言',
    'Hourly Mode': '逐时模式',
    'Hours Ahead': '未来小时数',
    'Hourly Slots (comma-sep)': '逐时槽(逗号分隔)',
    'Start Offset': '起始偏移',
    'Forecast Days': '预报天数',
    'Unit': '单位',
    'Temp Precision': '温度精度',
    'Layout Mode': '布局模式',
    'Show High/Low': '显示高/低温',
    'Weather Icon Size': '天气图标尺寸',
    'Day Name Size': '日期名称尺寸',
    'Temp Text Size': '温度文字尺寸',
    'Main Text Color': '主要文字颜色',

    // ---- 日历相关 ----
    'Calendar Sensor ID': '日历传感器 ID',
    'Source Calendars (CSV)': '日历来源(CSV)',
    'Prefix Length': '前缀长度',
    'Prefix Separator': '前缀分隔符',
    'Language': '语言',
    // 'Show Header' 已在编辑器设置中定义
    // 'Show Grid' 已在编辑器设置中定义
    'Show Events': '显示事件',
    'Group Events By Day': '按日分组事件',
    'Max Events': '最大事件数',
    'Date Size (Header)': '日期尺寸(标题)',
    'Day Size (Header)': '日尺寸(标题)',
    'Grid Text Size': '网格文字尺寸',
    'Event Text Size': '事件文字尺寸',
    'Header Date Weight': '标题日期字重',
    'Header Day Weight': '标题日字重',
    'Month Weight': '月份字重',
    'Grid Header Weight': '网格标题字重',
    'Dates Weight': '日期字重',
    'Events Weight': '事件字重',

    // ---- 日出日落 ----
    'Sunrise Entity': '日出实体',
    'Sunset Entity': '日落实体',
    'Fallback Text': '备用文本',
    'Show Sunrise': '显示日出',
    'Show Sunset': '显示日落',
    'Row Gap (px)': '行间距(px)',
    'Icon Gap (px)': '图标间距(px)',
    'Padding (px)': '内边距(px)',
    'Time Size (px)': '时间字号(px)',
    'Text and Icon Color': '文字和图标颜色',

    // ---- 月相 ----
    'Moon Entity': '月相实体',

    // ---- WiFi信号 ----
    'WiFi Signal Entity ID': 'WiFi 信号实体 ID',
    'Show dBm value': '显示 dBm 值',
    'dBm Font Size (px)': 'dBm 字号(px)',

    // ---- 进度条标签 ----
    'Display Title': '显示标题',
    'Title': '标题',
    'Display Percentage': '显示百分比',
    'Min Value': '最小值',
    'Max Value': '最大值',

    // ---- RSS ----
    'RSS Feed URL': 'RSS 订阅 URL',
    'Refresh Every': '刷新间隔',
    'Random Quote': '随机引用',
    'Number of Items': '项目数量',
    'HA Base URL': 'HA 基础 URL',
    'Show Author': '显示作者',
    'Quote Font Size': '引用字号',
    'Author Font Size': '作者字号',
    'Italic Quote': '斜体引用',
    'Alignment': '对齐',
    'Word Wrap': '自动换行',

    // ---- 传感器条 ----
    'Text Size': '文字尺寸',
    'Opacity (0 - 255)': '不透明度(0-255)',

    // ---- Minimap ----
    'Minimap': '小地图',
    'Toggle Minimap (M)': '小地图开关 (M)',
    'Rename': '重命名',

    // ---- 硬件配置 ----
// --- duplicate key 'Custom Hardware Pinout' removed (见上文) ---
// --- duplicate key 'Rectangle' removed (见上文) ---
    'Round': '圆角',
    'Refresh': '刷新',
    'Import Config': '导入配置',
    'Custom Config...': '自定义配置...',

    // ---- 布局管理 ----
    'Manage Layouts': '布局管理',
    'Layout Library': '布局库',
    'Save Current Layout': '保存当前布局',
    'Load Layout': '加载布局',
    'Overwrite': '覆盖',
    'Export Layout': '导出布局',
    'Import Layout from File': '从文件导入布局',
    'No saved layouts': '暂无保存的布局',
    'Are you sure you want to delete layout': '确认要删除布局',
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

    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = /** @type {HTMLElement} */ (node);
      // 替换 title 属性
      if (el.title && ZH[el.title]) {
        el.title = ZH[el.title];
      }
      // 替换 placeholder
      if (el.hasAttribute?.('placeholder')) {
        const ph = el.getAttribute('placeholder');
        if (ph && ZH[ph]) el.setAttribute('placeholder', ZH[ph]);
      }
      // 替换 select option 的文本
      if (el.tagName === 'OPTION' && el.textContent) {
        const txt = el.textContent.trim();
        if (ZH[txt]) {
          el.textContent = ZH[txt];
        }
      }
    }
  }

  function walkAndReplace(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ALL, null);
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
  // 覆盖 confirm/alert/prompt
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
  // 暴力轮询补丁 — 处理复杂动态内容
  // ============================================================
  function hardPatch() {
    // 1. 侧栏 WIDGETS 标题
    document.querySelectorAll('.sidebar-section-label span, .widget-category-header .category-name, .palette-header, [class*="palette"] h3').forEach(el => {
      const text = el.textContent.trim();
      if (ZH[text]) el.textContent = ZH[text];
    });

    // 2. 组件名称（widget palette items）
    document.querySelectorAll('[data-widget-type] .label, .widget-label, .palette-item-label, .widget-category-items .item .label').forEach(el => {
      const text = el.textContent.trim();
      if (ZH[text]) el.textContent = ZH[text];
    });

    // 3. 组件标签（tags）
    document.querySelectorAll('.widget-category-items .item .tag').forEach(el => {
      const text = el.textContent.trim();
      if (ZH[text]) el.textContent = ZH[text];
    });

    // 4. 属性面板 labels
    document.querySelectorAll('.properties-content .prop-label, #propertiesPanel .prop-label').forEach(el => {
      const text = el.textContent.trim();
      if (ZH[text]) el.textContent = ZH[text];
    });

    // 5. select 选项
    document.querySelectorAll('select.prop-input option, select option').forEach(el => {
      const text = el.textContent.trim();
      if (ZH[text]) el.textContent = ZH[text];
    });

    // 6. checkbox/radio label 文本
    document.querySelectorAll('label span, label').forEach(el => {
      if (el.children.length <= 1) { // 简单 label 才处理
        const text = el.textContent.trim();
        if (ZH[text] && text.length > 1) el.textContent = ZH[text];
      }
    });

    // 7. 页面标题/模态框标题
    document.querySelectorAll('.modal-header div:first-child, .modal-header > div').forEach(el => {
      const text = el.textContent.trim();
      if (ZH[text]) el.textContent = ZH[text];
    });

    // 8. 按钮文本
    document.querySelectorAll('button').forEach(el => {
      // 只处理纯文本按钮（没有嵌套图标的简单按钮）
      const text = el.textContent.trim();
      if (ZH[text] && !el.querySelector('svg, img, .mdi')) {
        el.textContent = ZH[text];
      }
    });

    // 9. 硬编码的侧栏文本
    const sidebarFix = {
      'Ready': '就绪',
      'Layout': '布局',
      'loading...': '加载中...',
      'Layout library': '布局库',
      'Save current layout': '保存当前布局',
      'Import layout from file': '从文件导入布局',
    };

    // 10. 画布中的 tooltip
    document.querySelectorAll('[title]').forEach(el => {
      const title = el.getAttribute('title');
      if (title && ZH[title]) {
        el.setAttribute('title', ZH[title]);
      }
    });

    // 11. 空状态文本
    document.querySelectorAll('.empty-state').forEach(el => {
      const text = el.textContent.trim();
      if (ZH[text]) el.textContent = ZH[text];
    });
  }

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
  const stages = [0, 500, 1500, 3000, 6000, 10000, 15000, 20000];
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

  // 额外硬补丁 - 多阶段执行
  setTimeout(hardPatch, 100);
  setTimeout(hardPatch, 500);
  setTimeout(hardPatch, 1500);
  setTimeout(hardPatch, 3000);
  setTimeout(hardPatch, 6000);
  setTimeout(hardPatch, 10000);
  setTimeout(hardPatch, 15000);
  setTimeout(hardPatch, 20000);

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

  // 尽早注入 CSS
  function injectFontCSSWithDelay() {
    if (document.head) {
      injectFontCSS();
    } else {
      setTimeout(injectFontCSS, 50);
    }
  }

  injectFontCSSWithDelay();

})();