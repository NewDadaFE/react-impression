import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import PerfectScrollbar from 'perfect-scrollbar'
import moment from 'moment'

export default class TimeSelect extends React.PureComponent {
  state = {
    hour: this.props.value ? this.props.value.split(':')[0] : '',
    minute: this.props.value ? this.props.value.split(':')[1] : '',
    second: this.props.value ? this.props.value.split(':')[1] : '',
    currentHour: this.props.value ? this.props.value.split(':')[0] : '',
    currentMinute: this.props.value ? this.props.value.split(':')[1] : '',
    currentSecond: this.props.value ? this.props.value.split(':')[2] : '',
  }
  static propTypes = {
    /**
     * 选中时间值
     */
    value: PropTypes.string,

    /**
     * 选中后回调
     */
    onChange: PropTypes.func,

    /**
     * 选中时间回调
     */
    onSelect: PropTypes.func,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 时间控件类型
     */
    type: PropTypes.oneOf(['time', 'second']),
  }

  componentDidMount() {
    const { type } = this.props
    window.requestAnimationFrame(() => {
      this.hoursScrollbar = new PerfectScrollbar(this.hourContainer, {
        suppressScrollX: true,
        mixScrollbarLength: 34,
        maxScrollbarLength: 34,
      })
      this.minuteScrollbar = new PerfectScrollbar(this.minuteContainer, {
        suppressScrollX: true,
        mixScrollbarLength: 34,
        maxScrollbarLength: 34,
      })
      if (type === 'second') {
        this.secondScrollbar = new PerfectScrollbar(this.secondContainer, {
          suppressScrollX: true,
          mixScrollbarLength: 34,
          maxScrollbarLength: 34,
        })
      }
    })
  }

  componentWillUnmount() {
    const { type } = this.props
    this.hoursScrollbar.destroy()
    this.hoursScrollbar = null
    this.minuteScrollbar.destroy()
    this.minuteScrollbar = null
    if (type === 'second') {
      this.secondScrollbar.destroy()
      this.secondScrollbar = null
    }
  }
  componentWillReceiveProps(nextProps) {
    const { value } = nextProps
    this.setState({
      currentHour: value ? value.split(':')[0] : '',
      currentMinute: value ? value.split(':')[1] : '',
      currentSecond: value ? value.split(':')[2] : '',
    })
  }

  /**
   * @description  延迟更新小时滚动条
   * @memberof TimeSelect
   */
  handleUpdateHourScroll = () => {
    // 延迟更新滚动条
    window.requestAnimationFrame(() => {
      this.hourScrollbar && this.hourScrollbar.update()
    })
  }

  /**
   * @description  延迟更新分钟滚动条
   * @memberof TimeSelect
   */
  handleUpdateMinuteScroll = () => {
    window.requestAnimationFrame(() => {
      this.minuteScrollbar && this.minuteScrollbar.update()
    })
  }
  /**
   * @description  延迟更新秒滚动条
   * @memberof TimeSelect
   */
  handleUpdateSecondScroll = () => {
    window.requestAnimationFrame(() => {
      this.secondScrollbar && this.secondScrollbar.update()
    })
  }

  /**
   * @description 小时array
   * @memberof TimeSelect
   */
  get hourList() {
    return Array.from({ length: 24 }, (v, k) => {
      if (k < 10) {
        return `0${k}`
      }
      return `${k}`
    })
  }

  /**
   * @description 分钟array
   * @memberof TimeSelect
   */
  get minuteList() {
    return Array.from({ length: 60 }, (v, k) => {
      if (k < 10) {
        return `0${k}`
      }
      return `${k}`
    })
  }

  /**
   * @description 秒array
   * @memberof TimeSelect
   */
  get secondList() {
    return Array.from({ length: 60 }, (v, k) => {
      if (k < 10) {
        return `0${k}`
      }
      return `${k}`
    })
  }

  /**
   * @description 小时点击事件
   * @memberof TimeSelect
   */
  handleSetHour = (currentHour, e) => {
    this.setState({ currentHour }, this.handleSave)
  }

  /**
   * @description 分钟点击事件
   * @memberof TimeSelect
   */
  handleSetMinute = (currentMinute, e) => {
    this.setState({ currentMinute }, this.handleSave)
  }
  /**
   * @description 秒点击事件
   * @memberof TimeSelect
   */
  handleSetSecond = (currentSecond, e) => {
    this.setState({ currentSecond }, this.handleSave)
  }

  /**
   * @description  回调
   * @memberof TimeSelect
   */
  handleSave = () => {
    const { currentHour, currentMinute, currentSecond } = this.state
    const { onChange, onSelect, type } = this.props
    if (!currentHour || !currentMinute || (!currentSecond && type === 'second')) { return }
    let result = ''
    if (type === 'time') {
      result = `${currentHour}:${currentMinute}`
    }
    if (type === 'second') {
      result = `${currentHour}:${currentMinute}:${currentSecond}`
    }
    onSelect && onSelect(result)
    onChange && onChange(result)
  }

  render() {
    const { currentHour, currentMinute, currentSecond } = this.state
    const { className, type } = this.props
    return (
      <div className={classnames('time-select-out', className)} ref='container'>
        <div className='time-select flex'>
          <div
            className='time-select-wrap'
            ref={div => (this.hourContainer = div)}
            onClick={this.handleUpdateHourScroll}
          >
            {this.hourList.map(item => (
              <div
                key={`hour${item}`}
                className={classnames('time-select-wrap-inner', {
                  active:
                    currentHour && currentHour.toString() === item.toString(),
                })}
                onClick={e => this.handleSetHour(item, e)}
              >
                {item}
              </div>
            ))}
          </div>
          <div
            className='time-select-wrap'
            ref={div => (this.minuteContainer = div)}
            onClick={this.handleUpdateMinuteScroll}
          >
            {this.minuteList.map(min => (
              <div
                key={`minute${min}`}
                className={classnames('time-select-wrap-inner', {
                  active:
                    currentMinute &&
                    currentMinute.toString() === min.toString(),
                })}
                onClick={e => this.handleSetMinute(min, e)}
              >
                {min}
              </div>
            ))}
          </div>
          {type === 'second' && (
            <div
              className='time-select-wrap'
              ref={div => (this.secondContainer = div)}
              onClick={this.handleUpdateMinuteScroll}
            >
              {this.secondList.map(min => (
                <div
                  key={`second${min}`}
                  className={classnames('time-select-wrap-inner', {
                    active:
                      currentSecond &&
                      currentSecond.toString() === min.toString(),
                  })}
                  onClick={e => this.handleSetSecond(min, e)}
                >
                  {min}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}
