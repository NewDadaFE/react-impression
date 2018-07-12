import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Progress } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

const ProgressView = ({ routes }) => {
  return (
    <div>
      <Breadcrumb routes={routes} />
      <Card block noborder>
        <h3>Examples</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Progress value='1' />
              </Col>
            </Row>
            <Row>
              <Col>
                <Progress value='25' />
              </Col>
            </Row>
            <Row>
              <Col>
                <Progress value='50' />
              </Col>
            </Row>
            <Row>
              <Col>
                <Progress value='75' />
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'import { Progress } from "impression-react";\n\n'}
            {'<Progress value="1"/>\n'}
            {'<Progress value="25"/>\n'}
            {'<Progress value="50"/>\n'}
            {'<Progress value="75"/>'}
          </Highlight>
        </Card>
        <h3>Theme</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Progress value='50' />
              </Col>
            </Row>
            <Row>
              <Col>
                <Progress value='50' theme='success' />
              </Col>
            </Row>
            <Row>
              <Col>
                <Progress value='50' theme='warning' />
              </Col>
            </Row>
            <Row>
              <Col>
                <Progress value='50' theme='danger' />
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'<Progress value="50"/>\n'}
            {'<Progress value="50" theme="success"/>\n'}
            {'<Progress value="50" theme="warning"/>\n'}
            {'<Progress value="50" theme="danger"/>'}
          </Highlight>
        </Card>
        <h3>Striped</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Progress value='50' striped />
              </Col>
            </Row>
            <Row>
              <Col>
                <Progress value='50' theme='success' striped />
              </Col>
            </Row>
            <Row>
              <Col>
                <Progress value='50' theme='warning' striped />
              </Col>
            </Row>
            <Row>
              <Col>
                <Progress value='50' theme='danger' striped />
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'<Progress value="50" striped/>\n'}
            {'<Progress value="50" theme="success" striped/>\n'}
            {'<Progress value="50" theme="warning" striped/>\n'}
            {'<Progress value="50" theme="danger" striped/>'}
          </Highlight>
        </Card>
        <h3 className='text-secondary'>API</h3>
        <CommenTable
          data={[
            [
              'theme',
              '设置进度条样式，可选值为 success、warning、danger',
              'string',
              '',
            ],
            ['striped', '是否为斑马线样式', 'boolean', 'false'],
            ['value', '进度值，必填', 'string、number', ''],
            ['max', '设置最大值', 'string、number', '100'],
          ]}
        />
      </Card>
    </div>
  )
}

ProgressView.propTypes = {
  routes: PropTypes.array,
}

export default ProgressView
