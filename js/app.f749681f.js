/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		var prefetchChunks = data[3] || [];
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
/******/ 		deferredPrefetch.push.apply(deferredPrefetch, prefetchChunks);
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
/******/ 		if(deferredModules.length === 0) {
/******/ 			// chunk prefetching for javascript
/******/ 			deferredPrefetch.forEach(function(chunkId) {
/******/ 				if(installedChunks[chunkId] === undefined) {
/******/ 					installedChunks[chunkId] = null;
/******/ 					var link = document.createElement('link');
/******/
/******/ 					if (__webpack_require__.nc) {
/******/ 						link.setAttribute("nonce", __webpack_require__.nc);
/******/ 					}
/******/ 					link.rel = "prefetch";
/******/ 					link.as = "script";
/******/ 					link.href = jsonpScriptSrc(chunkId);
/******/ 					document.head.appendChild(link);
/******/ 				}
/******/ 			});
/******/ 			deferredPrefetch.length = 0;
/******/ 		}
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
/******/ 	var deferredModules = [], deferredPrefetch = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"2":"browser","3":"watch-player","4":"watch-sidebar"}[chunkId]||chunkId) + "." + {"2":"db9f5f84","3":"f37549d0","4":"3ad1199b","5":"9cb9eb8c","6":"0c9f1253","7":"0263afa2","8":"5c4ee76a","9":"64ff9210","10":"56dded51","11":"925d2953","12":"da8c8821","13":"c7b3a9bf","14":"abb56f65","15":"2ea28c4b","16":"673e2d4a","17":"6ed12edd","18":"f7132bdf","19":"a1d506c1","20":"459db58c","21":"889009ff","22":"8742d6b2"}[chunkId] + ".js"
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
/******/ 		var cssChunks = {"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({"2":"browser","3":"watch-player","4":"watch-sidebar"}[chunkId]||chunkId) + "." + {"2":"b66dd300","3":"a8834ceb","4":"c0160071","5":"f3ae3c0d","6":"88d9ec2e","7":"69d59603","8":"607ded7d","9":"384f3d37","10":"bcd75b27","11":"27f5e251","12":"471ba56f","13":"471ba56f","14":"471ba56f","15":"1436b024","16":"354e6a5b","17":"31d6cfe0","18":"31d6cfe0","19":"31d6cfe0","20":"31d6cfe0","21":"31d6cfe0","22":"31d6cfe0"}[chunkId] + ".css";
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
/******/
/******/ 		// chunk preloadng for javascript
/******/
/******/ 		var chunkPreloadMap = {
/******/ 			"4": [
/******/ 				0,
/******/ 				12
/******/ 			],
/******/ 			"6": [
/******/ 				0,
/******/ 				14
/******/ 			],
/******/ 			"8": [
/******/ 				0,
/******/ 				13
/******/ 			]
/******/ 		};
/******/
/******/ 		var chunkPreloadData = chunkPreloadMap[chunkId];
/******/ 		if(chunkPreloadData) {
/******/ 			chunkPreloadData.forEach(function(chunkId) {
/******/ 				if(installedChunks[chunkId] === undefined) {
/******/ 					installedChunks[chunkId] = null;
/******/ 					var link = document.createElement('link');
/******/
/******/ 					link.charset = 'utf-8';
/******/ 					if (__webpack_require__.nc) {
/******/ 						link.setAttribute("nonce", __webpack_require__.nc);
/******/ 					}
/******/ 					link.rel = "preload";
/******/ 					link.as = "script";
/******/ 					link.href = jsonpScriptSrc(chunkId);
/******/ 					document.head.appendChild(link);
/******/ 				}
/******/ 			});
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

/***/ "10e2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2b0e");


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    sidebarTabs: [],
    favorites: [],
    notifications: null
  },
  mutations: {
    RESET_SIDEBAR(ctx) {
      // console.log(`Resetting Sidebar to default: ${JSON.stringify(ctx)}`);
      ctx.sidebarTabs = [];
    },

    SET_FAVS(ctx, favs) {
      // console.log("SettingFAVS:", favs);
      vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].set(ctx, "favorites", favs); // console.log('Set favs', ctx.favorites)
    },

    SET_NOTIFICATIONS(ctx, notes) {
      // console.log("SettingNotes:", notes);
      if (notes) ctx.notifications = notes;
    },

    ADD_SB_TABS(ctx, tabs) {
      // console.log(`Before adding tab: \n${JSON.stringify(ctx.sidebarTabs, null, 2)}`);
      if (tabs) {
        tabs.forEach((tab, idx) => {
          // console.log(`InspTab ${JSON.stringify(tab)}`);
          const tabIdx = ctx.sidebarTabs.findIndex(x => x.name === tab.name); // console.log(`Found: ${Boolean(tabIdx > -1)}`);

          if (tabIdx == -1) {
            tab.id = idx; // console.log(`adding new: ${JSON.stringify(tab)}`);

            ctx.sidebarTabs.unshift(tab); // console.log(`After adding tab: \n${JSON.stringify(ctx.sidebarTabs, null, 2)}`);

            console.log();
          }
        }, ctx);
      }
    },

    DELETE_SIDEBAR_TABS(state, arr_str_name) {
      // console.log(`Before Removing tab: \n${JSON.stringify(state.sidebarTabs, null, 2)}`);
      if (Array.isArray(arr_str_name)) {
        for (let i = 0; i < arr_str_name.length; i++) {
          let el = arr_str_name[i];
          let filterTabs = state.sidebarTabs.filter(tab => tab.name !== el); // console.log(`filtered ${el}`);

          vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].set(state, "sidebarTabs", filterTabs);
        }
      } else {
        let filterTabs = state.sidebarTabs.filter(tab => tab.name !== arr_str_name); // console.log("filtered", filterTabs);

        vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].set(state, "sidebarTabs", filterTabs);
      } // console.log(`After Removing tab: \n${JSON.stringify(state.sidebarTabs, null, 2)}`);

    },

    FAVORITE(state, objFav) {
      state.favorites.push(objFav);
    },

    UNFAVORITE(state, objFav) {
      // console.log(state.favorites);
      let filteredFavs = state.favorites.filter(el => el.id !== objFav.id); // console.log("filtered", filteredFavs);

      vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].set(state, "favorites", filteredFavs);
      return false;
    }

  },
  actions: {
    resetSideBar(ctx) {
      ctx.commit("RESET_SIDEBAR", ctx);
      ctx.dispatch("setDefaultTabs");
    },

    setDefaultTabs(ctx) {
      const tabs = [{
        name: "Favorites",
        componentName: "FavList",
        icon: "favorite",
        iconOnly: true,
        cmp: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, "b5a2"))
      }]; // console.log(`Adding Def Tab: ${JSON.stringify(tabs)}`);

      return ctx.commit("ADD_SB_TABS", tabs);
    },

    addSidebarTabs: {
      root: true,

      handler({
        commit
      }, tabs) {
        // console.log(`ACT_ADD: ${JSON.stringify(tabs)}`);
        return commit("ADD_SB_TABS", tabs || []);
      }

    },
    removeSidebarTabs: {
      root: true,

      handler({
        commit
      }, arr_str_name) {
        commit("DELETE_SIDEBAR_TABS", arr_str_name);
      }

    },

    fetchFavoritesData(ctx) {
      return ctx.rootState.TXBA_UTILS.getFavs();
    },

    fetchNotificationData(ctx) {
      return ctx.rootState.TXBA_UTILS.getNotification();
    },

    async fetchFavorites(ctx) {
      await ctx.dispatch("fetchFavoritesData").then(data => ctx.commit("SET_FAVS", data));
    },

    async fetchNotifications(ctx) {
      await ctx.dispatch("fetchNotificationData").then(data => ctx.commit("SET_NOTIFICATIONS", data));
    },

    toggleFavorite({
      commit,
      getters
    }, fav) {
      const isFav = getters.isFavorite(fav);
      console.log("isFav", isFav, fav);

      if (isFav) {
        console.log("unfav", fav);
        commit("UNFAVORITE", fav);
      } else {
        console.log("fav", fav);
        commit("FAVORITE", fav);
      }
    },

    addFavorite({
      commit
    }, fav) {
      commit("FAVORITE", fav);
    },

    removeFavorite({
      commit
    }, fav) {
      commit("UNFAVORITE", fav);
    },

    initStore: ctx => {
      ctx.dispatch("fetchFavorites");
      ctx.dispatch("fetchNotifications");
      ctx.dispatch("resetSideBar");
    }
  },
  getters: {
    getRequest({
      state,
      commit,
      rootState,
      rootGetters
    }) {
      // console.dir( state )
      // console.dir( commit )
      // console.dir( rootState )
      // console.dir( rootGetters )
      return state;
    },

    getFavsByType: state => {
      let collector = {};
      state.favorites.forEach(el => {
        if (Object.keys(collector).includes(el.src)) {
          collector[el.src].push(el);
        } else {
          collector[el.src] = [el];
        }
      }); // console.log(collector);

      return collector;
    },
    isFavorite: state => favorite => {
      // favorite = JSON.parse(favorite);
      return state.favorites.filter(fav => fav.id === favorite.id).length > 0;
    },
    getAnnouncements: ctx => {
      var _ctx$notifications;

      return ((_ctx$notifications = ctx.notifications) === null || _ctx$notifications === void 0 ? void 0 : _ctx$notifications.announcements) || [];
    },
    getUpdates: ctx => {
      var _ctx$notifications2;

      return ((_ctx$notifications2 = ctx.notifications) === null || _ctx$notifications2 === void 0 ? void 0 : _ctx$notifications2.updates) || [];
    },
    loaded: ctx => {
      var _ctx$notifications3, _ctx$notifications4;

      return ((_ctx$notifications3 = ctx.notifications) === null || _ctx$notifications3 === void 0 ? void 0 : _ctx$notifications3.announcements.length) > 0 || ((_ctx$notifications4 = ctx.notifications) === null || _ctx$notifications4 === void 0 ? void 0 : _ctx$notifications4.updates) || false;
    }
  }
});

/***/ }),

/***/ "27ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
// import Vue from "vue";

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    bacon: null
  },
  mutations: {
    SET_BACON_DATA(ctx, data) {
      ctx.bacon = data;
    }

  },
  actions: {
    async fetchBaconData() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://baconipsum.com/api/?callback=?", {
        type: "meat-and-filler",
        "start-with-lorem": "1",
        paras: "10"
      });
    },

    async fetchBacon(ctx) {
      return ctx.dispatch("fetchBaconData").then(response => {
        const newData = response.data.map((info, idx) => {
          return {
            id: "bit_" + idx,
            title: info.split(" ").splice(0, 3).join(" ").toUpperCase(),
            data: info.split(" ").splice(3).join(" ")
          };
        }); // console.log("obj", newData);

        ctx.commit("SET_BACON_DATA", newData);
        return newData;
      });
    },

    initStore: ctx => ctx.dispatch("fetchBacon")
  },
  getters: {
    getBacon: state => state.bacon,

    getSliceBacon(state) {
      var _state$bacon;

      if ((_state$bacon = state.bacon) !== null && _state$bacon !== void 0 && _state$bacon.length) return state.bacon[Math.floor(Math.random() * state.bacon.length)];
      return "";
    }

  }
});

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

  methods: { ...Object(vuex_esm["c" /* mapActions */])('auth', ['handleAuthStateChange'])
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

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__("9861");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/middleware/txba_helpers.js






const cheerio = __webpack_require__("1431");

class txba_helpers_TXBA_Utilities {
  constructor() {
    this.baseURL = "https://texasbluesalley.com/proplayer74-tony/";
    this.default_entries_slug = "--ajax-browser-default-entries";
    this.notification_slug = "--ajax-load-default-page";
    this.favorites_slug = "--ajax-load-favorites-list";
    this.filter_slug = "--ajax-browser-filters";
    this.package_slug = "--ajax-get-package-info";
    this.search_slug = "--ajax-browser-search-entries";
    this.member_loops_slug = "--ajax-get-segment-user-loops";
    this.segment_slug = "--ajax-get-segment-info";
    this.load_media_slug = "--ajax-load-media";
    this.load_vimeo_slug = "/--ajax-load-media/vimeo/";
    this.load_comments_slug = "/--ajax-load-comments/";
    this.slug_code = {
      pro_player_packages: "wcm9fcGxheWVyX3BhY2thZ2VzXC8iLCJjaGFubmVsIjoicHJvX3BsYXllcl9wYWNrYWdlcyJ9",
      free_lesson_friday: "mcmVlX2xlc3Nvbl9mcmlkYXlcLyIsImNoYW5uZWwiOiJmcmVlX2xlc3Nvbl9mcmlkYXkifQ",
      tone_tuesday: "0b25lX3R1ZXNkYXlcLyIsImNoYW5uZWwiOiJ0b25lX3R1ZXNkYXkifQ",
      performances: "wZXJmb3JtYW5jZXNcLyIsImNoYW5uZWwiOiJwZXJmb3JtYW5jZXMifQ",
      backing_tracks: "iYWNraW5nX3RyYWNrc1wvIiwiY2hhbm5lbCI6ImJhY2tpbmdfdHJhY2tzIn0",
      youtube_videos: "5b3V0dWJlX3ZpZGVvc1wvIiwiY2hhbm5lbCI6InlvdXR1YmVfdmlkZW9zIn0",
      refiner: "mcmVlX2xlc3Nvbl9mcmlkYXlcLyJ9"
    }; //mcmVlX2xlc3Nvbl9mcmlkYXlcLyIsImNoYW5uZWwiOiJmcmVlX2xlc3Nvbl9mcmlkYXki LCJ0YWdfaWQ6NiI6Ijg2In0;

    this.favs = [];
  }

  async getAsyncData(slug, callback, useBase = true) {
    if (slug) {
      console.log(slug, callback === null || callback === void 0 ? void 0 : callback.name, useBase);
      const url = `${useBase ? this.baseURL : ''}${slug}`;
      return await axios_default.a.get(url).then(async response => await response.data).then(data => callback ? callback.call(this, data) : data).catch(err => {
        // console.log(err);
        return err;
      });
    }

    return null;
  }

  async postAsyncData(params) {
    return axios_default()({
      method: "post",
      url: "https://texasbluesalley.com/",
      data: new URLSearchParams(params),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(response => {
      // console.log("response", response);
      return response;
    }).catch(function (response) {
      console.log(response);
      return response;
    });
  }

  async getFavs(id) {
    let url = `${this.favorites_slug}/${id ? id : ""}`;
    return this.getAsyncData(url, this.parseFavoriteHtml);
  }

  getNotification() {
    return this.getAsyncData(this.notification_slug, this.parseNotificationHtml);
  }

  getMemberLoops(segID) {
    return this.getAsyncData(`${this.member_loops_slug}/${segID}`);
  }

  getUserSegment(segID) {
    return this.getAsyncData(`${this.segment_slug}/${segID}`);
  }

  async getDefaultSearchEntries() {
    return this.getAsyncData(this.default_entries_slug, this.parseSearchResults);
  }

  async getSearchEntries(category, auth, url) {
    category = category === "courses" ? "pro_player_packages" : category;
    let endOfAuthString = "nRyaWVzXC9";
    let trimPoint = -1 * (auth.length - (auth.indexOf(endOfAuthString) + endOfAuthString.length));
    auth = auth.slice(0, trimPoint);
    let slug = url ? url : `${this.search_slug}/${category}/${auth}${this.slug_code[category]}`;
    return this.getAsyncData(slug).then(data => this.parseSearchResults(data));
  }

  async getSearchFiltersByCategory(code) {
    return this.getAsyncData(`${this.filter_slug}/${code}`, this.parseCriteria);
  }

  async getPackage(ID) {
    // console.log('id', ID)
    if (!ID) return ID;
    const response = await axios_default.a.get(`${this.baseURL}${this.package_slug}/${ID}`);
    let pkg = await await response.data;
    pkg.playSections = this.parseSections(pkg.sections, pkg.packageImage); // console.log("pack", pkg);

    return pkg;
  }

  async getSegment(ID) {
    let slug = `${this.segment_slug}/${ID}`; // console.log('getSeg', slug)

    return this.getAsyncData(slug);
  }

  async getComments(packageID, segmentID) {
    const slug = `${this.load_comments_slug}/?package_id=${packageID}&segment_id=${segmentID}&author=no`;
    return this.getAsyncData(slug, this.parseCommentHtml);
    return this.parseCommentHtml(this.getCommentString(1));
  }

  async loadMedia(slug, info) {
    const html = await this.getAsyncData(`${slug}`);
    const $ = cheerio.load(html);
    const text = $("script").html(); // return html

    const matchX = text.match(/var videoData = (.*);/);
    if (!matchX) return info;
    let strVidData = matchX[1]; // replace single with double quotes

    strVidData = strVidData.replace(/'/g, '"'); //match any variables (alphanumeric) that end with a colon :, but will ingore any matches that are found between quotes (i.e. data string values)

    strVidData = strVidData.replace(/([^"]+)|("[^"]+")/g, function ($0, $1, $2) {
      if ($1) {
        // Replace property names with quotes
        return $1.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
      } else {
        return $2;
      }
    });
    strVidData = strVidData.replace("},]", "}]"); // console.dir("loadingMedia", JSON.parse(strVidData), info);

    var objReturn = JSON.parse(strVidData); // if (typeof(info.data) !== 'undefined') objReturn = Object.assign({}, info, objReturn, info)

    return objReturn;
  }

  parseCommentHtml(strComments, lvl = null) {
    const $ = cheerio.load(strComments); // console.log("cHTML", $("body").html());

    lvl = $(".cmts-list > #no-questions").length > 0;
    var objComment = this.parseComments(strComments);
    console.log("aft parse", objComment);
    return objComment.list ? objComment : strComments;
  }

  parseComments(str) {
    const $ = cheerio.load(str, {
      withDomLvl1: true,
      normalizeWhitespace: true
    });
    var lvl = 0;
    var self = this;
    var list = [];
    var notice = $("strong").html() || "NO SCREENNAME";

    if ($("#no-questions").length === 0) {
      // console.log("objlist", objList);
      // loop all levels
      do {
        var objList = $(`.level-${lvl} > .cmt-inner`);
        console.log("generating level-" + lvl);
        objList.each(function (idx, itm) {
          list = self.assembleCommentObject($(itm), list); // console.log(lvl, idx, $($(itm).closest("li")).html());
        });
        lvl++; // console.log("testing level-" + lvl);

        var next = $(`.level-${lvl} > .cmt-inner`).length > 0; // var next = lvl > -1;
        // console.log("next", next, lvl);
      } while (next);
    }

    return {
      notice: notice,
      // list: list
      // list: this.groupByReplyDate(list, "day")
      list: this.groupArrayOfObjects(list, "day")
    };
  }

  groupByReplyDate(list) {
    for (var i = 0; list.length; i++) {
      list[i].children.sort(function (a, b) {
        return a.date - b.date;
      });
    }

    return list;
  }

  assembleCommentObject(itm, list) {
    const $ = cheerio; // get parent data info

    var objItm = Object.assign({}, $(itm).closest(".cmt-wrapper").data());
    objItm.epoch = objItm.date;
    objItm.children = [];
    const dateFmts = this.getDateFormats(objItm.epoch);
    objItm.text = [$(itm).find(".cmt-text").text().trim().replace(/\s{2,40}/g, " ")];
    objItm.user = $(itm).find(".author-name").text().trim(); // .replace(/\s{2,40}/g, " ");

    objItm.relativeDate = $(itm).find(".cmt-date").text().trim(); // .replace(/\s{2,40}/g, " ");

    objItm.date = dateFmts.date;
    objItm.day = dateFmts.day;
    objItm.time = dateFmts.time; // console.log("lvl", objItm.level);

    if (objItm.level > 0) {
      // find parent and add to parent's children
      const found = list.find(o => o.commentId === objItm.parentId);
      found.children.push(objItm); // console.log(`parent found`, found);
    } else {
      list.push(objItm);
    }

    return list;
  }

  parseSections(sections, poster) {
    const newSections = [];
    sections.forEach(section => {
      // remove unnecessary segment entries (= "")
      const testSegments = section.segments.map(segment => {
        return Object.entries(segment).reduce((relevant, [k, v]) => {
          if (v !== "") relevant[k] = v;
          return relevant;
        }, {});
      }); // filter segs without Filename or Code in the keys

      const segments = testSegments.filter(segment => Object.keys(segment).some(function (k) {
        return ~k.indexOf("Filename") || ~k.indexOf("Code");
      }));
      const newSection = {
        sectionTitle: section.sectionTitle,
        sectionID: section.sectionID,
        segments: segments.map(seg => {
          let segData = this.parseSegmentData(seg);
          let tmp = {
            title: seg.segmentTitle,
            id: seg.segmentID,
            poster: poster
          };
          let whole = Object.assign({}, tmp, segData); // console.log('compare', tmp, whole)

          return whole;
        })
      };
      newSections.push(newSection);
    });
    return newSections;
  }

  parseSegmentData(seg) {
    let type = {};
    if (this.objectHaveKeyLike(seg, "Vimeo")) type = {
      "webkit-playsinline": true,
      playsinline: true,
      allowfullscreen: true,
      type: "vimeo",
      sources: [{
        type: "vimeo",
        src: seg.segmentVimeoCode
      }],
      color: "accent"
    };
    if (this.objectHaveKeyLike(seg, "YouTube")) type = {
      sources: [{
        type: "video/youtube",
        src: seg.segmentYouTubeCode //&html5=true`,

      }],
      type: "youtube",
      "webkit-playsinline": true,
      playsinline: true,
      preload: "none",
      color: "red"
    };
    if (this.objectHaveKeyLike(seg, "MP3")) type = {
      controls: true,
      type: "audio",
      playsinline: true,
      sources: [{
        type: "audio",
        src: `https://cdn.texasbluesalley.com/audio/${seg.segmentMP3Filename}`
      }],
      color: "teal"
    };
    if (this.objectHaveKeyLike(seg, "SoundSlice")) type = {
      type: "soundslice",
      sources: [{
        src: seg.segmentSoundSliceCode,
        type: "soundslice"
      }],
      color: "blue"
    };
    if (this.objectHaveKeyLike(seg, "PDF")) type = {
      sources: [{
        src: `https://texasbluesalley.com/includes/pdfjs/web/viewer.html`,
        //?file=/assets/pdfs/${seg.segmentPDFCode}`,
        type: "pdf"
      }],
      type: "pdf",
      color: "yellow"
    };
    if (this.objectHaveKeyLike(seg, "GPX")) type = {
      type: "pdf",
      sources: [{
        type: "gpx",
        src: seg.segmentGPXFilename
      }],
      color: "purple"
    };
    type.to = seg.segmentID;
    return type;
  }

  parseURL(clickString) {
    clickString = clickString.slice(clickString.indexOf("https"), clickString.indexOf("')")); // console.log(clickString);

    return clickString;
  }

  parseIdx(clickString) {
    /**
     *  purpose: Parse packageID from html source (ex. thePlayer.openUnknownPackageType({ 'packageID': '9009', 'type': 'entry'}, true); return false;)
     */
    clickString = clickString.replace(/'/g, '"');
    const pkg = JSON.parse(clickString.match(/\{([^}]+)\}/g));
    pkg.packageID = parseInt(pkg.packageID);
    return pkg;
  }

  parseFavoriteHtml(html) {
    const $ = cheerio.load(html); // const favHtml = $(".accordion-title");

    const favHtml = $("#favoritesListAccordion"); // console.log(
    //   favHtml.length > 0 ? "Loading Live Favs" : "Loading Mock Fav Data"
    // );

    return this.parseFavoriteData(favHtml.length > 0 ? favHtml : this.fakeFavHTML());
  }

  parseFavoriteData(group) {
    const html = group.html(); // console.log("Favshtml", group);

    const collection = [];
    const $ = cheerio.load(html);
    group.each((idx, e) => {
      let title = $(e).text().split(" ")[0].trim(); // this.favs[title] = [];

      let items = $(e).parent().find(".sidebar-list li");
      items.each((index, val) => {
        // console.log("val", $(val).find(".sidebar-list-item-link").text())
        const itm = {
          id: $(val).find("form").data("id"),
          title: $(val).find(".sidebar-list-item-link").text(),
          src: title //subtitle: $(e).find(".notification-body p").text(),

        }; // console.log("item", itm);

        collection.push({ ...itm
        });
      });
    });
    return collection;
  }

  parseNotificationHtml(html) {
    const $ = cheerio.load(html);
    let announcements = $("#announcements li");
    let updates = $("#course-updates li.notification");
    announcements = announcements.length ? this.parseNotificationData(announcements) : [];
    updates = updates.length ? this.parseNotificationData(updates) : []; // console.log("notes", announcements, updates);

    return {
      announcements: announcements,
      updates: updates
    };
  }

  parseNotificationData(group) {
    // console.log(group);
    const html = group.html(); // console.log("html", html);

    const $ = cheerio.load(html);
    let collection = [];
    group.each((idx, e) => {
      const itm = {
        id: idx,
        title: $(e).find(".notification-title span").text(),
        subtitle: $(e).find(".notification-body p").text(),
        actionText: $(e).find(".notification-body a").text(),
        action: $(e).find(".notification-body a").attr("href")
      };
      collection.push({ ...itm
      });
    }); // console.log("col", collection);

    return collection;
  }

  async parseSearchResults(html) {
    // if (html) console.info("searchHTML", html);
    const $ = cheerio.load(html);
    const defaultSearch = $(".browser-result-wrapper>h5").length > 0; // console.log("defaultSearch", defaultSearch);

    return {
      filters: this.parseSearchFilters($(".browser-result-wrapper"), defaultSearch),
      pages: this.parsePagination($("div[id$=WrapperTop] ul li"))
    };
  }

  parsePagination(group) {
    const html = group.html();
    if (!html) return []; // console.log("html", html);

    const $ = cheerio.load(html);
    let collection = [];
    group.each((idx, e) => {
      const lnk = $(e).find("a");
      collection.push({
        url: this.parseURL(lnk.attr("onclick")),
        class: lnk.attr("class"),
        content: lnk.text(),
        icon: $(e).find("a > i").attr("class")
      });
    }); // console.log("col", collection);

    return collection;
  }

  parseSearchFilters(group, defaultSearch = false) {
    // console.trace("gfi:group", group)
    let collection = defaultSearch ? {} : [];
    let section = "";
    const html = group.html();

    if (group.length < 1) {
      throw "No HTML to parse";
    } // console.info("html", html)


    const $ = cheerio.load(html);
    group.each((idx, e) => {
      if (defaultSearch && typeof e.attribs.id === "undefined") {
        section = $(e).find("h5").text();
        collection[section] = [];
      } else {
        const pkg = this.parseIdx($(e).find(".browser-result-image a").attr("onclick")); // console.log('pkg', pkg)

        const itm = {
          id: pkg.packageID,
          type: pkg.type,
          src: pkg.type === "entry" ? "Courses" : pkg.type,
          avatar: $(e).find("img").attr("src"),
          title: $(e).find(".browser-result-title a").text().trim(),
          subtitle: $(e).find(".browser-result-description").text().trim(),
          data: $(e).find(".browser-result-meta").html().trim()
        }; // console.log("item",itm);

        if (defaultSearch) {
          collection[section].push({ ...itm
          });
        } else {
          collection.push({ ...itm
          });
        }
      }
    }); // console.log("col", collection);

    return collection;
  }

  parseCriteria(html) {
    const $ = cheerio.load(html);
    let hiddenFields = this.parseHiddenData($(".hiddenFields input")); // console.log("hiddenFields", hiddenFields);

    let funnelList = this.parseFunnels($(".filter-list")); // console.log(funnelList)

    return {
      auth: hiddenFields,
      funnels: funnelList.collection,
      status: funnelList.status
    };
  }

  parseHiddenData(group) {
    // console.log("grp", group)
    const $ = cheerio.load(group.html());
    const collection = {};
    group.each((idx, e) => {
      collection[$(e).attr("name")] = $(e).attr("value");
    });
    return collection;
  }

  parseFunnels(group) {
    // console.log('group', group)
    const $ = cheerio.load(group.html());
    const status = {};
    const collection = {};
    group.each((idx, e) => {
      let section = $(e).data(); // console.log(`Section: ${JSON.stringify(section)}`)

      collection[section.sectionId] = section;
      collection[section.sectionId]["tags"] = [];
      collection[section.sectionId]["chips"] = [];
      $(e).find(".filter-checkbox").each((i, itm) => {
        const syncName = `${section.sectionId}__${itm.attribs.id}`;
        const {
          chips,
          tags,
          ...rest
        } = section; // console.log(rest)

        const chip = {
          sync: syncName,
          id: itm.attribs.id,
          name: itm.attribs.name,
          value: itm.attribs.value,
          group: rest,
          text: $(itm).next().text()
        };
        collection[section.sectionId].chips.push(chip);
        collection[section.sectionId].tags.push(chip.text);
        status[chip.sync] = false;
      });
    });
    return {
      status: status,
      collection: collection
    };
  }

  isFav(packageID) {
    var found = false;
    var foundException = {};

    try {
      Object.entries(this.favs).forEach(key => {
        const result = key[1].filter(({
          id
        }) => id === packageID);
        found = typeof result[0] === "object";
        if (found) throw foundException;
      });
    } catch (error) {
      if (error !== foundException) throw foundException;
    }

    return found;
  }

  objectHaveKeyLike(obj, testString) {
    return Object.keys(obj).some(key => {
      return ~key.indexOf(testString);
    });
  }

  groupArrayOfObjects(list, key) {
    return list.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  epochToHuman(epoch, fmt) {
    var returnDate,
        myDate = new Date(Number(epoch) * 1000);

    switch (fmt) {
      case "day":
        returnDate = myDate.toLocaleDateString();
        break;

      case "time":
        returnDate = myDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        });
        break;

      default:
        returnDate = myDate.toGMTString();
    }

    return returnDate;
  }

  getDateFormats(epoch) {
    return {
      date: this.epochToHuman(epoch),
      day: this.epochToHuman(epoch, "day"),
      time: this.epochToHuman(epoch, "time")
    };
  }

  fakeFavHTML() {
    //#region
    const favhtml = `					
							



	<ul class="accordion sidebar-accordion" id="favoritesListAccordion" data-accordion data-allow-all-closed="true" data-multi-expand="false">

			
					
					<li class="accordion-item is-active" data-accordion-item>
						<a class="accordion-title">Courses <sup>9</sup></a>
						<div class="accordion-content" data-tab-content>
							<ul class="sidebar-list">
				
							
			
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('4253', true); return false;">Texas Blues Speed Workshop - Level 1</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-4253" data-id="4253" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413275" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>
				
			
				
							
			
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('7766', true); return false;">Clapton&#8217;s Influence: Worried Mind</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-7766" data-id="7766" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413276" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>
				
			
				
							
			
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('4302', true); return false;">5 Boxes Essential Licks (2nd Edition)</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-4302" data-id="4302" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413277" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>
				
			
				
							
			
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('4272', true); return false;">Thanksgiving Ballad 2014</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-4272" data-id="4272" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413278" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>
				
			
				
							
			
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('5285', true); return false;">Clapton&#8217;s Influence: Crossroad Blues w/Bonus</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-5285" data-id="5285" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413279" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>
				
			
				
							
			
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('4304', true); return false;">5 Essential Blues Boxes</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-4304" data-id="4304" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413280" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>
				
			
				
							
			
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('4250', true); return false;">Essential Fretboard</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-4250" data-id="4250" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413281" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>
				
			
				
							
			
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('4300', true); return false;">The Grip</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-4300" data-id="4300" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413282" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>
				
			
				
							
			
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('4252', true); return false;">Texas Blues Speed Workshop - Level 2</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-4252" data-id="4252" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413283" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>
					
							</ul>
						</div>
					</li>
				
			
			
			
			
			
					
					<li class="accordion-item " data-accordion-item>
						<a class="accordion-title">Imported	 <sup>42</sup></a>
						<div class="accordion-content" data-tab-content>
							<ul class="sidebar-list">
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('10818', true); return false;">Lenny Kravitz - Always On The Run (Guitar Tutorial)</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-10818" data-id="10818" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413284" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('10971', true); return false;">Unplugged Acoustic Blues Guitar Lesson (Part 2) - Play the blues by yourself on guitar - EP305</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-10971" data-id="10971" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413285" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('10999', true); return false;">How to play - Tito &amp; Tarantula - After Dark, easy guitar lesson (FULL+SOLO)</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-10999" data-id="10999" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413286" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('11616', true); return false;">How To Solo Over 'Little Wing': 4 Levels - Beginner to Advanced Guitar</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-11616" data-id="11616" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413287" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('11136', true); return false;">Just The Two Of Us â© 3 Levels - 001</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-11136" data-id="11136" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413288" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('11141', true); return false;">EASY GUITAR LESSON | ENTER SANDMAN by Metallica</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-11141" data-id="11141" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413289" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('9884', true); return false;">It's Easy to Play Fast | 10 Speedy but Simple Licks | Guitar Lesson</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-9884" data-id="9884" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413290" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('9768', true); return false;">Acoustic Blues Guitar Lesson - 1 Bar Licks And Phrases With Chords For Beginners Or Intermediates</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-9768" data-id="9768" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413291" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('9787', true); return false;">Jamming Alone - Using 2 Bar Phrases With The Slow Blues In E Groove (Part 2 Of A Series)</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-9787" data-id="9787" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413292" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('9508', true); return false;">Tennessee Whiskey - Guitar Lesson -Chris Stapleton - Intro/Rhythm/Solo w/tabs</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-9508" data-id="9508" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413293" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('9509', true); return false;">Tennessee Whiskey Guitar Lesson - Chris Stapelton</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-9509" data-id="9509" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413294" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('9271', true); return false;">Let It Be Guitar Tutorial - The Beatles Guitar Lesson |Easy Chords + Solo + Guitar Cover|</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-9271" data-id="9271" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413295" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('8511', true); return false;">Slow Blues Jam | Sexy Guitar Backing Track</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-8511" data-id="8511" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413296" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('8513', true); return false;">Eric Clapton Style Acoustic Blues Guitar Lesson !</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-8513" data-id="8513" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413297" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('8552', true); return false;">How To Play Breakdown (and then...) by Rowland S Howard - Guitar Lesson</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-8552" data-id="8552" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413298" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('8732', true); return false;">Acoustic Blues Guitar Lesson - Open Positon E Run and Licks</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-8732" data-id="8732" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413299" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('8875', true); return false;">How to play Smoke On The Water by Deep Purple (Rock Guitar Lesson SB-311)</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-8875" data-id="8875" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413300" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('8955', true); return false;">Stevie Ray Vaughn - Life By The Drop (Opening Lick) Guitar Lesson - Acoustic Blues</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-8955" data-id="8955" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413301" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('9118', true); return false;">How to Play like Chicago Blues Legend Magic Sam</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-9118" data-id="9118" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413302" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('8054', true); return false;">Sleepwalk - Bass cover</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-8054" data-id="8054" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413303" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('7949', true); return false;">Get Deep with some Funky Texas Style Acoustic Blues | Tuesday Blues 126</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-7949" data-id="7949" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413304" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('7953', true); return false;">How To Play Billy Strings' Dust In A Baggie - Advanced Bluegrass Guitar Lesson</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-7953" data-id="7953" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413305" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('7959', true); return false;">Sleepwalk Bass Tutorial</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-7959" data-id="7959" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413306" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('7863', true); return false;">Wish You Were Here Guitar Lesson - Pink Floyd Complete Guitar Tutorial |Chords + Solos + TAB|</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-7863" data-id="7863" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413307" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6387', true); return false;">how to play &quot;Over the Hills and Far Away&quot; on guitar by &quot;Led Zeppelin&quot; - acoustic guitar lesson</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6387" data-id="6387" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413308" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('7147', true); return false;">The Black Keys Thickfreakness Guitar Lesson</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-7147" data-id="7147" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413309" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('7155', true); return false;">30 Hot Rod Guitar Licks - #4 Hot Rod - Bill Kirchen</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-7155" data-id="7155" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413310" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6964', true); return false;">Man of Constant Sorrow | Guitar Lesson Tutorial</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6964" data-id="6964" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413311" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6907', true); return false;">ZZ Top - Jesus Just Left Chicago (Bass cover with tabs)</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6907" data-id="6907" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413312" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6796', true); return false;">Kelly Valleau - Havana (Camila Cabello) - Fingerstyle Guitar</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6796" data-id="6796" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413313" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6777', true); return false;">Darren Watson | FREE BLUES GUITAR LESSON | Delta Blues Fingerstyle Lesson</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6777" data-id="6777" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413314" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6610', true); return false;">How to play Have you ever Seen the Rain - Creedence Clearwater Revival / GuiTabs Guitar Lesson</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6610" data-id="6610" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413315" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6605', true); return false;">Jimmy Brown show us how to play Led Zepplin Immigrant Song</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6605" data-id="6605" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413316" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6521', true); return false;">how to play Angie on guitar by the Rolling Stones - acoustic guitar lesson_tutorial</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6521" data-id="6521" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413317" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6549', true); return false;">The Easiest Blues on Acoustic Guitar | Beginner Friendly</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6549" data-id="6549" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413318" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6522', true); return false;">John Mayer Gives Blues Guitar Lesson (2018)</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6522" data-id="6522" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413319" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6552', true); return false;">Patience  - Guns N Roses / MusikMan #056</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6552" data-id="6552" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413320" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6547', true); return false;">Blues BASS LESSON with TAB - 12 Bar Bass Lines in A (including Turnarounds)</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6547" data-id="6547" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413321" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6350', true); return false;">Cornell Dupree Hot Licks Full VHS</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6350" data-id="6350" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413322" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6349', true); return false;">Ghost Riders in the Sky: Guitar Cover, The Outlaws, Full Song</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6349" data-id="6349" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413323" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6371', true); return false;">Lil Nas X - Old Town Road ft. Billy Ray Cyrus [Remix Instrumental]</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6371" data-id="6371" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413324" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
				
			
				
								<li class="sidebar-list-item button play ">
									<a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6159', true); return false;">50 Texas Blues Licks - #19 Double Stop Lenny - Guitar Lesson - Corey Congilio</a>
									
										<form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6159" data-id="6159" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413325" />
</div>
												<input type="hidden" name="delete" value="yes" />
												<a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
										</form>
									
								</li>

			
					
							</ul>
						</div>
					</li>
				
			

			
			
			
			
			
		
	</ul>
<script type="text/javascript">
	$(function() {$('#favoritesListAccordion').foundation();}); 
</script> 


`; //#endregion

    const $ = cheerio.load(favhtml);
    const mockHtml = $(".accordion-title");
    return mockHtml;
  }

  getCommentString(version) {
    var strComments = "";
    const staticWithoutComments = `<div id="add-cmt-wrapper" class="sidebar-controls-wrapper">
  <div class="row tight">
    <div class="columns small-6"> 
      
            
                <a class="checkbox-link" onClick="thePlayer.commentsManager.subscribeAction(this); return false;" data-action="https://texasbluesalley.com/?ACT=3&entry_id=4302&ret=proplayer74-tony/--ajax-load-comments">Notify Me</a>
            
      
    </div>
    <div class="columns small-6 text-right"> 
            
        <div class="option-buttons">
          <a class="option-button" onClick="thePlayer.commentsManager.setAuthorCommentFilter(false); return false;" href="#">All</a>
          <span class="option-button on">Mine</span>
        </div>
      
    </div>
  </div>
</div>


  

<div class="comment-screenname-notice">
  Commenting as <strong>Tony Moses</strong>. <a target="_blank" href="/account/dashboard">Change...</a>
</div>
            
<ul class="cmts-list" id="cmts-list" data-offset="0">
  
      <li id="no-questions">
        <div class="margin-top margin-bottom padded slight text-center">
          <p>Be the first to ask a question about this course or video.</p>
          <p>
            <a class="comment-action-button comment-view view" onClick="thePlayer.commentsManager.replyToComment(-1);" ><i class="fa fa-commenting"></i> Ask A Question</a>
          </p>
        </div>
      </li>
    
</ul>`;
    const staticWithComments = `<div id="add-cmt-wrapper" class="sidebar-controls-wrapper">
  <div class="row tight">
    <div class="columns small-6"> 
      
            
                <a class="checkbox-link" onClick="thePlayer.commentsManager.subscribeAction(this); return false;" data-action="https://texasbluesalley.com/?ACT=3&entry_id=4302&ret=proplayer74-tony/--ajax-load-comments">Notify Me</a>
            
      
    </div>
    <div class="columns small-6 text-right"> 
      
        <div class="option-buttons">
          <span class="option-button on">All</span>
          <a class="option-button" onClick="thePlayer.commentsManager.setAuthorCommentFilter(true); return false;" href="#">Mine</a>
        </div>
      
    </div>
  </div>
</div>


  

<div class="comment-screenname-notice">
  Commenting as <strong>Tony Moses</strong>. <a target="_blank" href="/account/dashboard">Change...</a>
</div>
            
<ul class="cmts-list" id="cmts-list" data-offset="0">
  
      <li class="cmt-wrapper level-0 expanded has-replies" 
        id="comment-309-wrapper"
        data-comment-id="309" data-parent-id="0"
        data-level="0" data-date="1543078602">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>I really benefit from the &#8220;loops&#8221; feature in the 5 Boxes Essential Licks video - but Chrome and IE both act a bit odd.  Space bar pauses a loop (so I can work on it - very helpful) but it would be sweet if [TAB] or maybe [right arrow/left arrow] would jump to the next lick / previous lick.  Is there a way to move between licks without using the mouse?  Thanks much - David</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                David B
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('2718', true); return false;">
                    <i class="fa fa-clock-o"></i> 2 years ago
                  </a>
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-309-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-309-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(309);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                    <a class="comment-action-button comment-view-replies-button view" onClick="thePlayer.commentsManager.toggleCmtReplies(309); return false;"><i class="fa fa-comments fa-fw"></i></a> 
                  
                </div>
              </div>
            
          </div>
    
      <ul class="cmt-replies-wrapper" id="comment-309-replies">
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-312-wrapper"
        data-comment-id="312" data-parent-id="309"
        data-level="1" data-date="1543410856">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Hi David,</p>

<p>Do you mean activating the next loop or previous loop using the keyboard? If so, that&#8217;s a fantastic idea. It&#8217;s going to take some work, but I&#8217;ll definitely put that on my list of features to add.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('2718', true); return false;">
                    <i class="fa fa-clock-o"></i> 2 years ago
                  </a>
                </span>
              
            </div>
            
          </div>
    
      
        </ul></li>
      
    
  
    
  
      <li class="cmt-wrapper level-0 expanded " 
        id="comment-358-wrapper"
        data-comment-id="358" data-parent-id="0"
        data-level="0" data-date="1558647789">
          <div class="cmt-inner">
          
            
              <a class="cmt-delete-button" onClick="thePlayer.commentsManager.deleteCmt(358,'https://texasbluesalley.com/?ACT=4'); return false;" href="#">
                <i class="fa fa-times-circle"></i>
              </a>
            
            <div class="cmt-text">
              <p>When learning/practicing 5 Boxes Essential Licks, what tempo is fast enough?</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Steve J
              </span>, 
              
                <span class="cmt-date non-breaking">
                    <i class="fa fa-clock-o"></i> one year ago
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-358-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-358-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(358);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                </div>
              </div>
            
          </div>
    
      </li>
    
  
    
  
      <li class="cmt-wrapper level-0 expanded has-replies" 
        id="comment-384-wrapper"
        data-comment-id="384" data-parent-id="0"
        data-level="0" data-date="1566685211">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>it seems the pro player has been out of order ,ill check again later,</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Samsamcb@gmail.com
              </span>, 
              
                <span class="cmt-date non-breaking">
                    <i class="fa fa-clock-o"></i> one year ago
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-384-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-384-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(384);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                    <a class="comment-action-button comment-view-replies-button view" onClick="thePlayer.commentsManager.toggleCmtReplies(384); return false;"><i class="fa fa-comments fa-fw"></i></a> 
                  
                </div>
              </div>
            
          </div>
    
      <ul class="cmt-replies-wrapper" id="comment-384-replies">
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-385-wrapper"
        data-comment-id="385" data-parent-id="384"
        data-level="1" data-date="1566758297">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>is the pro player out of order  ? or is it just on my sight?</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Samsamcb@gmail.com
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('2718', true); return false;">
                    <i class="fa fa-clock-o"></i> one year ago
                  </a>
                </span>
              
            </div>
            
          </div>
    
      </li>
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-386-wrapper"
        data-comment-id="386" data-parent-id="384"
        data-level="1" data-date="1566759874">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>I haven’t had any other reports. What browser are you using and are you seeing an error message?</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                    <i class="fa fa-clock-o"></i> one year ago
                </span>
              
            </div>
            
          </div>
    
      </li>
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-387-wrapper"
        data-comment-id="387" data-parent-id="384"
        data-level="1" data-date="1566922413">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>I  thought it was google chrome butt i see its google chromium .</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Samsamcb@gmail.com
              </span>, 
              
                <span class="cmt-date non-breaking">
                    <i class="fa fa-clock-o"></i> one year ago
                </span>
              
            </div>
            
          </div>
    
      </li>
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-388-wrapper"
        data-comment-id="388" data-parent-id="384"
        data-level="1" data-date="1566923107">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>It dose say there is an error with the pro player , on the orientation video butt if you have no other complaints i better up grade, i plan on useing this site for the rest of my days , you&#8217;ve done a greate job creating this site.  thankyou.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Samsamcb@gmail.com
              </span>, 
              
                <span class="cmt-date non-breaking">
                    <i class="fa fa-clock-o"></i> one year ago
                </span>
              
            </div>
            
          </div>
    
      
        </ul></li>
      
    
  
    
  
      <li class="cmt-wrapper level-0 expanded has-replies" 
        id="comment-391-wrapper"
        data-comment-id="391" data-parent-id="0"
        data-level="0" data-date="1568835403">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Anthony, I am missing some of the tablature for lesson 1  in the 5 boxes essential licks.  It ends at category 2.  They were available last night but not today.  Enjoying the content.  Thanks</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                bradcecil@bellsouth.net
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('2718', true); return false;">
                    <i class="fa fa-clock-o"></i> one year ago
                  </a>
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-391-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-391-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(391);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                    <a class="comment-action-button comment-view-replies-button view" onClick="thePlayer.commentsManager.toggleCmtReplies(391); return false;"><i class="fa fa-comments fa-fw"></i></a> 
                  
                </div>
              </div>
            
          </div>
    
      <ul class="cmt-replies-wrapper" id="comment-391-replies">
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-394-wrapper"
        data-comment-id="394" data-parent-id="391"
        data-level="1" data-date="1569288220">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Hi Brad, We&#8217;re in the process of updating all the tabs for this course. New tabs for Lessons 1-4 are now available, with tabs for the rest coming in the next day or two. Let me know if you still don&#8217;t see them.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('2718', true); return false;">
                    <i class="fa fa-clock-o"></i> one year ago
                  </a>
                </span>
              
            </div>
            
          </div>
    
      
        </ul></li>
      
    
  
    
  
      <li class="cmt-wrapper level-0 expanded has-replies" 
        id="comment-424-wrapper"
        data-comment-id="424" data-parent-id="0"
        data-level="0" data-date="1571518353">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Hey Anthony the tabs for lesson 2 cat 2 aren&#8217;t printable when you go into the options part at the bottom of the tab.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                gladiator1897@gmail.com
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('6621', true); return false;">
                    <i class="fa fa-clock-o"></i> one year ago
                  </a>
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-424-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-424-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(424);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                    <a class="comment-action-button comment-view-replies-button view" onClick="thePlayer.commentsManager.toggleCmtReplies(424); return false;"><i class="fa fa-comments fa-fw"></i></a> 
                  
                </div>
              </div>
            
          </div>
    
      <ul class="cmt-replies-wrapper" id="comment-424-replies">
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-425-wrapper"
        data-comment-id="425" data-parent-id="424"
        data-level="1" data-date="1571519725">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Thanks for letting me know. It should be fixed now.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('6621', true); return false;">
                    <i class="fa fa-clock-o"></i> one year ago
                  </a>
                </span>
              
            </div>
            
          </div>
    
      
        </ul></li>
      
    
  
    
  
      <li class="cmt-wrapper level-0 expanded has-replies" 
        id="comment-426-wrapper"
        data-comment-id="426" data-parent-id="0"
        data-level="0" data-date="1571524471">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>hey Anthony lesson 6 cat 2-3 tabs aren&#8217;t printable either.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                gladiator1897@gmail.com
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('6693', true); return false;">
                    <i class="fa fa-clock-o"></i> one year ago
                  </a>
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-426-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-426-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(426);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                    <a class="comment-action-button comment-view-replies-button view" onClick="thePlayer.commentsManager.toggleCmtReplies(426); return false;"><i class="fa fa-comments fa-fw"></i></a> 
                  
                </div>
              </div>
            
          </div>
    
      <ul class="cmt-replies-wrapper" id="comment-426-replies">
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-427-wrapper"
        data-comment-id="427" data-parent-id="426"
        data-level="1" data-date="1571530788">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Thanks, fixed. I think I got all of them now.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                    <i class="fa fa-clock-o"></i> one year ago
                </span>
              
            </div>
            
          </div>
    
      
        </ul></li>
      
    
  
    
  
      <li class="cmt-wrapper level-0 expanded has-replies" 
        id="comment-451-wrapper"
        data-comment-id="451" data-parent-id="0"
        data-level="0" data-date="1573090230">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Hey Anthony, are the tabs for Lesson 1 Category 2 licks wrong? Should it be 7 5h6p5 for all of them? (not 5h7p5)</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                markcnelson86@gmail.com
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('6618', true); return false;">
                    <i class="fa fa-clock-o"></i> one year ago
                  </a>
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-451-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-451-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(451);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                    <a class="comment-action-button comment-view-replies-button view" onClick="thePlayer.commentsManager.toggleCmtReplies(451); return false;"><i class="fa fa-comments fa-fw"></i></a> 
                  
                </div>
              </div>
            
          </div>
    
      <ul class="cmt-replies-wrapper" id="comment-451-replies">
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-455-wrapper"
        data-comment-id="455" data-parent-id="451"
        data-level="1" data-date="1573528472">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Good catch. I still had an old version of that file uploaded. If you reload it you&#8217;ll see that the first couple are 5h6p5 (as they should be) and only the last few are 5h7p5.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('6618', true); return false;">
                    <i class="fa fa-clock-o"></i> one year ago
                  </a>
                </span>
              
            </div>
            
          </div>
    
      
        </ul></li>
      
    
  
    
  
      <li class="cmt-wrapper level-0 expanded has-replies" 
        id="comment-453-wrapper"
        data-comment-id="453" data-parent-id="0"
        data-level="0" data-date="1573321469">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Hi Anthony - Congrats on getting this great course updated!   Where do I go to find the backing tracks?  thanks.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Scott R
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('6618', true); return false;">
                    <i class="fa fa-clock-o"></i> one year ago
                  </a>
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-453-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-453-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(453);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                    <a class="comment-action-button comment-view-replies-button view" onClick="thePlayer.commentsManager.toggleCmtReplies(453); return false;"><i class="fa fa-comments fa-fw"></i></a> 
                  
                </div>
              </div>
            
          </div>
    
      <ul class="cmt-replies-wrapper" id="comment-453-replies">
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-454-wrapper"
        data-comment-id="454" data-parent-id="453"
        data-level="1" data-date="1573527953">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Oops, I forgot to upload them. I&#8217;ll try to get that done this week.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                    <i class="fa fa-clock-o"></i> one year ago
                </span>
              
            </div>
            
          </div>
    
      
        </ul></li>
      
    
  
    
  
      <li class="cmt-wrapper level-0 expanded has-replies" 
        id="comment-469-wrapper"
        data-comment-id="469" data-parent-id="0"
        data-level="0" data-date="1575428479">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Hi Anthony , at the risk of being a pain, Can you please upload the backing tracks for these licks.   I&#8217;m really keen to practice them that way.   Thanks&#8230;</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Scott R
              </span>, 
              
                <span class="cmt-date non-breaking">
                    <i class="fa fa-clock-o"></i> about 12 months ago
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-469-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-469-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(469);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                    <a class="comment-action-button comment-view-replies-button view" onClick="thePlayer.commentsManager.toggleCmtReplies(469); return false;"><i class="fa fa-comments fa-fw"></i></a> 
                  
                </div>
              </div>
            
          </div>
    
      <ul class="cmt-replies-wrapper" id="comment-469-replies">
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-470-wrapper"
        data-comment-id="470" data-parent-id="469"
        data-level="1" data-date="1575434726">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Working hard to get remaining elements wrapped up for this course this week. Backing tracks are part of that.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                    <i class="fa fa-clock-o"></i> about 12 months ago
                </span>
              
            </div>
            
          </div>
    
      </li>
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-481-wrapper"
        data-comment-id="481" data-parent-id="469"
        data-level="1" data-date="1576261677">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>They&#8217;re added. Let me know what you think :-)</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                    <i class="fa fa-clock-o"></i> 11 months ago
                </span>
              
            </div>
            
          </div>
    
      
        </ul></li>
      
    
  
    
  
      <li class="cmt-wrapper level-0 expanded has-replies" 
        id="comment-479-wrapper"
        data-comment-id="479" data-parent-id="0"
        data-level="0" data-date="1576185210">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Hey Anthony, 
Drop me a note when u have a moment. Question about billing. No rush.</p>

<p>Mahalo,</p>

<p>CHRISTIAN</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                JCS
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('7212', true); return false;">
                    <i class="fa fa-clock-o"></i> 11 months ago
                  </a>
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-479-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-479-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(479);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                    <a class="comment-action-button comment-view-replies-button view" onClick="thePlayer.commentsManager.toggleCmtReplies(479); return false;"><i class="fa fa-comments fa-fw"></i></a> 
                  
                </div>
              </div>
            
          </div>
    
      <ul class="cmt-replies-wrapper" id="comment-479-replies">
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-480-wrapper"
        data-comment-id="480" data-parent-id="479"
        data-level="1" data-date="1576261663">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Send me an email at anthony@texasbluesalley.com</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                    <i class="fa fa-clock-o"></i> 11 months ago
                </span>
              
            </div>
            
          </div>
    
      
        </ul></li>
      
    
  
    
  
      <li class="cmt-wrapper level-0 expanded has-replies" 
        id="comment-484-wrapper"
        data-comment-id="484" data-parent-id="0"
        data-level="0" data-date="1576552616">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>i can&#8217;t find the tablature  for the category licks or the tab that puts them all to together</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                garylsamples@q.com
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('2725', true); return false;">
                    <i class="fa fa-clock-o"></i> 11 months ago
                  </a>
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-484-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-484-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(484);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                    <a class="comment-action-button comment-view-replies-button view" onClick="thePlayer.commentsManager.toggleCmtReplies(484); return false;"><i class="fa fa-comments fa-fw"></i></a> 
                  
                </div>
              </div>
            
          </div>
    
      <ul class="cmt-replies-wrapper" id="comment-484-replies">
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-485-wrapper"
        data-comment-id="485" data-parent-id="484"
        data-level="1" data-date="1576553683">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Hi Gary, I&#8217;m not sure I understand what you&#8217;re asking. Are you not seeing the tablature listed in each Lesson section?</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('3295', true); return false;">
                    <i class="fa fa-clock-o"></i> 11 months ago
                  </a>
                </span>
              
            </div>
            
          </div>
    
      
        </ul></li>
      
    
  
    
  
      <li class="cmt-wrapper level-0 expanded has-replies" 
        id="comment-495-wrapper"
        data-comment-id="495" data-parent-id="0"
        data-level="0" data-date="1577132588">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Hey Anthony, C2L2 Demo has a weird typo, and I wouldnt bother you with it but, since it involves parentheses  and could affect the way some code runs , I figured I would mention it.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                markcnelson86@gmail.com
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('7160', true); return false;">
                    <i class="fa fa-clock-o"></i> 11 months ago
                  </a>
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-495-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-495-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(495);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                    <a class="comment-action-button comment-view-replies-button view" onClick="thePlayer.commentsManager.toggleCmtReplies(495); return false;"><i class="fa fa-comments fa-fw"></i></a> 
                  
                </div>
              </div>
            
          </div>
    
      <ul class="cmt-replies-wrapper" id="comment-495-replies">
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-496-wrapper"
        data-comment-id="496" data-parent-id="495"
        data-level="1" data-date="1577132635">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>(under instant loops)</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                markcnelson86@gmail.com
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('7160', true); return false;">
                    <i class="fa fa-clock-o"></i> 11 months ago
                  </a>
                </span>
              
            </div>
            
          </div>
    
      </li>
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-498-wrapper"
        data-comment-id="498" data-parent-id="495"
        data-level="1" data-date="1577996845">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Thanks, got it fixed.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('7160', true); return false;">
                    <i class="fa fa-clock-o"></i> about 11 months ago
                  </a>
                </span>
              
            </div>
            
          </div>
    
      
        </ul></li>
      
    
  
    
  
      <li class="cmt-wrapper level-0 expanded " 
        id="comment-497-wrapper"
        data-comment-id="497" data-parent-id="0"
        data-level="0" data-date="1577134434">
          <div class="cmt-inner">
          
            
              <a class="cmt-delete-button" onClick="thePlayer.commentsManager.deleteCmt(497,'https://texasbluesalley.com/?ACT=4'); return false;" href="#">
                <i class="fa fa-times-circle"></i>
              </a>
            
            <div class="cmt-text">
              <p>Under instant loops, Category 2 Lick 2,3, etc also still have that 7 5h7p5 instead of 7 5h6p6 - I didnt look extensively; just noting it before I forget.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                markcnelson86@gmail.com
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('7160', true); return false;">
                    <i class="fa fa-clock-o"></i> 11 months ago
                  </a>
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-497-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-497-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(497);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                </div>
              </div>
            
          </div>
    
      </li>
    
  
    
  
      <li class="cmt-wrapper level-0 expanded has-replies" 
        id="comment-518-wrapper"
        data-comment-id="518" data-parent-id="0"
        data-level="0" data-date="1581230752">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Hi Anthony. In Lesson 2 Cat. 2 Lick 3, it shows chord ii in the video, but you explained it would sound good in chord V. Is that a problem?</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Will_Ma
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('7194', true); return false;">
                    <i class="fa fa-clock-o"></i> 9 months ago
                  </a>
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-518-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-518-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(518);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                    <a class="comment-action-button comment-view-replies-button view" onClick="thePlayer.commentsManager.toggleCmtReplies(518); return false;"><i class="fa fa-comments fa-fw"></i></a> 
                  
                </div>
              </div>
            
          </div>
    
      <ul class="cmt-replies-wrapper" id="comment-518-replies">
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-519-wrapper"
        data-comment-id="519" data-parent-id="518"
        data-level="1" data-date="1581265115">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Great question. Lots of licks that resolve over the ii chord will also sound great over the V chord as well.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('7194', true); return false;">
                    <i class="fa fa-clock-o"></i> 9 months ago
                  </a>
                </span>
              
            </div>
            
          </div>
    
      
        </ul></li>
      
    
  
    
  
      <li class="cmt-wrapper level-0 expanded " 
        id="comment-567-wrapper"
        data-comment-id="567" data-parent-id="0"
        data-level="0" data-date="1587229765">
          <div class="cmt-inner">
          
            
              <a class="cmt-delete-button" onClick="thePlayer.commentsManager.deleteCmt(567,'https://texasbluesalley.com/?ACT=4'); return false;" href="#">
                <i class="fa fa-times-circle"></i>
              </a>
            
            <div class="cmt-text">
              <p>HI Anthony. I find it hard to understand at which chord am I in the backing track. can you provide the chord sequence the backing tracks please?</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                itaibsn@gmail.com
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('7240', true); return false;">
                    <i class="fa fa-clock-o"></i> 7 months ago
                  </a>
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-567-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-567-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(567);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                </div>
              </div>
            
          </div>
    
      </li>
    
  
    
  
      <li class="cmt-wrapper level-0 expanded has-replies" 
        id="comment-568-wrapper"
        data-comment-id="568" data-parent-id="0"
        data-level="0" data-date="1587398127">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Some of the 5 boxes 2nd Ed, have disappeared form the browser list once opened.  Lesson 5 C:2 through end.  Can you guide me to fix?</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                kawdaddy1500@gmail.com
              </span>, 
              
                <span class="cmt-date non-breaking">
                    <i class="fa fa-clock-o"></i> 7 months ago
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-568-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-568-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(568);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                    <a class="comment-action-button comment-view-replies-button view" onClick="thePlayer.commentsManager.toggleCmtReplies(568); return false;"><i class="fa fa-comments fa-fw"></i></a> 
                  
                </div>
              </div>
            
          </div>
    
      <ul class="cmt-replies-wrapper" id="comment-568-replies">
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-640-wrapper"
        data-comment-id="640" data-parent-id="568"
        data-level="1" data-date="1600306100">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Sorry, somehow I missed this when you posted it. There is only one category for Lesson 5. As we rolled out the new tablature, lesson videos and backing tracks, the old tablature and lesson videos were removed from the list, as they were no longer needed.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('6688', true); return false;">
                    <i class="fa fa-clock-o"></i> 2 months ago
                  </a>
                </span>
              
            </div>
            
          </div>
    
      
        </ul></li>
      
    
  
    
  
      <li class="cmt-wrapper level-0 expanded has-replies" 
        id="comment-638-wrapper"
        data-comment-id="638" data-parent-id="0"
        data-level="0" data-date="1600002854">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>I have been practicing these licks for about a week. I really appreciate your lessons because Texas Blues is the style of guitar I want to learn. I am having a hard time remembering all of these licks. I am still in lesson one and I am not moving on until I have them mastered. Please let me know if it is normal to have difficulty remembering the licks and if there are any tricks to remembering them faster. Thank you for a great coarse.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                kevin@dallaslease.com
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('6618', true); return false;">
                    <i class="fa fa-clock-o"></i> 2 months ago
                  </a>
                </span>
              
            </div>
            
              <div class="row cmt-reply-wrapper no-padding" id="cmt-638-reply-wrapper">
                <div class="columns small-5"> 
                  <a class="comment-action-button comment-reply-button"
                    id="comment-638-reply-button" 
                    onClick="thePlayer.commentsManager.replyToComment(638);">Reply</a>
                </div>
                <div class="columns small-7 text-right"> 
                  
                    <a class="comment-action-button comment-view-replies-button view" onClick="thePlayer.commentsManager.toggleCmtReplies(638); return false;"><i class="fa fa-comments fa-fw"></i></a> 
                  
                </div>
              </div>
            
          </div>
    
      <ul class="cmt-replies-wrapper" id="comment-638-replies">
    
  
    
  
      <li class="cmt-wrapper level-1 expanded " 
        id="comment-639-wrapper"
        data-comment-id="639" data-parent-id="638"
        data-level="1" data-date="1600305940">
          <div class="cmt-inner">
          
            
            <div class="cmt-text">
              <p>Absolutely. When I&#8217;m learning a solo, it takes many, many, may repetitions until a lick is moved from my short-term memory to my muscle memory.</p>

            </div>
            <div class="cmt-meta">
              <span class="author-name non-breaking">
                <i class="fa fa-user-circle"></i> 
                Texas Blues Alley
              </span>, 
              
                <span class="cmt-date non-breaking">
                  <a onClick="thePlayer.openSegmentWithinCurrentPackage('6620', true); return false;">
                    <i class="fa fa-clock-o"></i> 2 months ago
                  </a>
                </span>
              
            </div>
            
          </div>
    
      
        </ul></li>
      
    
  
    
  
</ul>
`;

    switch (version) {
      case 1:
      case true:
        strComments = staticWithComments;
        break;

      case 0:
      case false:
      default:
        strComments = staticWithoutComments;
        break;
    }

    return strComments;
  }

}
// CONCATENATED MODULE: ./src/store/index.js





vue_runtime_esm["a" /* default */].use(vuex_esm["b" /* default */]);
const store_store = new vuex_esm["b" /* default */].Store({
  state: {
    _spinnerState: false,
    TXBA_UTILS: new txba_helpers_TXBA_Utilities()
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
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "c80b"))
}, // {
//   path: "/",
//   component: () => import("layouts/MainLayout.vue"),
//   children: [{ path: "", component: () => import("pages/Index.vue") }]
// },
{
  path: "/",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, "2ee3")),
  // beforeEnter: authGuard,
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, "fb63"))
  }, {
    name: "external",
    path: "/tools/ex/:dest",

    beforeEnter() {
      location.href = `https://texasbluesalley.com/${dest}`;
    }

  }, {
    name: "browser",
    path: "/tools/browser",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "84ed"))
  }, {
    name: "tuner",
    path: "/tools/tuner",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, "5ce2")),
    meta: {
      src: "/dev/tuner",
      name: "Tuner"
    }
  }, {
    name: "spider",
    path: "/tools/spider",
    component: () => __webpack_require__.e(/* import() */ 18).then(__webpack_require__.bind(null, "47ea")),
    meta: {
      src: "/dev/spider",
      name: "Spider Drills"
    }
  }, {
    name: "fretboard",
    path: "/tools/fretboard",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, "932b")),
    meta: {
      src: "/dev/fretboard",
      name: "Fretboard"
    }
  }]
}, {
  name: "watch",
  path: "/watch",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "82b5")),
  children: [{
    name: "player",
    path: "/watch/:packageID/:segmentID",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, "65ef"))
  }, {
    name: "package",
    path: "/watch/:packageID",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, "cbff"))
  }]
}, {
  path: "/profile",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, "2ff9"))
  }]
}, // Always leave this as last one,
// but you can also remove it
{
  path: "*",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, "e51e"))
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

