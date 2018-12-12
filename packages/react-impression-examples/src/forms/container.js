import React, { Component } from 'react'
import {
  Nav,
  NavItem,
  Card,
  Form,
  FormGroup,
  Input,
  Button,
} from 'react-impression'
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
          <div>
            <Form>
              <FormGroup>
                <label>姓名</label>
                <Input type='text' placeholder='Jane Doe' />
              </FormGroup>
              <FormGroup>
                <label>邮箱</label>
                <Input type='text' placeholder='hello@example.com' />
              </FormGroup>
              <FormGroup>
                <label>电话</label>
                <Input type='text' placeholder='15698801833' />
              </FormGroup>
              <FormGroup>
                <label>联系人</label>
                <Input type='text' placeholder='填写联系人' />
              </FormGroup>
              <FormGroup>
                <label>爱好</label>
                <Input type='text' placeholder='编程' />
              </FormGroup>
              <FormGroup>
                <Button theme='secondary'>搜索</Button>
                <Button theme='default' style={{ marginLeft: 20 }}>
                  重置
                </Button>
              </FormGroup>
            </Form>
          </div>
        </Card>
      </div>
    )
  }
}

export default FormInfo
