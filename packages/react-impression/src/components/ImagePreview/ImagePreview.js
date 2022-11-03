import React, { useState, useRef, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Ico from '../Ico'

/**
 * 当前展示预览的区域
 * height 为当前页面高度的10/12
 * width 为当前页面的8/10
 */
const maxHeight = parseInt((window.innerHeight * 10) / 12)
const maxWidth = parseInt((window.innerWidth * 8) / 10)
const scaleMultipe = 1.2 // 缩放倍数
const minScale = 0.2 // 最小缩放
const rotateMultipe = 90 // 旋转度数
const defaultScale = 0 // 默认缩放
const defaultRotate = 0 // 默认旋转
const flexClassName = 'dada-image-swipe__item__flex'
function ImagePreview({ files = [], startPosition, duration, onClose }) {
  const count = files.length
  const trackRef = useRef()
  const [active, setActive] = useState(startPosition || 0)
  const [needChange, setNeedChange] = useState(false)
  // 偏移的距离
  const [offset, setOffset] = useState(-startPosition * maxWidth)
  // 动画是否正在进行中
  const [swiping, setSwiping] = useState(false)
  const [scale, setScale] = useState(defaultScale)
  const [rotate, setRotate] = useState(defaultRotate)
  // 当前图片是否在可移动
  const [moveIng, setMoveIng] = useState(false)
  // 当前移动图片的ref，用来记录当前移动的clientX，clientY
  const imgClientRef = useRef()

  useEffect(() => {
    const bodyDom = document.body
    bodyDom.style.setProperty('overflow', 'hidden')
    return () => {
      bodyDom.style.removeProperty('overflow')
    }
  }, [])

  useEffect(
    () => {
      try {
        const { children } = trackRef.current.children[active]
        const ImageDom = children[0]
        let zoomMultipe = scale * scaleMultipe
        if (scale === -1) {
          zoomMultipe = minScale
        }
        if (scale === 0) {
          zoomMultipe = 1
        }
        if (ImageDom && ImageDom.style) {
          const { originalwidth, originalheight } = ImageDom.dataset
          if (!originalwidth || !originalheight) return
          const width = originalwidth * zoomMultipe
          const height = originalheight * zoomMultipe
          ImageDom.style.width = width + 'px'
          ImageDom.style.height = height + 'px'
          ImageDom.style.transform = `rotate(${rotate * rotateMultipe}deg)`
          const parentElement = ImageDom.parentElement
          if (width > maxWidth || height > maxHeight) {
            parentElement.classList.remove(flexClassName)
            parentElement.scrollLeft = (width - maxWidth) / 2
            parentElement.scrollTop = (height - maxHeight) / 2
          } else {
            parentElement.classList.add(flexClassName)
          }
        }
      } catch (error) {}
    },
    [rotate, scale]
  )

  const trackStyle = useMemo(
    () => {
      return {
        width: `${count * maxWidth}px`,
        transform: `translateX(${offset}px)`,
        transitionDuration: `${needChange ? 0 : duration}ms`,
      }
    },
    [offset, needChange]
  )

  const restoreClassName = useMemo(
    () => {
      if (scale === defaultScale && rotate === defaultRotate) return ''
      return 'active'
    },
    [rotate, scale]
  )

  const setSwipeItemTransform = (path, offset) => {
    const { children } = trackRef.current
    children[path].style.transform = offset ? `translateX(${offset}px)` : ''
  }

  const getSwipeItemTransform = path => {
    const { children } = trackRef.current
    return children[path].style.transform
  }

  const handleChange = type => {
    if (swiping) return
    setSwiping(true)
    handleRestore()
    const atFirst = active === 0
    const atLast = active === count - 1
    const isNext = type === 'next'
    let nextAt = isNext ? active + 1 : active - 1
    if (nextAt >= count) {
      nextAt = 0
    }
    if (nextAt < 0) {
      nextAt = count - 1
    }
    let nextOffset = -nextAt * maxWidth
    if (atFirst) {
      const transform = getSwipeItemTransform(active)
      if (!isNext) {
        if (transform) {
          setSwipeItemTransform(active, 0)
        } else {
          nextOffset = maxWidth
          setSwipeItemTransform(nextAt, -count * maxWidth)
        }
      } else {
        if (transform) {
          setSwipeItemTransform(0, 0)
          setNeedChange(true)
          setOffset(0)
          setTimeout(() => {
            handleChange(type)
            setNeedChange(false)
          }, 0)
          return
        }
      }
    } else if (atLast) {
      const transform = getSwipeItemTransform(active)
      if (isNext) {
        if (transform) {
          setSwipeItemTransform(active, 0)
        } else {
          nextOffset = -count * maxWidth
          setSwipeItemTransform(nextAt, Math.abs(nextOffset))
        }
      } else {
        if (transform) {
          setSwipeItemTransform(active, 0)
          setNeedChange(true)
          setOffset(-(count - 1) * maxWidth)
          setTimeout(() => {
            handleChange(type)
            setNeedChange(false)
          }, 0)
          return
        }
      }
    }
    setActive(nextAt)
    setOffset(nextOffset)
  }

  const handleScale = type => {
    const isAdd = type === 'next'
    if (scale === -1 && !isAdd) return
    setScale(isAdd ? scale + 1 : scale - 1)
  }

  const handleRotate = type => {
    const isAdd = type === 'next'
    setRotate(isAdd ? rotate + 1 : rotate - 1)
  }

  const handleRestore = () => {
    try {
      const { children } = trackRef.current.children[active]
      const ImageDom = children[0]
      const { originalwidth, originalheight } = ImageDom.dataset
      ImageDom.style.transform = ''
      ImageDom.style.width = originalwidth + 'px'
      ImageDom.style.height = originalheight + 'px'
      const parentElement = ImageDom.parentElement
      parentElement.classList.add(flexClassName)
      parentElement.scrollLeft = 0
      parentElement.scrollTop = 0
      setScale(defaultScale)
      setRotate(defaultRotate)
    } catch (error) {}
  }

  const onLoad = event => {
    const { width, height } = event.target
    const imgWidth = width > maxWidth ? maxWidth : width
    const imgHeight = height > maxHeight ? maxHeight : height
    event.target.dataset.originalwidth = imgWidth
    event.target.dataset.originalheight = imgHeight
    event.target.style.width = imgWidth + 'px'
    event.target.style.height = imgHeight + 'px'
  }

  // 图片移动
  const onImageMove = event => {
    if (moveIng) {
      event && event.preventDefault()
      if (!event.target) return
      const parentElement = event.target.parentElement
      const { clientX, clientY } = event
      const {
        clientX: orignalClientX,
        clientY: orignalClientY,
      } = imgClientRef.current
      parentElement.scrollLeft =
        parentElement.scrollLeft + orignalClientX - clientX
      parentElement.scrollTop =
        parentElement.scrollTop + orignalClientY - clientY
      imgClientRef.current = {
        clientX,
        clientY,
      }
    }
  }

  return (
    <div className='dada-image-preview'>
      <div className='dada-image-preview-close' onClick={onClose}>
        <Ico type='times' />
      </div>
      <div
        className='dada-image-swipe'
        style={{ height: maxHeight, width: maxWidth }}
      >
        <div
          ref={trackRef}
          className='dada-image-swipe__track'
          style={trackStyle}
          onTransitionEnd={() => setSwiping(false)}
        >
          {files.map(file => (
            <div
              key={file.url}
              className={classnames('dada-image-swipe__item', flexClassName)}
            >
              <img
                src={file.url}
                className='dada-image-swipe__image'
                onLoad={onLoad}
                onMouseDown={event => {
                  const { width, height } = event.target
                  const canMove = width > maxWidth || height > maxHeight
                  if (canMove) {
                    const { clientX, clientY } = event
                    imgClientRef.current = {
                      clientX,
                      clientY,
                    }
                  }
                  setMoveIng(canMove)
                }}
                onMouseMove={onImageMove}
                onMouseUp={() => setMoveIng(false)}
              />
            </div>
          ))}
        </div>
        <div className='dada-image-swipe__actions'>
          {count > 1 && (
            <div
              className='dada-image-swipe__actions-arrow'
              onClick={() => handleChange('prev')}
            >
              <Ico type='angle-left' />
            </div>
          )}
          <div className='dada-image-swipe__actions-wrap'>
            <Ico type='plus-circle-o' onClick={() => handleScale('next')} />
            <Ico type='minus-circle-o' onClick={() => handleScale('prev')} />
            <span
              className={classnames(
                'dada-image-swipe__actions-restore',
                restoreClassName
              )}
              onClick={handleRestore}
            />
            <Ico type='rotate-left' onClick={() => handleRotate('prev')} />
            <Ico type='rotate-right' onClick={() => handleRotate('next')} />
          </div>
          {count > 1 && (
            <div
              className='dada-image-swipe__actions-arrow'
              onClick={() => handleChange('next')}
            >
              <Ico type='angle-right' />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

ImagePreview.propTypes = {
  /**
   * 需要预览的图片
   */
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  /**
   * 图片预览起始位置索引 默认0
   */
  startPosition: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * 动画时长，单位ms，默认300ms
   */
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * 关闭函数
   */
  onClose: PropTypes.func,
}

ImagePreview.defaultProps = {
  files: [],
  startPosition: 0,
  duration: 300,
  onClose: () => {},
}

export default ImagePreview
