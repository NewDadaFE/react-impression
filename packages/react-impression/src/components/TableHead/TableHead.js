import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '../Checkbox/index'

export default class TableHead extends React.PureComponent {
  static propTypes = {
    /**
     * 是否固定
     */
    fixed: PropTypes.bool,
    /**
     * 多选表格配置
     */
    rowSelection: PropTypes.object,

    /**
     * 半选状态
     */
    indeterminate: PropTypes.bool,
    /**
     * 全选状态
     */
    checkAll: PropTypes.bool,
    /**
     * 全选／取消全选函数
     */
    handleCheckOnSelectAll: PropTypes.func,
    /**
     * 是否显示多选框
     */
    isShowSelection: PropTypes.bool,

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
     * 分页配置项，请参照Pagination
     */
    pagination: PropTypes.object,
  }

  render() {
    const {
      fixed,
      rowSelection,
      indeterminate,
      checkAll,
      handleCheckOnSelectAll,
      isShowSelection,
      fixLeftColumns,
      fixRightColumns,
      fixLeft,
      noFixColumns,
      pagination,
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
      <div className='table-head-wrap'>
        <table className='table-header' cellSpacing='0' cellPadding='0'>
          <thead>
            <tr>
              {rowSelection &&
                !isShowSelection &&
                rowSelection.fixed && (
                <th
                  className={classnames(`item-fix-left`)}
                  key={-1}
                  width={60}
                >
                  <div className='table-cell table-cell-select'>
                    <Checkbox
                      onChange={handleCheckOnSelectAll}
                      indeterminate={indeterminate}
                      checked={checkAll}
                    />
                  </div>
                </th>
              )}
              {!!fixLeftList.length &&
                fixLeftList.map((column, index) => {
                  const { renderTh, label, width } = column
                  const colWidth = width || 80
                  let content
                  if (renderTh && typeof renderTh === 'function') {
                    content = renderTh(column, index, current)
                  } else if (React.isValidElement(renderTh)) {
                    content = React.cloneElement(renderTh)
                  } else {
                    content = label
                  }
                  return (
                    <th
                      key={index}
                      width={colWidth}
                      className={classnames(`item-fix-left`)}
                    >
                      <div className='table-cell'>{content}</div>
                    </th>
                  )
                })}
              {rowSelection &&
                !rowSelection.fixed && (
                <th
                  key={-1}
                  width={60}
                  className={classnames(`item-fix-null`)}
                >
                  <div className='table-cell'>
                    <Checkbox
                      onChange={handleCheckOnSelectAll}
                      indeterminate={indeterminate}
                      checked={checkAll}
                    />
                  </div>
                </th>
              )}
              {!!noFixColumns.length &&
                noFixColumns.map((column, index) => {
                  const { renderTh, label, width } = column
                  let colWidth = ''
                  if (!fixed) {
                    colWidth = width ? column.width : ''
                  } else {
                    colWidth = width ? column.width : 80
                  }
                  let content
                  if (renderTh && typeof renderTh === 'function') {
                    content = renderTh(column, index, current)
                  } else if (React.isValidElement(renderTh)) {
                    content = React.cloneElement(renderTh)
                  } else {
                    content = label
                  }
                  return (
                    <th
                      key={index}
                      width={colWidth}
                      className={classnames(`item-fix-normal`)}
                    >
                      <div className='table-cell'>{content}</div>
                    </th>
                  )
                })}
              {!!fixRightList.length &&
                fixRightList.map((column, index) => {
                  const { renderTh, label, width } = column
                  const colWidth = width || 80
                  let content
                  if (renderTh && typeof renderTh === 'function') {
                    content = renderTh(column, index, current)
                  } else if (React.isValidElement(renderTh)) {
                    content = React.cloneElement(renderTh)
                  } else {
                    content = label
                  }
                  return (
                    <th
                      key={index}
                      width={colWidth}
                      className={classnames(`item-fix-right`)}
                    >
                      <div className='table-cell'>{content}</div>
                    </th>
                  )
                })}
              {rowSelection &&
                isShowSelection &&
                rowSelection.fixed && (
                <th
                  className={classnames(`item-fix-normal`)}
                  key={-1}
                  width={60}
                >
                  <div className='table-cell table-cell-select'>
                    <Checkbox />
                  </div>
                </th>
              )}
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

TableHead.contextTypes = {
  componentTable: PropTypes.any,
}
