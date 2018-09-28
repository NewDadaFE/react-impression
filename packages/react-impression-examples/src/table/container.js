import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Card } from 'react-impression'
// import Counter from './components/Counter'
import Filter from './container/Filter'
import * as actions from './reducer'
import FilterContent from './container/FilterContent'
import TableContainer from './container/TableContainer'
import AddModal from './components/AddModal'

class Table extends Component {
  state = {
    showAddModal: false,
  }

  componentDidMount() {}

  handleAddToggleClick = () => {
    this.setState({
      showAddModal: !this.state.showAddModal,
    })
  }

  render() {
    // const { total, increment, decrement } = this.props
    const { showAddModal } = this.state

    return (
      <Card block>
        <Filter />
        <FilterContent handleAddToggleClick={this.handleAddToggleClick} />
        <TableContainer />
        <AddModal isOpen={showAddModal} onClose={this.handleAddToggleClick} />
      </Card>
    )
  }
}

const mapStateToProps = state => ({ total: state.table.total })

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Table)
