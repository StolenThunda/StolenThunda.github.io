(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "3987":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Spider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f792");
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Spider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Spider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "47ea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/tools/Spider.vue?vue&type=template&id=194f34a1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"resting"},[_c('div',{attrs:{"id":"pageWrapper"}},[_c('div',{staticClass:"control-bar",attrs:{"id":"topbar"}},[_c('div',{staticClass:"control-bar-button dropdown",attrs:{"id":"combinationsToggle","data-toggle":"sidebar-dropdown"}},[_c('i',{staticClass:"fa fa-check-square-o"}),_c('span',{attrs:{"id":"combinationCount"}})]),_c('div',{staticClass:"control-bar-input-wrapper"},[_c('label',[_vm._v("BPM:")]),_c('input',{attrs:{"id":"tempo","type":"text","value":"150","size":"4","onChange":"tempoChanged();"}})]),_c('button',{staticClass:"control-bar-button",attrs:{"id":"play","onClick":"toggleRun()","disabled":""}},[_c('i',{staticClass:"fa fa-play"})]),_c('button',{staticClass:"control-bar-button",attrs:{"id":"stop","onClick":"stop();","disabled":""}},[_c('i',{staticClass:"fa fa-stop"})])]),_c('q-dialog',{staticClass:"dropdown-pane dark large",attrs:{"id":"sidebar-dropdown","data-close-on-click":"true","data-close-on-click-inside":"false","data-dropdown":""},model:{value:(_vm.showCombos),callback:function ($$v) {_vm.showCombos=$$v},expression:"showCombos"}},[_c('div',{attrs:{"id":"combinations"}},[_c('div',{attrs:{"id":"combinationSelector"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"columns small-6 medium-3"},[_c('div',{staticClass:"text-center"},[_vm._v("1st")]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCategoryCheckbox",attrs:{"type":"checkbox","id":"all-1","onchange":"checkSet(1, this.checked);"}}),_c('label',{attrs:{"for":"all-1"}},[_vm._v("All")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-1",attrs:{"type":"checkbox","id":"combo-0"}}),_c('label',{attrs:{"for":"combo-0"}},[_vm._v("1 2 3 4")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-1",attrs:{"type":"checkbox","id":"combo-1"}}),_c('label',{attrs:{"for":"combo-1"}},[_vm._v("1 2 4 3")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-1",attrs:{"type":"checkbox","id":"combo-2"}}),_c('label',{attrs:{"for":"combo-2"}},[_vm._v("1 3 2 4")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-1",attrs:{"type":"checkbox","id":"combo-3"}}),_c('label',{attrs:{"for":"combo-3"}},[_vm._v("1 3 4 2")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-1",attrs:{"type":"checkbox","id":"combo-4"}}),_c('label',{attrs:{"for":"combo-4"}},[_vm._v("1 4 2 3")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-1",attrs:{"type":"checkbox","id":"combo-5"}}),_c('label',{attrs:{"for":"combo-5"}},[_vm._v("1 4 3 2")])])]),_c('div',{staticClass:"columns small-6 medium-3"},[_c('div',{staticClass:"text-center"},[_vm._v("2nd")]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCategoryCheckbox",attrs:{"type":"checkbox","id":"all-2","onchange":"checkSet(2, this.checked);"}}),_c('label',{attrs:{"for":"all-2"}},[_vm._v("All")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-2",attrs:{"type":"checkbox","id":"combo-6"}}),_c('label',{attrs:{"for":"combo-6"}},[_vm._v("2 1 3 4")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-2",attrs:{"type":"checkbox","id":"combo-7"}}),_c('label',{attrs:{"for":"combo-7"}},[_vm._v("2 1 4 3")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-2",attrs:{"type":"checkbox","id":"combo-8"}}),_c('label',{attrs:{"for":"combo-8"}},[_vm._v("2 3 1 4")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-2",attrs:{"type":"checkbox","id":"combo-9"}}),_c('label',{attrs:{"for":"combo-9"}},[_vm._v("2 3 4 1")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-2",attrs:{"type":"checkbox","id":"combo-10"}}),_c('label',{attrs:{"for":"combo-10"}},[_vm._v("2 4 1 3")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-2",attrs:{"type":"checkbox","id":"combo-11"}}),_c('label',{attrs:{"for":"combo-11"}},[_vm._v("2 4 3 1")])])]),_c('div',{staticClass:"columns small-6 medium-3"},[_c('div',{staticClass:"text-center"},[_vm._v("3rd")]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCategoryCheckbox",attrs:{"type":"checkbox","id":"all-3","onchange":"checkSet(3, this.checked);"}}),_c('label',{attrs:{"for":"all-3"}},[_vm._v("All")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-3",attrs:{"type":"checkbox","id":"combo-12"}}),_c('label',{attrs:{"for":"combo-12"}},[_vm._v("3 1 2 4")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-3",attrs:{"type":"checkbox","id":"combo-13"}}),_c('label',{attrs:{"for":"combo-13"}},[_vm._v("3 1 4 2")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-3",attrs:{"type":"checkbox","id":"combo-14"}}),_c('label',{attrs:{"for":"combo-14"}},[_vm._v("3 2 1 4")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-3",attrs:{"type":"checkbox","id":"combo-15"}}),_c('label',{attrs:{"for":"combo-15"}},[_vm._v("3 2 4 1")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-3",attrs:{"type":"checkbox","id":"combo-16"}}),_c('label',{attrs:{"for":"combo-16"}},[_vm._v("3 4 1 2")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-3",attrs:{"type":"checkbox","id":"combo-17"}}),_c('label',{attrs:{"for":"combo-17"}},[_vm._v("3 4 2 1")])])]),_c('div',{staticClass:"columns small-6 medium-3"},[_c('div',{staticClass:"text-center"},[_vm._v("4th")]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCategoryCheckbox",attrs:{"type":"checkbox","id":"all-4","onchange":"checkSet(4, this.checked);"}}),_c('label',{attrs:{"for":"all-4"}},[_vm._v("All")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-4",attrs:{"type":"checkbox","id":"combo-18"}}),_c('label',{attrs:{"for":"combo-18"}},[_vm._v("4 1 2 3")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-4",attrs:{"type":"checkbox","id":"combo-19"}}),_c('label',{attrs:{"for":"combo-19"}},[_vm._v("4 1 3 2")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-4",attrs:{"type":"checkbox","id":"combo-20"}}),_c('label',{attrs:{"for":"combo-20"}},[_vm._v("4 2 1 3")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-4",attrs:{"type":"checkbox","id":"combo-21"}}),_c('label',{attrs:{"for":"combo-21"}},[_vm._v("4 2 3 1")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-4",attrs:{"type":"checkbox","id":"combo-22"}}),_c('label',{attrs:{"for":"combo-22"}},[_vm._v("4 3 1 2")])]),_c('div',{staticClass:"non-breaking"},[_c('input',{staticClass:"checkbox comboCheckbox finger-4",attrs:{"type":"checkbox","id":"combo-23"}}),_c('label',{attrs:{"for":"combo-23"}},[_vm._v("4 3 2 1")])])])])])])]),_c('div',{attrs:{"id":"main"}},[_c('div',{attrs:{"id":"headerWrapper"}},[_c('div',{attrs:{"id":"message"}})]),_c('div',{staticClass:"fretboard"},[_c('div',{staticClass:"fretboard-mask"},[_c('div',{staticClass:"string",attrs:{"id":"string1"}}),_c('div',{staticClass:"string",attrs:{"id":"string2"}}),_c('div',{staticClass:"string",attrs:{"id":"string3"}}),_c('div',{staticClass:"string",attrs:{"id":"string4"}}),_c('div',{staticClass:"string",attrs:{"id":"string5"}}),_c('div',{staticClass:"string",attrs:{"id":"string6"}}),_c('div',{staticClass:"fret",attrs:{"id":"fret1"}}),_c('div',{staticClass:"fret",attrs:{"id":"fret2"}}),_c('div',{staticClass:"fret",attrs:{"id":"fret3"}}),_c('div',{staticClass:"fret",attrs:{"id":"fret4"}}),_c('div',{staticClass:"fret",attrs:{"id":"fret5"}}),_c('div',{staticClass:"fret",attrs:{"id":"fret6"}}),_c('div',{staticClass:"fret",attrs:{"id":"fret7"}}),_c('div',{staticClass:"dot",attrs:{"id":"dot1"}},[_vm._v("1")]),_c('div',{staticClass:"dot",attrs:{"id":"dot2"}},[_vm._v("2")]),_c('div',{staticClass:"dot",attrs:{"id":"dot3"}},[_vm._v("3")]),_c('div',{staticClass:"dot",attrs:{"id":"dot4"}},[_vm._v("4")])])]),_c('div',{attrs:{"id":"progressBarWrapper"}},[_c('div',{staticClass:"progress-wrapper",attrs:{"id":"progressBar"}},[_c('div',{staticClass:"progress-indicator",attrs:{"id":"progressIndicator"}})])])])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tools/Spider.vue?vue&type=template&id=194f34a1&

