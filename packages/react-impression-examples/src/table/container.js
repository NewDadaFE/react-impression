import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Card } from 'react-impression'
// import Counter from './components/Counter'
import Filter from './container/Filter'
import * as actions from './reducer'
import FilterContent from './container/FilterContent'
import TableContainer from './container/TableContainer'

class Table extends Component {
  static propTypes = {}

  componentDidMount() {}

  render() {
    // const { total, increment, decrement } = this.props

    return (
      <Card block>
        <Filter />
        <FilterContent />
        <TableContainer />
      </Card>
    )
  }
}

const mapStateToProps = state => ({ total: state.table.total })

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Table)
