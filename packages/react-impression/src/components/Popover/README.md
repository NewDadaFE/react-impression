### Examples

```js
initialState = {
  content: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
};
<Row>
  <Col>
    <Popover
      position="right"
      title="popover"
      content={state.content}>
      <Button theme="primary">Right</Button>
    </Popover>
  </Col>
  <Col>
    <Popover
      position="left"
      title="popover"
      content={state.content}>
      <Button theme="primary">Left</Button>
    </Popover>
  </Col>
  <Col>
    <Popover
      position="top"
      title="popover"
      content={state.content}>
      <Button theme="primary">Top</Button>
    </Popover>
  </Col>
  <Col>
    <Popover
      position="bottom"
      title="popover"
      content={state.content}>
      <Button theme="primary">Bottom</Button>
    </Popover>
  </Col>
</Row>
```
