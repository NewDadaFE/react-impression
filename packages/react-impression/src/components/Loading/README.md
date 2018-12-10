### 示例

```js
const handleShowLoading = e => {
  setState({
    type: e.currentTarget.name,
  })
  Loading.show()
}
initialState = {
  type: 'cyclone',
}
;<div>
  <Row>
    <Col col={3}>
      <Button name="fountain" onClick={handleShowLoading}>
        喷泉-fountain
      </Button>
    </Col>
    <Col col={3}>
      <Button name="wave" onClick={handleShowLoading}>
        水波-wave
      </Button>
    </Col>
    <Col col={3}>
      <Button name="pendule" onClick={handleShowLoading}>
        铅锤-pendule
      </Button>
    </Col>
  </Row>
  <Row>
    <Col col={3}>
      <Button name="cyclone" onClick={handleShowLoading}>
        旋风-cyclone
      </Button>
    </Col>
    <Col col={3}>
      <Button name="circle" onClick={handleShowLoading}>
        圆环-circle
      </Button>
    </Col>
  </Row>
  <Loading type={state.type} loadingMsg={state.type} closeable />
</div>
```
