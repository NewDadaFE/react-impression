/* eslint-disable */
import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { polyfill } from 'react-lifecycles-compat'
import {
  convertTreeToEntities,
  regenCheck,
  arrAdd,
  arrDel,
  toArray,
  mapChildren,
  parseCheckedKeys,
} from './utils'

class TreeSelect extends React.PureComponent {
  static propTypes = {
    /**
     * 非受控状态，传入选中的节点
     */
    defaultCheckedKeys: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),

    /**
     * 受控状态，传入的选中的节点
     */
    checkedKeys: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),

    /**
     * 非受控状态，展开的节点id
     */
    defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 受控状态，展开的节点id
     */
    expandedKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 是否禁用树
     */
    disabled: PropTypes.bool,

    /**
     * 子组件
     */
    children: PropTypes.any,

    /**
     * 点击checkbox的时候触发
     */
    onCheck: PropTypes.func,

    /**
     * 展开触发
     */
    onExpand: PropTypes.func,
  }

  state = {}

  static defaultProps = {
    disabled: false,
    defaultCheckedKeys: [],
    defaultExpandedKeys: [],
  }

  static childContextTypes = {
    tree: PropTypes.shape({
      disabled: PropTypes.bool,
      onNodeCheck: PropTypes.func,
      onNodeExpand: PropTypes.func,
      renderTreeNode: PropTypes.func,
    }),
  }

  getChildContext() {
    const { disabled } = this.props

    return {
      tree: {
        disabled,
        onNodeCheck: this.onNodeCheck,
        onNodeExpand: this.onNodeExpand,
        renderTreeNode: this.renderTreeNode,
      },
    }
  }

  static getDerivedStateFromProps(props, prevState = {}) {
    const { prevProps } = prevState || {}
    const newState = {
      prevProps: props,
    }

    function needUpdate(name) {
      return (
        (!prevProps && name in props) ||
        (prevProps && prevProps[name] !== props[name])
      )
    }

    let treeNode = null

    if (needUpdate('children')) {
      treeNode = toArray(props.children)
    }

    if (treeNode) {
      // react节点信息
      newState.treeNode = treeNode
      // keyMap中每一个key对应一个自定义的node节点
      newState.keyMap = convertTreeToEntities(treeNode)
    }

    const keyMap = newState.keyMap || prevState.keyMap

    if (needUpdate('expandedKeys')) {
      newState.expandedKeys = props.expandedKeys
    } else if (!prevProps && props.defaultExpandedKeys) {
      newState.expandedKeys = props.defaultExpandedKeys
    }

    let checkedKeyMap

    if (needUpdate('checkedKeys')) {
      checkedKeyMap = parseCheckedKeys(props.checkedKeys) || {}
    } else if (!prevProps && props.defaultCheckedKeys) {
      checkedKeyMap = parseCheckedKeys(props.defaultCheckedKeys) || {}
    } else if (treeNode) {
      checkedKeyMap = {
        checkedKeys: prevState.checkedKeys,
        halfCheckedKeys: prevState.halfCheckedKeys,
      }
    }

    if (checkedKeyMap) {
      let { checkedKeys = [], halfCheckedKeys = [] } = checkedKeyMap
      const conductKeys = regenCheck(checkedKeys, true, keyMap)
      checkedKeys = conductKeys.checkedKeys
      halfCheckedKeys = conductKeys.halfCheckedKeys

      newState.checkedKeys = checkedKeys
      newState.halfCheckedKeys = halfCheckedKeys
    }

    return newState
  }

  /**
   * 在点击checkbox时触发
   */
  onNodeCheck = (e, treeNode, checked) => {
    const {
      keyMap,
      checkedKeys: originCheckedKeys,
      halfCheckedKeys: originHalfCheckedKeys,
    } = this.state
    const { onCheck } = this.props
    const {
      props: { eventKey },
    } = treeNode
    const eventObj = {
      node: treeNode,
      checked,
    }

    const { checkedKeys, halfCheckedKeys } = regenCheck(
      [eventKey],
      checked,
      keyMap,
      {
        checkedKeys: originCheckedKeys,
        halfCheckedKeys: originHalfCheckedKeys,
      }
    )

    this.setUncontrolledState({
      checkedKeys,
      halfCheckedKeys,
    })

    if (onCheck) {
      onCheck(checkedKeys, eventObj)
    }
  }

  /**
   * 在点击展开或折叠时触发
   */
  onNodeExpand = (e, treeNode) => {
    let { expandedKeys } = this.state
    const { onExpand } = this.props
    const { eventKey, expanded } = treeNode.props

    const targetExpanded = !expanded

    if (targetExpanded) {
      expandedKeys = arrAdd(expandedKeys, eventKey)
    } else {
      expandedKeys = arrDel(expandedKeys, eventKey)
    }

    this.setUncontrolledState({ expandedKeys })

    if (onExpand) {
      onExpand(expandedKeys, {
        node: treeNode,
        expanded: targetExpanded,
      })
    }
  }

  /**
   * 非受控组件需要更新state
   */
  setUncontrolledState = state => {
    let needUpdate = false
    const newState = {}

    Object.keys(state).forEach(name => {
      if (name in this.props) return

      needUpdate = true
      newState[name] = state[name]
    })

    if (needUpdate) {
      this.setState(newState)
    }
  }

  isKeyChecked = key => {
    const { checkedKeys = [] } = this.state
    return checkedKeys.indexOf(key) !== -1
  }

  renderTreeNode = child => {
    const { expandedKeys = [], halfCheckedKeys = [] } = this.state
    const key = child.key
    return React.cloneElement(child, {
      eventKey: key,
      // 用eventkey替代key，否则props里获取不到key，key isnt a prop   https://reactjs.org/warnings/special-props.html
      checked: this.isKeyChecked(key),
      expanded: expandedKeys.indexOf(key) !== -1,
      halfChecked: halfCheckedKeys.indexOf(key) !== -1,
    })
  }

  render() {
    const { treeNode } = this.state
    const { className } = this.props

    return (
      <ul className={classNames(className, 'tree')} unselectable="on">
        {mapChildren(treeNode, (node, index) =>
          this.renderTreeNode(node, index)
        )}
      </ul>
    )
  }
}

export default polyfill(TreeSelect)
