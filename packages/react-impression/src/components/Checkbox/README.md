### Example

**basic**

```js
<Form type="inline">
  <FormGroup>
    <label>defaultChecked:</label>
    <Checkbox ref="checkbox" defaultChecked>
      remember me
    </Checkbox>
  </FormGroup>
</Form>
```

**disabled**

```js
<Form type="inline">
  <FormGroup>
    <label>disabled:</label>
    <Checkbox disabled>remember me</Checkbox>
  </FormGroup>
  <FormGroup>
      <label>disabled-checked:</label>
      <Checkbox disabled defaultChecked>remember me</Checkbox>
    </FormGroup>
</Form>
```

**indeterminate**

```js
const options = ['number1', 'number2', 'number3', 'number4']
const optionsCheckedDefault = ['number1', 'number3']

class Indeterminate extends React.Component {
  constructor() {
    super()
    this.state = {
      checkedList: optionsCheckedDefault,
      indeterminate: true,
      checkAll: false,
    }
    this.onChange = this.onChange.bind(this)
    this.onCheckAllChange = this.onCheckAllChange.bind(this)
  }

  onChange(checkedList) {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < options.length,
      checkAll: checkedList.length === options.length,
    })
  }

  onCheckAllChange(event) {
    const { target } = event

    this.setState({
      checkedList: target.checked ? options : [],
      indeterminate: false,
      checkAll: target.checked,
    })
  }

  render() {
    return (
      <div>
        <div className='offset-b-lg'>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            全选
          </Checkbox>
        </div>
        <CheckboxGroup value={this.state.checkedList} onChange={this.onChange}>
          {options.map((each, index) => {
            return (
              <Checkbox value={each} key={index}>
                {each}
              </Checkbox>
            )
          })}
        </CheckboxGroup>
      </div>
    )
  }
};
<Indeterminate />
```

### 变更记录

v2.0.0

* 新增 indeterminate 参数
