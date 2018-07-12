import React from 'react'
import { Navbar, Form, Badge, Icon, Split } from 'react-impression'
import './Header.module.scss'

// Header
const Header = () => {
  return (
    <Navbar>
      <Form type='inline' className='pull-right'>
        <span>Welcome to Impression React generator.</span>
        <span>
          <Badge theme='warning'>
            <Icon size='lg' type='bell' />
          </Badge>
        </span>
        <span>
          <Badge content='3' size='sm' theme='danger'>
            <Icon size='lg' type='envelope-o' />
          </Badge>
        </span>
        <span className='no-margin'>
          <span styleName='navbar-user' />
          <span className='offset-l'>Impression</span>
        </span>
        <Split />
        <a href='javascript:void(0);' className='nav-link'>
          登出
        </a>
      </Form>
    </Navbar>
  )
}

export default Header
