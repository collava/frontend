require("marko/express");
require("marko/node-require");

var express = require("express");
var chokidar = require("chokidar"); // live watch /reload
var compression = require("compression"); // Provides gzip compression for the HTTP response
var app = express();
var isProduction = process.env.NODE_ENV === "production";
var log = console.log.bind(console);
// Configure lasso to control how JS/CSS/etc. is delivered to the browser
require("lasso").configure({
  plugins: [
    "lasso-marko", // Allow Marko templates to be compiled and transported to the browser
    "lasso-sass"
  ],
  outputDir: __dirname + "/static", // Place all generated JS/CSS/etc. files into the "static" dir
  bundlingEnabled: isProduction, // Only enable bundling in production
  minify: isProduction, // Only minify JS and CSS code in production
  fingerprintsEnabled: isProduction // Only add fingerprints to URLs in production
});

if (!isProduction) {
  // Enable hot reloading in development
  require("marko/hot-reload").enable();
  var watcher = chokidar.watch(["app/", "app/components/*"], {
    ignored: /(^|[\/\\])\../,
    persistent: true
  });

  console.log("Em dev");

  watcher.on("change", file => {
    log(`File ${file} has been changed`);
    if (/\.marko$/.test(file)) {
      // Pass along the *full* template path to marko
      require("marko/hot-reload").handleFileModified(file);
    }
  });
  //   require("fs").watch(viewsDir, function(event, filename) {
  //   if (/\.marko$/.test(filename)) {
  //     // Resolve the filename to a full template path:
  //     var templatePath = path.join(viewsDir, filename);

  //     console.log("Marko template modified: ", templatePath);

  //     // Pass along the *full* template path to marko
  //     require("marko/hot-reload").handleFileModified(templatePath);
  //   }
  // });
}

var port = process.env.PORT || 8111;

// Enable gzip compression for all HTTP responses
app.use(compression());

// Allow all of the generated files under "static" to be served up by Express
app.use(require("lasso/middleware").serveStatic());

// Map the "/" route to the home page
app.get("/", require("./app/index"));

app.listen(port, function(err) {
  if (err) {
    throw err;
  }
  console.log("Listening on port %d", port);

  // The browser-refresh module uses this event to know that the
  // process is ready to serve traffic after the restart
  if (process.send) {
    process.send("online");
  }
});
