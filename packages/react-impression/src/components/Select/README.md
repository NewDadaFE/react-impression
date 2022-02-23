### 示例

**特别提醒**

- 使用受控 Select 组件时，一定要设置 value 值(可以为 null)，不能为**undefined**

**基本用法**

```js
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val, text) {
    Notification.info({
      title: 'Select',
      message: `${text} 被选中了！！！`,
    })

    this.select.setValue(null)
  }

  render() {
    return (
      <div>
        <Notification />
        <Select
          ref={select => (this.select = select)}
          onChange={this.handleChange}
        >
          <SelectOption value={1}>一</SelectOption>
          <SelectOption value={2}>二</SelectOption>
          <SelectOption value={3}>三</SelectOption>
          <SelectOption value={4}>四</SelectOption>
          <SelectOption value={5}>五</SelectOption>
          <SelectOption value={6}>六</SelectOption>
          <SelectOption value={7}>七</SelectOption>
          <SelectOption value={8}>八</SelectOption>
          <SelectOption value={9}>九</SelectOption>
          <SelectOption value={10}>十</SelectOption>
        </Select>
      </div>
    )
  }
}

;<DefaultExample />
```

**可清除**

```js
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val, text) {
    if (val) {
      Notification.info({
        title: 'Select',
        message: `${text} 被选中了！！！`,
      })
    } else {
      Notification.success({
        title: 'Select',
        message: '清空成功',
      })
    }
  }

  render() {
    return (
      <div>
        <Notification />
        <Select
          ref={select => (this.select = select)}
          onChange={this.handleChange}
          clearable
        >
          <SelectOption value={1}>一</SelectOption>
          <SelectOption value={2}>二</SelectOption>
          <SelectOption value={3}>三</SelectOption>
          <SelectOption value={4}>四</SelectOption>
          <SelectOption value={5}>五</SelectOption>
          <SelectOption value={6}>六</SelectOption>
          <SelectOption value={7}>七</SelectOption>
          <SelectOption value={8}>八</SelectOption>
          <SelectOption value={9}>九</SelectOption>
          <SelectOption value={10}>十</SelectOption>
        </Select>
      </div>
    )
  }
}

;<DefaultExample />
```

**指定值（受控组件）**

```js
class ValueExample extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.state = {
      val: null,
    }
  }

  handleChange(val, text) {
    if (val) {
      Notification.info({
        title: 'Select',
        message: `${text} 被选中了！！！`,
      })
    } else {
      Notification.success({
        title: 'Select',
        message: '清空成功',
      })
    }
    this.setState({ val: val })
  }

  render() {
    return (
      <div>
        <Notification />
        <Select
          ref={select => (this.select = select)}
          value={this.state.val}
          clearable
          onChange={this.handleChange}
        >
          <SelectOption value={1}>一</SelectOption>
          <SelectOption value={2}>二</SelectOption>
          <SelectOption value={3}>三</SelectOption>
          <SelectOption value={4}>四</SelectOption>
          <SelectOption value={5}>五</SelectOption>
          <SelectOption value={6}>六</SelectOption>
          <SelectOption value={7}>七</SelectOption>
          <SelectOption value={8}>八</SelectOption>
          <SelectOption value={9}>九</SelectOption>
          <SelectOption value={10}>十</SelectOption>
        </Select>
      </div>
    )
  }
}

;<ValueExample />
```

**默认值（非受控组件）**

```js
class DefaultValueExample extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val, text) {
    Notification.info({
      title: 'Select',
      message: `${text} 被选中了！！！`,
    })
    this.select.setValue(null)
  }

  render() {
    return (
      <div>
        <Notification />
        <Select
          ref={select => (this.select = select)}
          defaultValue={1}
          onChange={this.handleChange}
        >
          <SelectOption value={1}>一</SelectOption>
          <SelectOption value={2}>二</SelectOption>
          <SelectOption value={3}>三</SelectOption>
          <SelectOption value={4}>四</SelectOption>
          <SelectOption value={5}>五</SelectOption>
          <SelectOption value={6}>六</SelectOption>
          <SelectOption value={7}>七</SelectOption>
          <SelectOption value={8}>八</SelectOption>
          <SelectOption value={9}>九</SelectOption>
          <SelectOption value={10}>十</SelectOption>
        </Select>
      </div>
    )
  }
}

;<DefaultValueExample />
```

