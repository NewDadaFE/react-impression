import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import isPropValid from '@emotion/is-prop-valid'

export default class SelectOption extends React.PureComponent {
  static propTypes = {
    /**
     * 是否不可用
     */
    disabled: PropTypes.bool,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 是否选中
     */
    active: PropTypes.bool,

    /**
     * 值
     */
    value: PropTypes.any.isRequired,

    /**
     * 子组件
     */
    children: PropTypes.node,
  }

  state = {
    active: this.props.active || false,
    visible: true,
  }

  static defaultProps = {
    disabled: false,
  }

  get labelName() {
    return (this.props.children || '').toString()
  }

  isEqual(a, b) {
    return a === b
  }
  contains(target, arr = []) {
    return arr.indexOf(target) > -1
  }

  findIndex(val, array) {
    let ind = -1
    if (array.length <= 0) return ind
    array.forEach((item, index) => {
      if (item.value === val) {
        ind = index
        return ind
      }
    })
    return ind
  }
  parent() {
    return this.context.componentSelect
  }

  /**
   * @description 点击
   * @memberof SelectOption
   */
  optionClickHandle = () => {
    const { active } = this.state
    const { value } = this.props
    const { multiple } = this.parent() ? this.parent().props : false
    if (active && !multiple) {
      this.parent().toggleOptionsHandle()
      return
    }
    if (active && multiple) {
      this.parent().selectMultipleDelete(value)
      return
    }
    const index = this.findIndex(value, this.parent().state.optionList)
    if (this.props.disabled) return
    this.parent().selectOptionHandle({
      value: value,
      name: this.labelName,
      index,
      node: { value, name: this.labelName },
    })
  }
  handleActive = props => {
    if (!this.parent().props.multiple) {
      this.setState({
        active:
          this.isEqual(this.props.value, this.parent().state.value) ||
          this.isEqual(
            this.props.value,
            props ? props.value : this.parent().props.value
          ),
      })
    } else {
      this.setState({
        active:
          this.contains(this.props.value, this.parent().state.value) ||
          this.contains(
            this.props.value,
            props ? props.value : this.parent().props.value
          ),
        visible: true,
      })
    }
  }
  UNSAFE_componentWillMount() {
    if (this.parent()) {
      this.parent().onOptionCreate(this)
    }
  }
  componentDidMount() {
    this.parent() && this.handleActive()
  }
  componentWillUnmount() {
    this.parent().onOptionDestroy(this)
  }
  queryChange(query, filterMethod) {
    if (!this.parent().props.searchable) return
    let defaultMethod = (input = '', option) => {
      if (option) {
        return option.toLowerCase().indexOf(input.toLowerCase()) > -1
      }
      return false
    }

    if (typeof filterMethod === 'function') {
      defaultMethod = filterMethod
      defaultMethod(query, this.getLabel())
    } else {
      const visible = defaultMethod(query, this.getLabel())

      this.setState({ visible })
    }
  }
  getLabel() {
    return (
      this.labelName ||
      (typeof this.props.value === 'string' ||
      typeof this.props.value === 'number'
        ? this.props.value.toString()
        : '')
    )
  }

  render() {
    const { disabled, className, children, ...others } = this.props
    const { active } = this.state
    const { visible } = this.state
    const displayStyle = visible ? {} : { display: 'none' }
    const otherDomProps = {}
    for (let key in others) {
      if (others.hasOwnProperty(key) && isPropValid(key)) {
        otherDomProps[key] = others[key]
      }
    }
    return (
      <li
        {...otherDomProps}
        style={displayStyle}
        className={classnames('select-option', { active, disabled }, className)}
        onClick={this.optionClickHandle}
      >
        {children}
      </li>
    )
  }
}
SelectOption.contextTypes = {
  componentSelect: PropTypes.any,
}
