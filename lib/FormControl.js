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
 * FormControl 组件.
 */

var FormControl = function (_Component) {
    (0, _inherits3.default)(FormControl, _Component);

    function FormControl() {
        (0, _classCallCheck3.default)(this, FormControl);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormControl).apply(this, arguments));
    }

    (0, _createClass3.default)(FormControl, [{
        key: 'render',

        //渲染
        value: function render() {
            var children = this.props.children;
            var _children = children;
            var className = _children.className;

            children = _react2.default.cloneElement(children, {
                className: (0, _classnames2.default)(className, 'form-control')
            });

            return children;
        }
        //prop type校验

    }]);
    return FormControl;
}(_react.Component);

FormControl.propTypes = {
    //子节点
    children: _react.PropTypes.element.isRequired
};
exports.default = FormControl;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(FormControl, 'FormControl', 'src/scripts/FormControl.js');
})();

;