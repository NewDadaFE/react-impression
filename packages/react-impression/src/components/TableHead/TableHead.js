import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import * as System from '../../utils/system'
import Tooltip from '../Tooltip/index'

export default class TableHead extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    System.manager(this)

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
     * 文本内容超出省略
     */
    tooltip: PropTypes.bool,
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

  componentWillReceiveProps(props) {}

  render() {
    const { columns, fixed, tooltip } = this.props

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
                  return (
                    <th
                      key={index}
                      width={width}
                      className={classnames(`item-fix-${fix}`)}
                    >
                      {/* {tooltip && (
                        <Tooltip position="bottom" content={column.label}>
                          <div className="table-cell table-cell-tooltip">
                            {column.label}
                          </div>
                        </Tooltip>
                      )} */}
                      {/* {!tooltip && ( */}
                      <div className='table-cell'>{column.label}</div>
                      {/* )} */}
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
