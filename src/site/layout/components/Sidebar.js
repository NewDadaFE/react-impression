import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { Sidebar, Nav, Collapse, Icon } from 'react-impression'
import '../index.scss'

// 侧边栏Sidebar
function AppSidebar(props) {
  const { menu } = props

  return (
    <Sidebar>
      <Sidebar.Header>
        <Icon styleName='top' type='dada' size='2x' left />
        <span styleName='top'>{menu.projectName}</span>
      </Sidebar.Header>
      <Sidebar.Body>
        <Nav>
          {menu.menuModel &&
            menu.menuModel.map(list => {
              if (list.children.length) {
                return (
                  <Collapse key={list.id} active>
                    <Collapse.Title>
                      <Icon type={list.icon} left />
                      {list.name}
                    </Collapse.Title>
                    <Collapse.Body>
                      <Nav>
                        {list.children.map(item => (
                          <Nav.Link key={item.id}>
                            <Link to={item.url}>{item.name}</Link>
                          </Nav.Link>
                        ))}
                      </Nav>
                    </Collapse.Body>
                  </Collapse>
                )
              }
              return (
                <Nav.Link key={list.id}>
                  <Link to={list.url}>
                    <Icon type={list.icon} left />
                    {list.name}
                  </Link>
                </Nav.Link>
              )
            })}
        </Nav>
      </Sidebar.Body>
    </Sidebar>
  )
}
AppSidebar.propTypes = {
  menu: PropTypes.object.isRequired,
}

export default AppSidebar
