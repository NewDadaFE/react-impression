### 示例

**基本用法**

```js
<Row>
  <Col>
    <Card>
      <CardBlock>
        <h4 style={{ color: '#133240' }}>标题</h4>
        <div>我是一个示例，这块区域是内容区域，我可以包含很多内容</div>
      </CardBlock>
      <Image fluid src="https://placehold.it/350x200" />
      <CardBlock>
        <p>我是一个示例，这块区域是内容区域，我可以包含很多内容</p>
        <Button theme="primary">更多</Button>
      </CardBlock>
    </Card>
  </Col>
  <Col>
    <Card>
      <Image fluid src="https://placehold.it/350x200" />
      <CardBlock>
        <h4 style={{ color: '#133240' }}>标题</h4>
        <p>我是一个示例，这块区域是内容区域，我可以包含很多内容</p>
        <Button theme="primary">详细内容</Button>
      </CardBlock>
    </Card>
  </Col>
  <Col>
    <Card>
      <CardBlock>
        <p>我是一个示例，这块区域是内容区域，我可以包含很多内容</p>
      </CardBlock>
      <Image fluid src="https://placehold.it/350x200" />
    </Card>
  </Col>
  <Col>
    <Card>
      <CardBlock>
        <p>我是一个示例，这块区域是内容区域，我可以包含很多内容</p>
        <Button theme="primary">好的</Button>
      </CardBlock>
    </Card>
  </Col>
</Row>
```

**文字排列**

```js
<Row>
  <Col>
    <Card>
      <Image fluid src="https://placehold.it/350x200" />
      <CardBlock>
        <h4 style={{ color: '#132240' }}>居左</h4>
        <p>我是一个示例，这块区域是内容区域，我可以包含很多内容</p>
        <div style={{ display: 'inline-block', margin: '10px 0' }}>
          <a href="#">链接</a>
          <a href="#" className="offset-l">
            另一个链接
          </a>
        </div>
      </CardBlock>
    </Card>
  </Col>
  <Col>
    <Card className="text-center">
      <Image fluid src="https://placehold.it/350x200" />
      <CardBlock>
        <h4 style={{ color: '#132240' }}>居中</h4>
        <p>我是一个示例，这块区域是内容区域，我可以包含很多内容</p>
        <div style={{ display: 'inline-block', margin: '10px 0' }}>
          <a href="#">链接</a>
          <a href="#" className="offset-l">
            另一个链接
          </a>
        </div>
      </CardBlock>
    </Card>
  </Col>
  <Col>
    <Card className="text-right">
      <Image fluid src="https://placehold.it/350x200" />
      <CardBlock>
        <h4 style={{ color: '#132240' }}>居右</h4>
        <p>我是一个示例，这块区域是内容区域，我可以包含很多内容</p>
        <div style={{ display: 'inline-block', margin: '10px 0' }}>
          <a href="#">链接</a>
          <a href="#" className="offset-l">
            另一个链接
          </a>
        </div>
      </CardBlock>
    </Card>
  </Col>
</Row>
```

### 变更记录

v2.0.0

* 删除 noborder 属性
