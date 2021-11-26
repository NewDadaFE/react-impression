import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

export default class InputGroupButton extends React.PureComponent {
  static propTypes = {
    /**
     * 设置输入框组内按钮样式 <br /> One of: primary, secondary
     */
    theme: PropTypes.string,

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
    theme: 'primary',
  }

  render() {
    let { theme, className, children, ...others } = this.props

    // 为了兼容旧版theme=default
    if (theme === 'default') {
      theme = 'secondary'
    }

    return (
      <span {...others} className='input-group-btn'>
        <Button theme={theme} className={classnames(className)}>
          {children}
        </Button>
      </span>
    )
  }
}
