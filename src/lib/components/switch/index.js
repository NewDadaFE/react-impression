import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * Switch组件.
 */
export default class Switch extends PureComponent {
  // props校验
  static propTypes = {
    // 自定义class
    className: PropTypes.string,
    // 是否选中
    checked: PropTypes.bool,
    // 是否默认选中
    defaultChecked: PropTypes.bool,
    // 是否disabled
    disabled: PropTypes.bool,
    // 状态切换回调
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
  // 状态切换回调
  onChangeHandle = event => {
    let { onChange } = this.props,
      { checked } = event.target

    onChange(checked, event)
  }

  // 渲染
  render() {
    let {
      checked,
      defaultChecked,
      onChange,
      disabled,
      className,
      ...others
    } = this.props

    return (
      <label {...others} className={classnames('switch', className)}>
        <input
          ref='main'
          type='checkbox'
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange && this.onChangeHandle}
        />
        <div className='switch-addon' />
      </label>
    )
  }
}

// getValue
Switch.getValue = ref => {
  if (!ref) return undefined

  return ref.getValue()
}

// setValue
Switch.setValue = (ref, checked) => {
  if (!ref) return

  ref.setValue(checked)
}
