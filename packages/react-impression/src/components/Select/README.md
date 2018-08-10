### 示例

**基本使用**

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
    this.select.focus()
  }

  render() {
    return (
      <div>
        <Notification />
        <Select
          ref={select => (this.select = select)}
          searchable
          onChange={this.handleChange}
        >
          <Select.Option value="1">一</Select.Option>
          <Select.Option value="2">二</Select.Option>
          <Select.Option value="3">三</Select.Option>
          <Select.Option value="4">四</Select.Option>
          <Select.Option value="5">五</Select.Option>
          <Select.Option value="6">六</Select.Option>
          <Select.Option value="7">七</Select.Option>
          <Select.Option value="8">八</Select.Option>
          <Select.Option value="9">九</Select.Option>
          <Select.Option value="10">十</Select.Option>
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
  }

  handleChange(val, text) {
    Notification.info({
      title: 'Select',
      message: `${text} 被选中了！！！`,
    })
    this.select.setValue(null)
    this.select.focus()
  }

  render() {
    return (
      <div>
        <Notification />
        <Select
          ref={select => (this.select = select)}
          value={0}
          searchable
          onChange={this.handleChange}
        >
          <Select.Option value={0}>一</Select.Option>
          <Select.Option value={1}>二</Select.Option>
          <Select.Option value={2}>三</Select.Option>
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
    this.select.focus()
  }

  render() {
    return (
      <div>
        <Notification />
        <Select
          searchable
          ref={select => (this.select = select)}
          defaultValue={0}
          onChange={this.handleChange}
        >
          <Select.Option value={0}>一</Select.Option>
          <Select.Option value={1}>二</Select.Option>
          <Select.Option value={2}>三</Select.Option>
        </Select>
      </div>
    )
  }
}

;<DefaultValueExample />
```

**禁用状态**

```js
<Select disabled>
  <Select.Option value="1">一</Select.Option>
  <Select.Option value="2">二</Select.Option>
  <Select.Option value="3">三</Select.Option>
</Select>
```

**选项禁用**

```js
<Select>
  <Select.Option value="1">一</Select.Option>
  <Select.Option value="2" disabled>
    二
  </Select.Option>
  <Select.Option value="3">三</Select.Option>
</Select>
```

**可搜索**

```js
<Select searchable>
  <SelectOption value="1">一</SelectOption>
  <SelectOption value="2">二</SelectOption>
  <SelectOption value="3">三</SelectOption>
</Select>
```

### 变更记录

v2.0.0

- 新增 searchable 属性
