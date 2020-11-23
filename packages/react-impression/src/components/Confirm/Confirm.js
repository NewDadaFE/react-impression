import classnames from 'classnames'
import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import isPropValid from '@emotion/is-prop-valid'

const disableScroll = () => {
  const documentBody = document.body

  if (documentBody) {
    documentBody.style.setProperty('overflow', 'hidden')
  }
}

const enableScroll = () => {
  const documentBody = document.body

  if (documentBody) {
    documentBody.style.removeProperty('overflow')
  }
}

function Confirm(props) {
  const {
    type,
    okText,
    cancelText,
    onOkClick,
    onCancelClick,
    className,
    children,
    title,
    ...others
  } = props

  let addonClassNames
  switch (type) {
    case 'info':
      addonClassNames = 'dada-ico-question-circle text-primary'
      break
    case 'danger':
      addonClassNames = 'dada-ico-exclamation-circle text-danger'
      break
    default:
      addonClassNames = 'dada-ico-exclamation-circle text-warning'
  }

  useEffect(() => {
    disableScroll()
    return enableScroll
  }, [])

  const otherDomProps = useMemo(
    () => {
      const result = {}
      for (let key in others) {
        if (others.hasOwnProperty(key) && isPropValid(key)) {
          result[key] = others[key]
        }
      }
      return result
    },
    [others]
  )

  return (
    <div className={classnames('confirm', otherDomProps)}>
      <div {...others} className='confirm-dialog'>
        <div className='confirm-addon'>
          <i className={classnames('dada-ico dada-ico-xl', addonClassNames)} />
        </div>
        <div className='confirm-body'>
          {title && <div className='confirm-title'>{title}</div>}
          <div className='confirm-content'>{children}</div>
        </div>
        <div className='confirm-footer'>
          <Button theme='secondary' size='sm' onClick={onCancelClick}>
            {cancelText}
          </Button>
          <Button theme='primary' size='sm' onClick={onOkClick}>
            {okText}
          </Button>
        </div>
      </div>
    </div>
  )
}
Confirm.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.node,

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 类型
   */
  type: PropTypes.oneOf(['warning', 'info', 'danger']),

  /**
   * 确定按钮内容
   */
  okText: PropTypes.string,

  /**
   * 取消按钮内容
   */
  cancelText: PropTypes.string,

  /**
   * 确定按钮点击
   */
  onOkClick: PropTypes.func,

  /**
   * 取消按钮点击
   */
  onCancelClick: PropTypes.func,

  /**
   * 标题
   */
  title: PropTypes.string,
}
Confirm.defaultProps = {
  type: 'warning',
  okText: '确定',
  cancelText: '取消',
}
export default Confirm
