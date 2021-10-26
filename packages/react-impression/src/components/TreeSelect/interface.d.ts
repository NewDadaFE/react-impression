import React, { ReactNode } from "react";

type LoadData = (node: TreeNodeRender) => Promise<void>;
type TreeNodeSearch = (label: string) => never;
type TreeNodeRenderFunction = (node: TreeNodeRender) => ReactNode;
type FilterTreeNode = (
  inputValue?: string,
  treeNode?: TreeNodeRender
) => boolean;
type OnChange = (
  value?: TreeSelectProps["value"],
  label?: Array<TreeNodeRender["label"]>,
  extra?: OnChangeExtraData
) => never;
type OnTreeExpand = (id: TreeNodeRender["id"], node?: TreeNodeRender) => never;
type SuffixIcon = (node:TreeNodeRender) => ReactNode

export interface TreeSelectProps {
  allowClear?: boolean; // Input 框显示清除按钮
  multiple?: boolean; // 树每个选项前是否有 checkbox
  defaultValue?: Array<TreeNodeRender["id"]>; // 默认选中的数据
  data: Array<TreeNodeRender>; // 用于渲染的数据
  disabled?: boolean; // 整体禁用
  autoClearSearchValue?: boolean; // 当多选模式下值被选择，自动清空搜索框
  dropdownClassName?: string; // 用作树的calssName
  filterTreeNode?: FilterTreeNode; // 自定义过滤方法
  onChange?: OnChange;
  onSelect?: Function;
  onDropDownVisibleChange?: Function; // 弹窗 显示状态改变的回调
  listHeight?: number; // 设置弹窗的高度
  loadData?: LoadData; // 按节点加载数据 默认每个节点都能展开 除非单独设置isLeaf或有子节点
  selectedOverflowScroll?: boolean; // Input 框内超出显示范围的选项滚动还是换行
  placeholder?: string;
  showCheckedStrategy?: "SHOW_ALL" | "SHOW_PARENT" | "SHOW_CHILD"; // 选中时回调值的策略
  searchable?: boolean; // 是否支持 搜索
  SwitcherIcon?: ReactNode; // 开关切换的icon
  treeRenderPropReflect?: TreeRenderPropReflect; // 传入TreeSelect组件的 不是按照 TreeNode格式来的 通过这个属性来指定TreeNode中各个属性的别名
  treeDefaultExpandAll?: boolean; // 树 默认展开所有节点
  treeDefaultExpandedKeys?:Array<TreeNodeRender['id']>,// 默认 展开的树的id 列表
  onSearch?: TreeNodeSearch; // 搜索的方法
  onTreeExpand?: OnTreeExpand; //展开节点时调用
  maxHeight?: number; // 弹窗的最大高度，涉及虚拟滚动的最大可见区域高度
  treeNodeRender?: TreeNodeRenderFunction; // 自定义节点的渲染内，容自定义label的显示 除打开收起的图标和选择框和自定义的图标 
  value?: Array<TreeNodeRender["id"]>;
  tagTheme: string; // 选中的标签的主题颜色
  className: string;
  style: React.CSSProperties;
  stretch:'sameWidth' | 'auto'; // 弹出层的宽度 默认 sameWidth
  suffixIcon?: SuffixIcon; // label 前置的icon 
  virtual:boolean; // 是否开启虚拟滚动
  size: "md" | "sm" | "lg";
}
// 不做 selectable 和 disabled 的 区分
export interface TreeNodeRender {
  id: string | number;
  label: ReactNode;
  children?: Array<TreeNodeRender>;
  disabled?: boolean; // 单选或者多选时是否可选或者是否禁用  阻断传播 反选 上级取消等 关联关系
  key?: React.Key;// 树 的 key是根据id 和 level 拼出来的，所以只要避免同层级有相同的id就能避免重复key的问题
  checked?: boolean;
  checkable?: boolean;
  expand?: boolean;
  level?: number;
  parent?: TreeNodeRender | null;
  indeterminate?: boolean;
  loading?: boolean; // 节点是否处于加载状态
  isLeaf?:boolean;
  position?:string; // 树状态下的节点位置信息
}

export interface TreeRenderPropReflect {
  id: string;
  label: string;
  children: string;
}

export interface OnChangeExtraData {
  preValue: TreeSelectProps["value"];
  triggerNode?: TreeNodeRender;
}
