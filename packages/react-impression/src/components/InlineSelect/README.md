### 示例

**基本用法**

```js
  <Row>
    <Col col="12">
      <InlineSelect
        ref="city"
        label='省份'
        col={1}
        defaultValue={'17'}
        onChange={this.selectCityHandle}
      >
        <InlineSelectOption value="1">北京市</InlineSelectOption>
        <InlineSelectOption value="2">上海市</InlineSelectOption>
        <InlineSelectOption value="3">天津市
</InlineSelectOption>
        <InlineSelectOption value="4">重庆市</InlineSelectOption>
        <InlineSelectOption value="5">安徽省</InlineSelectOption>
        <InlineSelectOption value="6">福建省</InlineSelectOption>
        <InlineSelectOption value="7">甘肃省</InlineSelectOption>
        <InlineSelectOption value="8">广东省</InlineSelectOption>
        <InlineSelectOption value="9">贵州省</InlineSelectOption>
        <InlineSelectOption value="10">海南省</InlineSelectOption>
        <InlineSelectOption value="11">河北省</InlineSelectOption>
        <InlineSelectOption value="12">河南省</InlineSelectOption>
        <InlineSelectOption value="13">黑龙江省</InlineSelectOption>
        <InlineSelectOption value="14">湖北省</InlineSelectOption>
        <InlineSelectOption value="15">湖南省</InlineSelectOption>
        <InlineSelectOption value="16">吉林省</InlineSelectOption>
        <InlineSelectOption value="17">江苏省</InlineSelectOption>
        <InlineSelectOption value="18">江西省</InlineSelectOption>
        <InlineSelectOption value="19">辽宁省</InlineSelectOption>
        <InlineSelectOption value="20">青海省</InlineSelectOption>
        <InlineSelectOption value="21">山东省</InlineSelectOption>
        <InlineSelectOption value="22">山西省</InlineSelectOption>
        <InlineSelectOption value="23">陕西省</InlineSelectOption>
        <InlineSelectOption value="24">四川省</InlineSelectOption>
        <InlineSelectOption value="25">台湾省</InlineSelectOption>
        <InlineSelectOption value="26">云南省</InlineSelectOption>
        <InlineSelectOption value="27">浙江省</InlineSelectOption>
      </InlineSelect>
    </Col>
  </Row>
  <Row>
    <Col col="1" style={{padding: '0.57143rem 0.71429rem',boxSizing: 'border-box',color: '#132240'}} className='text-right'><strong>城市:</strong> </Col>
    <Col col="11" style={{paddingLeft:0}}>
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
```

### 变更记录

v2.0.0

* 新增 label 标签名属性，不传可自定义 label 项目
* 新增 col 标签占比参数，默认值为 1
* 删除对 InlineSelect.Option 写法的支持，请使用 InlineSelectOption 标签
