module.exports = {
    devtool: 'eval-source-map',
    entry: './src/js/main.js',
    output: {
        path: './out',
        publicPath: './out',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {   
                test: /\.js$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/,
                query: {    
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/, 
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader:'url?limit=8192'
            }
        ]
    }
    // devServer: {
    //     colors: true,
    //     historyApiFallback: true,
    //     inline: true
    // }
}

// var webpack  = require('webpack');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// module.exports = {
//     devtool: 'eval-source-map',
//     entry: './src/js/main.js',
//     output:{
//         path: './out/',
//         filename: 'index.js',
//     },
//     module:{
//         rules:[
//             {
//                 test: /\.less$/, 
//                 use:[
//                     "style-loader", 
//                     "css-loader", 
//                     "less-loader",
//                 ]
//             },       
//             {
//                 test:/\.css$/,
//                 use: [
//                     {
//                         loader: 'style-loader',
//                     },
//                     {
//                         loader: 'css-loader',
//                         options: {
//                              modules: true
//                         }
//                     }
//                 ]
//             },          
//             {
//                 test: /\.css$/, 
//                 use: ExtractTextPlugin.extract({
//                     fallback: 'style-loader',
//                     use: 'css-loader',
//                     publicPath: './out' ,
//                 })
//             },         
//             {
//                 test: /\.js$/,
//                 loader: "babel-loader",
//             },     
//             {
//                 test: /\.(jpg|png)$/, 
//                 use: ["url-loader"] 
//             }
//         ]         
//     },
//     plugins: [
//         new ExtractTextPlugin({
//             filename: 'style.css',
//             disable: false,
//             allChunks: true,
//         }),
//     ]
// }

// var webpack = require('webpack');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");//css
// module.exports = {
//     entry: './src/js/main.js',
//     output: {
//         path: './out/',
//         publicPath: './out/',
//         filename: 'index.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/, 
//                 use: ExtractTextPlugin.extract({
//                     fallback: 'style-loader',
//                     use: 'css-loader',
//                     // publicPath: './out',
//                 })
//             },
//             // { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },//打包成单独的css
//             { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
//             {
//                 test: /\.js$/,
//                 loader: "babel-loader",
//                 exclude: /node_modules/,
//                 query: {
//                     presets: [
//                         require.resolve('babel-preset-es2015'),
//                     ]
//                 }
//             },
//             { test: /\.(jpg|png)$/, use: ["url-loader"] }
//         ]
//     },
//     // devServer: {
//     //     port: 8080,
//     //     historyApiFallback: true,
//     //     inline: true,//注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
//     // },
//     plugins: [
//         // new webpack.NoEmitOnErrorsPlugin(),
//         new ExtractTextPlugin({
//             filename: './out/style.css'
//         })
//     ]
// }