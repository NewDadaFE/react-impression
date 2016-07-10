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
 * Tag组件
 */

var Tag = function (_Component) {
    (0, _inherits3.default)(Tag, _Component);

    function Tag() {
        (0, _classCallCheck3.default)(this, Tag);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tag).apply(this, arguments));
    }

    (0, _createClass3.default)(Tag, [{
        key: 'render',

        //渲染

        //props校验
        value: function render() {
            var _props = this.props;
            var style = _props.style;
            var closable = _props.closable;
            var onClose = _props.onClose;
            var shape = _props.shape;
            var children = _props.children;
            var className = _props.className;
            var others = (0, _objectWithoutProperties3.default)(_props, ['style', 'closable', 'onClose', 'shape', 'children', 'className']);
            var tagStyle = style ? 'tag-' + style : '';
            var tagShape = shape ? 'tag-' + shape : '';

            return _react2.default.createElement(
                'span',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('tag', tagStyle, tagShape, className) }),
                children,
                closable && _react2.default.createElement(
                    'span',
                    { className: 'tag-close', onClick: onClose },
                    '×'
                )
            );
        }
        //默认props

    }]);
    return Tag;
}(_react.Component);

Tag.propTypes = {
    //样式（default、primary、success、info、warning、danger）
    style: _react.PropTypes.string,
    //形状（pill）
    shape: _react.PropTypes.string,
    //是否可删除
    closable: _react.PropTypes.bool,
    //删除回调
    onClose: _react.PropTypes.func,
    //自定义样式
    className: _react.PropTypes.string

};
Tag.defaultProps = {
    style: 'default',
    closable: false
};
exports.default = Tag;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Tag, 'Tag', 'src/scripts/Tag.js');
})();

;