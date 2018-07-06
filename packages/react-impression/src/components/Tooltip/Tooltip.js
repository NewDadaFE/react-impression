import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 * Tooltip组件.
 */
export default class Tooltip extends PureComponent {
  // prop type校验
  static propTypes = {
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
    content: PropTypes.string,
    children: PropTypes.element.isRequired,
  }
  // 默认props
  static defaultProps = {
    position: 'right',
  }
  // 创建tooltip
  createTooltip(targetRect) {
    let { position, content } = this.props,
      positionClass = `tooltip-${position}`,
      tooltipNode = document.createElement('div'),
      arrowNode = document.createElement('div'),
      innerNode = document.createElement('div')

    tooltipNode.className = `tooltip ${positionClass}`
    arrowNode.className = 'tooltip-arrow'
    innerNode.className = 'tooltip-inner'

    innerNode.innerHTML = content
    tooltipNode.appendChild(arrowNode)
    tooltipNode.appendChild(innerNode)

    document.body.appendChild(tooltipNode)

    let tooltipRect = tooltipNode.getBoundingClientRect()

    // 计算left、top
    switch (position) {
      case 'top':
        tooltipNode.style.top = `${targetRect.top - tooltipRect.height}px`
        tooltipNode.style.left = `${targetRect.left -
          (tooltipRect.width - targetRect.width) / 2}px`
        break
      case 'left':
        tooltipNode.style.left = `${targetRect.left - tooltipRect.width}px`
        tooltipNode.style.top = `${targetRect.top +
          (targetRect.height - tooltipRect.height) / 2}px`
        break
      case 'right':
        tooltipNode.style.left = `${targetRect.left + targetRect.width}px`
        tooltipNode.style.top = `${targetRect.top +
          (targetRect.height - tooltipRect.height) / 2}px`
        break
      default:
        tooltipNode.style.top = `${targetRect.top + targetRect.height}px`
        tooltipNode.style.left = `${targetRect.left -
          (tooltipRect.width - targetRect.width) / 2}px`
        break
    }

    tooltipNode.classList.add('in')
    this.tooltip = tooltipNode
  }
  // 显示tooltip
  onMouseOver = event => {
    let rect = event.target.getBoundingClientRect()

    this.createTooltip(rect)
  }
  // 移除tooltip
  onMouseOut = () => {
    document.body.removeChild(this.tooltip)
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
