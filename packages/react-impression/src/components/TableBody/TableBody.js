import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '../Checkbox'

const defaultWidth = 80
const DEFAULT_EXCLUDE_PROP = 'HAS_CHECKBOX'
export default class TableBody extends React.PureComponent {
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

    /**
     * 渲染内容是否需要隐藏
     */
    isNeedHide: PropTypes.bool,

    /**
     * <Tr>标签的onClick事件函数
     */
    onClickTr: PropTypes.func,

    /**
     * 不触发<Tr>标签事件函数的Prop值
     */
    excludePropList: PropTypes.array,
  }
  static defaultProps = {
    isNeedHide: false,
  }

  renderTd = (array, item, type, isNeedHide, index, data) => {
    const { fixed } = this.props
    return array.map((column, columnIndex) => {
      const { prop, rowspan, functionName, colspan, Cell, width } = column
      let dataColumnProp = ''
      let value
      if (prop && typeof prop === 'function') {
        dataColumnProp = functionName || ''
        value = prop(item)
      } else {
        dataColumnProp = prop
        value = item[prop]
      }
      const colRowspan = rowspan || 1
      const colColspan = colspan || 1
      let key
      let colunmWidth
      if (type === 'left') {
        key = `left${columnIndex}`
      } else if (type === 'right') {
        key = `right${columnIndex}`
      } else {
        key = `normal${columnIndex}`
      }
      if (!fixed) {
        colunmWidth = width || ''
      } else {
        colunmWidth = width || defaultWidth
      }

      let content
      if (Cell && typeof Cell === 'function') {
        content = Cell(item, data, index)
      } else if (React.isValidElement(Cell)) {
        content = React.cloneElement(Cell)
      } else {
        content = value
      }
      return (
        <td
          key={key}
          rowSpan={colRowspan}
          colSpan={colColspan}
          width={colunmWidth}
          className={classnames(`item-fix-left`)}
          data-column-prop={dataColumnProp}
        >
          <div
            className={classnames('table-cell', {
              'table-cell-hide': isNeedHide,
            })}
          >
            {content}
          </div>
        </td>
      )
    })
  }

  handleClickTr = (e, item, index) => {
    const { excludePropList, onClickTr } = this.props
    if (!onClickTr) return
    // 根据currentTarget和target获取对应的Td
    const tdNode = Array.prototype.filter.call(
      e.currentTarget.childNodes,
      node => node === e.target || (node && node.contains(e.target))
    )
    // 判断当前的Td是否需要触发Tr标签的事件函数
    if (
      tdNode[0] &&
      excludePropList.indexOf(tdNode[0].getAttribute('data-column-prop')) === -1
    ) {
      onClickTr(item, index)
    }
  }

  render() {
    const {
      data,
      stripe,
      fixed,
      onMouseEnter,
      onMouseLeave,
      rowSelection,
      handleCheckOnSelect,
      selectedRowKeyList,
      isShowSelection,
      fixLeftColumns,
      fixRightColumns,
      noFixColumns,
      fixLeft,
      isNeedHide,
      fixRight,
    } = this.props
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
                onClick={e => this.handleClickTr(e, item, index)}
              >
                {rowSelection && !isShowSelection && rowSelection.fixed && (
                  <td
                    className={classnames(`item-fix-left`)}
                    key={-1}
                    width={60}
                    data-column-prop={DEFAULT_EXCLUDE_PROP}
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
                  this.renderTd(
                    fixLeftList,
                    item,
                    'left',
                    isNeedHide,
                    index,
                    data
                  )}
                {rowSelection && !rowSelection.fixed && (
                  <td
                    className={classnames(`item-fix-`)}
                    key={-1}
                    width={60}
                    data-column-prop={DEFAULT_EXCLUDE_PROP}
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
                )}

                {!!noFixColumns.length &&
                  this.renderTd(
                    noFixColumns,
                    item,
                    'normal',
                    false,
                    index,
                    data
                  )}
                {!!fixRightList.length &&
                  this.renderTd(
                    fixRightList,
                    item,
                    'right',
                    isNeedHide,
                    index,
                    data
                  )}
                {rowSelection && isShowSelection && rowSelection.fixed && (
                  <td
                    className={classnames(`item-fix-normal`)}
                    key={-1}
                    width={60}
                    data-column-prop={DEFAULT_EXCLUDE_PROP}
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
