import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Card } from 'react-impression'
import Filter from './container/Filter'
import * as actions from './reducer'
import FilterContent from './container/FilterContent'
import TableContainer from './container/TableContainer'
import AddModal from './components/AddModal'
import styles from './Container.module.scss'

class Table extends Component {
  state = {
    showAddModal: false,
  }

  handleAddToggleClick = () => {
    this.setState({
      showAddModal: !this.state.showAddModal,
    })
  }

  render() {
    const { showAddModal } = this.state

    return (
      <Card block className={styles['table-wrap']}>
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
