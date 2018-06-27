import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Basic from './Basic'
import Preview from './Preview'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const uploadAttrParams = [
  ['btnText', '按钮文字', 'string', '浏览'],
  ['placeholder', '占位文字', 'string', '请选择要上传的附件'],
  ['btnType', '按钮样式', 'default、primary', 'default'],
  ['preview', '是否可预览', 'boolean', 'false'],
  ['message', '预览模式下提示信息', 'string', ''],
  ['src', '预览模式下文件路径', 'string', ''],
  ['className', '样式', 'string', ''],
]

const uploadAttrTable = transfer(uploadAttrParams)

const UploadExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper title='Upload上传' desc='文件选择上传控件'>
        <Card component={Basic} />
        <Card component={Preview} />
        <MarkdownPreview markdown={uploadAttrTable} name='Upload API' />
      </Wrapper>
    </div>
  )
}

UploadExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default UploadExample
