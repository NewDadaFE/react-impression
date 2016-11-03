var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/scripts/index'
    ],
    output: {
        path: path.join(__dirname, 'build', 'scripts'),
        filename: 'app.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            __SHOW_DEV_TOOLS__: false,
            __ENABLE_LOG__: false,
            NODE_ENV: 'production',
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module']
            }
        })
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        },{
            test: /\.(png|jpg|gif|jpeg)$/,
            loader: 'url'
        }]
    }
};
