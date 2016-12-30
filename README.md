# Impression

一个种类丰富、简洁漂亮的React组件库。

### 少依赖

整个组件库只依赖了class处理工具classnames、时间处理工具moment和滚动条美化perfect-scrollbar。

### 安装

```
    npm install react-impression --S
```

### 使用

```JavaScript
import { Button } from 'react-impression';

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
    import 'react-impression/styles/index.css';
```

！！！推荐从工程里导出scss文件，并修改variables.scss来自定义自己的样式。

### 本地启动

```
    npm start
```

### 快速搭建项目

yeoman generator[github](https://github.com/NewDadaFE/generator-react-impression)

### Demo

访问更多[示例地址](https://newdadafe.github.io/impression_react/index.html#/app)