// CONCATENATED MODULE: ./src/boot/axios.js


vue_runtime_esm["a" /* default */].prototype.$axios = axios_default.a;
// EXTERNAL MODULE: ./node_modules/vue-plyr/dist/vue-plyr.mjs
var vue_plyr = __webpack_require__("afa7");

// EXTERNAL MODULE: ./node_modules/x-frame-bypass/x-frame-bypass.js
var x_frame_bypass = __webpack_require__("d275");
var x_frame_bypass_default = /*#__PURE__*/__webpack_require__.n(x_frame_bypass);

// CONCATENATED MODULE: ./src/boot/vue-plyr.js


 // import "vue-plyr/dist/vue-plyr.esm";
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files

vue_runtime_esm["a" /* default */].use(vue_plyr["a" /* default */]);
vue_runtime_esm["a" /* default */].use(x_frame_bypass_default.a);
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
  const bootFiles = [router_auth, firebase["default"], /* Cannot get final name for export "default" in "./src/boot/axios.js" (known exports: , known reexports: ) */ undefined, /* Cannot get final name for export "default" in "./src/boot/vue-plyr.js" (known exports: , known reexports: ) */ undefined];

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

/***/ "b78d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e9c4");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5319");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5b81");
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2b0e");
/* harmony import */ var _middleware_ProPlayerCore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fc6a4");






