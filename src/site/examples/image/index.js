import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Fluid from './Fluid'
import Shape from './Shape'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const imageAttr = [
  ['fluid', '图片是否自适应', 'bool', 'false'],
  ['rounded', '图片是否圆角', 'bool', 'false'],
  ['circle', '图片是否为圆形', 'bool', 'false'],
  ['thumbnail', '图片是否为缩略图', 'bool', 'false'],
]

const iamgeAttrTable = transfer(imageAttr)

const ImageExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper title='Image组件' desc='放置图片的展示组件'>
        <Card component={Fluid} />
        <Card component={Shape} />
        <MarkdownPreview markdown={iamgeAttrTable} name='Image API' />
      </Wrapper>
    </div>
  )
}

ImageExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default ImageExample
