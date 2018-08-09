### Examples

```js
initialState = {
  content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
}
;<Row>
  <Col>
    <Popover position="right" title="标题" content={state.content}>
      <Button theme="primary">显示在右侧</Button>
    </Popover>
  </Col>
  <Col>
    <Popover position="left" title="标题" content={state.content}>
      <Button theme="primary">显示在左侧</Button>
    </Popover>
  </Col>
  <Col>
    <Popover position="top" title="标题" content={state.content}>
      <Button theme="primary">显示在上方</Button>
    </Popover>
  </Col>
  <Col>
    <Popover position="bottom" title="标题" content={state.content}>
      <Button theme="primary">显示在下方</Button>
    </Popover>
  </Col>
</Row>
```
