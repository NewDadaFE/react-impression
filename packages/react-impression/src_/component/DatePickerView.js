import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Form, Input } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

const DatePickerView = ({ routes }) => {
  return (
    <div>
      <Breadcrumb routes={routes} />
      <Card block noborder>
        <h3>Examples</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <label>basic:</label>
                    <Input type='date' />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group>
                    <label>defaultValue:</label>
                    <Input type='date' defaultValue='2016-05-29' />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group>
                    <label>disabled:</label>
                    <Input type='date' defaultValue='2016-05-29' disabled />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'<Input type="date" />\n'}
            {'<Input type="date" defaultValue="2016-05-29"/>\n'}
            {'<Input type="date" defaultValue="2016-05-29" disabled/>'}
          </Highlight>
        </Card>
        <h3>Limit</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <label>min:</label>
                    <Input
                      type='date'
                      defaultValue='2016-05-29'
                      minDate='2016-05-15'
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group>
                    <label>max:</label>
                    <Input
                      type='date'
                      defaultValue='2016-05-29'
                      maxDate='2016-05-31'
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group>
                    <label>first day:</label>
                    <Input
                      type='date'
                      defaultValue='2016-05-29'
                      firstDayOfWeek={1}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {
              '<Input type="date" defaultValue="2016-05-29" minDate="2016-05-15" />\n'
            }
            {
              '<Input type="date" defaultValue="2016-05-29" maxDate="2016-05-31"/>\n'
            }
            {
              '<Input type="date" defaultValue="2016-05-29" firstDayOfWeek={1} />'
            }
          </Highlight>
        </Card>
        <h3>Format</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <label>Y-M-D:</label>
                    <Input
                      type='date'
                      defaultValue='2016-5-29'
                      format='Y-M-D'
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group>
                    <label>Y/MM/DD:</label>
                    <Input
                      type='date'
                      defaultValue='2016/05/29'
                      format='YYYY/MM/DD'
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group>
                    <label>年月日:</label>
                    <Input
                      type='date'
                      defaultValue='2016年05月29日'
                      format='YYYY年MM月DD日'
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'<Input type="date" defaultValue="2016-5-29" format="Y-M-D" />\n'}
            {
              '<Input type="date" defaultValue="2016/05/29" format="YYYY/MM/DD" />\n'
            }
            {
              '<Input type="date" defaultValue="2016年05月29日" format="YYYY年MM月DD日" />'
            }
          </Highlight>
        </Card>
        <h3>Month</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <label>年月:</label>
                    <Input type='month' />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>{'<Input type="month" />'}</Highlight>
        </Card>
        <h3>Input[type=&apos;date&apos;] API</h3>
        <CommenTable
          data={[
            ['value', '日期', 'string', ''],
            ['format', '格式', 'string', 'yyyy-MM-dd'],
            [
              'weekdays',
              '星期',
              'array',
              "['日', '一', '二', '三', '四', '五', '六']",
            ],
            ['months', '月份', 'array', "['1月','2月',...,'12月']"],
            ['showToday', '是否显示今天', 'boolean', 'true'],
            ['todayText', '今天', 'string', '今天'],
            ['firstDayOfWeek', '星期第一天', 'string', '日'],
            ['minDate', '最小日期', 'string', ''],
            ['maxDate', '最大日期', 'string', ''],
            ['yearScope', '年份前后默认范围', 'string or number', '5'],
            ['onSelect', '选中时间', 'function', ''],
            ['onChange', '修改选中时间', 'function', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
      </Card>
    </div>
  )
}

DatePickerView.propTypes = {
  routes: PropTypes.array,
}

export default DatePickerView
