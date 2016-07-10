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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//时间格式
var FORMAT = {
    YEAR: 'YYYY',
    MONTH: 'MM',
    YEAR_MONTH: 'YYYY-MM',
    DATE: 'YYYY-MM-DD'
};

/**
 * 时间组件.
 */

var DatePicker = function (_Component) {
    (0, _inherits3.default)(DatePicker, _Component);

    //构造函数

    function DatePicker(props, context) {
        (0, _classCallCheck3.default)(this, DatePicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DatePicker).call(this, props, context));

        var type = props.type;
        var value = props.value;
        var minDate = props.minDate;
        var maxDate = props.maxDate;
        var format = props.format;
        var weekdays = _this.getSortWeekdays();
        var currentMoment = value ? (0, _moment2.default)(value, format) : (0, _moment2.default)();
        var checkedDay = value ? (0, _moment2.default)(value, format) : undefined;
        var years = _this.getYears(currentMoment);

        var state = {
            currentMoment: currentMoment, //当前时间
            days: [], //日期选择
            weekdays: weekdays,
            checkedDay: checkedDay, //选中日期
            years: years };

        switch (type) {
            case 'date':
                state.format = format ? format : FORMAT.DATE;
                state.panel = 'day';
                break;
            case 'month':
                state.format = format ? format : FORMAT.YEAR_MONTH;
                state.panel = 'month';
                break;
        }

        state.minDate = minDate ? (0, _moment2.default)(minDate, state.format) : undefined;
        state.maxDate = maxDate ? (0, _moment2.default)(maxDate, state.format) : undefined;
        _this.state = state;

        _this.prevMonthHandle = _this.prevMonthHandle.bind(_this);
        _this.nextMonthHandle = _this.nextMonthHandle.bind(_this);
        _this.prevYearHandle = _this.prevYearHandle.bind(_this);
        _this.nextYearHandle = _this.nextYearHandle.bind(_this);
        _this.selectDateHandle = _this.selectDateHandle.bind(_this);
        _this.selectTodayHandle = _this.selectTodayHandle.bind(_this);
        _this.selectYearHandle = _this.selectYearHandle.bind(_this);
        _this.selectMonthHandle = _this.selectMonthHandle.bind(_this);
        _this.showMonthPanelHandle = _this.showMonthPanelHandle.bind(_this);
        _this.scrollYearHandle = _this.scrollYearHandle.bind(_this);
        _this.resetMonthPanelScroll = _this.resetMonthPanelScroll.bind(_this);
        return _this;
    }
    //prop type校验

    //默认props


    (0, _createClass3.default)(DatePicker, [{
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
         * 获取日期数据.
         * @param  {[Moment]} currentMoment [当前日期]
         */

    }, {
        key: 'getDate',
        value: function getDate(currentMoment) {
            var _state = this.state;
            var minDate = _state.minDate;
            var maxDate = _state.maxDate;
            var firstDayOfWeek = this.props.firstDayOfWeek;
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
                    isToday: dayMoment.isSame(today),
                    disable: minDate && dayMoment.isBefore(minDate) || maxDate && dayMoment.isAfter(maxDate)
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
                    isToday: _dayMoment.isSame(today),
                    disable: minDate && _dayMoment.isBefore(minDate) || maxDate && _dayMoment.isAfter(maxDate)
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
                    isToday: _dayMoment2.isSame(today),
                    disable: minDate && _dayMoment2.isBefore(minDate) || maxDate && _dayMoment2.isAfter(maxDate)
                });
            }

            this.setState({
                days: days,
                currentMoment: currentMoment
            });
        }
        /**
         * 根据当前时间获取年份列表.
         * @param  {[Moment]} currentMoment [当前时间]
         * @return {[Array]}                [年份列表]
         */

    }, {
        key: 'getYears',
        value: function getYears(currentMoment) {
            var yearScope = this.props.yearScope;
            var years = [];
            var currentYear = currentMoment.year();

            for (var i = currentYear - yearScope; i <= currentYear + yearScope; i++) {
                years.push(i);
            }

            return years;
        }
        /**
         * 上个月.
         */

    }, {
        key: 'prevMonthHandle',
        value: function prevMonthHandle() {
            var _state2 = this.state;
            var currentMoment = _state2.currentMoment;
            var panel = _state2.panel;

            this.getDate((0, _moment2.default)(currentMoment).subtract(1, 'months'));
            panel === 'month' && this.resetMonthPanelScroll();
        }
        /**
         * 下个月.
         */

    }, {
        key: 'nextMonthHandle',
        value: function nextMonthHandle() {
            var _state3 = this.state;
            var currentMoment = _state3.currentMoment;
            var panel = _state3.panel;

            this.getDate((0, _moment2.default)(currentMoment).add(1, 'months'));
            panel === 'month' && this.resetMonthPanelScroll();
        }
        /**
         * 上一年.
         */

    }, {
        key: 'prevYearHandle',
        value: function prevYearHandle() {
            var _state4 = this.state;
            var currentMoment = _state4.currentMoment;
            var panel = _state4.panel;

            this.getDate((0, _moment2.default)(currentMoment).subtract(1, 'years'));
            panel === 'month' && this.resetMonthPanelScroll();
        }
        /**
         * 下一年.
         */

    }, {
        key: 'nextYearHandle',
        value: function nextYearHandle() {
            var _state5 = this.state;
            var currentMoment = _state5.currentMoment;
            var panel = _state5.panel;

            this.getDate((0, _moment2.default)(currentMoment).add(1, 'years'));
            panel === 'month' && this.resetMonthPanelScroll();
        }
        /**
         * 选中时间.
         */

    }, {
        key: 'selectDateHandle',
        value: function selectDateHandle(day) {
            var _props2 = this.props;
            var onSelect = _props2.onSelect;
            var onChange = _props2.onChange;
            var _state6 = this.state;
            var checkedDay = _state6.checkedDay;
            var format = _state6.format;
            var dayFormat = day.format(format);

            this.setState({
                checkedDay: day
            });

            onSelect && onSelect(dayFormat);
            onChange && checkedDay !== day && onChange(dayFormat);
        }
        /**
         * 选中年份.
         * @param  {[String]} year [年份]
         */

    }, {
        key: 'selectYearHandle',
        value: function selectYearHandle(year) {
            var currentMoment = this.state.currentMoment;
            var newMoment = (0, _moment2.default)(currentMoment).year(year);

            this.setState({
                checkedDay: undefined,
                currentMoment: newMoment
            });
            this.getDate(newMoment);
        }
        /**
         * 选中月份.
         * @param  {[String]} month [月份]
         */

    }, {
        key: 'selectMonthHandle',
        value: function selectMonthHandle(month) {
            var _state7 = this.state;
            var currentMoment = _state7.currentMoment;
            var format = _state7.format;
            var _props3 = this.props;
            var type = _props3.type;
            var onSelect = _props3.onSelect;
            var onChange = _props3.onChange;
            var newMoment = (0, _moment2.default)(currentMoment).month(month);

            switch (type) {
                case 'date':
                    this.setState({
                        panel: 'day',
                        checkedDay: undefined,
                        currentMoment: newMoment
                    });
                    this.getDate(newMoment);
                    break;
                case 'month':
                    newMoment = newMoment.format(format);
                    onSelect && onSelect(newMoment);
                    onChange && onChange(newMoment);
                    break;
            }
        }
        /**
         * 今天.
         */

    }, {
        key: 'selectTodayHandle',
        value: function selectTodayHandle() {
            var _props4 = this.props;
            var onSelect = _props4.onSelect;
            var onChange = _props4.onChange;
            var minDate = _props4.minDate;
            var maxDate = _props4.maxDate;
            var _state8 = this.state;
            var checkedDay = _state8.checkedDay;
            var format = _state8.format;
            var today = (0, _moment2.default)((0, _moment2.default)().format(FORMAT.DATE));
            var dayFormat = today.format(format);

            if (minDate && today.isBefore(minDate) || maxDate && today.isAfter(maxDate)) {
                return false;
            }

            this.setState({
                checkedDay: today
            });

            onSelect && onSelect(dayFormat);
            onChange && checkedDay !== today && onChange(dayFormat);
        }
        /**
         * 显示年月选择面板.
         */

    }, {
        key: 'showMonthPanelHandle',
        value: function showMonthPanelHandle() {
            var panel = this.state.panel;

            this.setState({
                panel: panel === 'month' ? 'day' : 'month'
            });
        }
        /**
         * 更正month面板滚动条位置.
         */

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var type = this.props.type;

            type === 'date' && this.resetMonthPanelScroll();
        }
        /**
         * 修改month面板的滚动条位置.
         */

    }, {
        key: 'resetMonthPanelScroll',
        value: function resetMonthPanelScroll() {
            var _refs = this.refs;
            var _yeargroup = _refs._yeargroup;
            var _monthgroup = _refs._monthgroup;

            if (!this._activeYear || !this._activeMonth) {
                return false;
            }

            var yearHeight = this._activeYear.getBoundingClientRect().height,
                monthHeight = this._activeMonth.getBoundingClientRect().height;

            this._yeargroupScrollTop = _yeargroup.scrollTop = this._activeYear.offsetTop - _yeargroup.offsetTop - yearHeight * 2;
            _monthgroup.scrollTop = this._activeMonth.offsetTop - _monthgroup.offsetTop - monthHeight * 2;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var currentMoment = this.state.currentMoment;

            this.getDate(currentMoment);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var value = nextProps.value;
            var format = this.state.format;


            this.setState({
                checkedDay: value ? (0, _moment2.default)(value, format) : undefined
            });
        }
        /**
         * 无限获取年份.
         * @param  {[Event]} event [事件]
         */

    }, {
        key: 'scrollYearHandle',
        value: function scrollYearHandle(event) {
            var years = this.state.years;
            var container = event.target;
            var yearHeight = this._activeYear.getBoundingClientRect().height;
            var point = container.getBoundingClientRect().height + yearHeight;

            //上滑
            if (this._yeargroupScrollTop > container.scrollTop) {
                this._yeargroupScrollTop = container.scrollTop;
                if (container.scrollTop < yearHeight) {
                    var prevYear = years[0] - 1;
                    this.setState({
                        years: [prevYear].concat((0, _toConsumableArray3.default)(years))
                    });
                    container.scrollTop = container.scrollTop === 0 ? yearHeight : container.scrollTop + yearHeight;
                }
            } else if (this._yeargroupScrollTop < container.scrollTop) {
                //下滑
                this._yeargroupScrollTop = container.scrollTop;
                if (container.scrollHeight - container.scrollTop < point) {
                    var nextYear = years[years.length - 1] + 1;
                    this.setState({
                        years: [].concat((0, _toConsumableArray3.default)(years), [nextYear])
                    });
                }
            }
        }
        //渲染

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state9 = this.state;
            var panel = _state9.panel;
            var currentMoment = _state9.currentMoment;
            var weekdays = _state9.weekdays;
            var days = _state9.days;
            var checkedDay = _state9.checkedDay;
            var years = _state9.years;
            var _props5 = this.props;
            var showToday = _props5.showToday;
            var todayText = _props5.todayText;
            var months = _props5.months;
            var className = _props5.className;
            var currentYear = currentMoment.format(FORMAT.YEAR);
            var currentMonth = currentMoment.format(FORMAT.MONTH);

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('datepicker', className), onAnimationEnd: this.resetMonthPanelScroll },
                _react2.default.createElement(
                    'div',
                    { className: 'datepicker-header' },
                    _react2.default.createElement('i', { className: 'fa datepicker-header-btn fa-angle-double-left', onClick: this.prevYearHandle }),
                    _react2.default.createElement('i', { className: 'fa datepicker-header-btn fa-angle-left datepicker-month-btn', onClick: this.prevMonthHandle }),
                    _react2.default.createElement(
                        'div',
                        { className: 'datepicker-caption', onClick: this.showMonthPanelHandle },
                        currentYear,
                        '年',
                        currentMonth,
                        '月'
                    ),
                    _react2.default.createElement('i', { className: 'fa datepicker-header-btn fa-angle-right datepicker-month-btn', onClick: this.nextMonthHandle }),
                    _react2.default.createElement('i', { className: 'fa datepicker-header-btn fa-angle-double-right', onClick: this.nextYearHandle })
                ),
                panel === 'day' && _react2.default.createElement(
                    'div',
                    { className: 'datepicker-body' },
                    _react2.default.createElement(
                        'div',
                        { className: 'datepicker-weekgroup' },
                        weekdays.map(function (day, index) {
                            return _react2.default.createElement(
                                'div',
                                { key: index, className: 'datepicker-weekgroup-item' },
                                day
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'datepicker-daygroup' },
                        days.map(function (_ref, index) {
                            var text = _ref.text;
                            var date = _ref.date;
                            var checked = _ref.checked;
                            var isToday = _ref.isToday;
                            var inMonth = _ref.inMonth;
                            var disable = _ref.disable;
                            return _react2.default.createElement(
                                'div',
                                { key: index, onClick: function onClick() {
                                        return !disable && _this2.selectDateHandle(date);
                                    }, className: 'datepicker-daygroup-item' },
                                _react2.default.createElement(
                                    'div',
                                    { className: (0, _classnames2.default)('datepicker-daygroup-item-text', {
                                            disable: disable,
                                            now: isToday,
                                            'text-muted': !inMonth,
                                            active: date.isSame(checkedDay)
                                        }) },
                                    text
                                )
                            );
                        })
                    )
                ),
                panel === 'month' && _react2.default.createElement(
                    'div',
                    { className: 'datepicker-body' },
                    _react2.default.createElement(
                        'div',
                        { className: 'datepicker-yeargroup', ref: '_yeargroup', onScroll: this.scrollYearHandle },
                        years.map(function (year, index) {
                            return _react2.default.createElement(
                                'div',
                                { key: index, onClick: function onClick() {
                                        return _this2.selectYearHandle(year);
                                    },
                                    ref: function ref(dom) {
                                        return year == currentYear && (_this2._activeYear = dom);
                                    },
                                    className: (0, _classnames2.default)('datepicker-yeargroup-item', { active: year == currentYear }) },
                                year
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'datepicker-monthgroup', ref: '_monthgroup' },
                        months.map(function (month, index) {
                            return _react2.default.createElement(
                                'div',
                                { key: index, onClick: function onClick() {
                                        return _this2.selectMonthHandle(index);
                                    },
                                    ref: function ref(dom) {
                                        return index == currentMonth - 1 && (_this2._activeMonth = dom);
                                    },
                                    className: (0, _classnames2.default)('datepicker-monthgroup-item', { active: index == currentMonth - 1 }) },
                                month
                            );
                        })
                    )
                ),
                showToday && panel !== 'month' && _react2.default.createElement(
                    'div',
                    { className: 'datepicker-footer' },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(0);', onClick: this.selectTodayHandle },
                        todayText
                    )
                )
            );
        }
    }]);
    return DatePicker;
}(_react.Component);

