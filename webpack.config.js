/**
 * Created by mapbar_front on 2017/10/5.
 */
const path = require('path');

const webpack = require('webpack');



//plugin1:HtmlWebpackPlugin
const HtmlWebpackPlugin  = require('html-webpack-plugin');

const Plugin_HtmlWebpackPlugin = new HtmlWebpackPlugin({
    title: 'My App',
    filename: 'index.html',
    template: './src/assets/index.html'
});



//plugin2:CleanWebpackPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin');

const Plugin_CleanWebpackPlugin = new CleanWebpackPlugin(['dist']);



//plugin3:Hot Module Replacement
const Plugin_HMR = new webpack.HotModuleReplacementPlugin();



//plugin4:UglifyJSPlugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const Plugin_UglifyJSPlugin = new UglifyJSPlugin();

//config
const config = {
    //如果使用多个入口，就不能使用HMR
    // entry:{
    //     app:__dirname + '/src/index.js',
    //     vendor:__dirname + '/src/print.js'
    // },


    //如果使用Hot Module Replacement，只能有一个入口。
    entry:{
        app:__dirname + '/src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath: "/"
    },
    plugins:[
        Plugin_HtmlWebpackPlugin,//html模板插件
        Plugin_CleanWebpackPlugin,//清除dist的插件
        Plugin_HMR,//热替换插件
        Plugin_UglifyJSPlugin,//代码精简插件，未引用代码精简，代码压缩等。
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        port: 8080,
        hot: true
    },
    module:{
        rules:[{
            test:/\.(js|jsx)$/,
            use:['babel-loader'],
            exclude: /node_modules/
        },{
            test:/\.css$/,
            use:[{loader:'style-loader'},{loader:'css-loader'}]
        },{
            test:/\.(png|jpg|gif|svg)$/,
            use:['file-loader']
        },{
            test:/\.xml$/,
            use:['xml-loader']
        },{
            test:/\.(csv|tsv)$/,
            use:['csv-loader']
        }]
    }
};
module.exports = config;