/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    currentCourse: null,
    activeSegment: null,
    ProPlayer: new _middleware_ProPlayerCore__WEBPACK_IMPORTED_MODULE_5__[/* ProPlayer */ "c"](),
    currentSetup: {
      sources: null
    },
    userLoops: null,
    memberLoops: null,
    sections: null,
    courseHistory: [],
    seekToTime: 0,
    mediaSources: null,
    playerSettings: {
      bLoadingLoopData: false,
      duration: -1,
      speed: 1,
      volume: 0.5,
      zoom: 1,
      loop_start: -1,
      loop_stop: -1,
      playing: false,
      looping: false,
      flipped: false,
      zoomEnabled: false
    },
    playerOpts: {
      controls: false
    },
    playSections: []
  },
  mutations: {
    RESET_PACKAGE(ctx) {
      ctx.activeSegment = null;
      ctx.currentCourse = null;
      ctx.currentSetup = {
        sources: null
      };
      vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].set(ctx, "playerSettings", {
        duration: -1,
        speed: 1,
        volume: 0.5,
        zoom: 1,
        loop_start: -1,
        loop_stop: -1,
        activeList: null,
        bLoadingLoopData: false,
        playing: false,
        looping: false,
        flipped: false,
        zoomEnabled: false
      }); // console.log("reset-package");
    },

    SET_ACTIVE_SEGMENT(ctx, data) {
      console.info("setting active segment", data);
      ctx.activeSegment = data;
    },

    FLIP_PLAYER(ctx) {
      console.log("b4", ctx.playerSettings.flipped);
      ctx.playerSettings.flipped = !ctx.playerSettings.flipped;
      console.log("aft", ctx.playerSettings.flipped);
    },

    LOAD_PLAYER_SETTINGS(ctx, objSettings) {
      vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].set(ctx, "playerSettings", Object.assign({}, ctx.playerSettings, objSettings));
    },

    SET_CURRENT_COURSE(ctx, data) {
      if (!data) return; // console.log("currentCourse", data);

      if (ctx.currentCourse !== null) {
        // if (ctx.courseHistory.length > 4) ctx.courseHistory.shift();
        ctx.courseHistory.push(ctx.currentCourse); //     //TODO: Ensure no duplicates in courseHistory
        //     // console.log("pushed", ctx.courseHistory);
        //     // const pushed = ctx.courseHistory.reduce((acc, current) => {
        //     //   const x = acc.find(item => item.segmentEntryID === current.segmentEntryID);
        //     //   if(!x) {
        //     //     return acc.concat([current])
        //     //   }else{
        //     //     return acc
        //     //   }
        //     // }, [])
        //     // Vue.set(ctx, "courseHistory", pushed); // to remove duplicates from array
        //     // console.log("noDups", ctx.courseHistory);
        //   }
        //   ctx.currentCourse = data;
        //   // map course to state
        //   for (let [k, v] of Object.entries(data)) {
        //     Vue.set(ctx, k, v);
      }
    },

    SET_USER_LOOP_DATA(ctx, data) {
      // console.log("Setting user Loops", data);
      ctx.userLoops = JSON.parse(JSON.stringify(data));
    },

    SET_MEMBER_LOOP_DATA(ctx, data) {
      // console.log("Setting member Loops", data);
      ctx.memberLoops = JSON.parse(JSON.stringify(data));
    },

    SET_CURRENT_PACKAGE(ctx, packageData) {
      if (packageData.packageError === "") {
        ctx.ProPlayer.thePackage.setEntryID(packageData.packageID).setTitle(packageData.packageTitle).setChannelName(packageData.packageChannel).setChannelShortName(packageData.packageChannelSlug).setDate(packageData.packageDate).setDefaultSegmentEntryID(packageData.packageDefaultSegmentID).setDescription(packageData.packageDescription).setOverview(packageData.packageOverview).setImageURL(packageData.packageImage).setSections(packageData.sections).setTuning(packageData.packageTuning).setLoaded(true);
        ctx.ProPlayer.bPackageDataLoadingFinished = true;
      } else {
        ctx.ProPlayer.thePackage.setLoaded(false).setErrorMessage(packageData.packageError);
      }
    },

    SET_CURRENT_SEGMENT(ctx, segmentData) {
      // console.log("CurrentSegment", segmentData);
      ctx.ProPlayer.theSegment.setEntryID(segmentData.segmentEntryID).setSegmentType("entry").setVimeoCode(segmentData.segmentVimeoCode).setYouTubeCode(segmentData.segmentYouTubeCode).setMP3Filename(segmentData.segmentMP3Filename).setSoundSliceCode(segmentData.segmentSoundSliceCode).setPDFFilename(segmentData.segmentPDFFilename).setMediaURL(segmentData.segmentURL).setGPXFilename(segmentData.segmentGPXFilename).setTitle(segmentData.segmentTitle).setDisplayName(segmentData.segmentDisplayName).setFullDisplayName(segmentData.segmentFullDisplayName).setChaptersArray(segmentData.chaptersArray).setLoopsArray(segmentData.loopsArray).setMediaStartTime(segmentData.mediaStartTime).setHTMLContent(segmentData.segmentHTML).setDescription(segmentData.segmentShortDescription).setUserLoopsEntryIDsFromString(segmentData.userLoopEntryIDs).setIsLoaded(true).inferMediaType();
      ctx.ProPlayer.bSegmentDataLoadingFinished = true;
    },

    SET_CURRENT_SEGMENT_SETUP(ctx, data) {
      // console.log("currentSetup", ctx.currentSetup);
      // console.log( "playerOpts", ctx.playerOpts );
      // console.log( "playerSettings", ctx.playerSettings );
      // console.log("New data", data);
      if (data) {
        ctx.currentSetup = Object.assign({}, ctx.currentSetup, ctx.playerOpts, ctx.playerSettings, data);
      } else {
        ctx.currentSetup = {};
      } // console.log("currentSetup", ctx.currentSetup);

    },

    SET_PLAY_SECTIONS(ctx, data) {
      ctx.playSections = data === null || data === void 0 ? void 0 : data.playSections;
    },

    SET_SEEK_TIME(ctx, data) {
      ctx.seekToTime = data;
    },

    SET_MEDIA_SOURCES(ctx, data) {
      console.log("media", typeof data);
      ctx.mediaSources = data;
    },

    SET_SEGMENT_DURATION(ctx, data) {
      // console.log("duration", data);
      ctx.playerSettings.duration = data;
    },

    SET_LOOP_START(ctx, time) {
      console.log("start", time);
      ctx.playerSettings.loop_start = time;
    },

    SET_LOOP_STOP(ctx, time) {
      console.log("stop", time);
      ctx.playerSettings.loop_stop = time;
    },

    SET_LOOP_SELECTED(ctx, {
      nCollectionID,
      nListIndex,
      nLoopIndex
    }) {
      ctx.loopManager.loopSelected(nCollectionID, nListIndex, nLoopIndex);
    },

    TOGGLE_LOOPING(ctx, val) {
      if (val) {
        ctx.playerSettings.looping = val;
        ctx.playerSettings.playing = val;
      } else {
        ctx.playerSettings.looping = !ctx.playerSettings.looping;
      }
    },

    TOGGLE_ACTIVE_LOOP_STATUS(ctx, obj) {
      ctx.playerSettings.activeList[obj.key] = obj.active;
    },

    TOGGLE_LOOPOBJECT_LOADING(ctx) {
      ctx.playerSettings.bLoadingLoopData = !ctx.playerSettings.bLoadingLoopData;
    },

    SET_ACTIVE_LOOPLIST(ctx, data) {
      if (!data) {
        ctx.playerSettings.activeList = null;
      } else {
        ctx.playerSettings.activeList = data;
      }
    },

    TOGGLE_PLAYING(ctx, val) {
      ctx.playerSettings.playing = val ? val : !ctx.playerSettings.playing;
    }

  },
  actions: {
    clearLoop({
      commit
    }) {
      commit("SET_LOOP_START", -1);
      commit("SET_LOOP_STOP", -1);
      commit("TOGGLE_LOOPING", false);
      commit("TOGGLE_PLAYING", false);
    },

    setLoopStart({
      commit,
      state
    }, time) {
      // console.log( "start time", time );
      if (time == state.playerSettings.loop_start) return;
      const current = time; //? time : -1;
      // console.log("set start:", current);

      commit("SET_LOOP_START", current);
      if (state.playerSettings.loop_stop < current) commit("SET_LOOP_STOP", -1);
    },

    setLoopStop({
      commit,
      state
    }, time) {
      const current = time; //? time : -1;

      const start = state.playerSettings.loop_start;
      var info = {};

      if (start >= 0) {
        if (start !== current) {
          if (start < current) {
            console.log("set stop:", current);
            commit("SET_LOOP_STOP", current);
            info = {
              type: "positive",
              message: "Loop End Set"
            };
          } else {
            info = {
              type: "negative",
              message: "Loop end must be greater the loop start!"
            };
          }
        } else {
          info = {
            type: "negative",
            message: "Loop Start and End cannot be equal"
          };
        }
      } else {
        if (state.playerSettings.bLoadingLoopData) {
          // console.log("set stop:", current);
          commit("SET_LOOP_STOP", current);
          info = {
            type: "positive",
            message: "Loop End Set"
          };
        } else {
          info = {
            type: "info",
            message: "Must set loop start first"
          };
        }
      }

      console.info(info);
      return info;
    },

    setLoopWithObject({
      dispatch,
      commit
    }, loopObj) {
      const loopdata = loopObj.loopdata;
      commit("TOGGLE_LOOPOBJECT_LOADING");
      console.log("setting loop start/end", loopdata);
      dispatch("setLoopStart", loopdata[1]).then(dispatch("setLoopStop", loopdata[2]));
      commit("TOGGLE_ACTIVE_LOOP_STATUS", loopObj);
      commit("TOGGLE_LOOPOBJECT_LOADING");
    },

    setLoopSelected({
      commit
    }, data) {
      commit("SET_LOOP_SELECTED", data);
    },

    flipPlayer({
      commit
    }, bool) {
      commit("FLIP_PLAYER");
    },

    setSeekToTime({
      commit
    }, time) {
      commit("SET_SEEK_TIME", time);
    },

    loadPlayerSettings({
      commit
    }, objSettings) {
      commit("LOAD_PLAYER_SETTINGS", objSettings);
    },

    fetchComments({
      dispatch
    }, pID) {
      return dispatch("fetchCommentsData", pID);
    },

    async fetchCommentsData(ctx, pID) {
      const comments = await ctx.rootState.TXBA_UTILS.getComments(pID, pID); // console.log('coms', comments)

      return comments;
    },

    async fetchMemberLoopData(ctx, ID) {
      return await ctx.rootState.TXBA_UTILS.getMemberLoops(ID).then(loopData => {
        // handle malformed JSON
        if (typeof loopData === "object") return loopData;
        return JSON.parse(loopData.replaceAll('"memberLoops": \n\t\t\t', '"memberLoops" : []')) || "";
      }).then(loopData => {
        ctx.commit("SET_MEMBER_LOOP_DATA", loopData); // console.log('member loops', loopData)

        return loopData;
      });
    },

    fetchMemberLoops: (ctx, ID) => ctx.dispatch("fetchMemberLoopData", ID),
    fetchPackage: ({
      dispatch
    }, ID) => {
      const newId = dispatch("fetchPackageData", ID).then(id => {
        const tabs = ["Loops", "Chapters"];
        dispatch("removeSidebarTabs", tabs, {
          root: true
        });
        return id;
      });
      return newId;
    },

    async fetchPackageData(ctx, ID) {
      return await ctx.rootState.TXBA_UTILS.getPackage(ID).then(packageData => {
        // ctx.dispatch( 'resetPackage' )
        ctx.commit("SET_CURRENT_PACKAGE", packageData);
        ctx.commit("SET_PLAY_SECTIONS", packageData);
        return packageData;
      }, error => console.error(`Problem fetching package data, ${error}`));
    },

    resetPackage({
      commit
    }) {
      commit("RESET_PACKAGE");
    },

    fetchDefaultMedia: ctx => ctx.dispatch("fetchMediaData", ctx.state.ProPlayer.thePackage.getDefaultSegmentEntryID()),

    async fetchMediaData({
      dispatch
    }, segID) {
      const response = await dispatch("fetchSegment", segID).then(seg => {
        // console.log("fetchMediaData-segment", seg);
        return seg;
      }).then(id => dispatch("setCurrentSegmentSetup", id)) // .then(ID => dispatch("fetchUserLoops", ID))
      .then(ID => dispatch("fetchMemberLoops", ID)).then(() => dispatch("getMediaInfo"));
      return response;
    },

    fetchSegment: ({
      dispatch
    }, ID) => {
      return dispatch("fetchSegmentData", ID).then(ID => {
        const loopTabs = [{
          name: "Loops",
          componentName: "LoopsManager",
          icon: "mdi-sync",
          iconOnly: true,
          cmp: () => Promise.all(/* import() | watch-sidebar */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "7f3c"))
        }, {
          name: "Chapters",
          componentName: "ChaptersManager",
          icon: "mdi-bookmark",
          iconOnly: true,
          cmp: () => Promise.all(/* import() | watch-sidebar */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "6818"))
        }];
        dispatch("addSidebarTabs", loopTabs, {
          root: true
        });
        return ID;
      });
    },

    async fetchSegmentData(ctx, ID) {
      const response = await ctx.rootState.TXBA_UTILS.getSegment(ID);
      ctx.state.ProPlayer.openSegmentWithinCurrentPackage(ID, true); // console.log("segData", response);

      ctx.commit("SET_CURRENT_SEGMENT", response);
      ctx.commit("SET_CURRENT_SEGMENT_SETUP", null);
      return ID;
    },

    setCurrentSegmentSetup(ctx, segmentId) {
      var segmentData = null;

      if (ctx.state.playSections) {
        segmentData = ctx.state.playSections[0].segments.filter(itm => itm.id === segmentId)[0]; // console.log("seg-data", segmentData);
      } else {
        segmentData = ctx.dispatch("fetchPackage", segmentId).then(() => ctx.dispatch("setCurrentSegmentSetup", ctx.getters.getFirstSegment().id));
      } // console.log("segmentData", segmentData);


      if (segmentData) ctx.commit("SET_CURRENT_SEGMENT_SETUP", segmentData);
      return segmentId;
    },

    openSegment(ctx, ID) {
      return ctx.dispatch("fetchMediaData", ID);
    },

    parseMediaInfo({
      commit
    }, objMedia) {
      var data = {};

      if (objMedia.hasOwnProperty("videoSources")) {
        data["sources"] = objMedia.videoSources.map(src => {
          return {
            size: src.resolution,
            src: src.url,
            type: "video/mp4"
          };
        });
      }

      if (objMedia.hasOwnProperty("thumbnail")) data["poster"] = objMedia.thumbnail;
      data.type = "vimeo";
      commit("SET_CURRENT_SEGMENT_SETUP", data);
    },

    async getMediaInfo(ctx) {
      let segment = ctx.state.ProPlayer.theSegment;
      let mediaType = segment.getPrimaryMediaType();
      let info = {
        mediaType: mediaType
      };
      let slug = "/--ajax-load-media";
      var data; // console.log("getMediaInfo", mediaType);
      // console.log(mediaType, segment);

      switch (mediaType) {
        case "vimeo":
          data = segment.getVimeoCode();
          info.data = data;
          slug += `/${mediaType}/${data}`;
          const media = await ctx.rootState.TXBA_UTILS.loadMedia(slug); // console.log("vimeo", media);

          return ctx.dispatch("parseMediaInfo", media);

        case "youtube":
          data = segment.getYouTubeCode();
          info.data = data;
          slug += `/${mediaType}/${data}`; // this.mediaLoadYouTube(this.theS);

          break;

        case "mp3":
          data = segment.getMP3Filename();
          info.data = data;
          slug += `/${mediaType}/${data}`; // this.mediaLoadMP3(this.theSegment.);

          break;

        case "soundslice":
          data = segment.getSoundSliceCode();
          info.data = data;
          slug = `/--ajax-load-soundslice/${mediaType}/${data}`;
          const embed = await ctx.rootState.TXBA_UTILS.getAsyncData(slug);
          console.log(embed);
          const setup = {
            data: data,
            type: mediaType,
            embed: embed
          };
          ctx.commit("SET_CURRENT_SEGMENT_SETUP", setup);
          return embed;

        case "pdf":
          slug = `/--ajax-load-pdf/${segment.getPDFFilename()}`; // this.mediaLoadPDFViewer(this.theS);

          break;

        case "url":
          return `<iframe id='content-frame' src='${decodeURIComponent(theURL)}' frameBorder='0'></iframe>`;

        case "facebook":
          this.mediaLoadFacebook(this.theSegment.getFacebookUser(), this.theSegment.getFacebookVideoCode());
          break;

        case "instagram":
          slug += `/${mediaType}/${segment.getInstagramID()}`; // this.mediaLoadInstagram(this.theSegment.getInstagramID());

          break;

        case "html":
          // return info
          return `<div class='media-content-wrapper'>${segment.getHTMLContent()}</div>`;
      } // console.log("loading Media", slug, info);
      // TODO: Fix hokey workaround


      ctx.commit("SET_CURRENT_SEGMENT_SETUP", info);
      return ctx.rootState.TXBA_UTILS.loadMedia(slug, info);
    }

  },
  getters: {
    isValidLoop: ctx => {
      const start = ctx.playerSettings.loop_start;
      const stop = ctx.playerSettings.loop_stop;
      return start >= 0 && stop >= 1 && start !== stop && stop - start > 1;
    },
    getLoopStart: ctx => ctx.playerSettings.loop_start,
    getLoopStop: ctx => ctx.playerSettings.loop_stop,
    getHistory: ctx => {
      const histLength = ctx.courseHistory.length;
      if (histLength === 0) return [];
      const numCourses = histLength < 5 ? histLength : 5;
      return ctx.courseHistory.slice(numCourses, -1);
    },
    getPlaySections: ctx => {
      return ctx.playSections;
    },
    hasDefaultSegment: ctx => ctx.ProPlayer.thePackage.getDefaultSegmentEntryID() !== ""
  }
});

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
	"./bacon.js": "27ff",
	"./browser.js": "fd70",
	"./default.js": "10e2",
	"./index.js": "2a74",
	"./watch.js": "b78d"
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


/***/ }),

/***/ "fc6a4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProPlayer; });
/* unused harmony export Engine */
/* unused harmony export Browser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BrowserFilterSectionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserFilterSection; });
/* unused harmony export CommentsManager */
/* unused harmony export LoopsManager */
/* unused harmony export LoopsCollection */
/* unused harmony export LoopsList */
/* unused harmony export InstantLoop */
/* unused harmony export Segment */
/* unused harmony export Package */
/* unused harmony export FavoritesManager */
/* unused harmony export HistoryManager */
/* unused harmony export UserDataManager */
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e9c4");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);



/*jslint this:true, white:true */

/*jslint this:true, white:true */
// import {
//     ProPlayerBrowser
// } from "./--js-ProPlayerBrowser";
// import {
//     ProPlayerFavoritesManager
// } from "./--js-ProPlayerFavoritesManager";
// import {
//     ProPlayerHistoryManager
// } from "./--js-ProPlayerHistoryManager";
// import {
//     ProPlayerCommentsManager
// } from "./--js-ProPlayerCommentManager";
// import {
//     InstantLoop,
//     ProPlayerLoopsManager
// } from "./--js-ProPlayerLoopsManager";
// import {
//     ProPlayerUserDataManager
// } from "./--js-ProPlayerUserDataManager";
// import {
//     ProPlayerPackage
// } from "./--js-ProPlayerPackage";
// import {
//     ProPlayerSegment
// } from "./--js-ProPlayerSegment";
// import {
//     gc_BranchPath
// } from "./globals";
class ProPlayer {
  constructor() {
    "use strict"; // TODO: ADD MobileDetect.js
    // this.theMobileDetect = new MobileDetect(window.navigator.userAgent);
    // Top Level Objects

    this.browserTool = new Browser("contentBrowser");
    this.favoritesManager = new FavoritesManager("favoritesList");
    this.historyManager = new HistoryManager("historyList");
    this.commentsManager = new CommentsManager("cmtList");
    this.loopsManager = new LoopsManager();
    this.userDataManager = new UserDataManager();
    this.thePackage = new Package();
    this.theSegment = new Segment();
    this.theEngine = null;
    this.packageOverviewTemplate = "";
    this.strFavoritesListWrapperID = "favoritesList";
    this.strCommentsListWrapperID = "cmtList";
    this.spinnerDiv = '<div class="spinner"><i class="fa fa-spinner fa-spin"></i></div>';
    this.bPackageDataLoadingStarted = false;
    this.bPackageDataLoadingFinished = false;
    this.bSegmentDataLoadingStarted = false;
    this.bSegmentDataLoadingFinished = false;
    this.b_LoadingFinished = false;
    this.b_UpdateURL = false;
    this.b_KeepSidebarOpen = false;
    this.n_SidebarToggleTimerID = -1;
    window.addEventListener("onpopstate", event => {
      console.log("eventstate", event.state);
      let theState = event.state;
      console.log("Popping state: " + JSON.stringify(theState));

      if (theState !== null) {
        if (theState.type === "facebook" && theState.segment1 === "facebook" && theState.segment2 !== "" && theState.segment3 !== "") {
          thePlayer.openExternalFBVideo(theState.segment2, theState.segment3, false);
        } else if (theState.type === "youtube" && theState.segment1 === "youtube" && theState.segment2 !== "") {
          thePlayer.openExternalYouTubeVideo(theState.segment2, false);
        } else if (theState.type === "package" && theState.segment1 !== "" && theState.segment2 === "") {
          thePlayer.openPackage(theState.segment1, false);
        } else if (theState.type === "package" && theState.segment1 !== "" && theState.segment2 !== "") {
          if (theState.segment1 === thePlayer.thePackage.getEntryID()) {
            thePlayer.openSegmentWithinCurrentPackage(theState.segment2, false);
          } else {
            thePlayer.openPackageWithSegment(theState.segment1, theState.segment2, false);
          }
        } else if (theState.type === "empty") {
          thePlayer.initializeWithoutPackage(false);
        }
      }
    });
  }
  /******************************/

  /* Interface callback functions */

  /******************************/


  initializeWithoutPackage(bUpdateURL) {
    this.resetEverything();
    this.mediaLoadDefaultPage();
    this.closeSidebar();
    this.pushSegmentDownloadsMenu();
    this.pushFullscreenButtonState();
    this.pushHomeButtonState();
    this.userDataManager.resetAll();
    this.favoritesManager.reloadFavorites();
    this.reattachKeyboardEvents();
    this.enableSidebarTabs();
    this.pushPackageTitle("TXBA Pro Player");
    this.pushSegmentTitle("Version 7.4 (Tony Branch)");

    if (bUpdateURL) {
      this.updateURL();
    }
  }
  /******************************/

  /***    All Reset Functions **/

  /******************************/


  resetEverything() {
    //first shut everything down and reset everything.
    // this.toolsCloseToolWindow();
    this.resetPackage();
    this.resetSegment();
    this.resetLoadingFlags();
  }

  resetLoadingFlags() {
    this.bPackageDataLoadingFinished = false;
    this.bSegmentDataLoadingFinished = false;
    this.bPackageDataLoadingStarted = false;
    this.bSegmentDataLoadingStarted = false;
    this.b_LoadingFinished = false;
    this.b_UpdateURL = false;
  }

  resetPackageTitle() {
    this.pushPackageTitle("TXBA Pro Player");
    $("#proPlayerWrapper").toggleClass("has-info", false);
  }

  resetPlayerTitle() {
    this.resetPackageTitle("TXBA Pro Player");
    this.pushSegmentTitle("No Media Loaded");
    $("#proPlayerWrapper").toggleClass("has-info", false);
  }

  resetPackage() {
    this.thePackage.resetAll(); // this.resetPackageSections();
    // this.resetPackageTitle();
    // this.resetPackageOverview();
    // this.closeInfoPane();

    this.commentsManager.reset();
    this.favoritesManager.reset();
  }

  resetPackageSections() {
    //console.log('Deleting segments list');
    $("#sectionList").empty();
    $("#sectionListEmpty").toggle(true);
  }

  resetSegment() {
    if (this.theEngine !== null) {
      this.theEngine.prepareForDestruction();
      delete this.theEngine;
    }

    this.theSegment.resetAll();
    this.userDataManager.resetAll(); // $("#mediaWrapper").empty();
    // this.resetSegmentChapters();

    this.resetSegmentLoops(); // this.resetSegmentTitle();
  }

  resetSegmentChapters() {
    $("#chapterList").empty();
    $("#chapterListEmpty").text("No segment loaded.");
    $("#chapterListEmpty").toggle(true);
  }

  resetSegmentLoops() {
    this.loopsManager.resetAll();
  }

  resetSegmentTitle() {
    this.pushSegmentTitle("&nbsp;");
  }

  resetSelectedSegment() {
    $(".sidebar-list-item.segment.active").toggleClass("active", false);
  }

  resetPackageOverview() {
    $("#packageOverviewWrapper").toggle(false);
    $("#packageOverviewWrapper").appendTo("body");
  }

  bailOut() {
    // When loading encounters an error, this is where it comes back to
    // We reset everything and go back to the homescreen.
    if (this.thePackage.getErrorMessage() !== "") {
      alert(this.thePackage.getErrorMessage());
    }

    this.initializeWithoutPackage();
  }
  /******************************************/

  /*********   All Opening Functions  ********/

  /*******************************************/


  openPackage(strPackageID, bUpdateURL) {
    this.resetEverything();
    this.b_UpdateURL = bUpdateURL; // this.openSectionsSidebar();
    // this.beginFetchPackageData(strPackageID);
    // this.waitForPackageData(strPackageID);
  }

  openPackageWithSegment(strPackageID, strSegmentID, bUpdateURL) {
    this.resetEverything();
    this.b_UpdateURL = bUpdateURL;
    this.beginFetchPackageData(strPackageID);
    this.beginFetchSegmentData(strSegmentID);
    this.waitForPackageAndSegmentData();
  }

  openSegmentWithinCurrentPackage(strSegmentID, bUpdateURL) {
    console.log("Opening segment: " + strSegmentID); // this.resetPackageOverview();
    // this.closeInfoPane();

    this.resetSegment();
    this.resetLoadingFlags();
    this.b_UpdateURL = bUpdateURL; // this.beginFetchSegmentData(strSegmentID);

    this.waitForSegmentData();
  }

  openExternalYouTubeVideo(strYTCode, bUpdateURL) {
    this.resetEverything();
    this.b_UpdateURL = bUpdateURL;
    this.beginFetchYouTubeData(strYTCode);
    this.waitForYouTubeData();
  }

  openExternalFBVideo(strFBUserID, strFBVideoID, bUpdateURL) {
    //console.log("Opening FB Video for User/ID: " + strFBUserID + "," + strFBVideoID);
    this.resetEverything();
    this.b_UpdateURL = bUpdateURL;
    this.beginFetchFacebookData(strFBUserID, strFBVideoID);
    this.waitForFacebookData();
  }

  openExternalInstagramVideo(strInstagramID, bUpdateURL) {
    //console.log("Opening FB Video for User/ID: " + strFBUserID + "," + strFBVideoID);
    this.resetEverything();
    this.b_UpdateURL = bUpdateURL;
    this.beginFetchInstagramData(strInstagramID);
    this.waitForInstagramData();
  }

  openUnknownPackageType(packageOptions, bUpdateURL) {
    if (packageOptions.type == "entry") {
      this.openPackage(packageOptions.packageID, bUpdateURL);
    } else if (packageOptions.type == "youtube") {
      this.openExternalYouTubeVideo(packageOptions.packageID, bUpdateURL);
    } else if (packageOptions.type == "facebook") {
      this.openExternalFBVideo(packageOptions.fbUserID, packageOptions.fbVideoID, bUpdateURL);
    }
  }

  openUnknownPackageFromSegments(strSegment1, strSegment2, strSegment3, bUpdateURL) {
    if (strSegment1 === "") {
      this.initializeWithoutPackage(bUpdateURL);
    } else if (strSegment1 == "youtube") {
      this.openExternalYouTubeVideo(strSegment2, bUpdateURL);
      this.openSidebar();
    } else if (strSegment1 == "facebook") {
      this.openExternalFBVideo(strSegment2, strSegment3, bUpdateURL);
      this.openSidebar();
    } else {
      if (strSegment2 !== "") {
        this.openPackageWithSegment(strSegment1, strSegment2, bUpdateURL);
        this.openSidebar();
      } else {
        this.openPackage(strSegment1, bUpdateURL);
        this.openSidebar();
      }
    }
  }
  /*****************************************
   *************   Begin Loading Functions  ************
   *****************************************/


  beginFetchPackageData(strPackageID) {
    this.bPackageDataLoadingStarted = true;
    $.get(gc_BranchPath + "/--ajax-get-package-info/" + strPackageID, function (data) {
      let tempData = jQuery.parseJSON(data);

      if (tempData.packageError === "") {
        thePlayer.thePackage.setEntryID(tempData.packageID);
        thePlayer.thePackage.setTitle(tempData.packageTitle);
        thePlayer.thePackage.setChannelName(tempData.packageChannel);
        thePlayer.thePackage.setChannelShortName(tempData.packageChannelSlug);
        thePlayer.thePackage.setDate(tempData.packageDate);
        thePlayer.thePackage.setDefaultSegmentEntryID(tempData.packageDefaultSegmentID);
        thePlayer.thePackage.setDescription(tempData.packageDescription);
        thePlayer.thePackage.setOverview(tempData.packageOverview);
        thePlayer.thePackage.setImageURL(tempData.packageImage);
        thePlayer.thePackage.setSections(tempData.sections);
        thePlayer.thePackage.setTuning(tempData.packageTuning);
        thePlayer.thePackage.setLoaded(true);
        thePlayer.bPackageDataLoadingFinished = true;
      } else {
        thePlayer.thePackage.setLoaded(false);
        thePlayer.thePackage.setErrorMessage(tempData.packageError);
      }
    });
  }

  beginFetchSegmentData(strSegmentID) {
    //console.log("Beginning Fetch of segment data.");
    // this.showMediaLoading();
    this.pushSelectedSegmentState(strSegmentID);
    this.bSegmentDataLoadingStarted = true;
    $.get(gc_BranchPath + "/--ajax-get-segment-info/" + strSegmentID, function (data) {
      //console.log("Finished loading segment info;");
      let tempData = jQuery.parseJSON(data); //console.log(tempData);

      thePlayer.theSegment.setEntryID(tempData.segmentEntryID);
      thePlayer.theSegment.setSegmentType("entry");
      thePlayer.theSegment.setVimeoCode(tempData.segmentVimeoCode);
      thePlayer.theSegment.setYouTubeCode(tempData.segmentYouTubeCode);
      thePlayer.theSegment.setMP3Filename(tempData.segmentMP3Filename);
      thePlayer.theSegment.setSoundSliceCode(tempData.segmentSoundSliceCode);
      thePlayer.theSegment.setPDFFilename(tempData.segmentPDFFilename);
      thePlayer.theSegment.setMediaURL(tempData.segmentURL);
      thePlayer.theSegment.setGPXFilename(tempData.segmentGPXFilename);
      thePlayer.theSegment.setTitle(tempData.segmentTitle);
      thePlayer.theSegment.setDisplayName(tempData.segmentDisplayName);
      thePlayer.theSegment.setFullDisplayName(tempData.segmentFullDisplayName);
      thePlayer.theSegment.setChaptersArray(tempData.chaptersArray);
      thePlayer.theSegment.setLoopsArray(tempData.loopsArray);
      thePlayer.theSegment.setMediaStartTime(tempData.mediaStartTime);
      thePlayer.theSegment.setHTMLContent(tempData.segmentHTML);
      thePlayer.theSegment.setDescription(tempData.segmentShortDescription);
      thePlayer.theSegment.setUserLoopsEntryIDsFromString(tempData.userLoopEntryIDs);
      thePlayer.theSegment.setIsLoaded(true);
      thePlayer.theSegment.inferMediaType();
      thePlayer.bSegmentDataLoadingFinished = true;
    });
  }

  beginFetchYouTubeData(strYTCode) {
    //segment info must be reset prior to calling this function.
    this.showMediaLoading();
    $.get(gc_BranchPath + "/--ajax-get-yt-info/" + strYTCode, function (data) {
      //console.log("Finished loading YT Info:");
      let tempData = jQuery.parseJSON(data); //console.log(tempData);

      thePlayer.theSegment.setYTMatchingEntryID(tempData.matchingYTEntryID);
      thePlayer.theSegment.setSegmentType("other");
      thePlayer.theSegment.setPrimaryMediaType("youtube");
      thePlayer.theSegment.setYouTubeCode(tempData.segmentYouTubeCode);
      thePlayer.theSegment.setFullDisplayName(tempData.segmentFullDisplayName);
      thePlayer.theSegment.setDescription(tempData.segmentShortDescription);
      thePlayer.theSegment.setIsLoaded(true);
      thePlayer.bSegmentDataLoadingFinished = true;
    });
  }

  beginFetchFacebookData(strFBUser, strFBCode) {
    //segment info must be reset prior to calling this function.
    this.showMediaLoading();
    this.theSegment.setFacebookUser(strFBUser);
    this.theSegment.setFacebookVideoCode(strFBCode);
    this.theSegment.setSegmentType("other");
    this.theSegment.setPrimaryMediaType("facebook");
    this.theSegment.setIsLoaded(true);
    thePlayer.theSegment.inferMediaType();
    this.bSegmentDataLoadingFinished = true;
  }

  beginFetchInstagramData(strInstgramID) {
    //segment info must be reset prior to calling this function.
    this.showMediaLoading();
    this.theSegment.setInstagramID(strInstgramID);
    this.theSegment.setSegmentType("other");
    this.theSegment.setPrimaryMediaType("instagram");
    this.theSegment.setIsLoaded(true);
    thePlayer.theSegment.inferMediaType();
    this.bSegmentDataLoadingFinished = true;
  }
  /*****************************************
   *************   WAITING FUNCTIONS  ************
   *****************************************/


  waitForPackageData() {
    if (this.bPackageDataLoadingFinished) {
      if (!this.thePackage.getErrorMessage()) {
        this.processOnlyNewPackageData();
      } else {
        this.bailOut();
      }
    } else {
      setTimeout(function () {
        thePlayer.waitForPackageData();
      }, 250);
    }
  }

  waitForSegmentData() {
    // if (this.bSegmentDataLoadingFinished) {
    this.processOnlyNewSegmentData(); // } else {
    //   setTimeout(function() {
    //     thePlayer.waitForSegmentData();
    //   }, 250);
    // }
  }

  waitForPackageAndSegmentData() {
    if (this.bPackageDataLoadingFinished && this.bSegmentDataLoadingFinished) {
      if (!this.thePackage.getErrorMessage()) {
        this.processBothNewPackageAndSegmentData();
      } else {
        this.bailOut();
      }
    } else {
      setTimeout(function () {
        thePlayer.waitForPackageAndSegmentData();
      }, 250);
    }
  }

  waitForYouTubeData() {
    if (this.bSegmentDataLoadingFinished) {
      //console.log("YouTube Data Loaded.");
      this.processNewYouTubeData();
    } else {
      setTimeout(function () {
        thePlayer.waitForYouTubeData();
      }, 250);
    }
  }

  waitForFacebookData() {
    if (this.bSegmentDataLoadingFinished) {
      this.processNewFacebookData();
    } else {
      setTimeout(function () {
        thePlayer.waitForFacebookData();
      }, 250);
    }
  }

  waitForInstagramData() {
    if (this.bSegmentDataLoadingFinished) {
      this.processNewInstagramData();
    } else {
      setTimeout(function () {
        thePlayer.waitForInstagramData();
      }, 250);
    }
  }

  cleanUpLoading() {
    this.pushHomeButtonState();
    this.pushFullscreenButtonState();

    if (this.isIOS()) {
      $("body").toggleClass("is-ios", true);
    }

    if (this.isSafari()) {
      $("body").toggleClass("is-safari", true);
    }

    if (this.isChrome()) {
      $("body").toggleClass("is-chrome", true);
    }

    this.b_LoadingIsFinished = true;

    if (this.b_UpdateURL) {
      this.updateURL();
    }
  }
  /*****************************************/

  /******  New Data Processing Functions ***/

  /*****************************************/


  processOnlyNewPackageData() {
    // This function should only be called when ONLY a new package is being
    // loaded.
    // First, if this package has a default segment, begin opening that so the media
    // can load while we're doing the rest.
    if (this.thePackage.getDefaultSegmentEntryID() !== "") {
      this.openSegmentWithinCurrentPackage(this.thePackage.getDefaultSegmentEntryID(), this.b_UpdateURL);
    } else {
      //only load package overview if we're not also loading the default segment.
      this.pushInfoPaneData();
      this.pushPackageOverviewData();
    } // this.pushPackageSectionList();
    // this.pushPackageTitle();
    // this.pushInfoPaneData();
    //this function is called after package data has been loaded


    this.commentsManager.setNewPackageID(this.thePackage.getEntryID());
    this.favoritesManager.setNewPackageID(this.thePackage.getEntryID());
    this.favoritesManager.reloadFavorites();
    this.commentsManager.reloadComments(); // this.openSectionsSidebar();
    // this.openFirstSection();
    // this.cleanUpLoading();
    // this.enableSidebarTabs();

    this.updateLocalHistory(); // this.updateURL();
    // this.reattachKeyboardEvents();
  }

  processOnlyNewSegmentData() {
    //console.log("Processing New Segment Data");
    this.processOnlyNewSegmentMedia();
    this.pushSelectedSegmentState(); // this.pushSegmentChapters();

    this.extractSegmentLoops(); // this.pushSegmentTitle();
    // this.pushSegmentDownloadsMenu();
    // this.pushFullscreenButtonState();
    // this.pushInfoPaneData();
    // this.enableSidebarTabs();
    // this.mobileSidebarCheck();

    this.updateLocalHistory(); // this.cleanUpLoading();

    this.commentsManager.setNewSegmentID(this.theSegment.getEntryID()); // this.commentsManager.reloadComments();

    console.log('allowUserData');

    if (this.theSegment.allowUserData()) {
      this.userDataManager.setNewSegmentID(this.theSegment.getEntryID()); // this.userDataManager.loadUserDataForm();
    }
  }

  processBothNewPackageAndSegmentData() {
    // This function should only be called when processing BOTH
    // a new Package AND a new embedded Segment at the same time.
    //First, start loading the media so that can process while we do the rest.
    // this.processOnlyNewSegmentMedia();
    //Update interface elements related to Package.
    // this.pushPackageSectionList();
    // this.pushPackageTitle();
    // this.pushInfoPaneData();
    //Deal with comments.
    this.commentsManager.setNewPackageID(this.thePackage.getEntryID());
    this.commentsManager.setNewSegmentID(this.theSegment.getEntryID()); // TODO: HANDLE COMMENTS
    // this.commentsManager.reloadComments();
    //this function is called after package data has been loaded

    this.favoritesManager.setNewPackageID(this.thePackage.getEntryID()); // TODO: HANDLE FAVS
    // this.favoritesManager.reloadFavorites();
    //Now open the Sidebar
    // this.openSectionsSidebar();
    // this.openFirstSection();
    //Now do the segment stuff that doesn't overlap with package stuff.

    this.pushSelectedSegmentState(); // this.pushSegmentChapters();

    this.extractSegmentLoops(); // this.pushSegmentTitle();
    // this.pushSegmentDownloadsMenu();
    // this.pushFullscreenButtonState();

    this.updateLocalHistory();

    if (this.theSegment.allowUserData()) {
      this.userDataManager.setNewSegmentID(this.theSegment.getEntryID()); // this.userDataManager.loadUserDataForm();
    }

    this.b_LoadingIsFinished = true; // if (this.b_UpdateURL) {
    //   this.updateURL();
    // }
    // this.cleanUpLoading();
    // this.enableSidebarTabs();
  }

  processNewYouTubeData() {
    //console.log("Processing new YouTube Data");
    if (this.theSegment.getYTMatchingEntryID() !== "") {
      var matchingSegmentID = this.theSegment.getYTMatchingEntryID(); //We just need to open the matching segment as a package, because
      // in the package loading code, the segment will set itself as
      // the default segment, and the package loading code will trigger
      // a load when it finds that data.
      //console.log("Matching Entry found for new YouTube Video");

      this.openPackage(matchingSegmentID, true);
    } else {
      this.processOnlyNewSegmentData();
      this.favoritesManager.reloadFavorites();
      this.loadSaveYouTubeInterface();
      this.enableSidebarTabs();
    }
  }

  processNewFacebookData() {
    //console.log("Processing new Facebook Data");
    this.processOnlyNewSegmentData();
    this.enableSidebarTabs();
  }

  processNewInstagramData() {
    //console.log("Processing new Facebook Data");
    this.processOnlyNewSegmentData();
    this.enableSidebarTabs();
  }

  processOnlyNewSegmentMedia() {
    // this.resetPackageOverview();
    let mediaType = this.theSegment.getPrimaryMediaType(); //console.log("Processing new Segment Media:" + mediaType);

    switch (mediaType) {
      case "vimeo":
        this.mediaLoadVimeo(this.theSegment.getVimeoCode());
        break;

      case "youtube":
        this.mediaLoadYouTube(this.theSegment.getYouTubeCode());
        break;

      case "mp3":
        this.mediaLoadMP3(this.theSegment.getMP3Filename());
        break;

      case "soundslice":
        this.mediaLoadSoundSlice(this.theSegment.getSoundSliceCode());
        break;

      case "pdf":
        this.mediaLoadPDFViewer(this.theSegment.getPDFFilename());
        break;

      case "url":
        this.mediaLoadURL(this.theSegment.getMediaURL());
        break;

      case "facebook":
        this.mediaLoadFacebook(this.theSegment.getFacebookUser(), this.theSegment.getFacebookVideoCode());
        break;

      case "instagram":
        this.mediaLoadInstagram(this.theSegment.getInstagramID());
        break;

      case "html":
        this.mediaLoadHTML();
        break;
    }
  }

  extractSegmentLoops() {
    //loops manager is assumed to be reset by this point.
    this.loopsManager.createNewCollection("loopList", "system", false);
    this.loopsManager.addListToCollectionFromArray(this.theSegment.getLoopsArray(), "system");
  }
  /******************************/

  /* Interface Update Functions */

  /*****************************
   */


  pushHomeButtonState() {
    if (this.thePackage.isLoaded() || this.theSegment.isLoaded()) {
      $("#resetPlayerButton").toggle(true);
    } else {
      $("#resetPlayerButton").toggle(false);
    }
  }

  pushPackageSectionList() {
    //console.log('Updating sections');
    // this.spinner("#sectionList");
    var sections = this.thePackage.getSections();
    var segmentListString = "";
    var bUseSections = sections.length > 1 ? true : false;

    if (bUseSections) {
      segmentListString += '<ul class="accordion sidebar-accordion" id="segmentListAccordion" data-accordion data-allow-all-closed="true" data-multi-expand="false">';
    }

    for (let i = 0; i < sections.length; i++) {
      if (bUseSections) {
        segmentListString += '<li class="accordion-item ';
        segmentListString += '" data-accordion-item>';
        segmentListString += '<a class="accordion-title">' + sections[i].sectionTitle + " <sup>" + sections[i].segments.length + "</sup></a>";
        segmentListString += '<div class="accordion-content" id="section-' + i + '" data-tab-content>';
      }

      segmentListString += '<ul class="sidebar-list">';

      for (let j = 0; j < sections[i].segments.length; j++) {
        var theSegment = sections[i].segments[j];
        segmentListString += '<li class="sidebar-list-item segment ';
        segmentListString += this.getSegmentClass(theSegment);
        segmentListString += '" id="segment-item-' + theSegment.segmentID + '">';
        segmentListString += "<a onClick=\"thePlayer.openSegmentWithinCurrentPackage('" + theSegment.segmentID + "', true); return false;\"";
        segmentListString += 'title="' + theSegment.segmentFullTitle + '">';
        segmentListString += theSegment.segmentTitle + "</a></li>";
      }

      segmentListString += "</ul>";

      if (bUseSections) {
        segmentListString += "</div></li>";
      }
    }

    if (bUseSections) {
      segmentListString += "</ul>";
    }

    $("#sectionList").html(segmentListString);

    if (bUseSections) {
      //console.log('Setting up Accordion for the first time');
      $("#segmentListAccordion").foundation();
    }

    if ($("#sectionList").children().length === 0) {
      $("#sectionListEmpty").text("No segments to show.");
      $("#sectionListEmpty").toggle(true);
    } else {
      $("#sectionListEmpty").toggle(false);
    }
  }

  pushPackageTitle(strTitleOverride) {
    if (typeof strTitleOverride != "undefined") {
      $(".packageTitle").html(strTitleOverride);
    } else if (this.thePackage.isLoaded()) {
      $(".packageTitle").html(this.thePackage.getTitle());
      $("#proPlayerWrapper").toggleClass("has-info", true);
    } else {
      $(".packageTitle").html("TXBA Pro Player");
      $("#proPlayerWrapper").toggleClass("has-info", false);
    }
  }

  pushPackageOverviewData() {
    $("#packageTitle").html("<h1>" + this.thePackage.getTitle() + "</h1>");
    $("#packageImage").html("<img class='bordered' src='" + this.thePackage.getImageURL() + "'/>");
    $("#packageDescription").html(this.thePackage.getDescription());
    $("#packageOverview").html(this.thePackage.getOverview());
    $("#packageOverviewWrapper").appendTo("#mediaWrapper");
    $("#packageOverviewWrapper").toggle(true);
  }

  pushSegmentTitle(strTitle) {
    if (typeof strTitle != "undefined") {
      $(".segmentTitle").html(strTitle);
    } else {
      $(".segmentTitle").html(this.theSegment.getFullDisplayName());
      $("#proPlayerWrapper").toggleClass("has-info", true);
    }
  }

  pushInfoPaneData() {
    $("#proPlayerWrapper").toggleClass("has-info", true);
    $("#info-package-name").html(this.thePackage.getTitle());
    $("#info-segment-name").html(this.theSegment.getFullDisplayName());
    $("#info-package-tuning").html("<strong>Tuning</strong>: " + this.thePackage.getTuning());

    if (!this.theSegment.isLoaded()) {
      $("#info-package-description").html(this.thePackage.getDescription());
      $("#info-segment-overview").html(this.thePackage.getOverview());
    } else {
      $("#info-package-description").html("");
      $("#info-segment-overview").html(this.theSegment.getDescription());
    }
  }

