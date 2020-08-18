### 注意事项

- 使用 Ico 组件需要手动在 HTML 页面中引入 CSS 文件：

```html
<link
  rel="stylesheet"
  href="https://at.alicdn.com/t/font_2010704_iayacnbwwce.css"
/>
```

- Dada Icon Font 样式类名为 `.dada-ico`，指定 type 后附加样式类名 `.dada-ico-xxx`，xxx 为 type 名称。

### 示例

#### 基本

图标基本使用方法。

```js
<Ico type="smile-o" />
```

#### 图标列表

<style type='text/css'>
.demo-ico-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.demo-ico-item {
  display: inline-block;
  width: 150px;
  text-align: center;
  cursor: pointer;
  padding: 20px 0;
}
.demo-ico-item:hover {
  background-color: #F5F5F5;
}
</style>

```javascript
const allIcoType = [
  'info-circle',
  'angle-left',
  'angle-right',
  'angle-double-left',
  'angle-double-right',
  'angle-up',
  'angle-down',
  'times',
  'check',
  'rotate-left',
  'rotate-right',
  'check-circle-o',
  'times-circle-o',
  'clock-o',
  'pause-circle-o',
  'smile-o',
  'list',
  'bars',
  'search',
  'plus',
  'trash',
  'upload',
  'download',
  'user',
  'calendar',
  'bar-chart',
  'circle-o',
  'ellipsis-h',
  'caret-down',
  'caret-up',
  'exclamation-circle',
  'question-circle',
  'check-circle',
  'times-circle',
  'check-square',
  'camera',
  'map-marker',
  'eye',
  'file-text',
]
const IcoList = () => {
  const [keyword, setKeyword] = React.useState('')
  const [icoList, setIcoList] = React.useState([])

  React.useEffect(
    () => {
      if (!keyword) {
        setIcoList(allIcoType)
      }
      setIcoList(allIcoType.filter(ico => ico.includes(keyword.toLowerCase())))
    },
    [keyword]
  )

  return (
    <div>
      <div className="text-center offset-b">
        搜索：
        <Input value={keyword} onChange={value => setKeyword(value)} />
      </div>
      <ul className="demo-ico-list">
        {icoList.map(ico => (
          <li key={ico} className="demo-ico-item">
            <Ico type={ico} />
            <div>{ico}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
;<IcoList />
```

#### 尺寸

Ico 的尺寸包括：xs，sm，md，lg，xl。<br/>
默认为 sm：16px。

```js
<Row className="flex-items-bottom">
  <Col col={1} className="text-center">
    <Ico type="smile-o" size="xs" />
    <div>xs</div>
  </Col>
  <Col col={1} className="text-center">
    <Ico type="smile-o" size="sm" />
    <div>sm</div>
  </Col>
  <Col col={1} className="text-center">
    <Ico type="smile-o" size="md" />
    <div>md</div>
  </Col>
  <Col col={1} className="text-center">
    <Ico type="smile-o" size="lg" />
    <div>lg</div>
  </Col>
  <Col col={1} className="text-center">
    <Ico type="smile-o" size="xl" />
    <div>xl</div>
  </Col>
</Row>
```

#### 自定义样式

图标字体本质上还是文字，可以使用 style 和 className 设置图标的大小和颜色。

```javascript
<Ico type='smile-o' style={{ fontSize: '30px', color: '#E64600' }} />
<Ico type='smile-o' className='offset-l-lg text-warning' />
```
