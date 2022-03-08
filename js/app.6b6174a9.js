/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + "." + {"2":"9ceb532e","3":"37767908","4":"c073df9d","5":"df9d38ee","6":"6f959e4c","7":"508f0bd7","8":"f794c736"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"2":1,"3":1,"4":1,"5":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"2":"2c0f5d68","3":"d3173a90","4":"59324afb","5":"442df1c6","6":"31d6cfe0","7":"31d6cfe0","8":"31d6cfe0"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2f39");


/***/ }),

/***/ "0047":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f30e");
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5319");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bba4");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_2__);




const requireModule = __webpack_require__("d307"); //extract js files inside modules folder


const modules = {};
requireModule.keys().forEach(fileName => {
  if (fileName === "./index.js") return; //reject the index.js file

  const moduleName = lodash_camelCase__WEBPACK_IMPORTED_MODULE_2___default()(fileName.replace(/(\.\/|\.js)/g, "")); //

  modules[moduleName] = requireModule(fileName).default;
});
/* harmony default export */ __webpack_exports__["default"] = (modules);

/***/ }),

/***/ "2f39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/mdi-v5/mdi-v5.css
var mdi_v5 = __webpack_require__("9f29");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/fontawesome-v5/fontawesome-v5.css
var fontawesome_v5 = __webpack_require__("573e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/roboto-font/roboto-font.css
var roboto_font = __webpack_require__("7d6e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/material-icons/material-icons.css
var material_icons = __webpack_require__("e54f");

// EXTERNAL MODULE: ./node_modules/quasar/dist/quasar.sass
var quasar = __webpack_require__("985d");

// EXTERNAL MODULE: ./src/css/app.sass
var css_app = __webpack_require__("0047");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/quasar/lang/en-us.js
var en_us = __webpack_require__("1f91");

// EXTERNAL MODULE: ./node_modules/quasar/icon-set/material-icons.js
var icon_set_material_icons = __webpack_require__("42d2");

// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js + 1 modules
var vue_plugin = __webpack_require__("b05d");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__("2a19");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Dialog.js + 3 modules
var Dialog = __webpack_require__("436b");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/LocalStorage.js + 1 modules
var LocalStorage = __webpack_require__("18d6");

// CONCATENATED MODULE: ./.quasar/import-quasar.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



;
vue_runtime_esm["a" /* default */].use(vue_plugin["a" /* default */], {
  config: {
    "dark": true,
    "brand": {
      "primary": "#555555",
      "secondary": "#0099ff",
      "accent": "#ef6c00",
      "dark": "#1d1d1d",
      "positive": "#21BA45",
      "negative": "#C10015",
      "info": "#31CCEC",
      "warninng": "#f2c037"
    }
  },
  lang: en_us["a" /* default */],
  iconSet: icon_set_material_icons["a" /* default */],
  plugins: {
    Notify: Notify["a" /* default */],
    Dialog: Dialog["a" /* default */],
    LocalStorage: LocalStorage["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=46253381&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex flex-column h-100",attrs:{"id":"q-app"}},[_c('div',{staticClass:"container flex-grow-1"},[_c('div',{staticClass:"mt-5"},[_c('router-view',{key:_vm.$route.fullPath})],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=46253381&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  mounted() {
    this.handleAuthStateChange();
  },

  methods: { ...Object(vuex_esm["b" /* mapActions */])('auth', ['handleAuthStateChange'])
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("034f");

// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./src/store/modules/index.js
var modules = __webpack_require__("2a74");

// CONCATENATED MODULE: ./src/store/index.js



 // import TXBA_Utilities from "../middleware/txba_helpers";

vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
const store_store = new vuex_esm["a" /* default */].Store({
  state: {
    _spinnerState: false // TXBA_UTILS:  new TXBA_Utilities()

  },
  getters: {
    req: state => state.TXBA_UTILS.getAsyncData
  },
  actions: {
    loadModules() {
      // auto init namespaced stores if the have an "initStore" action
      for (const moduleName of Object.keys(modules["default"])) {
        if (modules["default"][moduleName].actions && modules["default"][moduleName].actions.initStore) {
          store_store.dispatch(`${moduleName}/initStore`);
        }
      }
    },

    initStore() {
      store_store.dispatch("loadModules");
    }

  },
  modules: modules["default"]
});
store_store.dispatch("initStore");
/* harmony default export */ var src_store = (store_store);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./src/router/routes.js

const routes = [{
  path: "/auth",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "c80b"))
}, {
  path: "/",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "2ee3")),
  // beforeEnter: authGuard,
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "fb63"))
  }, {
    name: "tuner",
    path: "/tools/tuner",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "5ce2")),
    meta: {
      src: "/dev/tuner",
      name: "Tuner"
    }
  }, {
    name: "spider",
    path: "/tools/spider",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "47ea")),
    meta: {
      src: "/dev/spider",
      name: "Spider Drills"
    }
  }, {
    name: "fretboard",
    path: "/tools/fretboard",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "932b")),
    meta: {
      src: "/dev/fretboard",
      name: "Fretboard"
    }
  }]
}, // Always leave this as last one,
// but you can also remove it
{
  path: "*",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "e51e"))
}];
/* harmony default export */ var router_routes = (routes);
// CONCATENATED MODULE: ./src/router/index.js



vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

/* harmony default export */ var src_router = (function
  /* { store, ssrContext } */
() {
  const Router = new vue_router_esm["a" /* default */]({
    scrollBehavior: () => ({
      x: 0,
      y: 0
    }),
    mode: "history",
    routes: router_routes,
    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: "hash",
    base: ""
  });
  return Router;
});
// CONCATENATED MODULE: ./.quasar/app.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/





/* harmony default export */ var _quasar_app = (async function () {
  // create store and router instances
  const store = typeof src_store === 'function' ? await src_store({
    Vue: vue_runtime_esm["a" /* default */]
  }) : src_store;
  const router = typeof src_router === 'function' ? await src_router({
    Vue: vue_runtime_esm["a" /* default */],
    store
  }) : src_router; // make router instance available in store

  store.$router = router; // Create the app instantiation Object.
  // Here we inject the router, store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    router,
    store,
    render: h => h(App)
  };
  app.el = '#q-app'; // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.

  return {
    app,
    store,
    router
  };
});
// CONCATENATED MODULE: ./src/boot/router-auth.js
;
 // "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files

/* harmony default export */ var router_auth = (({
  router
}) => {
  router.beforeEach((to, from, next) => {
    const key = "loggedIn";
    const now = new Date();
    let loggedIn = LocalStorage["a" /* default */].getItem(key); // console.log('logged: ', loggedIn);
    // // test to see if login expired

    if (loggedIn) {
      if (now.getTime() < (loggedIn === null || loggedIn === void 0 ? void 0 : loggedIn.expiry)) {
        next();
      } else {
        console.log("Expired login: sending to auth page");
        src_store.commit("auth/SET_LOGGED_IN", false);
        LocalStorage["a" /* default */].remove(key);
        next("/auth");
      }
    } else {
      if (to.path !== "/auth") {
        next("/auth");
      } else {
        next();
      }
    }
  });
});
// EXTERNAL MODULE: ./src/boot/firebase.js
var firebase = __webpack_require__("fc1b");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/boot/axios.js


vue_runtime_esm["a" /* default */].prototype.$axios = axios_default.a;
// CONCATENATED MODULE: ./.quasar/client-entry.js


/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



 // We load Quasar stylesheet file








vue_runtime_esm["a" /* default */].config.devtools = true;
vue_runtime_esm["a" /* default */].config.productionTip = false;
const publicPath = ``;

async function start() {
  const {
    app,
    store,
    router
  } = await _quasar_app();
  let hasRedirected = false;

  const redirect = url => {
    hasRedirected = true;
    const normalized = Object(url) === url ? router.resolve(url).route.fullPath : url;
    window.location.href = normalized;
  };

  const urlPath = window.location.href.replace(window.location.origin, '');
  const bootFiles = [router_auth, firebase["default"], /* Cannot get final name for export "default" in "./src/boot/axios.js" (known exports: , known reexports: ) */ undefined];

  for (let i = 0; hasRedirected === false && i < bootFiles.length; i++) {
    if (typeof bootFiles[i] !== 'function') {
      continue;
    }

    try {
      await bootFiles[i]({
        app,
        router,
        store,
        Vue: vue_runtime_esm["a" /* default */],
        ssrContext: null,
        redirect,
        urlPath,
        publicPath
      });
    } catch (err) {
      if (err && err.url) {
        window.location.href = err.url;
        return;
      }

      console.error('[Quasar] boot error:', err);
      return;
    }
  }

  if (hasRedirected === true) {
    return;
  }

  new vue_runtime_esm["a" /* default */](app);
}

