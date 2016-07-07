'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _parseInt = require('babel-runtime/core-js/number/parse-int');

var _parseInt2 = _interopRequireDefault(_parseInt);

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
 * Row组件.
 */

var Row = function (_Component) {
    (0, _inherits3.default)(Row, _Component);

    function Row() {
        (0, _classCallCheck3.default)(this, Row);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Row).apply(this, arguments));
    }

    (0, _createClass3.default)(Row, [{
        key: 'getChildren',

        /**
         * 自动计算col属性.
         * @return {[Array]} [子元素]
         */
        value: function getChildren() {
            var children = this.props.children;
            var count = 0;
            var allocation = 0;
            children = _react2.default.Children.toArray(children);
            children.forEach(function (_ref) {
                var props = _ref.props;

                if (props.hasOwnProperty('col')) {
                    count += (0, _parseInt2.default)(props.col);
                } else {
                    allocation += 1;
                }
            });

            var surplus = 12 - count;
            return children.map(function (child) {
                var col = child.props.col;

                return _react2.default.cloneElement(child, {
                    col: col || (0, _parseInt2.default)(surplus / allocation)
                });
            });
        }
        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

            children = this.getChildren();

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('row', className) }),
                children
            );
        }
    }]);
    return Row;
}(_react.Component);

Row.propTypes = {
    //子节点
    children: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.arrayOf(_react.PropTypes.object)])
};
exports.default = Row;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Row, 'Row', 'src/scripts/Row.js');
})();

;