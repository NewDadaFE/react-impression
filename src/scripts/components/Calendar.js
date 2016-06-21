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
        //时间格式
        format: PropTypes.string,
        //周几
        weekdays: PropTypes.arrayOf(PropTypes.string),
        //月份
        months: PropTypes.arrayOf(PropTypes.string),
        //是否显示工具栏
        showToolbar: PropTypes.bool,
    }
    //默认props
    static defaultProps = {
        format: FORMAT.DATE,
        showToolbar: true,
        firstDayOfWeek: 1,
        weekdays: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    }
    /**
     * 前一个月.
     */
    prevMonthHandle(){
        let { currentMoment } = this.state,
            nextMonthMoment = moment(currentMoment).subtract(1,'months');
        this.getDate(nextMonthMoment);
    }
    /**
     * 下一个月.
     */
    nextMonthHandle(){
        let { currentMoment } = this.state,
            nextMonthMoment = moment(currentMoment).add(1,'months');
        this.getDate(nextMonthMoment);
    }
    /**
     * 获取日期项.
     * @param  {[Moment]} currentMoment [日期]
     */
    getDate(currentMoment){
        let { firstDayOfWeek } = this.props,
            days = [],
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
            });
        }

        this.setState({
            days,
            currentMoment,
        });
    }
    componentDidMount(){
        let { currentMoment } = this.state;
        this.getDate(currentMoment);
    }
    render(){
        let { weekdays, firstDayOfWeek, showToolbar, className } = this.props,
            { days } = this.state;

        return (
           <div className={classnames('calendar', className)}>
                <div className="calendar-header">
                    <div className="calendar-header-caption">
                        2016年6月
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
                <div className="calendar-body">
                    <div className="calendar-weekgroup">
                        { weekdays.map((weekday, index) =>
                            <div key={index} className="calendar-weekgroup-item">{weekday}</div>
                        )}

                    </div>
                    <div className="calendar-daygroup">
                        { days.map((day, index) =>
                            <div key={index} className={classnames('calendar-daygroup-item', day.inMonth?'':'disabled')}>
                                <div className={classnames('calendar-daygroup-item-header', {
                                    'text-secondary': (index + firstDayOfWeek) % 7 === 0 || (index + firstDayOfWeek + 1) % 7 === 0
                                })}>
                                    {day.text}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
           </div>
        );
    }
}