  pushSelectedSegmentState(nForceSegment) {
    // this.resetSelectedSegment();
    if (!nForceSegment && !this.theSegment.isLoaded()) {
      return;
    }

    var newSegmentElementID = "#segment-item-";

    if (nForceSegment) {
      newSegmentElementID += nForceSegment;
    } else if (this.theSegment.isLoaded()) {
      newSegmentElementID += this.theSegment.getEntryID();
    }

    console.log("Setting active segment ID: " + newSegmentElementID); // $(newSegmentElementID).toggleClass("active", true);
    // var parentElement = $(newSegmentElementID).closest(".accordion-content");
    // var parentLink = $(newSegmentElementID).closest(".accordion-item");
    // if (parentElement.length !== 0 && !$(parentLink).hasClass("is-active")) {
    //   $("#segmentListAccordion").foundation("toggle", parentElement);
    // }
  }

  pushSegmentDownloadsMenu() {
    $("#downloads-list").empty();

    if (this.theSegment.isLoaded() && this.theSegment.getMP3Filename() !== "") {
      $("#downloadsToggle").toggle(true);
      $("#downloadsToggle").toggle(true);
      var newItem = "<li class='sidebar-list-item segment download'><a href='";
      newItem += "https://cdn.texasbluesalley.com/audio/" + this.theSegment.getMP3Filename();
      newItem += "' download='" + this.theSegment.getMP3Filename() + "'>Download MP3</a></li>";
      $("#downloads-list").append(newItem);
    } else {
      $("#downloadsToggle").toggle(false);
    }
  }

  pushFullscreenButtonState() {
    if (this.theSegment.isLoaded() && (this.theSegment.getVimeoCode() !== "" || this.theSegment.getYouTubeCode() !== "" || this.theSegment.getMP3Filename() !== "" || this.theSegment.getSoundSliceCode() !== "")) {
      $("#fullscreenButton").toggle(true);
    } else {
      $("#fullscreenButton").toggle(false);
    }
  }

  pushSegmentChapters() {
    if (!this.theSegment.isLoaded()) {
      $("#chapterListEmpty").text("No segment loaded.");
      $("#chapterListEmpty").toggle(true);
    } else if (this.theSegment.getChaptersArray().length === 0) {
      $("#chapterListEmpty").text("This segment does not have any chapter markers.");
      $("#chapterListEmpty").toggle(true);
    } else {
      $("#chapterListEmpty").toggle(false); //this function assumes the chapter list has already been reset

      var chapters = this.theSegment.getChaptersArray();

      for (let i = 0; i < chapters.length; i++) {
        var chapterItem = '<li class="sidebar-list-item chapter" id="chapterItem-' + i + '">';
        chapterItem += '<a onClick="thePlayer.chapterSelected(this,' + i + ')">';
        chapterItem += chapters[i][0];
        chapterItem += "</a></li>";
        $("#chapterList").append(chapterItem);
      }
    }
  }

  getEngineLoop() {
    if (typeof this.theEngine !== "undefined" && this.theEngine.getLoopDefined()) {
      return new InstantLoop("", this.theEngine.getLoopStart(), this.theEngine.getLoopEnd());
    } else {
      return null;
    }
  }
  /*****************************************
   ********  Media Loading Functions	******
   *****************************************/


  mediaLoadDefaultPage() {
    $("#mediaWrapper").load(gc_BranchPath + "/--ajax-load-default-page");
  }

  mediaLoadVimeo(nVimeoID) {
    $("#mediaWrapper").load(gc_BranchPath + "/--ajax-load-media/vimeo/" + nVimeoID, function () {
      thePlayer.reattachKeyboardEvents();
    });
  }

  mediaLoadYouTube(strYouTubeCode) {
    this.showMediaLoading();
    $("#mediaWrapper").load(gc_BranchPath + "/--ajax-load-media/youtube/" + strYouTubeCode, function () {
      thePlayer.reattachKeyboardEvents();
    });
  }

  mediaLoadFacebook(strFacebookUser, strFacebookCode) {
    //console.log("About to load FB video for user/id: " + strFacebookUser + "," + strFacebookCode);
    this.showMediaLoading();
    $("#mediaWrapper").load(gc_BranchPath + "/--ajax-load-media/facebook/" + strFacebookUser + "/" + strFacebookCode, function () {
      thePlayer.reattachKeyboardEvents();
    });
  }

  mediaLoadInstagram(strInstagramID) {
    //console.log("About to load FB video for user/id: " + strFacebookUser + "," + strFacebookCode);
    this.showMediaLoading();
    $("#mediaWrapper").load(gc_BranchPath + "/--ajax-load-media/instagram/" + strInstagramID, function () {
      thePlayer.reattachKeyboardEvents();
    });
  }

  mediaLoadMP3(strMP3Filename) {
    $("#mediaWrapper").load(gc_BranchPath + "/--ajax-load-media/audio/" + strMP3Filename, function () {
      thePlayer.reattachKeyboardEvents();
    });
  }

  mediaLoadSoundSlice(strSoundSliceCode) {
    $("#mediaWrapper").load(gc_BranchPath + "/--ajax-load-soundslice/" + strSoundSliceCode);
  }

  mediaLoadPDFViewer(strPDFFilename) {
    //console.log('Trying to load ' + strPDFFilename );
    $("#mediaWrapper").load(gc_BranchPath + "/--ajax-load-pdf/" + strPDFFilename);
  }

  mediaLoadURL(theURL) {
    var contentString = "<iframe id='content-frame' src='";
    contentString += decodeURIComponent(theURL) + "' frameBorder='0'></iframe>";
    $("#mediaWrapper").html(contentString);
  }

  mediaLoadHTML() {
    var contentString = "<div class='media-content-wrapper'>";
    contentString += this.theSegment.getHTMLContent();
    contentString += "</div>";
    $("#mediaWrapper").html(contentString);
  }

  triggerSaveUserData() {
    this.loopsManager.savingUserData();
    this.userDataManager.saveUserData();
  }
  /**********************************/

  /*** Chapter And Loop Related Functions ***/

  /**********************************/


  chapterSelected(sender, nChapterIndex) {
    var theChapter = this.theSegment.getChaptersArray()[nChapterIndex]; //console.log('Chapter Selected: ' + nChapterIndex);
    //console.log( this.theSegment.chapters[ nChapterIndex] );
    //console.log( "Calling engine gotoChapter" );

    this.loopsManager.clearAllActiveLoops();
    var chapterParentItemID = "#chapterItem-" + nChapterIndex;
    $(chapterParentItemID).toggleClass("active", true);
    this.theEngine.goToChapter(theChapter[1]);
    window.setTimeout(function () {
      $(".sidebar-list-item.chapter.active").toggleClass("active", false);
    }, 200);
  }

  engineLoopHasChanged() {
    this.loopsManager.pushUserLoopInterfaceState();
  }
  /*****************************************
   *************	Tool Window Functions ************
   *****************************************/


  toolsShowBrowser() {
    this.closeInfoPane(); //console.log('Opening Browser');

    if (typeof this.theEngine !== "undefined") {
      this.theEngine.stopPlayback();
    }

    if (thePlayer.browserTool.b_BrowserLoaded === true) {
      $("#browser-wrapper").appendTo("#toolWindowInnerWrapper");
      $("#browser-wrapper").toggle(true);
      this.browserTool.reloadResultsFavoritesForms();
    } else {
      $("#toolWindowInnerWrapper").load(gc_BranchPath + "/--ajax-browser", function () {
        thePlayer.browserTool.b_BrowserLoaded = true;
        thePlayer.browserTool.browserReset();
      });
    }

    $("#toolWindowTitle").text("Browser");
    $("#toolWindowOuterWrapper").data("tool", "browser");
    $("#toolWindowOuterWrapper").toggle(true);
  }

  toolsShowTuner() {
    this.closeInfoPane();

    if (typeof this.theEngine !== "undefined") {
      this.theEngine.stopPlayback();
    }

    var contentString = "<iframe src='/dev/tuner'></iframe>";
    $("#toolWindowInnerWrapper").html(contentString);
    $("#toolWindowTitle").text("Tuner");
    $("#toolWindowOuterWrapper").data("tool", "tuner");
    $("#toolWindowOuterWrapper").toggle(true);
  }

  toolsShowSpiderTool() {
    this.closeInfoPane();

    if (typeof this.theEngine !== "undefined") {
      this.theEngine.stopPlayback();
    }

    var contentString = "<iframe src='/dev/spider'></iframe>";
    $("#toolWindowInnerWrapper").html(contentString);
    $("#toolWindowTitle").text("Spider Drills Tool");
    $("#toolWindowOuterWrapper").data("tool", "spider");
    $("#toolWindowOuterWrapper").toggle(true);
  }

  toolsShowFretboardTool() {
    this.closeInfoPane();

    if (typeof this.theEngine !== "undefined") {
      this.theEngine.stopPlayback();
    }

    var contentString = "<iframe src='/dev/fretboard'></iframe>";
    $("#toolWindowInnerWrapper").html(contentString);
    $("#toolWindowTitle").text("Fretboard Tool");
    $("#toolWindowOuterWrapper").data("tool", "fretboard");
    $("#toolWindowOuterWrapper").toggle(true);
  }

  toolsCloseToolWindow() {
    $("#toolWindowOuterWrapper").toggle(false);

    if ($("#toolWindowOuterWrapper").data("tool") == "browser") {
      $("#browser-wrapper").toggle(false);
      $("#browser-wrapper").appendTo("body");
      this.favoritesManager.fullRefresh();
    }

    $("#toolWindowInnerWrapper").empty();
    $("#toolWindowTitle").text("");
  }
  /**********************************/

  /*** From here on down, it's a mishmosh of functions ***/

  /**********************************/


  getSegmentClass(theSegment) {
    if (theSegment.segmentVimeoCode !== "" || theSegment.segmentYouTubeCode !== "") {
      return "video";
    } else if (theSegment.segmentMP3Filename !== "") {
      return "audio";
    } else if (theSegment.segmentSoundSliceCode !== "") {
      return "tablature";
    } else if (theSegment.segmentPDFCode !== "") {
      return "pdf";
    } else if (theSegment.segmentURL !== "") {
      return "url";
    } else if (theSegment.segmentGPXFilename !== "") {
      return "gpx";
    } else {
      return "html";
    }
  }
  /*****************************************
   ********* Window Related Stuff	   ************
   *****************************************/


  toggleSidebar() {
    clearTimeout(this.n_SidebarToggleTimerID);
    $("#proPlayerWrapper").toggleClass("sidebar-closed");

    if ($("#proPlayerWrapper").hasClass("sidebar-closed")) {
      //in all cases, if (after toggling) the sidebar is closed
      //we turn off the keep sidebar open flag so that the side hover
      //area will work to open it again.
      this.b_KeepSidebarOpen = false;
      $("#proPlayerWrapper").toggleClass("sidebar-sticky", false);
    }
  }

  toggleSidebarButtonCallback() {
    if ($("#proPlayerWrapper").hasClass("sidebar-closed")) {
      //BEFORE toggling, if the sidebar is close, we enable the
      //keep open flag so that hovinger will be disabled. We only
      //do this when the top button is clicked to open the sidebar.
      this.b_KeepSidebarOpen = true;
      $("#proPlayerWrapper").toggleClass("sidebar-sticky", true);
    }

    this.toggleSidebar();
  }

  openSidebar() {
    $("#proPlayerWrapper").toggleClass("sidebar-closed", false);
  }

  closeSidebar() {
    $("#proPlayerWrapper").toggleClass("sidebar-closed", true);
  }

  enableSidebarTabs() {
    //console.log("Enabling sidebar tabs");
    $("#sectionsTab").toggleClass("enabled", this.thePackage.isLoaded());
    $("#chaptersTab").toggleClass("enabled", this.theSegment.allowChapters());
    $("#loopsTab").toggleClass("enabled", this.theSegment.allowLoops());
    $("#commentsTab").toggleClass("enabled", this.thePackage.isLoaded());
    $("#importTab").toggleClass("enabled", this.theSegment.allowImport());
    $("#sidebarPanelTabs li.enabled:first a").trigger("click");
  }

  toggleKeyboardShortcuts() {
    $("#keyboardShortcuts").toggle();
    $("#keyboardShortcutsButton").toggleClass("active");
  }

  openFirstSection() {
    var sectionAccordionItems = $("#segmentListAccordion .accordion-content");

    if (typeof sectionAccordionItems !== "undefined" && sectionAccordionItems.length > 0) {
      $("#segmentListAccordion").foundation("toggle", $(sectionAccordionItems[0]));
    }
  }

  openSectionsSidebar() {
    this.openSidebar();
    $("#sidebarPanelTabs").foundation("selectTab", "segmentsPanel");
  }

  openChaptersSidebar() {
    this.openSidebar();
    $("#sidebarPanelTabs").foundation("selectTab", "chaptersPanel");
  }

  openLoopsSidebar() {
    this.openSidebar();
    $("#sidebarPanelTabs").foundation("selectTab", "loopsPanel");
  }

  showLoopsSidebarList(nListIndex) {
    this.openLoopsSidebar();
    let listTab = $("#loopListsTabsContent").children(".tabs-panel")[nListIndex];
    let tabID = $(listTab).attr("id");
    $("#loopsPanelTabs").foundation("selectTab", tabID);
  }

  openFavoritesSidebar() {
    this.openSidebar();
    $("#sidebarPanelTabs").foundation("selectTab", "favoritesPanel");
  }

  openCommentsSidebar() {
    this.openSidebar();
    $("#sidebarPanelTabs").foundation("selectTab", "commentsPanel");
  }

  mobileSidebarCheck() {
    if (!Foundation.MediaQuery.atLeast("large")) {
      this.toggleSidebar();
    }
  }

  updateURL() {
    let theURL = "/watch/";
    let theState = {};
    let theTitle = "";
    let currentState = history.state;
    let bPushNewState = true; // debugger;
    //First, check if we're pushing the same state that we already have loaded.

    console.log("Checking: " + JSON.stringify(currentState));

    if (currentState !== null) {
      if (currentState.type == "package" && currentState.segment1 == this.thePackage.getEntryID() && currentState.segment2 == this.theSegment.getEntryID()) {
        //we have a match, get out of here.
        bPushNewState = false;
      } else if (currentState.type == "youtube" && this.theSegment.getSegmentType() == "other" && currentState.segment2 == this.theSegment.getYouTubeCode()) {
        //It's a matching YouTube video
        bPushNewState = false;
      } else if (currentState.type == "facebook" && this.theSegment.getSegmentType() == "other" && currentState.segment2 == this.theSegment.getFacebookUser() && currentState.segment3 == this.theSegment.getFacebookVideoCode()) {
        //Matching facebook video.
        bPushNewState = false;
      }
    }

    if (bPushNewState) {
      if (this.thePackage.isLoaded()) {
        theState.type = "package";
        theState.segment1 = this.thePackage.getEntryID();
        theTitle += this.thePackage.getTitle();
        theURL += this.thePackage.getEntryID();

        if (this.theSegment.isLoaded()) {
          theState.segment2 = this.theSegment.getEntryID();
          theURL += "/" + this.theSegment.getEntryID();
          theTitle += ":" + this.theSegment.getTitle();
        } else {
          theState.segment2 = "";
        }

        theState.segment3 = "";
      } else if (this.theSegment.isLoaded() && this.theSegment.getSegmentType() == "other") {
        if (this.theSegment.getPrimaryMediaType() == "youtube") {
          theState.type = "youtube";
          theState.segment1 = "youtube";
          theState.segment2 = this.theSegment.getYouTubeCode();
          theState.segment3 = "";
          theURL += "youtube/" + this.theSegment.getYouTubeCode();
          theTitle = "YouTube: " + this.theSegment.getDisplayName();
        } else if (this.theSegment.getPrimaryMediaType() == "facebook") {
          theState.type = "facebook";
          theState.segment1 = "facebook";
          theState.segment2 = this.theSegment.getFacebookUser();
          theState.segment3 = this.theSegment.getFacebookVideoCode();
          theTitle = "Facebook Video";
          theURL += theState.segment1 + "/" + theState.segment2 + "/" + theState.segment3;
        }
      } else {
        theState.segment1 = "";
        theState.segment2 = "";
        theState.segment3 = "";
        theState.type = "empty";
        theTitle = "TXBA Pro Player";
      } //console.log("Pushing: " + JSON.stringify(theState));
      //console.log("Title is: " + theTitle);


      history.pushState(theState, theTitle, theURL);
    }
  }

  setupMobileiOS() {
    if (isIOS()) {
      var viewportmeta = document.querySelector('meta[name="viewport"]');

      if (viewportmeta) {
        viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
        document.body.addEventListener("gesturestart", function () {
          viewportmeta.content = "width=device-width, minimum-scale=.6, maximum-scale=1.6";
        }, false);
      }
    }

    if (isIPhone()) {
      $(".not-on-iPhones").toggle(false);
    }
  }

  isIOS() {
    return this.theMobileDetect.is("iphone") || this.theMobileDetect.is("ipad") || this.theMobileDetect.is("ipod");
  }

  isIPhone() {
    return this.theMobileDetect.is("iphone") || this.theMobileDetect.is("ipod");
  }

  isIE() {
    strUserAgent = window.navigator.userAgent;
    return strUserAgent.search("Trident") > -1 || strUserAgent.search("Edge") > -1;
  }

  isSafari() {
    strUserAgent = window.navigator.userAgent;
    return strUserAgent.search("Safari") > -1 && strUserAgent.search("Chrome") == -1;
  }

  isChrome() {
    strUserAgent = window.navigator.userAgent;
    return strUserAgent.search("Chrome") > -1;
  }

  isWindows10() {
    strUserAgent = window.navigator.userAgent;
    return strUserAgent.search("Windows NT 10") > -1;
  }

  getChannelTypeString(strChannelShortName) {
    var strType = "Item";

    switch (strChannelShortName) {
      case "pro_player_packages":
        strType = "Course";
        break;

      case "free_lesson_friday":
        strType = "Lesson";
        break;

      case "tone_tuesday":
      case "performances":
      case "youtube_video":
        strType = "Video";
        break;

      case "backing_tracks":
        strType = "Track";
        break;
    }

    return strType;
  }

  fullscreenToggle() {
    if (typeof this.theEngine !== "undefined") {
      this.theEngine.MediaPlayer.enterFullScreen();
    } else if (this.theSegment.getPrimaryMediaType() === "soundslice") {
      $("iframe#ssembed")[0].requestFullscreen();
    }
  }

  spinner(elementID) {
    //console.log('Activating spinner on ' + elementID);
    var strSpinner = "<div id='spinner'><i class='fa fa-spinner fa-spin fa-2x'></i></div>";
    $(elementID).html(strSpinner);
  }

  closeBrowserRequested() {
    this.toolsCloseToolWindow();
    this.favoritesManager.fullRefresh();
  }

  updateLocalHistory() {
    if (this.thePackage.isLoaded() && this.theSegment.isLoaded() && this.theSegment.getSegmentType() !== "other") {
      console.log("Updating history");
      this.historyManager.addHistoryItem(this.thePackage.getEntryID(), this.theSegment.getEntryID(), this.thePackage.getTitle(), this.thePackage.getChannelName(), this.theSegment.getFullDisplayName(), "entry");
    }
  }

  toggleInfoPane() {
    if (this.theSegment.isLoaded() || this.thePackage.isLoaded()) {
      $("#infoPane").slideToggle();
    }
  }

  showInfoPane() {
    if (this.theSegment.isLoaded() || this.thePackage.isLoaded()) {
      $("#infoPane").toggle(true);
    }
  }

  closeInfoPane() {
    $("#infoPane").toggle(false);
  }

  showMediaLoading() {
    this.resetPackageOverview();
    $("#mediaWrapper").html(this.spinnerDiv);
  }

  triggerNextLoop() {
    let listIndex = this.loopsManager.activateNextLoop();

    if (listIndex > -1 && this.isSidebarOpen()) {
      this.showLoopsSidebarList(listIndex);
    }
  }

  triggerPreviousLoop() {
    let listIndex = this.loopsManager.activatePreviousLoop();

    if (listIndex > -1 && this.isSidebarOpen()) {
      this.showLoopsSidebarList(listIndex);
    }
  }

  isSidebarOpen() {
    return !$("#proPlayerWrapper").hasClass("sidebar-closed");
  }

  reattachKeyboardEvents() {
    //console.log('Reattaching Mouse Events');
    Mousetrap.bind("s", function () {
      thePlayer.toggleSidebar();
    });

    if (this.thePackage.isLoaded()) {
      Mousetrap.bind("1", function () {
        thePlayer.openSectionsSidebar();
      });
      Mousetrap.bind("5", function () {
        thePlayer.openCommentsSidebar();
      });
    }

    if (this.theSegment.allowChapters()) {
      Mousetrap.bind("2", function () {
        thePlayer.openChaptersSidebar();
      });
    }

    if (this.theSegment.allowLoops()) {
      Mousetrap.bind("3", function () {
        thePlayer.openLoopsSidebar();
      });
      Mousetrap.bind("j", function () {
        thePlayer.triggerNextLoop();
      });
      Mousetrap.bind("k", function () {
        thePlayer.triggerPreviousLoop();
      });
    }

    Mousetrap.bind("4", function () {
      thePlayer.openFavoritesSidebar();
    });
    Mousetrap.bind("?", function () {
      thePlayer.toggleKeyboardShortcuts();
    });

    if (typeof this.theEngine !== "undefined") {
      Mousetrap.bind("space", function () {
        thePlayer.theEngine.onButtonTogglePlayback();
      });
      Mousetrap.bind("right", function () {
        thePlayer.theEngine.onButtonPlaybackForward1();
      });
      Mousetrap.bind("left", function () {
        thePlayer.theEngine.onButtonPlaybackRewind1();
      });
      Mousetrap.bind("alt+right", function () {
        thePlayer.theEngine.onButtonPlaybackForward5();
      });
      Mousetrap.bind("alt+left", function () {
        thePlayer.theEngine.onButtonPlaybackRewind5();
      });
      Mousetrap.bind("i", function () {
        thePlayer.theEngine.onButtonRestartLoop();
      });
      Mousetrap.bind("shift+right", function () {
        thePlayer.theEngine.onButtonPlaybackForwardPoint5();
      });
      Mousetrap.bind("shift+left", function () {
        thePlayer.theEngine.onButtonPlaybackRewindPoint5();
      });
      Mousetrap.bind("shift+up", function () {
        thePlayer.theEngine.onButtonPlaybackRestart();
      });
      Mousetrap.bind("a", function () {
        thePlayer.theEngine.onButtonSetLoopStart();
      });
      Mousetrap.bind("b", function () {
        thePlayer.theEngine.onButtonSetLoopEnd();
      });
      Mousetrap.bind("l", function () {
        thePlayer.theEngine.onButtonToggleLooping();
      });
      Mousetrap.bind("s+up", function () {
        thePlayer.theEngine.increasePlaybackRate();
      });
      Mousetrap.bind("s+down", function () {
        thePlayer.theEngine.decreasePlaybackRate();
      });
      Mousetrap.bind("z", function () {
        thePlayer.theEngine.toggleZoomEnabled();
      });
      Mousetrap.bind("/", function () {
        thePlayer.theEngine.toggleVideoControls();
      });
      $("#playback-play").keydown(function (event) {
        event.preventDefault();
      });
    }

    $("body").keydown(function (event) {
      //console.log('Body received key: ' + event.which);
      //console.log(event);
      if (event.which === 32 && (event.target.nodeName === "BODY" || event.target.nodeName === "A")) {
        event.preventDefault();
      }
    });
  }

  convertOldCookies() {
    //Resolution
    var savedResolution = Cookies.get("resolution");

    if (typeof savedResolution != "undefined") {
      localStorage.setItem("proPlayerResolution", savedResolution);
      Cookies.remove("resolution");
    }

    var savedVolume = Cookies.get("volume");

    if (typeof savedVolume != "undefined") {
      localStorage.setItem("proPlayerVolume", savedVolume);
      Cookies.remove("volume");
    }

    var savedFlip = Cookies.get("playerFlipped");

    if (typeof savedFlip != "undefined") {
      localStorage.setItem("proPlayerFlipped", savedFlip);
      Cookies.remove("playerFlipped");
    }

    var savedHistory = Cookies.getJSON("proPlayerHistory");

    if (typeof savedHistory != "undefined") {
      localStorage.setItem("proPlayerHistory", JSON.stringify(savedHistory));
      Cookies.remove("proPlayerHistory");
    }

    Cookies.remove("packageResumeItems");
    Cookies.remove("savedResumeItems");
    Cookies.remove("recentlyViewed");
    Cookies.remove("savedPlaybackPositions");
  }

  showPlayerError() {//console.log("Player Error");
  }
  /*****************************************
   *************   External Video Code  ************
   *****************************************/


  loadSaveYouTubeInterface() {
    $("#saveYTSegmentFormWrapper").load(gc_BranchPath + "/--ajax-load-save-YT-segment-form", function () {
      thePlayer.pushLoadYTInfo();
    });
  }

  pushLoadYTInfo() {
    $("form#saveYouTubeSegmentForm input[name=title]").val("YouTube: " + this.theSegment.getYouTubeCode());
    $("form#saveYouTubeSegmentForm input[name=cf_media_display_name]").val(this.theSegment.getFullDisplayName());
    $("form#saveYouTubeSegmentForm input[name=cf_media_yt_code]").val(this.theSegment.getYouTubeCode());
    $("form#saveYouTubeSegmentForm input[name=cf_media_short_description]").val(this.theSegment.getDescription());
  }

  submitSaveYouTubeForm() {
    let theName = $("form#saveYouTubeSegmentForm input[name=title]").val();
    let theDisplayName = $("form#saveYouTubeSegmentForm input[name=cf_media_display_name]").val();
    let theYTCode = $("form#saveYouTubeSegmentForm input[name=cf_media_yt_code]").val();

    if (theName !== "" && theDisplayName !== "" && theYTCode !== "") {
      var theForm = $("form#saveYouTubeSegmentForm");
      formData = $(theForm).serialize(); //console.log(formData);

      $.ajax({
        type: "POST",
        url: $(theForm).attr("action"),
        data: formData
      }).done(function (response) {
        //console.log(response);
        $("#saveYTSegmentFormWrapper").empty();
        thePlayer.reloadYouTube();
      });
    }
  }

  reloadYouTube() {
    this.openExternalYouTubeVideo(this.theSegment.getYouTubeCode(), false);
  }

  showYouTubeLinkPrompt() {
    var url = prompt("Enter the YouTube Video Link");

    if (typeof url !== "undefined" || url !== "") {
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      var match = url.match(regExp);

      if (match && match[2].length === 11) {
        this.openExternalYouTubeVideo(match[2], true);
      } else {
        alert("The YouTube link provided was not valid.");
      }
    }
  }

  showFacebookLinkPrompt() {
    var url = prompt("Enter the Facebook Video Link");

    if (typeof url !== "undefined" || url !== "") {
      var regExp = /^(?:(?:https?:)?\/\/)?(?:www\.)?facebook\.com\/([a-zA-Z0-9\.]+)\/videos\/(?:[a-zA-Z0-9\.]+\/)?([0-9]+)/;
      var match = url.match(regExp); //console.log(match);

      if (match) {
        this.openExternalFBVideo(match[1], match[2]);
      } else {
        alert("The Facebook Video link provided was not valid.");
      }
    }
  }

  showInstagramLinkPrompt() {
    var url = prompt("Enter the Instagram Video Link");

    if (typeof url !== "undefined" || url !== "") {
      var regExp = /^(?:https?:\/\/(?:www\.)?)?instagram\.com(?:\/p\/(\w+)\/?)/;
      var match = url.match(regExp); //console.log(match);

      if (match) {
        this.openExternalInstagramVideo(match[1]);
      } else {
        alert("The Instagram Video link provided was not valid.");
      }
    }
  }

  testFetchYouTubeData(strYTCode) {
    $.get(gc_BranchPath + "/--ajax-get-yt-info/" + strYTCode, function (data) {
      var theData = jQuery.parseJSON(data); //console.log(theData);
    });
  }

  startSidebarToggleHover() {
    if (!this.b_KeepSidebarOpen) {
      this.n_SidebarToggleTimerID = setTimeout(function () {
        thePlayer.toggleSidebar();
      }, 250);
    }
  }

  cancelSidebarToggleHover() {
    clearTimeout(this.n_SidebarToggleTimerID);
    n_SidebarToggleTimerID = -1;
  }

