import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * Alert 组件
 */
export default class Alert extends Component{
    //初始state
    constructor(props, context){
        super(props, context);
        this.state = {
            show: true
        };

        this.hideHandle = this.hideHandle.bind(this);
    }
    // props 校验
    static propTypes = {
        //样式（success、primary、warning、danger）
        style: PropTypes.string,
        //是否可关闭
        closeable: PropTypes.bool,
        //自定义样式
        className: PropTypes.string,
    }
    //关闭
    hideHandle(){
        this.setState({
            show: false
        });
    }
    render(){
        let { style, className, closeable, children, ...others } = this.props,
            styleClass = `alert-${style}`,
            hiddenClass = this.state.show? '' : 'hidden';

        return(
            <div {...others} className={classnames('alert', styleClass, hiddenClass, className)}>
                {children}
                { closeable &&
                    <button type="button" className="close" onClick={this.hideHandle}>&times;</button>
                }
            </div>
        );
    }
}