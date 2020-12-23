React Impression 是一个后台产品 React UI 组件库。<br>
目的在于减少开发者大量重复工作，帮助开发者快速构建企业后台产品的 WEB 页面，提高工作效率。<br>

### 快速上手

1、安装

```shell
yarn add react-impression
```

2、引入样式

```scss
@import '~react-impression/styles/index.scss';
```

3、引入图标库

```html
<link
  rel="stylesheet"
  href="https://at.alicdn.com/t/font_2010704_0skvm4f627s.css"
/>
```

最近 5 个图标库版本：

| 版本号                                             | 更新日期   |
| -------------------------------------------------- | ---------- |
| font<span>_</span>2010704<span>_</span>0skvm4f627s | 2020-11-25 |

4、引入组件：

```js static
import { Button } from 'react-impression'
```

### 按需加载

安装插件：

```sh
yarn add babel-plugin-transform-imports -D
```

修改 Babel 配置：

```json
{
  "plugins": [
    [
      "transform-imports",
      {
        "react-impression": {
          "transform": "react-impression/components/${member}",
          "preventFullImport": true
        }
      }
    ]
  ]
}
```
