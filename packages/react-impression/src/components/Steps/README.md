### 示例

**基本用法**

```js
<Steps current={2}>
  <Step title="已完成" description="这里是描述" />
  <Step title="标题比较长的情况" />
  <Step title="进行中" />
  <Step title="未开始">
    <a href="#Steps">自定义内容</a>
  </Step>
</Steps>
```

**竖直方向的步骤条**

```jsx
<Steps current={1} direction="vertical">
  <Step title="已完成" description="这里是描述" />
  <Step title="进行中" description="这里是描述" />
  <Step title="未开始" description="这里是描述" />
</Steps>
```

**父元素固定宽高时，竖直方向的步骤条**

```jsx
<div style={{ height: '400px', width: '200px' }}>
  <Steps current={2} direction="vertical" status="error">
    <Step title="已完成" description="这里是描述">
      <div>
        <button>我是没有事件的按钮</button>
      </div>
    </Step>
    <Step title="标题比较长的已完成" description="这里是描述" />
    <Step
      title="已中断"
      description="这里是话术很长很长很长很长很长很长的描述"
    />
    <Step title="未开始" description="这里是描述">
      <div>
        <button>我是没有事件的按钮</button>
      </div>
    </Step>
  </Steps>
</div>
```

**进度中断的用法**

```js
<Steps current={1} status="error">
  <Step title="已完成" description="这里是描述" />
  <Step title="已中断" description="这里是描述" />
  <Step title="未开始" description="这里是描述" />
</Steps>
```

**节点鼠标悬停显示说明**

```js
<Steps current={1} status="error">
  <Step
    title="已完成"
    description="鼠标悬停到图标试试"
    popover={
      <div>
        popover支持
        <Tag theme="warning">节点</Tag>
        说明
      </div>
    }
  />
  <Step
    title="已中断"
    description="鼠标悬停到图标试试"
    popover="popover支持字符串说明"
  />
  <Step title="未开始" description="这里是描述" />
</Steps>
```

**自定义节点图标**

```js
<Steps current={1}>
  <Step title="登录" icon={<Ico type="user" />} />
  <Step
    title="认证"
    icon={<Ico type="ellipsis-h" style={{ fontSize: '30px' }} />}
  />
  <Step title="完成" icon={<Ico type="smile-o" />} />
</Steps>
```

**关闭节点序号**

```js
<Row>
  <Col>
    <Steps current={1} processDot>
      <Step title="登录" description="这里是描述" />
      <Step
        title="认证"
        description="鼠标悬停点上"
        popover="popover支持字符串说明"
      />
      <Step title="完成" />
    </Steps>
  </Col>
  <Col>
    <Steps current={1} processDot status="error">
      <Step title="登录">
        <a href="#Steps">自定义内容</a>
      </Step>
      <Step title="认证" description="进度中断" />
      <Step
        title="完成"
        description="自定义图标"
        icon={<Ico type="smile-o" />}
      />
    </Steps>
  </Col>
</Row>
```
