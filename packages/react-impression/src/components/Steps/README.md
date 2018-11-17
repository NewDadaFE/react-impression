### 示例

**基本用法**

```js
<Steps current={2}>
  <StepNode title="已完成" description="这里是描述" />
  <StepNode title="标题比较长的情况" />
  <StepNode title="进行中" />
  <StepNode title="未开始">
    <a href="#Steps">自定义内容</a>
  </StepNode>
</Steps>
```

**进度中断的用法**

```js
<Steps current={1} error>
  <StepNode title="已完成" description="这里是描述" />
  <StepNode title="已中断" description="这里是描述" />
  <StepNode title="未开始" description="这里是描述" />
</Steps>
```

**节点鼠标悬停显示说明**

```js
<Steps current={1} error>
  <StepNode
    title="已完成"
    description="鼠标悬停到图标试试"
    tips={
      <div>
        tips支持
        <Tag theme="warning">节点</Tag>
        说明
      </div>
    }
  />
  <StepNode
    title="已中断"
    description="鼠标悬停到图标试试"
    tips="tips支持字符串说明"
  />
  <StepNode title="未开始" description="这里是描述" />
</Steps>
```

**自定义节点图标**

```js
<Steps current={1}>
  <StepNode title="登录" icon={<Icon type="user" />} />
  <StepNode title="认证" icon={<Icon type="spinner" />} />
  <StepNode title="完成" icon={<Icon type="smile-o" />} />
</Steps>
```

**关闭节点序号**

```js
<Row>
  <Col>
    <Steps current={1} closeNo>
      <StepNode title="登录" description="这里是描述" />
      <StepNode
        title="认证"
        description="鼠标悬停点上"
        tips="tips支持字符串说明"
      />
      <StepNode title="完成" />
    </Steps>
  </Col>
  <Col>
    <Steps current={1} closeNo error>
      <StepNode title="登录">
        <a href="#Steps">自定义内容</a>
      </StepNode>
      <StepNode title="认证" description="进度中断" />
      <StepNode
        title="完成"
        description="自定义图标"
        icon={<Icon type="smile-o" />}
      />
    </Steps>
  </Col>
</Row>
```
