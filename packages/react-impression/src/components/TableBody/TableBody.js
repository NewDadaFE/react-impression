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

    /**
     * 是否显示多选框
     */
    isShowSelection: PropTypes.bool,
    /**
     * 分页配置项，请参照Pagination
     */
    pagination: PropTypes.object,

    /**
     * 左侧固定项目
     */

    fixLeftColumns: PropTypes.array,

    /**
     * 右侧固定项目
     */
    fixRightColumns: PropTypes.array,

    /**
     * 非固定项目
     */
    noFixColumns: PropTypes.array,

    /**
     * 是否固定左侧
     */
    fixLeft: PropTypes.bool,

    /**
     * 是否固定右侧
     */
    fixRight: PropTypes.bool,
  }

  render() {
    const {
      data,
      stripe,
      fixed,
      tooltip,
      onMouseEnter,
      onMouseLeave,
      rowSelection,
      handleCheckOnSelect,
      selectedRowKeyList,
      isShowSelection,
      pagination,
      fixLeftColumns,
      fixRightColumns,
      noFixColumns,
      fixLeft,
      fixRight,
    } = this.props
    const current =
      pagination && pagination.activePage ? pagination.activePage : 1
    let fixLeftList = []
    let fixRightList = []
    if (!fixLeft && !fixRight) {
      fixLeftList = fixLeftColumns
      fixRightList = fixRightColumns
    } else {
      fixLeftList = fixLeft ? fixLeftColumns : fixRightColumns
      fixRightList = fixLeft ? fixRightColumns : fixLeftColumns
    }

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
                {rowSelection &&
                  !isShowSelection &&
                  rowSelection.fixed && (
                  <td
                    className={classnames(`item-fix-left`)}
                    key={-1}
                    width={60}
                  >
                    <div className='table-cell table-cell-select'>
                      <Checkbox
                        checked={selectedRowKeyList.some(
                          item => Number(item) === index
                        )}
                        onChange={e => handleCheckOnSelect(e, index, item)}
                      />
                    </div>
                  </td>
                )}
                {!!fixLeftList.length &&
                  fixLeftList.map((column, columnIndex) => {
                    const key = `${index}${columnIndex}`
                    const value = column.prop ? item[column.prop] : ''
                    const rowspan = column.rowspan ? column.rowspan : 1
                    const colspan = column.colspan ? column.colspan : 1
                    const width = column.width ? column.width : 80

                    if (column.render && typeof column.render === 'function') {
                      return (
                        <td
                          key={key}
                          rowSpan={rowspan}
                          colSpan={colspan}
                          width={width}
                          className={classnames(`item-fix-left`)}
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
                        className={classnames(`item-fix-left`)}
                      >
                        {tooltip && (
                          <Tooltip
                            position='bottom'
                            content={JSON.stringify(value)}
                          >
                            <div className='table-cell table-cell-tooltip'>
                              {value}
                            </div>
                          </Tooltip>
                        )}
                        {!tooltip && <div className='table-cell'>{value}</div>}
                      </td>
                    )
                  })}
                {rowSelection &&
                  !rowSelection.fixed && (
                  <td className={classnames(`item-fix-`)} key={-1} width={60}>
                    <div className='table-cell'>
                      <Checkbox
                        checked={selectedRowKeyList.some(
                          item => Number(item) === index
                        )}
                        onChange={e => handleCheckOnSelect(e, index, item)}
                      />
                    </div>
                  </td>
                )}

                {!!noFixColumns.length &&
                  noFixColumns.map((column, columnIndex) => {
                    const key = `${index}${columnIndex}`
                    const value = column.prop ? item[column.prop] : ''
                    const rowspan = column.rowspan ? column.rowspan : 1
                    const colspan = column.colspan ? column.colspan : 1
                    let width = ''
                    if (!fixed) {
                      width = column.width ? column.width : ''
                    } else {
                      width = column.width ? column.width : 80
                    }
                    if (column.render && typeof column.render === 'function') {
                      return (
                        <td
                          key={key}
                          rowSpan={rowspan}
                          colSpan={colspan}
                          width={width}
                          className={classnames(`item-fix-normal`)}
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
                        className={classnames(`item-fix-normal`)}
                      >
                        {tooltip && (
                          <Tooltip
                            position='bottom'
                            content={JSON.stringify(value)}
                          >
                            <div className='table-cell table-cell-tooltip'>
                              {value}
                            </div>
                          </Tooltip>
                        )}
                        {!tooltip && <div className='table-cell'>{value}</div>}
                      </td>
                    )
                  })}
                {!!fixRightList.length &&
                  fixRightList.map((column, columnIndex) => {
                    const key = `${index}${columnIndex}`
                    const value = column.prop ? item[column.prop] : ''
                    const rowspan = column.rowspan ? column.rowspan : 1
                    const colspan = column.colspan ? column.colspan : 1
                    const width = column.width ? column.width : 80

                    if (column.render && typeof column.render === 'function') {
                      return (
                        <td
                          key={key}
                          rowSpan={rowspan}
                          colSpan={colspan}
                          width={width}
                          className={classnames(`item-fix-right`)}
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
                        className={classnames(`item-fix-right`)}
                      >
                        {tooltip && (
                          <Tooltip
                            position='bottom'
                            content={JSON.stringify(value)}
                          >
                            <div className='table-cell table-cell-tooltip'>
                              {value}
                            </div>
                          </Tooltip>
                        )}
                        {!tooltip && <div className='table-cell'>{value}</div>}
                      </td>
                    )
                  })}
                {rowSelection &&
                  isShowSelection &&
                  rowSelection.fixed && (
                  <td
                    className={classnames(`item-fix-normal`)}
                    key={-1}
                    width={60}
                  >
                    <div className='table-cell table-cell-select'>
                      <Checkbox />
                    </div>
                  </td>
                )}
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
