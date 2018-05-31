import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = props => {
  const { title, desc, children, className, ...rest } = props

  return (
    <div {...rest} className={className}>
      <h1>{title}</h1>
      <p>{desc}</p>
      <h1>使用演示</h1>
      {children}
    </div>
  )
}

Wrapper.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
}

export default Wrapper
