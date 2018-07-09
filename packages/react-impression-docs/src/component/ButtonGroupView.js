import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

const ButtonGroupView = ({ routes }) => {
  return (
    <div>
      <Breadcrumb routes={routes} />
      <Card block noborder>
        <h3>Examples</h3>
        <Card>
          <Card.Block>
            <ButtonGroup theme='default' activeKey='left'>
              <Button eventKey='left'>Left</Button>
              <Button eventKey='middle'>Middle</Button>
              <Button eventKey='right'>Right</Button>
            </ButtonGroup>
          </Card.Block>
          <Highlight>
            {'import { ButtonGroup } from "impression-react";\n\n'}
            {'<ButtonGroup theme="default" activeKey="left">\n'}
            {'  <Button eventKey="left">Left</Button>\n'}
            {'  <Button eventKey="middle">Middle</Button>\n'}
            {'  <Button eventKey="right">Right</Button>\n'}
            {'</ButtonGroup>'}
          </Highlight>
        </Card>
        <h3>Thems</h3>
        <Card>
          <Card.Block>
            <ButtonToolbar>
              <ButtonGroup theme='primary' activeKey='right'>
                <Button eventKey='left'>Left</Button>
                <Button eventKey='middle'>Middle</Button>
                <Button eventKey='right'>Right</Button>
              </ButtonGroup>
              <ButtonGroup theme='secondary' activeKey='middle'>
                <Button eventKey='left'>Left</Button>
                <Button eventKey='middle'>Middle</Button>
                <Button eventKey='right'>Right</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Card.Block>
          <Highlight>
            {
              '<ButtonGroup theme="primary" activeKey="right">...</ButtonGroup>\n'
            }
            {
              '<ButtonGroup theme="secondary" activeKey="middle">...</ButtonGroup>\n'
            }
          </Highlight>
        </Card>
        <h3>Button toolbar</h3>
        <Card>
          <Card.Block>
            <ButtonToolbar>
              <ButtonGroup>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Card.Block>
          <Highlight>
            {'<ButtonToolbar>\n'}
            {'  <ButtonGroup>\n'}
            {'    <Button>1</Button>\n    ...\n'}
            {'  </ButtonGroup>\n'}
            {'  <ButtonGroup>\n'}
            {'    <Button>4</Button>\n   ...\n'}
            {'  </ButtonGroup>\n'}
            {'  <ButtonGroup>\n'}
            {'    <Button>7</Button>\n    ...\n'}
            {'  </ButtonGroup>\n'}
            {'</ButtonToolbar>'}
          </Highlight>
        </Card>
        <h3>Sizes</h3>
        <Card>
          <Card.Block>
            <ButtonToolbar>
              <ButtonGroup size='lg'>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
              </ButtonGroup>
              <ButtonGroup size='sm'>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Card.Block>
          <Highlight>
            {'<ButtonGroup size="lg">\n'}
            {'  <Button>1</Button>\n  ...\n'}
            {'</ButtonGroup>\n'}
            {'<ButtonGroup>\n'}
            {'  <Button>4</Button>\n  ...\n'}
            {'</ButtonGroup>\n'}
            {'<ButtonGroup size="sm">\n'}
            {'  <Button>7</Button>\n  ...\n'}
            {'</ButtonGroup>'}
          </Highlight>
        </Card>
        <h3 className='text-secondary'>API</h3>
        <CommenTable
          data={[
            ['size', '设置按钮组大小，可选值为 lg、sm', 'string', ''],
            [
              'theme',
              '设置按钮组主题样式，可选值为 primary、secondary、default',
              'string',
              'default',
            ],
            [
              'activeKey',
              '激活索引，被选中按钮会额外添加选中样式，为空时不额外添加选中样式',
              'any',
              '',
            ],
            ['onSelect', '设置按钮选中回调函数', 'function', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
      </Card>
    </div>
  )
}

ButtonGroupView.propTypes = {
  routes: PropTypes.array,
}

export default ButtonGroupView
