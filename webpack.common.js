const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'app.bundle.js',
            publicPath: '/',
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
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                minify: {
                    collapseWhitespace: true,
                    collapseInlineTagWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true
                }
            }),
        ]
    };

