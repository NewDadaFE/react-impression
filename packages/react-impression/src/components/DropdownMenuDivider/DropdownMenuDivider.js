import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const DropdownMenuDivider = ({ className }) => {
  return <li className={classnames('dropdown-divider', className)} />
}

DropdownMenuDivider.propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,
}

export default DropdownMenuDivider
