import React from 'react'
import Card from '@/site/components/Card'
import Type from './Type'
import Size from './Size'
import Ghost from './Ghost'
import styles from './index.scss'

export default () => {
  return (
    <div className={styles.button}>
      <Card component={Type} />
      <Card component={Ghost} cardClass={styles.ghost} />
      <Card component={Size} />
    </div>
  )
}
