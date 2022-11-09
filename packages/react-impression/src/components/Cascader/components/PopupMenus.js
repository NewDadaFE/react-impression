import React, { useState, useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import classnames from 'classnames'
import { usePrevious } from '../hooks/usePrevious'

const MAX_LEVEL = 4
function PopupMenus(props) {
  const {
    fieldNames,
    value,
    defaultValue,
    options,
    expandTrigger,
    onSelect,
    changeOnSelect,
    loadData,
    onOptions,
  } = props
  const [showOptions, setShowOptions] = useState([])
  const [currentPath, setCurrentPath] = useState([]) // 暂存当前显示路径
  const [selectPath, setSelectPath] = useState([]) // 当前选中路径
  const isLoading = useRef(false)
  const [lastPath = {}] = R.clone(currentPath).reverse()
  const previousValue = usePrevious(value)

  // 获取showOptions
  const getShowOptions = useCallback(
    () => {
      if (R.isEmpty(options)) return
      let initialValue = []
      if ('value' in props) {
        initialValue = props.value || []
      } else if ('defaultValue' in props) {
        initialValue = props.defaultValue || []
      }
      // 无初始值时, 初始化默认显示一列
      if (R.isEmpty(initialValue)) {
        setShowOptions([options])
        return
      }
      // value值没变时返回，不做处理
      if (R.equals(previousValue, value)) {
        return
      }
      let filterOptions = options
      let initialShowOption = [options]
      let initialPath = []
      // 当选中选项路径上选项被禁用时，则子集不展开，不反选
      let disabledLevel = MAX_LEVEL // 被禁用选项级数
      initialValue.forEach((valueItem, index) => {
        const currentOption =
          filterOptions.find(n => n[fieldNames.value] === valueItem) || {}
        if (currentOption.disabled) {
          disabledLevel = index
        }
        if (index >= disabledLevel) return
        !R.isEmpty(currentOption[fieldNames.children]) &&
          currentOption[fieldNames.children] &&
          initialShowOption.push(currentOption[fieldNames.children])
        initialPath.push(currentOption)
        filterOptions = currentOption[fieldNames.children] || []
      })
      setShowOptions(initialShowOption)
      setCurrentPath(initialPath)
      setSelectPath(initialPath)
    },
    [value, defaultValue, options, fieldNames, previousValue]
  )
  // 显示下级菜单
  const showNextLevel = async (option = {}, level) => {
    const { isLeaf = false } = option
    const path = currentPath.slice(0, level)
    path[level] = option
    setCurrentPath(path)

    // 当前为叶子节点，直接返回, 最多支持四级展示，最后一级直接返回
    if ((loadData && isLeaf) || level >= MAX_LEVEL - 1) {
      return
    }
    // 非叶子节点，并且子集不存在时，加载下一级
    if (
      loadData &&
      !isLeaf &&
      (!option[fieldNames.children] || R.isEmpty(option[fieldNames.children]))
    ) {
      isLoading.current = true
      // 先清空下一级数据
      setShowOptions([...showOptions.slice(0, level + 1)])
      const nextOption = await loadData(path)
      isLoading.current = false
      onOptions(changeTreeData(R.clone(options), path, nextOption))
      // 添加当前展示option的children值
      const currentOptions = showOptions[level]
      currentOptions.forEach(item => {
        if (item[fieldNames.value] === option[fieldNames.value]) {
          item[fieldNames.children] = nextOption
        }
      })
      // 同步options数据
      setShowOptions([...showOptions.slice(0, level + 1), nextOption])
      return
    }
    setShowOptions([
      ...showOptions.slice(0, level + 1),
      option[fieldNames.children],
    ])
  }
  // 改变子节点数据
  const changeTreeData = (options, path = [], nextOption) => {
    let j = 0
    const searchValue = (source = [], node) => {
      for (let i = 0; i < source.length; i++) {
        const item = source[i] || {}
        if (item[fieldNames.value] === node[fieldNames.value]) {
          j++
          if (j === path.length) {
            item[fieldNames.children] = nextOption
            return
          }
          searchValue(item[fieldNames.children], path[j])
        }
      }
    }
    searchValue(options, path[0])
    return options
  }
  // 选中
  const handleSelect = (option, level) => {
    const selectPath = currentPath.slice(0, level)
    selectPath.push(option)
    const values = selectPath.map(item => item[fieldNames.value])
    setCurrentPath(selectPath)
    setSelectPath(selectPath)
    onSelect(values, selectPath)
  }
  // 选项点击事件
  const handleClick = (option = {}, level, hasChildren) => {
    if (isLoading.current) return
    // 有子集 显示下一集菜单
    if (hasChildren || (!option.isLeaf && loadData && level < MAX_LEVEL - 1)) {
      showNextLevel(option, level)
    }
    // 无子集，非动态加载/父级可选/动态加载并且为叶子节点
    if (
      (!hasChildren && !loadData) ||
      changeOnSelect ||
      (option.isLeaf && loadData) ||
      level >= MAX_LEVEL - 1
    ) {
      handleSelect(option, level)
    }
  }
  useEffect(
    () => {
      getShowOptions()
    },
    [getShowOptions]
  )
  return (
    <div className='popup-menu'>
      {showOptions.map((item, level) => (
        <ul key={level} className='menu-level-ul'>
          {item.map((option, index) => {
            const isHasChildren =
              !R.isEmpty(option[fieldNames.children]) &&
              option[fieldNames.children]
            return (
              <div
                className={classnames({ disabled: option.disabled })}
                key={index}
              >
                <li
                  key={index}
                  className={classnames('menu-li', {
                    active: currentPath.includes(option),
                    'pointer-events-none': option.disabled,
                  })}
                  onMouseEnter={
                    expandTrigger === 'hover' &&
                    (isHasChildren || (!option.isLeaf && loadData))
                      ? () => showNextLevel(option, level)
                      : () => {}
                  }
                  onClick={() => handleClick(option, level, isHasChildren)}
                >
                  <span className='menu-li-text'>
                    {option[fieldNames.label]}
                  </span>
                  {(isHasChildren || (!option.isLeaf && loadData)) &&
                    level < MAX_LEVEL - 1 &&
                    (lastPath[fieldNames.value] === option[fieldNames.value] &&
                    isLoading.current ? (
                        <i className='dada-ico dada-ico-rotate-right offset-l animation-loading' />
                      ) : (
                        <i className='dada-ico dada-ico-angle-right offset-l' />
                      ))}
                </li>
              </div>
            )
          })}
        </ul>
      ))}
    </div>
  )
}
PopupMenus.propTypes = {
  /**
   * 自定义类名
   */
  className: PropTypes.string,
  /**
   * 当此项为 true 时，允许选中父级
   */
  changeOnSelect: PropTypes.bool,
  /**
   * 默认选中项
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /**
   * 次级菜单展开的方式，可选click和hover
   */
  expandTrigger: PropTypes.oneOf(['click', 'hover']),
  /**
   * 自定义options中label name children字段
   */
  fieldNames: PropTypes.object,
  /**
   * 动态加载选项
   */
  loadData: PropTypes.func,
  /**
   * 数据源
   */
  options: PropTypes.array,
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
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xs']),
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
   * 选中回调
   */
  onSelect: PropTypes.func,
  /**
   * 显示/隐藏浮层回调
   */
  onPopupVisibleChange: PropTypes.func,
  /**
   * 数据源变更函数
   */
  onOptions: PropTypes.func,
}
PopupMenus.defaultProps = {
  options: [],
  activeValue: [],
  onChange() {},
  visible: false,
  expandTrigger: 'click',
}
export default PopupMenus
