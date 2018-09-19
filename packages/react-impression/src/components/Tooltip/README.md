### 代码示例

1. 通过**data-tooltip**属性指定提示内容，**data-tooltip-pos**属性指定提示显示的位置，**两者均为必填项**。
2. 这种模式会占用父组件的**::before**、**::after**伪类样式，父元素样式有被干扰的风险。
3. 暂不支持改变提示块的宽度。

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
