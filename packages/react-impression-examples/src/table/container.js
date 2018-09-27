import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Notification, Card } from 'react-impression'
// import Counter from './components/Counter'
import Filter from './container/Filter'
import * as actions from './reducer'

class Table extends Component {
  static propTypes = {}

  componentDidMount() {
    Notification.info({
      closeable: false,
      title: '通知',
      message: '欢迎，这是一个Info通知。',
    })
  }

  render() {
    // const { total, increment, decrement } = this.props

    return (
      <Card block>
        <Filter />
        {/* <Counter counter={total} increment={increment} decrement={decrement} /> */}
      </Card>
    )
  }
}

const mapStateToProps = state => ({ total: state.table.total })

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Table)
