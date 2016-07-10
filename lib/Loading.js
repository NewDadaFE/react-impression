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

var _LoadingAddon = require('./LoadingAddon');

var _LoadingAddon2 = _interopRequireDefault(_LoadingAddon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _loading = undefined,
    _startDate = undefined,
    _endDate = undefined,
    _duration = 1000;

/**
 * Loading组件.
 */

var Loading = function (_Component) {
    (0, _inherits3.default)(Loading, _Component);

    /**
     * 初始信息.
     */

    function Loading(props, context) {
        (0, _classCallCheck3.default)(this, Loading);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Loading).call(this, props, context));

        _loading = _this;

        props.duration && (_duration = props.duration);
        _this.state = {
            show: false
        };

        _this.hideHandle = _this.hideHandle.bind(_this);
        return _this;
    }
    //props校验

    //默认props


    (0, _createClass3.default)(Loading, [{
        key: 'hideHandle',

        /**
         * 关闭loading.
         */
        value: function hideHandle() {
            var closeable = this.props.closeable;


            closeable && this.setState({
                show: false
            });
        }
        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var type = _props.type;
            var loadingMsg = _props.loadingMsg;
            var show = this.state.show;


            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('loading-mask', { invisible: !show }), onClick: this.hideHandle },
                _react2.default.createElement(_LoadingAddon2.default, { type: type, show: show, loadingMsg: loadingMsg })
            );
        }
    }]);
    return Loading;
}(_react.Component);

Loading.propTypes = {
    //自定义样式
    className: _react.PropTypes.string,
    //类型
    type: _react.PropTypes.oneOf(['fountain', 'wave', 'pendule', 'cyclone']),
    //加载文本
    loadingMsg: _react.PropTypes.string,
    //可关闭
    closeable: _react.PropTypes.bool
};
Loading.defaultProps = {
    type: 'cyclone',
    closeable: false,
    loadingMsg: '加载中'
};
exports.default = Loading;


Loading.Addon = _LoadingAddon2.default;
Loading.show = function () {
    _startDate = new Date();
    _loading.setState({
        show: true
    });
};

Loading.hide = function () {
    _endDate = new Date();
    if (_endDate - _startDate < _duration) {
        setTimeout(function () {
            _loading.setState({
                show: false
            });
        }, _duration - (_endDate - _startDate));

        return false;
    }

    _loading.setState({
        show: false
    });
};
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_loading, '_loading', 'src/scripts/Loading.js');

    __REACT_HOT_LOADER__.register(_startDate, '_startDate', 'src/scripts/Loading.js');

    __REACT_HOT_LOADER__.register(_endDate, '_endDate', 'src/scripts/Loading.js');

    __REACT_HOT_LOADER__.register(_duration, '_duration', 'src/scripts/Loading.js');

    __REACT_HOT_LOADER__.register(Loading, 'Loading', 'src/scripts/Loading.js');
})();

;