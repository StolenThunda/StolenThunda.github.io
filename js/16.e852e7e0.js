(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "b5a2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/base/FavoritesList.vue?vue&type=template&id=2e739be0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.favs !== null)?_c('q-list',{attrs:{"dense":""}},[_vm._l((Object.keys(_vm.favs)),function(item,i){return [_c('q-expansion-item',{key:i,staticClass:"text-capitalize text-body2 section-header",staticStyle:{"max-width":"350px"},attrs:{"group":"accordion","header-style":"background-color:#464646; min-width: 250px;","switch-toggle-side":""},scopedSlots:_vm._u([{key:"header",fn:function(){return [_vm._v("\n        "+_vm._s(item)+"\n        "),_c('q-space'),_c('q-badge',{attrs:{"color":"accent","floating":""}},[_vm._v(_vm._s(_vm.favs[item].length)+" ")])]},proxy:true}],null,true)},[_c('q-list',{staticClass:"q-py-sm rounded-borders",attrs:{"bordered":"","dense":""}},[_vm._l((_vm.favs[item]),function(fav){return [_c('q-item',{key:fav.name,staticClass:"q-mx-none "},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-btn',{attrs:{"icon":"play_circle_filled","color":"secondary","size":"xs","round":""},on:{"click":function($event){return _vm.link(fav)}}})],1),_c('q-item-section',{attrs:{"title":fav.title}},[_vm._v("\n              "+_vm._s(fav.title)+"\n            ")]),_c('q-item-section',{attrs:{"color":"grey","side":""},on:{"click":function($event){return _vm.removeFavorite(fav)}}},[_c('q-btn',{attrs:{"icon":"delete","color":"red","size":"xs","round":""}})],1)],1),_c('q-separator',{key:fav.id})]})],2)],1)]})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/base/FavoritesList.vue?vue&type=template&id=2e739be0&

// EXTERNAL MODULE: ./node_modules/@quasar/babel-preset-app/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("7619");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/base/FavoritesList.vue?vue&type=script&lang=js&

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

/* harmony default export */ var FavoritesListvue_type_script_lang_js_ = ({
  name: "FavList",
  data: () => ({
    favs: null
  }),

  mounted() {
    this.getFavs();
  },

  watch: {
    favorites() {
      this.getFavs();
    }

  },
  computed: objectSpread2_default()({}, Object(vuex_esm["e" /* mapState */])("default", ["favorites"])),
  methods: objectSpread2_default()(objectSpread2_default()({
    link(fav) {
      if (fav.src !== "Imported") {
        this.$router.push(`/watch/${fav.id}`);
      } else {
        this.$router.push(`/watch/${fav.id}/${fav.id}`);
      } // });

    },

    getFavs() {
      this.favs = this.$store.getters["default/getFavsByType"];
    }

  }, Object(vuex_esm["c" /* mapActions */])("default", ["removeFavorite"])), Object(vuex_esm["c" /* mapActions */])("watch", ["playSegment", "fetchPackage", "fetchDefaultMedia"]))
});
// CONCATENATED MODULE: ./src/components/base/FavoritesList.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_FavoritesListvue_type_script_lang_js_ = (FavoritesListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/expansion-item/QExpansionItem.js + 1 modules
var QExpansionItem = __webpack_require__("3b73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__("2c91");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__("58a81");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/base/FavoritesList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_FavoritesListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FavoritesList = __webpack_exports__["default"] = (component.exports);









runtime_auto_import_default()(component, 'components', {QList: QList["a" /* default */],QExpansionItem: QExpansionItem["a" /* default */],QSpace: QSpace["a" /* default */],QBadge: QBadge["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QBtn: QBtn["a" /* default */],QSeparator: QSeparator["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=16.e852e7e0.js.map