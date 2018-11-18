import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-impression'

const Counter = props => (
  <div>
    <p>Clicked: {props.counter} times </p>
    <Button onClick={props.increment}>+</Button>{' '}
    <Button theme='secondary' onClick={props.decrement}>
      -
    </Button>{' '}
  </div>
)

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
}

export default Counter
