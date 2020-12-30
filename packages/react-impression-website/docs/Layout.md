在「间距」设计规范中，8px 是「基础间距」，实际间距 y = 8 \* n，其中 n > 0，例如 8px（小号间距）、16px（中号间距）、24px（大号间距），有规律的使用间距可以更容易实现「亲密性」设计原则。

组件库提供 7 个方向，5 种尺寸的内外边距工具类。

**方向：上(-t)、下(-b)、上下(-tb)、左(-l)、右(-r)、左右(-lr)、四周('')**

**尺寸：xxs(4px)、xs(8px)、sm(12px)、默认(16px)、lg(20px)、xl(32px)、xxl(48px)、无间距(0)**

### 外边距 (offset)

外边距工具类由方向和大小排列组 + 无外边距的情况，共 56 个样式工具类。

```javascript
const data = [
  {
    size: '0px',
    top: '.no-margin-t',
    bottom: '.no-margin-b',
    topBottom: '.no-margin-tb',
    left: '.no-margin-l',
    right: '.no-margin-r',
    leftRight: '.no-margin-lr',
    around: '.no-margin',
  },
  {
    size: '4px',
    top: '.offset-t-xxs',
    bottom: '.offset-b-xxs',
    topBottom: '.offset-tb-xxs',
    left: '.offset-l-xxs',
    right: '.offset-r-xxs',
    leftRight: '.offset-lr-xxs',
    around: '.offset-xxs',
  },
  {
    size: '8px',
    top: '.offset-t-xs',
    bottom: '.offset-b-xs',
    topBottom: '.offset-tb-xs',
    left: '.offset-l-xs',
    right: '.offset-r-xs',
    leftRight: '.offset-lr-xs',
    around: '.offset-xs',
  },
  {
    size: '12px',
    top: '.offset-t-sm',
    bottom: '.offset-b-sm',
    topBottom: '.offset-tb-sm',
    left: '.offset-l-sm',
    right: '.offset-r-sm',
    leftRight: '.offset-lr-sm',
    around: '.offset-sm',
  },
  {
    size: '16px',
    top: '.offset-t',
    bottom: '.offset-b',
    topBottom: '.offset-tb',
    left: '.offset-l',
    right: '.offset-r',
    leftRight: '.offset-lr',
    around: '.offset',
  },
  {
    size: '20px',
    top: '.offset-t-lg',
    bottom: '.offset-b-lg',
    topBottom: '.offset-tb-lg',
    left: '.offset-l-lg',
    right: '.offset-r-lg',
    leftRight: '.offset-lr-lg',
    around: '.offset-lg',
  },
  {
    size: '32px',
    top: '.offset-t-xl',
    bottom: '.offset-b-xl',
    topBottom: '.offset-tb-xl',
    left: '.offset-l-xl',
    right: '.offset-r-xl',
    leftRight: '.offset-lr-xl',
    around: '.offset-xl',
  },
  {
    size: '48px',
    top: '.offset-t-xxl',
    bottom: '.offset-b-xxl',
    topBottom: '.offset-tb-xxl',
    left: '.offset-l-xxl',
    right: '.offset-r-xxl',
    leftRight: '.offset-lr-xxl',
    around: '.offset-xxl',
  },
]
;<Table data={data}>
  <TableColumn prop="size" Header="尺寸" width={60} />
  <TableColumn prop="top" Header="上外边距" width={115} />
  <TableColumn prop="bottom" Header="下外边距" width={115} />
  <TableColumn prop="topBottom" Header="上下外边距" width={115} />
  <TableColumn prop="left" Header="左外边距" width={115} />
  <TableColumn prop="right" Header="右外边距" width={115} />
  <TableColumn prop="leftRight" Header="左右外边距" width={115} />
  <TableColumn prop="around" Header="四周外边距" width={115} />
</Table>
```

### 内边距 (padding)

内边距工具类由方向和大小排列组 + 无内边距的情况，共 56 个样式工具类。

```javascript
const data = [
  {
    size: '0px',
    top: '.no-padding-t',
    bottom: '.no-padding-b',
    topBottom: '.no-padding-tb',
    left: '.no-padding-l',
    right: '.no-padding-r',
    leftRight: '.no-padding-lr',
    around: '.no-padding',
  },
  {
    size: '4px',
    top: '.padding-t-xxs',
    bottom: '.padding-b-xxs',
    topBottom: '.padding-tb-xxs',
    left: '.padding-l-xxs',
    right: '.padding-r-xxs',
    leftRight: '.padding-lr-xxs',
    around: '.padding-xxs',
  },
  {
    size: '8px',
    top: '.padding-t-xs',
    bottom: '.padding-b-xs',
    topBottom: '.padding-tb-xs',
    left: '.padding-l-xs',
    right: '.padding-r-xs',
    leftRight: '.padding-lr-xs',
    around: '.padding-xs',
  },
  {
    size: '12px',
    top: '.padding-t-sm',
    bottom: '.padding-b-sm',
    topBottom: '.padding-tb-sm',
    left: '.padding-l-sm',
    right: '.padding-r-sm',
    leftRight: '.padding-lr-sm',
    around: '.padding-sm',
  },
  {
    size: '16px',
    top: '.padding-t',
    bottom: '.padding-b',
    topBottom: '.padding-tb',
    left: '.padding-l',
    right: '.padding-r',
    leftRight: '.padding-lr',
    around: '.padding',
  },
  {
    size: '20px',
    top: '.padding-t-lg',
    bottom: '.padding-b-lg',
    topBottom: '.padding-tb-lg',
    left: '.padding-l-lg',
    right: '.padding-r-lg',
    leftRight: '.padding-lr-lg',
    around: '.padding-lg',
  },
  {
    size: '32px',
    top: '.padding-t-xl',
    bottom: '.padding-b-xl',
    topBottom: '.padding-tb-xl',
    left: '.padding-l-xl',
    right: '.padding-r-xl',
    leftRight: '.padding-lr-xl',
    around: '.padding-xl',
  },
  {
    size: '48px',
    top: '.padding-t-xxl',
    bottom: '.padding-b-xxl',
    topBottom: '.padding-tb-xxl',
    left: '.padding-l-xxl',
    right: '.padding-r-xxl',
    leftRight: '.padding-lr-xxl',
    around: '.padding-xxl',
  },
]
;<Table data={data}>
  <TableColumn prop="size" Header="尺寸" width={60} />
  <TableColumn prop="top" Header="上外边距" width={125} />
  <TableColumn prop="bottom" Header="下外边距" width={125} />
  <TableColumn prop="topBottom" Header="上下外边距" width={125} />
  <TableColumn prop="left" Header="左外边距" width={125} />
  <TableColumn prop="right" Header="右外边距" width={125} />
  <TableColumn prop="leftRight" Header="左右外边距" width={125} />
  <TableColumn prop="around" Header="四周外边距" width={125} />
</Table>
```
