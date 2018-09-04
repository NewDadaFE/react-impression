### 示例

**需要引入 Tooltip 组件的方式**

```js
<Row>
  <Col>
    <Tooltip position="top" content="提示内容">
      <Button theme="primary">上方</Button>
    </Tooltip>
  </Col>
  <Col>
    <Tooltip position="bottom" content="提示内容很多很多很多很多很多很多">
      <Button theme="primary">底部</Button>
    </Tooltip>
  </Col>
  <Col>
    <Tooltip position="left" content="提示内容">
      <Button theme="primary">左侧</Button>
    </Tooltip>
  </Col>
  <Col>
    <Tooltip position="right" content="提示内容">
      <Button theme="primary">右侧</Button>
    </Tooltip>
  </Col>
</Row>
```

**纯 CSS 效果**

1. 通过**data-tooltip**属性指定提示内容，**data-tooltip-pos**属性指定提示显示的位置。
2. 两者均为必填项。
3. 这种模式会占用父组件的**::before**、**::after**伪类样式。
4. 暂不支持改变提示块的宽度。

```js
<Row>
  <Col>
    <Button theme="primary" data-tooltip="提示内容" data-tooltip-pos="top">
      上方
    </Button>
  </Col>
  <Col>
    <Button
      theme="primary"
      data-tooltip="提示内容很多很多很多很多很多很多"
      data-tooltip-pos="bottom"
    >
      底部
    </Button>
  </Col>
  <Col>
    <Button theme="primary" data-tooltip="提示内容" data-tooltip-pos="left">
      左侧
    </Button>
  </Col>
  <Col>
    <Button theme="primary" data-tooltip="提示内容" data-tooltip-pos="right">
      右侧
    </Button>
  </Col>
</Row>
```

### 变更记录

v2.0.0

* 新增 通过纯 CSS 实现的 Tooltip 效果
