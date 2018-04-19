// Compiled using marko@4.9.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function() {
          this.state = {
              mounted: false
            };
        },
        onMount: function() {
          this.state.mounted = true;
        }
      },
    marko_componentType = "/simple-brunch$0.1.0/app/components/app/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    click_count_template = marko_loadTemplate(require.resolve("../click-count")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    click_count_tag = marko_loadTag(click_count_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div>");

  if (state.mounted) {
    out.w("<p>UI component successfully mounted!");

    click_count_tag({}, out, __component, "2");

    out.w("</p>");
  }

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/simple-brunch$0.1.0/app/components/app/index.marko",
    component: "./",
    tags: [
      "../click-count"
    ]
  };
