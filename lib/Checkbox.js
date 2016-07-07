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
 * Checkbox 组件.
 */

var Checkbox = function (_Component) {
    (0, _inherits3.default)(Checkbox, _Component);

    function Checkbox() {
        (0, _classCallCheck3.default)(this, Checkbox);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Checkbox).apply(this, arguments));
    }

    (0, _createClass3.default)(Checkbox, [{
        key: 'render',

        //渲染

        //props校验
        value: function render() {
            var _props = this.props;
            var value = _props.value;
            var checked = _props.checked;
            var defaultChecked = _props.defaultChecked;
            var disabled = _props.disabled;
            var className = _props.className;
            var onChange = _props.onChange;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['value', 'checked', 'defaultChecked', 'disabled', 'className', 'onChange', 'children']);


            return _react2.default.createElement(
                'label',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('checkbox', className) }),
                _react2.default.createElement('input', { type: 'checkbox', ref: 'main',
                    value: value,
                    onChange: onChange,
                    disabled: disabled,
                    checked: checked,
                    defaultChecked: defaultChecked }),
                _react2.default.createElement(
                    'div',
                    { className: 'checkbox-addon' },
                    _react2.default.createElement('i', { className: 'fa fa-check' })
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'checkbox-label' },
                    children
                )
            );
        }
        //默认props

    }]);
    return Checkbox;
}(_react.Component);

Checkbox.propTypes = {
    //自定义样式
    className: _react.PropTypes.string,
    //是否可以点击
    disabled: _react.PropTypes.bool,
    //是否默认选中
    defaultChecked: _react.PropTypes.bool,
    //是否选中
    checked: _react.PropTypes.bool,
    //状态变更回调
    onChange: _react.PropTypes.func
};
Checkbox.defaultProps = {
    disabled: false
};
exports.default = Checkbox;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Checkbox, 'Checkbox', 'src/scripts/Checkbox.js');
})();

;