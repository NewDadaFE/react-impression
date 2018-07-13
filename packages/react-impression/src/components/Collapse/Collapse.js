import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CollapseTitle from '../CollapseTitle'
import CollapseBody from '../CollapseBody'

/**
 * Collapse 组件
 */
export default class Collapse extends PureComponent {
  constructor(props, context) {
    super(props, context)

    this.state = {
      active: props.active,
    }
  }
  // props校验
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    active: PropTypes.bool,
  }
  // 默认props
  static defaultProps = {
    active: false,
  }
  toggleItemsHandle = () => {
    this.setState({
      active: !this.state.active,
    })
  }
  // 渲染
  render() {
    let { children, className, ...others } = this.props,
      { active } = this.state

    delete others.active
    children = React.Children.map(children, child => {
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
        className={classnames('collapse', { active }, className)}
      >
        {children}
      </div>
    )
  }
}

Collapse.Title = CollapseTitle
Collapse.Body = CollapseBody
