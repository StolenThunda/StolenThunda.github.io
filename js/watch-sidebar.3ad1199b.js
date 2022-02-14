(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "278d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/settings/PlayerSettings.vue?vue&type=template&id=d0f41f14&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"row no-wrap q-pa-md"},_vm.$listeners),[_c('div',{staticClass:"column"},[_c('div',{staticClass:"text-overline q-mb-md"},[_vm._v("Settings")]),_c('q-btn',{attrs:{"label":"Show Current Setup","color":"secondary","outline":""},on:{"click":function($event){_vm.setup = true}}}),_c('q-dialog',{model:{value:(_vm.setup),callback:function ($$v) {_vm.setup=$$v},expression:"setup"}},[_c('q-card',{staticClass:"my-card",attrs:{"set":(_vm.img = _vm.getImage)}},[_c('q-img',{attrs:{"src":_vm.img}},[_c('div',{staticClass:"absolute-bottom text-subtitle1 text-center"},[_c('p',{staticClass:"text-weight-bolder"},[_vm._v(_vm._s(_vm.getTitle))]),_vm._v("\n            "+_vm._s(_vm.img)+"\n          ")])]),_c('q-card-section',[_c('pre',[_vm._v(_vm._s(_vm.currentSetup))])])],1)],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/settings/PlayerSettings.vue?vue&type=template&id=d0f41f14&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/format.js
var format = __webpack_require__("7937");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/settings/PlayerSettings.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // we import all of `format`

; // destructuring to keep only what is needed

const {
  capitalize
} = format["b" /* default */];
/* harmony default export */ var PlayerSettingsvue_type_script_lang_js_ = ({
  data() {
    return {
      setup: false
    };
  },

  watch: {
    truncate: function () {
      this.$root.$emit("toggle-truncate");
    },
    filtered: function () {
      this.$root.$emit("toggle-filtered");
    }
  },
  computed: {
    getTitle() {
      var _this$currentSetup$ti, _this$currentSetup$em;

      return (_this$currentSetup$ti = this.currentSetup.title) !== null && _this$currentSetup$ti !== void 0 ? _this$currentSetup$ti : `${capitalize(this.currentSetup.type)}: ${(_this$currentSetup$em = this.currentSetup.embed) === null || _this$currentSetup$em === void 0 ? void 0 : _this$currentSetup$em.message} `;
    },

    getImage() {
      const num = Math.floor(Math.random() * 50);
      return `https://picsum.photos/id/${num}/500/300`;
    },

    ...Object(vuex_esm["e" /* mapState */])("watch", ["currentSetup"])
  },
  methods: {}
});
// CONCATENATED MODULE: ./src/components/watch/settings/PlayerSettings.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_PlayerSettingsvue_type_script_lang_js_ = (PlayerSettingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__("24e8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__("068f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/watch/settings/PlayerSettings.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settings_PlayerSettingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PlayerSettings = __webpack_exports__["default"] = (component.exports);






runtime_auto_import_default()(component, 'components', {QBtn: QBtn["a" /* default */],QDialog: QDialog["a" /* default */],QCard: QCard["a" /* default */],QImg: QImg["a" /* default */],QCardSection: QCardSection["a" /* default */]});


/***/ }),

