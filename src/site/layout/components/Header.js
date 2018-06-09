import React from 'react'
import { Navbar } from 'react-impression'

/**
 * Header.
 */
const Header = () => {
  return (
    <Navbar>
      <Navbar.Button theme='primary'>
        <i className='fa fa-bars' />
      </Navbar.Button>
    </Navbar>
  )
}

export default Header
