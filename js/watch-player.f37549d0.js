(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "1f20":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/renderers/PDF.vue?vue&type=template&id=4b8725a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"flex flex-center"},[_c('h1',[_vm._v("PDF Viewer")]),_c('q-pdfviewer',{attrs:{"type":"html5","src":_vm.src,"content-class":"absolute"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/renderers/PDF.vue?vue&type=template&id=4b8725a0&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/renderers/PDF.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PDFvue_type_script_lang_js_ = ({
  name: "PDF_Renderer",
  props: ["src"]
});
// CONCATENATED MODULE: ./src/components/watch/renderers/PDF.vue?vue&type=script&lang=js&
 /* harmony default export */ var renderers_PDFvue_type_script_lang_js_ = (PDFvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/watch/renderers/PDF.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  renderers_PDFvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PDF = __webpack_exports__["default"] = (component.exports);


runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */]});


/***/ }),

/***/ "31e5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3416":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/player/MediaPlayer.vue?vue&type=template&id=32f5e986&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-card',[_c('q-card-section',{staticClass:"q-ma-none q-pa-none"},[_c('vue-plyr',{ref:"mediaPlayer"},[(this.type == 'audio')?_c('video',{ref:"mediaPlayer",attrs:{"id":"mediaPlayer","playsinline":_vm.playsinline,"controls":_vm.controls,"data-poster":_vm.poster}},_vm._l((_vm.sources),function(source){return _c('source',{key:source.src,attrs:{"src":_vm.cdn_url + '/' + _vm.id,"type":source.type}})}),0):_c('video',{ref:"mediaPlayer",attrs:{"id":"mediaPlayer","playsinline":_vm.playsinline,"controls":_vm.controls,"data-poster":_vm.poster}},_vm._l((_vm.sources),function(source){return _c('source',{key:source.src,attrs:{"src":source.src,"type":source.type,"size":source.size}})}),0)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/player/MediaPlayer.vue?vue&type=template&id=32f5e986&

// EXTERNAL MODULE: ./src/mixins/utilities.js
var utilities = __webpack_require__("b56b");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/player/MediaPlayer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // Vue.use(panZoom);

