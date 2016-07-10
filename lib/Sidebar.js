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

var _SidebarFooter = require('./SidebarFooter');

var _SidebarFooter2 = _interopRequireDefault(_SidebarFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sidebar 组件
 */

var Sidebar = function (_Component) {
    (0, _inherits3.default)(Sidebar, _Component);

    function Sidebar() {
        (0, _classCallCheck3.default)(this, Sidebar);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Sidebar).apply(this, arguments));
    }

    (0, _createClass3.default)(Sidebar, [{
        key: 'render',

        //渲染
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var className = _props.className;
            var others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);


            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('sidebar', className) }),
                children
            );
        }
        //props校验

    }]);
    return Sidebar;
}(_react.Component);

Sidebar.propTypes = {
    className: _react.PropTypes.string
};
exports.default = Sidebar;


Sidebar.Footer = _SidebarFooter2.default;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Sidebar, 'Sidebar', 'src/scripts/Sidebar.js');
})();

;