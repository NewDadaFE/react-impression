import React from 'react'
import Card from '@/site/components/Card'
import Simple from './Simple'
import Border from './Border'
import HeaderFooter from './HeaderFooter'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'
import styles from './index.scss'

const cardAttr = [
  ['block', '是否显示为快级元素', 'boolean', 'false'],
  ['className', '自定义样式', 'string', '-'],
]

const otherTypeAttr = [['className', '自定义样式', 'string', '-']]

const cardAttrTable = transfer(cardAttr)
const otherTypeTable = transfer(otherTypeAttr)

export default () => {
  return (
    <Wrapper title='Card卡片' desc='通用卡片容器'>
      <Card component={Simple} />
      <Card component={Border} cardClass={styles['gray-bg']} />
      <Card component={HeaderFooter} />
      <MarkdownPreview markdown={cardAttrTable} name='Card API' />
      <MarkdownPreview
        markdown={otherTypeTable}
        name='Card.Header/Card.Footer/Card.Block API'
      />
    </Wrapper>
  )
}
