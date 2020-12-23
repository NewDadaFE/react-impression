颜色体系分为：主色、功能色、中性色。

<style type='text/css'>
.reset > .row > div > div {
  color: white;
}
.reset > .row > div > div,
.bg-reset > .row > div > div {
  padding: 8px 16px;
  height: 100%;
  border: 1px solid #F6F6F6;
}
</style>

### 主色

UI 以品牌蓝延展色作为主色，常用于强调视觉重量。

```javascript
<div className="reset">
  <Row>
    <Col col={3}>
      <div className="bg-primary">
        <h5>Primary</h5>
        <div>#008CF0</div>
        <div>HSB 205, 100, 94</div>
        <div>$blue-primary</div>
        <div>$brand-primary</div>
      </div>
    </Col>
    <Col col={3}>
      <div style={{ backgroundColor: '#0095FF' }}>
        <h5>Light primary</h5>
        <div>#0095FF</div>
        <div>HSB 205, 100, 100</div>
        <div>$blue-light</div>
        <div>$brand-light</div>
      </div>
    </Col>
    <Col col={3}>
      <div style={{ backgroundColor: '#0083E0' }}>
        <h5>Dark primary</h5>
        <div>#0083E0</div>
        <div>HSB 205, 100, 88</div>
        <div>$blue-dark</div>
        <div>$brand-dark</div>
      </div>
    </Col>
  </Row>
</div>
```

### 功能色

这类色彩起到传递功能信息、代表某种状态等作用。主要应用于消息通知、反馈提醒、表单校验这类场景中的提示、成功、警示、失败等状态。

```javascript
<div className="reset">
  <Row>
    <Col col={3}>
      <div style={{ backgroundColor: '#3CA0FF' }}>
        <h6>信息提示</h6>
        <div>#3CA0FF</div>
        <div>$blue-lighter</div>
        <div>$brand-info</div>
      </div>
    </Col>
    <Col col={3}>
      <div className="bg-success">
        <h6>成功提示</h6>
        <div>#00CB83</div>
        <div>$green-primary</div>
        <div>$brand-success</div>
      </div>
    </Col>
    <Col col={3}>
      <div className="bg-warning">
        <h6>警示提示</h6>
        <div>#FF9600</div>
        <div>$orange-primary</div>
        <div>$brand-warning</div>
      </div>
    </Col>
    <Col col={3}>
      <div className="bg-danger">
        <h6>失败提示</h6>
        <div>#E64600</div>
        <div>$red-primary</div>
        <div>$brand-danger</div>
      </div>
    </Col>
  </Row>
</div>
```

### 中性色

中性色常用于文本、背景、边框、阴影等，用以体现页面的层次结构。

```javascript
<div className="reset">
  <Row>
    <Col col={3}>
      <div style={{ backgroundColor: '#262626' }}>
        <h6>标题/正文文字、侧边栏</h6>
        <div>#262626</div>
        <div>$gray-base</div>
        <div>$body-color</div>
      </div>
    </Col>
    <Col col={3}>
      <div style={{ backgroundColor: '#595959' }}>
        <h6>正文文字</h6>
        <div>#595959</div>
        <div>$gray-darker</div>
      </div>
    </Col>
    <Col col={3}>
      <div style={{ backgroundColor: '#8C8C8C' }}>
        <h6>辅助、次要文字</h6>
        <div>#8C8C8C</div>
        <div>$gray-dark</div>
        <div>$text-muted</div>
      </div>
    </Col>
    <Col col={3}>
      <div style={{ backgroundColor: '#BFBFBF' }}>
        <h6>占位文字、禁用状态文字</h6>
        <div>#BFBFBF</div>
        <div>$gray</div>
        <div>$disabled-color</div>
      </div>
    </Col>
  </Row>
  <Row>
    <Col col={3}>
      <div style={{ backgroundColor: '#D9D9D9', color: '#8C8C8C' }}>
        <h6>可交互的描边相关</h6>
        <div>#D9D9D9</div>
        <div>$gray-light</div>
        <div>$border-color</div>
      </div>
    </Col>
    <Col col={3}>
      <div style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C' }}>
        <h6>分割线（深）、以及页面结构背景色</h6>
        <div>#F5F5F5</div>
        <div>$gray-lighter</div>
      </div>
    </Col>
    <Col col={3}>
      <div style={{ backgroundColor: '#FAFAFA', color: '#8C8C8C' }}>
        <h6>分割线（浅）、以及表格内斑马格</h6>
        <div>#FAFAFA</div>
        <div>$gray-lightest</div>
      </div>
    </Col>
    <Col col={3}>
      <div style={{ backgroundColor: '#FFFFFF', color: '#262626' }}>
        <h6>纯白色背景</h6>
        <div>#FFFFFF</div>
        <div>$brand-pure</div>
        <div>$body-bg</div>
      </div>
    </Col>
  </Row>
</div>
```

### 背景色样式工具类

组件库提供了部分改变背景色的样式工具类。

```javascript
<div className="bg-reset">
  <Row>
    <Col col={3}>
      <div className="bg-primary">
        <h6>主题蓝色背景</h6>
        <div>.bg-primary</div>
      </div>
    </Col>
    <Col col={3}>
      <div className="bg-secondary">
        <h6>次级橘色背景</h6>
        <div>.bg-secondary</div>
      </div>
    </Col>
    <Col col={3}>
      <div className="bg-warning">
        <h6>警告橘色背景</h6>
        <div>.bg-warning</div>
      </div>
    </Col>
    <Col col={3}>
      <div className="bg-success">
        <h6>绿色背景</h6>
        <div>.bg-success</div>
      </div>
    </Col>
  </Row>
  <Row>
    <Col col={3}>
      <div className="bg-danger">
        <h6>红色背景</h6>
        <div>.bg-danger</div>
      </div>
    </Col>
    <Col col={3}>
      <div className="bg-inverse">
        <h6>灰色背景</h6>
        <div>#BFBFBF</div>
        <div>.bg-inverse</div>
      </div>
    </Col>
    <Col col={3}>
      <div className="bg-default">
        <h6>浅灰色背景</h6>
        <div>#F5F5F5</div>
        <div>.bg-default</div>
      </div>
    </Col>
    <Col col={3}>
      <div className="bg-faded">
        <h6>最浅灰色背景</h6>
        <div>#FAFAFA</div>
        <div>.bg-faded</div>
      </div>
    </Col>
  </Row>
  <Row>
    <Col col={3}>
      <div className="bg-pure">
        <h6>透明背景</h6>
        <div>.bg-pure</div>
      </div>
    </Col>
  </Row>
</div>
```
