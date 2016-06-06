import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * ButtonGroup组件.
 */
export default class ButtonGroup extends Component{
    //初始state
    constructor(props, context){
        super(props, context);
        this.state = {
            activeKey: props.activeKey
        };
    }
    //默认props
    static defaultProps = {
        style: 'default'
    }
    //prop校验
    static propType = {
        //大小（lg、sm）
        size: PropTypes.string,
        //主题样式(primary、secondary、default)
        style: PropTypes.string,
        //激活索引（被选中Button会额外添加选中样式，为空时不额外添加选中样式）
        activeKey: PropTypes.any,
        //选中回调
        onSelect: PropTypes.func,
        //自定义样式
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { activeKey } = this.state,
            { style, size, className, onSelect, children, ...others } = this.props,
            btnGroupSize = size? `btn-group-${size}` : null;

        children = children.map((child, index) => {
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
            <div {...others} className={classnames('btn-group', btnGroupSize, className)}>
                {children}
            </div>
        );
    }
}