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
  }

  static defaultProps = {
    status: 'ready',
  }

  render() {
    const {
      status,
      icon,
      title,
      description,
      popover,
      className,
      children,
    } = this.props

    const stepIcon = (
      <div className='step-icon'>{icon || <span className='step-dot' />}</div>
    )

    return (
      <div className={classnames('step', className, status)}>
        <div className='step-content'>
          {popover ? (
            <Popover position='top' content={popover}>
              {stepIcon}
            </Popover>
          ) : (
            stepIcon
          )}
          {title && <div className='step-title'>{title}</div>}
          <div className='step-custom'>
            {description}
            {children}
          </div>
        </div>
      </div>
    )
  }
}
