import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Tag } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

export default class TagView extends Component {
  static propTypes = {
    routes: PropTypes.array,
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      shows: [true, true, true, true, true, true],
    }
  }
  /**
   * 隐藏Tag.
   * @param  {[Number]} index [索引]
   */
  closeTagHandle = index => {
    this.setState({
      shows: this.state.shows.map((item, indx) => {
        return indx === index ? false : item
      }),
    })
  }
  render() {
    let { shows } = this.state

    return (
      <div>
        <Breadcrumb routes={this.props.routes} />
        <Card block noborder>
          <h5>Examples</h5>
          <Card>
            <Card.Block>
              <h1>
                Example heading <Tag>tag</Tag>
              </h1>
              <h2>
                Example heading <Tag>tag</Tag>
              </h2>
              <h5>
                Example heading <Tag>tag</Tag>
              </h5>
              <h4>
                Example heading <Tag>tag</Tag>
              </h4>
              <h5>
                Example heading <Tag>tag</Tag>
              </h5>
              <h6>
                Example heading <Tag>tag</Tag>
              </h6>
            </Card.Block>
            <Highlight>
              {'import { Tag } from "impression-react";\n\n'}
              {'<h1>Example heading <Tag>tag</Tag></h1>\n'}
              {'<h2>Example heading <Tag>tag</Tag></h2>\n...\n'}
              {'<h5>Example heading <Tag>tag</Tag></h5>\n'}
              {'<h6>Example heading <Tag>tag</Tag></h6>'}
            </Highlight>
          </Card>
          <h5>Theme tag</h5>
          <Card>
            <Card.Block>
              <Row>
                <Col>
                  <Tag theme='default'>default</Tag>
                </Col>
                <Col>
                  <Tag theme='primary'>primary</Tag>
                </Col>
                <Col>
                  <Tag theme='success'>success</Tag>
                </Col>
                <Col>
                  <Tag theme='info'>info</Tag>
                </Col>
                <Col>
                  <Tag theme='warning'>warning</Tag>
                </Col>
                <Col>
                  <Tag theme='danger'>danger</Tag>
                </Col>
              </Row>
            </Card.Block>
            <Highlight>
              {'<Tag theme="default">default</Tag>\n'}
              {'<Tag theme="primary">primary</Tag>\n'}
              {'<Tag theme="success">success</Tag>\n'}
              {'<Tag theme="info">info</Tag>\n'}
              {'<Tag theme="warning">warning</Tag>\n'}
              {'<Tag theme="danger">danger</Tag>'}
            </Highlight>
          </Card>
          <h5>Closeable</h5>
          <Card>
            <Card.Block>
              <Row>
                <Col>
                  {shows[0] && (
                    <Tag
                      closable
                      onClose={() => this.closeTagHandle(0)}
                      theme='default'
                      className='offset-l'
                    >
                      apple
                    </Tag>
                  )}
                  {shows[1] && (
                    <Tag
                      closable
                      onClose={() => this.closeTagHandle(1)}
                      theme='default'
                      className='offset-l'
                    >
                      orange
                    </Tag>
                  )}
                  {shows[2] && (
                    <Tag
                      closable
                      onClose={() => this.closeTagHandle(2)}
                      theme='default'
                      className='offset-l'
                    >
                      banana
                    </Tag>
                  )}
                  {shows[3] && (
                    <Tag
                      closable
                      onClose={() => this.closeTagHandle(3)}
                      theme='default'
                      className='offset-l'
                    >
                      pear
                    </Tag>
                  )}
                  {shows[4] && (
                    <Tag
                      closable
                      onClose={() => this.closeTagHandle(4)}
                      theme='default'
                      className='offset-l'
                    >
                      watermelon
                    </Tag>
                  )}
                  {shows[5] && (
                    <Tag
                      closable
                      onClose={() => this.closeTagHandle(5)}
                      theme='default'
                      className='offset-l'
                    >
                      peach
                    </Tag>
                  )}
                </Col>
              </Row>
            </Card.Block>
            <Highlight>
              {
                '<Tag closable theme="default" className="offset-l">apple</Tag>\n...'
              }
            </Highlight>
          </Card>
          <h5>Pill tag</h5>
          <Card>
            <Card.Block>
              <Row>
                <Col>
                  <Tag theme='default' shape='pill'>
                    default
                  </Tag>
                </Col>
                <Col>
                  <Tag theme='primary' shape='pill'>
                    primary
                  </Tag>
                </Col>
                <Col>
                  <Tag theme='success' shape='pill'>
                    success
                  </Tag>
                </Col>
                <Col>
                  <Tag theme='info' shape='pill'>
                    info
                  </Tag>
                </Col>
                <Col>
                  <Tag theme='warning' shape='pill'>
                    warning
                  </Tag>
                </Col>
                <Col>
                  <Tag theme='danger' shape='pill'>
                    danger
                  </Tag>
                </Col>
              </Row>
            </Card.Block>
            <Highlight>
              {'<Tag theme="default" shape="pill">default</Tag>\n...'}
            </Highlight>
          </Card>
          <h5>Outline tag</h5>
          <Card>
            <Card.Block>
              <Row>
                <Col>
                  <Tag theme='default' outline>
                    default
                  </Tag>
                </Col>
                <Col>
                  <Tag theme='primary' outline>
                    primary
                  </Tag>
                </Col>
                <Col>
                  <Tag theme='success' outline>
                    success
                  </Tag>
                </Col>
                <Col>
                  <Tag theme='info' outline>
                    info
                  </Tag>
                </Col>
                <Col>
                  <Tag theme='warning' outline>
                    warning
                  </Tag>
                </Col>
                <Col>
                  <Tag theme='danger' outline>
                    danger
                  </Tag>
                </Col>
              </Row>
            </Card.Block>
            <Highlight>
              {'<Tag theme="default" outline>default</Tag>\n...'}
            </Highlight>
          </Card>
          <h5 className='text-secondary'>Tag API</h5>
          <CommenTable
            data={[
              [
                'theme',
                '设置标签样式，可选值为 default、primary、success、info、warning、danger',
                'string',
                '',
              ],
              ['shape', '设置标签形状，可选值为 pill', 'string', ''],
              ['outline', '是否为outline样式', 'boolean', 'false'],
              ['closable', '是否可删除', 'boolean', 'false'],
              ['onClose', '删除回调', 'function', ''],
              ['className', '自定义样式', 'string', ''],
            ]}
          />
        </Card>
      </div>
    )
  }
}
