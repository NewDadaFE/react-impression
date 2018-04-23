import React from 'react'
import jsxToString from 'jsx-to-string'
// import reactToString from 'react-element-to-jsx-string'
import Button from '../index'

const BasicCode = () => {
  const handleClick = () => {
    console.log(123)
  }

  return (
    <div>
      <Button ghost type="primary" onClick={handleClick}>
        huang
      </Button>
    </div>
  )
}

export default () => {
  return (
    <div>
      <BasicCode />
      <h1>Button标题</h1>
      <pre>
        <code>{jsxToString(<BasicCode />)}</code>
      </pre>
    </div>
  )
}
