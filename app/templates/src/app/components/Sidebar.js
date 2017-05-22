import React from 'react';
import { Link } from 'react-router';
import { Sidebar, Nav, Icon } from 'react-impression';

// 侧边栏Sidebar
const AppSidebar = () => {
  return (
    <Sidebar>
      <Sidebar.Header />
      <Sidebar.Body>
        <Nav>
          <Nav.Link>
            <Link to="/index"><Icon type="television" left />Counter</Link>
          </Nav.Link>
        </Nav>
      </Sidebar.Body>
    </Sidebar>
  );
};

export default AppSidebar;
