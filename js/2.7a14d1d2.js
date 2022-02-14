(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "3469":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "98b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3469");
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb63":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/pages/Tools.vue?vue&type=template&id=982d9db6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('iframe',{ref:"theFrame",attrs:{"src":_vm.getURL}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Tools.vue?vue&type=template&id=982d9db6&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/pages/Tools.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var Toolsvue_type_script_lang_js_ = ({
  name: "Tools",
  data: () => ({
    html: ""
  }),
  computed: {
    getURL: () => 'https://texasbluesalley.com/proplayer7-5/--load-tools-SpiderDrills'
  },

  created() {
    this.getTool();
  },

  mounted() {
    this.resizeIFrameToFitContent();
  },

  methods: {
    async getTool() {
      const src = "https://texasbluesalley.com" + this.$route.meta.src;
      console.log("src", src);
      return await this.$store.getters.req(src, null, false).then(resp => this.html = resp);
    },

    resizeIFrameToFitContent() {
      const iFrame = this.$refs.theFrame;
      iFrame.width = iFrame.contentWindow.parent.document.body.scrollWidth + "px";
      iFrame.height = iFrame.contentWindow.parent.document.body.scrollHeight * 0.9 + "px";
    }

  }
});
// CONCATENATED MODULE: ./src/pages/Tools.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Toolsvue_type_script_lang_js_ = (Toolsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Tools.vue?vue&type=style&index=0&lang=css&
var Toolsvue_type_style_index_0_lang_css_ = __webpack_require__("98b6");

// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// CONCATENATED MODULE: ./src/pages/Tools.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Toolsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tools = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=2.7a14d1d2.js.map