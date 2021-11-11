const proxy = require("http-proxy-middleware");

module.exports = function (app) {

    // app.use(
    //     proxy("/api", { target: "http://localhost:8090" })
    // );

    app.use(
        proxy('/api/v1/generate-pdf', {
            target: "https://app.useanvil.com",
            changeOrigin: true
        })
    )
    app.use(
        proxy('/pdf', {
            target: 'http://localhost:8090'
        })
    )
    app.use(
        proxy('/Transblue', {
            target: "http://localhost:8081",
            changeOrigin: true
        })
    )
    app.use(
        proxy('/_api', {
            target: "http://localhost:8081",
            changeOrigin: true
        })
    )
};