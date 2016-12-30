import React, { PropTypes } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Flex, Content } from '../components/impression';

// 页面布局.
const Layout = ({ children }) => {
    return (
        <Flex className="layout">
            {/* 侧边栏 */}
            <Sidebar />
            {/* 内容区 */}
            <Flex.Item>
                <Flex direction="column">
                    <Header />
                    <Content>
                        {children}
                    </Content>
                </Flex>
            </Flex.Item>
        </Flex>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
};

export default Layout;
