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

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavLink = require('./NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

var _NavTitle = require('./NavTitle');

var _NavTitle2 = _interopRequireDefault(_NavTitle);

var _NavCollapse = require('./NavCollapse');

var _NavCollapse2 = _interopRequireDefault(_NavCollapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Nav 组件
 */

var Nav = function (_Component) {
    (0, _inherits3.default)(Nav, _Component);

    //构造函数

    function Nav(props, context) {
        (0, _classCallCheck3.default)(this, Nav);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Nav).call(this, props, context));

        _this.state = {
            activeKey: _this.props.activeKey
        };

        //绑定上下文
        _this.onSelectHandle = _this.onSelectHandle.bind(_this);
        return _this;
    }
    //props校验

    //默认props


    (0, _createClass3.default)(Nav, [{
        key: 'onSelectHandle',

        //选中回调
        value: function onSelectHandle(eventKey) {
            var activeKey = this.state.activeKey;
            var onSelect = this.props.onSelect;


            if (activeKey === eventKey) {
                return false;
            }
            this.setState({ activeKey: eventKey });
            onSelect && onSelect(eventKey);
        }
        //返回type映射的class

    }, {
        key: 'getTypeClassMap',
        value: function getTypeClassMap(type) {
            var map = {
                tab: 'nav-tabs',
                pill: 'nav-pills',
                inline: 'nav-inline'
            };

            return map[type] ? map[type] : type;
        }
        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var type = _props.type;
            var stacked = _props.stacked;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['type', 'stacked', 'className', 'children']);
            var activeKey = this.state.activeKey;
            var navStacked = stacked && type == 'pill' ? 'nav-stacked' : null;
            var navStyle = this.getTypeClassMap(type);

            delete others.activeKey;
            children = _react2.default.Children.toArray(children);
            type && (children = children && children.map(function (child, index) {
                var eventKey = child.props.eventKey;

                return _react2.default.cloneElement(child, {
                    key: index,
                    eventKey: eventKey || index + 1,
                    active: eventKey && eventKey === activeKey || index + 1 === activeKey,
                    onClick: _this2.onSelectHandle
                });
            }));

            return _react2.default.createElement(
                'ul',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('nav', navStacked, navStyle, className) }),
                children
            );
        }
    }]);
    return Nav;
}(_react.Component);

Nav.propTypes = {
    type: _react.PropTypes.string,
    stacked: _react.PropTypes.bool,
    activeKey: _react.PropTypes.number,
    onSelect: _react.PropTypes.func
};
Nav.defaultProps = {
    stacked: false
};
exports.default = Nav;


Nav.Item = _NavItem2.default;
Nav.Link = _NavLink2.default;
Nav.Title = _NavTitle2.default;
Nav.Collapse = _NavCollapse2.default;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Nav, 'Nav', 'src/scripts/Nav.js');
})();

;