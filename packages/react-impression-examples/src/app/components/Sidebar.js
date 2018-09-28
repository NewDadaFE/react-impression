import React from 'react'
import { Link } from 'react-router'
import {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  Nav,
  NavLink,
  Icon,
} from 'react-impression'

// 侧边栏Sidebar
const AppSidebar = () => {
  return (
    <Sidebar style={{ height: 450 }}>
      <SidebarHeader>组件库示例</SidebarHeader>
      <SidebarBody>
        <Nav stacked>
          <NavLink>
            <Link to='/table'>
              <Icon type='list' left />列表页
            </Link>
          </NavLink>
          <NavLink>
            <Link to='/overview'>
              <Icon type='bar-chart' left />概览
            </Link>
          </NavLink>
        </Nav>
      </SidebarBody>
    </Sidebar>
  )
}

export default AppSidebar
