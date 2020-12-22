### 示例

**显示位置**

默认：右侧

```js
initialState = {
  content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
}
;<Row>
  <Col col={3}>
    <Popover position="right" title="标题" content={state.content}>
      <Button>显示在右侧</Button>
    </Popover>
  </Col>
  <Col col={3}>
    <Popover position="left" title="标题" content={state.content}>
      <Button>显示在左侧</Button>
    </Popover>
  </Col>
  <Col col={3}>
    <Popover position="top" title="标题" content={state.content}>
      <Button>显示在上方</Button>
    </Popover>
  </Col>
  <Col col={3}>
    <Popover position="bottom" title="标题" content={state.content}>
      <Button>显示在下方</Button>
    </Popover>
  </Col>
</Row>
```

**触发方式**

默认：鼠标悬停

```js
initialState = {
  content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
}
;<Row>
  <Col col={3}>
    <Popover position="right" title="标题" content={state.content}>
      <Button>鼠标悬停触发</Button>
    </Popover>
  </Col>
  <Col col={3}>
    <Popover
      trigger="click"
      position="bottom"
      title="标题"
      content={state.content}
    >
      <Button>点击触发</Button>
    </Popover>
  </Col>
</Row>
```

**自定义内容**

弹出层最大宽度默认为 276px，可以用过 style 属性或者 className 属性覆写样式：

```css
/* style={{ width: '500px', maxWidth: 'none' }} 或 */
.override {
  max-width: none;
  width: 500px;
}
```

```js
initialState = {
  content: (
    <Table data={[{ name: '青青', age: '18', nation: '中国' }]}>
      <TableColumn prop="name" Header="姓名" />
      <TableColumn prop="age" Header="年龄" />
      <TableColumn prop="nation" Header="国籍" />
    </Table>
  ),
}
;<Row>
  <Col col={3}>
    <Popover
      trigger="click"
      position="bottom"
      title="标题"
      content={state.content}
    >
      <Button>点击显示表格</Button>
    </Popover>
  </Col>
  <Col col={3}>
    <Popover trigger="click" position="bottom" content={state.content}>
      <Button>点击显示无标题</Button>
    </Popover>
  </Col>
  <Col col={3}>
    <Popover
      trigger="click"
      position="bottom"
      content={state.content}
      style={{ width: '500px', maxWidth: 'none' }}
    >
      <Button>自定义宽度</Button>
    </Popover>
  </Col>
</Row>
```

### 变更记录

v2.0.0

- 新增 trigger 参数

v3.0.0

- 新增 position 属性有效值：top-start、top-end、bottom-start、bottom-end
