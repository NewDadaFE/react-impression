import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Breadcrumb } from 'react-impression'

const WrapBreadcrumb = ({ routes }) => {
  routes = routes.slice(1)
  let length = routes.length

  return (
    <Breadcrumb>
      {routes.map((route, index) => {
        if (index < length - 1) {
          return (
            <Link key={route} to={`/${route.path}`}>
              {route.path === 'app' ? 'home' : route.path}
            </Link>
          )
        }

        return <span key={route}>{route.path}</span>
      })}
    </Breadcrumb>
  )
}

WrapBreadcrumb.propTypes = {
  routes: PropTypes.array,
}

export default WrapBreadcrumb
