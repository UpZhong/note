vue 项目的webpack自定义构建
两份打包文件：
webpack.config.js  开发环境使用
webpack.prod.config.js 生产环境使用

运行命令：npm start 即可构建开发环境，运行成功后localhost:9000 
         npm run build 构建生产环境文件，运行成功后根目录下生成dist的压缩文件

移动端自适应方案采用pm2rem-loader，各项配置参照：https://github.com/songsiqi/px2rem