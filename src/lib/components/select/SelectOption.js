import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 * Option组件.
 */
class Option extends PureComponent {
  // prop type校验
  static propTypes = {
    // 行内样式
    style: PropTypes.object,
    label: PropTypes.string,
    // 是否不可用
    disabled: PropTypes.bool,
    // 自定义样式
    className: PropTypes.string,
    // 是否选中
    active: PropTypes.bool,
    // value
    value: PropTypes.any.isRequired,
    children: PropTypes.any,
  }
  // 默认props
  static defaultProps = {
    disabled: false,
    active: false,
  }

  state = {
    visible: true,
  }

  componentWillMount() {
    this.parent().onOptionCreate(this)
  }

  componentWillUnmount() {
    this.parent().onOptionDestroy(this)
  }

  getLabel() {
    return (
      this.props.label ||
      (typeof this.props.value === 'string' ||
      typeof this.props.value === 'number'
        ? this.props.value
        : '')
    )
  }

  parent() {
    return this.context.componentSelect
  }

  optionClickHandle = () => {
    const { value, label } = this.props
    if (this.props.disabled) return

    this.parent().selectOptionHandle({ value, label, node: this })
  }

  queryChange(query, filterMethod) {
    let defaultMethod = (input, option) =>
      option.toLowerCase().indexOf(input.toLowerCase()) >= 0

    if (typeof filterMethod === 'function') {
      defaultMethod = filterMethod
    }

    const visible = defaultMethod(query, this.getLabel())

    // 此处多处setstate会最终只setstate一次，所以直接set最后调用forceUpdate
    !visible &&
      (this.parent().state.filteredOptionsCount =
        this.parent().state.filteredOptionsCount - 1)

    this.setState({ visible })
  }

  // 渲染
  render() {
    let { active, disabled, className, children, style, ...others } = this.props
    const { visible } = this.state
    const displayStyle = visible ? {} : { display: 'none' }

    return (
      <li
        {...others}
        style={Object.assign({}, style, displayStyle)}
        className={classnames('select-option', { active, disabled }, className)}
        onClick={this.optionClickHandle}
      >
        {children || <span>{this.getLabel()}</span>}
      </li>
    )
  }
}

Option.contextTypes = {
  componentSelect: PropTypes.any,
}

export default Option
