var path = require('path'),
    webpack = require('webpack'),
    publicPath = 'http://localhost:9008/';


module.exports = {
    devtool: 'source-map',
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
            'process.env.NODE_ENV': '"development"',
        }),
    ],
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
        }],
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
        }],
    },
    eslint: {
        failOnError: true,
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        publicPath: publicPath,
        hot: true,
        historyApiFallback: true,
        stats: {
            chunks: false,
            children: false,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
};
