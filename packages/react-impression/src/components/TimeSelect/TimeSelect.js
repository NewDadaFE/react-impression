import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import PerfectScrollbar from 'perfect-scrollbar'
import moment from 'moment'

export default class TimeSelect extends React.PureComponent {
  state = {
    hour: this.props.value ? this.props.value.split(':')[0] : '',
    minute: this.props.value ? this.props.value.split(':')[1] : '',
    curentHour: this.props.value ? this.props.value.split(':')[0] : '',
    curentMinute: this.props.value ? this.props.value.split(':')[1] : '',
  }
  static propTypes = {
    /**
     * 时间
     */
    value: PropTypes.string,

    /**
     * 修改选中时间
     */
    onChange: PropTypes.func,

    /**
     * 选中时间
     */
    onSelect: PropTypes.func,

    /**
     * 自定义样式
     */
    className: PropTypes.string,
  }

  componentDidMount() {
    window.requestAnimationFrame(() => {
      this.hoursScrollbar = new PerfectScrollbar(this.hourContainer, {
        suppressScrollX: true,
      })
      this.minuteScrollbar = new PerfectScrollbar(this.minuteContainer, {
        suppressScrollX: true,
      })
    })
  }

  componentWillUnmount() {
    this.hoursScrollbar.destroy()
    this.hoursScrollbar = null
    this.minuteScrollbar.destroy()
    this.minuteScrollbar = null
  }
  componentWillReceiveProps(nextProps) {
    const { value } = nextProps

    this.setState({
      curentHour: value ? value.split(':')[0] : '',
      curentMinute: value ? value.split(':')[1] : '',
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
   * @description 小时点击事件
   * @memberof TimeSelect
   */
  handleSetHour = (curentHour, e) => {
    this.setState({ curentHour }, this.handleSave)
  }

  /**
   * @description 分钟点击事件
   * @memberof TimeSelect
   */
  handleSetMinute = (curentMinute, e) => {
    this.setState({ curentMinute }, this.handleSave)
  }

  /**
   * @description  回调
   * @memberof TimeSelect
   */
  handleSave = () => {
    const { curentHour, curentMinute } = this.state
    const { onChange, onSelect } = this.props
    if (!curentHour || !curentMinute) return
    const result = `${curentHour}:${curentMinute}`
    onSelect && onSelect(result)
    onChange && onChange(result)
  }

  render() {
    const { curentHour, curentMinute } = this.state
    const { className } = this.props
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
                    curentHour && curentHour.toString() === item.toString(),
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
                    curentMinute && curentMinute.toString() === min.toString(),
                })}
                onClick={e => this.handleSetMinute(min, e)}
              >
                {min}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
