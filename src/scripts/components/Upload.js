import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';
import Icon from './Icon';

/**
 * 上传组件.
 */
export default class Upload extends PureComponent {
    // props校验
    static propTypes ={
        className: PropTypes.string,
        btnText: PropTypes.string,
        placeholder: PropTypes.string,
        btnStyle: PropTypes.string,
        preview: PropTypes.bool,
        message: PropTypes.string,
        src: PropTypes.string,
        children: PropTypes.any,
    }
    // 默认props
    static defaultProps = {
        btnText: '浏 览',
        btnStyle: 'default',
        placeholder: '请选择要上传的附件',
        preview: false,
    }
    // 初始state
    constructor(props, context) {
        super(props, context);

        this.state = {
            file: '',
        };
    }
    /**
     * 打开文件浏览器对话框.
     */
    openFileDialogHandle = () => {
        this.refs.main.click();
    }
    /**
     * 设置文件名.
     */
    fileChangeHandle = event => {
        this.setState({
            file: event.target.value,
        });
    }
    /**
     * 图片预览处理.
     * @param  {[Event]} event [事件]
     */
    imagePreviewHandle = event => {
        let file = event.target.files[0],
            reader = new FileReader();

        if (file) {
            reader.onload = e => {
                this.setState({
                    previewImageUrl: e.currentTarget.result,
                });
            };
        }

        reader.readAsDataURL(file);
    }
    // 渲染
    render() {
        let {
                preview,
                message,
                src,
                btnText,
                btnStyle,
                placeholder,
                className,
                children,
                ...others,
            } = this.props,
            { file, previewImageUrl } = this.state;

        // 预览模式
        if (preview) {
            children && (children = React.cloneElement(children, {
                className: classnames('upload-preview-addon', children.props.className),
            }));

            return (
                <div className="upload-preview" onClick={this.openFileDialogHandle}>
                    { children || <Icon type="camera" className="upload-preview-addon" /> }
                    <span className="upload-preview-text">{message}</span>
                    <input type="file" ref="main" onChange={this.imagePreviewHandle} />
                    { (previewImageUrl || src) &&
                        <div className="upload-preview-img">
                            <img src={previewImageUrl || src} />
                        </div>
                    }
                </div>
            );
        }

        // Input type="file"
        return (
            <div {...others} className={classnames('input-group', 'input-group-upload', className)}>
                <input
                    type="text"
                    className="form-control"
                    placeholder={placeholder}
                    disabled value={file} />
                <span className="input-group-btn">
                    <button
                        type="button"
                        className={classnames('btn', `btn-${btnStyle}`)}
                        onClick={this.openFileDialogHandle}>
                        {btnText}
                    </button>
                </span>
                <input type="file" ref="main" onChange={this.fileChangeHandle} />
            </div>
        );
    }
}

// 获取上传文件
Upload.getValue = ref => {
    return ref ? ref.refs.main.files[0] : undefined;
};
