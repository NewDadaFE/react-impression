import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import AttentionLink from '../AttentionLink'

export default class Attention extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      show: true,
    }
  }

  static propTypes = {
    /**
     * 主题
     */
    theme: PropTypes.oneOf(['warning', 'success', 'primary', 'danger']),

    /**
     * 是否可关闭
     */
    closeable: PropTypes.bool,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.node,
  }

  /**
   * 关闭attention
   */
  hideHandle = () => {
    this.setState({
      show: false,
    })
  }

  /**
   * 获取信息图标
   * @returns {*}
   */
  getTitleIcon = theme => {
    const themeMap = {
      primary: ['fa', 'fa-info-circle'],
      success: ['fa', 'fa-check-circle'],
      warning: ['fa', 'fa-exclamation-triangle'],
      danger: ['fa', 'fa-times-circle'],
    }
    return themeMap[theme]
  }

  render() {
    const { theme, className, closeable, children, ...others } = this.props
    const themeClass = `attention-${theme}`
    const hiddenClass = this.state.show ? '' : 'hidden'

    return (
      <div {...others} className='attention'>
        <div
          className={classnames(
            'attention-inner',
            themeClass,
            hiddenClass,
            className
          )}
        >
          <div className='attention-header'>
            <i className={classnames(this.getTitleIcon(theme))} />
          </div>
          <div className='attention-body'>{children}</div>
          {closeable && (
            <div className='attention-close' onClick={this.hideHandle}>
              关闭
            </div>
          )}
        </div>
      </div>
    )
  }
}

Attention.Link = AttentionLink
