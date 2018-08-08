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
      message: `${text} 被选中了！！！`
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
          <SelectOption value="1">First</SelectOption>
          <SelectOption value="2">Second</SelectOption>
          <SelectOption value="3">Third</SelectOption>
          <SelectOption value="4">Four</SelectOption>
          <SelectOption value="5">Five</SelectOption>
          <SelectOption value="6">Six</SelectOption>
          <SelectOption value="7">Seven</SelectOption>
          <SelectOption value="8">Eight</SelectOption>
          <SelectOption value="9">Nine</SelectOption>
          <SelectOption value="10">Ten</SelectOption>
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
      message: `${text} 被选中了！！！`
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
          <SelectOption value={0}>First</SelectOption>
          <SelectOption value={1}>Second</SelectOption>
          <SelectOption value={2}>Third</SelectOption>
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
      message: `${text} 被选中了！！！`
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
          <SelectOption value={0}>First</SelectOption>
          <SelectOption value={1}>Second</SelectOption>
          <SelectOption value={2}>Third</SelectOption>
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
  <SelectOption value="1">First</SelectOption>
  <SelectOption value="2">Second</SelectOption>
  <SelectOption value="3">Third</SelectOption>
</Select>
```

**option disabled**

```js
<Select>
  <SelectOption value="1">First</SelectOption>
  <SelectOption value="2" disabled>
    Second
  </SelectOption>
  <SelectOption value="3">Third</SelectOption>
</Select>
```

**searchable**

```js
<Select searchable>
  <SelectOption value="1">First</SelectOption>
  <SelectOption value="2">Second</SelectOption>
  <SelectOption value="3">Third</SelectOption>
</Select>
```