/***/ "2db6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/loopTab/ReadOnlyLoops.vue?vue&type=template&id=bb58e97e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ProPlayer.theSegment)?_c('div',[_c('loop-list',_vm._b({},'loop-list',_vm.loopData,false))],1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/ReadOnlyLoops.vue?vue&type=template&id=bb58e97e&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/components/watch/sidebar/loopTab/LoopList.vue + 9 modules
var LoopList = __webpack_require__("a8f0");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/loopTab/ReadOnlyLoops.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var ReadOnlyLoopsvue_type_script_lang_js_ = ({
  name: "ReadOnlyLoops",
  components: {
    LoopList: LoopList["a" /* default */]
  },

  mounted() {
    this.ProPlayer.loopsManager.createNewCollection("loopList", "system", false);
    this.ProPlayer.loopsManager.addListToCollectionFromArray(this.ProPlayer.theSegment.getLoopsArray(), "system");
  },

  computed: {
    loopData() {
      const msg = "This item does not have any instant loops.";
      const loops = this.ProPlayer.theSegment.getLoopsArray() || [];
      console.info("setting loopdata", loops);
      return {
        altMessage: msg,
        loopArray: loops,
        collectionID: this.TXBALoops ? 0 : 2
      };
    },

    ...Object(vuex_esm["e" /* mapState */])("watch", ["ProPlayer"])
  }
});
// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/ReadOnlyLoops.vue?vue&type=script&lang=js&
 /* harmony default export */ var loopTab_ReadOnlyLoopsvue_type_script_lang_js_ = (ReadOnlyLoopsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/ReadOnlyLoops.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  loopTab_ReadOnlyLoopsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ReadOnlyLoops = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "4314":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_quasar_app_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_LoopManager_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("861e");
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_quasar_app_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_LoopManager_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_quasar_app_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_LoopManager_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6818":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/ChapterTab/Chapters.vue?vue&type=template&id=13b68e77&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('q-toolbar',{staticClass:"bg-primary shadow-2 tab-title"},[_c('q-toolbar-title',{staticClass:"text-capitalize text-caption"},[_vm._v("\n      Chapters\n    ")])],1),_c('chapter-list',_vm._b({},'chapter-list',_vm.chapterData,false))],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/sidebar/ChapterTab/Chapters.vue?vue&type=template&id=13b68e77&scoped=true&

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/ChapterTab/ChapterList.vue?vue&type=template&id=d453bcd8&
var ChapterListvue_type_template_id_d453bcd8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.chapterArray.length)?_c('q-list',{staticClass:"q-mr-xs",attrs:{"bordered":"","separator":"","dense":""}},[_vm._l((_vm.chapterArray.entries()),function(ref){
var index = ref[0];
var chapter = ref[1];
return [_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],key:_vm.getItemName(chapter) + _vm.collectionID + _vm.componentKey + index,attrs:{"clickable":"","active-class":"text-orange","id":_vm.getItemName(chapter)},on:{"click":function($event){$event.preventDefault();return _vm.setSeekToTime(chapter[1])}}},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-icon',{attrs:{"name":"mdi-bookmark"}})],1),_c('q-item-section',{staticClass:"text-center"},[_c('q-item-label',[_vm._v("\n            "+_vm._s(chapter[0])+"\n          ")])],1)],1)]})],2):_c('p',[_vm._v(_vm._s(_vm.altMessage))])],1)}
var ChapterListvue_type_template_id_d453bcd8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/sidebar/ChapterTab/ChapterList.vue?vue&type=template&id=d453bcd8&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/ChapterTab/ChapterList.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ChapterListvue_type_script_lang_js_ = ({
  name: "ChapterList",
  props: {
    chapterArray: {
      type: Array,
      default: () => []
    },
    altMessage: {
      type: String,
      default: "No Alt Message or Data"
    },
    collectionID: {
      type: Number,
      default: () => 0
    }
  },
  data: () => ({
    activeList: {},
    componentKey: 0
  }),

  created() {
    if (this.chapterArray.length) {
      this.chapterArray.map(chapter => {
        const key = this.getActiveItemName(chapter);
        this.activeList[key] = false;
        Object.assign({}, this, this.activeList);
      });
    }
  },

  methods: {
    loopSelected(idx) {
      const selection = {
        nCollectionID: this.collectionID,
        nListIndex: 0,
        nLoopIndex: idx
      };
      console.log('chap selection', selection);
      this.setLoopSelected(selection);
    },

    getActiveItemName(val) {
      return this.getItemName(val) + "_active";
    },

    getItemName(val) {
      const name = val[0].replace(/\s/g, "") || ""; // console.log("getIName", name);

      return name;
    },

    ...Object(vuex_esm["c" /* mapActions */])("watch", ["setSeekToTime", "setLoopSelected"])
  }
});
// CONCATENATED MODULE: ./src/components/watch/sidebar/ChapterTab/ChapterList.vue?vue&type=script&lang=js&
 /* harmony default export */ var ChapterTab_ChapterListvue_type_script_lang_js_ = (ChapterListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__("714f");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/watch/sidebar/ChapterTab/ChapterList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ChapterTab_ChapterListvue_type_script_lang_js_,
  ChapterListvue_type_template_id_d453bcd8_render,
  ChapterListvue_type_template_id_d453bcd8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChapterList = (component.exports);






runtime_auto_import_default()(component, 'components', {QList: QList["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QIcon: QIcon["a" /* default */],QItemLabel: QItemLabel["a" /* default */]});runtime_auto_import_default()(component, 'directives', {Ripple: Ripple["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/ChapterTab/Chapters.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Chaptersvue_type_script_lang_js_ = ({
  name: "Chapters",
  components: {
    ChapterList: ChapterList
  },
  computed: {
    chapterData() {
      return {
        altMessage: "This segment does not have any chapter markers.",
        chapterArray: this.ProPlayer.theSegment.getChaptersArray() || []
      };
    },

    ...Object(vuex_esm["e" /* mapState */])("watch", ["ProPlayer"])
  }
});
// CONCATENATED MODULE: ./src/components/watch/sidebar/ChapterTab/Chapters.vue?vue&type=script&lang=js&
 /* harmony default export */ var ChapterTab_Chaptersvue_type_script_lang_js_ = (Chaptersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__("65c6");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__("6ac5");

// CONCATENATED MODULE: ./src/components/watch/sidebar/ChapterTab/Chapters.vue





/* normalize component */

var Chapters_component = Object(componentNormalizer["a" /* default */])(
  ChapterTab_Chaptersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "13b68e77",
  null
  
)

/* harmony default export */ var Chapters = __webpack_exports__["default"] = (Chapters_component.exports);



runtime_auto_import_default()(Chapters_component, 'components', {QToolbar: QToolbar["a" /* default */],QToolbarTitle: QToolbarTitle["a" /* default */]});


/***/ }),

/***/ "7b72":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_641bcfba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9fef");
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_641bcfba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_641bcfba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7f3c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/loopTab/LoopManager.vue?vue&type=template&id=4b5fef5f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('q-toolbar',{staticClass:"bg-primary text-capitalize  shadow-2 tab-title"},[_c('q-toolbar-title',{staticClass:"text-capitalize text-caption"},[_vm._v("Instant Loops")])],1),_c('loop-tabs',{attrs:{"tabList":_vm.tabs}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/LoopManager.vue?vue&type=template&id=4b5fef5f&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/loopTab/LoopManager.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//

/* harmony default export */ var LoopManagervue_type_script_lang_js_ = ({
  name: "LoopManager",
  data: () => ({
    active: false,
    tabs: [{
      name: "TXBA",
      componentName: "TXBA Loops",
      cmp: () => Promise.all(/* import() | watch-sidebar */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "2db6"))
    }, {
      name: "Yours",
      componentName: "Your Loops",
      icon: "",
      cmp: () => Promise.all(/* import() | watch-sidebar */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "bdaa"))
    }, {
      name: "Locals",
      componentName: "Locals Loops",
      cmp: () => Promise.all(/* import() | watch-sidebar */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "ef58"))
    }]
  }),
  components: {
    loopTabs: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "3c48"))
  },
  computed: { ...Object(vuex_esm["e" /* mapState */])("watch", ["currentSegment"])
  }
});
// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/LoopManager.vue?vue&type=script&lang=js&
 /* harmony default export */ var loopTab_LoopManagervue_type_script_lang_js_ = (LoopManagervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/watch/sidebar/loopTab/LoopManager.vue?vue&type=style&index=0&lang=scss&
var LoopManagervue_type_style_index_0_lang_scss_ = __webpack_require__("4314");

// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__("65c6");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__("6ac5");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/LoopManager.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  loopTab_LoopManagervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LoopManager = __webpack_exports__["default"] = (component.exports);



runtime_auto_import_default()(component, 'components', {QToolbar: QToolbar["a" /* default */],QToolbarTitle: QToolbarTitle["a" /* default */]});


/***/ }),

/***/ "861e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9fef":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a8f0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/loopTab/LoopList.vue?vue&type=template&id=276228c2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.activeList)?_c('q-list',{staticClass:"q-mr-xs",attrs:{"bordered":"","separator":""}},_vm._l((Object.entries(_vm.loopArray)),function(item,i){return _c('LoopListItem',{key:i + _vm.componentKey,attrs:{"set":(_vm.loop = _vm.loopArray[i]),"loop":_vm.loop,"index":_vm.loop[0],"active":_vm.isActive(_vm.loop)}})}),1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/LoopList.vue?vue&type=template&id=276228c2&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/loopTab/LoopListItem.vue?vue&type=template&id=30343596&scoped=true&
var LoopListItemvue_type_template_id_30343596_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],key:_vm.index,attrs:{"clickable":"","active-class":"bg-accent text-white","active":_vm.active},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.$root.$emit('toggle-active', _vm.loop)}}},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-icon',{attrs:{"name":"mdi-autorenew"}})],1),_c('q-item-section',{staticClass:"text-center"},[_c('q-item-label',[_vm._v("\n      "+_vm._s(_vm.loop[0])+"\n    ")])],1),_c('q-item-section',{attrs:{"side":"","avatar":""}},[_c('q-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.active),expression:"!active"}],attrs:{"name":"mdi-plus-circle"}}),_c('q-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],attrs:{"name":"mdi-check-circle"}})],1)],1)}
var LoopListItemvue_type_template_id_30343596_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/LoopListItem.vue?vue&type=template&id=30343596&scoped=true&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/loopTab/LoopListItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LoopListItemvue_type_script_lang_js_ = ({
  props: ["loop", "index", "active"]
});
// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/LoopListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var loopTab_LoopListItemvue_type_script_lang_js_ = (LoopListItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__("714f");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/LoopListItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  loopTab_LoopListItemvue_type_script_lang_js_,
  LoopListItemvue_type_template_id_30343596_scoped_true_render,
  LoopListItemvue_type_template_id_30343596_scoped_true_staticRenderFns,
  false,
  null,
  "30343596",
  null
  
)

