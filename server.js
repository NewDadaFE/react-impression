var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');
var port  = 9016;


new WebpackDevServer(webpack(config), {
    contentBase: "./build",
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
}).listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }

    console.log('🌎  Server is listening at localhost:' + port);
});