import React from 'react'
import {
  Card,
  Form,
  InputGroup,
  Button,
  Checkbox,
  Icon,
} from 'react-impression'

// 登录页面
const LoginView = () => {
  return (
    <div className='absolute-center login-bg'>
      <div className='absolute-center login-mask' />
      <Card className='absolute-center login-card'>
        <Card.Block>
          <Form type='horizontal'>
            <Form.Group>
              <InputGroup>
                <InputGroup.Addon>
                  <Icon type='user' />
                </InputGroup.Addon>
                <InputGroup.Input type='text' placeholder='username' />
              </InputGroup>
            </Form.Group>
            <Form.Group style={{ marginBottom: '2rem' }}>
              <InputGroup>
                <InputGroup.Addon>
                  <Icon type='lock' />
                </InputGroup.Addon>
                <InputGroup.Input type='password' placeholder='password' />
              </InputGroup>
            </Form.Group>
            <Form.Group className='flex-justify-between'>
              <Checkbox defaultChecked className='no-padding'>
                Remember me
              </Checkbox>
              <a href='javascript:void(0);'>Forgot password?</a>
            </Form.Group>
            <Form.Group>
              <Button href='/#/app' block>
                Sign&nbsp;&nbsp;&nbsp;in
              </Button>
            </Form.Group>
          </Form>
        </Card.Block>
        <div className='text-pure login-copyright'>
          Copyright © 2016 Impression components
        </div>
      </Card>
    </div>
  )
}

export default LoginView
