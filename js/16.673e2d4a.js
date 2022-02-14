(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "65ef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/player/Wrapper.vue?vue&type=template&id=739435c0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"media-container"},[(_vm.mediaType === 'html')?_c('div',{domProps:{"innerHTML":_vm._s(_vm.ProPlayer.theSegment.getHTMLContent().replaceAll('h2', 'h5'))}}):(_vm.mediaType === 'soundslice')?_c('soundslice-renderer',{attrs:{"src":_vm.currentSetup.data}}):_vm._e(),(_vm.renderers.includes(_vm.currentSetup.mediaType))?[(_vm.s.type === 'pdf')?_c('pdf-renderer',{attrs:{"src":_vm.s.src}}):_vm._e()]:(_vm.currentSetup.sources)?_c('div',{staticClass:"media-container",attrs:{"id":"mediaPlayerWrapper","set":(_vm.s = _vm.currentSetup.sources[0])}},[_c('media-player',_vm._b({key:'mediaPlayer-' + _vm.componentKey,attrs:{"src":_vm.s.src}},'media-player',_vm.currentSetup,false))],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/player/Wrapper.vue?vue&type=template&id=739435c0&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/player/Wrapper.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import SoundSlice from './renderers/SoundSlice.vue';

/* harmony default export */ var Wrappervue_type_script_lang_js_ = ({
  name: "MediaPlayerWrapper",
  components: {
    "pdf-renderer": () => Promise.all(/* import() | watch-player */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "1f20")),
    "soundslice-renderer": () => Promise.all(/* import() | watch-player */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "c236")),
    "media-player": () => Promise.all(/* import() | watch-player */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "3416"))
  },
  data: () => ({
    componentKey: 0,
    renderers: ["pdf"]
  }),

  created() {
    this.$root.$on("flip-player", this.flipper);
  },

  mounted() {
    this.openSegment(this.$route.params.segmentID);
  },

  computed: {
    mediaType() {
      return this.ProPlayer.theSegment.getPrimaryMediaType();
    },

    ...Object(vuex_esm["e" /* mapState */])("watch", ["currentSetup", "ProPlayer"])
  },
  watch: {
    currentSetup() {
      // console.info("setup changed", this.currentSetup);
      this.forceRerender();
    }

  },
  methods: { ...Object(vuex_esm["c" /* mapActions */])("watch", ["openSegment"]),

    forceRerender() {
      this.componentKey += 1;
    }

  }
});
// CONCATENATED MODULE: ./src/components/watch/player/Wrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var player_Wrappervue_type_script_lang_js_ = (Wrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/watch/player/Wrapper.vue?vue&type=style&index=0&lang=css&
var Wrappervue_type_style_index_0_lang_css_ = __webpack_require__("833d");

// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/watch/player/Wrapper.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  player_Wrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Wrapper = __webpack_exports__["default"] = (component.exports);


runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */]});


/***/ }),

/***/ "833d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dae6");
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "dae6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=16.673e2d4a.js.map