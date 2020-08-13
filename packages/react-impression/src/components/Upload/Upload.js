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
     * 文件名
     */
    fileName: PropTypes.string,

    /**
     * 是否不可用
     */
    disabled: PropTypes.bool,

    /**
     * 子组件
     */
    children: PropTypes.node,

    /**
     * 回调函数，参数列表：event
     */
    onChange: PropTypes.func.isRequired,

    /**
     * 是否支持多选
     */
    multiple: PropTypes.bool,

    /**
     * 文件信息集合，多个文件时可用，单个文件以object形式，里面必须包含{name:'',url:''}
     */
    files: PropTypes.array,
    /**
     * 删除文件回调函数，参数是被删除的文件file
     */
    onDeleteFile: PropTypes.func,
  }

  static defaultProps = {
    btnText: '浏览',
    btnStyle: 'default',
    placeholder: '请选择要上传的附件',
    preview: false,
    multiple: false,
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
    if (!this.props.disabled) {
      this.fileInput.click()
    }
  }

  /**
   * 删除文件
   */

  removeFile = (file, index) => {
    const { onDeleteFile } = this.props
    onDeleteFile && onDeleteFile(file, index)
  }

  /**
   * 设置文件名
   */
  handleFileChange = event => {
    const { onChange, multiple, preview } = this.props
    if (!multiple) {
      if (event.target && event.target.files && event.target.files[0]) {
        this.setState({
          file: event.target.files[0].name,
        })
      }
    }
    onChange(event)
  }

  /**
   * 图片预览处理
   */
  handleImagePreview = event => {
    const { onChange } = this.props
    onChange(event)
  }

  handleRemoveImg = (item, index) => {
    event.stopPropagation()
    const { onChange, multiple, onDeleteFile } = this.props
    if (multiple) {
      onDeleteFile && onDeleteFile(item, index)
    } else {
      this.fileInput.value = ''
      this.setState({
        previewImageUrl: '',
      })
      onChange(item)
    }
  }

  /**
   * 点击查看大图
   */
  handlePreview = event => {
    event.stopPropagation()

    this.handleTogglePreview()
  }

  /**
   * 多图点击查看大图
   */
  handleMulPreview = item => {
    this.setState({
      previewImageUrl: item.url,
    })
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

  handleFileClick = file => {
    if (file.url !== '') {
      window.open(file.url)
    }
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
      fileName,
      disabled,
      multiple,
      files,
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

      if (multiple) {
        return (
          <div>
            {files.map((item, index) => {
              return (
                <div className='upload-preview-mul' key={index}>
                  <img src={item.url} />
                  <div className='upload-preview-remove'>
                    <Icon
                      type='eye'
                      onClick={() => {
                        this.handleMulPreview(item)
                      }}
                      className='action-icon'
                    />
                    {!disabled && (
                      <Icon
                        type='trash'
                        onClick={() => {
                          this.handleRemoveImg(item, index)
                        }}
                        className='action-icon'
                      />
                    )}
                  </div>
                </div>
              )
            })}
            <div
              className='upload-preview-mul'
              onClick={this.handleOpenFileDialog}
            >
              <input
                type='file'
                accept='image/*'
                ref={this.fileRef}
                onChange={this.handleImagePreview}
              />
              <div
                className={classnames(
                  'upload-preview-inner upload-preview-tool',
                  { disabled }
                )}
              >
                {children}
                {!!message && (
                  <span className='upload-preview-text'>{message}</span>
                )}
              </div>
            </div>
            {showBigPreview && (
              <div className='image-preview' onClick={this.handleTogglePreview}>
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
        )
      } else {
        return (
          <div className='upload-preview' onClick={this.handleOpenFileDialog}>
            <input
              type='file'
              accept={accept}
              ref={this.fileRef}
              onChange={this.handleImagePreview}
            />
            {previewImageUrl ? (
              <div
                className={classnames(
                  'upload-preview-inner upload-preview-img',
                  {
                    disabled,
                  }
                )}
              >
                <img src={previewImageUrl} />
                <div className='upload-preview-remove'>
                  <Icon
                    type='eye'
                    onClick={this.handlePreview}
                    className='action-icon'
                  />
                  {!disabled && (
                    <Icon
                      type='trash'
                      onClick={this.handleRemoveImg}
                      className='action-icon'
                    />
                  )}
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
              <div
                className={classnames(
                  'upload-preview-inner upload-preview-tool',
                  { disabled }
                )}
              >
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
    }

    return (
      <div {...others}>
        <div
          {...others}
          className={classnames(
            'input-group',
            'input-group-upload',
            { disabled },
            className
          )}
          onClick={this.handleOpenFileDialog}
        >
          <span className='form-control'>
            <Icon type='upload' className='upload-addon' />
            {fileName === undefined ? file || placeholder : fileName}
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
              disabled={disabled}
              className={classnames('btn', `btn-${btnStyle}`)}
            >
              {btnText}
            </button>
          </span>
        </div>
        <div>
          {multiple && (
            <div>
              <ul
                className={classnames(
                  { 'upload-ul-outer': files.length > 5 },
                  'upload-ul'
                )}
              >
                {files.map((item, index) => {
                  return (
                    <li key={index} className='upload-li'>
                      <span
                        title={item.name}
                        onClick={() => {
                          this.handleFileClick(item)
                        }}
                        className={classnames({
                          'upload-li-span': item.url !== '',
                        })}
                      >
                        {item.name}
                      </span>
                      {!disabled && (
                        <Icon
                          type='times'
                          onClick={() => {
                            this.removeFile(item, index)
                          }}
                          className='upload-mul-remove'
                        />
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
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
