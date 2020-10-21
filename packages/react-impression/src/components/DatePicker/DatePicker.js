import moment from 'moment'
import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import TimeSelect from '../TimeSelect'
import Button from '../Button'

/**
 * 时间格式
 */
const FORMAT = {
  YEAR: 'YYYY',
  MONTH: 'MM',
  YEAR_MONTH: 'YYYY-MM',
  DATE: 'YYYY-MM-DD',
  TIME: 'HH:mm:ss',
}

export default class DatePicker extends React.PureComponent {
  static propTypes = {
    /**
     * 类型
     */
    type: PropTypes.oneOf(['date', 'month', 'year', 'dateTime']),

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 选中日期值
     */
    value: PropTypes.string,

    /**
     * 格式
     */
    format: PropTypes.string,

    /**
     * 星期映射列表
     */
    weekdays: PropTypes.arrayOf(PropTypes.string),

    /**
     * 月份映射列表
     */
    months: PropTypes.arrayOf(PropTypes.string),

    /**
     * 是否显示今天 时间选择显示此刻按钮
     */
    showToday: PropTypes.bool,

    /**
     * 今天按钮显示文案
     */
    todayText: PropTypes.string,

    /**
     * 指定一周开始是星期几
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
     * 选中时间回调，参数列表：dayFormat
     */
    onSelect: PropTypes.func,

    /**
     * 选中指定类型的时间格式后回调，参数列表：dayFormat
     */
    onChange: PropTypes.func,
  }

