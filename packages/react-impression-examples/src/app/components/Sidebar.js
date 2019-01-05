import React from 'react'
import { Link } from 'react-router'
import {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  Nav,
  NavItem,
  Icon,
} from 'react-impression'

// 侧边栏Sidebar
const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>React Impression Examples</SidebarHeader>
      <SidebarBody>
        <Nav stacked>
          <NavItem>
            <Link to='/table'>
              <Icon type='list' left />
              列表页
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/overview'>
              <Icon type='bar-chart' left />
              概览
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/form'>
              <Icon type='table' left />
              表单
            </Link>
          </NavItem>
        </Nav>
      </SidebarBody>
    </Sidebar>
  )
}

export default AppSidebar
