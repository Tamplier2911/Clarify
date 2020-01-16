const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/api/", "/api/v1/"], {
      target: "http://localhost:5000"
    })
  );
};

/*
module.exports = function(app) {
  app.use(proxy("/auth/google", { target: "http://localhost:5000" }));
  app.use(proxy("/api/**", { target: "http://localhost:5000" }));
};
*/

/*
module.exports = function(app) {
  app.use(
    "/auth/google/login",
    proxy({
      target: "http://localhost:5000",
      changeOrigin: true
    })
  );
};
*/
