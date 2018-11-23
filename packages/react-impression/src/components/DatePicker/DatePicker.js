import moment from 'moment'
import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

/**
 * 时间格式
 */

const FORMAT = {
  YEAR: 'YYYY',
  MONTH: 'MM',
  YEAR_MONTH: 'YYYY-MM',
  DATE: 'YYYY-MM-DD',
}

export default class DatePicker extends React.PureComponent {
  static propTypes = {
    /**
     * 类型
     */
    type: PropTypes.oneOf(['date', 'month', 'year']),

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 日期
     */
    value: PropTypes.string,

    /**
     * 格式
     */
    format: PropTypes.string,

    /**
     * 星期
     */
    weekdays: PropTypes.arrayOf(PropTypes.string),

    /**
     * 月份
     */
    months: PropTypes.arrayOf(PropTypes.string),

    /**
     * 是否显示今天
     */
    showToday: PropTypes.bool,

    /**
     * 今天
     */
    todayText: PropTypes.string,

    /**
     * 星期第一天
     */
    firstDayOfWeek: PropTypes.number,

    /**
     * 最小日期
     */
    minDate: PropTypes.string,

    /**
     * 最大日期
     */
    maxDate: PropTypes.string,

    /**
     * 年份前后默认范围
     */
    yearScope: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * 选中时间
     */
    onSelect: PropTypes.func,

    /**
     * 修改选中时间
     */
    onChange: PropTypes.func,
  }

  constructor(props, context) {
    super(props, context)
    const { type, value, minDate, maxDate, format } = props
    const weekdays = this.getSortWeekdays()
    const currentMoment = value ? moment(value, format) : moment()
    const checkedDay = value ? moment(value, format) : undefined
    const state = {
      currentMoment,
      days: [],
      years: [],
      weekdays,
      checkedDay,
    }

    switch (type) {
      case 'year':
        state.format = format || FORMAT.YEAR
        state.panel = 'year'
        break
      case 'month':
        state.format = format || FORMAT.YEAR_MONTH
        state.panel = 'month'
        break
      default:
        state.format = format || FORMAT.DATE
        state.panel = 'day'
        break
    }

    state.minDate = minDate ? moment(minDate, state.format) : undefined
    state.maxDate = maxDate ? moment(maxDate, state.format) : undefined
    this.state = state
  }

