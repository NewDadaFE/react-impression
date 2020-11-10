import classnames from 'classnames'
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import NavItem from '../NavItem'
import NavLink from '../NavLink'
import NavTitle from '../NavTitle'
import Dropdown from '../Dropdown'
import DropdownMenu from '../DropdownMenu'
import DropdownMenuItem from '../DropdownMenuItem'
import DropdownTrigger from '../DropdownTrigger'
import Button from '../Button'
import ResizeObserver from 'resize-observer-polyfill'

/**
 * 返回type映射的class
 * @param type
 * @returns {string}
 */
const getTypeClassMap = (type, stacked) => {
  if (stacked) return 'nav-normal'
  const map = {
    tab: 'nav-card',
    block: 'nav-block',
  }
  return map[type] || 'nav-normal'
}

function Nav(props) {
  const {
    type,
    stacked,
    className,
    direction,
    size,
    children,
    defaultActiveKey,
    activeKey: activedKey,
    onSelect,
    ...others
  } = props

  const [activeKey, setActiveKey] = useState(
    props.activeKey || props.defaultActiveKey
  )

  const navItemsRef = useRef([])
  const nav = useRef(null)
  const navWrapInnerRef = useRef(null)
  const [hiddenItems, setHiddenItems] = useState([]) // 需要通过 ref计算的值的汇总 通过getNavSliderStyle方法
  const [navSliderStyle, setNavSliderStyle] = useState({ width: 0, left: 0 })
  const navSliderRafRef = useRef(0)

  /**
   * 动态计算需要隐藏的项
   */
  const getHiddenItems = useCallback(() => {
    const {
      scrollLeft,
      scrollWidth,
      scrollHeight,
      scrollTop,
      clientWidth,
      clientHeight,
    } = navWrapInnerRef.current || {}

    /**
     * @param {number}client clientHeight 或者 clientWidth
     * @param {number}scrollTotal scrollHeight 或者 scrollWidth
     * @param {number}scroll scrollLeft 或者 scrollTop
     * @param {'offsetTop'｜'offsetLeft'} type
     * @returns []
     */
    const calcHiddenItems = (client, scrollTotal, scroll, type) => {
      const result = []

      if (client >= scrollTotal) return result

      let lastItemOffset = 0
      const itemWidthList = []
      // 计算每一项包含margin的宽高
      for (let i in navItemsRef.current) {
        // 取后一个元素的dom 的offset
        const { dom: nextDom } = navItemsRef.current[+i + 1] || {
          dom: { current: null },
        }
        const nextDomOffset = (nextDom.current || {})[type] || lastItemOffset

        // 当前元素包括margin的长度或者高度 = 后一个元素的offset - 当前元素的offset
        if (+i === navItemsRef.current.length - 1) {
          // 最后一个元素
          itemWidthList[i] = scrollTotal - lastItemOffset
        } else {
          itemWidthList[i] = nextDomOffset - lastItemOffset
        }

        const { dom, child } = navItemsRef.current[i]
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
    let newHiddenItems = []

    // 规则：没有完全显示就加入 hiddenItems 当中
    if (stacked) {
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
  }, [])

  /**
   * 动态计算激活滑动块的样式
   */
  const getNavSliderStyle = useCallback(
    type => {
      if (navSliderRafRef.current) {
        window.cancelAnimationFrame(navSliderRafRef.current)
      }
      navSliderRafRef.current = window.requestAnimationFrame(() => {
        const hiddenItemsKeys = hiddenItems.map(({ child }) => {
          return child.props.eventKey
        })
        if (stacked) {
          // 纵向的 滚动条slider的计算
          // 原则是没有完全显示就加入 hiddenItems 当中
          let top = 0
          let height = 0
          for (let i in navItemsRef.current) {
            const { dom, active } = navItemsRef.current[i] || {}
            if (active && dom.current && type !== 'tab') {
              const { offsetTop, clientHeight: childHeght } = dom.current
              if (!hiddenItemsKeys.length) {
                // 完全展示被激活的项
                navWrapInnerRef.current.scrollTop = offsetTop
              }
              height = childHeght
              top = offsetTop
              const newNavSliderStyle = { top, height }
              if (direction === 'left') {
                newNavSliderStyle.left = 0
              } else {
                newNavSliderStyle.right = 0
              }
              setNavSliderStyle({ ...newNavSliderStyle })
              break
            }
          }
        } else {
          // 横向的
          let left = 0
          let sliderWidth = 0
          for (let i in navItemsRef.current) {
            const { dom, active } = navItemsRef.current[i] || {}
            if (active && dom.current) {
              const { offsetLeft, clientWidth: childWidth } = dom.current
              if (!hiddenItemsKeys.length) {
                // 完全展示被激活的项
                navWrapInnerRef.current.scrollLeft = offsetLeft
              }
              sliderWidth = childWidth
              left = offsetLeft
              setNavSliderStyle({ left, width: sliderWidth })
              break
            }
          }
        }
      })
    },
    [activeKey]
  )

  // 激活项改变时，重新计算激活滑动块的样式
  useEffect(
    () => {
      getNavSliderStyle()
    },
    [activeKey]
  )

  // 监听尺寸 navWrapInner 的尺寸变化，重新计算隐藏项和滑动块的样式
  useEffect(() => {
    let ro = new ResizeObserver(() => {
      getHiddenItems()
      getNavSliderStyle()
    })
    ro.observe(navWrapInnerRef.current)
    return () => {
      ro.disconnect()
      ro = null
    }
  }, [])

  /**
   * 选中回调
   * @param eventKey
   * @returns {boolean}
   */
  const onSelectHandle = useCallback(
    eventKey => {
      const { onSelect } = props
      if (activeKey === eventKey || eventKey === undefined) {
        // 未传eventKey的选项 点击无法触发更新 和 onSelect回调
        return false
      }
      setActiveKey(eventKey)
      onSelect && onSelect(eventKey)
      return true
    },
    [activeKey]
  )

  const navStacked = stacked
    ? `nav-stacked${direction ? '-' + direction : ''}`
    : null
  const navWrapClassName = 'nav-wrap-' + type
  const navStyle = getTypeClassMap(type, stacked)
  const navSize = size ? 'nav-' + size : null

  const navChildren = useMemo(
    () => {
      let { children } = props
      children = React.Children.map(children, (child, index) => {
        if (!child) return

        let ref = React.createRef()
        navItemsRef.current[index] = { dom: ref, child }
        const { eventKey, onClick } = child.props
        const options = {
          key: index,
          ref,
          onClick: event => {
            onSelectHandle(eventKey)
            onClick && onClick(eventKey, event)
          },
        }

        if (eventKey !== undefined) {
          options.eventKey = eventKey
          if (activeKey !== undefined) {
            navItemsRef.current[index].active = eventKey === activeKey
            options.active = eventKey === activeKey
          }
        }
        return React.cloneElement(child, options)
      })
      return children
    },
    [activeKey]
  )

  return (
    <div
      className={classnames(
        'nav-wrap',
        stacked ? navStacked : navWrapClassName,
        className
      )}
      {...others}
    >
      <div
        className={classnames(
          'nav-wrap-inner',
          hiddenItems.length ? 'nav-wrap-inner-shadow' : null
        )}
        ref={navWrapInnerRef}
        onScroll={getHiddenItems}
      >
        <div ref={nav} className={classnames('nav', navStyle, navSize)}>
          {(type === 'inline' || type === 'block') && (
            <span className='nav-slider' style={navSliderStyle} />
          )}
          {navChildren}
        </div>
      </div>
      {hiddenItems.length ? (
        <Dropdown>
          <DropdownTrigger>
            <Button theme='text' icon='ellipsis-h' size={size} />
          </DropdownTrigger>
          <DropdownMenu>
            {hiddenItems.map(({ child, offset }, index) => {
              return (
                <DropdownMenuItem
                  key={child.props.key || index}
                  disabled={child.props.disabled}
                  onClick={() => {
                    stacked
                      ? (navWrapInnerRef.current.scrollTop = offset)
                      : (navWrapInnerRef.current.scrollLeft = offset)
                    onSelectHandle(child.props.eventKey)
                  }}
                >
                  {child.props.children}
                </DropdownMenuItem>
              )
            })}
          </DropdownMenu>
        </Dropdown>
      ) : null}
    </div>
  )
}

Nav.propTypes = {
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
  type: PropTypes.oneOf(['tab', 'inline', 'block']),

  /**
   * 是否纵向排列
   */
  stacked: PropTypes.bool,

  /**
   * 默认激活标签 activeKey 为undefined时 第一个选项为默认
   */
  activeKey: PropTypes.any,

  /**
   * 选中回调，参数列表：eventKey
   */
  onSelect: PropTypes.func,

  /**
   * 当纵向排列时 组件的朝向 active时 border的位置
   */
  direction: PropTypes.oneOf(['left', 'right']),

  /**
   * 尺寸
   */
  size: PropTypes.oneOf(['md', 'xs']),

  /**
   * 默认 激活的选项
   */
  defaultActiveKey: PropTypes.any,
}

Nav.defaultProps = {
  stacked: false,
  type: 'inline',
  direction: 'right',
  size: 'md',
}

Nav.Item = NavItem
Nav.Link = NavLink
Nav.Title = NavTitle

export default Nav
