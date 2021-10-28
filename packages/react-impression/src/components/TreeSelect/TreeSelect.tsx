import { TreeSelectProps, TreeNodeRender } from "./interface";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef
} from "react";
import classnames from "classnames";
import * as R from "ramda";

import Tag from "../Tag";
import Ico from "../Ico";
import Trigger from "../Trigger";
import Checkbox from "../Checkbox";

type SublingCheckedType = "none" | "some" | "all";
type CheckedIdList = TreeSelectProps["value"];
type CheckedIds = Set<TreeNodeRender["id"]>;

const TreeSelect: React.FunctionComponent<TreeSelectProps> = (
  props: TreeSelectProps
) => {
  /** 变量 */
  const {
    data,
    defaultValue,
    value,
    multiple = false,
    treeDefaultExpandAll,
    treeRenderPropReflect,
    treeDefaultExpandedKeys,
    treeNodeRender,
    filterTreeNode,
    tagTheme,
    className,
    style,
    size,
    allowClear,
    onDropDownVisibleChange,
    showCheckedStrategy = "SHOW_PARENT",
    disabled,
    placeholder,
    searchable,
    SwitcherIcon,
    autoClearSearchValue = true,
    onChange,
    onSearch,
    onTreeExpand,
    suffixIcon,
    loadData,
    onSelect,
    stretch = "sameWidth",
    listHeight = 304
  } = props;
  const SeacrhInputRef = useRef(null);
  const CountWidth = useRef(null);
  const ListPopupRef = useRef(null);
  const [filterString, setFileterString] = useState("");
  const [checkedIds, setCheckedIds] = useState<CheckedIds>(
    value ? new Set(value) : defaultValue ? new Set(defaultValue) : new Set()
  );
  const [searchFocus, setSearchFocus] = useState(false); // 记录搜索框的 聚焦状态
  const [expandIds, setExpandIds] = useState<CheckedIds>(new Set());
  const [showOption, setShowOption] = useState(false); // 下拉的状态改变
  const [indeterminateIds, setIndeterminateIds] = useState(new Set());
  const [loadingNode, setLoadingNode] = useState(undefined);

  /** 方法 */
  const initTreeStruct = useCallback(
    (treeNode: Array<TreeNodeRender>, renderList, level: number = 0) => {
      // 全部节点展开铺平的列表
      // 包含树简单的信息 确定之后不再改变
      treeNode.forEach((item, index) => {
        if (treeRenderPropReflect) {
          const { id = "id", label = "label" } = treeRenderPropReflect;
          item.id = item[id];
          item.label = item[label];
        }
        renderList.push({
          level,
          id: item.id,
          label: item.label,
          disabled: item.disabled || false
        });

        if (treeRenderPropReflect) {
          const { children = "children" } = treeRenderPropReflect;
          if (item[children] && item[children].length)
            initTreeStruct(item[children], renderList, level + 1);
        } else {
          if (item.children && item.children.length)
            initTreeStruct(item.children, renderList, level + 1);
        }
      });
      return renderList;
    },
    []
  );
  const treeStruct = useMemo(
    () => {
      // 树的平铺结构
      return initTreeStruct(data, []);
    },
    [initTreeStruct,data]
  );

  const diffAllParent = useCallback((treeNode: TreeNodeRender, newIds) => {
    // 有不同类型的计算 展开 或者 半选 依据上下文
    while (treeNode && treeNode.parent !== null) {
      treeNode = treeNode.parent;
      if (treeNode.disabled) treeNode = null;
      else {
        newIds.add(treeNode.id);
      }
    }
  }, []);

  const dimensionMinusTo1 = useCallback(
    (
      parentNode: TreeNodeRender,
      treeNode: Array<TreeNodeRender>,
      renderList: Array<TreeNodeRender> = [],
      level: number = 0,
      newExpandIds: Set<TreeNodeRender["id"]>
    ): Array<TreeNodeRender> => {
      // 把树变成一个列表 带有树的详细信息 checked expand indeterminate 需要另外计算 默认 false
      const defaultExpandKeys = new Set(treeDefaultExpandedKeys);
      treeNode.forEach((item: TreeNodeRender) => {
        if (treeRenderPropReflect) {
          const {
            id = "id",
            label = "label",
            children = "children"
          } = treeRenderPropReflect;
          item.id = item[id];
          item.label = item[label];
          item.children = item[children];
        }
        if (multiple && !item.hasOwnProperty("checkable")) {
          // 在multiple开启下 优先取传进来的checkable 属性 没有 checkable的赋值ture
          // 节点是否可选 要依据 multiple 和 checkable 两个属性
          item.checkable = true;
        }
        // 三个默认值 默认会覆盖了
        multiple && (item.checked = false);
        multiple && (item.indeterminate = false);
        item.expand = false;
        // 如果有传key就用传进来的
        item.key = item.key || `${item.id}-${level}`;
        item.level = level;
        item.parent = parentNode;
        if (treeDefaultExpandAll || defaultExpandKeys.has(item.id)) {
          item.expand = true;
          newExpandIds.add(item.id);
        }
        if (defaultExpandKeys.has(item.id)) {
          diffAllParent(item, newExpandIds);
        }
        renderList.push(item);
        if (item.children && item.children.length) {
          dimensionMinusTo1(
            item,
            item.children,
            renderList,
            level + 1,
            newExpandIds
          );
        }
      });
      return renderList;
    },
    [treeRenderPropReflect, multiple, treeDefaultExpandedKeys, diffAllParent]
  );

  const nodeRenderList = useMemo(
    () => {
      // 添加深拷贝 防止 多个组件使用同一数据源而造成组件的状态同步
      const newExpandIds: Set<TreeNodeRender["id"]> = new Set(expandIds);
      const preRenderList = dimensionMinusTo1(
        null,
        R.clone(data),
        [],
        0,
        newExpandIds
      );
      // 添加树节点的位置信息
      const treeDeepTrack = new Map();
      let markedLevel = -1;
      preRenderList.map(item => {
        if (item.level < markedLevel) {
          while (item.level < markedLevel) {
            treeDeepTrack.delete(markedLevel);
            markedLevel -= 1;
          }
        }
        markedLevel = item.level;
        const existIndex = treeDeepTrack.get(item.level) || 0;
        treeDeepTrack.set(item.level, existIndex + 1);
        const position = [];
        treeDeepTrack.forEach(item => {
          position.push(item);
        });
        item.position = position.join(",");
      });
      setExpandIds(newExpandIds);
      return preRenderList;
    },
    [dimensionMinusTo1, data]
  );

  const diffSublingNode = useCallback(
    (node: TreeNodeRender, newcheckedIds) => {
      let { id: checkedId, level: checkedLevel } = node;
      let { id: checkedParentId, level: checkedParentLevel } = node.parent; // 调用前已经确认了有父节点
      let isFind = false;
      let allChecked = true;
      let checkedChildrenId = [];
      let childrenId = [];
      let checkedType: SublingCheckedType = "none"; // 兄弟节点被选的情况 none | some | all
      for (let i in treeStruct) {
        if (treeStruct[i].id === checkedParentId) {
          // 先找到该节点（node）的父节点 标记
          isFind = true;
          continue;
        }
        if (isFind && treeStruct[i].level <= checkedParentLevel) {
          // = 的情况是 父节点 后 还有同级的节点
          // < 的情况是 父节点 后 没有同级的节点 是 父节点 的 父节点 级别的
          // 退出循环
          break;
        }

        if (isFind && checkedLevel === treeStruct[i].level) {
          childrenId.push(treeStruct[i].id);
          if (checkedId !== treeStruct[i].id) {
            // 同 level 的 并 排除自身
            if (
              !newcheckedIds.has(treeStruct[i].id) &&
              !treeStruct[i].disabled
            ) {
              // 排除disabled 的节点
              allChecked = false;
            }
            if (
              newcheckedIds.has(treeStruct[i].id) ||
              nodeRenderList[i].indeterminate
            ) {
              // 半选状态也被记为 some的一种
              checkedChildrenId.push(treeStruct[i].id);
            }
          }
        }
      }
      if (checkedChildrenId.length) checkedType = "some";
      if (allChecked) checkedType = "all";
      return { checkedType, checkedChildrenId, childrenId };
    },
    [treeStruct, nodeRenderList]
  );

  const clearAllChildNodeId = useCallback(
    (node, newcheckedIds, newIndeterminateIds) => {
      if (node.children && node.children.length) {
        // 删除已选节点下的所有的已选的子子孙孙节点
        let isFind = false;
        let isDisabled = false;
        let disabledLevel = -1;
        for (let i in treeStruct) {
          if (treeStruct[i].id === node.id) {
            isFind = true;
            continue;
          }
          if (disabledLevel >= treeStruct[i].level) {
            disabledLevel = -1;
          }
          if (isFind && treeStruct[i].level <= node.level) {
            break;
          }
          if (isFind) {
            if (treeStruct[i].disabled) {
              // 删除下级节点的过程中碰到了disabled的节点，跳过该节点的所有下级节点
              isDisabled = true;
              disabledLevel = treeStruct[i].level;
            }
            if (isDisabled && disabledLevel !== -1) continue;
            newcheckedIds.delete(treeStruct[i].id);
            newIndeterminateIds.delete(treeStruct[i].id);
          }
        }
      }
    },
    [treeStruct, indeterminateIds]
  );

  /**
   * 变更
   * @param {boolean} value - true 选中 false 取消选中
   */
  const caculateSelectedKey = useCallback(
    (newcheckedIds, checkedItem: TreeNodeRender, value): CheckedIds => {
      let { id: checkedId } = checkedItem;
      let { id: checkedParentId } = checkedItem.parent || {};
      const newIndeterminateIds = new Set(indeterminateIds);
      if (value) {
        // 删除下级节点
        if (checkedItem.children && checkedItem.children.length)
          clearAllChildNodeId(checkedItem, newcheckedIds, newIndeterminateIds);

        // 向上遍历
        if (checkedParentId) {
          let sublingItemAllChecked = true;
          let diffNode = checkedItem;

          // 所有父级节点加为半选
          diffAllParent(checkedItem, newIndeterminateIds);

          // 检查 被选项 的兄弟 节点 是否已经被选择
          // 如果已被选择 删掉 兄弟节点的数据 添加父节点 为 已选择节点
          // 重复这个步骤直到 到 一级的节点
          while (sublingItemAllChecked && diffNode.parent) {
            // 获取兄弟节点的选中状态
            const { checkedType, childrenId } = diffSublingNode(
              diffNode,
              newcheckedIds
            );

            // 父节点disabled的话要停止向上遍历
            if (checkedType === "all" && !diffNode.parent.disabled) {
              childrenId.forEach(item => {
                newcheckedIds.delete(item);
              });
              // 准备下一次遍历 能循环就确定了有父节点
              diffNode = diffNode.parent;
              // 添加 父 节点 为 已选状态
              newcheckedIds.add(diffNode.id);
              // 删除父节点的半选状态
              newIndeterminateIds.delete(diffNode.id);
            } else {
              // 结束遍历
              sublingItemAllChecked = false;
              // 添加该节点为已选节点
              newcheckedIds.add(diffNode.id);
            }
          }
        } else {
          // 没有父节点 直接添加该节点为已选
          newcheckedIds.add(checkedId);
        }
      } else {
        let diffNode = checkedItem;
        // 消除自身的选中状态
        newIndeterminateIds.delete(diffNode.id);
        newcheckedIds.delete(checkedId);
        const checkedChildrenIds = []; // 记录向上遍历时选中的节点
        while (diffNode.parent && !diffNode.parent.disabled) {
          if (diffNode.parent.checked) {
            diffNode.parent.children.forEach(item => {
              if (item.id !== diffNode.id && !item.disabled)
                newcheckedIds.add(item.id);
            });
          }
          const { checkedType, checkedChildrenId } = diffSublingNode(
            diffNode,
            newcheckedIds
          );
          checkedChildrenIds.push(...checkedChildrenId);
          if (checkedType === "all") {
            if (checkedChildrenId.length) {
              // 改为半选
              newIndeterminateIds.add(diffNode.parent.id);
            } else {
              // 没有兄弟节点的情况
              newIndeterminateIds.delete(diffNode.parent.id);
            }
            newcheckedIds.delete(diffNode.parent.id);
          }

          if (checkedType === "some") break;

          if (checkedType === "none" && !checkedChildrenIds.length) {
            // 有选中的子孙节点就不删除半选状态
            // 遍历兄弟节点时排除了自身 所以在 none 时会存在问题 加上checkedChildrenIds的判断
            newIndeterminateIds.delete(diffNode.parent.id);
          }

          diffNode = diffNode.parent;
        }
      }
      setCheckedIds(new Set(newcheckedIds));
      setIndeterminateIds(newIndeterminateIds);
      // return 出去是为了 计算不同形式的checkedIds
      return newcheckedIds;
    },
    [
      treeStruct,
      clearAllChildNodeId,
      diffSublingNode,
      indeterminateIds,
      diffAllParent
    ]
  );

  useEffect(
    () => {
      onDropDownVisibleChange && onDropDownVisibleChange(showOption);
    },
    [showOption]
  );
  useEffect(
    () => {
      // 主要监听的是 filterString 和 showOption的变化
      if (searchable) setSearchFocus(showOption);
      if (showOption && searchable) SeacrhInputRef.current.focus(); // 打开面板输入框自动聚焦
      if (!showOption && filterString) setFileterString(""); // 关闭面板清除筛选信息
    },
    [showOption, searchable, SeacrhInputRef, filterString]
  );

  let CIATSCS = useCallback(
    (
      nextCheckedIds: CheckedIds
    ): [Array<TreeNodeRender["id"]>, Array<TreeNodeRender["label"]>] => {
      const newCheckedIds: Set<TreeNodeRender["id"]> = new Set();
      const newCheckedLabels: Map<
        TreeNodeRender["id"],
        TreeNodeRender["label"]
      > = new Map();
      let markedLevel = -1;
      let disabledLevel = -1;
      let markedLevelInDisabled = -1;
      switch (showCheckedStrategy) {
        // 默认模式 勾选下级节点 会 反选上级
        case "SHOW_PARENT": {
          treeStruct.forEach(treeNode => {
            if (nextCheckedIds.has(treeNode.id)) {
              newCheckedIds.add(treeNode.id);
              newCheckedLabels.set(treeNode.id, treeNode.label);
            }
          });
          break;
        }

        case "SHOW_ALL": {
          // 要处理的情况是 父节点选中了但是checkedIds 中不含其子节点
          treeStruct.forEach(treeNode => {
            // 循环分两个阶段 正常的遍历 和 disabled 内的遍历 单独区分
            if (disabledLevel >= treeNode.level) {
              // 结束 disabled 节点内的遍历
              // 重制 markedLevelInDisabled
              disabledLevel = -1;
              markedLevelInDisabled = -1;
            }
            if (treeNode.disabled && disabledLevel === -1) {
              disabledLevel = treeNode.level;
            }
            if (disabledLevel !== -1) {
              // disabled 节点内的遍历
              if (
                markedLevelInDisabled >= treeNode.level ||
                treeNode.disabled
              ) {
                markedLevelInDisabled = -1;
              }
              if (nextCheckedIds.has(treeNode.id)) {
                markedLevelInDisabled = treeNode.level;
              }
            }
            if (markedLevel >= treeNode.level) {
              // 结束 markedLevel 下子节点的遍历
              markedLevel = -1;
            }
            if (nextCheckedIds.has(treeNode.id) && disabledLevel === -1) {
              // 正常遍历
              // 加上 disabledLevel 的判断防止 markedLevel 被 disabledLevel 下的 已选节点改变
              markedLevel = treeNode.level;
            }
            if (
              (markedLevel !== -1 && disabledLevel === -1) ||
              markedLevelInDisabled !== -1
            ) {
              // markedLevel !== -1 的情况会包含 disabled 下的节点 所以要排除
              newCheckedIds.add(treeNode.id);
              newCheckedLabels.set(treeNode.id, treeNode.label);
            }
          });
          break;
        }
        case "SHOW_CHILD": {
          treeStruct.forEach((treeNode, index) => {
            const nextNode = treeStruct[index + 1];
            const ifLeafe =
              (nextNode && nextNode.level <= treeNode.level) || !nextNode; // 是否是叶子节点
            if (disabledLevel >= treeNode.level) {
              disabledLevel = -1;
              markedLevelInDisabled = -1;
            }
            if (treeNode.disabled && disabledLevel === -1) {
              // 判断 disabled 是 为了防止 disabled 内 disabled 的 情况
              disabledLevel = treeNode.level;
            }
            if (disabledLevel !== -1) {
              // disabled 节点内的遍历
              if (
                markedLevelInDisabled >= treeNode.level ||
                treeNode.disabled
              ) {
                // disabled 内 遇到 disabled 的节点
                markedLevelInDisabled = -1;
              }
              if (nextCheckedIds.has(treeNode.id)) {
                markedLevelInDisabled = treeNode.level;
              }
            }
            if (markedLevel >= treeNode.level) {
              // 结束一个节点的计算
              markedLevel = -1;
            }
            if (nextCheckedIds.has(treeNode.id) && disabledLevel === -1) {
              // 已选中 并且 表示其含有子节点
              // 开始一个节点的计算
              markedLevel = treeNode.level;
            }
            if (
              ((markedLevel !== -1 && disabledLevel === -1) ||
                markedLevelInDisabled !== -1) &&
              ifLeafe
            ) {
              newCheckedIds.add(treeNode.id);
              newCheckedLabels.set(treeNode.id, treeNode.label);
            }
          });
          break;
        }
        default:
          break;
      }
      const nextCheckedLabelListStrategy: Array<TreeNodeRender["label"]> = [];
      newCheckedLabels.forEach(item => {
        nextCheckedLabelListStrategy.push(item);
      });
      return [Array.from(newCheckedIds), nextCheckedLabelListStrategy];
    },
    [treeStruct, showCheckedStrategy]
  );
  let filteredNodeRenderList = useMemo(
    () => {
      // 基于nodeRenderList计算渲染用的树 包含搜索的条件 没展开的就不参与渲染
      // 树 的表现和 checked回调的策略无关 只有一种 方式 SHOW_PARENT
      // 弹出的窗口当中的树 的checked 依照checkedIds
      const filterNodeList = [];
      let markedLevel = -1;
      let existIds = new Set(); // 已被加入筛选节点列表的 节点，包含目标节点的 父级
      nodeRenderList.forEach(item => {
        // 计算节点 是否勾选 和 半选状态
        if (
          checkedIds.has(item.id) ||
          (item.parent && item.parent.checked && !item.parent.disabled)
        )
          item.checked = true;
        else item.checked = false;

        if (indeterminateIds.has(item.id)) {
          item.indeterminate = true;
        } else item.indeterminate = false;

        if (
          !treeNodeRender &&
          ((filterTreeNode && filterTreeNode(filterString, item)) ||
            (item.label as string).includes(filterString))
        ) {
          if (item.level <= markedLevel) {
            markedLevel = -1;
          }
          const originalLength = filterNodeList.length;
          // filterString 可能为空字符串
          if (filterString) {
            // 过滤后的树 无法进行展开 操作
            filterNodeList.push(item);
            existIds.add(item.id);
            while (item.parent) {
              // 过滤后的树节点默认展开
              item.parent.expand = true;
              if (!existIds.has(item.parent.id)) {
                filterNodeList.splice(originalLength, 0, item.parent);
                existIds.add(item.parent.id);
              }
              item = item.parent;
            }
          } else if (markedLevel === -1) {
            if (expandIds.has(item.id)) {
              item.expand = true;
            } else item.expand = false;
            filterNodeList.push(item);
            !item.expand &&
              item.children &&
              item.children.length &&
              (markedLevel = item.level);
          }
        }
      });
      return filterNodeList;
    },
    [nodeRenderList, filterString, treeNodeRender, checkedIds, expandIds, value]
  );
  const checkedIdList = useMemo<CheckedIdList>(
    () => {
      return value
        ? multiple
          ? CIATSCS(new Set(value))[0]
          : value
        : CIATSCS(checkedIds)[0];
    },
    [checkedIds]
  );
  const NewSwitcherIcon = useCallback(
    props => {
      const { id, ...otherProps } = props;
      return (
        <div {...otherProps}>
          {loadingNode === id ? (
            <Ico type="rotate-right spin" />
          ) : SwitcherIcon ? (
            SwitcherIcon
          ) : (
            <Ico type="angle-right" />
          )}
        </div>
      );
    },
    [SwitcherIcon, loadingNode]
  );

  return (
    <Trigger
      showAction="none"
      hideAction="none"
      popupVisible={showOption}
      onPopupVisibleChange={setShowOption}
      stretch={stretch}
      transitionName="scale"
      popup={
        <div
          className="dada-tree-select-popup"
          ref={ListPopupRef}
          style={{
            [listHeight ? "height" : ""]: [listHeight ? listHeight + "px" : ""],
            overflow: "scroll"
          }}
        >
          <div
            className="dada-tree-select-popup-list"
            style={{
              width: "max-content"
            }}
          >
            {filteredNodeRenderList.map(item => {
              return (
                <div className="dada-tree-select-node" key={item.key}>
                  {new Array(item.level).fill(1).map((item, index) => {
                    return (
                      <span className="dada-tree-space-content" key={index} />
                    );
                  })}
                  <NewSwitcherIcon
                    className={classnames(
                      item.expand ? "dada-tree-node-expand" : "",
                      "dada-tree-node-ico"
                    )}
                    id={item.id}
                    onClick={() => {
                      // 筛选时 折叠无响应
                      if (!filterString) {
                        const newExpandIds = new Set(expandIds);
                        if (item.expand && newExpandIds.has(item.id)) {
                          newExpandIds.delete(item.id);
                          setExpandIds(newExpandIds);
                        } else {
                          if (
                            (!item.children || !item.children.length) &&
                            (loadData && !item.isLeaf)
                          ) {
                            setLoadingNode(item.id);
                            loadData(item)
                              .then(() => {
                                newExpandIds.add(item.id);
                                setExpandIds(newExpandIds);
                              })
                              .catch(error => {
                                console.log(error);
                              })
                              .finally(() => {
                                setLoadingNode(undefined);
                              });
                          } else {
                            newExpandIds.add(item.id);
                            setExpandIds(newExpandIds);
                          }
                        }

                        onTreeExpand && onTreeExpand(item.id, item);
                        searchable && SeacrhInputRef.current.focus();
                      }
                    }}
                    style={{
                      visibility:
                        (item.children && item.children.length) ||
                        (loadData && !item.isLeaf)
                          ? "visible"
                          : "hidden"
                    }}
                  />

                  <span
                    onClick={e => {
                      e.preventDefault();
                      let nextCheckedIds: CheckedIds = new Set();
                      const {
                        checked,
                        expand,
                        level,
                        indeterminate,
                        ...others
                      } = item;
                      if (item.disabled) return;
                      if (autoClearSearchValue) setFileterString("");
                      if (multiple) {
                        nextCheckedIds = caculateSelectedKey(
                          checkedIds,
                          item,
                          !item.checked
                        );
                        const [
                          nextCheckedIdListStrategy,
                          nextCheckedLabelListStrategy
                        ] = CIATSCS(nextCheckedIds);
                        onChange &&
                          onChange(
                            nextCheckedIdListStrategy,
                            nextCheckedLabelListStrategy,
                            {
                              preValue: checkedIdList,
                              triggerNode: others
                            }
                          );
                      } else {
                        if (!checkedIds.has(item.id)) {
                          nextCheckedIds.add(item.id);
                          setCheckedIds(nextCheckedIds);
                          onChange &&
                            onChange([item.id], [item.label], {
                              preValue: checkedIdList,
                              triggerNode: others
                            });
                        }
                      }

                      searchable && SeacrhInputRef.current.focus();
                    }}
                    className={classnames(
                      "dada-tree-select-check",
                      checkedIdList.includes(item.id) && !multiple
                        ? "dada-tree-select-checked"
                        : "",
                      item.disabled ? "dada-tree-select-node-disabled" : ""
                    )}
                  >
                    {multiple && item.checkable && (
                      <Checkbox
                        disabled={item.disabled}
                        checked={item.disabled ? false : item.checked}
                        indeterminate={
                          item.disabled
                            ? false
                            : item.checked
                            ? false
                            : item.indeterminate
                        }
                        onChange={() => {
                          console.log(item);
                          onSelect(item);
                        }}
                      />
                    )}
                    {suffixIcon && suffixIcon(item)}
                    {treeNodeRender ? (
                      treeNodeRender(item)
                    ) : (
                      <span key={item.key} title={item.label}>
                        {item.label}
                      </span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      }
    >
      <div
        className={classnames(
          className,
          `dada-tree-select${size ? "-" + size : ""}`,
          "dada-tree-select"
        )}
        onClick={() => {
          if (disabled) return;
          setShowOption(!showOption);
        }}
        style={{ borderColor: showOption ? "#008cf0" : "", ...style }}
      >
        {disabled && <div className="dada-tree-select-disabled" />}
        <div className={classnames("dada-tree-select-checked-tags")}>
          {multiple ? (
            checkedIdList.map(item => {
              const selectItem =
                R.find(R.propEq("id", item), nodeRenderList) || {};
              return (
                <Tag
                  closable={!selectItem.disabled}
                  onClose={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    const nextCheckedIds = caculateSelectedKey(
                      checkedIds,
                      selectItem,
                      false
                    );
                    const {
                      checked,
                      expand,
                      level,
                      indeterminate,
                      ...others
                    } = selectItem;
                    const [
                      nextCheckedIdListStrategy,
                      nextCheckedLabelListStrategy
                    ] = CIATSCS(nextCheckedIds);

                    onChange &&
                      onChange(
                        nextCheckedIdListStrategy,
                        nextCheckedLabelListStrategy,
                        {
                          preValue: checkedIdList,
                          triggerNode: others
                        }
                      );
                  }}
                  key={selectItem.key}
                  theme={tagTheme || "default"}
                  size={size !== "lg" ? size || "md" : "md"}
                >
                  {selectItem.label || ""}
                </Tag>
              );
            })
          ) : filterString ? (
            ""
          ) : (
            <span
              className="dada-tree-select-singal-value"
              style={{
                color: filterString ? "#bfbfbf" : ""
              }}
            >
              {(R.find(R.propEq("id", checkedIdList[0]), nodeRenderList) || {})
                .label || ""}
            </span>
          )}
          {searchable && (
            <div className={classnames("dada-tree-select-search-input")}>
              <input
                value={filterString}
                ref={SeacrhInputRef}
                onChange={e => {
                  setFileterString(e.target.value);
                  onSearch(e.target.value);
                }}
                style={{
                  width:
                    CountWidth.current && showOption
                      ? CountWidth.current.clientWidth + 10 + "px"
                      : "4px"
                }}
              />
              <div className="dada-tree-select-count-width" ref={CountWidth}>
                {filterString}
              </div>
            </div>
          )}
          {!checkedIdList.length && (!searchFocus || !filterString) && (
            <span className="dada-tree-select-placeholder">{placeholder}</span>
          )}
        </div>
        <div className="dada-tree-select-icons">
          {allowClear && (
            <Ico
              type="times-circle"
              onClick={e => {
                e.stopPropagation();
                setCheckedIds(new Set());
                setShowOption(false);
                setIndeterminateIds(new Set());
                onChange && onChange([], [], { preValue: checkedIdList });
              }}
              className={classnames(
                checkedIdList.length ? "dada-tree-select-allow-clear" : ""
              )}
            />
          )}
          <Ico
            type="angle-down"
            className={classnames(
              showOption ? "showoption" : "",
              checkedIdList.length && allowClear
                ? "dada-tree-select-angle-hide"
                : ""
            )}
          />
        </div>
      </div>
    </Trigger>
  );
};
export default TreeSelect;
