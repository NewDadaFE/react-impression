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
 * ButtonToolbar组件.
 */

var ButtonToolbar = function (_Component) {
    (0, _inherits3.default)(ButtonToolbar, _Component);

    function ButtonToolbar() {
        (0, _classCallCheck3.default)(this, ButtonToolbar);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ButtonToolbar).apply(this, arguments));
    }

    (0, _createClass3.default)(ButtonToolbar, [{
        key: 'render',

        //渲染
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var children = _props.children;


            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('btn-toolbar', className) },
                children
            );
        }
        //prop type校验

    }]);
    return ButtonToolbar;
}(_react.Component);

ButtonToolbar.propTypes = {
    //自定义样式
    className: _react.PropTypes.string
};
exports.default = ButtonToolbar;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ButtonToolbar, 'ButtonToolbar', 'src/scripts/ButtonToolbar.js');
})();

;