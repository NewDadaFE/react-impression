import React, { Component } from 'react'
import {
  Nav,
  NavItem,
  Card,
  // Form,
  // FormGroup,
  // Input,
  // Button,
  // Row,
  // Col,
} from 'react-impression'
import Edit from './components/Edit'
import './container.module.scss'

class FormInfo extends Component {
  state = {
    type: 1,
  }
  render() {
    const { type } = this.state
    return (
      <div styleName='container'>
        <Card>
          <Nav activeKey={type}>
            <NavItem eventKey={1}>城市规则</NavItem>
            <NavItem eventKey={2}>派单规则</NavItem>
          </Nav>
          <Edit />
        </Card>
      </div>
    )
  }
}

export default FormInfo
