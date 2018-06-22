import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Theme from './Theme'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const alertAttr = [
  [
    'type',
    'alert的主题，包括none、success、error、warning、info',
    'string',
    'none',
  ],
  ['keyboard', '是否可以通过esc来关闭', 'boolean', 'true'],
]

const alertAttrTable = transfer(alertAttr)

const alertExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper title='Alert' desc='反馈信息弹出框，多用于反馈简洁的信息说明'>
        <Card component={Theme} />
        <MarkdownPreview markdown={alertAttrTable} name='Alert API' />
      </Wrapper>
    </div>
  )
}

alertExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default alertExample
