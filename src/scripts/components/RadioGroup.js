import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * RadioGroup组件.
 */
export default class RadioGroup extends Component{
    //初始化state
    constructor(props, context){
        super(props, context);

        this.state = {
            value: props.value
        }

        this.onChangeHandle = this.onChangeHandle.bind(this);
    }
    //props校验
    static propTypes = {
        //自定义样式
        classname: React.PropTypes.string,
        //默认是否选中
        value: React.PropTypes.any,
        //回调函数
        onChange: React.PropTypes.func,
        //是否disabled
        disabled: React.PropTypes.bool,
        //名称
        name: React.PropTypes.string,
        //排列方向
        direction: React.PropTypes.oneOf(['row', 'column'])
    }
    //默认props
    static defaultProps = {
        disabled: false,
        direction: 'row'
    }
    //radio切换回调函数
    onChangeHandle(event){
        let value = event.target.value;
        let { onChange } = this.props;
        value !== 'on' && this.setState({
            value
        });
        onChange && onChange(value, event);
    }
    //渲染
    render(){
        let { className, name, direction } = this.props;
        let children = this.props.children.map((child, index) => {
            let { value, disabled } = child.props;
            let options = {
                name: name || `radio_${this._reactInternalInstance._mountOrder}`,
                key: index,
                onChange: this.onChangeHandle,
                disabled: disabled || this.props.disabled
            };

            if((value !== undefined) || this.state.value !== undefined){
                options.checked = (this.state.value === value);
            }

            return React.cloneElement(child, options);
        });

        return(
            <div className={classnames(direction=='row'?'radio-inline': 'radio-vertical', className)}>
                {children}
            </div>
        );
    }
}