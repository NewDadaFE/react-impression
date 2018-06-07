import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * InlineSelectOption组件.
 */

export default class InlineSelect extends PureComponent {
  static timeout
  static propTypes = {
    // 是否选中
    active: PropTypes.bool,
    // 自定义样式
    className: PropTypes.string,
    children: PropTypes.any,
    value: PropTypes.any,
    key: PropTypes.any,
    onClick: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }
  }

  handleClick = () => {
    const { onClick, value, children, key } = this.props

    this.setState({ clicked: true })
    clearTimeout(this.timeout)
    this.timeout = window.setTimeout(
      () => this.setState({ clicked: false }),
      500
    )

    onClick(value, children, key)
  }

  render() {
    const { active, className, children, ...others } = this.props
    const { clicked } = this.state

    return (
      <div
        {...others}
        onClick={this.handleClick}
        className={classnames('inline-select-option', className, {
          active,
          'inline-select-option-clicked': clicked,
        })}
      >
        {children}
      </div>
    )
  }
}
