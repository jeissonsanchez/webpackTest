const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
    devServer:{
        port: 8080
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:[
                    {loader:MiniCssExtractPlugin.loader},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ] 
            }
        ]
    }

}