var template = require("./layout.marko");

module.exports = function(req, res) {
  res.marko(template, {});
};
