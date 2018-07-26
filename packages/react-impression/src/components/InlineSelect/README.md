### Examples

**Examples**

```js
  <Row>
    <Col col="1" className="text-right">
      <strong>城市：</strong>
    </Col>
    <Col col="11">
      <InlineSelect
        ref="city"
        defaultValue={'1'}
        onChange={this.selectCityHandle}
      >
        <InlineSelectOption value="1">北京</InlineSelectOption>
        <InlineSelectOption value="2">上海</InlineSelectOption>
        <InlineSelectOption value="3">南京</InlineSelectOption>
        <InlineSelectOption value="4">苏州</InlineSelectOption>
        <InlineSelectOption value="5">武汉</InlineSelectOption>
        <InlineSelectOption value="6">无锡</InlineSelectOption>
        <InlineSelectOption value="7">常州</InlineSelectOption>
        <InlineSelectOption value="8">深圳</InlineSelectOption>
        <InlineSelectOption value="9">重庆</InlineSelectOption>
        <InlineSelectOption value="10">长沙</InlineSelectOption>
        <InlineSelectOption value="11">成都</InlineSelectOption>
        <InlineSelectOption value="12">天津</InlineSelectOption>
        <InlineSelectOption value="13">厦门</InlineSelectOption>
        <InlineSelectOption value="14">福州</InlineSelectOption>
        <InlineSelectOption value="15">大连</InlineSelectOption>
        <InlineSelectOption value="16">青岛</InlineSelectOption>
        <InlineSelectOption value="17">哈尔滨</InlineSelectOption>
        <InlineSelectOption value="18">济南</InlineSelectOption>
        <InlineSelectOption value="19">郑州</InlineSelectOption>
        <InlineSelectOption value="20">西安</InlineSelectOption>
        <InlineSelectOption value="21">泉州</InlineSelectOption>
        <InlineSelectOption value="22">东莞</InlineSelectOption>
        <InlineSelectOption value="23">佛山</InlineSelectOption>
      </InlineSelect>
    </Col>
  </Row>
  <Row>
    <Col col="1" className="text-right">
      <strong>区域：</strong>
    </Col>
    <Col col="11">
      <InlineSelect defaultValue={'1'} onChange={this.selectZoneHandle}>
        <InlineSelectOption value="1">金山区</InlineSelectOption>
        <InlineSelectOption value="2">鼓楼区</InlineSelectOption>
        <InlineSelectOption value="3">朝阳区</InlineSelectOption>
        <InlineSelectOption value="4">马尾区</InlineSelectOption>
      </InlineSelect>
    </Col>
  </Row>
```
