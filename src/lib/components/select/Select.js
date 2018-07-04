/* eslint-disable react/jsx-no-bind */

import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as PopManager from '../../utils/pop'
import { Input, Icon } from 'react-impression'
import View from '../../utils/View'

/**
 * Select组件.
 */
export default class Select extends PureComponent {
  // 初始state
  constructor(props, context) {
    super(props, context)
    PopManager.manager(this)

    // 是否木偶组件
    this.isPuppet = props.value !== undefined
    // icon的type
    this.iconClass = ''

    this.state = {
      showOption: false,
      value: this.isPuppet ? undefined : props.defaultValue,
      // 展示在input上的label值，可以随着可筛选状态下input变化而变化
      selectedLabel: '',
      // 已选选项的节点
      selected: null,
      // 筛选状态下input的值
      query: '',
      isInputHover: false,
      // 选项节点的数组
      options: [],
      // filterable模式下符合条件的筛选项数量
      filteredOptionsCount: 0,
      // 总的筛选项数量
      optionsCount: 0,
    }
  }
  // prop type校验
  static propTypes = {
    // 尺寸 sm lg default
    size: PropTypes.string,
    // 值
    value: PropTypes.any,
    // 默认值
    defaultValue: PropTypes.any,
    // 是否不可用
    disabled: PropTypes.bool,
    // style
    style: PropTypes.object,
    // 自定义样式
    className: PropTypes.string,
    // placeholder
    placeholder: PropTypes.string,
    // onChange
    onChange: PropTypes.func,
    children: PropTypes.any,
    // 是否可搜索
    filterable: PropTypes.bool,
    // 是否可清除
    clearable: PropTypes.bool,
    // 选项显示与否变化时触发
    onVisibleChange: PropTypes.func,
    // 自定义过滤方法
    filterMethod: PropTypes.func,
    // 无匹配文字
    noMatchText: PropTypes.string,
    // 无选项文字
    noOptionsText: PropTypes.string,
  }
  // 默认props
  static defaultProps = {
    size: 'default',
    disabled: false,
    placeholder: '请选择',
    filterable: false,
    clearable: false,
    noMatchText: '无匹配选项',
    noOptionsText: '无选项',
  }

  getValue() {
    return this.isPuppet ? this.props.value : this.state.value
  }
  setValue(value) {
    if (!this.isPuppet) {
      let tempLabel = ''

      this.state.options.forEach(option => {
        if (value === option.props.value) tempLabel = option.getLabel()
      })

      this.setState({
        value,
        selectedLabel: tempLabel,
      })
    }
  }

  getChildContext() {
    return {
      componentSelect: this,
    }
  }

