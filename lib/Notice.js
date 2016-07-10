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
 * Notice组件.
 */

var Notice = function (_Component) {
    (0, _inherits3.default)(Notice, _Component);

    function Notice() {
        (0, _classCallCheck3.default)(this, Notice);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Notice).apply(this, arguments));
    }

    (0, _createClass3.default)(Notice, [{
        key: 'getTitleIcon',

        /**
         * 获取信息图标.
         * @return {[type]} [description]
         */

        //prop type校验
        value: function getTitleIcon() {
            var style = this.props.style;


            return {
                info: ['fa', 'fa-volume-up'],
                success: ['fa', 'fa-check-circle'],
                warning: ['fa', 'fa-exclamation-triangle'],
                danger: ['fa', 'fa-times-circle']
            }[style];
        }
        /**
         * 渲染.
         */

        //默认props

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var title = _props.title;
            var message = _props.message;
            var style = _props.style;
            var closeable = _props.closeable;
            var close = _props.close;
            var children = _props.children;
            var className = _props.className;
            var styleClass = 'notice-' + style;
            var iconClass = this.getTitleIcon();

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('notice', styleClass, className) },
                _react2.default.createElement(
                    'div',
                    { className: 'notice-header' },
                    _react2.default.createElement('i', { className: (0, _classnames2.default)(iconClass) })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'notice-body' },
                    _react2.default.createElement(
                        'div',
                        { className: 'notice-title' },
                        title,
                        closeable && _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'close', onClick: close },
                            '×'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'notice-content' },
                        message || children
                    )
                )
            );
        }
    }]);
    return Notice;
}(_react.Component);

Notice.propTypes = {
    //类型
    style: _react.PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
    //标题
    title: _react.PropTypes.string,
    //内容
    message: _react.PropTypes.string,
    //关闭
    close: _react.PropTypes.func
};
Notice.defaultProps = {
    style: 'info',
    title: '通知'
};
exports.default = Notice;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Notice, 'Notice', 'src/scripts/Notice.js');
})();

;