  enginePlaybackToggled(bIsPlaying) {
    $("#mediaPlayerWrapper").toggleClass("paused", !bIsPlaying);
    $("#mediaPlayerWrapper").toggleClass("playing", bIsPlaying);
  }

}
class Engine {
  constructor() {
    /*****************************************
     ************* Global Variables  ************
     *****************************************/
    this.MediaPlayer = {};
    this.media = {};
    this.obj_ProgressSlider = {};
    this.obj_SpeedSlider = {};
    this.obj_VolumeSlider = {};
    this.obj_ZoomSlider = {};
    this.PitchShifter = null;
    this.str_MediaCode = "";
    this.str_MediaType = "";
    this.b_PlayerFlipped = false;
    this.f_CurrentTime = 0;
    this.f_PlaybackRate = 1.0;
    this.f_VideoDuration = 0;
    this.f_LoopStartTime = 0;
    this.str_PosterImage = "";
    this.a_Chapters = [];
    this.b_LoopStartTimeSet = false;
    this.f_LoopEndTime = 0;
    this.b_LoopEndTimeSet = false;
    this.b_LoopingActivated = false;
    this.b_ProcessingUserPlaybackToggle = false;
    this.b_IsPlaying = false;
    this.f_CurrentPercent = 0;
    this.b_LoopIsDefined = false;
    this.b_SliderIsUpdating = false;
    this.b_LoopNeedsUpdate = false;
    this.b_PlayerIsReady = false;
    this.b_UserIsDraggingSlider = false;
    this.b_PlayOnLoad = false;
    this.f_LastProgressTime = 10000;
    this.b_RestartingLoop = false;
    this.f_Volume = 0;
    this.b_PlayedOnce = false;
    this.f_StartTime = 0;
    this.a_VideoSources = [];
    this.a_PlaybackSpeeds = [];
    this.f_StartTime = 0;
    this.f_SavedTime = 0;
    this.b_ResumePlaying = false;
    this.b_BlockProgressUpdates = false;
    this.obj_LoadedLoop = {};
    this.obj_PanZoom = {};
    this.obj_Safety = {};
    this.obj_Safety.IWillNotUseThisInPlugins = true;
    this.f_ZoomFactor = 1;
    this.b_ZoomEnabled = false;
    this.f_StartTime = 0;
    this.array_SavedZoom = "matrix(1,0,0,1,0,0)";
    this.str_SavedResolution = "";
    this.f_SavedTime = 0;
    this.b_ProcessingUserPlayback = false;
    this.b_ZoomSliderActivated = false;
    this.b_PitchShiftActivated = false;

    this.getLoopDefined = function () {
      return this.b_LoopIsDefined;
    };

    this.getLoopStart = function () {
      return this.f_LoopStartTime;
    };

    this.getLoopEnd = function () {
      return this.f_LoopEndTime;
    };

    this.initializeProPlayerEngine = function (mediaType, mediaCode, mediaStartTime, posterImage, sourcesArray, chaptersArray) {
      //console.log('initializeProPlayerEngine called');
      this.str_MediaType = mediaType;
      this.f_MediaStartTime = Math.max(mediaStartTime, 0);
      this.str_PosterImage = posterImage;
      this.str_MediaCode = mediaCode; // this.setChaptersArray(chaptersArray);

      this.a_VideoSources = sourcesArray;

      if (this.isVimeo()) {
        this.sortSourcesArray();
      }

      this.initializeProgressSlider();
      this.initializeVolumeSlider();
      this.initializeSpeedSlider();
      this.initializeZoomSlider(); // this.initializePanZoom();
      //this.initializePlaybackSpeeds();

      this.createResolutionRadioButtons(); //this.createPlaybackRateButtons();

      this.restorePlayerCookieSettings(); //this is the final step. All the necessary variables have been setup.
      //Now we're going to initialize VideoJS

      this.initializePlayer();
      this.setVolumeSliderPosition(this.f_Volume);
      this.playerSetVolume(this.f_Volume);

      if (this.f_CurrentTime > 0) {
        this.playerSeekTo(this.f_CurrentTime);
      }
    };

    this.initializePlayer = function () {
      if (this.str_MediaType == "vimeo" || this.str_MediaType == "audio") {
        //console.log('Initializing Vimeo Player');
        theItem = new MediaElementPlayer("videoPlayer", {
          preload: "auto",
          autoplay: false,
          poster: this.str_PosterImage,
          features: ["fullscreen"],
          success: function (mediaElement, originalNode, instance) {
            thePlayer.theEngine.MediaPlayer = instance;
            thePlayer.theEngine.media = mediaElement;

            if (!thePlayer.theEngine.b_PlayerIsReady) {
              thePlayer.theEngine.playerIsReady();
            }
          }
        });

        if (!thePlayer.isIOS() && !thePlayer.isSafari()) {
          this.PitchShifter = new PitchShifter();
        }
      } else if (this.str_MediaType == "youtube") {
        theItem = new MediaElementPlayer("videoPlayer", {
          preload: "none",
          autoplay: 0,
          poster: this.str_PosterImage,
          features: ["fullscreen"],
          success: function (mediaElement, originalNode, instance) {
            thePlayer.theEngine.MediaPlayer = instance;
            thePlayer.theEngine.media = mediaElement;

            if (!thePlayer.theEngine.b_PlayerIsReady) {
              thePlayer.theEngine.playerIsReady();
            }
          }
        });
      } else if (this.str_MediaType == "facebook") {
        theItem = new MediaElementPlayer("videoPlayer", {
          preload: "auto",
          autoplay: false,
          poster: this.str_PosterImage,
          renderers: ["facebook"],
          videoWidth: "100%",
          videoHeight: "100%",
          features: ["fullscreen"],
          success: function (mediaElement, originalNode, instance) {
            thePlayer.theEngine.MediaPlayer = instance;
            thePlayer.theEngine.media = mediaElement;

            if (!thePlayer.theEngine.b_PlayerIsReady) {
              thePlayer.theEngine.playerIsReady();
            }
          }
        });
      }
    };

    this.setChaptersArray = function (theChaptersArray) {
      if (typeof theChaptersArray !== "undefined") {
        this.a_Chapters = theChaptersArray;
        var chapterString = "";

        for (let i = 0; i < this.a_Chapters.length; i++) {
          chapterString += "<div class='chapter-marker' id='chapter-" + i + "'></div>";
        }

        $("#chapters-wrapper").html(chapterString);
      }
    };

    this.prepareForDestruction = function () {
      this.saveCookieValues();

      if (!this.MediaPlayer.paused) {
        this.MediaPlayer.pause();
      }

      $("#videoPlayer").off("play");
      $("#videoPlayer").off("pause");
      $("#videoPlayer").off("loadedmetadata");
      $("#videoPlayer").off("timeupdate");
      $("#videoPlayer").off("ended");
      $("#videoPlayer").off("error");
      $("#videoPlayer").off("canplay");
      this.MediaPlayer.remove();
      $("#mediaPlayerWrapper").remove();

      if (this.PitchShifter !== null) {
        this.PitchShifter.prepareForDestruction();
        delete this.PitchShifter;
      }
    };

    this.playerIsReady = function () {
      //console.log('playerIsReady function called.');
      //console.log('Setting Poster Image To ' + this.str_PosterImage);
      //console.log('Poster Image Is: ' + this.MediaPlayer.poster);
      // Setup callbacks
      $("#videoPlayer").on("play", function () {
        thePlayer.theEngine.playerPlayEventCallback(event);
      });
      $("#videoPlayer").on("pause", function () {
        thePlayer.theEngine.playerPauseEventCallback();
      }); //Plyr has no durationchanged event so trying loadstart instead.

      $("#videoPlayer").on("loadedmetadata", function () {
        thePlayer.theEngine.playerDurationChangedCallback();
      }); //$('#videoPlayer').on("volumechange", function(){ thePlayer.theEngine.playerVolumeChangedCallback() });

      $("#videoPlayer").on("timeupdate", function () {
        thePlayer.theEngine.playerTimeUpdateCallback();
      });
      $("#videoPlayer").on("ended", function () {
        thePlayer.theEngine.playerEndCallback();
      });
      $("#videoPlayer").on("error", function (event) {
        thePlayer.theEngine.playerErrorCallback(event);
      });
      $("#videoPlayer").on("canplay", function () {
        thePlayer.theEngine.playerSourceDataChanged();
      }); //Duration changed callback doesn't fire for audio, so set the duration here.

      this.f_VideoDuration = this.MediaPlayer.duration;

      if (this.str_MediaType == "youtube") {
        //this.MediaPlayer.setSrc( "https://youtube.com/watch?v=" + this.str_MediaCode );
        //this.MediaPlayer.load();
        this.refreshChapterMarkerPositions();

        if (this.b_PlayerFlipped) {
          this.setPlayerFlipped(true);
        }

        $("iframe").bind("contextmenu", function () {
          return false;
        });
        $(".mejs__mediaelement").bind("contextmenu", function () {
          return false;
        });
      } else if (this.str_MediaType == "facebook") {
        //console.log('Setting Facebook Source: https://facebook.com/' + this.str_MediaCode);
        //this.MediaPlayer.setSrc( "https://facebook.com/" + this.str_MediaCode );
        this.MediaPlayer.load();
        this.refreshChapterMarkerPositions();

        if (this.b_PlayerFlipped) {
          this.setPlayerFlipped(true);
        }

        $("iframe").bind("contextmenu", function () {
          return false;
        });
        $(".mejs__mediaelement").bind("contextmenu", function () {
          return false;
        });
      } else if (this.str_MediaType == "vimeo") {
        this.selectInitialSource();

        if (this.b_PlayerFlipped) {
          this.setPlayerFlipped(true);
        }

        $("video").bind("contextmenu", function () {
          return false;
        });
        $(".mejs__mediaelement").bind("contextmenu", function () {
          return false;
        });
      }

      this.playerSetVolume(this.f_Volume);
      this.updateTransportButtons();
      this.b_PlayerIsReady = true;
    };

    this.initializeProgressSlider = function () {
      //console.log('initializeProgressSlider called');

      /***** Initialize Progress Slider *****/
      this.obj_ProgressSlider = document.getElementById("progressSlider");
      noUiSlider.create(this.obj_ProgressSlider, {
        animate: false,
        start: [0],
        range: {
          min: 0,
          max: 1000
        }
      });
      this.obj_ProgressSlider.noUiSlider.on("slide", function () {
        thePlayer.theEngine.progressSliderSliding();
      });
      this.obj_ProgressSlider.noUiSlider.on("change", function () {
        thePlayer.theEngine.progressSliderChanged();
      });
    };

    this.initializeVolumeSlider = function () {
      //console.log('initializeVolumeSlider called');

      /***** Initialize Volume Slider *****/
      this.obj_VolumeSlider = document.getElementById("volumeSlider");
      noUiSlider.create(this.obj_VolumeSlider, {
        animate: false,
        start: 1,
        step: 0.005,
        connect: [true, false],
        orientation: "horizontal",
        direction: "ltr",
        range: {
          min: 0,
          max: 1
        }
      });
      this.obj_VolumeSlider.noUiSlider.on("slide", function () {
        thePlayer.theEngine.volumeSliderChanged();
      });
    };

    this.initializeZoomSlider = function () {
      if (this.str_MediaType !== "audio") {
        /***** Initialize Zoom Slider *****/
        this.obj_ZoomSlider = document.getElementById("zoomSlider");
        noUiSlider.create(this.obj_ZoomSlider, {
          animate: false,
          start: 1,
          step: 0.005,
          connect: [true, false],
          orientation: "horizontal",
          direction: "ltr",
          range: {
            min: 1,
            max: 4
          }
        });
        this.obj_ZoomSlider.noUiSlider.on("slide", function () {
          thePlayer.theEngine.zoomSliderChanged();
        }); //disable zoom until user enables it

        $(this.obj_ZoomSlider).attr("disabled", true);
      }
    };

    this.initializePanZoom = function () {
      //console.log('initializePanZoom called');
      if (this.str_MediaType != "audio") {
        //setup the panzoom object.
        this.obj_PanZoom = $("#mediaPanZoomWrapper");
        this.obj_PanZoom.panzoom({
          contain: "invert",
          minScale: 1,
          maxScale: 4,
          increment: 0.005,
          startTransform: "none"
        });
        this.b_ZoomEnabled = false; //console.log('Setting Panzoom transform...');

        this.obj_PanZoom.panzoom("enable");
        this.obj_PanZoom.panzoom("setTransform", "matrix(1,0,0,1,0,0)");
        this.obj_PanZoom.panzoom("disable");
        $(this.obj_ZoomSlider).attr("disabled", true); //setup the scroll wheel callback

        $(this.obj_PanZoom).parent().on("mousewheel.focal", function (event) {
          if (thePlayer.theEngine.b_ZoomEnabled) {
            event.preventDefault();
            var delta = event.delta || event.originalEvent.wheelDelta;
            var zoomOut = delta ? delta < 0 : event.originalEvent.deltaY > 0; //console.log("Doing mousewheel panzoom");

            thePlayer.theEngine.obj_PanZoom.panzoom("zoom", zoomOut, {
              increment: -0.1,
              animate: true,
              focal: event,
              linearZoom: true,
              rangeStep: 0.01,
              duration: 500
            });
          }
        });
        $(this.obj_PanZoom).on("panzoomzoom", function (e, panzoom) {
          thePlayer.theEngine.syncZoomSliderPosition();
        });
      } else {
        $(this.obj_ZoomSlider).attr("disabled", true);
        $("#enableZoom").attr("disabled", true);
      }
    };
    /*****************************************
     *************  Engine Setters & Getters  ************
     *****************************************/


    this.setIsPlaying = function (newValue) {
      //console.log("setIsPlaying: " + newValue);
      this.b_IsPlaying = newValue;
      thePlayer.enginePlaybackToggled(newValue);
    };

    this.isPlaying = function () {
      return this.b_IsPlaying;
    };

    this.isVimeo = function () {
      return this.str_MediaType == "vimeo";
    };

    this.isAudio = function () {
      return this.str_MediaType == "audio";
    };

    this.isYoutube = function () {
      return this.str_MediaType == "youtube";
    };

    this.togglePitchShiftActivated = function () {
      if (this.PitchShifter !== null && !thePlayer.isIOS() && !thePlayer.isSafari()) {
        if (this.b_PitchShiftActivated) {
          console.log("Disconnecting pitch shifter");
          this.PitchShifter.disconnectVideo();
          this.b_PitchShiftActivated = false;
        } else {
          console.log("Activating pitch shifter");
          this.PitchShifter.initVideoObservers();
          this.b_PitchShiftActivated = true;
        }
      }
    };

    this.toggleZoomEnabled = function () {
      //console.log('Toggling zoom enabled...');
      if (this.b_ZoomEnabled) {
        this.array_SavedZoom = this.obj_PanZoom.panzoom("getTransform");
        this.obj_PanZoom.panzoom("setTransform", "matrix(1,0,0,1,0,0)");
        this.obj_PanZoom.panzoom("disable");
        $(this.obj_ZoomSlider).attr("disabled", true);
        $("#videoPlayer").toggleClass("clickDisabled", false);
        $("#mediaPlayerWrapper").toggleClass("zoomed", false);
        $("#enableZoom").prop("checked", false);
        this.b_ZoomEnabled = false;
      } else {
        //console.log("Toggling zoom ON");
        this.obj_PanZoom.panzoom("enable");
        this.b_ZoomEnabled = true;
        $("#enableZoom").prop("checked", true);
        $("#videoPlayer").toggleClass("clickDisabled", true);
        $(this.obj_ZoomSlider).removeAttr("disabled");
        $("#mediaPlayerWrapper").toggleClass("zoomed", true);
        this.obj_PanZoom.panzoom("setTransform", this.array_SavedZoom);
        this.syncZoomSliderPosition();
      }
    };

    this.sortSourcesArray = function () {
      //first we'll filter out the HLS source for everything but iOS, but filter
      //out everything else for iOS.
      let newArray = [];

      for (let i = 0; i < this.a_VideoSources.length; ++i) {
        if (thePlayer.isIOS()) {
          if (this.a_VideoSources[i]["resolution"] == "Auto") {//newSource = this.a_VideoSources[i];
            //newArray.push( newSource );
          } else {
            newSource = this.a_VideoSources[i];

            if (newSource["resolution"] == "720" || newSource["resolution"] == "720p60" || newSource["resolution"] == "1080" || newSource["resolution"] == "1080p60") {
              newSource["hd"] = "hd";
            } else {
              newSource["hd"] = "";
            }

            newArray.push(newSource);
          }
        } else {
          if (this.a_VideoSources[i]["resolution"] != "Auto") {
            newSource = this.a_VideoSources[i];

            if (newSource["resolution"] == "720" || newSource["resolution"] == "720p60" || newSource["resolution"] == "1080" || newSource["resolution"] == "1080p60") {
              newSource["hd"] = "hd";
            } else {
              newSource["hd"] = "";
            }

            newArray.push(newSource);
          }
        }
      } //Now we have an array of sources that only contains the sources
      //appropriate for this platform.


      this.a_VideoSources = newArray; //Now, if we're not on iOS, scan through the sources and add p60
      //where necessary.

      this.a_VideoSources.sort(function (a, b) {
        return b["size"] - a["size"];
      });

      for (let i = 1; i < this.a_VideoSources.length; ++i) {
        var src1 = this.a_VideoSources[i];
        var src2 = this.a_VideoSources[i - 1];

        if (src1["resolution"] == src2["resolution"]) {
          if (src1["size"] > src2["size"]) {
            src1["resolution"] += "p60";
          } else {
            src2["resolution"] += "p60";
          }
        }
      }
    };

    this.selectInitialSource = function () {
      var srcURL = "";
      var selectedSourceIndex = 0;

      if (this.str_SavedResolution != "") {
        for (let i = 0; i < this.a_VideoSources.length; ++i) {
          if (this.str_SavedResolution == this.a_VideoSources[i]["resolution"]) {
            srcURL = this.a_VideoSources[i]["url"];
            selectedSourceIndex = i;
            break;
          }
        } //if we couldn't find an exact match, find the next closest


        if (srcURL == "") {
          for (let i = 0; i < this.a_VideoSources.length; ++i) {
            //trim off p60
            strBaseResolution = this.str_SavedResolution.toString().substring(0, 3);
            strSourceResolution = this.a_VideoSources[i]["resolution"];

            if (strSourceResolution.search(strBaseResolution) > -1) {
              srcURL = this.a_VideoSources[i]["url"];
              selectedSourceIndex = i;
              break;
            }
          }
        } //if we still didn't find a match, default to the lowest


        if (srcURL == "") {
          srcURL = this.a_VideoSources[this.a_VideoSources.length - 1]["url"];
          selectedSourceIndex = this.a_VideoSources.length - 1;
        }
      } else {
        srcURL = this.a_VideoSources[this.a_VideoSources.length - 1]["url"];
        selectedSourceIndex = this.a_VideoSources.length - 1;
      }

      this.playerSetActiveSource(selectedSourceIndex);
    };

    this.loadYTSourcesArray = function () {
      //console.log("loadYTSourcesArray called.");
      return;
      /*
          if( this.isYoutube() )
          {
              var videoQualities = this.MediaPlayer.sources;//tech(this.obj_Safety).ytPlayer.getAvailableQualityLevels();
              var iResolutionIndex = 0;
              for(let i = 0; i < videoQualities.length; i++)
              {
                  //console.log("Found YT Quality named: " + videoQualities[i]);
                  var sourceObject = {};
                  var resolutionString = this.convertYTString( videoQualities[i] )
                  if( resolutionString != '144' && resolutionString != '240')
                  {
                      sourceObject["resolution"] = resolutionString;
                      if(resolutionString == "720" || resolutionString == "720p60" || resolutionString == "1080" || resolutionString == "1080p60")
                      {
                          sourceObject["hd"] = "hd";
                      }
                      else
                      {
                          sourceObject["hd"] = "";
                      }
                      this.a_VideoSources[iResolutionIndex] = sourceObject;
                      iResolutionIndex++;
                  }
              }
          }
          */
    };

    this.initializeSpeedSlider = function () {
      if (this.str_MediaType == "vimeo" || this.str_MediaType == "audio") {
        //console.log('initializeSpeedSlider called');

        /***** Initialize Volume Slider *****/
        this.obj_SpeedSlider = document.getElementById("speedSlider");
        noUiSlider.create(this.obj_SpeedSlider, {
          animate: false,
          start: 1,
          step: 0.1,
          connect: [true, false],
          orientation: "horizontal",
          direction: "ltr",
          range: {
            min: 0.3,
            max: 1.5
          }
        });
        this.obj_SpeedSlider.noUiSlider.on("slide", function () {
          thePlayer.theEngine.speedSliderChanged();
        });
      } else if (this.str_MediaType == "youtube") {
        this.obj_SpeedSlider = document.getElementById("speedSlider");
        noUiSlider.create(this.obj_SpeedSlider, {
          animate: false,
          start: 1,
          step: 0.25,
          connect: [true, false],
          orientation: "horizontal",
          direction: "ltr",
          range: {
            min: 0.25,
            max: 1.5
          }
        });
        this.obj_SpeedSlider.noUiSlider.on("slide", function () {
          thePlayer.theEngine.speedSliderChanged();
        });
      } else if (this.str_MediaType == "youtube") {//Facebook doesn't support slowing down of videos yet.
      }
    };
    /*
      this.initializePlaybackSpeeds = function()
      {
          if( this.str_MediaType == 'vimeo' || this.str_MediaType == 'audio')
          {
              var speedItem = {};
              
              speedItem["label"] = "125%";
              speedItem["factor"] = 1.25;
              this.a_PlaybackSpeeds[0] = speedItem;
              
              speedItem = {};
              speedItem["label"] = "100%";
              speedItem["factor"] = 1.0;
              this.a_PlaybackSpeeds[1] = speedItem;
              speedItem = {};
              speedItem["label"] = "85%";
              speedItem["factor"] = .85;
              this.a_PlaybackSpeeds[2] = speedItem;
              speedItem = {};
              speedItem["label"] = "75%";
              speedItem["factor"] = .75;
              this.a_PlaybackSpeeds[3] = speedItem;
              speedItem = {};
              speedItem["label"] = "60%";
              speedItem["factor"] = .6;
              this.a_PlaybackSpeeds[4] = speedItem;
              speedItem = {};
              speedItem["label"] = "50%";
              speedItem["factor"] = .5;
              this.a_PlaybackSpeeds[5] = speedItem;
              speedItem = {};
              speedItem["label"] = "25%";
              speedItem["factor"] = .25;
              this.a_PlaybackSpeeds[6] = speedItem;
          }
          else if( this.str_MediaType == 'youtube')
          {
              speedItem = {};
              speedItem["label"] = "150%";
              speedItem["factor"] = 1.5;
              this.a_PlaybackSpeeds[0] = speedItem;
              speedItem = {};
              speedItem["label"] = "125%";
              speedItem["factor"] = 1.25;
              this.a_PlaybackSpeeds[1] = speedItem;
              speedItem = {};
              speedItem["label"] = "100%";
              speedItem["factor"] = 1.0;
              this.a_PlaybackSpeeds[2] = speedItem;
              speedItem = {};
              speedItem["label"] = "75%";
              speedItem["factor"] = .75;
              this.a_PlaybackSpeeds[3] = speedItem;
              speedItem = {};
              speedItem["label"] = "50%";
              speedItem["factor"] = .5;
              this.a_PlaybackSpeeds[4] = speedItem;
              speedItem = {};
              speedItem["label"] = "25%";
              speedItem["factor"] = .25;
              this.a_PlaybackSpeeds[5] = speedItem;
          }
      }
      */

    /*****************************************
     *************  Callback Functions   ************
     *****************************************/


    this.playerPauseEventCallback = function () {
      //console.log('playerPauseEventCallback called.');
      //console.log('Proccesing user input is ' + this.b_ProcessingUserPlaybackToggle);
      if (!this.b_ProcessingUserPlaybackToggle) {
        this.setIsPlaying(false);
      } else {
        this.b_ProcessingUserPlaybackToggle = false;
      }

      this.updateTransportButtons();
    };

    this.playerPlayEventCallback = function (event) {
      if (!this.b_PlayedOnce) {
        this.refreshChapterMarkerPositions();
        this.updateSelectedSpeed();
        this.updateSelectedResolution();
        this.b_PlayedOnce = true;
      }

      if (!this.b_ProcessingUserPlaybackToggle) {
        this.setIsPlaying(true);
      } else {
        this.b_ProcessingUserPlaybackToggle = false;
      }

      this.updateTransportButtons(); // Only used for videos with a hard coded start time that is not 0;

      if (this.isPlaying() && this.f_CurrentTime < this.f_StartTime) {
        this.playerSeekTo(this.f_StartTime);
      }
    };

    this.playerDurationChangedCallback = function () {
      //console.log('playerDurationChangedCallback called.');
      this.f_VideoDuration = this.MediaPlayer.duration;
      this.refreshChapterMarkerPositions();
    };

    this.playerVolumeChangedCallback = function () {
      /*
          //console.log("playerVolumeChangedCallback called.");
          this.f_Volume = this.MediaPlayer.volume;
          this.setVolumeSliderPosition(this.f_Volume);
          //console.log("Saving Volume During Callback: " + this.f_Volume);
          localStorage.setItem('proPlayerVolume', this.f_Volume);
          */
      //Why would we take volume changes from the player?
    };

    this.playerTimeUpdateCallback = function () {
      //console.log("timeUpdateCalled");
      if (!this.b_BreakProgressUpdates && !this.b_UserIsDraggingSlider) {
        if (!this.b_RestartingLoop) {
          this.f_CurrentTime = this.MediaPlayer.currentTime;
          this.f_VideoDuration = this.MediaPlayer.duration;
          this.f_CurrentPercent = this.f_CurrentTime / this.f_VideoDuration;
          this.obj_ProgressSlider.noUiSlider.set(this.f_CurrentPercent * 1000);
          $("#current-time").html(this.secondsToMinutes(this.f_CurrentTime));

          if (this.f_VideoDuration > 0) {
            $("#time-left").html(this.secondsToMinutes(this.f_VideoDuration - this.f_CurrentTime));
          }

          if (this.b_LoopIsDefined) {
            if (this.b_LoopNeedsUpdate) {
              this.f_LoopStartTimePercent = this.f_LoopStartTime / this.f_VideoDuration * 100;
              this.f_LoopEndTimePercent = this.f_LoopEndTime / this.f_VideoDuration * 100;
              loopWidth = Math.max(0.1, this.f_LoopEndTimePercent - this.f_LoopStartTimePercent);
              $("#loop-region").css("left", this.f_LoopStartTimePercent.toString() + "%");
              $("#loop-region").css("width", loopWidth.toString() + "%");
              this.b_LoopNeedsUpdate = false;
            }

            if (this.b_LoopingActivated && this.f_CurrentTime >= this.f_LoopEndTime) {
              this.b_RestartingLoop = true;
              currentRate = this.media.getPlaybackRate();
              this.playerSeekTo(this.f_LoopStartTime);
              this.media.setPlaybackRate(currentRate);
              this.b_RestartingLoop = false;
            }
          }
        } else {//console.log('Time Update Skipped, Step 2');
        }
      } else {//console.log('Time Update Skipped, Step 1');
      }
    };

    this.playerEndCallback = function () {
      //console.log('playerEndCallback called');
      var savedPlaybackPositions = JSON.parse(localStorage.getItem("proPlayerPlaybackLocations"));

      if (savedPlaybackPositions !== null) {
        var removeIndex = -1;

        for (let i = 0; i < savedPlaybackPositions.length; i++) {
          if (savedPlaybackPositions[i].mediaCode == this.str_MediaCode) {
            removeIndex = i;
            break;
          }
        }

        if (removeIndex > -1) {
          savedPlaybackPositions.splice(removeIndex, 1);
        }

        localStorage.setItem("proPlayerPlaybackLocations", JSON.stringify(savedPlaybackPositions));
      }

      this.f_CurrentTime = 0;
      this.playerSeekTo(this.f_CurrentTime);
      this.updateTransportButtons();
    };

    this.playerErrorCallback = function (event) {//console.log('playerErrorCallback called');
      //console.log(event);
      //		errorMessage = this.MediaPlayer.error;

      /*if(errorMessage.code == 4)
          {
              alert("The video could not be loaded. This is probably an error with our video hosting service. If this continues to happen, please let us know through the support page at http://texasbluesalley.com/hq/support");
          }
          else if (errorMessage.code == 3)
          {
              alert("Looks like there's been an error playing the video. This error happens frequently in Internet Explorer (or Edge) on Window 10 systems. We recommend Google Chrome or Firefox for a better experience.");
          }*/
    };

    this.vimeoLoadingError = function () {
      alert("The video could not be loaded. This is probably an error with our video hosting service. If this continues to happen, please let us know through the support page at http://texasbluesalley.com/hq/support");
    };
    /*****************************************
     ******   Progress Slider Functions  ******
     *****************************************/


    this.progressSliderSliding = function () {
      //console.log('progressSliderSliding called');
      this.b_UserIsDraggingSlider = true;
    };

    this.progressSliderChanged = function () {
      //console.log('progressSliderChanged called');
      this.b_UserIsDraggingSlider = false;
      sliderValue = this.obj_ProgressSlider.noUiSlider.get();
      this.f_CurrentPercent = sliderValue / 1000;
      this.f_CurrentTime = this.f_VideoDuration * this.f_CurrentPercent;
      this.playerSeekTo(this.f_CurrentTime);
    };
    /*****************************************
     *****	Control Button Callbacks	 *****
     *****************************************/


    this.onButtonPlaybackRestart = function () {
      //console.log('onButtonPlaybackRestart called');
      if (this.isPlaying() && !this.b_LoopingActivated) {
        this.playerSeekTo(this.f_StartTime);
        this.b_LoopingActivated = false;
      }
    };

    this.onButtonPlaybackRewindPoint5 = function () {
      if (this.isPlaying()) {
        var newTime = this.f_CurrentTime - 0.5;

        if (this.b_LoopingActivated) {
          newTime = Math.max(newTime, this.f_LoopStartTime);
        }

        newTime = Math.max(newTime, 0);
        this.playerSeekTo(newTime);
      }
    };

    this.onButtonPlaybackForwardPoint5 = function () {
      if (this.isPlaying()) {
        var newTime = this.f_CurrentTime + 0.5;

        if (this.b_LoopingActivated) {
          newTime = Math.min(newTime, this.f_LoopEndTime);
        }

        newTime = Math.min(newTime, this.f_VideoDuration);
        this.playerSeekTo(newTime);
      }
    };

    this.onButtonPlaybackRewind1 = function () {
      if (this.isPlaying()) {
        var newTime = this.f_CurrentTime - 1;

        if (this.b_LoopingActivated) {
          newTime = Math.max(newTime, this.f_LoopStartTime);
        }

        newTime = Math.max(newTime, 0);
        this.playerSeekTo(newTime);
      }
    };

    this.onButtonPlaybackForward1 = function () {
      //console.log('onButtonPlaybackForward1 called');
      if (this.isPlaying()) {
        var newTime = this.f_CurrentTime + 1;

        if (this.b_LoopingActivated) {
          newTime = Math.min(newTime, this.f_LoopEndTime);
        }

        newTime = Math.min(newTime, this.f_VideoDuration);
        this.playerSeekTo(newTime);
      }
    };

    this.onButtonPlaybackRewind5 = function () {
      if (this.isPlaying()) {
        var newTime = this.f_CurrentTime - 5;

        if (this.b_LoopingActivated) {
          newTime = Math.max(newTime, this.f_LoopStartTime);
        }

        newTime = Math.max(newTime, 0);
        this.playerSeekTo(newTime);
      }
    };

    this.onButtonPlaybackForward5 = function () {
      //console.log('onButtonPlaybackForward1 called');
      if (this.isPlaying()) {
        var newTime = this.f_CurrentTime + 5;

        if (this.b_LoopingActivated) {
          newTime = Math.min(newTime, this.f_LoopEndTime);
        }

        newTime = Math.min(newTime, this.f_VideoDuration);
        this.playerSeekTo(newTime);
      }
    };

    this.onButtonTogglePlayback = function () {
      //console.log('onButtonTogglePlayback called.');
      this.b_ProcessingUserPlaybackToggle = true;

      if (!this.isPlaying()) {
        this.setIsPlaying(true);
        this.playerPlay();
      } else {
        this.setIsPlaying(false);
        this.playerPause();
      }

      this.updateTransportButtons();
    };

    this.stopPlayback = function () {
      if (this.isPlaying()) {
        this.onButtonTogglePlayback();
      }
    };

    this.startPlayback = function () {
      if (!this.isPlaying()) {
        this.onButtonTogglePlayback();
      }
    };

    this.onButtonRestartLoop = function () {
      if (this.b_LoopIsDefined && this.b_LoopingActivated) {
        this.playerSeekTo(this.f_LoopStartTime);
      }
    };

    this.onButtonSetLoopStart = function () {
      //console.log('onButtonSetLoopStart called');
      if (!this.b_LoopingActivated) {
        this.f_LoopStartTime = this.f_CurrentTime.toFixed(3);

        if (this.f_CurrentTime > this.f_LoopEndTime) {
          this.b_LoopIsDefined = false;
          this.b_LoopEndTimeSet = false;
        } else {
          this.b_LoopIsDefined = this.b_LoopEndTimeSet;
        }

        this.b_LoopStartTimeSet = true;
        this.f_LoopEndTime = this.f_LoopEndTime > this.f_LoopStartTime ? this.f_LoopEndTime : Math.min(this.f_LoopStartTime + 1, this.f_VideoDuration);
        this.b_LoopNeedsUpdate = true;
        this.updateTransportButtons();
        thePlayer.engineLoopHasChanged();
      }
    };

    this.onButtonSetLoopEnd = function () {
      //console.log('onButtonSetLoopEnd called');
      if (!this.b_LoopingActivated) {
        this.f_LoopEndTime = this.f_CurrentTime.toFixed(3);

        if (this.f_CurrentTime <= this.f_LoopStartTime) {
          this.b_LoopIsDefined = false;
          this.b_LoopStartTimeSet = false;
        } else {
          this.b_LoopIsDefined = this.b_LoopStartTimeSet;
        }

        this.b_LoopEndTimeSet = true;
        this.f_LoopStartTime = this.f_LoopStartTime < this.f_LoopEndTime ? this.f_LoopStartTime : Math.max(0, this.f_LoopEndTime - 1);
        this.b_LoopNeedsUpdate = true;
        this.updateTransportButtons();
        thePlayer.engineLoopHasChanged();
      }
    };

    this.onButtonToggleLooping = function () {
      if (this.b_LoopIsDefined) {
        if (this.b_LoopingActivated) {
          this.b_LoopingActivated = false;
        } else {
          if (!this.isPlaying()) {
            this.onButtonTogglePlayback();
          }

          if (this.f_LoopStartTime < this.f_LoopEndTime && this.b_LoopIsDefined) {
            this.b_LoopingActivated = true;
            this.playerSeekTo(this.f_LoopStartTime);
          }
        }

        this.updateTransportButtons();
      }
    };

    this.stopLooping = function () {
      this.b_LoopIsDefined = 0;
      this.b_LoopingActivated = false;
      this.updateTransportButtons();
    };
    /************************************************************
     *************   Playback Rate Keyboard Callbacks  ************
     ************************************************************/


    this.decreasePlaybackRate = function () {
      var currentRate = this.media.getPlaybackRate();

      if (currentRate > 0.25) {
        if (currentRate == 1.25) {
          if (this.str_MediaType == "youtube") {
            currentRate = 1.0;
          } else {
            currentRate = 1.0;
          }
        } else if (currentRate == 1.0) {
          currentRate = 0.85;
        } else if (currentRate == 0.85) {
          currentRate = 0.75;
        } else if (currentRate == 0.75) {
          currentRate = 0.6;
        } else if (currentRate == 0.6) {
          currentRate = 0.5;
        } else if (currentRate == 0.5) {
          currentRate = 0.25;
        }

        this.media.setPlaybackRate(currentRate);
        this.updateSelectedSpeed();
      }
    };

    this.increasePlaybackRate = function () {
      var currentRate = this.media.getPlaybackRate();

      if (currentRate < 1.25) {
        if (currentRate == 1.0) {
          currentRate = 1.25;
        } else if (currentRate == 0.85) {
          currentRate = 1.0;
        } else if (currentRate == 0.75) {
          currentRate = 0.85;
        } else if (currentRate == 0.6) {
          currentRate = 0.75;
        } else if (currentRate == 0.5) {
          if (this.str_MediaType == "youtube") {
            currentRate = 1;
          } else {
            currentRate = 0.6;
          }
        } else if (currentRate == 0.25) {
          currentRate = 0.5;
        }

        this.media.setPlaybackRate(currentRate);
        this.updateSelectedSpeed();
      }
    };
    /*****************************************
     ******	Bookmarking and Looping	 *********
     *****************************************/


    this.goToChapter = function (timeStart) {
      //console.log("goToChapter called: " + timeStart);
      if (!this.isPlaying()) {
        this.onButtonTogglePlayback();
      }

      if (this.b_LoopingActivated) {
        this.onButtonToggleLooping();
      }

      this.playerSeekTo(timeStart);
      this.updateTransportButtons();
    };

    this.loadLoop = function (timeStart, timeStop) {
      //console.log("loadLoop called: " + timeStart + ", " + timeStop);
      if (!this.isPlaying()) {
        this.onButtonTogglePlayback();
      }

      this.b_LoopIsDefined = true;
      this.b_LoopNeedsUpdate = true;
      this.b_LoopingActivated = true;
      this.f_LoopStartTime = timeStart;
      this.f_LoopEndTime = Math.max(timeStop, this.f_LoopStartTime + 0.1);
      this.updateTransportButtons();

      if (this.f_LoopStartTime > this.f_CurrentTime) {
        this.playerSeekTo(this.f_LoopStartTime);
      } else if (this.f_LoopEndTime < this.f_CurrentTime) {
        this.playerSeekTo(this.f_LoopStartTime);
      }
    };
    /*****************************************
     ******	Direct Player Functions	**********
     *****************************************/


    this.playerSeekTo = function (value) {
      //console.trace();
      //console.log('playerSeekTo: ' + value);
      this.MediaPlayer.setCurrentTime(value);
    };

    this.playerPlay = function () {
      //console.log('playerPlay called.');
      this.setIsPlaying(true);
      this.MediaPlayer.play();
    };

    this.playerPause = function () {
      //console.log('playerPause called.');
      this.setIsPlaying(false);
      this.MediaPlayer.pause();
    };

    this.playerSetVolume = function (value) {
      //console.log('playerSetVolume:' + value);
      this.MediaPlayer.volume = value;
    };

    this.playerSetActiveSource = function (sourceIndex) {
      if (!this.isYoutube()) {
        var theSource = this.a_VideoSources[sourceIndex];
        var newSource = {
          type: "video",
          sources: [{
            src: theSource.url,
            type: "video/mp4"
          }],
          poster: this.str_PosterImage
        };
        this.media.setSrc(theSource.url);
        this.media.load();
      }
    };
    /*****************************************
     ********	Interface Status	**********
     *****************************************/


    this.stopIfPlaying = function () {
      if (this.isPlaying()) {
        this.onButtonTogglePlayback();
      }
    };

    this.updateTransportButtons = function () {
      //console.log('updateTransportButtons called.');
      $("#playback-play").prop("disabled", false);

      if (this.isPlaying()) {
        $("#playback-play").html('<i class="fa fa-pause"></i>');
      } else {
        $("#playback-play").html('<i class="fa fa-play"></i>');
      }

      $("#playback-beginning").prop("disabled", !this.isPlaying() || this.b_LoopingActivated);
      $("#playback-rewind").prop("disabled", !this.isPlaying());
      $("#playback-forward").prop("disabled", !this.isPlaying());
      $("#looping-start").prop("disabled", this.b_LoopingActivated);
      $("#looping-start").toggleClass("set", this.b_LoopStartTimeSet);
      $("#looping-stop").prop("disabled", this.b_LoopingActivated);
      $("#looping-stop").toggleClass("set", this.b_LoopEndTimeSet);
      $("#looping-toggle").prop("disabled", !(this.isPlaying() && this.b_LoopIsDefined));
      $("#loop-region").toggle(this.b_LoopIsDefined);
      $("#progressSlider").toggleClass("looping", this.b_LoopingActivated);

      if (this.b_LoopIsDefined) {
        if (this.b_LoopNeedsUpdate) {
          this.f_LoopStartTimePercent = this.f_LoopStartTime / this.f_VideoDuration * 100;
          this.f_LoopEndTimePercent = this.f_LoopEndTime / this.f_VideoDuration * 100;
          loopWidth = Math.max(0.1, this.f_LoopEndTimePercent - this.f_LoopStartTimePercent);
          $("#loop-region").css("left", this.f_LoopStartTimePercent.toString() + "%");
          $("#loop-region").css("width", loopWidth.toString() + "%");
          this.b_LoopNeedsUpdate = false;
        }
      }

      $("#looping-toggle").toggleClass("engaged", this.b_LoopingActivated);

      if (this.b_LoopingActivated && this.isPlaying()) {
        $("#looping-toggle").html('<i class="fa fa-spin fa-refresh"></i>');
      } else {
        $("#looping-toggle").html('<i class="fa fa-refresh"></i>');
      }
    };

    this.refreshChapterMarkerPositions = function () {
      //console.log('refreshChapterMarkerPositions called.');
      if (this.f_VideoDuration > 0) {
        var chapterDivs = $(".chapter-marker");

        for (let i = 0; i < chapterDivs.length; i++) {
          var leftPercent = this.a_Chapters[i][1] / this.f_VideoDuration * 100;
          $(chapterDivs[i]).css("left", leftPercent.toString() + "%");
        }
      } else {}
    };

    this.setPlayerSpeed = function (speed) {
      var desiredSpeed = parseFloat(speed);
      var theSpeed = Math.max(0.25, desiredSpeed);
      theSpeed = Math.min(1.5, theSpeed);
      this.f_PlaybackRate = theSpeed;
      this.media.setPlaybackRate(this.f_PlaybackRate);
    };

    this.restorePlaybackRate = function () {
      //this function is used to set the player back to the playback rate that was last selected
      //after pitch shifting is turned on.
      console.log("Original playback rate is: " + this.f_PlaybackRate);
      this.setPlayerSpeed(this.f_PlaybackRate);
    };

    this.volumeSliderChanged = function () {
      var sliderValue = this.obj_VolumeSlider.noUiSlider.get(); //console.log('volumeSliderChanged called.');

      var theVolume = Math.max(0, sliderValue);
      theVolume = Math.min(1, theVolume);
      this.f_Volume = theVolume;
      this.playerSetVolume(this.f_Volume);
      localStorage.setItem("proPlayerVolume", this.f_Volume);
    };

    this.speedSliderChanged = function () {
      var sliderValue = this.obj_SpeedSlider.noUiSlider.get(); //console.log('speedSliderChanged: ' + sliderValue);

      var newSpeed = Math.max(0.25, sliderValue);
      newSpeed = Math.min(1.5, newSpeed); //console.log('Setting Speed: ' + newSpeed);

      this.setPlayerSpeed(newSpeed);
      $("#speedIndicator").text(newSpeed + "x");
      this.f_PlaybackRate = newSpeed;
    };

    this.zoomSliderChanged = function () {
      this.b_ZoomSliderActivated = true;
      var sliderValue = this.obj_ZoomSlider.noUiSlider.get();
      this.setPlayerZoom(sliderValue);
      this.b_ZoomSliderActivated = false;
    };

    this.syncZoomSliderPosition = function () {
      if (!this.b_ZoomSliderActivated) {
        //console.log('syncZoomSliderPosition called.');
        arrayMatrix = this.obj_PanZoom.panzoom("getTransform");
        zoomFactor = arrayMatrix[0];

        if (zoomFactor < 1.01) {
          this.setZoomSliderPosition(1);
          this.obj_PanZoom.panzoom("setTransform", "matrix(1,0,0,1,0,0)");
        } else {
          this.setZoomSliderPosition(zoomFactor);
        }
      }
    };

    this.setVolumeSliderPosition = function (value) {
      //console.log('setVolumeSliderPosition called');
      this.obj_VolumeSlider.noUiSlider.set(this.f_Volume);
    };

    this.setZoomSliderPosition = function (value) {
      this.obj_ZoomSlider.noUiSlider.set(value);
    };

    this.setPlayerZoom = function (zoomFactor) {
      if (zoomFactor < 1.05) {
        this.obj_PanZoom.panzoom("setTransform", "matrix(1, 0, 0, 1, 0, 0)");
      } else {
        //console.log('Setting zoom to ' + zoomFactor);
        this.obj_PanZoom.panzoom("zoom", parseFloat(zoomFactor));
        $("#main-column").toggleClass("zoomed", true);
        let theArray = this.obj_PanZoom.panzoom("getTransform"); //console.log("Current Transform After Zoom Is: " + theArray);
      }
    };

    this.createResolutionRadioButtons = function () {
      //console.log('createResolutionRadioButtons called.');
      var newSelectHTML = "";

      if (this.str_MediaType != "audio") {
        for (let i = 0; i < this.a_VideoSources.length; i++) {
          newSelectHTML += "<div class='radio-button-wrapper'><input type='radio' name='selectedResolution' id='" + this.a_VideoSources[i]["resolution"] + "' value='" + this.a_VideoSources[i]["resolution"] + "' />";
          newSelectHTML += "<label for='" + this.a_VideoSources[i]["resolution"] + "' class='" + this.a_VideoSources[i]["hd"] + "'>" + this.a_VideoSources[i]["resolution"] + "</label></div>";
        }

        $("#resolutionSelect").html(newSelectHTML);
        $("input[name=selectedResolution]:radio").change(function () {
          thePlayer.theEngine.onUserChangedVideoResolution();
        });
      } else {
        newSelectHTML += "<span class='nonbreaking'><input type='radio' checked disabled /> <label>Default</label></span>";
        $("#resolutionSelect").html(newSelectHTML);
      }
    };
    /*	this.createPlaybackRateButtons = function()
          {
              //console.log("createPlaybackRateButtons called.");
              var speedControlsHTML = "";
              for(let i = 0; i < this.a_PlaybackSpeeds.length; i++)
              {
                  speedControlsHTML += "<div class='radio-button-wrapper'><input type='radio' id='speed-" + i + "' name='selectedSpeed' value='" + this.a_PlaybackSpeeds[i]["factor"] + "' />";
                  speedControlsHTML += "<label for='speed-" + i + "'>" + this.a_PlaybackSpeeds[i]["label"] + "</label></div>";
      
              }
              $('#speedSelect').html(speedControlsHTML);
              $( "input[name=selectedSpeed]:radio" ).change(function(){thePlayer.theEngine.onUserChangedPlaybackRate()});
          }
      */


    this.playerSourceDataChanged = function () {
      //this.playerSeekTo( this.f_SavedTime );
      if (this.b_ResumePlaying) {
        this.playerPlay();
        this.b_ResumePlaying = false;
        this.playerSeekTo(this.f_SavedTime);
      }

      if (this.f_PlaybackRate != 1) {
        this.setPlayerSpeed(this.f_PlaybackRate);
      }

      this.b_BreakProgressUpdates = false;
    };

    this.onUserChangedVideoResolution = function () {
      let radioButtons = $("input[name=selectedResolution]:radio");
      let selectedSource = radioButtons.index(radioButtons.filter(":checked"));
      let sourceObject = this.a_VideoSources[selectedSource];
      let currentTime = this.f_CurrentTime;
      let currentSpeed = this.f_PlaybackRate;
      this.str_SavedResolution = sourceObject["resolution"];
      let bWasZoomed = this.b_ZoomEnabled;

      if (bWasZoomed) {
        this.toggleZoomEnabled();
      }

      if (this.str_MediaType == "vimeo") {
        this.f_SavedTime = this.f_CurrentTime;
        this.b_BreakProgressUpdates = true;
        var srcURL = this.a_VideoSources[selectedSource]["url"];

        if (this.isPlaying()) {
          this.b_ResumePlaying = true;
          this.b_ProcessingUserPlaybackToggle = true;
        }

        this.playerSetActiveSource(selectedSource);
      } else if (this.str_MediaType == "youtube") {
        var resolutionString = this.getYTQualityString(sourceObject["resolution"]);
        this.f_SavedTime = this.f_CurrentTime; //console.log('Attempting to set player resolution to ' + resolutionString)

        this.playerPause(); //this.MediaPlayer.tech(this.obj_Safety).ytPlayer.setPlaybackQuality(resolutionString);

        this.playerPlay();
        this.playerSeekTo(this.f_CurrentTime - 1);
      }
    };
    /*	this.onUserChangedPlaybackRate = function()
          {
              //console.log("Player Speed Changed.")
              var radioButtons = $( "input[name=selectedSpeed]:radio");
              var selectedSpeed = radioButtons.index(radioButtons.filter(':checked'));
              var speedObject = this.a_PlaybackSpeeds[selectedSpeed];
              var newSpeed = speedObject["factor"];
              //console.log("Setting new speed: " + newSpeed);
              this.setPlayerSpeed( newSpeed );
              this.f_PlaybackRate = newSpeed;
          }
          
      */


    this.updateSelectedResolution = function () {
      var selectedSourceIndex = 0;

      if (this.str_MediaType == "vimeo") {
        var currentSource = this.MediaPlayer.src;

        for (let i = 0; i < this.a_VideoSources.length; i++) {
          if (this.a_VideoSources[i]["url"] == currentSource) {
            selectedSourceIndex = i;
            break;
          }
        }
      } else if (this.str_MediaType == "youtube") {
        /*
                  var ytQualityString = this.MediaPlayer.tech(this.obj_Safety).ytPlayer.getPlaybackQuality();
                  var qualityString = this.convertYTString( ytQualityString );
                      for(let i = 0; i < this.a_VideoSources.length; i++)
                  {
                      if( this.a_VideoSources[i]["resolution"] == qualityString)
                      {
                          selectedSourceIndex = i;
                          break;
                      }
                  }*/
      }

      var radioButtons = $("input[name=selectedResolution]:radio");
      $(radioButtons[selectedSourceIndex]).prop("checked", true);
    };

    this.updateSelectedSpeed = function () {
      this.f_PlaybackRate = this.media.getPlaybackRate();
      var selectedSpeedIndex = 0;

      for (let i = 0; i < this.a_PlaybackSpeeds.length; i++) {
        if (this.a_PlaybackSpeeds[i]["factor"] == this.f_PlaybackRate) {
          selectedSpeedIndex = i;
          break;
        }
      }

      var radioButtons = $("input[name=selectedSpeed]:radio");
      $(radioButtons[selectedSpeedIndex]).prop("checked", true);
    };
    /*****************************************
     *************  Cookie Stuff   ************
     *****************************************/


    this.restorePlayerCookieSettings = function () {
      //Restore the last played resolution.
      var savedResolution = localStorage.getItem("proPlayerResolution");

      if (savedResolution === null) {
        savedResolution = 360;
      }

      this.str_SavedResolution = savedResolution;

      if (this.str_SavedResolution < 0 || this.str_SavedResolution > 1080) {
        this.str_SavedResolution = 360;
      } //Restore the last volume setting.


      var savedVolume = localStorage.getItem("proPlayerVolume"); //console.log('Restored volume: ' + savedVolume);

      if (savedVolume !== null) {
        if (savedVolume < 0 || savedVolume > 1) {
          savedVolume = 0.7;
        }
      } else {
        savedVolume = 0.7;
      }

      this.f_Volume = savedVolume; //Restore the player flipped state

      var savedFlip = localStorage.getItem("proPlayerFlipped");

      if (savedFlip !== null) {
        if (savedFlip == "true") {
          this.b_PlayerFlipped = true;
        } else {
          this.b_PlayerFlipped = false;
        }
      }

      var savedPlaybackPositions = JSON.parse(localStorage.getItem("proPlayerPlaybackLocations"));
      var bMatchFound = false;

      if (savedPlaybackPositions !== null) {
        //Playback Positions were found in local storage,
        // now search for a match and load the saved time.
        for (let i = 0; i < savedPlaybackPositions.length; i++) {
          if (savedPlaybackPositions[i]["mediaCode"] == this.str_MediaCode) {
            this.f_SavedTime = savedPlaybackPositions[i]["time"];
            bMatchFound = true;
          }
        }

        if (this.f_SavedTime < 0) {
          this.f_SavedTime = 0;
        } else {
          //console.log("Found saved time for this item");
          this.f_CurrentTime = this.f_SavedTime; //console.log("Setting current time to: " + this.f_CurrentTime);
        }
      }
    };

    this.saveCookieValues = function () {
      //console.log("Saving Volume: " + this.f_Volume);
      localStorage.setItem("proPlayerVolume", this.f_Volume);
      localStorage.setItem("proPlayerResolution", this.str_SavedResolution);
      localStorage.setItem("proPlayerFlipped", this.b_PlayerFlipped);

      if (this.f_CurrentTime < this.f_VideoDuration - 10 && this.f_CurrentTime > 10) {
        //console.log("Starting save playback location");
        var savedPlaybackPositions = JSON.parse(localStorage.getItem("proPlayerPlaybackLocations"));

        if (savedPlaybackPositions == null) {
          savedPlaybackPositions = [];
        }

        var bMatchFound = false;
        var nMatchIndex = 0;

        for (let i = 0; i < savedPlaybackPositions.length; i++) {
          if (savedPlaybackPositions[i].mediaCode == this.str_MediaCode) {
            bMatchFound = true;
            nMatchIndex = i;
            break;
          }
        }

        if (bMatchFound) {
          savedPlaybackPositions[nMatchIndex].time = this.f_CurrentTime;
        } else {
          // attempting to set value of this item in playback positions;
          var newPlaybackPosition = {};
          newPlaybackPosition.mediaType = this.str_MediaType;
          newPlaybackPosition.mediaCode = this.str_MediaCode;
          newPlaybackPosition.time = this.f_CurrentTime;
          savedPlaybackPositions.unshift(newPlaybackPosition);
        } //console.log("Saving playback location");


        localStorage.setItem("proPlayerPlaybackLocations", JSON.stringify(savedPlaybackPositions));
      }
    };
    /*****************************************
     *************   Player Flipping  ************
     *****************************************/


    this.togglePlayerFlipped = function () {
      this.b_PlayerFlipped = !this.b_PlayerFlipped;
      this.setPlayerFlipped(this.b_PlayerFlipped);
    };

    this.setPlayerFlipped = function (isFlipped) {
      if (isFlipped) {
        if (this.str_MediaType == "vimeo") {
          $(".mejs__mediaelement video").toggleClass("flipped", true);
        } else if (this.str_MediaType == "youtube" || this.str_MediaType == "facebook") {
          $(".mejs__mediaelement iframe").toggleClass("flipped", true);
        }

        $(".mejs__poster").toggleClass("flipped", true);
        $("input#flipPlayer").attr("Checked", "Checked");
      } else {
        if (this.str_MediaType == "vimeo") {
          $(".mejs__mediaelement video").toggleClass("flipped", false);
        } else if (this.str_MediaType == "youtube" || this.str_MediaType == "facebook") {
          $(".mejs__mediaelement iframe").toggleClass("flipped", false);
        }

        $(".mejs__poster").toggleClass("flipped", false);
        $("input#flipPlayer").removeAttr("Checked");
      }
    };

    this.convertYTString = function (ytString) {
      var resolutionString = "";

      switch (ytString) {
        case "hd1080":
          resolutionString = "1080";
          break;

        case "hd720":
          resolutionString = "720";
          break;

        case "large":
          resolutionString = "480";
          break;

        case "medium":
          resolutionString = "360";
          break;

        case "small":
          resolutionString = "240";
          break;

        case "tiny":
          resolutionString = "144";
          break;

        case "auto":
          resolutionString = "Auto";
          break;
      }

      return resolutionString;
    };

    this.getYTQualityString = function (qualityString) {
      var resolutionString = "";

      switch (qualityString) {
        case "1080":
          resolutionString = "hd1080";
          break;

        case "720":
          resolutionString = "hd720";
          break;

        case "480":
          resolutionString = "large";
          break;

        case "360":
          resolutionString = "medium";
          break;

        case "240":
          resolutionString = "small";
          break;

        case "144":
          resolutionString = "tiny";
          break;

        case "Auto":
          resolutionString = "auto";
          break;
      }

      return resolutionString;
    };

    this.toggleVideoControls = function () {
      //console.log('Toggling video controls');
      $("#videoControlsMenu").toggle();
      $("#controls-toggle").toggleClass("set");
    };

    this.secondsToMinutes = function (time) {
      var minutes = Math.floor(time / 60);
      var seconds = (time - minutes * 60).toFixed(0).toString();

      if (seconds.length == 1) {
        seconds = "0" + seconds;
      }

      return minutes.toString() + ":" + seconds;
    };
  }

}
class Browser {
  constructor(strWrapperDiv) {
    this.b_BrowserLoaded = false;
    this.strBrowserWrapperID = "#" + strWrapperDiv;
    this.strActiveChannel = "";
    this.n_DependentsToProcess = 0;
    this.n_UpdateTimer = -1;
    this.filterSectionList = new BrowserFilterSectionList(this);
    this.b_IsProcessing = false;

    this.initializeBrowser = function () {};
    /*****************************************
     *** Initialization/Reset Functions  ********
     *****************************************/


    this.openBrowser = function () {};

    this.closeBrowser = function () {
      //console.log('Close Browser Called');
      $(this.strBrowserWrapperID).empty();
      $(this.strBrowserWrapperID).toggle(false);
    };

    this.browserReset = function () {
      $("#filter-level-1 .selected").toggleClass("active", false);
      this.strActiveChannel = "";
      this.browserResetFilters();
      this.resetResults();
      this.n_DependentsToProcess = 0;
      this.filterSectionList.reset();
      this.spinner("results");
      $("#results").load(gc_BranchPath + "/--ajax-browser-default-entries/", function () {
        thePlayer.browserTool.loadResultsFavoritesForms();
      });
      $("#sidebar-instructions").toggleClass("hidden", false);
    };

    this.resetResults = function () {
      $("#results .row").remove();
      $("#results").empty();
    };
    /*****************************************
     *************  Interface Callbacks  ************
     *****************************************/


    this.browserChannelCallback = function (strChannel, sender) {
      if (this.isProcessing()) {
        //console.log("Previous process has not finished, bailing.");
        return;
      }

      this.initializeProcessing();
      this.strActiveChannel = strChannel;
      this.resetResults(); //unselect previously selected content type.

      $("ul.browser-top-filter-list li a.active").toggleClass("active", false);

      if (sender) {
        $(sender).toggleClass("active", true);
      }

      this.browserLoadFilters(strChannel);
    };

    this.toggleSearchFilter = function (strFilterID, strSectionID) {
      if (this.isProcessing()) {
        //console.log("Previous process has not finished, bailing.");
        return;
      }

      this.initializeProcessing();
      let theFilterID = "input#" + strFilterID;
      let theSection = $("#browserFilterSection-" + strSectionID); //console.log(theSection);

      let bEnableStacking = $(theSection).data("section-stackable") == "yes";
      let sectionType = $(theSection).data("section-type");
      let bWasChecked = $(theFilterID).prop("checked");

      if (bWasChecked == undefined) {
        bWasChecked = false;
      }

      if (bWasChecked && !bEnableStacking) {
        //We are toggling on a checkbox, but stacking is not enabled for this section.
        // We must clear all other checked inputs in this group.
        let theCheckboxes = $(theSection).find("input:checkbox");

        for (let i = 0; i < theCheckboxes.length; i++) {
          if ($(theCheckboxes[i]).attr("id") !== strFilterID) {
            //console.log('Unchecking: ' + $(theCheckboxes[i]).attr('id'));
            $(theCheckboxes[i]).prop("checked", false);
          }
        }
      }

      let filterSectionID = "#filterSection-" + strSectionID;
      let theCheckboxes = $(theSection).find("input:checkbox:checked");

      if (theCheckboxes.length > 0) {
        //console.log("Marking section to have filters on: " + filterSectionID);
        $(filterSectionID).toggleClass("has-filters", true);
      } else {
        $(filterSectionID).toggleClass("has-filters", false);
      }

      this.resetResults();
      this.showResultsLoading();
      this.processDependents(strSectionID);
      this.waitForDependentsToFinishUpdating();
    };
    /*****************************************
     *************   Filtering  ************
     *****************************************/


    this.browserResetFilters = function () {
      $("#sidebarFiltersWrapper form").remove();
    };

    this.browserLoadFilters = function (strChannel) {
      this.browserResetFilters();
      this.spinner("sidebarFiltersWrapper");
      var theURL = gc_BranchPath + "/--ajax-browser-filters/" + strChannel;
      $("#sidebarFiltersWrapper").load(theURL, function () {
        if (strChannel != "youtube") {
          thePlayer.browserTool.submitSearch();
          $("#filterAccordion").foundation();
          thePlayer.browserTool.refreshActiveFilters();
          thePlayer.browserTool.buildFilterSectionData();
        } else {
          thePlayer.browserTool.clearActiveFilters();
          thePlayer.browserTool.finalCleanup();
        }
      });
    };

    this.removeKeywordFilter = function () {
      $("#browserSearchKeywordsReset").toggle(false);
      $("input#browserSearchKeywords").val("");
      this.applyKeywordFilter();
    };

    this.removeActiveFilter = function (strFilterID, strSectionID) {
      //first uncheck the filter because that's what would have happened if we clicked
      // on it.
      $("#" + strFilterID).prop("checked", false);
      this.toggleSearchFilter(strFilterID, strSectionID);
    };

    this.clearActiveFilters = function () {
      $("#activeFiltersWrapper").html("");
      $("#activeFiltersWrapper").toggleClass("hidden", true);
    };

    this.refreshActiveFilters = function () {
      //console.log("Refreshing Active Filters");
      let filtersString = "";
      let sections = $("ul#filterAccordion li.accordion-item");

      for (let i = 0; i < sections.length; i++) {
        let sectionTitle = $(sections[i]).children("a.accordion-title").first().text();
        let sectionID = $(sections[i]).data("section-id");
        let checkedFilters = $(sections[i]).find("input:checkbox:checked");

        if (checkedFilters.length > 0) {
          filtersString += "<span class='active-filter-group'><span class='active-filter-group-title'>";
          filtersString += sectionTitle + ":</span> ";

          for (let j = 0; j < checkedFilters.length; j++) {
            filtersString += "<a class='active-filter-item' onClick='thePlayer.browserTool.removeActiveFilter(\"";
            filtersString += $(checkedFilters[j]).attr("id");
            filtersString += '", ';
            filtersString += '"' + sectionID + "\"); return false;'>";
            filtersString += $(checkedFilters[j]).siblings("label").first().text();
            filtersString += " <i class='fa fa-times-circle'></i></a>";
          }

          filtersString += "</span>";
        }
      }

      let strKeywords = $("input#browserSearchKeywords").val();

      if (strKeywords != "") {
        filtersString += "<span class='active-filter-group'><span class='active-filter-group-title'>";
        filtersString += "Keywords:</span> ";
        filtersString += "<a class='active-filter-item' onClick='thePlayer.browserTool.removeKeywordFilter(); return false;'>";
        filtersString += strKeywords;
        filtersString += " <i class='fa fa-times-circle'></i></a>";
        filtersString += "</span>";
      }

      if (filtersString == "") {
        filtersString += "<span class='active-filter-group'><span class='active-filter-group-title'>";
        filtersString += "Showing: All</span>";
        filtersString += "</span>";
      }

      $("#activeFiltersWrapper").removeClass("hidden");
      $("#activeFiltersWrapper").html(filtersString);
    };
    /*****************************************
     *************  Search Results   ************
     *****************************************/


    this.resetSearch = function () {
      $("input:checkbox").prop("checked", false);
      $(".has-filters").removeClass("has-filters");
      this.refreshActiveFilters();
      this.submitSearch();
    };

    this.submitSearch = function () {
      var theForm = $("form#searchForm");
      formData = $(theForm).serialize(); //console.log(formData);

      $.ajax({
        type: "POST",
        url: $(theForm).attr("action"),
        data: formData
      }).done(function (response) {
        $("#results").html(response);
        thePlayer.browserTool.finalCleanup();
        thePlayer.browserTool.loadResultsFavoritesForms();
      });
    };

    this.applyKeywordFilter = function () {
      let theKeywords = $("input#browserSearchKeywords").val();

      if (theKeywords != "") {
        $("#browserSearchKeywordsReset").toggle(true);
      }

      this.refreshActiveFilters();
      this.showResultsLoading();
      this.submitSearch();
    };

    this.doYouTubeSearch = function () {
      if (this.isProcessing()) {
        //console.log("Previous process has not finished, bailing.");
        return;
      }

      this.initializeProcessing();
      let searchPath = gc_BranchPath + "/--ajax-browser-search-youtube/";
      let searchKeywords = $("input#browserSearchKeywords").val();

      if (searchKeywords != "") {
        let searchURL = encodeURI(searchPath + searchKeywords);
        this.resetResults();
        this.showResultsLoading();
        $("#results").load(searchURL, function () {
          thePlayer.browserTool.finalCleanup();
        });
      }
    };

    this.goToResultsPage = function (resultsURL) {
      if (this.isProcessing()) {
        //console.log("Previous process has not finished, bailing.");
        return;
      }

      this.initializeProcessing();
      this.resetResults();
      this.spinner("results");
      $("#results").load(resultsURL, function () {
        thePlayer.browserTool.finalCleanup();
        thePlayer.browserTool.loadResultsFavoritesForms();
      });
    };

    this.nextYouTubeResultsPage = function (strSearchTerm, offsetNumber) {
      if (this.isProcessing()) {
        //console.log("Previous process has not finished, bailing.");
        return;
      }

      this.initializeProcessing();
      this.resetResults();
      this.showResultsLoading();
      var strNextURL = gc_BranchPath + "/";
      strNextURL += "--ajax-browser-search-youtube/";
      strNextURL += strSearchTerm + "/";
      strNextURL += offsetNumber;
      var strNextURL = encodeURI(strNextURL);
      $("#results").load(strNextURL, function () {
        thePlayer.browserTool.finalCleanup();
      });
    };
    /*****************************************
     ******   Dependency Functions  **********
     *****************************************/


    this.buildFilterSectionData = function () {
      this.filterSectionList.reset();
      let allSections = $("ul.filter-list");

      for (let i = 0; i < allSections.length; i++) {
        let newSectionObject = new BrowserFilterSection();
        newSectionObject.setSectionID($(allSections[i]).data("section-id"));
        newSectionObject.setSectionType($(allSections[i]).data("section-type"));
        newSectionObject.setSectionDOMID("#browserFilterSection-" + $(allSections[i]).data("section-id"));
        newSectionObject.setChannelID($(allSections[i]).data("section-channel-id"));
        newSectionObject.setGroupID($(allSections[i]).data("section-group-id"));
        let tmpDependenciesArray = null;
        let tmpDependenciesString = $(allSections[i]).data("section-dependencies");

        if (tmpDependenciesString != "") {
          tmpDependenciesArray = tmpDependenciesString.split("|");
        } else {
          tmpDependenciesArray = [];
        }

        newSectionObject.setParentIDs(tmpDependenciesArray);
        this.filterSectionList.addSection(newSectionObject);
      }

      this.filterSectionList.computeSectionFamilies();
    };

    this.processDependents = function ({
      strMasterSectionID,
      list,
      status
    }) {
      /*
        #Order Of Operations
        
        1. Get an array of dependencies for the master section being changed.
        2. Update each of those dependent sections.
          a. Scan through the sections each dependent section is dependent on.
          b. Get a list of all enabled inputs.
          c. Create the update url and update from that.
      */
      let theSection = list.getSectionByID(strMasterSectionID);
      let theChildren = theSection.getChildren(); //If there aren't any dependents found, there's nothing to do

      if (theChildren.length == 0) {
        return;
      }

      this.n_DependentsToProcess = theChildren.length;
      list.rebuildFilterSectionKeys(status);

      for (let i = 0; i < theChildren.length; i++) {
        let childParents = theChildren[i].getParents(); //initialize our tag and category filter strings

        let theTagKeys = "";
        let theCategoryKeys = ""; //cycle through all sections we depend on and collect any checked input values.

        for (let j = 0; j < childParents.length; j++) {
          let theKeyIDsString = childParents[j].getKeyString();
          let theKeyType = childParents[j].getSectionType();

          if (theKeyType == "tag") {
            theTagKeys += theKeyIDsString;
          } else {
            theCategoryKeys += theKeyIDsString;
          }
        } // Check if any of the key strings is empty and set it to -1,
        // otherwise trim the last | off the end;


        if (theTagKeys == "") {
          theTagKeys = "-1";
        }

        if (theCategoryKeys == "") {
          theCategoryKeys = "-1";
        }
        /*
          Now we have a list of categories and tags to key on (from all sections we
          depend on. We are ready to construct a url to send to the refiner.
        */


        if (theTagKeys !== "-1" || theCategoryKeys !== "-1") {
          let theURL = "/--ajax-browser-filter-refiner/";
          theURL += theChildren[i].getSectionID() + "/"; //what is the ID of the section we're updating

          theURL += theChildren[i].getSectionType() + "/"; //what type of items are we retrieving (cats or tags)

          theURL += theChildren[i].getChannelID() + "/"; //what channel are we looking at

          theURL += theChildren[i].getGroupID() + "/"; //what is the group (cat or tag) that we are filtering

          theURL += theCategoryKeys + "/"; //what are the categories we have to match

          theURL += theTagKeys + "/"; //what are the tags we have to match
          // debugger;
          // $.get(theURL, function(data) {
          //   let theDependent = JSON.parse(data);
          //   thePlayer.browserTool.processDependentFilterSection(theDependent);
          // });

          return theURL;
        } else {// this.restoreFilterSection( theChildren[i].getSectionID() );
        }
      }
    };

    this.processDependentFilterSection = function (dependentObject) {
      let theIDs = dependentObject.ids;
      let theSectionID = dependentObject.sectionID;
      let theInputs = $("#browserFilterSection-" + theSectionID).find("input:checkbox");

      for (let i = 0; i < theInputs.length; i++) {
        let theInputID = $(theInputs[i]).val();
        let theIndex = theIDs.indexOf(parseInt(theInputID));

        if (theIndex == -1) {
          $(theInputs[i]).prop("checked", false);
          $(theInputs[i]).closest("li").toggleClass("hidden", true);
          $(theInputs[i]).closest("li").toggleClass("visible", false);
        } else {
          //console.log("Input WAS found in matching IDs");
          $(theInputs[i]).closest("li").toggleClass("hidden", false);
          $(theInputs[i]).closest("li").toggleClass("visible", true);
        }
      }

      let theFilters = $("#browserFilterSection-" + theSectionID).find("li.filter.visible");

      if (theFilters.length == 0) {
        $("#browserFilterSection-" + theSectionID).closest(".accordion-item").toggleClass("has-filters", false);
        $("#browserFilterSection-" + theSectionID).closest(".accordion-item").hide();
      } else {
        $("#browserFilterSection-" + theSectionID).closest(".accordion-item").show();
      }

      this.dependentFinishedUpdating(theSectionID);
    };

    this.dependentFinishedUpdating = function (strSectionID) {
      this.n_DependentsToProcess--;
    };

    this.waitForDependentsToFinishUpdating = function () {
      if (this.n_DependentsToProcess > 0) {
        this.n_UpdateTimer = setTimeout(function () {
          thePlayer.browserTool.waitForDependentsToFinishUpdating();
        }, 100);
        return;
      }

      clearTimeout(this.n_UpdateTimer);
      this.n_UpdateTimer = -1;
      this.submitSearch();
      this.refreshActiveFilters();
    };

    this.restoreFilterSection = function (strSectionID) {
      let theSection = $("#browserFilterSection-" + strSectionID);
      let theInputs = $(theSection).find("input:checkbox");

      for (let i = 0; i < theInputs.length; i++) {
        $(theInputs[i]).closest("li").toggleClass("hidden", false);
        $(theInputs[i]).closest("li").toggleClass("visible", true);
      }

      $(theSection).closest(".accordion-item").show();
      this.dependentFinishedUpdating(strSectionID);
    };
    /*****************************************
     *************   Fav Forms Loading  ************
     *****************************************/


    this.reloadResultsFavoritesForms = function () {
      let theResults = $(".browser-result-fav-wrapper.fav-enabled");
      let theIDs = "";

      for (let i = 0; i < theResults.length; i++) {
        $(theResults[i]).empty();
      }

      this.loadResultsFavoritesForms();
    };

    this.loadResultsFavoritesForms = function () {
      let theResults = $(".browser-result-fav-wrapper.fav-enabled");
      let theIDs = "";

      for (let i = 0; i < theResults.length; i++) {
        theIDs += $(theResults[i]).data("entry-id");

        if (i != theResults.length - 1) {
          theIDs += "|";
        }
      }

      let theURL = gc_BranchPath + "/--ajax-browser-load-favorite-forms/";
      theURL += theIDs;
      $.get(theURL, function (data) {
        let theFavorites = JSON.parse(data);
        thePlayer.browserTool.pushResultsFavoritesForms(theFavorites);
      });
    };

    this.pushResultsFavoritesForms = function (arrFavorites) {
      let theForms = arrFavorites.formsArray;

      for (let i = 0; i < theForms.length; i++) {
        let theEntryID = theForms[i].itemID;
        let theItem = $("#favWrapper-" + theEntryID);
        $(theItem).html(theForms[i].itemForm);
        let theMetaID = "#browserResultItem-" + theEntryID;

        if (theForms[i].itemChapters != "" && theForms[i].itemChapters != "0") {
          $(theMetaID).toggleClass("has-chapters", true);
        } else {
          $(theMetaID).toggleClass("has-chapters", false);
        }

        if (theForms[i].itemLoops != "" && theForms[i].itemLoops != "0") {
          $(theMetaID).toggleClass("has-loops", true);
        } else {
          $(theMetaID).toggleClass("has-loops", false);
        }

        if (theForms[i].itemUserLoops != "" && theForms[i].itemUserLoops != "0") {
          $(theMetaID).toggleClass("has-user-loops", true);
        } else {
          $(theMetaID).toggleClass("has-user-loops", false);
        }
      }
    };

    this.initializeProcessing = function () {
      //console.log("Initializing Processing.");
      this.b_IsProcessing = true;
      $("#browser-wrapper").toggleClass("updating", true);
    };

    this.isProcessing = function () {
      return this.b_IsProcessing;
    };

    this.finalCleanup = function () {
      // this function should only be called when all operations are done
      // 1. Filters are loaded.
      // 2. Results are loaded
      //console.log("Finished Processing.");
      this.b_IsProcessing = false;
      $("#browser-wrapper").toggleClass("updating", false);
    };

    this.toggleFavoriteInBrowser = function (sender) {
      //console.log('Submitting Favorite');
      var formID = $(sender).closest("form.submitFavoriteForm");
      courseID = $(formID).attr("data-id");
      formData = $(formID).serialize();
      badgeWrapperID = $(formID).closest(".browser-result-fav-wrapper").attr("id");
      $("#" + badgeWrapperID + " button").html('<i class="fa fa-spinner fa-spin fa-2x"></i>');
      $.ajax({
        type: "POST",
        url: $(formID).attr("action"),
        data: formData
      }).done(function (response) {
        $("#" + badgeWrapperID).load(gc_BranchPath + "/--ajax-browser-favorite-entry/" + courseID);
      });
    };
    /*****************************************
     *****   Misc Display Functions  *********
     *****************************************/


    this.spinner = function (elementID) {
      var strSpinner = "<div id='spinner'><i class='fa fa-spinner fa-spin fa-2x'></i></div>";
      $("#" + elementID).html(strSpinner);
    };

    this.showResultsLoading = function () {
      this.spinner("results");
    };

    this.browserDisplayInstructions = function (nCode) {
      var strMessage = "<div class='browser-message'>";

      if (nCode == 0) {
        // Nothing selected
        strMessage += "Pick a type of content from the choices above.";
      } else if (nCode == 1) {
        // Tag Group Selected
        strMessage += "Choose a tag.";
      } else if (nCode == 2) {
        // Category Group Selected
        strMessage += "Choose a category.";
      } else if (nCode == 3) {
        // Search Selected
        strMessage += "Enter a search keyword.";
      }

      strMessage += "</div>";
      $("#results").html(strMessage);
    };
  }

}
class BrowserFilterSectionList {
  constructor(browserTool) {
    this.theBrowser = browserTool;
    this.a_Sections = [];

    this.reset = function () {
      this.a_Sections = [];
    };

    this.addSection = function (objSection) {
      this.a_Sections.push(objSection);
    };

    this.computeSectionFamilies = function () {
      // First, compute parents based on Parents ID array used when creating each section.
      for (let i = 0; i < this.a_Sections.length; i++) {
        let theSection = this.a_Sections[i];
        let theParentIDs = theSection.getParentIDs();

        for (let j = 0; j < theParentIDs.length; j++) {
          theSection.addParent(this.getSectionByID(theParentIDs[j]));
        }
      } //Now that parents are all setup, add the children.


      for (let i = 0; i < this.a_Sections.length; i++) {
        let theSection = this.a_Sections[i];
        let theParents = theSection.getParents();

        for (let j = 0; j < theParents.length; j++) {
          theParents[j].addChild(theSection);
        }
      }
    };

    this.getSectionByID = function (strSectionID) {
      let theMatchingIndex = -1;

      for (let i = 0; i < this.a_Sections.length; i++) {
        if (this.a_Sections[i].getSectionID() == strSectionID) {
          theMatchingIndex = i;
          break;
        }
      }

      return this.a_Sections[theMatchingIndex];
    }; // any checked inputs into an array with that section


    this.rebuildFilterSectionKeys = function (currentStatus) {
      // currentStatus is the the current state of the browser store
      for (let i = 0; i < this.a_Sections.length; i++) {
        // extract sub array of currentstatus to rebuild the section keys
        let sectionStatuses = [];
        let currentSectionId = this.a_Sections[i].getSectionID();
        Object.entries(currentStatus).forEach(([key, value]) => {
          if (key.startsWith(currentSectionId)) {
            // console.log(`${key}: ${value}`);
            if (value) {
              let obj = {};
              obj[key] = value;
              sectionStatuses.push(obj);
            }
          }
        });
        if (sectionStatuses.length) this.a_Sections[i].rebuildKeys(sectionStatuses);
      }
    };
  }

}
class BrowserFilterSection {
  constructor() {
    this.str_SectionID = "";
    this.str_SectionType = "";
    this.str_ChannelID = 0;
    this.str_GroupID = "";
    this.sectionDOMID = "";
    this.a_ParentIDs = [];
    this.a_Children = []; //sections that key off of me

    this.a_Parents = []; // sections that I key off of

    this.a_Keys = [];

    this.reset = function () {
      this.str_SectionType = "";
      this.str_ChannelID = 0;
      this.str_GroupID = "";
      this.sectionDOMID = "";
      this.a_ParentIDs = [];
      this.a_Children = []; //sections that key off of me

      this.a_Parents = []; // sections that I key off of

      this.a_Keys = [];
    };

    this.setSectionID = function (strID) {
      this.str_SectionID = strID;
    };

    this.setSectionDOMID = function (strID) {
      this.sectionDOMID = strID;
    };

    this.setSectionType = function (strType) {
      this.str_SectionType = strType;
    };

    this.setChannelID = function (strID) {
      this.str_ChannelID = strID;
    };

    this.setGroupID = function (strID) {
      this.str_GroupID = strID;
    };

    this.getSectionID = function () {
      return this.str_SectionID;
    };

    this.getSectionDOMID = function () {
      return this.sectionDOMID;
    };

    this.getSectionType = function () {
      return this.str_SectionType;
    };

    this.getChannelID = function () {
      return this.str_ChannelID;
    };

    this.getGroupID = function () {
      return this.str_GroupID;
    };

    this.setParentIDs = function (aParentIDs) {
      this.a_ParentIDs = aParentIDs;
    };

    this.getParentIDs = function () {
      return this.a_ParentIDs;
    };

    this.getChildren = function () {
      return this.a_Children;
    };

    this.addChild = function (objChild) {
      this.a_Children.push(objChild);
    };

    this.getParents = function () {
      return this.a_Parents;
    };

    this.addParent = function (objParent) {
      this.a_Parents.push(objParent);
    };

    this.getKeyString = function () {
      let theKeyString = "";

      for (let i = 0; i < this.a_Keys.length; i++) {
        theKeyString += this.a_Keys[i];

        if (i < this.a_Keys.length - 1) {
          theKeyString += "|";
        }
      }

      return theKeyString;
    };

    this.resetKeys = function () {
      this.a_Keys = [];
    };

    this.addKey = function (strKey) {
      this.a_Keys.push(strKey);
    };

    this.rebuildKeys = function (sectionStatuses) {
      this.resetKeys();
      console.log("sStat", sectionStatuses); // let tmpInputList = $(this.sectionDOMID).find('input:checkbox:checked');

      for (let i = 0; i < sectionStatuses.length; i++) {
        let status = sectionStatuses[i];
        let key = Object.keys(status)[0];
        let val = parseInt(key.match(/\d+$/)[0]);
        this.addKey(val);
      }
    };
  }

}
class CommentsManager {
  constructor(parentWraperDivID) {
    this.n_SegmentID = 0;
    this.n_PackageID = 0;
    this.commentsLoadedOnce = false;
    this.b_FilterComments = false;
    this.str_CommentsListWrapperID = "#" + parentWraperDivID;

    this.reset = function () {
      //console.log("Resetting Comments Data");
      this.n_SegmentID = 0;
      this.n_PackageID = 0;
      this.commentsLoadedOnce = false;
      this.b_FilterComments = false; // $(this.str_CommentsListWrapperID).empty();
    };

    this.setNewPackageAndSegmentIDs = function (nPackageID, nSegmentID) {
      this.reset();
      this.n_PackageID = nPackageID;
      this.n_SegmentID = nSegmentID;
    };

    this.setNewPackageID = function (nPackageID) {
      this.reset();
      this.n_PackageID = nPackageID;
    };

    this.setNewSegmentID = function (nSegmentID) {
      this.n_SegmentID = nSegmentID;
    };

    this.setAuthorCommentFilter = function (bFilter) {
      if (bFilter != this.b_FilterComments) {
        this.b_FilterComments = bFilter;
        this.reloadComments();
      }
    };

    this.reloadComments = function () {
      this.commentsLoadedOnce = true;

      if (this.n_PackageID != "0") {
        // $(this.str_CommentsListWrapperID).empty();
        // thePlayer.spinner(this.str_CommentsListWrapperID);
        var theURL = gc_BranchPath + "/--ajax-load-comments/";
        theURL += "?package_id=" + this.n_PackageID;

        if (this.n_SegmentID !== "0") {
          theURL += "&segment_id=" + this.n_SegmentID;
        } else {
          theURL += "&segment_id=-1";
        }

        if (this.b_FilterComments) {
          theURL += "&author=yes";
        } else {
          theURL += "&author=no";
        }

        $(this.str_CommentsListWrapperID).load(theURL, function () {
          var cmtList = $(".cmt-wrapper.level-0");

          for (let i = 0; i < cmtList.length; i++) {
            var theKids = $(cmtList[i]).find("li.level-1");

            if (theKids.length > 0) {
              var maxTime = 0;

              for (let j = 0; j < theKids.length; j++) {
                var theTime = $(theKids[j]).data("date");
                maxTime = Math.max(maxTime, theTime);
              }

              $(cmtList[i]).attr("data-last-update", maxTime);
            } else {
              var theTime = $(cmtList[i]).data("date");
              $(cmtList[i]).attr("data-last-update", theTime);
            }
          }

          tinysort("ul#cmts-list>li", {
            data: "last-update",
            order: "desc"
          });
          $("#ask-button").toggleClass("disabled", false);
        });
      } else {
        $("#ask-button").toggleClass("disabled", true);
      }
    };

    this.loadMoreComments = function () {
      var currentOffset = parseInt($("#cmts-list").attr("data-offset")); //console.log('Offset is currently ' + currentOffset);

      currentOffset += 2;
      var nextURL = gc_BranchPath + "/--ajax-comment-list/" + this.n_PackageID + "/" + currentOffset;
      $.get(nextURL, function (data) {
        $("#cmts-list").attr("data-offset", currentOffset);
        $("#cmts-list").append(data);
      });
    };
    /*****************************************
     **********   Comment Functions  **********
     *****************************************/


    this.replyToComment = function (nCommentID) {
      if (nCommentID > 0) {
        var theFormID = "comment-" + nCommentID + "-form";
        var theForm = "<div class='comment-reply-form thread-reply-form' id='" + theFormID + "'></div>";
        var theReplyDiv = "#cmt-" + nCommentID + "-reply-wrapper";
        $(theReplyDiv).after(theForm);
        $("#" + theFormID).html('<div class="text-center"><i class="fa fa-2x fa-spinner fa-spin"></i></div>');
        var theFormURL = gc_BranchPath + "/--ajax-load-comment-form/?entry_id=" + this.n_PackageID;
        theFormURL += "&comment_id=" + nCommentID;

        if (this.n_SegmentID > 0) {
          theFormURL += "&segment_id=" + this.n_SegmentID;
        }

        $("#" + theFormID).load(theFormURL, function () {
          $("#" + theFormID + " form textarea").focus();
        });
        $("#comment-" + nCommentID + "-reply-button").toggleClass("disabled", true);
      } else {
        var theFormID = "comment-0-form";
        var theForm = "<div class='comment-reply-form' id='comment-0-form'></div>";
        $("#add-cmt-wrapper").after(theForm);
        $("#" + theFormID).html('<div class="text-center"><i class="fa fa-2x fa-spinner fa-spin"></i></div>');
        var theFormURL = gc_BranchPath + "/--ajax-load-comment-form/?entry_id=" + this.n_PackageID;

        if (this.n_SegmentID > 0) {
          theFormURL += "&segment_id=" + this.n_SegmentID;
        }

        $("#" + theFormID).load(theFormURL, function () {
          $("#comment-0-form form textarea").focus();
        });
        $("#ask-button").toggleClass("disabled", true);
        $("#no-questions").toggle(false);
      }
    };

    this.submitThreadedCmt = function (sender) {
      $(sender).html('<i class="fa fa-spinner fa-spin"></i> ');
      var theForm = $(sender).closest("form");
      formData = $(theForm).serialize();
      $.ajax({
        type: "POST",
        url: $(theForm).attr("action"),
        data: formData
      }).done(function (response) {
        thePlayer.commentsManager.reloadComments();
      });
    };

    this.deleteCmtForm = function (nCommentID) {
      if (nCommentID) {
        var theCommentID = nCommentID;
        var replyWrapperID = "#comment-" + theCommentID + "-form";
        $(replyWrapperID).remove();
        $("#comment-" + nCommentID + "-reply-button").toggleClass("disabled", false);
      } else {
        $("#comment-0-form").remove();
        $("#ask-button").toggleClass("disabled", false);

        if ($("#no-questions") != undefined) {
          $("#no-questions").toggle(true);
        }
      }
    };

    this.subscribeAction = function (sender) {
      $.ajax({
        type: "POST",
        url: $(sender).attr("data-action")
      }).done(function (response) {
        thePlayer.commentsManager.reloadComments();
      });
    };

    this.updateCommentFormCharacterCount = function (sender) {
      var text_length = $(sender).val().length;
      var text_remaining = 500 - text_length;
      var updateDiv = $(sender).siblings(".comment-character-counter")[0];
      $(updateDiv).html(text_remaining + " characters remaining");
    };

    this.toggleCmtReplies = function (nCommentID) {
      $("#comment-" + nCommentID + "-wrapper").toggleClass("expanded");
    };

    this.deleteCmt = function (nCommentID, strURL) {
      $.post(strURL, {
        status: "close",
        comment_id: nCommentID
      }, function (data) {
        thePlayer.commentsManager.reloadComments();
      });
    };
  }

}
class LoopsManager {
  constructor() {
    this.a_Collections = [];
    this.n_LastActiveCollectionID = -1;

    this.hasLists = function () {
      return this.a_Collections.length > 0;
    };

    this.setLastActiveCollectionID = function (nCollectionID) {
      this.n_LastActiveCollectionID = nCollectionID; //console.log("Setting last active list to:" + nListID);
    };

    this.getLastActiveListID = function () {
      return this.n_LastActiveCollectionID;
    };

    this.resetAll = function () {
      for (let i = 0; i < this.a_Collections.length; i++) {
        this.a_Collections[i].reset();
      } // $("#addUserLoopButton").toggleClass("disabled", true);
      // $("#saveUserLoopsButton").toggleClass("disabled", true);

    };

    this.createNewCollection = function (strUIParentID, strCollectionRole, bEditable) {
      // debugger
      var theCollection = this.getCollectionByRole(strCollectionRole);

      if (theCollection == null) {
        var newCollectionID = this.a_Collections.length;
        theCollection = new LoopsCollection(newCollectionID, strUIParentID, strCollectionRole, bEditable);
        console.log("collection", theCollection);
        this.appendCollection(theCollection);
      } else {
        theCollection.reset();
        this.pushUserLoopInterfaceState();
      }

      return theCollection;
    };

    this.addListToCollectionFromArray = function (aLoopsArray, strCollectionRole, strListTitle, bResetCollection) {
      //The collection must already exist before calling this method.
      var theCollection = this.getCollectionByRole(strCollectionRole);

      if (theCollection !== null) {
        if (bResetCollection) {
          //only reset the collection if indicated, otherwise append new list.
          theCollection.reset();
        }

        theCollection.addListFromLoopArray(aLoopsArray, strListTitle);
        theCollection.rebuildLoopsUIList();
      }

      this.pushUserLoopInterfaceState();
    };

    this.appendCollection = function (newCollection) {
      this.a_Collections.push(newCollection);
    };

    this.getCollectionAt = function (nIndex) {
      return this.a_Collections[nIndex];
    };

    this.getCollectionByID = function (nCollectionID) {
      let theCollection = null;

      for (let i = 0; i < this.a_Collections.length; i++) {
        if (this.a_Collections[i].getID() == nCollectionID) {
          theCollection = this.a_Collections[i];
          break;
        }
      }

      return theCollection;
    };

    this.getCollectionByRole = function (strCollectionRole) {
      let theCollection = null;

      for (let i = 0; i < this.a_Collections.length; i++) {
        if (this.a_Collections[i].getRole() == strCollectionRole) {
          theCollection = this.a_Collections[i];
        }
      }

      return theCollection;
    };

    this.loopSelected = function (nCollectionID, nListIndex, nLoopIndex) {
      //console.log("Loop Selected: " + nListID + "," + nLoopIndex);
      this.clearActiveLoopsExcept(nCollectionID, nListIndex);
      this.setLastActiveCollectionID(nCollectionID);
      let theCollection = this.getCollectionByID(nCollectionID);
      theCollection.loopSelected(nListIndex, nLoopIndex);
    };

    this.loopToggleSelected = function (nCollectionID, nListIndex, nLoopIndex) {
      this.clearActiveLoopsExcept(nCollectionID, nListIndex);
      this.setLastActiveCollectionID(nCollectionID);
      this.getCollectionByID(nCollectionID).loopToggleSelected(nListIndex, nLoopIndex);
    };

    this.activateNextLoop = function () {
      let theID = -1;

      if (this.hasCollections()) {
        theID = this.getLastActiveCollectionID();

        if (theID == -1) {
          theID = this.getCollectionListWithLoops();
        }

        if (theID !== -1) {
          this.getCollectionByID(theID).activateNextLoop();
        }
      }

      return theID;
    };

    this.activatePreviousLoop = function () {
      let theID = -1;

      if (this.hasCollections()) {
        theID = this.getLastActiveCollectionID();

        if (theID == -1) {
          theID = this.getFirstCollectionWithLoops();
        }

        if (theID !== -1) {
          this.getCollectionByID(theID).activatePreviousLoop();
        }
      }

      return theID;
    };

    this.clearActiveLoopsExcept = function (nCollectionID, nListIndex) {
      //console.log("Clearing active loops");
      //Step 1: clear other lists.
      for (let i = 0; i < this.a_Collections.length; i++) {
        //console.log("Clearing active loops for list: " + nListID)
        let theCollection = this.a_Collections[i];

        if (theCollection.getID() == nCollectionID) {
          theCollection.clearActiveLoopsExcept(nListIndex);
        } else {
          theCollection.clearAllActiveLoops();
        }
      }
    };

    this.clearAllActiveLoops = function () {
      //Step 1: clear other lists.
      for (let i = 0; i < this.a_Collections.length; i++) {
        this.a_Collections[i].clearAllActiveLoops();
      }
    };

    this.addUserLoop = function () {
      let theLoop = thePlayer.getEngineLoop();

      if (theLoop !== null) {
        let bWasPlaying = thePlayer.theEngine.isPlaying();

        if (bWasPlaying) {
          thePlayer.theEngine.stopPlayback();
        }

        let loopName = prompt("Enter loop name.", theLoop.getName());

        if (bWasPlaying) {
          thePlayer.theEngine.startPlayback();
        }

        if (loopName != null) {
          theCollection = this.getCollectionByRole("user");
          theLoop.setName(loopName);
          theCollection.addInstantLoop(theLoop);
          theCollection.rebuildLoopsUIList();
          this.pushUserLoopInterfaceState();
        }
      }
    };

    this.removeLoopFromList = function (nCollectionID, nListIndex, nLoopIndex) {
      let theCollection = this.getCollectionByID(nCollectionID);
      theCollection.removeLoop(nListIndex, nLoopIndex);
      theCollection.rebuildLoopsUIList();
      this.pushUserLoopInterfaceState();
    };

    this.getUserLoopsArray = function () {
      return this.getCollectionByRole("user").getLoopsArray();
    };

    this.pushUserLoopInterfaceState = function () {
      let bAddButtonEnabled = false;
      let bSaveButtonEnabled = false;
      let userLoopsCollection = this.getCollectionByRole("user"); //console.log("User List is: " + userList);

      if (userLoopsCollection == null) {//console.log("Showing no segment loaded error");
        // $("#userLoopListEmpty").toggle(true);
      } else {
        // $("#userLoopList").toggleClass("dirty", userLoopsCollection.isDirty());
        bSaveButtonEnabled = userLoopsCollection.isDirty();
        let theLoop = thePlayer.getEngineLoop();

        if (theLoop !== null) {
          bAddButtonEnabled = !userLoopsCollection.findMatchingLoop(theLoop);
        }
      } // $("#addUserLoopButton").toggleClass("disabled", !bAddButtonEnabled);
      // $("#saveUserLoopsButton").toggleClass("disabled", !bSaveButtonEnabled);

    };

    this.savingUserData = function () {
      this.getCollectionByRole("user").showLoadingIndicator();
    };

    this.getFirstListWithLoops = function () {
      let nIndex = -1;

      for (let i = 0; i < this.a_Collections.length; i++) {
        if (this.a_Collections[i].getCollectionLoopCount() > 0) {
          nIndex = i;
          break;
        }
      }

      return nIndex;
    };
  }

}
class LoopsCollection {
  constructor(nCollectionID, strListWrapperID, strCollectionRole, bEditable) {
    this.str_UIWrapperID = "#" + strListWrapperID;
    this.b_Editable = bEditable;
    this.n_CollectionID = nCollectionID;
    this.str_Role = strCollectionRole;
    this.a_Lists = [];
    this.b_IsDirty = false;

    this.getListCount = function () {
      return this.a_Lists.length;
    };

    this.getID = function () {
      return this.n_CollectionID;
    };

    this.getRole = function () {
      return this.str_Role;
    };

    this.getEditable = function () {
      return this.b_Editable;
    };

    this.isDirty = function () {
      return this.b_IsDirty;
    };

    this.setDirty = function (bDirty) {
      this.b_IsDirty = bDirty;
    };

    this.clearLoopsUIList = function () {
      $(this.str_UIWrapperID).empty();
    };

    this.showLoadingIndicator = function () {
      thePlayer.spinner(this.str_UIWrapperID);
    };

    this.getListAt = function (nIndex) {
      let theList = null;

      if (this.validListIndex(nIndex)) {
        theList = this.a_Lists[nIndex];
      }

      return theList;
    };

    this.reset = function () {
      // this.clearLoopsUIList();
      this.a_Lists.length = 0;
      this.setDirty(false); // $(this.str_UIWrapperID + "Empty").toggle(true);
    };

    this.getLoopsArray = function () {
      let loopsArray = [];

      for (let i = 0; i < this.a_Lists.length; i++) {
        let theLoops = this.a_Lists[i].getLoopsArray();

        for (j = 0; j < theLoops.length; j++) {
          loopsArray.push(theLoops[j]);
        }
      }

      console.log(loopsArray);
      return loopsArray;
    };

    this.getCollectionLoopCount = function () {
      let theTotal = 0;

      for (let i = 0; i < this.a_Lists.length; i++) {
        theTotal += this.a_Lists[i].getListLoopCount();
      }

      return theTotal;
    };

    this.setNewLoopName = function (nListIndex, nLoopIndex, strNewName) {
      var theLoop = this.getLoopAt(nListIndex, nLoopIndex);

      if (theLoop !== null) {
        theLoop.setName(strNewName);
        this.setDirty(true);
      }
    };

    this.getLoopAt = function (nListIndex, nLoopIndex) {
      if (this.validListIndex(nListIndex)) {
        return this.a_Lists[nListIndex].getLoopAt(nLoopIndex);
      } else {
        return null;
      }
    };

    this.validListIndex = function (nListIndex) {
      return nListIndex < this.a_Lists.length ? true : false;
    };

    this.rebuildLoopsUIList = function () {
      // thePlayer.spinner( this.str_UIWrapperID );
      // $( this.str_UIWrapperID + "Empty" ).toggle( false );
      //this function assumes the loop list has already been reset
      let strListHTML = "";
      let bEditable = this.getEditable();
      let collectionID = this.getID();
      let bUseAccordion = this.a_Lists.length > 1;

      if (bUseAccordion) {
        strListHTML += '<ul class="accordion sidebar-accordion" id="loopsListAccordion-' + this.getRole() + '" ';
        strListHTML += 'data-accordion data-allow-all-closed="true" data-multi-expand="false">';
      }

      for (let listIndex = 0; listIndex < this.a_Lists.length; listIndex++) {
        let theList = this.a_Lists[listIndex];

        if (bUseAccordion) {
          strListHTML += '<li class="accordion-item" data-accordion-item>';
          strListHTML += '<a class="accordion-title">' + theList.getListTitle() + "</a>";
          strListHTML += '<div class="accordion-content" data-tab-content>';
        }

        strListHTML += '<ul class="sidebar-list dark">';

        for (let loopIndex = 0; loopIndex < theList.getLoopsArray().length; loopIndex++) {
          let theLoop = theList.getLoopAt(loopIndex);
          theLoop.setChecked(false);
          var loopItem = '<li class="sidebar-list-item loop button" id="loopItem-';
          loopItem += collectionID + "-" + listIndex + "-" + loopIndex + '">';
          let bStacking = theList.enableLoopStacking(loopIndex);
          theLoop.setCollection(collectionID);
          theLoop.setListIndex(listIndex);
          theLoop.setLoopIndex(loopIndex);
          return;

          if (bStacking || bEditable) {
            let theClass = "";

            if (bStacking && bEditable) {
              theClass = "both";
            }

            loopItem += '<a class="sidebar-list-item-link ' + theClass;
            loopItem += '" onClick="thePlayer.loopsManager.loopSelected(';
            loopItem += collectionID + "," + listIndex + "," + loopIndex + ')">';
            loopItem += theLoop.getName();
            loopItem += "</a>";

            if (bStacking) {
              loopItem += '<a class="sidebar-list-item-button check-button ';
              loopItem += theClass + '" onClick="thePlayer.loopsManager.loopToggleSelected(';
              loopItem += collectionID + "," + listIndex + "," + loopIndex + '); return false;"></a>';
            }

            if (bEditable) {
              loopItem += '<a class="sidebar-list-item-button delete-button ';
              loopItem += theClass + '" onClick="thePlayer.loopsManager.removeLoopFromList(';
              loopItem += collectionID + "," + listIndex + "," + loopIndex + '); return false;"></a>';
            }
          } else {
            loopItem += '<a onClick="thePlayer.loopsManager.loopSelected(';
            loopItem += collectionID + "," + listIndex + "," + loopIndex + ')">';
            loopItem += theLoop.getName();
            loopItem += "</a>";
          }

          loopItem += "</li>";
          strListHTML += loopItem;
        }

        strListHTML += "</ul>";

        if (bUseAccordion) {
          strListHTML += "</div></li>";
        }
      } // $(this.str_UIWrapperID).html(strListHTML);
      // if (this.getCollectionLoopCount() == 0) {
      //   //console.log("Showing error message for empty list.");
      //   $(this.str_UIWrapperID + "Empty").toggle(true);
      // }
      // if (bUseAccordion) {
      //   let accordionID = "#loopsListAccordion-" + this.getRole();
      //   $(accordionID).foundation();
      // }

    };

    this.appendList = function (newList) {
      this.a_Lists.push(newList);
    };

    this.addListFromLoopArray = function (aLoopsArray, strListTitle) {
      //array must elements assumed to be in [name, start, end] format\
      //Clear this collection before calling this if you don't want the new
      // list appended.
      let theListIndex = this.a_Lists.length;
      let theList = new LoopsList(this.getID(), theListIndex, strListTitle);
      theList.createFromLoopArray(aLoopsArray);
      this.appendList(theList);
      this.setDirty(false);
    };

    this.findMatchingLoop = function (loopToMatch) {
      bMatchFound = false;

      for (let i = 0; i < this.a_Lists.length; i++) {
        if (this.a_Lists[i].findMatchingLoop(loopToMatch)) {
          bMatchFound = true;
          break;
        }
      }

      return bMatchFound;
    };

    this.clearActiveLoopsExcept = function (nListIndex) {
      for (let i = 0; i < this.a_Lists.length; i++) {
        if (i !== nListIndex) {
          this.a_Lists[i].clearActiveLoops();
          this.a_Lists[i].refreshLoopCheckedStates();
        }
      }
    };

    this.clearAllActiveLoops = function () {
      for (let i = 0; i < this.a_Lists.length; i++) {
        this.a_Lists[i].clearActiveLoops();
        this.a_Lists[i].refreshLoopCheckedStates();
      }
    };

    this.loopSelected = function (nListIndex, nLoopIndex) {
      if (this.validListIndex(nListIndex)) {
        this.getListAt(nListIndex).loopSelected(nLoopIndex);
      }
    };

    this.loopToggleSelected = function (nListIndex, nLoopIndex) {
      if (this.validListIndex(nListIndex)) {
        this.getListAt(nListIndex).loopToggleSelected(nLoopIndex);
      }
    };

    this.addInstantLoop = function (theLoop) {
      let theList = this.getListAt(0);

      if (theList == null) {
        theList = new LoopsList(this.getID(), 0);
      }

      theList.addInstantLoop(theLoop);
      this.setDirty(true);
    };

    this.addInstantLoopToList = function (nListIndex, theLoop) {
      if (this.validListIndex(nListIndex)) {
        this.getListAt(nListIndex).addInstantLoop(theLoop);
        this.setDirty(true);
      }
    };

    this.removeLoop = function (nListIndex, nLoopIndex) {
      if (this.validListIndex(nListIndex)) {
        this.getListAt(nListIndex).removeLoop(nLoopIndex);
        this.setDirty(true);
      }
    };
  }

}
class LoopsList {
  constructor(nCollectionID, nListID, strListTitle) {
    this.a_Loops = [];
    this.n_CollectionID = nCollectionID;
    this.n_ListID = nListID;
    this.str_ListTitle = strListTitle;

    this.getCollectionID = function () {
      return this.n_CollectionID;
    };

    this.getListID = function () {
      return this.n_ListID;
    };

    this.getListTitle = function () {
      return this.str_ListTitle;
    };

    this.setLoopsList = function (a_newLoopsList) {
      this.a_Loops = a_newLoopsList;
    };

    this.getLoopAt = function (nIndex) {
      return this.a_Loops[nIndex];
    };

    this.getLoopStart = function (nIndex) {
      return this.getLoopAt(nIndex).getLoopStart();
    };

    this.getLoopEnd = function (nIndex) {
      return this.getLoopAt(nIndex).getLoopEnd();
    };

    this.getListLoopCount = function () {
      return this.a_Loops.length;
    };

    this.reset = function () {
      this.a_Loops.length = 0;
    };

    this.addLoopFromValues = function (strName, fLoopStart, fLoopEnd) {
      this.a_Loops.push(new InstantLoop(strName, fLoopStart, fLoopEnd));
    };

    this.addInstantLoop = function (theLoop) {
      this.a_Loops.push(theLoop);
      return this.a_Loops.length - 1;
    };

    this.setNewLoopName = function (nLoopIndex, strNewName) {
      this.getLoopAt(nLoopIndex).setName(strNewName);
    };

    this.activateNextLoop = function () {
      var currentIndex = this.getFirstActiveLoop();

      if (currentIndex > -1) {
        if (currentIndex < this.a_Loops.length - 1) {
          this.loopSelected(currentIndex + 1);
        } else {
          this.loopSelected(0);
        }
      }
    };

    this.activatePreviousLoop = function () {
      var currentIndex = this.getFirstActiveLoop();

      if (currentIndex > -1) {
        if (currentIndex > 0) {
          this.loopSelected(currentIndex - 1);
        } else {
          this.loopSelected(this.a_Loops.length - 1);
        }
      }
    };

    this.getFirstActiveLoop = function () {
      let nIndex = -1;

      if (this.a_Loops.length > 0) {
        nIndex = 0;

        for (let i = 0; i < this.a_Loops.length; i++) {
          if (this.a_Loops[i].getChecked()) {
            nIndex = i;
            break;
          }
        }
      }

      return nIndex;
    };

    this.removeLoop = function (nIndex) {
      //console.log('Current List: ' + this.a_Loops);
      //console.log('Removing Loop at: ' + nIndex);
      this.a_Loops.splice(nIndex, 1); //console.log('New List: ' + this.a_Loops);
    };

    this.createFromLoopArray = function (aLoopsArray) {
      //array must elements assumed to be in [name, start, end] format
      for (let i = 0; i < aLoopsArray.length; i++) {
        this.addLoopFromValues(aLoopsArray[i][0], aLoopsArray[i][1], aLoopsArray[i][2]);
      }
    };

    this.appendFromLoopArray = function (aLoopsArray) {
      //array must elements assumed to be in [name, start, end] format
      for (let i = 0; i < aLoopsArray.length; i++) {
        this.addLoopFromValues(aLoopsArray[i][0], aLoopsArray[i][1], aLoopsArray[i][2]);
      }
    };

    this.findMatchingLoop = function (loopToMatch) {
      let bMatchFound = false;

      for (let i = 0; i < this.a_Loops.length; i++) {
        let myLoop = this.a_Loops[i];

        if (Math.abs(loopToMatch.getLoopStart() - myLoop.getLoopStart()) < 0.1 && Math.abs(loopToMatch.getLoopEnd() - myLoop.getLoopEnd()) < 0.1) {
          bMatchFound = true;
        }
      }

      return bMatchFound;
    };

    this.getLoopsArray = function () {
      let newArray = []; //array must elements assumed to be in [name, start, end] format

      for (let i = 0; i < this.a_Loops.length; i++) {
        newArray.push([this.a_Loops[i].getName(), this.a_Loops[i].getLoopStart(), this.a_Loops[i].getLoopEnd()]);
      }

      return newArray;
    };

    this.loopSelected = function (nLoopIndex) {
      this.clearActiveLoops();
      this.toggleLoopCheckedState(nLoopIndex);
      this.refreshLoopCheckedStates(); //console.log("Activating Loop At: " + nLoopIndex);

      var theLoop = this.getLoopAt(nLoopIndex); //console.log('Activating Loop:' + theLoop);

      thePlayer.theEngine.loadLoop(this.getLoopAt(nLoopIndex).getLoopStart(), this.getLoopAt(nLoopIndex).getLoopEnd());
    };

    this.loopToggleSelected = function (nLoopIndex) {
      //console.log('Loop Toggle Selected: ' + nLoopIndex);
      this.processLoopToggle(nLoopIndex);
      this.refreshLoopCheckedStates();
      var theLoop = this.computeStackedLoop();

      if (theLoop !== null) {
        thePlayer.theEngine.loadLoop(theLoop.getLoopStart(), theLoop.getLoopEnd());
      }
    };

    this.toggleLoopCheckedState = function (nLoopIndex) {
      var isLoopAlreadyChecked = this.getLoopAt(nLoopIndex).getChecked();

      if (isLoopAlreadyChecked && this.isLoopAMiddle(nLoopIndex)) {
        // If this loop is already checked, and user clicks check again,
        // clear all checked loops and turn this one back
        this.clearActiveLoops();
        this.getLoopAt(nLoopIndex).setChecked(true);
      } else {
        var previousLoopChecked = this.getLoopAt(nLoopIndex).toggleChecked();

        if (previousLoopChecked) {
          for (let i = nLoopIndex - 1; i >= 0; i--) {
            if (!this.getLoopAt(nLoopIndex).getChecked() || !this.getLoopAt(nLoopIndex).getStackable()) {
              previousLoopChecked = false;
            }

            this.getLoopAt(nLoopIndex).setChecked(previousLoopChecked);
          }

          previousLoopChecked = true;

          for (let i = nLoopIndex + 1; i < this.a_Loops.length; i++) {
            if (!this.getLoopAt(i).getChecked() || !this.getLoopAt(i).getStackable()) {
              previousLoopChecked = false;
            }

            this.getLoopAt(i).setChecked(previousLoopChecked);
          }
        }
      }
    };

    this.previousLoopConnected = function (i) {
      let bConnected = false;

      if (i > 0) {
        var myStartTime = this.getLoopStart(i);
        var myEndTime = this.getLoopEnd(i);
        var previousStartTime = this.getLoopStart(i - 1);
        var previousEndTime = this.getLoopEnd(i - 1);

        if (myStartTime > previousStartTime && myEndTime > previousEndTime && myStartTime - previousEndTime < 2) {
          bConnected = true;
        }
      }

      return bConnected;
    };

    this.nextLoopConnected = function (i) {
      let bConnected = false;

      if (i < this.a_Loops.length - 1) {
        var myStartTime = this.getLoopStart(i);
        var myEndTime = this.getLoopEnd(i);
        var nextStartTime = this.getLoopStart(i + 1);
        var nextEndTime = this.getLoopEnd(i + 1);

        if (myStartTime < nextStartTime && myEndTime < nextEndTime && nextStartTime - myEndTime < 2) {
          bConnected = true;
        }
      }

      return bConnected;
    };

    this.enableLoopStacking = function (nLoopIndex) {
      var bEnableStacking = false;

      if (!this.previousLoopConnected(nLoopIndex) && this.nextLoopConnected(nLoopIndex) && this.nextLoopConnected(nLoopIndex + 1)) {
        //Is this the first loop in a series,
        //meaning i, i+1, and i+2 are stackable, but i-1 is not
        bEnableStacking = true;
      } else if (this.previousLoopConnected(nLoopIndex) && this.nextLoopConnected(nLoopIndex)) {
        //Is this in the middle of a series?
        //meaning i, i-1 and i+1 are all stackable
        bEnableStacking = true;
      } else if (this.previousLoopConnected(nLoopIndex - 1) && this.previousLoopConnected(nLoopIndex)) {
        //Is this the end of a chain?
        //meaning i-2, i-1 and i are stackable, but i+1 is not.
        bEnableStacking = true;
      }

      this.getLoopAt(nLoopIndex).setStackable(bEnableStacking);
      return bEnableStacking;
    };

    this.clearActiveLoops = function () {
      for (let i = 0; i < this.a_Loops.length; i++) {
        this.getLoopAt(i).setChecked(false);
      }

      this.refreshLoopCheckedStates();
    };

    this.refreshLoopCheckedStates = function () {
      for (let i = 0; i < this.a_Loops.length; i++) {
        $(this.getLoopParentID(i)).toggleClass("active", this.getLoopAt(i).getChecked());
      }
    };

    this.getLoopParentID = function (nIndex) {
      return "#loopItem-" + this.getCollectionID() + "-" + this.getListID() + "-" + nIndex;
    };

    this.processLoopToggle = function (nSelectedIndex) {
      //console.log("Processing Loop Toggle At: " + nSelectedIndex);
      var bLoopAlreadyChecked = this.getLoopAt(nSelectedIndex).getChecked();
      var bLoopIsMiddle = this.isLoopAMiddle(nSelectedIndex); //Case 1: Loop is already checked and is between two other checked loops.
      //Action: clear all checked loops, toggle selected one back on.

      if (bLoopAlreadyChecked && bLoopIsMiddle) {
        // If this loop is already checked, and user clicks check again,
        // clear all checked loops and turn this one back
        this.clearActiveLoops();
        this.getLoopAt(nSelectedIndex).setChecked(true);
      } else if (bLoopAlreadyChecked && !bLoopIsMiddle) {
        //This loop is already checked, but is not a middle meaning it is the end of a range.
        //We simply need to toggle it and not touch the others.
        this.getLoopAt(nSelectedIndex).setChecked(false);
      } else if (!bLoopAlreadyChecked) {
        //Case 2: Loop is being toggled on
        //Actions: Search for loop range to toggle on.
        var previousCheckedLoopIndex = this.findPreviousStackableCheckedLoop(nSelectedIndex);
        var nextCheckedLoopIndex = this.findNextStackableCheckedLoop(nSelectedIndex);

        if (previousCheckedLoopIndex >= 0) {
          this.setStackableLoopRange(previousCheckedLoopIndex, nSelectedIndex);
        } else if (nextCheckedLoopIndex >= 0) {
          this.setStackableLoopRange(nSelectedIndex, nextCheckedLoopIndex);
        } else {
          //No other connected checked loops exist. Clear everything
          //and toggle this one on.
          this.clearActiveLoops();
          this.getLoopAt(nSelectedIndex).setChecked(true);
        }
      }
    };

    this.setStackableLoopRange = function (nLowerIndex, nHigherIndex) {
      for (let i = nLowerIndex; i <= nHigherIndex; i++) {
        this.getLoopAt(i).setChecked(true);
      }
    };

    this.findPreviousStackableCheckedLoop = function (startIndex) {
      nFoundIndex = -1;

      for (let i = startIndex - 1; i >= 0; i--) {
        if (this.getLoopAt(i).getChecked() && this.getLoopAt(i).getStackable()) {
          nFoundIndex = i;
        }
      }

      return nFoundIndex;
    };

    this.findNextStackableCheckedLoop = function (startIndex) {
      nFoundIndex = -1;
      var nLength = this.a_Loops.length;

      for (let i = startIndex + 1; i < nLength; i++) {
        if (this.getLoopAt(i).getChecked() && this.getLoopAt(i).getStackable()) {
          nFoundIndex = i;
        }
      }

      return nFoundIndex;
    };

    this.toggleLoopCheckedState = function (nLoopIndex) {
      var isLoopAlreadyChecked = this.getLoopAt(nLoopIndex).getChecked();

      if (isLoopAlreadyChecked && this.isLoopAMiddle(nLoopIndex)) {
        // If this loop is already checked, and user clicks check again,
        // clear all checked loops and turn this one back
        this.clearActiveLoops();
        this.getLoopAt(nLoopIndex).setChecked(true);
      } else {
        this.getLoopAt(nLoopIndex).setChecked(!this.getLoopAt(nLoopIndex).getChecked());
        var previousLoopChecked = this.getLoopAt(nLoopIndex).getChecked();

        if (previousLoopChecked) {
          for (let i = nLoopIndex - 1; i >= 0; i--) {
            if (!this.getLoopAt(i).getChecked() || !this.getLoopAt(i).getStackable()) {
              previousLoopChecked = false;
            }

            this.getLoopAt(i).setChecked(previousLoopChecked);
          }

          previousLoopChecked = true;

          for (let i = nLoopIndex + 1; i < this.a_Loops.length; i++) {
            if (!this.getLoopAt(i).getChecked() || !this.getLoopAt(i).getStackable()) {
              previousLoopChecked = false;
            }

            this.getLoopAt(i).setChecked(previousLoopChecked);
          }
        }
      }
    };

    this.isLoopAMiddle = function (nLoopIndex) {
      var lowerLoop = false;
      var higherLoop = false;

      for (let i = 0; i < this.a_Loops.length; i++) {
        if (this.getLoopAt(i).getChecked() && this.getLoopAt(i).getStackable()) {
          if (i < nLoopIndex) {
            //console.log('Lower selected loop found');
            lowerLoop = true;
          } else if (i > nLoopIndex) {
            //console.log('Higher selected loop found');
            higherLoop = true;
          }
        }
      } //console.log('Loop is middle: ' + (lowerLoop && higherLoop));


      return lowerLoop && higherLoop;
    };

    this.computeStackedLoop = function () {
      var loopStart = 0;
      var loopEnd = 0;
      var loopInitialized = false;
      var nLength = this.a_Loops.length;

      for (let i = 0; i < nLength; i++) {
        var theLoop = this.getLoopAt(i);

        if (theLoop.getChecked()) {
          if (!loopInitialized) {
            loopStart = theLoop.getLoopStart();
            loopEnd = theLoop.getLoopEnd();
            loopInitialized = true;
          } else {
            loopStart = Math.min(loopStart, theLoop.getLoopStart());
            loopEnd = Math.max(loopEnd, theLoop.getLoopEnd());
          }
        }
      } //console.log("New Loop calculated: " + loopStart + "," + loopEnd);


      if (this.validateLoop(loopStart, loopEnd)) {
        return new InstantLoop("Combined Loop", loopStart, loopEnd); //this.theEngine.loadLoop( loopStart, loopEnd );
      } else {
        return null; //this.theEngine.stopLooping();
      }
    };

    this.validateLoop = function (loopStart, loopEnd) {
      var loopValid = true;

      if (loopStart < 0 || loopStart > loopEnd || loopEnd <= 0 || loopStart == loopEnd) {
        loopValid = false;
      }

      return loopValid;
    };
  }

}
class InstantLoop {
  constructor(strName, fStartTime, fStopTime) {
    this.str_Name = strName;
    this.f_StartTime = parseFloat(fStartTime);
    this.f_EndTime = parseFloat(fStopTime);
    this.b_Stackable = false;
    this.b_Checked = false;
    this.nCollectionID = null;
    this.nListIndex = null;
    this.nLoopIndex = null;

    if (strName == "") {
      this.str_Name = this.f_StartTime.toFixed(2) + " - " + this.f_EndTime.toFixed(2);
    } //Setters


    this.setLoopStart = function (fStartTime) {
      this.f_StartTime = parseFloat(fStartTime);
    };

    this.setLoopEnd = function (fEndTime) {
      this.f_EndTime = parseFloat(fStopTime);
    };

    this.setStackable = function (bStackable) {
      this.b_Stackable = bStackable;
    };

    this.setChecked = function (bChecked) {
      this.b_Checked = bChecked;
    };

    this.setName = function (strName) {
      this.str_Name = strName;
    };

    this.setCollection = function (nCollectionID) {
      this.nCollectionID = nCollectionID;
    };

    this.setListIndex = function (nListIndex) {
      this.nListIndex = nListIndex;
    };

    this.setLoopIndex = function (nLoopIndex) {
      this.nLoopIndex = nLoopIndex;
    }; //Getters


    this.getLoopStart = function () {
      return this.f_StartTime;
    };

    this.getLoopEnd = function () {
      return this.f_EndTime;
    };

    this.getStackable = function () {
      return this.b_Stackable;
    };

    this.getChecked = function () {
      return this.b_Checked;
    };

    this.getName = function () {
      return this.str_Name;
    };

    this.getLoopIDObject = function () {
      return {
        collectionID: this.nCollectionID,
        listIndex: this.nListIndex,
        loopIndex: this.nLoopIndex
      };
    };

    this.toggleChecked = function () {
      let bWasChecked = this.b_Checked;
      this.b_Checked = !bWasChecked;
      return this.b_Checked;
    };

    this.validate = function () {
      if (this.f_EndTime < this.f_StartTime + 0.1) {
        return false;
      }

      return true;
    };

    this.getDefaultName = function () {
      return this.f_StartTime.toFixed(2) + " - " + this.f_EndTime.toFixed(2);
    };
  }

}
class Segment {
  constructor() {
    this.b_IsLoaded = false;
    this.str_Title = "";
    this.str_SegmentType = ""; // Must be "entry" or "other"

    this.str_PrimaryMediaType = ""; // must be vimeo, youtube, mp3, soundslice, url

    this.str_EntryID = ""; //this must be a valid TXBA Media Segment Entry ID

    this.str_VimeoCode = "";
    this.str_YouTubeCode = "";
    this.str_MP3Filename = "";
    this.str_SoundSliceCode = "";
    this.str_PDFFilename = "";
    this.str_MediaURL = "";
    this.f_MediaStartTime = 0;
    this.str_GPXFilename = "";
    this.str_DisplayName = "";
    this.str_FullDisplayName = "";
    this.str_FacebookUser = "";
    this.str_FacebookVideoCode = "";
    this.str_InstagramID = "";
    this.str_HTMLContent = "";
    this.a_ChaptersArray = [];
    this.a_LoopsArray = [];
    this.str_YTMatchingEntryID = "";
    this.str_Description = "";
    this.a_UserLoopEntryIDs = [];

    this.setIsLoaded = function (bLoaded) {
      this.b_IsLoaded = bLoaded;
      return this;
    };

    this.setEntryID = function (strEntryID) {
      this.str_EntryID = strEntryID;
      return this;
    };

    this.setYTMatchingEntryID = function (strYTMatchingEntryID) {
      this.str_YTMatchingEntryID = strYTMatchingEntryID;
      return this;
    };

    this.setSegmentType = function (strType) {
      this.str_SegmentType = strType;
      return this;
    };

    this.setPrimaryMediaType = function (strMediaType) {
      this.str_PrimaryMediaType = strMediaType;
      return this;
    };

    this.setVimeoCode = function (strVimeoCode) {
      this.str_VimeoCode = strVimeoCode;
      return this;
    };

    this.setYouTubeCode = function (strYouTubeCode) {
      this.str_YouTubeCode = strYouTubeCode;
      return this;
    };

    this.setMP3Filename = function (strMP3Filename) {
      this.str_MP3Filename = strMP3Filename;
      return this;
    };

    this.setSoundSliceCode = function (strSoundSliceCode) {
      this.str_SoundSliceCode = strSoundSliceCode;
      return this;
    };

    this.setPDFFilename = function (strPDFFilename) {
      this.str_PDFFilename = strPDFFilename;
      return this;
    };

    this.setMediaURL = function (strURL) {
      this.str_URL = strURL;
      return this;
    };

    this.setGPXFilename = function (strGPXFilename) {
      this.str_GPXFilename = strGPXFilename;
      return this;
    };

    this.setTitle = function (strTitle) {
      this.str_Title = strTitle;
      return this;
    };

    this.setDisplayName = function (strDisplayName) {
      this.str_DisplayName = strDisplayName;
      return this;
    };

    this.setFullDisplayName = function (strFullDisplayName) {
      this.str_FullDisplayName = strFullDisplayName;
      return this;
    };

    this.setChaptersArray = function (aChaptersArray) {
      this.a_ChaptersArray = aChaptersArray;
      return this;
    };

    this.setLoopsArray = function (aLoopsArray) {
      this.a_LoopsArray = aLoopsArray;
      return this;
    };

    this.setFacebookUser = function (strUser) {
      this.str_FacebookUser = strUser;
      return this;
    };

    this.setFacebookVideoCode = function (strCode) {
      this.str_FacebookVideoCode = strCode;
      return this;
    };

    this.setInstagramID = function (strID) {
      this.str_InstagramID = strID;
      return this;
    };

    this.setHTMLContent = function (strHTML) {
      this.str_HTMLContent = strHTML;
      return this;
    };

    this.setMediaStartTime = function (fTime) {
      this.f_MediaStartTime = fTime;
      return this;
    };

    this.setDescription = function (strDescription) {
      this.str_Description = strDescription;
      return this;
    };

    this.isLoaded = function () {
      return this.b_IsLoaded;
    };

    this.getCodeByType = function () {
      let mediaType = this.getPrimaryMediaType();
      let code = "";

      switch (mediaType) {
        case "vimeo":
          code = this.getVimeoCode(); // this.mediaLoadVimeo();

          break;

        case "youtube":
          code = this.getYouTubeCode(); // this.mediaLoadYouTube(this.theS);

          break;

        case "mp3":
          code = this.getMP3Filename(); // this.mediaLoadMP3(this.theSegment.);

          break;

        case "soundslice":
          code = this.getSoundSliceCode(); // this.mediaLoadSoundSlice(this.the);

          break;

        case "pdf":
          code = this.getPDFFilename(); // this.mediaLoadPDFViewer(this.theS);

          break;

        case "url":
          return `<iframe id='content-frame' src='${decodeURIComponent(theURL)}' frameBorder='0'></iframe>`; // this.mediaLoadURL(this.theSegment.getMediaURL());

          break;

        case "facebook":
          code = {
            user: this.getFacebookUser(),
            code: this.getFacebookVideoCode()
          };
          break;

        case "instagram":
          code = this.getInstagramID(); // this.mediaLoadInstagram(this.theSegment.getInstagramID());

          break;

        case "html":
          code = this.getHTMLContent(); // this.mediaLoadHTML();

          break;
      }

      return {
        type: mediaType,
        code: code
      };
    };

    this.getEntryID = function () {
      return this.str_EntryID;
    };

    this.getYTMatchingEntryID = function () {
      return this.str_YTMatchingEntryID;
    };

    this.getSegmentType = function () {
      return this.str_SegmentType;
    };

    this.getPrimaryMediaType = function () {
      return this.str_PrimaryMediaType;
    };

    this.getVimeoCode = function () {
      return this.str_VimeoCode;
    };

    this.getYouTubeCode = function () {
      return this.str_YouTubeCode;
    };

    this.getMP3Filename = function () {
      return this.str_MP3Filename;
    };

    this.getSoundSliceCode = function () {
      return this.str_SoundSliceCode;
    };

    this.getPDFFilename = function () {
      return this.str_PDFFilename;
    };

    this.getMediaURL = function () {
      return this.str_URL;
    };

    this.getGPXFilename = function () {
      return this.str_GPXFilename;
    };

    this.getTitle = function () {
      return this.str_Title;
    };

    this.getDisplayName = function () {
      return this.str_DisplayName;
    };

    this.getFullDisplayName = function () {
      return this.str_FullDisplayName;
    };

    this.getChaptersArray = function () {
      return this.a_ChaptersArray;
    };

    this.getLoopsArray = function () {
      return this.a_LoopsArray;
    };

    this.getFacebookUser = function () {
      return this.str_FacebookUser;
    };

    this.getFacebookVideoCode = function () {
      return this.str_FacebookVideoCode;
    };

    this.getInstagramID = function () {
      return this.str_InstagramID;
    };

    this.getHTMLContent = function () {
      return this.str_HTMLContent;
    };

    this.getMediaStartTime = function () {
      return this.f_MediaStartTime;
    };

    this.getDescription = function () {
      return this.str_Description;
    };

    this.resetAll = function () {
      this.b_IsLoaded = false;
      this.str_Title = "";
      this.str_SegmentType = ""; // Must be "entry" or "other"

      this.str_PrimaryMediaType = ""; // must be vimeo, youtube, mp3, soundslice, url

      this.str_EntryID = ""; //this must be a valid TXBA Media Segment Entry ID

      this.str_YTMatchingEntryID = "";
      this.str_VimeoCode = "";
      this.str_YouTubeCode = "";
      this.str_MP3Filename = "";
      this.str_SoundSliceCode = "";
      this.str_PDFFilename = "";
      this.str_MediaURL = "";
      this.str_GPXFilename = "";
      this.str_StartTime = "";
      this.str_DisplayName = "";
      this.str_FullDisplayName = "";
      this.str_FacebookUser = "";
      this.str_FacebookVideoCode = "";
      this.str_HTMLContent = "";
      this.a_ChaptersArray.length = 0;
      this.a_LoopsArray.length = 0;
      this.str_Description = "";
    };

    this.allowUserData = function () {
      let bAllowUserData = false;

      if (this.getSegmentType() == "entry" && //It must be an entry
      this.getEntryID() != "" && ( //the entryID must be set.
      this.getPrimaryMediaType() == "vimeo" || //It must either be Vimeo
      this.getPrimaryMediaType() == "youtube" || //or YouTube
      this.getPrimaryMediaType() == "mp3")) {
        //or an MP3
        bAllowUserData = true;
      }

      return bAllowUserData;
    };

    this.allowChapters = function () {
      let bAllowUserData = false;

      if (this.getSegmentType() == "entry" && //It must be an entry
      this.getEntryID() != "" && ( //the entryID must be set.
      this.getPrimaryMediaType() == "vimeo" || //It must either be Vimeo
      this.getPrimaryMediaType() == "youtube" || //or YouTube
      this.getPrimaryMediaType() == "mp3")) {
        //or an MP3
        bAllowUserData = true;
      }

      return bAllowUserData;
    };

    this.allowLoops = function () {
      let bAllowUserData = false;

      if (this.getSegmentType() == "entry" && //It must be an entry
      this.getEntryID() != "" && ( //the entryID must be set.
      this.getPrimaryMediaType() == "vimeo" || //It must either be Vimeo
      this.getPrimaryMediaType() == "youtube" || //or YouTube
      this.getPrimaryMediaType() == "mp3")) {
        //or an MP3
        bAllowUserData = true;
      }

      return bAllowUserData;
    };

    this.allowImport = function () {
      let bAllowImport = false;

      if (this.getSegmentType() == "other" && //It must NOT be an entry
      this.getEntryID() == "" && //the entryID must be blank
      this.getPrimaryMediaType() == "youtube") {
        //it MUST be a Youtube video.
        bAllowImport = true;
      }

      return bAllowImport;
    };

    this.inferMediaType = function () {
      if (this.getVimeoCode() !== "") {
        this.setPrimaryMediaType("vimeo");
      } else if (this.getYouTubeCode() !== "") {
        this.setPrimaryMediaType("youtube");
      } else if (this.getFacebookVideoCode() !== "") {
        this.setPrimaryMediaType("facebook");
      } else if (this.getInstagramID() !== "") {
        this.setPrimaryMediaType("instagram");
      } else if (this.getMP3Filename() !== "") {
        this.setPrimaryMediaType("mp3");
      } else if (this.getSoundSliceCode() !== "") {
        this.setPrimaryMediaType("soundslice");
      } else if (this.getPDFFilename() !== "") {
        this.setPrimaryMediaType("pdf");
      } else if (this.getMediaURL() !== "") {
        this.setPrimaryMediaType("url");
      } else {
        this.setPrimaryMediaType("html");
      }
    };

    this.setUserLoopsEntryIDsFromString = function (strUserLoopEntryIDs) {
      let theIDs = strUserLoopEntryIDs.split("|");

      for (let i = 0; i < theIDs.length; i++) {
        if (theIDs[i] !== "") {
          this.a_UserLoopEntryIDs.push(theIDs[i]);
        }
      }

      return this;
    };

    this.getUserLoopsEntryIDs = function () {
      return this.a_UserLoopEntryIDs;
    };

    this.getUserLoopEntryIDsCount = function () {
      return this.a_UserLoopEntryIDs.length;
    };
  }

}
class Package {
  constructor() {
    this.str_PackageType = ""; // must be "entry" or "other"

    this.b_Loaded = false;
    this.str_EntryID = "";
    this.str_Title = "";
    this.str_ChannelName = "";
    this.str_ChannelShortName = "";
    this.str_DefaultSegmentEntryID = "";
    this.str_Description = "";
    this.str_Overview = "";
    this.str_ImageURL = "";
    this.str_Tuning = "";
    this.a_Sections = [];
    this.str_Date = "";
    this.str_ErrorMessage = "";

    this.setPackageType = function (strType) {
      this.str_PackageType = strType;
      return this;
    };

    this.setLoaded = function (bLoaded) {
      this.b_Loaded = bLoaded;
      return this;
    };

    this.setEntryID = function (nEntryID) {
      this.str_EntryID = nEntryID;
      return this;
    };

    this.setTitle = function (strTitle) {
      this.str_Title = strTitle;
      return this;
    };

    this.setChannelName = function (strChannelName) {
      this.str_ChannelName = strChannelName;
      return this;
    };

    this.setChannelShortName = function (strChannelShortName) {
      this.str_ChannelShortName = strChannelShortName;
      return this;
    };

    this.setDefaultSegmentEntryID = function (strEntryID) {
      this.str_DefaultSegmentEntryID = strEntryID;
      return this;
    };

    this.setDescription = function (strDescription) {
      this.str_Description = strDescription;
      return this;
    };

    this.setOverview = function (strOverview) {
      this.str_Overview = strOverview;
      return this;
    };

    this.setImageURL = function (strImageURL) {
      this.str_ImageURL = strImageURL;
      return this;
    };

    this.setSections = function (objSections) {
      this.a_Sections = objSections;
      return this;
    };

    this.setDate = function (strDate) {
      this.str_Date = strDate;
      return this;
    };

    this.setErrorMessage = function (strError) {
      this.str_ErrorMessage = strError;
      return this;
    };

    this.setTuning = function (strTuning) {
      this.str_Tuning = strTuning;
      return this;
    };

    this.getPackageType = function () {
      return this.str_PackageType;
    };

    this.isLoaded = function () {
      return this.b_Loaded;
    };

    this.getEntryID = function () {
      return this.str_EntryID;
    };

    this.getTitle = function () {
      return this.str_Title;
    };

    this.getChannelName = function () {
      return this.str_ChannelName;
    };

    this.getChannelShortName = function () {
      return this.str_ChannelShortName;
    };

    this.getDefaultSegmentEntryID = function () {
      return this.str_DefaultSegmentEntryID;
    };

    this.getDescription = function () {
      return this.str_Description;
    };

    this.getOverview = function () {
      return this.str_Overview;
    };

    this.getImageURL = function () {
      return this.str_ImageURL;
    };

    this.getSections = function () {
      return this.a_Sections;
    };

    this.getDate = function () {
      return this.str_Date;
    };

    this.getErrorMessage = function () {
      return this.str_ErrorMessage;
    };

    this.getTuning = function () {
      return this.str_Tuning;
    };

    this.resetAll = function () {
      this.str_PackageType = ""; // must be "entry" or "other"

      this.b_Loaded = false;
      this.str_EntryID = "";
      this.str_Title = "";
      this.str_ChannelName = "";
      this.str_ChannelShortName = "";
      this.str_DefaultSegmentEntryID = "";
      this.str_Description = "";
      this.str_Overview = "";
      this.str_ImageURL = "";
      this.a_Sections = [];
      this.str_Date = "";
      this.str_ErrorMessage = "";
    };

    this.isEntry = function () {
      return this.str_PackageTYpe == "entry";
    };

    this.hasSections = function () {
      return this.a_Sections.length > 0;
    };
  }

}
class FavoritesManager {
  constructor(parentDivID) {
    this.n_PackageID = 0;
    this.str_FavoritesListWrapperID = "#" + parentDivID;
    this.b_CommentsLoadedOnce = false;
    this.b_FilterComments = false;
    this.b_FavoritesLoadedOnce = false;
    this.b_Initialized = false; // this.str_ReloadPath = gc_BranchPath + '/--ajax-load-favorites-list/';

    this.str_ReloadPath = "/--ajax-load-favorites-list/";

    this.reset = function () {
      this.n_PackageID = 0;
      this.b_CommentsLoadedOnce = false;
      this.b_FilterComments = false;
      this.b_FavoritesLoadedOnce = false;
      this.b_Initialized = false; // $(this.str_FavoritesListWrapperID).empty();
      // $("#favListEmpty").text("Favorites have not been loaded.");
      // $("#favListEmpty").toggle(true);
    };

    this.setNewPackageID = function (nPackageID) {
      this.reset();
      this.n_PackageID = nPackageID;
    };

    this.clearFavorites = function () {
      $(this.str_FavoritesListWrapperID).empty();
    };

    this.fullRefresh = function () {
      this.clearFavorites();
      thePlayer.spinner(this.str_FavoritesListWrapperID);
      this.reloadFavorites();
    };

    this.reloadFavorites = function () {
      //console.log('Reloading favorites, packageID: ' + this.n_PackageID);
      var reloadPath = this.str_ReloadPath;

      if (this.n_PackageID != "0") {
        reloadPath += this.n_PackageID;
      }

      $(this.str_FavoritesListWrapperID).load(reloadPath, function () {
        thePlayer.favoritesManager.finishedReloadingFavorites();
      });
    };

    this.finishedReloadingFavorites = function () {
      if ($(this.str_FavoritesListWrapperID).children().length == 0) {
        $("#favListEmpty").text("You have not saved any favorites.");
        $("#favListEmpty").toggle(true);
      } else {
        $("#favListEmpty").toggle(false);

        if (this.n_PackageID == "0") {
          $("#favthis-button").toggle(false);
        } else {
          $("#favthis-button").toggle(true);
          $("#favthis-button").load(gc_BranchPath + "/--ajax-load-favorite-this-button/" + thePlayer.favoritesManager.n_PackageID);
        }
      }

      this.b_FavoritesLoadedOnce = true;
    };

    this.removeFavoriteFromList = function (sender) {
      var formID = $(sender).closest("form.submitFavoriteForm");
      var courseID = $(formID).attr("data-id");
      var formData = $(formID).serialize(); //this.clearFavorites();
      //thePlayer.spinner(this.str_FavoritesListWrapperID);

      var parentItem = $(sender).closest("li.sidebar-list-item");
      $(parentItem).toggleClass("deleting", true);
      $.ajax({
        type: "POST",
        url: $(formID).attr("action"),
        data: formData,
        context: sender
      }).done(function (response) {
        var parentItem = $(this).closest("li.sidebar-list-item");
        var parentList = $(this).closest("ul.sidebar-list");

        if ($(parentList).children().length == 1) {
          //console.log("Empty accordion item found.");
          parentAccordion = $(this).closest("li.accordion-item");
          $(parentAccordion).fadeOut(400, function () {
            $(this).remove();
          });
        } else {
          $(parentItem).fadeOut(400, function () {
            $(this).remove();
          });
        }

        thePlayer.favoritesManager.finishedReloadingFavorites();
      });
    };

    this.addFavoriteToList = function (sender) {
      var formID = $(sender).closest("form.submitFavoriteForm");
      var courseID = $(formID).attr("data-id");
      var formData = $(formID).serialize();
      $(sender).toggle(false);
      this.clearFavorites();
      thePlayer.spinner(this.str_FavoritesListWrapperID);
      $.ajax({
        type: "POST",
        url: $(formID).attr("action"),
        data: formData
      }).done(function (response) {
        thePlayer.favoritesManager.reloadFavorites();
      });
    };
  }

}
class HistoryManager {
  constructor(strHistoryListWrapperID) {
    this.str_ActiveSegmentTitle = "";
    this.str_ActiveSegmentURL = "";
    this.n_ActiveSegmentEntryID = 0;
    this.str_ActiveSegmentFullName = "";
    this.a_ResumeItems = {};
    this.str_HistoryListWrapperID = "#" + strHistoryListWrapperID;
    this.str_ChannelName = "";
    this.n_PackageID = 0;
    this.arrayHistoryItems = {};
    this.objCurrentHistoryItem = {
      url: "",
      title: "",
      name: "",
      channel: ""
    };

    this.clearHistory = function () {
      this.arrayHistoryItems = [];
      $("#historyList li").remove();
      historyString = "<li class='sidebar-list-item'><span>No recently watched items are available.</span></li>";
      $("#historyList").html(historyString);
      $("#clearHistoryButton").toggle(true);
    };

    this.reset = function () {
      $(str_HistoryListWrapperID).empty();
    };

    this.addHistoryItem = function (strPackageID, strSegmentID, strPackageTitle, strPackageChannel, strSegmentTitle, strType) {
      //console.log("Attempting to add history item");
      let aHistoryItems = JSON.parse(localStorage.getItem("proPlayerHistory"));

      if (aHistoryItems === null) {
        aHistoryItems = [];
      }

      var bMatchFound = false;
      var nMatchIndex = 0;

      for (let i = 0; i < aHistoryItems.length; i++) {
        if (aHistoryItems[i].packageID == strPackageID) {
          bMatchFound = true;
          nMatchIndex = i;
          break;
        }
      }

      if (bMatchFound) {
        aHistoryItems.splice(nMatchIndex, 1);
      }

      var newHistoryItem = {
        packageTitle: strPackageTitle,
        packageChannel: strPackageChannel,
        segmentTitle: strSegmentTitle,
        packageID: strPackageID,
        segmentID: strSegmentID,
        type: strType
      };
      aHistoryItems.unshift(newHistoryItem);
      localStorage.setItem("proPlayerHistory", JSON.stringify(aHistoryItems));
    };
    /*
      this.reloadHistory = function()
      {
        var historyVersion = Cookies.get('historyVersion');
        if(history == undefined)
        {
          Cookies.remove('recentlyViewed');
        }
        else
        {
          this.arrayHistoryItems = Cookies.getJSON('recentlyViewed');
          if(this.arrayHistoryItems == undefined)
          {
              this.arrayHistoryItems = [];
          }
          
          //populate current item object
          this.objCurrentHistoryItem['url'] = this.str_ActiveSegmentURL;
          this.objCurrentHistoryItem['packageID'] = this.str_ActiveSegmentURL;
          this.objCurrentHistoryItem['title'] = this.str_ActiveSegmentTitle;
          this.objCurrentHistoryItem['name'] = this.str_ActiveSegmentFullName;
          if(	this.str_ChannelName  == 'Pro Player Packages' )
          {
            
            this.objCurrentHistoryItem['channel'] = "Courses";
          }
          else
          {
            this.objCurrentHistoryItem['channel'] = this.str_ChannelName;
          }
          
    
            var historyString = "";
          if( this.arrayHistoryItems.length > 0)
          {
            $('#clearHistoryButton').toggle(true);
            for(let  var i = 0; i < this.arrayHistoryItems.length; i++)
            {
              if(this.arrayHistoryItems[i]['channel'] == "Pro Player Packages")
              {
                this.arrayHistoryItems[i]['channel'] = "Courses";
              }
              historyItem = this.arrayHistoryItems[i];
              historyString += '<li class="sidebar-list-item history"><a href="/';
              historyString += historyItem['url'] + '">';
              
              historyString += '<span class="channel">' + historyItem['channel'] + '</span>';
              historyString += '<span class="title">' + historyItem['title'] + '</span>';
              historyString += '<span class="name">' + historyItem['name'] + '</span>';
              historyString += '</a></li>';
            }
            $('#historyList').html( historyString );
            
            if(this.n_ActiveSegmentEntryID != 0 && this.arrayHistoryItems[0]["url"] != this.objCurrentHistoryItem["url"])
            {
              this.arrayHistoryItems.unshift(this.objCurrentHistoryItem);
              if(this.arrayHistoryItems.length > 10)
              {
                this.arrayHistoryItems.pop();
              }
              Cookies.set('recentlyViewed', this.arrayHistoryItems, { expires: 365 });
            }
          }
          else
          {
            historyString = "<li class='sidebar-list-item'><span>No recently watched items are available.</span></li>";
            $(str_HistoryListWrapperID).html( historyString );
            
            if(this.n_ActiveSegmentEntryID  != 0)
            {
              this.arrayHistoryItems = [];
              this.arrayHistoryItems[0] = this.objCurrentHistoryItem;
              Cookies.set('recentlyViewed', this.arrayHistoryItems, { expires: 365 });
            }
          }
      }
      
      this.saveCookieValues = function()
      {
        if(this.n_ActiveSegmentEntryID != 0)
        {
          this.a_ResumeItems = Cookies.getJSON('savedResumeItems');
          if(this.a_ResumeItems == undefined)
          {
            this.a_ResumeItems = {};
          }
          if( this.n_PackageID != 0)
          {
            this.a_ResumeItems[this.n_PackageID] = this.n_ActiveSegmentEntryID;
            Cookies.set('savedResumeItems', this.a_ResumeItems, { expires: 365 });
          }
        }
        
      }
      */


    this.getLastHistoryItem = function () {
      var historyItems = JSON.parse(localStorage.getItem("proPlayerHistory"));

      if (historyItems !== null) {
        //console.log("Returning last history item...");
        return historyItems[0];
      } else {
        return null;
      }
    };
  }

}
class UserDataManager {
  constructor() {
    this.n_SegmentID = -1;
    this.b_UserDataDirty = false;

    this.setDirty = function (bDirty) {
      this.b_UserDataDirty = bDirty;
    };

    this.isDirty = function () {
      return this.b_UserDataDirty;
    };

    this.getSegmentID = function () {
      return this.n_SegmentID;
    };

    this.setNewSegmentID = function (nSegmentID) {
      this.resetAll();
      this.n_SegmentID = nSegmentID;
    };

    this.resetAll = function () {
      // $( "#userSegmentDataFormWrapper" ).empty();
      // $("#userSegmentDataFormWrapper").empty();
      this.n_SegmentID = -1;
      this.b_UserDataDirty = false;
    };

    this.reloadUserData = function () {
      this.loadUserDataForm();
    };

    this.loadUserDataForm = function () {
      var requestURL = gc_BranchPath + "/--ajax-load-user-data-form/?";
      requestURL += "segmentID=" + this.getSegmentID(); //console.log("Loading user data from: " + requestURL);

      $("#userSegmentDataFormWrapper").load(requestURL, function () {
        thePlayer.userDataManager.pushUserLoops();
      });
    };

    this.pushUserLoops = function () {
      var loopsText = $("textarea[name=cf_member_segment_data_loops]").val();
      var validLoopsArray = this.validateJSON(loopsText);

      if (validLoopsArray) {
        //console.log("Found user loops, adding list.");
        thePlayer.loopsManager.createNewCollection("userLoopList", "user", true);
        thePlayer.loopsManager.addListToCollectionFromArray(validLoopsArray, "user", "Your Loops", false);
      } else {
        //console.log("Adding empty array for User list");
        thePlayer.loopsManager.createNewCollection("userLoopList", "user", true);
      }

      this.importAllSegmentLoops();
    };

    this.importAllSegmentLoops = function () {
      $.get(gc_BranchPath + "/--ajax-get-segment-user-loops/" + this.n_SegmentID, function (data) {
        thePlayer.userDataManager.processImportedSegmentLoops(data);
      });
    };

    this.processImportedSegmentLoops = function (arrImportedLoops) {
      if (this.validateJSON(arrImportedLoops)) {
        let theImportedLoopData = JSON.parse(arrImportedLoops);
        thePlayer.loopsManager.createNewCollection("communityLoopList", "community", false);

        for (let i = 0; i < theImportedLoopData.memberLoopCollections.length; i++) {
          let theMemberLoops = theImportedLoopData.memberLoopCollections[i];
          thePlayer.loopsManager.addListToCollectionFromArray(theMemberLoops.memberLoops, "community", theMemberLoops.memberName, false);
        }
      }
    };

    this.updateUserDataForm = function () {
      let userLoopsArray = thePlayer.loopsManager.getUserLoopsArray();

      if (userLoopsArray.length != 0) {
        $("textarea[name=cf_member_segment_data_loops]").val(JSON.stringify(userLoopsArray));
      } else {
        $("textarea[name=cf_member_segment_data_loops]").val("");
      }
    };

    this.saveUserData = function () {
      this.updateUserDataForm();
      var theForm = $("form#userSegmentDataForm");
      formData = $(theForm).serialize(); //console.log(formData);

      $.ajax({
        type: "POST",
        url: $(theForm).attr("action"),
        data: formData
      }).done(function (response) {
        thePlayer.userDataManager.reloadUserData();
      });
    };

    this.validateJSON = function (jsonString) {
      try {
        var o = JSON.parse(jsonString); // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object",
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:

        if (o && typeof o === "object") {
          return o;
        }
      } catch (e) {}

      return false;
    };
  }

}

