var path = require('path'),
    webpack = require('webpack'),
    DashboardPlugin = require('webpack-dashboard/plugin'),
    publicPath = 'http://localhost:9008/';

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?' + publicPath,
        'webpack/hot/only-dev-server',
        './src/scripts/index',
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'scripts/app.js',
        publicPath: publicPath,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            '__SHOW_DEV_TOOLS__': false,
            '__ENABLE_LOG__': true,
            'NODE_ENV': 'development',
        }),
        new DashboardPlugin(),
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
        }],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        publicPath: publicPath,
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true,
            chunks: false,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    eslint: {
        failOnError: true
    },
};
