import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import moment from 'moment';

//时间格式
const FORMAT = {
    YEAR: 'YYYY',
    MONTH: 'MM',
    DATE: 'YYYY-MM-DD'
};

/**
 * 时间组件.
 */
export default class DatePicker extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
        let { date, minDate, maxDate, format } = props,
            { firstDayOfWeek, weekdays } = this.sortWeekdays(),
            currentMoment = date? moment(date, format) : moment(),
            years = this.getYears(currentMoment);

        this.state = {
            currentMoment,//当前时间
            days: [],//日期选择
            checkedDay: undefined,//选中日期
            weekdays,//星期
            firstDayOfWeek,//星期第一天
            panel: 'day',//面板
            years,//年份
            minDate: minDate? moment(minDate, format) : undefined,//最小日期
            maxDate: maxDate? moment(maxDate, format) : undefined,//最大日期
        };

        this.prevMonthHandle = this.prevMonthHandle.bind(this);
        this.nextMonthHandle = this.nextMonthHandle.bind(this);
        this.prevYearHandle = this.prevYearHandle.bind(this);
        this.nextYearHandle = this.nextYearHandle.bind(this);
        this.selectDateHandle = this.selectDateHandle.bind(this);
        this.selectTodayHandle = this.selectTodayHandle.bind(this);
        this.selectYearHandle = this.selectYearHandle.bind(this);
        this.selectMonthHandle = this.selectMonthHandle.bind(this);
        this.showMonthPanelHandle = this.showMonthPanelHandle.bind(this);
        this.scrollYearHandle = this.scrollYearHandle.bind(this);
    }
    //prop type校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //日期
        date: PropTypes.string,
        //格式
        format: PropTypes.string,
        //星期
        weekdays: PropTypes.arrayOf(PropTypes.string),
        //月份
        months: PropTypes.arrayOf(PropTypes.string),
        //是否显示今天
        showToday: PropTypes.bool,
        //今天
        todayText: PropTypes.string,
        //星期第一天
        firstDayOfWeek: PropTypes.string,
        //最小日期
        minDate: PropTypes.string,
        //最大日期
        maxDate: PropTypes.string,
        //年份前后默认范围
        yearScope: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    }
    //默认props
    static defaultProps = {
        format: FORMAT.DATE,
        weekdays: ['日', '一', '二', '三', '四', '五', '六'],
        showToday: true,
        todayText: '今天',
        firstDayOfWeek: '日',
        yearScope: 5,
        months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    }
    /**
     * 星期第一天排序.
     */
    sortWeekdays(){
        let { weekdays, firstDayOfWeek } = this.props,
            index = weekdays.indexOf(firstDayOfWeek),
            length = weekdays.length,
            result = undefined;

        result = index !== -1 ? [...weekdays.slice(index, length), ...weekdays.slice(0, index)] : weekdays;
        return {
            weekdays: result,
            firstDayOfWeek: index,
        };
    }
    /**
     * 获取日期数据.
     * @param  {[Moment]} currentMoment [当前日期]
     */
    getDate(currentMoment){
        let { firstDayOfWeek, minDate, maxDate } = this.state,
            days = [],
            today = moment().format(FORMAT.DATE),
            prevMonth = moment(currentMoment).subtract(1,'months'),
            nextMonth = moment(currentMoment).add(1,'months');

        //当月天数
        let currentYear = currentMoment.format(FORMAT.YEAR),
            currentMonth = currentMoment.format(FORMAT.MONTH),
            daysLength = currentMoment.daysInMonth();

        for(let i = 1; i <= daysLength; i++){
            let dayFormat = `${currentYear}-${currentMonth}-${i}`,
                dayMoment = moment(dayFormat, FORMAT.DATE);

            days.push({
                text: i,
                date: dayMoment,
                inMonth: true,
                isToday: dayMoment.isSame(today),
                disable: minDate && dayMoment.isBefore(minDate) || maxDate && dayMoment.isAfter(maxDate),
            });
        }
        //上个月天数
        let firstDay = moment(currentMoment).date(1).day(),
            prevMonthYear = prevMonth.format(FORMAT.YEAR),
            prevMonthMonth = prevMonth.format(FORMAT.MONTH),
            prevMonthDaysLength = prevMonth.daysInMonth(),
            prevMonthMax = (firstDay - firstDayOfWeek) >= 0 ? (firstDay - firstDayOfWeek) : (firstDay - firstDayOfWeek + 7);

        for (let i = 0; i <= prevMonthMax - 1; i++) {
            let dayFormat = `${prevMonthYear}-${prevMonthMonth}-${prevMonthDaysLength - i}`,
                dayMoment = moment(dayFormat, FORMAT.DATE);

            days.unshift({
                text: prevMonthDaysLength - i,
                date: dayMoment,
                isToday: dayMoment.isSame(today),
                disable: minDate && dayMoment.isBefore(minDate) || maxDate && dayMoment.isAfter(maxDate),
            });
        }
        //下个月天数
        let lastDay = moment(currentMoment).date(daysLength).day(),
            nextMonthYear = nextMonth.format(FORMAT.YEAR),
            nextMonthMonth = nextMonth.format(FORMAT.MONTH),
            nextMonthMax = (lastDay - firstDayOfWeek) >= 0 ? (7 - lastDay + firstDayOfWeek) : (firstDayOfWeek - lastDay);

        for(let i = 1; i < nextMonthMax; i++){
            let dayFormat = `${nextMonthYear}-${nextMonthMonth}-${i}`,
                dayMoment = moment(dayFormat, FORMAT.DATE);

            days.push({
                text: i,
                date: dayMoment,
                isToday: dayMoment.isSame(today),
                disable: minDate && dayMoment.isBefore(minDate) || maxDate && dayMoment.isAfter(maxDate),
            });
        }

        this.setState({
            days,
            currentMoment,
        });
    }
    /**
     * 根据当前时间获取年份列表.
     * @param  {[Moment]} currentMoment [当前时间]
     * @return {[Array]}                [年份列表]
     */
    getYears(currentMoment){
        let { yearScope } = this.props,
            years = [],
            currentYear = currentMoment.year();

        for(let i = currentYear - yearScope; i <= currentYear + yearScope; i++){
            years.push(i);
        }

        return years;
    }
    /**
     * 上个月.
     */
    prevMonthHandle(){
        let { currentMoment } = this.state;
        this.getDate(moment(currentMoment).subtract(1,'months'));
    }
    /**
     * 下个月.
     */
    nextMonthHandle(){
        let { currentMoment } = this.state;
        this.getDate(moment(currentMoment).add(1,'months'));
    }
    /**
     * 上一年.
     */
    prevYearHandle(){
        let { currentMoment } = this.state;
        this.getDate(moment(currentMoment).subtract(1,'years'));
    }
    /**
     * 下一年.
     */
    nextYearHandle(){
        let { currentMoment } = this.state;
        this.getDate(moment(currentMoment).add(1,'years'));
    }
    /**
     * 选中时间.
     */
    selectDateHandle(checkedDay){
        this.setState({
            checkedDay
        });
    }
    /**
     * 选中年份.
     * @param  {[String]} year [年份]
     */
    selectYearHandle(year){
        let { currentMoment } = this.state,
            newMoment = moment(currentMoment).year(year);

        this.setState({
            checkedDay: undefined,
            currentMoment:  newMoment
        });
        this.getDate(newMoment);
    }
    /**
     * 选中月份.
     * @param  {[String]} month [月份]
     */
    selectMonthHandle(month){
        let { currentMoment } = this.state,
            newMoment = moment(currentMoment).month(month);

        this.setState({
            panel: 'day',
            checkedDay: undefined,
            currentMoment: newMoment
        });
        this.getDate(newMoment);
    }
    /**
     * 今天.
     */
    selectTodayHandle(){
        let today = moment(moment().format(FORMAT.DATE));
        this.setState({
            checkedDay: today
        });
        this.getDate(today);
    }
    /**
     * 显示年月选择面板.
     */
    showMonthPanelHandle(){
        let { panel } = this.state;
        this.setState({
            panel: panel === 'month'? 'day' : 'month'
        });
    }
    componentDidUpdate(){
        let { _yeargroup, _monthgroup } = this.refs;
        if(!this._activeYear || !this._activeMonth || _yeargroup.scrollTop !== 0 || _monthgroup.scrollTop !== 0 ){
            return false;
        }

        let yearHeight = this._activeYear.getBoundingClientRect().height,
            monthHeight = this._activeMonth.getBoundingClientRect().height;

        this._yeargroupScrollTop = _yeargroup.scrollTop = this._activeYear.offsetTop - _yeargroup.offsetTop - yearHeight * 2;
        _monthgroup.scrollTop = this._activeMonth.offsetTop - _monthgroup.offsetTop - monthHeight * 2;
    }
    componentDidMount(){
        let { currentMoment } = this.state;
        this.getDate(currentMoment);
    }
    /**
     * 无限获取年份.
     * @param  {[Event]} event [事件]
     */
    scrollYearHandle(event){
        let { years } = this.state,
            { yearScope } = this.props,
            container = event.target,
            yearHeight = this._activeYear.getBoundingClientRect().height,
            point = container.getBoundingClientRect().height + yearHeight;

        //上滑
        if(this._yeargroupScrollTop > container.scrollTop){
            this._yeargroupScrollTop = container.scrollTop;
            if(container.scrollTop < yearHeight){
                let prevYear = years[0] - 1;
                this.setState({
                    years: [prevYear, ...years]
                });
                container.scrollTop = container.scrollTop === 0? yearHeight : (container.scrollTop + yearHeight);
            }
        }else if(this._yeargroupScrollTop < container.scrollTop){
            //下滑
            this._yeargroupScrollTop = container.scrollTop;
            if(container.scrollHeight - container.scrollTop < point){
                let nextYear = years[years.length - 1] + 1;
                this.setState({
                    years: [...years, nextYear]
                });
            }
        }

    }
    //渲染
    render(){
        let { panel, currentMoment, days, checkedDay, weekdays, years } = this.state,
            { showToday, todayText, months, className, ...others } = this.props,
            currentYear = currentMoment.format(FORMAT.YEAR),
            currentMonth = currentMoment.format(FORMAT.MONTH);

        return(
           <div {...others} className={classnames('datepicker', className)}>
                <div className="datepicker-header">
                    <i className="fa datepicker-header-btn fa-angle-double-left" onClick={this.prevYearHandle}></i>
                    <i className="fa datepicker-header-btn fa-angle-left datepicker-month-btn" onClick={this.prevMonthHandle}></i>
                    <div className="datepicker-caption" onClick={this.showMonthPanelHandle}>
                        {currentYear}年{currentMonth}月
                    </div>
                    <i className="fa datepicker-header-btn fa-angle-right datepicker-month-btn" onClick={this.nextMonthHandle}></i>
                    <i className="fa datepicker-header-btn fa-angle-double-right" onClick={this.nextYearHandle}></i>
                </div>

                { panel === 'day' &&
                    <div className="datepicker-body">
                        <div className="datepicker-weekgroup">
                            { weekdays.map((day, index) =>
                                <div key={index} className="datepicker-weekgroup-item">{day}</div>
                            )}
                        </div>
                        <div className="datepicker-daygroup">
                            { days.map(({ text, date, checked, isToday, inMonth, disable}, index) =>
                                <div key={index} onClick={() => !disable && this.selectDateHandle(date)} className="datepicker-daygroup-item">
                                    <div className={
                                        classnames('datepicker-daygroup-item-text',{
                                            disable,
                                            now: isToday,
                                            'text-muted': !inMonth,
                                            active: date.isSame(checkedDay)
                                        })}>
                                        {text}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                }
                { panel === 'month' &&
                    <div className="datepicker-body">
                        <div className="datepicker-yeargroup" ref="_yeargroup" onScroll={this.scrollYearHandle}>
                            { years.map((year, index) =>
                                <div key={index} onClick={() => this.selectYearHandle(year)}
                                ref={dom => (year == currentYear) && (this._activeYear=dom)}
                                className={classnames('datepicker-yeargroup-item', {active: year == currentYear})}>
                                    {year}
                                </div>
                            )}
                        </div>
                        <div className="datepicker-monthgroup" ref="_monthgroup">
                            { months.map((month, index) =>
                                <div key={index} onClick={() => this.selectMonthHandle(index)}
                                ref={dom => (index == currentMonth - 1) && (this._activeMonth=dom)}
                                className={classnames('datepicker-monthgroup-item', {active: index == currentMonth - 1})}>
                                    {month}
                                </div>
                            )}
                        </div>
                    </div>
                }
                { showToday && panel !== 'month' &&
                    <div className="datepicker-footer">
                        <a href="javascript:void(0);" onClick={this.selectTodayHandle}>
                            {todayText}
                        </a>
                    </div>
                }
           </div>
        );
    }
}