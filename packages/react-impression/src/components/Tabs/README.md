### 示例

**基本用法**

```js
const handleNav = activeKey => {
  setState({
    activeKey,
  })
}
initialState = {
  activeKey: 6,
}
;<div>
  <Tabs activeKey={state.activeKey} onSelect={handleNav}>
    <TabPane eventKey={0}>标题</TabPane>
    <TabPane eventKey={2}>长标题</TabPane>
    <TabPane eventKey={3} disabled>
      标题很长
    </TabPane>
    <TabPane eventKey={4}>标题特别长</TabPane>
    <TabPane eventKey={5}>标题再长一点</TabPane>
    <TabPane eventKey={6}>标题还敢长点吗</TabPane>
  </Tabs>
</div>
```

**选项折叠**

```js
const tabLength = 30
const tabList = []
for (let i = 0; i < tabLength; i++) {
  tabList.push(i)
}
;<Tabs activeKey={2}>
  {tabList.map(tab => (
    <TabPane key={tab} eventKey={tab}>
      Tab {tab}
    </TabPane>
  ))}
</Tabs>
```

**较小尺寸**

```js
<Row>
  <Col col={4}>
    <Tabs activeKey={2} size="sm" type="line">
      <TabPane eventKey={1}>选中</TabPane>
      <TabPane eventKey={2}>链接</TabPane>
      <TabPane eventKey={3}>其他</TabPane>
      <TabPane eventKey={4} disabled>
        禁用
      </TabPane>
    </Tabs>
  </Col>
  <Col col={4}>
    <Tabs activeKey={2} size="sm" type="card">
      <TabPane eventKey={1}>选中</TabPane>
      <TabPane eventKey={2}>链接</TabPane>
      <TabPane eventKey={3}>其他</TabPane>
      <TabPane eventKey={4} disabled>
        禁用
      </TabPane>
    </Tabs>
  </Col>
  <Col col={4}>
    <Tabs activeKey={2} size="sm" type="block">
      <TabPane eventKey={1}>选中</TabPane>
      <TabPane eventKey={2}>链接</TabPane>
      <TabPane eventKey={3}>其他</TabPane>
      <TabPane eventKey={4} disabled>
        禁用
      </TabPane>
    </Tabs>
  </Col>
</Row>
```

**卡片类型**

```js
<Tabs activeKey={1} type="card">
  <TabPane eventKey={1}>标题</TabPane>
  <TabPane eventKey={2}>长标题</TabPane>
  <TabPane eventKey={3}>标题很长</TabPane>
  <TabPane eventKey={4} disabled>
    标题特别长
  </TabPane>
  <TabPane eventKey={5}>标题再长一点</TabPane>
</Tabs>
```

**滑块类型**

```js
<Tabs activeKey={1} type="block">
  <TabPane eventKey={1}>标题</TabPane>
  <TabPane eventKey={2}>长标题</TabPane>
  <TabPane eventKey={3}>标题很长</TabPane>
  <TabPane eventKey={4} disabled>
    标题特别长
  </TabPane>
  <TabPane eventKey={5}>标题再长一点</TabPane>
</Tabs>
```

**选项卡方向**

tabPosition 属性 可指定选项卡的方向：上（top），下（bottom），左（left），右（right）。

注意：指定为 bottom 时，Tabs 组件会默认使用绝对定位，宽度为父元素的 100%。

```js
<Row>
  <Col col={3}>
    <Tabs activeKey={2} tabPosition="top">
      <TabPane eventKey={1}>选中</TabPane>
      <TabPane eventKey={2}>链接</TabPane>
      <TabPane eventKey={3}>其他</TabPane>
      <TabPane eventKey={4} disabled>
        禁用
      </TabPane>
    </Tabs>
  </Col>
  <Col col={3}>
    <Tabs activeKey={2} tabPosition="bottom" style={{ width: '200px' }}>
      <TabPane eventKey={1}>选中</TabPane>
      <TabPane eventKey={2}>链接</TabPane>
      <TabPane eventKey={3}>其他</TabPane>
      <TabPane eventKey={4} disabled>
        禁用
      </TabPane>
    </Tabs>
  </Col>
  <Col col={3}>
    <Tabs activeKey={2} tabPosition="left">
      <TabPane eventKey={1}>选中</TabPane>
      <TabPane eventKey={2}>链接</TabPane>
      <TabPane eventKey={3}>其他</TabPane>
      <TabPane eventKey={4} disabled>
        禁用
      </TabPane>
    </Tabs>
  </Col>
  <Col col={3}>
    <Tabs activeKey={2} tabPosition="right">
      <TabPane eventKey={1}>选中</TabPane>
      <TabPane eventKey={2}>链接</TabPane>
      <TabPane eventKey={3}>其他</TabPane>
      <TabPane eventKey={4} disabled>
        禁用
      </TabPane>
    </Tabs>
  </Col>
</Row>
```

### 变更记录

v3.0.0

- 新增 Tabs 组件，替换旧版 Nav 组件
