import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Image extends PureComponent {
  static propTypes = {
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
  }
  // 默认props
  static defaultProps = {
    fluid: false,
    rounded: false,
    circle: false,
    thumbnail: false,
  }
  // 渲染
  render() {
    const {
      fluid,
      rounded,
      circle,
      thumbnail,
      className,
      ...others
    } = this.props
    const classes = {
      'img-fluid': fluid,
      'img-rounded': rounded,
      'img-circle': circle,
      'img-thumbnail': thumbnail,
    }

    return <img {...others} className={classnames(classes, className)} />
  }
}
