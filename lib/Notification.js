'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Notice = require('./Notice');

var _Notice2 = _interopRequireDefault(_Notice);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Notification组件引用
var _notification = undefined;

/**
 * 通知容器.
 */

var Notification = function (_Component) {
    (0, _inherits3.default)(Notification, _Component);

    /**
     * 初始化信息.
     * @param  {[type]} props   [description]
     * @param  {[type]} context [description]
     */

    function Notification(props, context) {
        (0, _classCallCheck3.default)(this, Notification);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Notification).call(this, props, context));

        _this.state = {};
        _this.key = 0;
        _this.timers = [];
        _notification = _this;
        _this.removeNotice = _this.removeNotice.bind(_this);
        return _this;
    }
    //prop type校验

    //默认props


    (0, _createClass3.default)(Notification, [{
        key: 'componentWillUnmount',

        /**
         * 移除定时器.
         */
        value: function componentWillUnmount() {
            this.timers.forEach(function (timer) {
                clearTimeout(timer);
            });
        }
        /**
         * 添加通知.
         * @param {[String]} options.title    [标题]
         * @param {[String]} options.message  [内容]
         * @param {Number}   options.duration [延时]
         */

    }, {
        key: 'addNotice',
        value: function addNotice(_ref, style) {
            var title = _ref.title;
            var message = _ref.message;
            var _ref$duration = _ref.duration;
            var duration = _ref$duration === undefined ? 2000 : _ref$duration;
            var closeable = _ref.closeable;

            var key = this.key++,
                state = (0, _extends3.default)({}, this.state);
            closeable = closeable === undefined ? this.props.closeable : closeable;

            state[key] = {
                title: title,
                message: message,
                style: style,
                closeable: closeable
            };
            this.setState(state);
            this.timeToRemoveNotice(key, duration);
        }
        /**
         * 移除通知.
         * @param  {[Number]} key      [索引]
         */

    }, {
        key: 'removeNotice',
        value: function removeNotice(key) {
            delete this.state[key];
            this.setState(this.state);
        }
        /**
         * 移除通知.
         * @param  {[Number]} key      [索引]
         * @param  {[Number]} duration [延时]
         */

    }, {
        key: 'timeToRemoveNotice',
        value: function timeToRemoveNotice(key, duration) {
            var _this2 = this;

            this.timers.push(setTimeout(function () {
                _this2.removeNotice(key);
            }, duration));
        }
        /**
         * 渲染.
         */

    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var className = this.props.className;


            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('notification', className) },
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    { component: 'div', transitionName: 'notice', transitionEnterTimeout: 200, transitionLeaveTimeout: 800 },
                    (0, _keys2.default)(this.state).map(function (key) {
                        return _react2.default.createElement(
                            _Notice2.default,
                            { key: key, style: _this3.state[key].style,
                                closeable: _this3.state[key].closeable,
                                title: _this3.state[key].title,
                                close: function close() {
                                    return _this3.removeNotice(key);
                                } },
                            _this3.state[key].message
                        );
                    })
                )
            );
        }
    }]);
    return Notification;
}(_react.Component);

//添加一条info消息


Notification.propTypes = {
    //是否可关闭
    closeable: _react.PropTypes.bool
};
Notification.defaultProps = {
    closeable: true
};
exports.default = Notification;
Notification.info = function (options) {
    _notification.addNotice(options, 'info');
};

//添加一条success消息
Notification.success = function (options) {
    _notification.addNotice(options, 'success');
};

//添加一条warning消息
Notification.warning = function (options) {
    _notification.addNotice(options, 'warning');
};

//添加一条danger消息
Notification.error = function (options) {
    _notification.addNotice(options, 'danger');
};
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_notification, '_notification', 'src/scripts/Notification.js');

    __REACT_HOT_LOADER__.register(Notification, 'Notification', 'src/scripts/Notification.js');
})();

;