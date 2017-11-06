var path = require('path');
//动态生成HTML的插件
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: {
        app:path.resolve(__dirname, 'src/main.js'),
        // vendors:['vue', 'moment', 'vue-resource', 'mint-ui', 'vue-router']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.vue$/, use: ['vue-loader'] },
            { test: /\.(ttf|png|gif|jpg|svg)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, //babel加载器
            {
                test: /vue-preview.src.*?js$/, // Vue集成PhotoSwipe图片预览插件
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
        // new webpack.optimize.UglifyJsPlugin({ // JS压缩
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendors",//和上面配置的入口对应
        //     filename: "vendors.js"//导出的文件的名称
        // }),
        // new webpack.DefinePlugin({ // 定义打包环境【开发阶段/部署阶段】
        //     'process.env': {
        //         NODE_ENV: '"production"'
        //     }
        // })
    ]
}