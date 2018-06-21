import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Size from './Size'
import Overflow from './Overflow'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const modalAttr = [
  ['size', '设置模态框大小，可选值为 sm、lg', 'string', ''],
  ['className', '自定义样式', 'string', ''],
  ['isLimitHeight', '是否限制modal最大高度', 'boolean', 'false'],
]

const modalChildrenAttr = [['className', '自定义样式', 'string', '']]

const modalAttrTable = transfer(modalAttr)
const modalChildrenAttrTable = transfer(modalChildrenAttr)

const ModalExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper title='Modal对话框' desc='模态对话框'>
        <Card component={Size} />
        <Card component={Overflow} />
        <MarkdownPreview markdown={modalAttrTable} name='Modal API' />
        <MarkdownPreview
          markdown={modalChildrenAttrTable}
          name='Modal.Header/Modal.Footer/Modal.Body API'
        />
      </Wrapper>
    </div>
  )
}

ModalExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default ModalExample
