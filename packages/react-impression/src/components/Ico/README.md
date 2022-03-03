### 注意

- 使用 Ico 组件需要手动在 HTML 页面中引入 CSS 文件：

```html
<link
  rel="stylesheet"
  href="http://fe.imdada.cn/font_2010704_20ye7uiwzku.css"
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
  width: 140px;
  text-align: center;
  cursor: pointer;
  padding: 20px 0;
}
.demo-ico-item:hover {
  background-color: #F5F5F5;
}
</style>

```javascript
const iconsTypes = [
  {
    title: '指向类图标',
    icons: [
      'angle-down',
      'angle-left',
      'angle-right',
      'angle-up',
      'angle-double-left',
      'angle-double-right',
      'expand',
      'fold-down',
      'fold-left',
      'fold-right',
      'fold-up',
      'rotate-left',
      'rotate-right',
      'exchange',
      'exchange-h',
      'top',
      'caret-down',
      'caret-up',
      'caret-left',
      'caret-right',
    ],
  },
  {
    title: '数据类图标',
    icons: [
      'chart-bar',
      'chart-line',
      'chart-pie-o',
      'chart-pie',
      'chart-point',
      'chart-funnel',
    ],
  },
  {
    title: '提示类图标',
    icons: [
      'check-circle-o',
      'times-circle-o	',
      'exclamation-circle-o',
      'minus-circle-o',
      'plus-circle-o',
      'question-circle-o',
      'eye-o',
      'eye-slash-o',
      'minus-square-o',
      'plus-square-o',
      'pause-circle-o',
      'play-circle-o',
      'stop-o',
      'check-bold',
      'check',
      'download',
      'minus',
      'plus',
      'times',
      'upload',
      'check-circle',
      'times-circle',
      'exclamation-circle',
      'minus-circle',
      'plus-circle',
      'question-circle',
      'eye',
      'eye-slash',
      'minus-square',
      'plus-square',
    ],
  },
  {
    title: '订单类图标',
    icons: [
      'file-line-o',
      'file-line',
      'file',
      'file-o',
      'form-bar-o',
      'form-bar',
      'form-curve-o',
      'form-curve',
      'form-time',
      'form-time-o',
      'form',
      'form-o',
      'news-o',
      'news',
      'form-heart-o',
      'form-star-o',
      'form-close-o',
      'order-o',
      'order-pen-o',
      'form-grid-o',
    ],
  },
  {
    title: '车辆类图标',
    icons: [
      'motorcycle-o',
      'motorcycle',
      'van',
      'van-o',
      'car-electric',
      'car-motorcycles',
      'car-pedal',
      'car-tricycle',
      'car',
    ],
  },
  {
    title: '用户类图标',
    icons: [
      'smile-o',
      'smile',
      'normal',
      'normal-o',
      'sad',
      'sad-o',
      'card',
      'card-o',
      'user-cap',
      'user-cap-o',
      'user-suit',
      'user-suit-o',
      'user-tie',
      'user-tie-o',
      'user',
      'user-o',
      'user-circle-o',
      'user-group-o',
      'user-check-o',
    ],
  },
  {
    title: '画板类图标',
    icons: [
      'text-bold',
      'text-center',
      'text-left',
      'text-right',
      'text-direction',
      'text-italic',
      'text-underline',
      'text-delete',
      'proportion-o',
      'proportion',
      'text-word-space',
      'text-line-space',
    ],
  },
  {
    title: '系统图标',
    icons: [
      'apps',
      'apps-o',
      'bell',
      'bell-o',
      'calendar',
      'calendar-o',
      'camera',
      'camera-o',
      'clock',
      'clock-o',
      'cog',
      'cog-o',
      'comment',
      'comment-o',
      'copy',
      'copy-o',
      'envelope',
      'envelope-o',
      'heart',
      'heart-o',
      'earth',
      'earth-o',
      'folder',
      'folder-o',
      'home',
      'home-o',
      'lock',
      'lock-o',
      'unlock',
      'unlock-o',
      'layers',
      'layers-o',
      'picture',
      'picture-o',
      'phone',
      'phone-o',
      'location',
      'location-o',
      'mobile',
      'mobile-o',
      'send',
      'send-o',
      'star',
      'star-o',
      'stamp',
      'stamp-o',
      'tag',
      'tag-o',
      'trash',
      'trash-o',
      'pin',
      'pin-o',
      'print',
      'print-o',
      'bars',
      'search-plus-o',
      'search',
      'share-o',
      'ellipsis-h',
      'ellipsis-v',
      'filter-o',
      'list',
      'headset',
      'edit',
      'scanning',
    ],
  },
  {
    title: '通用图标',
    icons: [
      'badge',
      'badge-o',
      'money-circle',
      'money-circle-o',
      'group',
      'group-o',
      'shop',
      'shop-o',
      'shield',
      'shield-o',
      'grid',
      'grid-o',
      'computer',
      'computer-o',
      'floppy',
      'floppy-o',
      'map',
      'map-o',
      'flag',
      'flag-o',
      'water',
      'water-o',
      'cubes',
      'cubes-o',
      'box',
      'box-o',
      'computer-spot',
      'computer-spot-o',
      'building',
      'building-o',
      'sitemap',
      'sitemap-o',
      'wrench-o',
      'volume-o',
      'money-up-o',
      'warehouse-o',
      'money-o',
      'box-volume-o',
      'blackboard-o',
      'crown-o',
      'equipment-o',
      'case-o',
      'brush-o',
      'star-arrow-o',
      'kpi-o',
      'shop',
      'shop-o',
      'shop-v-o',
      'cart-o',
      'gift-o',
      'hexagon-y-o',
      'science-o',
      'loop-diamond-o',
      'power-off',
      'location-o',
      // 'import',
      'chain',
      'exit',
      'AB',
      'meter',
      'sliders',
    ],
  },
]
const IcoList = () => {
  const [keyword, setKeyword] = React.useState('')
  const [icoList, setIcoList] = React.useState([])

  React.useEffect(
    () => {
      if (!keyword) {
        setIcoList(iconsTypes)
      }
      const filterIcons = []
      let allIcons = []
      iconsTypes.map(item => {
        const { icons = [], title = '' } = item
        allIcons = [...allIcons, ...icons]
        const list = icons.filter(ico => ico.includes(keyword.toLowerCase()))
        list.length > 0 && filterIcons.push({ title, icons: list })
      })
      setIcoList(filterIcons)
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
        {icoList.map(({ icons = [], title = '' }) => (
          <div className="padding-xs">
            <h5 className="text-center">{title}</h5>
            {icons.map(ico => (
              <li key={ico} className="demo-ico-item">
                <Ico type={ico} />
                <div>{ico}</div>
              </li>
            ))}
          </div>
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
