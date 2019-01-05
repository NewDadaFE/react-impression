import React from 'react'
import { Navbar, Form, Badge, Icon, Split } from 'react-impression'
import styles from './Header.module.scss'

// Header
const Header = () => {
  return (
    <Navbar>
      <Form type='inline' className='pull-right offset-r-lg'>
        <span>欢迎使用React Impression</span>
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
          <span className={styles['navbar-user']} />
          <span className='offset-l'>Impression</span>
        </span>
        <Split />
        <a href='#top' className='nav-link'>
          登出
        </a>
      </Form>
    </Navbar>
  )
}

export default Header
