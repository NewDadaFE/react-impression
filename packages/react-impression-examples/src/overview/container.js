import React from 'react'
import Filter from './components/Filter'
import OverviewData from './components/OverviewData'
import BaseInfo from './components/BaseInfo'
import Rank from './components/Rank'
import './container.scss'

export default class Overview extends React.Component {
  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div styleName='container'>
        <Filter />
        <OverviewData />
        <BaseInfo />
        <Rank />
      </div>
    )
  }
}
