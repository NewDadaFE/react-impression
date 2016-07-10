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
 * 按钮组件.
 */

var Button = function (_Component) {
    (0, _inherits3.default)(Button, _Component);

    //构造函数

    function Button(props, context) {
        (0, _classCallCheck3.default)(this, Button);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Button).call(this, props, context));

        _this.state = {
            Tag: props.href ? 'a' : 'button'
        };
        return _this;
    }
    //prop type校验

    //默认props


    (0, _createClass3.default)(Button, [{
        key: 'render',

        //渲染
        value: function render() {
            var _props = this.props;
            var style = _props.style;
            var outline = _props.outline;
            var size = _props.size;
            var shape = _props.shape;
            var className = _props.className;
            var onClick = _props.onClick;
            var href = _props.href;
            var close = _props.close;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['style', 'outline', 'size', 'shape', 'className', 'onClick', 'href', 'close', 'children']);
            var Tag = this.state.Tag;
            var btnClass = !close ? 'btn' : null;
            var styleClass = !close ? 'btn' + (outline ? '-outline' : '') + '-' + style : null;
            var sizeClass = size ? 'btn-' + size : '';
            var shapeClass = shape ? 'btn-' + shape : '';
            var closeClass = close ? 'close' : null;

            delete others.eventKey;

            return _react2.default.createElement(
                Tag,
                (0, _extends3.default)({}, others, { type: href ? null : 'button', onClick: onClick, href: href,
                    className: (0, _classnames2.default)(btnClass, styleClass, sizeClass, shapeClass, closeClass, className) }),
                children
            );
        }
    }]);
    return Button;
}(_react.Component);

Button.propTypes = {
    //样式（primary、default、secondary）
    style: _react.PropTypes.string,
    //自定义样式
    className: _react.PropTypes.string,
    //click事件
    onClick: _react.PropTypes.func,
    //是否outline
    outline: _react.PropTypes.bool,
    //尺寸
    size: _react.PropTypes.string,
    //形状
    shape: _react.PropTypes.string,
    //链接地址
    href: _react.PropTypes.string,
    //是否关闭按钮
    close: _react.PropTypes.bool
};
Button.defaultProps = {
    style: 'primary'
};
exports.default = Button;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Button, 'Button', 'src/scripts/Button.js');
})();

;