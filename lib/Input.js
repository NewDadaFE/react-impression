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

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _system = require('./utils/system');

var System = _interopRequireWildcard(_system);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Input 组件.
 */

var Input = function (_Component) {
    (0, _inherits3.default)(Input, _Component);

    /**
     * 初始化.
     */

    function Input(props, context) {
        (0, _classCallCheck3.default)(this, Input);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Input).call(this, props, context));

        System.manager(_this);

        _this.state = {
            showOption: false,
            showClear: false
        };

        _this.clearInputHandle = _this.clearInputHandle.bind(_this);
        _this.showClearHandle = _this.showClearHandle.bind(_this);
        _this.hideClearHandle = _this.hideClearHandle.bind(_this);
        _this.showOptionHandle = _this.showOptionHandle.bind(_this);
        _this.hideOptionsHandle = _this.hideOptionsHandle.bind(_this);
        _this.selectOptionsHandle = _this.selectOptionsHandle.bind(_this);
        return _this;
    }
    //prop type校验

    //默认props


    (0, _createClass3.default)(Input, [{
        key: 'showOptionHandle',

        /**
         * 显示候选项.
         */
        value: function showOptionHandle() {
            var disabled = this.props.disabled;


            !disabled && this.setState({
                showOption: true,
                showClear: false
            });
        }
        /**
         * 隐藏候选项.
         */

    }, {
        key: 'hideOptionsHandle',
        value: function hideOptionsHandle() {
            var main = this.refs.main;


            main.blur();
            this.setState({
                showOption: false,
                showClear: false
            });
        }
        /**
         * 清空输入框.
         */

    }, {
        key: 'clearInputHandle',
        value: function clearInputHandle() {
            var disabled = this.props.disabled;
            var main = this.refs.main;


            if (disabled) {
                return false;
            }

            main.value = '';
        }
        /**
         * 选中候选项.
         * @param  {[String]} value [候选项值]
         */

    }, {
        key: 'selectOptionsHandle',
        value: function selectOptionsHandle(value) {
            var main = this.refs.main;

            main.value = value;

            this.setState({
                showOption: false,
                showClear: false
            });
        }
        /**
         * 显示清空按钮.
         */

    }, {
        key: 'showClearHandle',
        value: function showClearHandle() {
            !this.props.disabled && this.refs.main.value && this.setState({
                showClear: true
            });
        }
        /**
         * 隐藏清空按钮.
         */

    }, {
        key: 'hideClearHandle',
        value: function hideClearHandle() {
            this.setState({
                showClear: false
            });
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
            var _props = this.props;
            var type = _props.type;
            var value = _props.value;
            var defaultValue = _props.defaultValue;
            var disabled = _props.disabled;
            var placeholder = _props.placeholder;
            var clearable = _props.clearable;
            var style = _props.style;
            var pill = _props.pill;
            var onClick = _props.onClick;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['type', 'value', 'defaultValue', 'disabled', 'placeholder', 'clearable', 'style', 'pill', 'onClick', 'className', 'children']);
            var _state = this.state;
            var showOption = _state.showOption;
            var showClear = _state.showClear;
            var pillClass = pill ? 'input-pill' : null;

            children && (children = _react2.default.cloneElement(children, {
                className: (0, _classnames2.default)('input-addon', children.props.className)
            }));

            switch (type) {
                case 'date':
                case 'month':
                    return _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)('input', className), ref: 'container',
                            onMouseEnter: this.showClearHandle,
                            onMouseLeave: this.hideClearHandle },
                        _react2.default.createElement('input', { type: 'text',
                            ref: 'main',
                            value: value,
                            defaultValue: defaultValue,
                            className: (0, _classnames2.default)('form-control', pillClass, 'input-field', 'input-field-addon'),
                            readOnly: true,
                            disabled: disabled,
                            placeholder: placeholder,
                            onClick: this.showOptionHandle,
                            style: style }),
                        clearable && showClear && _react2.default.createElement('i', { className: 'fa fa-times input-addon', onClick: this.clearInputHandle }),
                        (!showClear || !clearable) && _react2.default.createElement('i', { className: 'fa fa-calendar input-addon', onClick: this.showOptionHandle }),
                        showOption && _react2.default.createElement(_DatePicker2.default, (0, _extends3.default)({}, others, { type: type, value: this.refs.main.value, onSelect: this.selectOptionsHandle }))
                    );
                case 'search':

                    return _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)('input', className), ref: 'container' },
                        _react2.default.createElement('input', { type: 'text',
                            ref: 'main',
                            value: value,
                            className: (0, _classnames2.default)('form-control', pillClass, 'input-field', 'input-field-addon'),
                            readOnly: true,
                            onClick: onClick,
                            disabled: disabled,
                            placeholder: placeholder,
                            style: style }),
                        children,
                        !children && _react2.default.createElement('i', { className: 'fa fa-search input-addon', onClick: onClick })
                    );
                default:
                    return _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)('input', className), ref: 'container' },
                        _react2.default.createElement('input', { type: 'text',
                            ref: 'main',
                            value: value,
                            defaultValue: defaultValue,
                            className: (0, _classnames2.default)('form-control', pillClass, 'input-field', {
                                'input-field-addon': children
                            }),
                            disabled: disabled,
                            placeholder: placeholder,
                            style: style }),
                        children
                    );
            }
        }
    }]);
    return Input;
}(_react.Component);

Input.propTypes = {
    //自定义样式
    className: _react.PropTypes.string,
    //类型
    type: _react.PropTypes.oneOf(['text', 'password', 'file', 'date', 'emaile', 'month', 'search']),
    //提示
    placeholder: _react.PropTypes.string,
    //值
    value: _react.PropTypes.any,
    //默认值
    defaultValue: _react.PropTypes.any,
    //是否可清除
    clearable: _react.PropTypes.bool,
    //是否不可选
    disabled: _react.PropTypes.bool,
    //子元素只能为节点
    children: _react.PropTypes.element,
    //是否椭圆形
    pill: _react.PropTypes.bool
};
Input.defaultProps = {
    type: 'text',
    clearable: true,
    disabled: false
};
exports.default = Input;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Input, 'Input', 'src/scripts/Input.js');
})();

;