import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import DatePicker from './DatePicker';
import * as System from '../utils/system';



/**
 * Input 组件.
 */
export default class Input extends Component{
    /**
     * 初始化.
     */
    constructor(props, context){
        super(props, context);
        System.manager(this);

        this.state = {
            showOption: false,
            showClear: false,
        };

        this.hasAddon = this.hasAddon.bind(this);
        this.clearInputHandle = this.clearInputHandle.bind(this);
        this.showClearHandle = this.showClearHandle.bind(this);
        this.hideClearHandle = this.hideClearHandle.bind(this);
        this.showOptionHandle = this.showOptionHandle.bind(this);
        this.hideOptionsHandle = this.hideOptionsHandle.bind(this);
        this.selectOptionsHandle = this.selectOptionsHandle.bind(this);
    }
    //prop type校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //类型
        type: PropTypes.oneOf(['text', 'password', 'file', 'date', 'emaile']),
        //提示
        placeholder: PropTypes.string,
        //值
        value: PropTypes.any,
        //默认值
        defaultValue: PropTypes.any,
        //是否可清除
        clearable: PropTypes.bool,
        //是否不可选
        disabled: PropTypes.bool,
    }
    //默认props
    static defaultProps = {
        type: 'text',
        clearable: true,
        disabled: false,
    }
    /**
     * 是否包含addon判断.
     * @return {Boolean} [是否包含addon]
     */
    hasAddon(){
        let { type, clearable} = this.props,
            types = ['date'];

        return clearable || types.indexOf(type) !== -1;
    }
    /**
     * 显示候选项.
     */
    showOptionHandle(){
        let { disabled } = this.props;

        !disabled && this.hasAddon() && this.setState({
            showOption: true,
            showClear: false,
        });
    }
    /**
     * 隐藏候选项.
     */
    hideOptionsHandle(){
        let { main } = this.refs;

        main.blur();
        this.hasAddon() && this.setState({
            showOption: false,
            showClear: false,
        });
    }
    /**
     * 清空输入框.
     */
    clearInputHandle(){
        let { disabled } = this.props,
            { main } = this.refs;

        if(disabled){
            return false;
        }

        main.value = '';
    }
    /**
     * 选中候选项.
     * @param  {[String]} value [候选项值]
     */
    selectOptionsHandle(value){
        let { main } = this.refs;
        main.value = value;

        this.setState({
            showOption: false,
            showClear: false
        });
    }
    /**
     * 显示清空按钮.
     */
    showClearHandle(){
        !this.props.disabled
        && this.refs.main.value
        && this.setState({
            showClear: true
        });
    }
    /**
     * 隐藏清空按钮.
     */
    hideClearHandle(){
        this.setState({
            showClear: false,
        });
    }
    /**
     * 清空组件管理.
     */
    componentWillUnmount(){
        System.unmanager(this);
    }
    //渲染
    render(){
        let { type, value, defaultValue, disabled, placeholder, clearable, style, className, ...others} = this.props,
            { showOption, showClear } = this.state;

        return (
            <div className={classnames('input', className)} ref="container"
                onMouseEnter={this.showClearHandle}
                onMouseLeave={this.hideClearHandle}>
                <input type='text' ref="main"
                    value={value} defaultValue={defaultValue}
                    className={classnames('form-control', 'input-field',{
                        'input-field-addon': this.hasAddon()
                    })}
                    readOnly={this.hasAddon()}
                    disabled={disabled}
                    placeholder={placeholder}
                    onClick={this.showOptionHandle}
                    style={style}/>
                { clearable && showClear &&
                    <i className="fa fa-times input-addon input-addon-clear" onClick={this.clearInputHandle}></i>
                }
                { (!showClear || !clearable) &&
                    <i className="fa fa-calendar input-addon" onClick={this.showOptionHandle}></i>
                }
                { showOption && type === 'date' &&
                    <DatePicker {...others} value={this.refs.main.value} onSelect={this.selectOptionsHandle}/>
                }
            </div>
        );
    }
}