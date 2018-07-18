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
    children: PropTypes.any,
  }

  /**
   * 关闭attention
   */
  hideHandle = () => {
    this.setState({
      show: false,
    })
  }

  render() {
    const { theme, className, closeable, children, ...others } = this.props
    const themeClass = `attention-${theme}`
    const hiddenClass = this.state.show ? '' : 'hidden'

    return (
      <div
        {...others}
        className={classnames('attention', themeClass, hiddenClass, className)}
      >
        {children}
        {closeable && (
          <button type='button' className='close' onClick={this.hideHandle}>
            &times;
          </button>
        )}
      </div>
    )
  }
}

Attention.Link = AttentionLink
