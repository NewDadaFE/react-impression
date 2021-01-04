### 特别提醒

- 使用受控 Select 组件时，一定要设置 value 值(可以为 null)，不能为**undefined**

### 示例

- **尺寸**

Select 的尺寸包括：xs，sm，md（默认），lg。<br/>
注意：多选时，只有 md 和 xs 有效！

```js
class SizeExample extends React.Component {
  constructor() {
    super()
    this.state = {
      value: -1,
      data: [
        { value: 1, name: '一' },
        { value: 2, name: '二' },
        { value: 3, name: '三' },
        { value: 4, name: '四' },
        { value: 5, name: '五' },
        { value: 6, name: '六' },
        { value: 7, name: '七' },
      ],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value, text) {
    Notification.info({
      title: 'Select',
      message: `${text} 被选中了！！！`,
    })

    this.setState({ value })
  }
  render() {
    return (
      <div>
        <Notification />
        <Row>
          <Col>
            <Select
              value={this.state.value}
              onChange={this.handleChange}
              size="xs"
              placeholder="最小尺寸"
            >
              {this.state.data.map(item => (
                <SelectOption value={item.value} key={item.value}>
                  {item.name}
                </SelectOption>
              ))}
            </Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Select
              value={this.state.value}
              onChange={this.handleChange}
              size="sm"
              placeholder="小尺寸"
            >
              {this.state.data.map(item => (
                <SelectOption value={item.value} key={item.value}>
                  {item.name}
                </SelectOption>
              ))}
            </Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Select
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="默认尺寸"
            >
              {this.state.data.map(item => (
                <SelectOption value={item.value} key={item.value}>
                  {item.name}
                </SelectOption>
              ))}
            </Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Select
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="大尺寸"
              size="lg"
            >
              {this.state.data.map(item => (
                <SelectOption value={item.value} key={item.value}>
                  {item.name}
                </SelectOption>
              ))}
            </Select>
          </Col>
        </Row>
      </div>
    )
  }
}
;<SizeExample />
```

- **基本用法**

```js
const selectList = [
  { label: '一帆风顺', value: 1 },
  { label: '双喜临门', value: 2 },
  { label: '三羊开泰', value: 3 },
  { label: '四季平安', value: 4 },
  { label: '五谷丰登', value: 5 },
  { label: '六六大顺', value: 6 },
  { label: '七喜来财', value: 7 },
  { label: '八面威风', value: 8 },
  { label: '九天揽月', value: 9 },
  { label: '十全十美', value: 10 },
]
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.state = {
      normalValue: 1,
      clearableValue: 2,
      optionDisabledValue: 4,
      optionAutoValue: 5,
    }
    this.handleNormalChange = this.handleNormalChange.bind(this)
    this.handleClearableChange = this.handleClearableChange.bind(this)
    this.handleOptionDisabledChange = this.handleOptionDisabledChange.bind(this)
    this.handleOptionAutoChange = this.handleOptionAutoChange.bind(this)
  }

  handleNormalChange(value, text) {
    Notification.info({
      title: '普通 Select',
      message: `${text} 被选中了！！！`,
    })
    this.setState({ normalValue: value })
  }

  handleClearableChange(value) {
    this.setState({ clearableValue: value })
  }

  handleOptionDisabledChange(value) {
    this.setState({ optionDisabledValue: value })
  }

  handleOptionAutoChange(value) {
    this.setState({ optionAutoValue: value })
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <label>普通：</label>
          <Select
            value={this.state.normalValue}
            onChange={this.handleNormalChange}
          >
            {selectList.map(item => (
              <SelectOption value={item.value} key={item.value}>
                {item.label}
              </SelectOption>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <label>可清除：</label>
          <Select
            value={this.state.clearableValue}
            onChange={this.handleClearableChange}
            clearable
          >
            {selectList.map(item => (
              <SelectOption value={item.value} key={item.value}>
                {item.label}
              </SelectOption>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <label>组件禁用：</label>
          <Select value={3} disabled>
            {selectList.map(item => (
              <SelectOption value={item.value} key={item.value}>
                {item.label}
              </SelectOption>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <label>选项禁用：</label>
          <Select
            value={this.state.optionDisabledValue}
            onChange={this.handleOptionDisabledChange}
          >
            {selectList.map(item => (
              <SelectOption
                value={item.value}
                key={item.value}
                disabled={item.value === 5}
              >
                {item.label}
              </SelectOption>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <label>弹出层宽度自适应：</label>
          <Select
            value={this.state.optionAutoValue}
            onChange={this.handleOptionAutoChange}
            stretch="auto"
          >
            {selectList.map(item => (
              <SelectOption value={item.value} key={item.value}>
                {item.label}
              </SelectOption>
            ))}
          </Select>
        </FormGroup>
      </Form>
    )
  }
}
;<DefaultExample />
```

- **多选用法**

多选用法下，value 值为数组，已选状态值的改变需要自行实现。

```js
const selectList = [
  { label: '一帆风顺', value: 1 },
  { label: '双喜临门', value: 2 },
  { label: '三羊开泰', value: 3 },
  { label: '四季平安', value: 4 },
  { label: '五谷丰登', value: 5 },
  { label: '六六大顺', value: 6 },
  { label: '七喜来财', value: 7 },
  { label: '八面威风', value: 8 },
  { label: '九天揽月', value: 9 },
  { label: '十全十美', value: 10 },
]
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.state = { selected: [5, 6] }
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(value) {
    this.setState({ selected: [...this.state.selected, value] })
  }

  handleDelete(value) {
    const { selected } = this.state
    this.setState({
      selected: selected.filter(val => val !== value),
    })
  }

  render() {
    return (
      <Select
        value={this.state.selected}
        onChange={this.handleChange}
        onDelete={this.handleDelete}
        multiple
      >
        {selectList.map(item => (
          <SelectOption value={item.value} key={item.value}>
            {item.label}
          </SelectOption>
        ))}
      </Select>
    )
  }
}
;<DefaultExample />
```

