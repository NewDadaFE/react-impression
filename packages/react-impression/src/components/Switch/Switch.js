import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'lodash.uniqueid'

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
     * 是否禁用
     */
    disabled: PropTypes.bool,

    /**
     * 状态变更回调，参数列表：checked，event
     */
    onChange: PropTypes.func,

    /**
     * 值，通过getValue可获取
     */
    value: PropTypes.any,

    /**
     * 加载中的状态
     */
    loading: PropTypes.bool,

    /**
     * switch 组件的大小 默认为lg
     */
    size: PropTypes.oneOf(['lg', 'sm']),
  }

  static defaultProps = {
    disabled: false,
  }

  id = uniqueId('switch-')

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
      loading,
      size,
      ...others
    } = this.props

    return (
      <label
        {...others}
        className={classnames('switch', className)}
        htmlFor={this.id}
      >
        <input
          ref='main'
          type='checkbox'
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange && this.onChangeHandle}
          id={this.id}
        />
        <div
          className={classnames(
            'switch-addon',
            size && `dada-switch-${size}`,
            loading && 'dada-switch-loading'
          )}
        >
          {loading && <span className='dada-switch-spinner' />}
        </div>
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
