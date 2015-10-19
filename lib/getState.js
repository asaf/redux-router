"use strict";

exports.__esModule = true;

exports["default"] = getState = function (state) {
  state.toJSON ? state.toJSON() : state;
};

module.exports = exports["default"];