import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class SelectOptionGroup extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    // 是否木偶组件
    this.isPuppet = props.value !== undefined

    // 子组件数据
    this.options = []
  }

  static propTypes = {
    /**
     * 自定义行内样式
     */
    style: PropTypes.object,
    /**
     * 自定义样式
     */
    className: PropTypes.string,
    /**
     * 子组件
     */
    children: PropTypes.any,
    /**
     * 标签
     */
    name: PropTypes.any,
    /**
     * 是否不可用
     */
    disabled: PropTypes.bool,
  }
  state = {
    visible: true,
    optionList: [],
  }
  UNSAFE_componentWillMount() {
    this.parent().onOptionGroupCreate(this)
  }
  componentWillUnmount() {
    this.parent().onOptionGroupDestroy(this)
  }
  parent() {
    return this.context.componentSelect
  }
  contains(target, arr = []) {
    return arr.some(item => {
      return item.indexOf(target) > -1
    })
  }
  queryChange(query) {
    if (!query) {
      this.setState({ visible: true })
      return
    }
    this.setState({
      visible: !!this.contains(query, this.options),
    })
  }

  render() {
    const { style, className, name, disabled } = this.props
    const { visible } = this.state
    const displayStyle = visible ? {} : { display: 'none' }
    let { children } = this.props
    children = React.Children.map(children, (child, index) => {
      if (!child) {
        return child
      }
      let { children = '' } = child.props
      this.options.push(this.parent().getIntLabel(children))
      return React.cloneElement(child, {
        key: index,
        disabled: disabled,
      })
    })
    return (
      <ul
        style={Object.assign({}, displayStyle, style)}
        className={classnames(
          'select-group-container',
          { disabled },
          className
        )}
      >
        <li className='select-group-title'>{name}</li>
        <li>
          <ul className='select-group-inner'>{children}</ul>
        </li>
      </ul>
    )
  }
}

SelectOptionGroup.propTypes = {
  name: PropTypes.string,
}
SelectOptionGroup.contextTypes = {
  componentSelect: PropTypes.any,
}
