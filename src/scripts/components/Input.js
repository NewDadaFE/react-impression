import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import DatePicker from './DatePicker';

/**
 * 隐藏已弹出DatePicker.
 * @param  {[Event]} event [事件]
 */
const clearDatePicker = (event) => {
    document.body._datepickers.map(picker => {
        if(event.path.indexOf(findDOMNode(picker)) === -1){
            picker.hideOptionHandle();
        }
    });
}

/**
 * Input 组件.
 */
export default class Input extends Component{
    /**
     * 初始化.
     */
    constructor(props, context){
        super(props, context);

        this.state = {
            showOption: false,
            showClear: false,
        };

        if(!document.body._datepickers){
            let bodyClick = document.body.onclick;
            document.body.onclick = event => {
                bodyClick && bodyClick(event);
                clearDatePicker(event);
            };

            document.body._datepickers = []
        }

        document.body._datepickers.push(this);

        this.hasAddon = this.hasAddon.bind(this);
        this.clearInputHandle = this.clearInputHandle.bind(this);
        this.showOptionHandle = this.showOptionHandle.bind(this);
        this.hideOptionHandle = this.hideOptionHandle.bind(this);
        this.selectOptionHandle = this.selectOptionHandle.bind(this);
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
            showClear: true
        });
    }
    /**
     * 隐藏候选项.
     */
    hideOptionHandle(){
        let { showOption } = this.state,
            { main } = this.refs;

        main.blur();
        this.hasAddon() && this.setState({
            showOption: false,
            showClear: false
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
        this.hasAddon() && this.setState({
            showOption: false,
            showClear: false
        });
    }
    /**
     * 选中候选项.
     * @param  {[String]} value [候选项值]
     */
    selectOptionHandle(value){
        let { main } = this.refs;
        main.value = value;

        this.setState({
            showOption: false,
            showClear: false
        });
    }
    //渲染
    render(){
        let { type, value, defaultValue, disabled, placeholder, clearable, style,
                children, className, ...others} = this.props,
            { showOption, showClear } = this.state;

        return (
            <div className={classnames('input', className)} ref="container">
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
                    <DatePicker {...others} value={this.refs.main.value} onSelect={this.selectOptionHandle}/>
                }
            </div>
        );
    }
}