  static defaultProps = {
    type: 'date',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    showToday: true,
    todayText: '今天',
    firstDayOfWeek: 0,
    yearScope: 5,
    months: [
      '01月',
      '02月',
      '03月',
      '04月',
      '05月',
      '06月',
      '07月',
      '08月',
      '09月',
      '10月',
      '11月',
      '12月',
    ],
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

  /**
   * 获取日期数据
   */
  getDays(currentMoment) {
    const { firstDayOfWeek } = this.props
    const today = moment().format(FORMAT.DATE)
    const prevMonth = moment(currentMoment).subtract(1, 'months')
    const nextMonth = moment(currentMoment).add(1, 'months')
    const currentYear = currentMoment.format(FORMAT.YEAR)
    const currentMonth = currentMoment.format(FORMAT.MONTH)
    const daysLength = currentMoment.daysInMonth()
    const days = []
    // 计算月内的日期
    for (let i = 1; i <= daysLength; i++) {
      const dayFormat = `${currentYear}-${currentMonth}-${i}`
      const dayMoment = moment(dayFormat, FORMAT.DATE)

      days.push({
        text: i,
        date: dayMoment,
        inMonth: true,
        isToday: dayMoment.isSame(today),
        disable: this.isDisableDate(dayMoment),
      })
    }
    // 补齐上个月后几天
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
        disable: this.isDisableDate(dayMoment),
      })
    }
    // 补齐下个月前几天
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
        disable: this.isDisableDate(dayMoment),
      })
    }

    this.setState({
      days,
      currentMoment,
    })
  }

  /**
   * 根据当前时间获取年份列表
   */
  getYears = currentMoment => {
    const { yearScope } = this.props
    const currentYear = currentMoment.year()
    const years = []
    // 一行3个，所以算成3的倍数
    const yearMaxRange =
      Math.ceil((yearScope * 2 + 1) / 3) * 3 - yearScope + currentYear
    for (let i = currentYear - yearScope; i < yearMaxRange; i++) {
      years.push(i)
    }

    this.setState({
      years,
      currentMoment,
    })
  }

  /**
   * 上个月
   */
  handlePrevMonth = () => {
    const { panel, currentMoment } = this.state
    const newMoment = moment(currentMoment).subtract(1, 'month')

    if (panel === 'day') {
      this.getDays(newMoment)
      return
    }
    this.setState({
      currentMoment: newMoment,
    })
  }

  /**
   * 下个月
   */
  handleNextMonth = () => {
    const { panel, currentMoment } = this.state
    const newMoment = moment(currentMoment).add(1, 'month')

    if (panel === 'day') {
      this.getDays(newMoment)
      return
    }
    this.setState({
      currentMoment: newMoment,
    })
  }

  /**
   * 上一年
   */
  handlePrevYear = () => {
    const { years, panel, currentMoment } = this.state
    const newMoment = moment(currentMoment).subtract(1, 'years')
    if (panel === 'day') {
      this.getDays(newMoment)
      return
    }
    // 选到第一个年份后翻页
    if (panel === 'year' && newMoment.year() < years[0]) {
      this.getYears(newMoment)
      return
    }
    this.setState({ currentMoment: newMoment })
  }

  /**
   * 下一年
   */
  handleNextYear = () => {
    const { years, panel, currentMoment } = this.state
    const newMoment = moment(currentMoment).add(1, 'years')
    if (panel === 'day') {
      this.getDays(newMoment)
      return
    }
    // 选到最后一个年份后翻页
    if (panel === 'year' && newMoment.year() > years[years.length - 1]) {
      this.getYears(newMoment)
      return
    }
    this.setState({ currentMoment: newMoment })
  }

  /**
   * 选中时间
   */
  handleSelectDate = day => {
    const { onSelect, onChange } = this.props
    const { checkedDay, format } = this.state
    const dayFormat = day.format(format)

    this.setState({
      checkedDay: day,
    })

    onSelect && onSelect(dayFormat)
    onChange && checkedDay !== day && onChange(dayFormat)
  }

  /**
   * 选中年份
   */
  handleSelectYear = e => {
    const { currentMoment, format } = this.state
    const year = e.currentTarget.dataset.year
    let newMoment = moment(currentMoment).year(year)
    if (this.isDisableDate(newMoment)) {
      return
    }
    // 1. 年模式，触发选中
    const { type, onSelect, onChange } = this.props
    if (type === 'year') {
      newMoment = newMoment.format(format)
      onSelect && onSelect(newMoment)
      onChange && onChange(newMoment)
      return
    }
    // 2. 非年模式，触发下一级选择
    this.setState({
      panel: 'month',
      checkedDay: undefined,
      currentMoment: newMoment,
    })
  }

  /**
   * 选中月份
   */
  handleSelectMonth = e => {
    const { currentMoment, format } = this.state
    const month = e.currentTarget.dataset.month
    let newMoment = moment(currentMoment).month(month)
    if (this.isDisableDate(newMoment)) {
      return
    }
    // 1. 月模式，触发选中
    const { type, onSelect, onChange } = this.props
    if (type === 'month') {
      newMoment = newMoment.format(format)
      onSelect && onSelect(newMoment)
      onChange && onChange(newMoment)
      return
    }
    // 2. 非月模式，触发下一级选择
    this.setState(
      {
        panel: 'day',
        checkedDay: undefined,
      },
      () => {
        this.getDays(newMoment)
      }
    )
  }

  /**
   * 今天
   */
  handleSelectToday = () => {
    const { onSelect, onChange } = this.props
    const { checkedDay, format } = this.state
    const today = moment(moment().format(FORMAT.DATE))
    const dayFormat = today.format(format)

    if (this.isDisableDate(today)) {
      return
    }

    this.setState({
      checkedDay: today,
    })

    onSelect && onSelect(dayFormat)
    onChange && checkedDay !== today && onChange(dayFormat)
  }

  /**
   * 切换年月日选择面板
   */
  handleSwitchPanel = () => {
    this.setState(
      {
        panel: this.state.panel === 'day' ? 'month' : 'year',
      },
      () => {
        const { panel, currentMoment } = this.state
        panel === 'year' && this.getYears(currentMoment)
      }
    )
  }

  getPickerTitle = () => {
    const { panel, years, currentMoment } = this.state
    const currentYear = currentMoment.format(FORMAT.YEAR)
    const currentMonth = currentMoment.format(FORMAT.MONTH)
    if (panel === 'year' && years.length) {
      return `${years[0]}~${years[years.length - 1]}`
    }
    if (panel === 'month') {
      return `${currentYear}年`
    }
    if (panel === 'day') {
      return `${currentYear}年${currentMonth}月`
    }
    return '请选择'
  }

  isDisableDate = date => {
    const { minDate, maxDate } = this.state
    const dayMoment = moment(date, FORMAT.DATE)

    return (
      (minDate && dayMoment.isBefore(minDate)) ||
      (maxDate && dayMoment.isAfter(maxDate))
    )
  }

  componentDidMount() {
    const { currentMoment, panel } = this.state
    if (panel === 'day') {
      this.getDays(currentMoment)
      return
    }
    if (panel === 'year') {
      this.getYears(currentMoment)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps
    const { format } = this.state
    this.setState({
      checkedDay: value ? moment(value, format) : undefined,
    })
  }

  render() {
    const {
      panel,
      currentMoment,
      weekdays,
      days,
      checkedDay,
      years,
    } = this.state
    const { showToday, todayText, months, className } = this.props
    const currentYear = currentMoment.format(FORMAT.YEAR)
    const currentMonth = currentMoment.format(FORMAT.MONTH)
    return (
      <div className={classnames('datepicker', className)} ref='container'>
        <div className='datepicker-inner'>
          <div className='datepicker-header'>
            {panel !== 'month' && (
              <i
                className='fa datepicker-header-btn fa-angle-double-left'
                onClick={this.handlePrevYear}
              />
            )}
            {panel !== 'year' && (
              <i
                className='fa datepicker-header-btn fa-angle-left datepicker-month-btn'
                onClick={this.handlePrevMonth}
              />
            )}
            <div
              className={classnames('datepicker-caption', {
                disable: panel === 'year',
              })}
              onClick={this.handleSwitchPanel}
            >
              {this.getPickerTitle()}
            </div>
            {panel !== 'year' && (
              <i
                className='fa datepicker-header-btn fa-angle-right datepicker-month-btn'
                onClick={this.handleNextMonth}
              />
            )}
            {panel !== 'month' && (
              <i
                className='fa datepicker-header-btn fa-angle-double-right'
                onClick={this.handleNextYear}
              />
            )}
          </div>
          {panel === 'day' && (
            <div className='datepicker-body'>
              <div className='datepicker-weekgroup'>
                {weekdays.map(day => (
                  <div
                    key={day}
                    className={classnames('datepicker-weekgroup-item', {
                      weekend: day === '六' || day === '日',
                    })}
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className='datepicker-daygroup'>
                {days.map(({ text, date, isToday, inMonth, disable }) => (
                  <div
                    key={`${text}-${inMonth}`}
                    onClick={() => !disable && this.handleSelectDate(date)}
                    className='datepicker-item datepicker-daygroup-item'
                  >
                    <div
                      className={classnames('datepicker-item-text', {
                        disable,
                        now: isToday,
                        active: date.isSame(checkedDay),
                      })}
                    >
                      {text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {panel === 'month' && (
            <div className='datepicker-body'>
              <div className='datepicker-monthgroup' ref='_monthgroup'>
                {months.map((month, index) => (
                  <div
                    key={month}
                    className='datepicker-item datepicker-monthgroup-item'
                    data-month={index}
                    onClick={this.handleSelectMonth}
                  >
                    <div
                      className={classnames('datepicker-item-text', {
                        active: index === currentMonth - 1,
                        disable: this.isDisableDate(
                          `${currentYear}-${index + 1}`
                        ),
                      })}
                    >
                      {month}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {panel === 'year' && (
            <div className='datepicker-body'>
              <div className='datepicker-yeargroup'>
                {years.map(year => (
                  <div
                    key={year}
                    className='datepicker-item datepicker-yeargroup-item'
                    data-year={year}
                    onClick={this.handleSelectYear}
                  >
                    <div
                      className={classnames('datepicker-item-text', {
                        active: Number(year) === Number(currentYear),
                        disable: this.isDisableDate(year),
                      })}
                    >
                      {year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {showToday &&
            panel === 'day' && (
            <div
              className='datepicker-footer'
              onClick={this.handleSelectToday}
            >
              {todayText}
            </div>
          )}
        </div>
      </div>
    )
  }
}
