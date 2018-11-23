import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Radio extends React.PureComponent {
  static propTypes = {
    /**
     * 名称，获取方式：event.currentTarget.name
     */
    name: PropTypes.any,

    /**
     * 状态变更的返回值
     */
    value: PropTypes.any,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 是否选中
     */
    checked: PropTypes.bool,

    /**
     * 默认是否选中
     */
    defaultChecked: PropTypes.bool,

    /**
     * 是否禁用
     */
    disabled: PropTypes.bool,

    /**
     * 状态变更回调，参数列表：event，value
     */
    onChange: PropTypes.func,

    /**
     * 子组件
     */
    children: PropTypes.node,
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

  onChangeHandle = (event, value) => {
    const { onChange } = this.props

    onChange && onChange(event, value)
  }

  // 渲染
  render() {
    const {
      value,
      checked,
      defaultChecked,
      disabled,
      className,
      name,
      onChange,
      children,
      ...others
    } = this.props

    return (
      <label
        {...others}
        className={classnames('radio', className)}
        htmlFor={`radio${this._reactInternalInstance._mountOrder}`}
      >
        <input
          ref='main'
          type='radio'
          name={name}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={event => onChange && onChange(event, value)}
          id={`radio${this._reactInternalInstance._mountOrder}`}
        />
        <div className='radio-addon'>
          <i />
        </div>
        <span className='radio-label'>{children}</span>
      </label>
    )
  }
}

Radio.getValue = ref => {
  if (!ref) return undefined
  return ref.getValue()
}

Radio.setValue = (ref, checked) => {
  if (!ref) return

  ref.setValue(checked)
}
