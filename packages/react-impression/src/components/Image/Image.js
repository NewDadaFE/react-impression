import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const MODE_TO_STYLE_MAP = {
  // 默认：撑满元素
  scaleToFill: 'img-scale-to-fill',
  // 长边显示
  aspectFit: 'img-aspect-fit',
  // 短边显示
  aspectFill: 'img-aspect-fill',
  // 宽度指定，高度等比例变化
  widthFix: 'img-width-fix',
  // 高度指定，高度等比例变化
  heightFix: 'img-height-fix',
  // 不缩放图片，显示顶部
  top: 'img-top',
  // 不缩放图片，显示左上角
  'top left': 'img-top-left',
  // 不缩放图片，显示右上角
  'top right': 'img-top-right',
  // 不缩放图片，显示底部
  bottom: 'img-bottom',
  // 不缩放图片，显示左下角
  'bottom left': 'img-bottom-left',
  // 不缩放图片，显示右下角
  'bottom right': 'img-bottom-right',
  // 不缩放图片，显示中间区域
  center: 'img-center',
  // 不缩放图片，显示左边
  left: 'img-left',
  // 不缩放图片，显示右边
  right: 'img-right',
}

function Image(props) {
  const {
    className = '',
    style,
    src,
    mode,
    width,
    height,
    fluid,
    rounded,
    circle,
    thumbnail,
    ...others
  } = props

  const wrapStyle = { ...style }
  if (width) {
    wrapStyle.width = width
  }
  if (height) {
    wrapStyle.height = height
  }

  return (
    <div
      className={classnames(className, 'img', {
        'img-fluid': fluid,
        'img-rounded': rounded,
        'img-circle': circle,
        'img-thumbnail': thumbnail,
      })}
      style={wrapStyle}
      {...others}
    >
      {mode ? (
        <div
          className={classnames('img-mode', MODE_TO_STYLE_MAP[mode])}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ) : (
        <img src={src} alt={src} />
      )}
    </div>
  )
}

Image.propTypes = {
  /**
   * 图片是否自适应
   */
  fluid: PropTypes.bool,

  /**
   * 图片是否圆角
   */
  rounded: PropTypes.bool,

  /**
   * 图片是否为圆形
   */
  circle: PropTypes.bool,

  /**
   * 图片是否为缩略图
   */
  thumbnail: PropTypes.bool,

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 图片地址
   */
  src: PropTypes.string,

  /**
   * 图片显示模式
   */
  mode: PropTypes.oneOf([
    'scaleToFill',
    'aspectFit',
    'aspectFill',
    'widthFix',
    'heightFix',
    'top',
    'top left',
    'top right',
    'bottom',
    'bottom left',
    'bottom right',
    'center',
    'left',
    'right',
  ]),

  /**
   * 图片宽度
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * 图片高度
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Image
