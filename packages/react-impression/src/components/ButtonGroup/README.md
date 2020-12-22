### 示例

**基本用法**

```js
<ButtonGroup theme="secondary" activeKey="left">
  <Button eventKey="left">左</Button>
  <Button eventKey="middle">中</Button>
  <Button eventKey="right">右</Button>
</ButtonGroup>
```

**主题**

```js
<ButtonGroup theme="primary" activeKey="right">
  <Button eventKey="left">左</Button>
  <Button eventKey="middle">中</Button>
  <Button eventKey="right">右</Button>
</ButtonGroup>
<ButtonGroup className='offset-l' theme="secondary" activeKey="middle">
  <Button eventKey="left">左</Button>
  <Button eventKey="middle">中</Button>
  <Button eventKey="right">右</Button>
</ButtonGroup>
```

**尺寸**

```js
<div>
  <div className="offset-b">
    <ButtonGroup size="lg">
      <Button eventKey="1">1</Button>
      <Button eventKey="2">2</Button>
      <Button eventKey="3">3</Button>
    </ButtonGroup>
  </div>
  <div className="offset-b">
    <ButtonGroup>
      <Button eventKey="4">4</Button>
      <Button eventKey="5">5</Button>
      <Button eventKey="6">6</Button>
    </ButtonGroup>
  </div>
  <div>
    <ButtonGroup size="sm">
      <Button size="sm" eventKey="7">
        7
      </Button>
      <Button size="sm" eventKey="8">
        8
      </Button>
      <Button size="sm" eventKey="9">
        9
      </Button>
    </ButtonGroup>
  </div>
</div>
```
