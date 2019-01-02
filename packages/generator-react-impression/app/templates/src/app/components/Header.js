import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, NavbarButton } from 'react-impression'
import injectSheet from 'react-jss'

const styles = {
  container: {
    display: 'flex',
    margin: {
      bottom: 30,
    },
  },
  content: {
    flex: 1,
  },
}

const Header = ({ classes }) => (
  <Navbar className={classes.container}>
    <NavbarButton>
      <i className='fa fa-bars' />
    </NavbarButton>
    <div className={classes.content} />
    <NavbarButton>
      <i className='fa fa-search' />
    </NavbarButton>
  </Navbar>
)

Header.propTypes = {
  classes: PropTypes.object,
}

export default injectSheet(styles)(Header)
