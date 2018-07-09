import React from 'react'
import PropTypes from 'prop-types'
import { Card, Navbar, Nav, Form, Button, Flex } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

const NavbarView = ({ routes }) => {
  return (
    <div>
      <Breadcrumb routes={routes} />
      <Card block noborder>
        <h5>Default</h5>
        <Card>
          <Card noborder>
            <Navbar>
              <Flex>
                <Navbar.Brand>Navbar</Navbar.Brand>
                <Flex.Item>
                  <Nav type='inline'>
                    <Nav.Link>
                      <a href='javascript:void(0);'>Home</a>
                    </Nav.Link>
                    <Nav.Link>
                      <a href='javascript:void(0);'>Features</a>
                    </Nav.Link>
                    <Nav.Link>
                      <a href='javascript:void(0);'>Pricing</a>
                    </Nav.Link>
                    <Nav.Link>
                      <a href='javascript:void(0);'>About</a>
                    </Nav.Link>
                  </Nav>
                </Flex.Item>
                <Form type='inline'>
                  <Form.Group>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Search'
                    />
                  </Form.Group>
                  <Button theme='primary'>Search</Button>
                </Form>
              </Flex>
            </Navbar>
          </Card>
          <Highlight>
            {
              'import { Navbar } from "impression-react";\n\n<Navbar>...</Navbar>'
            }
          </Highlight>
        </Card>
        <h5>Pure</h5>
        <Card>
          <Card noborder>
            <Navbar theme='pure'>
              <Flex>
                <Navbar.Brand>Navbar</Navbar.Brand>
                <Flex.Item>
                  <Nav type='inline'>
                    <Nav.Link>
                      <a href='javascript:void(0);' className='active'>
                        Home
                      </a>
                    </Nav.Link>
                    <Nav.Link>
                      <a href='javascript:void(0);'>Features</a>
                    </Nav.Link>
                    <Nav.Link>
                      <a href='javascript:void(0);'>Pricing</a>
                    </Nav.Link>
                    <Nav.Link>
                      <a href='javascript:void(0);'>About</a>
                    </Nav.Link>
                  </Nav>
                </Flex.Item>
                <Form type='inline'>
                  <Form.Group>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Search'
                    />
                  </Form.Group>
                  <Button theme='primary'>Search</Button>
                </Form>
              </Flex>
            </Navbar>
          </Card>
          <Highlight>{'<Navbar theme="pure">...</Navbar>'}</Highlight>
        </Card>
        <h5>Primary</h5>
        <Card>
          <Card noborder>
            <Navbar theme='primary'>
              <Flex align='middle'>
                <Navbar.Brand>Navbar</Navbar.Brand>
                <Flex.Item>
                  <Nav type='inline'>
                    <Nav.Link>
                      <a href='javascript:void(0);'>Home</a>
                    </Nav.Link>
                    <Nav.Link>
                      <a href='javascript:void(0);'>Features</a>
                    </Nav.Link>
                    <Nav.Link>
                      <a href='javascript:void(0);'>Pricing</a>
                    </Nav.Link>
                    <Nav.Link>
                      <a href='javascript:void(0);'>About</a>
                    </Nav.Link>
                  </Nav>
                </Flex.Item>
                <Form type='inline'>
                  <Form.Group>
                    <input
                      className='form-control no-border'
                      type='text'
                      placeholder='Search'
                    />
                  </Form.Group>
                  <Button theme='secondary'>Search</Button>
                </Form>
              </Flex>
            </Navbar>
          </Card>
          <Highlight>{'<Navbar theme="primary">...</Navbar>'}</Highlight>
        </Card>
        <h5 className='text-secondary'>Navbar API</h5>
        <CommenTable
          data={[
            ['theme', '设置导航条样式，可选值为 pure、primary', 'string', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
        <h5 className='text-secondary'>Navbar.Brand API</h5>
        <CommenTable
          data={[
            ['href', '设置连接', 'string', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
        <h5 className='text-secondary'>Navbar.SidebarTitle API</h5>
        <CommenTable
          data={[
            ['img', '设置图片连接', 'string', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
      </Card>
    </div>
  )
}

NavbarView.propTypes = {
  routes: PropTypes.array,
}

export default NavbarView
