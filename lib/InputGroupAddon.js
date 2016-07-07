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
 * InputGroupAddon组件.
 */

var InputGroupAddon = function (_Component) {
    (0, _inherits3.default)(InputGroupAddon, _Component);

    function InputGroupAddon() {
        (0, _classCallCheck3.default)(this, InputGroupAddon);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InputGroupAddon).apply(this, arguments));
    }

    (0, _createClass3.default)(InputGroupAddon, [{
        key: 'render',

        //渲染
        value: function render() {
            var _props = this.props;
            var pure = _props.pure;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['pure', 'className', 'children']);
            var pureClass = pure ? 'bg-pure' : null;

            return _react2.default.createElement(
                'span',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('input-group-addon', pureClass, className) }),
                children
            );
        }
    }]);
    return InputGroupAddon;
}(_react.Component);

InputGroupAddon.propTypes = {
    pure: _react.PropTypes.bool,
    className: _react.PropTypes.string

};
exports.default = InputGroupAddon;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(InputGroupAddon, 'InputGroupAddon', 'src/scripts/InputGroupAddon.js');
})();

;