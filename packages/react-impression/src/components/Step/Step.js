import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Popover from '../Popover'

export default class Step extends React.PureComponent {
  static propTypes = {
    /**
     * 节点状态，配合Steps组件使用时设置无效
     */
    status: PropTypes.oneOf(['ready', 'finish', 'error', 'current']),
    /**
     * 节点图标
     */
    icon: PropTypes.node,
    /**
     * 节点标题
     */
    title: PropTypes.string,
    /**
     * 节点描述
     */
    description: PropTypes.string,
    /**
     * 设置鼠标悬停图标提示内容
     */
    popover: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
     * 自定义样式
     */
    className: PropTypes.string,
    /**
     * 子组件
     */
    children: PropTypes.node,
    /**
     * 当前index
     * @ignore
     */
    index: PropTypes.number,
    /**
     * 下一个步骤状态
     * @ignore
     */
    nextStatus: PropTypes.string,
    /**
     * 点击事件
     * @ignore
     */
    onChange: PropTypes.func,
  }

  static defaultProps = {
    status: 'ready',
    title: '',
    description: '',
  }

  state = {
    selectedIdx: -1,
  }

  onMouseOver = () => this.setState({ selectedIdx: this.props.index })

  onMouseOut = () => this.setState({ selectedIdx: -1 })

  onStepClick = () => {
    const { onChange, index } = this.props
    if (onChange) {
      this.setState({ selectedIdx: index })
      onChange(index)
    }
  }

  render() {
    const { selectedIdx } = this.state
    const {
      status,
      nextStatus,
      icon,
      title,
      description,
      popover,
      className,
      children,
      index,
    } = this.props

    const stepIcon = (
      <div className='step-icon'>{icon || <span className='step-dot' />}</div>
    )

    return (
      <div
        className={classnames(
          'step',
          className,
          `${selectedIdx === index ? 'selected' : 'not-selected'}`,
          status,
          `to-${nextStatus}`
        )}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onClick={this.onStepClick}
      >
        <div className='step-content'>
          {popover ? (
            <Popover position='top' content={popover}>
              {stepIcon}
            </Popover>
          ) : (
            stepIcon
          )}
          <div className='step-info'>
            <div className='step-title'>{title}</div>
            <div className='step-custom'>
              {description}
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
