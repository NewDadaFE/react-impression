### Examples

```js
const onSelectHandle1 = activePage => {
  setState({
      activePage1: activePage,
  });
}
const onSelectHandle2 = activePage2 => {
  setState({
      activePage2: activePage2,
  });
}
initialState = {
  totalPage1: 6,
  activePage1: 3,
  totalPage2: 99,
  activePage2: 1,
};
<div className="text-center">
  <Row>
    <Col>
      <Pagination
        onSelect={onSelectHandle1}
        scope={4}
        totalPage={state.totalPage1}
        activePage={state.activePage1} />
    </Col>
  </Row>
  <Row>
    <Col>
      <Pagination
        onSelect={onSelectHandle2}
        scope={2}
        totalPage={state.totalPage2}
        activePage={state.activePage2} />
    </Col>
  </Row>
</div>
```