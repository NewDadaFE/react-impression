import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';
import InlineSelectOption from './InlineSelectOption';

/**
 * InlineSelect组件.
 */
export default class InlineSelect extends PureComponent {
    constructor(props) {
        super(props);

        //是否木偶组件
        this.isPuppet = props.value !== undefined? true : false;

        this.state = {
            value: this.isPuppet? undefined : props.defaultValue,
        };
    }
    // props 校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //onChange
        onChange: PropTypes.func,
        //value
        value: PropTypes.any,
        //defaultValue
        defaultValue: PropTypes.any,
    }
    /**
     * option选中回调.
     * @param  {[Any]} value       [值]
     * @param  {[String]} text     [名称]
     * @param  {[Number]} index    [索引]
     */
    selectOptionHandle(value, text, index){
        let { onChange } = this.props;

        //木偶组件
        if(this.isPuppet){
            onChange && onChange(value, text, index);
        } else {
            this.setState({
                value
            }, () => {
                onChange && onChange(value, text, index);
            });
        }
    }
    render(){
        let { className, children, ...others } = this.props,
            originValue = this.isPuppet? this.props.value : this.state.value;

        children = React.Children.map(children, (child, index) => {
            let { value, children } = child.props;

            return React.cloneElement(child, {
                key: index,
                active: originValue !== undefined && originValue === value,
                onClick: () => this.selectOptionHandle(value, children, index)
            });
        });

        return(
            <div {...others} className={classnames('inline-select', className)}>
                { children }
            </div>
        );
    }
}

//获取值
InlineSelect.getValue = ref => {
    return ref? (ref.isPuppet? ref.props.value : ref.state.value) : undefined;
};

InlineSelect.Option = InlineSelectOption;
