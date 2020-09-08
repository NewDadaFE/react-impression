### 示例

**主题**

```js
<Row className="no-margin">
  <Col col="2">
    <CardBlock>
      <Button theme="primary">主要</Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button theme="secondary">次要</Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button theme="dashed">虚线</Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button theme="text">文字</Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button icon="plus">文字</Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button icon="plus" />
    </CardBlock>
  </Col>
</Row>
```

**不可用状态**

```js
<Row className="no-margin">
  <Col col="2">
    <CardBlock>
      <Button theme="primary" disabled>
        主要
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button theme="secondary" disabled>
        次要
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button theme="dashed" disabled>
        虚线
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button theme="text" disabled>
        文字
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button icon="plus" disabled>
        文字
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button icon="plus" disabled />
    </CardBlock>
  </Col>
</Row>
```

**尺寸**

```js
<Row>
  <Col col="2">
    <Button theme="primary" size="xs" title="">
      超小
    </Button>
  </Col>
  <Col col="2">
    <Button theme="primary" size="sm" title="">
      小杯
    </Button>
  </Col>
  <Col col="2">
    <Button theme="primary" size="md" title="">
      中杯
    </Button>
  </Col>
  <Col col="2">
    <Button theme="primary" size="lg" title="">
      大杯
    </Button>
  </Col>
</Row>
```

**图标**

icon 属性如果是 string 类型，只能是 [Ico 组件支持的 type](#ico)。<br/>
除了使用内置图标库的图标，也可以传入自定义图标组件。

```javascript
<Form>
  <FormGroup>
    <label>使用内置图标库：</label>
    <Button icon="plus" />
  </FormGroup>
  <FormGroup>
    <label>自定义图标：</label>
    <Button icon={<span style={{ width: '16px', height: '16px' }}>A</span>} />
  </FormGroup>
</Form>
```

**圆形按钮**

仅纯图标类型按钮生效，指定 shape 为 circle 时，icon 必须有值，且 children 无效。

```js
<Row>
  <Col col="2">
    <Button icon="plus" shape="circle" size="xs" />
  </Col>
  <Col col="2">
    <Button icon="plus" shape="circle" size="sm" />
  </Col>
  <Col col="2">
    <Button icon="plus" shape="circle" size="md">
      children不会生效
    </Button>
  </Col>
  <Col col="2">
    <Button icon="plus" shape="circle" size="lg" />
  </Col>
</Row>
```

**块状按钮**

```js
<div>
  <Button theme="primary" block className="offset-b">
    主要
  </Button>
  <Button theme="secondary" block className="offset-b">
    次要
  </Button>
  <Button theme="dashed" block className="offset-b">
    虚线
  </Button>
</div>
```

**加载中 按钮**

```js
<div>
  <Row className="no-margin">
    <Col col="2">
      <CardBlock>
        <Button theme="primary" loading>
          主要
        </Button>
      </CardBlock>
    </Col>
    <Col col="2">
      <CardBlock>
        <Button theme="secondary" loading>
          次要
        </Button>
      </CardBlock>
    </Col>
    <Col col="2">
      <CardBlock>
        <Button theme="dashed" loading>
          虚线
        </Button>
      </CardBlock>
    </Col>
    <Col col="2">
      <CardBlock>
        <Button theme="text" loading>
          文字
        </Button>
      </CardBlock>
    </Col>
    <Col col="2">
      <CardBlock>
        <Button icon="plus" loading>
          文字
        </Button>
      </CardBlock>
    </Col>
    <Col col="2">
      <CardBlock>
        <Button icon="plus" loading />
      </CardBlock>
    </Col>
  </Row>
</div>
```

### 变更记录

v2.0.0

- 新增 btn-font-size sass 变量
- 移除 btn-border-radius-lg sass 变量
- 移除 btn-border-radius-sm sass 变量
