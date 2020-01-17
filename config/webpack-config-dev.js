const merge = require("webpack-merge");
const base =require ('./base.config')
module.exports=merge(base,{

  mode: "development" ,

    devServer:{
        port:4000,
        hot:true,
        open:true, 
        historyApiFallback:{     //不加上无法在浏览器输入地址跳转
          index:'/public/index.html'   
      }
    
    },
})