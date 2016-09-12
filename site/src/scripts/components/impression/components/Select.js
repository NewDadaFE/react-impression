import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';
import SelectOption from './SelectOption';
import * as System from '../utils/system';

/**
 * Select组件.
 */
export default class Select extends PureComponent {
    // 初始state
    constructor(props, context) {
        super(props, context);
        System.manager(this);

        // 是否木偶组件
        this.isPuppet = props.value !== undefined;

        this.state = {
            showOption: false,
            value: this.isPuppet ? undefined : props.defaultValue,
        };
    }
    // prop type校验
    static propTypes = {
        // 值
        value: PropTypes.any,
        // 默认值
        defaultValue: PropTypes.any,
        // 是否不可用
        disabled: PropTypes.bool,
        // style
        style: PropTypes.object,
        // 自定义样式
        className: PropTypes.string,
        // placeholder
        placeholder: PropTypes.string,
        // onChange
        onChange: PropTypes.func,
        children: PropTypes.any,
    }
    // 默认props
    static defaultProps = {
        disabled: false,
        placeholder: '请选择',
    }
    // 显示/隐藏菜单
    toggleOptionsHandle = () => {
        !this.props.disabled && this.setState({
            showOption: !this.state.showOption,
        });
    }
    // 隐藏菜单
    hideOptionsHandle = () => {
        this.setState({
            showOption: false,
        });
    }
    /**
     * option选中回调.
     * @param  {[String]} newValue [值]
     * @param  {[String]} text     [文本显示]
     * @param  {[Number]} index    [索引]
     */
    selectOptionHandle(newValue, text, index) {
        let { onChange } = this.props,
            { main } = this.refs,
            value = this.isPuppet ? this.props.value : this.state.value;

        // 木偶组件
        if(this.isPuppet) {
            onChange && newValue !== value && onChange(newValue, text, index);
        } else {
            this.setState({
                value: newValue,
            }, () => {
                onChange && newValue !== value && onChange(newValue, text, index);
                main.value = text;
            });
        }

        this.setState({
            showOption: false,
        });
    }
    /**
     * 清空组件管理.
     */
    componentWillUnmount() {
        System.unmanager(this);
    }
    // 渲染
    render() {
        let { placeholder, disabled, style, className, children } = this.props,
            { showOption } = this.state,
            originValue = this.isPuppet ? this.props.value : this.state.value,
            text;

        children = React.Children.map(children, (child, index) => {
            if(!child) {
                return child;
            }

            let { value, children, disabled } = child.props;

            value === originValue && (text = children);
            value === originValue
                        && !disabled && this.refs.main
                        && (this.refs.main.value = children);
            return React.cloneElement(child, {
                key: index,
                active: value === originValue,
                onClick: () => !disabled && this.selectOptionHandle(value, children, index),
            });
        });

        return(
            <div
                style={style}
                className={classnames('select', { disabled }, { open: showOption }, className)}
                disabled={disabled}>
                <input
                    type="text"
                    defaultValue={text}
                    readOnly ref="main"
                    placeholder={placeholder} disabled={disabled}
                    className={classnames('form-control', 'select-selection')}
                    onClick={this.toggleOptionsHandle} />
                <i className="fa fa-angle-down select-addon" onClick={this.toggleOptionsHandle} />
                <ul className="select-options">
                    { children }
                </ul>
            </div>
        );
    }
}

// 获取vule函数
Select.getValue = ref => {
    if(!ref) {
        return undefined;
    }

    if(ref.isPuppet) {
        return ref.props.value;
    }

    return ref.state.value;
};

Select.Option = SelectOption;
