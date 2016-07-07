'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
 * LoadingAddon组件.
 */

var LoadingAddon = function (_Component) {
    (0, _inherits3.default)(LoadingAddon, _Component);

    /**
     * 初始信息.
     */

    function LoadingAddon(props, context) {
        (0, _classCallCheck3.default)(this, LoadingAddon);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LoadingAddon).call(this, props, context));

        _this.state = {
            dottedCount: 0
        };
        return _this;
    }
    //props校验

    //默认props


    (0, _createClass3.default)(LoadingAddon, [{
        key: 'getLoadingAddon',

        /**
         * 根据类型获取loading的addon.
         * @return {Html} [addon片段]
         */
        value: function getLoadingAddon() {
            var type = this.props.type;


            switch (type) {
                case 'fountain': //喷泉
                case 'wave':
                    //波纹
                    return _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)('loading-addon') },
                        _react2.default.createElement('div', null)
                    );
                case 'pendule':
                    //摆钟
                    return _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)('loading-addon') },
                        _react2.default.createElement('div', null),
                        _react2.default.createElement('div', null)
                    );
                case 'cyclone':
                    //旋风
                    return _react2.default.createElement('div', { className: (0, _classnames2.default)('loading-addon') });
            }
        }
        /**
         * 获取点点数量.
         * @return {String} [点点]
         */

    }, {
        key: 'getDotted',
        value: function getDotted() {
            var dottedCount = this.state.dottedCount;
            var result = [];

            for (var i = 0; i < dottedCount; i++) {
                result[i] = '.';
            }

            return result.join('');
        }
        /**
         * 设置定时器.
         */

    }, {
        key: 'setDottedInterval',
        value: function setDottedInterval() {
            var _this2 = this;

            var dottedCount = this.state.dottedCount;


            this.interval = setInterval(function () {
                dottedCount += 1;
                dottedCount > 3 && (dottedCount = 0);

                _this2.setState({
                    dottedCount: dottedCount
                });
            }, 600);
        }
        /**
         * 清空定时器.
         */

    }, {
        key: 'clearDottedInterval',
        value: function clearDottedInterval() {
            clearInterval(this.interval);
        }
        /**
         * 清除定时器.
         */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.clearDottedInterval();
        }
        /**
         * 根据props添加或清空定时器.
         * @param  {Object} nextprops [新props]
         */

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextprops) {
            !nextprops.show && this.clearDottedInterval();
            !this.props.show && nextprops.show && this.setDottedInterval();
        }
        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var type = _props.type;
            var loadingMsg = _props.loadingMsg;
            var className = _props.className;
            var others = _props.others;
            var typeClass = 'loading-' + type;
            var loadingAddon = this.getLoadingAddon();
            var dotted = this.getDotted();

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('loading', typeClass, className) }),
                loadingAddon,
                _react2.default.createElement(
                    'div',
                    { className: 'loading-message' },
                    loadingMsg,
                    _react2.default.createElement(
                        'span',
                        { className: 'loading-message-dotted' },
                        dotted
                    )
                )
            );
        }
    }]);
    return LoadingAddon;
}(_react.Component);

LoadingAddon.propTypes = {
    //自定义样式
    className: _react.PropTypes.string,
    //类型
    type: _react.PropTypes.oneOf(['fountain', 'wave', 'pendule', 'cyclone']),
    //信息提示
    loadingMsg: _react.PropTypes.string,
    //显示
    show: _react.PropTypes.bool
};
LoadingAddon.defaultProps = {
    type: 'cyclone',
    loadingMsg: '加载中',
    show: false
};
exports.default = LoadingAddon;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(LoadingAddon, 'LoadingAddon', 'src/scripts/LoadingAddon.js');
})();

;