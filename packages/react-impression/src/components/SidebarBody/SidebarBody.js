import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'perfect-scrollbar'

export default class SidebarBody extends React.PureComponent {
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.node,
  }

  componentDidMount() {
    // 初始化滚动条
    // PerfectScrollbar插件bug
    // 若不延迟初始化滚动条，滚动条ps__rail-y的right值初始状态为'auto'，导致滚动条错误地居左侧显示
    // https://github.com/utatti/perfect-scrollbar/issues/715
    setTimeout(() => {
      this.scrollbar = new PerfectScrollbar(this.container, {
        suppressScrollX: true,
      })
    }, 1000)
  }

  componentWillUnmount() {
    if (this.scrollbar) {
      this.scrollbar.destroy()
      this.scrollbar = null
    }
  }

  handleUpdateScroll = () => {
    // 延迟更新滚动条
    window.requestAnimationFrame(() => {
      this.scrollbar && this.scrollbar.update()
    })
  }

  setContainerRef = element => (this.container = element)

  render() {
    const { className, children, ...others } = this.props

    return (
      <div
        ref={this.setContainerRef}
        {...others}
        className={classnames('sidebar-body', className)}
        onClick={this.handleUpdateScroll}
      >
        {children}
      </div>
    )
  }
}
