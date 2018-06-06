import React from 'react'
import { Navbar } from 'react-impression'
import '../index.scss'

/**
 * Header.
 */
const Header = () => {
  return (
    <div styleName='header'>
      <Navbar>
        <Navbar.Button theme='primary'>
          <i className='fa fa-bars' />
        </Navbar.Button>
      </Navbar>
    </div>
  )
}

export default Header
