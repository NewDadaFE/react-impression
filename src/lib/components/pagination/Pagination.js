/**
 * Pagination组件.
 */

import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'react-impression'
import PageBlock from './PageBlock'
import KeyCode from '../../utils/keyCode'

const isInteger = value => {
  return (
    typeof value === 'number' && isFinite(value) && Math.floor(value) === value
  )
}

export default class Pagination extends PureComponent {
  // 默认props
  static defaultProps = {
    scope: 2,
    defaultActivePage: 1,
    totalCount: 0,
    jumpPage: false,
    defaultPageSize: 10,
  }
  // props校验
  static propTypes = {
    // 前后延伸
    scope: PropTypes.number,
    // 当前在第几页
    activePage: PropTypes.number,
    // 默认当前在第几页
    defaultActivePage: PropTypes.number,
    // 总页数
    totalCount: PropTypes.number.isRequired,
    // 每页个数
    pageSize: PropTypes.number,
    // 默认每页个数
    defaultPageSize: PropTypes.number,
    // onSelect
    onSelect: PropTypes.func,
    // 自定义样式
    className: PropTypes.string,
    // 自定义样式
    style: PropTypes.object,
    // input输入跳转页
    jumpPage: PropTypes.bool,
  }

  constructor(props) {
    super(props)

    this.state = {
      current:
        props.activePage === undefined
          ? props.defaultActivePage
          : props.activePage,
      currentJumpInput: '',
      pageSize:
        props.pageSize === undefined ? props.defaultPageSize : props.pageSize,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activePage !== undefined) {
      this.setState({
        current: nextProps.activePage,
      })
    }

    if (nextProps.pageSize !== undefined) {
      const newState = {}
      let total = this.props.totalCount
      let activePage = this.state.current

      if (nextProps.totalCount !== undefined) {
        total = nextProps.totalCount
      }

      const newActivePage = this.getPageNum(nextProps.pageSize, total)
      activePage = activePage > newActivePage ? newActivePage : activePage

      if (nextProps.activePage === undefined) {
        newState.current = activePage
      }

      newState.pageSize = nextProps.pageSize
      this.setState(newState)
    }
  }

  getPageNum = (pageSize, total) => {
    pageSize = pageSize === undefined ? this.state.pageSize : pageSize
    total = total === undefined ? this.props.totalCount : total
    return Math.floor((total - 1) / pageSize) + 1 // todo 为何要减1
  }

  isValid = pageNum => {
    return isInteger(pageNum) && pageNum >= 1 && pageNum !== this.state.current
  }

  handleChange = pageNum => {
    if (this.isValid(pageNum)) {
      const { pageSize } = this.state
      const { onSelect } = this.props

      if (pageNum > this.getPageNum()) {
        pageNum = this.getPageNum()
      }

      if (this.props.activePage === undefined) {
        this.setState({
          current: pageNum,
        })
      }

      onSelect && onSelect(pageNum, pageSize)
    }
  }

  prev = () => {
    const { current } = this.state
    if (current > 1) {
      this.handleChange(current - 1)
    }
  }

  next = () => {
    const { current } = this.state
    if (current < this.getPageNum()) {
      this.handleChange(current + 1)
    }
  }

  jumpPrev = () => {
    this.handleChange(
      Math.max(1, this.state.current - (this.props.scope * 2 + 1))
    )
  }

  jumpNext = () => {
    this.handleChange(
      Math.min(
        this.getPageNum(),
        this.state.current + (this.props.scope * 2 + 1)
      )
    )
  }

  jumpPageHandler = e => {
    let val = this.state.currentJumpInput
    if (val === '') {
      return
    }
    val = isNaN(val) ? this.props.activePage : Number(val)
    if (e.keyCode === KeyCode.ENTER) {
      this.setState({
        currentJumpInput: '',
      })
      this.handleChange(val)
    }
  }

  render() {
    const { scope, className, style, jumpPage } = this.props
    const { current } = this.state
    const pageNum = this.getPageNum()
    const pageList = []

    if (pageNum <= 1 + 1 + 1 + 2 + scope * 2) {
      // 1 << scope 3 scope >> 5 最少这些才会出现跳转符号
      for (let i = 1; i <= pageNum; i++) {
        const active = this.state.current === i
        pageList.push(
          <PageBlock
            onClick={this.handleChange}
            key={i}
            page={i}
            active={active}
          />
        )
      }
    } else {
      const jumpPrevBtn = (
        <li
          key='prev'
          onClick={this.jumpPrev}
          className='page-jump-prev page-item'
        >
          <a href='javascript:void(0);' />
        </li>
      )
      const jumpNextBtn = (
        <li
          key='next'
          onClick={this.jumpNext}
          className='page-jump-next page-item'
        >
          <a href='javascript:void(0);' />
        </li>
      )
      const first = (
        <PageBlock
          onClick={this.handleChange}
          key={1}
          page={1}
          active={false}
        />
      )
      const last = (
        <PageBlock
          onClick={this.handleChange}
          key={pageNum}
          page={pageNum}
          active={false}
        />
      )

      //  如果有跳转符号的情况下 <<和>>中间部分页数的范围为scopeLeft到scopeRight，
      // 如果scopeLeft或scopeRight为总页数的左端或右端，特殊处理

      let scopeLeft = Math.max(1, current - scope)
      let scopeRight = Math.min(current + scope, pageNum)

      if (scopeRight === pageNum) {
        scopeLeft = pageNum - scope * 2
      }

      if (scopeLeft === 1) {
        scopeRight = 1 + scope * 2
      }

      for (let i = scopeLeft; i <= scopeRight; i++) {
        const active = current === i
        pageList.push(
          <PageBlock
            onClick={this.handleChange}
            key={i}
            page={i}
            active={active}
          />
        )
      }

      if (current >= scope * 2 + 1 && current !== 3) {
        //  显示prev jump的情况 考虑到scope=1的特殊情况所以current也不能等于3
        pageList.unshift(jumpPrevBtn)
      }

      if (current + scope * 2 <= pageNum && current !== pageNum - 2) {
        pageList.push(jumpNextBtn)
      }

      if (scopeLeft !== 1) {
        pageList.unshift(first)
      }
      if (scopeRight !== pageNum) {
        pageList.push(last)
      }
    }

    return (
      <ul className={classnames('pagination', className)} style={style}>
        <li
          onClick={this.prev}
          className={`${current > 1 ? '' : 'disabled'} page-prev page-item`}
        >
          <a className='page-link'>
            <i className='fa fa-angle-left' />
          </a>
        </li>
        {pageList}
        <li
          onClick={this.next}
          className={`${
            current < pageNum ? '' : 'disabled'
          } page-next page-item`}
        >
          <a className='page-link'>
            <i className='fa fa-angle-right' />
          </a>
        </li>
        {jumpPage && (
          <li className='page-option'>
            <div className='page-option-jump-page'>
              跳转至
              <Input
                type='text'
                className='page-jump-input'
                value={this.state.currentJumpInput}
                onChange={value => this.setState({ currentJumpInput: value })}
                onKeyUp={this.props.jumpPage ? this.jumpPageHandler : null}
              />
              页
            </div>
          </li>
        )}
      </ul>
    )
  }
}
