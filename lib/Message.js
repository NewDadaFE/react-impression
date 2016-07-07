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

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Message组件引用
var _message = undefined;
var _timers = [];

/**
 * Message组件.
 */

var Message = function (_Component) {
    (0, _inherits3.default)(Message, _Component);

    function Message(props, context) {
        (0, _classCallCheck3.default)(this, Message);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Message).call(this, props, context));

        _message = _this;

        _this.state = {
            show: props.show || false,
            message: null,
            style: props.style
        };
        return _this;
    }
    //prop type校验

    //默认props


    (0, _createClass3.default)(Message, [{
        key: 'componentWillUnmount',

        /**
         * 移除定时器.
         */
        value: function componentWillUnmount() {
            _timers.forEach(function (timer) {
                return clearTimeout(timer);
            });
        }
        /**
         * 获取信息图标.
         * @return {[type]} [description]
         */

    }, {
        key: 'getTitleIcon',
        value: function getTitleIcon() {
            var style = this.state.style;


            return {
                info: ['fa', 'fa-volume-up'],
                success: ['fa', 'fa-check-circle'],
                warning: ['fa', 'fa-exclamation-triangle'],
                danger: ['fa', 'fa-times-circle'],
                loading: ['message-loading']
            }[style];
        }
        /**
         * [获取主题样式]
         * @return {[String]} [主题样式类名]
         */

    }, {
        key: 'getStyleClass',
        value: function getStyleClass() {
            var style = this.state.style;


            return {
                info: 'message-primary',
                warning: 'message-warning',
                success: 'message-success',
                danger: 'message-danger',
                loading: 'message-primary'
            }[style];
        }
        /**
         * 渲染.
         */

    }, {
        key: 'render',
        value: function render() {
            var className = this.props.className;
            var _state = this.state;
            var message = _state.message;
            var show = _state.show;
            var styleClass = this.getStyleClass();
            var iconClass = this.getTitleIcon();

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    { component: 'div', transitionName: 'message', transitionEnterTimeout: 240, transitionLeaveTimeout: 360 },
                    show && _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)('message', styleClass, className) },
                        _react2.default.createElement(
                            'div',
                            { className: 'message-header' },
                            _react2.default.createElement('i', { className: (0, _classnames2.default)(iconClass) })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'message-body' },
                            message
                        )
                    )
                )
            );
        }
    }]);
    return Message;
}(_react.Component);

//显示消息


Message.propTypes = {
    //类型
    style: _react.PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'loading'])
};
Message.defaultProps = {
    style: 'info'
};
exports.default = Message;
var showMessage = function showMessage(style, message) {
    var duration = arguments.length <= 2 || arguments[2] === undefined ? 2000 : arguments[2];

    //清空隐藏消息定时器
    _timers.forEach(function (timer) {
        return clearTimeout(timer);
    });
    _timers = [];

    _message.setState({
        show: true,
        style: style,
        message: message,
        duration: duration
    });

    //隐藏消息
    hideMessage(duration);
};

//隐藏消息
var hideMessage = function hideMessage(duration) {
    _timers.push(setTimeout(function () {
        _message.setState({
            show: false
        });
    }, duration));
};

//显示info信息
Message.info = function (message, duration) {
    showMessage('info', message, duration);
};

//显示info信息
Message.success = function (message, duration) {
    showMessage('success', message, duration);
};

//显示warning信息
Message.warning = function (message, duration) {
    showMessage('warning', message, duration);
};

//显示error信息
Message.error = function (message, duration) {
    showMessage('danger', message, duration);
};

//显示loading信息
Message.loading = function (message, duration) {
    showMessage('loading', message, duration);
};
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_message, '_message', 'src/scripts/Message.js');

    __REACT_HOT_LOADER__.register(_timers, '_timers', 'src/scripts/Message.js');

    __REACT_HOT_LOADER__.register(Message, 'Message', 'src/scripts/Message.js');

    __REACT_HOT_LOADER__.register(showMessage, 'showMessage', 'src/scripts/Message.js');

    __REACT_HOT_LOADER__.register(hideMessage, 'hideMessage', 'src/scripts/Message.js');
})();

;