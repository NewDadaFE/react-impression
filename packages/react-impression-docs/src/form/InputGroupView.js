import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, InputGroup } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

const InputGroupView = ({ routes }) => {
  return (
    <div>
      <Breadcrumb routes={routes} />
      <Card block noborder>
        <h5>Basic</h5>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <InputGroup>
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <InputGroup.Input placeholder='something' />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <InputGroup.Input placeholder='something' />
                  <InputGroup.Addon>@</InputGroup.Addon>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <InputGroup.Input placeholder='something' />
                  <InputGroup.Addon>@</InputGroup.Addon>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <InputGroup.Addon pure>+86</InputGroup.Addon>
                  <InputGroup.Input placeholder='phone' />
                </InputGroup>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'import { InputGroup } from "impression-react";\n\n'}
            {'<InputGroup>\n'}
            {'  <InputGroup.Addon>@</InputGroup.Addon>\n'}
            {'  <InputGroup.Input placeholder="something"/>\n'}
            {'</InputGroup>\n...\n'}
            {'<InputGroup>\n'}
            {'  <InputGroup.Addon pure>+86</InputGroup.Addon>\n'}
            {'  <InputGroup.Input placeholder="phone"/>\n'}
            {'</InputGroup>'}
          </Highlight>
        </Card>
        <h5>Addons</h5>
        <Card>
          <Card.Block>
            <Row>
              <Col>
                <InputGroup>
                  <InputGroup.Button theme='default'>help</InputGroup.Button>
                  <InputGroup.Input placeholder='something' />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <InputGroup.Input placeholder='something' />
                  <InputGroup.Button theme='primary'>Go</InputGroup.Button>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <InputGroup.Button theme='default'>-</InputGroup.Button>
                  <InputGroup.Input placeholder='something' />
                  <InputGroup.Button theme='default'>+</InputGroup.Button>
                </InputGroup>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'<InputGroup>\n'}
            {'  <InputGroup.Button theme="default">help</InputGroup.Button>\n'}
            {'  <InputGroup.Input placeholder="something"/>\n'}
            {'</InputGroup>'}
          </Highlight>
        </Card>
        <h5>Sizes</h5>
        <Card>
          <Card.Block>
            <Row>
              <Col col='3'>
                <InputGroup size='sm'>
                  <InputGroup.Input placeholder='something' />
                  <InputGroup.Button theme='primary'>Search</InputGroup.Button>
                </InputGroup>
              </Col>
              <Col col='4'>
                <InputGroup>
                  <InputGroup.Input placeholder='something' />
                  <InputGroup.Button theme='primary'>Search</InputGroup.Button>
                </InputGroup>
              </Col>
              <Col col='5'>
                <InputGroup size='lg'>
                  <InputGroup.Input placeholder='something' />
                  <InputGroup.Button theme='primary'>Search</InputGroup.Button>
                </InputGroup>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'<InputGroup size="sm">\n'}
            {'  <InputGroup.Input placeholder="something"/>\n'}
            {
              '  <InputGroup.Button theme="primary">Search</InputGroup.Button>\n'
            }
            {'</InputGroup>\n<InputGroup>...</InputGroup>\n'}
            {'<InputGroup size="lg">...</InputGroup>'}
          </Highlight>
        </Card>
        <h5 className='text-secondary'>InputGroup API</h5>
        <CommenTable
          data={[
            ['size', '设置输入框组大小，可选值为 sm、lg', 'string', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
        <h5 className='text-secondary'>InputGroup.Addon API</h5>
        <CommenTable
          data={[
            ['pure', '显示成文字', 'boolean', 'false'],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
        <h5 className='text-secondary'>InputGroup.Button API</h5>
        <CommenTable
          data={[
            [
              'theme',
              '设置输入框组内按钮样式，可选值为 default、primary',
              'string',
              'primary',
            ],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
        <h5 className='text-secondary'>InputGroup.Input API</h5>
        <CommenTable
          data={[
            [
              'type',
              '设置输入框组内 input 类型，可选值为 text',
              'string',
              'text',
            ],
            ['palceholder', '设置占位符', 'string', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
      </Card>
    </div>
  )
}

InputGroupView.propTypes = {
  routes: PropTypes.array,
}

export default InputGroupView
