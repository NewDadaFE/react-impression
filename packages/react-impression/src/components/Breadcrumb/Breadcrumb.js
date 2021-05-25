import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from '../index'
import DropdownTrigger from '../DropdownTrigger'
import DropdownMenu from '../DropdownMenu'
import DropdownMenuItem from '../DropdownMenuItem'

// 最多展示级数
const MAX_PATH_NUMBER = 4
const Breadcrumb = ({ children, className, ...others }) => {
  let _children = null
  // 最多展示四级，超过四级收起
  if (React.Children.count(children) <= MAX_PATH_NUMBER) {
    _children = React.Children.map(children, (child, index) => {
      if (!child) {
        return child
      }
      return (
        <li key={index} className={classnames('breadcrumb-item')}>
          {child}
          {index < children.length - 1 && (
            <i className='dada-ico dada-ico-angle-right' />
          )}
        </li>
      )
    })
  }
  // 超过四级菜单
  if (React.Children.count(children) > MAX_PATH_NUMBER) {
    const childrenArray = React.Children.toArray(children)

    // 超出收起的菜单
    const packedList = childrenArray.slice(
      1,
      React.Children.count(children) - (MAX_PATH_NUMBER - 2)
    )
    childrenArray.splice(
      1,
      React.Children.count(children) - (MAX_PATH_NUMBER - 1),
      <Dropdown trigger='hover'>
        <DropdownTrigger>
          <i
            className={classnames(
              'dada-ico',
              'dada-ico-ellipsis-h',
              'breadcrumb-font-ellipsis'
            )}
          />
        </DropdownTrigger>
        <DropdownMenu>
          {packedList.map((dropdownChild, index) => {
            return (
              <DropdownMenuItem key={index}>{dropdownChild}</DropdownMenuItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    )
    _children = childrenArray.map((child, index) => {
      if (!child) {
        return child
      }
      return (
        <li key={index} className={classnames('breadcrumb-item')}>
          {child}
          {index < MAX_PATH_NUMBER - 1 && (
            <i className='dada-ico dada-ico-angle-right' />
          )}
        </li>
      )
    })
  }

  return (
    <ol
      {...others}
      className={classnames('breadcrumb breadcrumb-arrow', className)}
    >
      {_children}
    </ol>
  )
}

Breadcrumb.propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.node,
}

export default Breadcrumb
