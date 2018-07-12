import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Card,
  Checkbox,
  CheckboxGroup,
  Form,
} from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

export default class CheckboxView extends Component {
  static propTypes = {
    routes: PropTypes.array,
  }
  render() {
    return (
      <div>
        <Breadcrumb routes={this.props.routes} />
        <Card block noborder>
          <h5>Checkbox</h5>
          <Row>
            <Col>
              <Card>
                <Card.Block>
                  <Form type='inline'>
                    <Form.Group>
                      <label>defaultChecked:</label>
                      <Checkbox ref='checkbox' defaultChecked>
                        remember me
                      </Checkbox>
                    </Form.Group>
                  </Form>
                </Card.Block>
                <Highlight>
                  {'import { Checkbox } from "impression-react";\n\n'}
                  {'<Checkbox defaultChecked>remember me</Checkbox>'}
                </Highlight>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Block>
                  <Form type='inline'>
                    <Form.Group>
                      <label>disabled:</label>
                      <Checkbox disabled>remember me</Checkbox>
                    </Form.Group>
                  </Form>
                </Card.Block>
                <Highlight>
                  {'<Checkbox disabled>remember me</Checkbox>'}
                </Highlight>
              </Card>
            </Col>
          </Row>
          <h5>CheckboxGroup</h5>
          <Row>
            <Col>
              <Card>
                <Card.Block>
                  <Form type='inline'>
                    <Form.Group>
                      <label>defaultValue:</label>
                      <CheckboxGroup defaultValue={['basketball', 'football']}>
                        <Checkbox>basketball</Checkbox>
                        <Checkbox>football</Checkbox>
                        <Checkbox>volleyball</Checkbox>
                      </CheckboxGroup>
                    </Form.Group>
                  </Form>
                </Card.Block>
                <Highlight>
                  {
                    'import { CheckboxGroup, Checkbox } from "impression-react";\n\n'
                  }
                  {
                    '<CheckboxGroup defaultValue={["basketball", "football"]}>\n'
                  }
                  {'  <Checkbox>basketball</Checkbox>\n  ...\n'}
                  {'</CheckboxGroup>'}
                </Highlight>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Block>
                  <Form type='inline'>
                    <Form.Group>
                      <label>value:</label>
                      <CheckboxGroup
                        ref='checkboxs'
                        value={['basketball', 'football']}
                      >
                        <Checkbox>basketball</Checkbox>
                        <Checkbox>football</Checkbox>
                        <Checkbox>volleyball</Checkbox>
                      </CheckboxGroup>
                    </Form.Group>
                  </Form>
                </Card.Block>
                <Highlight>
                  {'<CheckboxGroup value={["basketball", "football"]}>\n'}
                  {'  <Checkbox>basketball</Checkbox>\n  ...\n'}
                  {'</CheckboxGroup>'}
                </Highlight>
              </Card>
            </Col>
          </Row>
          <h5 className='text-secondary'>Checkbox API</h5>
          <ul>
            <li>Checkbox.getValue(ref)</li>
          </ul>
          <CommenTable
            data={[
              ['disabled', '设置是否可以点击', 'boolean', 'false'],
              ['defaultChecked', '设置是否默认选中', 'boolean', ''],
              ['checked', '设置是否选中', 'boolean', ''],
              ['onChange', '状态变更回调函数', 'function', ''],
              ['className', '自定义样式', 'string', ''],
            ]}
          />
          <h5 className='text-secondary'>CheckboxGroup API</h5>
          <ul>
            <li>CheckboxGroup.getValue(ref)</li>
          </ul>
          <CommenTable
            data={[
              ['vlaue', '设置默认是否选中', 'any', ''],
              ['onChange', '状态变化回调函数', 'function', ''],
              ['disabled', '是否可以点击', 'boolean', 'false'],
              ['direction', '排列方向，可选值为 row、column', 'string', 'row'],
              ['className', '自定义样式', 'string', ''],
            ]}
          />
        </Card>
      </div>
    )
  }
}
