"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _css = require("@emotion/css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Spinner = function Spinner(_ref) {
  var getStyles = _ref.getStyles,
    cx = _ref.cx;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: cx('spinner', (0, _css.css)(getStyles('spinner')))
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "25 25 50 50"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none",
    strokeWidth: "2",
    strokeMiterlimit: "10"
  })));
};
Spinner.propTypes = {
  getStyles: _propTypes["default"].func.isRequired,
  cx: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = Spinner;