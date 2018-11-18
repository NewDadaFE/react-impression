import React, { PropTypes } from 'react'
import { Loading, Notification, Message } from 'react-impression'
import Header from './Header'
import Sidebar from './Sidebar'
import injectSheet from 'react-jss'

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
}

const Layout = ({ classes, children }) => (
  <div className={classes.container}>
    <Sidebar />
    <div className={classes.content}>
      <Header />
      <Notification />
      <Message />
      <Loading type='fountain' duration={500} />
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.element,
}

export default injectSheet(styles)(Layout)
