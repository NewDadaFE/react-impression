import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Label from '../FormControlLabel'

export default class FormControl extends React.PureComponent {
  static propTypes = {
    /**
     * 子组件
     */
    children: PropTypes.element.isRequired,
  }
  // 渲染
  render() {
    let { children } = this.props
    const { className } = children

    children = React.cloneElement(children, {
      className: classnames(className, 'form-control'),
    })

    return children
  }
}

FormControl.Label = Label
