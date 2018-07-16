### Examples

```js
const handleShowLoading = e => {
    setState({
        type: e.currentTarget.name
    })
    Loading.show()
};
initialState = {
    type: 'cyclone',
};
<Row>
    <Col>
        <Button name="fountain" onClick={handleShowLoading}>
            fountain
        </Button>
    </Col>
    <Col>
        <Button name="wave" onClick={handleShowLoading}>
            wave
        </Button>
    </Col>
    <Col>
        <Button name="pendule" onClick={handleShowLoading}>
            pendule
        </Button>
    </Col>
    <Col>
        <Button name="cyclone" onClick={handleShowLoading}>
            cyclone
        </Button>
    </Col>
    <Loading type={state.type} loadingMsg={state.type} closeable />
</Row>
```
