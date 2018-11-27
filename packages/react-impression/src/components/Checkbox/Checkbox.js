import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Checkbox extends React.PureComponent {
  static propTypes = {
    /**
     * 子组件
     */
    children: PropTypes.node,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 是否禁用
     */
    disabled: PropTypes.bool,

    /**
     * 是否默认选中
     */
    defaultChecked: PropTypes.bool,

    /**
     * 是否选中
     */
    checked: PropTypes.bool,

    /**
     * 状态变更回调，参数列表：event，value
     */
    onChange: PropTypes.func,

    /**
     * 状态变更的返回值
     */
    value: PropTypes.any,

    /**
     * 是否为半选状态
     */
    indeterminate: PropTypes.bool,
  }

  static defaultProps = {
    indeterminate: false,
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
    let { main } = this.refs

    main.checked = !!checked
  }

  render() {
    const {
      value,
      checked,
      defaultChecked,
      disabled,
      className,
      onChange,
      children,
      indeterminate,
      ...others
    } = this.props

    return (
      <label
        {...others}
        className={classnames('checkbox', className, {
          'checkbox-indeterminate': indeterminate,
        })}
      >
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

Checkbox.getValue = ref => {
  if (!ref) return undefined

  return ref.getValue()
}

Checkbox.setValue = (ref, checked) => {
  if (!ref) return

  ref.setValue(checked)
}
