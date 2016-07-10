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

var _AttentionLink = require('./AttentionLink');

var _AttentionLink2 = _interopRequireDefault(_AttentionLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Attention 组件
 */

var Attention = function (_Component) {
    (0, _inherits3.default)(Attention, _Component);

    //初始state

    function Attention(props, context) {
        (0, _classCallCheck3.default)(this, Attention);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Attention).call(this, props, context));

        _this.state = {
            show: true
        };

        _this.hideHandle = _this.hideHandle.bind(_this);
        return _this;
    }
    // props 校验


    (0, _createClass3.default)(Attention, [{
        key: 'hideHandle',

        //关闭
        value: function hideHandle() {
            this.setState({
                show: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var style = _props.style;
            var className = _props.className;
            var closeable = _props.closeable;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['style', 'className', 'closeable', 'children']);
            var styleClass = 'attention-' + style;
            var hiddenClass = this.state.show ? '' : 'hidden';

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('attention', styleClass, hiddenClass, className) }),
                children,
                closeable && _react2.default.createElement(
                    'button',
                    { type: 'button', className: 'close', onClick: this.hideHandle },
                    '×'
                )
            );
        }
    }]);
    return Attention;
}(_react.Component);

Attention.propTypes = {
    //样式（success、primary、warning、danger）
    style: _react.PropTypes.string,
    //是否可关闭
    closeable: _react.PropTypes.bool,
    //自定义样式
    className: _react.PropTypes.string
};
exports.default = Attention;


Attention.Link = _AttentionLink2.default;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Attention, 'Attention', 'src/scripts/Attention.js');
})();

;