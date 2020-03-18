### 示例

**基本用法**

```js
<CardBlock>
  <Calendar />
</CardBlock>
```

**小尺寸**

```js
class CalendarView extends React.Component {
  constructor(prop, context) {
    super(prop, context)
    this.state = {
      days: [5, 6, 7, 8, 9, 10],
    }

    this.checkDateCellRender = this.checkDateCellRender.bind(this)
    this.checkDateClickHandle = this.checkDateClickHandle.bind(this)
  }

  checkDateCellRender(date) {
    if (this.state.days.indexOf(date.day) !== -1) {
      return (
        <div className="text-success text-center">
          <Icon type="check" />
        </div>
      )
    }

    return null
  }

  checkDateClickHandle(date) {
    const { days } = this.state

    if (!date.inMonth) {
      return
    }

    if (days.indexOf(date.day) === -1) {
      this.setState({
        days: [...days, date.day],
      })
    } else {
      this.setState({
        days: days.filter(day => {
          return day !== date.day
        }),
      })
    }
  }

  render() {
    return (
      <Card>
        <CardBlock>
          <Row>
            <Col>
              <Calendar size="sm" />
            </Col>
            <Col>
              <Calendar
                onCellClick={this.checkDateClickHandle}
                cellRender={this.checkDateCellRender}
                firstDayOfWeek={0}
                size="sm"
              />
            </Col>
          </Row>
        </CardBlock>
      </Card>
    )
  }
}
;<CalendarView />
```

**自定义模块内容**

```js
class CalendarView extends React.Component {
  constructor(prop, context) {
    super(prop, context)
    this.customDateCellRender = this.customDateCellRender.bind(this)
  }

  customDateCellRender(date) {
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
              <Badge type="legend" theme="success">
                {date.day}
              </Badge>
            </div>
            <div>
              <Badge type="legend" theme="warning">
                {date.day}
              </Badge>
            </div>
            <div>
              <Badge type="legend" theme="danger">
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
          <div className="text-center">
            <Image
              src={require('../../images/user.jpg')}
              style={{ width: '70px' }}
              fluid
              circle
            />
          </div>
        )
      case 11:
      case 12:
      case 13:
        return (
          <div>
            <div>
              <Badge type="legend" theme="success">
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
          <Badge type="legend" theme="danger">
            {date.day}
          </Badge>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <Card>
        <CardBlock>
          <Calendar cellRender={this.customDateCellRender} />
        </CardBlock>
      </Card>
    )
  }
}
;<CalendarView />
```
