import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { Input, Select, SelectOption } from '../index'

export default class Pagination extends React.PureComponent {
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
     * 数据总数
     */
    total: PropTypes.number,
    /**
     * 上一页控制按钮内容
     */
    lastContent: PropTypes.node,
    /**
     * 下一页控制按钮内容
     */
    nextContent: PropTypes.node,
    /**
     * 选中回调，参数列表：activePage
     */
    onSelect: PropTypes.func,
    /**
     * 是否可以快速跳转至某页
     */
    showQuickJumper: PropTypes.bool,
    /**
     * 是否显示数据总量和总页
     */
    showTotal: PropTypes.bool,
    /**
     * 自定义样式
     */
    className: PropTypes.string,
    /**
     * 是否展示pageSize切换器
     */
    showSizeChanger: PropTypes.bool,
    /**
     * 指定每页可以展示多少条
     */
    pageSizeOptions: PropTypes.array,
    /**
     * pageSize变化回调, 参数列表pageSize
     */
    onShowSizeChange: PropTypes.func,
    /**
     * 每页条数
     */
    pageSize: PropTypes.number,
    /**
     * 全局禁用分页
     */
    disabled: PropTypes.bool,
    /**
     * 默认每页条数
     */
    defaultPageSize: PropTypes.bool,
    /**
     * 翻页器尺寸
     */
    size: PropTypes.oneOf(['sm', 'md']),
  }

  static defaultProps = {
    scope: 3,
    activePage: 1,
    totalPage: 1,
    total: 0,
    defaultPageSize: 10,
    disabled: false,
    size: 'md',
    showSizeChanger: false,
    pageSizeOptions: [10, 20, 50, 100],
  }

  constructor(props) {
    super(props)
    this.state = {
      currentPage: this.props.activePage,
      skipPageNo: '',
      pageSize: props.pageSize || props.defaultPageSize,
      totalPage:
        Math.ceil(props.total / (props.pageSize || props.defaultPageSize)) || 1,
    }
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
    let { onSelect, activePage } = this.props
    const { totalPage } = this.state

    activePage += 1
    activePage <= totalPage && onSelect && onSelect(activePage)
  }

  /**
   * 跳转至某页
   * @param page
   */
  goPageHandle = page => {
    const { currentPage } = this.state
    if (Number(currentPage) === Number(page)) return
    const { onSelect } = this.props

    onSelect && onSelect(page)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (Number(nextProps.activePage) !== Number(this.props.activePage)) {
      this.setState({
        currentPage: nextProps.activePage,
      })
    }
  }

  /**
   * 获取组件显示的页码
   * @returns {Array}
   */
  getPageList = () => {
    const { scope, activePage } = this.props
    const { totalPage } = this.state
    const pageList = []
    const scopeLength = scope * 2
    // 页数少于（首、尾、中间、两边scope）不出现省略号
    if (totalPage <= 3 + scopeLength) {
      const totalPageNumber = totalPage || 1
      for (let i = 1; i <= totalPageNumber; i++) {
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

  handleInputChange = value => {
    this.setState({ skipPageNo: value })
  }

  handleSkip = () => {
    const { onSelect } = this.props
    const { totalPage } = this.state
    const pageNo = +this.state.skipPageNo
    if (isNaN(pageNo) || pageNo < 1 || pageNo > totalPage) {
      this.setState({ skipPageNo: '' })
      return
    }
    onSelect(pageNo)
  }
  // pageSize
  changePageSize = value => {
    const { onShowSizeChange, total, onSelect } = this.props
    const { currentPage } = this.state
    // 判断当前页码是否超过总页数，超过则自动选择最后一页
    let page = currentPage
    if (value * currentPage > total) {
      page = Math.ceil(total / value)
    }
    this.setState(
      {
        pageSize: value,
        totalPage: Math.ceil(this.props.total / value),
        currentPage: page,
      },
      () => {
        onShowSizeChange && onShowSizeChange(value)
        onSelect && onSelect(page)
      }
    )
  }

  render() {
    const {
      total,
      className,
      activePage,
      lastContent,
      nextContent,
      showQuickJumper,
      showTotal,
      disabled,
      size,
      showSizeChanger,
      pageSizeOptions,
      // pageSize,
      defaultPageSize,
      ...others
    } = this.props
    const { pageSize, totalPage } = this.state
    console.log('disabled', disabled)

    const pageList = this.getPageList()
    const pageItemClass = size === 'sm' ? 'page-item-sm' : 'page-item'
    const pageLinkClass = size === 'sm' ? 'page-link-sm' : 'page-link'
    return (
      <div className={classnames('text-center', className)}>
        {showTotal && (
          <div
            className={classnames('pagination-total', { disabled: disabled })}
          >
            共<span>{total || 0}</span>条
          </div>
        )}
        <ul {...others} className='pagination'>
          <li
            className={classnames(pageItemClass, {
              disabled: activePage <= 1 || disabled,
            })}
          >
            <span className={pageLinkClass} onClick={this.prevPageHandle}>
              {lastContent || <i className='dada-ico dada-ico-angle-left' />}
            </span>
          </li>
          {pageList.map((child, index) =>
            child ? (
              <li
                key={`${child}-${index}`}
                className={classnames(pageItemClass, {
                  active: child === (activePage || 1),
                  disabled: disabled,
                  [`active-disabled-${size}`]:
                    !!size && child === (activePage || 1) && disabled,
                })}
              >
                <span
                  className={pageLinkClass}
                  onClick={() => this.goPageHandle(child)}
                >
                  {child}
                </span>
              </li>
            ) : (
              <li
                key={`${child}-${index}`}
                className={classnames('disabled', pageItemClass)}
              >
                <i className='dada-ico dada-ico-ellipsis-h' />
              </li>
            )
          )}
          <li
            className={classnames(pageItemClass, {
              disabled: activePage >= totalPage || disabled,
            })}
          >
            <span className={pageLinkClass} onClick={this.nextPageHandle}>
              {nextContent || <i className='dada-ico dada-ico-angle-right' />}
            </span>
          </li>
        </ul>

        {showSizeChanger && (
          <div className='pagination-pageSize'>
            <Select
              value={pageSize}
              onChange={this.changePageSize}
              size={`${size === 'sm' ? 'xs' : 'sm'}`}
              className='size-changer-width'
              disabled={disabled}
            >
              {pageSizeOptions.map(item => (
                <SelectOption value={item}>{`${item}条/页`}</SelectOption>
              ))}
            </Select>
          </div>
        )}
        {showQuickJumper && (
          <div className='pagination-jumper'>
            <span className={classnames({ disabled: disabled })}>跳转</span>
            <Input
              className={classnames({
                [`pagination-jumper-input-${size}`]: !!size,
              })}
              size={`${size === 'sm' ? 'xs' : 'sm'}`}
              value={this.state.skipPageNo}
              onChange={this.handleInputChange}
              disabled={disabled}
            />
            <span className={classnames({ disabled: disabled })}>页</span>
            <div
              className={classnames(pageLinkClass, {
                [`page-link-go-${size}`]: !!size,
                disabled: disabled,
              })}
              onClick={this.handleSkip}
            >
              GO
            </div>
          </div>
        )}
      </div>
    )
  }
}
