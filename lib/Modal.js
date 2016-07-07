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

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalBody = require('./ModalBody');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalFooter = require('./ModalFooter');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modal组件.
 */

var Modal = function (_Component) {
    (0, _inherits3.default)(Modal, _Component);

    function Modal() {
        (0, _classCallCheck3.default)(this, Modal);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Modal).apply(this, arguments));
    }

    (0, _createClass3.default)(Modal, [{
        key: 'componentDidMount',

        /**
         * 不可scroll.
         */
        value: function componentDidMount() {}
        // document.querySelector('.content').onmousewheel = event => {
        //     event.preventDefault();
        //     return false;
        // };

        /**
         * 恢复scroll.
         */

        //props校验

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
        // document.querySelector('.content').onmousewheel = null;

        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var size = _props.size;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['size', 'className', 'children']);
            var sizeClass = size ? 'modal-' + size : null;

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('modal', className) }),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('modal-dialog', sizeClass) },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-content slideInDown' },
                        children
                    )
                )
            );
        }
    }]);
    return Modal;
}(_react.Component);

Modal.propTypes = {
    //自定义样式
    className: _react.PropTypes.string,
    //大小
    size: _react.PropTypes.string
};
exports.default = Modal;


Modal.Header = _ModalHeader2.default;
Modal.Body = _ModalBody2.default;
Modal.Footer = _ModalFooter2.default;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Modal, 'Modal', 'src/scripts/Modal.js');
})();

;