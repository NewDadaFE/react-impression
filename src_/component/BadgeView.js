import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Badge, Icon } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

const BadgeView = ({ routes }) => {
  return (
    <div>
      <Breadcrumb routes={routes} />
      <Card block noborder>
        <h3>Examples</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Badge content='3'>
                  <div
                    className='bg-default'
                    style={{ width: '50px', height: '50px' }}
                  />
                </Badge>
                <p className='text-primary'>primary</p>
              </Col>
              <Col>
                <Badge content='16' theme='secondary'>
                  <div
                    className='bg-default'
                    style={{ width: '50px', height: '50px' }}
                  />
                </Badge>
                <p className='text-secondary'>secondary</p>
              </Col>
              <Col>
                <Badge content='25' theme='danger'>
                  <div
                    className='bg-default'
                    style={{ width: '50px', height: '50px' }}
                  />
                </Badge>
                <p className='text-danger'>danger</p>
              </Col>
              <Col>
                <Badge content='33' theme='success'>
                  <div
                    className='bg-default'
                    style={{ width: '50px', height: '50px' }}
                  />
                </Badge>
                <p className='text-success'>success</p>
              </Col>
              <Col>
                <Badge content='99+' theme='inverse'>
                  <div
                    className='bg-default'
                    style={{ width: '50px', height: '50px' }}
                  />
                </Badge>
                <p>inverse</p>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'import { Badge } from "impression-react";\n\n'}
            {'<Badge content="3">...</Badge>\n'}
            {'<Badge content="16" theme="secondary">...</Badge>\n'}
            {'<Badge content="25" theme="danger">...</Badge>\n'}
            {'<Badge content="33" theme="success">...</Badge>\n'}
            {'<Badge content="99+" theme="inverse">...</Badge>'}
          </Highlight>
        </Card>
        <h3>Dot</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Badge>
                  <Icon size='lg' type='bell' />
                </Badge>
              </Col>
              <Col>
                <Badge theme='danger'>
                  <Icon size='lg' type='bell-o' />
                </Badge>
              </Col>
              <Col>
                <Badge theme='danger'>
                  <Icon size='lg' type='envelope-o' />
                </Badge>
              </Col>
              <Col>
                <Badge theme='danger'>
                  <Icon size='lg' type='bullhorn' />
                </Badge>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'<Badge><Icon size="lg" type="bell" /></Badge>\n'}
            {'<Badge theme="danger"><Icon size="lg" type="bell-o" /></Badge>\n'}
            {
              '<Badge theme="danger"><Icon size="lg" type="envelope-o" /></Badge>\n'
            }
            {'<Badge theme="danger"><Icon size="lg" type="bullhorn" /></Badge>'}
          </Highlight>
        </Card>
        <h3>legend</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Badge type='legend'>primary</Badge>
              </Col>
              <Col>
                <Badge type='legend' theme='danger'>
                  danger
                </Badge>
              </Col>
              <Col>
                <Badge type='legend' theme='warning'>
                  warning
                </Badge>
              </Col>
              <Col>
                <Badge type='legend' theme='success'>
                  success
                </Badge>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'<Badge type="legend">primary</Badge>\n'}
            {'<Badge type="legend" theme="danger">danger</Badge>\n'}
            {'<Badge type="legend" theme="warning">warning</Badge>\n'}
            {'<Badge type="legend" theme="success">success</Badge>'}
          </Highlight>
        </Card>
        <h3 className='text-secondary'>Badge API</h3>
        <CommenTable
          data={[
            ['content', '内容', 'string', ''],
            [
              'theme',
              '样式，可选值为 primary、secondary、danger、success、inverse',
              'string',
              'primary',
            ],
            ['type', '类型，可选值为 legend', 'string', ''],
            ['size', '尺寸，可选值为 lg、sm', 'string', ''],
          ]}
        />
      </Card>
    </div>
  )
}

BadgeView.propTypes = {
  routes: PropTypes.array,
}

export default BadgeView
