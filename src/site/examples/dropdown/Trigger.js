/* sourceCode:start */
import React from 'react'
import {
  Dropdown,
  Row,
  Col,
  Card,
  Button,
  Notification,
} from 'react-impression'

// 菜单点击提醒
const menuClickHandle = message => {
  Notification.info({
    closeable: false,
    title: '菜单点击',
    message: `${message}被点击了！！！`,
  })
}

const Trigger = () => {
  return (
    <Row>
      <Col>
        <Card block>
          <Dropdown trigger='hover'>
            <Dropdown.Trigger>
              <Button theme='primary'>Dropdown</Button>
            </Dropdown.Trigger>
            <Dropdown.Menu>
              <Dropdown.MenuItem onClick={() => menuClickHandle('菜单一')}>
                菜单一
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => menuClickHandle('菜单二')}>
                菜单二
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => menuClickHandle('菜单三')}>
                菜单三
              </Dropdown.MenuItem>
              <Dropdown.MenuDivider />
              <Dropdown.MenuItem onClick={() => menuClickHandle('菜单四')}>
                菜单四
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => menuClickHandle('菜单五')}>
                菜单五
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => menuClickHandle('菜单六')}>
                菜单六
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </Card>
      </Col>
      <Col>
        <Card block className='offset-l-lg'>
          <Dropdown trigger='hover'>
            <Dropdown.Trigger>
              <a href='javascript:void(0);'>下拉菜单</a>
            </Dropdown.Trigger>
            <Dropdown.Menu>
              <Dropdown.MenuItem onClick={() => menuClickHandle('菜单一')}>
                菜单一
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => menuClickHandle('菜单二')}>
                菜单二
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => menuClickHandle('菜单三')}>
                菜单三
              </Dropdown.MenuItem>
              <Dropdown.MenuDivider />
              <Dropdown.MenuItem onClick={() => menuClickHandle('菜单四')}>
                菜单四
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => menuClickHandle('菜单五')}>
                菜单五
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => menuClickHandle('菜单六')}>
                菜单六
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </Card>
      </Col>
      <Notification />
    </Row>
  )
}

/* sourceCode:end */

Trigger.title = '触发下拉方式'
Trigger.desc = `> 有点击和hover两种方式`

export default Trigger
