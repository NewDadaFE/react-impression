import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TableColumn extends Component {
  render() {
    return React.cloneElement(React.Children.only(this.props.children))
  }
}

TableColumn.propTypes = {
  /**
   * 列数据在数据项中对应的key
   */
  prop: PropTypes.string,

  /**
   * 表格标题
   */
  label: PropTypes.string,

  /**
   * 列宽度
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * 列是否固定
   */
  fixed: PropTypes.oneOf(['left', 'right']),

  /**
   * 自定义td返回项函数
   */
  render: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /**
   * 自定义th返回项函数
   */
  renderTh: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
}
