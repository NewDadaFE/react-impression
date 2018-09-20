import React from 'react'
import PropTypes from 'prop-types'

export default class Tooltip extends React.PureComponent {
  static propTypes = {
    /**
     * 设置提示工具位置
     */
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),

    /**
     * 提示工具内容
     */
    content: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.element.isRequired,
  }

  static defaultProps = {
    position: 'right',
  }

  render() {
    const { children, content, position } = this.props

    return React.cloneElement(children, {
      'data-tooltip': content,
      'data-tooltip-pos': position,
    })
  }
}
