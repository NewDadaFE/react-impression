import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * Dropdown 菜单分割线组件.
 */
const DropdownMenuDivider = ({ className }) => {
  return <li className={classnames('dropdown-divider', className)} />
}

DropdownMenuDivider.propTypes = {
  className: PropTypes.string,
}

export default DropdownMenuDivider
