import React, {
  Fragment,
  useMemo,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'
import { createPopper } from '@popperjs/core'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { addEventListener, contains } from '../../utils/system'

const debounceTime = 140

Trigger.propTypes = {
  /**
   * 弹出层的触发器，单个节点
   */
  children: PropTypes.element,
  /**
   * 弹出层内容
   */
  popup: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /**
   * 自定义弹出层className
   */
  popupClassName: PropTypes.string,
  /**
   * 弹出层位置
   */
  placement: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
  ]),
  /**
   * 弹出层定位策略
   */
  strategy: PropTypes.oneOf(['absolute', 'fixed']),
  /**
   * 弹出层宽度伸缩方式
   */
  stretch: PropTypes.oneOf(['sameWidth', 'auto']),
  /**
   * 弹出层显示触发事件的类型
   */
  showAction: PropTypes.oneOf(['none', 'hover', 'click', 'focus']),
  /**
   * 弹出层隐藏触发事件的类型
   */
  hideAction: PropTypes.oneOf(['none', 'mouseLeave', 'click', 'blur']),
  /**
   * 自定义弹出层样式
   */
  style: PropTypes.object,
  /**
   * 弹出层是否可见，用于自定义控制弹出层显隐
   */
  popupVisible: PropTypes.bool,
  /**
   * 弹出层显隐状态变化回调，参数列表：popupVisible
   */
  onPopupVisibleChange: PropTypes.func,
  /**
   * 弹出层动画
   */
  transitionName: PropTypes.oneOf(['zoom', 'scale', 'fade']),
  /**
   * 弹出层X偏移量
   */
  offsetX: PropTypes.number,
  /**
   * 弹出层Y偏移量
   */
  offsetY: PropTypes.number,
  /**
   * 弹出层阴影
   */
  popupShadow: PropTypes.oneOf(['none', 'light', 'normal', 'dark', 'darker']),
  /**
   * 弹出层外边框
   */
  popupBorder: PropTypes.bool,
  /**
   * 指示箭头是否可见
   */
  arrowVisible: PropTypes.bool,
  /**
   * 点击外部代理禁用
   */
  outsideDisabled: PropTypes.bool,
}

Trigger.defaultProps = {
  placement: 'bottom-start',
  strategy: 'absolute',
  stretch: 'sameWidth',
  showAction: 'click',
  offsetX: 0,
  offsetY: 8,
  popupShadow: 'normal',
  outsideDisabled: false,
}

