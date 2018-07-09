import React from 'react'
import { Link } from 'react-router'
import { Sidebar, Nav, Icon, Tag, Collapse } from 'react-impression'

// 侧边栏Sidebar
const AppSidebar = () => {
  return (
    <Sidebar>
      <Sidebar.Header />
      <Sidebar.Body>
        <Nav>
          <Nav.Title>Basic</Nav.Title>
          <Nav.Link>
            <Link to='/app/button'>
              <Icon type='hand-pointer-o' left />Button
              <Tag theme='primary' className='offset-l'>
                3
              </Tag>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <a
              href='http://fontawesome.io/icons/'
              rel='noreferrer noopener'
              target='_blank'
            >
              <Icon type='flag' left />
              Icon
            </a>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/image'>
              <Icon type='picture-o' left />Image
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/table'>
              <Icon type='table' left />Table
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/layout'>
              <Icon type='columns' left />Layout
            </Link>
          </Nav.Link>
          <Nav.Title>Form Control</Nav.Title>
          <Nav.Link>
            <Link to='/app/radio'>
              <Icon type='dot-circle-o' left />Radio
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/checkbox'>
              <Icon type='check-square' left />Checkbox
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/switch'>
              <Icon type='toggle-on' left />Switch
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/select'>
              <Icon type='angle-down' left />Select
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/input'>
              <Icon type='search' left />Input
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/form'>
              <Icon type='file-text-o' left />
              Form
              <Tag theme='danger' className='offset-l'>
                Hot
              </Tag>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/input-group'>
              <Icon type='outdent' left />InputGroup
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/upload'>
              <Icon type='cloud-upload' left />Upload
            </Link>
          </Nav.Link>
          <Nav.Title>Navigation</Nav.Title>
          <Nav.Link>
            <Link to='/app/nav'>
              <Icon type='bars' left />Nav
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/navbar'>
              <Icon type='tasks' left />Navbar
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/breadcrumb'>
              <Icon type='hand-o-right' left />
              Breadcrumb
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/pagination'>
              <Icon type='angle-double-right' left />
              Pagination
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/inline-select'>
              <Icon type='th' left />InlineSelect
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/timeline'>
              <Icon type='clock-o' left />Timeline
            </Link>
          </Nav.Link>
          <Nav.Title>Prompt</Nav.Title>
          <Nav.Link>
            <Link to='/app/attention'>
              <Icon type='info-circle' left />
              Attention
              <Tag theme='warning' className='offset-l'>
                1/4
              </Tag>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/tooltip'>
              <Icon type='commenting-o' left />Tooltip
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/popover'>
              <Icon type='comments' left />Popover
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/alert'>
              <Icon type='exclamation-triangle' left />Alert
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/message'>
              <Icon type='bell' left />Message
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/notification'>
              <Icon type='bullhorn' left />Notification
            </Link>
          </Nav.Link>
          <Nav.Title>Components</Nav.Title>
          <Nav.Link>
            <Link to='/app/card'>
              <Icon type='television' left />Card
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/tag'>
              <Icon type='tag' left />Tag
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/badge'>
              <Icon type='circle' left />Badge
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/progress'>
              <Icon type='hourglass-start' left />Progress
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/button-group'>
              <Icon type='th-large' left />ButtonGroup
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/list-group'>
              <Icon type='list' left />ListGroup
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/modal'>
              <Icon type='file-text' left />
              Modal
              <Tag theme='success' className='offset-l'>
                New
              </Tag>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/confirm'>
              <Icon type='question-circle' left />Confirm
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/dropdown'>
              <Icon type='caret-down' left />Dropdown
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/datepicker'>
              <Icon type='calendar' left />DatePicker
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/calendar'>
              <Icon type='calendar-check-o' left />Calendar
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/loading'>
              <Icon type='spinner' left />Loading
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/app/utilsClass'>
              <Icon type='eye' left />UtilsClass
            </Link>
          </Nav.Link>
          <Nav.Title>Others</Nav.Title>
          <Collapse>
            <Collapse.Title>
              <Icon type='bars' left />Common Pages
            </Collapse.Title>
            <Collapse.Body>
              <Nav>
                <Nav.Link>
                  <Link to='/login'>Login</Link>
                </Nav.Link>
                <Nav.Link>
                  <a
                    href='http://fontawesome.io/icons/'
                    rel='noreferrer noopener'
                    target='_blank'
                  >
                    500
                  </a>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/app/image'>404</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/app/table'>Lock</Link>
                </Nav.Link>
              </Nav>
            </Collapse.Body>
          </Collapse>
        </Nav>
      </Sidebar.Body>
    </Sidebar>
  )
}

export default AppSidebar