// EXTERNAL MODULE: ./node_modules/howler/dist/howler.js
var howler = __webpack_require__("1e5c");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/tools/Spider.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//

/* harmony default export */ var Spidervue_type_script_lang_js_ = ({
  name: 'SpiderTool',
  data: () => ({
    tempo: 200,
    stringSpacing: 18.8,
    stringOffset: -3.5,
    timerDelay: 60 / tempo * 1000,
    dotStrings: [1, 1, 1, 1],
    dotDirections: [1, 1, 1, 1],
    allCombinations: [],
    selectedCombinations: [],
    nRestCycle: 7,
    bRestFinished: false,
    bIsRunning: false,
    bIsPaused: false,
    bCountdownFinished: false,
    nCountdownCycle: 8,
    nCombinationIndex: 0,
    nCombinationDotIndex: -1,
    nStringIndex: 1,
    nTimerID: null,
    tickSound: null,
    tockSound: null
  }),

  mounted() {
    var FastClick = __webpack_require__("fe3c");

    FastClick.attach(document.body, {});
    this.tickSound = new howler["Howl"]({
      src: ['/assets/audio/tick-sound.mp3']
    });
    this.tockSound = new howler["Howl"]({
      src: ['/assets/audio/tock-sound.mp3']
    });
    allCombinations.push([1, 2, 3, 4]);
    allCombinations.push([1, 2, 4, 3]);
    allCombinations.push([1, 3, 2, 4]);
    allCombinations.push([1, 3, 4, 2]);
    allCombinations.push([1, 4, 2, 3]);
    allCombinations.push([1, 4, 3, 2]);
    allCombinations.push([2, 1, 3, 4]);
    allCombinations.push([2, 1, 4, 3]);
    allCombinations.push([2, 3, 1, 4]);
    allCombinations.push([2, 3, 4, 1]);
    allCombinations.push([2, 4, 1, 3]);
    allCombinations.push([2, 4, 3, 1]);
    allCombinations.push([3, 1, 2, 4]);
    allCombinations.push([3, 1, 4, 2]);
    allCombinations.push([3, 2, 1, 4]);
    allCombinations.push([3, 2, 4, 1]);
    allCombinations.push([3, 4, 1, 2]);
    allCombinations.push([3, 4, 2, 1]);
    allCombinations.push([4, 1, 2, 3]);
    allCombinations.push([4, 1, 3, 2]);
    allCombinations.push([4, 2, 1, 3]);
    allCombinations.push([4, 2, 3, 1]);
    allCombinations.push([4, 3, 1, 2]);
    allCombinations.push([4, 3, 2, 1]);
  },

  methods: {
    playClick(tickOrTock) {
      if (tickOrTock == 0) {
        this.tickSound.play();
      } else {
        this.tockSound.play();
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/tools/Spider.vue?vue&type=script&lang=js&
 /* harmony default export */ var tools_Spidervue_type_script_lang_js_ = (Spidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/tools/Spider.vue?vue&type=style&index=0&lang=css&
var Spidervue_type_style_index_0_lang_css_ = __webpack_require__("3987");

// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__("24e8");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/tools/Spider.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tools_Spidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Spider = __webpack_exports__["default"] = (component.exports);



runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QDialog: QDialog["a" /* default */]});


/***/ }),

/***/ "f792":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=3.37767908.js.map