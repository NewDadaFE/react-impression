### 示例

#### 基本

**禁用**

```javascript
<Search disabled />
```

#### 取值类型

**注意**

> 1. **非受控**状态下，**不能**通过 ref 获取组件的值。
> 2. **受控**状态下，传入的 **value 必须是一个对象**，且包含用于显示的字段，默认是 label。
> 3. 点击清除搜索框，会调用 onSelect，input 模式参数为 ''，select 模式参数为 null。

**1、输入和选中为值（type: input）**

此类型为搜索组件默认类型。<br/>
**通过 onChange 回调获取搜索组件的值**，需要在回调中处理 keyword。

```javascript
const fruitList = [
  {
    label:
      '苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果',
    key: 1,
    name: 'Apple',
  },
  { label: '栗子1', key: 2, name: 'Pear1' },
  { label: '栗子2', key: 3, name: 'Pear2' },
  { label: '栗子3', key: 4, name: 'Pear3' },
  { label: '栗子4', key: 5, name: 'Pear4' },
  { label: '栗子5', key: 6, name: 'Pear5' },
  { label: '栗子6', key: 7, name: 'Pear6' },
  { label: '栗子7', key: 8, name: 'Pear7' },
  { label: '栗子8', key: 9, name: 'Pear8' },
  { label: '栗子9', key: 10, name: 'Pear9' },
  { label: '栗子10', key: 11, name: 'Pear10' },
]
class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: {},
    }
    this.searchHandler = this.searchHandler.bind(this)
    this.inputChangeHandler = this.inputChangeHandler.bind(this)
  }

  searchHandler(keyword) {
    if (!keyword) return
    return new Promise(resolve => {
      const result = fruitList.filter(item => item.label.includes(keyword))
      resolve(result)
    })
  }

  inputChangeHandler(value) {
    this.setState({ inputValue: { label: value } })
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <label>非受控：</label>
          <Search
            type="input"
            placeholder="请输入关键字"
            onSearch={this.searchHandler}
            onChange={this.inputChangeHandler}
            defaultValue={{ label: 'a栗子' }}
          />
        </FormGroup>
        <FormGroup>
          <label>受控：</label>
          <Search
            type="input"
            placeholder="请输入关键字"
            onSearch={this.searchHandler}
            onChange={this.inputChangeHandler}
            value={this.state.inputValue}
          />
        </FormGroup>
      </Form>
    )
  }
}
;<Example />
```

**2、仅选中为值（type: select）**

**通过 onSelect 回调获取搜索组件的值**，需要在回调中处理选中的 item。

```javascript
const fruitList = [
  {
    label:
      '苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果',
    key: 1,
    name: 'Apple',
  },
  { label: '栗子1', key: 2, name: 'Pear1' },
  { label: '栗子2', key: 3, name: 'Pear2' },
  { label: '栗子3', key: 4, name: 'Pear3' },
  { label: '栗子4', key: 5, name: 'Pear4' },
  { label: '栗子5', key: 6, name: 'Pear5' },
  { label: '栗子6', key: 7, name: 'Pear6' },
  { label: '栗子7', key: 8, name: 'Pear7' },
  { label: '栗子8', key: 9, name: 'Pear8' },
  { label: '栗子9', key: 10, name: 'Pear9' },
  { label: '栗子10', key: 11, name: 'Pear10' },
  { label: '栗子11', key: 12, name: 'Pear11' },
]
class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      selectValue: {},
    }
    this.searchHandler = this.searchHandler.bind(this)
    this.selectChangeHandler = this.selectChangeHandler.bind(this)
  }

  searchHandler(keyword) {
    if (!keyword) return
    return new Promise(resolve => {
      const result = fruitList.filter(item => item.label.includes(keyword))
      resolve(result)
    })
  }

  selectChangeHandler(item) {
    this.setState({ selectValue: item })
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <label>非受控：</label>
          <Search
            type="select"
            placeholder="请输入关键字"
            onSearch={this.searchHandler}
            onSelect={this.selectChangeHandler}
            defaultValue={{ label: 'a栗子' }}
          />
        </FormGroup>
        <FormGroup>
          <label>受控：</label>
          <Search
            type="select"
            placeholder="请输入关键字"
            value={this.state.selectValue}
            onSearch={this.searchHandler}
            onSelect={this.selectChangeHandler}
          />
        </FormGroup>
      </Form>
    )
  }
}
;<Example />
```

#### 自定义样式

```javascript
<Search className="pull-right" style={{ width: '50%' }} />
```

### 变更记录

v3.0.0

- 新增 Search 组件
