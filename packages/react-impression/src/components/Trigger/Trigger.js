import React, { Fragment, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePopper } from 'react-popper'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Trigger = props => {
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
    () => React.cloneElement(props.children, { ref: setReferenceElement }),
    [props.children]
  )

  return (
    <Fragment>
      {Children}
      {createPortal(
        <div
          className={classNames('dada-trigger', props.popupClassName)}
          ref={setPopperElement}
          style={popperStyles.popper}
          {...attributes.popper}
        >
          {props.popup}
        </div>,
        document.getElementsByTagName('body')[0]
      )}
    </Fragment>
  )
}

Trigger.propTypes = {
  children: PropTypes.element,
  popup: PropTypes.node,
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
}

Trigger.defaultProps = {
  placement: 'bottom-start',
  strategy: 'absolute',
  stretch: 'sameWidth',
}

export default Trigger
