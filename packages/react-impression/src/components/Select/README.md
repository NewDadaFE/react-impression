### Examples

**default**

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
          onChange={this.handleChange}
        >
          <Select.Option value="1">First</Select.Option>
          <Select.Option value="2">Second</Select.Option>
          <Select.Option value="3">Third</Select.Option>
          <Select.Option value="4">Four</Select.Option>
          <Select.Option value="5">Five</Select.Option>
          <Select.Option value="6">Six</Select.Option>
          <Select.Option value="7">Seven</Select.Option>
          <Select.Option value="8">Eight</Select.Option>
          <Select.Option value="9">Nine</Select.Option>
          <Select.Option value="10">Ten</Select.Option>
        </Select>
      </div>
    )
  }
}

;<DefaultExample />
```

**value**

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
          onChange={this.handleChange}
        >
          <Select.Option value={0}>First</Select.Option>
          <Select.Option value={1}>Second</Select.Option>
          <Select.Option value={2}>Third</Select.Option>
        </Select>
      </div>
    )
  }
}

;<ValueExample />
```

**defaultValue**

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
          ref={select => (this.select = select)}
          defaultValue={0}
          onChange={this.handleChange}
        >
          <Select.Option value={0}>First</Select.Option>
          <Select.Option value={1}>Second</Select.Option>
          <Select.Option value={2}>Third</Select.Option>
        </Select>
      </div>
    )
  }
}

;<DefaultValueExample />
```

**disabled**

```js
<Select disabled>
  <Select.Option value="1">First</Select.Option>
  <Select.Option value="2">Second</Select.Option>
  <Select.Option value="3">Third</Select.Option>
</Select>
```

**option disabled**

```js
<Select>
  <Select.Option value="1">First</Select.Option>
  <Select.Option value="2" disabled>
    Second
  </Select.Option>
  <Select.Option value="3">Third</Select.Option>
</Select>
```
