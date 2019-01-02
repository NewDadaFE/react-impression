# generator-react-impression

> React + Redux + React Router + React Impression + Webpack 3

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

## Development

First, run following command in your project folder:

```bash
npm start
```

Then, open your browser with http://localhost:8080.

## Deploy

First, add your Qiniu key to `package.json`:

```json
{
  "deploy": {
    "ACCESS_KEY": "",
    "SECRET_KEY": ""
  }
}
```

Then run following command to release `patch` version:

```bash
npm version patch -m 'Release version %s'
```

***OR*** release `minor` version:
```bash
npm version minor -m 'Release version %s'
```

## Best Practice

* Proxy API request

  First, update proxy table in `package.json`. For example:

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

  Then restart development server:

  ```bash
  npm start
  ```

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