/***/ }),

/***/ "fd70":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e9c4");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("c1f9");
/* harmony import */ var core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2b0e");
/* harmony import */ var _middleware_ProPlayerCore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fc6a4");






const compObjects = (obj1, obj2) => Object.entries(obj1).join() === Object.entries(obj2).join();

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    drawer: [],
    keywords: "",
    activeCategory: null,
    searching: false,
    default_browser_entries: null,
    search_entries: null,
    activeFilters: {},
    filterSectionList: new _middleware_ProPlayerCore__WEBPACK_IMPORTED_MODULE_4__[/* BrowserFilterSectionList */ "b"](),
    filterStatus: {},
    search: {
      pages: null,
      current: new Set(),
      criteria: null
    }
  },
  mutations: {
    SET_CURRENT_CATEGORY(ctx, category) {
      // console.log("active category", category);
      vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].set(ctx, "activeCategory", category);
    },

    ADD_TO_DRAWER(ctx, content) {
      if (content) {
        content.forEach((tab, idx) => {
          const tabIdx = ctx.drawer.findIndex(x => x.name === tab.name);

          if (tabIdx == -1) {
            tab.id = idx;
            ctx.drawer.push(tab);
          }
        }, ctx);
      }
    },

    REMOVE_DRAWER(ctx, name) {
      console.log(`Removing: ${name}`);
      ctx.drawer.pop();
    },

    TOGGLE_SEARCHING(ctx, bool) {
      ctx.searching = bool;
    },

    SET_ENTRIES_PAGINATION(ctx, pages) {
      // console.log('pages', pages)
      if (pages) ctx.search.pages = pages;
    },

    SET_DEFAULT_BROWSER_ENTRIES(ctx, data) {
      // console.log("SettingDefEntries:", data);
      if (data) ctx.default_browser_entries = data;
    },

    SET_SEARCH_ENTRIES(ctx, data) {
      // console.log("SettingEntries:", data);
      if (data) ctx.search_entries = data;
    },

    SET_SEARCH(ctx, data) {
      // console.log("SettingCriteria:", data);
      // debugger
      if (data.auth) vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].set(ctx, "auth", data.auth);
      vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].set(ctx, "filterStatus", data.status || {});
      vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].set(ctx, "activeFilters", {});
      vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].set(ctx.search, "criteria", data.funnels ? data.funnels : null);
      vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].set(ctx.search, "current", new Set());
      vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].set(ctx.search, "pages", []);
    },

    TOGGLE_FILTER_STATUS(ctx, data) {
      // toggle selection status
      // console.log("current", ctx.filterStatus[data.sync]);
      vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].set(ctx.filterStatus, data.sync, !ctx.filterStatus[data.sync]); // console.log("Status toggle", ctx.filterStatus[data.sync]);
    },

    VALIDATE_UNIQUE_FILTER(ctx, data) {
      if (!data) {
        ctx.search.current.clear();
        return;
      } // update list of current selections


      data = JSON.stringify(data); // console.log("data", data);

      if (ctx.search.current.has(data)) {
        // console.log("found");
        ctx.search.current.delete(data);
      } else {
        // console.log("not found");
        const objData = JSON.parse(data);

        if (objData.group.sectionStackable === "no") {
          // filter is not stackable ... remove all other filters from the section
          ctx.search.current.forEach(itm => {
            const objItm = JSON.parse(itm);

            if (objItm.group.sectionId === objData.group.sectionId) {
              // ctx.filterStatus[objItm.sync] = !ctx.filterStatus[objItm.sync];
              ctx.filterStatus[objItm.sync] = false;
              ctx.search.current.delete(itm);
            }
          });
        }

        ctx.search.current.add(data);
      } // console.log("current", ctx.search.current);


      ctx.searching = ctx.search.current.size > 0;
    },

    REFRESH_ACTIVE_FILTERS(ctx) {
      vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].set(ctx, "activeFilters", {});
      ctx.search.current.forEach(filter => {
        let objFilter = JSON.parse(filter);
        let id = objFilter.group.sectionId;

        if (ctx.activeFilters.hasOwnProperty(id)) {
          ctx.activeFilters[id].push(objFilter);
        } else {
          ctx.activeFilters[id] = [objFilter];
        }
      });
    },

    BUILD_SECTION_DATA(ctx) {
      ctx.filterSectionList.reset();

      for (let [k, v] of Object.entries(ctx.search.criteria)) {
        let newSectionObject = new _middleware_ProPlayerCore__WEBPACK_IMPORTED_MODULE_4__[/* BrowserFilterSection */ "a"]();
        newSectionObject.setSectionID(v.sectionId);
        newSectionObject.setSectionType(v.sectionType);
        newSectionObject.setChannelID(v.sectionChannelId);
        newSectionObject.setGroupID(v.sectionGroupId);
        let tmpDependenciesArray = null;
        let tmpDependenciesString = v.sectionDependencies;

        if (tmpDependenciesString != "") {
          tmpDependenciesArray = tmpDependenciesString.split("|");
        } else {
          tmpDependenciesArray = [];
        }

        newSectionObject.setParentIDs(tmpDependenciesArray);
        ctx.filterSectionList.addSection(newSectionObject);
      }

      ctx.filterSectionList.computeSectionFamilies();
    },

    PROCESS_DEPENDENT_FILTERS(ctx, data) {
      console.log("procDeps", data);
      return;
      var chips = ctx.search.criteria[data.sectionID].chips;

      if (data.ids.length) {
        var filtered = chips.filter(chip => data.ids.includes(parseInt(chip.value)));
        vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].set(ctx.search.criteria[data.sectionID], "chips", filtered);
      } else {
        delete ctx.search.criteria[data.sectionID];
      }
    }

  },
  actions: {
    async gotoPage({
      state,
      dispatch,
      rootState,
      getters
    }, url) {
      const searchEntries = await rootState.TXBA_UTILS.getSearchEntries(state.activeCategory, getters.getAuthObject.params, url).then(searchEntries => dispatch("setResultData", searchEntries));
      console.log("search Entries", JSON.stringify(searchEntries, null, 4));
    },

    addToDrawer(ctx, content) {
      return ctx.commit("ADD_TO_DRAWER", content);
    },

    removeDrawer(ctx, name) {
      return ctx.commit("REMOVE_DRAWER", name);
    },

    removeFilter({
      dispatch
    }, data) {
      return dispatch("toggleSearchCriteria", data);
    },

    toggleSearchCriteria({
      dispatch,
      state
    }, itm, formData) {
      return dispatch("updateFilters", itm).then(() => {
        console.log("Searching?:", state.searching);

        if (state.searching) {
          return dispatch("processDependents", itm).then(() => dispatch("getFilterParams")).then(params => dispatch("getFilteredResults", params));
        } else {
          console.log("reset", state.activeCategory);
          return dispatch("setCriteria", state.activeCategory);
        }
      }).catch(err => {
        throw err;
      });
    },

    async updateFilters({
      dispatch
    }, itm) {
      return await dispatch("updateFilterStatus", itm).then(itm => dispatch("updateFilterSet", itm)).then(() => dispatch("refreshActiveFilters")).catch(err => console.log(err));
    },

    updateFilterStatus({
      commit
    }, itm) {
      commit("TOGGLE_FILTER_STATUS", itm);
      return itm;
    },

    updateFilterSet({
      commit,
      state
    }, itm) {
      commit("VALIDATE_UNIQUE_FILTER", itm);
      return state.searching;
    },

    refreshActiveFilters({
      commit
    }) {
      return commit("REFRESH_ACTIVE_FILTERS");
    },

    getFilterParams({
      state,
      getters
    }) {
      var q_string = [];
      const reqObj = Object.assign({
        channel: state.activeCategory === "courses" ? "pro_player_packages" : state.activeCategory
      }, getters.getAuthObject);
      Object.entries(reqObj).forEach(([key, value]) => {
        q_string.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      });
      return q_string.join("&") + '&' + getters.getFilterList;
    },

    async getFilteredResults({
      rootState,
      dispatch
    }, queryString) {
      console.log('q', queryString);
      const entries = await rootState.TXBA_UTILS.postAsyncData(queryString).then(data => {
        console.log("returnData", JSON.stringify(data, null, 4).substring(200, 400));
        return data;
      }).then(html => rootState.TXBA_UTILS.parseSearchResults(html.data)).then(searchEntries => dispatch("setResultData", searchEntries)).catch(error => console.error("ERROR", error));
    },

    setResultData({
      commit
    }, data) {
      // debugger
      // console.log("filtered entries", data);
      commit("SET_ENTRIES_PAGINATION", data.pages);
      commit("SET_SEARCH_ENTRIES", data.filters);
      return data;
    },

    async processDependents({
      dispatch,
      commit
    }, itm) {
      commit("BUILD_SECTION_DATA");
      return await dispatch("generateDependentURL", itm.group.sectionId).then(url => {
        if (url) return dispatch("getFilterDependents", url).then(data => dispatch("processDependentFilterSection", data));
      });
    },

    async generateDependentURL({
      dispatch,
      state
    }, sectionId) {
      console.log("processing deps", state.filterStatus);
      const strMasterSectionID = sectionId;
      const list = state.filterSectionList;
      const status = state.filterStatus;
      /* 
      #Order Of Operations 
      
      1. Get an array of dependencies for the master section being changed.
      2. Update each of those dependent sections.
        a. Scan through the sections each dependent section is dependent on.
        b. Get a list of all enabled inputs.
        c. Create the update url and update from that.
      */

      let theSection = list.getSectionByID(strMasterSectionID);
      let theChildren = theSection.getChildren(); //If there aren't any dependents found, there's nothing to do

      if (theChildren.length == 0) {
        return;
      }

      this.n_DependentsToProcess = theChildren.length;
      list.rebuildFilterSectionKeys(status);

      for (let i = 0; i < theChildren.length; i++) {
        let childParents = theChildren[i].getParents(); //initialize our tag and category filter strings

        let theTagKeys = "";
        let theCategoryKeys = ""; //cycle through all sections we depend on and collect any checked input values.

        for (let j = 0; j < childParents.length; j++) {
          let theKeyIDsString = childParents[j].getKeyString();
          let theKeyType = childParents[j].getSectionType();

          if (theKeyType == "tag") {
            theTagKeys += theKeyIDsString;
          } else {
            theCategoryKeys += theKeyIDsString;
          }
        } // Check if any of the key strings is empty and set it to -1,
        // otherwise trim the last | off the end;


        if (theTagKeys == "") {
          theTagKeys = "-1";
        }

        if (theCategoryKeys == "") {
          theCategoryKeys = "-1";
        }
        /* 	
        Now we have a list of categories and tags to key on (from all sections we 
        depend on. We are ready to construct a url to send to the refiner.
        */


        if (theTagKeys !== "-1" || theCategoryKeys !== "-1") {
          let theURL = "/--ajax-browser-filter-refiner/";
          theURL += theChildren[i].getSectionID() + "/"; //what is the ID of the section we're updating

          theURL += theChildren[i].getSectionType() + "/"; //what type of items are we retrieving (cats or tags)

          theURL += theChildren[i].getChannelID() + "/"; //what channel are we looking at

          theURL += theChildren[i].getGroupID() + "/"; //what is the group (cat or tag) that we are filtering

          theURL += theCategoryKeys + "/"; //what are the categories we have to match

          theURL += theTagKeys + "/"; //what are the tags we have to match
          // console.log("processing result", theURL);

          return theURL;
        } else {
          return dispatch("restoreFilterSection", theChildren[i].getSectionID());
        }
      }
    },

    async getFilterDependents({
      rootState
    }, URL) {
      return await rootState.TXBA_UTILS.getAsyncData(URL);
    },

    processDependentFilterSection({
      commit
    }, data) {
      return data !== "" ? commit("PROCESS_DEPENDENT_FILTERS", data) : "";
    },

    async fetchDefaultSearch(ctx) {
      // debugger
      const entries = await ctx.rootState.TXBA_UTILS.getDefaultSearchEntries(); // console.log('entries',entries)

      ctx.commit("SET_ENTRIES_PAGINATION", entries.pages);
      return ctx.commit("SET_DEFAULT_BROWSER_ENTRIES", entries.filters);
    },

    async setCriteria({
      commit,
      dispatch,
      rootState,
      getters
    }, category) {
      const filters = await rootState.TXBA_UTILS.getSearchFiltersByCategory(category);
      commit("SET_CURRENT_CATEGORY", category);
      commit("SET_SEARCH", filters);
      const searchEntries = await rootState.TXBA_UTILS.getSearchEntries(category, getters.getAuthObject.params);
      const results = await dispatch("setResultData", searchEntries);
      console.log("entry results", results);
      commit("BUILD_SECTION_DATA");
    },

    initStore: ({
      dispatch
    }) => {
      return dispatch("fetchDefaultSearch");
    }
  },
  getters: {
    getActiveCategory: state => state.activeCategory,
    isSearching: state => state.search.current.size > 0,
    getFilters: state => Object.fromEntries(Object.entries(state.filterStatus).filter(([key, value]) => value === true)),
    default_browser_entries: state => state.default_browser_entries,
    getAuthObject: state => state.auth,
    getFilterList: state => {
      let filters = [];
      filters.push(`keywords=${encodeURIComponent(state.keywords)}`);
      Object.keys(state.activeFilters).forEach(section => {
        state.activeFilters[section].forEach(itm => {
          filters.push(`${encodeURIComponent(itm.name)}=${encodeURIComponent(itm.value)}`);
        });
      });
      filters = filters.join("&"); // console.log("formvals", filters);

      return filters;
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=app.f749681f.js.map