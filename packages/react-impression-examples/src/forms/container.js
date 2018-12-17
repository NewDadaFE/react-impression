import React, { Component } from 'react'
import { Nav, NavItem, Card } from 'react-impression'
import CityEdit from './components/CityEdit'
import OrderEdit from './components/OrderEdit'
import TableEdit from './components/TableEdit'
import { ruleType, tableInfo } from './config'
import './container.module.scss'

class FormInfo extends Component {
  state = {
    type: 1,
  }

  changeType = val => this.setState({ type: val })

  render() {
    const { type } = this.state
    return (
      <div styleName='container'>
        <h4 className='offset-b'>第一个例子</h4>
        <Card>
          <Nav activeKey={type} onSelect={this.changeType}>
            <NavItem eventKey={1}>城市规则</NavItem>
            <NavItem eventKey={2}>派单规则</NavItem>
          </Nav>
          {type === ruleType.CITY ? <CityEdit /> : <OrderEdit />}
        </Card>
        <h4 className='offset-b'>第二个例子</h4>
        <TableEdit data={tableInfo} />
      </div>
    )
  }
}

export default FormInfo
