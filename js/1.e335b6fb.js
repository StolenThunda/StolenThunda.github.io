(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "33ca":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "932b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/tools/Fretboard.vue?vue&type=template&id=5d559e4b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-layout',{attrs:{"view":"hHh lpR fFf"}},[_c('q-header',{attrs:{"elevated":""}},[_c('q-toolbar',[_c('q-btn',{attrs:{"flat":"","round":"","dense":"","icon":"menu"},on:{"click":function($event){_vm.leftDrawerOpen = !_vm.leftDrawerOpen}}}),_c('q-select',{staticClass:"q-ml-xl",attrs:{"options":_vm.keyOptions,"transition-show":"flip-up","transition-hide":"flip-down","label-color":"deep-orange","options-selected-class":"accent","display-value":("Selected Key: " + _vm.key),"standout":"bg-accent text-white","behavior":"dialog","rounded":""},on:{"input":_vm.updateFretboard},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('q-icon',{attrs:{"name":"mdi-key-variant"}})]},proxy:true}]),model:{value:(_vm.key),callback:function ($$v) {_vm.key=$$v},expression:"key"}}),_c('q-space'),_c('q-toolbar-title',[_vm._v("Fretboard Tool")]),_c('q-btn',{attrs:{"label":"Close","color":"secondary","icon":"close","size":"xl","flat":"","dense":""},on:{"click":function($event){$event.preventDefault();return _vm.logout_user.apply(null, arguments)}}})],1)],1),_c('q-drawer',{attrs:{"side":"left","mini":!_vm.leftDrawerOpen || _vm.miniState,"width":250,"breakpoint":500,"show-if-above":"","overlay":"","elevated":""},on:{"!click":function($event){return _vm.drawerClick.apply(null, arguments)}},model:{value:(_vm.leftDrawerOpen),callback:function ($$v) {_vm.leftDrawerOpen=$$v},expression:"leftDrawerOpen"}},[_c('q-list',{attrs:{"padding":""}},[_c('q-expansion-item',{attrs:{"group":"filters"},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('q-item-section',{attrs:{"avatar":""}},[_c('q-avatar',{staticClass:"q-ml-none",attrs:{"size":"2.75em","icon":"widgets"}})],1),_c('q-item-section',{staticClass:"text-body1 text-weight-bold"},[_vm._v("\n            Boxes\n          ")])]},proxy:true}])},[_c('div',{staticClass:"bg-black"},[_c('q-option-group',{staticClass:"q-py-lg",attrs:{"options":_vm.boxSelections,"color":"accent","type":"toggle"},on:{"input":_vm.updateFretboard},model:{value:(_vm.accBoxes),callback:function ($$v) {_vm.accBoxes=$$v},expression:"accBoxes"}}),_c('q-separator')],1)]),_c('q-expansion-item',{attrs:{"group":"filters","icon":"rounded_corner"},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('q-item-section',{attrs:{"avatar":""}},[_c('q-avatar',{attrs:{"size":"2.75em","icon":"rounded_corner"}})],1),_c('q-item-section',{staticClass:"text-body1 text-weight-bold"},[_vm._v("\n            Patterns\n          ")])]},proxy:true}])},[_c('div',{staticClass:"bg-black"},[_c('q-option-group',{attrs:{"options":_vm.patternSelections,"color":"accent","type":"toggle"},on:{"input":_vm.updateFretboard},model:{value:(_vm.accPatterns),callback:function ($$v) {_vm.accPatterns=$$v},expression:"accPatterns"}}),_c('q-separator')],1)]),_c('q-expansion-item',{attrs:{"group":"filters"},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('q-item-section',{attrs:{"avatar":""}},[_c('q-avatar',{attrs:{"size":"2.75em","icon":"queue_music"}})],1),_c('q-item-section',{staticClass:"text-body1 text-weight-bold"},[_vm._v("\n            Scales\n          ")])]},proxy:true}])},[_c('div',{staticClass:"bg-black"},[_c('q-option-group',{attrs:{"options":_vm.scaleFilters,"color":"accent","type":"toggle"},on:{"input":_vm.updateFretboard},model:{value:(_vm.accScales),callback:function ($$v) {_vm.accScales=$$v},expression:"accScales"}}),_c('q-separator')],1)]),_c('q-expansion-item',{attrs:{"group":"filters","icon":"music_note","label":"Root Notes"},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('q-item-section',{attrs:{"avatar":""}},[_c('q-avatar',{attrs:{"size":"2.75em","icon":"music_note"}})],1),_c('q-item-section',{staticClass:"text-body1 text-weight-bold"},[_vm._v("\n            Root Notes\n          ")])]},proxy:true}])},[_c('div',{staticClass:"bg-black"},[_c('q-option-group',{attrs:{"options":_vm.rootNoteFilters,"color":"accent","type":"toggle"},on:{"input":_vm.updateFretboard},model:{value:(_vm.accRootNotes),callback:function ($$v) {_vm.accRootNotes=$$v},expression:"accRootNotes"}}),_c('q-separator')],1)]),_c('div',{staticClass:"q-mini-drawer-hide absolute",staticStyle:{"top":"15px","right":"-40px"}},[(!_vm.selectionsAvaliable)?_c('q-btn',{attrs:{"color":"accent","push":"","icon":"chevron_left","fab":"","glossy":"","round":""},on:{"click":function($event){_vm.miniState = true}}}):_c('q-fab',{attrs:{"disable":!_vm.selectionsAvaliable,"color":"accent","push":"","title":"Options","icon":"tune","direction":"right","glossy":""}},[_c('q-fab-action',{attrs:{"color":"orange-5","icon":"drag_handle","label":"Mini Mode"},on:{"click":function($event){_vm.miniState = true}}}),_c('q-fab-action',{directives:[{name:"morph",rawName:"v-morph:btn:mygroup:300.resize",value:(_vm.morphGroupModel),expression:"morphGroupModel",arg:"btn:mygroup:300",modifiers:{"resize":true}}],attrs:{"color":"orange-2 text-orange-10","icon":"rule","label":"Selections"},on:{"click":_vm.toggleResultPanel}})],1)],1)],1),_c('q-card-actions',{directives:[{name:"show",rawName:"v-show",value:(_vm.selectionsAvaliable),expression:"selectionsAvaliable"}],staticClass:"q-mini-drawer-hide content-center",attrs:{"vertical":""}},[_c('q-btn',{staticClass:"glossy",attrs:{"icon":"restart_alt","color":"accent","label":"Reset Filters","push":""},on:{"click":_vm.resetFilters}})],1)],1),_c('q-drawer',{attrs:{"side":"right","overlay":""},model:{value:(_vm.rightDrawerOpen),callback:function ($$v) {_vm.rightDrawerOpen=$$v},expression:"rightDrawerOpen"}},[_c('div',{staticClass:"q-py-md"},[_c('q-card',{directives:[{name:"morph",rawName:"v-morph:selections:mygroup:800.resize",value:(_vm.morphGroupModel),expression:"morphGroupModel",arg:"selections:mygroup:800",modifiers:{"resize":true}}],staticClass:"q-mx-sm bottom-left column wrap justify-evenly items-center bg-black text-white content-around",staticStyle:{"width":"275px","border-top-right-radius":"2.75em","border-bottom-left-radius":"2.75em"}},[_c('q-card-section',[_c('q-list',{attrs:{"dense":""}},[_c('q-item',{staticClass:"text-accent",attrs:{"dense":""}},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-icon',{attrs:{"name":"done_all"}})],1),_c('q-item-label',{staticClass:"text-h5"},[_vm._v("Selections")])],1),_c('q-item',{staticClass:"q-py-md column",attrs:{"dense":""}},[(_vm.selectedOptions.length > 0)?_c('div',{staticClass:"col-12"},_vm._l((_vm.selectedOptions),function(sel,i){return _c('q-chip',{key:i,staticClass:"glossy ",attrs:{"square":"","color":"primary","removable":"","dense":""},on:{"remove":function($event){return _vm.removeFilter(sel)}}},[_c('q-avatar',{attrs:{"icon":sel.icon,"color":sel.color || 'deep-orange',"text-color":"white"}}),_vm._v("\n                  "+_vm._s(sel.label)+"\n                ")],1)}),1):_c('div',{staticClass:"col-12 text-right"},[_vm._v("\n                NO FILTERS SELECTED\n              ")])])],1)],1),_c('q-card-actions',{attrs:{"vertical":"","align":"center"}},[_c('q-btn',{attrs:{"flat":"","label":"Close"},on:{"click":_vm.toggleResultPanel}})],1)],1)],1)]),_c('q-page-container',[_c('div',{staticClass:"bg-black",attrs:{"id":"fretboard-container"}},[_c('div',{attrs:{"id":"fretboard-zoom-wrapper"}},[_c('div',{attrs:{"id":"fretboard"}},[_c('svg',{attrs:{"width":"100%","viewBox":"-247 -596 2836 2117","id":"fretboard-wrapper","shape-rendering":"geometricPrecision"}})])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tools/Fretboard.vue?vue&type=template&id=5d559e4b&scoped=true&

// EXTERNAL MODULE: ./node_modules/@quasar/babel-preset-app/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("7619");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/@svgdotjs/svg.filter.js/src/svg.filter.js
var svg_filter = __webpack_require__("0f82");

// EXTERNAL MODULE: ./node_modules/@svgdotjs/svg.js/dist/svg.esm.js
var svg_esm = __webpack_require__("4378");

// EXTERNAL MODULE: ./node_modules/@svgdotjs/svg.panzoom.js/dist/svg.panzoom.esm.js
var svg_panzoom_esm = __webpack_require__("eade");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/tools/Fretboard.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





function hideDisabled() {
  let disabledSelections = document.querySelectorAll("[role=checkbox].disabled");
  disabledSelections.forEach((node, i) => {
    console.log("node", node.classList);
    node.classList.add("hidden");
  });
}

/* harmony default export */ var Fretboardvue_type_script_lang_js_ = ({
  name: "FretboardTool",
  props: {
    fetchDrawer: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    miniState: false,
    morphGroupModel: "btn",
    nextMorphStep: {
      btn: "selections",
      selections: "btn"
    },
    leftDrawerOpen: true,
    rightDrawerOpen: false,
    key: "E",
    keyOptions: ["E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb"],
    Drawing: null,
    Fretboard: null,
    Headstock: null,
    Body: null,
    Strings: [],
    Guides: [],
    Dots: [],
    SideDots: [],
    Frets: [],
    notes: [],
    fretMarkers: [],
    xoffsets: [],
    yoffsets: [],
    accBoxes: [],
    accPatterns: [],
    accScales: [],
    accRootNotes: [],
    allShapes: null,
    allNotes: null,
    allMarkers: null,
    allStrings: null,
    allDots: null,
    allFrets: null,
    xScaleSlider: null,
    yScaleSlider: null,
    zScaleSlider: null,
    xRotationSlider: null,
    yRotationSlider: null,
    zRotationSlider: null,
    xTranslateSlider: null,
    yTranslateSlider: null,
    zTranslateSlider: null,
    xSkewSlider: null,
    ySkewSlider: null,
    perspectiveSlider: null,
    fretGradient: null,
    boxShadow: null,
    PanZoom: null,
    CORNEROFFSET: 10,
    ESTRING1: 0,
    BSTRING: 1,
    GSTRING: 2,
    DSTRING: 3,
    ASTRING: 4,
    ESTRING2: 5,
    FRETWIDTH: 10,
    PAD: 25,
    NOTERADIUS: 15,
    NOTECOLOR: "#fff",
    NOTESTROKE: "none",
    BOXPADDING: 20,
    MAJORNOTE: "#0ff",
    MINORNOTE: "#f55",
    CORNERRADIUS: "A20,20 0 0 1",
    SHAPEFILL: {
      color: "#777777",
      opacity: 0.3
    },
    SHAPESTROKE: {
      color: "#aaaaaa",
      opacity: 2
    },
    CHORDI: "#0099ff",
    CHORDIV: "#FFEF00",
    CHORDV: "#FF0000",
    MAJOR: "#3bc33b",
    MINOR: "#a01404",
    CHORDOPACITY: 0.4,
    STRINGFILL: "#555",
    FRETBOARDFILL: "https://txba-media.s3.us-east-1.amazonaws.com/misc/RosewoodTexture.jpg",
    //"#222";
    HEADSTOCKFILL: "https://txba-media.s3.us-east-1.amazonaws.com/misc/LayeredMaple.jpg",
    BODYFILL: "https://txba-media.s3.us-east-1.amazonaws.com/misc/DarkWood.jpg",
    keyLimits: [[4, 11, 3, 8], //E
    [4, 11, 3, 7], //F
    [4, 11, 2, 7], //Gb
    [3, 10, 2, 7], //G
    [3, 10, 2, 6], //Ab
    [2, 9, 1, 6], //A
    [2, 9, 1, 5], //Bb
    [1, 8, 1, 5], //B
    [1, 8, 1, 5], //C
    [0, 11, 0, 4], //Db
    [0, 10, 0, 4], //D
    [0, 10, 0, 4] //Eb
    ],
    boxFilters: [{
      shapeType: "box2",
      position: 2,
      rootOffset: -9,
      id: "box2Lower",
      label: "Box 2 (lower)"
    }, {
      shapeType: "box2",
      position: 3,
      rootOffset: -7,
      id: "box3Lower",
      label: "Box 3 (lower)"
    }, {
      shapeType: "box4",
      position: 4,
      rootOffset: -5,
      id: "box4Lower",
      label: "Box 4 (lower)"
    }, {
      shapeType: "box1",
      position: 5,
      rootOffset: -3,
      id: "box5Lower",
      label: "Box 5 (lower)"
    }, {
      shapeType: "box1",
      position: 1,
      rootOffset: 0,
      id: "box1Root",
      label: "Box 1"
    }, {
      shapeType: "box2",
      position: 2,
      rootOffset: 3,
      id: "box2Root",
      label: "Box 2"
    }, {
      shapeType: "box2",
      position: 3,
      rootOffset: 5,
      id: "box3Root",
      label: "Box 3"
    }, {
      shapeType: "box4",
      position: 4,
      rootOffset: 7,
      id: "box4Root",
      label: "Box 4"
    }, {
      id: "box5Root",
      rootOffset: 9,
      position: 5,
      shapeType: "box1",
      label: "Box 5"
    }, {
      shapeType: "box1",
      position: 1,
      rootOffset: 12,
      id: "box1Upper",
      label: "Box 1 (upper)"
    }, {
      shapeType: "box2",
      position: 2,
      rootOffset: 15,
      id: "box2Upper",
      label: "Box 2 (upper)"
    }, {
      shapeType: "box2",
      position: 3,
      rootOffset: 17,
      id: "box3Upper",
      label: "Box 3 (upper)"
    }, {
      shapeType: "box1",
      position: 4,
      rootOffset: 19,
      id: "box4Upper",
      label: "Box 4 (upper)"
    }],
    scaleFilters: [{
      value: "majorScale",
      label: "Major Scale",
      disable: true
    }, {
      value: "minorScale",
      label: "Minor Scale",
      disable: true
    }, {
      value: "majorPentatonic",
      label: "Major Pentatonic"
    }, {
      value: "minorPentatonic",
      label: "Minor Pentatonic"
    }],
    patternFilters: [{
      shapeType: "backdoor1",
      position: 2,
      rootOffset: -9,
      id: "backdoor2Lower",
      label: "Backdoor Pattern 2 (lower)"
    }, {
      shapeType: "backdoor2",
      position: 3,
      rootOffset: -5,
      id: "backdoor3Lower",
      label: "Backdoor Pattern 3 (lower)"
    }, {
      shapeType: "backdoor2",
      position: 4,
      rootOffset: -2,
      id: "backdoor4Lower",
      label: "Backdoor Pattern 1"
    }, {
      shapeType: "backdoor1",
      position: 1,
      rootOffset: 0,
      id: "backdoor1Root",
      label: "Backdoor Pattern 1"
    }, {
      shapeType: "backdoor2",
      position: 2,
      rootOffset: 3,
      id: "backdoor2Root",
      label: "Backdoor Pattern 2"
    }, {
      shapeType: "backdoor1",
      position: 3,
      rootOffset: 7,
      id: "backdoor3Root",
      label: "Backdoor Pattern 3"
    }, {
      shapeType: "backdoor2",
      position: 4,
      rootOffset: 20,
      id: "backdoor4Root",
      label: "Backdoor Pattern 4"
    }, {
      shapeType: "backdoor1",
      position: 1,
      rootOffset: 12,
      id: "backdoor1Upper",
      label: "Backdoor Pattern 1 (upper)"
    }, {
      shapeType: "backdoor1",
      position: 2,
      rootOffset: 15,
      id: "backdoor2Upper",
      label: "Backdoor Pattern 2 (upper)"
    }, {
      shapeType: "backdoor2",
      position: 3,
      rootOffset: 19,
      id: "backdoor3Upper",
      label: "Backdoor Pattern 3 (upper)"
    }],
    rootNoteFilters: [{
      value: "root1Notes",
      label: "I Chord Root Notes"
    }, {
      value: "root4Notes",
      label: "IV Chord Root Notes"
    }, {
      value: "root5Notes",
      label: "V Chord Root Notes"
    }]
  }),

  mounted() {
    var FastClick = __webpack_require__("fe3c");

    FastClick.attach(document.body, {});
    window.canvas = Object(svg_esm["g" /* SVG */])().addTo("body");
    this.Drawing = Object(svg_esm["g" /* SVG */])("#fretboard-wrapper").panZoom({
      zoomMin: 0.3,
      zoomMax: 1.5
    });
    this.Body = this.Drawing.path("M2832.6,721.7 C2744.0,725.3 2674.1,735.3 2623.1,751.7 C2546.6,776.2 2299.6,869.2 2178.5,877.7 C2060.6,886.0 1892.3,886.0 1821.0,786.2 C1783.5,733.7 1782.0,696.6 1806.0,670.1 C1830.0,643.6 1953.5,647.6 2025.5,624.6 C2097.5,601.6 2173.0,515.6 2186.5,451.1 C2200.0,386.6 2186.3,340.7 2145.0,309.5 C2078.0,258.8 2070.2,157.7 2121.5,15.9 C2203.8,12.3 2278.7,10.4 2346.1,10.4 C2379.6,10.4 2428.1,-109.1 2420.6,-167.6 C2413.1,-226.1 2386.6,-301.2 2306.1,-341.7 C2225.5,-382.2 2114.5,-352.2 2097.5,-437.2 C2083.9,-505.3 2161.0,-544.7 2248.1,-568.7 C2335.1,-592.7 2439.6,-571.2 2540.1,-539.2 C2640.6,-507.2 2751.5,-445.2 2828.6,-445.2 C2832.4,-445.2 2833.7,-56.2 2832.6,721.7 Z");
    this.Body.fill(this.BODYFILL);
    this.Body.stroke({
      width: 3,
      color: "#555"
    });
    this.Headstock = this.Drawing.path("M1.0,50.5 C-65.5,45.2 -111.3,36.9 -136.2, 25.6 C-173.6, 8.6 -209.1, -25.5 -223.0, -52.0 C-232.4, -69.7 -240.3, -81.3 -247.0,-87.0 L -246.0,326.2 L -147.2, 356.2 C-134.6, 361.3 -121.4, 361.3 -107.8, 356.2 C-87.3, 348.7 -68.4, 312.4 -44.4, 291.7 C-28.4, 277.9 -13.3, 270.0 1.0, 268.0 L 1.0, 50.5 Z");
    this.Headstock.fill(this.HEADSTOCKFILL);
    this.Headstock.stroke({
      width: 3,
      color: "#555"
    });
    this.Fretboard = this.Drawing.path("M3,51.955	L2455.262,3	C2468.431,4.1024	2478.30815,7.96089385	2484.89264,14.575419	C2494.76938,24.4972067	2503,107.178771	2503,151	C2503,194.821229	2494.76938,275.849162	2484.89264,287.424581	C2478.30815,295.141527	2468.43141,299	2455.26243,299	L3.64612326,266.581006	L3,51.9553073	Z");
    this.Fretboard.fill(this.FRETBOARDFILL);
    this.Fretboard.stroke({
      width: 3,
      color: "#444"
    });
    this.Fretboard.front();
    this.Fretboard.filterWith(function (add) {
      var blur = add.offset(10, 10).gaussianBlur(15);
      blur.in(add.sourceAlpha);
      add.blend(add.source, blur);
      this.size("200%", "200%").move("-50%", "-50%");
    });
    this.fretGradient = this.Drawing.gradient("linear", function (add) {
      add.stop(0, "#333");
      add.stop(0.5, "#444");
      add.stop(1, "#222");
    });
    /*
    boxShadow = new SVG.Filter();
    boxShadow.offset(5, 5).gaussianBlur(3);
    boxShadow.blend(boxShadow.source, blur);
    boxShadow.size('200%','200%').move('-50%', '-50%');
    */

    this.createDots();
    this.createFrets();
    this.createFretMarkers();
    this.createStrings();
    this.createNotes();
    this.computeNoteBoxes();
    this.computeOffsets(); //setupSliders();

    this.allDots.front();
    this.allMarkers.front();
    this.allStrings.front();
    this.allNotes.front();
    this.allShapes = this.Drawing.group();
    this.refreshUI();
  },

  watch: {
    fetchDrawer(v) {
      if (v) this.toggleLeftDrawer();
    },

    boxSelections: {
      handler: hideDisabled,
      immediate: true
    },
    patternSelections: {
      handler(val) {
        let disabledSelections = document.querySelectorAll("[role=checkbox].disabled");
        disabledSelections.forEach((node, i) => {
          // console.log("node", node.classList);
          node.classList.add("hidden");
        });
      },

      immediate: true
    }
  },
  computed: {
    selectedOptions() {
      return [...this.boxesSelected, ...this.patternsSelected, ...this.scalesSelected, ...this.rootsSelected];
    },

    selectionsAvaliable() {
      return this.accBoxes.length + this.accPatterns.length + this.accScales.length + this.accRootNotes.length > 0;
    },

    scalesSelected() {
      let selection = this.scaleFilters.filter(({
        label,
        value
      }) => {
        if (this.accScales.includes(value)) return label;
      });
      return selection.map(({
        label,
        value
      }) => {
        return {
          label,
          value,
          icon: "queue_music"
        };
      });
    },

    rootsSelected() {
      let selection = this.rootNoteFilters.filter(({
        label,
        value
      }) => {
        if (this.accRootNotes.includes(value)) return label;
      });
      return selection.map(({
        label,
        value
      }) => {
        return {
          label,
          value,
          icon: "music_note"
        };
      });
    },

    boxesSelected() {
      let selection = this.boxFilters.filter(({
        label,
        id
      }) => {
        if (this.accBoxes.includes(id)) return label;
      });
      return selection.map(({
        label,
        id
      }) => {
        return {
          label,
          value: id,
          icon: "widgets"
        };
      });
    },

    boxSelections() {
      let theLimits = this.keyLimits[this.keyOptions.indexOf(this.key)];
      let selection = this.boxFilters.map(({
        label,
        id
      }) => ({
        value: id,
        label: label
      }));
      selection.forEach((sel, i) => {
        sel.disable = i < theLimits[0] || i > theLimits[1];
      });
      return selection;
    },

    patternsSelected() {
      let selection = this.patternSelections.filter(({
        label,
        value
      }) => {
        if (this.accPatterns.includes(value)) return label;
      });
      return selection.map(({
        label,
        value
      }) => {
        return {
          label,
          value,
          icon: "rounded_corner"
        };
      });
    },

    patternSelections() {
      let theLimits = this.keyLimits[this.keyOptions.indexOf(this.key)];
      let selection = this.patternFilters.map(({
        label,
        id
      }) => ({
        value: id,
        label: label
      }));
      selection.forEach((sel, i) => {
        sel.disable = i < theLimits[0] || i > theLimits[1];
      });
      return selection;
    },

    selectedBoxData() {
      let theShapes = [];
      let box;
      this.accBoxes.forEach(box_id => {
        box = this.boxFilters.filter(item => item.id == box_id);
        theShapes.push(box);
      });
      return theShapes;
    }

  },
  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["c" /* mapActions */])("auth", ["logout_user"])), {}, {
    log(desert) {
      console.log(`${JSON.stringify(desert)} has been removed`);
    },

    drawerClick(e) {
      // if in "mini" state and user
      // click on drawer, we switch it to "normal" mode
      if (this.miniState) {
        this.miniState = false; // notice we have registered an event with capture flag;
        // we need to stop further propagation as this click is
        // intended for switching drawer to "normal" mode only

        e.stopPropagation();
      }
    },

    nextMorph() {
      this.morphGroupModel = this.nextMorphStep[this.morphGroupModel];
    },

    removeFilter(chip) {
      let val = chip.value;

      if (val.includes("box")) {
        console.log(`Removing type: box`);
        this.accBoxes = [...this.accBoxes.filter(e => e != val)];
      } else if (val.includes("backdoor")) {
        console.log(`Removing type: backdoor`);
        this.accPatterns = [...this.accPatterns.filter(e => e != val)];
      } else if (["minor", "major"].some(el => val.includes(el))) {
        console.log(`Removing type: scales `);
        this.accScales = [...this.accScales.filter(e => e != val)];
      } else {
        console.log(`Removing type: roots `);
        this.accRootNotes = [...this.accRootNotes.filter(e => e != val)];
      }
    },

    toggleResultPanel(val) {
      this.nextMorph();
      this.rightDrawerOpen = val ? val : !this.rightDrawerOpen;
    },

    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },

    getAvailableSelections(collection) {
      let theLimits = this.keyLimits[this.keyOptions.indexOf(this.key)];
      let availableSelections = collection.map(({
        label,
        id
      }) => ({
        value: id,
        label: label
      }));
      availableSelections.forEach((sel, i) => {
        sel.disabled = i < theLimits[0] || i > theLimits[1];
      });
      return availableSelections;
    },

    updateFretboard() {
      let theShapes = [];
      this.resetFretboard();
      this.rootFret = parseInt(this.keyOptions.indexOf(this.key));
      this.accBoxes.forEach(box_id => {
        let box = this.boxFilters.filter(item => item.id == box_id);
        theShapes = [...theShapes, ...box]; // console.log(`boxes: ${JSON.stringify(theShapes)}`);
      });
      this.accPatterns.forEach(box_id => {
        let box = this.patternFilters.filter(item => item.id == box_id);
        theShapes = [...theShapes, ...box]; // console.log(`boxes: ${JSON.stringify(theShapes)}`);
      });
      this.drawFretMarker(this.rootFret - 7, this.CHORDIV);
      this.drawFretMarker(this.rootFret - 5, this.CHORDV);
      this.drawFretMarker(this.rootFret, this.CHORDI);
      this.drawFretMarker(this.rootFret + 5, this.CHORDIV);
      this.drawFretMarker(this.rootFret + 7, this.CHORDV);
      this.drawFretMarker(this.rootFret + 12, this.CHORDI);
      this.drawFretMarker(this.rootFret + 17, this.CHORDIV);
      this.drawFretMarker(this.rootFret + 19, this.CHORDV);

      for (let i = 0; i < theShapes.length; i++) {
        let theShape = theShapes[i];

        switch (theShape.shapeType) {
          case "box1":
            this.drawBox1(this.rootFret + theShape.rootOffset, theShape.position);
            break;

          case "box2":
            this.drawBox2(this.rootFret + theShape.rootOffset, theShape.position);
            break;

          case "box4":
            this.drawBox4(this.rootFret + theShape.rootOffset);
            break;

          case "backdoor1":
            this.drawBackdoorPattern1(this.rootFret + theShape.rootOffset, theShape.position);
            break;

          case "backdoor2":
            this.drawBackdoorPattern2(this.rootFret + theShape.rootOffset, theShape.position);
            break;
        }
      }

      if (this.accScales.includes("majorScale")) this.drawMajorScale(this.rootFret);
      if (this.accScales.includes("minorScale")) this.drawMinorScale(this.rootFret);
      if (this.accScales.includes("majorPentatonic")) this.drawMajorPentatonic(this.rootFret);
      if (this.accScales.includes("minorPentatonic")) this.drawMinorPentatonic(this.rootFret);
      if (this.accRootNotes.includes("root1Notes")) this.drawRootNotes(this.rootFret, 1, false);
      if (this.accRootNotes.includes("root4Notes")) this.drawRootNotes(this.rootFret, 4, false);
      if (this.accRootNotes.includes("root5Notes")) this.drawRootNotes(this.rootFret, 5, false); // if ($("input#majorScale").prop("checked")) {
      //   drawMajorScale(rootFret);
      // }
      // if ($("input#majorPentatonic").prop("checked")) {
      //   drawMajorPentatonic(rootFret);
      // }
      // if ($("input#minorScale").prop("checked")) {
      //   drawMinorScale(rootFret);
      // }
      // if ($("input#minorPentatonic").prop("checked")) {
      //   drawMinorPentatonic(rootFret);
      // }
      // if ($("input#root1Notes").prop("checked")) {
      //   drawRootNotes(rootFret, 1, false);
      // }
      // if ($("input#root4Notes").prop("checked")) {
      //   drawRootNotes(rootFret, 4, false);
      // }
      // if ($("input#root5Notes").prop("checked")) {
      //   drawRootNotes(rootFret, 5, false);
      // }

      this.allShapes.filterWith(function (add) {
        var blur = add.offset(5, 5).gaussianBlur(5);
        blur.in(add.sourceAlpha);
        add.blend(add.source, blur);
        this.size("200%", "200%").move("-50%", "-50%");
      });
      this.allNotes.front();
      this.allNotes.filterWith(function (add) {
        var blur = add.offset(2, 2).gaussianBlur(2);
        blur.in(add.sourceAlpha);
        add.blend(add.source, blur);
        this.size("200%", "200%").move("-50%", "-50%");
      });
    },

    createDots() {
      this.allDots = this.Drawing.group();
      this.Dots.push({
        x: 502.5,
        y: 160.5
      });
      this.Dots.push({
        x: 820.5,
        y: 158.5
      });
      this.Dots.push({
        x: 1103.5,
        y: 158.5
      });
      this.Dots.push({
        x: 1359.5,
        y: 157.5
      });
      this.Dots.push({
        x: 1689.5,
        y: 97.5
      });
      this.Dots.push({
        x: 1969.5,
        y: 155.5
      });
      this.Dots.push({
        x: 2131.5,
        y: 155.5
      });
      this.Dots.push({
        x: 2274.5,
        y: 153.5
      });
      this.Dots.push({
        x: 2402.5,
        y: 153.5
      });
      this.Dots.push({
        x: 1689.5,
        y: 214.5
      });
      this.SideDots.push({
        x: 502.5,
        y: 300
      });
      this.SideDots.push({
        x: 820.5,
        y: 303
      });
      this.SideDots.push({
        x: 1103.5,
        y: 305
      });
      this.SideDots.push({
        x: 1359.5,
        y: 310
      });
      this.SideDots.push({
        x: 1670,
        y: 314
      });
      this.SideDots.push({
        x: 1969.5,
        y: 320
      });
      this.SideDots.push({
        x: 2131.5,
        y: 322
      });
      this.SideDots.push({
        x: 2274.5,
        y: 325
      });
      this.SideDots.push({
        x: 2402.5,
        y: 328
      });
      this.SideDots.push({
        x: 1700,
        y: 315
      });

      for (let i = 0; i < this.Dots.length; i++) {
        this.allDots.circle(30).move(this.Dots[i].x - 15, this.Dots[i].y - 15).fill("#333");
      }

      for (let i = 0; i < this.SideDots.length; i++) {
        this.allDots.circle(10).move(this.SideDots[i].x - 5, this.SideDots[i].y - 5).fill("#FFF");
      }
    },

    createStrings() {
      this.allStrings = this.Drawing.group();
      this.Strings.push({
        pt1: {
          x: 0,
          y: 67.5
        },
        pt2: {
          x: 2489,
          y: 26
        }
      }, {
        pt1: {
          x: 0,
          y: 104
        },
        pt2: {
          x: 2498,
          y: 78
        }
      }, {
        pt1: {
          x: 0,
          y: 140
        },
        pt2: {
          x: 2503,
          y: 127
        }
      }, {
        pt1: {
          x: 0,
          y: 177.5
        },
        pt2: {
          x: 2502,
          y: 177.5
        }
      }, {
        pt1: {
          x: 0,
          y: 216
        },
        pt2: {
          x: 2498,
          y: 230
        }
      }, {
        pt1: {
          x: 0,
          y: 251.5
        },
        pt2: {
          x: 2489,
          y: 279
        }
      }); //Guide above E String

      this.Guides.push({
        pt1: {
          x: this.Strings[0].pt1.x,
          y: this.Strings[0].pt1.y - (this.Strings[1].pt1.y - this.Strings[0].pt1.y) / 2.0
        },
        pt2: {
          x: this.Strings[0].pt2.x,
          y: this.Strings[0].pt2.y - (this.Strings[1].pt2.y - this.Strings[0].pt2.y) / 2.0
        }
      }); //Guide between E & B

      this.Guides.push({
        pt1: {
          x: this.Strings[1].pt1.x,
          y: this.Strings[0].pt1.y + (this.Strings[1].pt1.y - this.Strings[0].pt1.y) / 2.0
        },
        pt2: {
          x: this.Strings[1].pt2.x,
          y: this.Strings[0].pt2.y + (this.Strings[1].pt2.y - this.Strings[0].pt2.y) / 2.0
        }
      }); //Guide between G & B

      this.Guides.push({
        pt1: {
          x: this.Strings[2].pt1.x,
          y: this.Strings[1].pt1.y + (this.Strings[2].pt1.y - this.Strings[1].pt1.y) / 2.0
        },
        pt2: {
          x: this.Strings[2].pt2.x,
          y: this.Strings[1].pt2.y + (this.Strings[2].pt2.y - this.Strings[1].pt2.y) / 2.0
        }
      }); //Guide between D & G

      this.Guides.push({
        pt1: {
          x: this.Strings[3].pt1.x,
          y: this.Strings[2].pt1.y + (this.Strings[3].pt1.y - this.Strings[2].pt1.y) / 2.0
        },
        pt2: {
          x: this.Strings[3].pt2.x,
          y: this.Strings[2].pt2.y + (this.Strings[3].pt2.y - this.Strings[2].pt2.y) / 2.0
        }
      }); //Guide between A & D

      this.Guides.push({
        pt1: {
          x: this.Strings[4].pt1.x,
          y: this.Strings[3].pt1.y + (this.Strings[4].pt1.y - this.Strings[3].pt1.y) / 2.0
        },
        pt2: {
          x: this.Strings[4].pt2.x,
          y: this.Strings[3].pt2.y + (this.Strings[4].pt2.y - this.Strings[3].pt2.y) / 2.0
        }
      }); //Guide between E & A

      this.Guides.push({
        pt1: {
          x: this.Strings[5].pt1.x,
          y: this.Strings[4].pt1.y + (this.Strings[5].pt1.y - this.Strings[4].pt1.y) / 2.0
        },
        pt2: {
          x: this.Strings[5].pt2.x,
          y: this.Strings[4].pt2.y + (this.Strings[5].pt2.y - this.Strings[4].pt2.y) / 2.0
        }
      }); //Guide past E string

      this.Guides.push({
        pt1: {
          x: this.Strings[5].pt1.x,
          y: this.Strings[5].pt1.y + (this.Strings[5].pt1.y - this.Strings[4].pt1.y) / 2.0
        },
        pt2: {
          x: this.Strings[5].pt2.x,
          y: this.Strings[5].pt2.y + (this.Strings[5].pt2.y - this.Strings[4].pt2.y) / 2.0
        }
      });
      var stringWidths = [3, 4, 5, 6, 7, 8];

      for (let i = 0; i < this.Strings.length; i++) {
        var stringString = this.Strings[i].pt1.x + "," + (this.Strings[i].pt1.y - stringWidths[i] / 2.0) + " ";
        stringString += this.Strings[i].pt2.x + "," + (this.Strings[i].pt2.y - stringWidths[i] / 2.0) + " ";
        stringString += this.Strings[i].pt2.x + "," + (this.Strings[i].pt2.y + stringWidths[i] / 2.0) + " ";
        stringString += this.Strings[i].pt1.x + "," + (this.Strings[i].pt1.y + stringWidths[i] / 2.0) + " ";
        var theString = this.allStrings.polygon(stringString);
        theString.fill(this.STRINGFILL);
        this.Strings[i].svgElement = theString;
      }

      this.allStrings.filterWith(function (add) {
        var blur = add.offset(5, 5).gaussianBlur(5);
        blur.in(add.sourceAlpha);
        add.blend(add.source, blur);
        this.size("200%", "200%").move("-50%", "-50%");
      });
      /*
      for(i = 0; i < this.Guides.length; i++)
      {
      var theGuide =  this.allStrings.line(this.Guides[i].pt1.x, this.Guides[i].pt1.y,
      							 this.Guides[i].pt2.x, this.Guides[i].pt2.y );
      theGuide.stroke({width: 2, color: '#555'});
      this.Guides[i].svgElement	 = theGuide;
      }
      */
    },

    createNotes() {
      this.allNotes = this.Drawing.group();
      var fretNotes = [];
      fretNotes.push({
        x: 18.5,
        y: 66.5
      });
      fretNotes.push({
        x: 18.5,
        y: 104.5
      });
      fretNotes.push({
        x: 18.5,
        y: 140.5
      });
      fretNotes.push({
        x: 18.5,
        y: 178.5
      });
      fretNotes.push({
        x: 18.5,
        y: 214.5
      });
      fretNotes.push({
        x: 18.5,
        y: 252.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 139.5,
        y: 63.5
      });
      fretNotes.push({
        x: 139.5,
        y: 102.5
      });
      fretNotes.push({
        x: 139.5,
        y: 139.5
      });
      fretNotes.push({
        x: 139.5,
        y: 178.5
      });
      fretNotes.push({
        x: 139.5,
        y: 215.5
      });
      fretNotes.push({
        x: 139.5,
        y: 253.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 327.5,
        y: 60.5
      });
      fretNotes.push({
        x: 327.5,
        y: 100.5
      });
      fretNotes.push({
        x: 327.5,
        y: 138.5
      });
      fretNotes.push({
        x: 327.5,
        y: 177.5
      });
      fretNotes.push({
        x: 327.5,
        y: 216.5
      });
      fretNotes.push({
        x: 327.5,
        y: 255.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 499.5,
        y: 58.5
      });
      fretNotes.push({
        x: 499.5,
        y: 98.5
      });
      fretNotes.push({
        x: 499.5,
        y: 137.5
      });
      fretNotes.push({
        x: 499.5,
        y: 177.5
      });
      fretNotes.push({
        x: 499.5,
        y: 218.5
      });
      fretNotes.push({
        x: 499.5,
        y: 257.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 660.5,
        y: 55.5
      });
      fretNotes.push({
        x: 660.5,
        y: 96.5
      });
      fretNotes.push({
        x: 660.5,
        y: 136.5
      });
      fretNotes.push({
        x: 660.5,
        y: 177.5
      });
      fretNotes.push({
        x: 660.5,
        y: 218.5
      });
      fretNotes.push({
        x: 660.5,
        y: 258.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 815.5,
        y: 52.5
      });
      fretNotes.push({
        x: 815.5,
        y: 94.5
      });
      fretNotes.push({
        x: 815.5,
        y: 135.5
      });
      fretNotes.push({
        x: 815.5,
        y: 177.5
      });
      fretNotes.push({
        x: 815.5,
        y: 218.5
      });
      fretNotes.push({
        x: 815.5,
        y: 260.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 964.5,
        y: 49.5
      });
      fretNotes.push({
        x: 964.5,
        y: 92.5
      });
      fretNotes.push({
        x: 964.5,
        y: 134.5
      });
      fretNotes.push({
        x: 964.5,
        y: 177.5
      });
      fretNotes.push({
        x: 964.5,
        y: 219.5
      });
      fretNotes.push({
        x: 964.5,
        y: 262.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 1102.5,
        y: 48.5
      });
      fretNotes.push({
        x: 1102.5,
        y: 90.5
      });
      fretNotes.push({
        x: 1102.5,
        y: 134.5
      });
      fretNotes.push({
        x: 1102.5,
        y: 177.5
      });
      fretNotes.push({
        x: 1102.5,
        y: 221.5
      });
      fretNotes.push({
        x: 1102.5,
        y: 263.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 1234.5,
        y: 45.5
      });
      fretNotes.push({
        x: 1234.5,
        y: 90.5
      });
      fretNotes.push({
        x: 1234.5,
        y: 133.5
      });
      fretNotes.push({
        x: 1234.5,
        y: 178.5
      });
      fretNotes.push({
        x: 1234.5,
        y: 221.5
      });
      fretNotes.push({
        x: 1234.5,
        y: 263.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 1358.5,
        y: 43.5
      });
      fretNotes.push({
        x: 1358.5,
        y: 89.5
      });
      fretNotes.push({
        x: 1358.5,
        y: 132.5
      });
      fretNotes.push({
        x: 1358.5,
        y: 178.5
      });
      fretNotes.push({
        x: 1358.5,
        y: 222.5
      });
      fretNotes.push({
        x: 1358.5,
        y: 266.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 1474.5,
        y: 41.5
      });
      fretNotes.push({
        x: 1474.5,
        y: 89.5
      });
      fretNotes.push({
        x: 1474.5,
        y: 132.5
      });
      fretNotes.push({
        x: 1474.5,
        y: 178.5
      });
      fretNotes.push({
        x: 1474.5,
        y: 223.5
      });
      fretNotes.push({
        x: 1474.5,
        y: 268.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 1586.5,
        y: 38.5
      });
      fretNotes.push({
        x: 1586.5,
        y: 86.5
      });
      fretNotes.push({
        x: 1586.5,
        y: 131.5
      });
      fretNotes.push({
        x: 1586.5,
        y: 178.5
      });
      fretNotes.push({
        x: 1586.5,
        y: 224.5
      });
      fretNotes.push({
        x: 1586.5,
        y: 269.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 1689.5,
        y: 38.5
      });
      fretNotes.push({
        x: 1689.5,
        y: 87.5
      });
      fretNotes.push({
        x: 1689.5,
        y: 131.5
      });
      fretNotes.push({
        x: 1689.5,
        y: 178.5
      });
      fretNotes.push({
        x: 1689.5,
        y: 224.5
      });
      fretNotes.push({
        x: 1689.5,
        y: 270.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 1786.5,
        y: 36.5
      });
      fretNotes.push({
        x: 1786.5,
        y: 84.5
      });
      fretNotes.push({
        x: 1786.5,
        y: 130.5
      });
      fretNotes.push({
        x: 1786.5,
        y: 178.5
      });
      fretNotes.push({
        x: 1786.5,
        y: 224.5
      });
      fretNotes.push({
        x: 1786.5,
        y: 270.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 1879.5,
        y: 35.5
      });
      fretNotes.push({
        x: 1879.5,
        y: 83.5
      });
      fretNotes.push({
        x: 1879.5,
        y: 129.5
      });
      fretNotes.push({
        x: 1879.5,
        y: 178.5
      });
      fretNotes.push({
        x: 1879.5,
        y: 225.5
      });
      fretNotes.push({
        x: 1879.5,
        y: 271.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 1968.5,
        y: 34.5
      });
      fretNotes.push({
        x: 1968.5,
        y: 82.5
      });
      fretNotes.push({
        x: 1968.5,
        y: 129.5
      });
      fretNotes.push({
        x: 1968.5,
        y: 177.5
      });
      fretNotes.push({
        x: 1968.5,
        y: 225.5
      });
      fretNotes.push({
        x: 1968.5,
        y: 273.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 2052.5,
        y: 32.5
      });
      fretNotes.push({
        x: 2052.5,
        y: 81.5
      });
      fretNotes.push({
        x: 2052.5,
        y: 128.5
      });
      fretNotes.push({
        x: 2052.5,
        y: 178.5
      });
      fretNotes.push({
        x: 2052.5,
        y: 226.5
      });
      fretNotes.push({
        x: 2052.5,
        y: 273.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 2130.5,
        y: 31.5
      });
      fretNotes.push({
        x: 2130.5,
        y: 80.5
      });
      fretNotes.push({
        x: 2130.5,
        y: 128.5
      });
      fretNotes.push({
        x: 2130.5,
        y: 178.5
      });
      fretNotes.push({
        x: 2130.5,
        y: 226.5
      });
      fretNotes.push({
        x: 2130.5,
        y: 274.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 2204.5,
        y: 30.5
      });
      fretNotes.push({
        x: 2204.5,
        y: 79.5
      });
      fretNotes.push({
        x: 2204.5,
        y: 128.5
      });
      fretNotes.push({
        x: 2204.5,
        y: 178.5
      });
      fretNotes.push({
        x: 2204.5,
        y: 227.5
      });
      fretNotes.push({
        x: 2204.5,
        y: 275.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 2273.5,
        y: 29.5
      });
      fretNotes.push({
        x: 2273.5,
        y: 79.5
      });
      fretNotes.push({
        x: 2273.5,
        y: 128.5
      });
      fretNotes.push({
        x: 2273.5,
        y: 178.5
      });
      fretNotes.push({
        x: 2273.5,
        y: 227.5
      });
      fretNotes.push({
        x: 2273.5,
        y: 275.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 2341.5,
        y: 27.5
      });
      fretNotes.push({
        x: 2341.5,
        y: 78.5
      });
      fretNotes.push({
        x: 2341.5,
        y: 128.5
      });
      fretNotes.push({
        x: 2341.5,
        y: 178.5
      });
      fretNotes.push({
        x: 2341.5,
        y: 227.5
      });
      fretNotes.push({
        x: 2341.5,
        y: 276.5
      });
      this.notes.push(fretNotes);
      fretNotes = [];
      fretNotes.push({
        x: 2402.5,
        y: 27.5
      });
      fretNotes.push({
        x: 2402.5,
        y: 78.5
      });
      fretNotes.push({
        x: 2402.5,
        y: 128.5
      });
      fretNotes.push({
        x: 2402.5,
        y: 178.5
      });
      fretNotes.push({
        x: 2402.5,
        y: 229.5
      });
      fretNotes.push({
        x: 2402.5,
        y: 277.5
      });
      this.notes.push(fretNotes);

      for (let i = 0; i < this.notes.length; i++) {
        for (let j = 0; j < this.notes[i].length; j++) {
          var theNote = this.allNotes.circle(this.NOTERADIUS * 2).move(this.notes[i][j].x - this.NOTERADIUS, this.notes[i][j].y - this.NOTERADIUS);
          theNote.fill(this.NOTECOLOR);
          theNote.stroke(this.NOTESTROKE);
          this.notes[i][j].svgElement = theNote;
        }
      }

      this.allNotes.front();
    },

    computeYOnGuide(guideIndex, xLength) {
      var i = guideIndex;
      var adjLength = this.Guides[i].pt2.x - this.Guides[i].pt1.x;
      var oppHeight = this.Guides[i].pt2.y - this.Guides[i].pt1.y;
      var yIncrease = xLength * (oppHeight / adjLength);
      return this.Guides[i].pt1.y + yIncrease;
    },

    computeYOnString(stringIndex, xLength) {
      var i = stringIndex;
      var adjLength = this.Strings[i].pt2.x - this.Strings[i].pt1.x;
      var oppHeight = this.Strings[i].pt2.y - this.Strings[i].pt1.y;
      var yIncrease = xLength * (oppHeight / adjLength);
      return this.Strings[i].pt1.y + yIncrease;
    },

    toDegrees(radians) {
      var pi = Math.PI;
      return radians * (180 / pi);
    },

    computeNoteBoxes() {
      for (let i = 0; i < this.notes.length; i++) {
        for (let j = 0; j < this.notes[i].length; j++) {
          // J is for strings
          var stringIndex = j;
          var theBox = [];
          var xCenter = this.notes[i][j].x;
          var yCenter = this.notes[i][j].y;
          var boxOffset = this.BOXPADDING;
          /*  0---1---2
          |		|
          7		3
          |		|
          6---5---4
          */
          // pt1 - Top Left

          let ptX = xCenter - boxOffset;
          let ptY = this.computeYOnGuide(stringIndex, ptX);
          theBox.push({
            x: ptX,
            y: ptY
          }); // pt2 - Top Center

          ptX = xCenter;
          ptY = this.computeYOnGuide(stringIndex, ptX);
          theBox.push({
            x: ptX,
            y: ptY
          }); // pt3 - Top Right;

          ptX = xCenter + boxOffset;
          ptY = this.computeYOnGuide(stringIndex, ptX);
          theBox.push({
            x: ptX,
            y: ptY
          }); // pt4 - Right Center;

          ptX = xCenter + boxOffset;
          ptY = this.computeYOnString(stringIndex, ptX);
          theBox.push({
            x: ptX,
            y: ptY
          }); // pt5 - Bottom Right

          ptX = xCenter + boxOffset;
          ptY = this.computeYOnGuide(stringIndex + 1, ptX);
          theBox.push({
            x: ptX,
            y: ptY
          }); // pt6 - Bottom Center

          ptX = xCenter;
          ptY = this.computeYOnGuide(stringIndex + 1, ptX);
          theBox.push({
            x: ptX,
            y: ptY
          }); // pt7 - Bottom Left

          ptX = xCenter - boxOffset;
          ptY = this.computeYOnGuide(stringIndex + 1, ptX);
          theBox.push({
            x: ptX,
            y: ptY
          }); // pt8 - Center Left

          ptX = xCenter - boxOffset;
          ptY = this.computeYOnString(stringIndex, ptX);
          theBox.push({
            x: ptX,
            y: ptY
          });
          this.notes[i][j].box = theBox;
        }
      }
    },

    drawBoundingBox(fret, string) {
      var theBox = this.notes[fret][string].box;

      for (let i = 0; i < theBox.length; i++) {
        this.Drawing.circle(10).move(theBox[i].x - 5, theBox[i].y - 5).fill("#fff");
      }
    },

    addPointToString(x, y) {
      return x + "," + y + " ";
    },

    setSharedNote(fret, string) {
      this.notes[fret][string].svgElement.fill("#ffff00");
    },

    drawShape(fret, data) {
      var polygonString = "";

      for (let i = 0; i < data.length; i++) {
        var _this$notes$data$i$, _this$notes$data$i$2;

        if (data[i][0] != "R") {
          polygonString += data[i][0];
        } else {
          polygonString += this.CORNERRADIUS;
        }

        polygonString += this.addPointToString((_this$notes$data$i$ = this.notes[fret + data[i][1]][data[i][2]]) === null || _this$notes$data$i$ === void 0 ? void 0 : _this$notes$data$i$.box[data[i][3]].x, (_this$notes$data$i$2 = this.notes[fret + data[i][1]][data[i][2]]) === null || _this$notes$data$i$2 === void 0 ? void 0 : _this$notes$data$i$2.box[data[i][3]].y);
      }

      polygonString += "Z"; // console.log("strPoly", polygonString);

      var theBox = this.allShapes.path(polygonString).fill(this.SHAPEFILL).stroke(this.SHAPESTROKE);
    },

    calculateBoundaryPoint(nFret, nString, nPosition) {
      var ptX = 0;
      var ptY = 0;
      var theNote = this.notes[nFret][nString];
      var noteX = theNote.x;
      var noteY = theNote.y;
      /*
        0,1---2----3,4
      15        	 5
       |             |
      14     C       6
       |             |
      13             7
      12,11--10---9,8
      */

      switch (nPosition) {
        case 0:
          ptX = noteX - this.BOXPADDING;
          ptY = this.computeYOnGuide(nString, ptX);
          break;

        case 1:
          ptX = noteX - this.BOXPADDING + this.CORNEROFFSET;
          ptY = this.computeYOnGuide(nString, ptX);
          break;

        case 2:
          ptX = noteX;
          ptY = this.computeYOnGuide(nString, ptX);
          break;

        case 3:
          ptX = noteX + this.BOXPADDING - this.CORNEROFFSET;
          ptY = this.computeYOnGuide(nString, ptX);
          break;

        case 4:
          ptX = noteX + this.BOXPADDING;
          ptY = this.computeYOnGuide(nString, ptX);
          break;

        case 5:
          ptX = noteX + this.BOXPADDING;
          ptY = this.computeYOnGuide(nString, ptX) + this.CORNEROFFSET;
          break;

        case 6:
          ptX = noteX + this.BOXPADDING;
          ptY = this.computeYOnString(nString, ptX);
          break;

        case 7:
          ptX = noteX + this.BOXPADDING;
          ptY = this.computeYOnGuide(nString, ptX) - this.CORNEROFFSET;
          break;

        case 8:
          ptX = noteX + this.BOXPADDING;
          ptY = this.computeYOnGuide(nString + 1, ptX);
          break;

        case 9:
          ptX = noteX + this.BOXPADDING - this.CORNEROFFSET;
          ptY = this.computeYOnGuide(nString + 1, ptX);
          break;

        case 10:
          ptX = noteX;
          ptY = this.computeYOnGuide(nString + 1, ptX);
          break;

        case 11:
          ptX = noteX - this.BOXPADDING + this.CORNEROFFSET;
          ptY = this.computeYOnGuide(nString + 1, ptX);
          break;

        case 12:
          ptX = noteX - this.BOXPADDING;
          ptY = this.computeYOnGuide(nString + 1, ptX);
          break;

        case 13:
          ptX = noteX - this.BOXPADDING;
          ptY = this.computeYOnGuide(nString + 1, ptX) - this.CORNEROFFSET;
          break;

        case 14:
          ptX = noteX - this.BOXPADDING;
          ptY = this.computeYOnString(nString, ptX);
          break;

        case 15:
          ptX = noteX - this.BOXPADDING;
          ptY = this.computeYOnGuide(nString, ptX) + this.CORNEROFFSET;
          break;
      }
    },

    drawMajorScale: () => ({}),
    drawMinorScale: () => ({}),

    drawMinorPentatonic() {
      this.drawPentatonic(this.rootFret, this.MINOR);
    },

    drawMajorPentatonic() {
      this.drawPentatonic(this.rootFret - 3, this.MAJOR);
    },

    drawPentatonic(theFret, strType) {
      this.showNote(theFret, this.ESTRING1, strType);
      this.showNote(theFret, this.BSTRING, strType);
      this.showNote(theFret, this.GSTRING, strType);
      this.showNote(theFret, this.DSTRING, strType);
      this.showNote(theFret, this.ASTRING, strType);
      this.showNote(theFret, this.ESTRING2, strType);
      this.showNote(theFret + 3, this.ESTRING1, strType);
      this.showNote(theFret + 3, this.BSTRING, strType);
      this.showNote(theFret + 2, this.GSTRING, strType);
      this.showNote(theFret + 2, this.DSTRING, strType);
      this.showNote(theFret + 2, this.ASTRING, strType);
      this.showNote(theFret + 3, this.ESTRING2, strType); //Position 2

      this.showNote(theFret + 5, this.ESTRING2, strType);
      this.showNote(theFret + 5, this.BSTRING, strType);
      this.showNote(theFret + 4, this.GSTRING, strType);
      this.showNote(theFret + 5, this.DSTRING, strType);
      this.showNote(theFret + 5, this.ASTRING, strType);
      this.showNote(theFret + 5, this.ESTRING1, strType); //Position 3

      this.showNote(theFret + 7, this.ESTRING2, strType);
      this.showNote(theFret + 8, this.BSTRING, strType);
      this.showNote(theFret + 7, this.GSTRING, strType);
      this.showNote(theFret + 7, this.DSTRING, strType);
      this.showNote(theFret + 7, this.ASTRING, strType);
      this.showNote(theFret + 7, this.ESTRING1, strType); // Position 4

      this.showNote(theFret + 10, this.ESTRING2, strType);
      this.showNote(theFret + 10, this.BSTRING, strType);
      this.showNote(theFret + 9, this.GSTRING, strType);
      this.showNote(theFret + 9, this.DSTRING, strType);
      this.showNote(theFret + 10, this.ASTRING, strType);
      this.showNote(theFret + 10, this.ESTRING1, strType);
      this.showNote(theFret + 12, this.ESTRING2, strType);
      this.showNote(theFret + 12, this.BSTRING, strType);
      this.showNote(theFret + 12, this.GSTRING, strType);
      this.showNote(theFret + 12, this.DSTRING, strType);
      this.showNote(theFret + 12, this.ASTRING, strType);
      this.showNote(theFret + 12, this.ESTRING1, strType);

      if (theFret < 7) {
        this.showNote(theFret + 15, this.ESTRING1, strType);
        this.showNote(theFret + 15, this.BSTRING, strType);
        this.showNote(theFret + 14, this.GSTRING, strType);
        this.showNote(theFret + 14, this.DSTRING, strType);
        this.showNote(theFret + 14, this.ASTRING, strType);
        this.showNote(theFret + 15, this.ESTRING2, strType);
      }

      if (theFret < 5) {
        this.showNote(theFret + 17, this.ESTRING2, strType);
        this.showNote(theFret + 17, this.BSTRING, strType);
        this.showNote(theFret + 16, this.GSTRING, strType);
        this.showNote(theFret + 17, this.DSTRING, strType);
        this.showNote(theFret + 17, this.ASTRING, strType);
        this.showNote(theFret + 17, this.ESTRING1, strType);
      }

      if (theFret < 3) {
        //Position 3
        this.showNote(theFret + 19, this.ESTRING2, strType);
        this.showNote(theFret + 20, this.BSTRING, strType);
        this.showNote(theFret + 19, this.GSTRING, strType);
        this.showNote(theFret + 19, this.DSTRING, strType);
        this.showNote(theFret + 19, this.ASTRING, strType);
        this.showNote(theFret + 19, this.ESTRING1, strType);
      }
    },

    drawBox1(fret, chordInterval) {
      var theFret = parseInt(fret);

      if (fret < 0 || fret > 18) {
        return;
      }

      this.showNote(theFret, this.ESTRING1);
      this.showNote(theFret, this.BSTRING);
      this.showNote(theFret, this.GSTRING);
      this.showNote(theFret, this.DSTRING);
      this.showNote(theFret, this.ASTRING);
      this.showNote(theFret, this.ESTRING2);
      this.showNote(theFret + 3, this.ESTRING1);
      this.showNote(theFret + 3, this.BSTRING);
      this.showNote(theFret + 2, this.GSTRING);
      this.showNote(theFret + 2, this.DSTRING);
      this.showNote(theFret + 2, this.ASTRING);
      this.showNote(theFret + 3, this.ESTRING2);
      var data = {
        name: "Box 1",
        points: [["M", 0, 0, 1], ["L", 3, 0, 1], ["R", 3, 0, 3], ["L", 3, 1, 3], ["R", 3, 1, 5], ["L", 2, 2, 2], ["L", 2, 4, 4], ["L", 3, 5, 1], ["R", 3, 5, 3], ["R", 3, 5, 5], ["L", 0, 5, 5], ["R", 0, 5, 7], ["L", 0, 0, 7], ["R", 0, 0, 1]],
        extras: [{
          name: "Major Notes",
          class: "major",
          notes: [[2, 0], [2, 1], [1, 2]]
        }, {
          name: "Minor Notes",
          class: "minor",
          notes: [[-1, 2], [1, 1]]
        }]
      };
      this.drawShape(fret, data.points);
    },

    drawBox2(fret, chordInterval) {
      //	//console.log('Drawing box 2 at ' + fret );
      let theFret = parseInt(fret);

      if (fret < 0 || fret > 19) {
        return;
      }

      this.showNote(theFret, this.ESTRING1);
      this.showNote(theFret, this.BSTRING);
      this.showNote(theFret + 1, this.GSTRING);
      this.showNote(theFret + 2, this.ESTRING1);
      this.showNote(theFret + 2, this.BSTRING);
      var note1 = this.notes[theFret][this.ESTRING1];
      var note2 = this.notes[theFret + 2][this.ESTRING1];
      var note3 = this.notes[theFret + 2][this.BSTRING];
      var note4 = this.notes[theFret + 1][this.GSTRING];
      var note5 = this.notes[theFret][this.BSTRING]; //Mark the start point

      var polygonString = "M" + this.addPointToString(note1.box[1].x, note1.box[1].y);
      polygonString += "L" + this.addPointToString(note2.box[1].x, note2.box[1].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note2.box[3].x, note2.box[3].y);
      polygonString += "L" + this.addPointToString(note3.box[3].x, note3.box[3].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note3.box[5].x, note3.box[5].y);
      polygonString += "L" + this.addPointToString(note4.box[2].x, note4.box[2].y);
      polygonString += "L" + this.addPointToString(note4.box[3].x, note4.box[3].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note4.box[5].x, note4.box[5].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note4.box[7].x, note4.box[7].y);
      polygonString += "L" + this.addPointToString(note4.box[0].x, note4.box[0].y);
      polygonString += "L" + this.addPointToString(note5.box[5].x, note5.box[5].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note5.box[7].x, note5.box[7].y);
      polygonString += "L" + this.addPointToString(note1.box[7].x, note1.box[7].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note1.box[1].x, note1.box[1].y);
      polygonString += "Z";
      var data = {
        name: "Box 2",
        points: [["M", 0, 0, 1], ["L", 2, 0, 1], ["R", 2, 0, 3], ["L", 2, 1, 3], ["R", 2, 1, 5], ["L", 1, 2, 2], ["L", 1, 2, 3], ["R", 1, 2, 5], ["R", 1, 2, 7], ["L", 1, 2, 0], ["L", 0, 1, 5], ["R", 0, 1, 7], ["L", 0, 0, 7], ["R", 0, 0, 1]]
      };
      this.drawShape(fret, data.points);
    },

    drawBox3(fret) {
      this.drawBox2(fret, 3);
    },

    drawBox4(fret) {
      console.log("Drawing box 4 at " + fret);
      let theFret = parseInt(fret);

      if (fret < 0 || fret > 18) {
        return;
      }

      this.showNote(theFret, this.ESTRING1);
      this.showNote(theFret + 3, this.ESTRING1);
      this.showNote(theFret + 1, this.BSTRING);
      this.showNote(theFret + 3, this.BSTRING);
      this.showNote(theFret + 2, this.GSTRING);
      var data = {
        name: "Box 2",
        points: [["M", 0, 0, 1], ["L", 3, 0, 1], ["R", 3, 0, 3], ["L", 3, 1, 3], ["R", 3, 1, 5], ["L", 2, 2, 2], ["L", 2, 2, 3], ["R", 2, 2, 5], ["R", 2, 2, 7], ["L", 2, 2, 0], ["L", 1, 1, 5], ["R", 1, 1, 7], ["L", 1, 1, 0], ["L", 0, 0, 5], ["R", 0, 0, 7], ["R", 0, 0, 1]]
      };
      this.drawShape(fret, data.points);
    },

    drawBox5(fret) {
      //console.log('Drawing box 5 at ' + fret );
      this.drawBox1(fret);
    },

    drawBackdoorPattern1(fret, shapePosition) {
      let theFret = parseInt(fret);

      if (fret < 0 || fret > 14) {
        return;
      }

      this.showNote(theFret, this.ESTRING2);
      this.showNote(theFret + 2, this.ESTRING2);
      this.showNote(theFret + 4, this.ESTRING2);
      this.showNote(theFret + 2, this.ASTRING);
      this.showNote(theFret + 4, this.ASTRING);
      this.showNote(theFret + 2, this.DSTRING);
      this.showNote(theFret + 4, this.DSTRING);
      this.showNote(theFret + 6, this.DSTRING);
      this.showNote(theFret + 4, this.GSTRING);
      this.showNote(theFret + 6, this.GSTRING);
      this.showNote(theFret + 5, this.BSTRING);
      var data = {
        name: "Backdoor Pattern (1)",
        points: [["M", 0, 5, 1], ["L", 2, 5, 0], ["L", 2, 3, 7], ["R", 2, 3, 1], ["L", 4, 3, 0], ["L", 4, 2, 7], ["R", 4, 2, 1], ["L", 5, 1, 6], ["L", 5, 1, 7], ["R", 5, 1, 1], ["R", 5, 1, 3], ["L", 5, 1, 4], ["L", 6, 2, 1], ["R", 6, 2, 3], ["L", 6, 3, 3], ["R", 6, 3, 5], ["L", 4, 4, 2], ["L", 4, 5, 3], ["R", 4, 5, 5], ["L", 0, 5, 5], ["R", 0, 5, 7], ["R", 0, 5, 1]]
      };
      this.drawShape(fret, data.points);
    },

    drawBackdoorPattern2(fret, shapePosition) {
      let theFret = parseInt(fret);

      if (fret < 0 || fret > 15) {
        return;
      }

      this.showNote(theFret, this.ESTRING2);
      this.showNote(theFret + 2, this.ESTRING2);
      this.showNote(theFret, this.ASTRING);
      this.showNote(theFret + 2, this.ASTRING);
      this.showNote(theFret + 4, this.ASTRING);
      this.showNote(theFret + 2, this.DSTRING);
      this.showNote(theFret + 4, this.DSTRING);
      this.showNote(theFret + 2, this.GSTRING);
      this.showNote(theFret + 4, this.GSTRING);
      this.showNote(theFret + 6, this.GSTRING);
      this.showNote(theFret + 5, this.BSTRING);
      var note1 = this.notes[theFret][this.ESTRING2];
      var note2 = this.notes[theFret][this.ASTRING];
      var note3 = this.notes[theFret + 2][this.DSTRING];
      var note4 = this.notes[theFret + 2][this.GSTRING];
      var note5 = this.notes[theFret + 5][this.BSTRING];
      var note6 = this.notes[theFret + 6][this.GSTRING];
      var note7 = this.notes[theFret + 4][this.DSTRING];
      var note8 = this.notes[theFret + 4][this.ASTRING];
      var note9 = this.notes[theFret + 2][this.ESTRING2];
      var polygonString = "M" + this.addPointToString(note1.box[7].x, note1.box[7].y);
      polygonString += "L" + this.addPointToString(note2.box[7].x, note2.box[7].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note2.box[1].x, note2.box[1].y);
      polygonString += "L" + this.addPointToString(note3.box[6].x, note3.box[6].y);
      polygonString += "L" + this.addPointToString(note4.box[7].x, note4.box[7].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note4.box[1].x, note4.box[1].y);
      polygonString += "L" + this.addPointToString(note5.box[6].x, note5.box[6].y);
      polygonString += "L" + this.addPointToString(note5.box[7].x, note5.box[7].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note5.box[1].x, note5.box[1].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note5.box[3].x, note5.box[3].y);
      polygonString += "L" + this.addPointToString(note5.box[4].x, note5.box[4].y);
      polygonString += "L" + this.addPointToString(note6.box[1].x, note6.box[1].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note6.box[3].x, note6.box[3].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note6.box[5].x, note6.box[5].y);
      polygonString += "L" + this.addPointToString(note7.box[2].x, note7.box[2].y);
      polygonString += "L" + this.addPointToString(note8.box[3].x, note8.box[3].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note8.box[5].x, note8.box[5].y);
      polygonString += "L" + this.addPointToString(note9.box[2].x, note9.box[2].y);
      polygonString += "L" + this.addPointToString(note9.box[3].x, note9.box[3].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note9.box[5].x, note9.box[5].y);
      polygonString += "L" + this.addPointToString(note1.box[5].x, note1.box[5].y);
      polygonString += this.CORNERRADIUS + this.addPointToString(note1.box[7].x, note1.box[7].y);
      polygonString += "Z";
      var theBox = this.allShapes.path(polygonString).fill(this.SHAPEFILL).stroke(this.SHAPESTROKE);
    },

    showNote(fret, string, strType) {
      if (fret < 0 || fret > 21) {
        return;
      }

      this.notes[fret][string].svgElement.show();

      if (strType !== undefined) {
        this.notes[fret][string].svgElement.fill(strType);
      } else {
        this.notes[fret][string].svgElement.fill(this.NOTECOLOR);
      }
    },

    drawBoxes(fret) {
      this.drawBox1(fret);
      this.drawBox2(fret + 3);
      this.drawBox3(fret + 5);
      this.drawBox4(fret + 7);
      this.drawBox5(fret + 9);
    },

    drawRootNotes(nRootFret, nScaleDegree, bMinor) {
      if (!bMinor) {
        switch (nScaleDegree) {
          case 1:
            this.showNote(nRootFret, this.ESTRING1, this.CHORDI);
            this.showNote(nRootFret + 12, this.ESTRING1, this.CHORDI);
            this.showNote(nRootFret + 5, this.BSTRING, this.CHORDI);
            this.showNote(nRootFret + 17, this.BSTRING, this.CHORDI);
            this.showNote(nRootFret + 9, this.GSTRING, this.CHORDI);
            this.showNote(nRootFret + 21, this.GSTRING, this.CHORDI);
            this.showNote(nRootFret - 3, this.GSTRING, this.CHORDI);
            this.showNote(nRootFret + 2, this.DSTRING, this.CHORDI);
            this.showNote(nRootFret + 14, this.DSTRING, this.CHORDI);
            this.showNote(nRootFret - 10, this.DSTRING, this.CHORDI);
            this.showNote(nRootFret + 7, this.ASTRING, this.CHORDI);
            this.showNote(nRootFret + 19, this.ASTRING, this.CHORDI);
            this.showNote(nRootFret - 5, this.ASTRING, this.CHORDI);
            this.showNote(nRootFret, this.ESTRING2, this.CHORDI);
            this.showNote(nRootFret + 12, this.ESTRING2, this.CHORDI);
            break;

          case 4:
            this.showNote(nRootFret + 5, this.ESTRING1, this.CHORDIV);
            this.showNote(nRootFret + 17, this.ESTRING1, this.CHORDIV);
            this.showNote(nRootFret - 7, this.ESTRING1, this.CHORDIV);
            this.showNote(nRootFret + 10, this.BSTRING, this.CHORDIV);
            this.showNote(nRootFret + 22, this.BSTRING, this.CHORDIV);
            this.showNote(nRootFret - 2, this.BSTRING, this.CHORDIV);
            this.showNote(nRootFret + 2, this.GSTRING, this.CHORDIV);
            this.showNote(nRootFret + 14, this.GSTRING, this.CHORDIV);
            this.showNote(nRootFret - 10, this.GSTRING, this.CHORDIV);
            this.showNote(nRootFret + 7, this.DSTRING, this.CHORDIV);
            this.showNote(nRootFret + 19, this.DSTRING, this.CHORDIV);
            this.showNote(nRootFret - 5, this.DSTRING, this.CHORDIV);
            this.showNote(nRootFret, this.ASTRING, this.CHORDIV);
            this.showNote(nRootFret + 12, this.ASTRING, this.CHORDIV);
            this.showNote(nRootFret + 5, this.ESTRING2, this.CHORDIV);
            this.showNote(nRootFret + 17, this.ESTRING2, this.CHORDIV);
            this.showNote(nRootFret - 7, this.ESTRING2, this.CHORDIV);
            break;

          case 5:
            this.showNote(nRootFret + 7, this.ESTRING1, this.CHORDV);
            this.showNote(nRootFret + 19, this.ESTRING1, this.CHORDV);
            this.showNote(nRootFret - 5, this.ESTRING1, this.CHORDV);
            this.showNote(nRootFret, this.BSTRING, this.CHORDV);
            this.showNote(nRootFret + 12, this.BSTRING, this.CHORDV);
            this.showNote(nRootFret + 4, this.GSTRING, this.CHORDV);
            this.showNote(nRootFret + 16, this.GSTRING, this.CHORDV);
            this.showNote(nRootFret - 8, this.GSTRING, this.CHORDV);
            this.showNote(nRootFret - 3, this.DSTRING, this.CHORDV);
            this.showNote(nRootFret + 9, this.DSTRING, this.CHORDV);
            this.showNote(nRootFret + 21, this.DSTRING, this.CHORDV);
            this.showNote(nRootFret + 2, this.ASTRING, this.CHORDV);
            this.showNote(nRootFret + 14, this.ASTRING, this.CHORDV);
            this.showNote(nRootFret - 10, this.ASTRING, this.CHORDV);
            this.showNote(nRootFret + 7, this.ESTRING2, this.CHORDV);
            this.showNote(nRootFret + 19, this.ESTRING2, this.CHORDV);
            this.showNote(nRootFret - 5, this.ESTRING2, this.CHORDV);
            break;
        }
      }
    },

    resetFretboard() {
      for (let i = 0; i < this.notes.length; i++) {
        for (let j = 0; j < this.notes[i].length; j++) {
          this.notes[i][j].svgElement.hide();
        }
      }

      for (let i = 0; i < this.fretMarkers.length; i++) {
        this.fretMarkers[i].hide();
      }

      this.allShapes.clear();
    },

    refreshUI() {
      this.resetFretboard(); // hide disabled toggles

      hideDisabled();
      this.toggleResultPanel(false);
      this.updateFretboard();
    },

    resetFilters() {
      this.accBoxes = [];
      this.accBoxes = [];
      this.accPatterns = [];
      this.accScales = [];
      this.accRootNotes = [];
      this.refreshUI();
    },

    getDotID(fret, offset, string) {
      return "#Dot-" + (fret + offset) + "-" + string;
    },

    drawFretMarker(fret, chord) {
      if (fret >= 0 && fret < 22) {
        this.fretMarkers[fret].fill({
          color: chord,
          opacity: this.CHORDOPACITY
        });
        this.fretMarkers[fret].show();
      }
    },

    computeOffsets() {
      for (let i = 0; i < this.Frets.length; i++) {
        this.yoffsets.push((this.notes[i][this.BSTRING].y - this.notes[i][this.ESTRING1].y) / 2.0);

        if (i < this.Frets.length - 1) {
          this.xoffsets.push((this.Frets[i + 1].pt1.x - this.Frets[i].pt1.x) / 4.0);
        }
      }
    },

    createFrets() {
      this.allFrets = this.Drawing.group();
      this.Frets.push({
        pt1: {
          x: 47.33,
          y: 54.2
        },
        pt2: {
          x: 47.33,
          y: 264.5
        }
      });
      this.Frets.push({
        pt1: {
          x: 241.33,
          y: 48
        },
        pt2: {
          x: 241.33,
          y: 265
        }
      });
      this.Frets.push({
        pt1: {
          x: 417.33,
          y: 46
        },
        pt2: {
          x: 417.33,
          y: 270
        }
      });
      this.Frets.push({
        pt1: {
          x: 583.33,
          y: 41
        },
        pt2: {
          x: 583.33,
          y: 273
        }
      });
      this.Frets.push({
        pt1: {
          x: 743.33,
          y: 37.36
        },
        pt2: {
          x: 743.33,
          y: 276.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 892.33,
          y: 35
        },
        pt2: {
          x: 892.33,
          y: 279.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 1036.33,
          y: 31
        },
        pt2: {
          x: 1036.33,
          y: 281.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 1171.33,
          y: 29
        },
        pt2: {
          x: 1171.33,
          y: 282.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 1298.33,
          y: 27
        },
        pt2: {
          x: 1298.33,
          y: 283.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 1417.33,
          y: 23
        },
        pt2: {
          x: 1417.33,
          y: 284.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 1531.33,
          y: 22
        },
        pt2: {
          x: 1531.33,
          y: 287.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 1640.33,
          y: 19
        },
        pt2: {
          x: 1640.33,
          y: 287.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 1740.33,
          y: 18.41
        },
        pt2: {
          x: 1740.33,
          y: 290.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 1836.33,
          y: 16
        },
        pt2: {
          x: 1836.33,
          y: 291.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 1926.33,
          y: 14
        },
        pt2: {
          x: 1926.33,
          y: 292.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 2012.33,
          y: 12
        },
        pt2: {
          x: 2012.33,
          y: 293.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 2093.33,
          y: 10
        },
        pt2: {
          x: 2093.33,
          y: 294.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 2168.33,
          y: 9
        },
        pt2: {
          x: 2168.33,
          y: 296.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 2241.33,
          y: 5
        },
        pt2: {
          x: 2241.33,
          y: 297.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 2308.33,
          y: 6
        },
        pt2: {
          x: 2308.33,
          y: 297.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 2372.33,
          y: 6
        },
        pt2: {
          x: 2372.33,
          y: 299.49
        }
      });
      this.Frets.push({
        pt1: {
          x: 2433.33,
          y: 5
        },
        pt2: {
          x: 2433.33,
          y: 299.49
        }
      });

      for (let i = 0; i < this.Frets.length; i++) {
        //var theFret = this.allFrets.line(  this.Frets[i].pt1.x,  this.Frets[i].pt1.y,  this.Frets[i].pt2.x,  this.Frets[i].pt2.y );
        var theFret;

        if (i == 0) {
          theFret = this.allFrets.rect(this.FRETWIDTH * 1.5, this.Frets[i].pt2.y - this.Frets[i].pt1.y);
          theFret.move(this.Frets[i].pt1.x - this.FRETWIDTH / 2.0, this.Frets[i].pt1.y);
          theFret.fill("#555");
        } else {
          theFret = this.allFrets.rect(this.FRETWIDTH, this.Frets[i].pt2.y - this.Frets[i].pt1.y);
          theFret.radius(this.FRETWIDTH / 4);
          theFret.move(this.Frets[i].pt1.x - this.FRETWIDTH / 2.0, this.Frets[i].pt1.y);
          theFret.fill(this.fretGradient);
        }

        this.Frets[i].svgElement = theFret;
      }
    },

    createFretMarkers() {
      this.allMarkers = this.Drawing.group();
      let markerOffset = this.FRETWIDTH / 2;
      let markerVOffset = 60;
      let theMarkers = this.Frets;
      theMarkers = [];
      theMarkers.push({
        pt1: {
          x: -17,
          y: 54
        },
        pt2: {
          x: -17,
          y: 264
        }
      });

      for (let i = 0; i < this.Frets.length; i++) {
        theMarkers.push(this.Frets[i]);
      }

      for (let i = 1; i < theMarkers.length; i++) {
        var polygonString = theMarkers[i - 1].pt1.x + markerOffset + "," + (theMarkers[i - 1].pt1.y - markerVOffset) + " ";
        polygonString += theMarkers[i - 1].pt2.x + markerOffset + "," + (theMarkers[i - 1].pt2.y + markerVOffset) + " ";
        polygonString += theMarkers[i].pt2.x - markerOffset + "," + (theMarkers[i].pt2.y + markerVOffset) + " ";
        polygonString += theMarkers[i].pt1.x - markerOffset + "," + (theMarkers[i].pt1.y - markerVOffset);
        var theFretMarker = this.allMarkers.polygon(polygonString);
        theFretMarker.fill("none");
        theFretMarker.stroke("none");
        this.fretMarkers.push(theFretMarker);
      }
    }

  })
});
// CONCATENATED MODULE: ./src/components/tools/Fretboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var tools_Fretboardvue_type_script_lang_js_ = (Fretboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/tools/Fretboard.vue?vue&type=style&index=0&id=5d559e4b&lang=sass&scoped=true&
var Fretboardvue_type_style_index_0_id_5d559e4b_lang_sass_scoped_true_ = __webpack_require__("a6dc");

// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__("4d5a");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__("e359");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__("65c6");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 1 modules
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__("2c91");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__("6ac5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js
var QDrawer = __webpack_require__("9404");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/expansion-item/QExpansionItem.js + 1 modules
var QExpansionItem = __webpack_require__("3b73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/option-group/QOptionGroup.js + 1 modules
var QOptionGroup = __webpack_require__("9f0a");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/fab/QFab.js
var QFab = __webpack_require__("c294");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/fab/QFabAction.js
var QFabAction = __webpack_require__("72db");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/chip/QChip.js
var QChip = __webpack_require__("b047");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__("09e3");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Morph.js
var Morph = __webpack_require__("9ed4");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/tools/Fretboard.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tools_Fretboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5d559e4b",
  null
  
)

/* harmony default export */ var Fretboard = __webpack_exports__["default"] = (component.exports);

























runtime_auto_import_default()(component, 'components', {QLayout: QLayout["a" /* default */],QHeader: QHeader["a" /* default */],QToolbar: QToolbar["a" /* default */],QBtn: QBtn["a" /* default */],QSelect: QSelect["a" /* default */],QIcon: QIcon["a" /* default */],QSpace: QSpace["a" /* default */],QToolbarTitle: QToolbarTitle["a" /* default */],QDrawer: QDrawer["a" /* default */],QList: QList["a" /* default */],QExpansionItem: QExpansionItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QAvatar: QAvatar["a" /* default */],QOptionGroup: QOptionGroup["a" /* default */],QSeparator: QSeparator["a" /* default */],QFab: QFab["a" /* default */],QFabAction: QFabAction["a" /* default */],QCardActions: QCardActions["a" /* default */],QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QItem: QItem["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QChip: QChip["a" /* default */],QPageContainer: QPageContainer["a" /* default */]});runtime_auto_import_default()(component, 'directives', {Morph: Morph["a" /* default */]});


/***/ }),

/***/ "a6dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_2_2_node_modules_quasar_app_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Fretboard_vue_vue_type_style_index_0_id_5d559e4b_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("33ca");
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_2_2_node_modules_quasar_app_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Fretboard_vue_vue_type_style_index_0_id_5d559e4b_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_2_2_node_modules_quasar_app_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Fretboard_vue_vue_type_style_index_0_id_5d559e4b_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=1.e335b6fb.js.map