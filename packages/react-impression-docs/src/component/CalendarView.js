import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Row,
  Col,
  Calendar,
  Badge,
  Icon,
  Image,
} from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

export default class CalendarView extends Component {
  static propTypes = {
    routes: PropTypes.array,
  }
  constructor(prop, context) {
    super(prop, context)

    this.state = {
      days: [5, 6, 7, 8, 9, 10],
    }
  }
  customDateCellRender = date => {
    if (!date.inMonth) {
      return null
    }

    switch (date.day) {
      case 1:
      case 2:
      case 3:
        return (
          <div>
            <div>
              <Badge type='legend' theme='success'>
                {date.day}
              </Badge>
            </div>
            <div>
              <Badge type='legend' theme='warning'>
                {date.day}
              </Badge>
            </div>
            <div>
              <Badge type='legend' theme='danger'>
                {date.day}
              </Badge>
            </div>
          </div>
        )
      case 5:
      case 14:
      case 23:
      case 27:
        return (
          <div className='text-center'>
            <Image circle src='images/user.jpg' style={{ width: '70px' }} />
          </div>
        )
      case 11:
      case 12:
      case 13:
        return (
          <div>
            <div>
              <Badge type='legend' theme='success'>
                {date.day}
              </Badge>
            </div>
            <div>自定义内容1</div>
            <div>自定义内容2</div>
            <div>自定义内容3</div>
            <div>自定义内容4</div>
          </div>
        )
      case 21:
      case 22:
        return (
          <Badge type='legend' theme='danger'>
            {date.day}
          </Badge>
        )
      default:
        return null
    }
  }
  checkDateCellRender = date => {
    if (this.state.days.indexOf(date.day) !== -1) {
      return (
        <div className='text-success text-center'>
          <Icon type='check' />
        </div>
      )
    }

    return null
  }
  checkDateClickHandle = date => {
    let { days } = this.state

    if (!date.inMonth) {
      return
    }

    // 选中
    if (days.indexOf(date.day) === -1) {
      this.setState({
        days: [...days, date.day],
      })
    } else {
      // 去除选中
      this.setState({
        days: days.filter(day => {
          return day !== date.day
        }),
      })
    }
  }
  render() {
    return (
      <div>
        <Breadcrumb routes={this.props.routes} />
        <Card block noborder>
          <h3>Basic</h3>
          <Card>
            <Card.Block>
              <Calendar />
            </Card.Block>
            <Highlight>
              {'import { Calendar } from "impression-react";\n\n'}
              {'<Calendar />'}
            </Highlight>
          </Card>
          <h3>Small</h3>
          <Card>
            <Card.Block>
              <Row>
                <Col>
                  <Calendar size='sm' />
                </Col>
                <Col>
                  <Calendar
                    onCellClick={this.checkDateClickHandle}
                    cellRender={this.checkDateCellRender}
                    firstDayOfWeek={0}
                    size='sm'
                  />
                </Col>
              </Row>
            </Card.Block>
            <Highlight>
              {'<Calendar size="sm" />\n'}
              {'<Calendar firstDayOfWeek={0} size="sm" />'}
            </Highlight>
          </Card>
          <h3>Custom date cell content</h3>
          <Card>
            <Card.Block>
              <Calendar cellRender={this.customDateCellRender} />
            </Card.Block>
            <Highlight>{'<Calendar cellRender={...} />'}</Highlight>
          </Card>
          <h5>Calendar API</h5>
          <CommenTable
            data={[
              ['size', '尺寸', 'sm/lg', ''],
              ['date', '时间', 'string', ''],
              ['format', '时间格式', '', ''],
              ['captionFormat', '头部显示格式', 'string', 'YYYY年MM月'],
              ['firstDayOfWeek', '一周第一天', 'number', '1'],
              ['weekdays', '周几', 'array', '[周日,周一,...,周六]'],
              ['months', '月份', 'array', '[1月,...,12月]'],
              ['showToolbar', '是否显示工具栏', 'boolean', 'true'],
              ['showHeader', '是否显示头部', 'boolean', 'true'],
              ['cellRender', '自定义内容', 'function', ''],
              ['onCellClick', '时间单元格点击', 'function', ''],
              ['onDateChange', '日历时间切换', 'function', ''],
            ]}
          />
        </Card>
      </div>
    )
  }
}
