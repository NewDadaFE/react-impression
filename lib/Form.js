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

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormControl = require('./FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Form 组件.
 */

var Form = function (_Component) {
    (0, _inherits3.default)(Form, _Component);

    function Form() {
        (0, _classCallCheck3.default)(this, Form);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Form).apply(this, arguments));
    }

    (0, _createClass3.default)(Form, [{
        key: 'render',

        //渲染

        //props校验
        value: function render() {
            var _props = this.props;
            var type = _props.type;
            var grid = _props.grid;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['type', 'grid', 'className', 'children']);
            var typeClass = type ? 'form-' + type : null;

            return _react2.default.createElement(
                'form',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)(typeClass, { row: grid }, className) }),
                children
            );
        }
        //默认props

    }]);
    return Form;
}(_react.Component);

Form.propTypes = {
    //排列方向
    type: _react.PropTypes.string,
    //是否分列
    grid: _react.PropTypes.bool,
    //自定义样式
    className: _react.PropTypes.string
};
Form.defaultProps = {
    type: 'inline',
    grid: false
};
exports.default = Form;


Form.Group = _FormGroup2.default;
Form.Control = _FormControl2.default;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Form, 'Form', 'src/scripts/Form.js');
})();

;