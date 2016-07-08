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
 * Image组件
 */

var Image = function (_Component) {
    (0, _inherits3.default)(Image, _Component);

    //构造函数

    function Image(props, context) {
        (0, _classCallCheck3.default)(this, Image);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Image).call(this, props, context));
    }
    //prop type校验

    //默认props


    (0, _createClass3.default)(Image, [{
        key: 'render',

        //渲染
        value: function render() {
            var _props = this.props;
            var fluid = _props.fluid;
            var rounded = _props.rounded;
            var circle = _props.circle;
            var thumbnail = _props.thumbnail;
            var className = _props.className;
            var others = (0, _objectWithoutProperties3.default)(_props, ['fluid', 'rounded', 'circle', 'thumbnail', 'className']);

            var classes = {
                'img-fluid': fluid,
                'img-rounded': rounded,
                'img-circle': circle,
                'img-thumbnail': thumbnail
            };

            return _react2.default.createElement('img', (0, _extends3.default)({}, others, { className: (0, _classnames2.default)(classes, className) }));
        }
    }]);
    return Image;
}(_react.Component);

Image.propTypes = {
    //形状（fluid、rounded、circle、thumbnail）
    fluid: _react.PropTypes.bool,
    rounded: _react.PropTypes.bool,
    circle: _react.PropTypes.bool,
    thumbnail: _react.PropTypes.bool
};
Image.defaultProps = {
    fluid: false,
    rounded: false,
    circle: false,
    thumbnail: false
};
exports.default = Image;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Image, 'Image', 'src/scripts/Image.js');
})();

;