### 示例

**基本用法**

```js
initialState = {
  content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
}
;<Row>
  <Col>
    <Popover position="right" title="标题" content={state.content}>
      <Button theme="secondary">显示在右侧</Button>
    </Popover>
  </Col>
  <Col>
    <Popover position="left" title="标题" content={state.content}>
      <Button theme="secondary">显示在左侧</Button>
    </Popover>
  </Col>
  <Col>
    <Popover position="top" title="标题" content={state.content}>
      <Button theme="secondary">显示在上方</Button>
    </Popover>
  </Col>
  <Col>
    <Popover position="bottom" title="标题" content={state.content}>
      <Button theme="secondary">显示在下方</Button>
    </Popover>
  </Col>
</Row>
```

**激活方式**

```js
initialState = {
  content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
}
;<Row>
  <Col>
    <Popover position="right" title="标题" content={state.content}>
      <Button theme="secondary">默认是鼠标悬停激活</Button>
    </Popover>
  </Col>
  <Col>
    <Popover
      trigger="click"
      position="top"
      title="标题"
      content={state.content}
    >
      <Button theme="secondary">点击激活</Button>
    </Popover>
  </Col>
</Row>
```

**插入表格内容**

```js
initialState = {
  content: (
    <Row>
      <Col
        col="3"
        style={{
          padding: '0.35rem 0.71429rem',
          boxSizing: 'border-box',
          color: '#132240',
        }}
        className="text-right"
      >
        <strong>城市:</strong>{' '}
      </Col>
      <Col col="9" style={{ paddingLeft: 0 }}>
        <InlineSelect defaultValue={'1'} onChange={this.selectZoneHandle}>
          <InlineSelectOption value="1">南京</InlineSelectOption>
          <InlineSelectOption value="2">无锡</InlineSelectOption>
          <InlineSelectOption value="3">徐州</InlineSelectOption>
          <InlineSelectOption value="4">常州</InlineSelectOption>
          <InlineSelectOption value="5">苏州</InlineSelectOption>
          <InlineSelectOption value="6">南通</InlineSelectOption>
          <InlineSelectOption value="7">连云港</InlineSelectOption>
          <InlineSelectOption value="8">盐城</InlineSelectOption>
          <InlineSelectOption value="9">淮安</InlineSelectOption>
          <InlineSelectOption value="10">扬州</InlineSelectOption>
          <InlineSelectOption value="11">镇江</InlineSelectOption>
          <InlineSelectOption value="12">泰州</InlineSelectOption>
          <InlineSelectOption value="13">宿迁</InlineSelectOption>
        </InlineSelect>
      </Col>
    </Row>
  ),
}
;<Row>
  <Col>
    <Popover position="right" title="标题" content={state.content}>
      <Button theme="secondary">鼠标悬停显示表格</Button>
    </Popover>
  </Col>
  <Col>
    <Popover
      trigger="click"
      position="top"
      title="标题"
      content={state.content}
    >
      <Button theme="secondary">点击激活</Button>
    </Popover>
  </Col>
</Row>
```

### 变更记录

v2.0.0

* 新增 $popover-margin sass 变量
* 新增 trigger 参数
