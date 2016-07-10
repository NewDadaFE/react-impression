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
 * Icon组件.
 */

var Icon = function (_Component) {
    (0, _inherits3.default)(Icon, _Component);

    function Icon() {
        (0, _classCallCheck3.default)(this, Icon);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
    }

    (0, _createClass3.default)(Icon, [{
        key: 'render',

        //渲染

        //prop type校验
        value: function render() {
            var _props = this.props;
            var type = _props.type;
            var size = _props.size;
            var left = _props.left;
            var right = _props.right;
            var className = _props.className;
            var others = (0, _objectWithoutProperties3.default)(_props, ['type', 'size', 'left', 'right', 'className']);
            var typeClass = 'fa-' + type;
            var sizeClass = size ? 'fa-' + size : null;
            var leftClass = left ? 'offset-l' : null;
            var rightClass = right ? 'offset-r' : null;

            return _react2.default.createElement('i', (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('fa', typeClass, sizeClass, leftClass, rightClass, className) }));
        }
        //默认props

    }]);
    return Icon;
}(_react.Component);

Icon.propTypes = {
    //图标类型
    type: _react.PropTypes.string,
    //是否在左边
    left: _react.PropTypes.bool,
    //是否在右边
    right: _react.PropTypes.bool,
    //尺寸
    size: _react.PropTypes.string,
    //自定义样式
    className: _react.PropTypes.string
};
Icon.defaultProps = {
    left: false,
    right: false
};
exports.default = Icon;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Icon, 'Icon', 'src/scripts/Icon.js');
})();

;