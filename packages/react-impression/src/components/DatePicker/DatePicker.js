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
    type: PropTypes.oneOf(['date', 'month']),

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
    const years = this.getYears(currentMoment)
    let state = {
      currentMoment,
      days: [],
      weekdays,
      checkedDay,
      years,
    }

    switch (type) {
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
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
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
  getDate(currentMoment) {
    const { minDate, maxDate } = this.state
    const { firstDayOfWeek } = this.props
    const today = moment().format(FORMAT.DATE)
    const prevMonth = moment(currentMoment).subtract(1, 'months')
    const nextMonth = moment(currentMoment).add(1, 'months')
    const currentYear = currentMoment.format(FORMAT.YEAR)
    const currentMonth = currentMoment.format(FORMAT.MONTH)
    const daysLength = currentMoment.daysInMonth()
    let days = []

    for (let i = 1; i <= daysLength; i++) {
      const dayFormat = `${currentYear}-${currentMonth}-${i}`
      const dayMoment = moment(dayFormat, FORMAT.DATE)

      days.push({
        text: i,
        date: dayMoment,
        inMonth: true,
        isToday: dayMoment.isSame(today),
        disable:
        (minDate && dayMoment.isBefore(minDate)) ||
        (maxDate && dayMoment.isAfter(maxDate)),
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
      const dayFormat = `${prevMonthYear}-${prevMonthMonth}-${prevMonthDaysLength - i}`
      const dayMoment = moment(dayFormat, FORMAT.DATE)

      days.unshift({
        text: prevMonthDaysLength - i,
        date: dayMoment,
        isToday: dayMoment.isSame(today),
        disable:
        (minDate && dayMoment.isBefore(minDate)) ||
        (maxDate && dayMoment.isAfter(maxDate)),
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
        disable:
        (minDate && dayMoment.isBefore(minDate)) ||
        (maxDate && dayMoment.isAfter(maxDate)),
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
  getYears(currentMoment) {
    const { yearScope } = this.props
    const currentYear = currentMoment.year()
    let years = []

    for (let i = currentYear - yearScope; i <= currentYear + yearScope; i++) {
      years.push(i)
    }

    return years
  }

  /**
   * 上个月
   */
  prevMonthHandle = () => {
    const { currentMoment, panel } = this.state

    this.getDate(moment(currentMoment).subtract(1, 'months'))
    panel === 'month' && this.resetMonthPanelScroll()
  }

  /**
   * 下个月
   */
  nextMonthHandle = () => {
    const { currentMoment, panel } = this.state

    this.getDate(moment(currentMoment).add(1, 'months'))
    panel === 'month' && this.resetMonthPanelScroll()
  }

  /**
   * 上一年
   */
  prevYearHandle = () => {
    const { currentMoment, panel } = this.state

    this.getDate(moment(currentMoment).subtract(1, 'years'))
    panel === 'month' && this.resetMonthPanelScroll()
  }

  /**
   * 下一年
   */
  nextYearHandle = () => {
    const { currentMoment, panel } = this.state

    this.getDate(moment(currentMoment).add(1, 'years'))
    panel === 'month' && this.resetMonthPanelScroll()
  }

  /**
   * 选中时间
   */
  selectDateHandle = day => {
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
  selectYearHandle = year => {
    const { currentMoment } = this.state
    const newMoment = moment(currentMoment).year(year)

    this.setState({
      checkedDay: undefined,
      currentMoment: newMoment,
    })
    this.getDate(newMoment)
  }

  /**
   * 选中月份
   */
  selectMonthHandle = month => {
    const { currentMoment, format } = this.state
    const { type, onSelect, onChange } = this.props
    let newMoment = moment(currentMoment).month(month)

    switch (type) {
      case 'month':
        newMoment = newMoment.format(format)
        onSelect && onSelect(newMoment)
        onChange && onChange(newMoment)
        break
      default:
        this.setState({
          panel: 'day',
          checkedDay: undefined,
          currentMoment: newMoment,
        })
        this.getDate(newMoment)
    }
  }

  /**
   * 今天
   */
  selectTodayHandle = () => {
    const { onSelect, onChange, minDate, maxDate } = this.props
    const { checkedDay, format } = this.state
    const today = moment(moment().format(FORMAT.DATE))
    const dayFormat = today.format(format)

    if (
      (minDate && today.isBefore(minDate)) ||
      (maxDate && today.isAfter(maxDate))
    ) {
      return
    }

    this.setState({
      checkedDay: today,
    })

    onSelect && onSelect(dayFormat)
    onChange && checkedDay !== today && onChange(dayFormat)
  }

  /**
   * 显示年月选择面板
   */
  showMonthPanelHandle = () => {
    const { panel } = this.state
    const { type } = this.props

    type === 'date' &&
    this.setState({
      panel: panel === 'month' ? 'day' : 'month',
    })
  }

  /**
   * 更正month面板滚动条位置
   */
  componentDidUpdate() {
    const { type } = this.props
    const { _yeargroup } = this.refs

    type === 'date' &&
    _yeargroup &&
    _yeargroup.scrollTop === 0 &&
    this.resetMonthPanelScroll()
  }

  /**
   * 修改month面板的滚动条位置.
   */
  resetMonthPanelScroll = () => {
    const { _yeargroup, _monthgroup } = this.refs

    if (!this._activeYear || !this._activeMonth) {
      return true
    }

    const yearHeight = this._activeYear.getBoundingClientRect().height
    const monthHeight = this._activeMonth.getBoundingClientRect().height

    this._yeargroupScrollTop = _yeargroup.scrollTop =
      this._activeYear.offsetTop - _yeargroup.offsetTop - yearHeight * 2
    _monthgroup.scrollTop =
      this._activeMonth.offsetTop - _monthgroup.offsetTop - monthHeight * 2

    return true
  }

  componentDidMount() {
    const { currentMoment } = this.state

    this.getDate(currentMoment)
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps
    const { format } = this.state

    this.setState({
      checkedDay: value ? moment(value, format) : undefined,
    })
  }

  /**
   * 无限获取年份.
   */
  scrollYearHandle = event => {
    if (!this._activeYear) {
      return
    }

    const { years } = this.state
    const container = event.target
    const yearHeight = this._activeYear.getBoundingClientRect().height
    const point = container.getBoundingClientRect().height + yearHeight

    if (this._yeargroupScrollTop > container.scrollTop) {
      this._yeargroupScrollTop = container.scrollTop
      if (container.scrollTop < yearHeight) {
        let prevYear = years[0] - 1

        this.setState({
          years: [prevYear, ...years],
        })
        container.scrollTop =
          container.scrollTop === 0
            ? yearHeight
            : container.scrollTop + yearHeight
      }
    } else if (this._yeargroupScrollTop < container.scrollTop) {
      this._yeargroupScrollTop = container.scrollTop
      if (container.scrollHeight - container.scrollTop < point) {
        let nextYear = years[years.length - 1] + 1

        this.setState({
          years: [...years, nextYear],
        })
      }
    }
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
      <div
        className={classnames('datepicker', className)}
        onAnimationEnd={this.resetMonthPanelScroll}
      >
        <div className='datepicker-header'>
          <i
            className='fa datepicker-header-btn fa-angle-double-left'
            onClick={this.prevYearHandle}
          />
          <i
            className='fa datepicker-header-btn fa-angle-left datepicker-month-btn'
            onClick={this.prevMonthHandle}
          />
          <div
            className='datepicker-caption'
            onClick={this.showMonthPanelHandle}
          >
            {currentYear}年{currentMonth}月
          </div>
          <i
            className='fa datepicker-header-btn fa-angle-right datepicker-month-btn'
            onClick={this.nextMonthHandle}
          />
          <i
            className='fa datepicker-header-btn fa-angle-double-right'
            onClick={this.nextYearHandle}
          />
        </div>

        {panel === 'day' && (
          <div className='datepicker-body'>
            <div className='datepicker-weekgroup'>
              {weekdays.map(day => (
                <div key={day} className='datepicker-weekgroup-item'>
                  {day}
                </div>
              ))}
            </div>
            <div className='datepicker-daygroup'>
              {days.map(({ text, date, isToday, inMonth, disable }) => (
                <div
                  key={`${text}-${inMonth}`}
                  onClick={() => !disable && this.selectDateHandle(date)}
                  className='datepicker-daygroup-item'
                >
                  <div
                    className={classnames('datepicker-daygroup-item-text', {
                      disable,
                      now: isToday,
                      'text-muted': !inMonth,
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
            <div
              className='datepicker-yeargroup'
              ref='_yeargroup'
              onScroll={this.scrollYearHandle}
            >
              {years.map(year => (
                <div
                  key={year}
                  onClick={() => this.selectYearHandle(year)}
                  ref={dom =>
                    Number(year) === Number(currentYear) &&
                    (this._activeYear = dom)
                  }
                  className={classnames('datepicker-yeargroup-item', {
                    active: Number(year) === Number(currentYear),
                  })}
                >
                  {year}
                </div>
              ))}
            </div>
            <div className='datepicker-monthgroup' ref='_monthgroup'>
              {months.map((month, index) => (
                <div
                  key={month}
                  onClick={() => this.selectMonthHandle(index)}
                  ref={dom =>
                    index === currentMonth - 1 && (this._activeMonth = dom)
                  }
                  className={classnames('datepicker-monthgroup-item', {
                    active: index === currentMonth - 1,
                  })}
                >
                  {month}
                </div>
              ))}
            </div>
          </div>
        )}
        {showToday &&
        panel !== 'month' && (
          <div className='datepicker-footer'>
            <a href='javascript:void(0);' onClick={this.selectTodayHandle}>
              {todayText}
            </a>
          </div>
        )}
      </div>
    )
  }
}
