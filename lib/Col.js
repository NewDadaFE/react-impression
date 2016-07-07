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
 * Col布局组件.
 */

var Col = function (_Component) {
    (0, _inherits3.default)(Col, _Component);

    function Col() {
        (0, _classCallCheck3.default)(this, Col);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Col).apply(this, arguments));
    }

    (0, _createClass3.default)(Col, [{
        key: 'render',

        //渲染
        value: function render() {
            var _props = this.props;
            var col = _props.col;
            var offset = _props.offset;
            var push = _props.push;
            var pull = _props.pull;
            var children = _props.children;
            var className = _props.className;
            var others = (0, _objectWithoutProperties3.default)(_props, ['col', 'offset', 'push', 'pull', 'children', 'className']);
            var colClass = 'col-xs-' + col;
            var offsetClass = offset ? 'offset-xs-' + offset : null;
            var pushClass = push ? 'push-xs-' + push : null;
            var pullClass = pull ? 'pull-xs-' + pull : null;

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)(colClass, offsetClass, pushClass, pullClass, className) }),
                children
            );
        }
        //prop type校验

    }]);
    return Col;
}(_react.Component);

Col.propTypes = {
    //所占比例
    col: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    offset: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    push: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    pull: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};
exports.default = Col;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Col, 'Col', 'src/scripts/Col.js');
})();

;