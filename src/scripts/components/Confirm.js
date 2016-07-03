import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import ConfirmFooter from './ConfirmFooter';
import ConfirmBody from './ConfirmBody';

/**
 * Confirm组件.
 */
export default class Confirm extends Component{
    constructor(props, context){
        super(props, context);

        this.getAddonByType = this.getAddonByType.bind(this);
    }
    //props校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //类型
        type: PropTypes.string,
    }
    //默认props
    static defaultProps = {
        type: 'warning'
    }
    /**
     * 根据类型获取Icon.
     * @return {[String]} [Icon类型]
     */
    getAddonByType(type){
        switch(type){
        default:
            return 'fa-exclamation-circle text-warning';
        }
    }
    //渲染
    render(){
        let { type, className, children, ...others } = this.props,
            iconTypeClass = this.getAddonByType(type);

        return(
            <div className={classnames('confirm', className)}>
                <div {...others} className="confirm-dialog">
                    <div className="confirm-addon">
                        <i className={classnames('fa', iconTypeClass)}></i>
                    </div>
                    {children}
                    <div className="confirm-title">你确定？</div>
                    <div className="confirm-footer">
                        <div className="confirm-btn-sure">确定</div>
                        <div className="confirm-btn-cancel">取消</div>
                    </div>
                </div>
            </div>
        );
    }
}

Confirm.Body   = ConfirmBody;
Confirm.Footer = ConfirmFooter;