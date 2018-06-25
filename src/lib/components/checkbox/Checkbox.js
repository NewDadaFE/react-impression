/* eslint-disable react/jsx-no-bind  */
import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * Checkbox 组件.
 */
export default class Checkbox extends PureComponent {
  // props校验
  static propTypes = {
    children: PropTypes.any,
    // 自定义样式
    className: PropTypes.string,
    // 是否可以点击
    disabled: PropTypes.bool,
    // 是否默认选中
    defaultChecked: PropTypes.bool,
    // 是否选中
    checked: PropTypes.bool,
    // 状态变更回调
    onChange: PropTypes.func,
    // checkbox对应label的值
    value: PropTypes.any,
    // 是否为半选状态，配合一组checkbox使用
    uncertain: PropTypes.bool,
  }

  // 默认props
  static defaultProps = {
    disabled: false,
    uncertain: false,
  }

  getValue() {
    let { value } = this.props,
      { main } = this.refs

    if (value === undefined) {
      return main.checked
    }

    return value
  }

  focus() {
    this.main.focus()
  }

  blur() {
    this.main.blur()
  }

  setValue(checked) {
    let { main } = this.refs

    main.checked = !!checked
  }
  // ref方式改为函数
  saveCheckbox = node => {
    this.main = node
  }

  // 渲染
  render() {
    let {
      disabled,
      uncertain,
      value,
      checked,
      className,
      children,
      onChange,
      defaultChecked,
      ...others
    } = this.props

    return (
      <label
        {...others}
        className={classnames('checkbox', className, {
          'checkbox-checked': checked,
          'checkbox-disabled': disabled,
          'checkbox-uncertain': uncertain,
        })}
      >
        <input
          type='checkbox'
          ref={this.saveCheckbox}
          onChange={event => onChange && onChange(event, value)}
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
        />
        <div className='checkbox-addon' />
        <span className='checkbox-label'>{children}</span>
      </label>
    )
  }
}

// getValue
Checkbox.getValue = ref => {
  if (!ref) return undefined

  return ref.getValue()
}

// setValue
Checkbox.setValue = (ref, checked) => {
  if (!ref) return

  ref.setValue(checked)
}
