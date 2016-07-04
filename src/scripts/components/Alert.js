import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import Button from './Button';

/**
 * Alert 组件
 */
export default class Alert extends Component{
    // props 校验
    static propTypes = {
        //类型（success、primary、warning、danger）
        type: PropTypes.string,
        //自定义样式
        className: PropTypes.string,
        //回调
        onClick: PropTypes.func
    }
    //默认props
    static defaultProps = {
        type: 'info',
        btnText: '确定',

    }
    getAddonByType(type){
        switch(type){
        case 'danger':
            return 'fa-exclamation-circle text-danger';
        default:
            return 'fa-exclamation-triangle text-warning';
        }
    }
    render(){
        let { type, btnText, onClick, className, children, ...others } = this.props,
            iconTypeClass = this.getAddonByType(type);

        return(
            <div className={classnames('alert', className)}>
                <div {...others} className="alert-dialog">
                    <div className="alert-addon">
                        <i className={classnames('fa', iconTypeClass)}></i>
                    </div>
                    <div className="alert-body">
                        {children}
                    </div>
                    <div className="alert-footer" onClick={onClick}>
                        {btnText}
                    </div>
                </div>
            </div>
        );
    }
}