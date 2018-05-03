import React from 'react'
import Card from '@/site/components/Card'
import Type from './Type'
import Size from './Size'
import styles from './index.scss'

export default () => {
  return (
    <div className={styles.button}>
      <Card component={Type} />
      <Card component={Size} />
    </div>
  )
}
