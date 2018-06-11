import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
/**
 * 面包屑组件.
 */
const nodeLi = (children, index) => {
  return (
    <li key={index} className='breadcrumb-item'>
      {children || null}
    </li>
  )
}

const Breadcrumb = ({
  separator,
  children,
  className,
  routes,
  params = {},
  ...others
}) => {
  let separatorClass = separator ? `breadcrumb-${separator}` : null
  let crumb

  if (routes && routes.length > 0) {
    let length = routes.length
    const paths = []

    crumb = routes.map((route, index) => {
      route.path = route.path || ''
      let path = route.path.replace(/^\//, '')

      Object.keys(params).forEach(key => {
        path = path.replace(`:${key}`, params[key])
      })
      if (path) {
        paths.push(path)
      }
      if (index < length - 1) {
        return nodeLi(
          <Link key={route.breadcrumbName || path} to={`/${paths.join('/')}`}>
            {path === '' ? 'Home' : path}
          </Link>,
          index
        )
      }

      return nodeLi(<span key={route}>{route.path}</span>, index)
    })
  } else if (children) {
    crumb = React.Children.map(children, (child, index) => {
      if (!child) {
        return child
      }

      return nodeLi(child, index)
    })
  }

  return (
    <ol
      {...others}
      className={classnames('breadcrumb', className, separatorClass)}
    >
      {crumb}
    </ol>
  )
}

Breadcrumb.propTypes = {
  // 分隔
  routes: PropTypes.array,
  separator: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  params: PropTypes.object,
}

export default Breadcrumb
