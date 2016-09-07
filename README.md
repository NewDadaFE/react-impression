# Impression

一个种类丰富、简洁漂亮的React组件库。

### 少依赖

整个组件库只依赖了class处理工具classnames、时间处理工具moment和滚动条美化perfect-scrollbar。

### 安装

```
    npm install impression-react
```

### 使用

```JavaScript
import { Button } from 'impression-react';

export default class MyView extends Component{
    render(){
        return (
            <div>
                <Button theme="primary">按钮</Button>
            </div>
        );
    }
}
```

CSS引入：

```
    import 'impression-react/lib/index.css';
```

！！！推荐从工程里导出scss文件，并修改variables.scss来自定义自己的样式。

### 本地启动

```
    cd site && npm start
```

### Demo

访问更多[示例地址](https://shenlq.github.io/impression)
