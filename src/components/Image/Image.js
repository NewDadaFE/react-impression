import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 * Image组件
 */
export default class Image extends PureComponent {
  // prop type校验
  static propTypes = {
    // 形状（fluid、rounded、circle、thumbnail）
    fluid: PropTypes.bool,
    rounded: PropTypes.bool,
    circle: PropTypes.bool,
    thumbnail: PropTypes.bool,
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
    let {
        fluid,
        rounded,
        circle,
        thumbnail,
        className,
        ...others
      } = this.props,
      classes = {
        'img-fluid': fluid,
        'img-rounded': rounded,
        'img-circle': circle,
        'img-thumbnail': thumbnail,
      }

    return <img {...others} className={classnames(classes, className)} />
  }
}
