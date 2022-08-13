"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = document.querySelector('[data-js="app"]');

if (!app) {
  throw new Error('Element not found');
}

var root = (0, _reactDom.createRoot)(app);
root.render( /*#__PURE__*/_react["default"].createElement("h1", null, "App"));