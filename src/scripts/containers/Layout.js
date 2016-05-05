import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

/**
 * 页面布局.
 */
export default class Layout extends Component {
    /**
     * 组件渲染.
     */
    render () {
        return (
            <div className="appboard">
                {/* 侧边栏 */}
                <Sidebar/>
                {/* 内容区 */}
                <Content>
                    {this.props.children}
                </Content>
            </div>
        );
    }
}