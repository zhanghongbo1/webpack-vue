 let baseurl=""
 if(process.env.NODE_ENV=="production"){
     baseurl="http://localhost:3000"
 }else if(process.env.NODE_ENV=="development"){
    baseurl="http://localhost:4000"
 }

 export default baseurl