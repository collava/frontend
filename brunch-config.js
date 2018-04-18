module.exports = {
  files: {
    javascripts: {
      joinTo: {
        "js/app.js": /^(app[\\/]js[\\/])/,
        "js/vendor.js": /^node_modules/
      }
    },
    stylesheets: {
      joinTo: {
        "css/app.css": "app/css/app.scss",
        "css/bulma.css": "app/css/bulma_custom.scss",
        "css/not_found.css": "app/css/not_found.scss",
        "css/libs.css": "node_modules/font-awesome/scss/font-awesome.scss"
      }
    }
  }
};
