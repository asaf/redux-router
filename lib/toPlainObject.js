"use strict";

exports.__esModule = true;

exports["default"] = function (state) {
  return state.toJSON ? state.toJSON() : state;
};

module.exports = exports["default"];