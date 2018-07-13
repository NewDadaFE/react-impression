import moment from 'moment'
import classnames from 'classnames'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import Icon from '../Icon'

// 时间格式
const FORMAT = {
  YEAR: 'YYYY',
  MONTH: 'MM',
  DATE: 'YYYY-MM-DD',
}

/**
 * 日历组件.
 */
export default class Calendar extends Component {
  constructor(props, context) {
    super(props, context)
    let { date, format } = props,
      weekdays = this.getSortWeekdays(),
      currentMoment = date ? moment(date, format) : moment()

    this.state = {
      currentMoment, // 当前时间
      days: [], // 日期选择
      weekdays,
    }
  }
  static propTypes = {
    className: PropTypes.string,
    // 尺寸
    size: PropTypes.oneOf(['sm', 'lg']),
    // 时间
    date: PropTypes.string,
    // 时间格式
    format: PropTypes.string,
    // 头部显示格式
    captionFormat: PropTypes.string,
    // 一周第一天
    firstDayOfWeek: PropTypes.number,
    // 周几
    weekdays: PropTypes.arrayOf(PropTypes.string),
    // 是否显示工具栏
    showToolbar: PropTypes.bool,
    // 是否显示头部
    showHeader: PropTypes.bool,
    // 自定义内容
    cellRender: PropTypes.func,
    // 时间单元格点击
    onCellClick: PropTypes.func,
    // 日历时间切换
    onDateChange: PropTypes.func,
  }
  // 默认props
  static defaultProps = {
    format: FORMAT.DATE,
    captionFormat: 'YYYY年MM月',
    showToolbar: true,
    showHeader: true,
    firstDayOfWeek: 1,
    weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  }
  /**
   * 获取排序后的星期.
   * @return {[Array]} [星期数组]
   */
  getSortWeekdays() {
    let { firstDayOfWeek, weekdays } = this.props

    return firstDayOfWeek === 0
      ? weekdays
      : [
        ...weekdays.slice(firstDayOfWeek, weekdays.length),
        ...weekdays.slice(0, firstDayOfWeek),
      ]
  }
  /**
   * 前一个月.
   */
  prevMonthHandle = () => {
    let { currentMoment } = this.state,
      { onDateChange } = this.props,
      prevMonthMoment = moment(currentMoment).subtract(1, 'months')

    this.setState({
      currentMoment: prevMonthMoment,
    })

    onDateChange && onDateChange(prevMonthMoment)
  }
  /**
   * 下一个月.
   */
  nextMonthHandle = () => {
    let { currentMoment } = this.state,
      { onDateChange } = this.props,
      nextMonthMoment = moment(currentMoment).add(1, 'months')

    this.setState({
      currentMoment: nextMonthMoment,
    })

    onDateChange && onDateChange(nextMonthMoment)
  }
  /**
   * 获取日期项.
   */
  getDate() {
    let { firstDayOfWeek } = this.props,
      { currentMoment } = this.state,
      days = [],
      today = moment().format(FORMAT.DATE),
      prevMonth = moment(currentMoment).subtract(1, 'months'),
      nextMonth = moment(currentMoment).add(1, 'months'),
      // 当月天数
      currentYear = currentMoment.format(FORMAT.YEAR),
      currentMonth = currentMoment.format(FORMAT.MONTH),
      daysLength = currentMoment.daysInMonth()

    for (let i = 1; i <= daysLength; i++) {
      let dayFormat = `${currentYear}-${currentMonth}-${i}`,
        dayMoment = moment(dayFormat, FORMAT.DATE)

      days.push({
        text: i,
        date: dayMoment,
        inMonth: true,
        isToday: dayMoment.isSame(today),
      })
    }
    // 上个月天数
    let firstDay = moment(currentMoment)
        .date(1)
        .day(),
      prevMonthYear = prevMonth.format(FORMAT.YEAR),
      prevMonthMonth = prevMonth.format(FORMAT.MONTH),
      prevMonthDaysLength = prevMonth.daysInMonth(),
      prevMonthMax =
        firstDay - firstDayOfWeek >= 0
          ? firstDay - firstDayOfWeek
          : firstDay - firstDayOfWeek + 7

    for (let i = 0; i <= prevMonthMax - 1; i++) {
      let dayFormat = `${prevMonthYear}-${prevMonthMonth}-${prevMonthDaysLength -
          i}`,
        dayMoment = moment(dayFormat, FORMAT.DATE)

      days.unshift({
        text: prevMonthDaysLength - i,
        date: dayMoment,
        isToday: dayMoment.isSame(today),
      })
    }
    // 下个月天数
    let lastDay = moment(currentMoment)
        .date(daysLength)
        .day(),
      nextMonthYear = nextMonth.format(FORMAT.YEAR),
      nextMonthMonth = nextMonth.format(FORMAT.MONTH),
      nextMonthMax =
        lastDay - firstDayOfWeek >= 0
          ? 7 - lastDay + firstDayOfWeek
          : firstDayOfWeek - lastDay

    for (let i = 1; i < nextMonthMax; i++) {
      let dayFormat = `${nextMonthYear}-${nextMonthMonth}-${i}`,
        dayMoment = moment(dayFormat, FORMAT.DATE)

      days.push({
        text: i,
        date: dayMoment,
        isToday: dayMoment.isSame(today),
      })
    }

    return days
  }
  componentWillReceiveProps(nextProps) {
    let { format } = this.props,
      { currentMoment } = this.state,
      { date } = nextProps

    date &&
      currentMoment.format(format) !== date &&
      this.setState({
        currentMoment: moment(date, format),
      })
  }
  render() {
    let {
        size,
        format,
        firstDayOfWeek,
        showHeader,
        showToolbar,
        captionFormat,
        cellRender,
        onCellClick,
        className,
      } = this.props,
      { currentMoment, weekdays } = this.state,
      sizeClass = size ? `calendar-${size}` : '',
      days = this.getDate()

    return (
      <div className={classnames('calendar', sizeClass, className)}>
        {showHeader && (
          <div className='calendar-header'>
            <div className='calendar-header-caption'>
              {currentMoment.format(captionFormat)}
            </div>
            {showToolbar && (
              <div className='calendar-header-toolbar'>
                <ButtonGroup size={size}>
                  <Button onClick={this.prevMonthHandle}>
                    <Icon type='angle-left' />
                  </Button>
                  <Button onClick={this.nextMonthHandle}>
                    <Icon type='angle-right' />
                  </Button>
                </ButtonGroup>
              </div>
            )}
          </div>
        )}
        <div className='calendar-body'>
          <div className='calendar-weekgroup'>
            {weekdays.map(weekday => (
              <div key={weekday} className='calendar-weekgroup-item'>
                {weekday}
              </div>
            ))}
          </div>
          <div className='calendar-daygroup'>
            {days.map((day, index) => (
              <div
                key={`${day.text}-${day.inMonth}`}
                onClick={() =>
                  onCellClick &&
                  onCellClick({
                    day: day.text,
                    year: day.date.format(FORMAT.YEAR),
                    month: day.date.format(FORMAT.MONTH),
                    date: day.date.format(format),
                    inMonth: day.inMonth,
                    isToday: day.isToday,
                  })
                }
                className={classnames('calendar-daygroup-item', {
                  disabled: !day.inMonth,
                  active: day.isToday,
                })}
              >
                <div
                  className={classnames('calendar-daygroup-item-header', {
                    'text-secondary':
                      (index + firstDayOfWeek) % 7 === 0 ||
                      (index + firstDayOfWeek + 1) % 7 === 0,
                  })}
                >
                  {day.text}
                </div>
                <div className='calendar-daygroup-item-body'>
                  {cellRender &&
                    cellRender({
                      day: day.text,
                      year: day.date.format(FORMAT.YEAR),
                      month: day.date.format(FORMAT.MONTH),
                      date: day.date.format(format),
                      inMonth: day.inMonth,
                      isToday: day.isToday,
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
