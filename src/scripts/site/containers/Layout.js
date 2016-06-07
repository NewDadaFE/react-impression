import React, {Component} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Flex, Square, Content } from '../../components';

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
            <Flex direction="column">
                {/* 顶部栏 */}
                <Header/>
                <Flex.Item>
                    <Square>
                        <Flex>
                            {/* 侧边栏 */}
                            <Sidebar/>
                            {/* 内容区 */}
                            <Content>
                                {children}
                            </Content>
                         </Flex>
                    </Square>
                </Flex.Item>
            </Flex>
        );
    }
}

Layout.title = 'Home';