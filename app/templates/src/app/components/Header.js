import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, NavbarButton } from 'react-impression'
import injectSheet from 'react-jss'

const styles = {
  root: {
    margin: {
      bottom: 30,
    },
  },
  container: {
    display: 'flex',
  },
  content: {
    flex: 1,
  },
}

const Header = ({ classes }) => (
  <div className={classes.root}>
    <Navbar>
      <div className={classes.container}>
        <NavbarButton>
          <i className='fa fa-bars' />
        </NavbarButton>
        <div className={classes.content} />
        <NavbarButton>
          <i className='fa fa-search' />
        </NavbarButton>
      </div>
    </Navbar>
  </div>
)

Header.propTypes = {
  classes: PropTypes.object,
}

export default injectSheet(styles)(Header)
