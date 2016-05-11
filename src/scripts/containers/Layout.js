import React, {Component} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import { Flex, FlexItem } from '../components';

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
                <Header/>
                <FlexItem>
                     <Flex>
                        {/* 侧边栏 */}
                        <Sidebar/>
                        {/* 内容区 */}
                        <Content>
                            {this.props.children}
                        </Content>
                     </Flex>
                </FlexItem>
            </Flex>
        );
    }
}