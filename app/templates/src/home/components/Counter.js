import React, { Component, PropTypes } from 'react';
import { Button } from 'react-impression';

// 计数器组件
export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  };
  onIncrementHandle = () => {
    let { increment } = this.props;

    increment();
  };
  render() {
    const { decrement, counter } = this.props;

    return (
      <p>
        Clicked: {counter} times
        {' '}
        <Button onClick={this.onIncrementHandle}>+</Button>
        {' '}
        <Button theme="secondary" onClick={decrement}>-</Button>
        {' '}
      </p>
    );
  }
}
