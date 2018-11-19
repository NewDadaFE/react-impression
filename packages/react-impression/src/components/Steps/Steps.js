import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from '../Icon'

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
  }

  static defaultProps = {
    current: 0,
    processDot: false,
  }

  getStepIcon = (status, no) => {
    if (status === 'finish') {
      return <Icon type='check-circle-o' />
    }
    if (status === 'error') {
      return <Icon type='times-circle-o' />
    }
    return <div className='step-seq-icon'>{no}</div>
  }

  render() {
    const { className, children, processDot, current, status } = this.props
    const stepsNode = React.Children.map(children, (child, index) => {
      const options = {}
      // 判断节点状态
      if (index < current) {
        options.status = 'finish'
      } else if (index > current) {
        options.status = 'ready'
      } else if (status) {
        options.status = status
      } else {
        options.status = 'current'
      }
      // 设置节点图标
      if (!processDot && !child.props.icon) {
        options.icon = this.getStepIcon(options.status, index + 1)
      }
      return React.cloneElement(child, options)
    })
    return <div className={classnames('steps', className)}>{stepsNode}</div>
  }
}
