import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Button, Image } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

const CardView = ({ routes }) => {
  return (
    <div>
      <Breadcrumb routes={routes} />
      <Card block noborder>
        <h5>Examples</h5>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Card>
                  <Card.Block>
                    <h4>Title</h4>
                    <div>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </div>
                  </Card.Block>
                  <Image fluid src='http://placehold.it/350x200' />
                  <Card.Block>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                    <Button theme='primary'>More</Button>
                  </Card.Block>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Image fluid src='http://placehold.it/350x200' />
                  <Card.Block>
                    <h4>Title</h4>
                    <p>
                      ome quick example text to build on the card title and make
                      up the bulk of the card&apos;s content.
                    </p>
                    <Button theme='primary'>Detail</Button>
                  </Card.Block>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Block>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                  </Card.Block>
                  <Image fluid src='http://placehold.it/350x200' />
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Block>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                    <Button theme='primary'>OK</Button>
                  </Card.Block>
                </Card>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'import { Card } from "impression-react";\n\n'}
            {'<Card>\n'}
            {'  <Card.Block><h4>Title</h4>...</Card.Block>\n'}
            {'  <Image fluid src="http://placehold.it/350x200" />\n  ...\n'}
            {'</Card>'}
          </Highlight>
        </Card>
        <h5>Text align</h5>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Card>
                  <Image fluid src='http://placehold.it/350x200' />
                  <Card.Block>
                    <h4>Left</h4>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                    <a href='javascript:void(0);'>Card link</a>
                    <a href='javascript:void(0);' className='offset-l'>
                      Another link
                    </a>
                  </Card.Block>
                </Card>
              </Col>
              <Col>
                <Card className='text-center'>
                  <Image fluid src='http://placehold.it/350x200' />
                  <Card.Block>
                    <h4>Center</h4>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                    <a href='javascript:void(0);'>Card link</a>
                    <a href='javascript:void(0);' className='offset-l'>
                      Another link
                    </a>
                  </Card.Block>
                </Card>
              </Col>
              <Col>
                <Card className='text-right'>
                  <Image fluid src='http://placehold.it/350x200' />
                  <Card.Block>
                    <h4>Right</h4>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                    <a href='javascript:void(0);'>Card link</a>
                    <a href='javascript:void(0);' className='offset-l'>
                      Another link
                    </a>
                  </Card.Block>
                </Card>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'<Card>...</Card>\n'}
            {'<Card className="text-center">..</Card>\n'}
            {'<Card className="text-right">...</Card>'}
          </Highlight>
        </Card>
        <h5>Header and footer</h5>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <Card>
                  <Card.Header>Header</Card.Header>
                  <Card.Block>
                    <h4>Left</h4>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                    <Button theme='primary'>OK</Button>
                    <Button theme='default' className='offset-l'>
                      Cancel
                    </Button>
                  </Card.Block>
                  <Card.Footer>footer</Card.Footer>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Header>
                    <h4 className='no-margin'>Header</h4>
                  </Card.Header>
                  <Card.Block>
                    <h4>center</h4>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                    <Button theme='primary'>OK</Button>
                    <Button theme='default' className='offset-l'>
                      Cancel
                    </Button>
                  </Card.Block>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Block>
                    <h4>Right</h4>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                    <Button theme='primary'>OK</Button>
                    <Button theme='default' className='offset-l'>
                      Cancel
                    </Button>
                  </Card.Block>
                  <Card.Footer>
                    <h5 className='no-margin'>footer</h5>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'<Card>\n'}
            {'  <Card.Header>Header</Card.Header>\n'}
            {'  <Card.Block>...</Card.Block>\n'}
            {'  <Card.Footer>footer</Card.Footer>\n'}
            {'</Card>'}
          </Highlight>
        </Card>
        <h5 className='text-secondary'>Card API</h5>
        <CommenTable
          data={[
            ['block', '是否显示为快级元素', 'boolean', 'false'],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
        <h5 className='text-secondary'>Card.Header API</h5>
        <CommenTable data={[['className', '自定义样式', 'string', '']]} />
        <h5 className='text-secondary'>Card.Block API</h5>
        <CommenTable data={[['className', '自定义样式', 'string', '']]} />
        <h5 className='text-secondary'>Card.Footer API</h5>
        <CommenTable data={[['className', '自定义样式', 'string', '']]} />
      </Card>
    </div>
  )
}

CardView.propTypes = {
  routes: PropTypes.array,
}

export default CardView
