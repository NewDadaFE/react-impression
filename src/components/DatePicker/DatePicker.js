import moment from 'moment'
import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// 时间格式
const FORMAT = {
  YEAR: 'YYYY',
  MONTH: 'MM',
  YEAR_MONTH: 'YYYY-MM',
  DATE: 'YYYY-MM-DD',
}

/**
 * 时间组件.
 */
export default class DatePicker extends PureComponent {
  // 构造函数
  constructor(props, context) {
    super(props, context)
    let { type, value, minDate, maxDate, format } = props,
      weekdays = this.getSortWeekdays(),
      currentMoment = value ? moment(value, format) : moment(),
      checkedDay = value ? moment(value, format) : undefined,
      years = this.getYears(currentMoment),
      state = {
        currentMoment, // 当前时间
        days: [], // 日期选择
        weekdays,
        checkedDay, // 选中日期
        years, // 年份
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
  // prop type校验
  static propTypes = {
    // 类型
    type: PropTypes.oneOf(['date', 'month']),
    // 自定义样式
    className: PropTypes.string,
    // 日期
    value: PropTypes.string,
    // 格式
    format: PropTypes.string,
    // 星期
    weekdays: PropTypes.arrayOf(PropTypes.string),
    // 月份
    months: PropTypes.arrayOf(PropTypes.string),
    // 是否显示今天
    showToday: PropTypes.bool,
    // 今天
    todayText: PropTypes.string,
    // 星期第一天
    firstDayOfWeek: PropTypes.number,
    // 最小日期
    minDate: PropTypes.string,
    // 最大日期
    maxDate: PropTypes.string,
    // 年份前后默认范围
    yearScope: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // 选中时间
    onSelect: PropTypes.func,
    // 修改选中时间
    onChange: PropTypes.func,
  }
  // 默认props
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
   * 获取日期数据.
   * @param  {[Moment]} currentMoment [当前日期]
   */
  getDate(currentMoment) {
    let { minDate, maxDate } = this.state,
      { firstDayOfWeek } = this.props,
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
        disable:
          (minDate && dayMoment.isBefore(minDate)) ||
          (maxDate && dayMoment.isAfter(maxDate)),
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
        disable:
          (minDate && dayMoment.isBefore(minDate)) ||
          (maxDate && dayMoment.isAfter(maxDate)),
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
   * 根据当前时间获取年份列表.
   * @param  {[Moment]} currentMoment [当前时间]
   * @return {[Array]}                [年份列表]
   */
  getYears(currentMoment) {
    let { yearScope } = this.props,
      years = [],
      currentYear = currentMoment.year()

    for (let i = currentYear - yearScope; i <= currentYear + yearScope; i++) {
      years.push(i)
    }

    return years
  }
  /**
   * 上个月.
   */
  prevMonthHandle = () => {
    let { currentMoment, panel } = this.state

    this.getDate(moment(currentMoment).subtract(1, 'months'))
    panel === 'month' && this.resetMonthPanelScroll()
  }
  /**
   * 下个月.
   */
  nextMonthHandle = () => {
    let { currentMoment, panel } = this.state

    this.getDate(moment(currentMoment).add(1, 'months'))
    panel === 'month' && this.resetMonthPanelScroll()
  }
  /**
   * 上一年.
   */
  prevYearHandle = () => {
    let { currentMoment, panel } = this.state

    this.getDate(moment(currentMoment).subtract(1, 'years'))
    panel === 'month' && this.resetMonthPanelScroll()
  }
  /**
   * 下一年.
   */
  nextYearHandle = () => {
    let { currentMoment, panel } = this.state

    this.getDate(moment(currentMoment).add(1, 'years'))
    panel === 'month' && this.resetMonthPanelScroll()
  }
  /**
   * 选中时间.
   */
  selectDateHandle = day => {
    let { onSelect, onChange } = this.props,
      { checkedDay, format } = this.state,
      dayFormat = day.format(format)

    this.setState({
      checkedDay: day,
    })

    onSelect && onSelect(dayFormat)
    onChange && checkedDay !== day && onChange(dayFormat)
  }
  /**
   * 选中年份.
   * @param  {[String]} year [年份]
   */
  selectYearHandle = year => {
    let { currentMoment } = this.state,
      newMoment = moment(currentMoment).year(year)

    this.setState({
      checkedDay: undefined,
      currentMoment: newMoment,
    })
    this.getDate(newMoment)
  }
  /**
   * 选中月份.
   * @param  {[String]} month [月份]
   */
  selectMonthHandle = month => {
    let { currentMoment, format } = this.state,
      { type, onSelect, onChange } = this.props,
      newMoment = moment(currentMoment).month(month)

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
   * 今天.
   */
  selectTodayHandle = () => {
    let { onSelect, onChange, minDate, maxDate } = this.props,
      { checkedDay, format } = this.state,
      today = moment(moment().format(FORMAT.DATE)),
      dayFormat = today.format(format)

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
   * 显示年月选择面板.
   */
  showMonthPanelHandle = () => {
    let { panel } = this.state,
      { type } = this.props

    type === 'date' &&
      this.setState({
        panel: panel === 'month' ? 'day' : 'month',
      })
  }
  /**
   * 更正month面板滚动条位置.
   */
  componentDidUpdate() {
    let { type } = this.props,
      { _yeargroup } = this.refs

    type === 'date' &&
      _yeargroup &&
      _yeargroup.scrollTop === 0 &&
      this.resetMonthPanelScroll()
  }
  /**
   * 修改month面板的滚动条位置.
   */
  resetMonthPanelScroll = () => {
    let { _yeargroup, _monthgroup } = this.refs

    if (!this._activeYear || !this._activeMonth) {
      return true
    }

    let yearHeight = this._activeYear.getBoundingClientRect().height,
      monthHeight = this._activeMonth.getBoundingClientRect().height

    this._yeargroupScrollTop = _yeargroup.scrollTop =
      this._activeYear.offsetTop - _yeargroup.offsetTop - yearHeight * 2
    _monthgroup.scrollTop =
      this._activeMonth.offsetTop - _monthgroup.offsetTop - monthHeight * 2

    return true
  }
  componentDidMount() {
    let { currentMoment } = this.state

    this.getDate(currentMoment)
  }
  componentWillReceiveProps(nextProps) {
    let { value } = nextProps,
      { format } = this.state

    this.setState({
      checkedDay: value ? moment(value, format) : undefined,
    })
  }
  /**
   * 无限获取年份.
   * @param  {[Event]} event [事件]
   */
  scrollYearHandle = event => {
    if (!this._activeYear) {
      return
    }

    let { years } = this.state,
      container = event.target,
      yearHeight = this._activeYear.getBoundingClientRect().height,
      point = container.getBoundingClientRect().height + yearHeight

    // 上滑
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
      // 下滑
      this._yeargroupScrollTop = container.scrollTop
      if (container.scrollHeight - container.scrollTop < point) {
        let nextYear = years[years.length - 1] + 1

        this.setState({
          years: [...years, nextYear],
        })
      }
    }
  }
  // 渲染
  render() {
    let {
        panel,
        currentMoment,
        weekdays,
        days,
        checkedDay,
        years,
      } = this.state,
      { showToday, todayText, months, className } = this.props,
      currentYear = currentMoment.format(FORMAT.YEAR),
      currentMonth = currentMoment.format(FORMAT.MONTH)

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
