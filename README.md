# generator-react-impression

> React + Redux + React Router + React Impression + Webpack 2

## Installation

First, install Yeoman and generator-react-impression:

```bash
npm i -g yo generator-react-impression
```

Then generate your new project:

```bash
yo react-impression
```

***OR*** upgrade existed project:

```bash
cd YOUR_PROJECT_FOLDER
yo react-impression --upgrade
```

## Start

First, run following command in your project folder:

```bash
npm install
npm start
```

Then, open your browser with http://localhost:8080.

## Publish

First, add your qiniu key to `package.json`:

```json
{
  "deploy": {
    "ACCESS_KEY": "",
    "SECRET_KEY": ""
  }
}
```

Then run command:

```bash
npm version patch -m 'Release version %s'
```

## Best practice

* Create Flux Standard Action with [redux-actions][redux-actions]
* Follow standard of [ducks-modular-redux][ducks-modular-redux]
* Update state using [dot-prop-immutable][dot-prop-immutable]
* Write styles with [babel-plugin-react-css-modules][babel-plugin-react-css-modules]


## License

MIT

[redux-actions]: https://github.com/acdlite/redux-actions
[ducks-modular-redux]: https://github.com/erikras/ducks-modular-redux
[dot-prop-immutable]: https://github.com/debitoor/dot-prop-immutable
[babel-plugin-react-css-modules]: https://github.com/gajus/babel-plugin-react-css-modules
