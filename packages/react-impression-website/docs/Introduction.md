React Impression 是一个基于**达达-京东到家**后台产品视觉设计规范的 React UI 组件库。<br>
目的在于减少开发者大量重复工作，帮助开发者快速构建企业后台产品的 WEB 页面，提高工作效率。<br>

### 快速上手

安装：

```shell
yarn add react-impression@next
```

引入样式：

```scss
@import '~react-impression/styles/index.scss';
```

引入组件：

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
