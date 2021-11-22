import PropTypes from 'prop-types'

export const PORTAL_DEFAULT_STYLE = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
}

export const MENUITEM_PROP_TYPES = {
  /**
   * 菜单图标类型
   */
  iconType: PropTypes.string,
  /**
   * 菜单图片
   */
  img: PropTypes.string,
  /**
   * 菜单名称
   */
  title: PropTypes.string.isRequired,
  /**
   * 菜单值，定义当前菜单
   */
  value: PropTypes.string.isRequired,
  /**
   * 上级标志
   * @ignore
   */
  parentValue: PropTypes.string,
}

export const MENUITEM_DEFAULT_PROPS = {
  iconType: 'apps-o',
  img: '',
  title: '',
  value: '',
  parentValue: '',
}
