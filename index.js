require('dotenv').config();
const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require("node:path");

console.log(process.env.EXPRESS_PATH);

// 创建 Express 应用程序
const app = express();

// 代理后端接口
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:9798', // 后端服务地址
    changeOrigin: true,
}));

// 设置静态文件目录
app.use(express.static(process.env.EXPRESS_PATH));

// 启动 Express 服务并监听端口
server = app.listen(9797, () => {
    console.log("Server is running on port 9797");
});