/* harmony default export */ var MediaPlayervue_type_script_lang_js_ = ({
  name: "PlyerMediaPlayer",
  inheritAttrs: false,
  mixins: [utilities["a" /* utilities */]],
  props: {
    flipped: Boolean,
    controls: Boolean,
    poster: String,
    sources: Array,
    allowfullscreen: Boolean,
    color: String,
    title: String,
    id: String,
    to: String,
    type: String,
    playsinline: Boolean,
    "webkit-playsinline": Boolean,
    preload: [String, Boolean],
    cdn_url: String
  },
  data: () => ({
    ctime: 0,
    pzOptions: {
      minZoom: 1,
      maxZoom: 4,
      bounds: true,
      boundsPadding: 0.1
    },
    zoom: null
  }),

  created() {
    this.$root.$on("slider-change", this.seekTo);
    this.$root.$on("togglePlay", this.togglePlay);
    this.$root.$on("restart", this.restart);
    this.$root.$on("seek5", this.seekTo);
    this.$root.$on("seek-5", this.seekTo);
    this.$root.$on("loopStart", this.setloopStart);
    this.$root.$on("loopStop", this.setloopStop); // this.$root.$on("toggleLooping", this.toggleLooping);

    this.$root.$on("speed", this.speedChange);
    this.$root.$on("volume", this.volumeChange);
    this.$root.$on("zoom", this.toggleZoom);
    this.$root.$on("resetZoom", this.resetZoom);
    this.$root.$on("clear-loop", this.clearLoop);
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "watch/SET_SEEK_TIME") {
        var _this$player;

        this.seekTo(state.watch.seekToTime);
        (_this$player = this.player) === null || _this$player === void 0 ? void 0 : _this$player.play();
      }
    });
  },

  beforeDestroy() {
    this.unsubscribe();
  },

  mounted() {
    this.player.on("ready", e => {
      this.loadDefaultSettings();
      this.player.toggleControls(false);
    });
    this.player.on("timeupdate", this.timeUpdated);
    this.player.on("clear-loop", this.clearLoop);
    this.player.on("playing play pause", this.stateChange);
  },

  watch: {
    looping() {
      console.log("looptoggle");
      if (this.$store.getters["watch/isValidLoop"]) this.setCurrentTime(this.start);
      console.log(`toggling looping: ${this.looping ? 'on' : 'off'}`);
      this.player.togglePlay(this.looping);
      this.showMessage({
        type: "info",
        caption: this.looping ? `Start: ${this.secondsToMinutes(this.start)} -> End: ${this.secondsToMinutes(this.stop)}` : this.secondsToMinutes(this.player.currentTime),
        message: this.looping ? "Loop Active" : "Loop Stopped",
        icon: this.loopIcon
      });
    },

    ctime() {
      this.$root.$emit('ctime-update', this.ctime);
    }

  },
  computed: { ...Object(vuex_esm["e" /* mapState */])("watch", {
      start: state => state.playerSettings.loop_start,
      stop: state => state.playerSettings.loop_stop,
      isPlaying: state => state.playerSettings.playing,
      looping: state => state.playerSettings.looping,
      duration: state => state.playerSettings.duration,
      seekToTime: state => state.seekToTime
    }),

    divPlayer() {
      return ["youtube", "vimeo"].includes(this.type);
    },

    player() {
      return this.$refs.mediaPlayer.player;
    },

    vimeoPlayer() {
      // return `https://player.vimeo.com/video/${this.sources[0].src}?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`;
      return `${this.sources[0].src}`;
    },

    youtubePlayer() {
      // return `http://www.youtube.com/embed/${this.sources[0].src}?rel=0&hd=1 `;
      return `https://www.youtube.com/embed/${this.sources[0].src}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&controls=0&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`;
    }

  },
  methods: { ...Object(vuex_esm["c" /* mapActions */])("watch", ["flipPlayer", "loadPlayerSettings"]),

    setCurrentTime(val) {
      this.player.currentTime = val;
    },

    clearLoop() {
      // this.loopObjx = null;
      this.$root.$emit("loop-cleared");
      console.log("loop cleared");
    },

    pzInit(pz_instance) {
      console.log("pz", pz_instance);
      this.pz = pz_instance;
      this.pz.originalScale = this.pz.getTransform();
      this.pz.pause();
      this.pz.on("panstart", e => {
        console.log(e);
      });
    },

    toggleZoom(e) {
      if (this.pz.isPaused()) {
        this.pz.resume();
      } else {
        this.pz.pause();
      }

      console.log(`pz is: ${this.pz.isPaused() ? "paused" : "unpaused"}`);
    },

    resetZoom(e) {
      this.pz.smoothMoveTo(0, 0, 1);
      this.pz.smoothZoomAbs(0, 0, 1);
    },

    loadDefaultSettings() {
      const settings = {
        speed: this.player.speed * 100,
        volume: this.player.volume * 100
      };
      this.loadPlayerSettings(settings);
    },

    volumeChange(val) {
      this.player.volume = val / 100;
    },

    speedChange(val) {
      this.player.speed = val / 100;
    },

    timeUpdated: function (e) {
      this.$store.commit('watch/SET_SEGMENT_DURATION', this.player.duration);
      this.ctime = this.player.currentTime;

      if (this.looping) {
        if (this.ctime >= this.stop && this.stop > 0) {
          this.seekTo(this.start);
          this.showMessage({
            message: "Loop Rewound",
            caption: this.secondsToMinutes(this.ctime) + " >> " + this.secondsToMinutes(this.stop)
          });
        }
      }
    },

    seekTo(time) {
      if (!this.player || typeof time == NaN) return;
      let val = time >= 0 ? time : 0;
      console.log("Seek to time ", time);
      this.ctime = this.setCurrentTime(val);
    },

    restart() {
      this.seekTo(0);
    },

    togglePlay() {
      var _this$player2, _this$player5;

      // if (!this.player) return;
      if ((_this$player2 = this.player) !== null && _this$player2 !== void 0 && _this$player2.playing) {
        var _this$player3;

        (_this$player3 = this.player) === null || _this$player3 === void 0 ? void 0 : _this$player3.pause();
      } else {
        var _this$player4;

        (_this$player4 = this.player) === null || _this$player4 === void 0 ? void 0 : _this$player4.play();
      }

      this.$root.$emit('toggle_header');
      this.$store.commit('watch/TOGGLE_PLAYING', (_this$player5 = this.player) === null || _this$player5 === void 0 ? void 0 : _this$player5.playing);
      console.log("isisPlaying?: ", this.isPlaying);
    },

    setloopStart(time) {
      this.$store.dispatch("watch/setLoopStart", time).then(() => {
        this.showMessage(Object.assign({}, this.cfgLoopIcon, {
          type: "positive",
          message: "Loop Start Set",
          caption: this.secondsToMinutes(this.start)
        }));
      });
    },

    setloopStop(time) {
      this.$store.dispatch("watch/setLoopStop", time).then(info => {
        var caption = {};
        if (this.stop > 0) caption = {
          caption: this.secondsToMinutes(this.stop)
        };
        this.showMessage(Object.assign({}, this.cfgLoopIcon, info, caption));
      });
    } // resizeIFrameToFitContent( iFrame ) {
    //   console.log('b-iframe', iFrame)
    //   iFrame.width  = iFrame.contentWindow.parent.document.body.scrollWidth + 'px';
    // iFrame.height = iFrame.contentWindow.parent.document.body.scrollHeight  * .9 + 'px';
    //   console.log('a-iframe', iFrame)
    // }


  }
});
// CONCATENATED MODULE: ./src/components/watch/player/MediaPlayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var player_MediaPlayervue_type_script_lang_js_ = (MediaPlayervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/watch/player/MediaPlayer.vue?vue&type=style&index=0&lang=css&
var MediaPlayervue_type_style_index_0_lang_css_ = __webpack_require__("695d");

// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/watch/player/MediaPlayer.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  player_MediaPlayervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MediaPlayer = __webpack_exports__["default"] = (component.exports);



runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */]});


/***/ }),

/***/ "53cc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "540b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_quasar_app_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoSettings_vue_vue_type_style_index_0_id_a7262a8c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c0cb");
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_quasar_app_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoSettings_vue_vue_type_style_index_0_id_a7262a8c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_quasar_app_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoSettings_vue_vue_type_style_index_0_id_a7262a8c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "695d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaPlayer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("31e5");
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaPlayer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaPlayer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8705":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_quasar_app_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerControls_vue_vue_type_style_index_0_id_5cf21e06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("53cc");
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_quasar_app_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerControls_vue_vue_type_style_index_0_id_5cf21e06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_quasar_app_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayerControls_vue_vue_type_style_index_0_id_5cf21e06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b56b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utilities; });
const utilities = {
  data: () => ({
    cfgloopIcon: {
      icon: "mdi-infinity",
      type: "positive"
    },
    cfgLoopInfo: {
      icon: "mdi-information-outline",
      type: "warning",
      progress: true
    },
    cfgWarning: {
      icon: "mdi-alert-outline",
      type: "negative"
    }
  }),
  methods: {
    secondsToMinutes(sec = 0) {
      sec = typeof sec !== NaN ? sec : 0;
      sec = Math.round(Number(sec));
      var hours = Math.floor(sec / 3600);
      hours >= 1 ? sec = sec - hours * 3600 : hours = "00";
      var min = Math.floor(sec / 60);
      min >= 1 ? sec = sec - min * 60 : min = "00";
      sec < 1 ? sec = "00" : void 0;
      min.toString().length == 1 ? min = "0" + min : void 0;
      sec.toString().length == 1 ? sec = "0" + sec : void 0;
      return hours + ":" + min + ":" + sec;
    },

    showMessage(objOptions) {
      const defaults = {
        message: "",
        timeout: 800,
        group: 'arbitrary-group-name',
        position: "top",
        icon: "mdi-information-outline",
        classes: "glossy",
        actions: [{
          label: "Dismiss",
          color: "secondary",
          handler: () => {
            /* ... */
          }
        }]
      };

      if (typeof objOptions === "string") {
        objOptions = {
          message: objOptions,
          type: "info"
        };
      }

      this.$q.notify(Object.assign({}, defaults, objOptions));
    }

  }
};

