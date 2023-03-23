Cascader 级联组件

**_注意 ⚠️：弹出层支持自定义最多层级，默认最多展示 4 级， 目前只支持受控用法_**

**基本用法**

```js
const options = [
  {
    value: 1,
    label: '浙江',
    children: [
      {
        value: 11,
        label: '杭州',
        children: [
          {
            value: 111,
            label: '西湖',
          },
        ],
      },
      {
        value: 12,
        label: '台州',
        children: [
          {
            value: 121,
            label: '仙居',
          },
        ],
      },
    ],
  },
  {
    value: 2,
    label: '江苏',
    children: [
      {
        value: 21,
        label: '南京',
        children: [
          {
            value: 211,
            label: '中华门',
          },
        ],
      },
      {
        value: 22,
        label: '无锡',
        children: [
          {
            value: 221,
            label: '锡山区',
          },
          {
            value: 222,
            label: '惠山区',
          },
        ],
      },
    ],
  },
]
initialState = {
  normalValue: [],
  defaultValue: [1, 11, 111],
  hoverValue: [],
  changeOnSelectValue: [],
  clearableValue: [1, 11, 111],
}
const handleNormalChange = (value, path) => {
  console.log(path)
  setState({ normalValue: value })
}
const handleHoverChange = value => {
  setState({ hoverValue: value })
}
const OnSelectValueChange = value => {
  setState({ changeOnSelectValue: value })
}
const handleDefaultValueChange = value => {
  setState({ defaultValue: value })
}
const handleClearableValueChange = value => {
  setState({ clearableValue: value })
}
;<Form>
  <FormGroup>
    <label>基本用法：</label>
    <Cascader
      options={options}
      value={state.normalValue}
      onChange={handleNormalChange}
    />
  </FormGroup>
  <FormGroup>
    <label>默认值：</label>
    <Cascader
      options={options}
      value={state.defaultValue}
      onChange={handleDefaultValueChange}
    />
  </FormGroup>
  <FormGroup>
    <label>hover显示下级：</label>
    <Cascader
      options={options}
      value={state.hoverValue}
      expandTrigger="hover"
      onChange={handleHoverChange}
    />
  </FormGroup>
  <FormGroup>
    <label>父级可选：</label>
    <Cascader
      options={options}
      value={state.changeOnSelectValue}
      onChange={OnSelectValueChange}
      changeOnSelect
    />
  </FormGroup>
  <FormGroup>
    <label>禁用状态：</label>
    <Cascader
      disabled
      size="md"
      options={options}
      value={state.normalValue}
      expandTrigger="click"
      onChange={handleNormalChange}
    />
  </FormGroup>
  <FormGroup>
    <label>可清除：</label>
    <Cascader
      options={options}
      value={state.clearableValue}
      expandTrigger="click"
      onChange={handleClearableValueChange}
      clearable
    />
  </FormGroup>
</Form>
```

**选项禁用**

```js
const options = [
  {
    value: '浙江',
    label: '浙江',
    children: [
      {
        value: '杭州',
        label: '杭州',
        children: [
          {
            value: '西湖',
            label: '西湖',
          },
        ],
      },
      {
        value: '台州',
        label: '台州',
        children: [
          {
            value: '仙居',
            label: '仙居',
          },
        ],
      },
    ],
  },
  {
    value: '江苏',
    label: '江苏',
    disabled: true,
    children: [
      {
        value: '南京',
        label: '南京',
        children: [
          {
            value: '中华门',
            label: '中华门',
          },
        ],
      },
      {
        value: '无锡',
        label: '无锡',
        children: [
          {
            value: '锡山区',
            label: '锡山区',
          },
          {
            value: '惠山区',
            label: '惠山区',
          },
        ],
      },
    ],
  },
]
initialState = {
  value: ['浙江', '杭州', '西湖'],
}
const handleChange = value => {
  setState({ value })
}
;<Cascader
  size="md"
  options={options}
  value={state.value}
  expandTrigger="click"
  onChange={handleChange}
/>
```

**不同尺寸**

