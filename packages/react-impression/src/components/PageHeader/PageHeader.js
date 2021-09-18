import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const PageHeader = props => {
  const { type, extra, title, ghost, ...others } = props
  const titleClassName =
    type === 'modal' ? 'pageHeader-modal-title' : 'pageHeader-content-title'
  return (
    <div
      {...others}
      className={classnames('pageHeader', { 'pageHeader-ghost': ghost })}
    >
      <div className={classnames(titleClassName, 'pageHeader-title')}>
        {title}
      </div>
      <div>{extra}</div>
    </div>
  )
}
PageHeader.propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,
  /**
   * pageHeader类型，分为内容区域类和弹窗类
   */
  type: PropTypes.oneOf(['content', 'modal']),
  /**
   * 右侧自定义操作区
   */
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /**
   * 标题
   */
  title: PropTypes.string,
  /**
   * pageHeader的类型，改变背景色
   */
  ghost: PropTypes.bool,
}
PageHeader.defaultProps = {
  type: 'content',
  ghost: false,
}
export default PageHeader
