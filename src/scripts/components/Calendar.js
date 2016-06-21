import moment from 'moment';
import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Icon from './Icon';


//时间格式
const FORMAT = {
    YEAR: 'YYYY',
    MONTH: 'MM',
    DATE: 'YYYY-MM-DD'
};

/**
 * 日历组件.
 */
export default class Calendar extends Component{
    constructor(props, context){
        super(props, context);
        let { date, format } = props,
            currentMoment = date ? moment(date, format) : moment();

        this.state = {
            currentMoment,//当前时间
            days: [],//日期选择
        };

        this.prevMonthHandle = this.prevMonthHandle.bind(this);
        this.nextMonthHandle = this.nextMonthHandle.bind(this);
    }
    static propTypes = {
        //时间
        date: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
        //时间格式
        format: PropTypes.string,
        //头部显示格式
        captionFormat: PropTypes.string,
        //周几
        weekdays: PropTypes.arrayOf(PropTypes.string),
        //月份
        months: PropTypes.arrayOf(PropTypes.string),
        //是否显示工具栏
        showToolbar: PropTypes.bool,
        //是否显示头部
        showHeader: PropTypes.bool,
        //自定义内容
        dateCellRender: PropTypes.func,
        //时间单元格点击
        dateCellClick: PropTypes.func,
    }
    //默认props
    static defaultProps = {
        format: FORMAT.DATE,
        captionFormat: 'YYYY年MM月',
        showToolbar: true,
        showHeader: true,
        firstDayOfWeek: 1,
        weekdays: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    }
    /**
     * 前一个月.
     */
    prevMonthHandle(){
        let { currentMoment } = this.state,
            prevMonthMoment = moment(currentMoment).subtract(1,'months');

        this.setState({
            currentMoment: prevMonthMoment
        });
    }
    /**
     * 下一个月.
     */
    nextMonthHandle(){
        let { currentMoment } = this.state,
            nextMonthMoment = moment(currentMoment).add(1,'months');

        this.setState({
            currentMoment: nextMonthMoment
        });
    }
    /**
     * 获取日期项.
     */
    getDate(){
        let { firstDayOfWeek } = this.props,
            { currentMoment } = this.state,
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
            });
        }

        return days;
    }
    componentWillReceiveProps(nextProps){
        let { format } = this.props,
            { currentMoment } = this.state,
            { date } = nextProps;

        currentMoment.format(format) != date &&
        this.setState({
            currentMoment: moment(date, format)
        });
    }
    render(){
        let { format, weekdays, firstDayOfWeek, showHeader, showToolbar, captionFormat, dateCellRender, dateCellClick, className } = this.props,
            { currentMoment } = this.state,
            days = this.getDate();

        return (
           <div className={classnames('calendar', className)}>
                { showHeader &&
                    <div className="calendar-header">
                        <div className="calendar-header-caption">
                            {currentMoment.format(captionFormat)}
                        </div>
                        { showToolbar &&
                            <div className="calendar-header-toolbar">
                                <ButtonGroup>
                                    <Button onClick={this.prevMonthHandle}>
                                        <Icon type="angle-left"/>
                                    </Button>
                                    <Button onClick={this.nextMonthHandle}>
                                        <Icon type="angle-right"/>
                                    </Button>
                                </ButtonGroup>
                            </div>
                        }
                    </div>
                }
                <div className="calendar-body">
                    <div className="calendar-weekgroup">
                        { weekdays.map((weekday, index) =>
                            <div key={index} className="calendar-weekgroup-item">{weekday}</div>
                        )}

                    </div>
                    <div className="calendar-daygroup">
                        { days.map((day, index) =>
                            <div key={index} onClick={() => dateCellClick({
                                    day: day.text,
                                    year: day.date.format(FORMAT.YEAR),
                                    month: day.date.format(FORMAT.MONTH),
                                    date: day.date.format(format),
                                    inMonth: day.inMonth,
                                    isToday: day.isToday
                                })}
                                className={classnames('calendar-daygroup-item', {disabled: !day.inMonth, active: day.isToday})}>
                                <div className={classnames('calendar-daygroup-item-header', {
                                    'text-secondary': (index + firstDayOfWeek) % 7 === 0 || (index + firstDayOfWeek + 1) % 7 === 0
                                })}>{day.text}</div>
                                <div className="calendar-daygroup-item-body">
                                    { dateCellRender && dateCellRender({
                                        day: day.text,
                                        year: day.date.format(FORMAT.YEAR),
                                        month: day.date.format(FORMAT.MONTH),
                                        date: day.date.format(format),
                                        inMonth: day.inMonth,
                                        isToday: day.isToday
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
           </div>
        );
    }
}