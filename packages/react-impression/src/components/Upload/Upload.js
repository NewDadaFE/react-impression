import classnames from 'classnames'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Ico from '../Ico'
import Image from '../Image'
import ImagePreview from '../ImagePreview'

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
     * 删除文件回调函数，参数是被删除的文件file,只在multiple为true情况下可使用
     */
    onDeleteFile: PropTypes.func,
  }

  static defaultProps = {
    btnText: '浏览',
    btnStyle: 'default',
    placeholder: '请选择附件',
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
      startPosition: 0,
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

  removeFile = (event, file, index) => {
    const { onDeleteFile, onChange } = this.props
    onDeleteFile && onDeleteFile(file, index)
    onChange(event)
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

  handleRemoveImg = (event, item, index) => {
    event.stopPropagation()
    const { onChange, multiple, onDeleteFile } = this.props
    if (multiple) {
      onDeleteFile && onDeleteFile(item, index)
      onChange(event)
    } else {
      this.fileInput.value = ''
      this.setState({
        previewImageUrl: '',
      })
      onChange(event)
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
  handleMulPreview = (item, index) => {
    this.setState({
      previewImageUrl: item.url,
      startPosition: index,
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
      files = [],
      ...others
    } = this.props

    delete others.onChange
    delete others.onDeleteFile

    const { file, previewImageUrl, showBigPreview, startPosition } = this.state
    let { children } = this.props

    // 图片模式
    if (preview) {
      // 自定义图片上传的图标
      if (children) {
        children = React.cloneElement(children, {
          className: classnames(
            'upload-preview-addon',
            children.props.className
          ),
        })
      }
      const imageUploadInner = (
        <div
          className={classnames('upload-preview-inner upload-preview-tool', {
            disabled,
          })}
        >
          {children || <Ico type='camera' className='upload-preview-addon' />}
          {!!message && <span className='upload-preview-text'>{message}</span>}
        </div>
      )
      // 多张图片上传
      if (multiple) {
        return (
          <div
            className={classnames('dada-upload-preview-multiple', className)}
            {...others}
          >
            {files.map((item, index) => {
              return (
                <div className='upload-preview' key={index}>
                  <div
                    className={classnames(
                      'upload-preview-inner upload-preview-img',
                      { disabled }
                    )}
                  >
                    <Image
                      src={item.url}
                      mode='aspectFill'
                      className='dada-upload-preview-img'
                    />
                    <div className='dada-upload-preview-mask'>
                      <Ico
                        type='eye-o'
                        onClick={() => this.handleMulPreview(item, index)}
                        className='dada-upload-preview-action'
                      />
                      {!disabled && (
                        <Ico
                          type='trash-o'
                          onClick={e => this.handleRemoveImg(e, item, index)}
                          className='dada-upload-preview-action'
                        />
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
            <div className='upload-preview' onClick={this.handleOpenFileDialog}>
              <input
                type='file'
                accept='image/*'
                ref={this.fileRef}
                onChange={this.handleImagePreview}
                multiple
              />
              {imageUploadInner}
            </div>
            {showBigPreview && (
              <ImagePreview
                files={files}
                startPosition={startPosition}
                onClose={() => {
                  this.setState({
                    showBigPreview: false,
                    startPosition: 0,
                  })
                }}
              />
            )}
          </div>
        )
      }
      // 单张图片上传
      return (
        <Fragment>
          <div
            className={classnames('upload-preview', className)}
            onClick={this.handleOpenFileDialog}
            {...others}
          >
            <input
              type='file'
              accept={accept || 'image/*'}
              ref={this.fileRef}
              onChange={this.handleImagePreview}
            />
            {previewImageUrl ? (
              <>
                <div
                  className={classnames(
                    'upload-preview-inner upload-preview-img',
                    { disabled }
                  )}
                >
                  <Image
                    src={previewImageUrl}
                    mode='aspectFill'
                    className='dada-upload-preview-img'
                  />
                  <div className='dada-upload-preview-mask'>
                    <Ico
                      type='eye-o'
                      onClick={this.handlePreview}
                      className='dada-upload-preview-action'
                    />
                    {!disabled && (
                      <Ico
                        type='trash-o'
                        onClick={this.handleRemoveImg}
                        className='dada-upload-preview-action'
                      />
                    )}
                  </div>
                </div>
              </>
            ) : (
              imageUploadInner
            )}
          </div>
          {showBigPreview && (
            <ImagePreview
              files={[{ name: previewImageUrl, url: previewImageUrl }]}
              startPosition={startPosition}
              onClose={() => {
                this.setState({
                  showBigPreview: false,
                  startPosition: 0,
                })
              }}
            />
          )}
        </Fragment>
      )
    }

    return (
      <div className={className}>
        <div
          className={classnames('input-group', 'input-group-upload', {
            disabled,
          })}
          {...others}
        >
          <div className='dada-input-group-input'>
            <Ico
              type='upload'
              className='dada-input-addon-before dada-input-addon-after'
            />
            <span
              className={classnames('text-truncate', {
                'dada-upload-placeholder': fileName === undefined && !file,
              })}
            >
              {fileName === undefined ? file || placeholder : fileName}
            </span>
            <input
              className='input-field'
              type='file'
              accept={accept}
              ref={this.fileRef}
              onChange={this.handleFileChange}
              multiple={multiple}
              disabled={disabled}
            />
            <div className='dada-input-border' />
          </div>
          <div className='input-group-btn'>
            <button
              type='button'
              disabled={disabled}
              className={classnames('btn', `btn-${btnStyle}`)}
              onClick={this.handleOpenFileDialog}
            >
              {btnText}
            </button>
          </div>
        </div>
        {multiple && files.length > 0 && (
          <div className='dada-upload-ul-outer'>
            <ul className='dada-upload-ul'>
              {files.map((item, index) => {
                return (
                  <li key={index} className='dada-upload-li'>
                    <div className='dada-upload-li-text'>
                      <Ico type='file-o' className='dada-upload-li-ico' />
                      <span onClick={() => this.handleFileClick(item)}>
                        {item.name}
                      </span>
                    </div>
                    {!disabled && (
                      <Ico
                        type='trash-o'
                        onClick={e => {
                          this.removeFile(e, item, index)
                        }}
                        className='dada-upload-li-remove'
                      />
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
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
