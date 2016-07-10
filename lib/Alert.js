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
 * Alert 组件
 */

var Alert = function (_Component) {
    (0, _inherits3.default)(Alert, _Component);

    function Alert() {
        (0, _classCallCheck3.default)(this, Alert);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Alert).apply(this, arguments));
    }

    (0, _createClass3.default)(Alert, [{
        key: 'getAddonByType',

        // props 校验
        value: function getAddonByType(type) {
            switch (type) {
                case 'danger':
                    return 'fa-exclamation-circle text-danger';
                default:
                    return 'fa-exclamation-triangle text-warning';
            }
        }
        //默认props

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var type = _props.type;
            var btnText = _props.btnText;
            var onClick = _props.onClick;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['type', 'btnText', 'onClick', 'className', 'children']);
            var iconTypeClass = this.getAddonByType(type);

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('alert', className) },
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({}, others, { className: 'alert-dialog' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'alert-addon' },
                        _react2.default.createElement('i', { className: (0, _classnames2.default)('fa', iconTypeClass) })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'alert-body' },
                        children
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'alert-footer', onClick: onClick },
                        btnText
                    )
                )
            );
        }
    }]);
    return Alert;
}(_react.Component);

Alert.propTypes = {
    //类型（success、primary、warning、danger）
    type: _react.PropTypes.string,
    //自定义样式
    className: _react.PropTypes.string,
    //回调
    onClick: _react.PropTypes.func
};
Alert.defaultProps = {
    type: 'info',
    btnText: '确定'

};
exports.default = Alert;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Alert, 'Alert', 'src/scripts/Alert.js');
})();

;