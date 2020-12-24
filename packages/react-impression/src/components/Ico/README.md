### 注意

- 使用 Ico 组件需要手动在 HTML 页面中引入 CSS 文件：

```html
<link
  rel="stylesheet"
  href="https://at.alicdn.com/t/font_2010704_0skvm4f627s.css"
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
  'angle-double-left',
  'angle-double-right',
  'angle-down',
  'angle-left',
  'angle-right',
  'angle-up',
  'apps',
  'apps-o',
  'badge',
  'badge-o',
  'bars',
  'bell',
  'bell-o',
  'box',
  'box-o',
  'building',
  'building-o',
  'calendar',
  'calendar-o',
  'camera',
  'camera-o',
  'card',
  'card-o',
  'caret-down',
  'caret-up',
  'chain',
  'chart-bar',
  'chart-line',
  'chart-pie',
  'chart-pie-o',
  'chart-point',
  'check',
  'check-bold',
  'check-circle',
  'check-circle-o',
  'check-square',
  'circle-o',
  'clock',
  'clock-o',
  'cog',
  'cog-o',
  'comment',
  'comment-o',
  'copy',
  'copy-o',
  'cubes',
  'cubes-o',
  'download',
  'earth',
  'edit',
  'ellipsis-h',
  'envelope',
  'envelope-o',
  'exclamation-circle',
  'exclamation-circle-o',
  'exit',
  'expand',
  'eye',
  'eye-o',
  'eye-slash',
  'file',
  'file-o',
  'filter-o',
  'flag',
  'flag-o',
  'floppy',
  'floppy-o',
  'fold-down',
  'fold-left',
  'fold-right',
  'fold-up',
  'folder',
  'folder-o',
  'grid',
  'grid-o',
  'group',
  'group-o',
  'heart',
  'heart-o',
  'home-o',
  'info-circle',
  'layers',
  'layers-o',
  'list',
  'location',
  'location-o',
  'lock',
  'lock-o',
  'minus-circle',
  'minus-circle-o',
  'mobile',
  'mobile-o',
  'money-circle',
  'money-circle-o',
  'motorcycle',
  'motorcycle-o',
  'news',
  'news-o',
  'normal',
  'normal-o',
  'pause-circle-o',
  'phone',
  'phone-o',
  'picture',
  'picture-o',
  'pin',
  'pin-o',
  'plus',
  'plus-circle',
  'plus-circle-o',
  'power-off',
  'print',
  'print-o',
  'question-circle',
  'question-circle-o',
  'rotate-left',
  'rotate-right',
  'sad',
  'sad-o',
  'search',
  'send',
  'send-o',
  'share-o',
  'shield',
  'shield-o',
  'shop',
  'shop-o',
  'sitemap',
  'sitemap-o',
  'smile',
  'smile-o',
  'stamp',
  'stamp-o',
  'star',
  'star-o',
  'tag',
  'tag-o',
  'times',
  'times-circle',
  'times-circle-o',
  'trash',
  'trash-o',
  'unlock',
  'unlock-o',
  'upload',
  'user',
  'user-cap',
  'user-cap-o',
  'user-circle-o',
  'user-o',
  'user-suit',
  'user-suit-o',
  'user-tie',
  'user-tie-o',
  'van',
  'van-o',
  'water',
  'water-o',
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

Ico 的尺寸包括：xs，sm(默认)，md，lg，xl。<br/>

```js
<Row className="flex-items-bottom text-center">
  <Col col={1}>
    <Ico type="smile-o" size="xs" />
    <div>xs</div>
    <div>12px</div>
  </Col>
  <Col col={1} className="text-danger">
    <Ico type="smile-o" size="sm" />
    <div>sm</div>
    <div>16px</div>
  </Col>
  <Col col={1}>
    <Ico type="smile-o" size="md" />
    <div>md</div>
    <div>20px</div>
  </Col>
  <Col col={1}>
    <Ico type="smile-o" size="lg" />
    <div>lg</div>
    <div>32px</div>
  </Col>
  <Col col={1}>
    <Ico type="smile-o" size="xl" />
    <div>xl</div>
    <div>40px</div>
  </Col>
</Row>
```

#### 自定义样式

图标字体本质上还是文字，可以使用 style 和 className 设置图标的大小和颜色。

```javascript
<Ico type='smile-o' style={{ fontSize: '30px', color: '#E64600' }} />
<Ico type='smile-o' className='offset-l-lg text-warning' />
```

### 变更记录

v3.0.0

- 新增 Ico 组件
