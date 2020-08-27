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
    let { onSelect, activePage, totalPage = 1 } = this.props

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
    const { scope, totalPage, activePage } = this.props
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
    const { totalPage, onSelect } = this.props
    const pageNo = +this.state.skipPageNo
    if (isNaN(pageNo) || pageNo < 1 || pageNo > totalPage) {
      this.setState({ skipPageNo: '' })
      return
    }
    onSelect(pageNo)
  }
  // pageSize
  changePageSize = value => {
    console.log('value', value)
  }

  render() {
    const {
      totalPage = 1,
      total,
      className,
      activePage,
      lastContent,
      nextContent,
      showQuickJumper,
      showTotal,
      size,
      showSizeChanger,
      pageSizeOptions,
      pageSize,
      defaultPageSize,
      ...others
    } = this.props

    const pageList = this.getPageList()
    const pageItemClass = size === 'sm' ? 'page-item-sm' : 'page-item'
    const pageLinkClass = size === 'sm' ? 'page-link-sm' : 'page-link'
    return (
      <div className={classnames('text-center', className)}>
        <ul {...others} className='pagination'>
          <li
            className={classnames(pageItemClass, {
              disabled: activePage <= 1,
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
              disabled: activePage >= totalPage,
            })}
          >
            <span className={pageLinkClass} onClick={this.nextPageHandle}>
              {nextContent || <i className='dada-ico dada-ico-angle-right' />}
            </span>
          </li>
        </ul>

        {showSizeChanger && (
          <Select
            value={pageSize}
            defaultValue={defaultPageSize}
            onChange={this.changePageSize}
          >
            {pageSizeOptions.map(item => (
              <SelectOption value={item}>{`${item}条/页`}</SelectOption>
            ))}
          </Select>
        )}
        {showTotal && (
          <div className='pagination-total'>
            共<span>{totalPage || 1}</span>页<span>/</span>
            <span>{total || 0}</span>条
          </div>
        )}

        {showQuickJumper && (
          <div className='pagination-jumper'>
            <span>跳转</span>
            <Input
              className='pagination-jumper-input'
              size='sm'
              value={this.state.skipPageNo}
              onChange={this.handleInputChange}
            />
            <span>页</span>
            <div className={pageLinkClass} onClick={this.handleSkip}>
              GO
            </div>
          </div>
        )}
      </div>
    )
  }
}
