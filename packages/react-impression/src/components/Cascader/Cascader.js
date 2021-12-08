import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import ReactDom from 'react-dom'
import Trigger from '../Trigger'
import Input from '../Input'
import Ico from '../Ico'
import { PopupMenus } from './components'
import * as R from 'ramda'
import classnames from 'classnames'

function Cascader(props) {
  const [popupVisible, setPopupVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [filterOption, setFilterOption] = useState([])
  const [allPath, setAllPath] = useState([])
  const [isShowClear, setIsShowClear] = useState(false)
  const {
    size,
    className,
    value,
    defaultValue,
    disabled,
    searchable,
    options,
    loadData,
    placeholder,
    style,
    clearable,
    onPopupVisibleChange,
    popupClassName,
    ...others
  } = props
  const popupInnerRef = useRef(null)
  const inputRef = useRef(null)
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  // 点击外部
  const handleClickOutside = event => {
    if (R.isNil(popupInnerRef.current) || R.isNil(inputRef.current)) {
      return false
    }
    const target = event.target
    // 组件已挂载且事件触发对象不在div内
    if (
      !ReactDom.findDOMNode(popupInnerRef.current).contains(target) &&
      !ReactDom.findDOMNode(popupInnerRef.current).contains(target) &&
      (!ReactDom.findDOMNode(inputRef.current).contains(target) &&
        !ReactDom.findDOMNode(inputRef.current).contains(target))
    ) {
      setPopupVisible(false)
      setFilterOption([])
    }
  }

  // 查询所有节点路径
  const getAllPath = useCallback(
    option => {
      const paths = []
      if (R.isEmpty(option)) {
        return paths
      }
      const fieldNames = others.fieldNames

      function findAllPath(node, pathObject) {
        const { valuePath = [], labelPath = '' } = pathObject
        const tempValuePath = R.clone(valuePath)
        tempValuePath.push(node[fieldNames.value])
        pathObject = {
          valuePath: tempValuePath,
          labelPath: `${labelPath}${labelPath ? '/' : ''}${
            node[fieldNames.label]
          }`,
        }
        if (
          !node[fieldNames.children] ||
          R.isEmpty(node[fieldNames.children])
        ) {
          paths.push(pathObject)
          return
        }
        node[fieldNames.children].forEach(item => {
          findAllPath(item, pathObject)
        })
      }

      option.forEach(treeNode => {
        findAllPath(treeNode, {})
      })
      setAllPath(paths)
    },
    [others.fieldNames, setAllPath]
  )

  const handlePopupVisibleChange = useCallback(newVisible => {
    setPopupVisible(newVisible)
  }, [])
  // 选中操作
  const handleSelect = (value, path = []) => {
    const { onChange, fieldNames, changeOnSelect } = others
    onChange && onChange(value, path)
    // 父级可选时，选中弹窗不关闭
    !changeOnSelect && setPopupVisible(false)
    setInputValue(path.map(n => n[fieldNames.label]).join('/'))
  }
  // 路径选择
  const handlePathSelect = item => {
    const { onChange } = others
    onChange && onChange(item.valuePath)
    setPopupVisible(false)
    setInputValue(item.labelPath)
  }
  // 搜索
  const handleFilter = value => {
    setInputValue(value)
    if (!value) {
      setFilterOption([])
      return
    }
    if (R.isEmpty(allPath)) {
      return
    }
    setFilterOption(allPath.filter(item => item.labelPath.indexOf(value) > -1))
  }
  // 显示清楚按钮
  const handleShowClear = () => {
    setIsShowClear(!disabled && !!inputValue)
  }

  // 同步自定义弹出层显示/隐藏状态
  useEffect(
    () => {
      setPopupVisible(!!popupVisible)
      if (!popupVisible) {
        const selectedItem =
          allPath.find(n => n.valuePath.join('/') === value.join('/')) || {}
        value && setInputValue(selectedItem.labelPath || value.join('/'))
        setFilterOption([])
      }
    },
    [popupVisible, value, allPath]
  )
  // 显示/隐藏弹窗回调
  useEffect(
    () => {
      onPopupVisibleChange && onPopupVisibleChange(popupVisible)
    },
    [popupVisible, onPopupVisibleChange]
  )
  // 可搜索时遍历所有节点路径
  useEffect(
    () => {
      // 不可搜索时不做遍历
      // if (!searchable) {
      //   return
      // }
      getAllPath(options)
    },
    [options, searchable, getAllPath]
  )
  useEffect(
    () => {
      let initialValue = []
      if ('value' in props) {
        initialValue = value || []
      } else if ('defaultValue' in props) {
        initialValue = defaultValue || []
      }
      const valuelength = initialValue.length
      const selectedItem =
        allPath.find(
          n =>
            n.valuePath.slice(0, valuelength).join('/') ===
            initialValue.join('/')
        ) || {}
      setInputValue(
        selectedItem.labelPath
          ? selectedItem.labelPath
            .split('/')
            .slice(0, valuelength)
            .join('/')
          : initialValue.join('/')
      )
    },
    [value, defaultValue, allPath]
  )
  return (
    <>
      <Trigger
        showAction='none'
        hideAction='none'
        stretch='auto'
        popup={
          <div
            ref={popupInnerRef}
            className={classnames(popupClassName, 'cascader-popup')}
          >
            {searchable && inputValue ? (
              <div className='popup-menu'>
                {!R.isEmpty(filterOption) ? (
                  <ul className='menu-level-ul'>
                    {filterOption.map((item, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => handlePathSelect(item)}
                          className={classnames('menu-li', {
                            active: R.equals(value, item.valuePath),
                            'pointer-events-none': item.disabled,
                          })}
                        >
                          <span className='menu-li-text'>{item.labelPath}</span>
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  <div className='select-empty'>暂无数据</div>
                )}
              </div>
            ) : R.isEmpty(options) ? (
              <div className='select-empty'>暂无数据</div>
            ) : (
              <PopupMenus
                {...others}
                key={popupVisible}
                onSelect={handleSelect}
                value={value}
                defaultValue={defaultValue}
                options={options}
                loadData={loadData}
              />
            )}
          </div>
        }
        onPopupVisibleChange={handlePopupVisibleChange}
        popupVisible={popupVisible}
        offsetY={10}
      >
        <div
          ref={inputRef}
          className={classnames('cascader-select', `cascader-select-${size}`)}
          onMouseEnter={handleShowClear}
          onMouseLeave={() => setIsShowClear(false)}
        >
          {/* {popupVisible && searchable && value && ( */}
          {/*  <div className='select-placeholder-xs'>{value.join('/')}</div> */}
          {/* )} */}
          <Input
            style={style}
            className={className}
            size={size}
            addonAfter={
              !isShowClear || !clearable ? (
                <Ico type={popupVisible ? 'angle-up' : 'angle-down'} />
              ) : null
            }
            onFocus={() => {
              setPopupVisible(true)
              searchable && setInputValue('')
            }}
            value={inputValue}
            onChange={handleFilter}
            disabled={disabled}
            placeholder={placeholder}
            readOnly={!searchable || !!loadData}
          />
          {isShowClear && clearable && (
            <Ico
              type='times-circle'
              className='cascader-select-addon'
              onClick={() => props.onChange([], [])}
            />
          )}
        </div>
      </Trigger>
    </>
  )
}

Cascader.propTypes = {
  /**
   * 自定义类名
   */
  className: PropTypes.string,
  /**
   * 当此项为 true 时，允许选中父级
   */
  changeOnSelect: PropTypes.bool,
  /**
   * 默认选中项, value存在时优先取value值
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /**
   * 禁用
   */
  disabled: PropTypes.bool,
  /**
   * 次级菜单展开的方式，可选click和hover
   */
  expandTrigger: PropTypes.oneOf(['click', 'hover']),
  /**
   * 自定义options中label name children字段
   */
  fieldNames: PropTypes.object,
  /**
   * 用于动态加载选项，无法与 searchable 一起使用，返回下一级options
   */
  loadData: PropTypes.func,
  /**
   * 数据源
   */
  options: PropTypes.array,
  /**
   * 数据源变更函数, 只有动态加载选项时需要同步options
   */
  onOptions: PropTypes.func,
  /**
   * 输入框占位文本
   */
  placeholder: PropTypes.string,
  /**
   *  自定义浮层类名
   */
  popupClassName: PropTypes.string,
  /**
   * 是否可搜索
   */
  searchable: PropTypes.bool,
  /**
   * 输入框尺寸
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  /**
   * 自定义样式
   */
  style: PropTypes.object,
  /**
   * 当前选中值
   */
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /**
   * 选中回调 参数；列表 value, path，搜索选中情况下，只返回value
   */
  onChange: PropTypes.func,
  /**
   * 显示/隐藏浮层回调
   */
  onPopupVisibleChange: PropTypes.func,
  /**
   * 是否可清除
   */
  clearable: PropTypes.bool,
}
Cascader.defaultProps = {
  expandTrigger: 'click',
  fieldNames: { label: 'label', value: 'value', children: 'children' },
  options: [],
  searchable: false,
  size: 'md',
  changeOnSelect: false,
  clearable: false,
  placeholder: '请选择',
  disabled: false,
  // value: [],
}

export default Cascader
