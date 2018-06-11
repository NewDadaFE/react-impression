import React from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Flex, Content } from 'react-impression'
import { SIDEBAR_MENU } from './config'
import styles from './index.scss'

// 页面布局.
const Layout = ({ children }) => {
  return (
    <Flex className={styles['layout']}>
      {/* 侧边栏 */}
      <Sidebar menu={SIDEBAR_MENU} />
      {/* 内容区 */}
      <Flex.Item>
        <Flex direction='column'>
          <Header />
          <Content className={styles['content']} notransition>
            {children}
          </Content>
        </Flex>
      </Flex.Item>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
