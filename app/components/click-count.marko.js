// Compiled using marko@4.9.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function() {
          this.state = {
              count: 0
            };
        },
        increment: function() {
          this.state.count++;
        }
      },
    marko_componentType = "/simple-brunch$0.1.0/app/components/click-count.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"count\">" +
    marko_escapeXml(state.count) +
    "</div><button class=\"button\"" +
    marko_attr("data-marko", {
      onclick: __component.d("increment", false)
    }, false) +
    ">Click me!!</button>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/simple-brunch$0.1.0/app/components/click-count.marko",
    component: "./click-count.marko"
  };
