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

var _SelectOption = require('./SelectOption');

var _SelectOption2 = _interopRequireDefault(_SelectOption);

var _system = require('./utils/system');

var System = _interopRequireWildcard(_system);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Select组件.
 */

var Select = function (_Component) {
    (0, _inherits3.default)(Select, _Component);

    //初始state

    function Select(props, context) {
        (0, _classCallCheck3.default)(this, Select);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Select).call(this, props, context));

        System.manager(_this);

        _this.state = {
            showOption: false,
            value: props.value || undefined
        };

        _this.toggleOptionsHandle = _this.toggleOptionsHandle.bind(_this);
        _this.hideOptionsHandle = _this.hideOptionsHandle.bind(_this);
        return _this;
    }
    //prop type校验

    //默认props


    (0, _createClass3.default)(Select, [{
        key: 'toggleOptionsHandle',

        //显示/隐藏菜单
        value: function toggleOptionsHandle() {
            !this.props.disabled && this.setState({
                showOption: !this.state.showOption
            });
        }
        //隐藏菜单

    }, {
        key: 'hideOptionsHandle',
        value: function hideOptionsHandle() {
            this.setState({
                showOption: false
            });
        }
        /**
         * option选中回调.
         * @param  {[String]} newValue [值]
         * @param  {[String]} text     [文本显示]
         * @param  {[Number]} index    [索引]
         */

    }, {
        key: 'selectOptionHandle',
        value: function selectOptionHandle(newValue, text, index) {
            var value = this.state.value;
            var onChange = this.props.onChange;
            var main = this.refs.main;


            onChange && newValue !== value && onChange(newValue, text, index);
            this.setState({
                value: newValue,
                showOption: false
            });

            main.value = text;
        }
        /**
         * 清空组件管理.
         */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            System.unmanager(this);
        }
        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var placeholder = _props.placeholder;
            var disabled = _props.disabled;
            var style = _props.style;
            var className = _props.className;
            var children = _props.children;
            var showOption = this.state.showOption;
            var text = undefined;

            children = children.map(function (child, index) {
                var _child$props = child.props;
                var value = _child$props.value;
                var children = _child$props.children;
                var disabled = _child$props.disabled;

                value === _this2.state.value && (text = children);
                value === _this2.state.value && !disabled && _this2.refs.main && (_this2.refs.main.value = children);
                return _react2.default.cloneElement(child, {
                    key: index,
                    active: value === _this2.state.value,
                    onClick: function onClick() {
                        return !disabled && _this2.selectOptionHandle(value, children, index);
                    }
                });
            });

            return _react2.default.createElement(
                'div',
                { style: style, className: (0, _classnames2.default)('select', { disabled: disabled }, { open: showOption }, className), disabled: disabled },
                _react2.default.createElement('input', { type: 'text', defaultValue: text, readOnly: true, ref: 'main',
                    placeholder: placeholder, disabled: disabled,
                    className: (0, _classnames2.default)('form-control', 'select-selection'),
                    onClick: this.toggleOptionsHandle }),
                _react2.default.createElement('i', { className: 'fa fa-angle-down select-addon', onClick: this.toggleOptionsHandle }),
                _react2.default.createElement(
                    'ul',
                    { className: 'select-options' },
                    children
                )
            );
        }
    }]);
    return Select;
}(_react.Component);

Select.propTypes = {
    //值
    value: _react.PropTypes.any,
    //是否不可用
    disabled: _react.PropTypes.bool,
    //style
    style: _react.PropTypes.object,
    //自定义样式
    className: _react.PropTypes.string,
    //placeholder
    placeholder: _react.PropTypes.string,
    //onChange
    onChange: _react.PropTypes.func
};
Select.defaultProps = {
    disabled: false,
    placeholder: '请选择'
};
exports.default = Select;


Select.Option = _SelectOption2.default;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Select, 'Select', 'src/scripts/Select.js');
})();

;