import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import SelectOption from './SelectOption';
import * as System from '../utils/system';

/**
 * Select组件.
 */
export default class Select extends Component{
    //初始state
    constructor(props, context){
        super(props, context);
        System.manager(this);

        this.state = {
            showOption: false,
            value: props.value || undefined,
        };

        this.toggleOptionsHandle = this.toggleOptionsHandle.bind(this);
        this.hideOptionsHandle = this.hideOptionsHandle.bind(this);
    }
    //prop type校验
    static propTypes = {
        //值
        value: PropTypes.any,
        //是否不可用
        disabled: PropTypes.bool,
        //style
        style: PropTypes.object,
        //自定义样式
        className: PropTypes.string,
        //placeholder
        placeholder: PropTypes.string,
        //onChange
        onChange: PropTypes.func,
    }
    //默认props
    static defaultProps = {
        disabled: false,
        placeholder: '请选择'
    }
    //显示/隐藏菜单
    toggleOptionsHandle(){
        !this.props.disabled && this.setState({
            showOption: !this.state.showOption
        });
    }
    //隐藏菜单
    hideOptionsHandle(){
        this.setState({
            showOption: false
        });
    }
    /**
     * option选中回调.
     * @param  {[String]} newValue [值]
     * @param  {[String]} text     [文本显示]
     * @param  {[Number]} index    [索引]
     */
    selectOptionHandle(newValue, text, index){
        let { value } = this.state,
            { onChange } = this.props,
            { main } = this.refs;

        onChange && newValue !== value && onChange(newValue, text, index);
        this.setState({
            value: newValue,
            showOption: false
        });

        main.value = text;
    }
    //渲染
    render(){
        let { placeholder, disabled, style, className, children } = this.props,
            { showOption, value } = this.state,
            text = undefined;

        children = children.map((child, index) => {
            let { value, children, disabled }  = child.props;
            value === this.state.value && (text = children);
            return React.cloneElement(child, {
                key: index,
                active: value === this.state.value,
                onClick: () => !disabled && this.selectOptionHandle(value, children, index)
            });
        });

        return(
            <div style={style} className={classnames('select', { disabled }, { open: showOption }, className)} disabled={disabled}>
                <input type="text" defaultValue={text}  readOnly ref="main"
                    placeholder={placeholder}  disabled={disabled}
                    className={classnames('form-control' ,'select-selection')}
                    onClick={this.toggleOptionsHandle}/>
                <i className="fa fa-angle-down select-addon"></i>
                <ul className="select-options">
                    { children }
                </ul>
            </div>
        );
    }
}


Select.Option = SelectOption;