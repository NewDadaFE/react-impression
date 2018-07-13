import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import ListGroupItem from '../ListGroupItem'

/**
 * ListGroup组件.
 */
const ListGroup = ({ className, children, ...others }) => {
  return (
    <ul {...others} className={classnames('list-group', className)}>
      {children}
    </ul>
  )
}

ListGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}
ListGroup.Item = ListGroupItem

export default ListGroup
