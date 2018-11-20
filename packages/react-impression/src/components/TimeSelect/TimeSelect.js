import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import PerfectScrollbar from 'perfect-scrollbar'

export default class TimeSelect extends React.PureComponent {
  state = {
    hour: this.props.value ? this.props.value.split(':')[0] : '03',
    minute: this.props.value ? this.props.value.split(':')[1] : '03',
    curentHour: this.props.value ? this.props.value.split(':')[0] : '03',
    curentMinute: this.props.value ? this.props.value.split(':')[1] : '03',
  }
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
  }
  static defaultProps = {
    value: '03:03',
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
    this.setState({
      hour: nextProps.value ? nextProps.value.split(':')[0] : '03',
      minute: nextProps.value ? nextProps.value.split(':')[1] : '03',
    })
  }

  /**
   * @description  延迟更新小时滚动条
   * @memberof TimeSelect
   */
  handleUpdateHourScroll = () => {
    // 延迟更新滚动条
    window.requestAnimationFrame(() => {
      this.hourScrollbar.update()
    })
  }

  /**
   * @description  延迟更新分钟滚动条
   * @memberof TimeSelect
   */
  handleUpdateMinuteScroll = () => {
    window.requestAnimationFrame(() => {
      this.minuteScrollbar.update()
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

  handleSetHour = (curentHour, e) => {
    this.setState({ curentHour })
  }

  handleSetMinute = (curentMinute, e) => {
    this.setState({ curentMinute })
  }

  handleSave = () => {
    const { curentHour, curentMinute } = this.state
    const { onChange } = this.props
    const result = `${curentHour}:${curentMinute}`
    onChange && onChange(result)
  }

  render() {
    const { curentHour, curentMinute } = this.state
    return (
      <div className='time-select'>
        <div className='flex'>
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