/* harmony default export */ var LoopListItem = (component.exports);





runtime_auto_import_default()(component, 'components', {QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QIcon: QIcon["a" /* default */],QItemLabel: QItemLabel["a" /* default */]});runtime_auto_import_default()(component, 'directives', {Ripple: Ripple["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/loopTab/LoopList.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var LoopListvue_type_script_lang_js_ = ({
  name: "LoopList",
  data: () => ({
    componentKey: 0
  }),
  props: {
    loopArray: {
      type: Array,
      default: () => []
    },
    altMessage: {
      type: String,
      default: "No Alt Message or Data"
    },
    collectionID: {
      type: Number,
      default: () => 0
    }
  },
  components: {
    LoopListItem: LoopListItem
  },

  created() {
    var _this$loopArray;

    if ((_this$loopArray = this.loopArray) !== null && _this$loopArray !== void 0 && _this$loopArray.length) {
      const list = {};

      for (let [k, v] of Object.entries(this.loopArray)) {
        const loop = v;
        const key = this.getActiveItemName(loop);
        list[key] = false; // console.log('loop', key, loop);
      }

      this.$store.commit("watch/SET_ACTIVE_LOOPLIST", list);
    }

    this.$root.$on("loop-cleared", this.clearAllLoops);
    this.$root.$on("get-item-id", this.getItemID);
    this.$root.$on("toggle-active", this.toggleActive);
  },

  computed: { ...Object(vuex_esm["e" /* mapState */])("watch", {
      activeList: state => state.playerSettings.activeList
    })
  },
  methods: {
    clearAllLoops() {
      Object.entries(this.activeList).map((k, v) => {
        return this.activeList[k] = false;
      });
    },

    getItemID({
      loop,
      index
    }) {
      return this.getActiveItemName(loop) + this.collectionID + index;
    },

    isActive(loop) {
      return this.activeList[this.getActiveItemName(loop)];
    },

    getActiveItemName(val) {
      return this.getItemName(val) + "_active";
    },

    toggleActive(loop) {
      const itm = this.getActiveItemName(loop);
      const active = !this.activeList[itm];
      const objLoop = {
        key: itm,
        active: active,
        loopdata: active ? loop : ["", -1, -1]
      };
      this.$store.dispatch("watch/setLoopWithObject", objLoop); // this.componentKey++;
    },

    getItemName(val) {
      if (!val || !val[0]) return val;
      const name = val[0].replace(/\s/g, "") || ""; // console.log("getIName", name);

      return name;
    }

  }
});
// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/LoopList.vue?vue&type=script&lang=js&
 /* harmony default export */ var loopTab_LoopListvue_type_script_lang_js_ = (LoopListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/LoopList.vue





/* normalize component */

var LoopList_component = Object(componentNormalizer["a" /* default */])(
  loopTab_LoopListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LoopList = __webpack_exports__["a"] = (LoopList_component.exports);


runtime_auto_import_default()(LoopList_component, 'components', {QList: QList["a" /* default */]});


/***/ }),

/***/ "ad83":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/commentTab/Comments.vue?vue&type=template&id=641bcfba&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fit"},[_c('div',{staticClass:"bg-primary text-capitalize  shadow-2 tab-title row no-wrap"},[_c('q-toolbar-title',{staticClass:"q-pl-sm text-caption "},[_vm._v("Questions")]),_c('q-space'),_c('q-btn',{attrs:{"dense":"","size":"sm","icon":"mdi-comment-processing","label":"Ask","color":_vm.ask ? 'primary' : 'secondary',"disable":_vm.ask},on:{"click":function($event){_vm.ask = !_vm.ask}}})],1),_c('div',{staticClass:"bg-grey-9 row no-wrap tab-title"},[_c('q-checkbox',{staticClass:"q-mr-lg q-ml-none q-pr-md",attrs:{"label":"Notify"},model:{value:(_vm.notify),callback:function ($$v) {_vm.notify=$$v},expression:"notify"}}),_c('q-space'),_c('q-btn-toggle',{attrs:{"toggle-color":"secondary","options":[
        { label: 'All', value: 'all' },
        { label: 'Mine', value: 'mine' }
      ]},model:{value:(_vm.view),callback:function ($$v) {_vm.view=$$v},expression:"view"}})],1),_c('add-comment',{attrs:{"ask":_vm.ask,"id":_vm.id}}),_c('div',{staticClass:"flex flex-center"},[(_vm.user)?_c('div',{staticClass:"text-center text-weight-light q-pb-lg"},[_c('i',[_vm._v("\n        Commenting as\n        "),_c('span',{staticClass:"text-weight-bolder"},[_vm._v(_vm._s(_vm.user))])])]):_c('div',[_vm._v("\n      NOT LOGGED IN\n    ")]),(!_vm.list && !_vm.ask)?_c('div',[_c('p',[_vm._v("Be the first to ask a question about this course or video.")])]):_vm._e(),_c('q-btn',{directives:[{name:"show",rawName:"v-show",value:(!_vm.ask && !_vm.list),expression:"!ask && !list"}],attrs:{"label":"Ask a Question","color":"secondary","icon":"mdi-comment-processing"},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }_vm.ask = !_vm.ask}}})],1),(_vm.list)?_c('q-scroll-area',{staticStyle:{"height":"75vh"}},[_vm._l((Object.keys(_vm.list).reverse()),function(dateGroup,i){return [_c('q-expansion-item',{key:i,staticClass:"menu-list",attrs:{"default-opened":"","expand-separator":"","switch-toggle-side":"","group":dateGroup,"label":dateGroup}},[_vm._l((_vm.list[dateGroup]),function(comment){return [_c('user-admin-chat',{key:comment.commentId + '_' + i,attrs:{"admin":_vm.isAdmin(comment.user),"message":comment}}),_vm._l((comment.children),function(childComment){return _c('user-admin-chat',{key:childComment.commentId,attrs:{"message":childComment,"admin":_vm.isAdmin(childComment.user)}})})]})],2)]})],2):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/sidebar/commentTab/Comments.vue?vue&type=template&id=641bcfba&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/commentTab/User_AdminChat.vue?vue&type=template&id=13ac2776&
