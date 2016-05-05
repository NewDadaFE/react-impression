import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

/**
 * 页面布局.
 */
export default class Layout extends Component {
    /**
     * 构造函数.
     * @param  {[type]} props   [description]
     * @param  {[type]} context [description]
     * @return {[type]}         [description]
     */
    constructor(props, context) {
        super(props, context);
    }
    /**
     * 组件装载完毕.
     * @return {[type]} [description]
     */
    componentDidMount(){

    }
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