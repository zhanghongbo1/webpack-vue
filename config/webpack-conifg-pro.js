const merge = require("webpack-merge");
const base =require ('./base.config')
module.exports=merge(base,{

    mode: "production" ,
    module: { //这里用来存放转换器的配置
        rules: [
            {
                test:/\.(png|jpg|gif)/,
                use:[{
                  loader: 'url-loader',
                  options: {
                    limit: 5000,//字节少于5000 ——》 base64  超过5000  file
                    outputPath: 'images/', //5000意思存到images
                  }
                }]
              },
              
        ],
    },
    devServer:{
      port:8000,
      hot:true,
      open:true, 
      historyApiFallback:{     //不加上无法在浏览器输入地址跳转
        index:'/public/index.html'   
    }
  
  },
     
  })