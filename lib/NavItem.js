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
 * NavItem 组件
 */

var NavItem = function (_Component) {
    (0, _inherits3.default)(NavItem, _Component);

    //构造函数

    function NavItem(props, context) {
        (0, _classCallCheck3.default)(this, NavItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NavItem).call(this, props, context));

        _this.onClickHandle = _this.onClickHandle.bind(_this);
        return _this;
    }
    //props校验

    //默认props


    (0, _createClass3.default)(NavItem, [{
        key: 'onClickHandle',

        //回调函数
        value: function onClickHandle() {
            var _props = this.props;
            var disabled = _props.disabled;
            var active = _props.active;
            var onClick = _props.onClick;
            var eventKey = _props.eventKey;

            !disabled && !active && onClick(eventKey);
        }
        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var disabled = _props2.disabled;
            var active = _props2.active;
            var eventKey = _props2.eventKey;
            var className = _props2.className;
            var children = _props2.children;
            var others = (0, _objectWithoutProperties3.default)(_props2, ['disabled', 'active', 'eventKey', 'className', 'children']);
            var childClass = {
                disabled: disabled,
                active: active
            };

            return eventKey !== undefined ? _react2.default.createElement(
                'li',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('nav-item', className), onClick: this.onClickHandle }),
                _react2.default.createElement(
                    'span',
                    { className: (0, _classnames2.default)('nav-link', childClass) },
                    children
                )
            ) : _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('nav-item', className) }),
                children
            );
        }
    }]);
    return NavItem;
}(_react.Component);

NavItem.propTypes = {
    disabled: _react.PropTypes.bool,
    active: _react.PropTypes.bool,
    eventKey: _react.PropTypes.any,
    onClick: _react.PropTypes.func,
    className: _react.PropTypes.string
};
NavItem.defaultProps = {
    disabled: false,
    active: false
};
exports.default = NavItem;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(NavItem, 'NavItem', 'src/scripts/NavItem.js');
})();

;