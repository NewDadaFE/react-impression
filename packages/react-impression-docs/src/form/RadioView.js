import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Card,
  Radio,
  RadioGroup,
  Form,
} from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

export default class RadioView extends Component {
  static propTypes = {
    routes: PropTypes.array,
  }
  onChangeHandle = (event, value) => {
    console.log(value)
    console.log(Radio.getValue(this.refs.radio))
  }
  render() {
    let radioArray = [
      {
        id: 1,
        name: 'Yes',
      },
      {
        id: 2,
        name: 'No',
      },
    ]

    return (
      <div>
        <Breadcrumb routes={this.props.routes} />
        <Card block noborder>
          <h5>Radio</h5>
          <Row>
            <Col>
              <Card>
                <Card.Block>
                  <Form>
                    <Form.Group>
                      <label>Radio</label>
                      <Radio
                        ref='radio'
                        value={1}
                        onChange={this.onChangeHandle}
                      >
                        single
                      </Radio>
                    </Form.Group>
                  </Form>
                </Card.Block>
                <Highlight>
                  {
                    'import { Radio } from "impression-react";\n\n<Radio ref="radio">single</Radio>'
                  }
                </Highlight>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Block>
                  <Form>
                    <Form.Group>
                      <label>Disabled</label>
                      <Radio disabled>Yes</Radio>
                    </Form.Group>
                  </Form>
                </Card.Block>
                <Highlight>{'<Radio disabled>Yes</Radio>'}</Highlight>
              </Card>
            </Col>
          </Row>
          <h5>RadioGroup</h5>
          <Row>
            <Col>
              <Card>
                <Card.Block>
                  <Form>
                    <Form.Group>
                      <label>defaultValue</label>
                      <RadioGroup ref='radios' defaultValue={1}>
                        {radioArray.length > 0 &&
                          radioArray.map(item => (
                            <Radio key={item.id} value={item.id}>
                              {item.name}
                            </Radio>
                          ))}
                      </RadioGroup>
                    </Form.Group>
                  </Form>
                </Card.Block>
                <Highlight>
                  {'import { Radio, RadioGroup } from "impression-react";\n\n'}
                  {'<RadioGroup defaultValue={1} >\n'}
                  {'  <Radio value={1}>Yes</Radio>\n'}
                  {'  <Radio value={2}>No</Radio>\n'}
                  {'</RadioGroup>'}
                </Highlight>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Block>
                  <Form>
                    <Form.Group>
                      <label>value</label>
                      <RadioGroup value={2} onChange={this.onChangeHandle}>
                        {radioArray.length > 0 &&
                          radioArray.map(item => (
                            <Radio key={item.id} value={item.id}>
                              {item.name}
                            </Radio>
                          ))}
                      </RadioGroup>
                    </Form.Group>
                  </Form>
                </Card.Block>
                <Highlight>
                  {'<RadioGroup defaultValue={1} >\n'}
                  {'  <Radio value={1}>First</Radio>\n  ...\n'}
                  {'</RadioGroup>'}
                </Highlight>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Block>
                  <Form>
                    <Form.Group>
                      <label>Disabled</label>
                      <RadioGroup value={2} disabled>
                        {radioArray.length > 0 &&
                          radioArray.map(item => (
                            <Radio key={item.id} value={item.id}>
                              {item.name}
                            </Radio>
                          ))}
                      </RadioGroup>
                    </Form.Group>
                  </Form>
                </Card.Block>
                <Highlight>
                  {'<RadioGroup defaultValue={2} disabled>\n'}
                  {'  <Radio value={1}>First</Radio>\n  ...\n'}
                  {'</RadioGroup>'}
                </Highlight>
              </Card>
            </Col>
          </Row>
          <h5 className='text-secondary'>Radio API</h5>
          <ul>
            <li>Radio.getValue(this.refs.xxx)</li>
            <li>Radio.setValue(this.refs.xxx)</li>
          </ul>
          <CommenTable
            data={[
              ['name', '名称', 'any', ''],
              ['value', '返回值', 'any', ''],
              ['checked', '是否选中', 'boolean', ''],
              ['defaultChecked', '默认是否选中', 'boolean', ''],
              ['disable', '是否可以点击', 'boolean', 'false'],
              ['onChange', '状态变更回调函数', 'function', ''],
              ['className', '自定义样式', 'string', ''],
            ]}
          />
          <h5 className='text-secondary'>RadioGroup API</h5>
          <ul>
            <li>RadioGroup.getValue(this.refs.xxx)</li>
            <li>RadioGroup.setValue(this.refs.xxx)</li>
          </ul>
          <CommenTable
            data={[
              ['value', '设置默认是否选中', 'any', ''],
              ['onChange', '状态变更回调函数', 'function', ''],
              ['disabled', '是否可以点击', 'boolean', 'false'],
              ['name', '设置名称', 'string', ''],
              ['direction', '排列方向，可选值为 row、column', 'string', 'row'],
              ['className', '自定义样式', 'string', ''],
            ]}
          />
        </Card>
      </div>
    )
  }
}
