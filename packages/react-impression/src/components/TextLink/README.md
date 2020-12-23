### 示例

```js
const handleClick = (event) => {
  Message.success('我被点击了！')
}
<Row>
  <Col><TextLink onClick={handleClick}>主要链接</TextLink></Col>
  <Col><TextLink onClick={handleClick} theme='secondary'>次要链接</TextLink></Col>
  <Col><TextLink href='https://www.baidu.com/'>跳转链接</TextLink></Col>
  <Col><TextLink disabled>禁用链接</TextLink></Col>
</Row>
```

### 变更记录

v3.0.0

- 新增 TextLink 组件
