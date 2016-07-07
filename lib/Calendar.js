'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//时间格式
var FORMAT = {
    YEAR: 'YYYY',
    MONTH: 'MM',
    DATE: 'YYYY-MM-DD'
};

/**
 * 日历组件.
 */

var Calendar = function (_Component) {
    (0, _inherits3.default)(Calendar, _Component);

    function Calendar(props, context) {
        (0, _classCallCheck3.default)(this, Calendar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Calendar).call(this, props, context));

        var date = props.date;
        var format = props.format;
        var weekdays = _this.getSortWeekdays();
        var currentMoment = date ? (0, _moment2.default)(date, format) : (0, _moment2.default)();

        _this.state = {
            currentMoment: currentMoment, //当前时间
            days: [], //日期选择
            weekdays: weekdays
        };

        _this.prevMonthHandle = _this.prevMonthHandle.bind(_this);
        _this.nextMonthHandle = _this.nextMonthHandle.bind(_this);
        return _this;
    }
    //默认props


    (0, _createClass3.default)(Calendar, [{
        key: 'getSortWeekdays',

        /**
         * 获取排序后的星期.
         * @return {[Array]} [星期数组]
         */
        value: function getSortWeekdays() {
            var _props = this.props;
            var firstDayOfWeek = _props.firstDayOfWeek;
            var weekdays = _props.weekdays;


            return firstDayOfWeek === 0 ? weekdays : [].concat((0, _toConsumableArray3.default)(weekdays.slice(firstDayOfWeek, weekdays.length)), (0, _toConsumableArray3.default)(weekdays.slice(0, firstDayOfWeek)));
        }
        /**
         * 前一个月.
         */

    }, {
        key: 'prevMonthHandle',
        value: function prevMonthHandle() {
            var currentMoment = this.state.currentMoment;
            var onDateChange = this.props.onDateChange;
            var prevMonthMoment = (0, _moment2.default)(currentMoment).subtract(1, 'months');

            this.setState({
                currentMoment: prevMonthMoment
            });

            onDateChange && onDateChange(prevMonthMoment);
        }
        /**
         * 下一个月.
         */

    }, {
        key: 'nextMonthHandle',
        value: function nextMonthHandle() {
            var currentMoment = this.state.currentMoment;
            var onDateChange = this.props.onDateChange;
            var nextMonthMoment = (0, _moment2.default)(currentMoment).add(1, 'months');

            this.setState({
                currentMoment: nextMonthMoment
            });

            onDateChange && onDateChange(nextMonthMoment);
        }
        /**
         * 获取日期项.
         */

    }, {
        key: 'getDate',
        value: function getDate() {
            var firstDayOfWeek = this.props.firstDayOfWeek;
            var currentMoment = this.state.currentMoment;
            var days = [];
            var today = (0, _moment2.default)().format(FORMAT.DATE);
            var prevMonth = (0, _moment2.default)(currentMoment).subtract(1, 'months');
            var nextMonth = (0, _moment2.default)(currentMoment).add(1, 'months');

            //当月天数
            var currentYear = currentMoment.format(FORMAT.YEAR),
                currentMonth = currentMoment.format(FORMAT.MONTH),
                daysLength = currentMoment.daysInMonth();

            for (var i = 1; i <= daysLength; i++) {
                var dayFormat = currentYear + '-' + currentMonth + '-' + i,
                    dayMoment = (0, _moment2.default)(dayFormat, FORMAT.DATE);

                days.push({
                    text: i,
                    date: dayMoment,
                    inMonth: true,
                    isToday: dayMoment.isSame(today)
                });
            }
            //上个月天数
            var firstDay = (0, _moment2.default)(currentMoment).date(1).day(),
                prevMonthYear = prevMonth.format(FORMAT.YEAR),
                prevMonthMonth = prevMonth.format(FORMAT.MONTH),
                prevMonthDaysLength = prevMonth.daysInMonth(),
                prevMonthMax = firstDay - firstDayOfWeek >= 0 ? firstDay - firstDayOfWeek : firstDay - firstDayOfWeek + 7;

            for (var _i = 0; _i <= prevMonthMax - 1; _i++) {
                var _dayFormat = prevMonthYear + '-' + prevMonthMonth + '-' + (prevMonthDaysLength - _i),
                    _dayMoment = (0, _moment2.default)(_dayFormat, FORMAT.DATE);

                days.unshift({
                    text: prevMonthDaysLength - _i,
                    date: _dayMoment,
                    isToday: _dayMoment.isSame(today)
                });
            }
            //下个月天数
            var lastDay = (0, _moment2.default)(currentMoment).date(daysLength).day(),
                nextMonthYear = nextMonth.format(FORMAT.YEAR),
                nextMonthMonth = nextMonth.format(FORMAT.MONTH),
                nextMonthMax = lastDay - firstDayOfWeek >= 0 ? 7 - lastDay + firstDayOfWeek : firstDayOfWeek - lastDay;

            for (var _i2 = 1; _i2 < nextMonthMax; _i2++) {
                var _dayFormat2 = nextMonthYear + '-' + nextMonthMonth + '-' + _i2,
                    _dayMoment2 = (0, _moment2.default)(_dayFormat2, FORMAT.DATE);

                days.push({
                    text: _i2,
                    date: _dayMoment2,
                    isToday: _dayMoment2.isSame(today)
                });
            }

            return days;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var format = this.props.format;
            var currentMoment = this.state.currentMoment;
            var date = nextProps.date;


            date && currentMoment.format(format) != date && this.setState({
                currentMoment: (0, _moment2.default)(date, format)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var size = _props2.size;
            var format = _props2.format;
            var firstDayOfWeek = _props2.firstDayOfWeek;
            var showHeader = _props2.showHeader;
            var showToolbar = _props2.showToolbar;
            var captionFormat = _props2.captionFormat;
            var dateCellRender = _props2.dateCellRender;
            var onDateCellClick = _props2.onDateCellClick;
            var className = _props2.className;
            var _state = this.state;
            var currentMoment = _state.currentMoment;
            var weekdays = _state.weekdays;
            var sizeClass = size ? 'calendar-' + size : '';
            var days = this.getDate();

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('calendar', sizeClass, className) },
                showHeader && _react2.default.createElement(
                    'div',
                    { className: 'calendar-header' },
                    _react2.default.createElement(
                        'div',
                        { className: 'calendar-header-caption' },
                        currentMoment.format(captionFormat)
                    ),
                    showToolbar && _react2.default.createElement(
                        'div',
                        { className: 'calendar-header-toolbar' },
                        _react2.default.createElement(
                            _ButtonGroup2.default,
                            { size: size },
                            _react2.default.createElement(
                                _Button2.default,
                                { onClick: this.prevMonthHandle },
                                _react2.default.createElement(_Icon2.default, { type: 'angle-left' })
                            ),
                            _react2.default.createElement(
                                _Button2.default,
                                { onClick: this.nextMonthHandle },
                                _react2.default.createElement(_Icon2.default, { type: 'angle-right' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'calendar-body' },
                    _react2.default.createElement(
                        'div',
                        { className: 'calendar-weekgroup' },
                        weekdays.map(function (weekday, index) {
                            return _react2.default.createElement(
                                'div',
                                { key: index, className: 'calendar-weekgroup-item' },
                                weekday
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'calendar-daygroup' },
                        days.map(function (day, index) {
                            return _react2.default.createElement(
                                'div',
                                { key: index, onClick: function onClick() {
                                        return onDateCellClick && onDateCellClick({
                                            day: day.text,
                                            year: day.date.format(FORMAT.YEAR),
                                            month: day.date.format(FORMAT.MONTH),
                                            date: day.date.format(format),
                                            inMonth: day.inMonth,
                                            isToday: day.isToday
                                        });
                                    },
                                    className: (0, _classnames2.default)('calendar-daygroup-item', { disabled: !day.inMonth, active: day.isToday }) },
                                _react2.default.createElement(
                                    'div',
                                    { className: (0, _classnames2.default)('calendar-daygroup-item-header', {
                                            'text-secondary': (index + firstDayOfWeek) % 7 === 0 || (index + firstDayOfWeek + 1) % 7 === 0
                                        }) },
                                    day.text
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'calendar-daygroup-item-body' },
                                    dateCellRender && dateCellRender({
                                        day: day.text,
                                        year: day.date.format(FORMAT.YEAR),
                                        month: day.date.format(FORMAT.MONTH),
                                        date: day.date.format(format),
                                        inMonth: day.inMonth,
                                        isToday: day.isToday
                                    })
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);
    return Calendar;
}(_react.Component);

Calendar.propTypes = {
    //尺寸
    size: _react.PropTypes.oneOf(['sm', 'lg']),
    //时间
    date: _react.PropTypes.string,
    //时间格式
    format: _react.PropTypes.string,
    //头部显示格式
    captionFormat: _react.PropTypes.string,
    //一周第一天
    firstDayOfWeek: _react.PropTypes.number,
    //周几
    weekdays: _react.PropTypes.arrayOf(_react.PropTypes.string),
    //月份
    months: _react.PropTypes.arrayOf(_react.PropTypes.string),
    //是否显示工具栏
    showToolbar: _react.PropTypes.bool,
    //是否显示头部
    showHeader: _react.PropTypes.bool,
    //自定义内容
    dateCellRender: _react.PropTypes.func,
    //时间单元格点击
    onDateCellClick: _react.PropTypes.func,
    //日历时间切换
    onDateChange: _react.PropTypes.func
};
Calendar.defaultProps = {
    format: FORMAT.DATE,
    captionFormat: 'YYYY年MM月',
    showToolbar: true,
    showHeader: true,
    firstDayOfWeek: 1,
    weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
};
exports.default = Calendar;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(FORMAT, 'FORMAT', 'src/scripts/Calendar.js');

    __REACT_HOT_LOADER__.register(Calendar, 'Calendar', 'src/scripts/Calendar.js');
})();

;