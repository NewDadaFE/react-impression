import React, {
  Fragment,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { createPortal } from 'react-dom'
import { usePopper } from 'react-popper'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { addEventListener, contains } from '../../utils/system'

Trigger.propTypes = {
  /**
   * 触发器寄主，单个节点
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
}

Trigger.defaultProps = {
  placement: 'bottom-start',
  strategy: 'absolute',
  stretch: 'sameWidth',
  showAction: 'click',
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
  } = props
  // 弹出层显隐控制标记
  const [showPopup, setShowPopup] = useState(false)
  // popper 相关---开始
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const modifiers = useMemo(
    () => [
      {
        name: 'computeStyles',
        options: {
          adaptive: true, // true by default
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
      {
        name: 'sameWidth',
        enabled: props.stretch === 'sameWidth',
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
    ],
    []
  )
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: props.placement,
      strategy: props.strategy,
      modifiers,
    }
  )
  // popper 相关---结束

  // 监听 children 变化，更新 referenceElement
  // 使用 useMemo 可以减少页面滚动时引起的重复 clone 操作
  const Children = useMemo(
    () => {
      const childrenProps = { ref: setReferenceElement }
      const hidePopupOnMouseLeave = event => {
        children.props.onMouseLeave && children.props.onMouseLeave(event)
        setShowPopup(false)
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
          children.props.onMouseEnter && children.props.onMouseEnter(event)
          setShowPopup(true)
        }
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
    [hidePopupHandler]
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
   * 监听showPopup变化
   */
  useEffect(
    () => {
      onPopupVisibleChange(showPopup)
    },
    [showPopup, onPopupVisibleChange]
  )

  return (
    <Fragment>
      {Children}
      {createPortal(
        <div
          className={classNames('dada-trigger', props.popupClassName, {
            'dada-trigger-hidden': !showPopup,
          })}
          ref={setPopperElement}
          style={{ ...popperStyles.popper, ...style }}
          {...attributes.popper}
        >
          {typeof popup === 'function' ? popup() : popup}
        </div>,
        window.document.getElementsByTagName('body')[0]
      )}
    </Fragment>
  )
}

export default Trigger
