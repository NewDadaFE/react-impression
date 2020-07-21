import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import CollapseTitle from '../CollapseTitle'
import CollapseBody from '../CollapseBody'

export default class Collapse extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    this.state = {
      active: props.active,
    }
  }

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
     * 是否是二级折叠面板
     */
    isSecondary: PropTypes.bool,

    /**
     * 是否是激活状态
     */
    active: PropTypes.bool,
  }

  static defaultProps = {
    active: false,
    isSecondary: false,
  }

  toggleItemsHandle = () => {
    this.setState({
      active: !this.state.active,
    })
  }

  render() {
    const { children, className, isSecondary, ...others } = this.props
    const { active } = this.state
    const mainClassName = isSecondary ? 'secondary-collapse' : 'collapse'

    delete others.active

    const _children = React.Children.map(children, child => {
      if (!child) {
        return child
      }

      return React.cloneElement(child, {
        onClick: this.toggleItemsHandle,
      })
    })

    return (
      <div
        {...others}
        className={classnames(mainClassName, { active }, className)}
      >
        {_children}
      </div>
    )
  }
}

Collapse.Title = CollapseTitle
Collapse.Body = CollapseBody
