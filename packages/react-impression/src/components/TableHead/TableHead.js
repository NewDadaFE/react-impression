import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import * as System from '../../utils/system'

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
    const { columns, fixed } = this.props

    return (
      <div className='table-head-wrap'>
        <table className='table-header' cellSpacing='0' cellPadding='0'>
          <thead>
            <tr>
              {!!columns.length &&
                columns.map((column, index) => {
                  const width = column.width ? column.width : ''
                  let fix = ''
                  if (!fixed) {
                    fix = ''
                  } else {
                    fix = fixed && column.fixed ? column.fixed : 'normal'
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
