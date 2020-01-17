
// const path=require("path")
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
// var MiniCssExtractPlugin = require('mini-css-extract-plugin');
// module.exports={

//     entry:'./src/main.js' ,
//     output :{
//         path: path.join(__dirname,"dist"),
//         filename:"js/app.js",
       
//     },
//     mode: "development" ,
//     devServer:{
//         port:4000,
//         hot:true,
//         open:true, 
//         historyApiFallback:{     //不加上无法在浏览器输入地址跳转
//           index:'/public/index.html'   
//       }
    
//     },
//     module: { //这里用来存放转换器的配置
//         rules: [
//           // {} //每一个对象就是一个转换器的配置
//           {//css的处理
//             test: /\.css$/, // 整个项目下匹配 .css结尾的文件
//             use: [process.env.NODE_ENV !== 'production'
//             ? 'vue-style-loader'
//             : MiniCssExtractPlugin.loader,'css-loader'] //两个顺序是不写反的
//             // 我们需要使用css-loader将css文件编译为js,然后通过style-loader将js处理插入到html文件中【 style 嵌入模式 】
//           },
//          // 降级
//            {// 配置优雅降级
//             test: /\.js$/,
//             exclude: /node_modules/, // 排除node_models中的js文件
//             use: [{
//               loader: 'babel-loader',
//               options: {
//                 presets: ['@babel/preset-env']
//               }
//             }]
//           },
//           {
//             test: /\.vue$/,
//             loader: 'vue-loader'
//           }
          
//         ]
//       },
//       plugins:[
//         new HtmlWebpackPlugin({
//             template: './public/index.html',
//             filename: './index.html',//默认到output目录
//             hash:true,//防止缓存,会给文件后面加入hash
//             minify:{
//                 removeAttributeQuotes:true//压缩 去掉引号
//             }
//         }),
//         new VueLoaderPlugin()
     
// ]

      
// }