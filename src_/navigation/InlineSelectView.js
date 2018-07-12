import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, InlineSelect } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

export default class InlineSelectView extends Component {
  static propTypes = {
    routes: PropTypes.array,
  }
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
        <Breadcrumb routes={this.props.routes} />
        <Card block noborder>
          <h3>Examples</h3>
          <Card>
            <Card.Block>
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
            </Card.Block>
            <Highlight>
              {'import { InlineSelect } from "impression-react";\n\n'}
              {'<InlineSelect value="1" onChange={..}>\n'}
              {
                '  <InlineSelect.Option value="1">北京</InlineSelect.Option>\n  ...\n'
              }
              {'</InlineSelect>\n'}
              {'<InlineSelect value="1" onChange={...}>\n'}
              {
                '  <InlineSelect.Option value="1">金山区</InlineSelect.Option>\n  ...\n'
              }
              {'</InlineSelect>'}
            </Highlight>
          </Card>
          <h5>InlineSelect API</h5>
          <CommenTable
            data={[
              ['value', '选中值', 'any', '2'],
              ['defaultValue', '选中值', 'any', '1'],
              ['onChange', '选中回调函数', 'function', ''],
              ['className', '自定义样式', 'string', ''],
            ]}
          />
          <h5>InlineSelect.Option API</h5>
          <CommenTable
            data={[
              ['active', '是否选择', 'boolean', ''],
              ['className', '自定义样式', 'string', ''],
            ]}
          />
        </Card>
      </div>
    )
  }
}
