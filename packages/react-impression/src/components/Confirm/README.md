### 示例

**基本用法**

```js
initialState = {
  showConfirm1: false,
  showConfirm2: false,
  showConfirm3: false,
}
const toggleConfirm1Handle = () => {
  setState({
    showConfirm1: !state.showConfirm1,
  })
}
const toggleConfirm2Handle = () => {
  setState({
    showConfirm2: !state.showConfirm2,
  })
}
const toggleConfirm3Handle = () => {
  setState({
    showConfirm3: !state.showConfirm3,
  })
}
;<div>
  <Row>
    <Col>
      <Button theme="secondary" onClick={toggleConfirm1Handle}>
        警告
      </Button>
    </Col>
    <Col>
      <Button theme="primary" onClick={toggleConfirm2Handle}>
        信息
      </Button>
    </Col>
    <Col>
      <Button theme="secondary" onClick={toggleConfirm3Handle}>
        危险
      </Button>
    </Col>
  </Row>
  {state.showConfirm1 && (
    <Confirm
      onOkClick={toggleConfirm1Handle}
      onCancelClick={toggleConfirm1Handle}
      title="删除记录"
    >
      您确定删除消费记录？
    </Confirm>
  )}
  {state.showConfirm2 && (
    <Confirm
      type="info"
      onOkClick={toggleConfirm2Handle}
      onCancelClick={toggleConfirm2Handle}
      title="购买机票"
    >
      您确定购买该航班机票？
    </Confirm>
  )}
  {state.showConfirm3 && (
    <Confirm
      type="danger"
      title="注销银行卡"
      onOkClick={toggleConfirm3Handle}
      onCancelClick={toggleConfirm3Handle}
    >
      您确定注销该银行卡？
    </Confirm>
  )}
</div>
```

### 变更记录

v3.0.0

- 新增 title 属性，区分提示表题和提示内容
