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
 * Confirm组件.
 */

var Confirm = function (_Component) {
    (0, _inherits3.default)(Confirm, _Component);

    function Confirm(props, context) {
        (0, _classCallCheck3.default)(this, Confirm);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Confirm).call(this, props, context));

        _this.getAddonByType = _this.getAddonByType.bind(_this);
        return _this;
    }
    //props校验

    //默认props


    (0, _createClass3.default)(Confirm, [{
        key: 'getAddonByType',

        /**
         * 根据类型获取Icon.
         * @return {[String]} [Icon类型]
         */
        value: function getAddonByType(type) {
            switch (type) {
                case 'info':
                    return 'fa-question-circle text-primary';
                case 'danger':
                    return 'fa-exclamation-circle text-danger';
                default:
                    return 'fa-exclamation-circle text-warning';
            }
        }
        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var type = _props.type;
            var okText = _props.okText;
            var cancelText = _props.cancelText;
            var onOkClick = _props.onOkClick;
            var onCancelClick = _props.onCancelClick;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['type', 'okText', 'cancelText', 'onOkClick', 'onCancelClick', 'className', 'children']);
            var iconTypeClass = this.getAddonByType(type);

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('confirm', className) },
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({}, others, { className: 'confirm-dialog' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'confirm-addon' },
                        _react2.default.createElement('i', { className: (0, _classnames2.default)('fa', iconTypeClass) })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'confirm-body' },
                        children
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'confirm-footer' },
                        _react2.default.createElement(
                            'div',
                            { className: 'confirm-btn-sure', onClick: onOkClick },
                            okText
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'confirm-btn-cancel', onClick: onCancelClick },
                            cancelText
                        )
                    )
                )
            );
        }
    }]);
    return Confirm;
}(_react.Component);

Confirm.propTypes = {
    //自定义样式
    className: _react.PropTypes.string,
    //类型
    type: _react.PropTypes.string,
    //确定按钮
    okText: _react.PropTypes.string,
    //取消按钮
    cancelText: _react.PropTypes.string,
    //确定按钮点击
    onOkClick: _react.PropTypes.func,
    //取消按钮点击
    onCancelClick: _react.PropTypes.func
};
Confirm.defaultProps = {
    type: 'warning',
    okText: '确定',
    cancelText: '取消'
};
exports.default = Confirm;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Confirm, 'Confirm', 'src/scripts/Confirm.js');
})();

;