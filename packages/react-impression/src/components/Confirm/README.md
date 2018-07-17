### Examples

**Basic**

```js
initialState = {
 showConfirm1: false,
 showConfirm2: false,
 showConfirm3: false,
};
const toggleConfirm1Handle = () => {
  setState({
    showConfirm1: !state.showConfirm1,
  })
};
const toggleConfirm2Handle = () => {
  setState({
    showConfirm2: !state.showConfirm2,
  })
};
const toggleConfirm3Handle = () => {
  setState({
    showConfirm3: !state.showConfirm3,
  })
};
<div>
  <Row>
    <Col>
      <Button
        theme='secondary'
        outline
        onClick={toggleConfirm1Handle}
      >
        warning
      </Button>
    </Col>
    <Col>
      <Button
        theme='primary'
        outline
        onClick={toggleConfirm2Handle}
      >
        question
      </Button>
    </Col>
    <Col>
      <Button theme='default' onClick={toggleConfirm3Handle}>
        danger
      </Button>
    </Col>
  </Row>
  {state.showConfirm1 && (
    <Confirm
      onOkClick={toggleConfirm1Handle}
      onCancelClick={toggleConfirm1Handle}
    >
      您确定删除消费记录？
    </Confirm>
  )}
  {state.showConfirm2 && (
    <Confirm
      type='info'
      onOkClick={toggleConfirm2Handle}
      onCancelClick={toggleConfirm2Handle}
    >
      您确定购买该航班机票？
    </Confirm>
  )}
  {state.showConfirm3 && (
    <Confirm
      type='danger'
      onOkClick={toggleConfirm3Handle}
      onCancelClick={toggleConfirm3Handle}
    >
      您确定注销该银行卡？
    </Confirm>
  )}
</div>
```