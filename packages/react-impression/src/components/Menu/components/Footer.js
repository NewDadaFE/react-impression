import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import MenuContext from './MenuContext'
import Ico from '../../Ico'

function Footer({ collapsible, onCollapsedChange }) {
  const { collapsed } = useContext(MenuContext)

  const type = useMemo(() => (collapsed ? 'fold-right' : 'fold-left'), [
    collapsed,
  ])

  return (
    <div className={classnames('menu-footer', { 'menu-hidden': !collapsible })}>
      <Ico type={type} size='md' onClick={onCollapsedChange} />
    </div>
  )
}

Footer.propTypes = {
  /**
   * 可折叠
   */
  collapsible: PropTypes.bool,
  /**
   * 点击折叠回调
   * @ignore
   */
  onCollapsedChange: PropTypes.func,
}

Footer.defaultProps = {
  collapsible: false,
  onCollapsedChange: () => {},
}

export default Footer
