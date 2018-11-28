import React from 'react'
import { Portal } from 'react-portal'
import PropTypes from 'prop-types'
import classnames from 'classnames'
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

  state = {
    showTip: false,
  }

  /**
   * 显示tooltip
   */
  onMouseOver = event => {
    const { position } = this.props
    if (!this.popper) {
      this.popper = new Popper(event.target, this.tooltip, {
        positionFixed: true,
        placement: position,
        modifiers: {
          offset: { offset: '0, 10' },
        },
      })
    }
    this.setState({ showTip: true })
  }

  /**
   * 移除tooltip
   */
  onMouseOut = () => {
    this.setState({ showTip: false })
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
