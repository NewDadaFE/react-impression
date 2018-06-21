import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // 类型（success、warning、danger、none）
  type: PropTypes.string,
  // 回调
  onClick: PropTypes.func,
  // 按钮名字
  btnText: PropTypes.string,
  // 是否显示
  visible: PropTypes.bool,
}

export default propTypes
