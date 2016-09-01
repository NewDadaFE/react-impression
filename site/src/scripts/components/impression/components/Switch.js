import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * Switch组件.
 */
export default class Switch extends PureComponent {
    //props校验
    static propTypes = {
        //自定义class
        className: PropTypes.string,
        //是否选中
        checked: PropTypes.bool,
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
    onChangeHandle = event => {
        let { onChange } = this.props,
            { checked } = event.target;

        onChange(checked, event);
    }
    //渲染
    render(){
        let { checked, defaultChecked, onChange, disabled, className, ...others } = this.props;

        return(
            <label {...others} className={classnames('switch', className)}>
                <input type="checkbox" checked={checked} defaultChecked={defaultChecked} disabled={disabled} ref="main" onChange={onChange && this.onChangeHandle}/>
                <div className="switch-addon"></div>
            </label>
        );
    }
}

//获取Swtich是否选中
Switch.getValue = ref => {
    let { value } = ref.props,
        { main } = ref.refs;

    return ref? (value !== undefined? value : main.checked) : undefined;
}
