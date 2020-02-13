
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: './src/template.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template:'./src/index.html'
            }
        )
    ],

    devServer:{
        port : 3000,
        clientLogLevel: 'none'
       
    }


}