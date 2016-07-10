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
 * Switch组件.
 */

var Switch = function (_Component) {
    (0, _inherits3.default)(Switch, _Component);

    //初始化state

    function Switch(props, context) {
        (0, _classCallCheck3.default)(this, Switch);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Switch).call(this, props, context));

        _this.onChangeHandle = _this.onChangeHandle.bind(_this);
        return _this;
    }
    //props校验

    //默认props


    (0, _createClass3.default)(Switch, [{
        key: 'onChangeHandle',

        //状态切换回调
        value: function onChangeHandle(event) {
            var onChange = this.props.onChange;
            var checked = event.target.checked;


            onChange && onChange(checked, event);
        }
        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var defaultChecked = _props.defaultChecked;
            var disabled = _props.disabled;
            var className = _props.className;
            var others = (0, _objectWithoutProperties3.default)(_props, ['defaultChecked', 'disabled', 'className']);


            return _react2.default.createElement(
                'label',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('switch', className) }),
                _react2.default.createElement('input', { type: 'checkbox', defaultChecked: defaultChecked, disabled: disabled, ref: 'main', onChange: this.onChangeHandle }),
                _react2.default.createElement('div', { className: 'switch-addon' })
            );
        }
    }]);
    return Switch;
}(_react.Component);

Switch.propTypes = {
    //自定义class
    className: _react.PropTypes.string,
    //是否默认选中
    defaultChecked: _react.PropTypes.bool,
    //是否disabled
    disabled: _react.PropTypes.bool,
    //状态切换回调
    onChange: _react.PropTypes.func
};
Switch.defaultProps = {
    disabled: false
};
exports.default = Switch;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Switch, 'Switch', 'src/scripts/Switch.js');
})();

;