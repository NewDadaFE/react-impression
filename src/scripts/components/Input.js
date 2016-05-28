import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import DatePicker from './DatePicker';

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
    }
    //默认props
    static defaultProps = {
        type: 'date',
        clearable: true,
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
        this.hasAddon() && this.setState({
            showOption: true,
            showClear: true
        });
    }
    /**
     * 隐藏候选项.
     */
    hideOptionHandle(){
        let { showOption } = this.state;

        !showOption && this.hasAddon() && this.setState({
            showOption: false,
            showClear: false
        });
    }
    /**
     * 清空输入框.
     */
    clearInputHandle(){
        let { main } = this.refs;
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
        let { type, value, defaultValue, placeholder, clearable,  children, className } = this.props,
            { showOption, showClear } = this.state;

        return (
            <div className={classnames('input', className)}>
                <input type='text' ref="main"
                    value={value} defaultValue={defaultValue}
                    className={classnames('form-control', 'input-field',{
                        'input-field-addon': this.hasAddon()
                    })}
                    readOnly={this.hasAddon()}
                    placeholder={placeholder}
                    onFocus={this.showOptionHandle}
                    onBlur={this.hideOptionHandle}/>
                { clearable && showClear &&
                    <i className="fa fa-times input-addon input-addon-clear" onClick={this.clearInputHandle}></i>
                }
                { (!showClear || !clearable) &&
                    <i className="fa fa-calendar input-addon"></i>
                }
                { showOption && type === 'date' &&
                    <DatePicker value={this.refs.main.value} onSelect={this.selectOptionHandle}/>
                }
            </div>
        );
    }
}