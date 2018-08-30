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
     * 自定义样式
     */
    className: PropTypes.string,
  }
  static defaultProps = {
    disabled: false,
    placeholder: '请选择',
  }

  componentWillMount() {
    const { columns } = this.props
    let fixLeftColumns = []
    let fixRightColumns = []
    let noFixColumns = []
    columns.forEach(column => {
      if (column.fixed && column.fixed === 'left') {
        fixLeftColumns.push(column)
      } else if (column.fixed && column.fixed === 'right') {
        fixRightColumns.push(column)
      } else {
        noFixColumns.push(column)
      }
    })
    this.setState({
      fixLeftColumns,
      fixRightColumns,
      noFixColumns,
    })
  }
  componentDidMount() {}
  getChildContext() {
    return {
      componentTable: this,
    }
  }
  /**
   * option选中回调
   * @param {String} 值
   * @param {String} 显示文本
   * @param {Number} 索引
   */
  selectOptionHandle(result) {
    const { onChange, value, filterMethod, multiple } = this.props
    const { options, selectedItem, optionGroup } = this.state
    const originValue = this.isPuppet ? value : this.state.value
    if (multiple) {
      this.setState({ currentPlaceholder: '' })
    }
    // 木偶组件
    if (!this.isPuppet) {
      this.setState(
        {
          value: multiple ? [...originValue, result.value] : result.value,
          selectText: multiple ? '' : result.name,
          selectedItem: multiple ? [...selectedItem, result.node] : result.node,
        },
        () => {
          if (multiple && this.tag.clientHeight > 42) {
            this.setState({ top: '220%' })
          }

          options.forEach(option => option.handleActive())
          onChange &&
            result.value !== originValue &&
            onChange(result.value, result.name, result.index)
        }
      )
    } else {
      if (multiple && this.tag.clientHeight > 42) {
        this.setState({ top: '220%' })
      }
      onChange &&
        result.value !== originValue &&
        onChange(result.value, result.name, result.index)
    }
    this.setState(
      {
        showOption: !!multiple,
        queryText: '',
      },
      () => {
        options.forEach(option => {
          option.queryChange('', filterMethod)
        })
        optionGroup.forEach(option => {
          option.queryChange('')
        })
      }
    )
  }

  /**
   * 清空组件管理
   */
  componentWillUnmount() {
    System.unmanager(this)
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
      columns,
      data,
      stripe,
      border,
      scroll,
      className,
      fixed,
    } = this.props
    const max = this.getMax(scroll)
    const { fixLeftColumns, fixRightColumns, noFixColumns } = this.state
    console.log('data=>', fixLeftColumns.concat(noFixColumns, fixRightColumns))

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
          <TableHead columns={columns} />
          <TableBody columns={columns} data={data} stripe={stripe} />
        </div>
        {/* {(!!fixLeftColumns.length || !!fixRightColumns.length) && (
          <div
            className={classnames(
              'table-fixed',
              { 'table-border': border },
              { 'table-scroll': scroll && (scroll.x || scroll.y) },
              className
            )}
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
        )} */}
      </div>
    )
  }
}

Table.childContextTypes = {
  componentTable: PropTypes.any,
}
