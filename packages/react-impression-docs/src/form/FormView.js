import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Col,
  Checkbox,
  Radio,
  RadioGroup,
  Form,
  Input,
  Button,
} from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

const FormView = ({ routes }) => {
  return (
    <div>
      <Breadcrumb routes={routes} />
      <Card block noborder>
        <h5>Inline</h5>
        <Card>
          <Card.Block>
            <Form>
              <Form.Group>
                <label>Name:</label>
                <Input type='text' placeholder='Jane Doe' />
              </Form.Group>
              <Form.Group>
                <label>Email</label>
                <Input type='text' placeholder='hello@example.com' />
              </Form.Group>
              <Form.Group>
                <Checkbox defaultChecked>Remember me</Checkbox>
              </Form.Group>
              <Button theme='primary'>Search</Button>
            </Form>
          </Card.Block>
          <Highlight>
            {'import { Form } from "impression-react";\n\n'}
            {'<Form>\n'}
            {'  <Form.Group>\n'}
            {'    <label>Name:</label>\n'}
            {'    <Input type="text" placeholder="Jane Doe"/>\n     ...\n'}
            {'  </Form.Group>\n'}
            {'</Form>'}
          </Highlight>
        </Card>
        <h5>Horizontal</h5>
        <Card>
          <Card.Block>
            <Form type='horizontal'>
              <Form.Group>
                <Col col='2' className='text-right'>
                  <Form.Control.Label>Email:</Form.Control.Label>
                </Col>
                <Col col='10'>
                  <Input type='text' placeholder='Email' />
                </Col>
              </Form.Group>
              <Form.Group>
                <Col col='2' className='text-right'>
                  <Form.Control.Label>name:</Form.Control.Label>
                </Col>
                <Col col='10'>
                  <Input type='password' />
                </Col>
              </Form.Group>
              <Form.Group>
                <Col col='2' className='text-right'>
                  <Form.Control.Label>description:</Form.Control.Label>
                </Col>
                <Col col='10'>
                  <Input type='textarea' />
                </Col>
              </Form.Group>
              <Form.Group className='offset-b-lg'>
                <Col col='2' className='text-right'>
                  <Form.Control.Label>Radios:</Form.Control.Label>
                </Col>
                <Col col='10'>
                  <RadioGroup direction='column'>
                    <Radio>
                      Option one is this and that&mdash;be sure to include why
                      it&apos;s great
                    </Radio>
                    <Radio>
                      Option one is this and that&mdash;be sure to include why
                      it&apos;s great
                    </Radio>
                    <Radio>
                      Option one is this and that&mdash;be sure to include why
                      it&apos;s great
                    </Radio>
                    <Radio>
                      Option one is this and that&mdash;be sure to include why
                      it&apos;s great
                    </Radio>
                  </RadioGroup>
                </Col>
              </Form.Group>
              <Form.Group>
                <Col col='2' offset='2'>
                  <Button theme='primary'>Sign in</Button>
                </Col>
                <Col col='2'>
                  <Button theme='default'>Cancel</Button>
                </Col>
              </Form.Group>
            </Form>
          </Card.Block>
          <Highlight>
            {'<Form type="horizontal">\n'}
            {'  <Form.Group>\n'}
            {'    <Col col="2" className="text-right">\n'}
            {'      <Form.Control.Label>Email:</Form.Control.Label>\n'}
            {'    </Col>\n'}
            {'    <Col col="10">\n'}
            {'      <Input type="text" placeholder="Email"/>\n'}
            {'    </Col>\n'}
            {'  </Form.Group>\n  ...\n'}
            {'</Form>'}
          </Highlight>
        </Card>
        <h5 className='text-secondary'>Form API</h5>
        <CommenTable
          data={[
            [
              'type',
              '排列方向，可选值为 inline、horizontal',
              'string',
              'inline',
            ],
            ['grid', '是否分列', 'boolean', 'false'],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
        <h5 className='text-secondary'>Form.Group API</h5>
        <CommenTable
          data={[
            ['col', '设置所占比例', 'string、number', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
      </Card>
    </div>
  )
}

FormView.propTypes = {
  routes: PropTypes.array,
}

export default FormView
