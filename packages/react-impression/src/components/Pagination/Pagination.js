import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const FIRST_PAGE = 1
const PAGE_MIN_RANGE = 10
export default class Pagination extends React.Component {
  static defaultProps = {
    activePage: 1,
    totalPage: 1,
  }

  static propTypes = {
    /**
     * 当前在第几页
     */
    activePage: PropTypes.number,
    /**
     * 总页数
     */
    totalPage: PropTypes.number.isRequired,
    /**
     * onSelect
     */
    onSelect: PropTypes.func,
    /**
     * 自定义样式
     */
    className: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.state = {
      start: [],
      middle: [],
      end: [],
    }
  }

  componentDidMount() {
    const { totalPage, activePage } = this.props

    if (totalPage < PAGE_MIN_RANGE) {
      const newStart = []
      for (let i = 1; i <= totalPage; i++) {
        newStart.push(i)
      }
      this.setState({
        start: newStart,
      })
      return
    }
    const middleBase = activePage
    const startBase = this._average(1, activePage)
    const endBase = this._average(activePage, totalPage)

    this._setShowPageArray(startBase, middleBase, endBase)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.activePage !== newProps.activePage) {
      this._getShowPageArray(newProps.activePage)
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
    const { onSelect } = this.props

    onSelect && onSelect(page)
  }

  _setShowPageArray = (startBase, middleBase, endBase) => {
    // 基准矫正
    const { totalPage: LAST_PAGE } = this.props

    // 中间范围超出首页
    if (middleBase <= 4) {
      middleBase = FIRST_PAGE + 4
    }
    // 中间范围超出末尾页
    if (middleBase >= LAST_PAGE - 4) {
      middleBase = LAST_PAGE - 4
    }

    // 起始范围超出首页
    if (startBase <= FIRST_PAGE) {
      startBase = FIRST_PAGE + 1
    }
    // 起始范围与中间范围重叠
    if (startBase >= middleBase - 2) {
      startBase = middleBase - 3
    }

    // 末尾范围与中间范围重叠
    if (endBase <= middleBase + 2) {
      endBase = middleBase + 3
    }
    // 末尾范围超出末尾页
    if (endBase >= LAST_PAGE - 1) {
      endBase = LAST_PAGE - 1
    }

    this.setState({
      start: [startBase - 1, startBase, startBase + 1],
      middle: [middleBase - 1, middleBase, middleBase + 1],
      end: [endBase - 1, endBase, endBase + 1],
    })
  }

  _getShowPageArray = (activePage) => {
    if (this.props.totalPage < PAGE_MIN_RANGE) return

    const { start, middle, end } = this.state
    let endBase
    let startBase
    let middleBase
    let index
    // 1. 第一区间 A
    if (start.includes(activePage)) {
      index = start.indexOf(activePage)
      switch (index) {
        case 0:
          // A1+ 扩大区间
          startBase = this._average(1, activePage)
          middleBase = activePage
          endBase = this._average(activePage, end[2])
          break
        case 1:
          // A2 基准不变
          startBase = start[1]
          middleBase = middle[1]
          endBase = end[1]
          break
        case 2:
          // A3- 缩小区间
          startBase = activePage
          middleBase = this._average(activePage, middle[1])
          endBase = 2 * middleBase
          break
      }
    }

    // 2. 第二区间 B
    if (middle.includes(activePage)) {
      index = middle.indexOf(activePage)
      switch (index) {
        case 0:
        case 2:
          // B1- & B3- 缩小区间
          middleBase = activePage
          startBase = this._average(start[1], activePage)
          endBase = this._average(activePage, end[1])
          break
        case 1:
          // B2+ 扩大区间
          startBase = 2 * start[1] - activePage
          middleBase = activePage
          endBase = 2 * end[1] - activePage
          break
      }
    }

    // 3. 第三区间 C
    if (end.includes(activePage)) {
      index = end.indexOf(activePage)
      switch (index) {
        case 0:
          // C1- 缩小区间
          startBase = middle[1]
          middleBase = this._average(activePage, middle[1])
          endBase = activePage
          break
        case 1:
          // C2 基准不变
          startBase = start[1]
          middleBase = middle[1]
          endBase = end[1]
          break
        case 2:
          // C3+ 扩大区间
          startBase = this._average(start[0], activePage)
          middleBase = activePage
          endBase = this._average(activePage, this.props.totalPage)
          break
      }
    }
    this._setShowPageArray(startBase, middleBase, endBase)
  }

  _average = (start, end) => {
    return Math.floor((start + end) / 2)
  }

  render() {
    const {
      totalPage = 1,
      className,
      activePage,
      ...others
    } = this.props

    const { start, middle, end } = this.state

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
        {/* 第一个省略 */}
        {start[0] > 1 && (
          <li className='page-item disabled'>
            <i className='fa fa-ellipsis-h' />
          </li>
        )}

        {start.map(child => (
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
        {/* 第二个省略 */}
        {middle.length > 0 && start[2] + 1 !== middle[0] && (
          <li className='page-item disabled'>
            <i className='fa fa-ellipsis-h' />
          </li>
        )}

        {middle.map(child => (
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
        {/* 第三个省略 */}
        {end.length > 0 && middle[2] + 1 !== end[0] && (
          <li className='page-item disabled'>
            <i className='fa fa-ellipsis-h' />
          </li>
        )}

        {end.map(child => (
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
        {/* 第四个省略 */}
        {end.length === 3 && end[2] < totalPage && (
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
