import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

export default class Confirm extends React.PureComponent {
  static propTypes = {
    /**
     * 子组件
     */
    children: PropTypes.node,

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

  componentDidMount() {
    this.disableScroll()
  }

  componentWillUnmount() {
    this.enableScroll()
  }

  disableScroll() {
    const documentBody = document.body

    if (documentBody) {
      documentBody.style.setProperty('overflow', 'hidden')
    }
  }

  enableScroll() {
    const documentBody = document.body

    if (documentBody) {
      documentBody.style.removeProperty('overflow')
    }
  }

  /**
   * 根据类型获取Icon
   * @return String Icon类型
   */
  getAddonByType = type => {
    switch (type) {
      case 'info':
        return 'dada-ico-question-circle text-primary'
      case 'danger':
        return 'dada-ico-exclamation-circle text-danger'
      default:
        return 'dada-ico-exclamation-circle text-warning'
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
            <i className={classnames('dada-ico', iconTypeClass)} />
          </div>
          <div className='confirm-body'>{children}</div>
          <div className='confirm-footer'>
            <Button theme='secondary' onClick={onCancelClick}>
              {cancelText}
            </Button>
            <Button theme='primary' onClick={onOkClick}>
              {okText}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
