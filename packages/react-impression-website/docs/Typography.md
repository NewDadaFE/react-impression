段落布局需遵循参考设计规范：全局样式-字体。

### 字号

```javascript
<Row>
  <Col col={4}><h1>h1.标题字符</h1></Col>
  <Col col={2}><h1>44px</h1></Col>
</Row>
<Row>
  <Col col={4}><h2>h2.标题字符</h2></Col>
  <Col col={2}><h2>38px</h2></Col>
</Row>
<Row>
  <Col col={4}><h3>h3.标题字符</h3></Col>
  <Col col={2}><h3>28px</h3></Col>
</Row>
<Row>
  <Col col={4}><h4>h4.标题字符</h4></Col>
  <Col col={2}><h4>24px</h4></Col>
</Row>
<Row>
  <Col col={4}><h5>h5.标题字符</h5></Col>
  <Col col={2}><h5>20px</h5></Col>
</Row>
<Row>
  <Col col={4}><h6>h6.标题字符</h6></Col>
  <Col col={2}><h6>16px</h6></Col>
</Row>
```

### 字色

组件库提供符合设计规范的文字颜色工具样式类。

```javascript
<div>
  <p className="text-muted">次级文字 (text-muted)</p>
  <p className="text-primary">主题文字 (text-primary)</p>
  <p className="text-info">提示文字 (text-info)</p>
  <p className="text-success">成功文字 (text-success)</p>
  <p className="text-warning">警告文字 (text-warning)</p>
  <p className="text-danger">危险文字 (text-danger)</p>
  <p className="text-pure" style={{ backgroundColor: 'black' }}>
    白色文字 (text-pure)
  </p>
</div>
```

### 字体样式

```javascript
<div>
  <p className="font-weight-normal">正常字重 (font-weight-normal)</p>
  <p className="font-weight-bold">加粗文字 (font-weight-bold)</p>
  <p className="font-italic">文字倾斜 (font-italic)</p>
</div>
```

### 对齐方式

段落布局需遵循参考设计规范：设计原则-对齐。

```javascript
<div>
  <p className="text-left">文字内容 (text-left)</p>
  <p className="text-center">文字内容 (text-center)</p>
  <p className="text-right">文字内容 (text-right)</p>
  <div className="offset-b">
    <Button theme="secondary">文字</Button>
    <span className="vertical-middle">中线对齐 (vertical-middle)</span>
  </div>
  <div className="offset-b">
    <Button theme="secondary">文字</Button>
    <span className="vertical-top">顶部对齐 (vertical-top)</span>
  </div>
  <div>
    <Button theme="secondary">文字</Button>
    <span className="vertical-bottom">底部对齐 (vertical-bottom)</span>
  </div>
</div>
```

### 其他文字工具类

```javascript
<div>
  <p
    className="text-nowrap"
    style={{ width: '240px', backgroundColor: '#D9D9D9' }}
  >
    强制不换行 (text-nowrap)强制不换行 (text-nowrap)
  </p>
  <p
    className="text-truncate"
    style={{ width: '240px', backgroundColor: '#D9D9D9' }}
  >
    溢出显示省略号 (text-truncate)溢出显示省略号 (text-truncate)
  </p>
  <p className="text-lowercase">字母小写 (Text-Lowercase)</p>
  <p className="text-uppercase">字母大写 (Text-Uppercase)</p>
  <p className="text-capitalize">首字母大写 (text-capitalize)</p>
</div>
```
