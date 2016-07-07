'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * NavLink 组件
 */

var NavLink = function (_Component) {
    (0, _inherits3.default)(NavLink, _Component);

    function NavLink() {
        (0, _classCallCheck3.default)(this, NavLink);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NavLink).apply(this, arguments));
    }

    (0, _createClass3.default)(NavLink, [{
        key: 'render',

        //渲染
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var className = _props.className;
            var others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            children = _react2.default.cloneElement(children, {
                className: (0, _classnames2.default)('nav-link', children.props.className),
                activeClassName: children.type.displayName === 'Link' ? 'active' : null
            });

            return _react2.default.createElement(
                'li',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('nav-item', className) }),
                children
            );
        }
        //props校验

    }]);
    return NavLink;
}(_react.Component);

NavLink.propTypes = {
    className: _react.PropTypes.string,
    children: _react.PropTypes.element.isRequired
};
exports.default = NavLink;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(NavLink, 'NavLink', 'src/scripts/NavLink.js');
})();

;