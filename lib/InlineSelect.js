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

var _InlineSelectOption = require('./InlineSelectOption');

var _InlineSelectOption2 = _interopRequireDefault(_InlineSelectOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * InlineSelect组件.
 */

var InlineSelect = function (_Component) {
    (0, _inherits3.default)(InlineSelect, _Component);

    function InlineSelect() {
        (0, _classCallCheck3.default)(this, InlineSelect);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InlineSelect).apply(this, arguments));
    }

    (0, _createClass3.default)(InlineSelect, [{
        key: 'selectOptionHandle',

        /**
         * option选中回调.
         * @param  {[Any]} value       [值]
         * @param  {[String]} text     [名称]
         * @param  {[Number]} index    [索引]
         */
        value: function selectOptionHandle(value, text, index) {
            var onChange = this.props.onChange;


            onChange && onChange(value, text, index);
        }
        // props 校验

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var value = _props.value;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['value', 'className', 'children']);


            children = _react2.default.Children.toArray(children);
            children && (children = children.map(function (child, index) {
                return _react2.default.cloneElement(child, {
                    key: index,
                    active: value && value === child.props.value,
                    onClick: function onClick() {
                        return _this2.selectOptionHandle(child.props.value, child.props.children, index);
                    }
                });
            }));

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('inline-select', className) }),
                children
            );
        }
    }]);
    return InlineSelect;
}(_react.Component);

InlineSelect.propTypes = {
    //自定义样式
    className: _react.PropTypes.string,
    //onChange
    onChange: _react.PropTypes.func,
    //value
    value: _react.PropTypes.any
};
exports.default = InlineSelect;


InlineSelect.Option = _InlineSelectOption2.default;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(InlineSelect, 'InlineSelect', 'src/scripts/InlineSelect.js');
})();

;