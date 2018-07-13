import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Label from '../FormControlLabel'

/**
 * FormControl 组件.
 */
export default class FormControl extends PureComponent {
  // prop type校验
  static propTypes = {
    // 子节点
    children: PropTypes.element.isRequired,
  }
  // 渲染
  render() {
    let { children } = this.props,
      { className } = children

    children = React.cloneElement(children, {
      className: classnames(className, 'form-control'),
    })

    return children
  }
}

FormControl.Label = Label
