import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Notification } from 'react-impression'
import Counter from './components/Counter'
import * as actions from './reducer'
import injectSheet from 'react-jss'

const styles = {
  root: {
    margin: {
      right: 15,
      bottom: 15,
      left: 15,
    },
  },
}

class Home extends Component {
  static propTypes = {
    classes: PropTypes.object,
    total: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
  }

  componentDidMount() {
    Notification.info({
      closeable: false,
      title: '通知',
      message: '欢迎，这是一个Info通知。',
    })
  }

  render() {
    const { classes, total, increment, decrement } = this.props

    return (
      <div className={classes.root}>
        <Counter counter={total} increment={increment} decrement={decrement} />
      </div>
    )
  }
}

const StyledHome = injectSheet(styles)(Home)

const mapStateToProps = state => ({ total: state.home.total })

export default connect(
  mapStateToProps,
  actions
)(StyledHome)
