import React, { useState, useRef, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Image from '../Image'
import Ico from '../Ico'

/**
 * 当前展示预览的区域
 * height 为当前页面高度的10/12
 * width 为当前页面的8/10
 */
const height = parseInt((window.innerHeight * 10) / 12)
const width = parseInt((window.innerWidth * 8) / 10)
const scaleMultipe = 1.2 // 缩放倍数
const minScale = 0.2 // 最小缩放
const rotateMultipe = 90 // 旋转度数
const defaultScale = 0 // 默认缩放
const defaultRotate = 0 // 默认旋转
function ImagePreview({ files = [], startPosition, duration, onClose }) {
  const count = files.length
  const trackRef = useRef()
  const [active, setActive] = useState(startPosition || 0)
  const [needChange, setNeedChange] = useState(false)
  // 偏移的距离
  const [offset, setOffset] = useState(-startPosition * width)
  // 动画是否正在进行中
  const [swiping, setSwiping] = useState(false)
  const [scale, setScale] = useState(defaultScale)
  const [rotate, setRotate] = useState(defaultRotate)

  useEffect(
    () => {
      try {
        const { children } = trackRef.current.children[active]
        const dom = children[0]
        let scaleStyle = scale * scaleMultipe
        if (scale === -1) {
          scaleStyle = minScale
        }
        if (scale === 0) {
          scaleStyle = 1
        }
        if (dom && dom.style) {
          dom.style.transform = `scale(${scaleStyle}) rotate(${rotate *
            rotateMultipe}deg)`
        }
      } catch (error) {}
    },
    [rotate, scale]
  )

  const trackStyle = useMemo(
    () => {
      return {
        width: `${count * width}px`,
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
    let nextOffset = -nextAt * width
    if (atFirst) {
      const transform = getSwipeItemTransform(active)
      if (!isNext) {
        if (transform) {
          setSwipeItemTransform(active, 0)
        } else {
          nextOffset = width
          setSwipeItemTransform(nextAt, -count * width)
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
          nextOffset = -count * width
          setSwipeItemTransform(nextAt, Math.abs(nextOffset))
        }
      } else {
        if (transform) {
          setSwipeItemTransform(active, 0)
          setNeedChange(true)
          setOffset(-(count - 1) * width)
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
    const { children } = trackRef.current.children[active]
    const imgDom = children[0]
    imgDom.style.transform = ''
    setScale(defaultScale)
    setRotate(defaultRotate)
  }

  return (
    <div className='dada-image-preview'>
      <div className='dada-image-preview-close' onClick={onClose}>
        <Ico type='times' />
      </div>
      <div className='dada-image-swipe' style={{ height, width }}>
        <div
          ref={trackRef}
          className='dada-image-swipe__track'
          style={trackStyle}
          onTransitionEnd={() => setSwiping(false)}
        >
          {files.map(file => (
            <div key={file.url} className='dada-image-swipe__item'>
              <Image
                src={file.url}
                mode='aspectFit'
                className='dada-image-swipe__image'
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
