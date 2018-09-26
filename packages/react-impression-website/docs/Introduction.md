### 安装

```shell
yarn add react-impression@next
```

### 使用

引入样式：

```scss
@import '~react-impression/styles/index.scss';
```

引入组件：

```js static
import { Button } from 'react-impression'
```

### Tree Shaking

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
