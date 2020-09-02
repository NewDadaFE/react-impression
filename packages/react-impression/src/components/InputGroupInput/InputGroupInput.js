import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class InputGroupInput extends React.PureComponent {
  static propTypes = {
    /**
     * 设置输入框组内 input 类型，可选值为 text
     */
    type: PropTypes.string,

    /**
     * 设置占位符
     */
    placeholder: PropTypes.string,

    /**
     * 自定义样式
     */
    className: PropTypes.string,
  }

  static defaultProps = {
    type: 'text',
  }
  getValue() {
    return this.refMain ? this.refMain.value : undefined
  }
  setValue(value) {
    this.refMain && (this.refMain.value = value)
  }

  render() {
    const { type, className, placeholder, ...others } = this.props

    return (
      <div className='dada-input-group-input'>
        <input
          {...others}
          type={type}
          className={classnames('form-control', 'input-field', className)}
          placeholder={placeholder}
          ref={ref => (this.refMain = ref)}
        />
        <div className='dada-input-border' />
      </div>
    )
  }
}

InputGroupInput.getValue = ref => {
  if (!ref) return undefined

  return ref.getVaule()
}

InputGroupInput.setValue = (ref, value) => {
  if (!ref) return

  ref.setValue(value)
}
