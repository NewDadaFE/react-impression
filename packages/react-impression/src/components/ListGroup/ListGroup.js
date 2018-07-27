import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import ListGroupItem from '../ListGroupItem'

const ListGroup = ({ className, children, ...others }) => {
  return (
    <ul {...others} className={classnames('list-group', className)}>
      {children}
    </ul>
  )
}

ListGroup.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.any,
  /**
   * 自定义样式
   */
  className: PropTypes.string,
}
ListGroup.Item = ListGroupItem

export default ListGroup
