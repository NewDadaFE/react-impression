/* sourceCode:start */
import React, { Component } from 'react'
import { InlineSelect, Row, Col } from 'react-impression'

class InlineSelectExample extends Component {
  // 初始state
  constructor(props, context) {
    super(props, context)

    this.state = {
      city: '1',
      zone: '1',
    }
  }
  // 城市选中回调
  selectCityHandle = city => {
    this.setState({
      city,
      zone: undefined,
    })
  }
  // 区域选中回调
  selectZoneHandle = zone => {
    this.setState({
      zone,
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col col='1' className='text-right'>
            <strong>城市：</strong>
          </Col>
          <Col col='11'>
            <InlineSelect
              ref='city'
              defaultValue={this.state.city}
              onChange={this.selectCityHandle}
            >
              <InlineSelect.Option value='1'>北京</InlineSelect.Option>
              <InlineSelect.Option value='2'>上海</InlineSelect.Option>
              <InlineSelect.Option value='3'>南京</InlineSelect.Option>
              <InlineSelect.Option value='4'>苏州</InlineSelect.Option>
              <InlineSelect.Option value='5'>武汉</InlineSelect.Option>
              <InlineSelect.Option value='6'>无锡</InlineSelect.Option>
              <InlineSelect.Option value='7'>常州</InlineSelect.Option>
              <InlineSelect.Option value='8'>深圳</InlineSelect.Option>
              <InlineSelect.Option value='9'>重庆</InlineSelect.Option>
              <InlineSelect.Option value='10'>长沙</InlineSelect.Option>
              <InlineSelect.Option value='11'>成都</InlineSelect.Option>
              <InlineSelect.Option value='12'>天津</InlineSelect.Option>
              <InlineSelect.Option value='13'>厦门</InlineSelect.Option>
              <InlineSelect.Option value='14'>福州</InlineSelect.Option>
              <InlineSelect.Option value='15'>大连</InlineSelect.Option>
              <InlineSelect.Option value='16'>青岛</InlineSelect.Option>
              <InlineSelect.Option value='17'>哈尔滨</InlineSelect.Option>
              <InlineSelect.Option value='18'>济南</InlineSelect.Option>
              <InlineSelect.Option value='19'>郑州</InlineSelect.Option>
              <InlineSelect.Option value='20'>西安</InlineSelect.Option>
              <InlineSelect.Option value='21'>泉州</InlineSelect.Option>
              <InlineSelect.Option value='22'>东莞</InlineSelect.Option>
              <InlineSelect.Option value='23'>佛山</InlineSelect.Option>
            </InlineSelect>
          </Col>
        </Row>
        <Row>
          <Col col='1' className='text-right'>
            <strong>区域：</strong>
          </Col>
          <Col col='11'>
            <InlineSelect
              value={this.state.zone}
              onChange={this.selectZoneHandle}
            >
              <InlineSelect.Option value='1'>金山区</InlineSelect.Option>
              <InlineSelect.Option value='2'>鼓楼区</InlineSelect.Option>
              <InlineSelect.Option value='3'>朝阳区</InlineSelect.Option>
              <InlineSelect.Option value='4'>马尾区</InlineSelect.Option>
            </InlineSelect>
          </Col>
        </Row>
      </div>
    )
  }
}

/* sourceCode:end */

InlineSelectExample.title = '基本使用'
InlineSelectExample.desc = `> 此例子为城市和对应区域的联级选择`

export default InlineSelectExample
