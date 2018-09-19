### 代码示例

**基本用法**

```js
<ButtonGroup theme="default" activeKey="left">
  <Button eventKey="left">左</Button>
  <Button eventKey="middle">中</Button>
  <Button eventKey="right">右</Button>
</ButtonGroup>
```

**主题**

```js
<ButtonToolbar>
  <ButtonGroup theme="default" activeKey="right">
    <Button eventKey="left">左</Button>
    <Button eventKey="middle">中</Button>
    <Button eventKey="right">右</Button>
  </ButtonGroup>
  <ButtonGroup theme="secondary" activeKey="middle">
    <Button eventKey="left">左</Button>
    <Button eventKey="middle">中</Button>
    <Button eventKey="right">右</Button>
  </ButtonGroup>
</ButtonToolbar>
```

**尺寸**

```js
<ButtonToolbar>
  <ButtonGroup size="lg">
    <Button eventKey="1">1</Button>
    <Button eventKey="2">2</Button>
    <Button eventKey="3">3</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button eventKey="4">4</Button>
    <Button eventKey="5">5</Button>
    <Button eventKey="6">6</Button>
  </ButtonGroup>
  <ButtonGroup size="sm">
    <Button eventKey="7">7</Button>
    <Button eventKey="8">8</Button>
    <Button eventKey="9">9</Button>
  </ButtonGroup>
</ButtonToolbar>
```
