import React, { Component } from 'react';


export default class Counter extends Component {
    render() {
        const { increment, incrementIfOdd, decrement, counter } = this.props;
        return (
            <p>
                Clicked : {counter} times
                {' '}
                <button className="btn btn-primary" onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
                {' '}
                <button onClick={incrementIfOdd}>Increment if odd</button>
            </p>
        );
    }
}