var User_AdminChatvue_type_template_id_13ac2776_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-chat-message',_vm._b({staticClass:"q-my-md",attrs:{"id":'message_' + _vm.message.commentId,"label":_vm.message.label,"data-level":_vm.message.level,"data-parent":_vm.message.parentId,"hidden":_vm.hideChild,"text-sanitize":""},scopedSlots:_vm._u([(!_vm.admin)?{key:"avatar",fn:function(){return [_c('q-avatar',{staticClass:"q-message-avatar q-message-avatar--sent",attrs:{"icon":"mdi-account"}})]},proxy:true}:null,{key:"default",fn:function(){return [_c('p',[_vm._v("\n      "+_vm._s(_vm.message.text[0])+"\n    ")]),_c('p',[_c('q-icon',{attrs:{"name":"mdi-account"}}),_c('span',{staticClass:"q-pl-xs text-grey-4 text-caption"},[_vm._v(_vm._s(_vm.message.user))]),_c('br'),_c('q-icon',{attrs:{"name":"mdi-clock-outline"}}),_c('span',{staticClass:"q-pl-xs text-warg text-caption"},[_vm._v("\n        "+_vm._s(_vm.message.relativeDate)+"\n      ")])],1),_c('div',{staticClass:"row justify-between q-my-sm text-capitalize text-weight-bolder"},[_c('q-btn',_vm._b({attrs:{"label":"Reply","color":!_vm.admin ? 'grey-9' : 'blue-7'},on:{"click":function($event){_vm.reply = !_vm.reply}}},'q-btn',_vm.replyBtnProps,false)),_c('q-btn',_vm._b({directives:[{name:"show",rawName:"v-show",value:(_vm.hasChildren),expression:"hasChildren"}],attrs:{"color":!_vm.showReplies ? 'secondary' : 'primary',"title":_vm.showReplies ? 'Close Replies' : 'View Replies'},on:{"click":function($event){_vm.showReplies = !_vm.showReplies}}},'q-btn',_vm.replyBtnProps,false),[_c('q-icon',{attrs:{"name":"mdi-forum"}}),_c('q-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.showReplies),expression:"showReplies"}],attrs:{"name":"mdi-close"}})],1)],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.reply),expression:"reply"}]},[_c('hr'),_c('add-comment',{attrs:{"ask":_vm.reply,"id":_vm.message.commentId}})],1)]},proxy:true}],null,true)},'q-chat-message',_vm.getUserProps,false))}
var User_AdminChatvue_type_template_id_13ac2776_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/sidebar/commentTab/User_AdminChat.vue?vue&type=template&id=13ac2776&

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/commentTab/AddComment.vue?vue&type=template&id=095d2a5d&scoped=true&
var AddCommentvue_type_template_id_095d2a5d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-card',{directives:[{name:"show",rawName:"v-show",value:(_vm.ask),expression:"ask"}],attrs:{"id":_vm.replyId}},[_c('q-card-section',[_c('q-input',{attrs:{"filled":"","standout":"","bottom-slots":"","counter":"","maxlength":"500","rows":"4","autofocus":"","cols":"70","label":"Comment/Question"},scopedSlots:_vm._u([{key:"hint",fn:function(){return [_vm._v("\n        Comment/Question\n      ")]},proxy:true}]),model:{value:(_vm.comment),callback:function ($$v) {_vm.comment=$$v},expression:"comment"}})],1),_c('q-card-actions',{staticClass:"flex flex-center"},[_c('q-btn',{attrs:{"color":"negative","label":"Cancel"},on:{"click":_vm.toggleAsk}}),_c('q-btn',{attrs:{"color":"secondary","label":"Submit"},on:{"click":_vm.submitComment}})],1)],1)}
var AddCommentvue_type_template_id_095d2a5d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/sidebar/commentTab/AddComment.vue?vue&type=template&id=095d2a5d&scoped=true&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/commentTab/AddComment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AddCommentvue_type_script_lang_js_ = ({
  props: {
    ask: {
      type: Boolean,
      default: () => false
    },
    id: [String, Number]
  },
  data: () => ({
    comment: "",
    replyId: null
  }),

  mounted() {
    this.replyId = "reply_" + this.id;
  },

  methods: {
    toggleAsk() {
      const strEmit = `toggle-ask-${this.replyId}`;
      console.log("emit", strEmit);
      this.$root.$emit(strEmit);
    },

    submitComment() {
      this.$root.$emit("submit-comment", this.comment);
    }

  }
});
// CONCATENATED MODULE: ./src/components/watch/sidebar/commentTab/AddComment.vue?vue&type=script&lang=js&
 /* harmony default export */ var commentTab_AddCommentvue_type_script_lang_js_ = (AddCommentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/watch/sidebar/commentTab/AddComment.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commentTab_AddCommentvue_type_script_lang_js_,
  AddCommentvue_type_template_id_095d2a5d_scoped_true_render,
  AddCommentvue_type_template_id_095d2a5d_scoped_true_staticRenderFns,
  false,
  null,
  "095d2a5d",
  null
  
)

