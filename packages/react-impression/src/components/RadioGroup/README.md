### 代码示例

**默认值（非受控组件）**

```js
const radioArray = [
  {
    id: 1,
    name: '是',
  },
  {
    id: 2,
    name: '否',
  },
]
;<RadioGroup ref="radios" defaultValue={1}>
  {radioArray.length > 0 &&
    radioArray.map(item => (
      <Radio key={item.id} value={item.id}>
        {item.name}
      </Radio>
    ))}
</RadioGroup>
```

**指定值（受控组件）**

```js
const radioArray = [
  {
    id: 1,
    name: '是',
  },
  {
    id: 2,
    name: '否',
  },
]
;<RadioGroup value={2} onChange={(event, value) => console.log(event, value)}>
  {radioArray.length > 0 &&
    radioArray.map(item => (
      <Radio key={item.id} value={item.id}>
        {item.name}
      </Radio>
    ))}
</RadioGroup>
```

**禁用状态**

```js
const radioArray = [
  {
    id: 1,
    name: '是',
  },
  {
    id: 2,
    name: '否',
  },
]
;<RadioGroup value={2} disabled>
  {radioArray.length > 0 &&
    radioArray.map(item => (
      <Radio key={item.id} value={item.id}>
        {item.name}
      </Radio>
    ))}
</RadioGroup>
```
