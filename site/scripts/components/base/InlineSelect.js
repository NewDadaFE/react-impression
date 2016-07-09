import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import InlineSelectOption from './InlineSelectOption';

/**
 * InlineSelect组件.
 */
export default class InlineSelect extends Component{
    // props 校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //onChange
        onChange: PropTypes.func,
        //value
        value: PropTypes.any,
    }
    /**
     * option选中回调.
     * @param  {[Any]} value       [值]
     * @param  {[String]} text     [名称]
     * @param  {[Number]} index    [索引]
     */
    selectOptionHandle(value, text, index){
        let { onChange } = this.props;

        onChange && onChange(value, text, index);
    }
    render(){
        let { value, className, children, ...others } = this.props;

        children = React.Children.toArray(children);
        children && (children = children.map((child, index) => {
            return React.cloneElement(child, {
                key: index,
                active: value !== undefined && value === child.props.value,
                onClick: () => this.selectOptionHandle(child.props.value, child.props.children, index)
            });
        }));

        return(
            <div {...others} className={classnames('inline-select', className)}>
                { children }
            </div>
        );
    }
}

InlineSelect.Option = InlineSelectOption;