  componentDidMount() {
    this.handleValueChange()
  }

  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.handleValueChange(props)
    }
  }

  /**
   * 清空组件管理.
   */
  componentWillUnmount() {
    PopManager.unManager(this)
  }

  componentWillUpdate(props, state) {
    let { query, selected, selectedLabel, value, options } = this.state

    if (state.value !== value) {
      let option = options.find(option => option.props.value === state.value)

      if (option) {
        selected = option
        selectedLabel = option.getLabel()
      } else {
        selected = null
        selectedLabel = ''
      }
      this.setState({ selected, selectedLabel })
    }

    if (state.showOption !== this.state.showOption) {
      this.handleVisibleChange(props, state)
    }

    if (state.query !== query) {
      this.handleQueryChange(state)
    }
  }

  handleQueryChange(state) {
    const { optionsCount, options } = this.state
    const { filterMethod } = this.props

    this.setState(
      {
        filteredOptionsCount: optionsCount,
      },
      () => {
        options.forEach(option => {
          option && option.queryChange(state.query, filterMethod)
        })
        this.forceUpdate()
      }
    )
  }

  handleVisibleChange(props, state) {
    let { value, selected, selectedLabel, query } = this.state
    const { filterable } = this.props

    if (
      !state.showOption &&
      props.value === this.props.value &&
      state.value === value
    ) {
      if (selected && selected.props) {
        selected.props.value && (selectedLabel = selected.getLabel())
      } else if (filterable) {
        selectedLabel = ''
      }
      this.setState({ selectedLabel })
    } else {
      if (filterable) {
        query = selectedLabel
      }
      this.setState({ query: query || '' })
    }

    if (this.props.onVisibleChange) {
      this.props.onVisibleChange(state.showOption)
    }
  }

  handleValueChange(props) {
    const originValue = this.isPuppet
      ? props !== undefined
        ? props.value
        : this.props.value
      : this.state.value

    const selected = this.state.options.find(option => {
      return option.props && option.props.value === originValue
    })

    let dataToSet

    if (selected && selected.props) {
      dataToSet = {
        selected: selected,
        selectedLabel: selected.props.label || selected.props.value,
      }
    } else {
      dataToSet = {
        selected: null,
        selectedLabel: '',
      }
    }

    this.setState(dataToSet)
  }

  onInputChange = () => {
    if (
      this.props.filterable &&
      this.state.selectedLabel !== this.state.value
    ) {
      this.setState({
        query: this.state.selectedLabel,
      })
    }
  }

  onOptionCreate(option) {
    // 此处不用setstate，因为会调用多次，直接修改之后forceUpdate
    this.state.options.push(option)
    this.state.optionsCount += 1
    this.state.filteredOptionsCount += 1

    this.forceUpdate()
    this.handleValueChange()
  }

  onOptionDestroy(option) {
    const { options } = this.state
    // 此处不用setstate，因为会调用多次，直接修改之后forceUpdate
    this.state.optionsCount += 1
    this.state.filteredOptionsCount += 1

    const index = options.indexOf(option)
    if (index > -1) {
      options.splice(index, 1)
    }

    this.forceUpdate()
    this.handleValueChange()
  }

  // 隐藏菜单
  hideOptionsHandle = () => this.setState({ showOption: false })

  // 储存iconClass
  get isShowClose() {
    return (
      this.props.clearable &&
      this.state.isInputHover &&
      this.state.selectedLabel !== ''
    )
  }

  /*
  * 返回select右侧icon
  * */
  getIcon = () => {
    this.iconClass = this.isShowClose ? 'times-circle' : 'angle-down'
    return (
      <Icon
        type={this.iconClass}
        className='select-addon'
        onClick={this.handleIconClick}
      />
    )
  }

  // 显示/隐藏菜单
  toggleOptionsHandle = () => {
    const { disabled } = this.props
    const { showOption } = this.state

    !disabled &&
      this.setState({
        showOption: !showOption,
      })
  }

  handleIconClick = event => {
    if (this.iconClass.indexOf('times-circle') > -1) {
      this.deleteSelected(event)
    } else {
      this.toggleOptionsHandle()
    }
  }

  deleteSelected = event => {
    event.stopPropagation()

    if (this.state.selectedLabel !== '') {
      const dataToSet = {
        showOption: false,
      }

      if (!this.isPuppet) {
        dataToSet.value = ''
        dataToSet.selectedLabel = ''
        dataToSet.selected = null
      }

      this.setState(dataToSet)

      if (this.props.onChange) {
        this.props.onChange('')
      }
    }
  }

  /**
   * option选中回调.
   * @param  {[Object]} result [值]
   */
  selectOptionHandle = result => {
    const { onChange, value } = this.props
    const originValue = this.isPuppet ? value : this.state.value

    // 木偶组件
    if (!this.isPuppet) {
      this.setState(
        {
          value: result.value,
          selectedLabel: result.label,
          selected: result.node,
        },
        () => {
          onChange &&
            result.value !== originValue &&
            onChange(result.value, result.label)
        }
      )
    } else {
      onChange &&
        result.value !== originValue &&
        onChange(result.value, result.label)
    }

    this.setState({
      showOption: false,
    })
  }

  onMouseEnter = () => {
    this.setState({
      isInputHover: true,
    })
  }

  onMouseLeave = () => {
    this.setState({
      isInputHover: false,
    })
  }

  getEmptyText = () => {
    const { filterable, noMatchText, noOptionsText } = this.props
    const { filteredOptionsCount, options } = this.state

    if (filterable && filteredOptionsCount === 0) {
      return noMatchText
    }

    if (options.length === 0) {
      return noOptionsText
    }

    return null
  }

  render() {
    const {
      placeholder,
      disabled,
      style,
      className,
      children,
      filterable,
      size,
    } = this.props

    const {
      showOption,
      selectedLabel,
      options,
      filteredOptionsCount,
    } = this.state

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
        <Input
          className='select-selection'
          size={size}
          value={selectedLabel}
          type='text'
          placeholder={placeholder}
          disabled={disabled}
          readOnly={!filterable}
          suffix={this.getIcon()}
          onChange={value => this.setState({ selectedLabel: value })}
          onKeyUp={this.onInputChange}
          onClick={this.toggleOptionsHandle}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
        <ul className='select-options'>
          <View show={options.length > 0 && filteredOptionsCount > 0}>
            <div>{children}</div>
          </View>
          {this.getEmptyText() && (
            <p className='select-options-empty'>{this.getEmptyText()}</p>
          )}
        </ul>
      </div>
    )
  }
}

// getValue
Select.getValue = ref => {
  if (!ref) return undefined

  return ref.getValue()
}

// setValue
Select.setValue = (ref, value) => {
  if (!ref) return

  ref.setValue(value)
}

Select.childContextTypes = {
  componentSelect: PropTypes.any,
}
