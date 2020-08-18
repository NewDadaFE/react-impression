### 示例

**自适应模式**

显示规则：图片最大宽度为容器宽度，高度等比例缩放。

**Tips：同时指定 mode 属性、fluid 属性时，fluid 效果会被 mode 覆盖。**

```js
<Image fluid src="https://placehold.it/1500x200" />
```

---

**指定显示模式**

**Tips：指定 mode 属性后，Image 组件的 width 和 height 属性需要指定，否则图片尺寸显示为 0。**

```js
<div>
  <p>原图:</p>
  <Image src="https://placehold.it/400x240" />
  <br />
  <Row>
    <Col>1、图片缩放充满容器（scaleToFill）</Col>
    <Col>
      2、图片等比例缩放，保证长边完全展示，短边方向会有空白（aspectFit）
    </Col>
    <Col>3、图片等比例缩放，短边完全展示，长边方向会被裁减（aspectFill）</Col>
  </Row>
  <Row>
    <Col>
      <Image
        style={{ border: '1px solid gray' }}
        mode="scaleToFill"
        src="https://placehold.it/400x240"
        width={200}
        height={200}
      />
    </Col>
    <Col>
      <Image
        style={{ border: '1px solid gray' }}
        mode="aspectFit"
        src="https://placehold.it/400x240"
        width={200}
        height={200}
      />
    </Col>
    <Col>
      <Image
        style={{ border: '1px solid gray' }}
        mode="aspectFill"
        src="https://placehold.it/400x240"
        width={200}
        height={200}
      />
    </Col>
  </Row>
  <Row>
    <Col>4、图片无缩放，显示图片顶部区域（top）</Col>
    <Col>5、图片无缩放，显示图片左上角区域（top left）</Col>
    <Col>6、图片无缩放，显示图片中间区域（center）</Col>
  </Row>
  <Row>
    <Col>
      <Image
        style={{ border: '1px solid gray' }}
        mode="top"
        src="https://placehold.it/400x240"
        width={200}
        height={200}
      />
    </Col>
    <Col>
      <Image
        style={{ border: '1px solid gray' }}
        mode="top left"
        src="https://placehold.it/400x240"
        width={200}
        height={200}
      />
    </Col>
    <Col>
      <Image
        style={{ border: '1px solid gray' }}
        mode="center"
        src="https://placehold.it/400x240"
        width={200}
        height={200}
      />
    </Col>
  </Row>
</div>
```

---

**多形状模式**

```js
<Row className="text-center">
  <Col>
    <Image src="https://placehold.it/200x200" rounded />
    <div>圆角（rounded）</div>
  </Col>
  <Col>
    <Image src="https://placehold.it/200x200" circle />
    <div>圆形（circle）</div>
  </Col>
  <Col>
    <Image src="https://placehold.it/200x200" thumbnail />
    <div className="text-center">缩略图（thumbnail）</div>
  </Col>
</Row>
```

### 变更记录

v2.1.1

- 新增 mode 属性、width 属性、height 属性
