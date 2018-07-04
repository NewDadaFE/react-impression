import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import omit from 'omit.js'
import KeyCode from '../../utils/keyCode'
import calcTextAreaHeight from './calcTextAreaHeight'

export default class TextArea extends PureComponent {
  constructor(props) {
    super(props)
    this.resizeTextAreaId = null
  }
  // prop type校验
  static propTypes = {
    // 自定义样式
    className: PropTypes.string,
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
    // 自适应高 适用textarea
    autoResize: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    // 列数
    rows: PropTypes.number,
  }

  state = {
    computedStyle: {},
  }

  // 默认props
  static defaultProps = {
    disabled: false,
    rows: 2,
  }

  saveInput = input => {
    this.refMain = input
  }
  // 获取Input value
  getValue() {
    return this.refMain ? this.refMain.value : undefined
  }
  // 设置Input value
  setValue(value) {
    this.refMain && (this.refMain.value = value)
  }
  // 按下enter键处理
  handleKeyDown = e => {
    const { onKeyEnter } = this.props
    if (e.keyCode === KeyCode.ENTER && onKeyEnter) {
      onKeyEnter(this.getValue(), e)
      this.refMain.focus()
    }
  }
  // 处理自动高度时的逻辑
  handleTextAreaChange = e => {
    const { onChange } = this.props
    if (onChange) {
      onChange(this.getValue(), e)
    }
    // 不是受控组件的时候会触发resize，否则进入componentWillReceiveProps逻辑
    if (!('value' in this.props)) {
      this.resizeTextArea()
    }
  }
  // 处理自动高度时的逻辑
  resizeTextArea = () => {
    const { autoResize } = this.props
    if (!autoResize || !this.refMain) {
      return
    }

    const minRows = autoResize.minRows || null
    const maxRows = autoResize.maxRows || null
    const computedStyle = calcTextAreaHeight(this.refMain, minRows, maxRows)

    this.setState({ computedStyle })
  }

  componentDidMount() {
    this.resizeTextArea()
  }

  // textarea受控组件的时候 value传入改变，延迟触发修改height
  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
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
    const { value, className, style, rows, disabled } = this.props
    const finalProps = omit(this.props, ['onKeyEnter', 'autoResize', 'rows'])

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

    return (
      <textarea
        {...finalProps}
        ref={this.saveInput}
        rows={rows}
        className={classnames(
          'input textarea form-control',
          { 'input-disabled': disabled },
          className
        )}
        style={computedStyle}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleTextAreaChange}
      />
    )
  }
}

// getValue
TextArea.getValue = ref => {
  if (!ref) return undefined
  return ref.getValue()
}

// setValue
TextArea.setValue = (ref, value) => {
  if (!ref) return
  ref.setValue(value)
}
