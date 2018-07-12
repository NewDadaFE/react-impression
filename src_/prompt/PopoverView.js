import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Popover, Button } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

const PopoverView = ({ routes }) => {
  let content =
    'Sed posuere consectetur est at lobortis. ' +
    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'

  return (
    <div>
      <Breadcrumb routes={routes} />
      <Card block noborder>
        <h5>Examples</h5>
        <Card>
          <Card.Block>
            <Row>
              <Col col='8'>
                <Popover position='right' title='popover' content={content}>
                  <Button theme='primary'>Right</Button>
                </Popover>
              </Col>
              <Col col='4'>
                <Popover position='left' title='popover' content={content}>
                  <Button theme='primary'>Left</Button>
                </Popover>
              </Col>
            </Row>
            <Row>
              <Col col='8'>
                <Popover position='top' title='popover' content={content}>
                  <Button theme='primary'>Top</Button>
                </Popover>
              </Col>
              <Col col='4'>
                <Popover position='bottom' title='popover' content={content}>
                  <Button theme='primary'>Bottom</Button>
                </Popover>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'import { Popover } from "impression-react";\n\n'}
            {
              '<Popover position="right" title="popover" content="...">...</Popover>\n'
            }
            {
              '<Popover position="left" title="popover" content="...">...</Popover>\n'
            }
            {
              '<Popover position="top" title="popover" content="...">...</Popover>\n'
            }
            {
              '<Popover position="bottom" title="popover" content="...">...</Popover>'
            }
          </Highlight>
        </Card>
        <h5>Popover API</h5>
        <CommenTable
          data={[
            [
              'position',
              '设置弹出框位置，可选值为 left、right、top、bottom',
              'string',
              'right',
            ],
            ['title', '弹出框标题', 'node', ''],
            ['content', '弹出框主内容', 'node', ''],
            ['children', '必填，子节点', 'element', ''],
          ]}
        />
      </Card>
    </div>
  )
}

PopoverView.propTypes = {
  routes: PropTypes.array,
}

export default PopoverView
