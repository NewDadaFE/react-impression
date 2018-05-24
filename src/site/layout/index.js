import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Header from './components/Header'
import style from './index.scss'

// 页面布局
const Layout = ({ children }) => {
  const { title } = children.type
  document.title = title || 'ReactImpression'

  return (
    <div className={style['layout']}>
      {/* 侧边栏 */}
      <Sidebar />
      <div className={style['right']}>
        {/* Header头部 */}
        <Header />
        {/* 内容区 */}
        <Content>{children}</Content>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout
