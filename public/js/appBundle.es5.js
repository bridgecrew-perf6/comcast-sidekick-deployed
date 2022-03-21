/**
 * App version: 1.0.0
 * SDK version: 4.8.1
 * CLI version: 2.7.2
 * 
 * Generated: Mon, 21 Mar 2022 20:46:12 GMT
 */

var APP_lightning_ui = (function () {
  'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);

        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }

        desc = Object.getOwnPropertyDescriptor(receiver, property);

        if (desc) {
          if (!desc.writable) {
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);

    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var settings = {};
  var subscribers = {};
  var initSettings = function initSettings(appSettings, platformSettings) {
    settings['app'] = appSettings;
    settings['platform'] = platformSettings;
    settings['user'] = {};
  };

  var publish = function publish(key, value) {
    subscribers[key] && subscribers[key].forEach(function (subscriber) {
      return subscriber(value);
    });
  };

  var dotGrab = function dotGrab() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var key = arguments.length > 1 ? arguments[1] : undefined;
    if (obj === null) return undefined;
    var keys = key.split('.');

    for (var i = 0; i < keys.length; i++) {
      obj = obj[keys[i]] = obj[keys[i]] !== undefined ? obj[keys[i]] : {};
    }

    return typeof obj === 'object' && obj !== null ? Object.keys(obj).length ? obj : undefined : obj;
  };

  var Settings = {
    get: function get(type, key) {
      var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var val = dotGrab(settings[type], key);
      return val !== undefined ? val : fallback;
    },
    has: function has(type, key) {
      return !!this.get(type, key);
    },
    set: function set(key, value) {
      settings['user'][key] = value;
      publish(key, value);
    },
    subscribe: function subscribe(key, callback) {
      subscribers[key] = subscribers[key] || [];
      subscribers[key].push(callback);
    },
    unsubscribe: function unsubscribe(key, callback) {
      if (callback) {
        var index = subscribers[key] && subscribers[key].findIndex(function (cb) {
          return cb === callback;
        });
        index > -1 && subscribers[key].splice(index, 1);
      } else {
        if (key in subscribers) {
          subscribers[key] = [];
        }
      }
    },
    clearSubscribers: function clearSubscribers() {
      var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(subscribers)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          delete subscribers[key];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var prepLog = function prepLog(type, args) {
    var colors = {
      Info: 'green',
      Debug: 'gray',
      Warn: 'orange',
      Error: 'red'
    };
    args = Array.from(args);
    return ['%c' + (args.length > 1 && typeof args[0] === 'string' ? args.shift() : type), 'background-color: ' + colors[type] + '; color: white; padding: 2px 4px; border-radius: 2px', args];
  };

  var Log = {
    info: function info() {
      Settings.get('platform', 'log') && console.log.apply(console, prepLog('Info', arguments));
    },
    debug: function debug() {
      Settings.get('platform', 'log') && console.debug.apply(console, prepLog('Debug', arguments));
    },
    error: function error() {
      Settings.get('platform', 'log') && console.error.apply(console, prepLog('Error', arguments));
    },
    warn: function warn() {
      Settings.get('platform', 'log') && console.warn.apply(console, prepLog('Warn', arguments));
    }
  };

  var executeAsPromise = (function (method) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var result;

    if (method && typeof method === 'function') {
      try {
        result = method.apply(context, args);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    } // if it looks like a duck .. ehm ... promise and talks like a promise, let's assume it's a promise


    if (result !== null && typeof result === 'object' && result.then && typeof result.then === 'function') {
      return result;
    } // otherwise make it into a promise
    else {
      return new Promise(function (resolve, reject) {
        if (result instanceof Error) {
          reject(result);
        } else {
          resolve(result);
        }
      });
    }
  });

  var sendMetric = function sendMetric(type, event, params) {
    Log.info('Sending metric', type, event, params);
  };

  var initMetrics = function initMetrics(config) {
    sendMetric = config.sendMetric;
  }; // available metric per category

  var metrics$1 = {
    app: ['launch', 'loaded', 'ready', 'close'],
    page: ['view', 'leave'],
    user: ['click', 'input'],
    media: ['abort', 'canplay', 'ended', 'pause', 'play', // with some videos there occur almost constant suspend events ... should investigate
    // 'suspend',
    'volumechange', 'waiting', 'seeking', 'seeked']
  }; // error metric function (added to each category)

  var errorMetric = function errorMetric(type, message, code, visible) {
    var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    params = _objectSpread2({
      params: params
    }, {
      message: message,
      code: code,
      visible: visible
    });
    sendMetric(type, 'error', params);
  };

  var Metric = function Metric(type, events) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return events.reduce(function (obj, event) {
      obj[event] = function (name) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        params = _objectSpread2(_objectSpread2(_objectSpread2({}, options), name ? {
          name: name
        } : {}), params);
        sendMetric(type, event, params);
      };

      return obj;
    }, {
      error: function error(message, code, params) {
        errorMetric(type, message, code, params);
      },
      event: function event(name, params) {
        sendMetric(type, name, params);
      }
    });
  };

  var Metrics = function Metrics(types) {
    return Object.keys(types).reduce(function (obj, type) {
      // media metric works a bit different!
      // it's a function that accepts a url and returns an object with the available metrics
      // url is automatically passed as a param in every metric
      type === 'media' ? obj[type] = function (url) {
        return Metric(type, types[type], {
          url: url
        });
      } : obj[type] = Metric(type, types[type]);
      return obj;
    }, {
      error: errorMetric,
      event: sendMetric
    });
  };

  var Metrics$1 = Metrics(metrics$1);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var events$1 = {
    abort: 'Abort',
    canplay: 'CanPlay',
    canplaythrough: 'CanPlayThrough',
    durationchange: 'DurationChange',
    emptied: 'Emptied',
    encrypted: 'Encrypted',
    ended: 'Ended',
    error: 'Error',
    interruptbegin: 'InterruptBegin',
    interruptend: 'InterruptEnd',
    loadeddata: 'LoadedData',
    loadedmetadata: 'LoadedMetadata',
    loadstart: 'LoadStart',
    pause: 'Pause',
    play: 'Play',
    playing: 'Playing',
    progress: 'Progress',
    ratechange: 'Ratechange',
    seeked: 'Seeked',
    seeking: 'Seeking',
    stalled: 'Stalled',
    // suspend: 'Suspend', // this one is called a looooot for some videos
    timeupdate: 'TimeUpdate',
    volumechange: 'VolumeChange',
    waiting: 'Waiting'
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var autoSetupMixin = (function (sourceObject) {
    var setup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var ready = false;

    var doSetup = function doSetup() {
      if (ready === false) {
        setup();
        ready = true;
      }
    };

    return Object.keys(sourceObject).reduce(function (obj, key) {
      if (typeof sourceObject[key] === 'function') {
        obj[key] = function () {
          doSetup();
          return sourceObject[key].apply(sourceObject, arguments);
        };
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).get === 'function') {
        obj.__defineGetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).get.apply(sourceObject);
        });
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).set === 'function') {
        obj.__defineSetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).set.sourceObject[key].apply(sourceObject, arguments);
        });
      } else {
        obj[key] = sourceObject[key];
      }

      return obj;
    }, {});
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var timeout = null;
  var easeExecution = (function (cb, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      cb();
    }, delay);
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var basePath;

  var _proxyUrl;

  var initUtils = function initUtils(config) {
    basePath = _ensureUrlWithProtocol(makeFullStaticPath(window.location.pathname, config.path || '/'));

    if (config.proxyUrl) {
      _proxyUrl = _ensureUrlWithProtocol(config.proxyUrl);
    }
  };
  var Utils = {
    asset: function asset(relPath) {
      return basePath + relPath;
    },
    proxyUrl: function proxyUrl(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _proxyUrl ? _proxyUrl + '?' + _makeQueryString(url, options) : url;
    },
    makeQueryString: function makeQueryString() {
      return _makeQueryString.apply(void 0, arguments);
    },
    // since imageworkers don't work without protocol
    ensureUrlWithProtocol: function ensureUrlWithProtocol() {
      return _ensureUrlWithProtocol.apply(void 0, arguments);
    }
  };

  var _ensureUrlWithProtocol = function _ensureUrlWithProtocol(url) {
    if (/^\/\//.test(url)) {
      return window.location.protocol + url;
    }

    if (!/^(?:https?:)/i.test(url)) {
      return window.location.origin + url;
    }

    return url;
  };
  var makeFullStaticPath = function makeFullStaticPath() {
    var pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    var path = arguments.length > 1 ? arguments[1] : undefined;
    // ensure path has traling slash
    path = path.charAt(path.length - 1) !== '/' ? path + '/' : path; // if path is URL, we assume it's already the full static path, so we just return it

    if (/^(?:https?:)?(?:\/\/)/.test(path)) {
      return path;
    }

    if (path.charAt(0) === '/') {
      return path;
    } else {
      // cleanup the pathname (i.e. remove possible index.html)
      pathname = cleanUpPathName(pathname); // remove possible leading dot from path

      path = path.charAt(0) === '.' ? path.substr(1) : path; // ensure path has leading slash

      path = path.charAt(0) !== '/' ? '/' + path : path;
      return pathname + path;
    }
  };
  var cleanUpPathName = function cleanUpPathName(pathname) {
    if (pathname.slice(-1) === '/') return pathname.slice(0, -1);
    var parts = pathname.split('/');
    if (parts[parts.length - 1].indexOf('.') > -1) parts.pop();
    return parts.join('/');
  };

  var _makeQueryString = function _makeQueryString(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'url';
    // add operator as an option
    options.operator = 'metrological'; // Todo: make this configurable (via url?)
    // add type (= url or qr) as an option, with url as the value

    options[type] = url;
    return Object.keys(options).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent('' + options[key]);
    }).join('&');
  };

  var initProfile = function initProfile(config) {
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var lng = window.lng;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var events = ['timeupdate', 'error', 'ended', 'loadeddata', 'canplay', 'play', 'playing', 'pause', 'loadstart', 'seeking', 'seeked', 'encrypted'];

  var mediaUrl$1 = function mediaUrl(url) {
    return url;
  };

  var initMediaPlayer = function initMediaPlayer(config) {
    if (config.mediaUrl) {
      mediaUrl$1 = config.mediaUrl;
    }
  };

  /*#__PURE__*/(function (_Lightning$Component) {
    _inherits(Mediaplayer, _Lightning$Component);

    var _super = _createSuper(Mediaplayer);

    function Mediaplayer() {
      _classCallCheck(this, Mediaplayer);

      return _super.apply(this, arguments);
    }

    _createClass(Mediaplayer, [{
      key: "_construct",
      value: function _construct() {
        this._skipRenderToTexture = false;
        this._metrics = null;
        this._textureMode = Settings.get('platform', 'textureMode') || false;
        Log.info('Texture mode: ' + this._textureMode);
        console.warn(["The 'MediaPlayer'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'VideoPlayer'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/videoplayer'].join('\n\n'));
      }
    }, {
      key: "skipRenderToTexture",
      set: function set(v) {
        this._skipRenderToTexture = v;
      }
    }, {
      key: "textureMode",
      get: function get() {
        return this._textureMode;
      }
    }, {
      key: "videoView",
      get: function get() {
        return this.tag('Video');
      }
    }, {
      key: "_init",
      value: function _init() {
        //re-use videotag if already there
        var videoEls = document.getElementsByTagName('video');
        if (videoEls && videoEls.length > 0) this.videoEl = videoEls[0];else {
          this.videoEl = document.createElement('video');
          this.videoEl.setAttribute('id', 'video-player');
          this.videoEl.style.position = 'absolute';
          this.videoEl.style.zIndex = '1';
          this.videoEl.style.display = 'none';
          this.videoEl.setAttribute('width', '100%');
          this.videoEl.setAttribute('height', '100%');
          this.videoEl.style.visibility = this.textureMode ? 'hidden' : 'visible';
          document.body.appendChild(this.videoEl);
        }

        if (this.textureMode && !this._skipRenderToTexture) {
          this._createVideoTexture();
        }

        this.eventHandlers = [];
      }
    }, {
      key: "_registerListeners",
      value: function _registerListeners() {
        var _this = this;

        events.forEach(function (event) {
          var handler = function handler(e) {
            if (_this._metrics && _this._metrics[event] && typeof _this._metrics[event] === 'function') {
              _this._metrics[event]({
                currentTime: _this.videoEl.currentTime
              });
            }

            _this.fire(event, {
              videoElement: _this.videoEl,
              event: e
            });
          };

          _this.eventHandlers.push(handler);

          _this.videoEl.addEventListener(event, handler);
        });
      }
    }, {
      key: "_deregisterListeners",
      value: function _deregisterListeners() {
        var _this2 = this;

        Log.info('Deregistering event listeners MediaPlayer');
        events.forEach(function (event, index) {
          _this2.videoEl.removeEventListener(event, _this2.eventHandlers[index]);
        });
        this.eventHandlers = [];
      }
    }, {
      key: "_attach",
      value: function _attach() {
        this._registerListeners();
      }
    }, {
      key: "_detach",
      value: function _detach() {
        this._deregisterListeners();

        this.close();
      }
    }, {
      key: "_createVideoTexture",
      value: function _createVideoTexture() {
        var stage = this.stage;
        var gl = stage.gl;
        var glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        this.videoTexture.options = {
          source: glTexture,
          w: this.videoEl.width,
          h: this.videoEl.height
        };
      }
    }, {
      key: "_startUpdatingVideoTexture",
      value: function _startUpdatingVideoTexture() {
        var _this3 = this;

        if (this.textureMode && !this._skipRenderToTexture) {
          var stage = this.stage;

          if (!this._updateVideoTexture) {
            this._updateVideoTexture = function () {
              if (_this3.videoTexture.options.source && _this3.videoEl.videoWidth && _this3.active) {
                var gl = stage.gl;
                var currentTime = new Date().getTime(); // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
                // We'll fallback to fixed 30fps in this case.

                var frameCount = _this3.videoEl.webkitDecodedFrameCount;
                var mustUpdate = frameCount ? _this3._lastFrame !== frameCount : _this3._lastTime < currentTime - 30;

                if (mustUpdate) {
                  _this3._lastTime = currentTime;
                  _this3._lastFrame = frameCount;

                  try {
                    gl.bindTexture(gl.TEXTURE_2D, _this3.videoTexture.options.source);
                    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this3.videoEl);
                    _this3._lastFrame = _this3.videoEl.webkitDecodedFrameCount;
                    _this3.videoTextureView.visible = true;
                    _this3.videoTexture.options.w = _this3.videoEl.videoWidth;
                    _this3.videoTexture.options.h = _this3.videoEl.videoHeight;
                    var expectedAspectRatio = _this3.videoTextureView.w / _this3.videoTextureView.h;
                    var realAspectRatio = _this3.videoEl.videoWidth / _this3.videoEl.videoHeight;

                    if (expectedAspectRatio > realAspectRatio) {
                      _this3.videoTextureView.scaleX = realAspectRatio / expectedAspectRatio;
                      _this3.videoTextureView.scaleY = 1;
                    } else {
                      _this3.videoTextureView.scaleY = expectedAspectRatio / realAspectRatio;
                      _this3.videoTextureView.scaleX = 1;
                    }
                  } catch (e) {
                    Log.error('texImage2d video', e);

                    _this3._stopUpdatingVideoTexture();

                    _this3.videoTextureView.visible = false;
                  }

                  _this3.videoTexture.source.forceRenderUpdate();
                }
              }
            };
          }

          if (!this._updatingVideoTexture) {
            stage.on('frameStart', this._updateVideoTexture);
            this._updatingVideoTexture = true;
          }
        }
      }
    }, {
      key: "_stopUpdatingVideoTexture",
      value: function _stopUpdatingVideoTexture() {
        if (this.textureMode) {
          var stage = this.stage;
          stage.removeListener('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = false;
          this.videoTextureView.visible = false;

          if (this.videoTexture.options.source) {
            var gl = stage.gl;
            gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
          }
        }
      }
    }, {
      key: "updateSettings",
      value: function updateSettings() {
        var _this4 = this;

        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // The Component that 'consumes' the media player.
        this._consumer = settings.consumer;

        if (this._consumer && this._consumer.getMediaplayerSettings) {
          // Allow consumer to add settings.
          settings = Object.assign(settings, this._consumer.getMediaplayerSettings());
        }

        if (!lng.Utils.equalValues(this._stream, settings.stream)) {
          if (settings.stream && settings.stream.keySystem) {
            navigator.requestMediaKeySystemAccess(settings.stream.keySystem.id, settings.stream.keySystem.config).then(function (keySystemAccess) {
              return keySystemAccess.createMediaKeys();
            }).then(function (createdMediaKeys) {
              return _this4.videoEl.setMediaKeys(createdMediaKeys);
            }).then(function () {
              if (settings.stream && settings.stream.src) _this4.open(settings.stream.src);
            }).catch(function () {
              console.error('Failed to set up MediaKeys');
            });
          } else if (settings.stream && settings.stream.src) {
            // This is here to be backwards compatible, will be removed
            // in future sdk release
            if (Settings.get('app', 'hls')) {
              if (!window.Hls) {
                window.Hls = /*#__PURE__*/function () {
                  function Hls() {
                    _classCallCheck(this, Hls);
                  }

                  _createClass(Hls, null, [{
                    key: "isSupported",
                    value: function isSupported() {
                      console.warn('hls-light not included');
                      return false;
                    }
                  }]);

                  return Hls;
                }();
              }

              if (window.Hls.isSupported()) {
                if (!this._hls) this._hls = new window.Hls({
                  liveDurationInfinity: true
                });

                this._hls.loadSource(settings.stream.src);

                this._hls.attachMedia(this.videoEl);

                this.videoEl.style.display = 'block';
              }
            } else {
              this.open(settings.stream.src);
            }
          } else {
            this.close();
          }

          this._stream = settings.stream;
        }

        this._setHide(settings.hide);

        this._setVideoArea(settings.videoPos);
      }
    }, {
      key: "_setHide",
      value: function _setHide(hide) {
        if (this.textureMode) {
          this.tag('Video').setSmooth('alpha', hide ? 0 : 1);
        } else {
          this.videoEl.style.visibility = hide ? 'hidden' : 'visible';
        }
      }
    }, {
      key: "open",
      value: function open(url) {
        var _this5 = this;

        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          hide: false,
          videoPosition: null
        };
        // prep the media url to play depending on platform (mediaPlayerplugin)
        url = mediaUrl$1(url);
        this._metrics = Metrics$1.media(url);
        Log.info('Playing stream', url);

        if (this.application.noVideo) {
          Log.info('noVideo option set, so ignoring: ' + url);
          return;
        } // close the video when opening same url as current (effectively reloading)


        if (this.videoEl.getAttribute('src') === url) {
          this.close();
        }

        this.videoEl.setAttribute('src', url); // force hide, then force show (in next tick!)
        // (fixes comcast playback rollover issue)

        this.videoEl.style.visibility = 'hidden';
        this.videoEl.style.display = 'none';
        setTimeout(function () {
          _this5.videoEl.style.display = 'block';
          _this5.videoEl.style.visibility = 'visible';
        });

        this._setHide(settings.hide);

        this._setVideoArea(settings.videoPosition || [0, 0, 1920, 1080]);
      }
    }, {
      key: "close",
      value: function close() {
        // We need to pause first in order to stop sound.
        this.videoEl.pause();
        this.videoEl.removeAttribute('src'); // force load to reset everything without errors

        this.videoEl.load();

        this._clearSrc();

        this.videoEl.style.display = 'none';
      }
    }, {
      key: "playPause",
      value: function playPause() {
        if (this.isPlaying()) {
          this.doPause();
        } else {
          this.doPlay();
        }
      }
    }, {
      key: "muted",
      get: function get() {
        return this.videoEl.muted;
      },
      set: function set(v) {
        this.videoEl.muted = v;
      }
    }, {
      key: "loop",
      get: function get() {
        return this.videoEl.loop;
      },
      set: function set(v) {
        this.videoEl.loop = v;
      }
    }, {
      key: "isPlaying",
      value: function isPlaying() {
        return this._getState() === 'Playing';
      }
    }, {
      key: "doPlay",
      value: function doPlay() {
        this.videoEl.play();
      }
    }, {
      key: "doPause",
      value: function doPause() {
        this.videoEl.pause();
      }
    }, {
      key: "reload",
      value: function reload() {
        var url = this.videoEl.getAttribute('src');
        this.close();
        this.videoEl.src = url;
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        return Promise.resolve(this.videoEl.currentTime);
      }
    }, {
      key: "setPosition",
      value: function setPosition(pos) {
        this.videoEl.currentTime = pos;
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return Promise.resolve(this.videoEl.duration);
      }
    }, {
      key: "seek",
      value: function seek(time) {
        var absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (absolute) {
          this.videoEl.currentTime = time;
        } else {
          this.videoEl.currentTime += time;
        }
      }
    }, {
      key: "videoTextureView",
      get: function get() {
        return this.tag('Video').tag('VideoTexture');
      }
    }, {
      key: "videoTexture",
      get: function get() {
        return this.videoTextureView.texture;
      }
    }, {
      key: "_setVideoArea",
      value: function _setVideoArea(videoPos) {
        if (lng.Utils.equalValues(this._videoPos, videoPos)) {
          return;
        }

        this._videoPos = videoPos;

        if (this.textureMode) {
          this.videoTextureView.patch({
            smooth: {
              x: videoPos[0],
              y: videoPos[1],
              w: videoPos[2] - videoPos[0],
              h: videoPos[3] - videoPos[1]
            }
          });
        } else {
          var precision = this.stage.getRenderPrecision();
          this.videoEl.style.left = Math.round(videoPos[0] * precision) + 'px';
          this.videoEl.style.top = Math.round(videoPos[1] * precision) + 'px';
          this.videoEl.style.width = Math.round((videoPos[2] - videoPos[0]) * precision) + 'px';
          this.videoEl.style.height = Math.round((videoPos[3] - videoPos[1]) * precision) + 'px';
        }
      }
    }, {
      key: "_fireConsumer",
      value: function _fireConsumer(event, args) {
        if (this._consumer) {
          this._consumer.fire(event, args);
        }
      }
    }, {
      key: "_equalInitData",
      value: function _equalInitData(buf1, buf2) {
        if (!buf1 || !buf2) return false;
        if (buf1.byteLength != buf2.byteLength) return false;
        var dv1 = new Int8Array(buf1);
        var dv2 = new Int8Array(buf2);

        for (var i = 0; i != buf1.byteLength; i++) {
          if (dv1[i] != dv2[i]) return false;
        }

        return true;
      }
    }, {
      key: "error",
      value: function error(args) {
        this._fireConsumer('$mediaplayerError', args);

        this._setState('');

        return '';
      }
    }, {
      key: "loadeddata",
      value: function loadeddata(args) {
        this._fireConsumer('$mediaplayerLoadedData', args);
      }
    }, {
      key: "play",
      value: function play(args) {
        this._fireConsumer('$mediaplayerPlay', args);
      }
    }, {
      key: "playing",
      value: function playing(args) {
        this._fireConsumer('$mediaplayerPlaying', args);

        this._setState('Playing');
      }
    }, {
      key: "canplay",
      value: function canplay(args) {
        this.videoEl.play();

        this._fireConsumer('$mediaplayerStart', args);
      }
    }, {
      key: "loadstart",
      value: function loadstart(args) {
        this._fireConsumer('$mediaplayerLoad', args);
      }
    }, {
      key: "seeked",
      value: function seeked() {
        this._fireConsumer('$mediaplayerSeeked', {
          currentTime: this.videoEl.currentTime,
          duration: this.videoEl.duration || 1
        });
      }
    }, {
      key: "seeking",
      value: function seeking() {
        this._fireConsumer('$mediaplayerSeeking', {
          currentTime: this.videoEl.currentTime,
          duration: this.videoEl.duration || 1
        });
      }
    }, {
      key: "durationchange",
      value: function durationchange(args) {
        this._fireConsumer('$mediaplayerDurationChange', args);
      }
    }, {
      key: "encrypted",
      value: function encrypted(args) {
        var video = args.videoElement;
        var event = args.event; // FIXME: Double encrypted events need to be properly filtered by Gstreamer

        if (video.mediaKeys && !this._equalInitData(this._previousInitData, event.initData)) {
          this._previousInitData = event.initData;

          this._fireConsumer('$mediaplayerEncrypted', args);
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Video: {
            VideoWrap: {
              VideoTexture: {
                visible: false,
                pivot: 0.5,
                texture: {
                  type: lng.textures.StaticTexture,
                  options: {}
                }
              }
            }
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this6) {
          _inherits(Playing, _this6);

          var _super2 = _createSuper(Playing);

          function Playing() {
            _classCallCheck(this, Playing);

            return _super2.apply(this, arguments);
          }

          _createClass(Playing, [{
            key: "$enter",
            value: function $enter() {
              this._startUpdatingVideoTexture();
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this._stopUpdatingVideoTexture();
            }
          }, {
            key: "timeupdate",
            value: function timeupdate() {
              this._fireConsumer('$mediaplayerProgress', {
                currentTime: this.videoEl.currentTime,
                duration: this.videoEl.duration || 1
              });
            }
          }, {
            key: "ended",
            value: function ended(args) {
              this._fireConsumer('$mediaplayerEnded', args);

              this._setState('');
            }
          }, {
            key: "pause",
            value: function pause(args) {
              this._fireConsumer('$mediaplayerPause', args);

              this._setState('Playing.Paused');
            }
          }, {
            key: "_clearSrc",
            value: function _clearSrc() {
              this._fireConsumer('$mediaplayerStop', {});

              this._setState('');
            }
          }], [{
            key: "_states",
            value: function _states() {
              return [/*#__PURE__*/function (_this7) {
                _inherits(Paused, _this7);

                var _super3 = _createSuper(Paused);

                function Paused() {
                  _classCallCheck(this, Paused);

                  return _super3.apply(this, arguments);
                }

                return _createClass(Paused);
              }(this)];
            }
          }]);

          return Playing;
        }(this)];
      }
    }]);

    return Mediaplayer;
  })(lng.Component);

  var localCookie = /*#__PURE__*/function () {
    function localCookie(e) {
      _classCallCheck(this, localCookie);

      return e = e || {}, this.forceCookies = e.forceCookies || !1, !0 === this._checkIfLocalStorageWorks() && !0 !== e.forceCookies ? {
        getItem: this._getItemLocalStorage,
        setItem: this._setItemLocalStorage,
        removeItem: this._removeItemLocalStorage,
        clear: this._clearLocalStorage
      } : {
        getItem: this._getItemCookie,
        setItem: this._setItemCookie,
        removeItem: this._removeItemCookie,
        clear: this._clearCookies
      };
    }

    _createClass(localCookie, [{
      key: "_checkIfLocalStorageWorks",
      value: function _checkIfLocalStorageWorks() {
        if ("undefined" == typeof localStorage) return !1;

        try {
          return localStorage.setItem("feature_test", "yes"), "yes" === localStorage.getItem("feature_test") && (localStorage.removeItem("feature_test"), !0);
        } catch (e) {
          return !1;
        }
      }
    }, {
      key: "_getItemLocalStorage",
      value: function _getItemLocalStorage(e) {
        return window.localStorage.getItem(e);
      }
    }, {
      key: "_setItemLocalStorage",
      value: function _setItemLocalStorage(e, t) {
        return window.localStorage.setItem(e, t);
      }
    }, {
      key: "_removeItemLocalStorage",
      value: function _removeItemLocalStorage(e) {
        return window.localStorage.removeItem(e);
      }
    }, {
      key: "_clearLocalStorage",
      value: function _clearLocalStorage() {
        return window.localStorage.clear();
      }
    }, {
      key: "_getItemCookie",
      value: function _getItemCookie(e) {
        var t = document.cookie.match(RegExp("(?:^|;\\s*)" + function (e) {
          return e.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1");
        }(e) + "=([^;]*)"));
        return t && "" === t[1] && (t[1] = null), t ? t[1] : null;
      }
    }, {
      key: "_setItemCookie",
      value: function _setItemCookie(e, t) {
        var o = new Date(),
            r = new Date(o.getTime() + 15768e7);
        document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(r.toUTCString(), ";");
      }
    }, {
      key: "_removeItemCookie",
      value: function _removeItemCookie(e) {
        document.cookie = "".concat(e, "=;Max-Age=-99999999;");
      }
    }, {
      key: "_clearCookies",
      value: function _clearCookies() {
        document.cookie.split(";").forEach(function (e) {
          document.cookie = e.replace(/^ +/, "").replace(/=.*/, "=;expires=Max-Age=-99999999");
        });
      }
    }]);

    return localCookie;
  }();

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var initStorage = function initStorage() {
    Settings.get('platform', 'id'); // todo: pass options (for example to force the use of cookies)

    new localCookie();
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var hasRegex = /\{\/(.*?)\/([igm]{0,3})\}/g;
  var isWildcard = /^[!*$]$/;
  var hasLookupId = /\/:\w+?@@([0-9]+?)@@/;
  var isNamedGroup = /^\/:/;
  /**
   * Test if a route is part regular expressed
   * and replace it for a simple character
   * @param route
   * @returns {*}
   */

  var stripRegex = function stripRegex(route) {
    var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'R';

    // if route is part regular expressed we replace
    // the regular expression for a character to
    // simplify floor calculation and backtracking
    if (hasRegex.test(route)) {
      route = route.replace(hasRegex, char);
    }

    return route;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Create a local request register
   * @param flags
   * @returns {Map<any, any>}
   */
  var createRegister = function createRegister(flags) {
    var reg = new Map() // store user defined and router
    // defined flags in register
    ;
    [].concat(_toConsumableArray(Object.keys(flags)), _toConsumableArray(Object.getOwnPropertySymbols(flags))).forEach(function (key) {
      reg.set(key, flags[key]);
    });
    return reg;
  };

  var Request = /*#__PURE__*/function () {
    function Request() {
      var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var navArgs = arguments.length > 1 ? arguments[1] : undefined;
      var storeCaller = arguments.length > 2 ? arguments[2] : undefined;

      _classCallCheck(this, Request);

      /**
       * Hash we navigate to
       * @type {string}
       * @private
       */
      this._hash = hash;
      /**
       * Do we store previous hash in history
       * @type {boolean}
       * @private
       */

      this._storeCaller = storeCaller;
      /**
       * Request and navigate data
       * @type {Map}
       * @private
       */

      this._register = new Map();
      /**
       * Flag if the instance is created due to
       * this request
       * @type {boolean}
       * @private
       */

      this._isCreated = false;
      /**
       * Flag if the instance is shared between
       * previous and current request
       * @type {boolean}
       * @private
       */

      this._isSharedInstance = false;
      /**
       * Flag if the request has been cancelled
       * @type {boolean}
       * @private
       */

      this._cancelled = false;
      /**
       * if instance is shared between requests we copy state object
       * from instance before the new request overrides state
       * @type {null}
       * @private
       */

      this._copiedHistoryState = null; // if there are arguments attached to navigate()
      // we store them in new request

      if (isObject(navArgs)) {
        this._register = createRegister(navArgs);
      } else if (isBoolean(navArgs)) {
        // if second navigate() argument is explicitly
        // set to false we prevent the calling page
        // from ending up in history
        this._storeCaller = navArgs;
      } // @todo: remove because we can simply check
      // ._storeCaller property


      this._register.set(symbols.store, this._storeCaller);
    }

    _createClass(Request, [{
      key: "cancel",
      value: function cancel() {
        Log.debug('[router]:', "cancelled ".concat(this._hash));
        this._cancelled = true;
      }
    }, {
      key: "url",
      get: function get() {
        return this._hash;
      }
    }, {
      key: "register",
      get: function get() {
        return this._register;
      }
    }, {
      key: "hash",
      get: function get() {
        return this._hash;
      },
      set: function set(args) {
        this._hash = args;
      }
    }, {
      key: "route",
      get: function get() {
        return this._route;
      },
      set: function set(args) {
        this._route = args;
      }
    }, {
      key: "provider",
      get: function get() {
        return this._provider;
      },
      set: function set(args) {
        this._provider = args;
      }
    }, {
      key: "providerType",
      get: function get() {
        return this._providerType;
      },
      set: function set(args) {
        this._providerType = args;
      }
    }, {
      key: "page",
      get: function get() {
        return this._page;
      },
      set: function set(args) {
        this._page = args;
      }
    }, {
      key: "isCreated",
      get: function get() {
        return this._isCreated;
      },
      set: function set(args) {
        this._isCreated = args;
      }
    }, {
      key: "isSharedInstance",
      get: function get() {
        return this._isSharedInstance;
      },
      set: function set(args) {
        this._isSharedInstance = args;
      }
    }, {
      key: "isCancelled",
      get: function get() {
        return this._cancelled;
      }
    }, {
      key: "copiedHistoryState",
      get: function get() {
        return this._copiedHistoryState;
      },
      set: function set(v) {
        this._copiedHistoryState = v;
      }
    }]);

    return Request;
  }();

  var Route = /*#__PURE__*/function () {
    function Route() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Route);

      // keep backwards compatible
      var type = ['on', 'before', 'after'].reduce(function (acc, type) {
        return isFunction(config[type]) ? type : acc;
      }, undefined);
      this._cfg = config;

      if (type) {
        this._provider = {
          type: type,
          request: config[type]
        };
      }
    }

    _createClass(Route, [{
      key: "path",
      get: function get() {
        return this._cfg.path;
      }
    }, {
      key: "component",
      get: function get() {
        return this._cfg.component;
      }
    }, {
      key: "options",
      get: function get() {
        return this._cfg.options;
      }
    }, {
      key: "widgets",
      get: function get() {
        return this._cfg.widgets;
      }
    }, {
      key: "cache",
      get: function get() {
        return this._cfg.cache;
      }
    }, {
      key: "hook",
      get: function get() {
        return this._cfg.hook;
      }
    }, {
      key: "beforeNavigate",
      get: function get() {
        return this._cfg.beforeNavigate;
      }
    }, {
      key: "provider",
      get: function get() {
        return this._provider;
      }
    }]);

    return Route;
  }();

  /**
   * Simple route length calculation
   * @param route {string}
   * @returns {number} - floor
   */

  var getFloor = function getFloor(route) {
    return stripRegex(route).split('/').length;
  };
  /**
   * return all stored routes that live on the same floor
   * @param floor
   * @returns {Array}
   */

  var getRoutesByFloor = function getRoutesByFloor(floor) {
    var matches = []; // simple filter of level candidates

    var _iterator = _createForOfIteratorHelper(routes.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 1),
            route = _step$value[0];

        if (getFloor(route) === floor) {
          matches.push(route);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return matches;
  };
  /**
   * return a matching route by provided hash
   * hash: home/browse/12 will match:
   * route: home/browse/:categoryId
   * @param hash {string}
   * @returns {boolean|{}} - route
   */


  var getRouteByHash = function getRouteByHash(hash) {
    // @todo: clean up on handleHash
    hash = hash.replace(/^#/, '');
    var getUrlParts = /(\/?:?[^/]+)/g; // grab possible candidates from stored routes

    var candidates = getRoutesByFloor(getFloor(hash)); // break hash down in chunks

    var hashParts = hash.match(getUrlParts) || []; // to simplify the route matching and prevent look around
    // in our getUrlParts regex we get the regex part from
    // route candidate and store them so that we can reference
    // them when we perform the actual regex against hash

    var regexStore = [];
    var matches = candidates.filter(function (route) {
      var isMatching = true; // replace regex in route with lookup id => @@{storeId}@@

      if (hasRegex.test(route)) {
        var regMatches = route.match(hasRegex);

        if (regMatches && regMatches.length) {
          route = regMatches.reduce(function (fullRoute, regex) {
            var lookupId = regexStore.length;
            fullRoute = fullRoute.replace(regex, "@@".concat(lookupId, "@@"));
            regexStore.push(regex.substring(1, regex.length - 1));
            return fullRoute;
          }, route);
        }
      }

      var routeParts = route.match(getUrlParts) || [];

      for (var i = 0, j = routeParts.length; i < j; i++) {
        var routePart = routeParts[i];
        var hashPart = hashParts[i]; // Since we support catch-all and regex driven name groups
        // we first test for regex lookup id and see if the regex
        // matches the value from the hash

        if (hasLookupId.test(routePart)) {
          var routeMatches = hasLookupId.exec(routePart);
          var storeId = routeMatches[1];
          var routeRegex = regexStore[storeId]; // split regex and modifiers so we can use both
          // to create a new RegExp
          // eslint-disable-next-line

          var _regMatches = /\/([^\/]+)\/([igm]{0,3})/.exec(routeRegex);

          if (_regMatches && _regMatches.length) {
            var expression = _regMatches[1];
            var modifiers = _regMatches[2];
            var regex = new RegExp("^/".concat(expression, "$"), modifiers);

            if (!regex.test(hashPart)) {
              isMatching = false;
            }
          }
        } else if (isNamedGroup.test(routePart)) {
          // we kindly skip namedGroups because this is dynamic
          // we only need to the static and regex drive parts
          continue;
        } else if (hashPart && routePart.toLowerCase() !== hashPart.toLowerCase()) {
          isMatching = false;
        }
      }

      return isMatching;
    });

    if (matches.length) {
      if (matches.indexOf(hash) !== -1) {
        var match = matches[matches.indexOf(hash)];
        return routes.get(match);
      } else {
        // we give prio to static routes over dynamic
        matches = matches.sort(function (a) {
          return isNamedGroup.test(a) ? -1 : 1;
        }); // would be strange if this fails
        // but still we test

        if (routeExists(matches[0])) {
          return routes.get(matches[0]);
        }
      }
    }

    return false;
  };
  var getValuesFromHash = function getValuesFromHash() {
    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var path = arguments.length > 1 ? arguments[1] : undefined;
    // replace the regex definition from the route because
    // we already did the matching part
    path = stripRegex(path, '');
    var getUrlParts = /(\/?:?[\w%\s:.-]+)/g;
    var hashParts = hash.match(getUrlParts) || [];
    var routeParts = path.match(getUrlParts) || [];
    var getNamedGroup = /^\/:([\w-]+)\/?/;
    return routeParts.reduce(function (storage, value, index) {
      var match = getNamedGroup.exec(value);

      if (match && match.length) {
        storage.set(match[1], decodeURIComponent(hashParts[index].replace(/^\//, '')));
      }

      return storage;
    }, new Map());
  };
  var getOption = function getOption(stack, prop) {
    // eslint-disable-next-line
    if (stack && stack.hasOwnProperty(prop)) {
      return stack[prop];
    } // we explicitly return undefined since we're testing
    // for explicit test values

  };
  /**
   * create and return new Route instance
   * @param config
   */

  var createRoute = function createRoute(config) {
    // we need to provide a bit of additional logic
    // for the bootComponent
    if (config.path === '$') {
      var options = {
        preventStorage: true
      };

      if (isObject(config.options)) {
        options = _objectSpread2(_objectSpread2({}, config.options), options);
      }

      config.options = options; // if configured add reference to bootRequest
      // as router after provider

      if (bootRequest) {
        config.after = bootRequest;
      }
    }

    return new Route(config);
  };
  /**
   * Create a new Router request object
   * @param url
   * @param args
   * @param store
   * @returns {*}
   */

  var createRequest = function createRequest(url, args, store) {
    return new Request(url, args, store);
  };
  var getHashByName = function getHashByName(obj) {
    if (!obj.to && !obj.name) {
      return false;
    }

    var route = getRouteByName(obj.to || obj.name);
    var hasDynamicGroup = /\/:([\w-]+)\/?/;
    var hash = route; // if route contains dynamic group
    // we replace them with the provided params

    if (hasDynamicGroup.test(route)) {
      if (obj.params) {
        var keys = Object.keys(obj.params);
        hash = keys.reduce(function (acc, key) {
          return acc.replace(":".concat(key), obj.params[key]);
        }, route);
      }

      if (obj.query) {
        return "".concat(hash).concat(objectToQueryString(obj.query));
      }
    }

    return hash;
  };

  var getRouteByName = function getRouteByName(name) {
    var _iterator2 = _createForOfIteratorHelper(routes.entries()),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            path = _step2$value[0],
            route = _step2$value[1];

        if (route.name === name) {
          return path;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return false;
  };

  var keepActivePageAlive = function keepActivePageAlive(route, request) {
    if (isString(route)) {
      var _routes = getRoutes();

      if (_routes.has(route)) {
        route = _routes.get(route);
      } else {
        return false;
      }
    }

    var register = request.register;
    var routeOptions = route.options;

    if (register.has('keepAlive')) {
      return register.get('keepAlive');
    } else if (routeOptions && routeOptions.keepAlive) {
      return routeOptions.keepAlive;
    }

    return false;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var emit$1 = (function (page) {
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!isArray(events)) {
      events = [events];
    }

    events.forEach(function (e) {
      var event = "_on".concat(ucfirst(e));

      if (isFunction(page[event])) {
        page[event](params);
      }
    });
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var activeWidget = null;
  var getReferences = function getReferences() {
    if (!widgetsHost) {
      return;
    }

    return widgetsHost.get().reduce(function (storage, widget) {
      var key = widget.ref.toLowerCase();
      storage[key] = widget;
      return storage;
    }, {});
  };
  /**
   * update the visibility of the available widgets
   * for the current page / route
   * @param page
   */

  var updateWidgets = function updateWidgets(widgets, page) {
    // force lowercase lookup
    var configured = (widgets || []).map(function (ref) {
      return ref.toLowerCase();
    });
    widgetsHost.forEach(function (widget) {
      widget.visible = configured.indexOf(widget.ref.toLowerCase()) !== -1;

      if (widget.visible) {
        emit$1(widget, ['activated'], page);
      }
    });

    if (app.state === 'Widgets' && activeWidget && !activeWidget.visible) {
      app._setState('');
    }
  };

  var getWidgetByName = function getWidgetByName(name) {
    name = ucfirst(name);
    return widgetsHost.getByRef(name) || false;
  };
  /**
   * delegate app focus to a on-screen widget
   * @param name - {string}
   */


  var focusWidget = function focusWidget(name) {
    var widget = getWidgetByName(name);

    if (widget) {
      setActiveWidget(widget); // if app is already in 'Widgets' state we can assume that
      // focus has been delegated from one widget to another so
      // we need to set the new widget reference and trigger a
      // new focus calculation of Lightning's focuspath

      if (app.state === 'Widgets') {
        app.reload(activeWidget);
      } else {
        app._setState('Widgets', [activeWidget]);
      }
    }
  };
  var restoreFocus = function restoreFocus() {
    activeWidget = null;

    app._setState('');
  };
  var getActiveWidget = function getActiveWidget() {
    return activeWidget;
  };
  var setActiveWidget = function setActiveWidget(instance) {
    activeWidget = instance;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var createComponent = function createComponent(stage, type) {
    return stage.c({
      type: type,
      visible: false,
      widgets: getReferences()
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Simple flat array that holds the visited hashes + state Object
   * so the router can navigate back to them
   * @type {Array}
   */

  var history = [];
  var updateHistory = function updateHistory(request) {
    var hash = getActiveHash();

    if (!hash) {
      return;
    } // navigate storage flag


    var register = request.register;
    var forceNavigateStore = register.get(symbols.store); // test preventStorage on route configuration

    var activeRoute = getRouteByHash(hash);
    var preventStorage = getOption(activeRoute.options, 'preventStorage'); // we give prio to navigate storage flag

    var store = isBoolean(forceNavigateStore) ? forceNavigateStore : !preventStorage;

    if (store) {
      var toStore = hash.replace(/^\//, '');
      var location = locationInHistory(toStore);
      var stateObject = getStateObject(getActivePage(), request);
      var routerConfig = getRouterConfig(); // store hash if it's not a part of history or flag for
      // storage of same hash is true

      if (location === -1 || routerConfig.get('storeSameHash')) {
        history.push({
          hash: toStore,
          state: stateObject
        });
      } else {
        // if we visit the same route we want to sync history
        var prev = history.splice(location, 1)[0];
        history.push({
          hash: prev.hash,
          state: stateObject
        });
      }
    }
  };

  var locationInHistory = function locationInHistory(hash) {
    for (var i = 0; i < history.length; i++) {
      if (history[i].hash === hash) {
        return i;
      }
    }

    return -1;
  };

  var getHistoryState = function getHistoryState(hash) {
    var state = null;

    if (history.length) {
      // if no hash is provided we get the last
      // pushed history record
      if (!hash) {
        var record = history[history.length - 1]; // could be null

        state = record.state;
      } else {
        if (locationInHistory(hash) !== -1) {
          var _record = history[locationInHistory(hash)];
          state = _record.state;
        }
      }
    }

    return state;
  };
  var replaceHistoryState = function replaceHistoryState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var hash = arguments.length > 1 ? arguments[1] : undefined;

    if (!history.length) {
      return;
    }

    var location = hash ? locationInHistory(hash) : history.length - 1;

    if (location !== -1 && isObject(state)) {
      history[location].state = state;
    }
  };

  var getStateObject = function getStateObject(page, request) {
    // if the new request shared instance with the
    // previous request we used the copied state object
    if (request.isSharedInstance) {
      if (request.copiedHistoryState) {
        return request.copiedHistoryState;
      }
    } else if (page && isFunction(page.historyState)) {
      return page.historyState();
    }

    return null;
  };

  var getHistory = function getHistory() {
    return history.slice(0);
  };
  var setHistory = function setHistory() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (isArray(arr)) {
      history = arr;
    }
  };

  var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };

  function isNonNullObject(value) {
    return !!value && typeof value === 'object';
  }

  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
  } // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }

  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }

  function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
  }

  function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function (element) {
      return cloneUnlessOtherwiseSpecified(element, options);
    });
  }

  function getMergeFunction(key, options) {
    if (!options.customMerge) {
      return deepmerge;
    }

    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
  }

  function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
      return target.propertyIsEnumerable(symbol);
    }) : [];
  }

  function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
  }

  function propertyIsOnObject(object, property) {
    try {
      return property in object;
    } catch (_) {
      return false;
    }
  } // Protects from prototype poisoning and unexpected merging up the prototype chain.


  function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
    && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
    && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
  }

  function mergeObject(target, source, options) {
    var destination = {};

    if (options.isMergeableObject(target)) {
      getKeys(target).forEach(function (key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
      });
    }

    getKeys(source).forEach(function (key) {
      if (propertyIsUnsafe(target, key)) {
        return;
      }

      if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
      } else {
        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
      }
    });
    return destination;
  }

  function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.

    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
      return options.arrayMerge(target, source, options);
    } else {
      return mergeObject(target, source, options);
    }
  }

  deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
      throw new Error('first argument should be an array');
    }

    return array.reduce(function (prev, next) {
      return deepmerge(prev, next, options);
    }, {});
  };

  var deepmerge_1 = deepmerge;
  var cjs = deepmerge_1;

  var warned = false;

  var deprecated = function deprecated() {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (force === true || warned === false) {
      console.warn(["The 'Locale'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'Language'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/language'].join('\n\n'));
    }

    warned = true;
  };

  var Locale = /*#__PURE__*/function () {
    function Locale() {
      _classCallCheck(this, Locale);

      this.__enabled = false;
    }
    /**
     * Loads translation object from external json file.
     *
     * @param {String} path Path to resource.
     * @return {Promise}
     */


    _createClass(Locale, [{
      key: "load",
      value: function () {
        var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path) {
          var _this = this;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (this.__enabled) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _context.next = 4;
                  return fetch(path).then(function (resp) {
                    return resp.json();
                  }).then(function (resp) {
                    _this.loadFromObject(resp);
                  });

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function load(_x) {
          return _load.apply(this, arguments);
        }

        return load;
      }()
      /**
       * Sets language used by module.
       *
       * @param {String} lang
       */

    }, {
      key: "setLanguage",
      value: function setLanguage(lang) {
        deprecated();
        this.__enabled = true;
        this.language = lang;
      }
      /**
       * Returns reference to translation object for current language.
       *
       * @return {Object}
       */

    }, {
      key: "tr",
      get: function get() {
        deprecated(true);
        return this.__trObj[this.language];
      }
      /**
       * Loads translation object from existing object (binds existing object).
       *
       * @param {Object} trObj
       */

    }, {
      key: "loadFromObject",
      value: function loadFromObject(trObj) {
        deprecated();
        var fallbackLanguage = 'en';

        if (Object.keys(trObj).indexOf(this.language) === -1) {
          Log.warn('No translations found for: ' + this.language);

          if (Object.keys(trObj).indexOf(fallbackLanguage) > -1) {
            Log.warn('Using fallback language: ' + fallbackLanguage);
            this.language = fallbackLanguage;
          } else {
            var error = 'No translations found for fallback language: ' + fallbackLanguage;
            Log.error(error);
            throw Error(error);
          }
        }

        this.__trObj = trObj;

        for (var _i = 0, _Object$values = Object.values(this.__trObj); _i < _Object$values.length; _i++) {
          var lang = _Object$values[_i];

          for (var _i2 = 0, _Object$keys = Object.keys(lang); _i2 < _Object$keys.length; _i2++) {
            var str = _Object$keys[_i2];
            lang[str] = new LocalizedString(lang[str]);
          }
        }
      }
    }]);

    return Locale;
  }();
  /**
   * Extended string class used for localization.
   */


  var LocalizedString = /*#__PURE__*/function (_String) {
    _inherits(LocalizedString, _String);

    var _super = _createSuper(LocalizedString);

    function LocalizedString() {
      _classCallCheck(this, LocalizedString);

      return _super.apply(this, arguments);
    }

    _createClass(LocalizedString, [{
      key: "format",
      value:
      /**
       * Returns formatted LocalizedString.
       * Replaces each placeholder value (e.g. {0}, {1}) with corresponding argument.
       *
       * E.g.:
       * > new LocalizedString('{0} and {1} and {0}').format('A', 'B');
       * A and B and A
       *
       * @param  {...any} args List of arguments for placeholders.
       */
      function format() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var sub = args.reduce(function (string, arg, index) {
          return string.split("{".concat(index, "}")).join(arg);
        }, this);
        return new LocalizedString(sub);
      }
    }]);

    return LocalizedString;
  }( /*#__PURE__*/_wrapNativeSuper(String));

  var Locale$1 = new Locale();

  var VersionLabel = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(VersionLabel, _Lightning$Component);

    var _super = _createSuper(VersionLabel);

    function VersionLabel() {
      _classCallCheck(this, VersionLabel);

      return _super.apply(this, arguments);
    }

    _createClass(VersionLabel, [{
      key: "_firstActive",
      value: function _firstActive() {
        this.tag('Text').text = "APP - v".concat(this.version, "\nSDK - v").concat(this.sdkVersion);
        this.tag('Text').loadTexture();
        this.w = this.tag('Text').renderWidth + 40;
        this.h = this.tag('Text').renderHeight + 5;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          rect: true,
          color: 0xbb0078ac,
          h: 40,
          w: 100,
          x: function x(w) {
            return w - 50;
          },
          y: function y(h) {
            return h - 50;
          },
          mount: 1,
          Text: {
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            y: 5,
            x: 20,
            text: {
              fontSize: 22,
              lineHeight: 26
            }
          }
        };
      }
    }]);

    return VersionLabel;
  }(lng.Component);

  var FpsIndicator = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(FpsIndicator, _Lightning$Component);

    var _super = _createSuper(FpsIndicator);

    function FpsIndicator() {
      _classCallCheck(this, FpsIndicator);

      return _super.apply(this, arguments);
    }

    _createClass(FpsIndicator, [{
      key: "_setup",
      value: function _setup() {
        var _this = this;

        this.config = _objectSpread2(_objectSpread2({}, {
          log: false,
          interval: 500,
          threshold: 1
        }), Settings.get('platform', 'showFps'));
        this.fps = 0;
        this.lastFps = this.fps - this.config.threshold;

        var fpsCalculator = function fpsCalculator() {
          _this.fps = ~~(1 / _this.stage.dt);
        };

        this.stage.on('frameStart', fpsCalculator);
        this.stage.off('framestart', fpsCalculator);
        this.interval = setInterval(this.showFps.bind(this), this.config.interval);
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this.showFps();
      }
    }, {
      key: "_detach",
      value: function _detach() {
        clearInterval(this.interval);
      }
    }, {
      key: "showFps",
      value: function showFps() {
        if (Math.abs(this.lastFps - this.fps) <= this.config.threshold) return;
        this.lastFps = this.fps; // green

        var bgColor = 0xff008000; // orange

        if (this.fps <= 40 && this.fps > 20) bgColor = 0xffffa500; // red
        else if (this.fps <= 20) bgColor = 0xffff0000;
        this.tag('Background').setSmooth('color', bgColor);
        this.tag('Counter').text = "".concat(this.fps);
        this.config.log && Log.info('FPS', this.fps);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          rect: true,
          color: 0xffffffff,
          texture: lng.Tools.getRoundRect(80, 80, 40),
          h: 80,
          w: 80,
          x: 100,
          y: 100,
          mount: 1,
          Background: {
            x: 3,
            y: 3,
            texture: lng.Tools.getRoundRect(72, 72, 36),
            color: 0xff008000
          },
          Counter: {
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            y: 10,
            text: {
              fontSize: 32,
              textAlign: 'center'
            }
          },
          Text: {
            w: function w(_w2) {
              return _w2;
            },
            h: function h(_h2) {
              return _h2;
            },
            y: 48,
            text: {
              fontSize: 15,
              textAlign: 'center',
              text: 'FPS'
            }
          }
        };
      }
    }]);

    return FpsIndicator;
  }(lng.Component);

  var meta = {};
  var translations = {};
  var language = null;
  var initLanguage = function initLanguage(file) {
    var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise(function (resolve, reject) {
      fetch(file).then(function (response) {
        return response.json();
      }).then(function (json) {
        setTranslations(json); // set language (directly or in a promise)

        typeof language === 'object' && 'then' in language && typeof language.then === 'function' ? language.then(function (lang) {
          return setLanguage(lang).then(resolve).catch(reject);
        }).catch(function (e) {
          Log.error(e);
          reject(e);
        }) : setLanguage(language).then(resolve).catch(reject);
      }).catch(function () {
        var error = 'Language file ' + file + ' not found';
        Log.error(error);
        reject(error);
      });
    });
  };

  var setTranslations = function setTranslations(obj) {
    if ('meta' in obj) {
      meta = _objectSpread2({}, obj.meta);
      delete obj.meta;
    }

    translations = obj;
  };

  var setLanguage = function setLanguage(lng) {
    language = null;
    return new Promise(function (resolve, reject) {
      if (lng in translations) {
        language = lng;
      } else {
        if ('map' in meta && lng in meta.map && meta.map[lng] in translations) {
          language = meta.map[lng];
        } else if ('default' in meta && meta.default in translations) {
          var error = 'Translations for Language ' + language + ' not found. Using default language ' + meta.default;
          Log.warn(error);
          language = meta.default;
        } else {
          var _error = 'Translations for Language ' + language + ' not found.';

          Log.error(_error);
          reject(_error);
        }
      }

      if (language) {
        Log.info('Setting language to', language);
        var translationsObj = translations[language];

        if (typeof translationsObj === 'object') {
          resolve();
        } else if (typeof translationsObj === 'string') {
          var url = Utils.asset(translationsObj);
          fetch(url).then(function (response) {
            return response.json();
          }).then(function (json) {
            // save the translations for this language (to prevent loading twice)
            translations[language] = json;
            resolve();
          }).catch(function (e) {
            var error = 'Error while fetching ' + url;
            Log.error(error, e);
            reject(error);
          });
        }
      }
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var registry = {
    eventListeners: [],
    timeouts: [],
    intervals: [],
    targets: []
  };
  var Registry = {
    // Timeouts
    setTimeout: function (_setTimeout) {
      function setTimeout(_x, _x2) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (cb, timeout) {
      for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }

      var timeoutId = setTimeout(function () {
        registry.timeouts = registry.timeouts.filter(function (id) {
          return id !== timeoutId;
        });
        cb.apply(null, params);
      }, timeout, params);
      Log.info('Set Timeout', 'ID: ' + timeoutId);
      registry.timeouts.push(timeoutId);
      return timeoutId;
    }),
    clearTimeout: function (_clearTimeout) {
      function clearTimeout(_x3) {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function (timeoutId) {
      if (registry.timeouts.indexOf(timeoutId) > -1) {
        registry.timeouts = registry.timeouts.filter(function (id) {
          return id !== timeoutId;
        });
        Log.info('Clear Timeout', 'ID: ' + timeoutId);
        clearTimeout(timeoutId);
      } else {
        Log.error('Clear Timeout', 'ID ' + timeoutId + ' not found');
      }
    }),
    clearTimeouts: function clearTimeouts() {
      var _this = this;

      registry.timeouts.forEach(function (timeoutId) {
        _this.clearTimeout(timeoutId);
      });
    },
    // Intervals
    setInterval: function (_setInterval) {
      function setInterval(_x4, _x5) {
        return _setInterval.apply(this, arguments);
      }

      setInterval.toString = function () {
        return _setInterval.toString();
      };

      return setInterval;
    }(function (cb, interval) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }

      var intervalId = setInterval(function () {
        registry.intervals.filter(function (id) {
          return id !== intervalId;
        });
        cb.apply(null, params);
      }, interval, params);
      Log.info('Set Interval', 'ID: ' + intervalId);
      registry.intervals.push(intervalId);
      return intervalId;
    }),
    clearInterval: function (_clearInterval) {
      function clearInterval(_x6) {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function (intervalId) {
      if (registry.intervals.indexOf(intervalId) > -1) {
        registry.intervals = registry.intervals.filter(function (id) {
          return id !== intervalId;
        });
        Log.info('Clear Interval', 'ID: ' + intervalId);
        clearInterval(intervalId);
      } else {
        Log.error('Clear Interval', 'ID ' + intervalId + ' not found');
      }
    }),
    clearIntervals: function clearIntervals() {
      var _this2 = this;

      registry.intervals.forEach(function (intervalId) {
        _this2.clearInterval(intervalId);
      });
    },
    // Event listeners
    addEventListener: function addEventListener(target, event, handler) {
      target.addEventListener(event, handler);
      var targetIndex = registry.targets.indexOf(target) > -1 ? registry.targets.indexOf(target) : registry.targets.push(target) - 1;
      registry.eventListeners[targetIndex] = registry.eventListeners[targetIndex] || {};
      registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event] || [];
      registry.eventListeners[targetIndex][event].push(handler);
      Log.info('Add eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
    },
    removeEventListener: function removeEventListener(target, event, handler) {
      var targetIndex = registry.targets.indexOf(target);

      if (targetIndex > -1 && registry.eventListeners[targetIndex] && registry.eventListeners[targetIndex][event] && registry.eventListeners[targetIndex][event].indexOf(handler) > -1) {
        registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event].filter(function (fn) {
          return fn !== handler;
        });
        Log.info('Remove eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
        target.removeEventListener(event, handler);
      } else {
        Log.error('Remove eventListener', 'Not found', 'Target', target, 'Event: ' + event, 'Handler', handler.toString());
      }
    },
    // if `event` is omitted, removes all registered event listeners for target
    // if `target` is also omitted, removes all registered event listeners
    removeEventListeners: function removeEventListeners(target, event) {
      var _this3 = this;

      if (target && event) {
        var targetIndex = registry.targets.indexOf(target);

        if (targetIndex > -1) {
          registry.eventListeners[targetIndex][event].forEach(function (handler) {
            _this3.removeEventListener(target, event, handler);
          });
        }
      } else if (target) {
        var _targetIndex = registry.targets.indexOf(target);

        if (_targetIndex > -1) {
          Object.keys(registry.eventListeners[_targetIndex]).forEach(function (_event) {
            _this3.removeEventListeners(target, _event);
          });
        }
      } else {
        Object.keys(registry.eventListeners).forEach(function (targetIndex) {
          _this3.removeEventListeners(registry.targets[targetIndex]);
        });
      }
    },
    // Clear everything (to be called upon app close for proper cleanup)
    clear: function clear() {
      this.clearTimeouts();
      this.clearIntervals();
      this.removeEventListeners();
      registry.eventListeners = [];
      registry.timeouts = [];
      registry.intervals = [];
      registry.targets = [];
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var isObject$1 = function isObject(v) {
    return typeof v === 'object' && v !== null;
  };
  var isString$1 = function isString(v) {
    return typeof v === 'string';
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var colors = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    yellow: '#feff00',
    cyan: '#00feff',
    magenta: '#ff00ff'
  };
  var normalizedColors = {//store for normalized colors
  };

  var addColors = function addColors(colorsToAdd, value) {
    if (isObject$1(colorsToAdd)) {
      // clean up normalizedColors if they exist in the to be added colors
      Object.keys(colorsToAdd).forEach(function (color) {
        return cleanUpNormalizedColors(color);
      });
      colors = Object.assign({}, colors, colorsToAdd);
    } else if (isString$1(colorsToAdd) && value) {
      cleanUpNormalizedColors(colorsToAdd);
      colors[colorsToAdd] = value;
    }
  };

  var cleanUpNormalizedColors = function cleanUpNormalizedColors(color) {
    for (var c in normalizedColors) {
      if (c.indexOf(color) > -1) {
        delete normalizedColors[c];
      }
    }
  };

  var initColors = function initColors(file) {
    return new Promise(function (resolve, reject) {
      if (typeof file === 'object') {
        addColors(file);
        resolve();
      }

      fetch(file).then(function (response) {
        return response.json();
      }).then(function (json) {
        addColors(json);
        resolve();
      }).catch(function () {
        var error = 'Colors file ' + file + ' not found';
        Log.error(error);
        reject(error);
      });
    });
  };

  var name = "@lightningjs/sdk";
  var version = "4.8.1";
  var license = "Apache-2.0";
  var scripts = {
  	postinstall: "node ./scripts/postinstall.js",
  	lint: "eslint '**/*.js'",
  	release: "npm publish --access public"
  };
  var husky = {
  	hooks: {
  		"pre-commit": "lint-staged"
  	}
  };
  var dependencies = {
  	"@babel/polyfill": "^7.11.5",
  	"@lightningjs/core": "*",
  	"@michieljs/execute-as-promise": "^1.0.0",
  	deepmerge: "^4.2.2",
  	localCookie: "github:WebPlatformForEmbedded/localCookie",
  	shelljs: "^0.8.4",
  	"url-polyfill": "^1.1.10",
  	"whatwg-fetch": "^3.0.0"
  };
  var devDependencies = {
  	"@babel/core": "^7.11.6",
  	"@babel/plugin-transform-parameters": "^7.10.5 ",
  	"@babel/plugin-transform-spread": "^7.11.0",
  	"@babel/preset-env": "^7.11.5",
  	"babel-eslint": "^10.1.0",
  	eslint: "^7.10.0",
  	"eslint-config-prettier": "^6.12.0",
  	"eslint-plugin-prettier": "^3.1.4",
  	husky: "^4.3.0",
  	"lint-staged": "^10.4.0",
  	prettier: "^1.19.1",
  	rollup: "^1.32.1",
  	"rollup-plugin-babel": "^4.4.0"
  };
  var repository = {
  	type: "git",
  	url: "git@github.com:rdkcentral/Lightning-SDK.git"
  };
  var bugs = {
  	url: "https://github.com/rdkcentral/Lightning-SDK/issues"
  };
  var packageInfo = {
  	name: name,
  	version: version,
  	license: license,
  	scripts: scripts,
  	"lint-staged": {
  	"*.js": [
  		"eslint --fix"
  	],
  	"src/startApp.js": [
  		"rollup -c ./rollup.config.js"
  	]
  },
  	husky: husky,
  	dependencies: dependencies,
  	devDependencies: devDependencies,
  	repository: repository,
  	bugs: bugs
  };

  var AppInstance;
  var defaultOptions = {
    stage: {
      w: 1920,
      h: 1080,
      clearColor: 0x00000000,
      canvas2d: false
    },
    debug: false,
    defaultFontFace: 'RobotoRegular',
    keys: {
      8: 'Back',
      13: 'Enter',
      27: 'Menu',
      37: 'Left',
      38: 'Up',
      39: 'Right',
      40: 'Down',
      174: 'ChannelDown',
      175: 'ChannelUp',
      178: 'Stop',
      250: 'PlayPause',
      191: 'Search',
      // Use "/" for keyboard
      409: 'Search'
    }
  };
  var customFontFaces = [];

  var fontLoader = function fontLoader(fonts, store) {
    return new Promise(function (resolve, reject) {
      fonts.map(function (_ref) {
        var family = _ref.family,
            url = _ref.url,
            urls = _ref.urls,
            descriptors = _ref.descriptors;
        return function () {
          var src = urls ? urls.map(function (url) {
            return 'url(' + url + ')';
          }) : 'url(' + url + ')';
          var fontFace = new FontFace(family, src, descriptors || {});
          store.push(fontFace);
          Log.info('Loading font', family);
          document.fonts.add(fontFace);
          return fontFace.load();
        };
      }).reduce(function (promise, method) {
        return promise.then(function () {
          return method();
        });
      }, Promise.resolve(null)).then(resolve).catch(reject);
    });
  };

  function Application (App, appData, platformSettings) {
    var width = platformSettings.width,
        height = platformSettings.height;

    if (width && height) {
      defaultOptions.stage['w'] = width;
      defaultOptions.stage['h'] = height;
      defaultOptions.stage['precision'] = width / 1920;
    } // support for 720p browser


    if (!width && !height && window.innerHeight === 720) {
      defaultOptions.stage['w'] = 1280;
      defaultOptions.stage['h'] = 720;
      defaultOptions.stage['precision'] = 1280 / 1920;
    }

    return /*#__PURE__*/function (_Lightning$Applicatio) {
      _inherits(Application, _Lightning$Applicatio);

      var _super = _createSuper(Application);

      function Application(options) {
        var _this;

        _classCallCheck(this, Application);

        var config = cjs(defaultOptions, options); // Deepmerge breaks HTMLCanvasElement, so restore the passed in canvas.

        if (options.stage.canvas) {
          config.stage.canvas = options.stage.canvas;
        }

        _this = _super.call(this, config);
        _this.config = config;
        return _this;
      }

      _createClass(Application, [{
        key: "_setup",
        value: function _setup() {
          var _this2 = this;

          Promise.all([this.loadFonts(App.config && App.config.fonts || App.getFonts && App.getFonts() || []), // to be deprecated
          Locale$1.load(App.config && App.config.locale || App.getLocale && App.getLocale()), App.language && this.loadLanguage(App.language()), App.colors && this.loadColors(App.colors())]).then(function () {
            Metrics$1.app.loaded();
            AppInstance = _this2.stage.c({
              ref: 'App',
              type: App,
              zIndex: 1,
              forceZIndexContext: !!platformSettings.showVersion || !!platformSettings.showFps
            });

            _this2.childList.a(AppInstance);

            _this2._refocus();

            Log.info('App version', _this2.config.version);
            Log.info('SDK version', packageInfo.version);

            if (platformSettings.showVersion) {
              _this2.childList.a({
                ref: 'VersionLabel',
                type: VersionLabel,
                version: _this2.config.version,
                sdkVersion: packageInfo.version,
                zIndex: 1
              });
            }

            if (platformSettings.showFps) {
              _this2.childList.a({
                ref: 'FpsCounter',
                type: FpsIndicator,
                zIndex: 1
              });
            }

            _get(_getPrototypeOf(Application.prototype), "_setup", _this2).call(_this2);
          }).catch(console.error);
        }
      }, {
        key: "_handleBack",
        value: function _handleBack() {
          this.closeApp();
        }
      }, {
        key: "_handleExit",
        value: function _handleExit() {
          this.closeApp();
        }
      }, {
        key: "closeApp",
        value: function closeApp() {
          Log.info('Signaling App Close');

          if (platformSettings.onClose && typeof platformSettings.onClose === 'function') {
            platformSettings.onClose.apply(platformSettings, arguments);
          } else {
            this.close();
          }
        }
      }, {
        key: "close",
        value: function close() {
          Log.info('Closing App');
          Settings.clearSubscribers();
          Registry.clear();
          this.childList.remove(this.tag('App'));
          this.cleanupFonts(); // force texture garbage collect

          this.stage.gc();
          this.destroy();
        }
      }, {
        key: "loadFonts",
        value: function loadFonts(fonts) {
          return platformSettings.fontLoader && typeof platformSettings.fontLoader === 'function' ? platformSettings.fontLoader(fonts, customFontFaces) : fontLoader(fonts, customFontFaces);
        }
      }, {
        key: "cleanupFonts",
        value: function cleanupFonts() {
          if ('delete' in document.fonts) {
            customFontFaces.forEach(function (fontFace) {
              Log.info('Removing font', fontFace.family);
              document.fonts.delete(fontFace);
            });
          } else {
            Log.info('No support for removing manually-added fonts');
          }
        }
      }, {
        key: "loadLanguage",
        value: function loadLanguage(config) {
          var file = Utils.asset('translations.json');
          var language = config;

          if (typeof language === 'object') {
            language = config.language || null;
            file = config.file || file;
          }

          return initLanguage(file, language);
        }
      }, {
        key: "loadColors",
        value: function loadColors(config) {
          var file = Utils.asset('colors.json');

          if (config && (typeof config === 'string' || typeof config === 'object')) {
            file = config;
          }

          return initColors(file);
        }
      }, {
        key: "focus",
        set: function set(v) {
          this._focussed = v;

          this._refocus();
        }
      }, {
        key: "_getFocused",
        value: function _getFocused() {
          return this._focussed || this.tag('App');
        }
      }], [{
        key: "_template",
        value: function _template() {
          return {
            w: 1920,
            h: 1080
          };
        }
      }]);

      return Application;
    }(lng.Application);
  }

  /**
   * @type {Lightning.Application}
   */

  var application;
  /**
   * Actual instance of the app
   * @type {Lightning.Component}
   */

  var app;
  /**
   * Component that hosts all routed pages
   * @type {Lightning.Component}
   */

  var pagesHost;
  /**
   * @type {Lightning.Stage}
   */

  var stage;
  /**
   * Platform driven Router configuration
   * @type {Map<string>}
   */

  var routerConfig;
  /**
   * Component that hosts all attached widgets
   * @type {Lightning.Component}
   */

  var widgetsHost;
  /**
   * Hash we point the browser to when we boot the app
   * and there is no deep-link provided
   * @type {string|Function}
   */

  var rootHash;
  /**
   * Boot request will fire before app start
   * can be used to execute some global logic
   * and can be configured
   */

  var bootRequest;
  /**
   * Flag if we need to update the browser location hash.
   * Router can work without.
   * @type {boolean}
   */

  var updateHash = true;
  /**
   * Will be called before a route starts, can be overridden
   * via routes config
   * @param from - route we came from
   * @param to - route we navigate to
   * @returns {Promise<*>}
   */
  // eslint-disable-next-line

  var beforeEachRoute = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(from, to) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", true);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function beforeEachRoute(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   *  * Will be called after a navigate successfully resolved,
   * can be overridden via routes config
   */

  var afterEachRoute = function afterEachRoute() {};
  /**
   * All configured routes
   * @type {Map<string, object>}
   */

  var routes = new Map();
  /**
   * Store all page components per route
   * @type {Map<string, object>}
   */

  var components = new Map();
  /**
   * Flag if router has been initialised
   * @type {boolean}
   */

  var initialised = false;
  /**
   * Current page being rendered on screen
   * @type {null}
   */

  var activePage = null;
  var activeHash;
  var activeRoute;
  /**
   *  During the process of a navigation request a new
   *  request can start, to prevent unwanted behaviour
   *  the navigate()-method stores the last accepted hash
   *  so we can invalidate any prior requests
   */

  var lastAcceptedHash;

  var mixin = function mixin(app) {
    // by default the Router Baseclass provides the component
    // reference in which we store our pages
    if (app.pages) {
      pagesHost = app.pages.childList;
    } // if the app is using widgets we grab refs
    // and hide all the widgets


    if (app.widgets && app.widgets.children) {
      widgetsHost = app.widgets.childList; // hide all widgets on boot

      widgetsHost.forEach(function (w) {
        return w.visible = false;
      });
    }

    app._handleBack = function (e) {
      step(-1);
      e.preventDefault();
    };
  };

  var bootRouter = function bootRouter(config, instance) {
    var appInstance = config.appInstance,
        routes = config.routes; // if instance is provided and it's and Lightning Component instance

    if (instance && isPage(instance)) {
      app = instance;
    }

    if (!app) {
      app = appInstance || AppInstance;
    }

    application = app.application;
    pagesHost = application.childList;
    stage = app.stage;
    routerConfig = getConfigMap();
    mixin(app);

    if (isArray(routes)) {
      setup(config);
    } else if (isFunction(routes)) {
      console.warn('[Router]: Calling Router.route() directly is deprecated.');
      console.warn('Use object config: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };

  var setup = function setup(config) {
    if (!initialised) {
      init(config);
    }

    config.routes.forEach(function (r) {
      var path = cleanHash(r.path);

      if (!routeExists(path)) {
        var route = createRoute(r);
        routes.set(path, route); // if route has a configured component property
        // we store it in a different map to simplify
        // the creating and destroying per route

        if (route.component) {
          var type = route.component;

          if (isComponentConstructor(type)) {
            if (!routerConfig.get('lazyCreate')) {
              type = createComponent(stage, type);
              pagesHost.a(type);
            }
          }

          components.set(path, type);
        }
      } else {
        console.error("".concat(path, " already exists in routes configuration"));
      }
    });
  };

  var init = function init(config) {
    rootHash = config.root;

    if (isFunction(config.boot)) {
      bootRequest = config.boot;
    }

    if (isBoolean(config.updateHash)) {
      updateHash = config.updateHash;
    }

    if (isFunction(config.beforeEachRoute)) {
      beforeEachRoute = config.beforeEachRoute;
    }

    if (isFunction(config.afterEachRoute)) {
      afterEachRoute = config.afterEachRoute;
    }

    if (config.bootComponent) {
      console.warn('[Router]: Boot Component is now available as a special router: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration?id=special-routes');
      console.warn('[Router]: setting { bootComponent } property will be deprecated in a future release');

      if (isPage(config.bootComponent)) {
        config.routes.push({
          path: '$',
          component: config.bootComponent,
          // we try to assign the bootRequest as after data-provider
          // so it will behave as any other component
          after: bootRequest || null,
          options: {
            preventStorage: true
          }
        });
      } else {
        console.error("[Router]: ".concat(config.bootComponent, " is not a valid boot component"));
      }
    }

    initialised = true;
  };

  var storeComponent = function storeComponent(route, type) {
    if (components.has(route)) {
      components.set(route, type);
    }
  };
  var getComponent = function getComponent(route) {
    if (components.has(route)) {
      return components.get(route);
    }

    return null;
  };
  /**
   * Test if router needs to update browser location hash
   * @returns {boolean}
   */

  var mustUpdateLocationHash = function mustUpdateLocationHash() {
    if (!routerConfig || !routerConfig.size) {
      return false;
    } // we need support to either turn change hash off
    // per platform or per app


    var updateConfig = routerConfig.get('updateHash');
    return !(isBoolean(updateConfig) && !updateConfig || isBoolean(updateHash) && !updateHash);
  };
  /**
   * Will be called when a new navigate() request has completed
   * and has not been expired due to it's async nature
   * @param request
   */

  var onRequestResolved = function onRequestResolved(request) {
    var hash = request.hash;
    var route = request.route;
    var register = request.register;
    var page = request.page; // clean up history if modifier is set

    if (getOption(route.options, 'clearHistory')) {
      setHistory([]);
    } else if (hash && !isWildcard.test(route.path)) {
      updateHistory(request);
    } // we only update the stackLocation if a route
    // is not expired before it resolves


    storeComponent(route.path, page);

    if (request.isSharedInstance || !request.isCreated) {
      emit$1(page, 'changed');
    } else if (request.isCreated) {
      emit$1(page, 'mounted');
    } // only update widgets if we have a host


    if (widgetsHost) {
      updateWidgets(route.widgets, page);
    } // we want to clean up if there is an
    // active page that is not being shared
    // between current and previous route


    if (getActivePage() && !request.isSharedInstance) {
      cleanUp(activePage, request);
    } // provide history object to active page


    if (register.get(symbols.historyState) && isFunction(page.historyState)) {
      page.historyState(register.get(symbols.historyState));
    }

    setActivePage(page);
    activeHash = request.hash;
    activeRoute = route.path; // cleanup all cancelled requests

    var _iterator = _createForOfIteratorHelper(navigateQueue.values()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _request = _step.value;

        if (_request.isCancelled && _request.hash) {
          navigateQueue.delete(_request.hash);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    afterEachRoute(request);
    Log.info('[route]:', route.path);
    Log.info('[hash]:', hash);
  };

  var cleanUp = function cleanUp(page, request) {
    var route = activeRoute;
    var register = request.register;
    var lazyDestroy = routerConfig.get('lazyDestroy');
    var destroyOnBack = routerConfig.get('destroyOnHistoryBack');
    var keepAlive = register.get('keepAlive');
    var isFromHistory = register.get(symbols.backtrack);
    var doCleanup = false; // if this request is executed due to a step back in history
    // and we have configured to destroy active page when we go back
    // in history or lazyDestory is enabled

    if (isFromHistory && (destroyOnBack || lazyDestroy)) {
      doCleanup = true;
    } // clean up if lazyDestroy is enabled and the keepAlive flag
    // in navigation register is false


    if (lazyDestroy && !keepAlive) {
      doCleanup = true;
    } // if the current and new request share the same route blueprint


    if (activeRoute === request.route.path) {
      doCleanup = true;
    }

    if (doCleanup) {
      // grab original class constructor if
      // statemachine routed else store constructor
      storeComponent(route, page._routedType || page.constructor); // actual remove of page from memory

      pagesHost.remove(page); // force texture gc() if configured
      // so we can cleanup textures in the same tick

      if (routerConfig.get('gcOnUnload')) {
        stage.gc();
      }
    } else {
      // If we're not removing the page we need to
      // reset it's properties
      page.patch({
        x: 0,
        y: 0,
        scale: 1,
        alpha: 1,
        visible: false
      });
    }
  };

  var getActiveHash = function getActiveHash() {
    return activeHash;
  };
  var setActivePage = function setActivePage(page) {
    activePage = page;
  };
  var getActivePage = function getActivePage() {
    return activePage;
  };
  var getActiveRoute = function getActiveRoute() {
    return activeRoute;
  };
  var getLastHash = function getLastHash() {
    return lastAcceptedHash;
  };
  var setLastHash = function setLastHash(hash) {
    lastAcceptedHash = hash;
  };
  var routeExists = function routeExists(key) {
    return routes.has(key);
  };
  var getRootHash = function getRootHash() {
    return rootHash;
  };
  var getBootRequest = function getBootRequest() {
    return bootRequest;
  };
  var getRouterConfig = function getRouterConfig() {
    return routerConfig;
  };
  var getRoutes = function getRoutes() {
    return routes;
  };

  var isFunction = function isFunction(v) {
    return typeof v === 'function';
  };
  var isObject = function isObject(v) {
    return typeof v === 'object' && v !== null;
  };
  var isBoolean = function isBoolean(v) {
    return typeof v === 'boolean';
  };
  var isPage = function isPage(v) {
    if (v instanceof lng.Element || isComponentConstructor(v)) {
      return true;
    }

    return false;
  };
  var isComponentConstructor = function isComponentConstructor(type) {
    return type.prototype && 'isComponent' in type.prototype;
  };
  var isArray = function isArray(v) {
    return Array.isArray(v);
  };
  var ucfirst = function ucfirst(v) {
    return "".concat(v.charAt(0).toUpperCase()).concat(v.slice(1));
  };
  var isString = function isString(v) {
    return typeof v === 'string';
  };
  var isPromise = function isPromise(method) {
    var result;

    if (isFunction(method)) {
      try {
        result = method.apply(null);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }

    return isObject(result) && isFunction(result.then);
  };
  var cleanHash = function cleanHash() {
    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return hash.replace(/^#/, '').replace(/\/+$/, '');
  };
  var getConfigMap = function getConfigMap() {
    var routerSettings = Settings.get('platform', 'router');
    var isObj = isObject(routerSettings);
    return ['backtrack', 'gcOnUnload', 'destroyOnHistoryBack', 'lazyCreate', 'lazyDestroy', 'reuseInstance', 'autoRestoreRemote', 'numberNavigation', 'updateHash', 'storeSameHash'].reduce(function (config, key) {
      config.set(key, isObj ? routerSettings[key] : Settings.get('platform', key));
      return config;
    }, new Map());
  };
  var getQueryStringParams = function getQueryStringParams() {
    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getActiveHash();
    var resumeHash = getResumeHash();

    if ((hash === '$' || !hash) && resumeHash) {
      if (isString(resumeHash)) {
        hash = resumeHash;
      }
    }

    var parse = '';
    var getQuery = /([?&].*)/;
    var matches = getQuery.exec(hash);
    var params = {};

    if (document.location && document.location.search) {
      parse = document.location.search;
    }

    if (matches && matches.length) {
      var hashParams = matches[1];

      if (parse) {
        // if location.search is not empty we
        // remove the leading ? to create a
        // valid string
        hashParams = hashParams.replace(/^\?/, ''); // we parse hash params last so they we can always
        // override search params with hash params

        parse = "".concat(parse, "&").concat(hashParams);
      } else {
        parse = hashParams;
      }
    }

    if (parse) {
      var urlParams = new URLSearchParams(parse);

      var _iterator = _createForOfIteratorHelper(urlParams.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          params[key] = value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return params;
    } else {
      return false;
    }
  };
  var objectToQueryString = function objectToQueryString(obj) {
    if (!isObject(obj)) {
      return '';
    }

    return '?' + Object.keys(obj).map(function (key) {
      return "".concat(key, "=").concat(obj[key]);
    }).join('&');
  };
  var symbols = {
    route: Symbol('route'),
    hash: Symbol('hash'),
    store: Symbol('store'),
    fromHistory: Symbol('fromHistory'),
    expires: Symbol('expires'),
    resume: Symbol('resume'),
    backtrack: Symbol('backtrack'),
    historyState: Symbol('historyState'),
    queryParams: Symbol('queryParams')
  };

  var dataHooks = {
    on: function on(request) {
      app.state || '';

      app._setState('Loading');

      return execProvider(request);
    },
    before: function before(request) {
      return execProvider(request);
    },
    after: function after(request) {
      try {
        execProvider(request, true);
      } catch (e) {// for now we fail silently
      }

      return Promise.resolve();
    }
  };

  var execProvider = function execProvider(request, emitProvided) {
    var route = request.route;
    var provider = route.provider;
    var expires = route.cache ? route.cache * 1000 : 0;
    var params = addPersistData(request);
    return provider.request(request.page, _objectSpread2({}, params)).then(function () {
      request.page[symbols.expires] = Date.now() + expires;

      if (emitProvided) {
        emit$1(request.page, 'dataProvided');
      }
    });
  };

  var addPersistData = function addPersistData(_ref) {
    var page = _ref.page,
        route = _ref.route,
        hash = _ref.hash,
        _ref$register = _ref.register,
        register = _ref$register === void 0 ? new Map() : _ref$register;
    var urlValues = getValuesFromHash(hash, route.path);
    var queryParams = getQueryStringParams(hash);
    var pageData = new Map([].concat(_toConsumableArray(urlValues), _toConsumableArray(register)));
    var params = {}; // make dynamic url data available to the page
    // as instance properties

    var _iterator = _createForOfIteratorHelper(pageData),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            name = _step$value[0],
            value = _step$value[1];

        params[name] = value;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (queryParams) {
      params[symbols.queryParams] = queryParams;
    } // check navigation register for persistent data


    if (register.size) {
      var obj = {};

      var _iterator2 = _createForOfIteratorHelper(register),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              k = _step2$value[0],
              v = _step2$value[1];

          obj[k] = v;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      page.persist = obj;
    } // make url data and persist data available
    // via params property


    page.params = params;
    emit$1(page, ['urlParams'], params);
    return params;
  };
  /**
   * Test if page passed cache-time
   * @param page
   * @returns {boolean}
   */

  var isPageExpired = function isPageExpired(page) {
    if (!page[symbols.expires]) {
      return false;
    }

    var expires = page[symbols.expires];
    var now = Date.now();
    return now >= expires;
  };
  var hasProvider = function hasProvider(path) {
    if (routeExists(path)) {
      var record = routes.get(path);
      return !!record.provider;
    }

    return false;
  };
  var getProvider = function getProvider(route) {
    // @todo: fix, route already is passed in
    if (routeExists(route.path)) {
      var _routes$get = routes.get(route.path),
          provider = _routes$get.provider;

      return {
        type: provider.type,
        provider: provider.request
      };
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var fade = function fade(i, o) {
    return new Promise(function (resolve) {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      }); // resolve on y finish

      i.transition('alpha').on('finish', function () {
        if (o) {
          o.visible = false;
        }

        resolve();
      });
    });
  };

  var crossFade = function crossFade(i, o) {
    return new Promise(function (resolve) {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });

      if (o) {
        o.patch({
          smooth: {
            alpha: [0, {
              duration: 0.5,
              delay: 0.3
            }]
          }
        });
      } // resolve on y finish


      i.transition('alpha').on('finish', function () {
        resolve();
      });
    });
  };

  var moveOnAxes = function moveOnAxes(axis, direction, i, o) {
    var bounds = axis === 'x' ? 1920 : 1080;
    return new Promise(function (resolve) {
      var _i$patch;

      i.patch((_i$patch = {}, _defineProperty(_i$patch, "".concat(axis), direction ? bounds * -1 : bounds), _defineProperty(_i$patch, "visible", true), _defineProperty(_i$patch, "smooth", _defineProperty({}, "".concat(axis), [0, {
        duration: 0.4,
        delay: 0.2
      }])), _i$patch)); // out is optional

      if (o) {
        var _o$patch;

        o.patch((_o$patch = {}, _defineProperty(_o$patch, "".concat(axis), 0), _defineProperty(_o$patch, "smooth", _defineProperty({}, "".concat(axis), [direction ? bounds : bounds * -1, {
          duration: 0.4,
          delay: 0.2
        }])), _o$patch));
      } // resolve on y finish


      i.transition(axis).on('finish', function () {
        resolve();
      });
    });
  };

  var up = function up(i, o) {
    return moveOnAxes('y', 0, i, o);
  };

  var down = function down(i, o) {
    return moveOnAxes('y', 1, i, o);
  };

  var left = function left(i, o) {
    return moveOnAxes('x', 0, i, o);
  };

  var right = function right(i, o) {
    return moveOnAxes('x', 1, i, o);
  };

  var Transitions = {
    fade: fade,
    crossFade: crossFade,
    up: up,
    down: down,
    left: left,
    right: right
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * execute transition between new / old page and
   * toggle the defined widgets
   * @todo: platform override default transition
   * @param pageIn
   * @param pageOut
   */

  var executeTransition = function executeTransition(pageIn) {
    var pageOut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var transition = pageIn.pageTransition || pageIn.easing;
    var hasCustomTransitions = !!(pageIn.smoothIn || pageIn.smoothInOut || transition);
    var transitionsDisabled = getRouterConfig().get('disableTransitions');

    if (pageIn.easing) {
      console.warn('easing() method is deprecated and will be removed. Use pageTransition()');
    } // default behaviour is a visibility toggle


    if (!hasCustomTransitions || transitionsDisabled) {
      pageIn.visible = true;

      if (pageOut) {
        pageOut.visible = false;
      }

      return Promise.resolve();
    }

    if (transition) {
      var type;

      try {
        type = transition.call(pageIn, pageIn, pageOut);
      } catch (e) {
        type = 'crossFade';
      }

      if (isPromise(type)) {
        return type;
      }

      if (isString(type)) {
        var fn = Transitions[type];

        if (fn) {
          return fn(pageIn, pageOut);
        }
      } // keep backwards compatible for now


      if (pageIn.smoothIn) {
        // provide a smooth function that resolves itself
        // on transition finish
        var smooth = function smooth(p, v) {
          var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return new Promise(function (resolve) {
            pageIn.visible = true;
            pageIn.setSmooth(p, v, args);
            pageIn.transition(p).on('finish', function () {
              resolve();
            });
          });
        };

        return pageIn.smoothIn({
          pageIn: pageIn,
          smooth: smooth
        });
      }
    }

    return Transitions.crossFade(pageIn, pageOut);
  };

  /**
   * The actual loading of the component
   * */

  var load = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request) {
      var expired, route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              expired = false;
              _context.prev = 1;
              _context.next = 4;
              return loader$1(request);

            case 4:
              request = _context.sent;

              if (!(request && !request.isCancelled)) {
                _context.next = 12;
                break;
              }

              // in case of on() providing we need to reset
              // app state;
              if (app.state === 'Loading') {
                {
                  app._setState('');
                }
              } // Do page transition if instance
              // is not shared between the routes


              if (!(!request.isSharedInstance && !request.isCancelled)) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return executeTransition(request.page, getActivePage());

            case 10:
              _context.next = 13;
              break;

            case 12:
              expired = true;

            case 13:
              if (!(expired || request.isCancelled)) {
                _context.next = 18;
                break;
              }

              Log.debug('[router]:', "Rejected ".concat(request.hash, " because route to ").concat(getLastHash(), " started"));

              if (request.isCreated && !request.isSharedInstance) {
                // remove from render-tree
                pagesHost.remove(request.page);
              }

              _context.next = 20;
              break;

            case 18:
              onRequestResolved(request); // resolve promise

              return _context.abrupt("return", request.page);

            case 20:
              _context.next = 25;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](1);

              if (!_context.t0.route) {
                console.error(_context.t0);
              } else if (!expired) {
                // @todo: revisit
                route = _context.t0.route; // clean up history if modifier is set

                if (getOption(route.options, 'clearHistory')) {
                  setHistory([]);
                } else if (!isWildcard.test(route.path)) {
                  updateHistory(_context.t0);
                }

                if (_context.t0.isCreated && !_context.t0.isSharedInstance) {
                  // remove from render-tree
                  pagesHost.remove(_context.t0.page);
                }

                handleError(_context.t0);
              }

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 22]]);
    }));

    return function load(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var loader$1 = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request) {
      var route, hash, register, type, isConstruct, provide, currentRoute, _getProvider, loadType, provider;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              route = request.route;
              hash = request.hash;
              register = request.register; // todo: grab from Route instance

              type = getComponent(route.path);
              isConstruct = isComponentConstructor(type);
              provide = false; // if it's an instance bt we're not coming back from
              // history we test if we can re-use this instance

              if (!isConstruct && !register.get(symbols.backtrack)) {
                if (!mustReuse(route)) {
                  type = type.constructor;
                  isConstruct = true;
                }
              } // If page is Lightning Component instance


              if (!isConstruct) {
                request.page = type; // if we have have a data route for current page

                if (hasProvider(route.path)) {
                  if (isPageExpired(type) || type[symbols.hash] !== hash) {
                    provide = true;
                  }
                }

                currentRoute = getActivePage() && getActivePage()[symbols.route]; // if the new route is equal to the current route it means that both
                // route share the Component instance and stack location / since this case
                // is conflicting with the way before() and after() loading works we flag it,
                // and check platform settings in we want to re-use instance

                if (route.path === currentRoute) {
                  request.isSharedInstance = true; // since we're re-using the instance we must attach
                  // historyState to the request to prevent it from
                  // being overridden.

                  if (isFunction(request.page.historyState)) {
                    request.copiedHistoryState = request.page.historyState();
                  }
                }
              } else {
                request.page = createComponent(stage, type);
                pagesHost.a(request.page); // test if need to request data provider

                if (hasProvider(route.path)) {
                  provide = true;
                }

                request.isCreated = true;
              } // we store hash and route as properties on the page instance
              // that way we can easily calculate new behaviour on page reload


              request.page[symbols.hash] = hash;
              request.page[symbols.route] = route.path;
              _context2.prev = 10;

              if (!provide) {
                _context2.next = 25;
                break;
              }

              // extract attached data-provider for route
              // we're processing
              _getProvider = getProvider(route), loadType = _getProvider.type, provider = _getProvider.provider; // update running request

              request.provider = provider;
              request.providerType = loadType;
              _context2.next = 17;
              return dataHooks[loadType](request);

            case 17:
              if (!(hash !== getLastHash())) {
                _context2.next = 21;
                break;
              }

              return _context2.abrupt("return", false);

            case 21:
              if (request.providerType !== 'after') {
                emit$1(request.page, 'dataProvided');
              } // resolve promise


              return _context2.abrupt("return", request);

            case 23:
              _context2.next = 27;
              break;

            case 25:
              addPersistData(request);
              return _context2.abrupt("return", request);

            case 27:
              _context2.next = 33;
              break;

            case 29:
              _context2.prev = 29;
              _context2.t0 = _context2["catch"](10);
              request.error = _context2.t0;
              return _context2.abrupt("return", Promise.reject(request));

            case 33:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[10, 29]]);
    }));

    return function loader(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleError = function handleError(request) {
    if (request && request.error) {
      console.error(request.error);
    } else if (request) {
      Log.error(request);
    }

    if (request.page && routeExists('!')) {
      navigate('!', {
        request: request
      }, false);
    }
  };

  var mustReuse = function mustReuse(route) {
    var opt = getOption(route.options, 'reuseInstance');
    var config = routerConfig.get('reuseInstance'); // route always has final decision

    if (isBoolean(opt)) {
      return opt;
    }

    return !(isBoolean(config) && config === false);
  };

  var RoutedApp = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(RoutedApp, _Lightning$Component);

    var _super = _createSuper(RoutedApp);

    function RoutedApp() {
      _classCallCheck(this, RoutedApp);

      return _super.apply(this, arguments);
    }

    _createClass(RoutedApp, [{
      key: "pages",
      get:
      /**
       * Return location where pages need to be stored
       */
      function get() {
        return this.tag('Pages');
      }
      /**
       * Tell router where widgets are stored
       */

    }, {
      key: "widgets",
      get: function get() {
        return this.tag('Widgets');
      }
      /**
       * we MUST register _handleBack method so the Router
       * can override it
       * @private
       */

    }, {
      key: "_handleBack",
      value: function _handleBack() {}
      /**
       * We MUST return Router.activePage() so the new Page
       * can listen to the remote-control.
       */

    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return Router.getActivePage();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Pages: {
            forceZIndexContext: true
          },

          /**
           * This is a default Loading page that will be made visible
           * during data-provider on() you CAN override in child-class
           */
          Loading: {
            rect: true,
            w: 1920,
            h: 1080,
            color: 0xff000000,
            visible: false,
            zIndex: 99,
            Label: {
              mount: 0.5,
              x: 960,
              y: 540,
              text: {
                text: 'Loading..'
              }
            }
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this) {
          _inherits(Loading, _this);

          var _super2 = _createSuper(Loading);

          function Loading() {
            _classCallCheck(this, Loading);

            return _super2.apply(this, arguments);
          }

          _createClass(Loading, [{
            key: "$enter",
            value: function $enter() {
              this.tag('Loading').visible = true;
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this.tag('Loading').visible = false;
            }
          }]);

          return Loading;
        }(this), /*#__PURE__*/function (_this2) {
          _inherits(Widgets, _this2);

          var _super3 = _createSuper(Widgets);

          function Widgets() {
            _classCallCheck(this, Widgets);

            return _super3.apply(this, arguments);
          }

          _createClass(Widgets, [{
            key: "$enter",
            value: function $enter(args, widget) {
              // store widget reference
              this._widget = widget; // since it's possible that this behaviour
              // is non-remote driven we force a recalculation
              // of the focuspath

              this._refocus();
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              // we delegate focus to selected widget
              // so it can consume remotecontrol presses
              return this._widget;
            } // if we want to widget to widget focus delegation

          }, {
            key: "reload",
            value: function reload(widget) {
              this._widget = widget;

              this._refocus();
            }
          }, {
            key: "_handleKey",
            value: function _handleKey() {
              var restoreFocus = routerConfig.get('autoRestoreRemote');
              /**
               * The Router used to delegate focus back to the page instance on
               * every unhandled key. This is barely usefull in any situation
               * so for now we offer the option to explicity turn that behaviour off
               * so we don't don't introduce a breaking change.
               */

              if (!isBoolean(restoreFocus) || restoreFocus === true) {
                Router.focusPage();
              }
            }
          }]);

          return Widgets;
        }(this)];
      }
    }]);

    return RoutedApp;
  }(lng.Component);

  /*
  rouThor ==[x]
   */

  var navigateQueue = new Map();
  var forcedHash = '';
  var resumeHash = '';
  /**
   * Start routing the app
   * @param config - route config object
   * @param instance - instance of the app
   */

  var startRouter = function startRouter(config, instance) {
    bootRouter(config, instance);
    registerListener();
    start();
  }; // start translating url


  var start = function start() {
    var hash = (getHash() || '').replace(/^#/, '');
    var bootKey = '$';
    var params = getQueryStringParams(hash);
    var bootRequest = getBootRequest();
    var rootHash = getRootHash();
    var isDirectLoad = hash.indexOf(bootKey) !== -1; // prevent direct reload of wildcard routes
    // expect bootComponent

    if (isWildcard.test(hash) && hash !== bootKey) {
      hash = '';
    } // store resume point for manual resume


    resumeHash = isDirectLoad ? rootHash : hash || rootHash;

    var ready = function ready() {
      if (!hash && rootHash) {
        if (isString(rootHash)) {
          navigate(rootHash);
        } else if (isFunction(rootHash)) {
          rootHash().then(function (res) {
            if (isObject(res)) {
              navigate(res.path, res.params);
            } else {
              navigate(res);
            }
          });
        }
      } else {
        queue(hash);
        handleHashChange().then(function () {
          app._refocus();
        }).catch(function (e) {
          console.error(e);
        });
      }
    };

    if (routeExists(bootKey)) {
      if (hash && !isDirectLoad) {
        if (!getRouteByHash(hash)) {
          navigate('*', {
            failedHash: hash
          });
          return;
        }
      }

      navigate(bootKey, {
        resume: resumeHash,
        reload: bootKey === hash
      }, false);
    } else if (isFunction(bootRequest)) {
      bootRequest(params).then(function () {
        ready();
      }).catch(function (e) {
        handleBootError(e);
      });
    } else {
      ready();
    }
  };

  var handleBootError = function handleBootError(e) {
    if (routeExists('!')) {
      navigate('!', {
        request: {
          error: e
        }
      });
    } else {
      console.error(e);
    }
  };
  /**
   * start a new request
   * @param url
   * @param args
   * @param store
   */


  var navigate = function navigate(url) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var store = arguments.length > 2 ? arguments[2] : undefined;

    if (isObject(url)) {
      url = getHashByName(url);

      if (!url) {
        return;
      }
    }

    var hash = getHash();

    if (!mustUpdateLocationHash() && forcedHash) {
      hash = forcedHash;
    }

    if (hash.replace(/^#/, '') !== url) {
      // push request in the queue
      queue(url, args, store);
      setHash(url);

      if (!mustUpdateLocationHash()) {
        forcedHash = url;
        handleHashChange(url).then(function () {
          app._refocus();
        }).catch(function (e) {
          console.error(e);
        });
      }
    } else if (args.reload) {
      // push request in the queue
      queue(url, args, store);
      handleHashChange(url).then(function () {
        app._refocus();
      }).catch(function (e) {
        console.error(e);
      });
    }
  };

  var queue = function queue(hash) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var store = arguments.length > 2 ? arguments[2] : undefined;
    hash = cleanHash(hash);

    if (!navigateQueue.has(hash)) {
      var _iterator = _createForOfIteratorHelper(navigateQueue.values()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _request = _step.value;

          _request.cancel();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var request = createRequest(hash, args, store);
      navigateQueue.set(decodeURIComponent(hash), request);
      return request;
    }

    return false;
  };
  /**
   * Handle change of hash
   * @param override
   * @returns {Promise<void>}
   */


  var handleHashChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(override) {
      var hash, queueId, request, route, result, store;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              hash = cleanHash(override || getHash());
              queueId = decodeURIComponent(hash);
              request = navigateQueue.get(queueId); // handle hash updated manually

              if (!request && !navigateQueue.size) {
                request = queue(hash);
              }

              route = getRouteByHash(hash);

              if (route) {
                _context.next = 8;
                break;
              }

              if (routeExists('*')) {
                navigate('*', {
                  failedHash: hash
                });
              } else {
                console.error("Unable to navigate to: ".concat(hash));
              }

              return _context.abrupt("return");

            case 8:
              // update current processed request
              request.hash = hash;
              request.route = route;
              _context.next = 12;
              return beforeEachRoute(getActiveHash(), request);

            case 12:
              result = _context.sent;

              if (!route.beforeNavigate) {
                _context.next = 17;
                break;
              }

              _context.next = 16;
              return route.beforeNavigate(getActiveHash(), request);

            case 16:
              result = _context.sent;

            case 17:
              if (!isBoolean(result)) {
                _context.next = 22;
                break;
              }

              if (!result) {
                _context.next = 20;
                break;
              }

              return _context.abrupt("return", resolveHashChange(request));

            case 20:
              _context.next = 25;
              break;

            case 22:
              // if navigation guard didn't return true
              // we cancel the current request
              request.cancel();
              navigateQueue.delete(queueId);

              if (isString(result)) {
                navigate(result);
              } else if (isObject(result)) {
                store = true;

                if (isBoolean(result.store)) {
                  store = result.store;
                }

                navigate(result.path, result.params, store);
              }

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleHashChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Continue processing the hash change if not blocked
   * by global or local hook
   * @param request - {}
   */


  var resolveHashChange = function resolveHashChange(request) {
    var hash = request.hash;
    var route = request.route;
    var queueId = decodeURIComponent(hash); // store last requested hash so we can
    // prevent a route that resolved later
    // from displaying itself

    setLastHash(hash);

    if (route.path) {
      var component = getComponent(route.path); // if a hook is provided for the current route

      if (isFunction(route.hook)) {
        var urlParams = getValuesFromHash(hash, route.path);
        var params = {};

        var _iterator2 = _createForOfIteratorHelper(urlParams.keys()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var key = _step2.value;
            params[key] = urlParams.get(key);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        route.hook(app, _objectSpread2({}, params));
      } // if there is a component attached to the route


      if (component) {
        // force page to root state to prevent shared state issues
        var activePage = getActivePage();

        if (activePage) {
          var keepAlive = keepActivePageAlive(getActiveRoute(), request);

          if (activePage && route.path === getActiveRoute() && !keepAlive) {
            activePage._setState('');
          }
        }

        if (isPage(component)) {
          load(request).then(function () {
            app._refocus();

            navigateQueue.delete(queueId);
          });
        } else {
          // of the component is not a constructor
          // or a Component instance we can assume
          // that it's a dynamic import
          component().then(function (contents) {
            return contents.default;
          }).then(function (module) {
            storeComponent(route.path, module);
            return load(request);
          }).then(function () {
            app._refocus();

            navigateQueue.delete(queueId);
          });
        }
      } else {
        navigateQueue.delete(queueId);
      }
    }
  };
  /**
   * Directional step in history
   * @param direction
   */


  var step = function step() {
    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (!level || isNaN(level)) {
      return false;
    }

    var history = getHistory(); // for now we only support negative numbers

    level = Math.abs(level); // we can't step back past the amount
    // of history entries

    if (level > history.length) {
      if (isFunction(app._handleAppClose)) {
        return app._handleAppClose();
      }

      return false;
    } else if (history.length) {
      var _navigate;

      // for now we only support history back
      var route = history.splice(history.length - level, level)[0]; // store changed history

      setHistory(history);
      return navigate(route.hash, (_navigate = {}, _defineProperty(_navigate, symbols.backtrack, true), _defineProperty(_navigate, symbols.historyState, route.state), _navigate), false);
    } else if (routerConfig.get('backtrack')) {
      var hashLastPart = /(\/:?[\w%\s-]+)$/;
      var hash = stripRegex(getHash());
      var floor = getFloor(hash); // test if we got deep-linked

      if (floor > 1) {
        while (floor--) {
          // strip of last part
          hash = hash.replace(hashLastPart, ''); // if we have a configured route
          // we navigate to it

          if (getRouteByHash(hash)) {
            return navigate(hash, _defineProperty({}, symbols.backtrack, true), false);
          }
        }
      }
    }

    return false;
  };
  /**
   * Resume Router's page loading process after
   * the BootComponent became visible;
   */

  var resume = function resume() {
    if (isString(resumeHash)) {
      navigate(resumeHash, false);
      resumeHash = '';
    } else if (isFunction(resumeHash)) {
      resumeHash().then(function (res) {
        resumeHash = '';

        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    } else {
      console.warn('[Router]: resume() called but no hash found');
    }
  };
  /**
   * Force reload active hash
   */


  var reload = function reload() {
    if (!isNavigating()) {
      var hash = getActiveHash();
      navigate(hash, {
        reload: true
      }, false);
    }
  };
  /**
   * Query if the Router is still processing a Request
   * @returns {boolean}
   */


  var isNavigating = function isNavigating() {
    if (navigateQueue.size) {
      var isProcessing = false;

      var _iterator3 = _createForOfIteratorHelper(navigateQueue.values()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var request = _step3.value;

          if (!request.isCancelled) {
            isProcessing = true;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return isProcessing;
    }

    return false;
  };

  var getResumeHash = function getResumeHash() {
    return resumeHash;
  };
  /**
   * By default we return the location hash
   * @returns {string}
   */

  var getHash = function getHash() {
    return document.location.hash;
  };
  /**
   * Update location hash
   * @param url
   */


  var setHash = function setHash(url) {
    document.location.hash = url;
  };
  /**
   * This can be called from the platform / bootstrapper to override
   * the default getting and setting of the hash
   * @param config
   */


  var initRouter = function initRouter(config) {
    if (config.getHash) {
      getHash = config.getHash;
    }

    if (config.setHash) {
      setHash = config.setHash;
    }
  };
  /**
   * On hash change we start processing
   */

  var registerListener = function registerListener() {
    Registry.addEventListener(window, 'hashchange', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!mustUpdateLocationHash()) {
                _context2.next = 9;
                break;
              }

              _context2.prev = 1;
              _context2.next = 4;
              return handleHashChange();

            case 4:
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](1);
              console.error(_context2.t0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 6]]);
    })));
  };
  /**
   * Navigate to root hash
   */


  var root = function root() {
    var rootHash = getRootHash();

    if (isString(rootHash)) {
      navigate(rootHash);
    } else if (isFunction(rootHash)) {
      rootHash().then(function (res) {
        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    }
  }; // export API


  var Router = {
    startRouter: startRouter,
    navigate: navigate,
    resume: resume,
    step: step,
    go: step,
    back: step.bind(null, -1),
    activePage: getActivePage,
    getActivePage: function getActivePage$1() {
      // warning
      return getActivePage();
    },
    getActiveRoute: getActiveRoute,
    getActiveHash: getActiveHash,
    focusWidget: focusWidget,
    getActiveWidget: getActiveWidget,
    restoreFocus: restoreFocus,
    isNavigating: isNavigating,
    getHistory: getHistory,
    setHistory: setHistory,
    getHistoryState: getHistoryState,
    replaceHistoryState: replaceHistoryState,
    getQueryStringParams: getQueryStringParams,
    reload: reload,
    symbols: symbols,
    App: RoutedApp,
    // keep backwards compatible
    focusPage: restoreFocus,
    root: root,

    /**
     * Deprecated api methods
     */
    setupRoutes: function setupRoutes() {
      console.warn('Router: setupRoutes is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    on: function on() {
      console.warn('Router.on() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    before: function before() {
      console.warn('Router.before() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    after: function after() {
      console.warn('Router.after() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var defaultChannels = [{
    number: 1,
    name: 'Metro News 1',
    description: 'New York Cable News Channel',
    entitled: true,
    program: {
      title: 'The Morning Show',
      description: "New York's best morning show",
      startTime: new Date(new Date() - 60 * 5 * 1000).toUTCString(),
      // started 5 minutes ago
      duration: 60 * 30,
      // 30 minutes
      ageRating: 0
    }
  }, {
    number: 2,
    name: 'MTV',
    description: 'Music Television',
    entitled: true,
    program: {
      title: 'Beavis and Butthead',
      description: 'American adult animated sitcom created by Mike Judge',
      startTime: new Date(new Date() - 60 * 20 * 1000).toUTCString(),
      // started 20 minutes ago
      duration: 60 * 45,
      // 45 minutes
      ageRating: 18
    }
  }, {
    number: 3,
    name: 'NBC',
    description: 'NBC TV Network',
    entitled: false,
    program: {
      title: 'The Tonight Show Starring Jimmy Fallon',
      description: 'Late-night talk show hosted by Jimmy Fallon on NBC',
      startTime: new Date(new Date() - 60 * 10 * 1000).toUTCString(),
      // started 10 minutes ago
      duration: 60 * 60,
      // 1 hour
      ageRating: 10
    }
  }];
  var channels = function channels() {
    return Settings.get('platform', 'tv', defaultChannels);
  };
  var randomChannel = function randomChannel() {
    return channels()[~~(channels.length * Math.random())];
  };

  var currentChannel;
  var callbacks = {};

  var emit = function emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    callbacks[event] && callbacks[event].forEach(function (cb) {
      cb.apply(null, args);
    });
  }; // local mock methods


  var methods = {
    getChannel: function getChannel() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise(function (resolve, reject) {
        if (currentChannel) {
          var channel = _objectSpread2({}, currentChannel);

          delete channel.program;
          resolve(channel);
        } else {
          reject('No channel found');
        }
      });
    },
    getProgram: function getProgram() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise(function (resolve, reject) {
        currentChannel.program ? resolve(currentChannel.program) : reject('No program found');
      });
    },
    setChannel: function setChannel(number) {
      return new Promise(function (resolve, reject) {
        if (number) {
          var newChannel = channels().find(function (c) {
            return c.number === number;
          });

          if (newChannel) {
            currentChannel = newChannel;

            var channel = _objectSpread2({}, currentChannel);

            delete channel.program;
            emit('channelChange', channel);
            resolve(channel);
          } else {
            reject('Channel not found');
          }
        } else {
          reject('No channel number supplied');
        }
      });
    }
  };
  var initTV = function initTV(config) {
    methods = {};

    if (config.getChannel && typeof config.getChannel === 'function') {
      methods.getChannel = config.getChannel;
    }

    if (config.getProgram && typeof config.getProgram === 'function') {
      methods.getProgram = config.getProgram;
    }

    if (config.setChannel && typeof config.setChannel === 'function') {
      methods.setChannel = config.setChannel;
    }

    if (config.emit && typeof config.emit === 'function') {
      config.emit(emit);
    }
  }; // public API

  var initPurchase = function initPurchase(config) {
    if (config.billingUrl) ;
  };

  var PinInput = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(PinInput, _Lightning$Component);

    var _super = _createSuper(PinInput);

    function PinInput() {
      _classCallCheck(this, PinInput);

      return _super.apply(this, arguments);
    }

    _createClass(PinInput, [{
      key: "index",
      set: function set(v) {
        this.x = v * (120 + 24);
      }
    }, {
      key: "nr",
      set: function set(v) {
        var _this = this;

        this._timeout && clearTimeout(this._timeout);

        if (v) {
          this.setSmooth('alpha', 1);
        } else {
          this.setSmooth('alpha', 0.5);
        }

        this.tag('Nr').patch({
          text: {
            text: v && v.toString() || '',
            fontSize: v === '*' ? 120 : 80
          }
        });

        if (v && v !== '*') {
          this._timeout = setTimeout(function () {
            _this._timeout = null;
            _this.nr = '*';
          }, 750);
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: 120,
          h: 150,
          rect: true,
          color: 0xff949393,
          alpha: 0.5,
          shader: {
            type: lng.shaders.RoundedRectangle,
            radius: 10
          },
          Nr: {
            w: function w(_w) {
              return _w;
            },
            y: 24,
            text: {
              text: '',
              textColor: 0xff333333,
              fontSize: 80,
              textAlign: 'center',
              verticalAlign: 'middle'
            }
          }
        };
      }
    }]);

    return PinInput;
  }(lng.Component);

  var PinDialog = /*#__PURE__*/function (_Lightning$Component2) {
    _inherits(PinDialog, _Lightning$Component2);

    var _super2 = _createSuper(PinDialog);

    function PinDialog() {
      _classCallCheck(this, PinDialog);

      return _super2.apply(this, arguments);
    }

    _createClass(PinDialog, [{
      key: "_init",
      value: function _init() {
        var children = [];

        for (var i = 0; i < 4; i++) {
          children.push({
            type: PinInput,
            index: i
          });
        }

        this.tag('Code').children = children;
      }
    }, {
      key: "pin",
      get: function get() {
        if (!this._pin) this._pin = '';
        return this._pin;
      },
      set: function set(v) {
        if (v.length <= 4) {
          var maskedPin = new Array(Math.max(v.length - 1, 0)).fill('*', 0, v.length - 1);
          v.length && maskedPin.push(v.length > this._pin.length ? v.slice(-1) : '*');

          for (var i = 0; i < 4; i++) {
            this.tag('Code').children[i].nr = maskedPin[i] || '';
          }

          this._pin = v;
        }
      }
    }, {
      key: "msg",
      get: function get() {
        if (!this._msg) this._msg = '';
        return this._msg;
      },
      set: function set(v) {
        var _this2 = this;

        this._timeout && clearTimeout(this._timeout);
        this._msg = v;

        if (this._msg) {
          this.tag('Msg').text = this._msg;
          this.tag('Info').setSmooth('alpha', 0.5);
          this.tag('Code').setSmooth('alpha', 0.5);
        } else {
          this.tag('Msg').text = '';
          this.tag('Info').setSmooth('alpha', 1);
          this.tag('Code').setSmooth('alpha', 1);
        }

        this._timeout = setTimeout(function () {
          _this2.msg = '';
        }, 2000);
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this.setSmooth('alpha', 1);
      }
    }, {
      key: "_handleKey",
      value: function _handleKey(event) {
        if (this.msg) {
          this.msg = false;
        } else {
          var val = parseInt(event.key);

          if (val > -1) {
            this.pin += val;
          }
        }
      }
    }, {
      key: "_handleBack",
      value: function _handleBack() {
        if (this.msg) {
          this.msg = false;
        } else {
          if (this.pin.length) {
            this.pin = this.pin.slice(0, this.pin.length - 1);
          } else {
            Pin.hide();
            this.resolve(false);
          }
        }
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        var _this3 = this;

        if (this.msg) {
          this.msg = false;
        } else {
          Pin.submit(this.pin).then(function (val) {
            _this3.msg = 'Unlocking ...';
            setTimeout(function () {
              Pin.hide();
            }, 1000);

            _this3.resolve(val);
          }).catch(function (e) {
            _this3.msg = e;

            _this3.reject(e);
          });
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          zIndex: 1,
          w: function w(_w2) {
            return _w2;
          },
          h: function h(_h) {
            return _h;
          },
          rect: true,
          color: 0xdd000000,
          alpha: 0.000001,
          Dialog: {
            w: 648,
            h: 320,
            y: function y(h) {
              return (h - 320) / 2;
            },
            x: function x(w) {
              return (w - 648) / 2;
            },
            rect: true,
            color: 0xdd333333,
            shader: {
              type: lng.shaders.RoundedRectangle,
              radius: 10
            },
            Info: {
              y: 24,
              x: 48,
              text: {
                text: 'Please enter your PIN',
                fontSize: 32
              }
            },
            Msg: {
              y: 260,
              x: 48,
              text: {
                text: '',
                fontSize: 28,
                textColor: 0xffffffff
              }
            },
            Code: {
              x: 48,
              y: 96
            }
          }
        };
      }
    }]);

    return PinDialog;
  }(lng.Component);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var unlocked = false;
  var contextItems = ['purchase', 'parental'];

  var _submit = function submit(pin, context) {
    return new Promise(function (resolve, reject) {
      if (pin.toString() === Settings.get('platform', 'pin', '0000').toString()) {
        unlocked = true;
        resolve(unlocked);
      } else {
        reject('Incorrect pin');
      }
    });
  };

  var check = function check(context) {
    return new Promise(function (resolve) {
      resolve(unlocked);
    });
  };

  var initPin = function initPin(config) {
    if (config.submit && typeof config.submit === 'function') {
      _submit = config.submit;
    }

    if (config.check && typeof config.check === 'function') {
      check = config.check;
    }
  };
  var pinDialog = null;

  var contextCheck = function contextCheck(context) {
    if (context === undefined) {
      Log.info('Please provide context explicitly');
      return contextItems[0];
    } else if (!contextItems.includes(context)) {
      Log.warn('Incorrect context provided');
      return false;
    }

    return context;
  }; // Public API


  var Pin = {
    show: function show() {
      return new Promise(function (resolve, reject) {
        pinDialog = ApplicationInstance.stage.c({
          ref: 'PinDialog',
          type: PinDialog,
          resolve: resolve,
          reject: reject
        });
        ApplicationInstance.childList.a(pinDialog);
        ApplicationInstance.focus = pinDialog;
      });
    },
    hide: function hide() {
      ApplicationInstance.focus = null;
      ApplicationInstance.children = ApplicationInstance.children.map(function (child) {
        return child !== pinDialog && child;
      });
      pinDialog = null;
    },
    submit: function submit(pin, context) {
      return new Promise(function (resolve, reject) {
        try {
          context = contextCheck(context);

          if (context) {
            _submit(pin, context).then(resolve).catch(reject);
          } else {
            reject('Incorrect Context provided');
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    unlocked: function unlocked(context) {
      return new Promise(function (resolve, reject) {
        try {
          context = contextCheck(context);

          if (context) {
            check(context).then(resolve).catch(reject);
          } else {
            reject('Incorrect Context provided');
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    locked: function locked(context) {
      return new Promise(function (resolve, reject) {
        try {
          context = contextCheck(context);

          if (context) {
            check(context).then(function (unlocked) {
              return resolve(!!!unlocked);
            }).catch(reject);
          } else {
            reject('Incorrect Context provided');
          }
        } catch (e) {
          reject(e);
        }
      });
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var ApplicationInstance;
  var Launch = (function (App, appSettings, platformSettings, appData) {
    initSettings(appSettings, platformSettings);
    initUtils(platformSettings);
    initStorage(); // Initialize plugins

    if (platformSettings.plugins) {
      platformSettings.plugins.profile && initProfile(platformSettings.plugins.profile);
      platformSettings.plugins.metrics && initMetrics(platformSettings.plugins.metrics);
      platformSettings.plugins.mediaPlayer && initMediaPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.mediaPlayer && initVideoPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.ads && initAds(platformSettings.plugins.ads);
      platformSettings.plugins.router && initRouter(platformSettings.plugins.router);
      platformSettings.plugins.tv && initTV(platformSettings.plugins.tv);
      platformSettings.plugins.purchase && initPurchase(platformSettings.plugins.purchase);
      platformSettings.plugins.pin && initPin(platformSettings.plugins.pin);
    }

    var app = Application(App, appData, platformSettings);
    ApplicationInstance = new app(appSettings);
    return ApplicationInstance;
  });

  var VideoTexture = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(VideoTexture, _Lightning$Component);

    var _super = _createSuper(VideoTexture);

    function VideoTexture() {
      _classCallCheck(this, VideoTexture);

      return _super.apply(this, arguments);
    }

    _createClass(VideoTexture, [{
      key: "videoEl",
      get: function get() {
        return this._videoEl;
      },
      set: function set(v) {
        this._videoEl = v;
      }
    }, {
      key: "videoView",
      get: function get() {
        return this.tag('Video');
      }
    }, {
      key: "videoTexture",
      get: function get() {
        return this.videoView.texture;
      }
    }, {
      key: "isVisible",
      get: function get() {
        return this.videoView.alpha === 1 && this.videoView.visible === true;
      }
    }, {
      key: "_init",
      value: function _init() {
        this._createVideoTexture();
      }
    }, {
      key: "_createVideoTexture",
      value: function _createVideoTexture() {
        var stage = this.stage;
        var gl = stage.gl;
        var glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        this.videoTexture.options = {
          source: glTexture,
          w: this.videoEl.width,
          h: this.videoEl.height
        };
        this.videoView.w = this.videoEl.width / this.stage.getRenderPrecision();
        this.videoView.h = this.videoEl.height / this.stage.getRenderPrecision();
      }
    }, {
      key: "start",
      value: function start() {
        var _this = this;

        var stage = this.stage;
        this._lastTime = 0;

        if (!this._updateVideoTexture) {
          this._updateVideoTexture = function () {
            if (_this.videoTexture.options.source && _this.videoEl.videoWidth && _this.active) {
              var gl = stage.gl;
              var currentTime = new Date().getTime();

              var getVideoPlaybackQuality = _this.videoEl.getVideoPlaybackQuality(); // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
              // We'll fallback to fixed 30fps in this case.
              // As 'webkitDecodedFrameCount' is about to deprecate, check for the 'totalVideoFrames'


              var frameCount = getVideoPlaybackQuality ? getVideoPlaybackQuality.totalVideoFrames : _this.videoEl.webkitDecodedFrameCount;
              var mustUpdate = frameCount ? _this._lastFrame !== frameCount : _this._lastTime < currentTime - 30;

              if (mustUpdate) {
                _this._lastTime = currentTime;
                _this._lastFrame = frameCount;

                try {
                  gl.bindTexture(gl.TEXTURE_2D, _this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this.videoEl);
                  _this._lastFrame = _this.videoEl.webkitDecodedFrameCount;
                  _this.videoView.visible = true;
                  _this.videoTexture.options.w = _this.videoEl.width;
                  _this.videoTexture.options.h = _this.videoEl.height;
                  var expectedAspectRatio = _this.videoView.w / _this.videoView.h;
                  var realAspectRatio = _this.videoEl.width / _this.videoEl.height;

                  if (expectedAspectRatio > realAspectRatio) {
                    _this.videoView.scaleX = realAspectRatio / expectedAspectRatio;
                    _this.videoView.scaleY = 1;
                  } else {
                    _this.videoView.scaleY = expectedAspectRatio / realAspectRatio;
                    _this.videoView.scaleX = 1;
                  }
                } catch (e) {
                  Log.error('texImage2d video', e);

                  _this.stop();
                }

                _this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }

        if (!this._updatingVideoTexture) {
          stage.on('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var stage = this.stage;
        stage.removeListener('frameStart', this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoView.visible = false;

        if (this.videoTexture.options.source) {
          var gl = stage.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
    }, {
      key: "position",
      value: function position(top, left) {
        this.videoView.patch({
          smooth: {
            x: left,
            y: top
          }
        });
      }
    }, {
      key: "size",
      value: function size(width, height) {
        this.videoView.patch({
          smooth: {
            w: width,
            h: height
          }
        });
      }
    }, {
      key: "show",
      value: function show() {
        this.videoView.setSmooth('alpha', 1);
      }
    }, {
      key: "hide",
      value: function hide() {
        this.videoView.setSmooth('alpha', 0);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Video: {
            alpha: 1,
            visible: false,
            pivot: 0.5,
            texture: {
              type: lng.textures.StaticTexture,
              options: {}
            }
          }
        };
      }
    }]);

    return VideoTexture;
  }(lng.Component);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var mediaUrl = function mediaUrl(url) {
    return url;
  };
  var videoEl;
  var videoTexture;
  var metrics;

  var _consumer;

  var precision = 1;
  var textureMode = false;
  var initVideoPlayer = function initVideoPlayer(config) {
    if (config.mediaUrl) {
      mediaUrl = config.mediaUrl;
    }
  }; // todo: add this in a 'Registry' plugin
  // to be able to always clean this up on app close

  var eventHandlers = {};
  var state$1 = {
    adsEnabled: false,
    playing: false,
    _playingAds: false,

    get playingAds() {
      return this._playingAds;
    },

    set playingAds(val) {
      if (this._playingAds !== val) {
        this._playingAds = val;
        fireOnConsumer$1(val === true ? 'AdStart' : 'AdEnd');
      }
    },

    skipTime: false,
    playAfterSeek: null
  };
  var hooks = {
    play: function play() {
      state$1.playing = true;
    },
    pause: function pause() {
      state$1.playing = false;
    },
    seeked: function seeked() {
      state$1.playAfterSeek === true && videoPlayerPlugin.play();
      state$1.playAfterSeek = null;
    },
    abort: function abort() {
      deregisterEventListeners();
    }
  };

  var withPrecision = function withPrecision(val) {
    return Math.round(precision * val) + 'px';
  };

  var fireOnConsumer$1 = function fireOnConsumer(event, args) {
    if (_consumer) {
      _consumer.fire('$videoPlayer' + event, args, videoEl.currentTime);

      _consumer.fire('$videoPlayerEvent', event, args, videoEl.currentTime);
    }
  };

  var fireHook = function fireHook(event, args) {
    hooks[event] && typeof hooks[event] === 'function' && hooks[event].call(null, event, args);
  };

  var customLoader = null;
  var customUnloader = null;

  var loader = function loader(url, videoEl, config) {
    return customLoader && typeof customLoader === 'function' ? customLoader(url, videoEl, config) : new Promise(function (resolve) {
      url = mediaUrl(url);
      videoEl.setAttribute('src', url);
      videoEl.load();
      resolve();
    });
  };

  var unloader = function unloader(videoEl) {
    return customUnloader && typeof customUnloader === 'function' ? customUnloader(videoEl) : new Promise(function (resolve) {
      videoEl.removeAttribute('src');
      videoEl.load();
      resolve();
    });
  };

  var setupVideoTag = function setupVideoTag() {
    var videoEls = document.getElementsByTagName('video');

    if (videoEls && videoEls.length) {
      return videoEls[0];
    } else {
      var _videoEl = document.createElement('video');

      var platformSettingsWidth = Settings.get('platform', 'width') ? Settings.get('platform', 'width') : 1920;
      var platformSettingsHeight = Settings.get('platform', 'height') ? Settings.get('platform', 'height') : 1080;

      _videoEl.setAttribute('id', 'video-player');

      _videoEl.setAttribute('width', withPrecision(platformSettingsWidth));

      _videoEl.setAttribute('height', withPrecision(platformSettingsHeight));

      _videoEl.style.position = 'absolute';
      _videoEl.style.zIndex = '1';
      _videoEl.style.display = 'none';
      _videoEl.style.visibility = 'hidden';
      _videoEl.style.top = withPrecision(0);
      _videoEl.style.left = withPrecision(0);
      _videoEl.style.width = withPrecision(platformSettingsWidth);
      _videoEl.style.height = withPrecision(platformSettingsHeight);
      document.body.appendChild(_videoEl);
      return _videoEl;
    }
  };
  var setUpVideoTexture = function setUpVideoTexture() {
    if (!ApplicationInstance.tag('VideoTexture')) {
      var el = ApplicationInstance.stage.c({
        type: VideoTexture,
        ref: 'VideoTexture',
        zIndex: 0,
        videoEl: videoEl
      });
      ApplicationInstance.childList.addAt(el, 0);
    }

    return ApplicationInstance.tag('VideoTexture');
  };

  var registerEventListeners = function registerEventListeners() {
    Log.info('VideoPlayer', 'Registering event listeners');
    Object.keys(events$1).forEach(function (event) {
      var handler = function handler(e) {
        // Fire a metric for each event (if it exists on the metrics object)
        if (metrics && metrics[event] && typeof metrics[event] === 'function') {
          metrics[event]({
            currentTime: videoEl.currentTime
          });
        } // fire an internal hook


        fireHook(event, {
          videoElement: videoEl,
          event: e
        }); // fire the event (with human friendly event name) to the consumer of the VideoPlayer

        fireOnConsumer$1(events$1[event], {
          videoElement: videoEl,
          event: e
        });
      };

      eventHandlers[event] = handler;
      videoEl.addEventListener(event, handler);
    });
  };

  var deregisterEventListeners = function deregisterEventListeners() {
    Log.info('VideoPlayer', 'Deregistering event listeners');
    Object.keys(eventHandlers).forEach(function (event) {
      videoEl.removeEventListener(event, eventHandlers[event]);
    });
    eventHandlers = {};
  };

  var videoPlayerPlugin = {
    consumer: function consumer(component) {
      _consumer = component;
    },
    loader: function loader(loaderFn) {
      customLoader = loaderFn;
    },
    unloader: function unloader(unloaderFn) {
      customUnloader = unloaderFn;
    },
    position: function position() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      videoEl.style.left = withPrecision(left);
      videoEl.style.top = withPrecision(top);

      if (textureMode === true) {
        videoTexture.position(top, left);
      }
    },
    size: function size() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1920;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1080;
      videoEl.style.width = withPrecision(width);
      videoEl.style.height = withPrecision(height);
      videoEl.width = parseFloat(videoEl.style.width);
      videoEl.height = parseFloat(videoEl.style.height);

      if (textureMode === true) {
        videoTexture.size(width, height);
      }
    },
    area: function area() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1920;
      var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
      var left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.position(top, left);
      this.size(right - left, bottom - top);
    },
    open: function open(url) {
      var _this = this;

      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.canInteract) return;
      metrics = Metrics$1.media(url);
      this.hide();
      deregisterEventListeners();

      if (this.src == url) {
        this.clear().then(this.open(url, config));
      } else {
        var adConfig = {
          enabled: state$1.adsEnabled,
          duration: 300
        };

        if (config.videoId) {
          adConfig.caid = config.videoId;
        }

        Ads.get(adConfig, _consumer).then(function (ads) {
          state$1.playingAds = true;
          ads.prerolls().then(function () {
            state$1.playingAds = false;
            loader(url, videoEl, config).then(function () {
              registerEventListeners();

              _this.show();

              _this.play();
            }).catch(function (e) {
              fireOnConsumer$1('error', {
                videoElement: videoEl,
                event: e
              });
            });
          });
        });
      }
    },
    reload: function reload() {
      if (!this.canInteract) return;
      var url = videoEl.getAttribute('src');
      this.close();
      this.open(url);
    },
    close: function close() {
      var _this2 = this;

      Ads.cancel();

      if (state$1.playingAds) {
        state$1.playingAds = false;
        Ads.stop(); // call self in next tick

        setTimeout(function () {
          _this2.close();
        });
      }

      if (!this.canInteract) return;
      this.clear();
      this.hide();
      deregisterEventListeners();
    },
    clear: function clear() {
      if (!this.canInteract) return; // pause the video first to disable sound

      this.pause();
      if (textureMode === true) videoTexture.stop();
      return unloader(videoEl).then(function () {
        fireOnConsumer$1('Clear', {
          videoElement: videoEl
        });
      });
    },
    play: function play() {
      if (!this.canInteract) return;
      if (textureMode === true) videoTexture.start();
      executeAsPromise(videoEl.play, null, videoEl).catch(function (e) {
        fireOnConsumer$1('error', {
          videoElement: videoEl,
          event: e
        });
      });
    },
    pause: function pause() {
      if (!this.canInteract) return;
      videoEl.pause();
    },
    playPause: function playPause() {
      if (!this.canInteract) return;
      this.playing === true ? this.pause() : this.play();
    },
    mute: function mute() {
      var muted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.canInteract) return;
      videoEl.muted = muted;
    },
    loop: function loop() {
      var looped = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      videoEl.loop = looped;
    },
    seek: function seek(time) {
      if (!this.canInteract) return;
      if (!this.src) return; // define whether should continue to play after seek is complete (in seeked hook)

      if (state$1.playAfterSeek === null) {
        state$1.playAfterSeek = !!state$1.playing;
      } // pause before actually seeking


      this.pause(); // currentTime always between 0 and the duration of the video (minus 0.1s to not set to the final frame and stall the video)

      videoEl.currentTime = Math.max(0, Math.min(time, this.duration - 0.1));
    },
    skip: function skip(seconds) {
      var _this3 = this;

      if (!this.canInteract) return;
      if (!this.src) return;
      state$1.skipTime = (state$1.skipTime || videoEl.currentTime) + seconds;
      easeExecution(function () {
        _this3.seek(state$1.skipTime);

        state$1.skipTime = false;
      }, 300);
    },
    show: function show() {
      if (!this.canInteract) return;

      if (textureMode === true) {
        videoTexture.show();
      } else {
        videoEl.style.display = 'block';
        videoEl.style.visibility = 'visible';
      }
    },
    hide: function hide() {
      if (!this.canInteract) return;

      if (textureMode === true) {
        videoTexture.hide();
      } else {
        videoEl.style.display = 'none';
        videoEl.style.visibility = 'hidden';
      }
    },
    enableAds: function enableAds() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      state$1.adsEnabled = enabled;
    },

    /* Public getters */
    get duration() {
      return videoEl && (isNaN(videoEl.duration) ? Infinity : videoEl.duration);
    },

    get currentTime() {
      return videoEl && videoEl.currentTime;
    },

    get muted() {
      return videoEl && videoEl.muted;
    },

    get looped() {
      return videoEl && videoEl.loop;
    },

    get src() {
      return videoEl && videoEl.getAttribute('src');
    },

    get playing() {
      return state$1.playing;
    },

    get playingAds() {
      return state$1.playingAds;
    },

    get canInteract() {
      // todo: perhaps add an extra flag wether we allow interactions (i.e. pauze, mute, etc.) during ad playback
      return state$1.playingAds === false;
    },

    get top() {
      return videoEl && parseFloat(videoEl.style.top);
    },

    get left() {
      return videoEl && parseFloat(videoEl.style.left);
    },

    get bottom() {
      return videoEl && parseFloat(videoEl.style.top - videoEl.style.height);
    },

    get right() {
      return videoEl && parseFloat(videoEl.style.left - videoEl.style.width);
    },

    get width() {
      return videoEl && parseFloat(videoEl.style.width);
    },

    get height() {
      return videoEl && parseFloat(videoEl.style.height);
    },

    get visible() {
      if (textureMode === true) {
        return videoTexture.isVisible;
      } else {
        return videoEl && videoEl.style.display === 'block';
      }
    },

    get adsEnabled() {
      return state$1.adsEnabled;
    },

    // prefixed with underscore to indicate 'semi-private'
    // because it's not recommended to interact directly with the video element
    get _videoEl() {
      return videoEl;
    },

    get _consumer() {
      return _consumer;
    }

  };
  var VideoPlayer = autoSetupMixin(videoPlayerPlugin, function () {
    precision = ApplicationInstance && ApplicationInstance.stage && ApplicationInstance.stage.getRenderPrecision() || precision;
    videoEl = setupVideoTag();
    textureMode = Settings.get('platform', 'textureMode', false);

    if (textureMode === true) {
      videoEl.setAttribute('crossorigin', 'anonymous');
      videoTexture = setUpVideoTexture();
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var consumer;

  var getAds = function getAds() {
    // todo: enable some default ads during development, maybe from the settings.json
    return Promise.resolve({
      prerolls: [],
      midrolls: [],
      postrolls: []
    });
  };

  var initAds = function initAds(config) {
    if (config.getAds) {
      getAds = config.getAds;
    }
  };
  var state = {
    active: false
  };

  var playSlot = function playSlot() {
    var slot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return slot.reduce(function (promise, ad) {
      return promise.then(function () {
        return playAd(ad);
      });
    }, Promise.resolve(null));
  };

  var playAd = function playAd(ad) {
    return new Promise(function (resolve) {
      if (state.active === false) {
        Log.info('Ad', 'Skipping add due to inactive state');
        return resolve();
      } // is it safe to rely on videoplayer plugin already created the video tag?


      var videoEl = document.getElementsByTagName('video')[0];
      videoEl.style.display = 'block';
      videoEl.style.visibility = 'visible';
      videoEl.src = mediaUrl(ad.url);
      videoEl.load();
      var timeEvents = null;
      var timeout;

      var cleanup = function cleanup() {
        // remove all listeners
        Object.keys(handlers).forEach(function (handler) {
          return videoEl.removeEventListener(handler, handlers[handler]);
        });
        resolve();
      };

      var handlers = {
        play: function play() {
          Log.info('Ad', 'Play ad', ad.url);
          fireOnConsumer('Play', ad);
          sendBeacon(ad.callbacks, 'defaultImpression');
        },
        ended: function ended() {
          fireOnConsumer('Ended', ad);
          sendBeacon(ad.callbacks, 'complete');
          cleanup();
        },
        timeupdate: function timeupdate() {
          if (!timeEvents && videoEl.duration) {
            // calculate when to fire the time based events (now that duration is known)
            timeEvents = {
              firstQuartile: videoEl.duration / 4,
              midPoint: videoEl.duration / 2,
              thirdQuartile: videoEl.duration / 4 * 3
            };
            Log.info('Ad', 'Calculated quartiles times', {
              timeEvents: timeEvents
            });
          }

          if (timeEvents && timeEvents.firstQuartile && videoEl.currentTime >= timeEvents.firstQuartile) {
            fireOnConsumer('FirstQuartile', ad);
            delete timeEvents.firstQuartile;
            sendBeacon(ad.callbacks, 'firstQuartile');
          }

          if (timeEvents && timeEvents.midPoint && videoEl.currentTime >= timeEvents.midPoint) {
            fireOnConsumer('MidPoint', ad);
            delete timeEvents.midPoint;
            sendBeacon(ad.callbacks, 'midPoint');
          }

          if (timeEvents && timeEvents.thirdQuartile && videoEl.currentTime >= timeEvents.thirdQuartile) {
            fireOnConsumer('ThirdQuartile', ad);
            delete timeEvents.thirdQuartile;
            sendBeacon(ad.callbacks, 'thirdQuartile');
          }
        },
        stalled: function stalled() {
          fireOnConsumer('Stalled', ad);
          timeout = setTimeout(function () {
            cleanup();
          }, 5000); // make timeout configurable
        },
        canplay: function canplay() {
          timeout && clearTimeout(timeout);
        },
        error: function error() {
          fireOnConsumer('Error', ad);
          cleanup();
        },
        // this doesn't work reliably on sky box, moved logic to timeUpdate event
        // loadedmetadata() {
        //   // calculate when to fire the time based events (now that duration is known)
        //   timeEvents = {
        //     firstQuartile: videoEl.duration / 4,
        //     midPoint: videoEl.duration / 2,
        //     thirdQuartile: (videoEl.duration / 4) * 3,
        //   }
        // },
        abort: function abort() {
          cleanup();
        } // todo: pause, resume, mute, unmute beacons

      }; // add all listeners

      Object.keys(handlers).forEach(function (handler) {
        return videoEl.addEventListener(handler, handlers[handler]);
      });
      videoEl.play();
    });
  };

  var sendBeacon = function sendBeacon(callbacks, event) {
    if (callbacks && callbacks[event]) {
      Log.info('Ad', 'Sending beacon', event, callbacks[event]);
      return callbacks[event].reduce(function (promise, url) {
        return promise.then(function () {
          return fetch(url) // always resolve, also in case of a fetch error (so we don't block firing the rest of the beacons for this event)
          // note: for fetch failed http responses don't throw an Error :)
          .then(function (response) {
            if (response.status === 200) {
              fireOnConsumer('Beacon' + event + 'Sent');
            } else {
              fireOnConsumer('Beacon' + event + 'Failed' + response.status);
            }

            Promise.resolve(null);
          }).catch(function () {
            Promise.resolve(null);
          });
        });
      }, Promise.resolve(null));
    } else {
      Log.info('Ad', 'No callback found for ' + event);
    }
  };

  var fireOnConsumer = function fireOnConsumer(event, args) {
    if (consumer) {
      consumer.fire('$ad' + event, args);
      consumer.fire('$adEvent', event, args);
    }
  };

  var Ads = {
    get: function get(config, videoPlayerConsumer) {
      if (config.enabled === false) {
        return Promise.resolve({
          prerolls: function prerolls() {
            return Promise.resolve();
          }
        });
      }

      consumer = videoPlayerConsumer;
      return new Promise(function (resolve) {
        Log.info('Ad', 'Starting session');
        getAds(config).then(function (ads) {
          Log.info('Ad', 'API result', ads);
          resolve({
            prerolls: function prerolls() {
              if (ads.preroll) {
                state.active = true;
                fireOnConsumer('PrerollSlotImpression', ads);
                sendBeacon(ads.preroll.callbacks, 'slotImpression');
                return playSlot(ads.preroll.ads).then(function () {
                  fireOnConsumer('PrerollSlotEnd', ads);
                  sendBeacon(ads.preroll.callbacks, 'slotEnd');
                  state.active = false;
                });
              }

              return Promise.resolve();
            },
            midrolls: function midrolls() {
              return Promise.resolve();
            },
            postrolls: function postrolls() {
              return Promise.resolve();
            }
          });
        });
      });
    },
    cancel: function cancel() {
      Log.info('Ad', 'Cancel Ad');
      state.active = false;
    },
    stop: function stop() {
      Log.info('Ad', 'Stop Ad');
      state.active = false; // fixme: duplication

      var videoEl = document.getElementsByTagName('video')[0];
      videoEl.pause();
      videoEl.removeAttribute('src');
    }
  };

  /*#__PURE__*/(function (_Lightning$textures$I) {
    _inherits(ScaledImageTexture, _Lightning$textures$I);

    var _super = _createSuper(ScaledImageTexture);

    function ScaledImageTexture(stage) {
      var _this;

      _classCallCheck(this, ScaledImageTexture);

      _this = _super.call(this, stage);
      _this._scalingOptions = undefined;
      return _this;
    }

    _createClass(ScaledImageTexture, [{
      key: "options",
      set: function set(options) {
        this.resizeMode = this._scalingOptions = options;
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return "".concat(this._src, "-").concat(this._scalingOptions.type, "-").concat(this._scalingOptions.w, "-").concat(this._scalingOptions.h);
      }
    }, {
      key: "getNonDefaults",
      value: function getNonDefaults() {
        var obj = _get(_getPrototypeOf(ScaledImageTexture.prototype), "getNonDefaults", this).call(this);

        if (this._src) {
          obj.src = this._src;
        }

        return obj;
      }
    }]);

    return ScaledImageTexture;
  })(lng.textures.ImageTexture);

  /**
   * Grid
   *
   * Contains global grid style information to easily maintain consistency throughout components.
   */

  /**
   * Sets up spacing configurations to correctly position Items and Rows.
   */
  var GRID = {
    gutters: {
      horizontal: 80,
      // space between rows
      vertical: 40 // space between columns (items)

    },
    margin: {
      x: 80,
      y: 64
    },
    spacingIncrement: 8,
    // the grid is built on an 8-point system
    columnWidth: 110
  };
  /**
   * Establishes the screen size to be 1080p resolution (1920x1080).
   */

  var SCREEN = {
    w: 1920,
    h: 1080
  };
  /**
   * Determines the width and height of an item based off the data passed into the item
   * (either all necessary parameters to calculate the dimensions dynamically,
   * OR all the necessary parameters to hard set the dimensions).
   *
   * @param { object } obj
   * @param { object } fallback
   *
   * @return { { number, number } }
   */

  function getDimensions() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var w = obj.w,
        h = obj.h,
        ratioX = obj.ratioX,
        ratioY = obj.ratioY,
        upCount = obj.upCount;
    var fallbackW = fallback.w || 0;
    var fallbackH = fallback.h || 0;
    var dimensions = {}; // hard set width and height values were passed in and should override other params

    if (w && h) {
      dimensions = {
        w: w,
        h: h
      };
    } else if (h && ratioX && ratioY) {
      // hard set height and ratio values were passed in, meaning the row has items with mixed ratios, so the width needs to be calculated
      dimensions = {
        w: Math.round(h * ratioX / ratioY),
        h: h
      }; // calculate dynamic width and height based off item ratios
    } else if (ratioX && ratioY && upCount) {
      dimensions = getItemRatioDimensions(ratioX, ratioY, upCount);
    } else if (h && upCount) {
      // calculate dynamic width based off a row upcount and a given height
      dimensions = {
        w: Math.round(calculateColumnWidth(upCount)),
        h: h
      };
    } else if (h) {
      dimensions = {
        w: fallbackW,
        h: h
      };
    } else if (w) {
      dimensions = {
        w: w,
        h: fallbackH
      };
    } else {
      // not enough information was provided to properly size the component
      dimensions = {
        w: fallbackW,
        h: fallbackH
      };
    }

    dimensions = _objectSpread2(_objectSpread2({}, dimensions), {}, {
      ratioX: ratioX,
      ratioY: ratioY,
      upCount: upCount
    });
    return dimensions;
  }
  /**
   * Calculates the width and height of an item based off the given ratios
   * and number of columns across the screen that should be visible before peaking
   *
   * @param { number } ratioX
   * @param { number } ratioY
   * @param { number } upCount
   *
   * @return { { number, number } }
   */

  function getItemRatioDimensions(ratioX, ratioY, upCount) {
    var w, h;

    if (ratioX && ratioY && upCount) {
      w = Math.round(calculateColumnWidth(upCount));
      h = Math.round(w / ratioX * ratioY);
    } else {
      w = 0;
      h = 0;
    }

    return {
      w: w,
      h: h
    };
  }
  /**
   * Calculates the width of an item given how many columns are requested
   *
   * @param { number } upCount
   *
   * @return { number }
   */

  function calculateColumnWidth(upCount) {
    // the screen width, minus the margin x on each side
    var rowWidth = SCREEN.w - GRID.margin.x * 2;

    if (upCount) {
      // the total space of column gaps in between items
      var columnGapTotal = (upCount - 1) * GRID.gutters.vertical; // the remaining amount of space left for all items

      var totalColumnsWidth = rowWidth - columnGapTotal; // the width of each item in that remaining width

      var itemWidth = totalColumnsWidth / upCount;
      return itemWidth;
    }

    return rowWidth;
  }

  /**
   * Lightning uses ARGB values, use this function
   * to convert know color to Lightning value
   * https://ifpb.github.io/javascript-guide/ecma/expression-and-operator/argb.html
   */

  function rgba2argb(rgbaStr) {
    var rgba = rgbaStr.replace(/rgba\(|\)/g, '').split(','); // Multiple Alpha Value

    rgba[3] = rgba[3] * 255;
    return lng.StageUtils.getArgbNumber(rgba);
  }
  /**
   * Helpers for lng.Tools.getRoundRect
   */

  var RoundRect = {
    /**
     * Returns a value that will render as the given width (w)
     * when passed to lng.Tools.getRoundRect
     * @param {number} w - px value for expected width
     * @param {*} options
     * @param {number} options.padding - px value for both left and right padding
     * @param {number} options.paddingLeft - px value for left padding, overrides options.padding
     * @param {number} options.paddingRight - px value for right padding, overrides options.padding
     * @param {number} options.strokeWidth - px value for stroke width
     */
    getWidth: function getWidth(w) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _padding$paddingLeft$ = _objectSpread2({
        padding: 0,
        paddingLeft: 0,
        paddingRight: 0,
        strokeWidth: 0
      }, options),
          padding = _padding$paddingLeft$.padding,
          paddingLeft = _padding$paddingLeft$.paddingLeft,
          paddingRight = _padding$paddingLeft$.paddingRight,
          strokeWidth = _padding$paddingLeft$.strokeWidth;

      if (!w) return 0;
      return w - (paddingLeft || padding) - (paddingRight || padding) - strokeWidth;
    },

    /**
     * Returns a value that will render as the given height (h)
     * when passed to lng.Tools.getRoundRect
     * @param {number} h - px value for expected width
     * @param {*} options
     * @param {number} options.padding - px value for both bottom and top padding
     * @param {number} options.paddingBottom - px value for bottom padding, overrides options.padding
     * @param {number} options.paddingTop - px value for top padding, overrides options.padding
     * @param {number} options.strokeWidth - px value for stroke width
     */
    getHeight: function getHeight(h) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _padding$paddingBotto = _objectSpread2({
        padding: 0,
        paddingBottom: 0,
        paddingTop: 0,
        strokeWidth: 0
      }, options),
          padding = _padding$paddingBotto.padding,
          paddingBottom = _padding$paddingBotto.paddingBottom,
          paddingTop = _padding$paddingBotto.paddingTop,
          strokeWidth = _padding$paddingBotto.strokeWidth;

      if (!h) return 0;
      return h - (paddingBottom || padding) - (paddingTop || padding) - strokeWidth;
    }
  };
  /**
   * Merges two objects together and returns the duplicate.
   *
   * @param {Object} target - object to be cloned
   * @param {Object} [object] - secondary object to merge into clone
   */

  function clone(target, object) {
    var _clone = _objectSpread2({}, target);

    if (!object || target === object) return _clone;

    for (var key in object) {
      var value = object[key]; // eslint-disable-next-line no-prototype-builtins

      if (target.hasOwnProperty(key)) {
        _clone[key] = getMergeValue(key, target, object);
      } else {
        _clone[key] = value;
      }
    }

    return _clone;
  }

  function getMergeValue(key, target, object) {
    var targetVal = target[key];
    var objectVal = object[key];
    var targetValType = typeof targetVal;
    var objectValType = typeof objectVal;

    if (targetValType !== objectValType || objectValType === 'function' || Array.isArray(objectVal)) {
      return objectVal;
    }

    if (objectVal && objectValType === 'object') {
      return clone(targetVal, objectVal);
    }

    return objectVal;
  }
  /**
   * Returns the rendered width of a given text texture
   * @param {Object} text - text texture properties
   * @param {string} text.text - text value
   * @param {string} text.fontStyle - css font-style property
   * @param {(string|number)} text.fontWeight - css font-weight property
   * @param {string} [fontSize=0] - css font-size property (in px)
   * @param {string} [text.fontFamily=sans-serif] - css font-weight property
   * @param {string} text.fontFace - alias for fontFamily
   *
   * @returns {number} text width
   * */


  function measureTextWidth() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var fontStyle = text.fontStyle,
        fontWeight = text.fontWeight,
        fontSize = text.fontSize,
        _text$fontFamily = text.fontFamily,
        fontFamily = _text$fontFamily === void 0 ? text.fontFace || 'sans-serif' : _text$fontFamily;
    var fontCss = [fontStyle, fontWeight, fontSize ? "".concat(fontSize, "px") : '0', "'".concat(fontFamily, "'")].filter(Boolean).join(' ');
    ctx.font = fontCss;
    var textMetrics = ctx.measureText(text.text || '');
    return Math.round(textMetrics.width);
  }
  /**
   * Returns first argument that is a number. Useful for finding ARGB numbers. Does not convert strings to numbers
   * @param {...*} number - maybe a number
   **/

  function getFirstNumber() {
    for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
      numbers[_key] = arguments[_key];
    }

    return numbers.find(Number.isFinite);
  }
  /**
   * Naively looks for dimensional prop (i.e. w, h, x, y, etc.), first searching for
   * a transition target value then defaulting to the current set value
   * @param {string} prop - property key
   * @param {lng.Component} component - Lightning component to operate against
   */

  function getDimension(prop, component) {
    if (!component) return 0;
    var transition = component.transition(prop);
    if (transition.isRunning()) return transition.targetValue;
    return component[prop];
  }
  var getX = getDimension.bind(null, 'x');
  var getY = getDimension.bind(null, 'y');
  var getW = function getW(component) {
    return getDimension('w', component) || component.renderWidth;
  };
  /**
   * Array.prototype.flat() is not supported in WPE Browser
   *
   * @param {array} arr
   *
   * @return {array}
   */

  function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }
  function stringifyCompare(objA, objB) {
    return JSON.stringify(objA) === JSON.stringify(objB);
  }

  var XfinityFonts = {
    default: {
      fontName: 'XfinityStandard',
      baseUrl: 'https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized',
      weights: {
        regular: {
          family: 'Regular',
          url: 'xfinitystandard-regular.woff'
        },
        medium: {
          family: 'Medium',
          url: 'xfinitystandard-medium.woff'
        },
        bold: {
          family: 'Bold',
          url: 'xfinitystandard-bold.woff'
        }
      }
    },
    brand: {
      fontName: 'XfinityBrown',
      baseUrl: 'https://static.cimcontent.net/common-web-assets/fonts/xfinity-brown-optimized',
      weights: {
        regular: {
          family: 'Regular',
          url: 'xfinitybrown-regular.woff'
        },
        bold: {
          family: 'Bold',
          url: 'xfinitybrown-bold.woff'
        }
      }
    }
  };
  var createFonts = function createFonts() {
    for (var _len = arguments.length, fonts = new Array(_len), _key = 0; _key < _len; _key++) {
      fonts[_key] = arguments[_key];
    }

    return flatten(fonts.map(function (font) {
      return Object.values(font).reduce(function (acc, _ref) {
        var fontName = _ref.fontName,
            baseUrl = _ref.baseUrl,
            weights = _ref.weights;
        return [].concat(_toConsumableArray(acc), _toConsumableArray(Object.values(weights).reduce(function (acc, _ref2) {
          var family = _ref2.family,
              url = _ref2.url;
          return [].concat(_toConsumableArray(acc), [{
            family: fontName + family,
            url: "".concat(baseUrl, "/").concat(url),
            descriptors: {}
          }]);
        }, [])));
      }, []);
    }));
  };
  /**
   * Xfinity-branded typography definitions for Lightning
   * https://share.goabstract.com/06d0601d-b7d2-48f3-93a2-17cc78bedb5e?mode=build&sha=6d9d06ec3e924eb83ff133826956e1e9a4fc7e36
   */

  var TYPOGRAPHY = {
    display1: {
      fontFace: 'XfinityBrownBold',
      fontSize: 56,
      fontWeight: 700,
      letterSpacing: -0.4,
      lineHeight: 72,
      verticalAlign: 'middle'
    },
    display2: {
      fontFace: 'XfinityBrownBold',
      fontSize: 48,
      fontWeight: 700,
      letterSpacing: -0.4,
      lineHeight: 64,
      verticalAlign: 'middle'
    },
    headline1: {
      fontFace: 'XfinityBrownBold',
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: -0.2,
      lineHeight: 48,
      verticalAlign: 'middle'
    },
    headline2: {
      fontFace: 'XfinityBrownBold',
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: -0.2,
      lineHeight: 40,
      verticalAlign: 'middle'
    },
    headline3: {
      fontFace: 'XfinityBrownBold',
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: -0.2,
      lineHeight: 40,
      verticalAlign: 'middle'
    },
    body1: {
      fontFace: 'XfinityStandardMedium',
      fontSize: 32,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 40,
      verticalAlign: 'middle'
    },
    body2: {
      fontFace: 'XfinityStandardMedium',
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 40,
      verticalAlign: 'middle'
    },
    body3: {
      fontFace: 'XfinityStandardMedium',
      fontSize: 24,
      fontWeight: 200,
      letterSpacing: 0,
      lineHeight: 32,
      verticalAlign: 'middle'
    },
    button1: {
      fontFace: 'XfinityBrownBold',
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: -0.2,
      lineHeight: 40,
      verticalAlign: 'middle'
    },
    button2: {
      fontFace: 'XfinityBrownBold',
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: -0.2,
      lineHeight: 32,
      verticalAlign: 'middle'
    },
    callout1: {
      fontFace: 'XfinityStandardMedium',
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: 2,
      lineHeight: 32,
      verticalAlign: 'middle'
    },
    caption: {
      fontFace: 'XfinityStandardMedium',
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 24,
      verticalAlign: 'middle'
    }
  };

  /**
   * Combines rgb hex string and alpha into argb hexadecimal number
   * @param {string|number} hex - 6 alphanumeric characters between 0-f or argb hexadecimal number
   * @param {number} [alpha] - number between 0-100 (0 is invisible, 100 is opaque)
   */

  function getHexColor(hex) {
    var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    if (!hex) {
      return 0x00;
    }

    if (typeof hex === 'number') {
      hex = hex.toString(16).slice(2);
    }

    hex = hex.replace('#', '');
    var hexAlpha = Math.round(alpha / 100 * 255).toString(16);
    var str = "0x".concat(hexAlpha).concat(hex);
    return Number(str);
  }
  /**
   * Returns valid string of HEX color
   *
   * @param {string} color
   * @param {boolean} fill
   */

  function getValidColor(color) {
    if (/^0x[0-9a-fA-F]{8}/g.test(color)) {
      // User enters a valid 0x00000000 hex code
      return Number(color);
    } else if (/^#[0-9a-fA-F]{6}/g.test(color)) {
      // User enters valid #000000 hex code
      return getHexColor(color.substr(1, 6));
    } else if (typeof color === 'string' && /^[0-9]{8,10}/g.test(color)) {
      return parseInt(color);
    } else if (typeof color === 'number' && /^[0-9]{8,10}/g.test(color.toString())) {
      return color;
    } else if (typeof color === 'string' && color.indexOf('rgba') > -1) {
      return rgba2argb(color);
    } else if (typeof color === 'string' && color.indexOf('rgb') > -1) {
      var rgba = [].concat(_toConsumableArray(color.replace(/rgb\(|\)/g, '').split(',')), ['255']);
      return lng.StageUtils.getArgbNumber(rgba);
    }

    return null;
  }
  /**
   * Xfinity-branded color palette for Lightning
   * https://share.goabstract.com/06d0601d-b7d2-48f3-93a2-17cc78bedb5e?mode=build&sha=6d9d06ec3e924eb83ff133826956e1e9a4fc7e36
   */

  var GREY = {
    0: getHexColor('#FFFFFF'),
    5: getHexColor('#F6F6F9'),
    10: getHexColor('#ECECF2'),
    20: getHexColor('#CECEDA'),
    30: getHexColor('#B1B1BD'),
    40: getHexColor('#8B8B97'),
    50: getHexColor('#62626C'),
    60: getHexColor('#3E3E45'),
    70: getHexColor('#232328'),
    80: getHexColor('#141417'),
    90: getHexColor('#0D0D0F'),
    100: getHexColor('#000000'),
    __isColor: true
  };
  var BLUE = {
    hover: getHexColor('#8BAFF9'),
    default: getHexColor('#4784FF'),
    pressed: getHexColor('#3376FF'),
    indicator: getHexColor('#2970FF'),
    shade: getHexColor('#111A32'),
    __isColor: true
  };
  var GREEN = {
    hover: getHexColor('#78E3BF'),
    default: getHexColor('#0AC284'),
    pressed: getHexColor('#009965'),
    indicator: getHexColor('#008F5E'),
    shade: getHexColor('#0A1F18'),
    __isColor: true
  };
  var YELLOW = {
    hover: getHexColor('#FFD88A'),
    default: getHexColor('#FFC95C'),
    pressed: getHexColor('#FFB829'),
    indicator: getHexColor('#FFAA00'),
    shade: getHexColor('#1F180A'),
    __isColor: true
  };
  var RED = {
    hover: getHexColor('#FF99BA'),
    default: getHexColor('#FF6194'),
    pressed: getHexColor('#FF3878'),
    indicator: getHexColor('#F0004D'),
    shade: getHexColor('#2A120E'),
    __isColor: true
  };
  var PURPLE = {
    base: getHexColor('#6138F5'),
    hover: getHexColor('#BAA8FA'),
    default: getHexColor('#9378F8'),
    pressed: getHexColor('#805FF6'),
    indicator: getHexColor('#704BF7'),
    shade: getHexColor('#1E1236'),
    __isColor: true
  };
  var OPACITY = {
    0: 0,
    1: 16,
    2: 32,
    3: 48,
    4: 64,
    5: 80,
    6: 96
  };
  var PALETTE = {
    getHexColor: getHexColor,
    black: GREY[100],
    white: GREY[0],
    grey: GREY,
    blue: BLUE,
    green: GREEN,
    yellow: YELLOW,
    red: RED,
    purple: PURPLE,
    opacity: OPACITY,
    __isColor: true,
    background: {
      default: GREY[80],
      stroke: 0x00,
      float: 0x00,
      fill: GREY[70],
      focus: GREY[10],
      ghost: getHexColor(GREY[70], 48),
      __isColor: true
    },
    text: {
      light: {
        primary: getHexColor(GREY[0], 95),
        secondary: getHexColor(GREY[0], 80),
        tertiary: getHexColor(GREY[0], 60),
        __isColor: true
      },
      dark: {
        primary: getHexColor(GREY[100], 95),
        secondary: getHexColor(GREY[100], 80),
        tertiary: getHexColor(GREY[100], 60),
        __isColor: true
      },
      focus: getHexColor(GREY[100], 95),
      __isColor: true
    },
    badge: {
      default: getHexColor(GREY[70], 60),
      __isColor: true
    },
    focusRing: {
      primary: getHexColor(GREY[10], 96),
      secondary: getHexColor(GREY[0], 8),
      __isColor: true
    }
  };

  /**
   * Returns a styles object for use by components
   * @param {Object|function} styles - Object or callback that takes theme as an argument, ultimately the returned value
   * @param {Object} theme - theme to be provided to styles
   */
  var createStyles = (function (styles, theme) {
    return typeof styles === 'function' ? styles(theme) : styles;
  });

  function glow(_ref) {
    var w = _ref.w,
        h = _ref.h,
        _ref$color = _ref.color,
        color = _ref$color === void 0 ? 0xffffffff : _ref$color,
        _ref$borderRadius = _ref.borderRadius,
        borderRadius = _ref$borderRadius === void 0 ? CORNER_RADIUS.small : _ref$borderRadius,
        _ref$blur = _ref.blur,
        blur = _ref$blur === void 0 ? spacing(2) : _ref$blur;
    return {
      color: color,
      mount: 0.5,
      x: w / 2,
      y: h / 2 + blur / 2,
      zIndex: 1,
      texture: lng.Tools.getShadowRect(w - spacing(2), h - spacing(2), borderRadius, blur)
    };
  }

  function luminance(_ref2) {
    var w = _ref2.w,
        h = _ref2.h,
        _ref2$blur = _ref2.blur,
        blur = _ref2$blur === void 0 ? 3 : _ref2$blur,
        _ref2$padding = _ref2.padding,
        padding = _ref2$padding === void 0 ? spacing(8) : _ref2$padding,
        _ref2$texture = _ref2.texture,
        texture = _ref2$texture === void 0 ? null : _ref2$texture,
        _ref2$radius = _ref2.radius,
        radius = _ref2$radius === void 0 ? 0 : _ref2$radius;
    var shader = {};

    if (radius) {
      shader = {
        type: lng.shaders.RoundedRectangle,
        radius: radius
      };
    }

    return {
      type: lng.components.FastBlurComponent,
      x: w / 2,
      y: h / 2 + spacing(3),
      mount: 0.5,
      w: w,
      h: h,
      amount: blur,
      padding: padding,
      content: {
        Image: {
          w: w,
          h: h,
          texture: texture,
          shader: shader
        }
      },
      zIndex: 1
    };
  }

  function shadow(_ref3) {
    var w = _ref3.w,
        h = _ref3.h,
        _ref3$color = _ref3.color,
        color = _ref3$color === void 0 ? getHexColor(PALETTE.grey[100], 60) : _ref3$color,
        _ref3$borderRadius = _ref3.borderRadius,
        borderRadius = _ref3$borderRadius === void 0 ? CORNER_RADIUS.small : _ref3$borderRadius,
        _ref3$blur = _ref3.blur,
        blur = _ref3$blur === void 0 ? spacing(3) : _ref3$blur;
    return {
      color: color,
      mount: 0.5,
      x: w / 2,
      y: h / 2 + spacing(3),
      zIndex: 1,
      texture: lng.Tools.getShadowRect(w - spacing(2), h - spacing(2), borderRadius, blur)
    };
  }

  var materials = {
    glow: glow,
    luminance: luminance,
    shadow: shadow
  };

  function spacing(multiplier) {
    return 8 * multiplier;
  }
  /**
   * Generates a scale percentage that will increase the item by 40 pixels
   *
   * @param { number } w
   * @param { number } h
   * @returns
   */


  function getFocusScale() {
    var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var size = Math.max(w, h);
    var multiplier = 5;

    switch (true) {
      case size >= 260:
        multiplier = 5;
        break;

      case size >= 185:
        multiplier = 4;
        break;

      case size >= 140:
        multiplier = 3;
        break;

      case size >= 110:
        multiplier = 2;
        break;

      default:
        multiplier = 2;
        break;
    }

    return (size + spacing(multiplier)) / size;
  }
  var gradientColor = PALETTE.grey[5];
  var gradientAnimation = {
    duration: 0.6,
    actions: [{
      p: 'colorUl',
      v: {
        0: getHexColor(gradientColor, 72),
        1: getHexColor(gradientColor, 56)
      }
    }, {
      p: 'colorUr',
      v: {
        0: getHexColor(gradientColor, 24),
        1: getHexColor(gradientColor, 16)
      }
    }, {
      p: 'colorBr',
      v: {
        0: 0x00,
        1: getHexColor(gradientColor, 0)
      }
    }, {
      p: 'colorBl',
      v: {
        0: getHexColor(gradientColor, 24),
        1: getHexColor(gradientColor, 16)
      }
    }]
  };
  var SIZES = {
    icon: {
      small: 32,
      medium: 40,
      large: 48
    }
  };
  var getXfinityTheme = function getXfinityTheme() {
    return {
      getFocusScale: getFocusScale,
      spacing: spacing,
      materials: materials,
      palette: PALETTE,
      sizes: SIZES,
      typography: TYPOGRAPHY,
      border: {
        focused: {
          width: 2
        },
        radius: CORNER_RADIUS
      },
      animations: {
        gradient: gradientAnimation
      }
    };
  };

  /**
   * Styles
   *
   * Contains global style information to easily maintain consistency throughout components.
   */
  /**
   * Amount of rounding to add to corners based on the item's size
   */

  var CORNER_RADIUS = {
    none: 0,
    xsmall: 4,
    small: 8,
    medium: 16,
    large: 24
  };

  // Don't wrap patterns with word boundaries (\b) or set any RegExp flags.
  // Each pattern will be wrapped with \b and use the global (g) flag when created as a capture group in combined pattern.
  var defaultAbbreviations = [{
    pattern: 'TV-14',
    replacer: 'Rated TV-14'
  }, {
    pattern: 'CC',
    replacer: 'Closed Captions available'
  }, {
    pattern: 'HD',
    replacer: 'High Definition available'
  }, {
    pattern: /ENG(?!\+)/,
    replacer: 'English Available'
  }, {
    pattern: /ENG\+ES/,
    replacer: 'Available in English and Spanish'
  }, {
    pattern: 'AD',
    replacer: 'Audio Description available'
  }, {
    pattern: 'RT',
    replacer: 'Rotten Tomatoes'
  }, {
    pattern: /(S)+(\d+)+(E)+(\d+)+/,
    replacer: function replacer(match, p1, p2, p3, p4) {
      return "Season ".concat(p2, " Episode ").concat(p4);
    }
  }];
  generateAbbrevConfig(defaultAbbreviations);

  function wrapWithBoundary(str) {
    return "\\b".concat(str, "\\b");
  }

  function getNumberOfCaptureGroups(regExp) {
    return new RegExp(regExp.toString() + '|').exec('').length - 1;
  }
  /**
   * @typedef {Object} AbbreviationConfig
   * @property {RegExp} abbreviationsPattern - combined RegExp pattern of all abbreviations separated into capture groups
   * @property {Object} stringPatternMap - object to look up replacers values based on string matches (uses matched string to look up)
   * @property {Object} regExpPatternMap - object to look up replacers values based on RegExp matches (uses index of matched capture group to look up)
   */

  /**
   * Generates abbreviation config object to be passed to withAnnouncer for abbrevation translation
   * @param {Object[]} abbreviations - array of custom abbreviation objects to generate config off of
   * @param {String|RegExp} abbreviations[].pattern - pattern to match abbreviation
   * @param {String|Function} abbreviations[].replacer - string or RegEx replacer function to replace matched abbreviation with
   * @param {boolean} extendDefault - if true, extend the default abbreviations config with custom abbreviations
   * @returns {AbbreviationConfig} - configuration that may be passed to withAnnouncer as abbreviations in options parameter
   */


  function generateAbbrevConfig() {
    var abbreviations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAbbreviations;
    var extendDefault = arguments.length > 1 ? arguments[1] : undefined;
    var abbrev = extendDefault ? [].concat(defaultAbbreviations, _toConsumableArray(abbreviations)) : abbreviations;
    var stringPatternMap = {}; // map of exact strings to the associated replacer

    var regExpPatternMap = {}; // map of RegExp patterns to the associated replacer

    var abbreviationsPattern = ''; // string of final RegExp pattern with each pattern as a capture group

    var patternGroupOffset = 0; // incremented for each capture group found in RegExp patterns passed in
    // If the pattern is a RegExp pattern: key RegExp pattern with its index in passed in abbreviations array parameter.
    // The capture group for this pattern will be at this position (idx) in the combined RegExp pattern.
    // When a string is matched, the index of the matched capture group can be used to look up the correct replacer.
    //
    // Else (the pattern is a string): it can be keyed by it's pattern.
    // When a string is matched, the string matcher can be used to look up the correct replacer.

    abbrev.forEach(function (_ref, idx) {
      var pattern = _ref.pattern,
          replacer = _ref.replacer;
      var stringPattern;

      if (pattern instanceof RegExp) {
        var patternMapIdx = idx + patternGroupOffset;
        regExpPatternMap[patternMapIdx] = {
          pattern: pattern,
          replacer: replacer
        };
        stringPattern = wrapWithBoundary(pattern.source);
        patternGroupOffset += getNumberOfCaptureGroups(pattern);
      } else {
        stringPatternMap[pattern] = {
          replacer: replacer
        };
        stringPattern = wrapWithBoundary(pattern);
      } // create single string for final RegExp - each pattern will be a capture group


      abbreviationsPattern = abbreviationsPattern === '' ? "(".concat(stringPattern, ")") : "".concat(abbreviationsPattern, "|(").concat(stringPattern, ")");
    });
    abbreviationsPattern = new RegExp(abbreviationsPattern, 'g');
    return {
      abbreviationsPattern: abbreviationsPattern,
      stringPatternMap: stringPatternMap,
      regExpPatternMap: regExpPatternMap
    };
  }

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing. The function also has a property 'clear' 
   * that is a function which will clear the timer to prevent previously scheduled executions. 
   *
   * @source underscore.js
   * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
   * @param {Function} function to wrap
   * @param {Number} timeout in ms (`100`)
   * @param {Boolean} whether to execute at the beginning (`false`)
   * @api public
   */

  function debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;

    function later() {
      var last = Date.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;

        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    }

    var debounced = function debounced() {
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);

      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };

    debounced.clear = function () {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };

    debounced.flush = function () {
      if (timeout) {
        result = func.apply(context, args);
        context = args = null;
        clearTimeout(timeout);
        timeout = null;
      }
    };

    return debounced;
  }

  debounce.debounce = debounce;
  var debounce_1 = debounce;

  function withHandleKey(Base) {
    return /*#__PURE__*/function (_Base) {
      _inherits(_class, _Base);

      var _super = _createSuper(_class);

      function _class() {
        _classCallCheck(this, _class);

        return _super.apply(this, arguments);
      }

      _createClass(_class, [{
        key: "_handleKey",
        value: function _handleKey(keyEvent) {
          return this._processEvent(keyEvent);
        }
      }, {
        key: "_handleKeyRelease",
        value: function _handleKeyRelease(keyEvent) {
          return this._processEvent(keyEvent, 'Release');
        }
      }, {
        key: "_processEvent",
        value: function _processEvent(keyEvent) {
          var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var keyMap = this.stage.application.__keymap || {};
          var key = keyMap[keyEvent.keyCode];

          if (!key) {
            key = keyEvent.key;
          }

          if (key && typeof this["on".concat(key).concat(suffix)] === 'function') {
            return this["on".concat(key).concat(suffix)].call(this, this, keyEvent) || false;
          }

          this.fireAncestors("$on".concat(key).concat(suffix), this, keyEvent);
          return false;
        }
      }], [{
        key: "name",
        get: function get() {
          return Base.name;
        }
      }]);

      return _class;
    }(Base);
  }

  function withLayout(Base) {
    return /*#__PURE__*/function (_Base) {
      _inherits(_class, _Base);

      var _super = _createSuper(_class);

      function _class() {
        _classCallCheck(this, _class);

        return _super.apply(this, arguments);
      }

      _createClass(_class, [{
        key: "itemLayout",
        get: function get() {
          return this._itemLayout;
        },
        set: function set(itemLayout) {
          if (!stringifyCompare(this._itemLayout, itemLayout)) {
            this._itemLayout = itemLayout;

            var _getDimensions = getDimensions(itemLayout),
                w = _getDimensions.w,
                h = _getDimensions.h; // If there is not enough information passed in args to calculate item size
            // Do not try to set h/w this will cause issues sizing the focus ring


            if (h || w) {
              var width = SCREEN.w,
                  height = SCREEN.h;
              this.h = h || w * (height / width);
              this.w = w || h * (width / height);
              _get(_getPrototypeOf(_class.prototype), "_update", this) && _get(_getPrototypeOf(_class.prototype), "_update", this).call(this);
            }
          }
        }
      }]);

      return _class;
    }(Base);
  }

  lng.uiTheme = lng.uiTheme || getXfinityTheme();
  function withStyles(Base, styles, theme) {
    var _theme = theme || Base.theme || lng.uiTheme;

    var _styles = Base.styles ? clone(Base.styles, createStyles(styles, _theme)) : createStyles(styles, _theme);

    return /*#__PURE__*/function (_Base) {
      _inherits(_class, _Base);

      var _super = _createSuper(_class);

      function _class() {
        _classCallCheck(this, _class);

        return _super.apply(this, arguments);
      }

      _createClass(_class, [{
        key: "styles",
        get: function get() {
          return _styles;
        }
      }], [{
        key: "name",
        get: function get() {
          return Base.name;
        }
      }, {
        key: "styles",
        get: function get() {
          return _styles;
        }
      }]);

      return _class;
    }(Base);
  }

  function getPropertyDescriptor$1(path) {
    return {
      get: function get() {
        return this.tag(path);
      },
      configurable: true,
      enumerable: true
    };
  }

  function withTags(Base) {
    return /*#__PURE__*/function (_Base) {
      _inherits(_class, _Base);

      var _super = _createSuper(_class);

      function _class() {
        _classCallCheck(this, _class);

        return _super.apply(this, arguments);
      }

      _createClass(_class, [{
        key: "_construct",
        value: function _construct() {
          var _this = this;

          var tags = this.constructor.tags || [];
          tags.forEach(function (tag) {
            if (typeof tag === 'object') {
              var name = tag.name,
                  path = tag.path;
            } else {
              var name = tag; // eslint-disable-line no-redeclare

              var path = tag; // eslint-disable-line no-redeclare
            }

            var key = '_' + name;
            var descriptor = getPropertyDescriptor$1(path);
            Object.defineProperty(Object.getPrototypeOf(_this), key, descriptor);
          });
          _get(_getPrototypeOf(_class.prototype), "_construct", this) && _get(_getPrototypeOf(_class.prototype), "_construct", this).call(this);
        }
      }], [{
        key: "name",
        get: function get() {
          return Base.name;
        }
      }]);

      return _class;
    }(Base);
  }

  function capital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function getPropertyDescriptor(name, key) {
    return {
      get: function get() {
        var customGetter = this["_get".concat(capital(name))];

        if (customGetter && typeof customGetter === 'function') {
          var value = customGetter.call(this, this[key]);
          this[key] = value;
        }

        return this[key];
      },
      set: function set(value) {
        var oldValue = this[key];

        if (value !== oldValue) {
          var changeHandler = this["_set".concat(capital(name))];

          if (changeHandler && typeof changeHandler === 'function') {
            value = changeHandler.call(this, value);
          }

          this[key] = value;

          this._requestUpdateDebounce();
        }
      },
      configurable: true,
      enumerable: true
    };
  }

  function withUpdates(Base) {
    return /*#__PURE__*/function (_Base) {
      _inherits(_class, _Base);

      var _super = _createSuper(_class);

      function _class() {
        _classCallCheck(this, _class);

        return _super.apply(this, arguments);
      }

      _createClass(_class, [{
        key: "_construct",
        value: function _construct() {
          var _this = this;

          var props = this.constructor.properties || [];
          props.forEach(function (name) {
            var key = '_' + name;
            var descriptor = getPropertyDescriptor(name, key);

            if (descriptor !== undefined) {
              Object.defineProperty(Object.getPrototypeOf(_this), name, descriptor);
            }
          });
          this._whenEnabled = new Promise(function (resolve) {
            _this._whenEnabledResolver = resolve;
          });
          this._requestUpdateDebounce = debounce_1.debounce(this._requestUpdate.bind(this), 0);
          _get(_getPrototypeOf(_class.prototype), "_construct", this) && _get(_getPrototypeOf(_class.prototype), "_construct", this).call(this);
        }
      }, {
        key: "_firstEnable",
        value: function _firstEnable() {
          this._readyForUpdates = true;

          this._whenEnabledResolver();

          this._requestUpdateDebounce.clear();

          this._update();

          _get(_getPrototypeOf(_class.prototype), "_firstEnable", this) && _get(_getPrototypeOf(_class.prototype), "_firstEnable", this).call(this);
        }
      }, {
        key: "_detach",
        value: function _detach() {
          _get(_getPrototypeOf(_class.prototype), "_detach", this).call(this);

          this._requestUpdateDebounce.clear();
        }
      }, {
        key: "_requestUpdate",
        value: function _requestUpdate() {
          if (this._readyForUpdates) {
            this._update();
          }
        }
      }], [{
        key: "name",
        get: function get() {
          return Base.name;
        }
      }]);

      return _class;
    }(Base);
  }

  var baseStyles$1 = function baseStyles(theme) {
    return {
      getUnfocusScale: function getUnfocusScale() {
        return 1;
      },
      getFocusScale: theme.getFocusScale // withVibrant: true

    };
  };

  var Base = /*#__PURE__*/function (_lng$Component) {
    _inherits(Base, _lng$Component);

    var _super = _createSuper(Base);

    function Base() {
      _classCallCheck(this, Base);

      return _super.apply(this, arguments);
    }

    _createClass(Base, [{
      key: "_construct",
      value: function _construct() {
        var _this = this;

        this._whenEnabled = new Promise(function (resolve) {
          return _this._whenEnabledResolver = resolve;
        });

        this._getFocusScale = this.styles.getFocusScale || function () {};

        this._getUnfocusScale = this.styles.getUnfocusScale || function () {};
      }
    }, {
      key: "_firstEnable",
      value: function _firstEnable() {
        this._whenEnabledResolver();
      }
    }, {
      key: "_init",
      value: function _init() {
        this._requestUpdateDebounce();
      }
    }, {
      key: "_update",
      value: function _update() {}
    }, {
      key: "_focus",
      value: function _focus() {
        if (this._smooth === undefined) this._smooth = true;

        this._requestUpdateDebounce();
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this._requestUpdateDebounce();
      } // keep announce methods out of the update lifecycle (do not put in properties array)
      // announce methods does not re-render component

    }, {
      key: "announce",
      get: function get() {
        return this._announce;
      },
      set: function set(announce) {
        this._announce = announce;
      }
    }]);

    return Base;
  }(lng.Component);

  function withMixins(baseComponent) {
    // if (baseComponent.styles.withVibrant) {
    //   baseComponent = withVibrant(baseComponent);
    // }
    return withLayout(withUpdates(withTags(withHandleKey(baseComponent))));
  }

  var Base$1 = withMixins(withStyles(Base, baseStyles$1));

  var styles$8 = (function (theme) {
    return {
      typography: theme.typography,
      maxLinesSuffix: '...'
    };
  });

  var TextBox = /*#__PURE__*/function (_withStyles) {
    _inherits(TextBox, _withStyles);

    var _super = _createSuper(TextBox);

    function TextBox() {
      _classCallCheck(this, TextBox);

      return _super.apply(this, arguments);
    }

    _createClass(TextBox, [{
      key: "_init",
      value: function _init() {
        this.on('txLoaded', this._setDimensions.bind(this));
      }
    }, {
      key: "_setDimensions",
      value: function _setDimensions() {
        var width = this.texture.getRenderWidth();
        var height = this.texture.getRenderHeight();

        if (width && height) {
          this.h = height;
          this.w = width; // Position updates can produce flash of poorly positioned content, hide the element until measurements are made.

          if (1 > this.alpha) {
            this.patch({
              alpha: 1
            });
          }

          this._notifyAncestors();
        }
      }
    }, {
      key: "_setContent",
      value: function _setContent(content) {
        if ('string' !== typeof content) {
          return '';
        }

        return content;
      }
    }, {
      key: "_setStyle",
      value: function _setStyle(style) {
        var styleProps = Object.keys(this.styles.typography);

        switch (typeof style) {
          case 'string':
            if (-1 === styleProps.indexOf(style)) {
              return this.styles.typography.body1;
            }

            return this.styles.typography[style];

          case 'object':
            return style || this.styles.typography.body1;
          // Allow overrides and default if is null

          default:
            return this.styles.typography.body1;
        }
      }
    }, {
      key: "_setTextColor",
      value: function _setTextColor(textColor) {
        var color = getValidColor(textColor);

        if (null === color) {
          return undefined;
        }

        return color;
      }
    }, {
      key: "_setTextAlign",
      value: function _setTextAlign(textAlign) {
        var options = ['left', 'center', 'right'];

        if ('string' !== typeof textAlign || -1 === options.indexOf(textAlign)) {
          return undefined;
        }

        return textAlign;
      }
    }, {
      key: "_setVerticalAlign",
      value: function _setVerticalAlign(verticalAlign) {
        var options = ['top', 'middle', 'bottom'];

        if ('string' !== typeof verticalAlign || -1 === options.indexOf(verticalAlign)) {
          return undefined;
        }

        return verticalAlign;
      }
    }, {
      key: "_setMaxLines",
      value: function _setMaxLines(maxLines) {
        if ('number' !== typeof maxLines || 0 > maxLines) {
          return undefined;
        }

        return maxLines;
      }
    }, {
      key: "_setWordWrap",
      value: function _setWordWrap(wordWrap) {
        if ('boolean' !== typeof wordWrap) {
          return undefined;
        }

        return wordWrap;
      }
    }, {
      key: "_setWordWrapWidth",
      value: function _setWordWrapWidth(wordWrapWidth) {
        if ('number' !== typeof wordWrapWidth || 0 > wordWrapWidth) {
          return undefined;
        }

        return wordWrapWidth;
      }
    }, {
      key: "_setMaxLinesSuffix",
      value: function _setMaxLinesSuffix(maxLinesSuffix) {
        if ('string' !== typeof maxLinesSuffix) {
          return this.styles.maxLinesSuffix;
        }

        return maxLinesSuffix;
      }
    }, {
      key: "title",
      get: function get() {
        return this._content;
      }
    }, {
      key: "_notifyAncestors",
      value: function _notifyAncestors() {
        this.fireAncestors('$itemChanged');
        this.signal('textBoxChanged', {
          w: this.w,
          h: this.h
        });
      }
    }, {
      key: "_update",
      value: function _update() {
        var _this = this;

        var fontStyle = _objectSpread2({}, this._style || this.styles.typography.body1);

        this.constructor.properties.forEach(function (prop) {
          if ('undefined' !== typeof _this["_".concat(prop)]) {
            var key = 'content' === prop ? 'text' : prop;
            fontStyle[key] = _this["_".concat(prop)];
          }
        });
        this.patch({
          text: fontStyle
        });
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || this.content;
      },
      set: function set(announce) {
        _set(_getPrototypeOf(TextBox.prototype), "_announce", announce, this, true);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          alpha: 0.001,
          text: {}
        };
      }
    }, {
      key: "tags",
      get: function get() {
        return ['TextBox'];
      }
    }, {
      key: "properties",
      get: function get() {
        return ['content', 'style', 'textColor', 'textAlign', 'verticalAlign', 'wordWrap', 'maxLines', 'wordWrapWidth', 'maxLinesSuffix'];
      }
    }]);

    return TextBox;
  }(withStyles(Base$1, styles$8));

  var Icon = /*#__PURE__*/function (_Base) {
    _inherits(Icon, _Base);

    var _super = _createSuper(Icon);

    function Icon() {
      _classCallCheck(this, Icon);

      return _super.apply(this, arguments);
    }

    _createClass(Icon, [{
      key: "_init",
      value: function _init() {
        this.on('txError', this._handleTxtError.bind(this));
      }
    }, {
      key: "_detach",
      value: function _detach() {
        this.off('txError', this._handleTxtError.bind(this));
      } // eslint-disable-next-line no-unused-vars

    }, {
      key: "_handleTxtError",
      value: function _handleTxtError(error) {
        this._icon = null;
        this.texture = null;
      }
    }, {
      key: "_update",
      value: function _update() {
        if (!this._icon) {
          this.texture = null;
          return;
        }

        var icon = this.icon,
            w = this.w,
            h = this.h;
        var template = getIconTemplate(icon, w, h);
        this.patch(template);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          color: 0xffffffff,
          w: 0,
          h: 0
        };
      }
    }, {
      key: "properties",
      get: function get() {
        return ['icon'];
      }
    }]);

    return Icon;
  }(Base$1);

  var _map = [/^<svg.*<\/svg>$/, /\.svg$/, /\.(a?png|bmp|gif|ico|cur|jpe?g|pjp(eg)?|jfif|tiff?|webp)$/].map(function (regex) {
    return RegExp.prototype.test.bind(regex);
  }),
      _map2 = _slicedToArray(_map, 3),
      isSvgTag = _map2[0],
      isSvgURI = _map2[1],
      isImageURI = _map2[2];

  function getIconTemplate(icon, w, h) {
    var template = {
      w: w,
      h: h
    };

    switch (true) {
      case isSvgTag(icon):
        template.texture = lng.Tools.getSvgTexture("data:image/svg+xml,".concat(encodeURIComponent(icon)), w, h);
        break;

      case isSvgURI(icon):
        template.texture = lng.Tools.getSvgTexture(icon, w, h);
        break;

      case isImageURI(icon):
        template.src = icon;
        break;

      default:
        template.src = icon;
        break;
    }

    return template;
  }

  var styles$7 = (function (theme) {
    return {
      padding: theme.spacing(1),
      background: {
        h: theme.spacing(4),
        rect: true,
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: theme.border.radius.xsmall
        },
        color: theme.palette.badge.default
      },
      textPosition: {
        x: theme.spacing(1),
        y: 1
      },
      textProperties: _objectSpread2(_objectSpread2({}, theme.typography.caption), {}, {
        textColor: theme.palette.text.light.primary,
        textAlign: 'center'
      }),
      iconAlign: 'left'
    };
  });

  var Badge = /*#__PURE__*/function (_withStyles) {
    _inherits(Badge, _withStyles);

    var _super = _createSuper(Badge);

    function Badge() {
      _classCallCheck(this, Badge);

      return _super.apply(this, arguments);
    }

    _createClass(Badge, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(Badge.prototype), "_construct", this).call(this);

        this._textPosition = this.styles.textPosition;
        this._textProperties = this.styles.textProperties;
        this._background = this.styles.background;
        this._padding = this.styles.padding;
        this._iconH = this._background.h - this._padding * 2;
        this.iconAlign = this.styles.iconAlign;
      }
    }, {
      key: "_init",
      value: function _init() {
        this._update();
      }
    }, {
      key: "_update",
      value: function _update() {
        this.patch(_objectSpread2(_objectSpread2({}, this._background), {}, {
          alpha: this.title || this._Icon ? 1 : 0
        }));

        this._updateText();

        this._updateIcon();
      }
    }, {
      key: "_updateText",
      value: function _updateText() {
        var _this = this;

        this._BadgeText.on('txLoaded', function () {
          _this._BadgeText.removeAllListeners();

          _this._calculatePadding();
        });

        this._BadgeText.patch(_objectSpread2(_objectSpread2({}, this.textPosition), {}, {
          text: _objectSpread2(_objectSpread2({}, this.textProperties), {}, {
            text: this.title || ''
          })
        }));
      }
    }, {
      key: "_updateIcon",
      value: function _updateIcon() {
        var _this2 = this;

        this._Icon.on('txLoaded', function () {
          _this2._Icon.removeAllListeners();

          _this2._calculatePadding();
        });

        this._Icon.patch({
          icon: this.icon,
          w: this.iconWidth,
          h: this.iconHeight
        });
      }
    }, {
      key: "_calculateIconRatio",
      value: function _calculateIconRatio() {
        if (this.iconWidth && this.iconHeight) {
          // use provided dimensions - required for SVGs
          return this.iconWidth / this.iconHeight;
        } else {
          // fallback to rendered dimensions - PNGs only
          return this._Icon.finalW / this._Icon.finalH;
        }
      }
    }, {
      key: "_calculatePadding",
      value: function _calculatePadding() {
        this.h = this._background.h || this._BadgeText.renderHeight + this._padding * 2;

        var iconRatio = this._calculateIconRatio(); // use iconRatio here to prevent a bug causing a PNG's ratio to be calculated incorrectly


        if (iconRatio) {
          // set icon dimensions
          this._Icon.h = this._iconH;
          this._Icon.w = this._iconH * iconRatio;
          this._Icon.y = (this.h - this._Icon.h) / 2; // set icon and text position

          if (this.iconAlign === 'left') {
            this._Icon.x = this.padding;
            this._BadgeText.x = this._Icon.x + this._Icon.w;
          } else if (this.iconAlign === 'right') {
            this._BadgeText.x = this.padding;
            this._Icon.x = this._BadgeText.x + this._BadgeText.renderWidth;
          }
        }

        this.w = this._BadgeText.renderWidth + this.padding * 2 + (this._Icon.w || 0);
        this.fireAncestors('$loadedBadge', this);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          BadgeText: {},
          Icon: {
            type: Icon
          }
        };
      }
    }, {
      key: "properties",
      get: function get() {
        return ['background', 'icon', 'iconHeight', 'iconWidth', 'padding', 'textPosition', 'textProperties', 'title'];
      }
    }, {
      key: "tags",
      get: function get() {
        return ['BadgeText', 'Icon'];
      }
    }]);

    return Badge;
  }(withStyles(Base$1, styles$7));

  var styles$6 = (function (theme) {
    return {
      color: theme.palette.focusRing.primary,
      secondaryColor: theme.palette.focusRing.secondary,
      radius: theme.border.radius.medium,
      spacing: theme.spacing(1.5)
    };
  });

  var FocusRing = /*#__PURE__*/function (_withStyles) {
    _inherits(FocusRing, _withStyles);

    var _super = _createSuper(FocusRing);

    function FocusRing() {
      _classCallCheck(this, FocusRing);

      return _super.apply(this, arguments);
    }

    _createClass(FocusRing, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(FocusRing.prototype), "_construct", this).call(this);

        this._color = getValidColor(this.styles.color);
        this._middleColor = getHexColor(getValidColor(this.styles.color), 54);
        this._secondaryColor = this.styles.secondaryColor;
        this._radius = this.styles.radius;
        this._spacing = this.styles.spacing;
      }
    }, {
      key: "_inactive",
      value: function _inactive() {
        this.stopAnimation();
      }
    }, {
      key: "_update",
      value: function _update() {
        var _this$getColors = this.getColors(),
            transition = _this$getColors.transition,
            primary = _this$getColors.primary,
            secondary = _this$getColors.secondary;

        this.patch({
          Ring: {
            mount: 0.5,
            x: this.w / 2,
            y: this.h / 2,
            smooth: {
              alpha: 1
            },
            texture: lng.Tools.getRoundRect(this.w + this.spacing, this.h + this.spacing, this.radius, 4, false, false)
          },
          color: primary,
          colorUl: primary,
          colorBl: transition,
          colorUr: transition,
          colorBr: secondary
        });
        this.setAnimation();
      }
    }, {
      key: "getColors",
      value: function getColors() {
        return {
          primary: this.color,
          transition: this._middleColor,
          secondary: this.secondaryColor
        };
      }
    }, {
      key: "setAnimation",
      value: function setAnimation() {
        var isPlaying = !!(this._focusRingAnimation && this._focusRingAnimation.isPlaying());

        var _this$getColors2 = this.getColors(),
            transition = _this$getColors2.transition,
            primary = _this$getColors2.primary,
            secondary = _this$getColors2.secondary;

        if (isPlaying) {
          this.stopAnimation();
        }

        this._focusRingAnimation = this._Ring.animation({
          repeat: -1,
          duration: 5,
          actions: [{
            p: 'colorUl',
            v: {
              0: primary,
              0.25: transition,
              0.5: secondary,
              0.75: transition,
              1: primary
            }
          }, {
            p: 'colorUr',
            v: {
              0: transition,
              0.25: primary,
              0.5: transition,
              0.75: secondary,
              1: transition
            }
          }, {
            p: 'colorBl',
            v: {
              0: transition,
              0.25: secondary,
              0.5: transition,
              0.75: primary,
              1: transition
            }
          }, {
            p: 'colorBr',
            v: {
              0: secondary,
              0.25: transition,
              0.5: primary,
              0.75: transition,
              1: secondary
            }
          }]
        });

        if (isPlaying) {
          this.startAnimation();
        }
      }
    }, {
      key: "startAnimation",
      value: function startAnimation() {
        if (this.shouldAnimate !== undefined) {
          if (this._focusRingAnimation && !this._focusRingAnimation.isPlaying() && this.shouldAnimate) {
            this._focusRingAnimation.start();
          }
        } else {
          if (this._focusRingAnimation && !this._focusRingAnimation.isPlaying()) {
            this._focusRingAnimation.start();
          }
        }
      }
    }, {
      key: "stopAnimation",
      value: function stopAnimation() {
        if (this.shouldAnimate !== undefined) {
          if (this._focusRingAnimation && this._focusRingAnimation.isPlaying() && !this._shouldAnimate) {
            this._focusRingAnimation.stop();
          }
        } else {
          if (this._focusRingAnimation && this._focusRingAnimation.isPlaying()) {
            this._focusRingAnimation.stop();
          }
        }
      }
    }, {
      key: "_setColor",
      value: function _setColor(color) {
        if (this._color !== color) {
          var validColor = getValidColor(color);

          if (validColor) {
            this._middleColor = getHexColor(getValidColor(validColor), 54);
            return validColor;
          }
        }

        return this._color;
      }
    }, {
      key: "_setSecondaryColor",
      value: function _setSecondaryColor(color) {
        if (this._secondaryColor !== color) {
          var validColor = getValidColor(color);
          return validColor;
        }

        return this._secondaryColor;
      }
    }], [{
      key: "properties",
      get: function get() {
        return ['color', 'secondaryColor', 'radius', 'spacing', 'shouldAnimate'];
      }
    }, {
      key: "tags",
      get: function get() {
        return ['Ring'];
      }
    }]);

    return FocusRing;
  }(withStyles(Base$1, styles$6));

  var blackBackground = 'data:image/jpg;base64,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';

  var styles$5 = function styles(theme) {
    return {
      radius: theme.border.radius.small,
      gradientColor: theme.palette.background.default,
      gradientTop: 'rgba(0,0,0,0)'
    };
  };

  var Gradient = /*#__PURE__*/function (_withStyles) {
    _inherits(Gradient, _withStyles);

    var _super = _createSuper(Gradient);

    function Gradient() {
      _classCallCheck(this, Gradient);

      return _super.apply(this, arguments);
    }

    _createClass(Gradient, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(Gradient.prototype), "_construct", this).call(this);

        this._radius = this.styles.radius;
        this._gradientColor = getValidColor(this.styles.gradientColor);
        this._gradientTop = getValidColor(this.styles.gradientTop);
      }
    }, {
      key: "_update",
      value: function _update() {
        if (this.gradientColor) {
          this.patch({
            rect: true,
            colorTop: this.gradientTop,
            colorBottom: this.gradientColor,
            texture: lng.Tools.getRoundRect(this.w, this.h, this.radius)
          });
        }
      }
    }, {
      key: "_setGradientColor",
      value: function _setGradientColor(color) {
        return getValidColor(color);
      }
    }, {
      key: "_setGradientTop",
      value: function _setGradientTop(color) {
        return getValidColor(color);
      }
    }], [{
      key: "properties",
      get: function get() {
        return ['radius', 'gradientColor', 'gradientTop', 'radius'];
      }
    }]);

    return Gradient;
  }(withStyles(Base$1, styles$5));

  var styles$4 = function styles(theme) {
    return {
      shouldAnimate: true,
      radius: theme.border.radius.medium,
      shadow: theme.materials.shadow,
      blur: 0,
      src: blackBackground,
      focusringType: FocusRing,
      focusring: function focusring(_ref) {
        var w = _ref.w,
            h = _ref.h,
            radius = _ref.radius,
            color = _ref.color;
        return {
          w: w,
          h: h,
          radius: radius + 2,
          color: color,
          size: theme.spacing(0.5),
          zIndex: 1
        };
      },
      unfocused: {
        focusring: {
          alpha: 0
        },
        shadow: {
          alpha: 0
        }
      },
      focused: {
        focusring: {
          alpha: 1
        },
        shadow: {
          alpha: 1
        }
      }
    };
  };

  var Tile = /*#__PURE__*/function (_Base) {
    _inherits(Tile, _Base);

    var _super = _createSuper(Tile);

    function Tile() {
      _classCallCheck(this, Tile);

      return _super.apply(this, arguments);
    }

    _createClass(Tile, [{
      key: "_construct",
      value: function _construct() {
        this._radius = this.styles.radius;
        this._shouldAnimate = this.styles.shouldAnimate;
        this._src = this._fallbackSrc = this.styles.src;
        this._blur = this.styles.blur;
        this._createShadow = this.styles.shadow;
        this._createFocusRing = this.styles.focusring;
        this._focusRingColor = this.styles.focusRingColor;
        this._focusRingType = this.styles.focusringType;
        this._focusedStyle = this.styles.focused;
        this._unfocusedStyle = this.styles.unfocused;
        _get(_getPrototypeOf(Tile.prototype), "_construct", this) && _get(_getPrototypeOf(Tile.prototype), "_construct", this).call(this);
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this = this;

        this._Image.on('txError', function () {
          _this.src = _this.src !== _this.fallbackSrc ? _this.fallbackSrc : null;

          if (_this.imgRadius === 0 && _this.radius) {
            _this.imgRadius = _this.radius;
          }

          _this._update();
        });

        _get(_getPrototypeOf(Tile.prototype), "_init", this).call(this);
      }
    }, {
      key: "_update",
      value: function _update() {
        var _this2 = this;

        this._whenEnabled.then(function () {
          _this2._Item.w = _this2.w;
          _this2._Item.h = _this2.h;

          _this2._updateImage();

          _this2._updateFocusImage();

          _this2._updateBlur();

          _this2._updateRadius();

          _this2._updateGradient();

          _this2._updateDropShadow();

          _this2._updateFocusRing();

          _this2._updateScale();
        });
      }
    }, {
      key: "_updateImage",
      value: function _updateImage() {
        this._Image.patch({
          rtt: true,
          zIndex: 2,
          w: this.w,
          h: this.h,
          texture: {
            type: lng.textures.ImageTexture,
            src: this._src,
            resizeMode: {
              type: 'cover',
              w: this.w,
              h: this.h
            }
          }
        });
      }
    }, {
      key: "_updateFocusImage",
      value: function _updateFocusImage() {
        var _this3 = this;

        if (this._focusSrc && (this.hasFocus() || this._FocusImage)) {
          if (!this._FocusImage) {
            this._Item.patch({
              FocusImage: {
                alpha: 0.001,
                firstLoad: true,
                rtt: true,
                zIndex: 2,
                w: this.w,
                h: this.h,
                texture: {
                  type: lng.textures.ImageTexture,
                  src: this._focusSrc,
                  resizeMode: {
                    type: 'cover',
                    w: this.w,
                    h: this.h
                  }
                }
              }
            });

            this._FocusImage.on('txLoaded', function () {
              _this3._FocusImage.off('txLoaded');

              _this3._FocusImage.firstLoad = false;

              _this3._updateFocusImageAlpha();
            });
          } else if (!this._FocusImage.firstLoad) {
            this._updateFocusImageAlpha();
          }
        }
      }
    }, {
      key: "_updateFocusImageAlpha",
      value: function _updateFocusImageAlpha() {
        var focusImageAlpha = this.hasFocus() ? 1 : 0;
        var imageAlpha = Number(!focusImageAlpha);

        if (this._smooth) {
          this._FocusImage.smooth = {
            alpha: focusImageAlpha
          };
          this._Image.smooth = {
            alpha: imageAlpha
          };
        } else {
          this._FocusImage.alpha = focusImageAlpha;
          this._Image.alpha = imageAlpha;
        }
      }
    }, {
      key: "_patchBlur",
      value: function _patchBlur() {
        this._Item.patch({
          Blur: {
            type: lng.components.FastBlurComponent,
            w: this.w,
            h: this.h,
            rtt: true,
            zIndex: 3,
            content: {
              Image: {
                w: this._Image.w,
                h: this._Image.h,
                texture: this._Image.getTexture()
              }
            }
          }
        });
      }
    }, {
      key: "_updateBlur",
      value: function _updateBlur() {
        var alpha = this._blur > 0 ? 1 : 0;
        var amount = this._blur;

        if (this._blur || this._Blur) {
          this._patchBlur();

          if (this._smooth) {
            this._Blur.smooth = {
              alpha: alpha,
              amount: amount
            };
          } else {
            this._Blur.patch({
              alpha: alpha,
              amount: amount
            });
          }
        }
      }
    }, {
      key: "_updateRadius",
      value: function _updateRadius() {
        if (this._radius) {
          if (this._imgRadius === undefined || this._imgRadius !== 0) {
            this._Image.patch({
              shader: {
                type: lng.shaders.RoundedRectangle,
                radius: this._imgRadius || this._radius
              }
            });
          }

          if (this._FocusImage && (this._focusImgRadius === undefined || this._focusImgRadius !== 0)) {
            this._FocusImage.patch({
              shader: {
                type: lng.shaders.RoundedRectangle,
                radius: this._focusImgRadius || this._radius
              }
            });
          }

          if (this._blur || this._Blur) {
            this._Blur.patch({
              shader: {
                type: lng.shaders.RoundedRectangle,
                radius: this._radius
              }
            });
          }
        }
      }
    }, {
      key: "_updateGradient",
      value: function _updateGradient() {
        if (this._shouldShowGradient) {
          var gradientParams = {
            x: -1,
            w: this.w + 2,
            h: this.h + 1,
            radius: this.radius,
            zIndex: 3
          };

          if (this._gradientColor) {
            gradientParams.gradientColor = this._gradientColor;
          }

          if (!this._Gradient) {
            this._Item.patch({
              Gradient: _objectSpread2({
                type: Gradient
              }, gradientParams)
            });
          } else {
            this._Gradient.patch(gradientParams);
          }
        }

        if (this._Gradient) {
          var alpha = Number(this._shouldShowGradient);

          if (this._smooth) {
            this._Gradient.smooth = {
              alpha: alpha
            };
          } else {
            this._Gradient.alpha = alpha;
          }
        }
      }
    }, {
      key: "_updateDropShadow",
      value: function _updateDropShadow() {
        if (this.hasFocus() || this._shadow) {
          if (!this._shadow) {
            this._shadow = this._createShadow({
              w: this.w,
              h: this.h,
              borderRadius: this.radius
            });
          }

          var DropShadow = this._shadow;
          var style = this.hasFocus() ? this._focusedStyle.shadow : this._unfocusedStyle.shadow;

          if (this._smooth) {
            DropShadow.smooth = style;
          } else {
            DropShadow = _objectSpread2(_objectSpread2({}, DropShadow), style);
          }

          this.patch({
            DropShadow: DropShadow
          });
        }
      }
    }, {
      key: "vibrantCallback",
      value: function vibrantCallback() {
        this.focusRingColor = this.vibrantFocusRing;

        this._update();
      }
    }, {
      key: "_updateFocusRing",
      value: function _updateFocusRing() {
        if (this.hasFocus() || this._FocusRing) {
          var focusRingPatch = this._createFocusRing({
            w: this.w,
            h: this.h,
            radius: this._radius,
            color: this.focusRingColor
          });

          if (!this._FocusRing) {
            focusRingPatch.type = this._focusRingType;
          }

          this.patch({
            FocusRing: focusRingPatch
          });
          var style = this.hasFocus() ? this._focusedStyle.focusring : this._unfocusedStyle.focusring;

          if (this._smooth) {
            this._FocusRing.smooth = style;
          } else {
            this._FocusRing.patch(style);
          }

          this._FocusRing._shouldAnimate = this.shouldAnimate;

          if (this.hasFocus()) {
            this._FocusRing.startAnimation();
          } else {
            this._FocusRing.stopAnimation();
          }
        }
      }
    }, {
      key: "_updateScale",
      value: function _updateScale() {
        var scale = this.hasFocus() ? this._getFocusScale(this.w, this.h) : this._getUnfocusScale(this.w, this.h);

        if (this._smooth) {
          this._Item.smooth = {
            scale: scale
          };
          if (this._FocusRing) this._FocusRing.smooth = {
            scale: scale
          };
          if (this._DropShadow) this._DropShadow.smooth = {
            scale: scale
          };
        } else {
          this._Item.scale = scale;
          if (this._FocusRing) this._FocusRing.scale = scale;
          if (this._DropShadow) this._DropShadow.scale = scale;
        }
      }
    }, {
      key: "_shouldShowGradient",
      get: function get() {
        if (this.persistGradient) {
          return true;
        } else if (this.focusGradient && this.hasFocus()) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "shadow",
      set: function set(shadow) {
        this._shadow = shadow;

        this._requestUpdateDebounce();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Item: {
            Image: {}
          }
        };
      }
    }, {
      key: "tags",
      get: function get() {
        return ['Blur', 'DropShadow', 'FocusRing', 'Item', 'Image', 'FocusImage', 'Gradient'];
      }
    }, {
      key: "properties",
      get: function get() {
        return ['radius', 'imgRadius', 'focusImgRadius', 'blur', 'src', 'focusSrc', 'fallbackSrc', 'focusRingColor', 'gradientColor', 'focusGradient', 'persistGradient'];
      }
    }]);

    return Tile;
  }(Base$1);

  var Tile$1 = withStyles(Tile, styles$4);

  var API = /*#__PURE__*/function () {
    function API() {
      _classCallCheck(this, API);
    }

    _createClass(API, [{
      key: "get_products",
      value: function () {
        var _get_products = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var brand,
              url,
              response,
              _args = arguments;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  brand = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
                  url = "https://commerce.nbcuni.com/public/api/v3/nbcu-bravo/products/list?categories=project-runway-demo".concat(brand != null ? "&brands=".concat(brand) : '');
                  _context.next = 4;
                  return fetch(url, {
                    method: 'GET',
                    headers: {
                      Accept: 'application/json'
                    },
                    mode: 'cors'
                  });

                case 4:
                  response = _context.sent;
                  return _context.abrupt("return", response.json());

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function get_products() {
          return _get_products.apply(this, arguments);
        }

        return get_products;
      }()
    }]);

    return API;
  }();

  var API$1 = new API();

  var BrandPhoto = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(BrandPhoto, _Lightning$Component);

    var _super = _createSuper(BrandPhoto);

    function BrandPhoto() {
      _classCallCheck(this, BrandPhoto);

      return _super.apply(this, arguments);
    }

    _createClass(BrandPhoto, [{
      key: "_image",
      get: function get() {
        return this.tag('Image');
      }
    }, {
      key: "_width",
      set: function set(value) {
        this._image.patch({
          w: value
        });
      }
    }, {
      key: "_height",
      set: function set(value) {
        this._image.patch({
          h: value
        });
      }
    }, {
      key: "image",
      set: function set(value) {
        this._image.src = Utils.asset("images/brands/".concat(value.image));
        this.tag('Title').patch(value.title);
        this.tag('SubTitle').patch(value.subtitle);
        this._width = value.width;
        this._height = value.height;
      }
    }, {
      key: "subImage",
      set: function set(value) {
        this.tag('SubTitleImage').patch({
          src: Utils.asset("images/brands/".concat(value.image)),
          alpha: value.show,
          y: value.y,
          w: value.width,
          h: value.height
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Image: {
            h: 261,
            zIndex: 98,
            colorBottom: 0xff000000,
            shader: {
              type: lng.shaders.RoundedRectangle,
              radius: 16
            }
          },
          Title: {
            x: 27,
            y: 121,
            zIndex: 99,
            type: TextBox,
            style: 'headline1'
          },
          SubTitle: {
            x: 26,
            y: 171,
            zIndex: 99,
            type: TextBox,
            style: 'body3'
          },
          SubTitleImage: {
            alpha: 0,
            x: 81,
            y: 171,
            zIndex: 99
          }
        };
      }
    }]);

    return BrandPhoto;
  }(lng.Component);

  var FocusManager = /*#__PURE__*/function (_Base) {
    _inherits(FocusManager, _Base);

    var _super = _createSuper(FocusManager);

    function FocusManager() {
      _classCallCheck(this, FocusManager);

      return _super.apply(this, arguments);
    }

    _createClass(FocusManager, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(FocusManager.prototype), "_construct", this).call(this);

        this._selectedIndex = 0;
        this.direction = this.direction || 'row';
      }
    }, {
      key: "Items",
      get: function get() {
        return this._Items;
      }
    }, {
      key: "_setDirection",
      value: function _setDirection(direction) {
        var state = {
          none: 'None',
          column: 'Column',
          row: 'Row'
        }[direction];

        if (state) {
          this._setState(state);
        }

        return direction;
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return this._Items.children;
      }
    }, {
      key: "items",
      get: function get() {
        return this.Items.children;
      },
      set: function set(items) {
        this._resetItems();

        this._selectedIndex = 0;
        this.appendItems(items); // If the first item has skip focus when appended get the next focusable item

        var initialSelection = this.Items.children[this.selectedIndex];

        if (initialSelection && initialSelection.skipFocus) {
          this.selectNext();
        }
      }
    }, {
      key: "_resetItems",
      value: function _resetItems() {
        this.Items.childList.clear();
        this.Items.patch({
          w: 0,
          h: 0
        });
      }
    }, {
      key: "appendItems",
      value: function appendItems() {
        var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        this.Items.childList.a(items);

        this._refocus();
      }
    }, {
      key: "selected",
      get: function get() {
        return this.Items.children[this.selectedIndex];
      }
    }, {
      key: "selectedIndex",
      get: function get() {
        return this._selectedIndex;
      },
      set: function set(index) {
        this.prevSelected = this.selected;

        if (!this.Items.children.length || !this.Items.children[index] || !this.Items.children[index].skipFocus) {
          if (index !== this._selectedIndex) {
            this._selectedIndex = index;
          }

          if (this.selected) {
            this.render(this.selected, this.prevSelected);
            this.signal('selectedChange', this.selected, this.prevSelected);
          } // Don't call refocus until after a new render in case of a situation like Plinko nav
          // where we don't want to focus the previously selected item and need to get the new one first


          this._refocus();
        }
      } // Override

    }, {
      key: "render",
      value: function render() {}
    }, {
      key: "_firstFocusableIndex",
      value: function _firstFocusableIndex() {
        if (!this.items.length) return 0;
        var firstItem = this.items.reduce(function (acc, item, idx) {
          if (!item.skipFocus) {
            acc.push(_objectSpread2(_objectSpread2({}, item), {}, {
              originalIdx: idx
            }));
          }

          return acc;
        }, []).shift();
        return firstItem.originalIdx;
      }
    }, {
      key: "_lastFocusableIndex",
      value: function _lastFocusableIndex() {
        if (!this.items.length) return 0;
        var lastItem = this.items.reduce(function (acc, item, idx) {
          if (!item.skipFocus) {
            acc.push(_objectSpread2(_objectSpread2({}, item), {}, {
              originalIdx: idx
            }));
          }

          return acc;
        }, []).pop();
        return lastItem.originalIdx;
      }
    }, {
      key: "selectPrevious",
      value: function selectPrevious() {
        var hasFocusable = !!(this.items || []).filter(function (i) {
          return !i.skipFocus;
        }).length;

        if (this.selectedIndex === 0 && !this.wrapSelected || !hasFocusable) {
          return false;
        }

        var previousItemIndex = this.items.map(function (item) {
          return !!item.skipFocus;
        }).lastIndexOf(false, this._selectedIndex - 1);

        if (previousItemIndex > -1) {
          this.selectedIndex = previousItemIndex;
        } else if (this.wrapSelected) {
          this.selectedIndex = this._lastFocusableIndex();
        }

        return true;
      }
    }, {
      key: "selectNext",
      value: function selectNext() {
        var _this = this;

        var hasFocusable = !!(this.items || []).filter(function (i) {
          return !i.skipFocus;
        }).length;

        if (this.selectedIndex === this.Items.children.length - 1 && !this.wrapSelected || !hasFocusable) {
          return false;
        }

        var nextIndex = this.items.findIndex(function (item, idx) {
          return !item.skipFocus && idx > _this._selectedIndex;
        });

        if (nextIndex > -1) {
          this.selectedIndex = nextIndex;
        } else if (this.wrapSelected) {
          this.selectedIndex = this._firstFocusableIndex();
        }

        return true;
      }
    }, {
      key: "_getIndexOfItemNear",
      value: function _getIndexOfItemNear(selected, prev) {
        // Euclidean distance
        function distance(xA, yA, xB, yB) {
          var xDiff = xA - xB;
          var yDiff = yA - yB;
          return Math.sqrt(Math.pow(xDiff, 2) + Math.sqrt(Math.pow(yDiff, 2)));
        }

        var prevItem = prev.selected || prev.currentItem;

        if (!selected || !selected.items || !selected.items.length || !prevItem) {
          return 0;
        }

        var prevOffsetX = prev.transition('x').targetValue || 0;
        var prevOffsetY = prev.transition('y').targetValue || 0;

        var _prevItem$core$getAbs = prevItem.core.getAbsoluteCoords(-prevOffsetX, -prevOffsetY),
            _prevItem$core$getAbs2 = _slicedToArray(_prevItem$core$getAbs, 2),
            itemX = _prevItem$core$getAbs2[0],
            itemY = _prevItem$core$getAbs2[1];

        var prevMiddle = [itemX + prevItem.w / 2, itemY + prevItem.h / 2]; // Get all item center points from selected

        var selectedCoordArray = selected.items.map(function (item, index) {
          var x = 0,
              y = 0;

          if (item.core) {

            var _item$core$getAbsolut = item.core.getAbsoluteCoords(0, 0);

            var _item$core$getAbsolut2 = _slicedToArray(_item$core$getAbsolut, 2);

            x = _item$core$getAbsolut2[0];
            y = _item$core$getAbsolut2[1];
          }

          return {
            index: index,
            distance: !item.skipFocus ? distance(prevMiddle[0], prevMiddle[1], x + item.w / 2, y + item.h / 2) : null
          };
        }).filter(function (item) {
          // Remove all indexes that don't have a distance (skipFocus)
          return null !== item.distance;
        }).sort(function (a, b) {
          return a.distance - b.distance;
        });
        return selectedCoordArray[0].index;
      }
      /**
       * TODO: Update Base to remove the focus/unfocus calls and add a second "BaseComponent" that does have them
       *
       * Layout Components (Column, Row, BoardRows, etc.) would extend only Base,
       *    need to confirm this applies to InlineContnet and ScrollWrapper??
       * Element/Pattern Components (Tile, Badge, etc.) would extend "BaseComponent" that does have focus/unfocus overrides
       */

    }, {
      key: "_focus",
      value: function _focus() {}
    }, {
      key: "_unfocus",
      value: function _unfocus() {}
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        var selected = this.selected; // Make sure we're focused on a component

        if (selected) {
          if (selected.focusRef) {
            return selected.tag(selected.focusRef);
          } else if (selected.cparent) {
            return selected;
          }
        }

        return this;
      }
      /**
       * Return list of items that are currently fully and partially on screen
       * @returns {Array} Array of matching lng.Component objects or empty array
       */

    }, {
      key: "onScreenItems",
      get: function get() {
        var _this2 = this;

        return this.Items.children.filter(function (child) {
          return _this2._isOnScreen(child);
        });
      }
    }, {
      key: "_isOnScreen",
      value: function _isOnScreen() {
        throw new Error("'_isOnScreen' must be implemented by 'row'/'column'");
      }
    }, {
      key: "_isComponentHorizontallyVisible",
      value: function _isComponentHorizontallyVisible(child) {
        // get child's destination X; If child is moving to a destination,
        // get the value of where child will end up
        var x = getX(child);
        if (!Number.isFinite(x)) return false; // to calculate the target absolute X position of the item, we need to use
        // 1) the entire component's absolute position,
        // 2) the target animation value of the items container, and
        // 3) the target value of the item itself

        var transitionX = this.getTransitionXTargetValue(); // get absolute position of FocusManager on screen

        var px = this.core.renderContext.px;
        var itemX = px + transitionX + x; // _scissor consists of [ left position (x), top position (y), width, height ]

        var _ref = this.core._scissor || [],
            _ref2 = _slicedToArray(_ref, 3),
            _ref2$ = _ref2[0],
            leftBounds = _ref2$ === void 0 ? null : _ref2$,
            _ref2$2 = _ref2[2],
            clipWidth = _ref2$2 === void 0 ? null : _ref2$2;

        var stageW = this.stage.w / this.stage.getRenderPrecision();
        var w = child.w;
        var withinLeftStageBounds = itemX >= 0;
        var withinRightStageBounds = itemX + w <= stageW; // short circuit

        if (!withinLeftStageBounds || !withinRightStageBounds) return false;
        var withinLeftClippingBounds = true;
        var withinRightClippingBounds = true;

        if (Number.isFinite(leftBounds)) {
          withinLeftClippingBounds = Math.round(itemX + w) >= Math.round(leftBounds);
          withinRightClippingBounds = Math.round(itemX) <= Math.round(leftBounds + clipWidth);
        }

        return withinLeftClippingBounds && withinRightClippingBounds;
      }
    }, {
      key: "_isComponentVerticallyVisible",
      value: function _isComponentVerticallyVisible(child) {
        // get child's destination Y; If child is moving to a destination,
        // get the value of where child will end up
        var y = getY(child);
        if (!Number.isFinite(y)) return false; // to calculate the target absolute Y position of the item, we need to use
        // 1) the entire component's absolute position,
        // 2) the target animation value of the items container, and
        // 3) the target value of the item itself

        var transitionY = this.getTransitionYTargetValue(); // get absolute position of FocusManager on screen

        var py = this.core.renderContext.py; // _scissor consists of [ left position (x), top position (y), width, height ]

        var _ref3 = this.core._scissor || [],
            _ref4 = _slicedToArray(_ref3, 4),
            _ref4$ = _ref4[1],
            topBounds = _ref4$ === void 0 ? null : _ref4$,
            _ref4$2 = _ref4[3],
            clipHeight = _ref4$2 === void 0 ? null : _ref4$2;

        var h = child.h;
        var itemY = py + transitionY + y;
        var stageH = this.stage.h / this.stage.getRenderPrecision();
        var withinTopStageBounds = itemY + h >= 0;
        var withingBottomStageBounds = itemY <= stageH; // short circuit

        if (!withinTopStageBounds || !withingBottomStageBounds) return false;
        var withinTopClippingBounds = true;
        var withinBottomClippingBounds = true;

        if (Number.isFinite(topBounds)) {
          withinTopClippingBounds = Math.round(itemY + h) > Math.round(topBounds);
          withinBottomClippingBounds = Math.round(itemY) < Math.round(topBounds + clipHeight);
        }

        return withinTopClippingBounds && withinBottomClippingBounds;
      }
    }, {
      key: "getTransitionXTargetValue",
      value: function getTransitionXTargetValue() {
        return this.Items.transition('x').targetValue;
      }
    }, {
      key: "getTransitionYTargetValue",
      value: function getTransitionYTargetValue() {
        return this.Items.transition('y').targetValue;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Items: {}
        };
      }
    }, {
      key: "tags",
      get: function get() {
        return ['Items'];
      }
    }, {
      key: "properties",
      get: function get() {
        return ['direction'];
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this3) {
          _inherits(None, _this3);

          var _super2 = _createSuper(None);

          function None() {
            _classCallCheck(this, None);

            return _super2.apply(this, arguments);
          }

          return _createClass(None);
        }(this), /*#__PURE__*/function (_this4) {
          _inherits(Row, _this4);

          var _super3 = _createSuper(Row);

          function Row() {
            _classCallCheck(this, Row);

            return _super3.apply(this, arguments);
          }

          _createClass(Row, [{
            key: "_handleLeft",
            value: function _handleLeft() {
              return this.selectPrevious();
            }
          }, {
            key: "_handleRight",
            value: function _handleRight() {
              return this.selectNext();
            }
          }]);

          return Row;
        }(this), /*#__PURE__*/function (_this5) {
          _inherits(Column, _this5);

          var _super4 = _createSuper(Column);

          function Column() {
            _classCallCheck(this, Column);

            return _super4.apply(this, arguments);
          }

          _createClass(Column, [{
            key: "_handleUp",
            value: function _handleUp() {
              return this.selectPrevious();
            }
          }, {
            key: "_handleDown",
            value: function _handleDown() {
              return this.selectNext();
            }
          }]);

          return Column;
        }(this)];
      }
    }]);

    return FocusManager;
  }(Base$1);

  var Column = /*#__PURE__*/function (_FocusManager) {
    _inherits(Column, _FocusManager);

    var _super = _createSuper(Column);

    function Column() {
      _classCallCheck(this, Column);

      return _super.apply(this, arguments);
    }

    _createClass(Column, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(Column.prototype), "_construct", this).call(this);

        this._smooth = false;
        this._itemSpacing = 0;
        this._itemPosX = 0;
        this._itemPosY = 0;
        this._scrollIndex = 0;
      }
    }, {
      key: "_init",
      value: function _init() {
        _get(_getPrototypeOf(Column.prototype), "_init", this).call(this);

        if (!this.h) {
          // if height is undefined or 0, set the Columns's height
          this.h = this.parent && // if the Column is a child item in a FocusManager (like Row)
          this.parent.parent && this.parent.parent instanceof FocusManager ? this.parent.parent.h : this.stage.h / this.stage.getRenderPrecision();
        }

        this.Items.transition('y').on('finish', this._transitionListener.bind(this));
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateLayout();
      }
    }, {
      key: "_setItemSpacing",
      value: function _setItemSpacing(itemSpacing) {
        return itemSpacing || 0;
      }
    }, {
      key: "_itemTransition",
      get: function get() {
        return this.itemTransition || {
          duration: 0.4,
          timingFunction: 'cubic-bezier(0.20, 1.00, 0.30, 1.00)'
        };
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this.items.forEach(function (item) {
          return item.parentFocus = true;
        });
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.items.forEach(function (item) {
          return item.parentFocus = false;
        });
      }
    }, {
      key: "selectNext",
      value: function selectNext() {
        this._smooth = true;
        return _get(_getPrototypeOf(Column.prototype), "selectNext", this).call(this);
      }
    }, {
      key: "selectPrevious",
      value: function selectPrevious() {
        this._smooth = true;
        return _get(_getPrototypeOf(Column.prototype), "selectPrevious", this).call(this);
      }
    }, {
      key: "_shouldScroll",
      value: function _shouldScroll() {
        var shouldScroll = this.alwaysScroll;

        if (!shouldScroll && !this.neverScroll) {
          var lastChild = this.Items.childList.last;
          shouldScroll = lastChild && (this.shouldScrollUp() || this.shouldScrollDown());
        }

        return shouldScroll;
      } // TODO: can be documented in API when lastScrollIndex is made public

    }, {
      key: "shouldScrollUp",
      value: function shouldScrollUp() {
        var shouldScroll = false;

        if (this._lastScrollIndex) {
          shouldScroll = this.selectedIndex < this._lastScrollIndex;

          if (this._prevLastScrollIndex !== undefined && this._prevLastScrollIndex !== this._lastScrollIndex) {
            shouldScroll = true;
          }
        } else {
          shouldScroll = this.selectedIndex >= this._scrollIndex;
        }

        return this._itemsY < 0 && shouldScroll;
      } // TODO: can be documented in API when lastScrollIndex is made public

    }, {
      key: "shouldScrollDown",
      value: function shouldScrollDown() {
        var lastChild = this.Items.childList.last;
        return this.selectedIndex > this._scrollIndex && // end of Items container < end of last item
        Math.abs(this._itemsY - this.h) < lastChild.y + this.Items.childList.last.h;
      }
    }, {
      key: "render",
      value: function render(next, prev) {
        this._prevLastScrollIndex = this._lastScrollIndex;

        if (this.plinko && prev && (prev.currentItem || prev.selected) && !(this.items.indexOf(prev) === 0 && prev.skipPlinko)) {
          var prevPlinko = this.checkSkipPlinko(prev, next);
          next.selectedIndex = this._getIndexOfItemNear(next, prevPlinko || prev);
        } else if (next && !next.selectedIndex) {
          next.selectedIndex = 0;
        }

        this._performRender();
      }
    }, {
      key: "checkSkipPlinko",
      value: function checkSkipPlinko(prev, next) {
        var _this = this;

        // If previous doesn't have skip plinko or previous is the first or last item
        if (!prev || !prev.skipPlinko || [0, this.items.length - 1].includes(this.items.indexOf(prev))) {
          return null;
        }

        var prevIndex = this.items.indexOf(prev);
        var direction = prevIndex - this.items.indexOf(next);
        var up = direction > 0; // Grab all items below prev if up or all items before prev if down

        var prevItems = up ? this.items.slice(prevIndex).map(function (i) {
          return {
            skipPlinko: i.skipPlinko,
            index: _this.items.indexOf(i)
          };
        }) : this.items.slice(0, prevIndex + 1).map(function (i) {
          return {
            skipPlinko: i.skipPlinko,
            index: _this.items.indexOf(i)
          };
        }).reverse(); // first item that has skipPlinko but the previous does not
        // Start at the index prev

        var endOfMultiSkipPlinkos = prevItems.find(function (i) {
          return i.skipPlinko && !_this.items[i.index + direction].skipPlinko;
        });
        var prevPlinkoIndex = endOfMultiSkipPlinkos ? endOfMultiSkipPlinkos.index + direction : prevIndex + direction; // +/- 1, item index before prev

        return this.items[prevPlinkoIndex];
      }
    }, {
      key: "_performRender",
      value: function _performRender() {
        var _this2 = this;

        this._whenEnabled.then(function () {
          if (!_this2.Items.children.length) {
            if (_this2._smooth) {
              _this2.Items.smooth = {
                y: _this2.itemPosY
              };
            } else {
              _this2.Items.y = _this2.itemPosY;

              _this2._updateTransitionTarget(_this2.Items, _this2.itemPosY);
            }
          } else if (_this2._shouldScroll()) {
            var scrollItem = _this2.selectedIndex > _this2._lastScrollIndex ? _this2.Items.children[_this2._lastScrollIndex - _this2._scrollIndex] : _this2.selected;

            if (_this2.Items.children[_this2._firstFocusableIndex()] === scrollItem) {
              scrollItem = _this2.Items.children[0];
            }

            var scrollOffset = (_this2.Items.children[_this2._scrollIndex] || {
              y: 0
            }).y;

            if (_this2._smooth) {
              var firstChild = _this2.Items.childList.first;
              _this2.Items.smooth = {
                y: [-(scrollItem || firstChild).transition('y').targetValue + (scrollItem === _this2.selected ? scrollOffset : 0), _this2._itemTransition]
              };
            } else {
              var scrollTarget = -scrollItem.y + (scrollItem === _this2.selected ? scrollOffset : 0);

              _this2.Items.patch({
                y: scrollTarget
              });

              _this2._updateTransitionTarget(_this2.Items, scrollTarget);
            }
          }

          _this2.onScreenEffect(_this2.onScreenItems);
        });
      }
    }, {
      key: "_updateTransitionTarget",
      value: function _updateTransitionTarget(element, newValue) {
        if (element && element.transition('y') && !element.transition('y').isRunning() && element.transition('y').targetValue !== newValue) {
          element.transition('y').updateTargetValue(newValue);
        }
      }
    }, {
      key: "_updateLayout",
      value: function _updateLayout() {
        var _this3 = this;

        this._whenEnabled.then(function () {
          var nextY = 0;
          var nextW = 0; // layout items in row

          for (var i = 0; i < _this3.Items.children.length; i++) {
            var child = _this3.Items.children[i];
            nextW = Math.max(nextW, getW(child));

            if (_this3._smooth) {
              child.smooth = {
                y: [nextY, _this3._itemTransition]
              };
            } else {
              child.patch({
                y: nextY
              });

              _this3._updateTransitionTarget(child, nextY);
            }

            nextY += child.h;

            if (i < _this3.Items.children.length - 1) {
              nextY += _this3.itemSpacing;
            }

            if (child.centerInParent) {
              // if the child is another focus manager, check the width of the item container
              var childWidth = child.Items && child.Items.w || child.w; // only center the child if it is within the bounds of this focus manager

              if (childWidth < _this3.w) {
                child.x = (_this3.w - childWidth) / 2;
              }
            }
          }

          var itemChanged = _this3.Items.w !== nextW || _this3.Items.h !== nextY;

          _this3.Items.patch({
            w: nextW,
            h: nextY
          });

          if (_this3.autoResize) {
            _this3.h = _this3.Items.h;
            _this3.w = _this3.Items.w;
          }

          var lastChild = _this3.Items.childList.last;
          var endOfLastChild = lastChild ? getY(lastChild) + lastChild.h : 0;
          var scrollOffset = (_this3.Items.children[_this3._scrollIndex] || {
            y: 0
          }).y; // determine when to stop scrolling down

          if (_this3.alwaysScroll) {
            _this3._lastScrollIndex = _this3.Items.children.length - 1;
          } else if (endOfLastChild > _this3.h) {
            for (var _i = _this3.Items.children.length - 1; _i >= 0; _i--) {
              var _child = _this3.Items.children[_i];
              var childY = getY(_child);

              if (childY + _this3.h - scrollOffset > endOfLastChild) {
                _this3._lastScrollIndex = _i;
              } else {
                break;
              }
            }
          } else if (_this3._lastScrollIndex > _this3.items.length) {
            _this3._lastScrollIndex = _this3.items.length - 1;
          }

          itemChanged && _this3.fireAncestors('$itemChanged');

          _this3._performRender();
        });
      }
    }, {
      key: "itemPosX",
      get: function get() {
        return this._itemPosX;
      },
      set: function set(x) {
        this.Items.x = this._itemPosX = x;
      }
    }, {
      key: "itemPosY",
      get: function get() {
        return this._itemPosY;
      },
      set: function set(y) {
        this.Items.y = this._itemPosY = y;
      }
    }, {
      key: "_itemsY",
      get: function get() {
        return getY(this.Items);
      }
    }, {
      key: "appendItems",
      value: function appendItems() {
        var _this4 = this;

        var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var itemWidth = this.renderWidth;
        this._smooth = false;
        items.forEach(function (item) {
          item.parentFocus = _this4.hasFocus();
          item = _this4.Items.childList.a(item);
          item.w = getW(item) || itemWidth;
        });
        this.stage.update();

        this._update();

        this._refocus();
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(index) {
        var _this5 = this;

        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._itemTransition.duration * 100;

        if (duration === 0) {
          this.selectedIndex = index;
          return;
        }

        for (var i = 0; i !== Math.abs(this.selectedIndex - index); i++) {
          setTimeout(function () {
            _this5.selectedIndex > index ? _this5.selectPrevious() : _this5.selectNext();
          }, duration * i);
        }
      }
    }, {
      key: "_transitionListener",
      value: function _transitionListener() {
        this._smooth = false;
        this.transitionDone();
      }
    }, {
      key: "$itemChanged",
      value: function $itemChanged() {
        this._update();
      }
    }, {
      key: "$removeItem",
      value: function $removeItem(item) {
        if (item) {
          var wasSelected = item === this.selected;
          this.Items.childList.remove(item);

          this._update();

          if (wasSelected || this.selectedIndex >= this.items.length) {
            // eslint-disable-next-line no-self-assign
            this.selectedIndex = this._selectedIndex;
          }

          if (!this.items.length) {
            this.fireAncestors('$columnEmpty');
          }
        }
      }
    }, {
      key: "$columnChanged",
      value: function $columnChanged() {
        this._update();
      }
    }, {
      key: "_isOnScreen",
      value: function _isOnScreen(child) {
        if (!child) return false;
        return this._isComponentVerticallyVisible(child);
      } // can be overridden

    }, {
      key: "onScreenEffect",
      value: function onScreenEffect() {} // can be overridden

    }, {
      key: "transitionDone",
      value: function transitionDone() {}
    }], [{
      key: "_template",
      value: function _template() {
        return _objectSpread2(_objectSpread2({}, _get(_getPrototypeOf(Column), "_template", this).call(this)), {}, {
          direction: 'column'
        });
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(Column), "properties", this)), ['itemSpacing', 'scrollIndex', 'alwaysScroll', 'neverScroll', 'autoResize']);
      }
    }]);

    return Column;
  }(FocusManager);

  var baseStyles = (function (theme) {
    return {
      h: 96,
      xsmallHeight: 80,
      backgrounds: theme.palette.background,
      backgroundType: 'fill',
      dimensions: {
        large: 860,
        medium: 523,
        small: 410,
        xsmall: 410
      },
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      strokeWidth: 2,
      radius: theme.border.radius.small,
      focused: {
        scale: theme.getFocusScale
      },
      unfocused: {
        scale: function scale() {
          return 1;
        }
      },
      shadow: theme.materials.glow
    };
  });

  var ListItemBase = /*#__PURE__*/function (_withStyles) {
    _inherits(ListItemBase, _withStyles);

    var _super = _createSuper(ListItemBase);

    function ListItemBase() {
      _classCallCheck(this, ListItemBase);

      return _super.apply(this, arguments);
    }

    _createClass(ListItemBase, [{
      key: "_update",
      value: function _update() {
        _get(_getPrototypeOf(ListItemBase.prototype), "_update", this).call(this);

        this._updateContainer();

        this._updateScale();

        this._updateDropShadow();

        this._updateBackground();
      }
    }, {
      key: "_updateContainer",
      value: function _updateContainer() {
        // Draw the background container
        this.w = this.w || this.styles.dimensions[this.size] || this.styles.dimensions.large;

        if (this.size == 'xsmall') {
          this.h = this.h || this.styles.xsmallHeight;
        } else {
          this.h = this.h || this.styles.h;
        }

        var color = getFirstNumber(this.styles.backgrounds[this.backgroundType], this.styles.backgrounds.fill);
        var texture = lng.Tools.getRoundRect(RoundRect.getWidth(this.w, {
          paddingLeft: this.styles.paddingLeft,
          paddingRight: this.styles.paddingRight,
          strokeWidth: this.styles.strokeWidth
        }), RoundRect.getHeight(this.h, {
          strokeWidth: this.styles.strokeWidth
        }), this.styles.radius);

        this._Container.patch({
          color: color,
          texture: texture,
          h: this.h
        });
      }
    }, {
      key: "_updateScale",
      value: function _updateScale() {
        var scale = this.hasFocus() ? this.styles.focused.scale(this.w, this.h) : this.styles.unfocused.scale(this.w, this.h);
        this._Container.smooth = {
          scale: scale
        };
      }
    }, {
      key: "_updateBackground",
      value: function _updateBackground() {
        if (this.hasFocus()) {
          if (this._smooth) {
            this._Container.smooth = {
              color: this.styles.backgrounds.focus
            };
          } else {
            this._Container.patch({
              color: this.styles.backgrounds.focus
            });
          }
        } else {
          if (this._smooth) {
            this._Container.smooth = {
              color: getFirstNumber(this.styles.backgrounds[this.backgroundType], this.styles.backgrounds.fill)
            };
          } else {
            this._Container.patch({
              color: getFirstNumber(this.styles.backgrounds[this.backgroundType], this.styles.backgrounds.fill)
            });
          }
        }
      }
    }, {
      key: "_updateDropShadow",
      value: function _updateDropShadow() {
        if (this.hasFocus() && !this._DropShadow) {
          this._Container.patch({
            DropShadow: _objectSpread2({
              zIndex: 1,
              alpha: 0,
              flexItem: false
            }, this.styles.shadow({
              w: this.w,
              h: this.h,
              borderRadius: this.styles.radius
            }))
          });
        }

        if (this._DropShadow) {
          var alpha = Number(this.hasFocus());

          if (this._smooth) {
            this._DropShadow.smooth = {
              alpha: alpha
            };
          } else {
            this._DropShadow.alpha = alpha;
          }
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Container: {
            flex: {
              alignContent: 'center',
              alignItems: 'center',
              direction: 'row',
              justifyContent: 'space-between',
              paddingLeft: this.styles.paddingLeft,
              paddingRight: this.styles.paddingRight,
              wrap: true
            },
            Left: {
              flex: {
                direction: 'column'
              },
              zIndex: 2
            },
            Right: {
              flex: {
                direction: 'column'
              },
              zIndex: 2
            }
          }
        };
      }
    }, {
      key: "properties",
      get: function get() {
        return ['size', 'backgroundType'];
      }
    }, {
      key: "tags",
      get: function get() {
        return ['Container', {
          name: 'Left',
          path: 'Container.Left'
        }, {
          name: 'Right',
          path: 'Container.Right'
        }];
      }
    }]);

    return ListItemBase;
  }(withStyles(Base$1, baseStyles));

  var styles$3 = (function (theme) {
    return {
      icon: {
        width: 40,
        height: 40,
        color: theme.palette.text.light.primary,
        spacing: theme.spacing(2)
      },
      title: {
        color: theme.palette.text.light.primary,
        text: _objectSpread2(_objectSpread2({}, theme.typography.button1), {}, {
          verticalAlign: 'top',
          wordWrap: false,
          textOverflow: 'ellipsis',
          maxLinesSuffix: '...'
        })
      },
      subtitle: {
        color: theme.palette.text.light.secondary,
        text: _objectSpread2(_objectSpread2({}, theme.typography.body3), {}, {
          verticalAlign: 'top',
          wordWrap: false,
          textOverflow: 'ellipsis',
          maxLinesSuffix: '...'
        })
      },
      focused: {
        icon: {
          color: theme.palette.text.dark.primary
        },
        title: {
          color: theme.palette.text.dark.primary
        },
        subtitle: {
          color: theme.palette.text.dark.secondary
        }
      },
      fixedText: {
        wordWrap: false,
        textOverflow: 'ellipsis',
        maxLinesSuffix: '...'
      }
    };
  });

  var FadeShader = /*#__PURE__*/function (_lng$shaders$WebGLDef) {
    _inherits(FadeShader, _lng$shaders$WebGLDef);

    var _super = _createSuper(FadeShader);

    function FadeShader(context) {
      var _this;

      _classCallCheck(this, FadeShader);

      _this = _super.call(this, context);
      _this._margin = {
        left: 0,
        right: 0
      };
      return _this;
    }

    _createClass(FadeShader, [{
      key: "positionLeft",
      set: function set(v) {
        this._positionLeft = v;
      }
    }, {
      key: "positionRight",
      set: function set(v) {
        this._positionRight = v;
      }
    }, {
      key: "setupUniforms",
      value: function setupUniforms(operation) {
        _get(_getPrototypeOf(FadeShader.prototype), "setupUniforms", this).call(this, operation);

        var owner = operation.shaderOwner;

        if (this._positionLeft === 0) {
          this._positionLeft = 0.001;
        }

        if (this._positionRight === 0) {
          this._positionRight = 0.001;
        }

        var renderPrecision = this.ctx.stage.getRenderPrecision();

        this._setUniform('margin', [this._positionLeft * renderPrecision, this._positionRight * renderPrecision], this.gl.uniform1fv);

        this._setUniform('resolution', new Float32Array([owner._w * renderPrecision, owner._h * renderPrecision]), this.gl.uniform2fv);
      }
    }]);

    return FadeShader;
  }(lng.shaders.WebGLDefaultShader);
  FadeShader.fragmentShaderSource = "\n  #ifdef GL_ES\n  # ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  # else\n  precision lowp float;\n  # endif\n  #endif\n\n  #define PI 3.14159265359\n\n  varying vec2 vTextureCoord;\n  varying vec4 vColor;\n\n  uniform sampler2D uSampler;\n  uniform vec2 resolution;\n  uniform float margin[2];\n\n  void main() {\n      vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n      vec2 halfRes = 0.5 * resolution.xy;\n      vec2 point = vTextureCoord.xy * resolution;\n\n\n      vec2 pos1 = vec2(point.x, point.y);\n      vec2 pos2 = pos1;\n      pos2.x += margin[0];\n\n      vec2 d = pos2 - pos1;\n      float t = dot(pos1, d) / dot(d, d);\n      t = smoothstep(0.0, 1.0, clamp(t, 0.0, 1.0));\n\n      vec2 pos3 = vec2(vTextureCoord.x * resolution.x, vTextureCoord.y);\n      pos3.x -= resolution.x - margin[1];\n      vec2 pos4 = vec2(vTextureCoord.x + margin[1], vTextureCoord.y);\n\n      vec2 d2 = pos4 - pos3;\n      float t2 = dot(pos3, d2) / dot(d2, d2);\n      t2 = smoothstep(0.0, 1.0, clamp(t2, 0.0, 1.0));\n\n      color = mix(vec4(0.0), color, t);\n      color = mix(color, vec4(0.0), t2);\n\n      gl_FragColor = color;\n  }\n";

  /*#__PURE__*/(function (_lng$Texture) {
    _inherits(Circle, _lng$Texture);

    var _super = _createSuper(Circle);

    function Circle(stage) {
      var _this;

      _classCallCheck(this, Circle);

      _this = _super.call(this, stage);
      _this._color = 'rgb(0,0,0)';
      _this._fill = true;
      _this._radius = 100;
      _this._stroke = false;
      _this._strokeColor = 'rgb(0,0,0)';
      _this._strokeWidth = 1;
      return _this;
    }

    _createClass(Circle, [{
      key: "fill",
      get: function get() {
        return this._fill;
      },
      set: function set(fill) {
        this._fill = fill;

        this._changed();
      }
    }, {
      key: "radius",
      get: function get() {
        return this._radius;
      },
      set: function set(radius) {
        this._radius = radius;

        this._changed();
      }
    }, {
      key: "color",
      get: function get() {
        return this._color;
      },
      set: function set(color) {
        this._color = color;

        this._changed();
      }
    }, {
      key: "stroke",
      get: function get() {
        return this._stroke;
      },
      set: function set(stroke) {
        this._stroke = stroke;

        this._changed();
      }
    }, {
      key: "strokeWidth",
      get: function get() {
        return this._strokeWidth;
      },
      set: function set(strokeWidth) {
        this._strokeWidth = strokeWidth;

        this._changed();
      }
    }, {
      key: "strokeColor",
      get: function get() {
        return this._strokeColor;
      },
      set: function set(strokeColor) {
        this._strokeColor = strokeColor;

        this._changed();
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return "__circle_".concat(this._radius);
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        // We need to scope these to protect them from modifications while loading (which may be async).
        var color = this._color;
        var fill = this._fill;
        var radius = this._radius;
        var stroke = this._stroke;
        var strokeColor = this._strokeColor;
        var strokeWidth = this._strokeWidth;
        var canvas = this.stage.platform.getDrawingCanvas();
        var dimension = radius;

        if (stroke) {
          dimension = radius + strokeWidth * 2;
        }

        canvas.width = dimension * 2;
        canvas.height = dimension * 2;
        return function (cb) {
          var ctx = canvas.getContext('2d');
          ctx.lineWidth = strokeWidth;
          ctx.strokeStyle = strokeColor;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(dimension, dimension, radius, 0, 2 * Math.PI);

          if (fill) {
            ctx.fill();
          }

          if (stroke) {
            ctx.stroke();
          }

          cb(null, {
            source: canvas,
            radius: radius
          });
        };
      }
    }]);

    return Circle;
  })(lng.Texture);

  /*#__PURE__*/(function (_lng$Texture2) {
    _inherits(Arrow, _lng$Texture2);

    var _super2 = _createSuper(Arrow);

    function Arrow(stage) {
      var _this2;

      _classCallCheck(this, Arrow);

      _this2 = _super2.call(this, stage);
      _this2._color = 'rgb(13, 13, 15)';
      _this2._w = 0;
      _this2._h = 0;
      _this2._direction = 'right';
      return _this2;
    }

    _createClass(Arrow, [{
      key: "w",
      get: function get() {
        return this._w;
      },
      set: function set(l) {
        this._w = l;

        this._changed();
      }
    }, {
      key: "h",
      get: function get() {
        return this._h;
      },
      set: function set(l) {
        this._h = l;

        this._changed();
      }
    }, {
      key: "direction",
      get: function get() {
        return this._direction;
      },
      set: function set(direction) {
        this._direction = direction;

        this._changed();
      }
    }, {
      key: "color",
      get: function get() {
        return this._color;
      },
      set: function set(color) {
        this._color = color;

        this._changed();
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return "__triangle_".concat(this._direction, "_").concat(this._w, "x").concat(this._h);
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        // We need to scope these to protect them from modifications while loading (which may be async).
        var color = this._color;
        var w = this._w;
        var h = this._h;
        var direction = this._direction;
        var canvas = this.stage.platform.getDrawingCanvas();
        return function (cb) {
          var ctx = canvas.getContext('2d');
          canvas.width = w;
          canvas.height = h;
          ctx.fillStyle = color;
          ctx.strokeStyle = ctx.fillStyle;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          var p = ctx.lineWidth / 2;
          ctx.beginPath();

          if (direction === 'right') {
            ctx.moveTo(p, p);
            ctx.lineTo(p, h - p);
            ctx.lineTo(w - p, h / 2);
          } else {
            ctx.moveTo(p, h / 2);
            ctx.lineTo(w - p, p);
            ctx.lineTo(w - p, h - p);
          }

          ctx.closePath();
          ctx.stroke();
          ctx.fill();
          cb(null, {
            source: canvas,
            w: w,
            h: h,
            direction: direction
          });
        };
      }
    }]);

    return Arrow;
  })(lng.Texture);

  /*#__PURE__*/(function (_lng$Texture3) {
    _inherits(Line, _lng$Texture3);

    var _super3 = _createSuper(Line);

    function Line(stage) {
      var _this3;

      _classCallCheck(this, Line);

      _this3 = _super3.call(this, stage);
      _this3._w = 0;
      _this3._h = 0;
      _this3._rounded = false;
      return _this3;
    }

    _createClass(Line, [{
      key: "w",
      get: function get() {
        return this._w;
      },
      set: function set(l) {
        this._w = l;

        this._changed();
      }
    }, {
      key: "h",
      get: function get() {
        return this._h;
      },
      set: function set(l) {
        this._h = l;

        this._changed();
      }
    }, {
      key: "rounded",
      get: function get() {
        return this._rounded;
      },
      set: function set(rounded) {
        this._rounded = rounded;

        this._changed();
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return "__line_".concat(this._w, "x").concat(this._h).concat(this._rounded ? '_rounded' : '');
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        // We need to scope these to protect them from modifications while loading (which may be async).
        var w = this._w;
        var h = this._h;
        var rounded = this._rounded;
        var canvas = this.stage.platform.getDrawingCanvas();
        return function (cb) {
          var ctx = canvas.getContext('2d');
          canvas.width = w;
          canvas.height = h;
          ctx.lineWidth = h;

          if (rounded) {
            ctx.lineCap = 'round';
          }

          ctx.strokeStyle = 'white';
          ctx.beginPath();
          ctx.moveTo(rounded ? 2 : 0, h / 2);
          ctx.lineTo(rounded ? w - 2 : w, h / 2);
          ctx.stroke();
          cb(null, {
            source: canvas,
            w: w,
            h: h,
            rounded: rounded
          });
        };
      }
    }]);

    return Line;
  })(lng.Texture);

  var MarqueeText = /*#__PURE__*/function (_Base) {
    _inherits(MarqueeText, _Base);

    var _super = _createSuper(MarqueeText);

    function MarqueeText() {
      _classCallCheck(this, MarqueeText);

      return _super.apply(this, arguments);
    }

    _createClass(MarqueeText, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(MarqueeText.prototype), "_construct", this).call(this);

        this._shouldSmooth = false;
        this._scrolling = false;
        this._centerAlign = false;
        this._autoStart = false;
        this._fadeW = 100;
        this._offset = 32;
      }
    }, {
      key: "_init",
      value: function _init() {
        _get(_getPrototypeOf(MarqueeText.prototype), "_init", this).call(this);

        this._Content.on('txLoaded', this._updateContentTexture.bind(this));

        this._update();
      }
    }, {
      key: "_detach",
      value: function _detach() {
        this._Content.off('txLoaded', this._updateContentTexture.bind(this));
      }
    }, {
      key: "_updateContentTexture",
      value: function _updateContentTexture() {
        if (this._contentTexture.h === undefined) {
          this._ContentClipper.h = this._contentTexture.text && this._contentTexture.text.lineHeight ? this._contentTexture.text.lineHeight : this._Content.finalH;
        } // in case the metadata width gets larger on focus and the text goes from being clipped to not


        if (this._shouldClip) {
          this._updateShader();
        } else {
          this._ContentClipper.shader = null;
          this._shouldCenter && this._centerTexture();
        }
        (this.autoStart || this._scrolling) && this.startScrolling();
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateColor();

        this._updateTexture();

        this._updateShader();

        (this.autoStart || this._scrolling) && this.startScrolling();
      }
    }, {
      key: "_updateColor",
      value: function _updateColor() {
        if (this._color) {
          this._Content.smooth = {
            color: this._color
          };
        }
      }
    }, {
      key: "_updateTexture",
      value: function _updateTexture() {
        this.patch({
          ContentClipper: {
            w: this.w + 14,
            ContentBox: {
              Content: _objectSpread2({
                rtt: true
              }, this._contentTexture),
              ContentLoopTexture: {}
            }
          }
        });

        this._Content.loadTexture();
      }
    }, {
      key: "_updateShader",
      value: function _updateShader() {
        this.stage.update();

        this._Content.loadTexture();

        this._ContentClipper.patch({
          w: this.w > 0 ? this.w + this._fadeW / 2 : 0,
          shader: {
            type: FadeShader,
            positionLeft: 0,
            positionRight: this._fadeW
          },
          rtt: true
        });
      }
    }, {
      key: "_updateAnimation",
      value: function _updateAnimation() {
        this._scrollAnimation && this._scrollAnimation.stopNow();
        this._scrollAnimation = this.animation({
          duration: this._textRenderedW / 50,
          delay: isNaN(this.delay) ? 1.5 : this.delay,
          repeat: isNaN(this.repeat) ? -1 : this.repeat,
          actions: [{
            t: 'ContentBox',
            p: 'x',
            v: {
              sm: 0,
              0: {
                v: 0
              },
              0.5: {
                v: -(this._textRenderedW + this._offset)
              }
            }
          }, {
            t: 'ContentClipper',
            p: 'shader.positionLeft',
            v: {
              sm: 0,
              0: {
                v: 0
              },
              0.1: {
                v: this._fadeW
              },
              0.4: {
                v: this._fadeW
              },
              0.5: {
                v: 0
              }
            }
          }]
        });
      }
    }, {
      key: "_centerTexture",
      value: function _centerTexture() {
        var x = (this.w - this._textRenderedW - (this._shouldClip ? this._fadeW : 0)) / 2;

        if (this.shouldSmooth) {
          this._ContentBox.smooth = {
            x: x
          };
        } else {
          this._ContentBox.x = x;
        }
      }
    }, {
      key: "startScrolling",
      value: function startScrolling() {
        var _this = this;

        if (this._textRenderedW === 0) {
          this._Content.on('txLoaded', function () {
            _this.startScrolling();
          });
        }

        if (this._shouldClip) {
          this._scrolling = true;
          this._ContentLoopTexture.x = this._textRenderedW + this._offset;
          this._ContentLoopTexture.texture = this._Content.getTexture();

          this._updateAnimation();

          this._scrollAnimation.start();
        } else {
          this._scrolling = false;
        }
      }
    }, {
      key: "stopScrolling",
      value: function stopScrolling() {
        this._scrolling = false;

        if (this._scrollAnimation) {
          this._scrollAnimation.stopNow();

          this._ContentLoopTexture.texture = null;
        }
      }
    }, {
      key: "_shouldClip",
      get: function get() {
        // using fadeW / 4 so that if something like the last character is slightly opacitied out,
        // but still visible, we don't unnecessarily scroll
        return this._textRenderedW > this.w - this._fadeW / 4;
      }
    }, {
      key: "_shouldCenter",
      get: function get() {
        return this._centerAlign || this._Content.text && this._Content.text.textAlign === 'center';
      }
    }, {
      key: "_setContentTexture",
      value: function _setContentTexture(texture) {
        this._contentTexture = {
          texture: texture
        };
        return this._contentTexture;
      }
    }, {
      key: "_setTitle",
      value: function _setTitle(text) {
        this._title = {
          text: text
        };
        this._contentTexture = this._title;
        return this._title.text.text;
      }
    }, {
      key: "_textRenderedW",
      get: function get() {
        return this._Content.renderWidth;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          ContentClipper: {
            boundsMargin: [],
            // overwrite boundsMargin so text won't de-render if moved offscreen
            ContentBox: {
              Content: {},
              ContentLoopTexture: {}
            }
          }
        };
      }
    }, {
      key: "tags",
      get: function get() {
        return ['ContentClipper', 'ContentBox', 'Content', 'ContentLoopTexture'];
      }
    }, {
      key: "properties",
      get: function get() {
        return ['shouldSmooth', 'autoStart', 'centerAlign', 'color', 'title', 'contentTexture'];
      }
    }]);

    return MarqueeText;
  }(Base$1);

  var ListItem = /*#__PURE__*/function (_withStyles) {
    _inherits(ListItem, _withStyles);

    var _super = _createSuper(ListItem);

    function ListItem() {
      _classCallCheck(this, ListItem);

      return _super.apply(this, arguments);
    }

    _createClass(ListItem, [{
      key: "_getTitleW",
      get: function get() {
        var w = this.w || this.styles.dimensions[this.size] || this.styles.dimensions.large;
        return w - this.styles.paddingLeft - this.styles.paddingRight;
      }
    }, {
      key: "_textWidth",
      get: function get() {
        return this.w - 2 * this.styles.paddingRight - this.styles.paddingLeft - this._calculateIconWidth();
      }
    }, {
      key: "_icons",
      get: function get() {
        return this._Right.children;
      }
    }, {
      key: "announce",
      get: function get() {
        if (this._announce) {
          return this._announce;
        }

        return this.title + " ".concat(this.subtitle !== undefined ? this.subtitle : '');
      },
      set: function set(announce) {
        _set(_getPrototypeOf(ListItem.prototype), "_announce", announce, this, true);
      }
    }, {
      key: "_init",
      value: function _init() {
        _get(_getPrototypeOf(ListItem.prototype), "_init", this).call(this);

        !this.hasFocus() && this._unfocus();

        this._update();
      }
    }, {
      key: "_update",
      value: function _update() {
        _get(_getPrototypeOf(ListItem.prototype), "_update", this).call(this);

        this._updateTitle();

        this._updateSubtitle();

        this._updateIcons();
      }
    }, {
      key: "_updateTitle",
      value: function _updateTitle() {
        if (!this._title) {
          this._Left.patch({
            Title: undefined
          });

          return;
        }

        this._Left.patch({
          w: this._textWidth,
          Title: {
            y: 2,
            h: this.styles.title.text.lineHeight + 4,
            w: this._textWidth,
            type: MarqueeText,
            color: this.hasFocus() ? this.styles.focused.title.color : this.styles.title.color,
            title: _objectSpread2(_objectSpread2({}, this.styles.title.text), {}, {
              text: this._title
            })
          }
        });

        this.hasFocus() ? this._Title.startScrolling() : this._Title.stopScrolling();
      }
    }, {
      key: "_updateSubtitle",
      value: function _updateSubtitle() {
        if (!this.subtitle) {
          this._Left.patch({
            Subtitle: undefined
          });

          this._Left.smooth = {
            y: 0
          };
          return;
        }

        if (!this._Subtitle) {
          this._Left.patch({
            Subtitle: {
              type: MarqueeText
            }
          });
        }

        this._Left.patch({
          w: this._textWidth,
          Subtitle: {
            h: this.styles.subtitle.text.lineHeight,
            w: this._textWidth,
            color: this.hasFocus() ? this.styles.focused.subtitle.color : this.styles.subtitle.color,
            title: _objectSpread2(_objectSpread2({}, this.styles.subtitle.text), {}, {
              text: this._subtitle,
              lineHeight: this.styles.subtitle.text.lineHeight + 4
            })
          }
        });

        if (this.collapse) {
          this._Subtitle.smooth = {
            alpha: Number(this.hasFocus())
          };
          this._Left.smooth = {
            y: this.hasFocus() ? 0 : this._Subtitle.renderHeight / 2
          };
        }
      }
    }, {
      key: "_updateIcons",
      value: function _updateIcons() {
        var _this = this;

        if (this.icon) {
          this._Right.patch({
            Icon: {
              color: this.styles.icon.color,
              icon: this.icon
            }
          });
        }

        this._Right.patch(this._iconArray.reduce(function (patchObject, icon, index) {
          patchObject["Icon".concat(index)] = {
            type: Icon,
            h: _this.styles.icon.height,
            w: _this.styles.icon.width,
            color: _this.styles.icon.color,
            icon: icon,
            flexItem: {
              marginLeft: index > 0 ? _this.styles.icon.spacing : 0
            }
          };
          return patchObject;
        }, {
          flex: {
            direction: 'row'
          }
        }));

        var color = this.hasFocus() ? this.styles.focused.icon.color : this.styles.icon.color;

        if (this._icons && this._icons.length) {
          this._icons.forEach(function (icon) {
            return icon.smooth = {
              color: color
            };
          });
        }

        if (this._collapseIcon) {
          this._Right.visible = this.hasFocus();
        }
      }
    }, {
      key: "_calculateIconWidth",
      value: function _calculateIconWidth() {
        if (this._collapseIcon && !this.hasFocus() || this._iconArray[0] === null) {
          return 0;
        } else if (this._iconArray.length == 1) {
          return this.styles.icon.width;
        }

        return this._iconArray.length * (this.styles.icon.width + this.styles.icon.spacing);
      }
    }, {
      key: "_iconArray",
      get: function get() {
        return (Array.isArray(this._icon) ? this._icon : [this._icon]).filter(Boolean);
      }
    }], [{
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItem), "properties", this)), ['collapse', 'collapseIcon', 'icon', 'showIcon', 'subtitle', 'title']);
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItem), "tags", this)), [{
          name: 'Title',
          path: 'Left.Title'
        }, {
          name: 'Subtitle',
          path: 'Left.Subtitle'
        }, {
          name: 'Icon',
          path: 'Right.Icon'
        }]);
      }
    }]);

    return ListItem;
  }(withStyles(ListItemBase, styles$3));

  var styles$2 = (function (theme) {
    return {
      imageSize: theme.spacing(1),
      paddingTop: theme.spacing(1)
    };
  });

  var ListItemImage = /*#__PURE__*/function (_withStyles) {
    _inherits(ListItemImage, _withStyles);

    var _super = _createSuper(ListItemImage);

    function ListItemImage() {
      _classCallCheck(this, ListItemImage);

      return _super.apply(this, arguments);
    }

    _createClass(ListItemImage, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(ListItemImage.prototype), "_construct", this).call(this);

        this._imageSize = this.styles.imageSize;
      }
    }, {
      key: "_textWidth",
      get: function get() {
        return this.w - this.imageSize - this.styles.paddingRight - 2 * this.styles.paddingLeft - this._calculateIconWidth();
      } // Make sure src is ignored if passed in

    }, {
      key: "src",
      set: function set(src) {
        return;
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateIcon();

        this._updateImage();

        this._updateRadius();

        _get(_getPrototypeOf(ListItemImage.prototype), "_update", this).call(this);
      }
    }, {
      key: "_updateIcon",
      value: function _updateIcon() {
        if (this.icon) {
          this._Right.patch({
            flex: {
              justifyContent: 'flex-end'
            },
            flexItem: {
              grow: 1
            }
          });
        } else {
          this._Right.patch({
            flex: {},
            flexItem: {}
          });
        }
      }
    }, {
      key: "_updateImage",
      value: function _updateImage() {
        if (this.image) {
          var paddingTop = this.styles.paddingTop;
          var h = this.size == 'xsmall' ? this.styles.xsmallHeight : this.styles.h;
          var imageHeight = this.imageSize + 2 * paddingTop;

          if (imageHeight > h) {
            this.h = imageHeight;
          } else {
            this.h = h;
          }

          this._Image.patch({
            h: this.imageSize,
            w: this.imageSize,
            texture: {
              type: lng.textures.ImageTexture,
              resizeMode: {
                type: 'cover',
                h: this.imageSize,
                w: this.imageSize
              },
              src: this.image
            }
          });
        } else {
          this._Image.patch({
            texture: undefined
          });
        }
      }
    }, {
      key: "_updateRadius",
      value: function _updateRadius() {
        if (this.styles.radius > 0) {
          this._Image.patch({
            shader: {
              type: lng.shaders.RoundedRectangle,
              radius: this.styles.radius
            }
          });
        } else {
          this._Image.patch({
            shader: undefined
          });
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        var template = _get(_getPrototypeOf(ListItemImage), "_template", this).call(this);

        return _objectSpread2(_objectSpread2({}, template), {}, {
          Container: _objectSpread2(_objectSpread2({
            Image: {
              flexItem: {
                marginRight: this.styles.paddingRight
              },
              zIndex: 2,
              texture: {}
            }
          }, template.Container), {}, {
            flex: _objectSpread2(_objectSpread2({}, template.Container.flex), {}, {
              justifyContent: 'flex-start'
            })
          })
        });
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItemImage), "properties", this)), ['image', 'imageSize']);
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItemImage), "tags", this)), [{
          name: 'Image',
          path: 'Container.Image'
        }]);
      }
    }]);

    return ListItemImage;
  }(withStyles(ListItem, styles$2));

  var ProductItem = /*#__PURE__*/function (_ListItemImage) {
    _inherits(ProductItem, _ListItemImage);

    var _super = _createSuper(ProductItem);

    function ProductItem() {
      _classCallCheck(this, ProductItem);

      return _super.apply(this, arguments);
    }

    _createClass(ProductItem, [{
      key: "_focus",
      value: function _focus() {
        _get(_getPrototypeOf(ProductItem.prototype), "_focus", this).call(this);

        this.tag('WhiteShadow').setSmooth('alpha', 1);
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        _get(_getPrototypeOf(ProductItem.prototype), "_focus", this).call(this);

        this.tag('WhiteShadow').setSmooth('alpha', 0);
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this;
      }
    }, {
      key: "description",
      get: function get() {
        return this.data.description;
      }
    }, {
      key: "brand",
      get: function get() {
        return this.data.variants[0].sameAttributes.brand;
      }
    }, {
      key: "checkoutInfo",
      get: function get() {
        return this.data.variants[0].offers[0];
      }
    }], [{
      key: "_template",
      value: function _template() {
        return _objectSpread2(_objectSpread2({}, _get(_getPrototypeOf(ProductItem), "_template", this).call(this)), {}, {
          w: 422,
          h: 120,
          imageSize: 110,
          backgroundType: 'float',
          WhiteShadow: {
            w: function w(_w) {
              return _w * 1.2;
            },
            h: function h(_h) {
              return _h * 1.5;
            },
            x: 422 * 0.5,
            y: 120 * 0.5,
            mount: 0.5,
            texture: lng.Tools.getShadowRect(500, 120, 4, 25, 30)
          }
        });
      }
    }]);

    return ProductItem;
  }(ListItemImage);

  function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
  }
  function cutImageURL(value) {
    return value.split('/')[3];
  }

  var results = [
  	{
  		id: "0fe79423-4738-4131-bf27-7d25ff2761b5",
  		version: 9,
  		key: "654322",
  		name: "TattooStudio Eyeliner Pencil",
  		description: "Maybelline tattoo studio sharpenable gel pencil draws on up to 36-hour tattoo intensity. Waterproof, smudge resistant, sebum resistant formula.",
  		attributeDefinitions: [
  			{
  				name: "brand",
  				label: "Brand Name",
  				isSameForAll: true,
  				isText: true,
  				isBoolean: false,
  				isList: false
  			}
  		],
  		categories: [
  			{
  				key: "beauty-makeup-eyes-eyeliner",
  				name: "Eyeliner"
  			},
  			{
  				key: "project-runway-demo",
  				name: "Project Runway Demo"
  			}
  		],
  		variants: [
  			{
  				id: 1,
  				sku: "may-2",
  				key: "may-2",
  				name: "TattooStudio Eyeliner Pencil",
  				isRefundable: true,
  				sameAttributes: {
  					brand: "Maybelline"
  				},
  				attributes: {
  					color: ""
  				},
  				offers: [
  					{
  						id: "141985",
  						currency: "USD",
  						price: 999,
  						originPrice: 999,
  						freeShipping: true,
  						channel: {
  							id: "dfc1d9ae-a21f-458c-9e5b-62b2e3389ac6",
  							key: "2106",
  							name: "Blackstone Commerce"
  						},
  						isOnStock: true,
  						availableQuantity: 100
  					}
  				],
  				images: [
  					{
  						url: "https://25d8655e7cd58c313ff4-ea93e8e285e24902155974d1ebd94118.ssl.cf1.rackcdn.com/d324958b14dc4c24b1cf-wvesvnpe.jpeg",
  						width: 500,
  						height: 500
  					}
  				]
  			}
  		]
  	},
  	{
  		id: "e79c7763-ad1d-421b-942f-a37768cf5c63",
  		version: 11,
  		key: "654321",
  		name: "Color Sensational Ultimatte Slim Lipstick",
  		description: "Maybelline's color sensational ultimatte neo-neutrals slim lipstick has a lightweight, blurring formula with high-impact pigments and an extreme matte lipstick finish.",
  		attributeDefinitions: [
  			{
  				name: "brand",
  				label: "Brand Name",
  				isSameForAll: true,
  				isText: true,
  				isBoolean: false,
  				isList: false
  			},
  			{
  				name: "color",
  				label: "Color",
  				isSameForAll: false,
  				isText: false,
  				isBoolean: false,
  				isList: true,
  				listOptions: {
  					Mauve: "Mauve"
  				}
  			}
  		],
  		categories: [
  			{
  				key: "beauty-makeup-lips-lipstick",
  				name: "Lipstick"
  			},
  			{
  				key: "project-runway-demo",
  				name: "Project Runway Demo"
  			}
  		],
  		variants: [
  			{
  				id: 1,
  				sku: "may-1",
  				key: "may-1",
  				name: "Color Sensational Ultimatte Slim Lipstick",
  				isRefundable: true,
  				sameAttributes: {
  					brand: "Maybelline"
  				},
  				attributes: {
  					color: "Mauve"
  				},
  				offers: [
  					{
  						id: "141984",
  						currency: "USD",
  						price: 949,
  						originPrice: 949,
  						freeShipping: true,
  						channel: {
  							id: "dfc1d9ae-a21f-458c-9e5b-62b2e3389ac6",
  							key: "2106",
  							name: "Blackstone Commerce"
  						},
  						isOnStock: true,
  						availableQuantity: 100
  					}
  				],
  				images: [
  					{
  						url: "https://25d8655e7cd58c313ff4-ea93e8e285e24902155974d1ebd94118.ssl.cf1.rackcdn.com/88c4bc12bc114f788437-jYqM5aFW.jpeg",
  						width: 1400,
  						height: 1400
  					}
  				]
  			}
  		]
  	},
  	{
  		id: "c53199d8-739f-48f8-9c1c-8c144b0e5cb8",
  		version: 11,
  		key: "654323",
  		name: "Brow Ultra Slim Defining Eyebrow Pencil",
  		description: "Maybelline ultra slim brow pencil delivers precisely defined brows for a natural brow look. Featuring a 1.5 mm precision tip and spoolie brush.",
  		attributeDefinitions: [
  			{
  				name: "brand",
  				label: "Brand Name",
  				isSameForAll: true,
  				isText: true,
  				isBoolean: false,
  				isList: false
  			}
  		],
  		categories: [
  			{
  				key: "beauty-makeup-eyes-eyebrows",
  				name: "Eyebrows"
  			},
  			{
  				key: "project-runway-demo",
  				name: "Project Runway Demo"
  			}
  		],
  		variants: [
  			{
  				id: 1,
  				sku: "may-3",
  				key: "may-3",
  				name: "Brow Ultra Slim Defining Eyebrow Pencil",
  				isRefundable: true,
  				sameAttributes: {
  					brand: "Maybelline"
  				},
  				attributes: {
  					color: ""
  				},
  				offers: [
  					{
  						id: "141987",
  						currency: "USD",
  						price: 899,
  						originPrice: 899,
  						freeShipping: true,
  						channel: {
  							id: "dfc1d9ae-a21f-458c-9e5b-62b2e3389ac6",
  							key: "2106",
  							name: "Blackstone Commerce"
  						},
  						isOnStock: true,
  						availableQuantity: 100
  					}
  				],
  				images: [
  					{
  						url: "https://25d8655e7cd58c313ff4-ea93e8e285e24902155974d1ebd94118.ssl.cf1.rackcdn.com/e427e6914bb544eaa1ee-7W-yH4qf.jpeg",
  						width: 500,
  						height: 676
  					}
  				]
  			}
  		]
  	}
  ];

  var QueryParams = /*#__PURE__*/function () {
    function QueryParams() {
      _classCallCheck(this, QueryParams);
    }

    _createClass(QueryParams, [{
      key: "init",
      value: function init() {
        var bootLocation = _objectSpread2({}, document.location);

        var _this$_parsePathAndQs = this._parsePathAndQsParams(bootLocation.href),
            qs = _this$_parsePathAndQs.qs;

        this._qs = qs;
      }
    }, {
      key: "_parsePathAndQsParams",
      value: function _parsePathAndQsParams(url) {
        var getPathRegExp = /(?:.*(?:\.com|\d*\.\d*\.\d*\.\d*)(?:\:\d*)?\/#?\$?!?(?:.*#)?|#|)(.*?)(?:\/?\?.*|\/?$)/;
        var getQueryRegExp = /(?:[^#/&?]*?)=(?:.*?)(?=[#/&]|$)/g;
        var pathResult = getPathRegExp.exec(url);
        var path = pathResult && pathResult.length > 0 ? pathResult[1] : url;
        var paramsResult = url.match(getQueryRegExp) || [];
        var qs = paramsResult.reduce(function (o, qs) {
          var _qs$split = qs.split('=', 2),
              _qs$split2 = _slicedToArray(_qs$split, 2),
              k = _qs$split2[0],
              v = _qs$split2[1];

          return _objectSpread2(_objectSpread2({}, o), {}, _defineProperty({}, k, v));
        }, {});
        return {
          path: path,
          qs: qs
        };
      }
    }, {
      key: "get",
      value: function get(key) {
        return this._qs && this._qs[key] || null;
      }
    }]);

    return QueryParams;
  }();

  var QueryParams$1 = new QueryParams();

  var ProductList = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(ProductList, _Lightning$Component);

    var _super = _createSuper(ProductList);

    function ProductList() {
      _classCallCheck(this, ProductList);

      return _super.apply(this, arguments);
    }

    _createClass(ProductList, [{
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('Column');
      }
    }, {
      key: "_init",
      value: function _init() {
        this._getItems();
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        this.signal('productSelected');
      }
    }, {
      key: "_setTextBox",
      value: function _setTextBox(title) {
        this._textBox.patch({
          content: title
        });
      }
    }, {
      key: "_getItems",
      value: function () {
        var _getItems2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var brand,
              usePlaceholder,
              products,
              _args = arguments;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  brand = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
                  usePlaceholder = QueryParams$1.get('placeholder');
                  console.log(brand);

                  if (!(usePlaceholder == 'true')) {
                    _context.next = 7;
                    break;
                  }

                  _context.t0 = results;
                  _context.next = 10;
                  break;

                case 7:
                  _context.next = 9;
                  return API$1.get_products(brand != null ? brand : null);

                case 9:
                  _context.t0 = _context.sent.results;

                case 10:
                  products = _context.t0;
                  this._column.items = products.filter(function (product) {
                    return product.variants[0].offers.length > 0;
                  }).map(function (product) {
                    var produtImage = usePlaceholder === 'true' ? Utils.asset("images/products/".concat(cutImageURL(product.variants[0].images[0].url))) : product.variants[0].images[0].url;
                    var productPrice = product.variants[0].offers[0].price;
                    return {
                      type: ProductItem,
                      image: produtImage,
                      title: product.name,
                      subtitle: "$ ".concat((productPrice / 100).toFixed(2)),
                      data: product
                    };
                  });

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _getItems() {
          return _getItems2.apply(this, arguments);
        }

        return _getItems;
      }()
    }, {
      key: "_textBox",
      get: function get() {
        return this.tag('TextBox');
      }
    }, {
      key: "_column",
      get: function get() {
        return this.tag('Column');
      }
    }, {
      key: "title",
      set: function set(value) {
        this.tag('Title').text.text = value;
      }
    }, {
      key: "_currentItem",
      set: function set(id) {
        this._getItems(id);
      }
    }, {
      key: "brand",
      set: function set(value) {
        this._column.items = [];

        this._getItems(value);
      }
    }, {
      key: "selectedItem",
      get: function get() {
        return this._column.items[this._column.selectedIndex];
      }
    }], [{
      key: "_template",
      value: function _template() {
        var titleHeight = 54;
        return {
          w: 460,
          h: 1080,
          Title: {
            h: titleHeight,
            type: TextBox,
            style: 'body3'
          },
          Mask: {
            w: 500,
            h: function h(_h) {
              return _h - titleHeight;
            },
            x: -36,
            y: 34,
            clipping: true,
            Column: {
              x: 40,
              y: 25,
              type: Column,
              alwaysScroll: true,
              itemSpacing: 20
            }
          }
        };
      }
    }]);

    return ProductList;
  }(lng.Component);

  var styles$1 = {
    minWidth: 150,
    h: 40,
    radius: 0,
    background: {
      color: 0xff1f1f1f
    },
    icon: {
      color: 0xffffffff
    },
    text: {
      fontSize: 20,
      color: 0xffffffff
    },
    padding: 50,
    stroke: {
      color: 0x00,
      weight: 2
    },
    focused: {
      background: {
        color: 0xffffffff
      },
      text: {
        color: 0xff1f1f1f
      },
      icon: {
        color: 0xff1f1f1f
      }
    },
    fixedText: {
      wordWrap: false,
      textOverflow: 'ellipsis',
      maxLinesSuffix: '...'
    }
  };

  var Button = /*#__PURE__*/function (_withStyles) {
    _inherits(Button, _withStyles);

    var _super = _createSuper(Button);

    function Button() {
      _classCallCheck(this, Button);

      return _super.apply(this, arguments);
    }

    _createClass(Button, [{
      key: "_construct",
      value: function _construct() {
        this._fixed = false;
        this._minWidth = 0;
        this._strokeWeight = 2;
        this._strokeColor = 0x00;
        this._focusedBackgroundColor = this.styles.focused.background.color;
        this._backgroundColor = this.styles.background.color;
        this._textStyles = this.styles.text;
        this._stylesRadius = this.styles.radius;
        this._padding = this.styles.padding;
        this._fixedTextStyles = this.styles.fixedText;
        this._iconColorFocused = this.styles.focused.icon.color;
        this._iconStyles = this.styles.icon;
        this._textColorFocused = this.styles.focused.text.color;
        _get(_getPrototypeOf(Button.prototype), "_construct", this) && _get(_getPrototypeOf(Button.prototype), "_construct", this).call(this);
      }
    }, {
      key: "_init",
      value: function _init() {
        this._setIconError();
      }
    }, {
      key: "_setIconError",
      value: function _setIconError() {
        var _this = this;

        this._Icon && this._Icon.on('txError', function () {
          _this.icon.src = null;

          _this._update();
        });
      }
    }, {
      key: "_focus",
      value: function _focus() {
        if (this._smooth === undefined) this._smooth = true;

        this._update();
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this._update();
      }
    }, {
      key: "_updateColor",
      value: function _updateColor() {
        var color = this.hasFocus() ? getFirstNumber(this.focusedBackground, this._focusedBackgroundColor) : getFirstNumber(this.background, this._backgroundColor);

        if (this._smooth) {
          this.smooth = {
            color: color
          };
        } else {
          this.color = color;
        }
      }
    }, {
      key: "_updateTitle",
      value: function _updateTitle() {
        if (this.title) {
          this._Title.text = _objectSpread2(_objectSpread2({}, this._textStyles), {}, {
            fontColor: this._textStyles.color,
            fontSize: this.fontSize || this._textStyles.fontSize,
            fontFamily: this._textStyles.fontFace || this._textStyles.fontFamily || this.stage._options.defaultFontFace,
            text: this.title
          });
          var color = this.hasFocus() ? getFirstNumber(this.focusedTextColor, this._textColorFocused) : getFirstNumber(this.textColor, this._textStyles.color);

          if (this._smooth) {
            this._Title.smooth = {
              color: color
            };
          } else {
            this._Title.color = color;
          }
        } else {
          this._Title.texture = false;
        }
      }
    }, {
      key: "_updateIcon",
      value: function _updateIcon() {
        if (this.icon && this.icon.src) {
          var _this$icon = this.icon,
              color = _this$icon.color,
              size = _this$icon.size,
              spacing = _this$icon.spacing,
              src = _this$icon.src;

          if (this._Icon) {
            this._Icon.patch({
              w: size,
              h: size,
              icon: src,
              visible: 1,
              flexItem: {
                marginRight: !this._fixed && this.title ? spacing : 0
              }
            });
          } else {
            this._Content.childList.addAt(this.stage.c({
              ref: 'Icon',
              type: Icon,
              w: size,
              h: size,
              icon: src,
              visible: 1,
              flexItem: {
                marginRight: !this._fixed && this.title ? spacing : 0
              }
            }), 0);

            this._setIconError();
          }

          var iconColor = this.hasFocus() ? getFirstNumber(this.focusedIconColor, this._iconColorFocused) : getFirstNumber(color, this._iconStyles.color);

          if (this._smooth) {
            this._Icon.smooth = {
              color: iconColor
            };
          } else {
            this._Icon.color = iconColor;
          }
        } else {
          this._Icon && this._Icon.patch({
            w: 0,
            h: 0,
            visible: 0,
            texture: false,
            flexItem: false
          });
        }
      }
    }, {
      key: "_updateStroke",
      value: function _updateStroke() {
        if (this.stroke && !this.hasFocus()) {
          var radius = this.radius || this._stylesRadius;
          this.texture = lng.Tools.getRoundRect(RoundRect.getWidth(this.w), RoundRect.getHeight(this.h), radius, 0x00, true, 0xffffffff);
          this._Stroke.color = this.strokeColor;
          this._Stroke.texture = lng.Tools.getRoundRect(RoundRect.getWidth(this.w), RoundRect.getHeight(this.h), radius, this.strokeWeight, 0xffffffff, true, this.background);
        } else {
          var _radius = this.radius || this._stylesRadius;

          this.texture = lng.Tools.getRoundRect(RoundRect.getWidth(this.w), RoundRect.getHeight(this.h), _radius);
          this._Stroke.texture = false;
        }
      }
    }, {
      key: "_calcPreTextWidth",
      value: function _calcPreTextWidth() {
        return this.icon && this.icon.src ? this.icon.size + this.icon.spacing : 0;
      }
    }, {
      key: "_updateWidth",
      value: function _updateWidth() {
        var preTextWidth = this._calcPreTextWidth();

        var padding = getFirstNumber(this.padding, this._padding, 10);

        if (this.fixed) {
          this._Title.patch({
            text: _objectSpread2(_objectSpread2({}, this._fixedTextStyles), {}, {
              wordWrapWidth: this.w - padding * 2 - preTextWidth
            })
          });
        } else {
          var w = measureTextWidth(this._Title.text || {}) + padding * 2 + preTextWidth;

          if (w && w > this.minWidth) {
            this.w = w;
            this.fireAncestors('$itemChanged');
            this.signal('buttonWidthChanged', {
              w: this.w
            });
          } else {
            this._w = this.w;
          }
        }
      }
    }, {
      key: "_update",
      value: function _update() {
        if (this._readyForUpdates) {
          this._updateColor();

          this._updateTitle();

          this._updateIcon();

          this._updateStroke();

          this._updateWidth();
        }
      }
    }, {
      key: "_setIcon",
      value: function _setIcon(_ref) {
        var src = _ref.src,
            _ref$size = _ref.size,
            size = _ref$size === void 0 ? 20 : _ref$size,
            _ref$spacing = _ref.spacing,
            spacing = _ref$spacing === void 0 ? 5 : _ref$spacing,
            _ref$color = _ref.color,
            color = _ref$color === void 0 ? 0xffffffff : _ref$color;
        return src ? {
          src: src,
          size: size,
          spacing: spacing,
          color: color
        } : null;
      }
    }, {
      key: "_getLabel",
      value: function _getLabel() {
        return this._label || this._title;
      }
    }, {
      key: "w",
      get: function get() {
        if (this.fixed) return this._w;
        return this.minWidth > this._w ? this.minWidth : this._w;
      },
      set: function set(w) {
        if (this._w !== w) {
          this._w = w;

          this._update();
        }
      }
    }, {
      key: "announce",
      get: function get() {
        if (this._announce) {
          return this._announce;
        } // TODO - Localization?
        // Do we need a locale file with
        // component translations?


        return this.label + ', Button';
      },
      set: function set(announce) {
        _set(_getPrototypeOf(Button.prototype), "_announce", announce, this, true);
      }
    }], [{
      key: "properties",
      get: function get() {
        return ['fixed', 'icon', 'label', 'minWidth', 'radius', 'stroke', 'strokeColor', 'strokeWeight', 'title'];
      }
    }, {
      key: "tags",
      get: function get() {
        return ['Content', {
          name: 'Title',
          path: 'Content.Title'
        }, {
          name: 'Icon',
          path: 'Content.Icon'
        }, 'Stroke'];
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          w: this.styles.w || 0,
          minWidth: this.styles.minWidth,
          h: this.styles.h,
          radius: this.styles.radius,
          strokeColor: this.styles.stroke.color,
          strokeWeight: this.styles.stroke.weight,
          Content: {
            mount: 0.5,
            zIndex: 2,
            x: function x(w) {
              return w / 2;
            },
            y: function y(h) {
              return h / 2;
            },
            flex: {
              direction: 'row',
              alignContent: 'center',
              alignItems: 'center'
            },
            // TODO: Wonky lineHeight / fontsize from Lightning
            // Move title down 2 pixels to _visually_ center it
            // inside the button
            Title: {
              y: 2
            }
          },
          Stroke: {
            zIndex: 1,
            mount: 0.5,
            x: function x(w) {
              return w / 2;
            },
            y: function y(h) {
              return h / 2;
            }
          }
        };
      }
    }]);

    return Button;
  }(withStyles(Base$1, styles$1));

  var Check = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAADgAAAACYjX/eAAABKElEQVQ4EbXSO04DMRAGYHtlWaJYpYMcgSBxAUhFi1KkoUrBJVLmENR0XIDUFOQSCTT0SJEziLXzFOzwD3lIWbLahIAby/b42xnPavUHw3t/OJvxPaj3aF9vjqkOszqDVdL7gCGEo+mUH5n5RGvds1Zd/NoTbDDwPecSxtyVTP8Hg36Fr9S31ReZPeVmhoMANHUuXBehhRiAKIp0E4+KN+VbomEtDwVWRgPQTa4sGxDHcX9jPDJsSQnO+RFRUs0GCYaz59wysxdkDfRmfiF5Iwqny5hdsdV/KGUDvQPUUEq/GmPOjfkcTybcUYqPC8tcZLACZQ3UEPk2/vpLLF8Af+yCibEGygbQA5T8gPn7LbfNTO7K+AHKJhGX0jS00Xlrra7ndlOCM+MLVJf04NpHPKcAAAAASUVORK5CYII=';
  var styles = (function (theme) {
    return {
      w: 54,
      h: 54,
      background: {
        color: getHexColor('#018558', 100)
      },
      unchecked: {
        background: getHexColor('#141417', 30)
      },
      stroke: {
        color: theme.palette.grey[0],
        width: 2
      },
      check: {
        w: 23,
        h: 16,
        src: Check
      }
    };
  });

  var Checkbox = /*#__PURE__*/function (_withStyles) {
    _inherits(Checkbox, _withStyles);

    var _super = _createSuper(Checkbox);

    function Checkbox() {
      _classCallCheck(this, Checkbox);

      return _super.apply(this, arguments);
    }

    _createClass(Checkbox, [{
      key: "_init",
      value: function _init() {
        this._update();
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this.checked = !this.checked;

        this._update();

        return this;
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        this.toggle();
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateCheck();

        this._updateColor();
      }
    }, {
      key: "_updateCheck",
      value: function _updateCheck() {
        if (this.w && this.w !== this.styles.w && this.h && this.h !== this.styles.h) {
          this._Check.patch({
            w: this.styles.check.w * (this.w / this.styles.w),
            h: this.styles.check.h * (this.h / this.styles.h)
          });
        }

        this._Check.smooth = {
          alpha: this.checked ? 1 : 0
        };
      }
    }, {
      key: "_updateColor",
      value: function _updateColor() {
        var fillColor = this.checked ? this.styles.background.color : this.styles.unchecked.background;
        this.patch({
          texture: lng.Tools.getRoundRect(this.w, this.h, this.w / 2, this.styles.stroke.width, this.styles.stroke.color, true, fillColor)
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: this.styles.w,
          h: this.styles.h,
          Check: {
            w: this.styles.check.w,
            h: this.styles.check.h,
            mount: 0.5,
            x: function x(w) {
              return w / 2;
            },
            y: function y(h) {
              return h / 2;
            },
            alpha: 0,
            src: this.styles.check.src
          }
        };
      }
    }, {
      key: "tags",
      get: function get() {
        return ['Check'];
      }
    }]);

    return Checkbox;
  }(withStyles(Base$1, styles));

  var ActionButtonBaseStyles = (function (theme) {
    return {
      minWidth: 410,
      h: 72,
      background: {
        color: theme.palette.background.float
      },
      backgrounds: theme.palette.background,
      radius: theme.border.radius.small,
      text: _objectSpread2(_objectSpread2({}, theme.typography.button1), {}, {
        color: theme.palette.text.light.primary
      }),
      padding: theme.spacing(2),
      shadow: theme.materials.glow,
      icon: {
        color: theme.palette.text.light.primary,
        size: theme.sizes.icon.medium,
        spacing: theme.spacing(1)
      },
      loading: {
        color: getHexColor('ffffff', 24)
      },
      stroke: {
        weight: 2,
        color: theme.palette.grey[10]
      },
      focused: {
        background: {
          color: theme.palette.background.focus
        },
        icon: {
          color: theme.palette.text.dark.primary
        },
        text: {
          color: theme.palette.text.dark.primary
        }
      },
      getFocusScale: theme.getFocusScale,
      checkbox: {
        size: 28,
        spacing: 8
      }
    };
  });

  var ActionButtonBase = /*#__PURE__*/function (_withStyles) {
    _inherits(ActionButtonBase, _withStyles);

    var _super = _createSuper(ActionButtonBase);

    function ActionButtonBase() {
      _classCallCheck(this, ActionButtonBase);

      return _super.apply(this, arguments);
    }

    _createClass(ActionButtonBase, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(ActionButtonBase.prototype), "_construct", this).call(this);

        this._createDropShadow = this.styles.shadow;
        this._checkboxSize = this.styles.checkbox.size;
      }
    }, {
      key: "_setIcon",
      value: function _setIcon(src) {
        return src ? _objectSpread2(_objectSpread2({}, this._iconStyles), {}, {
          src: src
        }) : null;
      }
    }, {
      key: "_setCheckbox",
      value: function _setCheckbox(checkbox) {
        if (checkbox && typeof checkbox.checked === 'boolean') {
          var checked = checkbox.checked,
              _checkbox$spacing = checkbox.spacing,
              spacing = _checkbox$spacing === void 0 ? this.styles.checkbox.spacing : _checkbox$spacing;
          return {
            checked: checked,
            spacing: spacing
          };
        }

        return null;
      }
    }, {
      key: "_updateDropShadow",
      value: function _updateDropShadow() {
        var DropShadow = this._createDropShadow({
          w: this.w,
          h: this.h,
          borderRadius: this._stylesRadius
        });

        this._DropShadow.patch(DropShadow);

        var alpha = Number(this.hasFocus());

        if (this._smooth) {
          this._DropShadow.smooth = {
            alpha: alpha
          };
        } else {
          this._DropShadow.alpha = alpha;
        }
      }
    }, {
      key: "_updateScale",
      value: function _updateScale() {
        var scale = this.hasFocus() ? this.styles.getFocusScale(this.w, this.h) : 1;

        if (this._smooth) {
          this.smooth = {
            scale: scale
          };
        } else {
          this.scale = scale;
        }
      }
    }, {
      key: "_updateLoader",
      value: function _updateLoader() {
        if (!(this.title || this.icon)) {
          this.patch({
            color: 0x00
          });

          this._Title.patch({
            texture: false
          });

          this._Stroke.patch({
            texture: false
          });

          this._Loader.patch({
            texture: lng.Tools.getRoundRect(RoundRect.getWidth(this.w), RoundRect.getHeight(this.h - 2), this._stylesRadius)
          });

          if (this._loading) this._loading.start();
        } else {
          this._Loader.patch({
            texture: false
          });

          if (this._loading) this._loading.stop();
        }
      }
    }, {
      key: "_update",
      value: function _update() {
        if (this._readyForUpdates) {
          this._updateDropShadow();

          this._updateScale();

          this._updateLoader();

          this._updateCheckbox();

          if (this.title || this.icon) _get(_getPrototypeOf(ActionButtonBase.prototype), "_update", this).call(this);
        }
      }
    }, {
      key: "_updateCheckbox",
      value: function _updateCheckbox() {
        if (this.checkbox) {
          var checkboxProps = {
            w: this._checkboxSize,
            h: this._checkboxSize,
            checked: this.checkbox.checked,
            visible: 1,
            flexItem: {
              marginRight: !this._fixed && this.title ? this.checkbox.spacing : 0
            }
          };

          if (this._Checkbox) {
            this._Checkbox.patch(checkboxProps);
          } else {
            this._Content.childList.addAt(this.stage.c(_objectSpread2(_objectSpread2({}, checkboxProps), {}, {
              type: Checkbox,
              ref: 'Checkbox'
            })), 0);
          }
        } else if (this._Checkbox) {
          this._Checkbox.patch({
            w: 0,
            h: 0,
            visible: 0,
            texture: false,
            flexItem: false
          });
        }
      }
    }, {
      key: "_firstEnable",
      value: function _firstEnable() {
        this._loading = this._Loader.animation({
          duration: 2,
          repeat: -1,
          stopMethod: 'immediate',
          actions: [{
            p: 'alpha',
            v: {
              0: 0.5,
              0.5: 1,
              1: 0.5
            }
          }]
        });

        this._loading.start();

        _get(_getPrototypeOf(ActionButtonBase.prototype), "_firstEnable", this) && _get(_getPrototypeOf(ActionButtonBase.prototype), "_firstEnable", this).call(this);
      }
    }, {
      key: "_calcPreTextWidth",
      value: function _calcPreTextWidth() {
        var iconW = _get(_getPrototypeOf(ActionButtonBase.prototype), "_calcPreTextWidth", this).call(this);

        var checkboxW = this._Checkbox && this._Checkbox.w ? this._Checkbox.w + this.checkbox.spacing : 0;
        return iconW + checkboxW;
      }
    }, {
      key: "_setBackgroundType",
      value: function _setBackgroundType(backgroundType) {
        if (this._backgroundType !== backgroundType) {
          if (this.styles) {
            var background = this.styles.backgrounds[backgroundType] || this.styles.backgrounds.float;
            this.background = background;
            this.stroke = backgroundType === 'stroke';

            if (this.stroke) {
              this.strokeWeight = this.styles.stroke.weight;
              this.strokeColor = this.styles.stroke.color;
            }
          }

          return backgroundType;
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return _objectSpread2(_objectSpread2({}, _get(_getPrototypeOf(ActionButtonBase), "_template", this).call(this)), {}, {
          minWidth: this.styles.minWidth,
          h: this.styles.h,
          padding: this.styles.padding,
          radius: this.styles.radius,
          text: this.styles.text,
          focus: this.styles.focus,
          unfocus: this.styles.unfocus,
          backgroundType: 'float',
          Loader: {
            color: this.styles.loading.color
          },
          DropShadow: {
            alpha: 0
          }
        });
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ActionButtonBase), "properties", this)), ['backgroundType', 'checkbox']);
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ActionButtonBase), "tags", this)), ['Loader', 'DropShadow', {
          name: 'Checkbox',
          path: 'Content.Checkbox'
        }]);
      }
    }]);

    return ActionButtonBase;
  }(withStyles(Button, ActionButtonBaseStyles));

  var ActionButton = /*#__PURE__*/function (_ActionButtonBase) {
    _inherits(ActionButton, _ActionButtonBase);

    var _super2 = _createSuper(ActionButton);

    function ActionButton() {
      _classCallCheck(this, ActionButton);

      return _super2.apply(this, arguments);
    }

    return _createClass(ActionButton);
  }(ActionButtonBase);

  var ActionButtonLargeStyles = (function (theme) {
    return {
      h: 96,
      minWidth: 320,
      text: theme.typography.headline1,
      icon: {
        size: theme.sizes.icon.large
      },
      checkbox: {
        size: 36
      }
    };
  });

  var ActionButtonLarge = withStyles( /*#__PURE__*/function (_ActionButton) {
    _inherits(ActionButtonLarge, _ActionButton);

    var _super = _createSuper(ActionButtonLarge);

    function ActionButtonLarge() {
      _classCallCheck(this, ActionButtonLarge);

      return _super.apply(this, arguments);
    }

    return _createClass(ActionButtonLarge);
  }(ActionButton), ActionButtonLargeStyles);

  var ActionButtonIconLargeStyles = (function () {
    return {
      h: 96,
      w: 96
    };
  });

  withStyles( /*#__PURE__*/function (_ActionButtonLarge) {
    _inherits(ActionButtonIconLarge, _ActionButtonLarge);

    var _super = _createSuper(ActionButtonIconLarge);

    function ActionButtonIconLarge() {
      _classCallCheck(this, ActionButtonIconLarge);

      return _super.apply(this, arguments);
    }

    _createClass(ActionButtonIconLarge, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(ActionButtonIconLarge.prototype), "_construct", this).call(this);

        this._fixed = true;
      }
    }]);

    return ActionButtonIconLarge;
  }(ActionButtonLarge), ActionButtonIconLargeStyles);

  var ActionButtonMedium = /*#__PURE__*/function (_ActionButton) {
    _inherits(ActionButtonMedium, _ActionButton);

    var _super = _createSuper(ActionButtonMedium);

    function ActionButtonMedium() {
      _classCallCheck(this, ActionButtonMedium);

      return _super.apply(this, arguments);
    }

    return _createClass(ActionButtonMedium);
  }(ActionButton);

  var ActionButtonIconMediumStyles = (function () {
    return {
      h: 72,
      w: 72
    };
  });

  withStyles( /*#__PURE__*/function (_ActionButtonMedium) {
    _inherits(ActionButtonIconMedium, _ActionButtonMedium);

    var _super = _createSuper(ActionButtonIconMedium);

    function ActionButtonIconMedium() {
      _classCallCheck(this, ActionButtonIconMedium);

      return _super.apply(this, arguments);
    }

    _createClass(ActionButtonIconMedium, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(ActionButtonIconMedium.prototype), "_construct", this).call(this);

        this._fixed = true;
      }
    }]);

    return ActionButtonIconMedium;
  }(ActionButtonMedium), ActionButtonIconMediumStyles);

  var ActionButtonSmallStyles = (function (theme) {
    return {
      h: 64,
      minWidth: 185,
      text: theme.typography.button2,
      icon: {
        size: theme.sizes.icon.small
      },
      checkbox: {
        size: 20
      }
    };
  });

  var ActionButtonSmall = withStyles( /*#__PURE__*/function (_ActionButton) {
    _inherits(ActionButtonSmall, _ActionButton);

    var _super = _createSuper(ActionButtonSmall);

    function ActionButtonSmall() {
      _classCallCheck(this, ActionButtonSmall);

      return _super.apply(this, arguments);
    }

    return _createClass(ActionButtonSmall);
  }(ActionButton), ActionButtonSmallStyles);

  var ActionButtonIconSmallStyles = (function () {
    return {
      h: 64,
      w: 64
    };
  });

  withStyles( /*#__PURE__*/function (_ActionButtonSmall) {
    _inherits(ActionButtonIconSmall, _ActionButtonSmall);

    var _super = _createSuper(ActionButtonIconSmall);

    function ActionButtonIconSmall() {
      _classCallCheck(this, ActionButtonIconSmall);

      return _super.apply(this, arguments);
    }

    _createClass(ActionButtonIconSmall, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(ActionButtonIconSmall.prototype), "_construct", this).call(this);

        this._fixed = true;
      }
    }]);

    return ActionButtonIconSmall;
  }(ActionButtonSmall), ActionButtonIconSmallStyles);

  var ActionButtonXsmallStyles = (function (theme) {
    return {
      h: 48,
      minWidth: 152,
      text: theme.typography.button2,
      icon: {
        size: theme.sizes.icon.small
      },
      checkbox: {
        size: 20
      }
    };
  });

  withStyles( /*#__PURE__*/function (_ActionButton) {
    _inherits(ActionButtonXsmall, _ActionButton);

    var _super = _createSuper(ActionButtonXsmall);

    function ActionButtonXsmall() {
      _classCallCheck(this, ActionButtonXsmall);

      return _super.apply(this, arguments);
    }

    return _createClass(ActionButtonXsmall);
  }(ActionButton), ActionButtonXsmallStyles);

  var ProductCheckoutDetail = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(ProductCheckoutDetail, _Lightning$Component);

    var _super = _createSuper(ProductCheckoutDetail);

    function ProductCheckoutDetail() {
      _classCallCheck(this, ProductCheckoutDetail);

      return _super.apply(this, arguments);
    }

    _createClass(ProductCheckoutDetail, null, [{
      key: "_template",
      value: function _template() {
        var width = 408;
        var height = 1080;
        var yOffset = 20;
        var white = 0xffffffff;
        var gray = 0xffa6a4a2;
        return {
          w: width,
          h: height,
          ThanksMessage: {
            FirstMessage: {
              type: TextBox,
              w: function w(_w) {
                return _w;
              },
              content: "Thank you.",
              style: 'headline3',
              textColor: white
            },
            SecondMessage: {
              type: TextBox,
              y: yOffset + 20,
              w: function w(_w2) {
                return _w2;
              },
              content: 'Your order has been placed',
              style: 'headline3',
              textColor: white
            },
            ConfirmMessage: {
              type: TextBox,
              y: yOffset + 80,
              style: 'body3',
              textColor: gray,
              wordWrap: true,
              wordWrapWidth: width - 20,
              content: 'A confirmation email has been sent to you.'
            },
            MailHeadline: {
              type: TextBox,
              y: yOffset + 180,
              w: function w(_w3) {
                return _w3;
              },
              content: 'Email Address',
              style: 'headline3',
              textColor: white
            },
            EmailAddress: {
              type: TextBox,
              y: yOffset + 220,
              style: 'body3',
              textColor: gray,
              content: 'Joshua.Feldman@nbcuni.com'
            },
            ShippingHeadline: {
              type: TextBox,
              y: yOffset + 280,
              w: function w(_w4) {
                return _w4;
              },
              content: 'Shipping Address',
              style: 'headline3',
              textColor: white
            },
            ShippingAddress: {
              type: TextBox,
              y: yOffset + 320,
              w: function w(_w5) {
                return _w5;
              },
              content: 'Josh Feldman           30 Rockefeller Plaza New York, NY 10112 (646) 729-5063',
              wordWrap: true,
              color: gray,
              style: 'body3',
              wordWrapWidth: width / 1.8
            },
            Payment: {
              type: TextBox,
              y: yOffset + 480,
              w: function w(_w6) {
                return _w6;
              },
              content: 'Payment',
              style: 'headline3',
              textColor: gray
            }
          }
        };
      }
    }]);

    return ProductCheckoutDetail;
  }(lng.Component);

  var ProductCheckout = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(ProductCheckout, _Lightning$Component);

    var _super = _createSuper(ProductCheckout);

    function ProductCheckout() {
      _classCallCheck(this, ProductCheckout);

      return _super.apply(this, arguments);
    }

    _createClass(ProductCheckout, [{
      key: "_active",
      value: function _active() {
        this._setState('CheckoutButtonFocused');
      }
    }, {
      key: "_subtotal",
      get: function get() {
        return this.tag('SubTotalPrice');
      }
    }, {
      key: "_shipping",
      get: function get() {
        return this.tag('ShippingPrice');
      }
    }, {
      key: "_taxes",
      get: function get() {
        return this.tag('TaxesPrice');
      }
    }, {
      key: "_totalPrice",
      get: function get() {
        return this.tag('TotalPrice');
      }
    }, {
      key: "_checkoutDetail",
      get: function get() {
        return this.tag('CheckOutDetail');
      }
    }, {
      key: "_getFixed",
      value: function _getFixed(value) {
        return Math.round(value, -2).toFixed(2);
      }
    }, {
      key: "dataCheckout",
      set: function set(value) {
        var price = value.price / 100;

        var tax = this._getFixed(price * 0.07);

        var total = this._getFixed(price + price * 0.07);

        this._subtotal.content = "$ ".concat((value.price / 100).toFixed(2)); // this._shipping.content = value.freeShipping ? 'Free' : 'Not Included'

        this._taxes.content = "$ ".concat(tax);
        this._totalPrice.content = "$ ".concat(total);
      }
    }], [{
      key: "_template",
      value: function _template() {
        var width = 408;
        var height = 1080;
        var yOffset = 20;
        var xFarRight = 410;
        var white = 0xffffffff;
        var gray = 0xffd6d5d5;
        return {
          w: width,
          h: height,
          Divider: {
            h: 2,
            w: function w(_w) {
              return _w;
            },
            rect: true,
            color: gray
          },
          CheckoutInfo: {
            w: function w(_w2) {
              return _w2;
            },
            SubTotalHeadline: {
              y: yOffset,
              type: TextBox,
              content: 'SUBTOTAL',
              style: 'headline3',
              textColor: white
            },
            SubTotalPrice: {
              y: yOffset + 5,
              type: TextBox,
              style: 'body3',
              textColor: gray,
              x: xFarRight,
              mountX: 1
            },
            ShippingHeadline: {
              y: yOffset + 50,
              type: TextBox,
              content: 'SHIPPING',
              style: 'headline3',
              textColor: white
            },
            ShippingPrice: {
              y: yOffset + 55,
              type: TextBox,
              style: 'body3',
              content: 'Free',
              textColor: gray,
              x: xFarRight,
              mountX: 1
            },
            TaxesHeadline: {
              y: yOffset + 100,
              type: TextBox,
              content: 'TAXES',
              style: 'headline3',
              textColor: white
            },
            TaxesPrice: {
              y: yOffset + 105,
              type: TextBox,
              style: 'body3',
              textColor: gray,
              x: xFarRight,
              mountX: 1
            },
            TotalHeadline: {
              y: 220,
              type: TextBox,
              content: 'TOTAL',
              style: 'headline3',
              textColor: white
            },
            TotalPrice: {
              y: 220,
              x: xFarRight,
              type: TextBox,
              style: 'headline3',
              textColor: gray,
              mountX: 1
            },
            Divider2: {
              h: 3,
              w: function w(_w3) {
                return _w3;
              },
              y: 190,
              rect: true,
              color: gray
            },
            CheckoutButton: {
              y: 300,
              type: ActionButton,
              title: 'Checkout',
              backgroundType: 'stroke'
            },
            BackButton: {
              y: 400,
              type: ActionButton,
              title: 'Back to details',
              backgroundType: 'stroke'
            }
          },
          CheckOutDetail: {
            y: yOffset,
            alpha: 0,
            type: ProductCheckoutDetail
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this) {
          _inherits(CheckoutButtonFocused, _this);

          var _super2 = _createSuper(CheckoutButtonFocused);

          function CheckoutButtonFocused() {
            _classCallCheck(this, CheckoutButtonFocused);

            return _super2.apply(this, arguments);
          }

          _createClass(CheckoutButtonFocused, [{
            key: "_getFocused",
            value: function _getFocused() {
              return this.tag('CheckoutButton');
            }
          }, {
            key: "_handleEnter",
            value: function _handleEnter() {
              this._setState('CheckoutDetailFocused');
            }
          }, {
            key: "_handleDown",
            value: function _handleDown() {
              this._setState('BackButtonFocused');
            }
          }]);

          return CheckoutButtonFocused;
        }(this), /*#__PURE__*/function (_this2) {
          _inherits(BackButtonFocused, _this2);

          var _super3 = _createSuper(BackButtonFocused);

          function BackButtonFocused() {
            _classCallCheck(this, BackButtonFocused);

            return _super3.apply(this, arguments);
          }

          _createClass(BackButtonFocused, [{
            key: "_getFocused",
            value: function _getFocused() {
              return this.tag('BackButton');
            }
          }, {
            key: "_handleUp",
            value: function _handleUp() {
              this._setState('CheckoutButtonFocused');
            }
          }, {
            key: "_handleEnter",
            value: function _handleEnter() {
              this.signal('returnDetail');
            }
          }]);

          return BackButtonFocused;
        }(this), /*#__PURE__*/function (_this3) {
          _inherits(CheckoutDetailFocused, _this3);

          var _super4 = _createSuper(CheckoutDetailFocused);

          function CheckoutDetailFocused() {
            _classCallCheck(this, CheckoutDetailFocused);

            return _super4.apply(this, arguments);
          }

          _createClass(CheckoutDetailFocused, [{
            key: "$enter",
            value: function $enter() {
              this._checkoutDetail.setSmooth('alpha', 1);

              this.tag('CheckoutInfo').setSmooth('alpha', 0);
            }
          }, {
            key: "_handleBack",
            value: function _handleBack() {
              this._checkoutDetail.setSmooth('alpha', 0);

              this.tag('CheckoutInfo').setSmooth('alpha', 1);

              this._setState('CheckoutButtonFocused');
            }
          }]);

          return CheckoutDetailFocused;
        }(this)];
      }
    }]);

    return ProductCheckout;
  }(lng.Component);

  var ProductDetail = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(ProductDetail, _Lightning$Component);

    var _super = _createSuper(ProductDetail);

    function ProductDetail() {
      _classCallCheck(this, ProductDetail);

      return _super.apply(this, arguments);
    }

    _createClass(ProductDetail, [{
      key: "_active",
      value: function _active() {
        this._setState('PurchaseButtonFocused');
      }
    }, {
      key: "_onProductSelected",
      value: function _onProductSelected() {
        this.tag('ProductInfo').setSmooth('alpha', 0);

        this._mobileButton.setSmooth('alpha', 0);

        this._purchaseButton.setSmooth('alpha', 0);

        this.product = this._productList.selectedItem;
        this.tag('ProductInfo').setSmooth('alpha', 1);

        this._mobileButton.setSmooth('alpha', 1);

        this._purchaseButton.setSmooth('alpha', 1);

        this._setState('MobileButtonFocused');
      }
    }, {
      key: "_onReturnDetail",
      value: function _onReturnDetail() {
        this._setState('MobileButtonFocused');
      }
    }, {
      key: "_changeYPosition",
      value: function _changeYPosition(value) {
        this._productPrice.y = value > 24 ? 340 : 290;
        this._productDescription.y = value > 24 ? 377 : 327;
        this._mobileButton.y = value > 24 ? 637 : 587;
        this._purchaseButton.y = value > 24 ? 535 : 485;
        this._productCheckout.y = value > 24 ? 408 : 358;
        this._productList.y = value > 24 ? 740 : 690;
      }
    }, {
      key: "_showDetail",
      set: function set(value) {
        this._productDescription.setSmooth('alpha', value);

        this._productList.setSmooth('alpha', value);

        this._mobileButton.setSmooth('alpha', value);

        this._purchaseButton.setSmooth('alpha', value);
      }
    }, {
      key: "_mobileButton",
      get: function get() {
        return this.tag('MobileButton');
      }
    }, {
      key: "_purchaseButton",
      get: function get() {
        return this.tag('PurchaseButton');
      }
    }, {
      key: "_productList",
      get: function get() {
        return this.tag('ProductList');
      }
    }, {
      key: "_productImage",
      get: function get() {
        return this.tag('ProductPhoto');
      }
    }, {
      key: "_productTitle",
      get: function get() {
        return this.tag('ProductTitle');
      }
    }, {
      key: "product",
      set: function set(value) {
        this._productTitle.content = value.title;
        this._productImage.src = value.image;
        this._productPrice.content = value.subtitle;
        this._productDescription.content = value.description;
        this._productCheckout.dataCheckout = value.checkoutInfo;

        this._changeYPosition(value.title.length);
      }
    }, {
      key: "brand",
      set: function set(value) {
        this._productList.brand = value;
      }
    }, {
      key: "_productPrice",
      get: function get() {
        return this.tag('ProductPrice');
      }
    }, {
      key: "_productDescription",
      get: function get() {
        return this.tag('ProductDescription');
      }
    }, {
      key: "_productCheckout",
      get: function get() {
        return this.tag('ProductCheckout');
      }
    }], [{
      key: "_template",
      value: function _template() {
        var width = 408;
        var height = 1080;
        return {
          w: width,
          h: height,
          ProductInfo: {
            w: function w(_w) {
              return _w;
            },
            ProductPhoto: {
              w: width,
              h: 232,
              type: Tile$1,
              src: Utils.asset('images/creamercanister.jpeg')
            },
            ProductTitle: {
              y: 247,
              type: TextBox,
              style: 'headline2',
              textColor: 0xffffffff,
              maxLines: 2,
              wordWrap: true,
              wordWrapWidth: width
            },
            ProductPrice: {
              y: 290,
              type: TextBox,
              style: 'body3',
              textColor: 0xffd6d5d5
            },
            ProductDescription: {
              y: 327,
              type: TextBox,
              style: 'body3',
              textColor: 0xffa6a4a2,
              maxLines: 4,
              wordWrap: true,
              wordWrapWidth: width
            },
            ProductCheckout: {
              y: 358,
              alpha: 0,
              type: ProductCheckout,
              signals: {
                returnDetail: '_onReturnDetail'
              }
            }
          },
          PurchaseButton: {
            y: 485,
            type: ActionButton,
            title: 'Purchase Now',
            backgroundType: 'stroke'
          },
          MobileButton: {
            y: 587,
            type: ActionButton,
            title: 'Send to Mobile',
            backgroundType: 'stroke'
          },
          ProductList: {
            y: 700,
            type: ProductList,
            title: 'SIMILAR ITEMS',
            _section: 'detail',
            signals: {
              productSelected: '_onProductSelected'
            }
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this) {
          _inherits(MobileButtonFocused, _this);

          var _super2 = _createSuper(MobileButtonFocused);

          function MobileButtonFocused() {
            _classCallCheck(this, MobileButtonFocused);

            return _super2.apply(this, arguments);
          }

          _createClass(MobileButtonFocused, [{
            key: "_getFocused",
            value: function _getFocused() {
              return this._mobileButton;
            }
          }, {
            key: "_handleUp",
            value: function _handleUp() {
              this._setState('PurchaseButtonFocused');
            }
          }, {
            key: "_handleDown",
            value: function _handleDown() {
              this._setState('ProductListFocused');
            }
          }]);

          return MobileButtonFocused;
        }(this), /*#__PURE__*/function (_this2) {
          _inherits(PurchaseButtonFocused, _this2);

          var _super3 = _createSuper(PurchaseButtonFocused);

          function PurchaseButtonFocused() {
            _classCallCheck(this, PurchaseButtonFocused);

            return _super3.apply(this, arguments);
          }

          _createClass(PurchaseButtonFocused, [{
            key: "_getFocused",
            value: function _getFocused() {
              return this._purchaseButton;
            }
          }, {
            key: "_handleDown",
            value: function _handleDown() {
              this._setState('MobileButtonFocused');
            }
          }, {
            key: "_handleEnter",
            value: function _handleEnter() {
              this._setState('ProductCheckoutFocused');
            }
          }]);

          return PurchaseButtonFocused;
        }(this), /*#__PURE__*/function (_this3) {
          _inherits(ProductListFocused, _this3);

          var _super4 = _createSuper(ProductListFocused);

          function ProductListFocused() {
            _classCallCheck(this, ProductListFocused);

            return _super4.apply(this, arguments);
          }

          _createClass(ProductListFocused, [{
            key: "_getFocused",
            value: function _getFocused() {
              return this._productList;
            }
          }, {
            key: "_handleUp",
            value: function _handleUp() {
              this._setState('MobileButtonFocused');
            }
          }, {
            key: "_handleBack",
            value: function _handleBack() {
              this._setState('PurchaseButtonFocused');
            }
          }]);

          return ProductListFocused;
        }(this), /*#__PURE__*/function (_this4) {
          _inherits(ProductCheckoutFocused, _this4);

          var _super5 = _createSuper(ProductCheckoutFocused);

          function ProductCheckoutFocused() {
            _classCallCheck(this, ProductCheckoutFocused);

            return _super5.apply(this, arguments);
          }

          _createClass(ProductCheckoutFocused, [{
            key: "$enter",
            value: function $enter() {
              this._showDetail = false;

              this._productCheckout.setSmooth('alpha', 1);
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this._productCheckout.setSmooth('alpha', 0);

              this._showDetail = true;
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this._productCheckout;
            }
          }, {
            key: "_handleBack",
            value: function _handleBack() {
              this._setState('PurchaseButtonFocused');
            }
          }]);

          return ProductCheckoutFocused;
        }(this)];
      }
    }]);

    return ProductDetail;
  }(lng.Component);

  var InfoSection = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(InfoSection, _Lightning$Component);

    var _super = _createSuper(InfoSection);

    function InfoSection() {
      _classCallCheck(this, InfoSection);

      return _super.apply(this, arguments);
    }

    _createClass(InfoSection, [{
      key: "_init",
      value: function _init() {
        this._getProducts();
      }
    }, {
      key: "_active",
      value: function _active() {
        this._setState('ShopFrameFocused');
      }
    }, {
      key: "_getProducts",
      value: function () {
        var _getProducts2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var usePlaceholder, products, shopProducts;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  usePlaceholder = QueryParams$1.get('placeholder');

                  if (!(usePlaceholder == 'true')) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 4;
                  return API$1.get_products();

                case 4:
                  _context.t0 = _context.sent.results;
                  _context.next = 8;
                  break;

                case 7:
                  _context.t0 = results;

                case 8:
                  products = _context.t0;
                  shopProducts = products.slice(0, 2);
                  this._frameProducts.items = shopProducts.map(function (product) {
                    var produtImage = usePlaceholder === 'true' ? Utils.asset("images/products/".concat(cutImageURL(product.variants[0].images[0].url))) : product.variants[0].images[0].url;
                    return {
                      type: ProductItem,
                      image: produtImage,
                      title: product.name,
                      subtitle: "$ ".concat((product.variants[0].offers[0].price / 100).toFixed(2)),
                      data: product
                    };
                  });

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _getProducts() {
          return _getProducts2.apply(this, arguments);
        }

        return _getProducts;
      }()
    }, {
      key: "_frameProducts",
      get: function get() {
        return this.tag('FrameProducts');
      }
    }, {
      key: "_bravoNavigation",
      set: function set(value) {
        var condition = !value ? 50 : -50;
        var conditionBravo = !value ? 20 : -20;
        this.tag('ShopNow').y = this.tag('ShopNow').y + condition;
        this.tag('ShopFrame').y = this.tag('ShopFrame').y + condition;
        this._frameProducts.y = this._frameProducts.y + condition;
        this.tag('BravoSection').y = this.tag('BravoSection').y + condition;
        this.tag('BravoTitle').y = this.tag('BravoTitle').y + conditionBravo;
      }
    }], [{
      key: "_template",
      value: function _template() {
        var width = 460;
        var gray = 0xffd6d5d5;
        var roundedRectangleShader = {
          type: lng.shaders.RoundedRectangle,
          radius: 10
        };
        return {
          ShopNow: {
            type: TextBox,
            style: 'headline3',
            textColor: 0xffffffff,
            zIndex: 0,
            content: 'SHOP NOW'
          },
          ShopFrame: {
            type: Tile$1,
            backgroundType: 'stroke',
            y: 75,
            w: 420,
            h: 500,
            color: 0xff141417,
            stroke: 4,
            zIndex: 0,
            FrameBackground: {
              rect: true,
              color: 0xff000000,
              w: width,
              h: 520,
              x: -19,
              zIndex: 98,
              shader: roundedRectangleShader
            },
            FrameBadge: {
              type: Badge,
              zIndex: 99,
              x: 1,
              y: -10,
              title: 'AD',
              textPosition: {
                x: 9,
                y: 4
              },
              textProperties: {
                textColor: 0xff000000,
                fontSize: 21,
                fontStyle: 'bold'
              },
              background: {
                color: 0xffffffff,
                h: 36,
                rect: true,
                shader: roundedRectangleShader
              },
              padding: 9
            },
            FrameImage: {
              x: -19,
              y: -23,
              BrandPhoto: {
                type: BrandPhoto,
                image: {
                  image: 'projectrunway_seriesart.png',
                  title: {
                    content: 'Project Runway',
                    y: 151
                  },
                  subtitle: {
                    content: 'with',
                    y: 201
                  },
                  width: width - 2,
                  height: 265
                },
                subImage: {
                  image: 'maybelline_logo_white_smaller.png',
                  show: true,
                  y: 211,
                  width: 240,
                  height: 22
                }
              },
              Divider2: {
                h: 1,
                w: width - 43,
                x: 15,
                y: 255,
                zIndex: 99,
                rect: true,
                color: gray
              }
            }
          },
          FrameProducts: {
            type: Column,
            zIndex: 99,
            width: width,
            alwaysScroll: true,
            itemSpacing: 5,
            x: -10,
            y: 328
          },
          BravoSection: {
            y: 620,
            w: width,
            h: 400,
            zIndex: 99,
            BravoTitle: {
              type: TextBox,
              content: 'MORE FROM BRAVO',
              style: 'headline3',
              textColor: 0xffffffff
            },
            BravoImage: {
              type: Tile$1,
              backgroundType: 'stroke',
              src: Utils.asset('images/brands/top-chef_thumb.jpeg'),
              stroke: 2,
              y: 50,
              w: 400,
              zIndex: 99,
              h: 280
            }
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this) {
          _inherits(ShopFrameFocused, _this);

          var _super2 = _createSuper(ShopFrameFocused);

          function ShopFrameFocused() {
            _classCallCheck(this, ShopFrameFocused);

            return _super2.apply(this, arguments);
          }

          _createClass(ShopFrameFocused, [{
            key: "_getFocused",
            value: function _getFocused() {
              return this.tag('ShopFrame');
            }
          }, {
            key: "_handleDown",
            value: function _handleDown() {
              this._setState('BravoSectionFocused');
            }
          }]);

          return ShopFrameFocused;
        }(this), /*#__PURE__*/function (_this2) {
          _inherits(BravoSectionFocused, _this2);

          var _super3 = _createSuper(BravoSectionFocused);

          function BravoSectionFocused() {
            _classCallCheck(this, BravoSectionFocused);

            return _super3.apply(this, arguments);
          }

          _createClass(BravoSectionFocused, [{
            key: "_getFocused",
            value: function _getFocused() {
              return this.tag('BravoImage');
            }
          }, {
            key: "$enter",
            value: function $enter() {
              this._bravoNavigation = true;
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this._bravoNavigation = false;
            }
          }, {
            key: "_handleUp",
            value: function _handleUp() {
              this._setState('ShopFrameFocused');
            }
          }]);

          return BravoSectionFocused;
        }(this)];
      }
    }]);

    return InfoSection;
  }(lng.Component);

  var StoreSection = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(StoreSection, _Lightning$Component);

    var _super = _createSuper(StoreSection);

    function StoreSection() {
      _classCallCheck(this, StoreSection);

      return _super.apply(this, arguments);
    }

    _createClass(StoreSection, [{
      key: "_init",
      value: function _init() {
        this._setState('ProductListFocused');
      }
    }, {
      key: "_onProductSelected",
      value: function _onProductSelected() {
        this._setState('ProductDetailFocused');
      }
    }, {
      key: "_productListSection",
      get: function get() {
        return this.tag('ProductListSection');
      }
    }, {
      key: "_productList",
      get: function get() {
        return this._productListSection.tag('ProductList');
      }
    }, {
      key: "_productDetail",
      get: function get() {
        return this.tag('ProductDetail');
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          ProductListSection: {
            w: 460,
            h: 1080,
            y: -101,
            BrandCover: {
              type: BrandPhoto,
              image: {
                image: 'projectrunway_seriesart.png',
                title: {
                  content: 'Project Runway',
                  y: 121
                },
                subtitle: {
                  content: 'with',
                  y: 171
                },
                width: 408,
                height: 231
              },
              subImage: {
                image: 'maybelline_logo_white_smaller.png',
                show: true,
                y: 181,
                width: 240,
                height: 22
              }
            },
            ProductList: {
              y: 251,
              type: ProductList,
              title: 'SHOP NOW',
              signals: {
                productSelected: '_onProductSelected'
              }
            }
          },
          ProductDetail: {
            x: 1,
            y: -101,
            alpha: 0,
            type: ProductDetail
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this) {
          _inherits(ProductListFocused, _this);

          var _super2 = _createSuper(ProductListFocused);

          function ProductListFocused() {
            _classCallCheck(this, ProductListFocused);

            return _super2.apply(this, arguments);
          }

          _createClass(ProductListFocused, [{
            key: "$enter",
            value: function $enter() {
              this._productListSection.setSmooth('alpha', 1);

              this._productDetail.setSmooth('alpha', 0);

              this.fireAncestors('$changeTabsVisibility', false);
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this._productList;
            }
          }]);

          return ProductListFocused;
        }(this), /*#__PURE__*/function (_this2) {
          _inherits(ProductDetailFocused, _this2);

          var _super3 = _createSuper(ProductDetailFocused);

          function ProductDetailFocused() {
            _classCallCheck(this, ProductDetailFocused);

            return _super3.apply(this, arguments);
          }

          _createClass(ProductDetailFocused, [{
            key: "$enter",
            value: function $enter() {
              this._productDetail.brand = this._productList.selectedItem.brand;
              this._productDetail.product = this._productList.selectedItem;

              this._productDetail.setSmooth('alpha', 1);

              this._productListSection.setSmooth('alpha', 0);

              this.fireAncestors('$changeTabsVisibility', false);
            } // $exit() {
            //     this.fireAncestors('$changeTabsVisibility', true)
            // }

          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this._productDetail;
            }
          }, {
            key: "_handleBack",
            value: function _handleBack() {
              this._setState('ProductListFocused');
            }
          }, {
            key: "_handleKey",
            value: function _handleKey() {
              return true;
            }
          }]);

          return ProductDetailFocused;
        }(this)];
      }
    }]);

    return StoreSection;
  }(lng.Component);

  /*#__PURE__*/(function (_Lightning$Component) {
    _inherits(SportsSection, _Lightning$Component);

    var _super = _createSuper(SportsSection);

    function SportsSection() {
      _classCallCheck(this, SportsSection);

      return _super.apply(this, arguments);
    }

    _createClass(SportsSection, null, [{
      key: "_template",
      value: function _template() {
        return {
          SportsHeader: {
            type: TextBox,
            style: 'headline3',
            textColor: 0xffffffff,
            x: 10,
            content: 'SPORTS'
          }
        };
      }
    }]);

    return SportsSection;
  })(lng.Component);

  var BaseTab = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(BaseTab, _Lightning$Component);

    var _super = _createSuper(BaseTab);

    function BaseTab() {
      _classCallCheck(this, BaseTab);

      return _super.apply(this, arguments);
    }

    _createClass(BaseTab, [{
      key: "_init",
      value: function _init() {
        this._content.patch({
          alpha: 0,
          zIndex: 3
        });
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this._content;
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this._focused = true;
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this._focused = false;
      }
    }, {
      key: "_focused",
      set: function set(value) {
        this._content.setSmooth('alpha', value);
      }
    }, {
      key: "_content",
      get: function get() {
        return this.tag('Content');
      }
    }, {
      key: "tab",
      get: function get() {
        return this.tag('Tab');
      },
      set: function set(value) {
        this.tab.patch(value);
      }
    }, {
      key: "icon",
      set: function set(value) {
        this.tab.tag('Icon').patch(value);
      }
    }, {
      key: "label",
      set: function set(value) {
        this.tab.tag('Label').patch(value);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Tab: {
            w: 160,
            zIndex: 99,
            color: 0xff28282c,
            Icon: {
              y: 10,
              w: 30,
              h: 30,
              type: Icon
            },
            Label: {
              x: 43,
              type: TextBox,
              style: 'headline2'
            }
          },
          Content: {}
        };
      }
    }]);

    return BaseTab;
  }(lng.Component);

  var InfoTab = /*#__PURE__*/function (_BaseTab) {
    _inherits(InfoTab, _BaseTab);

    var _super = _createSuper(InfoTab);

    function InfoTab() {
      _classCallCheck(this, InfoTab);

      return _super.apply(this, arguments);
    }

    _createClass(InfoTab, [{
      key: "index",
      set: function set(value) {
        this.tag('Tab').x = value == 0 ? 50 : this.tag('Tab').x + value;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return _objectSpread2(_objectSpread2({}, _get(_getPrototypeOf(InfoTab), "_template", this).call(this)), {}, {
          icon: {
            icon: Utils.asset('images/icons/icon-feather-info_2x.png')
          },
          label: {
            content: 'Info'
          },
          tab: {
            w: 106,
            x: 50,
            h: 56
          },
          Content: {
            y: 106,
            w: 800,
            h: 2000,
            type: InfoSection
          }
        });
      }
    }]);

    return InfoTab;
  }(BaseTab);

  var StoreTab = /*#__PURE__*/function (_BaseTab) {
    _inherits(StoreTab, _BaseTab);

    var _super = _createSuper(StoreTab);

    function StoreTab() {
      _classCallCheck(this, StoreTab);

      return _super.apply(this, arguments);
    }

    _createClass(StoreTab, [{
      key: "index",
      set: function set(value) {
        this.tag('Tab').x = value == 0 ? 220 : this.tag('Tab').x + value;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return _objectSpread2(_objectSpread2({}, _get(_getPrototypeOf(StoreTab), "_template", this).call(this)), {}, {
          icon: {
            icon: Utils.asset('images/icons/icon-feather-shopping-bag_2x.png')
          },
          label: {
            content: 'Shop'
          },
          tab: {
            x: 220,
            w: 110,
            h: 56
          },
          Content: {
            y: 122,
            type: StoreSection
          }
        });
      }
    }]);

    return StoreTab;
  }(BaseTab);

  var Sidekick = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Sidekick, _Lightning$Component);

    var _super = _createSuper(Sidekick);

    function Sidekick() {
      _classCallCheck(this, Sidekick);

      return _super.apply(this, arguments);
    }

    _createClass(Sidekick, [{
      key: "_init",
      value: function _init() {
        this._startX = 1349;
        this.patch({
          x: this._startX + this.w
        });

        this._setState('Showing');
      }
    }, {
      key: "_firstEnable",
      value: function _firstEnable() {
        this._currentIndex = 1;

        this._updateFocusedIndicator(false);
      }
    }, {
      key: "_updateFocusedIndicator",
      value: function _updateFocusedIndicator() {
        var smooth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var currentTab = this.selected.tab;
        var values = {
          x: this.tag('Tabs').x + currentTab.x + currentTab.w * 0.5
        };
        var patch = smooth ? {
          smooth: values
        } : _objectSpread2({}, values);

        this._focusIndicator.patch(patch);

        this.tag('ShadowTab').patch(patch);
      }
    }, {
      key: "$changeTabsVisibility",
      value: function $changeTabsVisibility(value) {
        this._tabs.forEach(function (tab) {
          return tab.tab.alpha = value;
        });

        this._focusIndicator.alpha = value;
        this.tag('ShadowTab').alpha = value;
      }
    }, {
      key: "_toggleGradient",
      value: function _toggleGradient(index) {
        this.tag('Left').alpha = index == 0 ? 0 : 1;
        this.tag('Right').alpha = index == 2 ? 0 : 1;
      }
    }, {
      key: "_focusIndicator",
      get: function get() {
        return this.tag('FocusIndicator');
      }
    }, {
      key: "_tabs",
      get: function get() {
        return this.tag('Tabs').children;
      }
    }, {
      key: "currentIndex",
      get: function get() {
        return this._currentIndex;
      },
      set: function set(value) {
        this._currentIndex = clamp(value, 0, this._tabs.length - 1);

        this._updateFocusedIndicator();
      }
    }, {
      key: "selected",
      get: function get() {
        return this._tabs[this.currentIndex];
      }
    }, {
      key: "_tabsPosition",
      set: function set(value) {
        this._tabs.forEach(function (tab) {
          return tab.index = value;
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        var width = 571;
        var height = 1080;
        var roundedRectangleShader = {
          type: lng.shaders.RoundedRectangle,
          radius: 40
        };
        return {
          w: width,
          h: height + 1,
          y: -1,
          Background: {
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            Fill: {
              x: width / 2,
              y: 1,
              w: function w(_w2) {
                return _w2;
              },
              h: function h(_h2) {
                return _h2;
              },
              rect: true,
              color: 0xff111113
            },
            Image: {
              w: function w(_w3) {
                return _w3;
              },
              h: function h(_h3) {
                return _h3;
              },
              src: Utils.asset('images/background4.png'),
              shader: roundedRectangleShader
            }
          },
          FocusIndicator: {
            w: 160,
            h: 5,
            y: 124,
            mountX: 0.5,
            rect: true,
            color: 0xffffffff,
            alpha: 1,
            shader: {
              type: lng.shaders.RoundedRectangle,
              radius: 10
            }
          },
          ShadowTab: {
            w: 220,
            h: 29,
            y: 128,
            mountX: 0.5,
            zIndex: 97,
            rect: true,
            colorUr: 0xff24242A,
            colorBr: 0x00000000,
            colorUl: 0xff0E1113,
            colorBl: 0x00000000,
            alpha: 1,
            shader: {
              type: lng.shaders.RoundedRectangle,
              radius: 5
            }
          },
          Gradient: {
            zIndex: 2,
            w: function w(_w4) {
              return _w4;
            },
            h: function h(_h4) {
              return _h4;
            },
            Left: {
              rect: true,
              w: function w(_w5) {
                return _w5 * 0.4;
              },
              h: function h(_h5) {
                return _h5;
              },
              colorUl: 0xff000000,
              colorBl: 0xff000000,
              colorUr: 0x00000000,
              colorBr: 0x00000000,
              shader: roundedRectangleShader
            },
            Right: {
              mountX: 1,
              x: width,
              rect: true,
              w: function w(_w6) {
                return _w6 * 0.4;
              },
              h: function h(_h6) {
                return _h6;
              },
              colorUr: 0xff000000,
              colorBr: 0xff000000,
              colorUl: 0x00000000,
              colorBl: 0x00000000,
              shader: roundedRectangleShader
            }
          },
          Tabs: {
            x: 79,
            y: 60,
            InfoTab: {
              type: InfoTab
            },
            StoreTab: {
              type: StoreTab
            }
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this) {
          _inherits(Showing, _this);

          var _super2 = _createSuper(Showing);

          function Showing() {
            _classCallCheck(this, Showing);

            return _super2.apply(this, arguments);
          }

          _createClass(Showing, [{
            key: "$enter",
            value: function $enter() {
              this.currentIndex = 1; // this._tabsPosition = -60

              this.setSmooth('x', this._startX, {
                duration: 0.5
              });
              this.$changeTabsVisibility(false);
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this.selected;
            }
          }, {
            key: "_handleRight",
            value: function _handleRight() {
              // this._tabsPosition = -30
              this.currentIndex++;
              if (this.currentIndex == 1) this.$changeTabsVisibility(false);

              this._toggleGradient(this.currentIndex);
            }
          }, {
            key: "_handleLeft",
            value: function _handleLeft() {
              if (this.currentIndex === 0) ; else {
                if (this.currentIndex == 1) this.$changeTabsVisibility(true); // this._tabsPosition = 30

                this.currentIndex--;
              } // this._toggleGradient(this.currentIndex)

            }
          }, {
            key: "_handleBack",
            value: function _handleBack() {
              if (this.currentIndex === 0) ; else {
                console.log(this._tabs);
                this._tabsPosition = 0;
                this.currentIndex = 0; // this._toggleGradient(this.currentIndex)

                this.$changeTabsVisibility(true);
              }
            }
          }]);

          return Showing;
        }(this), /*#__PURE__*/function (_this2) {
          _inherits(Hidden, _this2);

          var _super3 = _createSuper(Hidden);

          function Hidden() {
            _classCallCheck(this, Hidden);

            return _super3.apply(this, arguments);
          }

          _createClass(Hidden, [{
            key: "$enter",
            value: function $enter() {
              this.setSmooth('x', this._startX + this.w, {
                duration: 0.5
              });
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this.setSmooth('x', this._startX, {
                duration: 0.5
              });
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this;
            }
          }, {
            key: "_handleRight",
            value: function _handleRight() {
              this._setState('Showing');
            }
          }, {
            key: "_handleBack",
            value: function _handleBack() {
              this._setState('Showing');
            }
          }]);

          return Hidden;
        }(this)];
      }
    }]);

    return Sidekick;
  }(lng.Component);

  var App = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(App, _Lightning$Component);

    var _super = _createSuper(App);

    function App() {
      _classCallCheck(this, App);

      return _super.apply(this, arguments);
    }

    _createClass(App, [{
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('Sidekick');
      }
    }, {
      key: "_init",
      value: function _init() {
        var useVideo = QueryParams$1.get('useVideo');
        var videoUrl = 'static/videos/runway-compressed-1.mp4';

        if (useVideo == 'true') {
          VideoPlayer.open(videoUrl);
          VideoPlayer.loop();
        }
      }
    }, {
      key: "_handleBack",
      value: function _handleBack() {
        return true;
      }
    }, {
      key: "_handleKey",
      value: function _handleKey() {
        return true;
      }
    }], [{
      key: "getFonts",
      value: function getFonts() {
        return createFonts(XfinityFonts);
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          w: 1920,
          h: 1080,
          Sidekick: {
            type: Sidekick
          }
        };
      }
    }]);

    return App;
  }(lng.Component);

  function index (appSettings) {
    QueryParams$1.init();

    if (window.innerHeight === 720) {
      appSettings.stage.w = 1280;
      appSettings.stage.h = 720;
      appSettings.stage.precision = 2 / 3;
    }

    return Launch.apply(void 0, [App].concat(Array.prototype.slice.call(arguments)));
  }

  return index;

})();
