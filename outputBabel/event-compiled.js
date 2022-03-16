"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recambio = recambio;

require("core-js/stable");

function recambio() {
  document.body.style.backgroundColor = "#1c2217";
}

document.recambio = recambio;
