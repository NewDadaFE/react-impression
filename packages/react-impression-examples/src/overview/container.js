import React from 'react'
import Filter from './components/Filter'
import OverviewData from './components/OverviewData'
import BaseInfo from './components/BaseInfo'
import Rank from './components/Rank'
import './container.module.scss'

export default class Overview extends React.Component {
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
