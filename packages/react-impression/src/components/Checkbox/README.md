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

**全选**

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
* 新增 sass 变量`$checkbox-addon-size`表示 Checkbox 尺寸
* 新增 sass 变量`$checkbox-addon-bg-color`表示 Checkbox 背景色
* 新增 sass 变量`$checkbox-addon-border-color`表示 Checkbox 未选中边框色
* 新增 sass 变量`$checkbox-addon-checked-color`表示 Checkbox 选中色
* 新增 sass 变量`$checkbox-addon-disabled-color`表示 Checkbox 禁用色
* 新增 sass 变量`$checkbox-addon-scale`表示 Checkbox 中间图标缩放比例
* 更改 sass 变量`$checkbox-addon-width`、`$checkbox-addon-height`为 `$checkbox-addon-i-size` 表示 Checkbox 中间图标尺寸