function Trigger(props) {
  const {
    children,
    style,
    popup,
    showAction,
    hideAction,
    popupVisible,
    onPopupVisibleChange,
    transitionName,
    stretch,
    offsetX,
    offsetY,
    popupShadow,
    popupBorder,
    arrowVisible,
    placement,
    strategy,
    outsideDisabled,
  } = props
  // 展示动画效果，延迟隐藏弹出层
  const [delayShowPopup, setDelayShowPopup] = useState(false)
  // 弹出层显隐控制标记
  const [showPopup, setShowPopup] = useState(false)
  const debounceRef = useRef(null)

  // popper 相关---开始
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const modifiers = useMemo(
    () => {
      return [
        {
          name: 'computeStyles',
          options: {
            adaptive: true, // true by default
            gpuAcceleration: !transitionName, // true by default
          },
        },
        {
          name: 'offset',
          options: { offset: [offsetX, offsetY] },
        },
        {
          name: 'sameWidth',
          enabled: stretch === 'sameWidth',
          phase: 'beforeWrite',
          requires: ['computeStyles'],
          fn: ({ state }) => {
            state.styles.popper.width = `${state.rects.reference.width}px`
          },
          effect: ({ state }) => {
            state.elements.popper.style.width = `${
              state.elements.reference.offsetWidth
            }px`
          },
        },
        {
          name: 'arrow',
          options: {
            padding: 5, // 5px from the edges of the popper
          },
        },
      ]
    },
    [transitionName, stretch, offsetX, offsetY]
  )
  const popperInstanceRef = useRef(null)

  // 创建 popper 实例
  const create = useCallback(
    () => {
      if (
        referenceElement == null ||
        popperElement == null ||
        popperInstanceRef.current
      ) {
        return
      }
      popperInstanceRef.current = createPopper(
        referenceElement,
        popperElement,
        {
          placement,
          strategy,
          modifiers,
        }
      )
    },
    [referenceElement, popperElement, placement, strategy, modifiers]
  )

  // 销毁 popper 实例
  const destroy = useCallback(() => {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.destroy()
      popperInstanceRef.current = null
    }
  }, [])

  const {
    styles: popperStyles = {},
    attributes = {},
  } = popperInstanceRef.current ? popperInstanceRef.current.state : {}
  // popper 相关---结束

  const popoverMouseLeave = () => {
    if (
      (showAction === 'hover' && !hideAction) ||
      hideAction === 'mouseLeave'
    ) {
      debounceRef.current = setTimeout(() => {
        setShowPopup(false)
        debounceRef.current = null
      }, debounceTime)
    }
  }

  const popoverMouseEnter = () => {
    if (
      (showAction === 'hover' && !hideAction) ||
      hideAction === 'mouseLeave'
    ) {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
        debounceRef.current = null
      }
    }
  }

  // 监听 children 变化，更新 referenceElement
  // 使用 useMemo 可以减少页面滚动时引起的重复 clone 操作
  const Children = useMemo(
    () => {
      const childrenProps = {
        ref: childRef => {
          setReferenceElement(childRef)
          // 处理宿主元素传入 ref 的情况
          if (typeof children.ref === 'function') {
            children.ref(childRef)
          }
        },
      }
      const hidePopupOnMouseLeave = event => {
        event.persist()
        debounceRef.current = setTimeout(() => {
          children.props.onMouseLeave && children.props.onMouseLeave(event)
          setShowPopup(false)
          debounceRef.current = null
        }, debounceTime)
      }
      const hidePopupOnBlur = event => {
        children.props.onBlur && children.props.onBlur(event)
        setShowPopup(false)
      }
      // 处理弹出层显示逻辑
      if (showAction === 'focus') {
        childrenProps.onFocus = event => {
          children.props.onFocus && children.props.onFocus(event)
          setShowPopup(true)
        }
        if (!hideAction) {
          childrenProps.onBlur = hidePopupOnBlur
        }
      } else if (showAction === 'hover') {
        childrenProps.onMouseEnter = event => {
          if (debounceRef.current) {
            clearTimeout(debounceRef.current)
            debounceRef.current = null
          }
          children.props.onMouseEnter && children.props.onMouseEnter(event)
          setShowPopup(true)
        }
        // 没有指定隐藏触发事件，使用默认事件：鼠标移除️
        if (!hideAction) {
          childrenProps.onMouseLeave = hidePopupOnMouseLeave
        }
      } else if (showAction === 'click') {
        childrenProps.onClick = event => {
          children.props.onClick && children.props.onClick(event)
          if (hideAction === 'click') {
            setShowPopup(oldShowPopup => !oldShowPopup)
          } else {
            setShowPopup(true)
          }
        }
      }
      // 处理弹出层隐藏逻辑
      if (hideAction === 'mouseLeave') {
        // 鼠标移出弹出层，会注册隐藏弹出层的延迟事件，显示触发事件不是hover时，
        // 需要特殊处理目标元素的鼠标移入事件，来取消移出弹出层时注册的事件
        if (showAction !== 'hover') {
          childrenProps.onMouseEnter = event => {
            if (debounceRef.current) {
              clearTimeout(debounceRef.current)
              debounceRef.current = null
            }
            children.props.onMouseEnter && children.props.onMouseEnter(event)
          }
        }
        childrenProps.onMouseLeave = hidePopupOnMouseLeave
      } else if (hideAction === 'blur') {
        childrenProps.onBlur = hidePopupOnBlur
      } else if (hideAction === 'click' && showAction !== 'click') {
        childrenProps.onClick = event => {
          children.props.onClick && children.props.onClick(event)
          setShowPopup(false)
        }
      }

      return React.cloneElement(children, childrenProps)
    },
    [showAction, hideAction, children]
  )

  /**
   * 隐藏弹出层
   */
  const hidePopupHandler = useCallback(
    event => {
      if (
        !contains(referenceElement, event.target) &&
        !contains(popperElement, event.target)
      ) {
        setShowPopup(false)
      }
    },
    [referenceElement, popperElement]
  )

  /**
   * 点击外部回调
   */
  useEffect(
    () => {
      if (outsideDisabled) return

      let clickOutsideHandler = addEventListener(
        window.document,
        'mousedown',
        hidePopupHandler
      )

      return () => {
        clickOutsideHandler.remove()
        clickOutsideHandler = null
      }
    },
    [outsideDisabled, hidePopupHandler]
  )

  /**
   * 同步弹出层显示隐藏状态
   */
  useEffect(
    () => {
      setShowPopup(oldShowPopup => {
        return popupVisible === undefined ? oldShowPopup : popupVisible
      })
    },
    [popupVisible]
  )

  /**
   * 监听showPopup变化，同步弹出层显示状态
   */
  useEffect(
    () => {
      onPopupVisibleChange && onPopupVisibleChange(showPopup)
    },
    [showPopup, onPopupVisibleChange]
  )

  /**
   * 监听 showPopup/delayShowPopup 变化
   * 管理 popper 实例的创建和销毁
   */
  useEffect(
    () => {
      if (showPopup) {
        create()
      } else if (!delayShowPopup) {
        destroy()
      }
    },
    [create, destroy, showPopup, delayShowPopup]
  )

  useEffect(() => destroy, [destroy])

  // 判断宿主元素宽高变化，主动更新弹出层位置
  // useEffect 监听元素宽高，因为宽高变量不是state，所以不会触发render
  const isReferenceResize = useIsDomResize(referenceElement)

  if (isReferenceResize) {
    popperInstanceRef.current && popperInstanceRef.current.update()
  }

  return (
    <Fragment>
      {Children}
      {createPortal(
        <div
          className={classNames('dada-trigger', props.popupClassName)}
          ref={setPopperElement}
          style={{ ...popperStyles.popper, ...style }}
          {...attributes.popper}
          onMouseEnter={popoverMouseEnter}
          onMouseLeave={popoverMouseLeave}
        >
          <div
            className={classNames('dada-trigger-inner', {
              [`dada-shadow-${popupShadow}`]: popupShadow !== 'none',
              'dada-trigger-popup-border': popupBorder,
              [`dada-trigger-popup-${transitionName}-enter`]:
                transitionName && showPopup,
              [`dada-trigger-popup-${transitionName}-leave`]:
                transitionName && !showPopup,
              hidden:
                !transitionName || showPopup ? !showPopup : !delayShowPopup,
            })}
            onAnimationEnd={() => {
              if (!transitionName) return
              setDelayShowPopup(showPopup)
            }}
          >
            {typeof popup === 'function' ? popup() : popup}
            {arrowVisible && (
              <div
                className='dada-trigger-arrow'
                style={popperStyles.arrow}
                data-popper-arrow
              />
            )}
          </div>
        </div>,
        window.document.getElementsByTagName('body')[0]
      )}
    </Fragment>
  )
}

export default Trigger

function useIsDomResize(element) {
  const elementSizeRef = useRef({
    lastWidth: 0,
    lastHeight: 0,
    lastTop: 0,
    lastLeft: 0,
  })
  if (!element) return false
  const { lastWidth, lastHeight, lastTop, lastLeft } = elementSizeRef.current
  const { width, height, top, left } = element.getBoundingClientRect()
  if (
    lastWidth !== width ||
    lastHeight !== height ||
    lastTop !== top ||
    lastLeft !== left
  ) {
    elementSizeRef.current = {
      lastWidth: width,
      lastHeight: height,
      lastTop: top,
      lastLeft: left,
    }
    return true
  }
  return false
}
