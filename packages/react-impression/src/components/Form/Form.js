import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from '../FormGroup'
import FormControl from '../FormControl'

export default class Form extends React.PureComponent {
  static propTypes = {
    /**
     * 排列方向
     */
    type: PropTypes.string,

    /**
     * 是否分列
     */
    grid: PropTypes.bool,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.node,
  }
  static defaultProps = {
    type: 'inline',
    grid: false,
  }
  render() {
    const { type, grid, className, children, ...others } = this.props
    const typeClass = type ? `form-${type}` : null

    return (
      <form
        {...others}
        className={classnames(typeClass, { row: grid }, className)}
      >
        {children}
      </form>
    )
  }
}

Form.Group = FormGroup
Form.Control = FormControl
