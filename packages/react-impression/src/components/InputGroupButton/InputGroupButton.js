import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

export default class InputGroupButton extends React.PureComponent {
  static propTypes = {
    /**
     * 设置输入框组内按钮样式,可选值为 default、primary
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
    const { theme, className, children, ...others } = this.props

    return (
      <span {...others} className='input-group-btn'>
        <Button theme={theme} className={classnames(className)}>
          {children}
        </Button>
      </span>
    )
  }
}
