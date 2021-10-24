import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default function TableColumn(props) {
  return React.cloneElement(React.Children.only(props.children))
}

TableColumn.propTypes = {
  /**
   * 列数据在数据项中对应的key，
   */
  prop: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /**
   * 列宽度
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * 列是否固定
   */
  fixed: PropTypes.oneOf(['left', 'right']),

  /**
   * 自定义td返回项
   */
  Cell: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /**
   * 自定义th返回项
   */
  Header: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.string,
  ]),

  /**
   * 是否禁止列触发onClickTr函数
   */
  exclude: PropTypes.bool,
}
