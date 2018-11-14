import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '../Checkbox'

const defaultWidth = 80
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
    /**
     * 是否有展示固定项
     */
    isNeedHide: PropTypes.bool,
  }

  static defaultProps = {
    isNeedHide: false,
  }

  renderHeader = (array, type, isNeedHide) => {
    return array.map((column, index) => {
      const { Header, width, fixed } = column
      let colWidth
      if (!type && !fixed) {
        colWidth = width || ''
      } else {
        colWidth = width || defaultWidth
      }
      let content
      if (typeof Header === 'function') {
        content = Header(column)
      } else if (React.isValidElement(Header)) {
        content = React.cloneElement(Header)
      } else {
        content = Header
      }
      return (
        <th
          key={index}
          width={colWidth}
          className={classnames(`item-fix-left`)}
        >
          <div
            className={classnames('table-cell', {
              'table-cell-hide': isNeedHide,
            })}
          >
            {content}
          </div>
        </th>
      )
    })
  }

  render() {
    const {
      rowSelection,
      indeterminate,
      checkAll,
      handleCheckOnSelectAll,
      isShowSelection,
      fixLeftColumns,
      fixRightColumns,
      fixLeft,
      noFixColumns,
      fixRight,
      isNeedHide,
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
                this.renderHeader(fixLeftList, 'left', isNeedHide)}
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
              {!!noFixColumns.length && this.renderHeader(noFixColumns)}
              {!!fixRightList.length &&
                this.renderHeader(fixRightList, 'right', isNeedHide)}
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
