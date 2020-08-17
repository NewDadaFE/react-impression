import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

Ico.propTypes = {
  /**
   * 图标类型
   */
  type: PropTypes.string,

  /**
   * TODO 尺寸
   */
  size: PropTypes.string,

  /**
   * 自定义样式
   */
  className: PropTypes.string,
}

function Ico(props) {
  const { type, size, className, ...others } = props
  const typeClass = `dada-ico-${type}`

  return (
    <i className={classNames('dada-ico', typeClass, className)} {...others} />
  )
}

export default Ico
