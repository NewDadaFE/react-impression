import classnames from 'classnames'
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import Dropdown from '../Dropdown'
import DropdownMenu from '../DropdownMenu'
import DropdownMenuItem from '../DropdownMenuItem'
import DropdownTrigger from '../DropdownTrigger'
import Button from '../Button'
import ResizeObserver from 'resize-observer-polyfill'
import isPropValid from '@emotion/is-prop-valid'

function Tabs(props) {
  const {
    type,
    tabPosition,
    className,
    size,
    children,
    onSelect,
    ...others
  } = props

  const isVertical = tabPosition === 'left' || tabPosition === 'right'
  const showSlider = type === 'line' || type === 'block'
  const [activeKey, setActiveKey] = useState(
    props.activeKey || props.defaultActiveKey
  )

  const tabsItemsRef = useRef([])
  const tabsRef = useRef(null)
  const tabsWrapInnerRef = useRef(null)
  // 需要通过 ref计算的值的汇总 通过getNavSliderStyle方法
  const [hiddenItems, setHiddenItems] = useState([])
  const [tabsSliderStyle, setNavSliderStyle] = useState({ width: 0, left: 0 })
  const tabsSliderRafRef = useRef(0)

  /**
   * 动态计算需要隐藏的项
   */
  const getHiddenItems = useCallback(
    () => {
      const {
        scrollLeft,
        scrollWidth,
        scrollHeight,
        scrollTop,
        clientWidth,
        clientHeight,
      } = tabsWrapInnerRef.current || {}

      /**
       * @param {number}client clientHeight 或者 clientWidth
       * @param {number}scrollTotal scrollHeight 或者 scrollWidth
       * @param {number}scroll scrollLeft 或者 scrollTop
       * @param {string} type 'offsetTop'｜'offsetLeft'
       * @returns [{ child, offset }]
       */
      const calcHiddenItems = (client, scrollTotal, scroll, type) => {
        const result = []

        if (client >= scrollTotal) return result

        let lastItemOffset = 0
        const itemWidthList = []
        // 计算每一项包含margin的宽高
        for (let i in tabsItemsRef.current) {
          // 取后一个元素的dom 的offset
          const { dom: nextDom } = tabsItemsRef.current[+i + 1] || {
            dom: { current: null },
          }
          const nextDomOffset = (nextDom.current || {})[type] || lastItemOffset

          // 当前元素包括margin的长度或者高度 = 后一个元素的offset - 当前元素的offset
          if (+i === tabsItemsRef.current.length - 1) {
            // 最后一个元素
            itemWidthList[i] = scrollTotal - lastItemOffset
          } else {
            itemWidthList[i] = nextDomOffset - lastItemOffset
          }

          const { dom, child } = tabsItemsRef.current[i]
          const offset = (dom.current || {})[type]
          if (
            lastItemOffset < scroll ||
            offset > scroll + client - itemWidthList[i]
          ) {
            // 左 ｜ 上侧隐藏
            // 右 ｜ 下侧隐藏
            result.push({ child, offset: offset })
          }

          lastItemOffset = nextDomOffset
        }

        return result
      }

      // 隐藏起来的元素 reactNode
      let newHiddenItems
      // 规则：没有完全显示就加入 hiddenItems 当中
      if (isVertical) {
        newHiddenItems = calcHiddenItems(
          clientHeight,
          scrollHeight,
          scrollTop,
          'offsetTop'
        )
      } else {
        newHiddenItems = calcHiddenItems(
          clientWidth,
          scrollWidth,
          scrollLeft,
          'offsetLeft'
        )
      }

      setHiddenItems(newHiddenItems)
    },
    [isVertical]
  )

  /**
   * 动态计算激活滑动块的样式
   */
  const getNavSliderStyle = useCallback(
    () => {
      if (tabsSliderRafRef.current) {
        window.cancelAnimationFrame(tabsSliderRafRef.current)
      }
      tabsSliderRafRef.current = window.requestAnimationFrame(() => {
        const hiddenItemsKeys = hiddenItems.map(({ child }) => {
          return child.props.eventKey
        })

        for (let i in tabsItemsRef.current) {
          const { dom, active } = tabsItemsRef.current[i] || {}

          if (!active || !dom.current) continue

          const {
            offsetTop,
            offsetLeft,
            clientHeight,
            clientWidth,
          } = dom.current
          // 纵向的滑动条
          if (isVertical) {
            // 完全展示被激活的项
            if (!hiddenItemsKeys.length) {
              tabsWrapInnerRef.current.scrollTop = offsetTop
            }
            const newNavSliderStyle = {
              top: offsetTop,
              height: clientHeight,
            }
            if (tabPosition === 'right') {
              newNavSliderStyle.left = 0
            }
            if (tabPosition === 'left') {
              newNavSliderStyle.right = 0
            }
            setNavSliderStyle({ ...newNavSliderStyle })
            return
          }
          // 横向的滑动条
          // 完全展示被激活的项
          if (!hiddenItemsKeys.length) {
            tabsWrapInnerRef.current.scrollLeft = offsetLeft
          }
          setNavSliderStyle({
            left: offsetLeft,
            width: clientWidth,
          })
        }
      })
    },
    [hiddenItems, tabPosition, isVertical]
  )

  // 激活项改变时，重新计算激活滑动块的样式
  useEffect(
    () => {
      getNavSliderStyle()
    },
    [getNavSliderStyle, activeKey]
  )

  // 监听尺寸 tabsWrapInner 的尺寸变化，重新计算隐藏项和滑动块的样式
  useEffect(
    () => {
      let ro = new ResizeObserver(() => {
        getHiddenItems()
        getNavSliderStyle()
      })
      ro.observe(tabsWrapInnerRef.current)
      return () => {
        ro.disconnect()
        ro = null
      }
    },
    [getHiddenItems, getNavSliderStyle]
  )

  /**
   * 选中回调
   * @param eventKey
   * @returns {boolean}
   */
  const onSelectHandle = useCallback(
    eventKey => {
      if (activeKey === eventKey || eventKey === undefined) {
        // 未传eventKey的选项 点击无法触发更新 和 onSelect回调
        return false
      }
      setActiveKey(eventKey)
      onSelect && onSelect(eventKey)
      return true
    },
    [activeKey, onSelect]
  )

  const tabsChildren = useMemo(
    () => {
      return React.Children.map(children, (child, index) => {
        if (!child) return

        let ref = React.createRef()
        tabsItemsRef.current[index] = { dom: ref, child }
        const { eventKey, onClick } = child.props
        const options = {
          ref,
          onClick: event => {
            onSelectHandle(eventKey)
            onClick && onClick(eventKey, event)
          },
        }

        if (eventKey !== undefined) {
          options.eventKey = eventKey
          if (activeKey !== undefined) {
            tabsItemsRef.current[index].active = eventKey === activeKey
            options.active = eventKey === activeKey
          }
        }
        return React.cloneElement(child, options)
      })
    },
    [activeKey, children]
  )

  const otherDomProps = useMemo(
    () => {
      const result = {}
      for (let key in others) {
        if (others.hasOwnProperty(key) && isPropValid(key)) {
          result[key] = others[key]
        }
      }
      return result
    },
    [others]
  )

  return (
    <div
      className={classnames(
        'dada-tabs',
        `dada-tabs-${type}`,
        `dada-tabs-${tabPosition}`,
        {
          [`dada-tabs-${size}`]: size,
        },
        className
      )}
      {...otherDomProps}
    >
      <div
        ref={tabsWrapInnerRef}
        className='dada-tabs-inner'
        onScroll={getHiddenItems}
      >
        <div ref={tabsRef} className='dada-tabs-list'>
          {showSlider && (
            <span className='dada-tabs-slider' style={tabsSliderStyle} />
          )}
          {tabsChildren}
        </div>
      </div>
      {!!hiddenItems.length && (
        <Dropdown className='dada-tabs-dropdown'>
          <DropdownTrigger>
            <Button theme='text' icon='ellipsis-h' size={size} />
          </DropdownTrigger>
          <DropdownMenu>
            {hiddenItems.map(({ child, offset }, index) => {
              return (
                <DropdownMenuItem
                  key={child.key || index}
                  disabled={child.props.disabled}
                  onClick={() => {
                    isVertical
                      ? (tabsWrapInnerRef.current.scrollTop = offset)
                      : (tabsWrapInnerRef.current.scrollLeft = offset)
                    onSelectHandle(child.props.eventKey)
                  }}
                >
                  {child.props.children}
                </DropdownMenuItem>
              )
            })}
          </DropdownMenu>
        </Dropdown>
      )}
    </div>
  )
}

Tabs.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.node,

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 导航栏样式
   */
  type: PropTypes.oneOf(['card', 'line', 'block']),

  /**
   * 默认激活标签 activeKey 为undefined时 第一个选项为默认
   */
  activeKey: PropTypes.any,

  /**
   * 选中回调，参数列表：eventKey
   */
  onSelect: PropTypes.func,

  /**
   * 标签位置
   */
  tabPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),

  /**
   * 尺寸
   */
  size: PropTypes.oneOf(['md', 'sm']),

  /**
   * 默认 激活的选项
   */
  defaultActiveKey: PropTypes.any,
}

Tabs.defaultProps = {
  tabPosition: 'top',
  type: 'line',
  size: 'md',
}

export default Tabs