start();

/***/ }),

/***/ "c7d4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5319");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quasar_src_plugins_Notify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2a19");
/* harmony import */ var quasar_src_components_spinner_QSpinnerGears_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cf57");
/* harmony import */ var boot_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fc1b");
/* harmony import */ var quasar_src_plugins_Loading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("f508");
/* harmony import */ var quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("18d6");

;

;
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    loggedIn: false
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.loggedIn = value;
    }

  },
  actions: {
    register_user({
      dispatch
    }, payload) {
      console.log("register", payload);
      boot_firebase__WEBPACK_IMPORTED_MODULE_3__[/* firebaseAuth */ "b"].createUserWithEmailAndPassword(payload.email, payload.password).then(userCredential => {
        // Signed in
        var user = userCredential.user;
        console.log("Registration Successful", user); // ...

        dispatch("login_user", payload);
      }).catch(error => {
        quasar_src_plugins_Notify_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].create({
          type: "negative",
          caption: error.code,
          message: error.message
        });
        console.error(error.code, error.message);
      });
    },

    login_user({
      commit,
      dispatch
    }, payload) {
      const dismiss = quasar_src_plugins_Notify_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].create({
        spinner: quasar_src_components_spinner_QSpinnerGears_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
        message: "Working..."
      });
      boot_firebase__WEBPACK_IMPORTED_MODULE_3__[/* firebaseAuth */ "b"].signInWithEmailAndPassword(payload.email, payload.password).then(userCredential => {
        // Signed in
        let _user = userCredential.user; // console.log("Login Successful", user);

        dispatch("setWithExpiry", "loggedIn");
        dismiss();
        this.$router.replace("/").catch(err => {});
      }).catch(error => {
        commit("SET_LOGGED_IN", false);
        dismiss();
        quasar_src_plugins_Notify_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].create({
          type: "negative",
          caption: error.code,
          message: error.message
        });
        console.error(error.code, error.message);
      });
    },

    logout_user({
      commit
    }) {
      console.log("logout");
      boot_firebase__WEBPACK_IMPORTED_MODULE_3__[/* firebaseAuth */ "b"].signOut().then(() => {
        commit("SET_LOGGED_IN", false);
        this.$router.push("/auth").catch(err => {});
        quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].remove("loggedIn");
      });
    },

    setWithExpiry(ctx, key) {
      const now = new Date();
      const oneday = 60 * 60 * 24 * 1000; //(milliseconds)

      const item = {
        expiry: now.getTime() + oneday
      };
      quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].set(key, item);
    },

    handleAuthStateChange({
      commit
    }, value) {
      boot_firebase__WEBPACK_IMPORTED_MODULE_3__[/* firebaseAuth */ "b"].onAuthStateChanged(user => {
        quasar_src_plugins_Loading_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].hide();

        if (user) {
          // console.log('logged in', user)
          commit("SET_LOGGED_IN", true);
          this.$router.push("/").catch(err => {});
        } else {
          commit("SET_LOGGED_IN", false);
          quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].remove("loggedIn");
          this.$router.replace("/auth").catch(err => {});
        } // console.log('auth state change', typeof user === Object ? 'logged in': 'logged out');

      });
    }

  },
  getters: {}
});

/***/ }),

/***/ "d307":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth.js": "c7d4",
	"./index.js": "2a74"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "d307";

/***/ }),

/***/ "f30e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fc1b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseAuth; });
/* unused harmony export firebaseDB */
/* unused harmony export firebaseStore */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("260b");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ea7b");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("66ce");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("e71f");




const firebaseConfig = {
  apiKey: "AIzaSyDRpJ4ioTTxDqO2JcdIB0HEIEKcgAB7cTI",
  authDomain: "txba-proplayerv8.firebaseapp.com",
  projectId: "txba-proplayerv8",
  storageBucket: "txba-proplayerv8.appspot.com",
  messagingSenderId: "842822199400",
  appId: "1:842822199400:web:6e2de8930aa880728d73dd"
};
let FBApp = firebase_app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].initializeApp(firebaseConfig);
let firebaseAuth = FBApp.auth();
let firebaseDB = FBApp.database();
let firebaseStore = FBApp.firestore();


/***/ })

/******/ });
//# sourceMappingURL=app.6b6174a9.js.map