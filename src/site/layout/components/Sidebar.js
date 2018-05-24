import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router'
import { Icon, Sidebar } from 'react-impression'
import { SIDER_MENU, getMenuDict } from '../config'

const menuDict = getMenuDict()

class AppSidebar extends React.PureComponent {
  static propTypes = {
    router: PropTypes.object,
    loginSuccess: PropTypes.bool,
  }
  state = {
    expandParentId: '',
    activeUrl: '',
  }

  componentDidMount() {
    this.init()
  }

  componentWillReceiveProps() {
    this.init()
  }

  getActiveStyle = url => {
    return url === this.state.activeUrl ? 'active' : ''
  }
  // 获取一个子菜单的高度
  getSubMenuHeight = item => {
    // const { expandParentId } = this.state

    // if (expandParentId !== item.id) return 0

    return item.children.length * 4.2
  }

  // 获取是否新开一页标志
  getTarget = () => {
    return this.props.loginSuccess ? '_blank' : ''
  }

  init = () => {
    const { pathname } = this.props.router.location
    const menu = menuDict[pathname] || {}

    this.setState({
      activeUrl: pathname,
      expandParentId: menu.parentId,
    })
  }

  /**
   * 菜单显示/隐藏
   */
  handleMenuShow = item => {
    const { expandParentId } = this.state
    let newId = item.id

    if (expandParentId === newId) {
      newId = ''
    }

    this.setState({ expandParentId: newId })
  }

  renderMenu = item => {
    const { expandParentId } = this.state

    if (item.url) {
      return (
        <li key={item.id}>
          <Link
            className={`title ${this.getActiveStyle(item.url)}`}
            to={item.url}
            target={this.getTarget()}
          >
            <Icon type={item.icon} className='icon' />
            <span>{item.name}</span>
          </Link>
        </li>
      )
    }

    return (
      <li key={item.id}>
        <a className='title' onClick={() => this.handleMenuShow(item)}>
          <Icon type={item.icon} className='icon' />
          <span>{item.name}</span>

          <Icon
            type={
              item.id === expandParentId ? 'icon-jiantou-up' : 'icon-jiantou'
            }
            className='collapse'
          />
        </a>

        {!!item.children && (
          <dl style={{ height: `${this.getSubMenuHeight(item)}rem` }}>
            {item.children.map(child => (
              <dd key={child.id} className={this.getActiveStyle(child.url)}>
                <Link to={child.url} target={this.getTarget()}>
                  <span>{child.name}</span>
                </Link>
              </dd>
            ))}
          </dl>
        )}
      </li>
    )
  }

  render() {
    return (
      <Sidebar>
        <Sidebar.Header>ReactImpression</Sidebar.Header>
        <Sidebar.Body>
          <div className='side-bar'>
            <ul>{SIDER_MENU.map(this.renderMenu)}</ul>
          </div>
        </Sidebar.Body>
      </Sidebar>
    )
  }
}

export default withRouter(AppSidebar)
