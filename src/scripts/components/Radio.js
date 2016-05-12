import classnames from 'classnames';
import React, { Component } from 'react';

export default class Radio extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
    }
    //默认props
    static defaultProps = {
        defaultChecked: false,
        disabled: false,
    }
    //props校验
    static propTypes: {
        classname: React.propTypes.string,
        defaultChecked: React.propTypes.bool,
        disabled: React.propTypes.bool,
    }
    //渲染
    render(){
        let { defaultChecked, disabled, classname } = this.props;
        return(
            <label className={classnames('radio', classname)}>
                <input type="radio" name="radio" defaultChecked={defaultChecked} disabled={disabled} />
                <div className="radio-addon">
                    <i></i>
                </div>
                <span className="radio-label">{this.props.children}</span>
            </label>
        );
    }
}