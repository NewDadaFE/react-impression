### 示例

**基本用法**

```js
const handleClick = (event) => {
console.log(event)
Message.success('我被点击了！')
}
<Row>
  <Col><TextLink onClick={handleClick} theme='default'>我是一个默认文字链接</TextLink></Col>
  <Col><TextLink onClick={handleClick}>我是一个主题文字链接</TextLink></Col>
  <Col><TextLink href="https://www.baidu.com/">我是一个跳转链接</TextLink></Col>
  <Col><TextLink disabled>我是一个禁用链接</TextLink></Col>
</Row>
```
