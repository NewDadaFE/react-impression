import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import TableBody from '../TableBody/index'
import TableHead from '../TableHead/index'
import Pagination from '../Pagination/index'

export default class Table extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    // 是否木偶组件
    this.isPuppet =
      this.props.rowSelection &&
      this.props.rowSelection.selectedRowKeys &&
      this.props.rowSelection.onChange

    // 子组件数据
    const initValue = {
      columns: this.props.columns || [],
      fixLeftColumns: [],
      fixRightColumns: [],
      noFixColumns: [],
      leftFixedWidth: '',
      rightFixedWidth: '',
      isEnd: false,
      isStart: true,
      selectedRowKeys: this.isPuppet
        ? this.props.rowSelection.selectedRowKeys
        : [],
      indeterminate: false,
      checkAll: false,
      fixed: false,
    }

    this.state = {
      ...initValue,
    }
  }

  static propTypes = {
    /**
     * 表格列配置项，配置参考例子(非必传)
     */
    columns: PropTypes.array,

    /**
     * 数据源，格式参考例子
     */
    data: PropTypes.array,

    /**
     * 是否为斑马纹table
     */
    stripe: PropTypes.bool,

    /**
     * 是否为带边框table
     */
    border: PropTypes.bool,

    /**
     * 设置table的最大宽度 {x:number}
     */
    scroll: PropTypes.object,
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 多选表格配置,配置参考例子
     */
    rowSelection: PropTypes.shape({
      selectedRowKeys: PropTypes.array,
      onChange: PropTypes.func,
      onSelect: PropTypes.func,
      onSelectAll: PropTypes.func,
      fixed: PropTypes.bool,
    }),

    /**
     * 分页配置项，请参照Pagination
     */
    pagination: PropTypes.object,
    /**
     * 子组件
     */
    children: PropTypes.node,
  }
  static defaultProps = {
    border: false,
    stripe: false,
  }

  componentWillMount() {
    const { columns, children } = this.props
    let columnList = []
    if (children) {
      let columns = children.map(child => {
        const { prop, label, fixed, Cell, width, Header } = child.props
        const obj = { prop, label, fixed, Cell, width, Header }
        return obj
      })
      columnList = columns
    }
    if (columns) columnList = columns
    let fixLeftColumns = []
    let fixRightColumns = []
    let noFixColumns = []
    columnList.forEach(column => {
      if (column.fixed === 'left') {
        fixLeftColumns.push(column)
      } else if (column.fixed === 'right') {
        fixRightColumns.push(column)
      } else {
        noFixColumns.push(column)
      }
    })
    this.setState(
      {
        fixLeftColumns,
        fixRightColumns,
        noFixColumns,
        columns: fixLeftColumns.concat(noFixColumns, fixRightColumns),
        fixed: fixLeftColumns.length > 0 || fixRightColumns.length > 0,
      },
      this.updateColumnsWidth
    )
    if (this.isPuppet) {
      const { rowSelection, data } = this.props
      if (!rowSelection || !rowSelection.selectedRowKeys) return
      const { selectedRowKeys } = rowSelection
      const selectedRowKeysLength = selectedRowKeys.length
      const dataLength = data.length
      if (selectedRowKeysLength === 0) {
        this.setState({
          selectedRowKeys: rowSelection.selectedRowKeys,
          indeterminate: false,
          checkAll: false,
        })
      }
      if (selectedRowKeysLength > 0 && selectedRowKeysLength < dataLength) {
        this.setState({
          indeterminate: true,
          selectedRowKeys: rowSelection.selectedRowKeys,
          checkAll: false,
        })
      }
      if (selectedRowKeysLength === dataLength) {
        this.setState({
          indeterminate: false,
          selectedRowKeys: rowSelection.selectedRowKeys,
          checkAll: true,
        })
      }
    }
  }
  componentDidMount() {
    const { rowSelection } = this.props
    if (!this.isPuppet || !rowSelection) return
    const { selectedRowKeys } = rowSelection
    selectedRowKeys.forEach(item => {
      this.handleSelected(Number(item))
    })
  }

  updateColumnsWidth() {
    const { fixLeftColumns, fixRightColumns } = this.state
    const { rowSelection } = this.props

    if (fixLeftColumns.length > 0) {
      let fixedWidth = 0
      fixLeftColumns.forEach(function (column) {
        fixedWidth += column.realWidth || column.width || 80
      })
      if (rowSelection && rowSelection.fixed) {
        this.setState({ leftFixedWidth: fixedWidth + 60 })
      } else {
        this.setState({ leftFixedWidth: fixedWidth })
      }
    }

    if (fixRightColumns.length > 0) {
      let rightFixedWidth = 0
      fixRightColumns.forEach(function (column) {
        rightFixedWidth += column.realWidth || column.width || 80
      })

      this.setState({ rightFixedWidth: rightFixedWidth })
    }
  }
  componentWillReceiveProps(nextProps) {
    const { rowSelection } = nextProps
    const { data } = this.props
    if (!rowSelection || !rowSelection.selectedRowKeys || !this.isPuppet) return
    const { selectedRowKeys, onChange } = rowSelection
    const selectedRowKeysLength = selectedRowKeys.length
    const dataLength = data.length
    if (selectedRowKeysLength === 0) {
      this.setState({
        selectedRowKeys: rowSelection.selectedRowKeys,
        indeterminate: false,
        checkAll: false,
      })
    }
    if (selectedRowKeysLength > 0 && selectedRowKeysLength < dataLength) {
      this.setState({
        indeterminate: true,
        selectedRowKeys: rowSelection.selectedRowKeys,
        checkAll: false,
      })
    }
    if (selectedRowKeysLength === dataLength) {
      this.setState({
        indeterminate: false,
        selectedRowKeys: rowSelection.selectedRowKeys,
        checkAll: true,
      })
    }
    data.forEach((item, index) => {
      this.handleNoSelect(index)
    })
    selectedRowKeys.forEach(item => {
      this.handleSelected(Number(item))
    })
    onChange(selectedRowKeys)
  }
  componentDidUpdate() {
    const { selectedRowKeys } = this.state
    const { data } = this.props
    const selectedLength = selectedRowKeys.length
    const dataLength = data.length
    if (selectedLength === 0) {
      this.setState({
        indeterminate: false,
        checkAll: false,
      })
    }
    if (selectedLength > 0 && selectedLength < dataLength) {
      this.setState({
        indeterminate: true,
        checkAll: false,
      })
    }
    if (selectedLength === dataLength) {
      this.setState({
        indeterminate: false,
        checkAll: true,
      })
    }
  }

  getMax = max => {
    if (!max) return {}
    if (max.x) return { maxWidth: max.x }
  }
  handleScroll() {
    const targetWidth = this.inner.offsetWidth - this.scrollEl.offsetWidth
    const scrollWidth = this.scrollEl.scrollLeft
    if (scrollWidth === 0) {
      this.setState({ isEnd: false, isStart: true })
    }
    if (scrollWidth > 0 && scrollWidth < targetWidth) {
      this.setState({ isEnd: false, isStart: false })
    }
    if (scrollWidth === targetWidth + 2 || scrollWidth === targetWidth) {
      this.setState({ isEnd: true, isStart: false })
    }
  }
  handleHover = index => {
    const { fixed } = this.state
    if (fixed) {
      const tbody = this.tableWrap.querySelectorAll('tbody')
      tbody.forEach(item => {
        const tr = item.children
        const rows = [].filter.call(tr, row => this.hasClass(row, 'table-tr'))
        const newRow = rows[index]
        newRow && this.addClass(newRow, 'is-hover')
      })
    }
  }
  handleSelected = index => {
    const tbody = this.tableWrap.querySelectorAll('tbody')
    tbody.forEach(item => {
      const tr = item.children
      const rows = [].filter.call(tr, row => this.hasClass(row, 'table-tr'))
      const newRow = rows[index]
      newRow && this.addClass(newRow, 'is-selected')
    })
  }
  handleNoSelect = index => {
    const tbody = this.tableWrap.querySelectorAll('tbody')
    tbody.forEach(item => {
      const tr = item.children
      const rows = [].filter.call(tr, row => this.hasClass(row, 'table-tr'))
      const newRow = rows[index]
      newRow && this.removeClass(newRow, 'is-selected')
    })
  }
  handleHoverLeave = index => {
    const { fixed } = this.state
    if (fixed) {
      const tbody = this.tableWrap.querySelectorAll('tbody')
      tbody.forEach(item => {
        const tr = item.children
        const rows = [].filter.call(tr, row => this.hasClass(row, 'table-tr'))
        const newRow = rows[index]
        newRow && this.removeClass(newRow, 'is-hover')
      })
    }
  }
  hasClass(el, cls) {
    if (!el || !cls) return false
    if (cls.indexOf(' ') !== -1) {
      throw new Error('className should not contain space.')
    }
    if (el.classList) {
      return el.classList.contains(cls)
    } else {
      return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
    }
  }
  addClass(el, cls) {
    if (!el) return
    var curClass = el.className
    var classes = (cls || '').split(' ')

    for (var i = 0, j = classes.length; i < j; i++) {
      var clsName = classes[i]
      if (!clsName) continue

      if (el.classList) {
        el.classList.add(clsName)
      } else if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName
      }
    }
    if (!el.classList) {
      el.className = curClass
    }
  }
  removeClass(el, cls) {
    if (!el || !cls) return
    var classes = cls.split(' ')
    var curClass = ' ' + el.className + ' '

    for (var i = 0, j = classes.length; i < j; i++) {
      var clsName = classes[i]
      if (!clsName) continue

      if (el.classList) {
        el.classList.remove(clsName)
      } else if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
    if (!el.classList) {
      el.className = trim(curClass)
    }
  }

  /**
   * @description 手动单选触发回调
   * @memberof Table
   */
  handleCheckOnSelect = (e, index, item) => {
    const status = e.target.checked
    if (!this.isPuppet) {
      const { selectedRowKeys } = this.state
      if (status) {
        this.setState({ selectedRowKeys: [...selectedRowKeys, index] })
      } else {
        this.setState({
          selectedRowKeys: selectedRowKeys.filter(
            item => Number(item) !== index
          ),
        })
      }
    }
    if (status) {
      this.handleSelected(index)
    } else {
      this.handleNoSelect(index)
    }
    if (this.props.rowSelection && this.props.rowSelection.onSelect) {
      const { onSelect } = this.props.rowSelection
      onSelect(status, index, item)
    }
  }
  handleCheckOnSelectAll = () => {
    const { checkAll } = this.state
    const { data } = this.props
    if (!this.isPuppet) {
      if (checkAll) {
        this.setState(
          {
            selectedRowKeys: [],
            checkAll: false,
            indeterminate: false,
          },
          () => {
            if (
              this.props.rowSelection &&
              this.props.rowSelection.onSelectAll
            ) {
              const { onSelectAll } = this.props.rowSelection
              const { checkAll, selectedRowKeys } = this.state
              onSelectAll(checkAll, selectedRowKeys)
              data.forEach((item, index) => {
                this.handleNoSelect(index)
              })
            }
          }
        )
      } else {
        const list = data.map((item, index) => index)
        this.setState(
          {
            selectedRowKeys: list,
            checkAll: true,
            indeterminate: false,
          },
          () => {
            if (
              this.props.rowSelection &&
              this.props.rowSelection.onSelectAll
            ) {
              const { onSelectAll } = this.props.rowSelection
              const { selectedRowKeys, checkAll } = this.state
              onSelectAll(checkAll, selectedRowKeys)
              data.forEach((item, index) => {
                this.handleSelected(index)
              })
            }
          }
        )
      }
    } else {
      if (this.props.rowSelection && this.props.rowSelection.onSelectAll) {
        const { onSelectAll, selectedRowKeys } = this.props.rowSelection
        const { checkAll } = this.state
        onSelectAll(checkAll, selectedRowKeys)
      }
    }
  }
  handlePaginationChange = pagNo => {
    const { pagination, rowSelection } = this.props
    if (pagination && pagination.onSelect) {
      this.setState({
        checkAll: false,
        selectedRowKeys: this.isPuppet ? rowSelection.selectedRowKeys : [],
      })
      const { onSelect } = pagination
      onSelect(pagNo)
    }
  }
  renderPagination = () => {
    const { pagination } = this.props

    if (!pagination || !pagination.totalPage) return

    return (
      <div className='table-pagination text-center'>
        <Pagination
          scope={pagination.scope ? pagination.scope : 4}
          onSelect={this.handlePaginationChange}
          totalPage={pagination.totalPage}
          activePage={pagination.activePage}
        />
      </div>
    )
  }
  render() {
    const {
      data,
      stripe,
      border,
      scroll,
      className,
      rowSelection,
      pagination,
    } = this.props
    const max = this.getMax(scroll)
    const {
      fixLeftColumns,
      fixRightColumns,
      noFixColumns,
      leftFixedWidth,
      rightFixedWidth,
      isEnd,
      isStart,
      indeterminate,
      checkAll,
      selectedRowKeys,
    } = this.state
    const leftWidth = leftFixedWidth ? leftFixedWidth + 'px' : 60
    const rightWidth = rightFixedWidth ? rightFixedWidth + 'px' : ''
    return (
      <div>
        <div
          className={classnames('table')}
          style={max}
          ref={div => {
            this.tableWrap = div
          }}
        >
          <div
            onScroll={e => this.handleScroll(e)}
            ref={div => {
              this.scrollEl = div
            }}
            className={classnames(
              'table-wrap',
              { 'table-border': border },
              { 'table-scroll': scroll && scroll.x },
              className
            )}
          >
            <div
              ref={div => {
                this.inner = div
              }}
              style={{ display: 'inline-block' }}
            >
              <TableHead
                rowSelection={rowSelection}
                fixLeftColumns={fixLeftColumns}
                fixRightColumns={fixRightColumns}
                noFixColumns={noFixColumns}
                indeterminate={indeterminate}
                checkAll={checkAll}
                handleCheckOnSelectAll={this.handleCheckOnSelectAll}
              />
              <TableBody
                data={data}
                stripe={stripe}
                pagination={pagination}
                fixLeftColumns={fixLeftColumns}
                fixRightColumns={fixRightColumns}
                noFixColumns={noFixColumns}
                rowSelection={rowSelection}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHoverLeave}
                handleCheckOnSelect={this.handleCheckOnSelect}
                selectedRowKeyList={selectedRowKeys}
              />
            </div>
          </div>
          {(!!fixLeftColumns.length ||
            (rowSelection && rowSelection.fixed)) && (
            <div
              className={classnames(
                'table-fixed-left',
                { 'table-border': border },
                { 'table-scroll': scroll && scroll.x },
                { 'table-shadow': !isStart },
                className
              )}
              style={{ width: leftWidth }}
            >
              <TableHead
                fixed
                fixLeft
                fixRight={false}
                indeterminate={indeterminate}
                checkAll={checkAll}
                fixLeftColumns={fixLeftColumns}
                fixRightColumns={fixRightColumns}
                noFixColumns={noFixColumns}
                rowSelection={rowSelection}
                handleCheckOnSelectAll={this.handleCheckOnSelectAll}
              />
              <TableBody
                data={data}
                fixLeft
                fixRight={false}
                stripe={stripe}
                pagination={pagination}
                fixLeftColumns={fixLeftColumns}
                fixRightColumns={fixRightColumns}
                noFixColumns={noFixColumns}
                onMouseEnter={this.handleHover}
                rowSelection={rowSelection}
                onMouseLeave={this.handleHoverLeave}
                handleCheckOnSelect={this.handleCheckOnSelect}
                selectedRowKeyList={selectedRowKeys}
                fixed
              />
            </div>
          )}
          {!!fixRightColumns.length && (
            <div
              className={classnames(
                'table-fixed-right',
                { 'table-border': border },
                { 'table-scroll': scroll && scroll.x },
                { 'table-shadow': !isEnd },
                className
              )}
              style={{ width: rightWidth }}
            >
              <TableHead
                fixed
                fixRight
                fixLeft={false}
                indeterminate={indeterminate}
                checkAll={checkAll}
                isShowSelection
                fixLeftColumns={fixLeftColumns}
                fixRightColumns={fixRightColumns}
                noFixColumns={noFixColumns}
                rowSelection={rowSelection}
                handleCheckOnSelectAll={this.handleCheckOnSelectAll}
              />
              <TableBody
                data={data}
                fixRight
                fixLeft={false}
                fixLeftColumns={fixLeftColumns}
                fixRightColumns={fixRightColumns}
                noFixColumns={noFixColumns}
                stripe={stripe}
                pagination={pagination}
                isShowSelection
                onMouseEnter={this.handleHover}
                rowSelection={rowSelection}
                handleCheckOnSelect={this.handleCheckOnSelect}
                onMouseLeave={this.handleHoverLeave}
                selectedRowKeyList={selectedRowKeys}
                fixed
              />
            </div>
          )}
        </div>
        {this.renderPagination()}
      </div>
    )
  }
}

Table.childContextTypes = {
  componentTable: PropTypes.any,
}
