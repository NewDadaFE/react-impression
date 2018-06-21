import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // 类型
  type: PropTypes.string,
  // 确定按钮
  okText: PropTypes.string,
  // 取消按钮
  cancelText: PropTypes.string,
  // 确定按钮点击
  onOkClick: PropTypes.func,
  // 取消按钮点击
  onCancelClick: PropTypes.func,
  // 是否显示
  visible: PropTypes.bool,
}

export default propTypes
