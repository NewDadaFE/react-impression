import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = props => {
  const { title, desc, children, className, ...rest } = props

  return (
    <div {...rest} className={className}>
      <div className='offset-b-lg'>
        <h3>{title}</h3>
        <p>{desc}</p>
        <h3>使用演示</h3>
      </div>
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
