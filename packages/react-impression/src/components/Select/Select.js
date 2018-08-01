import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import SelectOption from '../SelectOption'
import * as System from '../../utils/system'

const isContainer = (text, arr) => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    const name = arr[i].name
    if (name.toLocaleUpperCase().indexOf(text.toLocaleUpperCase()) > -1) {
      return true
    }
  }
  return false
}
const isEqual = (text, arr) => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    const name = arr[i].name
    if (name.toLocaleUpperCase() === text.toLocaleUpperCase()) {
      return true
    }
  }
  return false
}
export default class Select extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    System.manager(this)

    // 是否木偶组件
    this.isPuppet = props.value !== undefined

    // 子组件数据
    this.options = []
    this.defaultoptions = []
    const initValue = {
      showOption: false,
      value: this.isPuppet ? undefined : props.defaultValue,
      searchValue: props.value,
      isSearch: false,
      searchText: '',
      isNoresult: false,
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
      this.defaultoptions.forEach(option => {
        if (value === option.value) main.value = option.name
      })

      this.setState({
        value,
      })
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
    !this.props.disabled &&
      this.setState({
        showOption: !this.state.showOption,
        isNoresult: false,
      })
  }

  /**
   * @description 隐藏菜单
   * @memberof Select
   */
  hideOptionsHandle = () => this.setState({ showOption: false })

  handleBlur = () => {
    this.refs.main.blur()
    this.setState({ isSearch: false, searchText: '' })
  }
  /**
   * @description blur 事件
   * @memberof Select
   */
  handleSearchBlur = () => {
    this.searchText = ''
    const { isNoresult } = this.state
    const { main } = this.refs
    const { value, defaultValue } = this.props
    if (isNoresult) {
      if (this.isPuppet) {
        main.value = null
        this.defaultoptions.forEach(option => {
          if (value === option.value) main.value = option.name
        })
        this.setState({ searchText: '' })
      } else {
        main.value = null
        this.defaultoptions.forEach(option => {
          if (defaultValue === option.value) main.value = option.name
        })
        this.setState({ searchText: '', value: defaultValue })
      }
      if (!value && value !== 0 && !defaultValue && defaultValue !== 0) {
        main.value = ''
        this.setState({ searchText: '' })
      }
    } else {
      if (isEqual(main.value, this.defaultoptions)) return
      if (!this.isPuppet) {
        this.defaultoptions.forEach(option => {
          if (defaultValue === option.value) {
            main.value = option.name
            this.setState({ value: defaultValue, searchText: '' })
          }
        })
      } else {
        this.defaultoptions.forEach(option => {
          if (value === option.value) {
            main.value = option.name
            this.setState({ value: value, searchText: '' })
          }
        })
      }
      if (!value && value !== 0 && !defaultValue && defaultValue !== 0) {
        if (isContainer(main.value, this.defaultoptions)) {
          this.setState({ searchText: '' })
          main.value = ''
        }
      }
    }
  }
  handleSearch = () => {
    const { showOption } = this.state
    const searchText = this.refs.main.value
    this.setState({ isSearch: true, searchText: searchText })
    if (!this.isPuppet) {
      this.setState({ value: searchText })
    } else {
      this.setState({ searchValue: searchText })
      this.refs.main.value = searchText
    }
    if (!showOption) {
      this.setState({ showOption: true })
    }
    if (!isContainer(searchText, this.defaultoptions)) {
      this.setState({ isNoresult: true })
    } else {
      this.setState({ isNoresult: false })
    }
  }
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
    setTimeout(this.handleBlur, 1)
  }

  /**
   * 清空组件管理
   */
  componentWillUnmount() {
    System.unmanager(this)
  }

  componentDidMount() {
    const { children } = this.props
    this.defaultoptions = []
    React.Children.map(children, (child, index) => {
      if (!child) {
        return child
      } // ? child ?
      const { value, children } = child.props
      this.defaultoptions.push({
        name: children,
        value,
      })
    })
  }
  render() {
    const {
      placeholder,
      disabled,
      style,
      className,
      searchable,
      children,
    } = this.props
    const { showOption, isSearch, searchText, isNoresult } = this.state
    let text
    this.options = [] // this问题
    let originValue
    if (!searchable) {
      originValue = this.isPuppet ? this.props.value : this.state.value
    } else {
      originValue = this.isPuppet ? this.state.searchValue : this.state.value
    }

    // const originValue = this.isPuppet ? this.props.value : this.state.value
    let _children
    if (!isNoresult) {
      _children = React.Children.map(children, (child, index) => {
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
        // 搜索筛选
        if (
          searchable &&
          isSearch &&
          children.toLocaleUpperCase().indexOf(searchText.toLocaleUpperCase()) >
            -1
        ) {
          return React.cloneElement(child, {
            key: index,
            active: value === originValue,
            onClick: () =>
              !disabled && this.selectOptionHandle(value, children, index),
          })
        }
        if (!searchText) {
          return React.cloneElement(child, {
            key: index,
            active: value === originValue,
            onClick: () =>
              !disabled && this.selectOptionHandle(value, children, index),
          })
        }
      })
    } else {
      _children = React.createElement(
        'li',
        { className: 'select-noresult' },
        '无匹配结果'
      )
    }
    if (this.isPuppet && !searchable) {
      this.refs.main && (this.refs.main.value = text)
    }
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
          readOnly={!searchable}
          ref='main'
          placeholder={placeholder}
          disabled={disabled}
          className={classnames('form-control', 'select-selection')}
          onClick={this.toggleOptionsHandle}
          onKeyUp={searchable ? this.handleSearch : ''}
          onBlur={this.handleSearchBlur}
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
