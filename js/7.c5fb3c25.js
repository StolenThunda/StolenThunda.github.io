(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "db23":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/tools/TunerMenuSM.vue?vue&type=template&id=42aae8bb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-list',{attrs:{"dense":""}},[_c('q-item',{staticClass:"fit"},[_c('q-item-section',[_c('q-btn-dropdown',{staticClass:"glossy",attrs:{"split":""},on:{"click":_vm.getFreq},scopedSlots:_vm._u([{key:"label",fn:function(){return [_c('q-item',{attrs:{"color":"accent"}},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-icon',{attrs:{"name":"graphic_eq","color":"accent"}})],1),_c('q-item-label',{staticClass:"text-accent"},[_vm._v("Change A"),_c('sub',[_vm._v("4")]),_c('br'),_vm._v("Frequency")])],1)]},proxy:true}])},[_c('q-list',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"separator":"","dense":"","bordered":""}},[_c('q-item-label',{attrs:{"header":""}},[_vm._v("Presets")]),_c('q-separator'),_c('q-item',{attrs:{"clickable":!_vm.is440,"disable":_vm.is440},on:{"click":function($event){return _vm.setFreq(440)}}},[_c('q-item-section',[_c('q-item-label',[_vm._v("440 Hz")])],1)],1),_c('q-item',{attrs:{"clickable":!_vm.is432,"disable":_vm.is432},on:{"click":function($event){return _vm.setFreq(432)}}},[_c('q-item-section',[_c('q-item-label',[_vm._v("432 Hz")])],1)],1)],1)],1)],1)],1),_c('q-item',[_c('q-item-section',[_c('q-toggle',{staticClass:"text-accent q-pl-lg q-ml-xl",attrs:{"label":"Enable Tones","color":"accent","checked-icon":"check","unchecked-icon":"clear"},model:{value:(_vm.toggleTones),callback:function ($$v) {_vm.toggleTones=$$v},expression:"toggleTones"}}),_c('q-tooltip',[_c('span',{staticClass:"text-overline"},[_vm._v("Tones:")]),_c('p',{staticClass:"text-caption"},[_vm._v("\n                 When enabled, select a note to hear it. (must be disabled to\n                 enable to tuner)\n               ")])])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tools/TunerMenuSM.vue?vue&type=template&id=42aae8bb&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/tools/TunerMenuSM.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TunerMenuSMvue_type_script_lang_js_ = ({
  // name: 'TunerMenuS',
  props: {
    app: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    toggleTones: {
      get() {
        var _this$app;

        return !((_this$app = this.app) !== null && _this$app !== void 0 && _this$app.notes.isAutoMode);
      },

      set(value) {
        var _this$app2;

        (_this$app2 = this.app) === null || _this$app2 === void 0 ? void 0 : _this$app2.notes.toggleAutoMode();
        this.enableTones = !this.app.notes.isAutoMode || false;
      }

    },

    getA4() {
      var _this$app3;

      return (_this$app3 = this.app) === null || _this$app3 === void 0 ? void 0 : _this$app3.notes.a4;
    },

    is440() {
      var _this$app4;

      return ((_this$app4 = this.app) === null || _this$app4 === void 0 ? void 0 : _this$app4.notes.a4) === 440;
    },

    is432() {
      var _this$app5;

      return ((_this$app5 = this.app) === null || _this$app5 === void 0 ? void 0 : _this$app5.notes.a4) === 432;
    }

  },
  methods: {
    getQ(obj) {
      return DEBUG_INFO;
    },

    setFreq(freq) {
      this.app.a4 = freq;
      this.app.tuner.middleA = freq;
      this.app.notes.createNotes();
      this.app.update({
        name: "A",
        frequency: this.app.a4,
        octave: 4,
        value: 69,
        cents: 0
      });
      localStorage.setItem("a4", freq);
    },

    getFreq() {
      this.$q.dialog({
        title: "Frequency",
        message: "What frequency would you like to tune to?",
        prompt: {
          model: this.app.a4 || 440,
          type: "number" // optional

        },
        cancel: true,
        standout: true
      }).onOk(data => {
        console.log(">>>> OK, received", data);
        this.setFreq(data);
      }).onCancel(() => {// console.log('>>>> Cancel')
      }).onDismiss(() => {// console.log('I am triggered on both OK and Cancel')
      });
    }

  } // destroyed() {
  //   this.app?.stop();
  // },

});
// CONCATENATED MODULE: ./src/components/tools/TunerMenuSM.vue?vue&type=script&lang=js&
 /* harmony default export */ var tools_TunerMenuSMvue_type_script_lang_js_ = (TunerMenuSMvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/menu/QMenu.js + 2 modules
var QMenu = __webpack_require__("4e73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn-dropdown/QBtnDropdown.js + 1 modules
var QBtnDropdown = __webpack_require__("f20b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js
var QToggle = __webpack_require__("9564");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__("7f67");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/tools/TunerMenuSM.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tools_TunerMenuSMvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TunerMenuSM = __webpack_exports__["default"] = (component.exports);











runtime_auto_import_default()(component, 'components', {QMenu: QMenu["a" /* default */],QList: QList["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QBtnDropdown: QBtnDropdown["a" /* default */],QIcon: QIcon["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QSeparator: QSeparator["a" /* default */],QToggle: QToggle["a" /* default */],QTooltip: QTooltip["a" /* default */]});runtime_auto_import_default()(component, 'directives', {ClosePopup: ClosePopup["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=7.c5fb3c25.js.map