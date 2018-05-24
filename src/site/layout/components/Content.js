import React from 'react'
import PropTypes from 'prop-types'
// import CSSTransitionGroup from 'react-transition-group/TransitionGroup'
import styles from '../index.scss'

const Content = ({ children }) => {
  return (
    // <CSSTransitionGroup
    //   component='div'
    //   styleName='content-wrapper'
    //   transitionName='fade'
    //   transitionEnterTimeout={900}
    //   transitionLeaveTimeout={900}>
    //   <div key={children.props.location.pathname} styleName='content'>
    //     {children}
    //   </div>
    // </CSSTransitionGroup>

    <div className={styles['content-wrapper']}>
      <div className={styles['content']}>{children}</div>
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.any,
}

export default Content
