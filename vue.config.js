const path = require('path');

module.exports = {


  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/')
      }
    }
  },

  devServer: {
		port: 8080,
		
		// host: "localhost",
		
		https: false,
		
		// 自动启动浏览器
		
    open: false,
    // Paths
		proxy: {
			"/baidu": {
				target: "https://suggestion.baidu.com", //设置调用的接口域名和端口
				changeOrigin: true, //是否跨域
				ws:true,
				pathRewrite: {
					"^/baidu": ""
				}
			}
		}
	}

}