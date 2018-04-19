// Compiled using marko@4.9.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/simple-brunch$0.1.0/app/layout.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    __browser_json = require.resolve("./browser.json"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/config-tag")),
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    app_template = marko_loadTemplate(require.resolve("./components/app")),
    app_tag = marko_loadTag(app_template),
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  lasso_page_tag({
      packagePath: __browser_json,
      dirname: __dirname,
      filename: __filename
    }, out);

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Marko + Lasso + Bulma</title>");

  lasso_head_tag({}, out, __component, "5");

  lasso_head_tag({}, out, __component, "6");

  out.w("</head></html><body>");

  component_globals_tag({}, out);

  out.w("<section class=\"section\"><div class=\"container\"><h1 class=\"title\">Hello Worlds</h1><p class=\"subtitle\">My first website with<strong> Bulma !!!</strong></p></div></section><section class=\"section\">");

  app_tag({}, out, __component, "14");

  out.w("</section>");

  lasso_body_tag({}, out, __component, "15");

  lasso_body_tag({}, out, __component, "16");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "17");

  out.w("</body>");

  __component.___flags |= 2;
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/simple-brunch$0.1.0/app/layout.marko",
    tags: [
      "@lasso/marko-taglib/taglib/config-tag",
      "@lasso/marko-taglib/taglib/head-tag",
      "marko/src/components/taglib/component-globals-tag",
      "./components/app",
      "@lasso/marko-taglib/taglib/body-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
