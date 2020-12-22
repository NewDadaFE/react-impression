### 示例

**基本用法**

```js
<Checkbox defaultChecked>默认选中</Checkbox>
```

**禁用状态**

```js
<Row>
  <Col col={2}>
    <Checkbox disabled>未选禁用项</Checkbox>
  </Col>
  <Col col={2}>
    <Checkbox disabled defaultChecked>
      已选禁用项
    </Checkbox>
  </Col>
</Row>
```

**配合 CheckGroup 组件**

```js
const options = ['苹果', '香蕉', '梨子', '葡萄']
const optionsCheckedDefault = ['苹果', '梨子']

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
        <div className="offset-b">
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

- 新增 indeterminate 参数
