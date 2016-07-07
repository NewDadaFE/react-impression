'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

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
 * MessageItem组件.
 */

var MessageItem = function (_Component) {
    (0, _inherits3.default)(MessageItem, _Component);

    function MessageItem() {
        (0, _classCallCheck3.default)(this, MessageItem);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MessageItem).apply(this, arguments));
    }

    (0, _createClass3.default)(MessageItem, [{
        key: 'getNotifyItemIcon',

        /**
         * 获取信息图标.
         * @return {[type]} [description]
         */

        //prop type校验
        value: function getNotifyItemIcon() {
            return {
                'message-item-success': 'fa-check-circle',
                'message-item-error': 'fa-times-circle',
                'message-item-info': 'fa-info-circle',
                'message-item-warning': 'fa-exclamation-triangle'
            }[this.props.theme];
        }
        /**
         * 渲染.
         */

        //默认props

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var className = _props.className;


            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('message-item', className) },
                _react2.default.createElement(
                    'div',
                    { className: 'message-item-title' },
                    _react2.default.createElement('i', { className: (0, _classnames2.default)(['fa', 'fa-check-circle']) })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'message-item-body' },
                    children
                )
            );
        }
    }]);
    return MessageItem;
}(_react.Component);

MessageItem.propTypes = {
    //类型
    type: _react.PropTypes.oneOf(['info', 'success', 'warning', 'error', 'loading'])
};
MessageItem.defaultProps = {
    type: 'info'
};
exports.default = MessageItem;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(MessageItem, 'MessageItem', 'src/scripts/MessageItem.js');
})();

;