# generator-react-impression

> React + Redux + React Router + React Impression + Webpack

[English Version](./README_EN.md)

## 安装

> 如果通过 NPM 安装过，先卸载`npm rm -g yo generator-react-impression`

首先, 安装`Yeoman`和`generator-react-impression`:

```sh
yarn global add yo generator-react-impression --registry https://registry.npm.taobao.org/
```

然后创建新项目:

```sh
yo react-impression
```

或者升级旧项目:

```sh
cd YOUR_PROJECT_FOLDER
yo react-impression
```

## 开发

首先, 进入项目目录并执行如下命令:

```sh
yarn
yarn start
```

然后, 打开浏览器并访问 [http://localhost:8080](http://localhost:8080)

## 部署

首先, 在`.qshell.json`文件中修改七牛云配置并加入密钥。然后执行如下命令:

```sh
yarn
yarn build
yarn deploy
```

## 最佳实践

- 代码检查

  如需检查代码，执行 `yarn lint` 命令

- 转发 API 请求

  首先, 更新`package.json`文件中的配置，比如：

  ```json
  {
    "proxy": {
      "/api": {
        "target": "http://localhost:3000",
        "changeOrigin": true
      }
    }
  }
  ```

  然后，重启服务：

  ```sh
  yarn start
  ```

- 遵守[eslint-config-react-impression][eslint-config-react-impression]规范
- 使用[redux-actions][redux-actions]创建`Flux Standard Action`
- 遵守[ducks-modular-redux][ducks-modular-redux]标准
- 使用[dot-prop-immutable][dot-prop-immutable]更新嵌套数据
- 使用[babel-plugin-react-css-modules][babel-plugin-react-css-modules]创建模块化样式

## License

MIT

[eslint-config-react-impression]: https://github.com/NewDadaFE/generator/tree/master/packages/eslint-config-react-impression
[redux-actions]: https://github.com/acdlite/redux-actions
[ducks-modular-redux]: https://github.com/erikras/ducks-modular-redux
[dot-prop-immutable]: https://github.com/debitoor/dot-prop-immutable
[babel-plugin-react-css-modules]: https://github.com/gajus/babel-plugin-react-css-modules
