// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/assets/samples/tr808/conga_hi.wav":[function(require,module,exports) {
module.exports = "/conga_hi.29697bc3.wav";
},{}],"src/assets/samples/tr808/conga_low.wav":[function(require,module,exports) {
module.exports = "/conga_low.2b685858.wav";
},{}],"src/assets/samples/tr808/conga_mid.wav":[function(require,module,exports) {
module.exports = "/conga_mid.6cf81520.wav";
},{}],"src/assets/samples/tr808/cowbell.wav":[function(require,module,exports) {
module.exports = "/cowbell.51d797d0.wav";
},{}],"src/assets/samples/tr808/cymbal.wav":[function(require,module,exports) {
module.exports = "/cymbal.3cbef1ce.wav";
},{}],"src/assets/samples/tr808/hat_close.wav":[function(require,module,exports) {
module.exports = "/hat_close.3b95ef18.wav";
},{}],"src/assets/samples/tr808/hat_open.wav":[function(require,module,exports) {
module.exports = "/hat_open.ce5992fe.wav";
},{}],"src/assets/samples/tr808/kick.wav":[function(require,module,exports) {
module.exports = "/kick.5b5a4224.wav";
},{}],"src/assets/samples/tr808/snare.wav":[function(require,module,exports) {
module.exports = "/snare.ad08492f.wav";
},{}],"src/assets/samples/tr808/clap.wav":[function(require,module,exports) {
module.exports = "/clap.67e4cd78.wav";
},{}],"src/assets/samples/tr808/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var conga_hi_wav_1 = __importDefault(require("./conga_hi.wav"));

var conga_low_wav_1 = __importDefault(require("./conga_low.wav"));

var conga_mid_wav_1 = __importDefault(require("./conga_mid.wav"));

var cowbell_wav_1 = __importDefault(require("./cowbell.wav"));

var cymbal_wav_1 = __importDefault(require("./cymbal.wav"));

var hat_close_wav_1 = __importDefault(require("./hat_close.wav"));

var hat_open_wav_1 = __importDefault(require("./hat_open.wav"));

var kick_wav_1 = __importDefault(require("./kick.wav"));

var snare_wav_1 = __importDefault(require("./snare.wav"));

var clap_wav_1 = __importDefault(require("./clap.wav"));

exports.hiConga = conga_hi_wav_1.default;
exports.lowConga = conga_low_wav_1.default;
exports.midConga = conga_mid_wav_1.default;
exports.cowbell = cowbell_wav_1.default;
exports.cymbal = cymbal_wav_1.default;
exports.closeHat = hat_close_wav_1.default;
exports.openHat = hat_open_wav_1.default;
exports.kick = kick_wav_1.default;
exports.snare = snare_wav_1.default;
exports.clap = clap_wav_1.default;
},{"./conga_hi.wav":"src/assets/samples/tr808/conga_hi.wav","./conga_low.wav":"src/assets/samples/tr808/conga_low.wav","./conga_mid.wav":"src/assets/samples/tr808/conga_mid.wav","./cowbell.wav":"src/assets/samples/tr808/cowbell.wav","./cymbal.wav":"src/assets/samples/tr808/cymbal.wav","./hat_close.wav":"src/assets/samples/tr808/hat_close.wav","./hat_open.wav":"src/assets/samples/tr808/hat_open.wav","./kick.wav":"src/assets/samples/tr808/kick.wav","./snare.wav":"src/assets/samples/tr808/snare.wav","./clap.wav":"src/assets/samples/tr808/clap.wav"}],"src/main.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = require("./assets/samples/tr808/index");

function pad(n, width) {
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

function color2rythm(colorHex) {
  var hex = colorHex.replace('#', '');
  var bin = parseInt(hex, 16).toString(2).padStart(8, '0');
  return pad(bin, 24).split('').map(function (val) {
    return val === '1';
  });
}

var Sequencer =
/*#__PURE__*/
function () {
  function Sequencer(sequences) {
    var tempo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 120;

    _classCallCheck(this, Sequencer);

    this.bpm = 120;
    this.sequences = [];
    this.currentStep = 0;
    this.sequences = sequences.map(function (sequence) {
      return {
        pattern: sequence.pattern,
        sample: new Audio(sequence.sampleSrc)
      };
    });
    this.bpm = tempo;
  }

  _createClass(Sequencer, [{
    key: "play",
    value: function play(callback) {
      var _this = this;

      this.currentStep = 0;
      clearInterval(this.interval);
      this.interval = setInterval(function () {
        callback(_this.currentStep);

        _this.step();
      }, 60 * 1000 / this.bpm);
    }
  }, {
    key: "updatePattern",
    value: function updatePattern(sequenceIndex, newPattern) {
      if (this.sequences[sequenceIndex]) {
        this.sequences[sequenceIndex].pattern = newPattern;
      }
    }
  }, {
    key: "step",
    value: function step() {
      var _this2 = this;

      this.sequences.forEach(function (sequence) {
        var shouldPlay = sequence.pattern[_this2.currentStep];

        if (shouldPlay) {
          sequence.sample.pause();
          sequence.sample.currentTime = 0;
          sequence.sample.play();
        }
      });
      this.currentStep = (this.currentStep + 1) % this.sequences[0].pattern.length;
    }
  }]);

  return Sequencer;
}();

var sequences = [{
  color: '#888888',
  sample: index_1.kick
}, {
  color: '#222222',
  sample: index_1.closeHat
}, {
  color: '#080808',
  sample: index_1.snare
}, {
  color: '#410010',
  sample: index_1.cowbell
}, {
  color: '#924924',
  sample: index_1.hiConga
}, {
  color: '#108901',
  sample: index_1.lowConga
}];
var seq = new Sequencer(sequences.map(function (s) {
  return {
    pattern: color2rythm(s.color),
    sampleSrc: s.sample
  };
}), 400);
var inputsWrapper = document.createElement('div');
seq.sequences.forEach(function (_sequence, i) {
  var input = document.createElement('input');
  input.setAttribute('type', 'color');
  input.value = sequences[i].color;
  inputsWrapper.append(input);
  input.addEventListener('change', function () {
    seq.updatePattern(i, color2rythm(input.value));
    sequences[i].color = input.value;
  });
});
document.body.append(inputsWrapper);
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var physicalScl = 30;
var scl = physicalScl * devicePixelRatio;
canvas.style.height = physicalScl * seq.sequences.length + 'px';
canvas.style.widows = physicalScl * seq.sequences[0].pattern.length + 'px';
canvas.height = scl * seq.sequences.length;
canvas.width = scl * seq.sequences[0].pattern.length;

function draw(sequencerInstance, currentStep) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  sequencerInstance.sequences.forEach(function (sequence, y) {
    sequence.pattern.forEach(function (step, x) {
      ctx.fillStyle = step ? sequences[y].color : '#eceff1';
      var margin = x === currentStep ? 10 : 2;
      ctx.fillRect(x * scl + margin, y * scl + margin, scl - 2 * margin, scl - 2 * margin);
    });
  });
}

draw(seq, 0);
document.body.append(canvas);
document.querySelector('button').addEventListener('click', function () {
  seq.play(function (currentStep) {
    draw(seq, currentStep);
  });
});
},{"./assets/samples/tr808/index":"src/assets/samples/tr808/index.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59382" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.ts"], null)
//# sourceMappingURL=/main.b0a109ad.js.map