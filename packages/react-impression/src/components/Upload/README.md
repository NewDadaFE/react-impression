### 示例

**基本用法**

```js
let file
;<Row>
  <Col>
    <Input ref={ref => (file = ref)} type="file" />
  </Col>
  <Col>
    <Input type="file" placeholder="请上传资质证明" onChange={() => {}} />
  </Col>
  <Col>
    <Upload btnText="附件" btnStyle="primary" />
  </Col>
</Row>
```

**图片预览**

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
