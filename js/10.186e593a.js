(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "fb63":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/pages/Tools.vue?vue&type=template&id=32bd8d26&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"fit row flex flex-center justify-around"},_vm._l((_vm.toolList),function(tool,i){return _c('q-btn',_vm._b({key:i},'q-btn',Object.assign({}, _vm.props, tool),false))}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Tools.vue?vue&type=template&id=32bd8d26&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/pages/Tools.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Toolsvue_type_script_lang_js_ = ({
  data: () => ({
    props: {
      size: "xl",
      stack: true,
      dense: true,
      glossy: true,
      push: true,
      rounded: true,
      class: "bg-accent q-pa-md",
      style: "min-width: 25vw; min-height: 25vh"
    },
    toolList: [{
      icon: "list",
      to: "/tools/fretboard",
      label: "Fretboard Tool"
    }, {
      to: "/tools/spider",
      // title: "Under Construction",
      // disable: true,
      // glossy: false,
      icon: "bug_report",
      label: "Spider Tool"
    }, {
      to: "/tools/tuner",
      label: "Chromatic Tuner",
      icon: "speed"
    }]
  })
});
// CONCATENATED MODULE: ./src/pages/Tools.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Toolsvue_type_script_lang_js_ = (Toolsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

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



runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QBtn: QBtn["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=10.186e593a.js.map