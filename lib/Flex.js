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

var _FlexItem = require('./FlexItem');

var _FlexItem2 = _interopRequireDefault(_FlexItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Flex布局组件.
 */

var Flex = function (_Component) {
    (0, _inherits3.default)(Flex, _Component);

    function Flex() {
        (0, _classCallCheck3.default)(this, Flex);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Flex).apply(this, arguments));
    }

    (0, _createClass3.default)(Flex, [{
        key: 'render',

        //渲染

        //prop type校验
        value: function render() {
            var _props = this.props;
            var direction = _props.direction;
            var children = _props.children;
            var className = _props.className;
            var others = (0, _objectWithoutProperties3.default)(_props, ['direction', 'children', 'className']);
            var directionClass = direction === 'row' ? '' : 'flex-vertical';

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('flex', directionClass, className) }),
                children
            );
        }
        //默认props

    }]);
    return Flex;
}(_react.Component);

Flex.propTypes = {
    direction: _react2.default.PropTypes.oneOf(['row', 'column'])
};
Flex.defaultProps = {
    direction: 'row'
};
exports.default = Flex;


Flex.Item = _FlexItem2.default;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Flex, 'Flex', 'src/scripts/Flex.js');
})();

;