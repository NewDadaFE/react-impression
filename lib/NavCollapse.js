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

var _NavCollapseTitle = require('./NavCollapseTitle');

var _NavCollapseTitle2 = _interopRequireDefault(_NavCollapseTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * NavCollapse 组件
 */

var NavCollapse = function (_Component) {
    (0, _inherits3.default)(NavCollapse, _Component);

    function NavCollapse(props, context) {
        (0, _classCallCheck3.default)(this, NavCollapse);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NavCollapse).call(this, props, context));

        _this.state = {
            active: props.active
        };

        _this.toggleItemsHandle = _this.toggleItemsHandle.bind(_this);
        return _this;
    }
    //props校验

    //默认props


    (0, _createClass3.default)(NavCollapse, [{
        key: 'toggleItemsHandle',
        value: function toggleItemsHandle() {
            this.setState({
                active: !this.state.active
            });
        }
        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var children = _props.children;
            var className = _props.className;
            var others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);
            var active = this.state.active;
            var collapseTitle = null;

            delete others.active;
            children = _react2.default.Children.toArray(children);
            children = children.filter(function (child, index) {
                if (child.type && child.type.name === 'NavCollapseTitle') {
                    collapseTitle = _react2.default.cloneElement(child, {
                        onClick: _this2.toggleItemsHandle
                    });
                    return false;
                }
                return true;
            });

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('nav-collapse', { active: active }, className) }),
                collapseTitle,
                _react2.default.createElement(
                    'div',
                    { className: 'nav-collapse-items' },
                    children
                )
            );
        }
    }]);
    return NavCollapse;
}(_react.Component);

NavCollapse.propTypes = {
    className: _react.PropTypes.string,
    active: _react.PropTypes.bool
};
NavCollapse.defaultProps = {
    active: false
};
exports.default = NavCollapse;


NavCollapse.Title = _NavCollapseTitle2.default;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(NavCollapse, 'NavCollapse', 'src/scripts/NavCollapse.js');
})();

;