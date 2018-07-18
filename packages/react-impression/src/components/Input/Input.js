import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from '../DatePicker'
import Upload from '../Upload'
import * as System from '../../utils/system'

export default class Input extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    System.manager(this)

    this.state = {
      showOption: false,
      showClear: false,
    }
  }
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 行内样式
     */
    style: PropTypes.object,

    /**
     * 设置输入框类型
     */
    type: PropTypes.oneOf([
      'text',
      'password',
      'file',
      'date',
      'emaile',
      'month',
      'search',
      'textarea',
    ]),

    /**
     * 输入框提示信息
     */
    placeholder: PropTypes.string,

    /**
     * 输入框的值
     */
    value: PropTypes.any,

    /**
     * 输入框默认值
     */
    defaultValue: PropTypes.any,

    /**
     * 是否可清除
     */
    clearable: PropTypes.bool,

    /**
     * 是否不可选
     */
    disabled: PropTypes.bool,
    // 子元素只能为节点
    /**
     * 子组件
     */
    children: PropTypes.element,

    /**
     * 样式是否椭圆形
     */
    pill: PropTypes.bool,

    /**
     * 点击事件
     */
    onClick: PropTypes.func,

    /**
     * 更改事件
     */
    onChange: PropTypes.func,
  }

  static defaultProps = {
    type: 'text',
    clearable: true,
    disabled: false,
  }
  // getValue
  getValue() {
    let { type } = this.props

    switch (type) {
      case 'file':
        return this.refMain.refs.main.files[0]
      default:
        return this.refMain ? this.refMain.value : undefined
    }
  }
  // setValue
  setValue(value) {
    let { type } = this.props

    switch (type) {
      case 'file':
        this.refMain.refs.main.files[0] = value
        break
      default:
        this.refMain && (this.refMain.value = value)
    }
  }
  focus() {
    this.refMain.focus()
  }
  // 显示候选项
  showOptionHandle = () => {
    let { disabled } = this.props

    !disabled &&
      this.setState({
        showOption: true,
        showClear: false,
      })
  }
  // 隐藏候选项
  hideOptionsHandle = () => {
    if (!this.refMain) {
      return
    }

    this.refMain.blur && this.refMain.blur()
    this.setState({
      showOption: false,
      showClear: false,
    })
  }
  // 清空输入框
  clearInputHandle = () => {
    let { disabled } = this.props

    if (disabled) {
      return
    }

    this.refMain && (this.refMain.value = '')
  }
  // 选中候选项
  selectOptionsHandle = value => {
    this.refMain && (this.refMain.value = value)

    this.setState({
      showOption: false,
      showClear: false,
    })
  }
  // 显示清空按钮
  showClearHandle = () => {
    !this.props.disabled &&
      this.refMain &&
      this.refMain.value &&
      this.setState({
        showClear: true,
      })
  }
  // 隐藏清空按钮
  hideClearHandle = () => {
    this.setState({
      showClear: false,
    })
  }
  componentWillUnmount() {
    System.unmanager(this)
  }

  render() {
    let {
        type,
        value,
        defaultValue,
        disabled,
        placeholder,
        clearable,
        style,
        pill,
        onClick,
        className,
        children,
        onChange,
        ...others
      } = this.props,
      { showOption, showClear } = this.state,
      pillClass = pill ? 'input-pill' : null

    children &&
      (children = React.cloneElement(children, {
        className: classnames('input-addon', children.props.className),
      }))

    switch (type) {
      case 'date':
      case 'month':
        return (
          <div
            className={classnames('input', className)}
            ref='container'
            onMouseEnter={this.showClearHandle}
            onMouseLeave={this.hideClearHandle}
          >
            <input
              type='text'
              ref={ref => (this.refMain = ref)}
              value={value}
              defaultValue={defaultValue}
              className={classnames(
                'form-control',
                pillClass,
                'input-field',
                'input-field-addon'
              )}
              readOnly
              disabled={disabled}
              placeholder={placeholder}
              onChange={event => onChange && onChange(event, defaultValue)}
              onClick={this.showOptionHandle}
              style={style}
            />

            {clearable &&
              showClear && (
              <i
                className='fa fa-times input-addon'
                onClick={this.clearInputHandle}
              />
            )}

            {(!showClear || !clearable) && (
              <i
                className='fa fa-calendar input-addon'
                onClick={this.showOptionHandle}
              />
            )}

            {showOption && (
              <DatePicker
                {...others}
                type={type}
                value={this.refMain.value}
                onChange={value => onChange && onChange(value)}
                onSelect={this.selectOptionsHandle}
              />
            )}
          </div>
        )
      case 'search':
        return (
          <div className={classnames('input', className)} ref='container'>
            <input
              {...others}
              type='text'
              ref={ref => (this.refMain = ref)}
              value={value}
              className={classnames(
                'form-control',
                pillClass,
                'input-field',
                'input-field-addon'
              )}
              readOnly
              onClick={onClick}
              onChange={e => onChange && onChange(e.target.value, e)}
              disabled={disabled}
              placeholder={placeholder}
              style={style}
            />
            {children}
            {!children && (
              <i className='fa fa-search input-addon' onClick={onClick} />
            )}
          </div>
        )
      case 'file':
        return (
          <Upload
            {...others}
            ref={ref => (this.refMain = ref)}
            className={className}
            placeholder={placeholder}
            onChange={e => onChange && onChange(e.target.files[0], e)}
          />
        )
      case 'textarea':
        return (
          <textarea
            rows='10'
            ref={ref => (this.refMain = ref)}
            style={style}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange && onChange(e.target.value, e)}
            defaultValue={defaultValue}
            {...others}
            className={classnames('form-control', className)}
          />
        )
      default:
        return (
          <div className={classnames('input', className)} ref='container'>
            <input
              {...others}
              type={type}
              ref={ref => (this.refMain = ref)}
              value={value}
              defaultValue={defaultValue}
              className={classnames('form-control', pillClass, 'input-field', {
                'input-field-addon': children,
              })}
              onChange={e => onChange && onChange(e.target.value, e)}
              disabled={disabled}
              placeholder={placeholder}
              style={style}
            />
            {children}
          </div>
        )
    }
  }
}

// getValue
Input.getValue = ref => {
  if (!ref) return undefined

  return ref.getValue()
}

// setValue
Input.setValue = (ref, value) => {
  if (!ref) return

  ref.setValue(value)
}
