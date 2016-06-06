import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * RadioGroup组件.
 */
export default class RadioGroup extends Component{
    //初始化state
    constructor(props, context){
        super(props, context);

        this.state = {
            value: props.value
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
        //名称
        name: PropTypes.string,
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
        let value = event.target.value,
            { onChange } = this.props;
        value !== 'on' && this.setState({
            value
        });
        onChange && onChange(value, event);
    }
    //渲染
    render(){
        let { className, name, direction, ...others } = this.props,
            children = this.props.children.map((child, index) => {
                let { value, disabled } = child.props,
                    options = {
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
            <div {...others} className={classnames(direction=='row'?'radio-inline': 'radio-vertical', className)}>
                {children}
            </div>
        );
    }
}