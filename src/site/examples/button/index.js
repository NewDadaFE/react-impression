import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Type from './Type'
import Size from './Size'
import Ghost from './Ghost'
import Disabled from './Disabled'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'
import styles from './index.scss'

const attrParams = [
  [
    'theme',
    '设置按钮的样式，可选值为 primary、default、danger',
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

const ButtonExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper
        title='Button按钮'
        desc='按钮用于开始一个点击反馈操作'
        className={styles.button}
      >
        <Card component={Type} cardClass={styles['button-card-padding']} />
        <Card component={Ghost} cardClass={styles.ghost} />
        <Card component={Size} cardClass={styles['button-card-padding']} />
        <Card component={Disabled} />
        <MarkdownPreview markdown={attrTable} name='API' />
      </Wrapper>
    </div>
  )
}

ButtonExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default ButtonExample
