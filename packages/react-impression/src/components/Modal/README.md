### Example

**Default**

```js
const toggleModalHandle = () => {
  setState({
    isShow: !state.isShow,
  })
};
initialState = {
  isShow: false,
};
<div>
<Button theme="primary" onClick={toggleModalHandle}>Toggle Modal</Button>
{state.isShow &&
  <Modal>
    <Modal.Header>
      <Button close onClick={toggleModalHandle}>&times;</Button>
      <h5 className="no-margin">Modal title</h5>
    </Modal.Header>
    <Modal.Body>
      <p>One fine body&hellip;</p>
    </Modal.Body>
    <Modal.Footer>
      <Button theme="default" onClick={toggleModalHandle}>Close</Button>
      <Button theme="primary">Save</Button>
    </Modal.Footer>
  </Modal>
}
</div>
```

**Size: sm**

```js
const toggleModalHandle = () => {
  setState({
    isShow: !state.isShow,
  })
};
initialState = {
  isShow: false,
};
<div>
<Button theme="primary" onClick={toggleModalHandle}>Toggle Modal</Button>
{state.isShow &&
  <Modal size="sm">
    <Modal.Header>
      <Button close onClick={toggleModalHandle}>&times;</Button>
      <h5 className="no-margin">Modal title</h5>
    </Modal.Header>
    <Modal.Body>
      <p>One fine body&hellip;</p>
    </Modal.Body>
    <Modal.Footer>
      <Button theme="default" onClick={toggleModalHandle}>Close</Button>
      <Button theme="primary">Save</Button>
    </Modal.Footer>
  </Modal>
}
</div>
```

**Size: lg**

```js
const toggleModalHandle = () => {
  setState({
    isShow: !state.isShow,
  })
};
initialState = {
  isShow: false,
};
<div>
<Button theme="primary" onClick={toggleModalHandle}>Toggle Modal</Button>
{state.isShow &&
  <Modal size="lg">
    <Modal.Header>
      <Button close onClick={toggleModalHandle}>&times;</Button>
      <h5 className="no-margin">Modal title</h5>
    </Modal.Header>
    <Modal.Body>
      <p>One fine body&hellip;</p>
    </Modal.Body>
    <Modal.Footer>
      <Button theme="default" onClick={toggleModalHandle}>Close</Button>
      <Button theme="primary">Save</Button>
    </Modal.Footer>
  </Modal>
}
</div>
```