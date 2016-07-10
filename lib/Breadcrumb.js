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

var _reactRouter = require('react-router');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 面包屑组件.
 */

var Breadcrumb = function (_Component) {
    (0, _inherits3.default)(Breadcrumb, _Component);

    function Breadcrumb() {
        (0, _classCallCheck3.default)(this, Breadcrumb);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Breadcrumb).apply(this, arguments));
    }

    (0, _createClass3.default)(Breadcrumb, [{
        key: 'setDocumentTitle',

        /**
         * 设置浏览器title.
         */
        value: function setDocumentTitle() {
            var routes = this.props.routes;
            var leafRoute = routes[routes.length - 1];

            document.title = leafRoute.name || leafRoute.component && leafRoute.component.title || leafRoute.path;
        }
        //渲染

        //prop type校验

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var divider = _props.divider;
            var routes = _props.routes;
            var className = _props.className;
            var others = (0, _objectWithoutProperties3.default)(_props, ['divider', 'routes', 'className']);
            var dividerClass = divider ? 'breadcrumb-' + divider : '';
            var depth = routes.length - 1;

            this.setDocumentTitle();

            return _react2.default.createElement(
                'ol',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('breadcrumb', className, dividerClass) }),
                routes.map(function (item, index) {
                    return _react2.default.createElement(
                        'li',
                        { key: index, className: 'breadcrumb-item' },
                        index < depth && item.path && item.clickable && _react2.default.createElement(
                            _reactRouter.Link,
                            { to: item.path },
                            item.component && item.component.icon && _react2.default.createElement(_Icon2.default, { className: 'breadcrumb-item-addon', type: item.component.icon }),
                            item.component && item.component.title || item.path
                        ),
                        (index === depth || !item.path || !item.clickable) && _react2.default.createElement(
                            'span',
                            null,
                            item.component && item.component.icon && _react2.default.createElement(_Icon2.default, { className: 'breadcrumb-item-addon', type: item.component.icon }),
                            item.icon,
                            item.component && item.component.title || item.path
                        )
                    );
                })
            );
        }
    }]);
    return Breadcrumb;
}(_react.Component);

Breadcrumb.propTypes = {
    //分隔
    divider: _react.PropTypes.string,
    //路由
    routes: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
    //自定义样式
    className: _react.PropTypes.string
};
exports.default = Breadcrumb;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Breadcrumb, 'Breadcrumb', 'src/scripts/Breadcrumb.js');
})();

;