var BaseProps = {
  hideHeader: Boolean,
  title: String,
  transparent: Boolean,
  siderConfig: {
    type: Object,
    default() {
      return {
        style: {
          background: "#fff"
        }
      };
    }
  },
  noPad: Boolean
};
var render$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("a-layout", { staticClass: "base-container" }, [!_vm.hideHeader ? _c("a-layout-header", [_vm.$slots["headerLeft"] ? _c("div", { staticClass: "base-container-header-left" }, [_vm._t("headerLeft")], 2) : _vm.title ? _c("div", { staticClass: "base-container-header-left" }, [_vm._v(" " + _vm._s(_vm.title) + " ")]) : _vm._e(), _c("div", { staticClass: "base-container-header-right" }, [_vm._t("headerRight")], 2)]) : _vm._e(), _c("a-layout", [_vm.$slots["sider"] ? _c("a-layout-sider", _vm._b({}, "a-layout-sider", _vm.siderConfig, false), [_vm._t("sider")], 2) : _vm._e(), _c("a-layout-content", { ref: "contentRef", class: [_vm.transparent ? "bg-transparent" : "", _vm.noPad ? "no-pad" : ""] }, [_vm._t("default")], 2)], 1), _vm.$slots["footer"] ? _c("a-layout-footer", [_vm._t("footer")], 2) : _vm._e()], 1);
};
var staticRenderFns$a = [];
var BaseContainer_vue_vue_type_style_index_0_lang = "";
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const __vue2_script$a = {
  name: "BaseContainer",
  components: {},
  props: BaseProps,
  mounted() {
  },
  computed: {},
  methods: {}
};
const __cssModules$a = {};
var __component__$a = /* @__PURE__ */ normalizeComponent(__vue2_script$a, render$a, staticRenderFns$a, false, __vue2_injectStyles$a, null, null, null);
function __vue2_injectStyles$a(context) {
  for (let o in __cssModules$a) {
    this[o] = __cssModules$a[o];
  }
}
var BaseContainer = /* @__PURE__ */ function() {
  return __component__$a.exports;
}();
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
const on = function() {
  if (document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent("on" + event, handler);
      }
    };
  }
}();
const off = function() {
  if (document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent("on" + event, handler);
      }
    };
  }
}();
const clearObj = (obj) => {
  let target = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key])
      target[key] = obj[key];
  });
  return target;
};
var render$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classes }, [_c("div", { class: _vm.barConClasses }, _vm._m(0), 0)]);
};
var staticRenderFns$9 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm._l(8, function(i) {
    return _c("i", { key: "trigger-" + i, class: _vm.prefix + "-bar" });
  });
}];
var trigger_vue_vue_type_style_index_0_lang = "";
const __vue2_script$9 = {
  name: "Trigger",
  props: {
    mode: String
  },
  data() {
    return {
      prefix: "ivu-split-trigger",
      initOffset: 0
    };
  },
  computed: {
    isVertical() {
      return this.mode === "vertical";
    },
    classes() {
      return [
        this.prefix,
        this.isVertical ? `${this.prefix}-vertical` : `${this.prefix}-horizontal`
      ];
    },
    barConClasses() {
      return [
        `${this.prefix}-bar-con`,
        this.isVertical ? "vertical" : "horizontal"
      ];
    }
  }
};
const __cssModules$9 = {};
var __component__$9 = /* @__PURE__ */ normalizeComponent(__vue2_script$9, render$9, staticRenderFns$9, false, __vue2_injectStyles$9, null, null, null);
function __vue2_injectStyles$9(context) {
  for (let o in __cssModules$9) {
    this[o] = __cssModules$9[o];
  }
}
var Trigger = /* @__PURE__ */ function() {
  return __component__$9.exports;
}();
var render$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "outerWrapper", class: _vm.wrapperClasses }, [_vm.isHorizontal ? _c("div", { class: _vm.prefix + "-horizontal" }, [_c("div", { class: [_vm.prefix + "-pane", "left-pane"], style: { right: _vm.anotherOffset + "%" } }, [_vm._t("left")], 2), _c("div", { class: _vm.prefix + "-trigger-con", style: { left: _vm.offset + "%" }, on: { "mousedown": _vm.handleMousedown } }, [_vm._t("trigger", function() {
    return [_c("trigger", { attrs: { "mode": "vertical" } })];
  })], 2), _c("div", { class: [_vm.prefix + "-pane", "right-pane"], style: { left: _vm.offset + "%" } }, [_vm._t("right")], 2)]) : _c("div", { class: _vm.prefix + "-vertical" }, [_c("div", { class: [_vm.prefix + "-pane", "top-pane"], style: { bottom: _vm.anotherOffset + "%" } }, [_vm._t("top")], 2), _c("div", { class: _vm.prefix + "-trigger-con", style: { top: _vm.offset + "%" }, on: { "mousedown": _vm.handleMousedown } }, [_vm._t("trigger", function() {
    return [_c("trigger", { attrs: { "mode": "horizontal" } })];
  })], 2), _c("div", { class: [_vm.prefix + "-pane", "bottom-pane"], style: { top: _vm.offset + "%" } }, [_vm._t("bottom")], 2)])]);
};
var staticRenderFns$8 = [];
var split_vue_vue_type_style_index_0_lang = "";
const __vue2_script$8 = {
  name: "SplitPane",
  components: {
    Trigger
  },
  props: {
    value: {
      type: [Number, String],
      default: 0.5
    },
    mode: {
      validator(value) {
        return oneOf(value, ["horizontal", "vertical"]);
      },
      default: "horizontal"
    },
    min: {
      type: [Number, String],
      default: "40px"
    },
    max: {
      type: [Number, String],
      default: "40px"
    }
  },
  data() {
    return {
      prefix: "ivu-split",
      offset: 0,
      oldOffset: 0,
      isMoving: false
    };
  },
  computed: {
    wrapperClasses() {
      return [
        `${this.prefix}-wrapper`,
        this.isMoving ? "no-select" : ""
      ];
    },
    isHorizontal() {
      return this.mode === "horizontal";
    },
    anotherOffset() {
      return 100 - this.offset;
    },
    valueIsPx() {
      return typeof this.value === "string";
    },
    offsetSize() {
      return this.isHorizontal ? "offsetWidth" : "offsetHeight";
    },
    computedMin() {
      return this.getComputedThresholdValue("min");
    },
    computedMax() {
      return this.getComputedThresholdValue("max");
    }
  },
  methods: {
    px2percent(numerator, denominator) {
      return parseFloat(numerator) / parseFloat(denominator);
    },
    getComputedThresholdValue(type) {
      let size = this.$refs.outerWrapper[this.offsetSize];
      if (this.valueIsPx)
        return typeof this[type] === "string" ? this[type] : size * this[type];
      else
        return typeof this[type] === "string" ? this.px2percent(this[type], size) : this[type];
    },
    getMin(value1, value2) {
      if (this.valueIsPx)
        return `${Math.min(parseFloat(value1), parseFloat(value2))}px`;
      else
        return Math.min(value1, value2);
    },
    getMax(value1, value2) {
      if (this.valueIsPx)
        return `${Math.max(parseFloat(value1), parseFloat(value2))}px`;
      else
        return Math.max(value1, value2);
    },
    getAnotherOffset(value) {
      let res = 0;
      if (this.valueIsPx)
        res = `${this.$refs.outerWrapper[this.offsetSize] - parseFloat(value)}px`;
      else
        res = 1 - value;
      return res;
    },
    handleMove(e) {
      let pageOffset = this.isHorizontal ? e.pageX : e.pageY;
      let offset = pageOffset - this.initOffset;
      let outerWidth = this.$refs.outerWrapper[this.offsetSize];
      let value = this.valueIsPx ? `${parseFloat(this.oldOffset) + offset}px` : this.px2percent(outerWidth * this.oldOffset + offset, outerWidth);
      let anotherValue = this.getAnotherOffset(value);
      if (parseFloat(value) <= parseFloat(this.computedMin))
        value = this.getMax(value, this.computedMin);
      if (parseFloat(anotherValue) <= parseFloat(this.computedMax))
        value = this.getAnotherOffset(this.getMax(anotherValue, this.computedMax));
      e.atMin = this.value === this.computedMin;
      e.atMax = this.valueIsPx ? this.getAnotherOffset(this.value) === this.computedMax : this.getAnotherOffset(this.value).toFixed(5) === this.computedMax.toFixed(5);
      this.$emit("input", value);
      this.$emit("on-moving", e);
    },
    handleUp() {
      this.isMoving = false;
      off(document, "mousemove", this.handleMove);
      off(document, "mouseup", this.handleUp);
      this.$emit("on-move-end");
    },
    handleMousedown(e) {
      this.initOffset = this.isHorizontal ? e.pageX : e.pageY;
      this.oldOffset = this.value;
      this.isMoving = true;
      on(document, "mousemove", this.handleMove);
      on(document, "mouseup", this.handleUp);
      this.$emit("on-move-start");
    }
  },
  watch: {
    value() {
      this.offset = (this.valueIsPx ? this.px2percent(this.value, this.$refs.outerWrapper[this.offsetSize]) : this.value) * 1e4 / 100;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.offset = (this.valueIsPx ? this.px2percent(this.value, this.$refs.outerWrapper[this.offsetSize]) : this.value) * 1e4 / 100;
    });
  }
};
const __cssModules$8 = {};
var __component__$8 = /* @__PURE__ */ normalizeComponent(__vue2_script$8, render$8, staticRenderFns$8, false, __vue2_injectStyles$8, null, null, null);
function __vue2_injectStyles$8(context) {
  for (let o in __cssModules$8) {
    this[o] = __cssModules$8[o];
  }
}
var Split = /* @__PURE__ */ function() {
  return __component__$8.exports;
}();
var render$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("base-container", _vm._b({ staticClass: "split-container", scopedSlots: _vm._u([{ key: "headerRight", fn: function() {
    return [_vm._t("headerRight")];
  }, proxy: true }], null, true) }, "base-container", _vm.$props, false), [_c("template", { slot: "headerLeft" }, [_vm._t("headerLeft")], 2), _c("split", { attrs: { "mode": "horizontal" }, on: { "on-moving": _vm.handleMoving }, model: { value: _vm.split, callback: function($$v) {
    _vm.split = $$v;
  }, expression: "split" } }, [_c("div", { staticClass: "height100", attrs: { "slot": "left" }, slot: "left" }, [_vm._t("left")], 2), _c("div", { staticClass: "height100", attrs: { "slot": "right" }, slot: "right" }, [_vm._t("right")], 2)]), _vm.$slots["footer"] ? _c("div", { attrs: { "slot": "footer" }, slot: "footer" }, [_vm._t("footer")], 2) : _vm._e()], 2);
};
var staticRenderFns$7 = [];
var SplitContainer_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$7 = {
  name: "SplitContainer",
  components: {
    Split
  },
  data() {
    return {
      split: null
    };
  },
  mounted() {
    this.split = this.value;
  },
  watch: {
    value() {
      this.split = this.value;
    }
  },
  props: Object.assign({}, BaseProps, {
    value: {
      type: [String, Number],
      default: 0.5
    }
  }),
  methods: {
    handleMoving(e) {
      this.$emit("input", this.split);
      this.$emit("on-moving", e);
    }
  }
};
const __cssModules$7 = {};
var __component__$7 = /* @__PURE__ */ normalizeComponent(__vue2_script$7, render$7, staticRenderFns$7, false, __vue2_injectStyles$7, "4766b768", null, null);
function __vue2_injectStyles$7(context) {
  for (let o in __cssModules$7) {
    this[o] = __cssModules$7[o];
  }
}
var SplitContainer = /* @__PURE__ */ function() {
  return __component__$7.exports;
}();
var render$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("base-container", _vm._b({}, "base-container", _vm.$props, false), [_c("template", { slot: "headerLeft" }, [_vm._t("headerLeft")], 2), _c("a-tabs", { attrs: { "animated": false, "tabPosition": _vm.tabPosition }, on: { "change": _vm.tabChange }, scopedSlots: _vm._u([{ key: "tabBarExtraContent", fn: function() {
    return [_vm._t("tabBarExtraContent")];
  }, proxy: true }], null, true), model: { value: _vm.current, callback: function($$v) {
    _vm.current = $$v;
  }, expression: "current" } }, [[_vm._t("default")]], 2)], 2);
};
var staticRenderFns$6 = [];
var TabContainer_vue_vue_type_style_index_0_lang = "";
const __vue2_script$6 = {
  name: "TabContainer",
  components: {},
  data() {
    return {
      current: null,
      routeName: null
    };
  },
  mounted() {
    this.routeName = this.$route ? this.$route.name : void 0;
    this.current = this.$route ? this.$route.query._t || this.defaultTab : this.defaultTab;
    this.routeTab();
  },
  props: Object.assign({}, BaseProps, {
    defaultTab: [String, Number],
    tabPosition: {
      type: String,
      default: "top"
    }
  }),
  watch: {
    $route(value) {
      if (value.name === this.routeName && this.$route.query._t) {
        this.current = this.$route.query._t;
      }
    }
  },
  methods: {
    routeTab() {
      if (!this.$router) {
        return false;
      }
      let query = Object.assign({}, this.$route.query);
      query._t = this.current;
      this.$router.push({
        query
      });
    },
    tabChange() {
      console.log("tab container, tab change", this.routeName);
      this.routeTab();
    }
  }
};
const __cssModules$6 = {};
var __component__$6 = /* @__PURE__ */ normalizeComponent(__vue2_script$6, render$6, staticRenderFns$6, false, __vue2_injectStyles$6, null, null, null);
function __vue2_injectStyles$6(context) {
  for (let o in __cssModules$6) {
    this[o] = __cssModules$6[o];
  }
}
var TabContainer = /* @__PURE__ */ function() {
  return __component__$6.exports;
}();
var render$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("base-container", _vm._b({ ref: "baseRef", staticClass: "table-container", attrs: { "title": _vm.title, "hide-index": _vm.hideIndex }, on: { "headerDbClick": _vm.loadData }, scopedSlots: _vm._u([{ key: "headerRight", fn: function() {
    return [_vm._t("headerRight")];
  }, proxy: true }], null, true) }, "base-container", _vm.$props, false), [_c("template", { slot: "headerLeft" }, [_vm._t("headerLeft")], 2), _c("s-table", { staticClass: "table-container-s-table", attrs: { "config": _vm.bindTableConfig }, on: { "change": _vm.tableChange } }, [!_vm.hideIndex ? _c("s-table-column", { attrs: { "title": "#", "prop": "nickname", "width": 60, "align": "center", "fixed": _vm.fixedIndex ? "left" : null }, scopedSlots: _vm._u([{ key: "default", fn: function(ref) {
    var index2 = ref.index;
    return [_vm.pageable ? _c("div", [_vm._v(" " + _vm._s(_vm.pagination.pageSize * (_vm.pagination.current - 1) + index2 + 1) + " ")]) : _c("div", [_vm._v(" " + _vm._s(index2 + 1) + " ")])];
  } }], null, false, 2327190036) }) : _vm._e(), _vm._t("default"), _vm.operation ? _c("s-table-column", { attrs: { "title": "\u64CD\u4F5C", "width": _vm.operationWidth, "align": "center", "fixed": _vm.fixedOperation ? "right" : null }, scopedSlots: _vm._u([{ key: "default", fn: function(ref) {
    var record = ref.record;
    return [_c("a-button", { attrs: { "size": "small", "disabled": record.disableEdit, "type": "primary" }, on: { "click": function($event) {
      return _vm.handleEdit(record);
    } } }, [_vm._v("\u7F16\u8F91 ")]), _vm._v(" \xA0 "), _c("a-button", { attrs: { "size": "small", "type": "danger", "disabled": record.disableDelete }, on: { "click": function($event) {
      return _vm.removeItem(record);
    } } }, [_vm._v("\u5220\u9664 ")]), _vm._v(" \xA0 "), _vm._t("otherOperation", null, { "record": record })];
  } }], null, true) }) : _vm._e()], 2), _c("div", { attrs: { "slot": "footer" }, slot: "footer" }, [_vm.pageable ? _c("div", [_c("a-pagination", { attrs: { "showTotal": function(total, range) {
    return "\u7B2C " + range[0] + "-" + range[1] + " \u6761 / \u5171 " + total + " \u6761\u8BB0\u5F55";
  }, "page-size": _vm.pagination.pageSize, "total": _vm.pagination.total }, on: { "change": _vm.paginationChange }, model: { value: _vm.pagination.current, callback: function($$v) {
    _vm.$set(_vm.pagination, "current", $$v);
  }, expression: "pagination.current" } })], 1) : _vm.dataSource ? _c("div", { staticClass: "pull-right" }, [_vm._v(" \u5171 " + _vm._s(_vm.dataSource.length) + " \u6761\u8BB0\u5F55 ")]) : _vm._e()])], 2);
};
var staticRenderFns$5 = [];
const __vue2_script$5 = {
  name: "TableContainer",
  components: {},
  props: Object.assign({}, BaseProps, {
    tableConfig: Object,
    url: String,
    dataLoading: Boolean,
    title: String,
    tableData: Array,
    pageable: Boolean,
    hideIndex: {
      type: Boolean,
      default: false
    },
    operation: {
      type: Boolean,
      default: true
    },
    operationWidth: {
      type: [Number],
      default: 150
    },
    itemKey: {
      type: String,
      default: "id"
    },
    fixedIndex: {
      type: Boolean,
      default: true
    },
    fixedOperation: {
      type: Boolean,
      default: true
    },
    httpInstance: {
      type: [Object, Function],
      default() {
        return this.$http;
      }
    }
  }),
  data() {
    return {
      data: null,
      dataSource: [],
      loading: false,
      tableHeight: null,
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0
      }
    };
  },
  computed: {
    bindTableConfig() {
      return Object.assign({}, {
        size: "middle",
        dataSource: this.dataSource,
        loading: this.tableData ? this.dataLoading : this.loading,
        rowKey: this.itemKey,
        pagination: false,
        indentSize: 20
      }, this.tableConfig);
    }
  },
  mounted() {
    if (this.tableData) {
      this.initData();
    } else {
      this.loadData();
    }
    window.addEventListener("resize", this.computedTableHeight);
  },
  watch: {
    url() {
      if (this.url) {
        this.loadData();
      }
    },
    tableData: {
      handler() {
        this.initData();
      },
      deep: true
    }
  },
  methods: {
    handleEdit(record) {
      this.$emit("editItem", record);
    },
    initData() {
      if (this.pageable) {
        this.dataSource = this.tableData.content;
        this.pagination.current = this.tableData.number + 1;
        this.pagination.pageSize = this.tableData.size;
      } else {
        this.dataSource = this.data;
      }
    },
    tableChange(pagination, filters, sorter) {
      console.log("pagination", pagination);
      console.log("filters", filters);
      console.log("sorter", sorter);
      this.$emit("change", { pagination, filters, sorter });
    },
    paginationChange(page) {
      this.loadData({ page });
    },
    loadData(params) {
      if (!this.httpInstance) {
        console.warn('[TableContainer] warning: \u8BF7\u8BBE\u7F6E "httpInstance" \u5C5E\u6027\uFF01');
        return false;
      }
      this.loading = true;
      this.httpInstance.get(this.url, {
        params: clearObj({
          page: params && params.page ? params.page - 1 : this.pageable && this.$route.query.page ? Number(this.$route.query.page) - 1 : null
        })
      }).then((res) => {
        this.data = res.data;
        if (this.pageable) {
          this.dataSource = this.data.content;
          this.pagination.current = this.data.number + 1;
          this.pagination.pageSize = this.data.size;
        } else {
          this.dataSource = this.data;
        }
        this.computedPagination();
        this.loading = false;
        this.computedTableHeight();
        this.$emit("load", this.dataSource);
      });
    },
    computedPagination() {
      if (this.pageable) {
        this.pagination.pageSize = this.data.size;
        this.pagination.total = this.data.totalElements;
      }
    },
    computedTableHeight() {
      this.$nextTick(() => {
        if (this.$refs["baseRef"] && this.$refs["baseRef"].$refs["contentRef"] && this.$refs["baseRef"].$refs["contentRef"].$el) {
          this.tableHeight = this.$refs["baseRef"].$refs["contentRef"].$el.clientHeight - 75;
          if (this.bindTableConfig.pagination) {
            this.tableHeight = this.tableHeight - 32;
          }
        }
      });
    },
    removeItem(item) {
      this.$Modal.confirm({
        message: "\u786E\u8BA4",
        content: "\u786E\u8BA4\u8981\u5220\u9664\u5F53\u524D\u8BB0\u5F55\u5417\uFF1F",
        okText: "\u786E\u5B9A\u5220\u9664",
        cancelText: "\u518D\u60F3\u60F3\uFF1F",
        onOk: () => {
          if (this.url) {
            let url = this.url.split(/[?#]/)[0];
            this.loading = true;
            this.httpInstance.delete(`${url}/${item[this.itemKey]}`).then(() => {
              this.$message.success("\u5220\u9664\u6210\u529F");
              this.loadData();
            }).catch((err) => {
              this.$emit("deleteFail", err);
            });
          } else {
            this.$emit("deleteItem", item);
          }
        }
      });
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.computedTableHeight);
  }
};
const __cssModules$5 = {};
var __component__$5 = /* @__PURE__ */ normalizeComponent(__vue2_script$5, render$5, staticRenderFns$5, false, __vue2_injectStyles$5, null, null, null);
function __vue2_injectStyles$5(context) {
  for (let o in __cssModules$5) {
    this[o] = __cssModules$5[o];
  }
}
var TableContainer = /* @__PURE__ */ function() {
  return __component__$5.exports;
}();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$4(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$4;
var eq$3 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$3(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index2 = assocIndexOf$3(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index2 = assocIndexOf$2(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$4 = freeGlobal || freeSelf || Function("return this")();
var _root = root$4;
var root$3 = _root;
var Symbol$3 = root$3.Symbol;
var _Symbol = Symbol$3;
var Symbol$2 = _Symbol;
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
var nativeObjectToString$1 = objectProto$a.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$9 = Object.prototype;
var nativeObjectToString = objectProto$9.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$1 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag$4(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$4;
function isObject$7(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$7;
var baseGetTag$3 = _baseGetTag, isObject$6 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$6(value)) {
    return false;
  }
  var tag = baseGetTag$3(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$3;
var root$2 = _root;
var coreJsData$1 = root$2["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$1;
var isFunction$2 = isFunction_1, isMasked = _isMasked, isObject$5 = isObject_1, toSource = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$8 = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$5(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$3(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$3;
var getNative$2 = _getNative, root$1 = _root;
var Map$2 = getNative$2(root$1, "Map");
var _Map = Map$2;
var getNative$1 = _getNative;
var nativeCreate$4 = getNative$1(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$6.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$5.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$1 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype["delete"] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;
var _MapCache = MapCache$1;
var ListCache$1 = _ListCache, Map = _Map, MapCache = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$1(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$1.prototype.clear = stackClear;
Stack$1.prototype["delete"] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;
var _Stack = Stack$1;
var getNative = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$3(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$3;
var baseAssignValue$2 = _baseAssignValue, eq$2 = eq_1;
function assignMergeValue$2(object, key, value) {
  if (value !== void 0 && !eq$2(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue$2(object, key, value);
  }
}
var _assignMergeValue = assignMergeValue$2;
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
var _cloneBuffer = { exports: {} };
(function(module, exports) {
  var root2 = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
var root = _root;
var Uint8Array$1 = root.Uint8Array;
var _Uint8Array = Uint8Array$1;
var Uint8Array = _Uint8Array;
function cloneArrayBuffer$1(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$1;
var cloneArrayBuffer = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
function copyArray$1(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var _copyArray = copyArray$1;
var isObject$4 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$4(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$1;
var overArg = _overArg;
var getPrototype$2 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$2;
var objectProto$5 = Object.prototype;
function isPrototype$2(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$5;
  return value === proto;
}
var _isPrototype = isPrototype$2;
var baseCreate = _baseCreate, getPrototype$1 = _getPrototype, isPrototype$1 = _isPrototype;
function initCloneObject$1(object) {
  return typeof object.constructor == "function" && !isPrototype$1(object) ? baseCreate(getPrototype$1(object)) : {};
}
var _initCloneObject = initCloneObject$1;
function isObjectLike$5(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$5;
var baseGetTag$2 = _baseGetTag, isObjectLike$4 = isObjectLike_1;
var argsTag$1 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$4(value) && baseGetTag$2(value) == argsTag$1;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$3 = isObjectLike_1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
var isArguments$2 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$3(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_1 = isArguments$2;
var isArray$2 = Array.isArray;
var isArray_1 = isArray$2;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$2;
var isFunction$1 = isFunction_1, isLength$1 = isLength_1;
function isArrayLike$3(value) {
  return value != null && isLength$1(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$3;
var isArrayLike$2 = isArrayLike_1, isObjectLike$2 = isObjectLike_1;
function isArrayLikeObject$1(value) {
  return isObjectLike$2(value) && isArrayLike$2(value);
}
var isArrayLikeObject_1 = isArrayLikeObject$1;
var isBuffer$2 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$2, isBuffer$2.exports);
var baseGetTag$1 = _baseGetTag, getPrototype = _getPrototype, isObjectLike$1 = isObjectLike_1;
var objectTag$1 = "[object Object]";
var funcProto = Function.prototype, objectProto$3 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike$1(value) || baseGetTag$1(value) != objectTag$1) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$3.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$1;
var baseGetTag = _baseGetTag, isLength = isLength_1, isObjectLike = isObjectLike_1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
function safeGet$2(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var _safeGet = safeGet$2;
var baseAssignValue$1 = _baseAssignValue, eq$1 = eq_1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$2.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$1;
var assignValue = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$1(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$1;
function baseTimes$1(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var baseTimes = _baseTimes, isArguments$1 = isArguments_1, isArray$1 = isArray_1, isBuffer$1 = isBuffer$2.exports, isIndex$1 = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$1(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$3 = isObject_1, isPrototype = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$3(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$1 = isArrayLike_1;
function keysIn$2(object) {
  return isArrayLike$1(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$2;
var copyObject = _copyObject, keysIn$1 = keysIn_1;
function toPlainObject$1(value) {
  return copyObject(value, keysIn$1(value));
}
var toPlainObject_1 = toPlainObject$1;
var assignMergeValue$1 = _assignMergeValue, cloneBuffer = _cloneBuffer.exports, cloneTypedArray = _cloneTypedArray, copyArray = _copyArray, initCloneObject = _initCloneObject, isArguments = isArguments_1, isArray = isArray_1, isArrayLikeObject = isArrayLikeObject_1, isBuffer = isBuffer$2.exports, isFunction = isFunction_1, isObject$2 = isObject_1, isPlainObject = isPlainObject_1, isTypedArray = isTypedArray_1, safeGet$1 = _safeGet, toPlainObject = toPlainObject_1;
function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet$1(object, key), srcValue = safeGet$1(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue$1(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$2(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue$1(object, key, newValue);
}
var _baseMergeDeep = baseMergeDeep$1;
var Stack = _Stack, assignMergeValue = _assignMergeValue, baseFor = _baseFor, baseMergeDeep = _baseMergeDeep, isObject$1 = isObject_1, keysIn = keysIn_1, safeGet = _safeGet;
function baseMerge$1(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject$1(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge$1, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
var _baseMerge = baseMerge$1;
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var identity = identity_1, overRest = _overRest, setToString = _setToString;
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var _baseRest = baseRest$1;
var eq = eq_1, isArrayLike = isArrayLike_1, isIndex = _isIndex, isObject = isObject_1;
function isIterateeCall$1(value, index2, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
    return eq(object[index2], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$1;
var baseRest = _baseRest, isIterateeCall = _isIterateeCall;
function createAssigner$1(assigner) {
  return baseRest(function(object, sources) {
    var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index2 < length) {
      var source = sources[index2];
      if (source) {
        assigner(object, source, index2, customizer);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner$1;
var baseMerge = _baseMerge, createAssigner = _createAssigner;
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
var merge_1 = merge;
var render$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("split-container", _vm._b({ scopedSlots: _vm._u([{ key: "headerRight", fn: function() {
    return [_vm._t("headerRight")];
  }, proxy: true }], null, true), model: { value: _vm.split, callback: function($$v) {
    _vm.split = $$v;
  }, expression: "split" } }, "split-container", _vm.$props, false), [_c("template", { slot: "headerLeft" }, [_vm._t("headerLeft")], 2), _c("div", { attrs: { "slot": "left" }, slot: "left" }, [_vm.loading ? _c("a-spin") : [_vm.defaultConfig.searchable ? _c("a-input-search", { staticClass: "margin-bottom-sm", attrs: { "placeholder": "\u5173\u952E\u8BCD\u641C\u7D22" }, on: { "change": _vm.onSearch }, model: { value: _vm.key, callback: function($$v) {
    _vm.key = $$v;
  }, expression: "key" } }) : _vm._e(), _c("a-tree", _vm._b({ attrs: { "treeData": _vm.gData, "expandedKeys": _vm.defaultExpandedKeys, "selectedKeys": _vm.defaultSelectedKeys }, on: { "dragenter": _vm.onDragEnter, "update:expandedKeys": function($event) {
    _vm.defaultExpandedKeys = $event;
  }, "update:expanded-keys": function($event) {
    _vm.defaultExpandedKeys = $event;
  }, "update:selectedKeys": function($event) {
    _vm.defaultSelectedKeys = $event;
  }, "update:selected-keys": function($event) {
    _vm.defaultSelectedKeys = $event;
  }, "check": _vm.handleCheck, "load": _vm.handleLoad, "select": _vm.handleSelect, "drop": _vm.onDrop }, scopedSlots: _vm._u([{ key: "custom", fn: function(data) {
    return [_vm._t("icon", null, { "data": data })];
  } }], null, true) }, "a-tree", _vm.defaultConfig, false))]], 2), _c("div", { staticClass: "height100", attrs: { "slot": "right" }, slot: "right" }, [_vm._t("default")], 2)], 2);
};
var staticRenderFns$4 = [];
var TreeContainer_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$4 = {
  name: "TreeContainer",
  props: Object.assign({}, BaseProps, {
    url: String,
    data: Array,
    value: Array,
    expandedKeys: {
      type: Array,
      default: () => {
        return [];
      }
    },
    selectedKeys: {
      type: Array,
      default: () => {
        return [];
      }
    },
    config: {
      type: Object,
      default: () => {
        return {};
      }
    },
    splitWidth: {
      type: [Number, String],
      default: "250px"
    },
    httpInstance: {
      type: [Object, Function],
      default() {
        return this.$http;
      }
    }
  }),
  data() {
    return {
      defaultSelectedKeys: [],
      defaultExpandedKeys: [],
      split: null,
      loading: false,
      parent: null,
      key: null,
      gData: [],
      defaultConfig: {
        replaceFields: { children: "children", title: "title", key: "id" }
      }
    };
  },
  computed: {
    showIcon() {
      return !!this.$scopedSlots.icon;
    },
    defaultConfig2() {
      return {
        autoExpandParent: true,
        showLine: false,
        showIcon: this.showIcon,
        draggable: false,
        asyncLoad: false
      };
    }
  },
  created() {
    this.initDefaultSelectedKeys();
    this.initDefaultExpandedKeys();
    this.defaultConfig = merge_1({}, this.defaultConfig, this.defaultConfig2, this.config);
    if (this.defaultConfig.asyncLoad) {
      this.defaultConfig.loadData = this.onLoadData;
    }
    console.log("defaultConfig", this.defaultConfig);
    if (this.data) {
      this.gData = this.data;
      this.decorationTreeNode(this.data);
      this.handleLoad(this.gData);
    } else {
      this.loadData();
    }
    if (this.value) {
      this.value.forEach((o) => {
        this.defaultSelectedKeys.push(o.id);
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.split = this.splitWidth;
    });
  },
  watch: {
    url() {
      this.loadData();
    },
    selectedKeys: {
      handler() {
        this.initDefaultSelectedKeys();
      },
      deep: true,
      immediate: true
    },
    expandedKeys: {
      handler() {
        this.initDefaultExpandedKeys();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    initDefaultSelectedKeys() {
      if (this.selectedKeys) {
        this.selectedKeys.forEach((key) => {
          this.defaultSelectedKeys.push(key);
        });
      }
    },
    initDefaultExpandedKeys() {
      if (this.expandedKeys) {
        this.expandedKeys.forEach((key) => {
          this.defaultExpandedKeys.push(key);
        });
      }
    },
    initLoad() {
      this.parent = null;
      this.key = null;
    },
    onSearch() {
      this.loadData().then((data) => {
        this.gData = data;
      });
    },
    handleCheck(checkedKeys, e) {
      this.$emit("check", checkedKeys, e);
    },
    handleLoad(loadedKeys, e) {
      this.$emit("load", loadedKeys, e);
    },
    handleSelect(selectedKeys, e) {
      this.defaultSelectedKeys = [];
      selectedKeys.forEach((key) => {
        this.defaultSelectedKeys.push(key);
      });
      this.$emit("select", selectedKeys, e);
      let nodes = [];
      e.selectedNodes.forEach((o) => {
        nodes.push(o.data.props.dataRef);
      });
      this.$emit("input", nodes);
    },
    decorationTreeNode(items) {
      items.forEach((item) => {
        if (this.showIcon) {
          this.$set(item, "scopedSlots", { icon: "custom" });
        }
        if (!item.key) {
          this.$set(item, "key", item.id);
        }
        if (item.children) {
          this.decorationTreeNode(item.children);
        }
      });
    },
    loadData() {
      return new Promise((resolve, reject) => {
        this.httpInstance.get(this.url, {
          params: clearObj({
            key: this.key,
            parent: this.parent
          })
        }).then((res) => {
          let items = res.data;
          this.decorationTreeNode(items);
          this.loading = false;
          this.initLoad();
          this.gData = items;
          this.handleLoad(this.gData);
          resolve(items);
        }).catch(reject);
      });
    },
    onLoadData(treeNode) {
      this.parent = treeNode.dataRef.id;
      return new Promise((resolve) => {
        this.loadData().then((data) => {
          treeNode.dataRef.children = data;
          this.gData = [...this.gData];
          resolve();
        });
      });
    },
    onDragEnter(info) {
      this.$emit("drag-enter", info);
    },
    onDrop(info) {
      const dropKey = info.node.eventKey;
      const dragKey = info.dragNode.eventKey;
      const dropPos = info.node.pos.split("-");
      const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
      const loop = (data2, key, callback) => {
        data2.forEach((item, index2, arr) => {
          if (item.key === key) {
            return callback(item, index2, arr);
          }
          if (item.children) {
            return loop(item.children, key, callback);
          }
        });
      };
      const data = [...this.gData];
      let dragObj;
      loop(data, dragKey, (item, index2, arr) => {
        arr.splice(index2, 1);
        dragObj = item;
      });
      if (!info.dropToGap) {
        loop(data, dropKey, (item) => {
          item.children = item.children || [];
          item.children.push(dragObj);
        });
      } else if ((info.node.children || []).length > 0 && info.node.expanded && dropPosition === 1) {
        loop(data, dropKey, (item) => {
          item.children = item.children || [];
          item.children.unshift(dragObj);
        });
      } else {
        let ar;
        let i;
        loop(data, dropKey, (item, index2, arr) => {
          ar = arr;
          i = index2;
        });
        if (dropPosition === -1) {
          ar.splice(i, 0, dragObj);
        } else {
          ar.splice(i + 1, 0, dragObj);
        }
      }
      this.gData = data;
      this.$emit("drop", info);
    }
  }
};
const __cssModules$4 = {};
var __component__$4 = /* @__PURE__ */ normalizeComponent(__vue2_script$4, render$4, staticRenderFns$4, false, __vue2_injectStyles$4, "bb23058e", null, null);
function __vue2_injectStyles$4(context) {
  for (let o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
var TreeContainer = /* @__PURE__ */ function() {
  return __component__$4.exports;
}();
var render$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("base-container", _vm._b({ staticClass: "menu-container" }, "base-container", _vm.$props, false), [_c("template", { slot: "headerLeft" }, [_vm._t("headerLeft")], 2), _c("div", { attrs: { "slot": "sider" }, slot: "sider" }, [_c("a-menu", _vm._b({ attrs: { "mode": "inline" }, on: { "openChange": _vm.openChangeHandle, "select": _vm.selectHandle } }, "a-menu", _vm.menuConfig, false), [_vm._l(_vm.menus, function(menu) {
    return [menu.children ? _c("a-sub-menu", { key: menu.key }, [_c("span", { attrs: { "slot": "title" }, slot: "title" }, [_vm._v(" " + _vm._s(menu.name || menu.title) + " ")]), _vm._l(menu.children, function(subMenu) {
      return _c("a-menu-item", { key: subMenu.key, on: { "click": function($event) {
        return _vm.handlerClick(menu);
      } } }, [_vm._v(" " + _vm._s(subMenu.name || subMenu.title) + " ")]);
    })], 2) : _c("a-menu-item", { key: menu.key, on: { "click": function($event) {
      return _vm.handlerClick(menu);
    } } }, [_vm._v(" " + _vm._s(menu.name || menu.title) + " ")])];
  })], 2)], 1), _vm._t("default")], 2);
};
var staticRenderFns$3 = [];
var MenuContainer_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$3 = {
  name: "MenuContainer",
  props: Object.assign({}, BaseProps, {
    menus: Array,
    menuConfig: Object
  }),
  methods: {
    handlerClick(o) {
      this.$emit("click", o);
    },
    openChangeHandle(o) {
      this.$emit("openChange", o);
    },
    selectHandle(o) {
      this.$emit("select", o);
    }
  }
};
const __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent(__vue2_script$3, render$3, staticRenderFns$3, false, __vue2_injectStyles$3, "15350440", null, null);
function __vue2_injectStyles$3(context) {
  for (let o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
var MenuContainer = /* @__PURE__ */ function() {
  return __component__$3.exports;
}();
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "tableRef", staticClass: "s-table" }, [_c("a-table", _vm._b({ attrs: { "locale": { emptyText: "\u6682\u65E0\u6570\u636E", filterConfirm: "\u786E\u5B9A", filterReset: "\u91CD\u7F6E" }, "scroll": { x: _vm.scrollX, y: _vm.scrollY }, "columns": _vm.columns }, on: { "change": _vm.handleChange } }, "a-table", _vm.config, false)), _vm._t("default")], 2);
};
var staticRenderFns$2 = [];
var STable_vue_vue_type_style_index_0_lang = "";
const __vue2_script$2 = {
  name: "STable",
  props: {
    autoHeight: {
      type: [Boolean, Number],
      default: false
    },
    config: Object
  },
  data() {
    return {
      columns: [],
      scrollY: 0,
      defaultConfig: {
        rowKey: "id"
      }
    };
  },
  mounted() {
    if (!this.config.rowKey) {
      this.config.rowKey = "id";
    }
    this.parseColumns();
    if (this.autoHeight) {
      this.getScrollY();
      window.addEventListener("resize", this.getScrollY);
    }
  },
  computed: {
    scrollX() {
      let width = 0;
      this.columns.forEach((c) => {
        width += c.width || 100;
      });
      return width;
    }
  },
  methods: {
    getScrollY() {
      setTimeout(() => {
        this.scrollY = this.$el.clientHeight - 50;
        console.log(this.scrollY);
      }, 100);
    },
    handleChange(pagination, filters, sorter) {
      this.$emit("change", pagination, filters, sorter);
    },
    parseColumns() {
      if (!this.$slots.default)
        return false;
      this.$slots.default.forEach((o) => {
        let column = o.componentInstance;
        if (column) {
          let item = {
            align: column.align || "left",
            colSpan: column.colSpan,
            dataIndex: column.prop,
            title: column.title,
            filterDropdown: column.filterDropdown,
            filterDropdownVisible: column.filterDropdownVisible,
            filtered: column.filtered || false,
            filteredValue: column.filteredValue,
            filterIcon: column.filterIcon || false,
            filterMultiple: column.filterMultiple || true,
            filters: column.filters,
            fixed: column.fixed || false,
            key: column.dataIndex || column.id || column.title,
            sorter: column.sorter,
            sortOrder: column.sortOrder,
            width: column.width,
            customCell: column.customCell,
            customHeaderCell: column.customHeaderCell,
            onFilter: column.onFilter,
            onFilterDropdownVisibleChange: column.onFilterDropdownVisibleChange
          };
          if (column.$scopedSlots.default) {
            item.customRender = (text, record, index2) => {
              return column.$scopedSlots.default({ text, record, index: index2 });
            };
          }
          this.columns.push(item);
        }
      });
    }
  }
};
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(__vue2_script$2, render$2, staticRenderFns$2, false, __vue2_injectStyles$2, null, null, null);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
var STable = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span");
};
var staticRenderFns$1 = [];
var STableColumn_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1 = {
  name: "STableColumn",
  props: {
    align: String,
    colSpan: Number,
    dataIndex: String,
    title: String,
    filterDropdown: Object,
    filterDropdownVisible: Boolean,
    filtered: Boolean,
    filteredValue: Array,
    filterIcon: Object,
    filterMultiple: Boolean,
    filters: Array,
    fixed: [String, Boolean],
    prop: String,
    id: String,
    sorter: [Function, Boolean],
    sortOrder: [Function, String],
    width: [Number],
    customCell: Function,
    customHeaderCell: Function,
    onFilter: Function,
    onFilterDropdownVisibleChange: Function
  }
};
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(__vue2_script$1, render$1, staticRenderFns$1, false, __vue2_injectStyles$1, "5337b4c1", null, null);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
var STableColumn = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
var EventBus = {
  install(Vue) {
    const bus = new Vue();
    Object.defineProperty(bus, "on", {
      get() {
        return this.$on.bind(this);
      }
    });
    Object.defineProperty(bus, "off", {
      get() {
        return this.$off.bind(this);
      }
    });
    Object.defineProperty(bus, "once", {
      get() {
        return this.$once.bind(this);
      }
    });
    Object.defineProperty(bus, "emit", {
      get() {
        return this.$emit.bind(this);
      }
    });
    Object.defineProperty(Vue, "bus", {
      get() {
        return bus;
      }
    });
    Object.defineProperty(Vue.prototype, "$bus", {
      get() {
        return bus;
      }
    });
  }
};
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("a-modal", _vm._b({ on: { "ok": _vm.handleOk, "cancel": _vm.handleCancel }, model: { value: _vm.visible, callback: function($$v) {
    _vm.visible = $$v;
  }, expression: "visible" } }, "a-modal", _vm.view ? _vm.view.modal : {}, false), [_vm.comVisible ? _c(_vm.view.component, _vm._b({ ref: "comRef", tag: "component" }, "component", _vm.view.props, false)) : _vm._e()], 1)], 1);
};
var staticRenderFns = [];
var SModal_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script = {
  name: "SModal",
  data() {
    return {
      visible: false,
      view: null,
      comVisible: false,
      timeoutIns: null
    };
  },
  created() {
  },
  mounted() {
    this.$bus.on("bus_openModal", this.openModal);
    this.$bus.on("bus_closeModal", this.closeModal);
    this.$bus.on("bus_okLoadingModal", this.okLoadingModal);
  },
  watch: {
    visible(value) {
      if (value) {
        this.comVisible = true;
      } else {
        if (this.timeoutIns) {
          window.clearTimeout(this.timeoutIns);
        }
        this.timeoutIns = setTimeout(() => {
          this.comVisible = false;
        }, 300);
      }
    }
  },
  methods: {
    init() {
      this.view = {
        modal: {
          okText: "\u786E\u5B9A",
          cancelText: "\u53D6\u6D88"
        },
        component: null,
        props: null,
        ok: () => {
        },
        cancel: () => {
        }
      };
      console.log("init modal", this.view);
    },
    okLoadingModal(loading) {
      if (this.view)
        this.$set(this.view.modal, "confirmLoading", loading);
    },
    openModal(view) {
      this.init();
      console.log("openModal", view);
      this.view = merge_1({}, this.view, view);
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    },
    handleOk() {
      if (this.view.ok) {
        this.view.ok(this.$refs["comRef"]);
      }
    },
    handleCancel() {
      if (this.view.cancel) {
        this.view.cancel();
      }
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, "50336495", null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var SModal = /* @__PURE__ */ function() {
  return __component__.exports;
}();
var index = {
  install: (Vue) => {
    Vue.use(EventBus);
    Vue.component("SModal", SModal);
    let bus = Vue.bus;
    Vue.prototype.$openModal = (view) => {
      console.log("open modal", view);
      bus.emit("bus_openModal", view);
    };
    Vue.prototype.$closeModal = () => {
      bus.emit("bus_closeModal");
    };
    Vue.prototype.$okLoadingModal = (loading) => {
      bus.emit("bus_okLoadingModal", loading);
    };
    Vue.prototype.$openFormModal = (view) => {
      view.modal = Object.assign({}, view.modal, { footer: null });
      bus.emit("bus_openModal", view);
    };
  }
};
export { BaseContainer, MenuContainer, index as SModal, STable, STableColumn, SplitContainer, TabContainer, TableContainer, TreeContainer };
