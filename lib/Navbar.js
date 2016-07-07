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

var _NavbarBrand = require('./NavbarBrand');

var _NavbarBrand2 = _interopRequireDefault(_NavbarBrand);

var _NavbarSidebarTitle = require('./NavbarSidebarTitle');

var _NavbarSidebarTitle2 = _interopRequireDefault(_NavbarSidebarTitle);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Navbar 组件
 */

var Navbar = function (_Component) {
    (0, _inherits3.default)(Navbar, _Component);

    //构造函数

    function Navbar(props, context) {
        (0, _classCallCheck3.default)(this, Navbar);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Navbar).call(this, props, context));
    }
    //props校验


    (0, _createClass3.default)(Navbar, [{
        key: 'render',

        //渲染
        value: function render() {
            var _props = this.props;
            var style = _props.style;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['style', 'className', 'children']);
            var styleClass = 'navbar-' + style;

            return _react2.default.createElement(
                'nav',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('navbar', styleClass, className) }),
                children
            );
        }
    }]);
    return Navbar;
}(_react.Component);

Navbar.propTypes = {
    style: _react.PropTypes.string
};
exports.default = Navbar;


Navbar.Brand = _NavbarBrand2.default;
Navbar.SidebarTitle = _NavbarSidebarTitle2.default;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Navbar, 'Navbar', 'src/scripts/Navbar.js');
})();

;