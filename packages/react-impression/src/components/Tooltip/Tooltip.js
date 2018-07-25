import React from 'react'
import PropTypes from 'prop-types'

export default class Tooltip extends React.PureComponent {
  static propTypes = {
    /**
     * 设置提示工具位置
     */
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),

    /**
     * 提示工具内容
     */
    content: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.element.isRequired,
  }

  static defaultProps = {
    position: 'right',
  }

  createTooltip(targetRect) {
    const { position, content } = this.props
    const positionClass = `tooltip-${position}`
    const tooltipNode = document.createElement('div')
    const arrowNode = document.createElement('div')
    const innerNode = document.createElement('div')

    tooltipNode.className = `tooltip ${positionClass}`
    arrowNode.className = 'tooltip-arrow'
    innerNode.className = 'tooltip-inner'

    innerNode.innerHTML = content
    tooltipNode.appendChild(arrowNode)
    tooltipNode.appendChild(innerNode)

    document.body.appendChild(tooltipNode)

    const tooltipRect = tooltipNode.getBoundingClientRect()

    /**
     * switch - 计算left、top
     *
     * @param  {type} position 位置
     */
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

  /**
   * 显示tooltip
   */
  onMouseOver = event => {
    const rect = event.target.getBoundingClientRect()

    this.createTooltip(rect)
  }

  /**
   * 移除tooltip
   */
  onMouseOut = () => {
    document.body.removeChild(this.tooltip)
  }

  render() {
    const { children } = this.props
    const { onMouseOver, onMouseOut } = children.props

    return React.cloneElement(children, {
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
  }
}
