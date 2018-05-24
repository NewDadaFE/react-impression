import React from 'react'
import Card from '@/site/components/Card'
import Basic from './Basic'
import Disabled from './Disabled'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'
import styles from './index.scss'

const attrParams = [
  ['name', '名称', 'any', '-'],
  ['value', '返回值', 'any', '-'],
  ['checked', '是否选中', 'boolean', '-'],
  ['defaultChecked', '默认是否选中', 'boolean', '-'],
  ['disable', '是否可以点击', 'boolean', 'false'],
  ['onChange', '状态变更回调函数', 'function', '-'],
  ['className', '自定义样式', 'string', '-'],
]

const apiParams = [['getValue(ref)', '获取radio的value']]

const attrTable = transfer(attrParams)
const apiTable = transfer(apiParams)

export default () => {
  return (
    <div className={styles.button}>
      <Card component={Basic} />
      <Card component={Disabled} />
      <MarkdownPreview markdown={attrTable} name='API' />
      <MarkdownPreview markdown={apiTable} name='方法' />
    </div>
  )
}
