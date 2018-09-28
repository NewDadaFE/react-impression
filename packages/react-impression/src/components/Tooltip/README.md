### 注意

1. 这种模式会占用父组件的**::before**、**::after**伪类样式，父元素样式有被干扰的风险。
2. 提示块宽度与父元素同宽，最大宽度为 240 像素。
3. 暂不支持改变提示块的宽度。

### 示例

**基本用法**

```js
<Row>
  <Col>
    <Tooltip content="提示内容" position="top">
      <Button theme="primary">上方</Button>
    </Tooltip>
  </Col>
  <Col>
    <Tooltip content="提示内容很多很多很多很多很多很多" position="bottom">
      <Button theme="primary">底部</Button>
    </Tooltip>
  </Col>
  <Col>
    <Tooltip content="提示内容" position="left">
      <Button theme="primary">左侧</Button>
    </Tooltip>
  </Col>
  <Col>
    <Tooltip content="提示内容" position="right">
      <Button theme="primary">右侧</Button>
    </Tooltip>
  </Col>
</Row>
```

**直接使用属性**

> 直接在作用的组件上通过**data-tooltip**属性指定提示内容，**data-tooltip-pos**属性指定提示显示的位置，**两者均为必填项**。

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
