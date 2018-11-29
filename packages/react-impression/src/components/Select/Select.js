import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import * as System from '../../utils/system'
import { DebounceInput } from 'react-debounce-input'
import Tag from '../Tag/index'
import Popper from 'popper.js'
import SelectOption from '../SelectOption'

const isContainer = (text, array) => {
  return array.some(item => {
    return item.name.toLocaleUpperCase().indexOf(text.toLocaleUpperCase()) > -1
  })
}

export default class Select extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    System.manager(this)

    // 是否木偶组件
    this.isPuppet = props.value !== undefined
    this.selectPopper = null
    // 子组件数据
    this.options = []
    const initValue = {
      showOption: false,
      value: this.isPuppet ? undefined : props.defaultValue,
      isSearch: false,
      selectText: '', // 选中字段
      options: [],
      optionGroup: [],
      selectedItem: this.props.multiple ? [] : {},
      optionList: [],
      currentPlaceholder: this.props.placeholder,
      queryText: '', // 搜索字段
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
     * 是否必选项
     */
    required: PropTypes.bool,

    /**
     * 占位文字
     */
    placeholder: PropTypes.string,

    /**
     * 状态变更回调，参数列表：value，name，index
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
     * 子组件
     */
    children: PropTypes.node,
  }
  static defaultProps = {
    disabled: false,
    placeholder: '请选择',
  }

  componentDidMount() {
    this.handleInit()
  }

  /**
   * @description 初始化
   * @memberof Select
   */
  handleInit = () => {
    const { options } = this.state
    const optionList = options.map(option => {
      const { value, children } = option.props
      return { value, name: children.toString() }
    })

    this.setState({ optionList }, this.handleValueChange)
  }
  getChildContext() {
    return {
      componentSelect: this,
    }
  }
  /**
   * @description 隐藏菜单
   * @memberof Select
   */
  hideOptionsHandle = () => {
    this.setState({ showOption: false }, () => {
      const { optionGroup, options } = this.state
      options.forEach(option => {
        option.queryChange('')
      })
      optionGroup.forEach(option => {
        option.queryChange('')
      })
      this.selectPopper && this.selectPopper.destroy()
    })
  }

  handleValueChange(props) {
    const { optionList } = this.state
    const { multiple } = this.props
    const originValue = this.isPuppet
      ? props !== undefined ? props.value : this.props.value
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
        }
      } else {
        dataToSet = {
          selectedItem: {},
          selectText: '',
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
    })
  }
  getValue() {
    return this.isPuppet ? this.props.value : this.state.value
  }

  setValue(value) {
    const { options } = this.state
    if (!this.isPuppet) {
      if (!this.props.multiple) {
        if (!value) {
          this.setState({
            selectText: '',
          })
        } else {
          this.state.optionList.forEach(option => {
            if (value === option.value) {
              this.setState({
                selectText: option.value,
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
        this.state.optionList.forEach(option => {
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
  toggleOptionsHandle = () => {
    const { optionGroup } = this.state
    if (this.props.disabled) return
    this.setState(
      {
        showOption: !this.state.showOption,
        queryText: '',
      },
      () => {
        optionGroup.forEach(option => {
          option.queryChange('')
        })
        if (this.state.showOption) {
          this.selectPopper = new Popper(this.selectMain, this.selectOption, {
            positionFixed: true,
            placement: 'bottom-start',
            modifiers: {
              offset: { offset: '0, 10' },
            },
          })
        } else {
          this.selectPopper && this.selectPopper.destroy()
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
    this.selectPopper && this.selectPopper.update()
    if (e) e.stopPropagation()
  }

  /**
   * option选中回调
   * @param {String} 值
   * @param {String} 显示文本
   * @param {Number} 索引
   */
  selectOptionHandle(result) {
    const { onChange, value, multiple } = this.props
    const { options, selectedItem, optionGroup } = this.state
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
    this.setState(
      {
        showOption: !!multiple,
        queryText: '',
      },
      () => {
        optionGroup.forEach(option => {
          option.queryChange('')
        })
        this.selectPopper && this.selectPopper.update()
      }
    )
  }

  /**
   * 清空组件管理
   */
  componentWillUnmount() {
    System.unmanager(this)
  }

  componentWillReceiveProps(props) {
    const { options } = this.state
    if (props.value !== this.props.value) {
      this.handleInit()
      options.forEach(option => option.handleActive(props))
    }
  }

  onOptionCreate(option) {
    this.state.options.push(option)
    this.forceUpdate()
    this.handleInit()
  }
  onOptionGroupCreate(optionGroup) {
    this.state.optionGroup.push(optionGroup)
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
    const { options, optionGroup } = this.state
    const { filterMethod } = this.props
    this.setState({ queryText: val }, () => {
      options.forEach(option => {
        option.queryChange(val, filterMethod)
      })
      optionGroup.forEach(option => {
        option.queryChange(val)
      })
      this.selectPopper && this.selectPopper.update()
    })
  }

  getEmptyText = () => {
    const { searchable, filterMethod } = this.props
    const { options, optionList, queryText } = this.state
    if (options.length === 0) {
      return '暂无数据'
    }
    if (searchable && !isContainer(queryText, optionList) && !filterMethod) {
      return '暂无数据'
    }

    return null
  }

  get wrapClass() {
    const { multiple } = this.props
    if (!multiple) return 'select-options-normal'
    if (multiple) return 'select-options-multiple'
  }

  render() {
    const {
      disabled,
      style,
      className,
      searchable,
      multiple,
      required,
    } = this.props
    const {
      showOption,
      selectText,
      queryText,
      currentPlaceholder,
      selectedItem,
    } = this.state
    let { children } = this.props
    const optionWidth = this.selectMain && this.selectMain.offsetWidth
    return (
      <div
        style={style}
        className={classnames(
          'select',
          { 'select-multiple': multiple },
          { disabled },
          { required },
          { open: showOption },
          className
        )}
        disabled={disabled}
        ref={ref => (this.selectMain = ref)}
      >
        {multiple && (
          <div className='select-tags' onClick={this.toggleOptionsHandle}>
            {selectedItem.length <= 0 && (
              <span className='select-placeholder'>请选择</span>
            )}
            {selectedItem.length > 0 &&
              selectedItem.map(item => {
                const val = item.value
                return (
                  <Tag
                    closable
                    theme='default'
                    onClose={e => this.selectMultipleDelete(val, e)}
                    className='offset-l'
                    key={item.value}
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
            value={selectText}
            readOnly
            placeholder={currentPlaceholder}
            disabled={disabled}
            className={classnames('select-selection')}
            onClick={this.toggleOptionsHandle}
            onKeyUp={searchable ? this.handleSearch : ''}
          />
        )}

        <i
          className='fa fa-chevron-down select-addon'
          onClick={this.toggleOptionsHandle}
        />
        <div
          className={classnames(
            {
              hidden: !showOption,
            },
            'select-option-outer'
          )}
          ref={ref => (this.selectOption = ref)}
          style={{ width: optionWidth }}
        >
          <div className={classnames(this.wrapClass, 'select-options-wrap')}>
            {searchable && (
              <div className='select-search-wrap'>
                <DebounceInput
                  debounceTimeout={500}
                  value={queryText}
                  onChange={e => this.handleQuery(e)}
                  className={classnames('select-search-input')}
                />
                <i className='fa fa-search select-search' />
              </div>
            )}
            <ul
              className='select-options'
              ref={ref => (this.selectInner = ref)}
            >
              {children}
              {this.getEmptyText() && (
                <p className='select-empty'>{this.getEmptyText()}</p>
              )}
            </ul>
          </div>
        </div>
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

Select.childContextTypes = {
  componentSelect: PropTypes.any,
}

Select.Option = SelectOption
