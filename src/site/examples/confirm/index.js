import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Theme from './Theme'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const confirmAttr = [
  ['onOkClick', '点击确认回调函数', 'function', ''],
  ['onCancelClick', '点击取消回调函数', 'function', ''],
  ['okText', '确认按钮显示文本', 'string', '确认'],
  ['cancleText', '取消按钮显示文本', 'string', '取消'],
  ['type', '弹框类型，可选值为 info、danger、warning', 'string', 'warning'],
  ['className', '自定义样式', 'string', ''],
]

const confirmAttrTable = transfer(confirmAttr)

const ConfirmExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper title='Confirm' desc='点击元素，弹出确认框。'>
        <Card component={Theme} />
        <MarkdownPreview markdown={confirmAttrTable} name='Confirm API' />
      </Wrapper>
    </div>
  )
}

ConfirmExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default ConfirmExample