**必填项**

```js
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      required: true,
    }
  }

  handleChange(val, text) {
    Notification.info({
      title: 'Select',
      message: `${text} 被选中了！！！`,
    })
    this.setState({ required: false })
    // this.select.setValue(null)
  }

  render() {
    const { required } = this.state
    return (
      <div>
        <Notification />
        <Select
          ref={select => (this.select = select)}
          onChange={this.handleChange}
          required={required}
        >
          <SelectOption value={1}>一</SelectOption>
          <SelectOption value={2}>二</SelectOption>
          <SelectOption value={3}>三</SelectOption>
          <SelectOption value={4}>四</SelectOption>
          <SelectOption value={5}>五</SelectOption>
          <SelectOption value={6}>六</SelectOption>
          <SelectOption value={7}>七</SelectOption>
          <SelectOption value={8}>八</SelectOption>
          <SelectOption value={9}>九</SelectOption>
          <SelectOption value={10}>十</SelectOption>
        </Select>
      </div>
    )
  }
}

;<DefaultExample />
```

**禁用状态**

```js
<Select disabled>
  <SelectOption value="1">一</SelectOption>
  <SelectOption value="2">二</SelectOption>
  <SelectOption value="3">三</SelectOption>
</Select>
```

**选项禁用**

```js
<Select>
  <SelectOption value="1">一</SelectOption>
  <SelectOption value="2" disabled>
    二
  </SelectOption>
  <SelectOption value="3">三</SelectOption>
</Select>
```

**基本多选使用**

```js
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(val, text) {
    Notification.info({
      title: 'Select',
      message: `${text} 被选中了！！！`,
    })
    // this.select.setValue(null)
  }
  handleDelete(val) {
    Notification.info({
      title: 'Select',
      message: `删除值为${val}`,
    })
  }
  render() {
    return (
      <div>
        <Notification />
        <Select
          ref={select => (this.select = select)}
          multiple
          onDelete={this.handleDelete}
          onChange={this.handleChange}
        >
          <SelectOption value={1}>一</SelectOption>
          <SelectOption value={2}>二</SelectOption>
          <SelectOption value={3}>三</SelectOption>
          <SelectOption value={4}>四</SelectOption>
          <SelectOption value={5}>五</SelectOption>
          <SelectOption value={6}>六</SelectOption>
          <SelectOption value={7}>七</SelectOption>
          <SelectOption value={8}>八</SelectOption>
          <SelectOption value={9}>九</SelectOption>
          <SelectOption value={10}>十</SelectOption>
        </Select>
      </div>
    )
  }
}

;<DefaultExample />
```

**指定值多选（受控组件）**

```js
class ValueExample extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = {
      val: [1],
    }
  }

  handleChange(val, text, c, d) {
    Notification.info({
      title: 'Select',
      message: `${text} 被选中了！！！`,
    })
    this.setState({ val: [...this.state.val, val] })
  }
  handleDelete(val) {
    const list = this.state.val.filter(item => item !== val)
    this.setState({ val: list })
  }

  render() {
    return (
      <div>
        <Notification />
        <Select
          ref={select => (this.select = select)}
          value={this.state.val}
          multiple
          onChange={this.handleChange}
          onDelete={this.handleDelete}
        >
          <SelectOption value={1}>一</SelectOption>
          <SelectOption value={2}>二</SelectOption>
          <SelectOption value={3}>三</SelectOption>
          <SelectOption value={4}>四</SelectOption>
          <SelectOption value={5}>五</SelectOption>
          <SelectOption value={6}>六</SelectOption>
          <SelectOption value={7}>七</SelectOption>
          <SelectOption value={8}>八</SelectOption>
          <SelectOption value={9}>九</SelectOption>
          <SelectOption value={10}>十</SelectOption>
        </Select>
      </div>
    )
  }
}

;<ValueExample />
```

**默认值多选（非受控组件）**

