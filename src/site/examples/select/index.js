import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Basic from './Basic'
import Filterable from './Filterable'
import Clearable from './Clearable'
import OptionGroup from './OptionGroup'
import Disabled from './Disabled'
import Cascader from './Cascader'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const selectAttrParams = [
  ['value', '值', 'any', ''],
  ['defaultValue', 'input默认值', 'any', '-'],
  ['size', '尺寸，sm, default, lg', 'string', 'default'],
  ['disabled', '是否不可用', 'boolean', 'false'],
  ['style', '行内样式', 'object', ''],
  ['placeholder', '占位文字', 'string', '请选择'],
  ['onChange', '状态变更回调函数', 'function', ''],
  ['className', '自定义样式', 'string', ''],
  ['clearable', '单选时是否可以清空选项', 'boolean', 'false'],
  ['filterable', '是否可搜索筛选', 'boolean', 'false'],
  ['filterMethod', '自定义筛选方法', 'function', '-'],
]

const selectEventsParams = [
  [
    'onChange',
    '选中值发生变化时触发,回调参数为目前选中值，存在label则第二个参数为label',
  ],
  ['onVisibleChange', '下拉框显示改变时触发'],
  ['onClear', '可清空状态下用户点击清空按钮时触'],
]

const optionGroupParams = [
  ['label', '分组的标签', 'string', '-'],
  ['disabled', '是否将该分组下所有选项置为禁用', 'boolean', 'false'],
]

const optionParams = [
  ['label', '选项的标签，不设置则为value值', 'string/number', '-'],
  ['disabled', '选项置为禁用', 'boolean', 'false'],
  ['value', '选项值', 'any', '-'],
]

const selectAttrTable = transfer(selectAttrParams)
const selectEventsTable = transfer(selectEventsParams)

const optionGroupAttrTable = transfer(optionGroupParams)
const optionAttrTable = transfer(optionParams)

const SelectExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper
        title='Select 选择器'
        desc='当选项过多时，使用下拉菜单展示并选择内容'
      >
        <Card component={Basic} />
        <Card component={Filterable} />
        <Card component={Clearable} />
        <Card component={Disabled} />
        <Card component={OptionGroup} />
        <Card component={Cascader} />
        <MarkdownPreview markdown={selectAttrTable} name='Select API' />
        <MarkdownPreview
          markdown={selectEventsTable}
          name='Select Events API'
        />
        <MarkdownPreview
          markdown={optionGroupAttrTable}
          name='Select.OptionGroup API'
        />
        <MarkdownPreview markdown={optionAttrTable} name='Select.Option API' />
      </Wrapper>
    </div>
  )
}

SelectExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default SelectExample
