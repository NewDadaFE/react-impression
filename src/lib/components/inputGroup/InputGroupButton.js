import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-impression'

/**
 * InputGroupButton组件.
 */
export default class InputGroupButton extends PureComponent {
  // props校验
  static propTypes = {
    theme: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any,
    ghost: PropTypes.bool,
  }
  // 默认props
  static defaultProps = {
    theme: 'primary',
  }
  // 渲染
  render() {
    let { theme, className, children, ghost, ...others } = this.props

    return (
      <span {...others} className='input-group-btn'>
        <Button theme={theme} ghost={ghost} className={classnames(className)}>
          {children}
        </Button>
      </span>
    )
  }
}
