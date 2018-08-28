### 示例

**单个文件点击上传**

```js
let file
;<div>
  <Row>
    <Col col={7}>
      <Input ref={ref => (file = ref)} type="file" />
    </Col>
  </Row>
  <Row>
    <Col col={7}>
      <Input type="file" placeholder="请上传资质证明" onChange={() => {}} />
    </Col>
  </Row>
  <Row>
    <Col col={7}>
      <Upload btnText="附件" btnStyle="primary" />
    </Col>
  </Row>
</div>
```

**图片上传**

```js
let upload
;<Row>
  <Col>
    <Upload ref={ref => (upload = ref)} preview />
  </Col>
  <Col>
    <Upload preview message="上传图片">
      <Icon type="plus" />
    </Upload>
  </Col>
  <Col>
    <Upload
      src="https://nzfq0mp27.qnssl.com/0.1.18/homeV3/images/enjoy.jpg"
      preview
    />
  </Col>
</Row>
```

### 变更记录

v2.0.0

* 新增 sass 变量`$upload-color`表示 上传文件文字颜色
* 新增 sass 变量`$upload-icon-color`表示 上传文件 Icon 颜色
* 新增 sass 变量`$upload-icon-font-size`表示 上传文件 Icon 大小
* 新增 sass 变量`$upload-padding`表示 上传文件按钮和 Icon 内边距
* 新增 sass 变量`$upload-offset-left`表示 上传文件左侧文字偏移量
* 新增 sass 变量`$upload-preview-addon-line-height`表示 图片上传 Icon 行高
* 新增 sass 变量`$upload-preview-addon-width`表示 图片上传 Icon 宽度
* 新增 sass 变量`$upload-preview-img-bg`表示 图片上传背景色
* 新增 sass 变量`$upload-preview-img-width`表示 图片上传宽度
* 新增 sass 变量`$upload-preview-img-height`表示 图片上传高度
* 新增 sass 变量`$upload-preview-img-border-color`表示 图片上传边框色
* 新增 sass 变量`$upload-preview-remove-font-size`表示 移除图片字体大小
* 新增 sass 变量`$upload-preview-remove-color`表示 移除图片字体颜色
* 新增 sass 变量`$upload-preview-remove-bg`表示 移除图片背景色
* 更改 sass 变量`$upload-preview-img-padding`为 `$upload-preview-img-margin` 表示 图片预览外边距
