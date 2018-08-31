import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import * as System from '../../utils/system'
import TableBody from '../TableBody/index'
import TableHead from '../TableHead/index'

export default class Table extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    System.manager(this)

    // 是否木偶组件
    this.isPuppet = props.value !== undefined

    // 子组件数据
    const initValue = {
      columns: this.props.columns || [],
      fixLeftColumns: [],
      fixRightColumns: [],
      noFixColumns: [],
      leftFixedWidth: '',
    }

    this.state = {
      ...initValue,
    }
  }

  static propTypes = {
    /**
     * 表格列配置项
     */
    columns: PropTypes.array,

    /**
     * 数据源
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
     * 是否有固定列
     */
    fixed: PropTypes.bool,

    /**
     * 设置table的最大宽度／最大高度
     */
    scroll: PropTypes.object,

    /**
     * 文本内容超出省略
     */
    tooltip: PropTypes.bool,
    /**
     * 自定义样式
     */
    className: PropTypes.string,
  }
  static defaultProps = {
    disabled: false,
    placeholder: '请选择',
    tooltip: false,
  }

  componentWillMount() {
    const { columns } = this.props
    let fixLeftColumns = []
    let fixRightColumns = []
    let noFixColumns = []
    columns.forEach(column => {
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
      },
      this.updateColumnsWidth
    )
  }
  componentDidMount() {}

  /**
   * 清空组件管理
   */
  componentWillUnmount() {
    System.unmanager(this)
  }
  updateColumnsWidth() {
    const { fixLeftColumns, fixRightColumns } = this.state

    if (fixLeftColumns.length > 0) {
      let fixedWidth = 0
      fixLeftColumns.forEach(function (column) {
        fixedWidth += column.realWidth || column.width || 80
      })

      this.setState({ leftFixedWidth: fixedWidth })
    }

    if (fixRightColumns.length > 0) {
      let rightFixedWidth = 0
      fixRightColumns.forEach(function (column) {
        rightFixedWidth += column.realWidth || column.width || 80
      })

      this.setState({ rightFixedWidth: rightFixedWidth })
    }
  }

  componentWillReceiveProps(props) {
    const { options } = this.state
    if (props.value !== this.props.value) {
      this.handleValueChange(props)
      options.forEach(option => option.handleActive(props))
    }
  }

  getMax = max => {
    if (!max) return null
    if (max.x && max.y) return { maxWidth: max.x, maxHeight: max.y }
    if (max.x) return { maxWidth: max.x }
    if (max.y) return { maxHeight: max.y }
  }
  render() {
    const {
      data,
      stripe,
      border,
      scroll,
      className,
      fixed,
      tooltip,
    } = this.props
    const max = this.getMax(scroll)
    const {
      fixLeftColumns,
      fixRightColumns,
      noFixColumns,
      leftFixedWidth,
      rightFixedWidth,
      columns,
    } = this.state
    const leftWidth = leftFixedWidth ? leftFixedWidth + 'px' : ''
    const rightWidth = rightFixedWidth ? rightFixedWidth + 'px' : ''
    return (
      <div
        className={classnames('table', { 'table-wrap-fix': fixed })}
        style={max}
      >
        <div
          className={classnames(
            'table-wrap',
            { 'table-border': border },
            { 'table-scroll': scroll && (scroll.x || scroll.y) },
            className
          )}
        >
          <TableHead columns={columns} tooltip={tooltip} />
          <TableBody
            columns={columns}
            data={data}
            stripe={stripe}
            tooltip={tooltip}
          />
        </div>
        {!!fixLeftColumns.length && (
          <div
            className={classnames(
              'table-fixed-left',
              { 'table-border': border },
              { 'table-scroll': scroll && (scroll.x || scroll.y) },
              className
            )}
            style={{ width: leftWidth }}
          >
            <TableHead
              columns={fixLeftColumns.concat(noFixColumns, fixRightColumns)}
              fixed
            />
            <TableBody
              columns={fixLeftColumns.concat(noFixColumns, fixRightColumns)}
              data={data}
              stripe={stripe}
              fixed
            />
          </div>
        )}
        {!!fixRightColumns.length && (
          <div
            className={classnames(
              'table-fixed-right',
              { 'table-border': border },
              { 'table-scroll': scroll && (scroll.x || scroll.y) },
              className
            )}
            style={{ width: rightWidth }}
          >
            <TableHead
              columns={fixRightColumns.concat(noFixColumns, fixLeftColumns)}
              fixed
            />
            <TableBody
              columns={fixRightColumns.concat(noFixColumns, fixLeftColumns)}
              data={data}
              stripe={stripe}
              fixed
            />
          </div>
        )}
      </div>
    )
  }
}

Table.childContextTypes = {
  componentTable: PropTypes.any,
}
