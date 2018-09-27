import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PS from 'perfect-scrollbar'

export default class SidebarBody extends PureComponent {
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.node,
    /**
     * 侧边栏菜单配置
     */
    config: PropTypes.array,
    /**
     * 激活的路由
     */
    activePath: PropTypes.string,
    /**
     * 侧边栏选中事件，仅在配置项用法下有效
     */
    onSelect: PropTypes.func,
  }

  constructor(props) {
    super(props)
    const { config, activePath } = this.props
    if (config) {
      const pathKey = this.getPathKey(activePath)
      this.state = {
        // 展开控制
        unfoldControl: config.map((item, index) => {
          //  命中一级则展开
          return pathKey.length > 1 && index === pathKey[0]
        }),
      }
    }
  }

  componentDidMount() {
    // 初始化滚动条
    PS.initialize(this.refs.container)
  }

  getPathKey = pathName => {
    const { config } = this.props
    const result = []
    for (let i = 0; i < config.length; i++) {
      const item = config[i]
      if (item.path === pathName) {
        result.push(i)
        break
      }
      const children = item.children
      if (children) {
        for (let j = 0; j < children.length; j++) {
          const child = children[j]
          if (child.path === pathName) {
            result.push(i)
            result.push(j)
            break
          }
        }

        if (result.length) break
      }
    }
    return result
  }

  handleOnClick = event => {
    const { onSelect, config } = this.props
    const { firstLevel: index, path } = event.currentTarget.dataset
    if (path) {
      onSelect && onSelect(path, event)
      return
    }
    const item = config[index]
    const children = item.children
    const unfoldControl = [...this.state.unfoldControl]
    // 有二级，点击一级效果为toggle
    if (Array.isArray(children) && children.length) {
      // toggle
      unfoldControl[index] = !unfoldControl[index]
      this.setState({ unfoldControl })
      return
    }
    // 无二级，跳转到相应一级路由
    onSelect && onSelect(item.path, event)
  }

  renderListItem() {
    const { unfoldControl } = this.state
    const pathKey = this.getPathKey(this.props.activePath)
    // 循环出侧边栏列表
    return this.props.config.map((item, index) => {
      return (
        <li className='sidebar-item' key={index}>
          <div
            className={classnames('sidebar-item-child', {
              active: !item.children && pathKey[0] === index,
              unfold: unfoldControl[index],
            })}
            data-first-level={index}
            onClick={this.handleOnClick}
          >
            {item.icon && <Icon type={item.icon} />}
            <span>{item.name}</span>
            {item.children &&
              item.children.length && (
              <Icon
                type={unfoldControl[index] ? 'angle-up' : 'angle-down'}
                size='lg'
                className='sidebar-icon-arrow'
              />
            )}
          </div>
          {/* 渲染二级列表 */
            item.children &&
            item.children.length && (
              <ul
                className={classnames(
                  'sidebar-list-secondary',
                  unfoldControl[index] ? 'scale-in' : 'hidden'
                )}
              >
                {item.children.map((child, childIndex) => {
                  return (
                    <li
                      key={`${index}-${childIndex}`}
                      className={classnames(
                        'sidebar-item-child',
                        pathKey[1] === childIndex ? 'active' : ''
                      )}
                      data-path={child.path}
                      onClick={this.handleOnClick}
                    >
                      <span>{child.name}</span>
                    </li>
                  )
                })}
              </ul>
            )}
        </li>
      )
    })
  }

  render() {
    const { className, config, children, ...others } = this.props

    delete others.onSelect
    delete others.activePath

    return (
      <div
        ref='container'
        {...others}
        className={classnames('sidebar-body', className)}
      >
        {config ? (
          <ul className='sidebar-list'>{this.renderListItem()}</ul>
        ) : (
          children
        )}
      </div>
    )
  }
}
