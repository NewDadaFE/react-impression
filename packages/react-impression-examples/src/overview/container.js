import React from 'react'
import Filter from './components/Filter'
import OverviewData from './components/OverviewData'
import BaseInfo from './components/BaseInfo'
import Rank from './components/Rank'
import styles from './Container.module.scss'

export default function Overview(props) {
  return (
    <div className={styles.container}>
      <Filter />
      <OverviewData />
      <BaseInfo />
      <Rank />
    </div>
  )
}
