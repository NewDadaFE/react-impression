import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Pagination extends React.PureComponent {
  static defaultProps = {
    scope: 2,
    activePage: 1,
    totalPage: 1,
  }

  static propTypes = {
    /**
     * 前后延伸
     */
    scope: PropTypes.number,
    /**
     * 当前在第几页
     */
    activePage: PropTypes.number,
    /**
     * 总页数
     */
    totalPage: PropTypes.number.isRequired,
    /**
     * 上一页控制按钮内容
     */
    lastContent: PropTypes.node,
    /**
     * 下一页控制按钮内容
     */
    nextContent: PropTypes.node,
    /**
     * 选中回调函数
     */
    onSelect: PropTypes.func,
    /**
     * 自定义样式
     */
    className: PropTypes.string,
  }

  /**
   * 上一页
   */
  prevPageHandle = () => {
    let { onSelect, activePage } = this.props

    activePage -= 1
    activePage >= 1 && onSelect && onSelect(activePage)
  }

  /**
   * 下一页
   */
  nextPageHandle = () => {
    let { onSelect, activePage, totalPage = 1 } = this.props

    activePage += 1
    activePage <= totalPage && onSelect && onSelect(activePage)
  }

  /**
   * 跳转至某页
   * @param page
   */
  goPageHandle = page => {
    const { onSelect } = this.props

    onSelect && onSelect(page)
  }

  /**
   * 获取组件显示的页码
   * @returns {Array}
   */
  getPageList = () => {
    const { scope, totalPage, activePage } = this.props
    const pageList = []
    const scopeLength = scope * 2
    // 页数少于（首、尾、中间、两边scope）不出现省略号
    if (totalPage <= 3 + scopeLength) {
      for (let i = 1; i <= totalPage; i++) {
        pageList.push(i)
      }
      return pageList
    }
    // 有"..."的情况下，中间部分页数的范围 [scopeLeft，scopeRight]
    let scopeLeft = Math.max(1, activePage - scope)
    let scopeRight = Math.min(activePage + scope, totalPage)
    // scopeLeft或scopeRight为总页数的左端或右端，特殊处理
    if (scopeLeft === 1) {
      scopeRight = scopeLeft + scopeLength
    }
    if (scopeRight === totalPage) {
      scopeLeft = scopeRight - scopeLength
    }
    // 首页页码必须为 1
    scopeLeft !== 1 && pageList.push(1)
    // 显示"..."的情况，考虑到scope=1的特殊情况所以current也不能等于3
    if (activePage >= 1 + scopeLength && activePage !== 3) {
      pageList.push('')
    }
    for (let i = scopeLeft; i <= scopeRight; i++) {
      pageList.push(i)
    }
    // 显示"..."的情况
    if (activePage <= totalPage - scopeLength && activePage !== totalPage - 2) {
      pageList.push('')
    }
    // 尾页页码必须为 totalPage
    scopeRight !== totalPage && pageList.push(totalPage)

    return pageList
  }

  render() {
    const {
      totalPage = 1,
      className,
      activePage,
      lastContent,
      nextContent,
      ...others
    } = this.props

    const pageList = this.getPageList()

    return (
      <ul {...others} className={classnames('Pagination', className)}>
        <li className={classnames('page-item', { disabled: activePage <= 1 })}>
          <a
            className='page-link'
            href='javascript:void(0);'
            onClick={this.prevPageHandle}
          >
            {lastContent || <i className='fa fa-angle-left' />}
          </a>
        </li>
        {pageList.map(
          (child, index) =>
            child ? (
              <li
                key={`${child}-${index}`}
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
            ) : (
              <li key={`${child}-${index}`} className='page-item disabled'>
                <i className='fa fa-ellipsis-h' />
              </li>
            )
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
            {nextContent || <i className='fa fa-angle-right' />}
          </a>
        </li>
      </ul>
    )
  }
}
