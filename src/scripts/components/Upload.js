import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * 上传组件.
 */
export default class Upload extends Component{
    //初始state
    constructor(props, context){
        super(props, context);

        this.state = {
            file: ''
        };
    }
    //props校验
    static propTypes ={
        className: PropTypes.string,
        btnText: PropTypes.string,
        placeholder: PropTypes.string,
        btnStyle: PropTypes.string,
    }
    //默认props
    static defaultProps = {
        btnText: '浏 览',
        btnStyle: 'default',
        placeholder: '请选择要上传的附件',
    }
    openFileDialogHandle = () => {
        this.refs.main.click();
    }
    fileChangeHandle = (value) => {
        this.setState({
            file: this.refs.main.value
        });
    }
    //渲染
    render(){
        let { btnText, btnStyle, placeholder, className, ...others } = this.props,
            { file } = this.state;

        return(
            <div {...others} className={classnames('input-group', 'input-group-upload', className)}>
                <input type="text" className="form-control" placeholder={placeholder} disabled value={file}/>
                <span className="input-group-btn">
                    <button type="button" className={classnames('btn', `btn-${btnStyle}`)} onClick={this.openFileDialogHandle}>{btnText}</button>
                </span>
                <input type="file" ref="main" onChange={this.fileChangeHandle}/>
            </div>
        );
    }
}