/* harmony default export */ var AddComment = (component.exports);






runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QInput: QInput["a" /* default */],QCardActions: QCardActions["a" /* default */],QBtn: QBtn["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/commentTab/User_AdminChat.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var User_AdminChatvue_type_script_lang_js_ = ({
  name: "UserAdminChatMessage",
  props: {
    message: Object,
    admin: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AddComment: AddComment
  },
  data: () => ({
    reply: false,
    showReplies: true
  }),

  mounted() {
    const evtReply = `toggle-ask-reply_${this.message.commentId}`; // console.log("evt", evtReply);

    this.$root.$on(evtReply, this.toggleReply);
    this.$root.$on("submit-comment", this.submitComment);
  },

  watch: {
    showReplies(val) {
      console.log("show", val, this.message.children.length);
      this.toggleChildren(val);
    }

  },
  computed: {
    hideChild() {
      // debugger;
      const ret = this.message.level !== 0 ? !this.showReplies : false;
      return ret;
    },

    hasChildren() {
      return this.message.children.length > 0;
    },

    childIDs() {
      return this.message.children.map(function (cmt) {
        return cmt.commentId;
      });
    },

    getUserProps() {
      // debugger;
      return this.message.level > 0 && !this.admin ? {
        "bg-color": "grey-9",
        class: "text-italic text-grey-8 text-weight-lighter"
      } : this.admin ? {
        "bg-color": "grey-9",
        "text-color": "grey-6",
        class: "text-weight-bold text-italic",
        avatar: "https://texasbluesalley.com/TXBA-Icon-152.png"
      } : {
        "bg-color": "grey-14",
        "text-color": "white",
        class: "text-weight-light",
        sent: true
      };
    },

    replyBtnProps: () => ({
      dense: true,
      class: "q-px-sm",
      size: "xs",
      rounded: true
    })
  },
  methods: {
    toggleReply() {
      this.reply = !this.reply;
    },

    toggleChildren(val) {
      if (this.childIDs.length > 0) {
        const elName = `div[data-parent="${this.message.commentId}"]`;
        const children = document.querySelectorAll(elName);
        children.forEach(element => {
          element.style.display = val ? "block" : "none";
        });
      }
    },

    submitComment(str) {
      this.reply = !this.reply;
      this.$root.$emit("submit-comment", this.comment);
    }

  }
});
// CONCATENATED MODULE: ./src/components/watch/sidebar/commentTab/User_AdminChat.vue?vue&type=script&lang=js&
 /* harmony default export */ var commentTab_User_AdminChatvue_type_script_lang_js_ = (User_AdminChatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/chat/QChatMessage.js
var QChatMessage = __webpack_require__("8169");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// CONCATENATED MODULE: ./src/components/watch/sidebar/commentTab/User_AdminChat.vue





/* normalize component */

var User_AdminChat_component = Object(componentNormalizer["a" /* default */])(
  commentTab_User_AdminChatvue_type_script_lang_js_,
  User_AdminChatvue_type_template_id_13ac2776_render,
  User_AdminChatvue_type_template_id_13ac2776_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var User_AdminChat = (User_AdminChat_component.exports);





runtime_auto_import_default()(User_AdminChat_component, 'components', {QChatMessage: QChatMessage["a" /* default */],QAvatar: QAvatar["a" /* default */],QIcon: QIcon["a" /* default */],QBtn: QBtn["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/commentTab/Comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Commentsvue_type_script_lang_js_ = ({
  name: "Comments",
  data: () => ({
    id: "000",
    hideDay: true,
    user: null,
    list: null,
    notify: false,
    view: "all",
    ask: false,
    comment: ""
  }),

  created() {
    this.$root.$on(`toggle-ask-reply_${this.id}`, this.toggleAsk);
    this.$root.$on("submit-comment", this.submitComment);
  },

  mounted() {
    this.loadComments();
  },

  components: {
    AddComment: AddComment,
    UserAdminChat: User_AdminChat
  },
  methods: {
    toggleReplies(parent) {
      console.log(parent);
    },

    isAdmin(str) {
      return str.indexOf("Texas Blues Alley") > -1;
    },

    toggleAsk() {
      this.ask = !this.ask;
    },

    async loadComments(view) {
      const {
        notice,
        list
      } = await this.fetchComments(this.$route.params.packageID, view); // console.log("info", info);

      this.list = list; // this.list = this.sortedCommentsByDate(info.list, 'day');

      this.user = notice;
    },

    submitComment(comment) {
      this.comment = comment;
      console.log(this.ask, this.comment);
      this.ask = !this.ask;
    },

    ...Object(vuex_esm["c" /* mapActions */])("watch", ["fetchComments"])
  }
});
// CONCATENATED MODULE: ./src/components/watch/sidebar/commentTab/Comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var commentTab_Commentsvue_type_script_lang_js_ = (Commentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/watch/sidebar/commentTab/Comments.vue?vue&type=style&index=0&id=641bcfba&scoped=true&lang=css&
var Commentsvue_type_style_index_0_id_641bcfba_scoped_true_lang_css_ = __webpack_require__("7b72");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__("6ac5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__("2c91");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js
var QCheckbox = __webpack_require__("8f8e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn-toggle/QBtnToggle.js
var QBtnToggle = __webpack_require__("6a67");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js
var QScrollArea = __webpack_require__("4983");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/expansion-item/QExpansionItem.js + 1 modules
var QExpansionItem = __webpack_require__("3b73");

// CONCATENATED MODULE: ./src/components/watch/sidebar/commentTab/Comments.vue






/* normalize component */

var Comments_component = Object(componentNormalizer["a" /* default */])(
  commentTab_Commentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "641bcfba",
  null
  
)

/* harmony default export */ var Comments = __webpack_exports__["default"] = (Comments_component.exports);








runtime_auto_import_default()(Comments_component, 'components', {QToolbarTitle: QToolbarTitle["a" /* default */],QSpace: QSpace["a" /* default */],QBtn: QBtn["a" /* default */],QCheckbox: QCheckbox["a" /* default */],QBtnToggle: QBtnToggle["a" /* default */],QScrollArea: QScrollArea["a" /* default */],QExpansionItem: QExpansionItem["a" /* default */]});


/***/ }),

/***/ "bdaa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/loopTab/UserLoops.vue?vue&type=template&id=c5e32fda&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"row q-my-md justify-between"},[_c('q-input',{staticClass:"col",staticStyle:{"min-width":"180px","height":"20px"},attrs:{"filled":"","disable":!_vm.saveEnabled},model:{value:(_vm.inputLoop),callback:function ($$v) {_vm.inputLoop=$$v},expression:"inputLoop"}})],1),_c('div',{staticClass:"row "},[_c('q-btn',{staticClass:"col",staticStyle:{"width":"50px"},attrs:{"label":"Add","icon":"mdi-plus","size":"xs","dense":"","color":_vm.addEnabled ? 'secondary' : 'primary',"disable":!_vm.addEnabled}}),_c('q-btn',{staticClass:" col",staticStyle:{"width":"50px"},attrs:{"label":"Save","icon":"mdi-floppy","size":"xs","dense":"","color":_vm.saveEnabled ? 'negative' : 'primary',"disable":!_vm.saveEnabled},on:{"click":_vm.prompt}})],1),_c('loop-list',_vm._b({},'loop-list',_vm.loopData,false))],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/UserLoops.vue?vue&type=template&id=c5e32fda&scoped=true&

// EXTERNAL MODULE: ./src/components/watch/sidebar/loopTab/LoopList.vue + 9 modules
var LoopList = __webpack_require__("a8f0");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/loopTab/UserLoops.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var UserLoopsvue_type_script_lang_js_ = ({
  name: "UserLoops",
  data: () => ({
    altMessage: "You have not created any custom loops for this item.",
    inputLoop: null,
    addEnabled: false,
    saveEnabled: false
  }),
  components: {
    LoopList: LoopList["a" /* default */]
  },

  created() {// this.$root.$on("valid-loop", this.toggleAdd);
  },

  computed: {
    loopData() {
      return {
        altMessage: this.altMessage,
        loopsArray: this.ProPlayer.theSegment.getLoopsArray()
      };
    },

    ...Object(vuex_esm["e" /* mapState */])("watch", ["ProPlayer", "loopStart", "loopStop"])
  },
  methods: {
    toggleAdd({
      status
    }) {
      console.log('toggleAdd', status);
      this.addEnabled = status;
    },

    prompt() {
      this.$q.dialog({
        title: 'Loop Title?',
        message: 'Enter loop name',
        prompt: {
          model: '',
          type: 'text' // optional

        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        console.log('>>>> OK, received', data);
      }).onCancel(() => {
        console.log('>>>> Cancel');
      }).onDismiss(() => {
        console.log('I am triggered on both OK and Cancel');
      });
    }

  }
});
// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/UserLoops.vue?vue&type=script&lang=js&
 /* harmony default export */ var loopTab_UserLoopsvue_type_script_lang_js_ = (UserLoopsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/UserLoops.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  loopTab_UserLoopsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "c5e32fda",
  null
  
)

/* harmony default export */ var UserLoops = __webpack_exports__["default"] = (component.exports);




runtime_auto_import_default()(component, 'components', {QItem: QItem["a" /* default */],QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */]});


/***/ }),

/***/ "c260":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/segmentTab/Segments.vue?vue&type=template&id=20a7d10c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-list',[_vm._l((_vm.sections),function(section,id){return [(section.segments)?_c('q-expansion-item',{key:section.sectionID,staticStyle:{"max-width":"350px"},attrs:{"group":"somegroup","header-style":"background-color:#464646; min-width: 250px;","expand-separator":"","default-opened":id == 0,"switch-toggle-side":""},scopedSlots:_vm._u([{key:"header",fn:function(){return [_vm._v("\n        "+_vm._s(section.sectionTitle)+"\n      ")]},proxy:true}],null,true)},[_c('q-list',{staticClass:"q-py-sm rounded-borders"},_vm._l((section.segments),function(segment){return _c('q-item',{key:segment.segmentID,attrs:{"set":(_vm.segmentIconInfo = _vm.getSegIco(segment)),"id":segment.segmentID,"active":_vm.isActive(segment.segmentID),"active-class":"bg-accent inset-shadow-down","clickable":"","ripple":"","dense":""},on:{"click":function($event){return _vm.loadSegment(segment)}}},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-icon',{attrs:{"color":_vm.segmentIconInfo.color,"name":_vm.segmentIconInfo.icon,"size":"xs"}})],1),_c('q-item-section',[_c('q-item-label',{attrs:{"caption":"","lines":"3"}},[_vm._v(_vm._s(segment.segmentTitle))])],1)],1)}),1)],1):_vm._e()]}),(!_vm.sections)?_c('q-inner-loading',[_c('q-spinner-gears',{attrs:{"size":"50px","color":"primary"}})],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/sidebar/segmentTab/Segments.vue?vue&type=template&id=20a7d10c&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/segmentTab/Segments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Segmentsvue_type_script_lang_js_ = ({
  name: "Segments",
  data: () => ({}),
  computed: {
    packID() {
      return this.$route.params.packageID;
    },

    sections() {
      return this.ProPlayer.thePackage.getSections();
    },

    ...Object(vuex_esm["e" /* mapState */])("watch", ["playSections", "ProPlayer", "activeSegment"])
  },
  methods: {
    isActive(id) {
      return this.activeSegment ? this.activeSegment.segmentID === id : false;
    },

    loadSegment(seg) {
      const id = seg.segmentID;
      const route = `/watch/${this.packID}/${id}`;
      console.log('route', route);
      this.$store.commit("watch/SET_ACTIVE_SEGMENT", seg);
      this.$router.push({
        path: `${route}`
      }).catch(err => {});
    },

    getSegIco(seg) {
      var ico = {};

      switch (this.ProPlayer.getSegmentClass(seg)) {
        case "audio":
          ico = {
            icon: "mdi-volume-high",
            color: "accent"
          };
          break;

        case "video":
          ico = {
            icon: "mdi-video-vintage",
            color: "secondary"
          };
          break;

        case "url":
          ico = {
            icon: "mdi-youtube",
            color: "negative"
          };
          break;

        case "pdf":
          ico = {
            icon: "mdi-file-pdf",
            color: "white"
          };
          break;

        case "tablature":
          ico = {
            icon: "mdi-file-music",
            color: "green-5"
          };
          break;

        case "gpx":
          ico = {
            icon: "mdi-folder-music",
            color: "yellow-3"
          };
          break;

        default:
          ico = {
            icon: "mdi-information"
          };
          break;
      } // console.log("SEGINFO", seg, ico);


      return ico;
    }

  }
});
// CONCATENATED MODULE: ./src/components/watch/sidebar/segmentTab/Segments.vue?vue&type=script&lang=js&
 /* harmony default export */ var segmentTab_Segmentsvue_type_script_lang_js_ = (Segmentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/expansion-item/QExpansionItem.js + 1 modules
var QExpansionItem = __webpack_require__("3b73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__("74f7");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerGears.js
var QSpinnerGears = __webpack_require__("cf57");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/watch/sidebar/segmentTab/Segments.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  segmentTab_Segmentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Segments = __webpack_exports__["default"] = (component.exports);









runtime_auto_import_default()(component, 'components', {QList: QList["a" /* default */],QExpansionItem: QExpansionItem["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QIcon: QIcon["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QInnerLoading: QInnerLoading["a" /* default */],QSpinnerGears: QSpinnerGears["a" /* default */]});


/***/ }),

/***/ "ef58":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/loopTab/MemberLoops.vue?vue&type=template&id=72ac3b23&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.memberLoops.memberLoopCollections.length >= 1)?_c('div',_vm._l((_vm.memberLoops.memberLoopCollections),function(memberLoop){return _c('q-expansion-item',{key:_vm.getMember(memberLoop),attrs:{"label":_vm.getMember(memberLoop),"id":memberLoop,"header-class":"bg-accent text-white","dense-toggle":"","dense":"","popup":""}},[_c('loop-list',{attrs:{"loopArray":memberLoop.memberLoops,"altMessage":_vm.altMessage,"collectionID":_vm.collectionID}})],1)}),1):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/MemberLoops.vue?vue&type=template&id=72ac3b23&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/components/watch/sidebar/loopTab/LoopList.vue + 9 modules
var LoopList = __webpack_require__("a8f0");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/sidebar/loopTab/MemberLoops.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var MemberLoopsvue_type_script_lang_js_ = ({
  name: "MemberLoopList",
  data: () => ({
    altMessage: "There are no community loops for this item.",
    idx: 0,
    collectionID: 2
  }),
  components: {
    LoopList: LoopList["a" /* default */]
  },
  computed: { ...Object(vuex_esm["e" /* mapState */])("watch", ["memberLoops"])
  },
  methods: {
    getMember(objLoop) {
      return (objLoop === null || objLoop === void 0 ? void 0 : objLoop.memberName) || "";
    }

  }
});
// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/MemberLoops.vue?vue&type=script&lang=js&
 /* harmony default export */ var loopTab_MemberLoopsvue_type_script_lang_js_ = (MemberLoopsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/expansion-item/QExpansionItem.js + 1 modules
var QExpansionItem = __webpack_require__("3b73");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/watch/sidebar/loopTab/MemberLoops.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  loopTab_MemberLoopsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "72ac3b23",
  null
  
)

/* harmony default export */ var MemberLoops = __webpack_exports__["default"] = (component.exports);


runtime_auto_import_default()(component, 'components', {QExpansionItem: QExpansionItem["a" /* default */]});


/***/ })

},0,[0,12]]);
//# sourceMappingURL=watch-sidebar.3ad1199b.js.map