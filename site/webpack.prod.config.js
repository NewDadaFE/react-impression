var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    DashboardPlugin = require('webpack-dashboard/plugin');



module.exports = {
    entry: './src/scripts/index',
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
            mangle: true,
            compress: {
                warnings: false,
            },
            comments: false,
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module']
            }
        }),
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 51200}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
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
