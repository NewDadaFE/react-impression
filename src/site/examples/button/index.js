import React from 'react'
import Card from '@/site/components/Card'
import Type from './Type'
import Size from './Size'
import Ghost from './Ghost'
import Disabled from './Disabled'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'
import styles from './index.scss'

const attrParams = [
  [
    'theme',
    '设置按钮的样式，可选值为 primary、default、success、warning、danger',
    'string',
    'primary',
  ],
  ['ghost', '幽灵属性，使按钮背景透明', 'boolean', 'false'],
  [
    'size',
    '设置按钮大小，可选值为 sm、lg、md 若不设置 size，则尺寸为中',
    'string',
    'md',
  ],
  [
    'href',
    '点击跳转的地址，指定此属性 button 的行为和a标签一致',
    'string',
    '-',
  ],
  ['disabled', '按钮失效状态', 'boolen', 'false'],
  ['onClick', 'click 事件的 handler', 'function', '-'],
]

const attrTable = transfer(attrParams)

export default () => {
  return (
    <div className={styles.button}>
      <Card component={Type} cardClass={styles['button-card-padding']} />
      <Card component={Ghost} cardClass={styles.ghost} />
      <Card component={Size} cardClass={styles['button-card-padding']} />
      <Card component={Disabled} />
      <MarkdownPreview markdown={attrTable} />
    </div>
  )
}
