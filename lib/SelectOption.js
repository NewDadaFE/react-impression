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
 * Option组件.
 */

var Option = function (_Component) {
    (0, _inherits3.default)(Option, _Component);

    //初始state

    function Option(props, context) {
        (0, _classCallCheck3.default)(this, Option);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Option).call(this, props, context));
    }
    //prop type校验

    //默认props


    (0, _createClass3.default)(Option, [{
        key: 'render',

        //渲染
        value: function render() {
            var _props = this.props;
            var active = _props.active;
            var disabled = _props.disabled;
            var onClick = _props.onClick;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['active', 'disabled', 'onClick', 'className', 'children']);


            return _react2.default.createElement(
                'li',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('select-option', { active: active, disabled: disabled }, className), onClick: onClick }),
                children
            );
        }
    }]);
    return Option;
}(_react.Component);

Option.propTypes = {
    //是否不可用
    disabled: _react2.default.PropTypes.bool,
    //自定义样式
    className: _react2.default.PropTypes.string,
    //是否选中
    active: _react2.default.PropTypes.bool,
    //value
    value: _react2.default.PropTypes.any.isRequired,
    //回调
    onClick: _react2.default.PropTypes.func
};
Option.defaultProps = {
    disabled: false,
    active: false
};
exports.default = Option;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Option, 'Option', 'src/scripts/SelectOption.js');
})();

;