import React from 'react'
import { Link } from 'react-router'
import {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  Nav,
  NavItem,
} from 'react-impression'
import logo from '../images/logo.png'

// 侧边栏Sidebar
const AppSidebar = () => (
  <Sidebar>
    <SidebarHeader>
      <img src={logo} />
      React Impression
    </SidebarHeader>
    <SidebarBody>
      <Nav stacked>
        <NavItem>
          <Link to='/'>Counter</Link>
        </NavItem>
      </Nav>
    </SidebarBody>
  </Sidebar>
)

export default AppSidebar