/***/ }),

/***/ "c0cb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c0e8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/settings/VideoSettings.vue?vue&type=template&id=a7262a8c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-menu',{staticClass:"q-ma-lg",attrs:{"anchor":"top left","self":"bottom left","transition-show":"flip-right","transition-hide":"flip-left","fit":""}},[_c('q-list',{staticClass:"q-pa-md "},[_c('q-item-label',{staticClass:"text-secondary"},[_vm._v("Options")]),_c('q-separator'),_c('section',{directives:[{name:"show",rawName:"v-show",value:(_vm.knobs),expression:"knobs"}]},[_c('q-item',[_c('q-item-section',[_c('q-badge',{attrs:{"color":"secondary","label":'Volume: ' + _vm.playerSettings.volume + '%'}}),_c('q-knob',{staticClass:"text-white q-ma-md",attrs:{"show-value":"","size":"65px","angle":270,"thickness":0.15,"color":"accent","track-color":"transparent","center-color":"secondary"},model:{value:(_vm.playerSettings.volume),callback:function ($$v) {_vm.$set(_vm.playerSettings, "volume", $$v)},expression:"playerSettings.volume"}},[_c('q-icon',{staticClass:"q-mr-xs",attrs:{"name":"volume_up"}}),_vm._v("\n            "+_vm._s(_vm.playerSettings.volume)+"%\n          ")],1)],1)],1)],1),_c('section',{directives:[{name:"show",rawName:"v-show",value:(!_vm.knobs),expression:"!knobs"}]},[_c('q-item',[_c('q-item-section',{staticClass:"text-secondary flex flex-center",attrs:{"avatar":""}},[_vm._v("\n            Volume:\n            "),_c('q-icon',{attrs:{"color":"secondary","name":"volume_up","title":"Volume"}})],1),_c('q-item-section',{staticClass:"col-5"},[_c('q-slider',{attrs:{"min":0,"max":100,"step":10,"color":"secondary"},on:{"change":_vm.volumeChange},model:{value:(_vm.playerSettings.volume),callback:function ($$v) {_vm.$set(_vm.playerSettings, "volume", $$v)},expression:"playerSettings.volume"}}),_vm._v(" "+_vm._s(_vm.playerSettings.volume)+"%\n        ")],1)],1)],1),_c('q-item',[_c('q-item-section',{staticClass:"text-secondary flex flex-center",attrs:{"avatar":""}},[_vm._v(" \n          Speed: \n          "),_c('q-icon',{attrs:{"name":"mdi-play-speed","color":"secondary","title":"Speed"}})],1),_c('q-item-section',[_c('q-slider',{attrs:{"min":50,"max":150,"step":25,"color":"secondary"},on:{"change":_vm.speedChange},model:{value:(_vm.playerSettings.speed),callback:function ($$v) {_vm.$set(_vm.playerSettings, "speed", $$v)},expression:"playerSettings.speed"}}),_vm._v(_vm._s(_vm.playerSettings.speed)+"%\n      ")],1)],1),_c('section',[_c('q-item',{staticClass:"q-py-md"},[_c('q-item-section',[_c('q-item-label',{staticClass:"text-secondary"},[_vm._v("Lefty View")])],1),_c('q-item-section',[_c('q-toggle',{attrs:{"icon":"mdi-hand-left","color":"secondary","unchecked-icon":"clear"},model:{value:(_vm.playerSettings.flipped),callback:function ($$v) {_vm.$set(_vm.playerSettings, "flipped", $$v)},expression:"playerSettings.flipped"}})],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/settings/VideoSettings.vue?vue&type=template&id=a7262a8c&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/settings/VideoSettings.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var VideoSettingsvue_type_script_lang_js_ = ({
  name: "VideoSettings",
  data: () => ({
    knobs: false
  }),
  computed: { ...Object(vuex_esm["e" /* mapState */])("watch", ["playerSettings"])
  },
  methods: {
    speedChange(v) {
      this.$root.$emit("speed", v);
    },

    volumeChange(v) {
      this.$root.$emit("volume", v);
    },

    resetZoom(v) {
      this.$root.$emit("resetZoom", v);
    },

    zoomChange(v) {
      this.$root.$emit("zoom", v);
    },

    toggleFlip(v) {},

    ...Object(vuex_esm["c" /* mapActions */])("watch", ["flipPlayer"])
  }
});
// CONCATENATED MODULE: ./src/components/watch/settings/VideoSettings.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_VideoSettingsvue_type_script_lang_js_ = (VideoSettingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/watch/settings/VideoSettings.vue?vue&type=style&index=0&id=a7262a8c&lang=scss&scoped=true&
var VideoSettingsvue_type_style_index_0_id_a7262a8c_lang_scss_scoped_true_ = __webpack_require__("540b");

// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/menu/QMenu.js + 4 modules
var QMenu = __webpack_require__("4e73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__("58a81");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/knob/QKnob.js + 1 modules
var QKnob = __webpack_require__("3845");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/slider/QSlider.js
var QSlider = __webpack_require__("c1d0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js
var QCheckbox = __webpack_require__("8f8e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js
var QToggle = __webpack_require__("9564");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__("714f");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/watch/settings/VideoSettings.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settings_VideoSettingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a7262a8c",
  null
  
)

/* harmony default export */ var VideoSettings = __webpack_exports__["default"] = (component.exports);














runtime_auto_import_default()(component, 'components', {QMenu: QMenu["a" /* default */],QList: QList["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QSeparator: QSeparator["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QBadge: QBadge["a" /* default */],QKnob: QKnob["a" /* default */],QIcon: QIcon["a" /* default */],QSlider: QSlider["a" /* default */],QCheckbox: QCheckbox["a" /* default */],QBtn: QBtn["a" /* default */],QToggle: QToggle["a" /* default */]});runtime_auto_import_default()(component, 'directives', {Ripple: Ripple["a" /* default */]});


/***/ }),

/***/ "c236":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/renderers/SoundSlice.vue?vue&type=template&id=2934477a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n  "+_vm._s(("https://www.soundslice.com/slices/" + _vm.src + "/embed/?api=1&show_title=0&branding=2"))+"\n  "),_c('iframe',{attrs:{"id":"ssembed","src":("https://www.soundslice.com/scores/" + _vm.src + "/embed/?api=1&show_title=0&branding=2"),"width":"100%","height":"800px","frameBorder":"0"}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/renderers/SoundSlice.vue?vue&type=template&id=2934477a&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/renderers/SoundSlice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SoundSlicevue_type_script_lang_js_ = ({
  name: "SoundSliceRenderer",
  props: ["src"]
});
// CONCATENATED MODULE: ./src/components/watch/renderers/SoundSlice.vue?vue&type=script&lang=js&
 /* harmony default export */ var renderers_SoundSlicevue_type_script_lang_js_ = (SoundSlicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// CONCATENATED MODULE: ./src/components/watch/renderers/SoundSlice.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  renderers_SoundSlicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SoundSlice = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "e33f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/player/PlayerControls.vue?vue&type=template&id=5cf21e06&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-12",attrs:{"id":"mediaControlsWrapper"}},[_vm._t("slider"),_c('div',{staticClass:"row",attrs:{"id":"transportButtonsWrapper"}},[_c('q-btn',{staticClass:"transport-button col",attrs:{"id":"playback-play","title":"Toggle Playback.","icon":_vm.isPlaying ? 'mdi-pause' : 'mdi-play'},on:{"click":function($event){return _vm.$root.$emit('togglePlay')}}}),_c('q-btn',{staticClass:"transport-button col",attrs:{"id":"playback-beginning","icon":"mdi-skip-backward","title":"Back to the beginning.","disable":this.currentTime === 0},on:{"click":function($event){return _vm.$root.$emit('restart', 0)}}}),_c('q-btn',{staticClass:"transport-button col",attrs:{"id":"playback-rewind","title":"Rewind 5 Seconds.","icon-right":"mdi-rewind-5"},on:{"click":function($event){_vm.$root.$emit('seek-5', _vm.seekTime(-5))}}}),_c('q-btn',{staticClass:"transport-button col",attrs:{"id":"playback-forward","title":"Forward 5 Seconds.","icon":"mdi-fast-forward-5"},on:{"click":function($event){_vm.$root.$emit('seek5', _vm.seekTime(5))}}}),_c('q-btn',{staticClass:"transport-button col",attrs:{"id":"looping-start","title":"Set loop starting point.","color":_vm.isStartSet},on:{"click":function($event){return _vm.$root.$emit('loopStart', _vm.currentTime)}}},[_c('div',{staticClass:"row items-center no-wrap"},[_c('q-icon',{staticClass:"q-px-xs",attrs:{"left":"","name":"mdi-arrow-collapse-left"}}),_c('span',{staticClass:"text-weight-bolder text-body1"},[_vm._v("A")])],1)]),_c('q-btn',{staticClass:"transport-button col",attrs:{"id":"looping-stop","title":"Set loop stopping point.","color":_vm.isStopSet,"disable":_vm.start === -1},on:{"click":function($event){return _vm.$root.$emit('loopStop', _vm.currentTime)}}},[_c('div',{staticClass:"row items-center no-wrap"},[_c('span',{staticClass:"text-weight-bolder text-body1 q-px-xs"},[_vm._v("B")]),_c('q-icon',{attrs:{"left":"","name":"mdi-arrow-collapse-right"}})],1)]),_c('q-btn-dropdown',{attrs:{"split":"","id":"looping-toggle","disable-dropdown":!_vm.isValidLoop,"title":"Begin/End Looping.","color":!_vm.isValidLoop ? 'primary' : 'green',"disable":!_vm.isValidLoop},on:{"click":function($event){_vm.$store.commit('watch/TOGGLE_LOOPING');
        _vm.$root.$emit('togglePlay');}},scopedSlots:_vm._u([{key:"label",fn:function(){return [_c('q-icon',{class:{ rotate: _vm.rotating },attrs:{"name":"mdi-autorenew"}}),_vm._v("\n        "+_vm._s(_vm.showLoopMessage)+"\n      ")]},proxy:true}])},[_c('q-list',[(_vm.isValidLoop)?_c('q-item',{staticClass:"bg-accent"},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-avatar',{attrs:{"icon":"mdi-minus","color":"primary","text-color":"white"}})],1),_c('q-item-section',[_c('q-item-label',[_vm._v(_vm._s(_vm.showLoopMessage))]),_c('q-item-label',[_vm._v(_vm._s(_vm.getLoopStartTime)+" -> "+_vm._s(_vm.getLoopStopTime))])],1)],1):_vm._e(),_c('q-item',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"clickable":""},on:{"click":function($event){return _vm.$store.dispatch('watch/clearLoop')}}},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-avatar',{attrs:{"icon":"mdi-minus-circle-off","color":"primary","text-color":"white"}})],1),_c('q-item-section',[_c('q-item-label',[_vm._v("Clear Loop")])],1)],1)],1)],1),_c('q-btn',{attrs:{"id":"controls-toggle","title":"Video Settings","icon":"mdi-cogs"}},[_c('video-settings-menu')],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/player/PlayerControls.vue?vue&type=template&id=5cf21e06&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/mixins/utilities.js
var utilities = __webpack_require__("b56b");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/player/PlayerControls.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var PlayerControlsvue_type_script_lang_js_ = ({
  mixins: [utilities["a" /* utilities */]],
  name: "PlayerControls",
  components: {
    videoSettingsMenu: () => Promise.all(/* import() | watch-player */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "c0e8"))
  },
  props: ["currentTime"],
  computed: { ...Object(vuex_esm["e" /* mapState */])("watch", {
      start: state => state.playerSettings.loop_start,
      stop: state => state.playerSettings.loop_stop,
      isPlaying: state => state.playerSettings.playing,
      looping: state => state.playerSettings.looping
    }),
    ...Object(vuex_esm["d" /* mapGetters */])("watch", ["isValidLoop", "getLoopStart", "getLoopStop"]),

    getLoopStopTime() {
      return this.secondsToMinutes(Math.floor(this.getLoopStop));
    },

    getLoopStartTime() {
      return this.secondsToMinutes(Math.floor(this.getLoopStart));
    },

    showLoopMessage() {
      return !this.isValidLoop ? "No Loop Set" : this.looping ? "Currently Looping" : "Loop Set";
    },

    isStartSet() {
      return this.start > -1 ? "green" : "primary";
    },

    isStopSet() {
      return this.stop > 1 ? "green" : "primary";
    },

    rotating() {
      return this.isValidLoop && this.isPlaying && this.looping;
    }

  },
  methods: {
    seekTime(val) {
      return this.currentTime + val;
    } // toggleLooping(val) {
    //   this.looping = val ? val : !this.looping;
    // }


  }
});
// CONCATENATED MODULE: ./src/components/watch/player/PlayerControls.vue?vue&type=script&lang=js&
 /* harmony default export */ var player_PlayerControlsvue_type_script_lang_js_ = (PlayerControlsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/watch/player/PlayerControls.vue?vue&type=style&index=0&id=5cf21e06&lang=scss&scoped=true&
var PlayerControlsvue_type_style_index_0_id_5cf21e06_lang_scss_scoped_true_ = __webpack_require__("8705");

// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn-dropdown/QBtnDropdown.js
var QBtnDropdown = __webpack_require__("f20b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__("7f67");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/watch/player/PlayerControls.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  player_PlayerControlsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5cf21e06",
  null
  
)

/* harmony default export */ var PlayerControls = __webpack_exports__["default"] = (component.exports);









runtime_auto_import_default()(component, 'components', {QBtn: QBtn["a" /* default */],QIcon: QIcon["a" /* default */],QBtnDropdown: QBtnDropdown["a" /* default */],QList: QList["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QAvatar: QAvatar["a" /* default */],QItemLabel: QItemLabel["a" /* default */]});runtime_auto_import_default()(component, 'directives', {ClosePopup: ClosePopup["a" /* default */]});


/***/ }),

/***/ "fc72":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/player/MediaProgressSlider.vue?vue&type=template&id=56bd7c9a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-list',{attrs:{"id":"progressSliderWrapper","dense":""}},[_c('q-item',[_c('q-item-section',{staticClass:"text-weight-bolder text-caption",attrs:{"id":"current-time","avatar":""}},[_vm._v("\n      "+_vm._s(_vm.elapsedTime)+"\n    ")]),_c('q-item-section',{attrs:{"id":"progressSlider"}},[(!_vm.activeLoop)?_c('q-slider',{attrs:{"dense":"","label":"","color":_vm.trackColor,"min":0,"max":_vm.duration,"label-value":_vm.elapsedTime},on:{"change":_vm.sliderChanged,"pan":_vm.sliderSliding},model:{value:(_vm.progress),callback:function ($$v) {_vm.progress=$$v},expression:"progress"}}):_c('q-range',{attrs:{"id":"loop-region","color":"accent","dense":"","label":"","min":_vm.activeLoop.min,"max":_vm.activeLoop.max,"left-label-value":_vm.minTime(_vm.activeLoop.min),"right-label-value":_vm.maxTime(_vm.activeLoop.max),"readonly":""},model:{value:(_vm.activeLoop),callback:function ($$v) {_vm.activeLoop=$$v},expression:"activeLoop"}})],1),_c('q-item-section',{staticClass:"text-weight-bolder text-caption",attrs:{"id":"time-left","avatar":""}},[_vm._v("\n      "+_vm._s(_vm.timeLeft)+"\n    ")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/watch/player/MediaProgressSlider.vue?vue&type=template&id=56bd7c9a&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/mixins/utilities.js
var utilities = __webpack_require__("b56b");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/watch/player/MediaProgressSlider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var MediaProgressSlidervue_type_script_lang_js_ = ({
  name: "MediaProgressSlider",
  props: ["ctime"],
  mixins: [utilities["a" /* utilities */]],
  data: () => ({
    progress: 0.0
  }),

  mounted() {
    this.progress = this.ctime;
  },

  computed: { ...Object(vuex_esm["e" /* mapState */])("watch", ["playerSettings"]),
    ...Object(vuex_esm["d" /* mapGetters */])("watch", ["isValidLoop", "getLoopStart", "getLoopStop"]),

    loopMessage() {
      return this.playerSettings.looping ? "Currently Looping:" : "Loop Set";
    },

    trackColor() {
      return !this.activeLoop ? "secondary" : this.playerSettings.playing && this.playerSettings.looping ? "accent" : "secondary";
    },

    duration() {
      return this.playerSettings.duration;
    },

    getALMin() {
      return this.activeLoop ? this.activeLoop.min : 0;
    },

    getALMax() {
      return this.activeLoop ? this.activeLoop.max : 0;
    },

    activeLoop() {
      return this.isValidLoop ? this.playerSettings.looping ? {
        min: Math.floor(this.ctime),
        max: Math.floor(this.getLoopStop)
      } : {
        min: Math.floor(this.getLoopStart),
        max: Math.floor(this.getLoopStop)
      } : null;
    },

    elapsedTime() {
      return this.secondsToMinutes(this.progress);
    },

    timeLeft() {
      return this.secondsToMinutes(this.duration - this.progress);
    }

  },
  watch: {
    ctime: function (val) {
      this.progress = val;
    }
  },
  methods: {
    minTime(time) {
      return this.secondsToMinutes(time);
    },

    maxTime(time) {
      return this.secondsToMinutes(time);
    },

    sliderChanged(e) {
      this.$root.$emit("slider-change", e);
    },

    sliderSliding(e) {
      if (e === "start") this.$root.$emit("pause");
      console.log("sliderSliding", this.progress);
    }

  }
});
// CONCATENATED MODULE: ./src/components/watch/player/MediaProgressSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var player_MediaProgressSlidervue_type_script_lang_js_ = (MediaProgressSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__("58a81");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/slider/QSlider.js
var QSlider = __webpack_require__("c1d0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/range/QRange.js
var QRange = __webpack_require__("7bbf");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/watch/player/MediaProgressSlider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  player_MediaProgressSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MediaProgressSlider = __webpack_exports__["default"] = (component.exports);







runtime_auto_import_default()(component, 'components', {QList: QList["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QBadge: QBadge["a" /* default */],QSlider: QSlider["a" /* default */],QRange: QRange["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=watch-player.f37549d0.js.map