import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function Header({ logo, name, nameLogo }) {
  const onImgError = e => {
    e.persist()
    const element = e.target
    element.parentNode && element.parentNode.remove(element)
  }

  return (
    <div
      className={classnames('menu-header', {
        'menu-hidden': !logo && !name && !nameLogo,
      })}
    >
      <img src={logo} className='logo' alt='logo' onError={onImgError} />
      <span className='name' style={{ backgroundImage: `url(${nameLogo})` }}>
        {name}
      </span>
    </div>
  )
}

Header.propTypes = {
  /**
   * 头部logo
   */
  logo: PropTypes.string,
  /**
   * 头部文案
   */
  name: PropTypes.string,
  /**
   * 头部图片形式的文案
   */
  nameLogo: PropTypes.string,
}

Header.defaultProps = {
  logo: '',
  name: '',
  nameLogo: '',
}

export default Header
