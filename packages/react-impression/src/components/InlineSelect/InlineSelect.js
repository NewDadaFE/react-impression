import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InlineSelectOption from '../InlineSelectOption'

/**
 * InlineSelect组件.
 */
export default class InlineSelect extends PureComponent {
  constructor(props) {
    super(props)

    // 是否木偶组件
    this.isPuppet = props.value !== undefined

    let initValue = {
      value: this.isPuppet ? undefined : props.defaultValue,
    }

    this.state = {
      ...initValue,
    }
  }
  // props 校验
  static propTypes = {
    children: PropTypes.any,
    // 自定义样式
    className: PropTypes.string,
    // onChange
    onChange: PropTypes.func,
    // value
    value: PropTypes.any,
    // defaultValue
    defaultValue: PropTypes.any,
  }
  getValue() {
    if (this.isPuppet) {
      return this.props.value
    }

    return this.state.value
  }
  setValue(value) {
    if (!this.isPuppet) this.setState({ value })
  }
  /**
   * option选中回调.
   * @param  {[Any]} value       [值]
   * @param  {[String]} text     [名称]
   * @param  {[Number]} index    [索引]
   */
  selectOptionHandle(value, text, index) {
    let { onChange } = this.props

    // 木偶组件
    if (this.isPuppet) {
      onChange && onChange(value, text, index)
    } else {
      this.setState(
        {
          value,
        },
        () => {
          onChange && onChange(value, text, index)
        }
      )
    }
  }
  render() {
    let { className, children, ...others } = this.props,
      originValue = this.isPuppet ? this.props.value : this.state.value

    children = React.Children.map(children, (child, index) => {
      if (!child) {
        return child
      }

      let { value, children } = child.props

      return React.cloneElement(child, {
        key: index,
        active: originValue !== undefined && originValue === value,
        onClick: () => this.selectOptionHandle(value, children, index),
      })
    })

    return (
      <div {...others} className={classnames('inline-select', className)}>
        {children}
      </div>
    )
  }
}

// getValue
InlineSelect.getValue = ref => {
  if (!ref) return undefined

  return ref.getValue()
}

// setValue
InlineSelect.setValue = (ref, value) => {
  if (!ref) return

  ref.setValue(value)
}

InlineSelect.Option = InlineSelectOption
