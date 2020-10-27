### 注意事项

- 使用 Ico 组件需要手动在 HTML 页面中引入 CSS 文件：

```html
<link
  rel="stylesheet"
  href="https://at.alicdn.com/t/font_2010704_ph7d2pl746e.css"
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
  'floppy-o',
  'calendar',
  'user-tie',
  'user-suit',
  'lock',
  'unlock',
  'lock-o',
  'unlock-o',
  'send',
  'send-o',
  'bell-o',
  'cubes',
  'cubes-o',
  'user-suit-o',
  'user-tie-o',
  'van-o',
  'user-cap-o',
  'shop-o',
  'sad-o',
  'power-off',
  'pin-o',
  'news-o',
  'motorcycle-o',
  'location-o',
  'home',
  'group-o',
  'flag-o',
  'eye-o',
  'cog-o',
  'badge-o',
  'van',
  'user-cap',
  'shop',
  'plus-circle',
  'pin',
  'news',
  'motorcycle',
  'minus-circle',
  'heart',
  'group',
  'flag',
  'copy',
  'cog',
  'badge',
  'upload',
  'trash-o',
  'times-circle',
  'tag',
  'times-circle-o',
  'trash',
  'times',
  'user-o',
  'user',
  'water-o',
  'water',
  'user-circle-o',
  'search',
  'sad',
  'share-o',
  'shield-o',
  'sitemap-o',
  'smile-o',
  'sitemap',
  'rotate-right',
  'stamp',
  'smile',
  'star-o',
  'stamp-o',
  'star',
  'shield',
  'tag-o',
  'pause-circle-o',
  'picture',
  'normal',
  'picture-o',
  'phone-o',
  'phone',
  'normal-o',
  'plus-circle-o',
  'plus',
  'question-circle',
  'print',
  'rotate-left',
  'print-o',
  'question-circle-o',
  'info-circle',
  'location',
  'list',
  'mobile',
  'layers-o',
  'mobile-o',
  'layers',
  'minus-circle-o',
  'money-circle-o',
  'money-circle',
  'filter-o',
  'file',
  'fold-left',
  'file-o',
  'fold-down',
  'floppy',
  'fold-up',
  'folder-o',
  'folder',
  'fold-right',
  'grid-o',
  'grid',
  'heart-o',
  'comment',
  'copy-o',
  'exclamation-circle',
  'ellipsis-h',
  'earth',
  'download',
  'edit',
  'envelope',
  'expand',
  'envelope-o',
  'comment-o',
  'exclamation-circle-o',
  'exit',
  'eye',
  'eye-slash',
  'camera',
  'caret-down',
  'card',
  'chart-bar',
  'caret-up',
  'card-o',
  'check-circle',
  'check',
  'check-circle-o',
  'chart-line',
  'clock-o',
  'chain',
  'chart-pie',
  'chart-pie-o',
  'chart-point',
  'clock',
  'camera-o',
  'angle-down',
  'angle-up',
  'angle-right',
  'apps',
  'angle-double-left',
  'angle-left',
  'bars',
  'apps-o',
  'box',
  'bell',
  'angle-double-right',
  'box-o',
  'calendar-o',
  'building',
  'building-o',
  'check-bold',
  'circle-o',
  'check-square',
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
