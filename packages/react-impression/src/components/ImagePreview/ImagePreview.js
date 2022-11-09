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
  /**
   * 是否需要改变，主要最对轮播的最后一张和第一张
   * 如果为true的话，把轮播的动画时间设置为0
   * false的话，轮播的时间为duration
   */
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
        // 获取当前激活的dom
        const { children } = trackRef.current.children[active]
        // 找到当前激活dom下的图片，通过对图片进行放大旋转
        const ImageDom = children[0]
        let zoomMultipe = scale * scaleMultipe
        if (scale === -1) {
          zoomMultipe = minScale
        }
        if (scale === 0) {
          zoomMultipe = 1
        }
        if (ImageDom && ImageDom.style) {
          // 获取到图片的原始宽高，在原始大小的基础上进行放大缩小
          const { originalwidth, originalheight } = ImageDom.dataset
          if (!originalwidth || !originalheight) return
          const width = originalwidth * zoomMultipe
          const height = originalheight * zoomMultipe
          ImageDom.style.width = width + 'px'
          ImageDom.style.height = height + 'px'
          ImageDom.style.transform = `rotate(${rotate * rotateMultipe}deg)`
          const parentElement = ImageDom.parentElement
          /**
           * 判断放大后的图片是否超出容器的宽高，如果超出居中放大
           * 没有超出的话居中显示，添加居中class flexClassName
           */
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

  /**
   * 外层容器的样式，通过对容器样式的transform进行改变，来实现轮播效果
   */
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

  /**
   * 图片样式初始化是否可以点击
   */
  const restoreClassName = useMemo(
    () => {
      if (scale === defaultScale && rotate === defaultRotate) return ''
      return 'active'
    },
    [rotate, scale]
  )

  /**
   * 设置轮播Item移动
   * @param {*} path 当前索引
   * @param {*} offset 偏移的距离
   */
  const setSwipeItemTransform = (path, offset) => {
    const { children } = trackRef.current
    children[path].style.transform = offset ? `translateX(${offset}px)` : ''
  }

  /**
   * 获取当前轮播Item的transform
   * @param {*} path
   */
  const getSwipeItemTransform = path => {
    const { children } = trackRef.current
    return children[path].style.transform
  }

  const handleChange = type => {
    if (swiping) return
    setSwiping(true)
    // 轮播前需要把当前的图片恢复默认值
    handleRestore()
    // 当前是否是第一张
    const atFirst = active === 0
    // 当前是否是最后一张
    const atLast = active === count - 1
    // 是否是点击下一张
    const isNext = type === 'next'
    let nextAt = isNext ? active + 1 : active - 1
    // 如果下一个轮播的索引大于等于轮播图的数量，将索引设置为第一个，即为0
    if (nextAt >= count) {
      nextAt = 0
    }
    // 如果下一个轮播的索引小于0，将索引设置为轮播图的最后一个，即为轮播图数量 - 1
    if (nextAt < 0) {
      nextAt = count - 1
    }
    // 容器的偏移量，即为当前索引 * 容器的宽
    let nextOffset = -nextAt * maxWidth
    if (atFirst) {
      // 获取第一个的Item的transform
      const transform = getSwipeItemTransform(active)
      // 点击上一张
      if (!isNext) {
        /**
         * 如果transform有值，证明当前索引的Item偏移过，将当前索引的偏移量设置为0
         * 如果没有值，将最后的一张图放在最左边，设置其偏移量的轮播图的数量 * 容器的宽
         */
        if (transform) {
          setSwipeItemTransform(active, 0)
        } else {
          nextOffset = maxWidth
          setSwipeItemTransform(nextAt, -count * maxWidth)
        }
      } else {
        if (transform) {
          // 点击下一张需要把第一张的偏移设置为0，同是设置needChange为true
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
      // 下一张操作
      if (isNext) {
        if (transform) {
          // 把当前页的偏移设置为0
          setSwipeItemTransform(active, 0)
        } else {
          // 如果是最后一张，需要把第一张的偏移量设置为轮播图的长度 * 容器的宽
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
      // 设置图片的宽高为初始化，并且设置Item的滚动为0
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
    // 监听图片加载完成后，设置图片的宽高
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
