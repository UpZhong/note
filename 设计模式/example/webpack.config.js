const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader", // 用babel-loader处理
                    options: {
                        "presets": [
                            ["@babel/preset-env", {
                                "targets": {
                                    "browsers": ["> 1%", "last 2 versions"]
                                }
                            }]
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            hash: true
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        proxy: {
            '/api/*': {
                target: 'http://localhost:8080'
            }
        }
    }
}