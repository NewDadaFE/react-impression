import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * Pagination组件.
 */
export default class Pagination extends PureComponent {
  // 默认props
  static defaultProps = {
    activePage: 1,
    scope: 2,
    ellipsis: true,
    totalPage: 1,
  }
  // props校验
  static propTypes = {
    // 前后延伸
    scope: PropTypes.number,
    // 当前在第几页
    activePage: PropTypes.number,
    // 总页数
    totalPage: PropTypes.number.isRequired,
    // 是否显示省略号
    ellipsis: PropTypes.bool,
    // onSelect
    onSelect: PropTypes.func,
    // 自定义样式
    className: PropTypes.string,
  }
  // 上一页
  prevPageHandle = () => {
    let { onSelect, activePage } = this.props

    activePage -= 1
    activePage >= 1 && onSelect && onSelect(activePage)
  }
  // 下一页
  nextPageHandle = () => {
    let { onSelect, activePage, totalPage = 1 } = this.props

    activePage += 1
    activePage <= totalPage && onSelect && onSelect(activePage)
  }
  // 跳转至某页
  goPageHandle = page => {
    let { onSelect } = this.props

    onSelect && onSelect(page)
  }
  // 获取显示页码
  getShowPageArray() {
    let { scope, totalPage = 1, activePage } = this.props,
      result = []

    scope = scope < 0 ? 2 : scope
    for (let i = activePage - scope; i <= activePage + scope; i++) {
      if (i > 0 && i <= totalPage) {
        i === activePage - scope && i === 2 && result.push(1)
        result.push(i)
        i === activePage + scope &&
          i === totalPage - 1 &&
          result.push(totalPage)
      }
    }

    return result
  }
  // 渲染
  render() {
    let {
        totalPage = 1,
        className,
        ellipsis,
        activePage,
        ...others
      } = this.props,
      children = this.getShowPageArray()

    return (
      <ul {...others} className={classnames('Pagination', className)}>
        <li className={classnames('page-item', { disabled: activePage <= 1 })}>
          <a
            className='page-link'
            href='javascript:void(0);'
            onClick={this.prevPageHandle}
          >
            <i className='fa fa-angle-left' />
          </a>
        </li>

        {ellipsis &&
          children[0] > 1 && (
          <li className='page-item disabled'>
            <i className='fa fa-ellipsis-h' />
          </li>
        )}

        {children.map(child => (
          <li
            key={child}
            className={classnames('page-item', {
              active: child === activePage,
            })}
          >
            <a
              className='page-link'
              href='javascript:void(0);'
              onClick={() => this.goPageHandle(child)}
            >
              {child}
            </a>
          </li>
        ))}

        {ellipsis &&
          children[children.length - 1] < totalPage && (
          <li className='page-item disabled'>
            <i className='fa fa-ellipsis-h' />
          </li>
        )}

        <li
          className={classnames('page-item', {
            disabled: activePage >= totalPage,
          })}
        >
          <a
            className='page-link'
            href='javascript:void(0);'
            onClick={this.nextPageHandle}
          >
            <i className='fa fa-angle-right' />
          </a>
        </li>
      </ul>
    )
  }
}
