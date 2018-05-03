import React from 'react'
import ReactDOM from 'react-dom'
import ButtonExample from './examples/button/'
import '../lib/styles/index.scss'

const App = () => {
  return (
    <div>
      <ButtonExample />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