```js
const options = [
  {
    value: '浙江',
    label: '浙江',
    children: [
      {
        value: '杭州',
        label: '杭州',
        children: [
          {
            value: '西湖',
            label: '西湖',
          },
        ],
      },
      {
        value: '台州',
        label: '台州',
        children: [
          {
            value: '仙居',
            label: '仙居',
          },
        ],
      },
    ],
  },
  {
    value: '江苏',
    label: '江苏',
    children: [
      {
        value: '南京',
        label: '南京',
        children: [
          {
            value: '中华门',
            label: '中华门',
          },
        ],
      },
      {
        value: '无锡',
        label: '无锡',
        children: [
          {
            value: '锡山区',
            label: '锡山区',
          },
          {
            value: '惠山区',
            label: '惠山区',
          },
        ],
      },
    ],
  },
]
initialState = {
  xsSizeValue: [],
  smSizeValue: [],
  mdSizeValue: [],
  largeSizeValue: [],
}
const handleXsSizeValueChange = value => {
  setState({ xsSizeValue: value })
}
const handleSmSizeValueChange = value => {
  setState({ smSizeValue: value })
}
const handleMdSizeValueChange = value => {
  setState({ mdSizeValue: value })
}
const handleLgSizeValueChange = value => {
  setState({ largeSizeValue: value })
}
;<Form>
  <FormGroup>
    <label>xs：</label>
    <Cascader
      size="xs"
      options={options}
      value={state.xsSizeValue}
      onChange={handleXsSizeValueChange}
      clearable
    />
  </FormGroup>
  <FormGroup>
    <label>sm：</label>
    <Cascader
      size="sm"
      options={options}
      value={state.smSizeValue}
      onChange={handleSmSizeValueChange}
      clearable
    />
  </FormGroup>
  <FormGroup>
    <label>md：</label>
    <Cascader
      size="md"
      options={options}
      value={state.mdSizeValue}
      onChange={handleMdSizeValueChange}
      clearable
    />
  </FormGroup>
  <FormGroup>
    <label>lg：</label>
    <Cascader
      size="lg"
      options={options}
      value={state.largeSizeValue}
      onChange={handleLgSizeValueChange}
      clearable
    />
  </FormGroup>
</Form>
```

**可搜索**

```js
const options = [
  {
    value: '浙江',
    label: '浙江',
    children: [
      {
        value: '杭州',
        label: '杭州',
        children: [
          {
            value: '西湖',
            label: '西湖',
          },
        ],
      },
      {
        value: '台州',
        label: '台州',
        children: [
          {
            value: '仙居',
            label: '仙居',
          },
        ],
      },
    ],
  },
  {
    value: '江苏',
    label: '江苏',
    children: [
      {
        value: '南京',
        label: '南京',
        children: [
          {
            value: '中华门',
            label: '中华门',
          },
        ],
      },
      {
        value: '无锡',
        label: '无锡',
        children: [
          {
            value: '锡山区',
            label: '锡山区',
          },
          {
            value: '惠山区',
            label: '惠山区',
          },
        ],
      },
    ],
  },
]
initialState = {
  value: ['浙江', '杭州', '西湖'],
}
const handleValueChange = value => {
  setState({ value: value })
}
;<Form>
  <FormGroup>
    <label>可搜索：</label>
    <Cascader
      options={options}
      value={state.value}
      onChange={handleValueChange}
      searchable
    />
  </FormGroup>
</Form>
```

**动态加载选项**

**_使用动态加载时，expendTrigger 建议使用默认值'click'_**

```js
const options = [
  {
    value: '浙江',
    label: '浙江',
    isLeaf: false,
  },
  {
    value: '江苏',
    label: '江苏',
    isLeaf: false,
  },
]
initialState = {
  value: [
    '浙江',
    '浙江 Dynamic 1',
    '浙江 Dynamic 1 Dynamic 1',
    '浙江 Dynamic 1 Dynamic 1 Dynamic 1',
  ],
  options: options,
}
const handleValueChange = value => {
  setState({ value: value })
}
async function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms))
}
async function loadData(selectedOptions) {
  const targetOption = selectedOptions[selectedOptions.length - 1]
  // 模拟异步请求
  await sleep(1000)
  return [
    {
      label: `${targetOption.label} Dynamic 1`,
      value: `${targetOption.label} Dynamic 1`,
      isLeaf: false,
    },
    {
      label: `${targetOption.label} Dynamic 2`,
      value: `${targetOption.label} Dynamic 2`,
      isLeaf: false,
    },
  ]
}
;<Form>
  <FormGroup>
    <label>动态加载选项：</label>
    <Cascader
      expandTrigger="click"
      options={state.options}
      value={state.value}
      onChange={handleValueChange}
      loadData={loadData}
      // changeOnSelect
      onOptions={value => setState({ options: value })}
    />
  </FormGroup>
</Form>
```
