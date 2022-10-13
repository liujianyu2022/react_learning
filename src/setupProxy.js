// const proxy = require("createProxyMiddleware")   //原来的写法

const {createProxyMiddleware} = require("http-proxy-middleware")


module.exports = function(app){
    app.use(

        createProxyMiddleware("/api", {	                    //只有遇见/api请求前缀，才会触发代理转发	
            target:"http://localhost:5000",	    //请求服务器的地址
            changeOrigin:true,                  //控制服务器收到请求的host字段，表明请求来自于哪里
            pathRewrite:{"^/api":""}
        }),

        createProxyMiddleware("/api",{
            target:"http://localhost:5001",
            changeOrigin: true,
            pathRewrite: {"^/api" : ""}
        })
    )
}




