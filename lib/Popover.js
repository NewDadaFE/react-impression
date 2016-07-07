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
 * Popover组件.
 */

var Popover = function (_Component) {
    (0, _inherits3.default)(Popover, _Component);

    function Popover() {
        (0, _classCallCheck3.default)(this, Popover);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Popover).apply(this, arguments));
    }

    (0, _createClass3.default)(Popover, [{
        key: 'createPopover',

        //创建popover

        //prop type校验
        value: function createPopover(targetRect) {
            var _props = this.props;
            var position = _props.position;
            var title = _props.title;
            var content = _props.content;
            var positionClass = 'popover-' + position;
            var popoverNode = document.createElement('div');
            var arrowNode = document.createElement('div');
            var titleNode = document.createElement('div');
            var contentNode = document.createElement('div');

            popoverNode.className = 'popover ' + positionClass;
            arrowNode.className = 'popover-arrow';
            titleNode.className = 'popover-title';
            contentNode.className = 'popover-content';

            titleNode.innerHTML = title;
            contentNode.innerHTML = content;
            popoverNode.appendChild(arrowNode);
            popoverNode.appendChild(titleNode);
            popoverNode.appendChild(contentNode);

            document.body.appendChild(popoverNode);
            var popoverRect = popoverNode.getBoundingClientRect();

            //计算left、top
            switch (position) {
                case 'top':
                    popoverNode.style.top = targetRect.top - popoverRect.height;
                    popoverNode.style.left = targetRect.left - (popoverRect.width - targetRect.width) / 2;
                    break;
                case 'bottom':
                    popoverNode.style.top = targetRect.top + targetRect.height;
                    popoverNode.style.left = targetRect.left - (popoverRect.width - targetRect.width) / 2;
                    break;
                case 'left':
                    popoverNode.style.left = targetRect.left - popoverRect.width;
                    popoverNode.style.top = targetRect.top + (targetRect.height - popoverRect.height) / 2;
                    break;
                case 'right':
                    popoverNode.style.left = targetRect.left + targetRect.width;
                    popoverNode.style.top = targetRect.top + (targetRect.height - popoverRect.height) / 2;
                    break;
            }

            this.popover = popoverNode;
        }
        //显示popover

        //默认props

    }, {
        key: 'onMouseOver',
        value: function onMouseOver(event) {
            var rect = event.target.getBoundingClientRect();
            this.createPopover(rect);
        }
        //移除popover

    }, {
        key: 'onMouseOut',
        value: function onMouseOut() {
            document.body.removeChild(this.popover);
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
    return Popover;
}(_react.Component);

Popover.propTypes = {
    //显示位置
    position: _react.PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
    //标题
    title: _react.PropTypes.string,
    //内容
    content: _react.PropTypes.string,
    //子节点
    children: _react.PropTypes.element.isRequired
};
Popover.defaultProps = {
    position: 'right'
};
exports.default = Popover;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Popover, 'Popover', 'src/scripts/Popover.js');
})();

;