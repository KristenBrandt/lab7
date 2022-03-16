"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myFunction = myFunction;

require("core-js/stable");

function myFunction() {
  document.body.style.backgroundColor = "blue";
}

document.myFunction = myFunction;
