import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import * as System from '../../utils/system'

export default class TableBody extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    System.manager(this)

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
  }
  static defaultProps = {
    disabled: false,
    placeholder: '请选择',
  }

  componentDidMount() {}

  /**
   * 清空组件管理
   */
  componentWillUnmount() {
    System.unmanager(this)
  }
  render() {
    const { columns, data, stripe, fixed } = this.props
    const current = 1
    return (
      <div className='table-body-wrap'>
        <table className='table-body'>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={classnames({
                  'table-striped': stripe && index % 2 !== 1,
                })}
              >
                {columns.map((column, columnIndex) => {
                  const key = `${index}${columnIndex}`
                  const value = column.prop ? item[column.prop] : ''
                  const rowspan = column.rowspan ? column.rowspan : 1
                  const colspan = column.colspan ? column.colspan : 1
                  const width = column.width ? column.width : ''
                  let fix = ''
                  if (!fixed) {
                    fix = ''
                  } else {
                    fix = fixed && column.fixed ? column.fixed : 'normal'
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
                      {/* <Tooltip position="bottom" content={value.toString()}> */}
                      <div className='table-cell'>{value}</div>
                      {/* </Tooltip> */}
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
