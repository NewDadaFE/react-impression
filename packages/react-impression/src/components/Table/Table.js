import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import TableBody from '../TableBody'
import TableHead from '../TableHead'
import Pagination from '../Pagination'
import { getTargetIndex, getTargetList } from '../../utils/help'
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
      indeterminate: false, // check半选状态
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
     * 设置table的最大宽度 {x:number},默认为100%
     */

    scroll: PropTypes.object,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 多选表格配置,配置参考例子，rowKey默认取值index，可自定义
     */
    rowSelection: PropTypes.shape({
      selectedRowKeys: PropTypes.array,
      defaultSelectedRowKeys: PropTypes.array,
      onChange: PropTypes.func,
      onSelect: PropTypes.func,
      onSelectAll: PropTypes.func,
      fixed: PropTypes.bool,
      rowKey: PropTypes.string,
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

  get isPuppet() {
    const { rowSelection } = this.props
    return (
      typeof rowSelection === 'object' &&
      rowSelection !== null &&
      Array.isArray(rowSelection.selectedRowKeys)
    )
  }

  componentWillMount() {
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
        const { prop, label, fixed, Cell, width, Header } = child.props
        const obj = { prop, label, fixed, Cell, width, Header }
        return obj
      })
      columnList = columns
    }
    if (children && !nextChildren) {
      let columns = children.map(child => {
        const { prop, label, fixed, Cell, width, Header } = child.props
        const obj = { prop, label, fixed, Cell, width, Header }
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
      let indeterminate = false
      let checkAll = false
      if (selectedRowKeysLength > 0 && selectedRowKeysLength < dataLength) {
        indeterminate = true
      }
      if (selectedRowKeysLength === dataLength && selectedRowKeysLength !== 0) {
        checkAll = true
      }
      this.setState({
        indeterminate,
        selectedRowKeys: this.isPuppet
          ? selectedRowKeys
          : defaultSelectedRowKeys,
        checkAll,
      })
    }
  }

  componentDidMount() {
    const { rowSelection, data } = this.props
    if (!rowSelection) return
    // 非受控组件
    if (!this.isPuppet) {
      const { defaultSelectedRowKeys = [], rowKey } = rowSelection
      this.setState({ selectedRowKeys: defaultSelectedRowKeys })
      this.handleTrIsActive(rowKey, defaultSelectedRowKeys, data)
      return
    }
    const { selectedRowKeys = [], rowKey } = rowSelection
    this.setState({ selectedRowKeys })
    this.handleTrIsActive(rowKey, selectedRowKeys, data)
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

  componentWillReceiveProps(nextProps) {
    const { rowSelection, columns, children, data: nextData } = nextProps
    const { columns: currentColumns, children: currentChildren } = this.props
    // TableColumns为数据源
    if (columns && currentColumns && !R.equals(columns, currentColumns)) {
      this.handleInt(columns, children)
    }
    if (children && currentChildren && !R.equals(children, currentChildren)) {
      this.handleInt(columns, children)
    }
    const rowKey = this.props.rowSelection?.rowKey
    // data为数据源
    // 非受控组件，在data数据源发生变化，主要是在删除数据项的时候会对checkbox以及选中状态产生影响
    if (!this.isPuppet) {
      // 只有在设置了rowKey的时候，才能在非受控组件下添加或者删除table数据源，默认index时会有问题
      if (rowKey) {
        const { selectedRowKeys } = this.state
        const { onChange } = rowSelection
        // 重置checkbox的状态 && 重置selectedRowKeys
        this.handleSetCheck(selectedRowKeys, nextData, rowKey, () => {
          onChange && onChange(currentKeyList)
        })
      }
      return
    }
    // 受控组件
    const { selectedRowKeys, onChange } = rowSelection
    this.handleSetCheck(selectedRowKeys, nextData, rowKey, () => {
      onChange && onChange(selectedRowKeys)
    })
    this.handleTrIsActive(rowKey, selectedRowKeys, nextData)
  }

  /**
   * @description tr选中状态
   * @memberof Table
   */
  handleTrIsActive = (rowKey, selectedRowKeys = [], data = []) => {
    data.forEach((item, index) => {
      this.handleNoSelect(index)
    })
    // data 中对应key值如果能在selectedRowKeys中找到，加上选中状态
    if (rowKey) {
      for (let j = 0; j < data.length; j++) {
        if (Object.prototype.hasOwnProperty.call(data[j], rowKey)) {
          if (R.includes(data[j][rowKey], selectedRowKeys)) {
            this.handleSelected(j)
          }
        }
      }
    } else {
      // 默认index的数组，故可以直接循环
      selectedRowKeys.forEach(i => this.handleSelected(i))
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
    let isEnd
    let isStart
    if (scrollWidth === 0) {
      isStart = true
      isEnd = false
    }
    if (scrollWidth > 0 && scrollWidth < targetWidth) {
      isEnd = false
      isStart = false
    }
    if (scrollWidth === targetWidth + 2 || scrollWidth === targetWidth) {
      isEnd = true
      isStart = false
    }
    this.setState({ isEnd, isStart })
  }

  getNowIndex = (defaultIndex, item) => {
    const { data = [] } = this.props
    const rowKey = this.props.rowSelection?.rowKey
    if (!rowKey) return defaultIndex
    return getTargetIndex(item, data, rowKey)
  }
  /**
   * @description 鼠标移入tr，联动展示hover效果
   * @memberof Table
   */
  handleHover = (index, item) => {
    const { fixed } = this.state
    const targetIndex = this.getNowIndex(index, item)
    if (fixed) {
      const tbody = this.tableWrap.querySelectorAll('tbody')
      tbody.forEach(item => {
        const tr = item.children
        const rows = [].filter.call(tr, row => this.hasClass(row, 'table-tr'))
        const newRow = rows[targetIndex]
        newRow && this.addClass(newRow, 'is-hover')
      })
    }
  }

  /**
   * @description 多选时，该行tr选中激活状态
   * @memberof Table
   */
  handleSelected = index => {
    requestAnimationFrame(() => {
      const tbody = this.tableWrap.querySelectorAll('tbody')
      tbody.forEach(item => {
        const tr = item.children
        const rows = [].filter.call(tr, row => this.hasClass(row, 'table-tr'))
        const newRow = rows[index]
        newRow && this.addClass(newRow, 'is-selected')
      })
    })
  }

  /**
   * @description 取消勾选时，去掉该行被选中状态样式
   * @memberof Table
   */
  handleNoSelect = index => {
    requestAnimationFrame(() => {
      const tbody = this.tableWrap.querySelectorAll('tbody')
      tbody.forEach(item => {
        const tr = item.children
        const rows = [].filter.call(tr, row => this.hasClass(row, 'table-tr'))
        const newRow = rows[index]
        newRow && this.removeClass(newRow, 'is-selected')
      })
    })
  }

  /**
   * @description 鼠标移出tr时，去掉hover效果
   * @memberof Table
   */
  handleHoverLeave = (index, item) => {
    const { fixed } = this.state
    const targetIndex = this.getNowIndex(index, item)
    if (fixed) {
      const tbody = this.tableWrap.querySelectorAll('tbody')
      tbody.forEach(item => {
        const tr = item.children
        const rows = [].filter.call(tr, row => this.hasClass(row, 'table-tr'))
        const newRow = rows[targetIndex]
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
   * @description indeterminate／checkAll状态判断& set selectedRowKeys
   * @memberof Table
   */
  handleSetCheck = (selectedRowKeys = [], data = [], rowKey, func) => {
    const sLength = selectedRowKeys.length
    const dLength = data.length
    if (Array.isArray(data)) {
      // 木偶组件并且不存在rowKey，selectedRowKeys即为index列表
      if (this.isPuppet && !rowKey) {
        let indeterminate = false
        let checkAll = false
        if (sLength > 0 && sLength < dLength) {
          indeterminate = true
        }
        if (sLength === dLength && sLength.length !== 0 && dLength !== 0) {
          checkAll = true
        }
        this.setState(
          {
            selectedRowKeys,
            indeterminate,
            checkAll,
          },
          () => func && func()
        )
        return
      }
      if (!rowKey) return
      // selectedRowKeys 长度为0或者data长度为0，indeterminate／checkAll都为false
      if (sLength === 0 || dLength === 0) {
        this.setState(
          {
            selectedRowKeys,
            indeterminate: false,
            checkAll: false,
          },
          () => func && func()
        )
        return
      }
      let targetList = [] // 符合当前data的selectedRowKeys
      for (let i = 0; i < sLength; i++) {
        if (R.includes(selectedRowKeys[i], getTargetList(data, rowKey))) {
          targetList.push(selectedRowKeys[i])
        }
      }
      const tLength = targetList.length
      let indeterminate = false
      let checkAll = false
      if (tLength > 0 && tLength < dLength) {
        indeterminate = true
      }
      if (tLength >= dLength && tLength !== 0) {
        checkAll = true
      }
      this.setState(
        {
          selectedRowKeys,
          indeterminate,
          checkAll,
        },
        () => func && func()
      )
    }
  }

  /**
   * @description 手动单选触发回调
   * @memberof Table
   */
  handleCheckOnSelect = (e, index, item) => {
    const status = e.target.checked
    const rowKey = this.props.rowSelection?.rowKey ?? ''
    const data = this.props.data ?? []
    let selectRowKey = rowKey ? item[rowKey] : index
    let currentIndex = this.getNowIndex(index, item)
    if (!this.props.rowSelection) return
    const { selectedRowKeys } = this.state
    if (!this.isPuppet) {
      if (status) {
        let selectedList = [...selectedRowKeys, selectRowKey]
        this.handleSetCheck(selectedList, data, rowKey)
      } else {
        this.handleSetCheck(
          selectedRowKeys.filter(item => Number(item) !== selectRowKey),
          data,
          rowKey
        )
      }
    }
    if (status) {
      this.handleSelected(currentIndex)
    } else {
      this.handleNoSelect(currentIndex)
    }
    const { onSelect } = this.props.rowSelection
    let targetValue = rowKey ? item[rowKey] : index
    onSelect && onSelect(status, targetValue, item)
  }

  /**
   * @description 全选事件
   * @memberof Table
   */
  handleCheckOnSelectAll = () => {
    const { checkAll, selectedRowKeys } = this.state
    const { data } = this.props
    if (!this.props.rowSelection) return
    const rowKey = this.props.rowSelection?.rowKey ?? ''
    if (!this.isPuppet && checkAll) {
      // 不存在rowkey，则直接[]
      let selectedList = []
      if (rowKey) {
        // 存在rowKey，要在selectedRowKeys去掉data的对应key值
        for (let i = 0; i < selectedRowKeys.length; i++) {
          if (!R.includes(selectedRowKeys[i], getTargetList(data, rowKey))) {
            selectedList.push(selectedRowKeys[i])
          }
        }
      }
      this.setState(
        {
          selectedRowKeys: selectedList,
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
      // 全选状态
      let selectedList = []
      if (!rowKey) {
        selectedList = data.map((item, index) => {
          if (rowKey && Object.prototype.hasOwnProperty.call(item, rowKey)) {
            return item[rowKey]
          }
          return index
        })
      }
      for (let j = 0; j < data.length; j++) {
        if (Object.prototype.hasOwnProperty.call(data[j], rowKey)) {
          if (!R.includes(data[j][rowKey], selectedRowKeys)) {
            selectedList.push(data[j][rowKey])
          }
        }
      }
      this.setState(
        {
          selectedRowKeys: selectedList.concat(selectedRowKeys),
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
      this.setState({ checkAll: !checkAll }, () => {
        const { checkAll } = this.state
        onSelectAll && onSelectAll(checkAll, selectedRowKeys)
      })
    }
  }

  /**
   * @description 当前页码改变事件
   * @memberof Table
   */
  handlePaginationChange = pagNo => {
    const { pagination } = this.props
    if (pagination && pagination.onSelect) {
      this.setState(
        {
          checkAll: false,
        },
        () => {
          const { onSelect } = pagination
          onSelect(pagNo)
        }
      )
    }
  }

  /**
   * @description 页码组件渲染函数
   * @memberof Table
   */
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
                getCurrentIndex={this.getNowIndex}
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
                getCurrentIndex={this.getNowIndex}
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
                getCurrentIndex={this.getNowIndex}
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
