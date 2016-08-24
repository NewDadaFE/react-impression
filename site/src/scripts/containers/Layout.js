import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Flex, Content } from '../components/impression';

/**
 * 页面布局.
 */
export default class Layout extends Component {
    /**
     * 组件渲染.
     */
    render () {
        let { children } = this.props;

        return (
            <Flex className="layout">
                {/* 侧边栏 */}
                <Sidebar/>
                {/* 内容区 */}
                <Flex.Item>
                    <Flex direction="column">
                        <Header/>
                        <Content>
                            {children}
                        </Content>
                    </Flex>
                </Flex.Item>
            </Flex>
        );
    }
}

Layout.title = 'Home';
