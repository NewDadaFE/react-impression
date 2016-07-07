"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Square组件.
 */

var Square = function (_Component) {
    (0, _inherits3.default)(Square, _Component);

    function Square() {
        (0, _classCallCheck3.default)(this, Square);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Square).apply(this, arguments));
    }

    (0, _createClass3.default)(Square, [{
        key: "render",

        //渲染
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "square" },
                this.props.children
            );
        }
    }]);
    return Square;
}(_react.Component);

exports.default = Square;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Square, "Square", "src/scripts/Square.js");
})();

;