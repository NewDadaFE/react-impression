import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * ButtonGroup组件.
 */
export default class ButtonGroup extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            activeKey: props.activeKey
        }
    }
    //默认props
    static defaultProps = {
        style: 'default'
    }
    //prop校验
    static propType = {
        //大小（lg、sm）
        size: React.PropTypes.string,
        //主题样式(primary、secondary、default)
        style: React.PropTypes.string,
        //激活索引
        activeKey: React.PropTypes.any,
        //选中回调
        onSelect: React.PropTypes.func,
    }
    //渲染
    render(){
        let { activeKey } = this.state;
        let { style, size, className, onSelect } = this.props;
        let btnGroupSize = size? `btn-group-${size}` : null;

        let children = this.props.children.map((child, index) => {
            let { eventKey } = child.props;

            return React.cloneElement(child, {
                key: index,
                outline: style !== 'default' && (!activeKey || !eventKey || activeKey !== eventKey),
                style: style === 'default'? (activeKey !== undefined && activeKey === eventKey? 'primary': style) : style,
                onClick: event => {
                    this.setState({
                        activeKey: eventKey
                    });
                    onSelect && onSelect(eventKey, event);
                }
            });
        });

        return (
            <div className={classnames('btn-group', btnGroupSize, className)}>
                {children}
            </div>
        );
    }
}