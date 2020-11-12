### 示例

```js
const handleShowLoading = () => {
  setState({
    isShow: !state.isShow,
  })
}
initialState = {
  type: 'fountain',
  isShow: false,
}
;<div>
  <Button name="cyclone" onClick={handleShowLoading}>
    点击触发
  </Button>
  <LoadingAddon
    className={state.isShow ? '' : 'hidden'}
    type={state.type}
    show={state.isShow}
    loadingMsg={state.type}
  />
</div>
```

更多样式类型参考 [Loading](#/Feedback/Loading)
