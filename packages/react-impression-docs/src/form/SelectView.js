import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Card,
  Form,
  Select,
  Notification,
} from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

export default class SelectView extends Component {
  static propTypes = {
    routes: PropTypes.array,
  }
  // 回调
  selectChangeHandle = (val, text) => {
    Notification.info({
      title: 'Select',
      message: `${text} 被选中了！！！`,
    })

    this.refs.select3.setValue(null)
    this.refs.select3.focus()
  }
  render() {
    return (
      <div>
        <Breadcrumb routes={this.props.routes} />
        <Card block noborder>
          <h3>Select</h3>
          <Card>
            <Card.Block>
              <Row>
                <Col>
                  <Form type='inline'>
                    <Form.Group>
                      <label>default:</label>
                      <Select ref='select1' onChange={this.selectChangeHandle}>
                        <Select.Option value='1'>First</Select.Option>
                        <Select.Option value='2'>Second</Select.Option>
                        <Select.Option value='3'>Third</Select.Option>
                        <Select.Option value='4'>Four</Select.Option>
                        <Select.Option value='5'>Five</Select.Option>
                        <Select.Option value='6'>Six</Select.Option>
                        <Select.Option value='7'>Seven</Select.Option>
                        <Select.Option value='8'>Eight</Select.Option>
                        <Select.Option value='9'>Nine</Select.Option>
                        <Select.Option value='10'>Ten</Select.Option>
                      </Select>
                    </Form.Group>
                  </Form>
                </Col>
                <Col>
                  <Form type='inline'>
                    <Form.Group>
                      <label>value:</label>
                      <Select
                        ref='select2'
                        value={0}
                        onChange={this.selectChangeHandle}
                      >
                        <Select.Option value={0}>First</Select.Option>
                        <Select.Option value={1}>Second</Select.Option>
                        <Select.Option value={2}>Third</Select.Option>
                      </Select>
                    </Form.Group>
                  </Form>
                </Col>
                <Col>
                  <Form type='inline'>
                    <Form.Group>
                      <label>defaultValue:</label>
                      <Select
                        ref='select3'
                        defaultValue={0}
                        onChange={this.selectChangeHandle}
                      >
                        <Select.Option value={0}>First</Select.Option>
                        <Select.Option value={1}>Second</Select.Option>
                        <Select.Option value={2}>Third</Select.Option>
                      </Select>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Card.Block>
            <Highlight>
              {'import { Select } from "impression-react";\n\n'}
              {'<Select>\n'}
              {'  <Select.Option value="1">First</Select.Option>\n  ...\n'}
              {'</Select>\n'}
              {'<Select value={0}>\n'}
              {'  <Select.Option value={0}>First</Select.Option>\n  ...\n'}
              {'</Select>'}
            </Highlight>
          </Card>
          <h3>Disabled</h3>
          <Card>
            <Card.Block>
              <Row>
                <Col>
                  <Form type='inline'>
                    <Form.Group>
                      <label>disabled:</label>
                      <Select disabled>
                        <Select.Option value='1'>First</Select.Option>
                        <Select.Option value='2'>Second</Select.Option>
                        <Select.Option value='3'>Third</Select.Option>
                      </Select>
                    </Form.Group>
                  </Form>
                </Col>
                <Col>
                  <Form type='inline'>
                    <Form.Group>
                      <label>option disabled:</label>
                      <Select>
                        <Select.Option value='1'>First</Select.Option>
                        <Select.Option value='2' disabled>
                          Second
                        </Select.Option>
                        <Select.Option value='3'>Third</Select.Option>
                      </Select>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Card.Block>
            <Highlight>
              {'<Select disabled>...</Select>\n'}
              {'<Select>\n'}
              {'  <Select.Option value="1" disabled>First</Select.Option>\n'}
              {
                '  <Select.Option value="2" disabled>Second</Select.Option>\n  ...\n'
              }
              {'</Select>'}
            </Highlight>
          </Card>
          <h3>Select API</h3>
          <ul>
            <li>Select.getValue(ref)</li>
          </ul>
          <CommenTable
            data={[
              ['value', '值', 'any', ''],
              ['disabled', '是否不可用', 'boolean', 'false'],
              ['style', '行内样式', 'object', ''],
              ['placeholder', '占位文字', 'string', '请选择'],
              ['onChange', '状态变更回调函数', 'function', ''],
              ['className', '自定义样式', 'string', ''],
            ]}
          />
          <h3>Select.Option API</h3>
          <CommenTable
            data={[
              ['disabled', '是否不可用', 'boolean', 'false'],
              ['active', '是否选中', 'boolean', 'false'],
              ['value', '必填，值', 'any', ''],
              ['onClick', '点击回调函数', 'function', ''],
              ['className', '自定义样式', 'string', ''],
            ]}
          />
        </Card>
        <Notification />
      </div>
    )
  }
}
