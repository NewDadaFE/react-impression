/* eslint-disable react/jsx-no-bind */

import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'throttle-debounce'
import * as PopManager from '../../utils/pop'
import { Input, Icon } from 'react-impression'

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

    // 子组件数据
    this.options = []

    this.debouncedOnInputChange = debounce(this.debounce(), () => {
      this.onInputChange()
    })

    this.state = {
      showOption: false,
      value: this.isPuppet ? undefined : props.defaultValue,
      // 展示在input上的label值，可以随着可筛选状态下input变化而变化
      selectedLabel: '',
      // 已选选项的节点
      selected: undefined,
      // 筛选状态下inpu的值
      query: '',
      inputHovering: false,
      // 选项节点的数组
      options: [],
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
    // 清除选项的时候
    onClear: PropTypes.func,
    // 选项显示与否变化时触发
    onVisibleChange: PropTypes.func,
    // 自定义过滤方法
    filterMethod: PropTypes.func,
  }
  // 默认props
  static defaultProps = {
    size: 'lg',
    disabled: false,
    placeholder: '请选择',
    filterable: false,
    clearable: false,
  }

  debounce() {
    return 0
  }

  getValue() {
    return this.isPuppet ? this.props.value : this.state.value
  }
  setValue(value) {
    if (!this.isPuppet) {
      let tempLabel = ''

      this.options.forEach(option => {
        if (value === option.value) tempLabel = option.label
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

  onOptionCreate(option) {
    this.options.push(option)
  }

  onOptionDestroy(option) {
    const index = this.options.indexOf(option)
    if (index > -1) {
      this.options.splice(index, 1)
    }
  }

  // 隐藏菜单
  hideOptionsHandle = () => this.setState({ showOption: false })

  componentDidMount() {
    this.handlePropsValueChange()
  }

  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.handlePropsValueChange(props)
    }
  }

  handlePropsValueChange(props) {
    const originValue = this.isPuppet
      ? props !== undefined
        ? props.value
        : this.props.value
      : this.state.value

    const selected = this.options.filter(option => {
      return option.props && option.props.value === originValue
    })[0]
    let dataToSet

    if (selected && selected.props) {
      dataToSet = {
        selected: selected,
        selectedLabel: selected.props.label || selected.props.value,
      }
    } else {
      dataToSet = {
        selected: {},
        selectedLabel: '',
      }
    }

    this.setState(dataToSet)
  }

  onInputChange() {
    if (
      this.props.filterable &&
      this.state.selectedLabel !== this.state.value
    ) {
      this.setState({
        query: this.state.selectedLabel,
      })
    }
  }

  /**
   * 清空组件管理.
   */
  componentWillUnmount() {
    PopManager.unManager(this)
  }

  componentWillUpdate(props, state) {
    let { query, selected, selectedLabel, value } = this.state
    const { filterable, filterMethod } = this.props

    if (state.value !== value) {
      let option = this.options.filter(
        option => option.props.value === state.value
      )[0]

      if (option) {
        selected = option
        selectedLabel = option.getLabel()
      } else {
        selected = {}
        selectedLabel = ''
      }
      this.setState({ selected, selectedLabel })
    }

    if (state.showOption !== this.state.showOption) {
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

    if (state.query !== query) {
      this.options.forEach(option => {
        option && option.queryChange(state.query, filterMethod)
      })
    }
  }

  /*
  * 返回select右侧icon
  * */
  getIcon = () => {
    const isShowClose =
      this.props.clearable &&
      this.state.inputHovering &&
      this.state.selectedLabel !== ''
    this.iconClass = isShowClose ? 'times-circle' : 'angle-down'
    return <Icon type={this.iconClass} className='select-addon' />
  }

  // 显示/隐藏菜单
  toggleOptionsHandle = () => {
    const { filterable, disabled } = this.props
    const { query, showOption } = this.state

    if (filterable && query === '' && showOption) {
      return
    }

    !disabled &&
      this.setState({
        showOption: !showOption,
      })
  }

  handleIconClick(value, event) {
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
        dataToSet.selected = {}
      }

      this.setState(dataToSet)

      if (this.props.onChange) {
        this.props.onChange('')
      }

      if (this.props.onClear) {
        this.props.onClear()
      }
    }
  }

  /**
   * option选中回调.
   * @param  {[Object]} result [值]
   */
  selectOptionHandle = result => {
    let { onChange } = this.props

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
            result.value !== this.state.value &&
            onChange(result.value, result.label)
        }
      )
    } else {
      onChange &&
        result.value !== this.props.value &&
        onChange(result.value, result.label)
    }

    this.setState({
      showOption: false,
    })
  }

  onMouseEnter = () => {
    this.setState({
      inputHovering: true,
    })
  }

  onMouseLeave = () => {
    this.setState({
      inputHovering: false,
    })
  }

  render() {
    let {
        placeholder,
        disabled,
        style,
        className,
        children,
        filterable,
        size,
      } = this.props,
      { showOption, selectedLabel } = this.state

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
          ref='main'
          size={size}
          value={selectedLabel}
          type='text'
          placeholder={placeholder}
          disabled={disabled}
          readOnly={!filterable}
          suffix={this.getIcon() || undefined}
          onChange={value => this.setState({ selectedLabel: value })}
          onKeyUp={this.debouncedOnInputChange}
          onClick={this.toggleOptionsHandle}
          onIconClick={this.handleIconClick.bind(this)}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
        <ul className='select-options'>{children}</ul>
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
