### 示例

**简单的内容**

```js
<Row>
  <Col>
    <h5>正常项</h5>
    <ListGroup>
      <ListGroupItem>普通项</ListGroupItem>
      <ListGroupItem active>被激活的模样</ListGroupItem>
      <ListGroupItem>普通项</ListGroupItem>
      <ListGroupItem disabled>禁用的模样</ListGroupItem>
      <ListGroupItem>普通项</ListGroupItem>
    </ListGroup>
  </Col>
  <Col>
    <h5>带标签项</h5>
    <ListGroup>
      <ListGroupItem>
        <Tag theme="default" className="pull-right" shape="pill">
          1
        </Tag>
        附带默认标签
      </ListGroupItem>
      <ListGroupItem>
        <Tag theme="warning" className="pull-right" shape="pill">
          2
        </Tag>
        附带警告标签
      </ListGroupItem>
      <ListGroupItem>
        <Tag theme="danger" className="pull-right" shape="pill">
          3
        </Tag>
        附带危险标签
      </ListGroupItem>
      <ListGroupItem>
        <Tag theme="success" className="pull-right" shape="pill">
          4
        </Tag>
        附带成功标签
      </ListGroupItem>
      <ListGroupItem>
        <Tag theme="primary" className="pull-right" shape="pill">
          5
        </Tag>
        附带普通标签
      </ListGroupItem>
    </ListGroup>
  </Col>
  <Col>
    <h5>链接项</h5>
    <ListGroup>
      <ListGroupItem href="#listGroup">带链接的示例项</ListGroupItem>
      <ListGroupItem href="#listGroup">通过href属性设置跳转</ListGroupItem>
      <ListGroupItem href="#listGroup" active>
        这是被激活的模样
      </ListGroupItem>
      <ListGroupItem href="#listGroup">示例只能看</ListGroupItem>
      <ListGroupItem href="#listGroup">点了哪里也不会去</ListGroupItem>
    </ListGroup>
  </Col>
</Row>
```

**自定义子项的内容**

```js
<Row>
  <Col col="6">
    <ListGroup>
      <ListGroupItem href="#listGroup">
        <h5>玻璃樽</h5>
        <div>星星在哪里都是很亮的，就看你有没有抬头去看他们。</div>
      </ListGroupItem>
      <ListGroupItem href="#listGroup">
        <h5>大鱼老爸</h5>
        <div>一边是平常的现实，一边是美丽的谎言，你选哪一样呢？</div>
      </ListGroupItem>
      <ListGroupItem href="#listGroup" active>
        <h5>和平饭店</h5>
        <div>
          一个人杀了一个人，他是杀人犯，是坏人。当他杀了成千上万人后，他是大英雄，是好人。
        </div>
      </ListGroupItem>
      <ListGroupItem href="#listGroup" disabled>
        <h5>阿甘正传</h5>
        <div>生活就像一盒巧克力，你永远不知道你会得到什么。</div>
      </ListGroupItem>
    </ListGroup>
  </Col>
</Row>
```
