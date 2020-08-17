import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

Ico.propTypes = {
  /**
   * 图标类型
   */
  type: PropTypes.string,

  /**
   * 尺寸
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /**
   * 自定义样式
   */
  className: PropTypes.string,
}

Ico.defaultProps = {
  size: 'sm',
}

function Ico(props) {
  const { type, size, className, ...others } = props
  const typeClass = `dada-ico-${type}`
  const sizeClass = size && `dada-ico-${size}`

  return (
    <i
      className={classNames('dada-ico', typeClass, sizeClass, className)}
      {...others}
    />
  )
}

export default Ico
