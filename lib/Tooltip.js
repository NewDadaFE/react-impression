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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tooltip组件.
 */

var Tooltip = function (_Component) {
    (0, _inherits3.default)(Tooltip, _Component);

    function Tooltip() {
        (0, _classCallCheck3.default)(this, Tooltip);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tooltip).apply(this, arguments));
    }

    (0, _createClass3.default)(Tooltip, [{
        key: 'createTooltip',

        //创建tooltip

        //prop type校验
        value: function createTooltip(targetRect) {
            var _props = this.props;
            var position = _props.position;
            var content = _props.content;
            var positionClass = 'tooltip-' + position;
            var tooltipNode = document.createElement('div');
            var arrowNode = document.createElement('div');
            var innerNode = document.createElement('div');

            tooltipNode.className = 'tooltip ' + positionClass;
            arrowNode.className = 'tooltip-arrow';
            innerNode.className = 'tooltip-inner';

            innerNode.innerHTML = content;
            tooltipNode.appendChild(arrowNode);
            tooltipNode.appendChild(innerNode);

            document.body.appendChild(tooltipNode);
            var tooltipRect = tooltipNode.getBoundingClientRect();

            //计算left、top
            switch (position) {
                case 'top':
                    tooltipNode.style.top = targetRect.top - tooltipRect.height;
                    tooltipNode.style.left = targetRect.left - (tooltipRect.width - targetRect.width) / 2;
                    break;
                case 'bottom':
                    tooltipNode.style.top = targetRect.top + targetRect.height;
                    tooltipNode.style.left = targetRect.left - (tooltipRect.width - targetRect.width) / 2;
                    break;
                case 'left':
                    tooltipNode.style.left = targetRect.left - tooltipRect.width;
                    tooltipNode.style.top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
                    break;
                case 'right':
                    tooltipNode.style.left = targetRect.left + targetRect.width;
                    tooltipNode.style.top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
                    break;
            }

            tooltipNode.classList.add('in');
            this.tooltip = tooltipNode;
        }
        //显示tooltip

        //默认props

    }, {
        key: 'onMouseOver',
        value: function onMouseOver(event) {
            var rect = event.target.getBoundingClientRect();
            this.createTooltip(rect);
        }
        //移除tooltip

    }, {
        key: 'onMouseOut',
        value: function onMouseOut() {
            document.body.removeChild(this.tooltip);
        }
        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var children = this.props.children;
            var _children$props = children.props;
            var onMouseOver = _children$props.onMouseOver;
            var onMouseOut = _children$props.onMouseOut;


            children = _react2.default.cloneElement(children, {
                onMouseOver: onMouseOver ? function (event) {
                    onMouseOver();
                    _this2.onMouseOver(event);
                } : this.onMouseOver.bind(this),
                onMouseOut: onMouseOut ? function (event) {
                    onMouseOut();
                    _this2.onMouseOut(event);
                } : this.onMouseOut.bind(this)
            });

            return children;
        }
    }]);
    return Tooltip;
}(_react.Component);

Tooltip.propTypes = {
    position: _react.PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
    content: _react.PropTypes.string,
    children: _react.PropTypes.element.isRequired
};
Tooltip.defaultProps = {
    position: 'right'
};
exports.default = Tooltip;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Tooltip, 'Tooltip', 'src/scripts/Tooltip.js');
})();

;