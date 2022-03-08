(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "5ce2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/tools/Tuner.vue?vue&type=template&id=0bcbf3e6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.toggleTones)?_c('q-item',{staticClass:"q-mt-xl q-mr-lg absolute-top-right",attrs:{"dense":""}},[_c('q-item-section',[_c('q-icon',{attrs:{"name":"notifications_active","color":"accent","size":"lg"}})],1),_c('q-item-section',{staticClass:"text-accent text-subtitle1"},[_vm._v("\n      Tones Enabled\n    ")])],1):_vm._e(),_c('q-fab',{staticClass:"q-ml-xl q-mt-xl absolute-top-left bg-accent",attrs:{"icon":"settings"},scopedSlots:_vm._u([{key:"label",fn:function(){return [_c('div',{staticClass:"text-weight-bold"},[_c('span',[_vm._v("A"),_c('sub',[_vm._v("4")])]),_vm._v("\n        =\n        "),_c('span',[_vm._v(_vm._s(_vm.getA4)+" ")]),_vm._v("\n        Hz\n      ")])]},proxy:true}])},[_c('q-fab-action',{},[_c('q-list',{staticClass:" q-mt-xl q-pt-xl",attrs:{"dense":""}},[_c('q-item',[_c('q-item-section',[_c('q-btn-dropdown',{staticClass:"glossy",attrs:{"split":""},on:{"click":_vm.getFreq},scopedSlots:_vm._u([{key:"label",fn:function(){return [_c('q-item',{attrs:{"color":"accent"}},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-icon',{attrs:{"name":"graphic_eq","color":"accent"}})],1),_c('q-item-label',{staticClass:"text-accent"},[_vm._v("Change A"),_c('sub',[_vm._v("4")]),_vm._v(" Frequency")])],1)]},proxy:true}])},[_c('q-list',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"separator":"","dense":"","bordered":""}},[_c('q-item-label',{attrs:{"header":""}},[_vm._v("Presets")]),_c('q-separator'),_c('q-item',{attrs:{"clickable":!_vm.is440,"disable":_vm.is440},on:{"click":function($event){return _vm.setFreq(440)}}},[_c('q-item-section',[_c('q-item-label',[_vm._v("440 Hz")])],1)],1),_c('q-item',{attrs:{"clickable":!_vm.is432,"disable":_vm.is432},on:{"click":function($event){return _vm.setFreq(432)}}},[_c('q-item-section',[_c('q-item-label',[_vm._v("432 Hz")])],1)],1)],1)],1)],1)],1),_c('q-item',[_c('q-item-section',[_c('q-toggle',{staticClass:"text-accent q-pl-lg q-ml-xl",attrs:{"label":"Enable Tones","color":"accent","checked-icon":"check","unchecked-icon":"clear"},model:{value:(_vm.toggleTones),callback:function ($$v) {_vm.toggleTones=$$v},expression:"toggleTones"}}),_c('q-tooltip',[_c('span',{staticClass:"text-overline"},[_vm._v("Tones:")]),_c('p',{staticClass:"text-caption"},[_vm._v("\n                  When enabled, select a note to hear it. (must be disabled to\n                  enable to tuner)\n                ")])])],1)],1)],1)],1)],1),_c('canvas',{staticClass:"frequency-bars"}),_vm._m(0),_c('div',{staticClass:"notes"},[_c('div',{staticClass:"notes-list"}),_vm._m(1),_c('div',[(_vm.appInfo !== null)?_c('q-btn',{staticClass:"q-ma-md",attrs:{"color":"accent","label":"Errors","icon":"error","stacked":"","push":"","glossy":"","rounded":""},on:{"click":function($event){_vm.q = !_vm.q}}}):_vm._e(),_c('q-dialog',{model:{value:(_vm.q),callback:function ($$v) {_vm.q=$$v},expression:"q"}},[_c('q-card',[_c('q-card-section',[_c('div',{staticClass:"text-h5"},[_vm._v("Error:")])]),_c('q-card-section',{staticStyle:{"max-height":"60vh","max-width":"90vw"}})],1)],1)],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"meter"},[_c('div',{staticClass:"meter-dot"}),_c('div',{staticClass:"meter-pointer"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"frequency text-h5"},[_c('span'),_vm._v("Hz")])}]


// CONCATENATED MODULE: ./src/components/tools/Tuner.vue?vue&type=template&id=0bcbf3e6&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__("e9c4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.slice.js
var es_array_buffer_slice = __webpack_require__("ace4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.float32-array.js
var es_typed_array_float32_array = __webpack_require__("cfc3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.at.js
var es_typed_array_at = __webpack_require__("907a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js
var es_typed_array_set = __webpack_require__("3c5d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.sort.js
var es_typed_array_sort = __webpack_require__("219c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.uint8-array.js
var es_typed_array_uint8_array = __webpack_require__("5cc6");

// EXTERNAL MODULE: ./node_modules/aubiojs/build/aubio.js
var aubio = __webpack_require__("a53f");
var aubio_default = /*#__PURE__*/__webpack_require__.n(aubio);

// CONCATENATED MODULE: ./src/middleware/tools/tunerLib.js

const onAudioInput = evt => {
  // 'evt.data' is an integer array containing raw audio data
  //
  consoleMessage("Audio data received: " + evt.data.length + " samples");
  console.log("Audio data received: " + evt.data.length + " samples"); // ... do something with the evt.data array ...
};
const onAudioInputError = error => {
  alert("onAudioInputError event recieved: " + JSON.stringify(error));
};
function consoleMessage(msg, debugVar) {
  if (debugVar) {
    msg = `${msg}: ${debugVar}`;
    if (typeof debugVar == 'object') console.dir(msg, debugVar);else console.log(msg);
  }

  console.log(msg);
}
function getMicrophonePermission(onSuccess, onDenied, onError) {
  window.audioinput.checkMicrophonePermission(function (hasPermission) {
    try {
      if (hasPermission) {
        if (onSuccess) onSuccess();
      } else {
        window.audioinput.getMicrophonePermission(function (hasPermission, message) {
          try {
            if (hasPermission) {
              if (onSuccess) onSuccess();
            } else {
              if (onDenied) onDenied("User denied permission to record: " + message);
            }
          } catch (ex) {
            if (onError) onError("Start after getting permission exception: " + ex);
          }
        });
      }
    } catch (ex) {
      if (onError) onError("getMicrophonePermission exception: " + ex);
    }
  });
}
// CONCATENATED MODULE: ./src/middleware/tools/tuner.js








 // import { TunerNodeFactory } from "./worklets/tuner.worklet.factory.js";

var DEBUG_INFO = null;

const ConsoleMessage = (...message) => {
  // console.trace( message );
  DEBUG_INFO += `<br /><br /> ${message}`;
  consoleMessage(message);
};

const tuner_onAudioInput = evt => {// 'evt.data' is an integer array containing raw audio data
  //
  // ConsoleMessage("Audio data received: " + evt.data.length + " samples");
  // ... do something with the evt.data array ...
  // ConsoleMessage(typeof evt)
};

const tuner_onAudioInputError = error => {
  alert("onAudioInputError event recieved: " + JSON.stringify(error));
}; // Listen to audioinput events


window.addEventListener("audioinput", tuner_onAudioInput, false); // Listen to audioinputerror events

window.addEventListener("audioinputerror", tuner_onAudioInputError, false);
const Tuner = function (a4, isIOS) {
  this.info = null;
  this.middleA = a4 || 440;
  this.semitone = 69;
  this.bufferSize = 4096;
  this.noteStrings = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];
  this.isIOS = isIOS || false;

  if (this.isIOS) {
    ConsoleMessage("initialize IOS tuner");
    this.checkIOSPerms();
  } else {
    this.initGetUserMedia();
    ConsoleMessage("initialize WebAudio tuner");
  }
};

Tuner.prototype.initGetUserMedia = function () {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;

  if (!window.AudioContext) {
    return alert("AudioContext not supported");
  } // Older browsers might not implement mediaDevices at all, so we set an empty object first


  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  } // Some browsers partially implement mediaDevices. We can't just assign an object
  // with getUserMedia as it would overwrite existing properties.
  // Here, we will just add the getUserMedia property if it's missing.


  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function (constraints) {
      // First get ahold of the legacy getUserMedia, if present
      const getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia; // Some browsers just don't implement it - return a rejected promise with an error
      // to keep a consistent interface

      if (!getUserMedia) {
        alert("getUserMedia is not implemented in this browser");
      } // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise


      return new Promise(function (resolve, reject) {
        getUserMedia === null || getUserMedia === void 0 ? void 0 : getUserMedia.call(navigator, constraints, resolve, reject);
      });
    };
  }
};

Tuner.prototype.startRecord = async function () {
  const self = this;

  if (self.isIOS) {
    ConsoleMessage("Microphone input starting...");
    window.audioinput.start();
    ConsoleMessage("Microphone input started!");
    let stream = window.audioinput.getStream();
    ConsoleMessage(`stream: ${stream}`);
    this.audioContext = window.audioinput.getAudioContext();
    self.setup(stream);
  } else {
    const microphone = await navigator.mediaDevices.getUserMedia({
      audio: true
    }).catch(function (error) {
      alert(error.name + ": " + error.message);
    });
    self.setup(microphone);
  }
};

Tuner.prototype.getAudioContext = function () {
  if (this.audioContext) return this.audioContext;
  if (window.audioinput) return window.audioinput.getAudioContext();
  let ctx = window.AudioContext || window.webkitAudioContext;
  return new ctx();
};

Tuner.prototype.setup = async function (stream) {
  ConsoleMessage("setup");
  const self = this;
  self.audioContext = self.getAudioContext();
  if (!stream) stream = window.audioinput.getStream();
  let source = self.audioContext.createMediaStreamSource(stream);
  source.connect(self.analyser).connect(self.workletNode).connect(self.audioContext.destination);
  ConsoleMessage("Microphone input started!");
};

Tuner.prototype.getWorkletNode = async function () {
  return await this.audioContext.audioWorklet.addModule('worklets/tuner.worklet.js').then(async () => {
    ConsoleMessage("worklet loaded");
    let tunerNode = await new AudioWorkletNode(this.audioContext, 'tuner-proc');

    tunerNode.port.onmessage = e => {
      if (e.data instanceof Float32Array) {
        const audioData = e.data; // process pcm data

        const frequency = this.pitchDetector.do(audioData);
        ConsoleMessage("worklet data: ", audioData);

        if (frequency && this.onNoteDetected) {
          const note = this.getNote(frequency);
          this.onNoteDetected({
            name: this.noteStrings[note % 12],
            value: note,
            cents: this.getCents(frequency, note),
            octave: parseInt(note / 12) - 1,
            frequency: frequency
          });
        }
      }
    };

    return tunerNode;
  });
};

Tuner.prototype.init = async function () {
  this.audioContext = this.getAudioContext();
  this.analyser = this.audioContext.createAnalyser();
  this.workletNode = await this.getWorkletNode();
  const self = this;
  aubio_default()().then(function (aubio) {
    self.pitchDetector = new aubio.Pitch("default", self.bufferSize, 1, self.audioContext.sampleRate);
    self.startRecord();
  });
};
/**
 * get musical note from frequency
 *
 * @param {number} frequency
 * @returns {number}
 */


Tuner.prototype.getNote = function (frequency) {
  const note = 12 * (Math.log(frequency / this.middleA) / Math.log(2));
  return Math.round(note) + this.semitone;
};
/**
 * get the musical note's standard frequency
 *
 * @param note
 * @returns {number}
 */


Tuner.prototype.getStandardFrequency = function (note) {
  return this.middleA * Math.pow(2, (note - this.semitone) / 12);
};
/**
 * get cents difference between given frequency and musical note's standard frequency
 *
 * @param {number} frequency
 * @param {number} note
 * @returns {number}
 */


Tuner.prototype.getCents = function (frequency, note) {
  return Math.floor(1200 * Math.log(frequency / this.getStandardFrequency(note)) / Math.log(2));
};
/**
 * play the musical note
 *
 * @param {number} frequency
 */


Tuner.prototype.play = function (frequency) {
  this.audioContext = this.getAudioContext();
  ConsoleMessage(`audioContext: ${this.audioContext}`);

  if (!this.oscillator) {
    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.connect(this.audioContext.destination);
    this.oscillator.start();
  }

  this.oscillator.frequency.value = frequency;
};

Tuner.prototype.stop = function () {
  if (this.oscillator) {
    this.oscillator.stop();
    this.oscillator = null;
  }

  ConsoleMessage("Stopped!");
};

Tuner.prototype.checkIOSPerms = function () {
  try {
    if (window.audioinput && !window.audioinput.isCapturing()) {
      getMicrophonePermission(self.setup, function (deniedMsg) {
        ConsoleMessage(deniedMsg);
      }, function (errorMsg) {
        ConsoleMessage(errorMsg);
      });
    } else {
      ConsoleMessage("Already capturing!");
    }
  } catch (ex) {
    ConsoleMessage("startCapture exception: " + ex);
  }
};

const Notes = function (selector, tuner) {
  this.tuner = tuner;
  this.isAutoMode = true;
  this.$root = document.querySelector(selector);
  this.$notesList = this.$root.querySelector(".notes-list");
  this.$frequency = this.$root.querySelector(".frequency");
  this.$notes = [];
  this.$notesMap = {};
  this.createNotes();
};

Notes.prototype.createNotes = function () {
  const minOctave = 2;
  const maxOctave = 5;

  for (var octave = minOctave; octave <= maxOctave; octave += 1) {
    for (var n = 0; n < 12; n += 1) {
      const $note = document.createElement("div");
      $note.className = "note";
      $note.dataset.name = this.tuner.noteStrings[n];
      $note.dataset.value = 12 * (octave + 1) + n;
      $note.dataset.octave = octave.toString();
      $note.dataset.frequency = this.tuner.getStandardFrequency($note.dataset.value);
      $note.innerHTML = $note.dataset.name[0] + '<span class="note-sharp">' + ($note.dataset.name[1] || "") + "</span>" + '<span class="note-octave">' + $note.dataset.octave + "</span>";
      this.$notesList.appendChild($note);
      this.$notes.push($note);
      this.$notesMap[$note.dataset.value] = $note;
    }
  }

  const self = this;
  this.$notes.forEach(function ($note) {
    $note.addEventListener("click", function () {
      if (self.isAutoMode) {
        return;
      }

      const $active = self.$notesList.querySelector(".active");

      if ($active === this) {
        self.tuner.stop();
        $active.classList.remove("active");
      } else {
        self.tuner.play(this.dataset.frequency);
        self.update($note.dataset);
      }
    });
  });
};

Notes.prototype.active = function ($note) {
  ConsoleMessage("active note:", $note);
  this.clearActive();
  $note.classList.add("active");
  this.$notesList.scrollLeft = $note.offsetLeft - (this.$notesList.clientWidth - $note.clientWidth) / 2;
};

Notes.prototype.clearActive = function () {
  const $active = this.$notesList.querySelector(".active");

  if ($active) {
    $active.classList.remove("active");
  }
};

Notes.prototype.update = function (note) {
  ConsoleMessage("update note val", note.value);

  if (note.value in this.$notesMap) {
    this.active(this.$notesMap[note.value]);
    this.$frequency.childNodes[0].textContent = parseFloat(note.frequency).toFixed(1);
  }
};

Notes.prototype.toggleAutoMode = function () {
  if (this.isAutoMode) {
    this.clearActive();
  } else {
    this.tuner.stop();
  }

  this.isAutoMode = !this.isAutoMode;
};
/**
 * @param {string} selector
 * @constructor
 */


const Meter = function (selector) {
  this.$root = document.querySelector(selector);
  this.$pointer = this.$root.querySelector(".meter-pointer");
  this.init();
};

Meter.prototype.init = function () {
  for (var i = 0; i <= 10; i += 1) {
    const $scale = document.createElement("div");
    $scale.className = "meter-scale";
    $scale.style.transform = "rotate(" + (i * 9 - 45) + "deg)";

    if (i % 5 === 0) {
      $scale.classList.add("meter-scale-strong");
    }

    this.$root.appendChild($scale);
  }
};
/**
 * @param {number} deg
 */


Meter.prototype.update = function (deg) {
  ConsoleMessage(`deg: ${deg}`);
  this.$pointer.style.transform = "rotate(" + deg + "deg)";
};
/**
 * the frequency histogram
 *
 * @param {string} selector
 * @constructor
 */


const FrequencyBars = function (selector) {
  this.$canvas = document.querySelector(selector);
  this.$canvas.width = document.body.clientWidth;
  this.$canvas.height = document.body.clientHeight / 2;
  this.canvasContext = this.$canvas.getContext("2d");
};
/**
 * @param {Uint8Array} data
 */

FrequencyBars.prototype.update = function (data) {
  const length = 64; // low frequency only

  const width = this.$canvas.width / length - 0.5;
  this.canvasContext.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  this.canvasContext.globalAlpha = 0.35;

  for (var i = 0; i < length; i += 1) {
    this.canvasContext.fillStyle = "#ef6c00";
    this.canvasContext.fillRect(i * (width + 0.5), this.$canvas.height - data[i], width, data[i]);
  }
};

const Application = function (isIOS) {
  this.a4 = parseInt(localStorage.getItem("a4")) || 440;
  this.tuner = new Tuner(this.a4, isIOS);
  this.notes = new Notes(".notes", this.tuner);
  this.meter = new Meter(".meter");
  this.frequencyBars = new FrequencyBars(".frequency-bars");
  this.update({
    name: "A",
    frequency: this.a4,
    octave: 4,
    value: 69,
    cents: 0
  });
};

Application.prototype.start = function () {
  const self = this;

  this.tuner.onNoteDetected = function (note) {
    if (self.notes.isAutoMode) {
      if (self.lastNote === note.name) {
        self.update(note);
      } else {
        self.lastNote = note.name;
      }
    }
  };

  this.updateFrequencyBars();
  this.tuner.init();
  this.frequencyData = new Uint8Array(self.tuner.analyser.frequencyBinCount);
};

Application.prototype.stop = function () {
  if (window.audioinput && window.audioinput.isCapturing()) {
    window.audioinput.stop();
  }
};

Application.prototype.updateFrequencyBars = function () {
  if (this.tuner.isIOS && this.frequencyData) {
    let data = Object.values(this.frequencyData);

    if (data.some(v => v > 0)) {
      ConsoleMessage(`freq obj update (${data.some(v => v > 0)}): ${data}`);
      this.frequencyData = new Uint8Array(data);
    }
  }

  if (this.tuner.analyser) {
    // ConsoleMessage(`freq update ${Obtraject.values(this.frequencyData)}`);
    let data = new Uint8Array(Object.values(this.frequencyData));
    this.tuner.analyser.getByteFrequencyData(data);
    this.frequencyBars.update(data);
  }

  requestAnimationFrame(this.updateFrequencyBars.bind(this));
};

Application.prototype.update = function (note) {
  ConsoleMessage("app update", note.cents);
  this.notes.update(note);
  this.meter.update(note.cents / 50 * 45);
}; // noinspection JSUnusedGlobalSymbols


Application.prototype.toggleAutoMode = function () {
  this.notes.toggleAutoMode();
};

Application.prototype.getQVAR = function (obj) {
  return JSON.stringify(window.audioinput, null, 2);
};
// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/tools/Tuner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
document.addEventListener("deviceready", () => {
  console.log("deviceready");
}, false);

/* harmony default export */ var Tunervue_type_script_lang_js_ = ({
  name: "Tuner",
  data: () => ({
    app: null,
    q: false,
    info: DEBUG_INFO
  }),
  computed: {
    is440() {
      var _this$app;

      return ((_this$app = this.app) === null || _this$app === void 0 ? void 0 : _this$app.a4) === 440;
    },

    is432() {
      var _this$app2;

      return ((_this$app2 = this.app) === null || _this$app2 === void 0 ? void 0 : _this$app2.a4) === 432;
    },

    getA4() {
      var _this$app3;

      return ((_this$app3 = this.app) === null || _this$app3 === void 0 ? void 0 : _this$app3.a4) || "440";
    },

    appInfo() {
      return DEBUG_INFO;
    },

    toggleTones: {
      get() {
        var _this$app4;

        return !((_this$app4 = this.app) !== null && _this$app4 !== void 0 && _this$app4.notes.isAutoMode);
      },

      set(value) {
        var _this$app5;

        (_this$app5 = this.app) === null || _this$app5 === void 0 ? void 0 : _this$app5.notes.toggleAutoMode();
        this.enableTones = !this.app.notes.isAutoMode || false;
      }

    }
  },

  mounted() {
    console.log("mounted");
    this.app = new Application(this.$q.platform.is.ios);
    this.app.start();
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

  },

  destroyed() {
    var _this$app6;

    (_this$app6 = this.app) === null || _this$app6 === void 0 ? void 0 : _this$app6.stop();
  }

});
// CONCATENATED MODULE: ./src/components/tools/Tuner.vue?vue&type=script&lang=js&
 /* harmony default export */ var tools_Tunervue_type_script_lang_js_ = (Tunervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/tools/Tuner.vue?vue&type=style&index=0&lang=css&
var Tunervue_type_style_index_0_lang_css_ = __webpack_require__("fb16");

// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/fab/QFab.js
var QFab = __webpack_require__("c294");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/fab/QFabAction.js
var QFabAction = __webpack_require__("72db");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn-dropdown/QBtnDropdown.js + 1 modules
var QBtnDropdown = __webpack_require__("f20b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js
var QToggle = __webpack_require__("9564");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__("24e8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__("7f67");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/tools/Tuner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tools_Tunervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tools_Tuner = __webpack_exports__["default"] = (component.exports);
















runtime_auto_import_default()(component, 'components', {QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QIcon: QIcon["a" /* default */],QFab: QFab["a" /* default */],QFabAction: QFabAction["a" /* default */],QList: QList["a" /* default */],QBtnDropdown: QBtnDropdown["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QSeparator: QSeparator["a" /* default */],QToggle: QToggle["a" /* default */],QTooltip: QTooltip["a" /* default */],QBtn: QBtn["a" /* default */],QDialog: QDialog["a" /* default */],QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */]});runtime_auto_import_default()(component, 'directives', {ClosePopup: ClosePopup["a" /* default */]});


/***/ }),

/***/ "6039":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb16":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Tuner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6039");
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Tuner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_Tuner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=4.c073df9d.js.map