(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "1c5b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1eb9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1c5b");
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c715":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/auth/LoginRegister.vue?vue&type=template&id=28f82a21&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.submitForm.apply(null, arguments)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.submitForm.apply(null, arguments)}}},[_c('div',{staticClass:"row q-mb-md"},[_c('q-banner',{scopedSlots:_vm._u([{key:"avatar",fn:function(){return [_c('q-icon',{attrs:{"name":"account_circle","color":"primary"}})]},proxy:true}])},[_c('span',{staticClass:"text-capitalize"},[_vm._v(_vm._s(_vm.tab))]),_vm._v(" to access your TXBA experience!\n    ")])],1),_c('div',{staticClass:"row q-mb-md"},[_c('q-input',{ref:"email",staticClass:"col",attrs:{"rules":[
        function (val) { return _vm.isValidEmailAddress(val) || 'Please enter a valid email address'; }
      ],"lazy-rules":"","outlined":"","label":"Email","stack-label":""},model:{value:(_vm.formData.email),callback:function ($$v) {_vm.$set(_vm.formData, "email", $$v)},expression:"formData.email"}})],1),_c('div',{staticClass:"row q-mb-md"},[_c('q-input',{ref:"password",staticClass:"col",attrs:{"outlined":"","stack-label":"","type":"password","label":"Password","rules":[
        function (val) { return val.length >= 6 || 'Please enter at least six characters'; }
      ],"lazy-rules":""},model:{value:(_vm.formData.password),callback:function ($$v) {_vm.$set(_vm.formData, "password", $$v)},expression:"formData.password"}})],1),_c('div',{staticClass:"row"},[_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"label":"Cancel","icon":"close","color":"primary"}}),_c('q-space'),_c('q-btn',{attrs:{"color":"primary","label":_vm.tab,"type":"submit"}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/auth/LoginRegister.vue?vue&type=template&id=28f82a21&

// EXTERNAL MODULE: ./node_modules/@quasar/babel-preset-app/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("7619");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/auth/LoginRegister.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LoginRegistervue_type_script_lang_js_ = ({
  props: ['tab'],
  data: () => ({
    formData: {
      email: "",
      password: ""
    }
  }),
  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["c" /* mapActions */])('auth', ['register_user', 'login_user'])), {}, {
    submitForm() {
      this.$refs.email.validate();
      this.$refs.password.validate();

      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab == 'login') {
          this.login_user(this.formData);
        } else {
          this.register_user(this.formData);
        }
      }
    },

    isValidEmailAddress(email) {
      const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return res.test(String(email).toLowerCase());
    }

  })
});
// CONCATENATED MODULE: ./src/components/auth/LoginRegister.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_LoginRegistervue_type_script_lang_js_ = (LoginRegistervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/banner/QBanner.js
var QBanner = __webpack_require__("54e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__("2c91");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__("7f67");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/auth/LoginRegister.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_LoginRegistervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LoginRegister = __webpack_exports__["a"] = (component.exports);






runtime_auto_import_default()(component, 'components', {QBanner: QBanner["a" /* default */],QIcon: QIcon["a" /* default */],QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */],QSpace: QSpace["a" /* default */]});runtime_auto_import_default()(component, 'directives', {ClosePopup: ClosePopup["a" /* default */]});


/***/ }),

/***/ "c80b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/pages/AuthPage.vue?vue&type=template&id=f68abbec&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-layout',{staticClass:"shadow-2 rounded-borders",staticStyle:{"height":"100vh"},attrs:{"view":"hHh Lpr lff","container":""}},[_c('q-header',{attrs:{"elevated":""}},[_c('q-toolbar',{staticClass:"q-electron-drag"},[_c('q-btn',{staticClass:"q-electron-drag--exception",attrs:{"rounded":"","icon":"key","label":"Enter","color":"grey-4","text-color":"secondary"},on:{"click":function($event){_vm.card = !_vm.card}}}),_c('q-space'),_c('q-toolbar-title',{staticClass:"text-h5 text-bold absolute-center"},[_c('span',{attrs:{"color":"secondary"}},[_vm._v("ProPlayer v8")])]),_c('q-dialog',{model:{value:(_vm.card),callback:function ($$v) {_vm.card=$$v},expression:"card"}},[_c('q-card',{staticClass:"auth-tabs"},[_c('q-tabs',{staticClass:"text-grey",attrs:{"dense":"","active-color":"primary","indicator-color":"primary","align":"justify","narrow-indicator":""},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('q-tab',{attrs:{"name":"login","label":"Login"}}),_c('q-tab',{attrs:{"name":"register","label":"Register"}})],1),_c('q-separator'),_c('q-tab-panels',{attrs:{"animated":""},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('q-tab-panel',{attrs:{"name":"login"}},[_c('login-register',{attrs:{"tab":_vm.tab}})],1),_c('q-tab-panel',{attrs:{"name":"register"}},[_c('login-register',{attrs:{"tab":_vm.tab}})],1)],1)],1)],1)],1)],1),_c('q-page-container',[_c('hero-carousel')],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/AuthPage.vue?vue&type=template&id=f68abbec&

