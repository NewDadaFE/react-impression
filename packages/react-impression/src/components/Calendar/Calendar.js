import moment from 'moment'
import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import Icon from '../Icon'

const FORMAT = {
  YEAR: 'YYYY',
  MONTH: 'MM',
  DATE: 'YYYY-MM-DD',
}

export default class Calendar extends React.Component {
  constructor(props, context) {
    super(props, context)
    const { date, format } = props
    const weekdays = this.getSortWeekdays()
    const currentMoment = date ? moment(date, format) : moment()

    this.state = {
      currentMoment,
      days: [],
      weekdays,
    }
  }
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 尺寸
     */
    size: PropTypes.oneOf(['sm', 'lg']),

    /**
     * 时间
     */
    date: PropTypes.string,

    /**
     * 时间格式
     */
    format: PropTypes.string,

    /**
     * 头部显示格式
     */
    captionFormat: PropTypes.string,

    /**
     * 一周第一天
     */
    firstDayOfWeek: PropTypes.number,

    /**
     * 周几
     */
    weekdays: PropTypes.arrayOf(PropTypes.string),

    /**
     * 是否显示工具栏
     */
    showToolbar: PropTypes.bool,

    /**
     * 是否显示头部
     */
    showHeader: PropTypes.bool,

    /**
     * 自定义内容
     */
    cellRender: PropTypes.func,

    /**
     * 时间单元格点击
     */
    onCellClick: PropTypes.func,

    /**
     * 日历时间切换
     */
    onDateChange: PropTypes.func,
  }

  static defaultProps = {
    format: FORMAT.DATE,
    captionFormat: 'YYYY年MM月',
    showToolbar: true,
    showHeader: true,
    firstDayOfWeek: 1,
    weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  }

  /**
   * 获取排序后的星期
   */
  getSortWeekdays() {
    const { firstDayOfWeek, weekdays } = this.props

    return firstDayOfWeek === 0
      ? weekdays
      : [
        ...weekdays.slice(firstDayOfWeek, weekdays.length),
        ...weekdays.slice(0, firstDayOfWeek),
      ]
  }

  prevMonthHandle = () => {
    const { currentMoment } = this.state
    const { onDateChange } = this.props
    const prevMonthMoment = moment(currentMoment).subtract(1, 'months')

    this.setState({
      currentMoment: prevMonthMoment,
    })

    onDateChange && onDateChange(prevMonthMoment)
  }

  nextMonthHandle = () => {
    const { currentMoment } = this.state
    const { onDateChange } = this.props
    const nextMonthMoment = moment(currentMoment).add(1, 'months')

    this.setState({
      currentMoment: nextMonthMoment,
    })

    onDateChange && onDateChange(nextMonthMoment)
  }

  getDate() {
    const { firstDayOfWeek } = this.props
    const { currentMoment } = this.state
    let days = []
    const today = moment().format(FORMAT.DATE)
    const prevMonth = moment(currentMoment).subtract(1, 'months')
    const nextMonth = moment(currentMoment).add(1, 'months')
    const currentYear = currentMoment.format(FORMAT.YEAR)
    const currentMonth = currentMoment.format(FORMAT.MONTH)
    const daysLength = currentMoment.daysInMonth()

    for (let i = 1; i <= daysLength; i++) {
      const dayFormat = `${currentYear}-${currentMonth}-${i}`
      const dayMoment = moment(dayFormat, FORMAT.DATE)

      days.push({
        text: i,
        date: dayMoment,
        inMonth: true,
        isToday: dayMoment.isSame(today),
      })
    }

    const firstDay = moment(currentMoment)
      .date(1)
      .day()
    const prevMonthYear = prevMonth.format(FORMAT.YEAR)
    const prevMonthMonth = prevMonth.format(FORMAT.MONTH)
    const prevMonthDaysLength = prevMonth.daysInMonth()
    const prevMonthMax =
      firstDay - firstDayOfWeek >= 0
        ? firstDay - firstDayOfWeek
        : firstDay - firstDayOfWeek + 7

    for (let i = 0; i <= prevMonthMax - 1; i++) {
      const dayFormat = `${prevMonthYear}-${prevMonthMonth}-${prevMonthDaysLength -
        i}`
      const dayMoment = moment(dayFormat, FORMAT.DATE)

      days.unshift({
        text: prevMonthDaysLength - i,
        date: dayMoment,
        isToday: dayMoment.isSame(today),
      })
    }

    const lastDay = moment(currentMoment)
      .date(daysLength)
      .day()
    const nextMonthYear = nextMonth.format(FORMAT.YEAR)
    const nextMonthMonth = nextMonth.format(FORMAT.MONTH)
    const nextMonthMax =
      lastDay - firstDayOfWeek >= 0
        ? 7 - lastDay + firstDayOfWeek
        : firstDayOfWeek - lastDay

    for (let i = 1; i < nextMonthMax; i++) {
      const dayFormat = `${nextMonthYear}-${nextMonthMonth}-${i}`
      const dayMoment = moment(dayFormat, FORMAT.DATE)

      days.push({
        text: i,
        date: dayMoment,
        isToday: dayMoment.isSame(today),
      })
    }

    return days
  }

  componentWillReceiveProps(nextProps) {
    const { format } = this.props
    const { currentMoment } = this.state
    const { date } = nextProps

    date &&
      currentMoment.format(format) !== date &&
      this.setState({
        currentMoment: moment(date, format),
      })
  }

  render() {
    const {
      size,
      format,
      firstDayOfWeek,
      showHeader,
      showToolbar,
      captionFormat,
      cellRender,
      onCellClick,
      className,
    } = this.props
    const { currentMoment, weekdays } = this.state
    const sizeClass = size ? `calendar-${size}` : ''
    const days = this.getDate()

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
                  <Button eventKey='left' onClick={this.prevMonthHandle}>
                    <Icon type='angle-left' />
                  </Button>
                  <Button eventKey='right' onClick={this.nextMonthHandle}>
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
