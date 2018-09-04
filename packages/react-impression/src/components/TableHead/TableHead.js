import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class TableHead extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    // 是否木偶组件
    this.isPuppet = props.value !== undefined

    // 子组件数据
    this.options = []
    const initValue = {
      top: '120%',
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
  }
  static defaultProps = {
    disabled: false,
    placeholder: '请选择',
  }

  render() {
    const {
      columns,
      fixed,
      rowSelection,
      indeterminate,
      checkAll,
      handleCheckOnSelectAll,
    } = this.props

    return (
      <div className='table-head-wrap'>
        <table className='table-header' cellSpacing='0' cellPadding='0'>
          <thead>
            <tr>
              {!!columns.length &&
                columns.map((column, index) => {
                  let width = ''
                  let fix = ''
                  if (!fixed) {
                    fix = ''
                    width = column.width ? column.width : ''
                  } else {
                    fix = fixed && column.fixed ? column.fixed : 'normal'
                    width = column.width ? column.width : 80
                  }
                  if (index === 0 && rowSelection) {
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
                            onChange={handleCheckOnSelectAll}
                            indeterminate={indeterminate}
                            checked={checkAll}
                          />
                        </div>
                      </td>
                    )
                  }
                  return (
                    <th
                      key={index}
                      width={width}
                      className={classnames(`item-fix-${fix}`)}
                    >
                      <div className='table-cell'>{column.label}</div>
                    </th>
                  )
                })}
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
