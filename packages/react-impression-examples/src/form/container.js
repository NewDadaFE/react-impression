import React from 'react'
import CreateOrder from './containers/CreateOrder'
import ChangePassword from './containers/ChangePassword'
import './container.module.scss'

export default class FormContainer extends React.Component {
  render() {
    return (
      <div styleName='container'>
        <ChangePassword />
        <CreateOrder />
      </div>
    )
  }
}
