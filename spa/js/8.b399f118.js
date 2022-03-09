(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "2ee3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/layouts/Tools.vue?vue&type=template&id=5334c4e8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-layout',{staticClass:"shadow-2 rounded-borders",attrs:{"view":"lHh Lpr lff"}},[_c('q-header',{attrs:{"elevated":"","reveal":""}},[_c('q-bar',{staticClass:"q-electron-drag"},[_c('q-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasMenu),expression:"hasMenu"}],staticClass:"lt-sm",attrs:{"color":"accent","icon":"menu","aria-label":"menu"},on:{"click":function($event){_vm.toggleMenu = !_vm.toggleMenu}}}),_c('q-toolbar-title',{staticClass:"text-capitalize text-h3 text-center"},[_vm._v("\n          "+_vm._s(_vm.$route.meta.name || "TXBA TOOLS")+"\n        ")]),(!_vm.isHomePage)?_c('q-btn',{attrs:{"label":"Back","color":"accent","icon":"close","to":"/"}}):_c('q-btn',{attrs:{"label":"Logout","color":"accent","icon":"close"},on:{"click":_vm.logout}})],1)],1),_c('q-page-container',[_c('router-view',{key:_vm.$route.fullPath,attrs:{"toggleMenu":_vm.toggleMenu}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/Tools.vue?vue&type=template&id=5334c4e8&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/layouts/Tools.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Toolsvue_type_script_lang_js_ = ({
  name: "ToolsLayout",
  data: () => ({
    toggleMenu: false
  }),
  // components: {
  //   DynamicTab: () => import('components/base/DynamicTab.vue'),
  // },
  computed: {
    isHomePage() {
      return this.$route.meta.name === undefined;
    },

    hasMenu() {
      return this.$route.meta.menu !== undefined;
    },

    getMenu() {
      return this.hasMenu ? this.$route.meta.menu : null;
    }

  },

  created() {
    // console.log("created");
    this.$root.$on('app-loaded', app => {
      this.app = app;
    });
  },

  methods: {
    logout() {
      this.$q.dialog({
        title: "Confirm",
        message: "Are you sure you want to logout?",
        cancel: true,
        persistent: true
      }).onOk(() => this.$store.dispatch("auth/logout_user")).onCancel(() => this.$q.notify({
        title: "Cancelled",
        color: "negative",
        message: "Logout cancelled",
        timeout: 1000
      }));
    }

  }
});
// CONCATENATED MODULE: ./src/layouts/Tools.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_Toolsvue_type_script_lang_js_ = (Toolsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 1 modules
var QLayout = __webpack_require__("4d5a");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__("e359");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/bar/QBar.js
var QBar = __webpack_require__("d847");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__("6ac5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js + 1 modules
var QDrawer = __webpack_require__("9404");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__("09e3");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/layouts/Tools.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_Toolsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tools = __webpack_exports__["default"] = (component.exports);








runtime_auto_import_default()(component, 'components', {QLayout: QLayout["a" /* default */],QHeader: QHeader["a" /* default */],QBar: QBar["a" /* default */],QBtn: QBtn["a" /* default */],QToolbarTitle: QToolbarTitle["a" /* default */],QDrawer: QDrawer["a" /* default */],QPageContainer: QPageContainer["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=8.b399f118.js.map