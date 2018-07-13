import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Attention } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

const AttentionView = ({ routes }) => {
  return (
    <div>
      <Breadcrumb routes={routes} />
      <Card block noborder>
        <h3>Examples</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Attention theme='success'>
                  <strong>Well done!</strong>
                  You successfully read this important attention message.
                </Attention>
              </Col>
            </Row>
            <Row>
              <Col>
                <Attention theme='primary'>
                  <strong>Heads up!</strong>
                  This attention needs your attention, but it&apos;s not super
                  important.
                </Attention>
              </Col>
            </Row>
            <Row>
              <Col>
                <Attention theme='warning'>
                  <strong>Warning!</strong>
                  Better check yourself, you&apos;re not looking too good.
                </Attention>
              </Col>
            </Row>
            <Row>
              <Col col='12'>
                <Attention theme='danger'>
                  <strong>Oh snap!</strong>
                  Change a few things up and try submitting again.
                </Attention>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'import { Attention } from "impression-react";\n\n'}
            {
              '<Attention theme="success"><strong>Well done!</strong>...</Attention>\n'
            }
            {
              '<Attention theme="primary"><strong>Heads up!</strong>...</Attention>\n'
            }
            {
              '<Attention theme="warning"><strong>Warning!</strong>...</Attention>\n'
            }
            {
              '<Attention theme="danger" ><strong>Oh snap!</strong>...</Attention>'
            }
          </Highlight>
        </Card>
        <h3>Link color</h3>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Attention theme='success'>
                  You successfully read this important attention message
                  <Attention.Link href='#'> click here</Attention.Link>.
                </Attention>
              </Col>
            </Row>
            <Row>
              <Col>
                <Attention theme='primary'>
                  This attention needs your attention, but it&apos;s not super
                  important
                  <Attention.Link href='#'> click here</Attention.Link>.
                </Attention>
              </Col>
            </Row>
            <Row>
              <Col>
                <Attention theme='warning'>
                  Better check yourself, you&apos;re not looking too good
                  <Attention.Link href='#'> click here</Attention.Link>.
                </Attention>
              </Col>
            </Row>
            <Row>
              <Col>
                <Attention theme='danger'>
                  Change a few things up and try submitting again
                  <Attention.Link href='#'> click here</Attention.Link>.
                </Attention>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'<Attention theme="success">\n'}
            {'  ...<Attention.Link href="#"> click here</Attention.Link>\n'}
            {'<Attention>\n'}
            {'<Attention theme="primary">\n'}
            {'  ...<Attention.Link href="#"> click here</Attention.Link>\n'}
            {'<Attention>\n'}
            {'<Attention theme="warning">\n'}
            {'  ...<Attention.Link href="#"> click here</Attention.Link>\n'}
            {'<Attention>\n'}
            {'<Attention theme="danger">\n'}
            {'  ...<Attention.Link href="#"> click here</Attention.Link>\n'}
            {'<Attention>\n'}
          </Highlight>
        </Card>
        <h3>Dismissible</h3>
        <Card>
          <Card.Block>
            <Attention theme='success' closeable>
              You successfully read this important attention message
              <Attention.Link href='#'> click here</Attention.Link>.
            </Attention>
          </Card.Block>
          <Highlight>
            {'<Attention theme="success" closeable>...</Attention>'}
          </Highlight>
        </Card>
        <h5 className='text-secondary'>Attention API</h5>
        <CommenTable
          data={[
            [
              'theme',
              '设置警告提示样式，可选值为 success、primary、warning、danger',
              'string',
              '',
            ],
            ['closeable', '设置是否显示关闭按钮', 'boolean', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
        <h5 className='text-secondary'>Attention.Link API</h5>
        <CommenTable
          data={[
            ['href', '设置链接地址', 'string', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
      </Card>
    </div>
  )
}

AttentionView.propTypes = {
  routes: PropTypes.array,
}

export default AttentionView
