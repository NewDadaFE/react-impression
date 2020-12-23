**Card 组件**配合 **CardHeader 组件**、**CardBlock 组件**、**CardFooter 组件**可以实现内容分块效果的布局。

#### 基本用法

```js
<Row>
  <Col>
    <Card>
      <CardHeader>标题</CardHeader>
      <CardBlock>
        我是一个示例，这块区域是内容区域，我可以包含很多内容
      </CardBlock>
      <CardFooter>卡片底部</CardFooter>
    </Card>
  </Col>
  <Col>
    <Card>
      <Image fluid src="https://placehold.it/350x200" />
      <CardHeader>标题</CardHeader>
      <CardBlock>
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
      <CardBlock>
        <p>我是一个示例，这块区域是内容区域，我可以包含很多内容</p>
      </CardBlock>
    </Card>
  </Col>
</Row>
```

#### 外轮廓类型

Card 组件外轮廓可以设为外阴影（默认）、外边框和无边框三种类型。

```js
<Row>
  <Col>
    <Card>
      <CardHeader>外阴影类型（默认）</CardHeader>
      <CardBlock>这块区域是内容区域</CardBlock>
    </Card>
  </Col>
  <Col>
    <Card outline="border">
      <CardHeader>外边框类型</CardHeader>
      <CardBlock>这块区域是内容区域</CardBlock>
    </Card>
  </Col>
  <Col>
    <Card outline="none">
      <CardHeader>无边框类型</CardHeader>
      <CardBlock>这块区域是内容区域</CardBlock>
    </Card>
  </Col>
</Row>
```

#### 简单用法

block 属性会赋予 Card 组件与 CardBlock 组件一样的内边距和字体颜色。

```javascript
<Card outline="border" block>
  这块区域是内容区域
</Card>
```

### 变更记录

v2.0.0

- 删除 noborder 属性