// EXTERNAL MODULE: ./node_modules/@quasar/babel-preset-app/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("7619");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/components/auth/LoginRegister.vue + 4 modules
var LoginRegister = __webpack_require__("c715");

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/auth/HeroCarousel.vue?vue&type=template&id=1ef21a1f&
var HeroCarouselvue_type_template_id_1ef21a1f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"q-pa-xl q-mt-md"},[_c('div',{staticClass:"q-gutter-md"},[_c('q-carousel',{attrs:{"height":"85vh","transition-prev":"fade","transition-next":"fade","infinite":"","autoplay":"","animated":"","arrows":""},on:{"mouseenter":function($event){_vm.autoplay = false},"mouseleave":function($event){_vm.autoplay = true}},model:{value:(_vm.slide),callback:function ($$v) {_vm.slide=$$v},expression:"slide"}},_vm._l((_vm.images),function(img,i){return _c('q-carousel-slide',{key:i,staticClass:"column no-wrap",attrs:{"name":i}},[_c('div',{staticClass:"row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"},[_c('q-img',{staticClass:"rounded-borders full-height",attrs:{"src":img.src,"ratio":img.ratio,"contain":img.contain}})],1)])}),1)],1)])}
var HeroCarouselvue_type_template_id_1ef21a1f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/auth/HeroCarousel.vue?vue&type=template&id=1ef21a1f&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/auth/HeroCarousel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeroCarouselvue_type_script_lang_js_ = ({
  name: "TXBA_Hero",
  data: () => ({
    fullscreen: false,
    slide: 1,
    autoplay: true,
    images: [{
      src: "https://cdn.texasbluesalley.com/styles/TXBALogo.svg",
      contain: true
    }, {
      src: "https://cdn.texasbluesalley.com/misc/locals-page/AllCourses-1600px.jpg"
    }, {
      src: "https://txba-media.s3.amazonaws.com/woodshed/course-type-images/SRV-800.jpg"
    }, {
      src: "https://txba-media.s3.amazonaws.com/woodshed/course-type-images/Influences-800.jpg"
    }, {
      src: "https://cdn.texasbluesalley.com/styles/TXBA-Theme/banners/TXBA-Store-Banner.jpg"
    }, {
      src: "https://cdn.texasbluesalley.com/products/3840/dsc00025__medium.jpg",
      contain: true
    }, {
      src: "https://cdn.texasbluesalley.com/styles/TXBA-Theme/banners/TXBA-Home-Banner.jpg",
      contain: true
    }]
  })
});
// CONCATENATED MODULE: ./src/components/auth/HeroCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_HeroCarouselvue_type_script_lang_js_ = (HeroCarouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarousel.js + 1 modules
var QCarousel = __webpack_require__("880c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarouselSlide.js
var QCarouselSlide = __webpack_require__("62cd");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__("068f");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/auth/HeroCarousel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_HeroCarouselvue_type_script_lang_js_,
  HeroCarouselvue_type_template_id_1ef21a1f_render,
  HeroCarouselvue_type_template_id_1ef21a1f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HeroCarousel = (component.exports);




runtime_auto_import_default()(component, 'components', {QCarousel: QCarousel["a" /* default */],QCarouselSlide: QCarouselSlide["a" /* default */],QImg: QImg["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/pages/AuthPage.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var AuthPagevue_type_script_lang_js_ = ({
  name: "AuthPage",
  components: {
    LoginRegister: LoginRegister["a" /* default */],
    HeroCarousel: HeroCarousel
  },
  data: () => ({
    tab: "login",
    card: false
  }),
  computed: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["e" /* mapState */])("auth", ["loggedIn"])), {}, {
    isElectron() {
      return "spa" === "electron";
    }

  })
});
// CONCATENATED MODULE: ./src/pages/AuthPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_AuthPagevue_type_script_lang_js_ = (AuthPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/AuthPage.vue?vue&type=style&index=0&lang=css&
var AuthPagevue_type_style_index_0_lang_css_ = __webpack_require__("1eb9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__("4d5a");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__("e359");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__("65c6");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__("2c91");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__("6ac5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__("24e8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js
var QTabs = __webpack_require__("429bb");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTab.js
var QTab = __webpack_require__("7460");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanels.js
var QTabPanels = __webpack_require__("adad");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanel.js
var QTabPanel = __webpack_require__("823b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__("09e3");

// CONCATENATED MODULE: ./src/pages/AuthPage.vue






/* normalize component */

var AuthPage_component = Object(componentNormalizer["a" /* default */])(
  pages_AuthPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AuthPage = __webpack_exports__["default"] = (AuthPage_component.exports);















runtime_auto_import_default()(AuthPage_component, 'components', {QLayout: QLayout["a" /* default */],QHeader: QHeader["a" /* default */],QToolbar: QToolbar["a" /* default */],QBtn: QBtn["a" /* default */],QSpace: QSpace["a" /* default */],QToolbarTitle: QToolbarTitle["a" /* default */],QDialog: QDialog["a" /* default */],QCard: QCard["a" /* default */],QTabs: QTabs["a" /* default */],QTab: QTab["a" /* default */],QSeparator: QSeparator["a" /* default */],QTabPanels: QTabPanels["a" /* default */],QTabPanel: QTabPanel["a" /* default */],QPageContainer: QPageContainer["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=9.0c81b9cb.js.map