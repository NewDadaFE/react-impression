- 新增 **Tag 组件** size 属性有效值：sm、md
- 新增 **Modal 组件** showClose 属性，新增 size 属性有效值：xs、md、xl，**ModalHeader 组件** addonAfter 属性
- 新增 **Flex 组件** justify 属性
- 新增 **Popconfirm 组件**
- 新增 **Trigger 组件**
- 变更 **Confirm 组件**样式调整；添加 title 属性，confirm 显示的区分文案和标题
- 变更 **Nav 组件**样式调整
- 新增 **Tabs 组件**、**TabPane 组件**，在 **Nav 组件** 基础上删除 stack 属性，新增 tabPosition 属性，支持自动折叠过多选项
- 新增 **Ico 组件** 支持 158 个图标

## 2.0.2

React Impression 2.0.2 新增了 Steps 组件，在 Card、Loading 等组件中添加了更丰富的属性，并修复了之前版本中的已知漏洞。详细变更情况如下：

### 新增组件

- 新增 **Steps、Step 组件**，横向步骤条，支持自定义节点内容，支持自定义节点图标，支持节点样式为 点状 和 序号状，支持鼠标悬停图标展示更多描述 [详情](https://newdadafe.github.io/react-impression/#steps)

### API 变更

- 新增 **Card 组件** outline 属性可选参数：border、shadow、none，默认为 shadow
- 新增 **Loading 组件** type 属性可选参数：circle
- 变更 **Navbar 组件** className 属性，支持自定义样式
- 变更 **Select 组件** filterMethod 属性，支持实时搜索
- 新增 **Timeline 组件** Title 属性，在使用大号尺寸时，使用该属性来自定义左侧内容

### 问题修复

- 修复 **Confirm 组件** 显示在 Modal 组件下方被覆盖的问题
- 修复 **Nav 组件** 不受控问题
- 修复 **NavItem 组件** 点击事件相应问题以及作为一级菜单的样式
- 修复 **Select 组件** selectOption 弹出方式
- 修复 **Select 组件** Table 下 Select 被遮挡问题
- 修复 **Select 组件** 搜索模式下显示的 icon
- 修复 **Sidebar 组件** 优化侧边栏滚动条
- 修复 **Table 组件** 修复 font-size 过小时，table header 的 border 消失问题
- 修复 **Table 组件** 带右边固定项时，table 过长时格式错乱问题
- 修复 **Table 组件** columns 不能动态更新问题
- 修复 **Upload 组件** 弹出两次选择文件弹窗的问题

## 2.0.1

React Impression 2.0.1 主要修复了之前版本中的已知漏洞。详细变更情况如下：

### 问题修复

- 修复 **Button 组件** 高度是小数导致浏览器解析有误差的问题
- 修复 **CheckboxGroup 组件** 嵌套使用时，Checkbox 的 indeterminate 状态下的样式
- 修复 **Datepicker 组件** 示例不显示的问题
- 修复 **Input 组件** 水平不对齐的问题
- 修复 **Input 组件** 日期类型不支持 size 属性的问题
- 修复 **Input 组件** 日期类型点击组件外其他区域不关闭的问题
- 修复 **NavLink 组件** 添加 NavLink 组件示例 [详情](https://newdadafe.github.io/react-impression/#nav)
- 修复 **Popover 组件** 在 Table 组件中被遮挡的问题
- 修复 **Select 组件** 中 selectOption 的内容不支持 number 类型的问题
- 修复 **Select 组件** 中 selectOption 不支持异步渲染的问题
- 修复 **Sidebar 组件** 嵌套 Collapse 组件、Nav、NavLink 组件时的样式
- 修复 **Sidebar 组件** 移除 perfect-scrollbar 的使用
- 修复 **Table 组件** 无 data 时提示暂无数据
- 修复 **Upload 组件** 完善组件的属性描述
- 修复 **Upload 组件** preview 模式下，改变组件尺寸后样式错乱的问题

## 2.0.0

React Impression 2.0.0 在最大限度向前兼容的前提下，对整体设计风格做了很大的改变。根据 1.x 版本的使用反馈情况，增强了 Modal 组件、Select 组件的功能，新增 Table 组件，并赋予 Table 组件更强大灵活的数据展示功能。同时还修复了已知漏洞。详细变更情况如下：

### 问题修复

- 修复 **Input 组件**clearable 为 true 时，点击清除输入框内容没有执行回调事件 onChange 的问题

### API 变更

- 废弃 **Breadcrumb 组件** separator 属性，不支持自定义分割标识
- 废弃 **Card 组件** noborder 属性
- 废弃 **Progress 组件** striped 属性，不支持斑马纹样式
- 废弃 **Nav 组件** type 属性可选参数：pill
- 废弃 **Pagination 组件** ellipsis 属性，自动显示省略号
- 新增 **CardHeader 组件** align 属性，可选参数：left，center，right
- 新增 **Checkbox 组件** indeterminate 属性，表示半选中状态
- 新增 **InlineSelect 组件** label 属性，可指定标签名内容
- 新增 **InlineSelect 组件** col 属性，可指定标签名占比，默认值为 1
- 新增 **Message 组件**API 参数列表 closable 值，支持手动关闭消息 [详情](https://newdadafe.github.io/react-impression/#message)
- 新增 **Pagination 组件** lastContent 属性、nextContent 属性，支持自定义翻页控制按钮内容
- 新增 **Popover 组件** trigger 属性，可选参数：click，hover [详情](https://newdadafe.github.io/react-impression/#popover)
- 新增 **Progress 组件** strokeWidth 属性，支持自定义组件高度
- 新增 **Progress 组件** showInfo 属性，可选是否在右侧展示进度信息
- 新增 **Progress 组件** formatter 属性，自定义进度信息显示规则
- 扩展 **Datepicker 组件** type 属性，增加可选参数：year，支持选择年份
- 变更 **Tag 组件** theme 属性默认值为：primary
- 变更 **Upload** 选择文件后显示文件名称

### 组件重构

- 重构 **Navbar 组件**，不兼容 1.x 版本 [详情](https://newdadafe.github.io/react-impression/#navbar)
- 重构 **Modal 组件** [详情](https://newdadafe.github.io/react-impression/#modal)
  - 新增 isOpen 属性，控制组件的显隐状态
  - 新增 scrollInside 属性，可选组件内容滚动方式
  - 新增 closeOnEsc 属性，支持键盘 esc 键关闭组件
  - 新增 closeOnOutsideClick 属性，可选是否点击蒙层关闭组件
  - 新增 onClose 属性，按 esc 键或者点击蒙层关闭组件时回调
- 重构 **Select 组件** [详情](https://newdadafe.github.io/react-impression/#select)
  - 新增 searchable 属性，支持搜索选项
  - 新增 multiple 属性，支持多选
  - 新增 required 属性，优化字段作为必选项未选择时的视觉效果
  - 新增 onDelete 属性，回调方法的返回值为删除项的值，仅在多选模式下有效
  - 新增 filterMethod 属性，支持自定义过滤方法

### 新增组件

- 新增 **Table 组件**，支持 TableColumn/columns 两种用法，支持 rowSelection 多选表格配置 [详情](https://newdadafe.github.io/react-impression/#table)
