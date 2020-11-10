import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import TableBody from '../TableBody'
import TableHead from '../TableHead'
import Pagination from '../Pagination'
import * as R from 'ramda'

export default class Table extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

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
      selectedRowKeys: [],
      indeterminate: false,
      checkAll: false,
      fixed: false,
      defaultSort: this.props.defaultSort || {},
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
     * 设置table的最大宽度 {x:number},默认为100%
     */
    scroll: PropTypes.object,

    /**
     * 默认排序字段以及排序顺序，{prop: 'time', order: 'descending/ascending'}
     */
    defaultSort: PropTypes.object,

    /**
     * 排序改变回调事件，返回 {prop,order}
     */
    onChangeSort: PropTypes.func,
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 多选表格配置,配置参考例子
     */
    rowSelection: PropTypes.shape({
      selectedRowKeys: PropTypes.array,
      defaultSelectedRowKeys: PropTypes.array,
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
     * 无数据时文案
     */
    placeholder: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.node,
  }
  static defaultProps = {
    border: false,
    stripe: false,
    placeholder: '暂无数据',
  }

  /**
   * @description 判断是否是受控table
   * @memberof Table
   */
  get isPuppet() {
    return isPuppetTable(this.props.rowSelection)
  }

  UNSAFE_componentWillMount() {
    this.handleInt()
  }
  /**
   * @description 初始化
   * @memberof Table
   */
  handleInt = (nextColumns, nextChildren) => {
    const { columns, children } = this.props

    let columnList = []
    if (nextChildren) {
      let columns = nextChildren.map(child => {
        const {
          prop,
          label,
          fixed,
          Cell,
          width,
          Header,
          sortable,
        } = child.props
        const obj = { prop, label, fixed, Cell, width, Header, sortable }
        return obj
      })
      columnList = columns
    }
    if (children && !nextChildren) {
      let columns = children.map(child => {
        const {
          prop,
          label,
          fixed,
          Cell,
          width,
          Header,
          sortable,
        } = child.props
        const obj = { prop, label, fixed, Cell, width, Header, sortable }
        return obj
      })
      columnList = columns
    }
    if (nextColumns) {
      columnList = nextColumns
    }
    if (columns && !nextColumns) columnList = columns
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
    // 多选 table
    if (this.props.rowSelection) {
      const {
        rowSelection: { selectedRowKeys = [], defaultSelectedRowKeys = [] },
        data,
      } = this.props
      const selectedRowKeysLength = this.isPuppet
        ? selectedRowKeys.length
        : defaultSelectedRowKeys.length
      const dataLength = data.length
      if (selectedRowKeysLength === 0) {
        this.setState({
          selectedRowKeys: this.isPuppet
            ? selectedRowKeys
            : defaultSelectedRowKeys,
          indeterminate: false,
          checkAll: false,
        })
      }
      if (selectedRowKeysLength > 0 && selectedRowKeysLength < dataLength) {
        this.setState({
          indeterminate: true,
          selectedRowKeys: this.isPuppet
            ? selectedRowKeys
            : defaultSelectedRowKeys,
          checkAll: false,
        })
      }
      if (selectedRowKeysLength === dataLength) {
        this.setState({
          indeterminate: false,
          selectedRowKeys: this.isPuppet
            ? selectedRowKeys
            : defaultSelectedRowKeys,
          checkAll: true,
        })
      }
    }
  }

  componentDidMount() {
    const { rowSelection } = this.props
    if (!rowSelection) return
    // 非受控组件
    if (!this.isPuppet) {
      const { defaultSelectedRowKeys = [] } = rowSelection
      this.setState(
        { selectedRowKeys: defaultSelectedRowKeys },
        defaultSelectedRowKeys.forEach(item => {
          this.handleSelected(Number(item))
        })
      )

      return
    }
    const { selectedRowKeys = [] } = rowSelection
    this.setState({ selectedRowKeys }, () => {
      selectedRowKeys.forEach(item => {
        this.handleSelected(Number(item))
      })
    })
  }

  /**
   * @description 更新左右固定项的宽度
   * @author nmg
   * @memberof Table
   */
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

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { rowSelection, columns, children } = nextProps
    const {
      data,
      columns: currentColumns,
      children: currentChildren,
    } = this.props
    if (columns && currentColumns && !R.equals(columns, currentColumns)) {
      this.handleInt(columns, children)
    }
    if (children && currentChildren && !R.equals(children, currentChildren)) {
      this.handleInt(columns, children)
    }

    if (!isPuppetTable(rowSelection)) return

    const { selectedRowKeys, onChange } = rowSelection
    const selectedRowKeysLength = selectedRowKeys.length
    const dataLength = data.length
    if (selectedRowKeysLength === 0) {
      this.setState({
        selectedRowKeys: selectedRowKeys,
        indeterminate: false,
        checkAll: false,
      })
    }
    if (selectedRowKeysLength > 0 && selectedRowKeysLength < dataLength) {
      this.setState({
        indeterminate: true,
        selectedRowKeys: selectedRowKeys,
        checkAll: false,
      })
    }
    if (selectedRowKeysLength === dataLength) {
      this.setState({
        indeterminate: false,
        selectedRowKeys: selectedRowKeys,
        checkAll: true,
      })
    }
    data.forEach((item, index) => {
      this.handleNoSelect(index)
    })
    selectedRowKeys.forEach(item => {
      this.handleSelected(Number(item))
    })
    onChange && onChange(selectedRowKeys)
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

  /**
   * @description table的最大宽度，默认为100%
   * @memberof Table
   */
  getMax = max => {
    if (!max || !max.x) return { maxWidth: '100%' }
    if (max.x) return { maxWidth: max.x }
  }

  /**
   * @description 判断是否展示固定项侧阴影
   * @memberof Table
   */
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

  /**
   * @description 鼠标移入tr，联动展示hover效果
   * @memberof Table
   */
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

  /**
   * @description 多选时，该行tr选中激活状态
   * @memberof Table
   */
  handleSelected = index => {
    const tbody = this.tableWrap.querySelectorAll('tbody')
    tbody.forEach(item => {
      const tr = item.children
      const rows = [].filter.call(tr, row => this.hasClass(row, 'table-tr'))
      const newRow = rows[index]
      newRow && this.addClass(newRow, 'is-selected')
    })
  }

  /**
   * @description 取消勾选时，去掉该行被选中状态样式
   * @memberof Table
   */
  handleNoSelect = index => {
    const tbody = this.tableWrap.querySelectorAll('tbody')
    tbody.forEach(item => {
      const tr = item.children
      const rows = [].filter.call(tr, row => this.hasClass(row, 'table-tr'))
      const newRow = rows[index]
      newRow && this.removeClass(newRow, 'is-selected')
    })
  }

  /**
   * @description 鼠标移出tr时，去掉hover效果
   * @memberof Table
   */
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
  /**
   * @description 工具方法，判断某元素是否存在某class
   * @param {*} el
   * @param {*} cls
   * @memberof Table
   */
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

  /**
   * @description 工具方法，为某元素添加某class
   * @param {*} el
   * @param {*} cls
   * @memberof Table
   */
  addClass(el, cls) {
    if (!el) return
    const curClass = el.className
    const classes = (cls || '').split(' ')
    classes.forEach(classItem => {
      if (!classItem) return
      if (el.classList) {
        el.classList.add(classItem)
      } else if (!hasClass(el, classItem)) {
        curClass += ' ' + classItem
      }
    })
    if (!el.classList) {
      el.className = curClass
    }
  }

  /**
   * @description 工具方法，给某元素移除某class
   * @param {*} el
   * @param {*} cls
   * @memberof Table
   */
  removeClass(el, cls) {
    if (!el || !cls) return
    const classes = cls.split(' ')
    const curClass = ' ' + el.className + ' '

    classes.forEach(classItem => {
      let clsName = classItem
      if (!clsName) return
      if (el.classList) {
        el.classList.remove(clsName)
      } else if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    })
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
    if (!this.props.rowSelection) return
    const { selectedRowKeys } = this.state
    if (!this.isPuppet) {
      if (status) {
        this.setState({
          selectedRowKeys: [...selectedRowKeys, index],
        })
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

    const { onSelect } = this.props.rowSelection
    onSelect && onSelect(status, index, item)
  }

  /**
   * @description 全选事件
   * @memberof Table
   */
  handleCheckOnSelectAll = () => {
    const { checkAll } = this.state
    const { data } = this.props
    if (!this.props.rowSelection) return
    if (!this.isPuppet && checkAll) {
      this.setState(
        {
          selectedRowKeys: [],
          checkAll: false,
          indeterminate: false,
        },
        () => {
          const { onSelectAll } = this.props.rowSelection
          const { checkAll, selectedRowKeys } = this.state
          onSelectAll && onSelectAll(checkAll, selectedRowKeys)
          data.forEach((item, index) => {
            this.handleNoSelect(index)
          })
        }
      )
    }
    if (!this.isPuppet && !checkAll) {
      const list = data.map((item, index) => index)
      this.setState(
        {
          selectedRowKeys: list,
          checkAll: true,
          indeterminate: false,
        },
        () => {
          const { onSelectAll } = this.props.rowSelection
          const { selectedRowKeys, checkAll } = this.state
          onSelectAll && onSelectAll(checkAll, selectedRowKeys)
          data.forEach((item, index) => {
            this.handleSelected(index)
          })
        }
      )
    }

    if (this.isPuppet) {
      const { onSelectAll, selectedRowKeys } = this.props.rowSelection
      const { checkAll } = this.state
      this.setState({ checkAll: !checkAll })
      onSelectAll && onSelectAll(!checkAll, selectedRowKeys)
    }
  }

  /**
   * @description 当前页码改变事件
   * @memberof Table
   */
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

  /**
   * @description 页码组件渲染函数
   * @memberof Table
   */
  renderPagination = () => {
    const { pagination } = this.props

    if (!pagination) return
    const { scope = 3, ...others } = pagination
    return (
      <div className='table-pagination text-center'>
        <Pagination
          {...others}
          scope={scope}
          onSelect={this.handlePaginationChange}
        />
      </div>
    )
  }

  /**
   * @description 点击排序，更改defaultSort
   * @memberof Table
   */
  handleDefaultSort = defaultSort => {
    const { onChangeSort } = this.props
    this.setState({ defaultSort }, () => {
      onChangeSort && onChangeSort({ ...defaultSort })
      // 非受控table，更改排序，清空勾选项
      if (!this.isPuppet) {
        this.setState({
          selectedRowKeys: [],
          indeterminate: false,
          checkAll: false,
        })
      }
    })
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
      placeholder,
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
      fixed,
      indeterminate,
      checkAll,
      selectedRowKeys,
      defaultSort,
    } = this.state
    const leftWidth = leftFixedWidth ? leftFixedWidth + 'px' : 60
    const rightWidth = rightFixedWidth ? rightFixedWidth + 'px' : ''
    const isNeedHide = !!fixLeftColumns.length || !!fixRightColumns.length
    return (
      <div>
        <div
          className={classnames('table', className)}
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
            className={classnames('table-wrap', 'table-scroll', {
              'table-border': border,
            })}
          >
            <div
              ref={div => {
                this.inner = div
              }}
              className='table-inner'
            >
              <TableHead
                rowSelection={rowSelection}
                fixLeftColumns={fixLeftColumns}
                fixRightColumns={fixRightColumns}
                noFixColumns={noFixColumns}
                indeterminate={indeterminate}
                checkAll={checkAll}
                fixed={fixed}
                isNeedHide={isNeedHide}
                handleCheckOnSelectAll={this.handleCheckOnSelectAll}
                defaultSort={defaultSort}
                handleSort={this.handleDefaultSort}
              />
              <TableBody
                data={data}
                stripe={stripe}
                pagination={pagination}
                fixLeftColumns={fixLeftColumns}
                fixRightColumns={fixRightColumns}
                noFixColumns={noFixColumns}
                rowSelection={rowSelection}
                fixed={fixed}
                isNeedHide={isNeedHide}
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
                defaultSort={defaultSort}
                handleSort={this.handleDefaultSort}
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
                defaultSort={defaultSort}
                handleSort={this.handleDefaultSort}
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
          {!data.length && (
            <p className='text-center table-no-data'>{placeholder}</p>
          )}
        </div>
        {this.renderPagination()}
      </div>
    )
  }
}

const isPuppetTable = rowSelection => {
  return (
    typeof rowSelection === 'object' &&
    rowSelection !== null &&
    Array.isArray(rowSelection.selectedRowKeys)
  )
}
