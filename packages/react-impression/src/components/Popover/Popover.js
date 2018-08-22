import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { isDescendentNode } from '../../utils/dom'

export default class Popover extends React.PureComponent {
  static propTypes = {
    /**
     * 显示位置
     */
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
    /**
     * 标题
     */
    title: PropTypes.node,
    /**
     * 内容
     */
    content: PropTypes.node,
    /**
     * 子组件
     */
    children: PropTypes.element.isRequired,
    /**
     * 触发方式
     */
    trigger: PropTypes.oneOf(['click', 'hover']),
  }

  static defaultProps = {
    position: 'right',
    trigger: 'hover',
  }

  constructor(props) {
    super(props)
    this.reference = null
    this.popover = null
  }

  /**
   * 创建popover
   * @param targetRect
   */
  createPopover(targetRect) {
    const { position, title, content } = this.props
    const positionClass = `popover-${position}`
    let popoverNode = document.createElement('div')
    let arrowNode = document.createElement('div')
    let titleNode = document.createElement('div')
    let contentNode = document.createElement('div')

    popoverNode.className = `popover ${positionClass}`
    arrowNode.className = 'popover-arrow'
    titleNode.className = 'popover-title'
    contentNode.className = 'popover-content'

    titleNode.innerHTML = title
    contentNode.innerHTML = content
    popoverNode.appendChild(arrowNode)
    popoverNode.appendChild(titleNode)
    popoverNode.appendChild(contentNode)

    document.body.appendChild(popoverNode)

    const popoverRect = popoverNode.getBoundingClientRect()

    // 计算left、top
    switch (position) {
      case 'top':
        popoverNode.style.top = `${targetRect.top - popoverRect.height}px`
        popoverNode.style.left = `${targetRect.left -
          (popoverRect.width - targetRect.width) / 2}px`
        break
      case 'left':
        popoverNode.style.left = `${targetRect.left - popoverRect.width}px`
        popoverNode.style.top = `${targetRect.top +
          (targetRect.height - popoverRect.height) / 2}px`
        break
      case 'right':
        popoverNode.style.left = `${targetRect.left + targetRect.width}px`
        popoverNode.style.top = `${targetRect.top +
          (targetRect.height - popoverRect.height) / 2}px`
        break
      default:
        popoverNode.style.top = `${targetRect.top + targetRect.height}px`
        popoverNode.style.left = `${targetRect.left -
          (popoverRect.width - targetRect.width) / 2}px`
        break
    }

    this.popover = popoverNode
  }

  /**
   * 显示popover
   * @param event
   */
  onMouseOver = event => {
    const rect = event.target.getBoundingClientRect()

    this.createPopover(rect)
  }
  /**
   * 移除popover
   */
  onMouseOut = () => {
    document.body.removeChild(this.popover)
    this.popover = null
  }
  /**
   * 点击事件触发popover的显示与否
   */
  onChildClick = event => {
    if (this.popover === null || this.popover === undefined) {
      this.onMouseOver(event)
    } else {
      this.onMouseOut()
    }
  }

  componentDidMount() {
    const { trigger } = this.props
    this.referenceDom = ReactDOM.findDOMNode(this.reference)

    if (trigger === 'click') {
      document.addEventListener('click', e => {
        // 如果还没生成popover的节点，或者依附的子节点不存在，或者依附的子节点包含点击的target，则不触发点击事件
        if (
          !this.popover ||
          !this.referenceDom ||
          this.referenceDom.contains(e.target)
        ) { return }
        // 检查popover生成的节点是否包含点击的target，包含则不触发，代码参照utils/dom, utils/system
        if (
          !isDescendentNode(this.popover, e.target) ||
          (event.path && event.path.indexOf(componentDom) === -1)
        ) {
          this.onMouseOut()
        }
      })
    }
  }

  render() {
    let { children, trigger } = this.props
    const { onMouseOver, onMouseOut, onClick } = children.props

    let triggerProps = {
      ref: ref => (this.reference = ref),
    }

    if (trigger === 'hover') {
      triggerProps = {
        ...triggerProps,
        onMouseOver: event => {
          onMouseOver && onMouseOver(event)
          this.onMouseOver(event)
        },
        onMouseOut: event => {
          onMouseOut && onMouseOut(event)
          this.onMouseOut(event)
        },
      }
    } else if (trigger === 'click') {
      triggerProps = {
        ...triggerProps,
        onClick: event => {
          onClick && onClick(event)
          this.onChildClick(event)
        },
      }
    }

    children = React.cloneElement(children, triggerProps)

    return children
  }
}
