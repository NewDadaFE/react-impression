/* eslint-disable no-undef */
import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon, Input, InputGroup } from 'react-impression'

/**
 * 上传组件.
 */
export default class Upload extends PureComponent {
  // props校验
  static propTypes = {
    className: PropTypes.string,
    btnText: PropTypes.string,
    placeholder: PropTypes.string,
    btnType: PropTypes.string,
    preview: PropTypes.bool,
    message: PropTypes.string,
    src: PropTypes.string,
    children: PropTypes.any,
    onChange: PropTypes.func,
  }
  // 默认props
  static defaultProps = {
    btnText: '浏 览',
    btnType: 'default',
    placeholder: '请选择要上传的附件',
    preview: false,
  }
  // 初始state
  constructor(props, context) {
    super(props, context)

    this.state = {
      file: '',
    }
  }
  getValue() {
    return this.refs.main.files[0]
  }
  setValue(value) {
    this.refs.main.files[0] = value
  }
  /**
   * 打开文件浏览器对话框.
   */
  openFileDialogHandle = () => {
    this.refs.main.click()
  }
  /**
   * 设置文件名.
   */
  fileChangeHandle = event => {
    let { onChange } = this.props

    this.setState({
      file: event.target.value,
    })

    onChange && onChange(event)
  }
  /**
   * 图片预览处理.
   * @param  {[Event]} event [事件]
   */
  imagePreviewHandle = event => {
    let { onChange } = this.props,
      file = event.target.files[0],
      reader = new FileReader()

    if (file) {
      reader.onload = e => {
        this.setState({
          previewImageUrl: e.currentTarget.result,
        })
      }
    }

    reader.readAsDataURL(file)
    onChange && onChange(event)
  }
  // 渲染
  render() {
    let {
        preview,
        message,
        src,
        btnText,
        btnType,
        placeholder,
        className,
        children,
        onChange,
        ...others
      } = this.props,
      { file, previewImageUrl } = this.state

    // 预览模式
    if (preview) {
      const computedImageUrl = previewImageUrl || src

      children &&
        (children = React.cloneElement(children, {
          className: classnames(
            'upload-preview-addon',
            children.props.className
          ),
        }))

      return (
        <div className='upload-preview' onClick={this.openFileDialogHandle}>
          {children || <Icon type='camera' className='upload-preview-addon' />}
          <span className='upload-preview-text'>{message}</span>
          <input type='file' ref='main' onChange={this.imagePreviewHandle} />
          {computedImageUrl && (
            <div
              className='upload-preview-img'
              style={{ backgroundImage: 'url(' + computedImageUrl + ')' }}
            />
          )}
        </div>
      )
    }

    // Input type='file'
    return (
      <InputGroup
        {...others}
        className={classnames('input-group-upload', className)}
      >
        <Input placeholder={placeholder} disabled value={file} />
        <input type='file' ref='main' onChange={this.fileChangeHandle} />
        <InputGroup.Button
          ghost
          theme={btnType}
          onClick={this.openFileDialogHandle}
        >
          {btnText}
        </InputGroup.Button>
      </InputGroup>
    )
  }
}

// getValue
Upload.getValue = ref => {
  if (!ref) return undefined

  return ref.getValue()
}

// setValue
Upload.setValue = (ref, value) => {
  if (!ref) return

  ref.setValue(value)
}
