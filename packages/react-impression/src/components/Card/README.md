### 示例

**基本用法**

```js
<Row>
  <Col>
    <Card>
      <CardBlock>
        <h4>标题</h4>
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
        <h4>标题</h4>
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
        <h4>居左</h4>
        <p>我是一个示例，这块区域是内容区域，我可以包含很多内容</p>
        <a href="javascript:void(0);">链接</a>
        <a href="javascript:void(0);" className="offset-l">
          另一个链接
        </a>
      </CardBlock>
    </Card>
  </Col>
  <Col>
    <Card className="text-center">
      <Image fluid src="https://placehold.it/350x200" />
      <CardBlock>
        <h4>居中</h4>
        <p>我是一个示例，这块区域是内容区域，我可以包含很多内容</p>
        <a href="javascript:void(0);">链接</a>
        <a href="javascript:void(0);" className="offset-l">
          另一个链接
        </a>
      </CardBlock>
    </Card>
  </Col>
  <Col>
    <Card className="text-right">
      <Image fluid src="https://placehold.it/350x200" />
      <CardBlock>
        <h4>居右</h4>
        <p>我是一个示例，这块区域是内容区域，我可以包含很多内容</p>
        <a href="javascript:void(0);">链接</a>
        <a href="javascript:void(0);" className="offset-l">
          另一个链接
        </a>
      </CardBlock>
    </Card>
  </Col>
</Row>
```
