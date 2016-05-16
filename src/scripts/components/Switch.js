import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * Switch组件.
 */
export default class Switch extends Component{
    //props校验
    static propTypes = {
        //自定义class
        classname: React.PropTypes.string,
        //是否默认选中
        defaultChecked: React.PropTypes.bool,
        //是否disabled
        disabled: React.PropTypes.bool,
        //状态切换回调
        onChange: React.PropTypes.func,
    }
    //默认props
    static defaultProps = {
        defaultChecked: false,
        disabled: false,
    }
    //渲染
    render(){
        let { defaultChecked, disabled, classname, onChange } = this.props;
        return(
            <label className={classnames('switch', classname)}>
                <input type="checkbox" defaultChecked={defaultChecked} disabled={disabled} ref="main" onChange={onChange}/>
                <div className="switch-addon"></div>
            </label>
        );
    }
}