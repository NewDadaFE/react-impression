import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Ico from '../Ico'

export default class Steps extends React.PureComponent {
  static propTypes = {
    /**
     * 当前节点下标，从0开始
     */
    current: PropTypes.number,
    /**
     * 当前节点状态
     */
    status: PropTypes.oneOf(['ready', 'finish', 'error', 'current']),
    /**
     * 是否使用点状节点标识
     */
    processDot: PropTypes.bool,
    /**
     * 自定义样式
     */
    className: PropTypes.string,
    /**
     * 子组件
     */
    children: PropTypes.node,
    /**
     * 步骤条方向
     */
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    /**
     * 点击步骤时触发
     */
    onChange: PropTypes.func,
  }

  static defaultProps = {
    current: 0,
    processDot: false,
    direction: 'horizontal',
    onChange: i => console.log(`current index: ${i}`),
  }

  getStepInfo = index => {
    const { current, status } = this.props
    const dataSource = {
      ready: {
        status: 'ready',
        icon: <div className='step-seq-icon'>{index + 1}</div>,
      },
      finish: {
        status: 'finish',
        icon: <Ico type='check-circle' />,
      },
      current: {
        status: 'current',
        icon: <div className='step-seq-icon'>{index + 1}</div>,
      },
      error: {
        status: 'error',
        icon: <Ico type='times-circle' />,
      },
    }
    if (index < current) {
      return dataSource.finish
    }
    if (index > current) {
      return dataSource.ready
    }
    if (status) {
      return dataSource[status]
    }
    return dataSource.current
  }

  getStepsNode = () => {
    const { processDot, children, onChange } = this.props

    return React.Children.map(children, (child, index) => {
      const { status, icon } = this.getStepInfo(index)
      const { status: nextStatus } = this.getStepInfo(index + 1)
      let options = { index, status, nextStatus, onChange }
      // 设置节点图标
      if (!processDot && !child.props.icon) {
        options.icon = icon
      }
      return React.cloneElement(child, options)
    })
  }

  render() {
    const { className, direction } = this.props

    return (
      <div className={classnames('steps', className, `steps-${direction}`)}>
        {this.getStepsNode()}
      </div>
    )
  }
}
