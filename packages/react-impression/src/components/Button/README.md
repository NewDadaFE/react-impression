### 示例

**主题**

```js
const buttonClickHandle = () => {
  console.log('Button clicked')
}
;<Row className="no-margin">
  <Col col="2">
    <CardBlock>
      <Button type="button" theme="primary" onClick={buttonClickHandle}>
        主题色
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button theme="default">默认</Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button theme="secondary">副主题色</Button>
    </CardBlock>
  </Col>
</Row>
```

**不可用状态**

```js
const buttonClickHandle = () => {
  console.log('Button clicked')
}
;<Row className="no-margin">
  <Col col="2">
    <CardBlock>
      <Button
        disabled
        type="button"
        theme="primary"
        onClick={buttonClickHandle}
      >
        主题色
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button disabled theme="default">
        默认
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button disabled theme="secondary">
        副主题色
      </Button>
    </CardBlock>
  </Col>
</Row>
```

**尺寸**

```js
<Row className="no-margin">
  <Col col="4">
    <CardBlock>
      <Button theme="primary" size="sm">
        小的型号
      </Button>
    </CardBlock>
  </Col>
  <Col col="4">
    <CardBlock>
      <Button theme="primary">普通大小</Button>
    </CardBlock>
  </Col>
  <Col col="4">
    <CardBlock>
      <Button theme="primary" size="lg">
        大的型号
      </Button>
    </CardBlock>
  </Col>
</Row>
```

**链接**

```js
<Row className="no-margin">
  <Col col="2">
    <CardBlock>
      <Button theme="primary" href="https://www.github.com">
        主题色
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button theme="default" href="https://www.github.com">
        默认
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button theme="secondary" href="https://www.github.com">
        副主题色
      </Button>
    </CardBlock>
  </Col>
</Row>
```

**block 按钮**

```js
<div>
  <Button theme="primary" block className="offset-b">
    主题样式
  </Button>
  <Button theme="default" block className="offset-b">
    默认主题样式
  </Button>
  <Button theme="secondary" block>
    副主题样式
  </Button>
</div>
```

**图标按钮**

```js
<div>
  <Button theme="primary" className="offset-r"><Icon type="download" style={{marginRight: '6px'}} />保存</Button>
  <Button theme="default" className="offset-r"><Icon type="download" style={{marginRight: '6px'}} />保存</Button>
  <Button theme="secondary"><Icon type="download" style={{marginRight: '6px'}} />保存</Button>
</div>
<div className="offset-t">
  <Button theme="primary" className="offset-r"><Icon type="download" /></Button>
  <Button theme="default" className="offset-r"><Icon type="download" /></Button>
  <Button theme="secondary"><Icon type="download" /></Button>
</div>
```

### 变更记录

v2.0.0

* 新增 btn-font-size sass 变量
