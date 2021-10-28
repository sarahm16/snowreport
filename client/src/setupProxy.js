const proxy = require("http-proxy-middleware");

module.exports = function (app) {
 
  app.use(
    proxy("/api", { target: "http://localhost:8090" })
  );

//   app.use(
//     proxy('/Transblue', {
//         target: "http://localhost:8081",
//         changeOrigin: true
//     })
// )
};