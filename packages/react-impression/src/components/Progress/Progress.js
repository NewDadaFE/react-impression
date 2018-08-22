import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const getProgress = (percent, max) => {
  if (!percent || percent < 0) {
    return 0
  } else if (percent > max) {
    return max
  }
  return Math.round(percent / max * 10000) / 100.0
}

export default class Progress extends React.PureComponent {
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
     * 进度值，必填
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

    /**
     * 设置最大值
     */
    max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * 进度条宽度
     */
    strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * 是否显示进度信息
     */
    showInfo: PropTypes.bool,

    /**
     * 信息显示方式
     */
    formatter: PropTypes.func,
  }

  static defaultProps = {
    showInfo: true,
    max: 100,
    strokeWidth: 10,
    formatter: percentNumber => `${percentNumber}%`,
  }

  render() {
    const prefix = 'progress'
    const {
      theme,
      value,
      max,
      className,
      strokeWidth,
      showInfo,
      formatter,
      ...others
    } = this.props
    const themeClass = theme ? `${prefix}-${theme}` : ''
    const showInfoClass = showInfo ? `${prefix}-show-info` : ''

    const percentStyle = {
      width: `${getProgress(value, max)}%`,
      height: strokeWidth,
    }

    return (
      <div
        {...others}
        className={classnames(prefix, themeClass, showInfoClass, className)}
      >
        <div className={`${prefix}-outer`}>
          <div className={`${prefix}-inner`}>
            <div className={`${prefix}-inner-bg`} style={percentStyle} />
          </div>
        </div>
        {showInfo && (
          <span className={`${prefix}-info`}>{formatter(value)}</span>
        )}
      </div>
    )
  }
}
