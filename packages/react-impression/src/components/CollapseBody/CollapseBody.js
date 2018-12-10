import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

class CollapseBody extends React.PureComponent {
  static propTypes = {
    /**
     * 子组件
     */
    children: PropTypes.node,

    /**
     * 自定义样式
     */
    className: PropTypes.string,
    /**
     * 是否展开状态
     */
    active: PropTypes.bool,
  }

  get childHeight() {
    if (this.container) {
      const child = this.container.children[0]
      return child ? child.offsetHeight : 0
    }
    return 0
  }

  setContainerRef = element => (this.container = element)

  render() {
    let { className, children, active, ...others } = this.props
    delete others.onClick
    return (
      <div
        {...others}
        ref={this.setContainerRef}
        className={classnames('collapse-body', className)}
        style={{ maxHeight: active ? this.childHeight : 0 }}
      >
        {children}
      </div>
    )
  }
}

export default CollapseBody
