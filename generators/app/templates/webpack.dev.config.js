var path = require('path'),
    webpack = require('webpack'),
    DashboardPlugin = require('webpack-dashboard/plugin');


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:' + 9008,
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/scripts/index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/scripts/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            '__SHOW_DEV_TOOLS__': false,
            '__ENABLE_LOG__': true,
            'NODE_ENV': 'development',
        }),
        new DashboardPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
        }],
    },
    devServer: {
        contentBase: './build',
        publicPath: '/scripts',
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
};
