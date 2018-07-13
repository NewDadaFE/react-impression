import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * CollapseBody 组件
 */
const CollapseBody = ({ className, children, ...others }) => {
  delete others.onClick

  return (
    <div {...others} className={classnames('collapse-body', className)}>
      {children}
    </div>
  )
}

CollapseBody.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default CollapseBody
