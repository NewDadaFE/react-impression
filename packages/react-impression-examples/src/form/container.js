import React from 'react'
import CreateOrder from './containers/CreateOrder'
import ChangePassword from './containers/ChangePassword'
import styles from './Container.module.scss'

export default function FormContainer(props) {
  return (
    <div className={styles.container}>
      <ChangePassword />
      <CreateOrder />
    </div>
  )
}
