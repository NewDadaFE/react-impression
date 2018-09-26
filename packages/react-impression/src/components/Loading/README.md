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
;<Row>
  <Col>
    <Button name="fountain" onClick={handleShowLoading}>
      喷泉（fountain）
    </Button>
  </Col>
  <Col>
    <Button name="wave" onClick={handleShowLoading}>
      水波（wave）
    </Button>
  </Col>
  <Col>
    <Button name="pendule" onClick={handleShowLoading}>
      铅锤（pendule）
    </Button>
  </Col>
  <Col>
    <Button name="cyclone" onClick={handleShowLoading}>
      旋风（cyclone）
    </Button>
  </Col>
  <Loading type={state.type} loadingMsg={state.type} closeable />
</Row>
```
