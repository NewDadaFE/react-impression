import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import omit from 'omit.js'
import KeyCode from '../../utils/keyCode'

export default class Input extends PureComponent {
  // prop type校验
  static propTypes = {
    // 自定义样式
    className: PropTypes.string,
    // 尺寸
    size: PropTypes.oneOf(['sm', 'default', 'lg']),
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
  }
  // 默认props
  static defaultProps = {
    disabled: false,
  }

  getInputClassName() {
    const { size, disabled } = this.props
    return classnames({
      'input-sm': size === 'sm',
      'input-lg': size === 'lg',
      'input-disabled': disabled,
    })
  }

  saveInput = input => {
    this.refMain = input
  }
  /* Instance Methods */
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
    if (e.keyCode === KeyCode.ENTER && onKeyEnter) {
      onKeyEnter(this.getValue(), e)
      this.refMain.focus()
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
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        {prefix}
        {React.cloneElement(children, {
          className: classnames(
            children.props.className,
            this.getInputClassName()
          ),
          style: {},
          onMouseEnter: null,
          onMouseLeave: null,
        })}
        {suffix}
      </span>
    )
  }

  render() {
    const { value, className, onChange, pill, style } = this.props
    const finalProps = omit(this.props, [
      'prefix',
      'suffix',
      'onKeyEnter',
      'pill',
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

    return this.renderAuffix(inputNode)
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
