import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Switch extends React.PureComponent {
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 是否选中
     */
    checked: PropTypes.bool,

    /**
     * 是否默认选中
     */
    defaultChecked: PropTypes.bool,

    /**
     * 是否可以点击
     */
    disabled: PropTypes.bool,

    /**
     * 状态变更回调函数
     */
    onChange: PropTypes.func,

    /**
     * 值
     */
    value: PropTypes.any,
  }

  static defaultProps = {
    disabled: false,
  }

  getValue() {
    const { value } = this.props
    const { main } = this.refs

    if (value === undefined) {
      return main.checked
    }

    return value
  }

  setValue(checked) {
    const { main } = this.refs

    main.checked = !!checked
  }

  /**
   * 状态切换回调
   */
  onChangeHandle = event => {
    const { onChange } = this.props
    const { checked } = event.target

    onChange(checked, event)
  }

  render() {
    const {
      checked,
      defaultChecked,
      onChange,
      disabled,
      className,
      ...others
    } = this.props

    return (
      <label
        {...others}
        className={classnames('switch', className)}
        htmlFor={`switch${this._reactInternalInstance._mountOrder}`}
      >
        <input
          ref='main'
          type='checkbox'
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange && this.onChangeHandle}
          id={`switch${this._reactInternalInstance._mountOrder}`}
        />
        <div className='switch-addon' />
      </label>
    )
  }
}

Switch.getValue = ref => {
  if (!ref) return undefined

  return ref.getValue()
}

Switch.setValue = (ref, checked) => {
  if (!ref) return

  ref.setValue(checked)
}
