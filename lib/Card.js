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

var _CardBlock = require('./CardBlock');

var _CardBlock2 = _interopRequireDefault(_CardBlock);

var _CardHeader = require('./CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardFooter = require('./CardFooter');

var _CardFooter2 = _interopRequireDefault(_CardFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Card组件.
 */

var Card = function (_Component) {
    (0, _inherits3.default)(Card, _Component);

    function Card() {
        (0, _classCallCheck3.default)(this, Card);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Card).apply(this, arguments));
    }

    (0, _createClass3.default)(Card, [{
        key: 'render',

        //渲染

        //props校验
        value: function render() {
            var _props = this.props;
            var block = _props.block;
            var noborder = _props.noborder;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['block', 'noborder', 'className', 'children']);
            var blockClass = block ? 'card-block' : null;
            var borderClass = noborder ? 'no-border' : null;

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('card', blockClass, borderClass, className) }),
                children
            );
        }
        //默认props

    }]);
    return Card;
}(_react.Component);

Card.propTypes = {
    //自定义样式
    className: _react.PropTypes.string,
    //是否block
    block: _react.PropTypes.bool,
    //是否无边框
    noborder: _react.PropTypes.bool
};
Card.defaultProps = {
    block: false,
    noborder: false
};
exports.default = Card;


Card.Block = _CardBlock2.default;
Card.Header = _CardHeader2.default;
Card.Footer = _CardFooter2.default;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Card, 'Card', 'src/scripts/Card.js');
})();

;