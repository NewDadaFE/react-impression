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

// import InputGroupAddon from './InputGroupAddon';

/**
 * InputGroup组件.
 */

var InputGroupInput = function (_Component) {
    (0, _inherits3.default)(InputGroupInput, _Component);

    function InputGroupInput() {
        (0, _classCallCheck3.default)(this, InputGroupInput);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InputGroupInput).apply(this, arguments));
    }

    (0, _createClass3.default)(InputGroupInput, [{
        key: 'render',

        //渲染

        //props校验
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var placeholder = _props.placeholder;
            var others = (0, _objectWithoutProperties3.default)(_props, ['className', 'placeholder']);


            return _react2.default.createElement('input', (0, _extends3.default)({}, others, { type: 'text', className: (0, _classnames2.default)('form-control', className), placeholder: placeholder, ref: 'main' }));
        }
        //默认props

    }]);
    return InputGroupInput;
}(_react.Component);

InputGroupInput.propTypes = {
    type: _react.PropTypes.string,
    placeholder: _react.PropTypes.string,
    className: _react.PropTypes.string
};
InputGroupInput.defaultProps = {
    type: 'text'
};
exports.default = InputGroupInput;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(InputGroupInput, 'InputGroupInput', 'src/scripts/InputGroupInput.js');
})();

;