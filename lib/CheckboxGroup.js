'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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
 * CheckboxGroup组件.
 */

var CheckboxGroup = function (_Component) {
    (0, _inherits3.default)(CheckboxGroup, _Component);

    //初始化state

    function CheckboxGroup(props, context) {
        (0, _classCallCheck3.default)(this, CheckboxGroup);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckboxGroup).call(this, props, context));

        _this.state = {
            value: props.value || []
        };

        _this.onChangeHandle = _this.onChangeHandle.bind(_this);
        return _this;
    }
    //props校验

    //默认props


    (0, _createClass3.default)(CheckboxGroup, [{
        key: 'onChangeHandle',

        //radio切换回调函数
        value: function onChangeHandle(event) {
            var _event$target = event.target;
            var value = _event$target.value;
            var checked = _event$target.checked;
            var onChange = this.props.onChange;

            var newValue = checked ? [].concat((0, _toConsumableArray3.default)(this.state.value), [value]) : [].concat((0, _toConsumableArray3.default)(this.state.value.filter(function (item) {
                return item !== value;
            })));

            this.setState({
                value: newValue
            });

            onChange && onChange(newValue, event);
        }
        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var className = _props.className;
            var direction = _props.direction;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['className', 'direction', 'children']);

            children = children.map(function (child, index) {
                var _child$props = child.props;
                var value = _child$props.value;
                var disabled = _child$props.disabled;
                var children = _child$props.children;

                value = value !== undefined ? value : '' + children;

                return _react2.default.cloneElement(child, {
                    value: value,
                    key: index,
                    onChange: _this2.onChangeHandle,
                    disabled: disabled || _this2.props.disabled,
                    checked: _this2.state.value.indexOf(value) != -1
                });
            });

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)(direction == 'row' ? 'checkbox-inline' : 'checkbox-vertical', className) }),
                children
            );
        }
    }]);
    return CheckboxGroup;
}(_react.Component);

CheckboxGroup.propTypes = {
    //自定义样式
    className: _react.PropTypes.string,
    //默认是否选中
    value: _react.PropTypes.any,
    //回调函数
    onChange: _react.PropTypes.func,
    //是否disabled
    disabled: _react.PropTypes.bool,
    //排列方向
    direction: _react.PropTypes.oneOf(['row', 'column'])
};
CheckboxGroup.defaultProps = {
    disabled: false,
    direction: 'row'
};
exports.default = CheckboxGroup;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(CheckboxGroup, 'CheckboxGroup', 'src/scripts/CheckboxGroup.js');
})();

;