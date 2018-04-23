import React from 'react'
import Button from '../index'
// import Basic from './basic.md'
import Basic from './Basic'

// console.log(Basic)
// console.log(React.createElement(Basic))

export default () => {
  return (
    <div>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: Basic
        }}
      /> */}
      <Basic />
    </div>
  )
}
