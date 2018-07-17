### Examples

```js
const handleShowLoading = () => {
    setState({
        isShow: !state.isShow
    })
};
initialState = {
    type: 'fountain',
    isShow: false,
};
<div>
    <Button name="cyclone" onClick={handleShowLoading}>
        Toggle LoadingAddon
    </Button>
    <LoadingAddon
        className={state.isShow ? '' : 'hidden'}
        type={state.type}
        show={state.isShow}
        loadingMsg={state.type}
    />
</div>
```
