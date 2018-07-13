import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Progress extends PureComponent {
  static propTypes = {
    /**
     * 样式
     */
    className: PropTypes.string,

    /**
     * 设置进度条样式
     */
    theme: PropTypes.oneOf(['success', 'warning', 'danger']),

    /**
     * 是否为斑马线样式
     */
    striped: PropTypes.bool,

    /**
     * 进度值，必填
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

    /**
     * 设置最大值
     */
    max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  static defaultProps = {
    max: 100,
    striped: false,
  }

  render() {
    let { theme, striped, value, max, className, ...others } = this.props,
      themeClass = theme ? `progress-${theme}` : '',
      stripedClass = striped ? 'progress-striped' : ''

    return (
      <progress
        {...others}
        value={value}
        max={max}
        className={classnames('progress', themeClass, stripedClass, className)}
      />
    )
  }
}
