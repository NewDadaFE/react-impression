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

/**
 * 主内容区 组件.
 */

var Content = function (_Component) {
    (0, _inherits3.default)(Content, _Component);

    function Content() {
        (0, _classCallCheck3.default)(this, Content);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Content).apply(this, arguments));
    }

    (0, _createClass3.default)(Content, [{
        key: 'render',

        //props校验
        value: function render() {
            var _props = this.props;
            var transitionName = _props.transitionName;
            var transitionEnterTimeout = _props.transitionEnterTimeout;
            var transitionLeaveTimeout = _props.transitionLeaveTimeout;
            var component = _props.component;
            var className = _props.className;
            var children = _props.children;

            children && (children = _react2.default.cloneElement(children, {
                key: children.props.location.pathname
            }));

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('content', className) },
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    {
                        component: component,
                        transitionName: transitionName,
                        transitionEnterTimeout: transitionEnterTimeout,
                        transitionLeaveTimeout: transitionLeaveTimeout },
                    children
                )
            );
        }
        //默认props

    }]);
    return Content;
}(_react.Component);

Content.propTypes = {
    //自定义样式
    className: _react.PropTypes.string,
    //动画名称
    transitionName: _react.PropTypes.string,
    //进入动画时间
    transitionEnterTimeout: _react.PropTypes.number,
    //退出动画时间
    transitionLeaveTimeout: _react.PropTypes.number,
    //包裹元素
    component: _react.PropTypes.string,
    //子元素为单一节点
    children: _react.PropTypes.element.isRequired

};
Content.defaultProps = {
    transitionName: 'zoom-slide',
    component: 'div',
    transitionEnterTimeout: 1200,
    transitionLeaveTimeout: 1200
};
exports.default = Content;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Content, 'Content', 'src/scripts/Content.js');
})();

;