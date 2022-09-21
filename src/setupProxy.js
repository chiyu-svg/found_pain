const proxy = require('http-proxy-middleware');

const baseUrl = "http://localhost:3001";
module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware("/api", {
      target: baseUrl,
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