  constructor(props, context) {
    super(props, context)
    const { type, value, minDate, maxDate, format, yearScope } = props
    const weekdays = this.getSortWeekdays()
    const state = {
      days: [],
      years: [],
      weekdays,
      selectedDate: (value && moment(value).format(FORMAT.DATE)) || '', // 时间选择选中的日期
      selectedTime: (value && moment(value).format(FORMAT.TIME)) || '00:00:00', // 时间选择选中的时间
      currentMoment: moment(value || moment(), format),
      yearOnPanel: moment(value || moment(), format), // 年份面板显示的时间范围的记录
      checkedDay: this.convertDateToMap(value, format),
    }
    const yearNumbers = Math.ceil((yearScope * 2 + 1) / 3) * 3 // 年份面板 一页显示多少年
    state.yearNumbers = yearNumbers
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
        state.panel = 'date'
        break
    }
    let timeSelect
    if (type === 'dateTime') {
      timeSelect = true
      state.format = format || `${FORMAT.DATE} ${FORMAT.TIME}`
    } else {
      timeSelect = false
    }
    state.timeSelect = timeSelect
    state.resumeDay = { ...state.checkedDay }
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
  getDays(dateMoment) {
    const { firstDayOfWeek } = this.props
    const today = moment().format(FORMAT.DATE)
    const prevMonth = moment(dateMoment).subtract(1, 'months')
    const nextMonth = moment(dateMoment).add(1, 'months')
    const currentYear = dateMoment.format(FORMAT.YEAR)
    const currentMonth = dateMoment.format(FORMAT.MONTH)
    const daysLength = dateMoment.daysInMonth()
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
    const firstDay = moment(dateMoment)
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
        beforeMonth: true,
        isToday: dayMoment.isSame(today),
        disable: this.isDisableDate(dayMoment),
      })
    }
    // 补齐下个月前几天
    const lastDay = moment(dateMoment)
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
        afterMonth: true,
        isToday: dayMoment.isSame(today),
        disable: this.isDisableDate(dayMoment),
      })
    }

    return days
  }

  /**
   * 根据当前时间获取年份列表
   */
  getYears = dateMoment => {
    const { yearScope } = this.props
    const currentYear = dateMoment.year()
    const years = []
    // 一行3个，所以算成3的倍数
    const yearMaxRange =
      Math.ceil((yearScope * 2 + 1) / 3) * 3 - yearScope + currentYear
    for (let i = currentYear - yearScope; i < yearMaxRange; i++) {
      years.push(i)
    }

    return years
  }

  /**
   * 上个月
   */
  handlePrevMonth = () => {
    const { currentMoment } = this.state
    const newMoment = moment(currentMoment).subtract(1, 'month')
    this.afterSwitchMonth(newMoment)
  }

  /**
   * 下个月
   */
  handleNextMonth = () => {
    const { currentMoment } = this.state
    const newMoment = moment(currentMoment).add(1, 'month')
    this.afterSwitchMonth(newMoment)
  }

  /**
   * 切换月份之后
   * @param {Moment} newMoment
   */
  afterSwitchMonth = newMoment => {
    this.setState({
      days: this.getDays(newMoment),
      currentMoment: newMoment,
    })
  }

  /**
   * 上一年
   * 月份面板无此功能
   */
  handlePrevYear = () => {
    const { currentMoment } = this.state
    const newMoment = moment(currentMoment).subtract(1, 'years')
    this.afterSwitchYear(newMoment)
  }

  /**
   * 下一年
   * 月份面板无此功能
   */
  handleNextYear = () => {
    const { currentMoment } = this.state
    const newMoment = moment(currentMoment).add(1, 'years')
    this.afterSwitchYear(newMoment)
  }

  /**
   * 切换年份之后
   * @param {Moment} newMoment
   */
  afterSwitchYear = newMoment => {
    const { panel } = this.state
    const state = { currentMoment: newMoment }
    // 日期面板更新：日期数据、组件标题
    if (panel === 'date') {
      state.days = this.getDays(newMoment)
    }
    this.setState(state)
  }

  /**
   * 日期转换成包含年月日的普通对象
   * @param {string|moment} date
   * @param format
   * @returns {*}
   */
  convertDateToMap = (date, format = FORMAT.DATE) => {
    if (!date) {
      return { year: -1, month: -1, date: -1 }
    }
    const dateMoment = typeof date === 'string' ? moment(date, format) : date
    return {
      year: dateMoment.year(),
      month: dateMoment.month(),
      date: dateMoment.date(),
    }
  }

  /**
   * 选中日期
   * @param {Moment} day
   */
  handleSelectDate = day => {
    const { onSelect, onChange } = this.props
    const { checkedDay, format, timeSelect } = this.state
    const dayFormat = day.format(format)
    if (timeSelect) {
      this.setState({ selectedDate: day.format(FORMAT.DATE), panel: 'time' })
    } else {
      onSelect && onSelect(dayFormat)
      if (!moment(checkedDay).isSame(day)) {
        onChange && onChange(dayFormat)
      }
    }
    this.setState({ checkedDay: this.convertDateToMap(day) })
  }

  /**
   * 选中时间
   * @param {Moment} time
   */
  handleSelectTime = time => {
    this.setState({ selectedTime: time })
  }

  /**
   * 选中年份
   */
  handleSelectYear = e => {
    const { currentMoment, format } = this.state
    const year = e.currentTarget.dataset.year
    if (this.isDisableDate(year)) {
      return
    }
    // 只改变当前时间的年份
    const newMoment = moment(currentMoment).year(year)
    const { type, onSelect, onChange } = this.props
    // 1. 年模式，触发选中
    if (type === 'year') {
      this.setState({
        checkedDay: this.convertDateToMap(newMoment),
        currentMoment: newMoment,
      })
      const formatDateStr = newMoment.format(format)
      onSelect && onSelect(formatDateStr)
      onChange && onChange(formatDateStr)
      return
    }
    // 2. 非年模式，触发下一级选择
    // 进入月份面板，更新：组件标题
    const state = {
      panel: 'month',
      currentMoment: newMoment,
    }
    // 3. 月模式，更新checkedDay
    if (type === 'month') {
      const checkedDay = { ...this.state.checkedDay }
      // newMoment 与 checkedDay 比较
      if (newMoment.year() === checkedDay.year) {
        // 同年，回复月份
        checkedDay.month = this.state.resumeDay.month
      } else {
        // 不同年，重置月份
        checkedDay.month = -1
      }
      state.checkedDay = checkedDay
    }
    this.setState(state)
  }

  /**
   * 选中月份
   */
  handleSelectMonth = e => {
    const { currentMoment, format } = this.state
    const month = e.currentTarget.dataset.month
    if (this.isDisableDate(`${currentMoment.year()}-${Number(month) + 1}`)) {
      return
    }
    // 只改变当前时间的月份
    const newMoment = moment(currentMoment).month(month)
    const { type, onSelect, onChange } = this.props
    // 1. 月模式，触发选中
    if (type === 'month') {
      this.setState({
        checkedDay: this.convertDateToMap(newMoment),
        currentMoment: newMoment,
      })
      const formatDateStr = newMoment.format(format)
      onSelect && onSelect(formatDateStr)
      onChange && onChange(formatDateStr)
      return
    }
    // 2. 非月模式，触发下一级选择
    const checkedDay = { ...this.state.checkedDay }
    // newMoment 与 checkedDay 比较
    if (newMoment.month() === checkedDay.month) {
      // 同月，回复日期
      checkedDay.date = this.state.resumeDay.date
    } else {
      // 不同月，重置日期
      checkedDay.date = -1
    }
    // 进入日期面板，更新：日期数据，组件标题
    this.setState(
      {
        panel: 'date',
      },
      () => {
        this.setState({
          days: this.getDays(newMoment),
          currentMoment: newMoment,
        })
      }
    )
  }

  /**
   * 触发「今天」按钮
   */
  handleSelectToday = () => {
    const { onSelect, onChange } = this.props
    const today = moment(moment().format(FORMAT.DATE))
    const { checkedDay = today, format } = this.state
    const dayFormat = today.format(format)

    if (this.isDisableDate(today)) return

    onSelect && onSelect(dayFormat)
    if (!moment(checkedDay).isSame(today)) {
      onChange && onChange(dayFormat)
    }

    this.setState({ checkedDay: this.convertDateToMap(today) })
  }

  /**
   * 切换年月日选择面板
   */
  handleSwitchPanel = () => {
    const nextPanel = this.state.panel === 'date' ? 'month' : 'year'
    const state = { panel: nextPanel }
    if (nextPanel === 'year') {
      state.years = this.getYears(this.state.currentMoment)
    }
    this.setState(state)
  }

  getPickerTitle = () => {
    const { panel, years, currentMoment } = this.state
    if (panel === 'year' && years.length) {
      return `${years[0]}~${years[years.length - 1]}`
    }
    if (panel === 'month') {
      return currentMoment.format('YYYY年')
    }
    if (panel === 'date') {
      return currentMoment.format('YYYY年MM月')
    }
    return '请选择'
  }

  isDisableDate = date => {
    const { panel, minDate, maxDate } = this.state
    const dayMoment = moment(date, FORMAT.DATE)
    let min
    let max
    if (panel === 'year') {
      min = minDate && moment(minDate.format(FORMAT.YEAR), FORMAT.DATE)
      max = maxDate && moment(maxDate.format(FORMAT.YEAR), FORMAT.DATE)
    } else if (panel === 'month') {
      min = minDate && moment(minDate.format(FORMAT.YEAR_MONTH), FORMAT.DATE)
      max = maxDate && moment(maxDate.format(FORMAT.YEAR_MONTH), FORMAT.DATE)
    } else {
      min = minDate
      max = maxDate
    }
    return (min && dayMoment.isBefore(min)) || (max && dayMoment.isAfter(max))
  }

  /**
   * 日期时间选择 点击确定按钮
   */
  handleConfirmTime = () => {
    const { onSelect, onChange } = this.props
    const { selectedDate, selectedTime, format } = this.state
    const date = `${selectedDate} ${selectedTime}`
    onChange && onChange(moment(date).format(format))
    onSelect && onSelect(moment(date).format(format))
    this.setState({
      panel: 'date',
    })
  }

  /**
   * 时间日期选择 此刻
   */
  handleSelectNow = () => {
    const { onSelect, onChange } = this.props
    const { format } = this.state
    let currentTime = moment()
    this.setState({
      selectedDate: currentTime.format(FORMAT.DATE),
      selectedTime: currentTime.format(FORMAT.TIME),
    })
    onChange && onChange(currentTime.format(format))
    onSelect && onSelect(currentTime.format(format))
    this.setState({
      panel: 'date',
    })
  }

  /**
   * 点击单尖括号
   * @param type 点击的尖括号的类型 左：1，右 0
   */
  handleClickAngle = (type = 1) => {
    const { panel } = this.state
    const {
      handlePrevMonth,
      handlePrevYear,
      handleNextMonth,
      handleNextYear,
    } = this
    if (panel === 'month') {
      type ? handlePrevYear() : handleNextYear()
    }
    if (panel === 'date') {
      type ? handlePrevMonth() : handleNextMonth()
    }
  }

  /**
   * 点击双尖括号
   * @param type 点击的尖括号的类型 左：1，右 0
   */
  handleClickDoubleAngle = (type = 1) => {
    const { panel } = this.state
    const { handlePrevYear, handleNextYear, handleChangeYearRange } = this
    if (panel === 'year') {
      handleChangeYearRange(type)
    }
    if (panel === 'date') {
      type ? handlePrevYear() : handleNextYear()
    }
  }

  /**
   * 修改年份面板的范围
   * @param type 1:前*年 0:后*年
   */
  handleChangeYearRange = type => {
    const { yearOnPanel, yearNumbers } = this.state
    const currentYear = yearOnPanel.year()
    let years
    years = this.getYears(
      yearOnPanel.set(
        'year',
        type ? currentYear - yearNumbers : currentYear + yearNumbers
      )
    )
    this.setState({
      years,
    })
  }

  componentDidMount() {
    const { currentMoment, panel } = this.state
    if (panel === 'date') {
      this.setState({ days: this.getDays(currentMoment) })
      return
    }
    if (panel === 'year') {
      this.setState({ years: this.getYears(currentMoment) })
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { value } = nextProps
    const { timeSelect, selectedDate, selectedTime } = this.state
    if (timeSelect) {
      const state = {}
      // 当 value 为空时清空selectedDate 和 selectedTime 的值
      if (selectedDate !== moment(value).format(FORMAT.DATE)) {
        // 保持value 的日期和selectedDate显示的日期是同一天
        state.selectedDate = value ? moment(value).format(FORMAT.DATE) : ''
        state.checkedDay = this.convertDateToMap(value)
      }
      if (selectedTime !== moment(value).format(FORMAT.TIME)) {
        // 保持value 的时间和selectedDate显示的日期是同一天
        state.selectedTime = value ? moment(value).format(FORMAT.TIME) : ''
      }
      this.setState({
        ...state,
        panel: 'date',
      })
    }
    if (!value && this.props.value !== value) {
      // 针对非时间日期选择器的 情况
      // value 重置为空
      const { panel } = this.state
      const currentMoment = moment()
      const state = {
        currentMoment,
        checkedDay: this.convertDateToMap(value),
      }
      if (panel === 'date') {
        // 如果面板为日期 把当前可选的月份 改为此刻的月份
        state.days = this.getDays(currentMoment)
      }
      if (panel === 'year') {
        // 如果面板为日期 把当前可选的年份 改为此刻的年份对应的面板
        state.years = this.getYears(currentMoment)
        state.yearOnPanel = moment()
      }
      this.setState(state)
    }
  }

  render() {
    const {
      panel,
      currentMoment,
      weekdays,
      days,
      checkedDay,
      selectedDate,
      selectedTime,
      years,
      timeSelect,
    } = this.state
    const { type, showToday, todayText, months, className } = this.props
    const checkedDayMoment = moment(checkedDay)
    return (
      <div className={classnames('datepicker', className)} ref='container'>
        <div className='datepicker-inner'>
          {timeSelect && (
            <div className='datepicker-timeselect-review'>
              <div className='input'>
                <input
                  readOnly
                  type='text'
                  className='form-control input-field form-control-sm'
                  placeholder={FORMAT.DATE}
                  onClick={() => {
                    this.setState({ panel: 'date' })
                  }}
                  value={
                    (selectedDate &&
                      moment(selectedDate).format(FORMAT.DATE)) ||
                    ''
                  }
                />
                <div className='dada-input-border' />
                {selectedDate && (
                  <i
                    className='dada-ico dada-ico-times-circle dada-ico-sm dada-input-addon-after'
                    onClick={e => {
                      e.stopPropagation()
                      this.setState({
                        selectedDate: '',
                        checkedDay: this.convertDateToMap(null),
                        panel: 'date',
                      })
                    }}
                  />
                )}
              </div>
              <div className='input'>
                <input
                  readOnly
                  type='text'
                  className='form-control input-field form-control-sm'
                  placeholder={FORMAT.TIME}
                  onClick={() => {
                    this.setState({ panel: 'time' })
                  }}
                  value={selectedTime || ''}
                />
                <div className='dada-input-border' />
                {selectedTime && (
                  <i
                    className='dada-ico dada-ico-times-circle dada-ico-sm dada-input-addon-after'
                    onClick={e => {
                      e.stopPropagation()
                      this.setState({ selectedTime: '' })
                    }}
                  />
                )}
              </div>
            </div>
          )}
          {panel !== 'time' && (
            <div className='datepicker-header'>
              {panel !== 'month' && (
                <i
                  className='dada-ico datepicker-header-btn dada-ico-angle-double-left'
                  onClick={this.handleClickDoubleAngle}
                />
              )}
              {panel !== 'year' && (
                <i
                  className='dada-ico datepicker-header-btn dada-ico-angle-left datepicker-month-btn'
                  onClick={this.handleClickAngle}
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
                  className='dada-ico datepicker-header-btn dada-ico-angle-right datepicker-month-btn'
                  onClick={() => this.handleClickAngle(0)}
                />
              )}
              {panel !== 'month' && (
                <i
                  className='dada-ico datepicker-header-btn dada-ico-angle-double-right'
                  onClick={() => this.handleClickDoubleAngle(0)}
                />
              )}
            </div>
          )}
          {panel === 'date' && (
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
                {days.map(
                  ({
                    text,
                    date,
                    isToday,
                    inMonth,
                    disable,
                    beforeMonth,
                    afterMonth,
                  }) => (
                    <div
                      key={`${text}-${inMonth}`}
                      onClick={() => {
                        !disable && this.handleSelectDate(date)
                        beforeMonth && this.handlePrevMonth()
                        afterMonth && this.handleNextMonth()
                      }}
                      className='datepicker-item datepicker-daygroup-item'
                    >
                      <div
                        className={classnames('datepicker-item-text', {
                          disable,
                          now: isToday,
                          active: date.isSame(checkedDayMoment),
                          notinmonth: !inMonth, // 是否是当月
                        })}
                      >
                        {text}
                      </div>
                    </div>
                  )
                )}
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
                        active:
                          panel === type
                            ? index === checkedDay.month
                            : index === currentMoment.month(),
                        disable: this.isDisableDate(
                          `${currentMoment.year()}-${index + 1}`
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
                        active:
                          panel === type
                            ? Number(year) === checkedDay.year
                            : Number(year) === currentMoment.year(),
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
          {panel === 'time' && (
            <TimeSelect
              type='second'
              value={selectedTime}
              autoClose={true}
              onSelect={val => {
                this.handleSelectTime(val)
              }}
            />
          )}
          {showToday && panel === 'date' && !timeSelect && (
            <div className='datepicker-footer' onClick={this.handleSelectToday}>
              <span>{todayText}</span>
            </div>
          )}
          {timeSelect && (panel === 'date' || panel === 'time') && (
            <div className='datepicker-footer datepicker-confirm'>
              {showToday && (
                <Button theme='text' onClick={this.handleSelectNow}>
                  此刻
                </Button>
              )}
              <Button
                theme='text'
                disabled={!selectedDate || !selectedTime}
                onClick={this.handleConfirmTime}
              >
                确定
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
