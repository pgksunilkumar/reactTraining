
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: './src/karuth/conditionalComponent.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                // For pure CSS (without CSS modules)
                test: /\.css$/i,
                exclude: /\.module\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                // For CSS modules
                test: /\.module\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './src/index.html'
            }
        )
    ],

    devServer: {
        port: 3000,
        clientLogLevel: 'none'

    }


}