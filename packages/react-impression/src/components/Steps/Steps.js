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
     * 是否中断进度
     */
    error: PropTypes.bool,
    /**
     * 是否关闭节点序号
     */
    closeNo: PropTypes.bool,
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
  }

  getStepNodeIcon = (status, no) => {
    if (status === 'did') {
      return <Icon type='check-circle-o' />
    }
    if (status === 'error') {
      return <Icon type='times-circle-o' />
    }
    return <div className='step-seq-icon'>{no}</div>
  }

  render() {
    const { className, children, closeNo, current, error } = this.props
    const stepsNode = React.Children.map(children, (child, index) => {
      const options = {}
      // 判断节点状态
      if (index < current) {
        options.status = 'did'
      } else if (index > current) {
        options.status = 'ready'
      } else if (error) {
        options.status = 'error'
      } else {
        options.status = 'current'
      }
      // 设置节点图标
      if (!closeNo && !child.props.icon) {
        options.icon = this.getStepNodeIcon(options.status, index + 1)
      }
      return React.cloneElement(child, options)
    })
    return <div className={classnames('steps', className)}>{stepsNode}</div>
  }
}
