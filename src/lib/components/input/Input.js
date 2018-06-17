import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import omit from 'omit.js'
import calcTextAreaHeight from './calcTextAreaHeight'

export default class Input extends PureComponent {
  // prop type校验
  static propTypes = {
    // 类型
    type: PropTypes.string,
    // 自定义样式
    className: PropTypes.string,
    // 尺寸
    size: PropTypes.oneOf(['small', 'default', 'large']),
    // 行内样式
    style: PropTypes.object,
    // 值
    value: PropTypes.any,
    // 默认值
    defaultValue: PropTypes.any,
    // 是否不可选
    disabled: PropTypes.bool,
    // 子元素只能为节点
    children: PropTypes.element,
    // onChange
    onChange: PropTypes.func,
    // 按下enter键
    onKeyEnter: PropTypes.func,
    // 是否椭圆形
    pill: PropTypes.bool,
    // suffix图标点击时候触发
    onIconClick: PropTypes.func,
    // 自适应高 适用textarea
    autoResize: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    // 列数
    rows: PropTypes.number,
  }
  // 默认props
  static defaultProps = {
    type: 'text',
    disabled: false,
    rows: 2,
  }

  state = {
    computedStyle: {},
  }

  getInputClassName() {
    const { size, disabled } = this.props
    return classnames({
      'input-sm': size === 'small',
      'input-lg': size === 'large',
      'input-disabled': disabled,
    })
  }

  saveInput = input => {
    this.refMain = input
  }

  focus() {
    this.refMain.focus()
  }

  blur() {
    this.refMain.blur()
  }
  // 获取Input value
  getValue() {
    return this.refMain ? this.refMain.value : undefined
  }
  // 设置Input value
  setValue(value) {
    this.refMain && (this.refMain.value = value)
  }

  handleKeyDown = e => {
    const { onKeyEnter } = this.props
    if (e.keyCode === 13 && onKeyEnter) {
      onKeyEnter(this.getValue(), e)
      this.refMain.focus()
    }
  }

  handleTextAreaChange = e => {
    const { onChange } = this.props
    if (onChange) {
      onChange(this.getValue(), e)
    }
    this.resizeTextArea()
  }

  resizeTextArea = () => {
    const { autoResize, type } = this.props
    if (!autoResize || !this.refMain || type !== 'textarea') {
      return
    }

    const minRows = autoResize.minRows || null
    const maxRows = autoResize.maxRows || null
    const computedStyle = calcTextAreaHeight(this.refMain, minRows, maxRows)

    this.setState({ computedStyle })
  }

  handleIconClick = () => {
    if (this.props.onIconClick && !this.props.disabled) {
      this.props.onIconClick(this.getValue())
    }
  }

  renderAuffix = children => {
    const { props } = this
    if (!('prefix' in props) && !('suffix' in props)) {
      return children
    }

    let prefix = null
    let suffix = null
    if (props.prefix) {
      prefix = <span className='input-prefix'>{props.prefix}</span>
    }
    if (props.suffix) {
      suffix = (
        <span className='input-suffix' onClick={this.handleIconClick}>
          {props.suffix}
        </span>
      )
    }

    return (
      <span
        className={classnames('input-affix-wrapper', props.className)}
        style={props.style}
      >
        {prefix}
        {React.cloneElement(children, {
          className: classnames(
            children.props.className,
            this.getInputClassName()
          ),
          style: {},
        })}
        {suffix}
      </span>
    )
  }

  componentDidMount() {
    this.resizeTextArea()
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.value !== nextProps.value &&
      this.props.type === 'textarea'
    ) {
      let resizeFunc = this.resizeTextArea

      if (this.resizeTextAreaId) {
        if (window.cancelAnimationFrame) {
          window.cancelAnimationFrame(resizeFunc)
        } else {
          window.clearTimeout(resizeFunc)
        }
      }
      this.resizeTextAreaId = window.requestAnimationFrame
        ? window.requestAnimationFrame(resizeFunc)
        : window.setTimeout(resizeFunc, 1000 / 60)
    }
  }

  render() {
    const { value, className, onChange, pill, type, style, rows } = this.props
    const finalProps = omit(this.props, [
      'prefix',
      'suffix',
      'onKeyEnter',
      'pill',
      'onIconClick',
      'autoResize',
      'rows',
    ])
    const pillClass = pill ? 'input-pill' : null

    if ('value' in this.props) {
      let finalValue = value
      if (value === null || value === undefined) {
        finalValue = ''
      }
      finalProps.value = finalValue
      delete finalProps.defaultValue
    }

    const computedStyle = {
      ...style,
      ...this.state.computedStyle,
    }

    const inputNode = (
      <input
        {...finalProps}
        ref={this.saveInput}
        style={style}
        className={classnames(
          'input',
          'form-control',
          pillClass,
          className,
          this.getInputClassName()
        )}
        onChange={e => onChange && onChange(e.target.value, e)}
        onKeyDown={this.handleKeyDown}
      />
    )

    if (type === 'textarea') {
      return (
        <textarea
          {...finalProps}
          ref={this.saveInput}
          rows={rows}
          className={classnames('input textarea form-control', className)}
          style={computedStyle}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleTextAreaChange}
        />
      )
    } else {
      return this.renderAuffix(inputNode)
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
