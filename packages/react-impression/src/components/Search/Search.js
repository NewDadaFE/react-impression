import React, {
  useState,
  useEffect,
  useCallback,
  createRef,
  useRef,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Trigger from '../Trigger'
import Input from '../Input'
import Ico from '../Ico'

const defaultOptionKey = { label: 'label' }

Search.propTypes = {
  /**
   * 选项容器宽度是否伸缩
   */
  optionsWidthStretch: PropTypes.bool,
  /**
   * 输入框改变的回调，参数列表：keyword
   */
  onChange: PropTypes.func,
  /**
   * 发起查询回调，参数列表：keyword
   * 返回值类型必须是 Promise 或者 Array
   */
  onSearch: PropTypes.func,
  /**
   * 选中回调，参数列表：item
   */
  onSelect: PropTypes.func,
  /**
   * 自定义option的键名称
   */
  optionKey: PropTypes.exact({
    label: PropTypes.string,
  }),
  /**
   * 自定义结果选项，参数列表：item, data, index
   */
  optionRender: PropTypes.func,
  /**
   * 输入框提示信息
   */
  placeholder: PropTypes.string,
  /**
   * 搜索组件尺寸
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  /**
   * 搜索结果为空时显示内容
   */
  notFoundContent: PropTypes.node,
  /**
   * 搜索值，onSearch 返回结果的一个子项
   */
  value: PropTypes.object,
  /**
   * 搜索值默认值，onSearch 返回结果的一个子项
   */
  defaultValue: PropTypes.object,
  /**
   * 搜索框值交互类型
   */
  type: PropTypes.oneOf(['input', 'select']),
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 是否可清除
   */
  clearable: PropTypes.bool,
  /**
   * 自定义样式
   */
  className: PropTypes.string,
  /**
   * 防抖时间间隔，单位：ms
   */
  debounceTime: PropTypes.number,
}

Search.defaultProps = {
  optionsWidthStretch: false,
  optionKey: defaultOptionKey,
  size: 'md',
  type: 'input',
  clearable: true,
  debounceTime: 300,
}

function Search(props) {
  const {
    optionsWidthStretch,
    placeholder,
    size,
    notFoundContent,
    onChange,
    onSearch,
    onSelect,
    optionRender,
    optionKey,
    value,
    defaultValue,
    type,
    clearable,
    disabled,
    className,
    debounceTime,
    // props 透传，注意移除原生标签不支持的属性！
    ...others
  } = props
  const labelKey = optionKey.label || defaultOptionKey.label
  const valueString = typeof value === 'object' ? JSON.stringify(value) : ''
  // 标记初始化
  const isInitRef = useRef(true)
  // type 为 'select' 时，输入框选中项
  const [selectedItem, setSelectedItem] = useState(
    type === 'select' && typeof defaultValue === 'object' ? defaultValue : null
  )
  // 搜索关键词
  const [keyword, setKeyword] = useState(
    type === 'input' && typeof defaultValue === 'object'
      ? defaultValue[labelKey]
      : ''
  )
  // 搜索结果列表
  const [result, setResult] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  // 输入框是否聚焦状态
  const [isFocus, setIsFocus] = useState(false)
  const debounceRef = useRef(null)
  const inputRef = createRef()

  /**
   * 点击选项，收起弹出层
   */
  const selectOptionHandler = useCallback(
    item => {
      onSelect && onSelect(item)
      setShowPopup(false)
      // select 类型
      if (type === 'select') {
        // 非受控：更新选中项状态
        value === undefined && setSelectedItem(item)
        return
      }
      // input 类型，并且非受控：更新关键词状态
      if (type === 'input' && value === undefined) {
        setKeyword(item[labelKey])
      }
    },
    [type, labelKey, value, onSelect]
  )

  const clearHandler = () => {
    if (disabled) return
    if (type === 'select') {
      setSelectedItem(null)
      onSelect && onSelect(null)
    } else if (type === 'input') {
      setKeyword('')
      onSelect && onSelect('')
    }
  }

  useEffect(
    () => {
      onChange && onChange(keyword)
    },
    [keyword]
  )

  // keyword 变化或者聚焦时，发起搜索
  useEffect(
    () => {
      if (!onSearch) return
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
      debounceRef.current = setTimeout(() => {
        const searchRes = onSearch(keyword)
        if (
          searchRes &&
          searchRes.constructor.name === 'Promise' &&
          typeof searchRes.then === 'function'
        ) {
          searchRes.then(res => setResult(res)).catch(e => {})
        } else if (Array.isArray(searchRes)) {
          setResult(searchRes)
        }
        setShowPopup(isFocus && !!keyword)
        debounceRef.current = null
      }, debounceTime)
    },
    [debounceTime, keyword, isFocus, onChange, onSearch]
  )

  // 监听搜索框 value 值变化
  useEffect(
    () => {
      if (isInitRef.current) {
        isInitRef.current = false
        return
      }
      const valueObject = valueString ? JSON.parse(valueString) : {}
      if (type === 'select') {
        setSelectedItem(valueObject)
        return
      }
      if (type === 'input') {
        setKeyword(valueObject[labelKey] || '')
      }
    },
    [type, labelKey, valueString]
  )

  return (
    <Trigger
      showAction='none'
      hideAction='none'
      popupClassName='dada-search-popup'
      popup={() => {
        if (result.length === 0) {
          return (
            <div className='dada-search-empty'>
              {notFoundContent || '无匹配结果'}
            </div>
          )
        }
        return result.map((item, index) => {
          // 如果有自定义渲染方法，传入：数据项、数据列表、下标
          if (optionRender && typeof optionRender === 'function') {
            const customOption = optionRender(item, result, index)
            // 自定义选项组件点击事件重载
            return React.cloneElement(customOption, {
              onMouseDown: e => {
                customOption.props.onMouseDown &&
                  customOption.props.onMouseDown(e)
                selectOptionHandler(item)
              },
            })
          }
          return (
            <div
              key={index}
              className='dada-search-option'
              onMouseDown={() => selectOptionHandler(item)}
            >
              <span className='dada-search-option-text'>{item[labelKey]}</span>
            </div>
          )
        })
      }}
      stretch={optionsWidthStretch ? 'auto' : 'sameWidth'}
      popupVisible={showPopup}
      onPopupVisibleChange={setShowPopup}
    >
      <div className={classNames('dada-search', className)} {...others}>
        <Input
          ref={inputRef}
          addonBefore={<Ico className='dada-search-addon' type='search' />}
          addonAfter={
            clearable ? (
              <Ico
                className={classNames('dada-search-clear', {
                  'dada-search-clear-hidden':
                    (type === 'input' && !keyword) ||
                    (type === 'select' &&
                      (!selectedItem || !selectedItem[labelKey])),
                })}
                type='times-circle'
                onClick={clearHandler}
              />
            ) : null
          }
          type='text'
          size={size}
          placeholder={placeholder}
          value={keyword}
          onChange={value => setKeyword(value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            // select 类型，失焦后清空 keyword
            if (type === 'select') {
              setKeyword('')
            }
            setIsFocus(false)
          }}
          disabled={disabled}
        />
        {/* select类型，selectedItem 以 onSelect 为准 */}
        {type === 'select' && selectedItem && !keyword && (
          <span
            className={classNames('dada-search-context', {
              'dada-search-context-focus': isFocus,
              'dada-search-context-clear': clearable,
            })}
            onClick={() => inputRef.current.focus()}
          >
            {selectedItem[labelKey]}
          </span>
        )}
      </div>
    </Trigger>
  )
}

export default Search
