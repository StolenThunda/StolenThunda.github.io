(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13,12,14],{

/***/ "3c48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/base/DynamicTab.vue?vue&type=template&id=796020bf&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.componentKey}},[_c('q-tabs',{attrs:{"inline-label":""},model:{value:(_vm.selectedTab),callback:function ($$v) {_vm.selectedTab=$$v},expression:"selectedTab"}},_vm._l((_vm.myTabs),function(tab){return _c('q-tab',{key:tab.name,attrs:{"name":tab.name,"label":tab.iconOnly ? '' : tab.name,"icon":tab.labelOnly  ? '' : tab.icon},on:{"click":function($event){$event.preventDefault();_vm.selectedTab = tab.name}}},[(tab.menu)?_c('q-menu',[_c(tab.menu,{tag:"component"})],1):_vm._e()],1)}),1),_c('q-tab-panels',{model:{value:(_vm.selectedTab),callback:function ($$v) {_vm.selectedTab=$$v},expression:"selectedTab"}},_vm._l((_vm.myTabs),function(tab){return _c('q-tab-panel',{key:tab.name,staticClass:"q-ma-none q-pa-sm",attrs:{"name":tab.name}},[_c(tab.cmp,_vm._b({tag:"component"},'component',tab.props,false))],1)}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/base/DynamicTab.vue?vue&type=template&id=796020bf&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("4e82");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/base/DynamicTab.vue?vue&type=script&lang=js&

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
/* harmony default export */ var DynamicTabvue_type_script_lang_js_ = ({
  name: "DynamicTabs",
  data: () => ({
    componentKey: 0,
    selectedTab: null,
    myTabs: []
  }),
  props: {
    tabList: {
      type: Array,
      default: () => []
    }
  },

  mounted() {
    this.myTabs = this.sortedTabs(this.tabList);
  },

  watch: {
    tabList: {
      handler: function (val, old) {
        // console.log('val', val)
        // console.log('old', old)
        this.getFirst();
        this.componentKey++;
      },
      deep: true
    }
  },
  methods: {
    sortedTabs(list) {
      const tabOrder = ["Segments", "Chapters", "Loops", "Favorites", "Comments"]; // console.log("orig", JSON.stringify(this.tabList));

      list.sort(function (a, b) {
        return tabOrder.indexOf(a.name) - tabOrder.indexOf(b.name);
      }); // console.log("sorted", JSON.stringify(this.tabList));
      // console.log("sorted", JSON.stringify(sorted));

      this.getFirst();
      return list;
    },

    getFirst() {
      var _list$, _list$2;

      const tl = this.$options.propsData.tabList;
      if (!tl || tl.length === 0) return;
      const list = JSON.parse(JSON.stringify(tl));
      const firstName = ((_list$ = list[0]) === null || _list$ === void 0 ? void 0 : _list$.name) || 0; // console.log(`Loading Tab: ${firstName} of ${JSON.stringify(list)}`)

      this.selectedTab = typeof ((_list$2 = list[0]) === null || _list$2 === void 0 ? void 0 : _list$2.name) === "undefined" ? "" : firstName;
      console.log(`Selected Sidebar Tab: ${this.selectedTab}`);
    }

  }
});
// CONCATENATED MODULE: ./src/components/base/DynamicTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_DynamicTabvue_type_script_lang_js_ = (DynamicTabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/base/DynamicTab.vue?vue&type=style&index=0&id=796020bf&lang=stylus&scoped=true&
var DynamicTabvue_type_style_index_0_id_796020bf_lang_stylus_scoped_true_ = __webpack_require__("974f");

// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js
var QTabs = __webpack_require__("429bb");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTab.js
var QTab = __webpack_require__("7460");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/menu/QMenu.js + 4 modules
var QMenu = __webpack_require__("4e73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanels.js
var QTabPanels = __webpack_require__("adad");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanel.js
var QTabPanel = __webpack_require__("823b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/base/DynamicTab.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_DynamicTabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "796020bf",
  null
  
)

/* harmony default export */ var DynamicTab = __webpack_exports__["default"] = (component.exports);







runtime_auto_import_default()(component, 'components', {QTabs: QTabs["a" /* default */],QTab: QTab["a" /* default */],QMenu: QMenu["a" /* default */],QTabPanels: QTabPanels["a" /* default */],QTabPanel: QTabPanel["a" /* default */],QItem: QItem["a" /* default */]});


/***/ }),

/***/ "974f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_2_2_node_modules_stylus_loader_index_js_ref_7_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_stylus_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicTab_vue_vue_type_style_index_0_id_796020bf_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a2a5");
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_2_2_node_modules_stylus_loader_index_js_ref_7_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_stylus_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicTab_vue_vue_type_style_index_0_id_796020bf_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_2_2_node_modules_stylus_loader_index_js_ref_7_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_stylus_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicTab_vue_vue_type_style_index_0_id_796020bf_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a2a5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=13.9e41963d.js.map