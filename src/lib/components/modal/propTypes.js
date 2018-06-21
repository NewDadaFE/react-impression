import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // 大小
  size: PropTypes.string,
  // 是否可见
  visible: PropTypes.bool,
  // 限制最大高度
  isLimitHeight: PropTypes.bool,
}

export default propTypes
