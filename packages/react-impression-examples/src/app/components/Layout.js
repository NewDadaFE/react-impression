import React, { PropTypes } from 'react'
import { Flex, Loading, Notification, Message, Content } from 'react-impression'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <Flex className='layout'>
      <Sidebar />
      <Flex.Item>
        <Flex direction='column'>
          <Header />
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
