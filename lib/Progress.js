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
 * 进度条组件.
 */

var Progress = function (_Component) {
    (0, _inherits3.default)(Progress, _Component);

    function Progress() {
        (0, _classCallCheck3.default)(this, Progress);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Progress).apply(this, arguments));
    }

    (0, _createClass3.default)(Progress, [{
        key: 'render',

        //渲染

        //prop type校验
        value: function render() {
            var _props = this.props;
            var style = _props.style;
            var striped = _props.striped;
            var value = _props.value;
            var max = _props.max;
            var className = _props.className;
            var others = (0, _objectWithoutProperties3.default)(_props, ['style', 'striped', 'value', 'max', 'className']);
            var styleClass = style ? 'progress-' + style : '';
            var stripedClass = striped ? 'progress-striped' : '';

            return _react2.default.createElement('progress', (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('progress', styleClass, stripedClass, className), value: value, max: max }));
        }
        //默认props

    }]);
    return Progress;
}(_react.Component);

Progress.propTypes = {
    //样式
    style: _react.PropTypes.string,
    //斑马线
    striped: _react.PropTypes.bool,
    //值
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
    //最大值
    max: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};
Progress.defaultProps = {
    max: 100,
    striped: false
};
exports.default = Progress;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Progress, 'Progress', 'src/scripts/Progress.js');
})();

;