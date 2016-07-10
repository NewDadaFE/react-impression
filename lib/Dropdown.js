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
 * Dropdown组件.
 */

var Dropdown = function (_Component) {
    (0, _inherits3.default)(Dropdown, _Component);

    function Dropdown(props, context) {
        (0, _classCallCheck3.default)(this, Dropdown);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Dropdown).call(this, props, context));

        _this.state = {
            open: false
        };

        _this.toggleMenuHandle = _this.toggleMenuHandle.bind(_this);
        return _this;
    }
    //prop type校验

    //默认props


    (0, _createClass3.default)(Dropdown, [{
        key: 'menuClickHandle',

        //点击回调
        value: function menuClickHandle(menu, index, event) {
            var value = menu.value;
            var name = menu.name;
            var text = menu.text;
            var disabled = menu.disabled;
            var onClick = this.props.onClick;


            if (disabled) {
                return false;
            }

            this.setState({
                open: false
            });

            onClick && onClick(value, name || text, index, event);
        }
        //显示/隐藏菜单

    }, {
        key: 'toggleMenuHandle',
        value: function toggleMenuHandle(flag) {
            this.setState({
                open: flag === undefined ? !this.state.open : flag
            });
        }
        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var menus = _props.menus;
            var trigger = _props.trigger;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['menus', 'trigger', 'className', 'children']);
            var open = this.state.open;
            var options = {
                className: children.props.className + ' dropdown-toggle'
            };

            switch (trigger) {
                case 'click':
                    options.onClick = children.onClick ? function (event) {
                        children.onClick(event);
                        _this2.toggleMenuHandle();
                    } : this.toggleMenuHandle;
                    break;
                case 'hover':
                    others.onMouseOver = function () {
                        return _this2.toggleMenuHandle(true);
                    };
                    others.onMouseOut = function () {
                        return _this2.toggleMenuHandle(false);
                    };
                    break;
            }

            children = _react2.default.cloneElement(children, options);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('dropdown', { open: open }, className) }),
                children,
                _react2.default.createElement(
                    'div',
                    { className: 'dropdown-menu' },
                    menus && menus.map(function (menu, index) {
                        return Object.prototype.toString.call(menu) === '[object String]' ? _react2.default.createElement('div', { key: index, className: 'dropdown-divider' }) : _react2.default.createElement(
                            'a',
                            { key: index, href: menu.href,
                                className: (0, _classnames2.default)('dropdown-item', { disabled: menu.disabled, active: menu.active }),
                                onClick: function onClick(event) {
                                    return _this2.menuClickHandle(menu, index, event);
                                } },
                            menu.name || menu.text || menu.value
                        );
                    })
                )
            );
        }
    }]);
    return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
    // 触发动作
    trigger: _react.PropTypes.oneOf(['click', 'hover']),
    // menus: PropTypes.arrayOf(PropTypes.object),
    //菜单
    menus: _react.PropTypes.arrayOf(function (value, index, componentName, location, propFullName) {
        var callResult = Object.prototype.toString.call(value[index]);
        if (callResult !== '[object String]' & callResult !== '[object Object]') {
            return new Error('Invalid prop \'' + propFullName + '\', supplied to \'' + componentName + '\', expected \'object\' or \'string\'.');
        }
    }).isRequired,
    //回调
    onClick: _react.PropTypes.func,
    //子节点
    children: _react.PropTypes.element.isRequired
};
Dropdown.defaultProps = {
    trigger: 'click'
};
exports.default = Dropdown;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Dropdown, 'Dropdown', 'src/scripts/Dropdown.js');
})();

;