import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * Switch组件.
 */
export default class Switch extends Component{
    //初始化state
    constructor(props, context){
        super(props, context);
        this.onChangeHandle = this.onChangeHandle.bind(this);
    }
    //props校验
    static propTypes = {
        //自定义class
        className: PropTypes.string,
        //是否默认选中
        defaultChecked: PropTypes.bool,
        //是否disabled
        disabled: PropTypes.bool,
        //状态切换回调
        onChange: PropTypes.func,
    }
    //默认props
    static defaultProps = {
        disabled: false,
    }
    //状态切换回调
    onChangeHandle(event){
        let { onChange } = this.props,
            { checked } = event.target;

        onChange && onChange(checked, event);
    }
    //渲染
    render(){
        let { defaultChecked, disabled, className, ...others } = this.props;

        return(
            <label {...others} className={classnames('switch', className)}>
                <input type="checkbox" defaultChecked={defaultChecked} disabled={disabled} ref="main" onChange={this.onChangeHandle}/>
                <div className="switch-addon"></div>
            </label>
        );
    }
}