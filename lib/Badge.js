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
 * 徽章组件.
 */

var Badge = function (_Component) {
    (0, _inherits3.default)(Badge, _Component);

    function Badge(props, context) {
        (0, _classCallCheck3.default)(this, Badge);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Badge).call(this, props, context));
    }
    //默认props


    (0, _createClass3.default)(Badge, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var content = _props.content;
            var children = _props.children;
            var style = _props.style;
            var type = _props.type;
            var size = _props.size;
            var className = _props.className;
            var styleClass = 'bg-' + style;
            var typeClass = 'badge-' + type;
            var badgeSizeClass = size ? 'badge-addon-' + size : null;

            return _react2.default.createElement(
                'span',
                { className: (0, _classnames2.default)('badge', typeClass, className) },
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('badge-addon', badgeSizeClass, styleClass) },
                    content
                ),
                children
            );
        }
    }]);
    return Badge;
}(_react.Component);

Badge.propTypes = {
    //内容
    content: _react.PropTypes.string,
    //样式
    style: _react.PropTypes.string,
    //类型
    type: _react.PropTypes.string,
    //addon尺寸
    size: _react.PropTypes.string
};
Badge.defaultProps = {
    style: 'primary'
};
exports.default = Badge;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Badge, 'Badge', 'src/scripts/Badge.js');
})();

;