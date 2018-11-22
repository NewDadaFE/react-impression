import React from 'react'
import { Portal } from 'react-portal'
import PropTypes from 'prop-types'
import Popper from 'popper.js'

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

  createTooltip() {
    const { position, content } = this.props
    const positionClass = `tooltip-${position}`
    const tooltipNode = document.createElement('div')
    const tooltipContentNode = document.createElement('div')
    const arrowNode = document.createElement('div')
    const innerNode = document.createElement('div')

    tooltipNode.className = 'tooltip'
    tooltipContentNode.className = `tooltip-inner ${positionClass}`
    arrowNode.className = 'tooltip-arrow'
    innerNode.className = 'tooltip-text'

    innerNode.innerHTML = content
    tooltipContentNode.appendChild(arrowNode)
    tooltipContentNode.appendChild(innerNode)
    tooltipNode.appendChild(tooltipContentNode)

    document.body.appendChild(tooltipNode)

    this.tooltip = tooltipNode
  }

  /**
   * 显示tooltip
   */
  onMouseOver = event => {
    const { position } = this.props
    this.createTooltip()
    this.tooltipPopper = new Popper(event.target, this.tooltip, {
      positionFixed: true,
      placement: position,
      modifiers: {
        offset: { offset: '0, 10' },
      },
    })
  }

  /**
   * 移除tooltip
   */
  onMouseOut = () => {
    document.body.removeChild(this.tooltip)
    this.tooltipPopper.destroy()
    this.tooltipPopper = null
  }

  componentWillUnmount() {
    this.popper && this.popper.destroy()
    this.popper = null
  }

  setTooltipRef = element => (this.tooltip = element)

  render() {
    const { position, content, children } = this.props
    const { onMouseOver, onMouseOut } = children.props

    return (
      <div>
        {React.cloneElement(children, {
          onMouseOver: event => {
            onMouseOver && onMouseOver()
            this.onMouseOver(event)
          },
          onMouseOut: event => {
            onMouseOut && onMouseOut()
            this.onMouseOut(event)
          },
        })}
        <Portal>
          <div
            className={classnames('tooltip', {
              hidden: !this.state.showTip,
            })}
            ref={this.setTooltipRef}
          >
            <div className={`tooltip-inner tooltip-${position}`}>
              <div className='tooltip-arrow' />
              <div className='tooltip-text'>{content}</div>
            </div>
          </div>
        </Portal>
      </div>
    )
  }
}
