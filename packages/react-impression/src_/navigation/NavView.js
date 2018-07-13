import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Nav } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

const NavView = ({ routes }) => {
  return (
    <div>
      <Breadcrumb routes={routes} />
      <Card block noborder>
        <h3>Inline</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Nav activeKey={1} type='inline'>
                  <Nav.Item eventKey={1}>Active</Nav.Item>
                  <Nav.Item eventKey={2}>Link</Nav.Item>
                  <Nav.Item eventKey={3}>Anothor link</Nav.Item>
                  <Nav.Item eventKey={4} disabled>
                    Disabled
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'import { Nav } from "impression-react";\n\n'}
            {'<Nav activeKey={1} type="inline">\n'}
            {'  <Nav.Item eventKey={1}>Active</Nav.Item>\n   ...\n'}
            {'</Nav>'}
          </Highlight>
        </Card>
        <h3>Tabs</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Nav activeKey={1} type='tab'>
                  <Nav.Item eventKey={1}>Active</Nav.Item>
                  <Nav.Item eventKey={2}>Link</Nav.Item>
                  <Nav.Item eventKey={3}>Anothor link</Nav.Item>
                  <Nav.Item eventKey={4} disabled>
                    Disabled
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'<Nav activeKey={1} type="tab">\n  ...\n'}
            {'  <Nav.Item eventKey={4} disabled>Disabled</Nav.Item>\n'}
            {'</Nav>'}
          </Highlight>
        </Card>
        <h3>Pills</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Nav activeKey={1} type='pill'>
                  <Nav.Item eventKey={1}>Active</Nav.Item>
                  <Nav.Item eventKey={2}>Link</Nav.Item>
                  <Nav.Item eventKey={3}>Anothor link</Nav.Item>
                  <Nav.Item eventKey={4} disabled>
                    Disabled
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>{'<Nav activeKey={1} type="pill">...</Nav>'}</Highlight>
        </Card>
        <h3>Stacked pills</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col col='3'>
                <Card>
                  <Nav activeKey={2} type='pill' stacked>
                    <Nav.Item eventKey={1}>Active</Nav.Item>
                    <Nav.Item eventKey={2}>Link</Nav.Item>
                    <Nav.Item eventKey={3}>Anothor link</Nav.Item>
                    <Nav.Item eventKey={4} disabled>
                      Disabled
                    </Nav.Item>
                  </Nav>
                </Card>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'<Nav activeKey={1} type="pill" stacked>...</Nav>'}
          </Highlight>
        </Card>
        <h3 className='text-secondary'>Nav API</h3>
        <CommenTable
          data={[
            [
              'type',
              '导航栏样式，可选值为 tab、pill、inline',
              'string',
              'inline',
            ],
            ['stacked', '是否纵向排列', 'boolean', 'false'],
            ['activeKey', '设置默认激活标签', 'number', ''],
            ['onSelect', '选中回调函数', 'function', ''],
          ]}
        />
        <h3 className='text-secondary'>Nav.Item API</h3>
        <CommenTable
          data={[
            ['disabled', '设置是否可以选中', 'boolean', 'false'],
            ['active', '设置是否为激活状态', 'boolean', 'false'],
            ['eventKey', '设置事件关键字', 'any', ''],
            ['href', '设置链接地址', 'string', ''],
            ['onClick', '设置点击回调函数', 'function', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
      </Card>
    </div>
  )
}

NavView.propTypes = {
  routes: PropTypes.array,
}

export default NavView
