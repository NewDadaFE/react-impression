import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * CheckboxGroup组件.
 */
export default class CheckboxGroup extends Component{
    //初始化state
    constructor(props, context){
        super(props, context);

        this.state = {
            value: props.value || []
        };

        this.onChangeHandle = this.onChangeHandle.bind(this);
    }
    //props校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //默认是否选中
        value: PropTypes.any,
        //回调函数
        onChange: PropTypes.func,
        //是否disabled
        disabled: PropTypes.bool,
        //排列方向
        direction: PropTypes.oneOf(['row', 'column'])
    }
    //默认props
    static defaultProps = {
        disabled: false,
        direction: 'row'
    }
    //radio切换回调函数
    onChangeHandle(event){
        let { value, checked} = event.target;
        let { onChange } = this.props;
        let newValue = checked? [...this.state.value, value]: [...this.state.value.filter(item => item !== value)];

        this.setState({
            value: newValue
        });

        onChange && onChange(newValue, event);
    }
    //渲染
    render(){
        let { className, direction, children, ...others } = this.props;
        children = children.map((child,index ) => {
            let { value, disabled, children } = child.props;
            value = (value !== undefined)? value : `${children}`;

            return React.cloneElement(child, {
                value,
                key: index,
                onChange: this.onChangeHandle,
                disabled: disabled || this.props.disabled,
                checked: this.state.value.indexOf(value) != -1
            });
        });

        return(
            <div {...others} className={classnames(direction=='row'?'checkbox-inline': 'checkbox-vertical', className)}>
                {children}
            </div>
        );
    }
}