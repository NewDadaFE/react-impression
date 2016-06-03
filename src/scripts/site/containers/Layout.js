import React, {Component} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import { Flex, FlexItem, Square } from '../../components';

/**
 * 页面布局.
 */
export default class Layout extends Component {
    /**
     * 组件渲染.
     */
    render () {
        return (
            <Flex direction="column">
                {/* 顶部栏 */}
                <Header/>
                <FlexItem>
                    <Square>
                        <Flex>
                            {/* 侧边栏 */}
                            <Sidebar/>
                            {/* 内容区 */}
                            <Content>
                                {this.props.children}
                            </Content>
                         </Flex>
                    </Square>
                </FlexItem>
            </Flex>
        );
    }
}

Layout.title = 'Home';