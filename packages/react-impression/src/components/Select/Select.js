import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import SelectOption from '../SelectOption'
import * as System from '../../utils/system'

export default class Select extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    System.manager(this)

    // 是否木偶组件
    this.isPuppet = props.value !== undefined

    // 子组件数据
    this.options = []

    const initValue = {
      showOption: false,
      value: this.isPuppet ? undefined : props.defaultValue,
    }

    this.state = {
      ...initValue,
    }
  }

  static propTypes = {
    /**
     * 值
     */
    value: PropTypes.any,

    /**
     * 默认值
     */
    defaultValue: PropTypes.any,

    /**
     * 是否不可用
     */
    disabled: PropTypes.bool,

    /**
     * 行内样式
     */
    style: PropTypes.object,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 占位文字
     */
    placeholder: PropTypes.string,

    /**
     * 状态变更回调函数
     */
    onChange: PropTypes.func,

    /**
     * 子组件
     */
    children: PropTypes.node,
  }

  static defaultProps = {
    disabled: false,
    placeholder: '请选择',
  }

  getValue() {
    return this.isPuppet ? this.props.value : this.state.value
  }

  setValue(value) {
    const { main } = this.refs

    if (!this.isPuppet) {
      main.value = null
      this.options.forEach(option => {
        if (value === option.value) main.value = option.name
      })

      this.setState({
        value,
      })
    }
  }

  // focus  没调用？
  focus() {
    this.refs.main.focus()
  }

  // 显示/隐藏菜单
  toggleOptionsHandle = () => {
    !this.props.disabled &&
      this.setState({
        showOption: !this.state.showOption,
      })
  }

  // 隐藏菜单
  hideOptionsHandle = () => this.setState({ showOption: false })

  /**
   * option选中回调
   * @param {String} 值
   * @param {String} 显示文本
   * @param {Number} 索引
   */
  selectOptionHandle(newValue, text, index) {
    const { onChange } = this.props
    const { main } = this.refs
    const value = this.isPuppet ? this.props.value : this.state.value

    // 木偶组件
    if (!this.isPuppet) {
      this.setState(
        {
          value: newValue,
        },
        () => {
          onChange && newValue !== value && onChange(newValue, text, index)
          main.value = text
        }
      )
    } else {
      onChange && newValue !== value && onChange(newValue, text, index)
    }

    this.setState({
      showOption: false,
    })
  }

  /**
   * 清空组件管理
   */
  componentWillUnmount() {
    System.unmanager(this)
  }

  render() {
    const { placeholder, disabled, style, className, children } = this.props
    const { showOption } = this.state
    const originValue = this.isPuppet ? this.props.value : this.state.value
    let text

    this.options = [] // this问题

    const _children = React.Children.map(children, (child, index) => {
      if (!child) {
        return child
      } // ? child ?

      const { value, children, disabled } = child.props

      this.options.push({
        name: children,
        value,
      })
      value === originValue && (text = children)
      value === originValue &&
        !disabled &&
        this.refs.main &&
        (this.refs.main.value = children)
      return React.cloneElement(child, {
        key: index,
        active: value === originValue,
        onClick: () =>
          !disabled && this.selectOptionHandle(value, children, index),
      })
    })

    return (
      <div
        style={style}
        className={classnames(
          'select',
          { disabled },
          { open: showOption },
          className
        )}
        disabled={disabled}
      >
        <input
          type='text'
          defaultValue={text}
          readOnly
          ref='main'
          placeholder={placeholder}
          disabled={disabled}
          className={classnames('form-control', 'select-selection')}
          onClick={this.toggleOptionsHandle}
        />
        <i
          className='fa fa-angle-down select-addon'
          onClick={this.toggleOptionsHandle}
        />
        <ul className='select-options'>{_children}</ul>
      </div>
    )
  }
}

Select.getValue = ref => {
  if (!ref) return undefined

  return ref.getValue()
}

Select.setValue = (ref, value) => {
  if (!ref) return

  ref.setValue(value)
}

Select.Option = SelectOption