```js
class DefaultValueExample extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val, text) {
    Notification.info({
      title: 'Select',
      message: `${text} 被选中了！！！`,
    })
  }

  render() {
    return (
      <div>
        <Notification />
        <Select
          ref={select => (this.select = select)}
          defaultValue={[1]}
          searchable
          multiple
          onChange={this.handleChange}
        >
          <SelectOption value={1}>一</SelectOption>
          <SelectOption value={2}>二</SelectOption>
          <SelectOption value={3}>三</SelectOption>
          <SelectOption value={4}>四</SelectOption>
          <SelectOption value={5}>五</SelectOption>
          <SelectOption value={6}>六</SelectOption>
          <SelectOption value={7}>七</SelectOption>
          <SelectOption value={8}>八</SelectOption>
          <SelectOption value={9}>九</SelectOption>
          <SelectOption value={10}>十</SelectOption>
        </Select>
      </div>
    )
  }
}

;<DefaultValueExample />
```

**可搜索**

```js
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      data: [2, 3, 4],
    }
  }

  handleChange(val, text) {
    Notification.info({
      title: 'Select',
      message: `${text} 被选中了！！！`,
    })
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <Notification />
        <Select
          ref={select => (this.select = select)}
          searchable
          onChange={this.handleChange}
        >
          <SelectOption value={1} key={1}>
            1
          </SelectOption>
          {data.map(item => (
            <SelectOption value={item} key={item}>
              {item}
            </SelectOption>
          ))}
        </Select>
      </div>
    )
  }
}

;<DefaultExample />
```

**selectOptionGroup**

```js
class DefaultExample extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(val, text) {
    Notification.info({
      title: 'Select',
      message: `${text} 被选中了！！！`,
    })
  }
  handleDelete(val) {
    console.log(val)
  }

  render() {
    return (
      <div>
        <Notification />
        <Select
          ref={select => (this.select = select)}
          multiple
          defaultValue={[5, 6]}
          searchable
          onChange={this.handleChange}
          onDelete={this.handleDelete}
        >
          <SelectOptionGroup name="上海" disabled>
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
          <SelectOptionGroup name="苏州" disabled />
        </Select>
      </div>
    )
  }
}

;<DefaultExample />
```

**远程搜索**

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

**下拉到底部加载更多**

```js
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 'af2',
      data: [],
      pages: 6,
      pageNum: 0,
    }
    this.handleChange = this.handleChange.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.onScrollBottom = this.onScrollBottom.bind(this)
  }

  get defaultData() {
    const defaultData = []
    const word = 'abcdefghijklmnopqrstuvwxyz'.split('')
    word.forEach(w1 => {
      word.forEach(w2 => {
        for (let i = 0; i < 5; i++) {
          defaultData.push({
            name: `${w1}${w2}`,
            value: `${w1}${w2}${i}`,
          })
        }
      })
    })
    return defaultData.slice(0, 60)
  }

  fetchData(pageNum) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let res = this.defaultData.slice(pageNum * 10, pageNum * 10 + 10)
        console.log('res', res)
        this.setState({
          data: [...this.state.data, ...res],
        })
        resolve()
      }, 200)
    })
  }

  onScrollBottom() {
    const newPageNum = this.state.pageNum + 1
    if (newPageNum < this.state.pages) {
      this.setState({ pageNum: newPageNum })
      this.fetchData(newPageNum)
    }
  }

  componentDidMount() {
    this.fetchData(0)
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
          onChange={this.handleChange}
          onScrollBottom={this.onScrollBottom}
          defaultRenderOptions={{
            name: 'af',
            value: 'af2',
          }}
          optionKey={{
            value: 'value',
            label: 'name',
          }}
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

- 新增 defaultRenderOptions 默认回显，不匹配下拉 options，用于回显当前页不存在的 option
- 新增 onScrollBottom 下拉到底部
- 新增 searchable 可搜索属性
- 新增 multiple 多选属性，多选模式下，value 或者 defaultValue 格式为 [1，2]
- 新增 required 是否必选项属性, 状态需要自行控制
- 新增 onDelete 回调方法，返回值为删除项的值，仅在多选模式下生效
- 新增 filterMethod 筛选方法,可支持实时搜索。使用时在 filterMethod 里重置数据源即可
- 新增 clearable 可清除属性，仅在单选模式下生效
- 即将删除对 Select.Option 写法的支持，请使用 SelectOptionGroup/ SelectOption 标签
- 新增 remoteMethod 远程搜索方法，需要同时设置 searchable 属性使用。远程搜索时需返回一个 Promise
