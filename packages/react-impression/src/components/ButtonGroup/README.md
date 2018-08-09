### 示例

**基本使用**

```js
<ButtonGroup theme="default" activeKey="left">
  <Button eventKey="left">Left</Button>
  <Button eventKey="middle">Middle</Button>
  <Button eventKey="right">Right</Button>
</ButtonGroup>
```

**主题**

```js
<ButtonToolbar>
  <ButtonGroup theme="primary" activeKey="right">
    <Button eventKey="left">Left</Button>
    <Button eventKey="middle">Middle</Button>
    <Button eventKey="right">Right</Button>
  </ButtonGroup>
  <ButtonGroup theme="secondary" activeKey="middle">
    <Button eventKey="left">Left</Button>
    <Button eventKey="middle">Middle</Button>
    <Button eventKey="right">Right</Button>
  </ButtonGroup>
</ButtonToolbar>
```

**尺寸**

```js
<ButtonToolbar>
  <ButtonGroup size="lg">
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button>4</Button>
    <Button>5</Button>
    <Button>6</Button>
  </ButtonGroup>
  <ButtonGroup size="sm">
    <Button>7</Button>
    <Button>8</Button>
    <Button>9</Button>
  </ButtonGroup>
</ButtonToolbar>
```
