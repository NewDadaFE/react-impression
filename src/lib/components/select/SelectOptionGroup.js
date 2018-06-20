/* @flow */

import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class OptionGroup extends PureComponent {
  // prop type校验
  static propTypes = {
    // style
    style: PropTypes.object,
    // 自定义样式
    className: PropTypes.string,
    // children
    children: PropTypes.any,
    // label
    label: PropTypes.any,
    // 是否不可选
    disabled: PropTypes.bool,
  }

  render() {
    const { style, className, children, label, disabled } = this.props
    return (
      <ul
        style={style}
        className={classnames(
          'select-group-container',
          { disabled },
          className
        )}
      >
        <li className='select-group-title'>{label}</li>
        <li>
          <ul className='select-group-inner'>{children}</ul>
        </li>
      </ul>
    )
  }
}

OptionGroup.propTypes = {
  label: PropTypes.string,
}
