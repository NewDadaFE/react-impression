### 示例

**基本用法**

```js
<Form type="inline">
  <FormGroup>
    <label>默认选中:</label>
    <Checkbox ref="checkbox" defaultChecked>
      记住我
    </Checkbox>
  </FormGroup>
</Form>
```

**禁用状态**

```js
<Form type="inline">
  <FormGroup>
    <label>不可用状态:</label>
    <Checkbox disabled>记住我</Checkbox>
  </FormGroup>
  <FormGroup>
    <label>不可用的选中状态:</label>
    <Checkbox disabled defaultChecked>
      记住我
    </Checkbox>
  </FormGroup>
</Form>
```

**全选**

```js
const options = ['数字1', '数字2', '数字3', '数字4']
const optionsCheckedDefault = ['数字1', '数字3']

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
      indeterminate:
        !!checkedList.length && checkedList.length < options.length,
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
        <div className="offset-b-lg">
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
}
;<Indeterminate />
```

### 变更记录

v2.0.0

* 新增 indeterminate 参数
