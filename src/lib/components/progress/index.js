import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * 进度条组件.
 */

const getProgress = percent => {
  if (!percent || percent < 0) {
    return 0
  } else if (percent > 100) {
    return 100
  }
  return percent
}

export default class Progress extends PureComponent {
  // prop type校验
  static propTypes = {
    className: PropTypes.string,
    // 样式
    theme: PropTypes.string,
    // 斑马线
    striped: PropTypes.bool,
    // 值
    value: PropTypes.number,
    // progress 宽度
    strokeWidth: PropTypes.number,
    // 是否显示进度信息
    showInfo: PropTypes.bool,
    // 信息显示方式，function
    formatter: PropTypes.func,
  }

  // 默认props
  static defaultProps = {
    striped: false,
    showInfo: true,
    formatter: percentNumber => `${percentNumber}%`,
  }

  // 渲染
  render() {
    const prefix = 'progress'
    let {
        theme,
        striped,
        value,
        className,
        strokeWidth,
        showInfo,
        formatter,
        ...others
      } = this.props,
      themeClass = theme ? `${prefix}-${theme}` : '',
      stripedClass = striped ? `${prefix}-striped` : '',
      showInfoClass = showInfo ? `${prefix}-show-info` : ''

    const percentStyle = {
      width: `${getProgress(value)}%`,
      height: strokeWidth || 12,
    }

    return (
      <div
        {...others}
        className={classnames(
          prefix,
          themeClass,
          stripedClass,
          showInfoClass,
          className
        )}
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
