import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// 获取小图标
const getAddonByType = type => {
  switch (type) {
    case 'danger':
      return 'fa-exclamation-circle text-danger'
    default:
      return 'fa-exclamation-triangle text-warning'
  }
}

/**
 * Alert 组件
 */
export default class Alert extends PureComponent {
  // props 校验
  static propTypes = {
    children: PropTypes.any,
    // 自定义样式
    className: PropTypes.string,
    // 类型（success、primary、warning、danger）
    type: PropTypes.string,
    // 回调
    onClick: PropTypes.func,
    // 按钮名字
    btnText: PropTypes.string,
  }
  // 默认props
  static defaultProps = {
    type: 'info',
    btnText: '确定',
  }
  render() {
    let { type, btnText, onClick, className, children, ...others } = this.props,
      iconTypeClass = getAddonByType(type)

    return (
      <div className={classnames('alert', className)}>
        <div {...others} className='alert-dialog'>
          <div className='alert-addon'>
            <i className={classnames('fa', iconTypeClass)} />
          </div>
          <div className='alert-body'>{children}</div>
          <div className='alert-footer' onClick={onClick}>
            {btnText}
          </div>
        </div>
      </div>
    )
  }
}
