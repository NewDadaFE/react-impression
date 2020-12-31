import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import { DebounceInput } from 'react-debounce-input'
import Ico from '../Ico'
import Tag from '../Tag'
import Trigger from '../Trigger'
import SelectOption from '../SelectOption'

const isContainer = (text, array) => {
  return array.some(item => {
    return item.name.toLocaleUpperCase().indexOf(text.toLocaleUpperCase()) > -1
  })
}

export default class Select extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    // 是否木偶组件
    this.isPuppet = props.value !== undefined
    // 子组件数据
    this.options = []
    // 滚动条
    const initValue = {
      showOption: false,
      value: this.isPuppet ? undefined : props.defaultValue,
      isSearch: false,
      selectText: '', // 选中字段
      inputText: '', // 输入字段
      options: [],
      selectedOptions: [],
      optionGroup: [],
      selectedItem: this.props.multiple ? [] : {},
      optionList: [],
      currentPlaceholder: this.props.placeholder,
      queryText: '', // 搜索字段
      showClear: false,
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
     * 是否多选
     */
    multiple: PropTypes.bool,

    /**
     * 是否不可用
     */
    disabled: PropTypes.bool,

    /**
     * 是否可清除，只适用于单选
     */
    clearable: PropTypes.bool,

    /**
     * 是否可搜索
     */
    searchable: PropTypes.bool,
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
     * 状态变更回调，参数列表：value，name
     */
    onChange: PropTypes.func,

    /**
     * 多选模式下移除tag回调，参数列表：value
     */
    onDelete: PropTypes.func,

    /**
     * 自定义过滤方法
     */
    filterMethod: PropTypes.func,

    /**
     * 远程搜索方法，参数列表：inputValue, 接收 Promise 作为返回值
     */
    remoteMethod: PropTypes.func,

    /**
     * 子组件
     */
    children: PropTypes.node,

    /**
     * 尺寸 多选只有两个尺寸，'md'和'xs'，单选
     */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),

    /**
     * 弹出层宽度伸缩方式
     */
    stretch: PropTypes.oneOf(['sameWidth', 'auto']),
  }
  static defaultProps = {
    disabled: false,
    placeholder: '请选择',
    size: 'md',
    stretch: 'sameWidth',
  }

  componentDidMount() {
    this.handleInit()
  }

  /**
   * @description 初始化
   * @memberof Select
   */
  handleInit = props => {
    this.handleValueChange(props)
  }

  getChildContext() {
    return {
      componentSelect: this,
    }
  }

  getOptionList = (arr = []) => {
    return arr.map(option => {
      const { value, children = '' } = option.props
      return { value, name: children.toString() }
    })
  }

  handleValueChange(props) {
    const { options, selectedOptions, queryText, optionGroup } = this.state
    const { filterMethod } = this.props
    const optionList = this.getOptionList(options).concat(selectedOptions)
    const { multiple } = this.props
    const originValue = this.isPuppet
      ? props !== undefined
        ? props.value
        : this.props.value
      : this.state.value
    let dataToSet
    if (!multiple) {
      let selectedItem
      if (optionList.length > 0) {
        selectedItem = optionList.find(option => {
          return option.value === originValue
        })
      }
      if (selectedItem) {
        dataToSet = {
          selectedItem,
          selectText: selectedItem.name || selectedItem.value,
          queryText: selectedItem.name || selectedItem.value,
        }
      } else {
        dataToSet = {
          selectedItem: {},
          selectText: '',
          queryText: '',
        }
      }
    } else {
      let selectList = []
      originValue &&
        originValue.length > 0 &&
        optionList.length > 0 &&
        originValue.forEach(val => {
          const item = optionList.find(option => {
            return option.value === val
          })
          item && selectList.push(item)
        })
      if (!this.isPuppet) {
        dataToSet = {
          selectedItem: selectList || [],
          selectText: '',
          value: originValue || [],
        }
      } else {
        dataToSet = {
          selectedItem: selectList || [],
          selectText: '',
          value: '',
        }
      }
    }
    this.setState(dataToSet, () => {
      this.options.forEach(option => option.handleActive())
      if (multiple) {
        options.forEach(option => {
          option.queryChange(queryText, filterMethod)
        })
        optionGroup.forEach(option => {
          option.queryChange(queryText)
        })
      }
    })
  }

  getValue() {
    return this.isPuppet ? this.props.value : this.state.value
  }

  setValue(value) {
    const { options } = this.state
    const optionList = this.getOptionList(options)
    if (!this.isPuppet) {
      if (!this.props.multiple) {
        if (!value) {
          this.setState({
            selectText: '',
            queryText: '',
          })
        } else {
          optionList.forEach(option => {
            if (value === option.value) {
              this.setState({
                selectText: option.value,
                queryText: option.value,
              })
            }
          })
        }
        this.setState(
          {
            value,
          },
          () => {
            options.forEach(option => option.handleActive())
          }
        )
      } else {
        let selected = []
        let valueList = []
        optionList.forEach(option => {
          if (value === option.value) {
            selected.push(option)
            valueList.push(option.value)
          }
        })
        this.setState(
          {
            value: valueList,
            selectedItem: selected,
          },
          () => {
            options.forEach(option => option.handleActive())
          }
        )
      }
    }
  }

  /**
   * @description  focus
   * @memberof Select
   */
  focus() {
    this.refs.main.focus()
  }

  /**
   * @description 显示/隐藏菜单
   * @memberof Select
   */
  toggleOptionsHandle = event => {
    event && event.preventDefault()
    const { searchable, disabled } = this.props
    const {
      optionGroup,
      selectText,
      queryText,
      showOption,
      options,
    } = this.state
    if (disabled || (queryText && searchable && showOption)) {
      return
    }
    this.setState(
      {
        showOption: !showOption,
      },
      () => {
        optionGroup.forEach(option => {
          option.queryChange('')
        })
        options.forEach(option => {
          option.queryChange('')
        })
        this.selectInner.scrollTop = 0
        if (!this.state.showOption) {
          this.setState({ queryText: selectText })
        }
        // 单选可搜索时，显示弹出层同时清除 Input 的值
        if (this.state.showOption && searchable) {
          this.setState({ queryText: '' })
        }
      }
    )
  }

  /**
   * @description 多选删除
   * @param {*} newVal
   * @param {*} e
   * @returns
   * @memberof Select
   */
  selectMultipleDelete(newVal, e) {
    const { placeholder, onDelete, disabled } = this.props
    const { selectedItem, value, options } = this.state
    if (disabled) return
    if (this.isPuppet) {
      onDelete && onDelete(newVal)
      if (e) e.stopPropagation()

      return false
    }

    let list = selectedItem.filter(item => item.value !== newVal)
    let val = value.filter(item => item !== newVal)
    this.setState({ selectedItem: list, value: val }, () => {
      options.forEach(option => {
        option.handleActive()
      })
      onDelete && onDelete(newVal)
    })
    if (list.length <= 0) {
      this.setState({ currentPlaceholder: placeholder })
    }
    this.selectInner.scrollTop = 0
    if (e) e.stopPropagation()
  }

  /**
   * option选中回调
   * @param result
   */
  selectOptionHandle(result) {
    const { onChange, value, multiple } = this.props
    const { options, selectedOptions, selectedItem } = this.state
    const originValue = this.isPuppet ? value : this.state.value
    if (multiple) {
      this.setState({ currentPlaceholder: '' })
    }
    // 木偶组件
    if (!this.isPuppet) {
      this.setState(
        {
          value: multiple ? [...originValue, result.value] : result.value,
          selectText: multiple ? '' : result.name,
          queryText: multiple ? '' : result.name,
          selectedItem: multiple ? [...selectedItem, result.node] : result.node,
        },
        () => {
          options.forEach(option => option.handleActive())
          onChange &&
            result.value !== originValue &&
            onChange(result.value, result.name)
        }
      )
    } else {
      onChange &&
        result.value !== originValue &&
        onChange(result.value, result.name)
    }
    this.setState({
      showOption: !!multiple,
      selectedOptions: selectedOptions.concat(result.node),
    })
  }

  /**
   * 清空组件管理
   */
  componentWillUnmount() {
    window.cancelAnimationFrame(this.requestId)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { options } = this.state
    if (!R.equals(nextProps.value, this.props.value)) {
      this.handleInit(nextProps)
      options.forEach(option => option.handleActive(nextProps))
    }
  }

  onOptionCreate(option) {
    this.state.options.push(option)
    let originValue = this.isPuppet ? this.props.value : this.state.value
    const { value, children = '' } = option.props

    if (this.props.multiple) {
      originValue = originValue || []
    } else {
      originValue = [originValue]
    }
    if (
      originValue.indexOf(value) > -1 &&
      this.state.selectedOptions.map(option => option.value).indexOf(value) ===
        -1
    ) {
      this.state.selectedOptions.push({
        value,
        name: children.toString(),
      })
    }

    this.forceUpdate()
    this.handleInit()
  }

  onOptionGroupCreate(option) {
    this.state.optionGroup.push(option)
    this.forceUpdate()
  }

  onOptionGroupDestroy(option) {
    const { optionGroup } = this.state
    const index = optionGroup.indexOf(option)
    if (index > -1) {
      optionGroup.splice(index, 1)
    }
    this.forceUpdate()
  }

  onOptionDestroy(option) {
    const { options } = this.state
    const index = options.indexOf(option)
    if (index > -1) {
      options.splice(index, 1)
    }
    this.forceUpdate()
    this.handleInit()
  }

  handleQuery(event) {
    const val = event.target.value
    event.stopPropagation()
    const { options, optionGroup } = this.state
    const { filterMethod, remoteMethod } = this.props
    this.setState({ queryText: val, showOption: true }, () => {
      this.selectInner.scrollTop = 0
      remoteMethod && remoteMethod(val)
      if (!remoteMethod) {
        options.forEach(option => {
          option.queryChange(val, filterMethod)
        })
        optionGroup.forEach(option => {
          option.queryChange(val)
        })
      }
    })
  }

  get emptyText() {
    const { searchable, filterMethod, remoteMethod } = this.props
    const { options, queryText } = this.state
    const optionList = this.getOptionList(options)
    if (options.length === 0) {
      return '暂无数据'
    }
    const hasCustomFilter = !!(filterMethod || remoteMethod)
    if (searchable && !isContainer(queryText, optionList) && !hasCustomFilter) {
      return '暂无数据'
    }
    return null
  }

  get wrapClass() {
    const { multiple } = this.props
    if (!multiple) return 'select-options-normal'
    if (multiple) return 'select-options-multiple'
  }

  /**
   * @description 显示清空按钮
   * @memberof Select
   */
  handleShowClear = () => {
    const showClear = !this.props.disabled && this.refMain && this.refMain.value
    this.setState({ showClear })
  }

  /**
   * @description 隐藏清空按钮
   * @memberof Select
   */
  handleHideClear = () => {
    this.setState({
      showClear: false,
    })
  }

  /**
   * @description 清空选项事件
   * @memberof Select
   */
  handleClearSelect = event => {
    const { disabled, onChange, placeholder } = this.props
    const { options } = this.state
    event.stopPropagation()

    if (disabled) {
      return
    }
    if (!this.isPuppet) {
      this.refMain && (this.refMain.value = '')
    }
    this.setState(
      {
        showClear: false,
        selectText: '',
        queryText: '',
        value: '',
        showOption: false,
        currentPlaceholder: placeholder,
      },
      () => {
        options.forEach(option => option.handleActive())
        onChange && onChange('', '')
      }
    )
  }

  /**
   * Input框focus事件
   * @returns {*}
   */
  focusHandler = () => {
    const { selectText, showOption } = this.state
    // 单选搜索输入聚焦时，弹出层是展开状态，则不需要做响应
    if (!selectText || showOption) return
    this.setState({ currentPlaceholder: selectText })
  }

  hideOptionsHandler = popupVisible => {
    if (!popupVisible && this.state.showOption) {
      const { selectText } = this.state
      this.setState({ showOption: false, queryText: selectText }, () => {
        this.selectInner.scrollTop = 0
      })
    }
  }

  render() {
    const {
      disabled,
      style,
      className,
      searchable,
      multiple,
      placeholder,
      clearable,
      size,
      stretch,
    } = this.props
    const {
      showOption,
      queryText,
      currentPlaceholder,
      selectedItem,
      showClear,
    } = this.state
    let { children } = this.props
    let realSize = 'md'
    if (!multiple || (multiple && (size === 'xs' || size === 'md'))) {
      realSize = size
    }
    return (
      <>
        <Trigger
          showAction='none'
          hideAction='none'
          popupVisible={showOption}
          onPopupVisibleChange={this.hideOptionsHandler}
          stretch={stretch}
          transitionName='scale'
          popup={
            <div className={classnames(this.wrapClass, 'select-options-wrap')}>
              {searchable && multiple && (
                <div className='select-search-wrap'>
                  <DebounceInput
                    debounceTimeout={500}
                    value={queryText}
                    onChange={e => this.handleQuery(e)}
                    className={classnames('select-search-input')}
                  />
                  <Ico type='search' className='select-search' />
                </div>
              )}
              <ul
                className={classnames('select-options')}
                ref={ref => (this.selectInner = ref)}
              >
                {children}
                {this.emptyText && (
                  <p className='select-empty'>{this.emptyText}</p>
                )}
              </ul>
            </div>
          }
        >
          <div
            style={style}
            className={classnames(
              'select',
              `dada-select-${realSize}`,
              {
                'select-multiple': multiple,
                disabled,
                open: showOption && !searchable,
                'select-open': showOption,
              },
              className
            )}
            onMouseEnter={this.handleShowClear}
            onMouseLeave={this.handleHideClear}
          >
            {multiple && (
              <div className='select-tags' onClick={this.toggleOptionsHandle}>
                {selectedItem.length <= 0 && (
                  <span
                    className={classnames('select-placeholder', {
                      'select-placeholder-xs': size === 'xs',
                    })}
                  >
                    {placeholder}
                  </span>
                )}
                {selectedItem.length > 0 &&
                  selectedItem.map(item => {
                    const val = item.value
                    return (
                      <Tag
                        key={item.value}
                        size={size === 'xs' ? 'sm' : 'md'}
                        theme='default'
                        onClose={e => this.selectMultipleDelete(val, e)}
                        disabled={disabled}
                        closable
                      >
                        {item.name}
                      </Tag>
                    )
                  })}
              </div>
            )}
            {!multiple && (
              <input
                type='text'
                value={queryText}
                readOnly={!searchable || (searchable && !showOption)}
                placeholder={currentPlaceholder}
                disabled={disabled}
                className='select-selection'
                onChange={e => this.handleQuery(e)}
                onClick={this.toggleOptionsHandle}
                onFocus={searchable && this.focusHandler}
                ref={ref => (this.refMain = ref)}
              />
            )}
            {(!showClear || !clearable) &&
              (!searchable || multiple || (searchable && !showOption)) && (
              <Ico
                type='angle-down'
                className='select-addon'
                onClick={this.toggleOptionsHandle}
              />
            )}
            {(!showClear || !clearable) &&
              searchable &&
              showOption &&
              !multiple && (
              <Ico
                type='search'
                className='select-addon'
                onClick={this.toggleOptionsHandle}
              />
            )}
            {clearable && showClear && !multiple && (
              <Ico
                type='times-circle'
                className='select-addon'
                onClick={this.handleClearSelect}
              />
            )}
          </div>
        </Trigger>
      </>
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

Select.childContextTypes = {
  componentSelect: PropTypes.any,
}

Select.Option = SelectOption
