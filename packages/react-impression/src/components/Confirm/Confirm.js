import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Confirm extends React.PureComponent {
  static propTypes = {
    /**
     * 子组件
     */
    children: PropTypes.any,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 类型
     */
    type: PropTypes.oneOf(['warning', 'info', 'danger']),

    /**
     * 确定按钮内容
     */
    okText: PropTypes.string,

    /**
     * 取消按钮内容
     */
    cancelText: PropTypes.string,

    /**
     * 确定按钮点击
     */
    onOkClick: PropTypes.func,

    /**
     * 取消按钮点击
     */
    onCancelClick: PropTypes.func,
  }

  static defaultProps = {
    type: 'warning',
    okText: '确定',
    cancelText: '取消',
  }

  /**
   * 根据类型获取Icon.
   * @return {[String]} [Icon类型]
   */
  getAddonByType = type => {
    switch (type) {
      case 'info':
        return 'fa-question-circle text-primary'
      case 'danger':
        return 'fa-exclamation-circle text-danger'
      default:
        return 'fa-exclamation-circle text-warning'
    }
  }

  render() {
    const {
        type,
        okText,
        cancelText,
        onOkClick,
        onCancelClick,
        className,
        children,
        ...others
      } = this.props
    const iconTypeClass = this.getAddonByType(type)

    return (
      <div className={classnames('confirm', className)}>
        <div {...others} className='confirm-dialog'>
          <div className='confirm-addon'>
            <i className={classnames('fa', iconTypeClass)} />
          </div>
          <div className='confirm-body'>{children}</div>
          <div className='confirm-footer'>
            <div className='confirm-btn-sure' onClick={onOkClick}>
              {okText}
            </div>
            <div className='confirm-btn-cancel' onClick={onCancelClick}>
              {cancelText}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
