import React from 'react'
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
]

const alertAttrTable = transfer(alertAttr)

export default ({ routes, params }) => {
  return [
    <Breadcrumb routes={routes} params={params} />,
    <Wrapper title='Alert' desc='反馈信息弹出框，多用于反馈简洁的信息说明'>
      <Card component={Theme} />
      <MarkdownPreview markdown={alertAttrTable} name='Alert API' />
    </Wrapper>,
  ]
}
