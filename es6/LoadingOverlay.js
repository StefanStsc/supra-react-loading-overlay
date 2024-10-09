"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactTransitionGroup = require("react-transition-group");
var _css = require("@emotion/css");
var _Spinner = _interopRequireDefault(require("./components/Spinner"));
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LoadingOverlayWrapper = /*#__PURE__*/function (_Component) {
  function LoadingOverlayWrapper(props) {
    var _this;
    _classCallCheck(this, LoadingOverlayWrapper);
    _this = _callSuper(this, LoadingOverlayWrapper, [props]);
    /**
     * Return an emotion css object for a given element key
     * If a custom style was provided via props, run it with
     * the base css obj.
     */
    _defineProperty(_this, "getStyles", function (key, providedState) {
      var base = _styles["default"][key](providedState, _this.props);
      var custom = _this.props.styles[key];
      if (!custom) return base;
      return typeof custom === 'function' ? custom(base, _this.props) : custom;
    });
    /**
     * Convenience cx wrapper to add prefix classes to each of the child
     * elements for styling purposes.
     */
    _defineProperty(_this, "cx", function (names) {
      var arr = Array.isArray(names) ? names : [names];
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return _css.cx.apply(void 0, _toConsumableArray(arr.map(function (name) {
        return name ? "".concat(_this.props.classNamePrefix).concat(name) : '';
      })).concat(args));
    });
    _this.wrapper = /*#__PURE__*/_react["default"].createRef();
    _this.state = {
      overflowCSS: {}
    };
    return _this;
  }
  _inherits(LoadingOverlayWrapper, _Component);
  return _createClass(LoadingOverlayWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var wrapperStyle = window.getComputedStyle(this.wrapper.current);
      var overflowCSS = ['overflow', 'overflowX', 'overflowY'].reduce(function (m, i) {
        if (wrapperStyle[i] !== 'visible') m[i] = 'hidden';
        return m;
      }, {});
      this.setState({
        overflowCSS: overflowCSS
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, __) {
      var active = this.props.active;
      if (active) this.wrapper.current.scrollTop = 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var overflowCSS = this.state.overflowCSS;
      var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        onClick = _this$props.onClick,
        active = _this$props.active,
        fadeSpeed = _this$props.fadeSpeed,
        spinner = _this$props.spinner,
        text = _this$props.text;
      return /*#__PURE__*/_react["default"].createElement("div", {
        "data-testid": "wrapper",
        ref: this.wrapper,
        className: this.cx(['wrapper', active && 'wrapper--active'], (0, _css.css)(this.getStyles('wrapper', active ? overflowCSS : {})), className)
      }, /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.CSSTransition, {
        "in": active,
        classNames: "_loading-overlay-transition",
        timeout: fadeSpeed,
        unmountOnExit: true
      }, function (state) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          "data-testid": "overlay",
          className: _this2.cx('overlay', (0, _css.css)(_this2.getStyles('overlay', state))),
          onClick: onClick
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: _this2.cx('content', (0, _css.css)(_this2.getStyles('content')))
        }, spinner && (typeof spinner === 'boolean' ? /*#__PURE__*/_react["default"].createElement(_Spinner["default"], {
          cx: _this2.cx,
          getStyles: _this2.getStyles
        }) : spinner), text));
      }), children);
    }
  }]);
}(_react.Component);
LoadingOverlayWrapper.propTypes = {
  active: _propTypes["default"].bool,
  fadeSpeed: _propTypes["default"].number,
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].string,
  classNamePrefix: _propTypes["default"].string,
  spinner: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].node]),
  text: _propTypes["default"].node,
  styles: _propTypes["default"].shape({
    content: _propTypes["default"].func,
    overlay: _propTypes["default"].func,
    spinner: _propTypes["default"].func,
    wrapper: _propTypes["default"].func
  })
};
LoadingOverlayWrapper.defaultProps = {
  classNamePrefix: '_loading_overlay_',
  fadeSpeed: 500,
  styles: {}
};
var _default = exports["default"] = LoadingOverlayWrapper;