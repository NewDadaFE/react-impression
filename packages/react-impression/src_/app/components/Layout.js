import React, { PropTypes } from 'react'
import { Flex, Content, Loading, Notification, Message } from 'react-impression'
import Header from './Header'
import Sidebar from './Sidebar'

// 页面布局
const Layout = ({ children }) => {
  return (
    <Flex className='layout'>
      {/* 侧边栏 */}
      <Sidebar />
      <Flex.Item>
        <Flex direction='column'>
          {/* 顶部栏 */}
          <Header />
          {/* 内容区 */}
          <Content>{children}</Content>
          <Notification />
          <Message />
          <Loading type='fountain' duration={500} />
        </Flex>
      </Flex.Item>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout
