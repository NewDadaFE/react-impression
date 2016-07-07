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
 * ListGroupItem 组件
 */

var ListGroupItem = function (_Component) {
    (0, _inherits3.default)(ListGroupItem, _Component);

    //构造函数

    function ListGroupItem(props, context) {
        (0, _classCallCheck3.default)(this, ListGroupItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ListGroupItem).call(this, props, context));

        _this.state = {
            Tag: props.href ? 'a' : 'li'
        };
        return _this;
    }
    //props校验


    (0, _createClass3.default)(ListGroupItem, [{
        key: 'render',

        //渲染
        value: function render() {
            var _props = this.props;
            var href = _props.href;
            var disabled = _props.disabled;
            var active = _props.active;
            var children = _props.children;
            var className = _props.className;
            var others = (0, _objectWithoutProperties3.default)(_props, ['href', 'disabled', 'active', 'children', 'className']);
            var Tag = this.state.Tag;
            var disabledStyle = disabled ? 'disabled' : null;
            var activeStyle = active ? 'active' : null;
            var actionStyle = href ? 'list-group-item-action' : null;

            return _react2.default.createElement(
                Tag,
                (0, _extends3.default)({}, others, { href: href, className: (0, _classnames2.default)('list-group-item', activeStyle, disabledStyle, actionStyle, className) }),
                children
            );
        }
    }]);
    return ListGroupItem;
}(_react.Component);

ListGroupItem.propTypes = {
    href: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    active: _react.PropTypes.bool,
    header: _react.PropTypes.string,
    className: _react.PropTypes.string
};
exports.default = ListGroupItem;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ListGroupItem, 'ListGroupItem', 'src/scripts/ListGroupItem.js');
})();

;