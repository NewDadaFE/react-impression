import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types' // import InputGroupAddon from './InputGroupAddon';

/**
 * InputGroup组件.
 */
export default class InputGroupInput extends PureComponent {
  // props校验
  static propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
  }
  // 默认props
  static defaultProps = {
    type: 'text',
  }
  getValue() {
    return this.refMain ? this.refMain.value : undefined
  }
  setValue(value) {
    this.refMain && (this.refMain.value = value)
  }
  // 渲染
  render() {
    let { type, className, placeholder, ...others } = this.props

    return (
      <input
        {...others}
        type={type}
        className={classnames('form-control', className)}
        placeholder={placeholder}
        ref={ref => (this.refMain = ref)}
      />
    )
  }
}

// getValue
InputGroupInput.getValue = ref => {
  if (!ref) return undefined

  return ref.getVaule()
}

// setValue
InputGroupInput.setValue = (ref, value) => {
  if (!ref) return

  ref.setValue(value)
}
