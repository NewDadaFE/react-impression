import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Card } from 'react-impression'
import * as actions from '../reducer'
import InlineFilter from '../components/InlineFilter'
import { cityList } from '../config'

class Filter extends Component {
  static propTypes = {
    cityId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    setCityId: PropTypes.func,
  }

  handleCityChange = val => {
    const { setCityId } = this.props
    setCityId(val)
  }

  render() {
    const { cityId } = this.props
    return (
      <Card block>
        <InlineFilter
          label='城市'
          data={cityList}
          onChange={this.handleCityChange}
          value={cityId}
        />
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  cityId: state.table.cityId,
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