DatePicker.propTypes = {
    //类型
    type: _react.PropTypes.oneOf(['date', 'month']),
    //自定义样式
    className: _react.PropTypes.string,
    //日期
    value: _react.PropTypes.string,
    //格式
    format: _react.PropTypes.string,
    //星期
    weekdays: _react.PropTypes.arrayOf(_react.PropTypes.string),
    //月份
    months: _react.PropTypes.arrayOf(_react.PropTypes.string),
    //是否显示今天
    showToday: _react.PropTypes.bool,
    //今天
    todayText: _react.PropTypes.string,
    //星期第一天
    firstDayOfWeek: _react.PropTypes.number,
    //最小日期
    minDate: _react.PropTypes.string,
    //最大日期
    maxDate: _react.PropTypes.string,
    //年份前后默认范围
    yearScope: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    //选中时间
    onSelect: _react.PropTypes.func,
    //修改选中时间
    onChange: _react.PropTypes.func
};
DatePicker.defaultProps = {
    type: 'date',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    showToday: true,
    todayText: '今天',
    firstDayOfWeek: 0,
    yearScope: 5,
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
};
exports.default = DatePicker;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(FORMAT, 'FORMAT', 'src/scripts/DatePicker.js');

    __REACT_HOT_LOADER__.register(DatePicker, 'DatePicker', 'src/scripts/DatePicker.js');
})();

;