import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class NavbarLink extends React.Component {
  static propTypes = {
    /**
     * 链接
     */
    href: PropTypes.string,

    /**
     * 链接打开位置
     */
    target: PropTypes.string,

    /**
     * 激活状态
     */
    active: PropTypes.bool,

    /**
     * 自定义点击行为
     */
    onClick: PropTypes.func,

    /**
     * 子组件
     */
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    target: '_blank',
    active: false,
  }

  get className() {
    return classNames('navbar-link', { active: this.props.active })
  }

  render() {
    const { href, target, onClick, children } = this.props

    if (href) {
      return (
        <div className='navbar-link-container'>
          <a href={href} target={target} className={this.className}>
            {children}
          </a>
        </div>
      )
    }

    return (
      <div className='navbar-link-container'>
        <a onClick={onClick} className={this.className}>
          {this.props.children}
        </a>
      </div>
    )
  }
}

export default NavbarLink
