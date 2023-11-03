module.exports={
    configureWebpack:{
      devtool:'source-map' //允许在控制台输出错误
    },
    devServer:{
      proxy:{
        'api':{ //api是后台数据接口的上下文
          target:'http://localhost:8088/',
          changeOrigen:false
        }
      }
    },
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true
  }