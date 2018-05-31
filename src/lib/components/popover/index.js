import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * Popover组件.
 */
export default class Popover extends PureComponent {
  // prop type校验
  static propTypes = {
    // 显示位置
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
    // 标题
    title: PropTypes.node,
    // 内容
    content: PropTypes.node,
    // 子节点
    children: PropTypes.element.isRequired,
  }
  // 默认props
  static defaultProps = {
    position: 'right',
  }
  // 创建popover
  createPopover(targetRect) {
    let { position, title, content } = this.props,
      positionClass = `popover-${position}`,
      popoverNode = document.createElement('div'),
      arrowNode = document.createElement('div'),
      titleNode = document.createElement('div'),
      contentNode = document.createElement('div')

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
    let popoverRect = popoverNode.getBoundingClientRect()

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
  // 显示popover
  onMouseOver = event => {
    let rect = event.target.getBoundingClientRect()

    this.createPopover(rect)
  }
  // 移除popover
  onMouseOut = () => {
    document.body.removeChild(this.popover)
  }
  // 渲染
  render() {
    let { children } = this.props,
      { onMouseOver, onMouseOut } = children.props

    children = React.cloneElement(children, {
      onMouseOver: onMouseOver
        ? event => {
          onMouseOver()
          this.onMouseOver(event)
        }
        : this.onMouseOver,
      onMouseOut: onMouseOut
        ? event => {
          onMouseOut()
          this.onMouseOut(event)
        }
        : this.onMouseOut,
    })

    return children
  }
}
