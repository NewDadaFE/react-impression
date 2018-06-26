/* sourceCode:start */
import React from 'react'
import {
  Input,
  Form,
  Card,
  Button,
  Radio,
  Col,
  InputGroup,
} from 'react-impression'
const { Item } = Form

const Horizontal = () => {
  return (
    <Card>
      <Card.Block>
        <Form type='horizontal'>
          <Item>
            <Col col='2' className='text-right'>
              <Item.Label>Email:</Item.Label>
            </Col>
            <Col col='10'>
              <Input type='text' placeholder='Email' />
            </Col>
          </Item>
          <Item>
            <Col col='2' className='text-right'>
              <Item.Label>name:</Item.Label>
            </Col>
            <Col col='10'>
              <InputGroup>
                <InputGroup.Addon>help</InputGroup.Addon>
                <Input placeholder='something' style={{ width: '100px' }} />
              </InputGroup>
            </Col>
          </Item>
          <Item>
            <Col col='2' className='text-right'>
              <Item.Label>description:</Item.Label>
            </Col>
            <Col col='10'>
              <Input type='textarea' />
            </Col>
          </Item>
          <Item className='offset-b-lg'>
            <Col col='2' className='text-right'>
              <Item.Label>Radios:</Item.Label>
            </Col>
            <Col col='10'>
              <Radio.Group direction='column'>
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
              </Radio.Group>
            </Col>
          </Item>
          <Item>
            <Col col='2' offset='2'>
              <Button theme='primary'>Sign in</Button>
            </Col>
            <Col col='2'>
              <Button theme='default'>Cancel</Button>
            </Col>
          </Item>
        </Form>
      </Card.Block>
    </Card>
  )
}
/* sourceCode:end */

Horizontal.title = 'Horizontal'
Horizontal.desc = `> 垂直布局的form`

export default Horizontal
