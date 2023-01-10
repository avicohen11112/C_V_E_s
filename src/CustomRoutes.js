const exportsCustomRoute = (function() {
  let { exportsRoute } = require("./RouterService");

  console.log("exportsCustomRoute");
  console.log("exportsRoute -> ", exportsRoute);
})();

module.exports = {
  exportsCustomRoute
};
