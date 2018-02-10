const webpack = require('webpack');
const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app.bundle.js',
        publicPath: '/',

    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-class-properties', 'transform-object-rest-spread']
                    },
                },
            },
            // {
            //     test: /\.html$/,
            //     use: 'html-loader',
            // },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            }
            // {
            //     test: /\.(gif|png|jpe?g|svg)$/i,
            //     exclude: /fonts/,
            //     loader: [
            //         'file-loader?name=images/[name].[ext]',
            //         'image-webpack-loader',
            //     ],
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
            //     include: /fonts/,
            //     loader: 'file-loader?name=fonts/[name].[ext]',
            // },
        ],
    },
    // plugins: [
    //     // new HtmlWebPackPlugin({
    //     //     template: 'public/index.html',
    //     // }),
    //     new ExtractTextPlugin({
    //         filename: 'style.css',
    //         disable: false,
    //         allChunks: true,
    //     }),
    // ],
};