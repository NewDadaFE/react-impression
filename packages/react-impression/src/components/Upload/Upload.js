import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

const RotateDirection = {
  Clockwise: 1,
  CounterClockwise: -1,
}

export default class Upload extends React.PureComponent {
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 按钮文字，非preview模式下使用
     */
    btnText: PropTypes.string,

    /**
     * 占位文字，非preview模式下使用
     */
    placeholder: PropTypes.string,

    /**
     * 按钮样式，非preview模式下使用
     */
    btnStyle: PropTypes.string,

    /**
     * 是否可预览，为true可预览上传的图片
     */
    preview: PropTypes.bool,

    /**
     * 提示信息，preview模式下使用
     */
    message: PropTypes.string,

    /**
     * 图片路径，preview模式下使用
     */
    src: PropTypes.string,
    /**
     * 接受的文件类型
     */
    accept: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.node,

    /**
     * 回调函数，参数列表：event
     */
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    btnText: '浏览',
    btnStyle: 'default',
    placeholder: '请选择要上传的附件',
    preview: false,
  }

  constructor(props, context) {
    super(props, context)

    this.fileRef = element => {
      this.fileInput = element
    }
    this.state = {
      file: '',
      previewImageUrl: this.props.src,
      showBigPreview: false,
      previewImgRotate: 0,
    }
  }

  getValue() {
    return this.fileInput.files[0]
  }

  setValue(value) {
    this.fileInput.files[0] = value
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    this.setState({
      previewImageUrl: newProps.src,
    })
  }

  /**
   * 打开文件浏览器对话框
   */
  handleOpenFileDialog = () => {
    this.fileInput.click()
  }

  /**
   * 设置文件名
   */
  handleFileChange = event => {
    const { onChange } = this.props

    this.setState({
      file: event.target.files[0].name,
    })

    onChange(event)
  }

  /**
   * 图片预览处理
   */
  handleImagePreview = event => {
    const { onChange } = this.props
    onChange(event)
  }

  handleRemoveImg = event => {
    event.stopPropagation()
    const { onChange } = this.props
    this.fileInput.value = ''
    this.setState({
      previewImageUrl: '',
    })

    onChange(event)
  }

  /**
   * 点击查看大图
   */
  handlePreview = event => {
    event.stopPropagation()
    this.handleTogglePreview()
  }

  handleTogglePreview = event => {
    event && event.stopPropagation()
    this.setState({
      showBigPreview: !this.state.showBigPreview,
      previewImgRotate: 0,
    })
  }

  /**
   * 大图旋转处理
   */
  handlePreviewRotate = (clockwise, event) => {
    event && event.stopPropagation()
    const DegOfOneMove = 90
    this.setState({
      previewImgRotate: this.state.previewImgRotate + clockwise * DegOfOneMove,
    })
  }

  handlePreviewLeft = event => {
    this.handlePreviewRotate(RotateDirection.CounterClockwise, event)
  }

  handlePreviewRight = event => {
    this.handlePreviewRotate(RotateDirection.Clockwise, event)
  }

  render() {
    const {
      preview,
      message,
      btnText,
      btnStyle,
      placeholder,
      className,
      accept,
      ...others
    } = this.props
    delete others.onChange
    const {
      file,
      previewImageUrl,
      showBigPreview,
      previewImgRotate,
    } = this.state
    let { children } = this.props

    if (preview) {
      if (children) {
        children = React.cloneElement(children, {
          className: classnames(
            'upload-preview-addon',
            children.props.className
          ),
        })
      }

      return (
        <div className='upload-preview' onClick={this.handleOpenFileDialog}>
          <input
            type='file'
            accept={accept}
            ref={this.fileRef}
            onChange={this.handleImagePreview}
          />
          {previewImageUrl ? (
            <div className='upload-preview-inner upload-preview-img'>
              <img src={previewImageUrl} />
              <div className='upload-preview-remove'>
                <Icon
                  type='eye'
                  onClick={this.handlePreview}
                  className='action-icon'
                />
                <Icon
                  type='trash'
                  onClick={this.handleRemoveImg}
                  className='action-icon'
                />
              </div>
              {showBigPreview && (
                <div
                  className='image-preview'
                  onClick={this.handleTogglePreview}
                >
                  <Icon
                    type='close'
                    onClick={this.handleTogglePreview}
                    className='ic ic-close'
                  />
                  <div className='image-wrap'>
                    <img
                      src={previewImageUrl}
                      alt=''
                      style={{ transform: `rotate(${previewImgRotate}deg)` }}
                    />
                  </div>
                  <div className='image-preview-operation'>
                    <Icon
                      type='rotate-right'
                      onClick={this.handlePreviewRight}
                      className='ic ic-rotate shadow'
                    />
                    <Icon
                      type='rotate-left'
                      onClick={this.handlePreviewLeft}
                      className='ic ic-rotate shadow'
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className='upload-preview-inner upload-preview-tool'>
              {children || (
                <Icon type='camera' className='upload-preview-addon' />
              )}
              {!!message && (
                <span className='upload-preview-text'>{message}</span>
              )}
            </div>
          )}
        </div>
      )
    }

    return (
      <div
        {...others}
        className={classnames('input-group', 'input-group-upload', className)}
        onClick={this.handleOpenFileDialog}
      >
        <span className='form-control'>
          <Icon type='upload' className='upload-addon' />
          {file || placeholder}
        </span>
        {/* 此处input只能放在中间，否则圆角样式会有问题 */}
        <input
          type='file'
          accept={accept}
          ref={this.fileRef}
          onChange={this.handleFileChange}
        />
        <span className='input-group-btn'>
          <button
            type='button'
            className={classnames('btn', `btn-${btnStyle}`)}
          >
            {btnText}
          </button>
        </span>
      </div>
    )
  }
}

Upload.getValue = ref => {
  if (!ref) return undefined

  return ref.getValue()
}

Upload.setValue = (ref, value) => {
  if (!ref) return

  ref.setValue(value)
}
