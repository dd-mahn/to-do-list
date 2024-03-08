const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            filename: 'index.html',
            inject: 'body',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader' ]
                // {loader:'css-loader', options: {minimize: true}}]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'images/[name].[ext]',
                    },
                  },
                ],
            },
            {
                test: /favicon\.ico$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'icons/',
                },
            },
        ]
    }

}