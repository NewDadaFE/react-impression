import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Trigger from '../Trigger'

export default class Popover extends React.PureComponent {
  static propTypes = {
    /**
     * 显示位置
     */
    position: PropTypes.oneOf([
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'right',
      'left',
    ]).isRequired,
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
    /**
     * 自定义弹出层样式
     */
    className: PropTypes.string,
  }

  static defaultProps = {
    position: 'right',
    trigger: 'hover',
  }

  render() {
    const {
      className,
      children,
      position,
      title,
      content,
      trigger,
      ...others
    } = this.props

    return (
      <Trigger
        showAction={trigger}
        hideAction={trigger === 'click' ? 'click' : undefined}
        placement={position}
        popup={
          <>
            {title && <div className='popover-title'>{title}</div>}
            <div className='popover-content'>{content}</div>
          </>
        }
        stretch='auto'
        popupClassName={classNames('popover', className)}
        transitionName='fade'
        popupBorder
        arrowVisible
        {...others}
      >
        {children}
      </Trigger>
    )
  }
}
