import classnames from 'classnames';
import React, { Component } from 'react';
import SelectOption from './SelectOption';

/**
 * Select组件.
 */
export default class Select extends Component{
    //初始state
    constructor(props, context){
        super(props, context);
        this.state = {
            open: false,
            value: undefined,
        };

        this.toggleOptionsHandle = this.toggleOptionsHandle.bind(this);
        this.hideOptionsHandle = this.hideOptionsHandle.bind(this);
    }
    //prop type校验
    static propTypes = {
        //是否不可用
        disabled: React.PropTypes.bool,
        //style
        style: React.PropTypes.object,
        //自定义样式
        className: React.PropTypes.string,
        //placeholder
        placeholder: React.PropTypes.string,
        //onChange
        onChange: React.PropTypes.func,
    }
    //默认props
    static defaultProps = {
        disabled: false,
        placeholder: '请选择'
    }
    //显示/隐藏菜单
    toggleOptionsHandle(){
        !this.props.disabled && this.setState({
            open: !this.state.open
        });
    }
    //隐藏菜单
    hideOptionsHandle(){
        setTimeout(() => {
            this.setState({
                open: false
            });
        }, 200);
    }
    /**
     * option选中回调.
     * @param  {[String]} newValue [值]
     * @param  {[String]} text     [文本显示]
     * @param  {[Number]} index    [索引]
     */
    selectOptionHandle(newValue, text, index){
        let { value } = this.state;
        let { onChange } = this.props;

        onChange && newValue !== value && onChange(newValue, text, index);
        this.setState({
            text,
            value: newValue
        });

    }
    //渲染
    render(){
        let { placeholder, disabled, style, className, children } = this.props;
        let { open, text, value } = this.state;

        children = children.map((child, index) => {
            let { value, children }  = child.props;
            return React.cloneElement(child, {
                key: index,
                active: value === this.state.value,
                onClick: () => !disabled && this.selectOptionHandle(value, children, index)
            });
        });

        return(
            <div style={style} className={classnames('select', { disabled }, { open }, {'select-noval': !value}, className)} disabled={disabled}  onBlur={this.hideOptionsHandle}>
                <button className={classnames('select-selection')} type="button" onClick={this.toggleOptionsHandle}>
                    {text || placeholder}
                </button>
                <i className="fa fa-angle-down select-addon"></i>
                <ul className="select-options">
                    { children }
                </ul>
            </div>
        );
    }
}


Select.Option = SelectOption;