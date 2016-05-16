import classnames from 'classnames';
import React, { Component } from 'react';

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
        style: React.PropTypes.string,
        //是否可关闭
        closeable: React.PropTypes.bool,
    }
    //关闭
    hideHandle(){
        this.setState({
            show: false
        });
    }
    render(){
        let { style, className, closeable } = this.props;
        let styleClass = `alert-${style}`;
        let hiddenClass = this.state.show? '' : 'hidden';

        return(
            <div className={classnames('alert', styleClass, hiddenClass, className)}>
                {this.props.children}
                { closeable &&
                    <button type="button" className="close" onClick={this.hideHandle}>&times;</button>
                }
            </div>
        );
    }
}