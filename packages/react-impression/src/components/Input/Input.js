import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from '../DatePicker'
import Upload from '../Upload'
import Popper from 'popper.js'
import TimeSelect from '../TimeSelect'
import * as System from '../../utils/system'

export default class Input extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    System.manager(this)

    this.state = {
      showDatePicker: false,
      showClear: false,
    }
    this.datePopper = null
    this.timePoper = null
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
      'year',
      'search',
      'textarea',
      'time',
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

    /**
     * 尺寸
     */
    size: PropTypes.oneOf(['sm', 'lg']),
  }

  static defaultProps = {
    type: 'text',
    clearable: true,
    disabled: false,
  }
  /**
   *getValue
   *
   * @returns
   * @memberof Input
   */
  getValue() {
    const { type } = this.props

    switch (type) {
      case 'file':
        return this.refMain.refs.main.files[0]
      default:
        return this.refMain ? this.refMain.value : undefined
    }
  }

  /**
   * setValue
   * @param {*} value
   * @memberof Input
   */
  setValue(value) {
    const { type } = this.props

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

  /**
   * 显示日期组件
   * @memberof Input
   */
  handleShowDatePicker = () => {
    const { disabled } = this.props

    !disabled &&
      this.setState(
        {
          showDatePicker: true,
          showClear: false,
        },
        () => {
          if (this.datepicker) {
            console.log(this.datepicker)
            this.datePopper = new Popper(
              this.refMain,
              this.datepicker.refs.container,
              {
                positionFixed: true,
                placement: 'bottom-start',
                modifiers: {
                  offset: { offset: '0, 10' },
                },
              }
            )
          }
          if (this.dateTimepicker) {
            console.log(this.dateTimepicker.refs)
            this.timePopper = new Popper(
              this.refMain,
              this.dateTimepicker.refs.container,
              {
                placement: 'bottom-start',
                modifiers: {
                  offset: { offset: '0, 10' },
                },
              }
            )
          }
        }
      )
  }

  /**
   * 隐藏日期组件
   * @memberof Input
   */
  hideOptionsHandle = () => {
    this.setState(
      {
        showDatePicker: false,
        showClear: false,
      },
      () => {
        this.datePopper && this.datePopper.destroy()
        this.timePopper && this.timePopper.destroy()
      }
    )
  }

  /**
   * 清空时间类型的输入框
   * @memberof Input
   */
  handleClearDateInput = () => {
    const { disabled, onChange } = this.props

    if (disabled) {
      return
    }

    this.refMain && (this.refMain.value = '')
    onChange && onChange('')
  }

  /**
   * 选中日期项
   * @memberof Input
   */
  handleSelectDate = value => {
    this.refMain && (this.refMain.value = value)

    this.setState({
      showDatePicker: false,
      showClear: false,
    })
  }

  /**
   *显示清空按钮
   * @memberof Input
   */
  handleShowClear = () => {
    !this.props.disabled &&
      this.refMain &&
      this.refMain.value &&
      this.setState({
        showClear: true,
      })
  }

  /**
   *隐藏清空按钮
   * @memberof Input
   */
  handleHideClear = () => {
    this.setState({
      showClear: false,
    })
  }

  /**
   * 文件类型Input内容改变回调事件
   */
  handleUploadChange = event => {
    const { onChange } = this.props
    onChange && onChange(event.target.files[0], event)
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
        size,
        ...others
      } = this.props,
      { showDatePicker, showClear } = this.state,
      pillClass = pill ? 'input-pill' : null

    children &&
      (children = React.cloneElement(children, {
        className: classnames('input-addon', children.props.className),
      }))

    switch (type) {
      case 'date':
      case 'month':
      case 'year':
        return (
          <div
            className={classnames('input', className)}
            ref='container'
            onMouseEnter={this.handleShowClear}
            onMouseLeave={this.handleHideClear}
          >
            <input
              type='text'
              ref={ref => (this.refMain = ref)}
              value={value}
              defaultValue={defaultValue}
              className={classnames(
                'form-control',
                size && `form-control-${size}`,
                pillClass,
                'input-field',
                'input-field-addon'
              )}
              readOnly
              disabled={disabled}
              placeholder={placeholder}
              onClick={this.handleShowDatePicker}
              style={style}
            />

            {clearable &&
              showClear && (
              <i
                className='fa fa-times input-addon'
                onClick={this.handleClearDateInput}
              />
            )}

            {(!showClear || !clearable) && (
              <i
                className='fa fa-calendar input-addon'
                onClick={this.handleShowDatePicker}
              />
            )}

            <DatePicker
              className={classnames({ hidden: !showDatePicker })}
              {...others}
              type={type}
              value={this.refMain && this.refMain.value}
              onChange={value => onChange && onChange(value)}
              onSelect={this.handleSelectDate}
              ref={ref => (this.datepicker = ref)}
            />
          </div>
        )
      case 'time':
        return (
          <div
            className={classnames('input', className)}
            ref='container'
            onMouseEnter={this.handleShowClear}
            onMouseLeave={this.handleHideClear}
          >
            <input
              type='text'
              ref={ref => (this.refMain = ref)}
              value={value}
              defaultValue={defaultValue}
              className={classnames(
                'form-control',
                size && `form-control-${size}`,
                pillClass,
                'input-field',
                'input-field-addon'
              )}
              readOnly
              disabled={disabled}
              placeholder={placeholder}
              onClick={this.handleShowDatePicker}
              style={style}
            />

            {clearable &&
              showClear && (
              <i
                className='fa fa-search input-addon'
                onClick={this.handleClearDateInput}
              />
            )}

            {(!showClear || !clearable) && (
              <i
                className='fa fa-search input-addon'
                onClick={this.handleShowDatePicker}
              />
            )}

            <TimeSelect
              {...others}
              type={type}
              className={classnames({ hidden: !showDatePicker })}
              value={this.refMain.value}
              onChange={value => onChange && onChange(value)}
              onSelect={this.handleSelectDate}
              ref={ref => (this.dateTimepicker = ref)}
            />
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
            onChange={this.handleUploadChange}
            style={style}
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
              className={classnames(
                'form-control',
                'input-field',
                size && `form-control-${size}`,
                pillClass,
                { 'input-field-addon': children }
              )}
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

Input.getValue = ref => {
  if (!ref) return undefined

  return ref.getValue()
}

Input.setValue = (ref, value) => {
  if (!ref) return

  ref.setValue(value)
}
