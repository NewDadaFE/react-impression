/* sourceCode:start */
import React from 'react'
import {
  Input,
  Form,
  Card,
  Checkbox,
  Button,
  InputGroup,
} from 'react-impression'
const { Item } = Form

const Inline = () => {
  return (
    <Card>
      <Card.Block>
        <Form>
          <Item>
            <Item.Label>Name:</Item.Label>
            <InputGroup>
              <InputGroup.Button theme='default'>help</InputGroup.Button>
              <Input placeholder='something' />
            </InputGroup>
          </Item>
          <Item>
            <Item.Label>Email</Item.Label>
            <Input type='text' placeholder='hello@example.com' />
          </Item>
          <Item>
            <Checkbox defaultChecked>Remember</Checkbox>
          </Item>
          <Button theme='primary'>Search</Button>
        </Form>
      </Card.Block>
    </Card>
  )
}
/* sourceCode:end */

Inline.title = 'Inline'
Inline.desc = `> 水平布局的form`

export default Inline
