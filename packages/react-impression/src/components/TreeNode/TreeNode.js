import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Icon } from 'react-impression'
import { getNodeChildren, mapChildren } from '../TreeSelect/utils'

const ICON_OPEN = 'open'
const ICON_CLOSE = 'close'

export default class TreeNode extends React.Component {
  static propTypes = {
    /**
     * 用来计算checkedKeys等属性
     */
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * 此属性不必传，会被默认赋值为key的值
     */
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 行内样式
     */
    style: PropTypes.object,

    /**
     * 是否选中
     */
    checked: PropTypes.bool,

    /**
     * 是否是半选状态
     */
    halfChecked: PropTypes.bool,

    /**
     * 子组件
     */
    children: PropTypes.node,

    /**
     * 选项的文字描述
     */
    title: PropTypes.node,

    /**
     * 是否禁用
     */
    disabled: PropTypes.bool,

    /**
     * 是否展开
     */
    expanded: PropTypes.bool,
  }

  static contextTypes = {
    tree: PropTypes.shape({
      disabled: PropTypes.bool,
      onNodeCheck: PropTypes.func,
      onNodeExpand: PropTypes.func,
      renderTreeNode: PropTypes.func,
    }),
  }

  static defaultProps = {
    title: '---',
  }

  onCheck = e => {
    if (this.isDisabled) return

    const { checked } = this.props
    const {
      tree: { onNodeCheck },
    } = this.context

    e.preventDefault()
    onNodeCheck(e, this, !checked)
  }

  onExpand = e => {
    const {
      tree: { onNodeExpand },
    } = this.context
    onNodeExpand(e, this)
  }

  renderSwitcher = () => {
    const { expanded } = this.props
    const switcherCls = classNames(
      'tree-switcher',
      `tree-switcher_${expanded ? ICON_OPEN : ICON_CLOSE}`
    )
    const iconCls = expanded ? 'down' : 'right'
    return (
      <span onClick={this.onExpand} className={switcherCls}>
        {!this.isLeaf ? (
          <Icon type={`angle-${iconCls}`} className={switcherCls} />
        ) : null}
      </span>
    )
  }

  renderCheckbox = () => {
    const { checked, halfChecked } = this.props
    const disabled = this.isDisabled
    return (
      <span
        className={classNames(
          `tree-checkbox`,
          checked && `tree-checkbox-checked`,
          !checked && halfChecked && `tree-checkbox-indeterminate`,
          disabled && `tree-checkbox-disabled`
        )}
        onClick={this.onCheck}
      >
        <Icon type='check' />
      </span>
    )
  }

  renderSelector = () => {
    const { title } = this.props

    return (
      <span
        title={typeof title === 'string' ? title : ''}
        className='tree-node-content-wrapper'
      >
        <span className='tree-title'>{title}</span>
      </span>
    )
  }

  renderChildren = () => {
    const { expanded, children } = this.props
    const {
      tree: { renderTreeNode },
    } = this.context

    const nodeList = getNodeChildren(children)

    if (nodeList.length === 0) {
      return null
    }

    let $children = null
    if (expanded) {
      $children = (
        <ul
          className={classNames(
            'tree-child-tree',
            expanded && 'tree-child-tree-open'
          )}
        >
          {mapChildren(nodeList, (node, index) => renderTreeNode(node))}
        </ul>
      )
    }

    return $children
  }

  get isDisabled() {
    const { disabled } = this.props
    const {
      tree: { disabled: treeDisabled },
    } = this.context

    return !!(treeDisabled || disabled)
  }

  get isLeaf() {
    const { children } = this.props
    return getNodeChildren(children).length === 0
  }

  render() {
    const { className, style, checked, halfChecked } = this.props
    return (
      <li
        className={classNames(className, {
          'tree-treenode-disabled': this.isDisabled,
          'tree-treenode-checkbox-checked': checked,
          'tree-treenode-checkbox-indeterminate': halfChecked,
        })}
        style={style}
      >
        {this.renderSwitcher()}
        {this.renderCheckbox()}
        {this.renderSelector()}
        {this.renderChildren()}
      </li>
    )
  }
}

TreeNode.isTreeNode = true
