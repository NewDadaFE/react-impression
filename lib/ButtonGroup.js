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
 * ButtonGroup组件.
 */

var ButtonGroup = function (_Component) {
    (0, _inherits3.default)(ButtonGroup, _Component);

    //初始state

    function ButtonGroup(props, context) {
        (0, _classCallCheck3.default)(this, ButtonGroup);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ButtonGroup).call(this, props, context));

        _this.state = {
            activeKey: props.activeKey
        };
        return _this;
    }
    //默认props

    //prop校验


    (0, _createClass3.default)(ButtonGroup, [{
        key: 'render',

        //渲染
        value: function render() {
            var _this2 = this;

            var activeKey = this.state.activeKey;
            var _props = this.props;
            var style = _props.style;
            var size = _props.size;
            var className = _props.className;
            var onSelect = _props.onSelect;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['style', 'size', 'className', 'onSelect', 'children']);
            var btnGroupSize = size ? 'btn-group-' + size : null;

            delete others.activeKey;
            children = children.map(function (child, index) {
                var _child$props = child.props;
                var eventKey = _child$props.eventKey;
                var onClick = _child$props.onClick;


                return _react2.default.cloneElement(child, {
                    key: index,
                    outline: style !== 'default' && (!onSelect || activeKey !== eventKey),
                    style: style === 'default' && onSelect && activeKey === eventKey ? 'primary' : style,
                    onClick: onSelect ? function (event) {
                        _this2.setState({
                            activeKey: eventKey
                        });
                        onSelect && onSelect(eventKey, event);
                        onClick && onClick(event);
                    } : onClick
                });
            });

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('btn-group', btnGroupSize, className) }),
                children
            );
        }
    }]);
    return ButtonGroup;
}(_react.Component);

ButtonGroup.defaultProps = {
    style: 'default'
};
ButtonGroup.propType = {
    //大小（lg、sm）
    size: _react.PropTypes.string,
    //主题样式(primary、secondary、default)
    style: _react.PropTypes.string,
    //激活索引（被选中Button会额外添加选中样式，为空时不额外添加选中样式）
    activeKey: _react.PropTypes.any,
    //选中回调
    onSelect: _react.PropTypes.func,
    //自定义样式
    className: _react.PropTypes.string
};
exports.default = ButtonGroup;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ButtonGroup, 'ButtonGroup', 'src/scripts/ButtonGroup.js');
})();

;