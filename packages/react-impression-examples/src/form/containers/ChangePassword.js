import React from 'react'
import {
  Card,
  CardBlock,
  CardHeader,
  Form,
  FormGroup,
  Col,
  FormControlLabel,
  Input,
  Button,
  Message,
} from 'react-impression'

export default class ChangePassWord extends React.Component {
  state = {
    password: '',
    confirmPassword: '',
  }

  checkPasswd = () => {
    const values = this.state.password

    if (!values) {
      Message.error('请输入新密码')
      return
    } else if (values.length < 8) {
      Message.error('密码必须大于8位')
      return
    } else if (values.length > 16) {
      Message.error('密码必须小于16位')
      return
    }

    return true
  }

  checkPasswd2 = () => {
    const { confirmPassword: values, password } = this.state

    if (!values) {
      Message.error('请再次输入新密码')
      return
    } else if (values !== password) {
      Message.error('两次输入密码不一致')
      return
    }

    return true
  }

  validateAllFormField = () => {
    if (!this.checkPasswd() || !this.checkPasswd2()) return
    Message.success('更新密码成功')
  }

  render() {
    const { password, confirmPassword } = this.state

    return (
      <Card>
        <CardHeader className='text-left'>第一个例子</CardHeader>
        <CardBlock>
          <Form type='horizontal'>
            <FormGroup>
              <Col col='2' className='text-right'>
                <FormControlLabel>新密码:</FormControlLabel>
              </Col>
              <Col col='8'>
                <Input
                  type='text'
                  placeholder='请输入新密码'
                  value={password}
                  onChange={val => this.setState({ password: val })}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col col='2' className='text-right'>
                <FormControlLabel>确认密码:</FormControlLabel>
              </Col>
              <Col col='8'>
                <Input
                  type='text'
                  placeholder='两次密码保持一致'
                  value={confirmPassword}
                  onChange={val => this.setState({ confirmPassword: val })}
                />
              </Col>
            </FormGroup>
            <FormGroup style={{ justifyContent: 'center' }}>
              <Button theme='primary' onClick={this.validateAllFormField}>
                提交
              </Button>
            </FormGroup>
          </Form>
        </CardBlock>
      </Card>
    )
  }
}
