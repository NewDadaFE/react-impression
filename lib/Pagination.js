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
 * Pagination组件.
 */

var Pagination = function (_Component) {
    (0, _inherits3.default)(Pagination, _Component);

    //构造函数

    function Pagination(props, context) {
        (0, _classCallCheck3.default)(this, Pagination);


        //上下文绑定

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Pagination).call(this, props, context));

        _this.prevPageHandle = _this.prevPageHandle.bind(_this);
        _this.nextPageHandle = _this.nextPageHandle.bind(_this);
        _this.goPageHandle = _this.goPageHandle.bind(_this);
        return _this;
    }
    //默认props

    //props校验


    (0, _createClass3.default)(Pagination, [{
        key: 'prevPageHandle',

        //上一页
        value: function prevPageHandle() {
            var _props = this.props;
            var onSelect = _props.onSelect;
            var activePage = _props.activePage;

            activePage -= 1;

            activePage >= 1 && onSelect && onSelect(activePage);
        }
        //下一页

    }, {
        key: 'nextPageHandle',
        value: function nextPageHandle() {
            var _props2 = this.props;
            var onSelect = _props2.onSelect;
            var activePage = _props2.activePage;
            var totalPage = _props2.totalPage;

            activePage += 1;

            activePage <= totalPage && onSelect && onSelect(activePage);
        }
        //跳转至某页

    }, {
        key: 'goPageHandle',
        value: function goPageHandle(page) {
            var onSelect = this.props.onSelect;


            onSelect && onSelect(page);
        }
        //获取显示页码

    }, {
        key: 'getShowPageArray',
        value: function getShowPageArray() {
            var _props3 = this.props;
            var scope = _props3.scope;
            var totalPage = _props3.totalPage;
            var activePage = _props3.activePage;
            var result = [];
            scope = scope < 0 ? 2 : scope;

            for (var i = activePage - scope; i <= activePage + scope; i++) {
                if (i > 0 && i <= totalPage) {
                    i == activePage - scope && i == 2 && result.push(1);
                    result.push(i);
                    i == activePage + scope && i == totalPage - 1 && result.push(totalPage);
                }
            }

            return result;
        }
        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props4 = this.props;
            var totalPage = _props4.totalPage;
            var className = _props4.className;
            var ellipsis = _props4.ellipsis;
            var activePage = _props4.activePage;
            var others = (0, _objectWithoutProperties3.default)(_props4, ['totalPage', 'className', 'ellipsis', 'activePage']);
            var children = this.getShowPageArray();

            return _react2.default.createElement(
                'ul',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('Pagination', className) }),
                _react2.default.createElement(
                    'li',
                    { className: (0, _classnames2.default)('page-item', { disabled: activePage <= 1 }) },
                    _react2.default.createElement(
                        'a',
                        { className: 'page-link', href: 'javascript:void(0);', onClick: this.prevPageHandle },
                        _react2.default.createElement('i', { className: 'fa fa-angle-left' })
                    )
                ),
                ellipsis && children[0] > 1 && _react2.default.createElement(
                    'li',
                    { className: 'page-item disabled' },
                    _react2.default.createElement('i', { className: 'fa fa-ellipsis-h' })
                ),
                children.map(function (child, index) {
                    return _react2.default.createElement(
                        'li',
                        { key: index, className: (0, _classnames2.default)('page-item', { active: child === activePage }) },
                        _react2.default.createElement(
                            'a',
                            { className: 'page-link', href: 'javascript:void(0);', onClick: function onClick() {
                                    return _this2.goPageHandle(child);
                                } },
                            child
                        )
                    );
                }),
                ellipsis && children[children.length - 1] < totalPage && _react2.default.createElement(
                    'li',
                    { className: 'page-item disabled' },
                    _react2.default.createElement('i', { className: 'fa fa-ellipsis-h' })
                ),
                _react2.default.createElement(
                    'li',
                    { className: (0, _classnames2.default)('page-item', { disabled: activePage >= totalPage }) },
                    _react2.default.createElement(
                        'a',
                        { className: 'page-link', href: 'javascript:void(0);', onClick: this.nextPageHandle },
                        _react2.default.createElement('i', { className: 'fa fa-angle-right' })
                    )
                )
            );
        }
    }]);
    return Pagination;
}(_react.Component);

Pagination.defaultProps = {
    activePage: 1,
    scope: 2,
    ellipsis: true
};
Pagination.propTypes = {
    //前后延伸
    scope: _react.PropTypes.number,
    //当前在第几页
    activePage: _react.PropTypes.number,
    //总页数
    totalPage: _react.PropTypes.number.isRequired,
    //是否显示省略号
    ellipsis: _react.PropTypes.bool,
    //onSelect
    onSelect: _react.PropTypes.func,
    //自定义样式
    className: _react.PropTypes.string
};
exports.default = Pagination;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Pagination, 'Pagination', 'src/scripts/Pagination.js');
})();

;