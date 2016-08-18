var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    DashboardPlugin = require('webpack-dashboard/plugin');



module.exports = {
    entry: './scripts/index',
    output: {
        path: path.join(__dirname, 'build', 'scripts'),
        filename: 'app.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: true,
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
        },{
            test: /\.(png|jpg)$/,
            loader: 'url'
        }]
    }
};
