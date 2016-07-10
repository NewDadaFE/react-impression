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
 * Radio组件.
 */

var Radio = function (_Component) {
    (0, _inherits3.default)(Radio, _Component);

    function Radio() {
        (0, _classCallCheck3.default)(this, Radio);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Radio).apply(this, arguments));
    }

    (0, _createClass3.default)(Radio, [{
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
            var name = _props.name;
            var onChange = _props.onChange;
            var others = (0, _objectWithoutProperties3.default)(_props, ['value', 'checked', 'defaultChecked', 'disabled', 'className', 'name', 'onChange']);


            return _react2.default.createElement(
                'label',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('radio', className) }),
                _react2.default.createElement('input', { type: 'radio', value: value, name: name, checked: checked, defaultChecked: defaultChecked, disabled: disabled, onChange: onChange }),
                _react2.default.createElement(
                    'div',
                    { className: 'radio-addon' },
                    _react2.default.createElement('i', null)
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'radio-label' },
                    this.props.children
                )
            );
        }
        //默认props

    }]);
    return Radio;
}(_react.Component);

Radio.propTypes = {
    //名称
    name: _react.PropTypes.any,
    //返回值
    value: _react.PropTypes.any,
    //自定义样式
    className: _react.PropTypes.string,
    //是否选中
    checked: _react.PropTypes.bool,
    //默认是否选中
    defaultChecked: _react.PropTypes.bool,
    //是否disabled
    disabled: _react.PropTypes.bool,
    //回调函数
    onChange: _react.PropTypes.func
};
Radio.defaultProps = {
    disabled: false
};
exports.default = Radio;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Radio, 'Radio', 'src/scripts/Radio.js');
})();

;