- **可搜索**

可搜索功能在单选和多选用法下表现有差异：

1. 若为单选，搜索在选择框中进行；
1. 若为多选，搜索在下拉弹出层中进行。

注意：filterMethod 属性不建议使用！它会在每个选项中去执行一次。

```js
const selectList = [
  { label: '一帆风顺', value: 1 },
  { label: '双喜临门', value: 2 },
  { label: '三羊开泰', value: 3 },
  { label: '四季平安', value: 4 },
  { label: '五谷丰登', value: 5 },
  { label: '六六大顺', value: 6 },
  { label: '七喜来财', value: 7 },
  { label: '八面威风', value: 8 },
  { label: '九天揽月', value: 9 },
  { label: '十全十美', value: 10 },
]
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.state = {
      singleValue: 1,
      selectedValue: [1, 2],
    }
    this.handleSingleChange = this.handleSingleChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleSingleChange(value, text) {
    this.setState({
      singleValue: value,
    })
  }

  handleChange(value) {
    this.setState({
      selectedValue: [...this.state.selectedValue, value],
    })
  }

  handleDelete(value) {
    const { selectedValue } = this.state
    this.setState({
      selectedValue: selectedValue.filter(val => val !== value),
    })
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <label>单选搜索：</label>
          <Select
            value={this.state.singleValue}
            onChange={this.handleSingleChange}
            searchable
          >
            {selectList.map(item => (
              <SelectOption value={item.value} key={item.value}>
                {item.label}
              </SelectOption>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <label>多选搜索：</label>
          <Select
            value={this.state.selectedValue}
            onChange={this.handleChange}
            onDelete={this.handleDelete}
            multiple
            searchable
          >
            {selectList.map(item => (
              <SelectOption value={item.value} key={item.value}>
                {item.label}
              </SelectOption>
            ))}
          </Select>
        </FormGroup>
      </Form>
    )
  }
}
;<DefaultExample />
```

- **选项分组**

通过 SelectOptionGroup 组件可以实现对选项列表的分组效果，但是不支持选择分组的组名。

```js
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.state = { selected: 2 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ selected: value })
  }

  render() {
    return (
      <Select value={this.state.selected} onChange={this.handleChange}>
        <SelectOptionGroup name="上海">
          <SelectOption value={1}>浦电路站</SelectOption>
          <SelectOption value={2}>世纪公园站</SelectOption>
          <SelectOption value={3}>人民广场站</SelectOption>
          <SelectOption value={4}>中山公园站</SelectOption>
        </SelectOptionGroup>
        <SelectOptionGroup name="深圳">
          <SelectOption value={5}>竹子林站</SelectOption>
          <SelectOption value={6}>华强北站</SelectOption>
          <SelectOption value={7}>会展中心站</SelectOption>
          <SelectOption value={8}>科学馆站</SelectOption>
        </SelectOptionGroup>
        <SelectOptionGroup name="南京">
          <SelectOption value={9}>新街口站</SelectOption>
          <SelectOption value={10}>南京南站</SelectOption>
        </SelectOptionGroup>
      </Select>
    )
  }
}
;<DefaultExample />
```

- **远程搜索**

```js
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.state = {
      value: null,
      data: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  genData(str) {
    const arr = []
    const word = 'abcdefghijklmnopqrstuvwxyz'.split('')
    word.forEach(w1 => {
      word.forEach(w2 => {
        for (let i = 0; i < 20; i++) {
          arr.push({
            name: `${w1}${w2}-${i}`,
            value: `${w1}${w2}${i}`,
          })
        }
      })
    })
    return arr.filter(a => a.name.indexOf(str) > -1).slice(0, 20)
  }

  fetchData(str) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setState({
          data: this.genData(str),
        })
        resolve()
      }, 200)
    })
  }

  handleChange(val, text) {
    this.setState({ value: val })
  }

  render() {
    const { value, data } = this.state
    return (
      <div>
        <Select
          ref={ref => (this.selectRef = ref)}
          searchable
          clearable
          value={value}
          remoteMethod={this.fetchData}
          onChange={this.handleChange}
        >
          {data.map(item => (
            <SelectOption key={item.value} value={item.value}>
              {item.name}
            </SelectOption>
          ))}
        </Select>
      </div>
    )
  }
}
;<DefaultExample />
```

### 变更记录

v2.0.0

- 新增 searchable 可搜索属性
- 新增 multiple 多选属性，多选模式下，value 或者 defaultValue 格式为 [1，2]
- 新增 required 是否必选项属性, 状态需要自行控制
- 新增 onDelete 回调方法，返回值为删除项的值，仅在多选模式下生效
- 新增 filterMethod 筛选方法,可支持实时搜索。使用时在 filterMethod 里重置数据源即可
- 新增 clearable 可清除属性，仅在单选模式下生效
- 即将删除对 Select.Option 写法的支持，请使用 SelectOptionGroup/ SelectOption 标签
- 新增 remoteMethod 远程搜索方法，需要同时设置 searchable 属性使用。远程搜索时需返回一个 Promise

v3.0.0

- 废弃 required 是否必选项属性
- 新增 size 属性，支持 xs、sm、md(默认)、lg，多选时，lg/sm 无效果
- 新增 stretch 属性，支持下拉弹出层宽度两个模式：sameWidth(默认)、auto
