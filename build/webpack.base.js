const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: path.join(__dirname, '../src/index.jsx'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: '[id].[chunkhash].js',
        clean: true,
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            inject: true
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
        }
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'async',
    //         minRemainingSize: 0,
    //         minSize: 20000,
    //         maxAsyncRequests: 30,
    //         maxInitialRequests: 30,
    //         name: true, // 根据 chunk 名称自动生成
    //         cacheGroups: {
    //             vendors: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: -10, // 权重，数字越大优先级越高
    //             },
    //             default: {
    //                 minChunks: 2,
    //                 priority: -20,
    //                 reuseExistingChunk: true,
    //             },
    //         }
    //     }
    // },
    cache: {
        type: 'filesystem',
    }
}