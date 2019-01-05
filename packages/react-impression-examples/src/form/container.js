import React from 'react'
import CreateOrder from './containers/CreateOrder'
import ChangePassword from './containers/ChangePassword'
import styles from './Container.module.scss'

export default class FormContainer extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <ChangePassword />
        <CreateOrder />
      </div>
    )
  }
}
