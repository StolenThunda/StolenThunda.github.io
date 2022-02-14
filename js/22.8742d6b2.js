(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "cbff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/pages/Watch.vue?vue&type=template&id=c568dee2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-card',{staticClass:" q-pa-md",model:{value:(_vm.ProPlayer.thePackage),callback:function ($$v) {_vm.$set(_vm.ProPlayer, "thePackage", $$v)},expression:"ProPlayer.thePackage"}},[_c('div',{staticClass:"row item-start q-px-xl"},[_c('div',{staticClass:"col text-caption q-pa-md"},[(_vm.description)?_c('div',{staticClass:"col text-h6",domProps:{"innerHTML":_vm._s(_vm.description)}}):_vm._e(),(_vm.overview !== '')?_c('div',{staticClass:"text-caption",domProps:{"innerHTML":_vm._s(_vm.overview)}}):_vm._e()]),_c('q-img',{staticClass:"col fit q-ma-sm rounded-borders",attrs:{"src":_vm.image,"ratio":4 / 3,"contain":""},scopedSlots:_vm._u([{key:"loading",fn:function(){return [_c('q-spinner-bars',{attrs:{"color":"white"}})]},proxy:true}])})],1),_c('div',{},[_c('q-avatar',{attrs:{"icon":"mdi-arrow-left-bold"}}),_vm._v("\n    Choose a segment to the left\n  ")],1),_c('q-inner-loading',[_c('q-spinner-gears',{attrs:{"size":"50px","color":"primary"}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Watch.vue?vue&type=template&id=c568dee2&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/pages/Watch.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Watchvue_type_script_lang_js_ = ({
  name: "PackageInfo",

  mounted() {
    this.$store.commit("watch/RESET_PACKAGE");
  },

  computed: {
    title() {
      return this.ProPlayer.thePackage.getTitle();
    },

    image() {
      return this.ProPlayer.thePackage.getImageURL();
    },

    tuning() {
      return this.ProPlayer.thePackage.getTuning();
    },

    description() {
      return this.ProPlayer.thePackage.getDescription();
    },

    overview() {
      return this.ProPlayer.thePackage.getOverview();
    },

    ...Object(vuex_esm["e" /* mapState */])("watch", ["ProPlayer"])
  }
});
// CONCATENATED MODULE: ./src/pages/Watch.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Watchvue_type_script_lang_js_ = (Watchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__("068f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerBars.js
var QSpinnerBars = __webpack_require__("a154");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__("74f7");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerGears.js
var QSpinnerGears = __webpack_require__("cf57");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/Watch.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Watchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Watch = __webpack_exports__["default"] = (component.exports);







runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QImg: QImg["a" /* default */],QSpinnerBars: QSpinnerBars["a" /* default */],QAvatar: QAvatar["a" /* default */],QInnerLoading: QInnerLoading["a" /* default */],QSpinnerGears: QSpinnerGears["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=22.8742d6b2.js.map