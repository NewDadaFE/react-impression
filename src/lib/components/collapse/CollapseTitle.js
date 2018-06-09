import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * CollapseTitle 组件
 */
const CollapseTitle = ({ onClick, children, className, ...others }) => {
  return (
    <div
      onClick={onClick}
      {...others}
      className={classnames('collapse-title', className)}
    >
      {children}
      <i className='fa fa-angle-right collapse-title-addon' />
    </div>
  )
}

CollapseTitle.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default CollapseTitle
