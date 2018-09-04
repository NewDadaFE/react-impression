import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '../Tooltip/index'
import Checkbox from '../Checkbox/index'

export default class TableBody extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    // 是否木偶组件
    this.isPuppet = props.value !== undefined

    // 子组件数据
    this.options = []
    const initValue = {}

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
     * 换页设置
     */
    pagination: PropTypes.object,

    /**
     * 是否固定
     */
    fixed: PropTypes.bool,

    /**
     * 文本内容超出省略
     */
    tooltip: PropTypes.bool,

    /**
     * 固定列，鼠标移入事件
     */
    onMouseEnter: PropTypes.func,

    /**
     * 固定列，鼠标移出事件
     */
    onMouseLeave: PropTypes.func,
    /**
     * 多选表格配置
     */
    rowSelection: PropTypes.object,
    /**
     * 手动单选触发回调
     */
    handleCheckOnSelect: PropTypes.func,
    /**
     * 多选选中项index list
     */
    selectedRowKeyList: PropTypes.array,
  }

  static defaultProps = {
    disabled: false,
    placeholder: '请选择',
  }

  render() {
    const {
      columns,
      data,
      stripe,
      fixed,
      tooltip,
      onMouseEnter,
      onMouseLeave,
      rowSelection,
      handleCheckOnSelect,
      selectedRowKeyList,
    } = this.props
    const current = 1
    return (
      <div className='table-body-wrap'>
        <table className='table-body'>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={classnames(
                  'table-tr',
                  {
                    'table-striped': stripe && index % 2 !== 1,
                  },
                  {
                    'is-hover': fixed && item.ishover,
                  }
                )}
                onMouseEnter={() => onMouseEnter(index)}
                onMouseLeave={() => onMouseLeave(index)}
              >
                {columns.map((column, columnIndex) => {
                  const key = `${index}${columnIndex}`
                  const value = column.prop ? item[column.prop] : ''
                  const rowspan = column.rowspan ? column.rowspan : 1
                  const colspan = column.colspan ? column.colspan : 1
                  let width = ''
                  let fix = ''
                  if (!fixed) {
                    fix = ''
                    width = column.width ? column.width : ''
                  } else {
                    fix = fixed && column.fixed ? column.fixed : 'normal'
                    width = column.width ? column.width : 80
                  }
                  if (columnIndex === 0 && rowSelection) {
                    const fix = rowSelection.fixed ? 'left' : null
                    return (
                      <td
                        className={classnames(`item-fix-${fix}`)}
                        key={index}
                        width={60}
                        className={classnames(`item-fix-${fix}`)}
                      >
                        <div className='table-cell'>
                          <Checkbox
                            checked={selectedRowKeyList.some(
                              item => Number(item) === index
                            )}
                            onChange={e => handleCheckOnSelect(e, index, item)}
                          />
                        </div>
                      </td>
                    )
                  }
                  if (column.render && typeof column.render === 'function') {
                    return (
                      <td
                        key={key}
                        rowSpan={rowspan}
                        colSpan={colspan}
                        width={width}
                        className={classnames(`item-fix-${fix}`)}
                      >
                        <div className='table-cell'>
                          {column.render(value, index, current)}
                        </div>
                      </td>
                    )
                  }
                  return (
                    <td
                      key={key}
                      rowSpan={rowspan}
                      colSpan={colspan}
                      width={width}
                      className={classnames(`item-fix-${fix}`)}
                    >
                      {tooltip && (
                        <Tooltip position='bottom' content={value}>
                          <div className='table-cell table-cell-tooltip'>
                            {value}
                          </div>
                        </Tooltip>
                      )}
                      {!tooltip && <div className='table-cell'>{value}</div>}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

TableBody.contextTypes = {
  componentTable: PropTypes.any,
}
