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
    value: PropTypes.any,
  }
  // 默认props
  static defaultProps = {
    disabled: false,
  }
  getValue() {
    let { value } = this.props,
      { main } = this.refs

    if (value === undefined) {
      return main.checked
    }

    return value
  }
  setValue(checked) {
    let { main } = this.refs

    main.checked = !!checked
  }
  // 渲染
  render() {
    let {
      value,
      checked,
      defaultChecked,
      disabled,
      className,
      onChange,
      children,
      ...others
    } = this.props

    return (
      <label {...others} className={classnames('checkbox', className)}>
        <input
          type='checkbox'
          ref='main'
          onChange={event => onChange && onChange(event, value)}
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
        />
        <div className='checkbox-addon'>
          <i className='fa fa-check' />
        </div>
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
