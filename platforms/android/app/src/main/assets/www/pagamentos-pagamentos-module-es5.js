(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagamentos-pagamentos-module"], {
    /***/
    "../../../node_modules/localforage/dist/localforage.js":
    /*!****************************************************************************!*\
      !*** /Users/wagner/Projetos /node_modules/localforage/dist/localforage.js ***!
      \****************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesLocalforageDistLocalforageJs(module, exports, __webpack_require__) {
      var require;

      var require;
      /*!
      localForage -- Offline Storage, Improved
      Version 1.9.0
      https://localforage.github.io/localForage
      (c) 2013-2017 Mozilla, Apache License 2.0
      */


      (function (f) {
        if (true) {
          module.exports = f();
        } else {
          var g;
        }
      })(function () {
        var define, module, exports;
        return function e(t, n, r) {
          function s(o, u) {
            if (!n[o]) {
              if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return require(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
              }

              var l = n[o] = {
                exports: {}
              };
              t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e);
              }, l, l.exports, e, t, n, r);
            }

            return n[o].exports;
          }

          var i = typeof require == "function" && require;

          for (var o = 0; o < r.length; o++) {
            s(r[o]);
          }

          return s;
        }({
          1: [function (_dereq_, module, exports) {
            (function (global) {
              'use strict';

              var Mutation = global.MutationObserver || global.WebKitMutationObserver;
              var scheduleDrain;
              {
                if (Mutation) {
                  var called = 0;
                  var observer = new Mutation(nextTick);
                  var element = global.document.createTextNode('');
                  observer.observe(element, {
                    characterData: true
                  });

                  scheduleDrain = function scheduleDrain() {
                    element.data = called = ++called % 2;
                  };
                } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
                  var channel = new global.MessageChannel();
                  channel.port1.onmessage = nextTick;

                  scheduleDrain = function scheduleDrain() {
                    channel.port2.postMessage(0);
                  };
                } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
                  scheduleDrain = function scheduleDrain() {
                    // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                    // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                    var scriptEl = global.document.createElement('script');

                    scriptEl.onreadystatechange = function () {
                      nextTick();
                      scriptEl.onreadystatechange = null;
                      scriptEl.parentNode.removeChild(scriptEl);
                      scriptEl = null;
                    };

                    global.document.documentElement.appendChild(scriptEl);
                  };
                } else {
                  scheduleDrain = function scheduleDrain() {
                    setTimeout(nextTick, 0);
                  };
                }
              }
              var draining;
              var queue = []; //named nextTick for less confusing stack traces

              function nextTick() {
                draining = true;
                var i, oldQueue;
                var len = queue.length;

                while (len) {
                  oldQueue = queue;
                  queue = [];
                  i = -1;

                  while (++i < len) {
                    oldQueue[i]();
                  }

                  len = queue.length;
                }

                draining = false;
              }

              module.exports = immediate;

              function immediate(task) {
                if (queue.push(task) === 1 && !draining) {
                  scheduleDrain();
                }
              }
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
          }, {}],
          2: [function (_dereq_, module, exports) {
            'use strict';

            var immediate = _dereq_(1);
            /* istanbul ignore next */


            function INTERNAL() {}

            var handlers = {};
            var REJECTED = ['REJECTED'];
            var FULFILLED = ['FULFILLED'];
            var PENDING = ['PENDING'];
            module.exports = Promise;

            function Promise(resolver) {
              if (typeof resolver !== 'function') {
                throw new TypeError('resolver must be a function');
              }

              this.state = PENDING;
              this.queue = [];
              this.outcome = void 0;

              if (resolver !== INTERNAL) {
                safelyResolveThenable(this, resolver);
              }
            }

            Promise.prototype["catch"] = function (onRejected) {
              return this.then(null, onRejected);
            };

            Promise.prototype.then = function (onFulfilled, onRejected) {
              if (typeof onFulfilled !== 'function' && this.state === FULFILLED || typeof onRejected !== 'function' && this.state === REJECTED) {
                return this;
              }

              var promise = new this.constructor(INTERNAL);

              if (this.state !== PENDING) {
                var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
                unwrap(promise, resolver, this.outcome);
              } else {
                this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
              }

              return promise;
            };

            function QueueItem(promise, onFulfilled, onRejected) {
              this.promise = promise;

              if (typeof onFulfilled === 'function') {
                this.onFulfilled = onFulfilled;
                this.callFulfilled = this.otherCallFulfilled;
              }

              if (typeof onRejected === 'function') {
                this.onRejected = onRejected;
                this.callRejected = this.otherCallRejected;
              }
            }

            QueueItem.prototype.callFulfilled = function (value) {
              handlers.resolve(this.promise, value);
            };

            QueueItem.prototype.otherCallFulfilled = function (value) {
              unwrap(this.promise, this.onFulfilled, value);
            };

            QueueItem.prototype.callRejected = function (value) {
              handlers.reject(this.promise, value);
            };

            QueueItem.prototype.otherCallRejected = function (value) {
              unwrap(this.promise, this.onRejected, value);
            };

            function unwrap(promise, func, value) {
              immediate(function () {
                var returnValue;

                try {
                  returnValue = func(value);
                } catch (e) {
                  return handlers.reject(promise, e);
                }

                if (returnValue === promise) {
                  handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
                } else {
                  handlers.resolve(promise, returnValue);
                }
              });
            }

            handlers.resolve = function (self, value) {
              var result = tryCatch(getThen, value);

              if (result.status === 'error') {
                return handlers.reject(self, result.value);
              }

              var thenable = result.value;

              if (thenable) {
                safelyResolveThenable(self, thenable);
              } else {
                self.state = FULFILLED;
                self.outcome = value;
                var i = -1;
                var len = self.queue.length;

                while (++i < len) {
                  self.queue[i].callFulfilled(value);
                }
              }

              return self;
            };

            handlers.reject = function (self, error) {
              self.state = REJECTED;
              self.outcome = error;
              var i = -1;
              var len = self.queue.length;

              while (++i < len) {
                self.queue[i].callRejected(error);
              }

              return self;
            };

            function getThen(obj) {
              // Make sure we only access the accessor once as required by the spec
              var then = obj && obj.then;

              if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
                return function appyThen() {
                  then.apply(obj, arguments);
                };
              }
            }

            function safelyResolveThenable(self, thenable) {
              // Either fulfill, reject or reject with error
              var called = false;

              function onError(value) {
                if (called) {
                  return;
                }

                called = true;
                handlers.reject(self, value);
              }

              function onSuccess(value) {
                if (called) {
                  return;
                }

                called = true;
                handlers.resolve(self, value);
              }

              function tryToUnwrap() {
                thenable(onSuccess, onError);
              }

              var result = tryCatch(tryToUnwrap);

              if (result.status === 'error') {
                onError(result.value);
              }
            }

            function tryCatch(func, value) {
              var out = {};

              try {
                out.value = func(value);
                out.status = 'success';
              } catch (e) {
                out.status = 'error';
                out.value = e;
              }

              return out;
            }

            Promise.resolve = resolve;

            function resolve(value) {
              if (value instanceof this) {
                return value;
              }

              return handlers.resolve(new this(INTERNAL), value);
            }

            Promise.reject = reject;

            function reject(reason) {
              var promise = new this(INTERNAL);
              return handlers.reject(promise, reason);
            }

            Promise.all = all;

            function all(iterable) {
              var self = this;

              if (Object.prototype.toString.call(iterable) !== '[object Array]') {
                return this.reject(new TypeError('must be an array'));
              }

              var len = iterable.length;
              var called = false;

              if (!len) {
                return this.resolve([]);
              }

              var values = new Array(len);
              var resolved = 0;
              var i = -1;
              var promise = new this(INTERNAL);

              while (++i < len) {
                allResolver(iterable[i], i);
              }

              return promise;

              function allResolver(value, i) {
                self.resolve(value).then(resolveFromAll, function (error) {
                  if (!called) {
                    called = true;
                    handlers.reject(promise, error);
                  }
                });

                function resolveFromAll(outValue) {
                  values[i] = outValue;

                  if (++resolved === len && !called) {
                    called = true;
                    handlers.resolve(promise, values);
                  }
                }
              }
            }

            Promise.race = race;

            function race(iterable) {
              var self = this;

              if (Object.prototype.toString.call(iterable) !== '[object Array]') {
                return this.reject(new TypeError('must be an array'));
              }

              var len = iterable.length;
              var called = false;

              if (!len) {
                return this.resolve([]);
              }

              var i = -1;
              var promise = new this(INTERNAL);

              while (++i < len) {
                resolver(iterable[i]);
              }

              return promise;

              function resolver(value) {
                self.resolve(value).then(function (response) {
                  if (!called) {
                    called = true;
                    handlers.resolve(promise, response);
                  }
                }, function (error) {
                  if (!called) {
                    called = true;
                    handlers.reject(promise, error);
                  }
                });
              }
            }
          }, {
            "1": 1
          }],
          3: [function (_dereq_, module, exports) {
            (function (global) {
              'use strict';

              if (typeof global.Promise !== 'function') {
                global.Promise = _dereq_(2);
              }
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
          }, {
            "2": 2
          }],
          4: [function (_dereq_, module, exports) {
            'use strict';

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
              return typeof obj;
            } : function (obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            function getIDB() {
              /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
              try {
                if (typeof indexedDB !== 'undefined') {
                  return indexedDB;
                }

                if (typeof webkitIndexedDB !== 'undefined') {
                  return webkitIndexedDB;
                }

                if (typeof mozIndexedDB !== 'undefined') {
                  return mozIndexedDB;
                }

                if (typeof OIndexedDB !== 'undefined') {
                  return OIndexedDB;
                }

                if (typeof msIndexedDB !== 'undefined') {
                  return msIndexedDB;
                }
              } catch (e) {
                return;
              }
            }

            var idb = getIDB();

            function isIndexedDBValid() {
              try {
                // Initialize IndexedDB; fall back to vendor-prefixed versions
                // if needed.
                if (!idb || !idb.open) {
                  return false;
                } // We mimic PouchDB here;
                //
                // We test for openDatabase because IE Mobile identifies itself
                // as Safari. Oh the lulz...


                var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
                var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1; // Safari <10.1 does not meet our requirements for IDB support
                // (see: https://github.com/pouchdb/pouchdb/issues/5572).
                // Safari 10.1 shipped with fetch, we can use that to detect it.
                // Note: this creates issues with `window.fetch` polyfills and
                // overrides; see:
                // https://github.com/localForage/localForage/issues/856

                return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' && // some outdated implementations of IDB that appear on Samsung
                // and HTC Android devices <4.4 are missing IDBKeyRange
                // See: https://github.com/mozilla/localForage/issues/128
                // See: https://github.com/mozilla/localForage/issues/272
                typeof IDBKeyRange !== 'undefined';
              } catch (e) {
                return false;
              }
            } // Abstracts constructing a Blob object, so it also works in older
            // browsers that don't support the native Blob constructor. (i.e.
            // old QtWebKit versions, at least).
            // Abstracts constructing a Blob object, so it also works in older
            // browsers that don't support the native Blob constructor. (i.e.
            // old QtWebKit versions, at least).


            function createBlob(parts, properties) {
              /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
              parts = parts || [];
              properties = properties || {};

              try {
                return new Blob(parts, properties);
              } catch (e) {
                if (e.name !== 'TypeError') {
                  throw e;
                }

                var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
                var builder = new Builder();

                for (var i = 0; i < parts.length; i += 1) {
                  builder.append(parts[i]);
                }

                return builder.getBlob(properties.type);
              }
            } // This is CommonJS because lie is an external dependency, so Rollup
            // can just ignore it.


            if (typeof Promise === 'undefined') {
              // In the "nopromises" build this will just throw if you don't have
              // a global promise object, but it would throw anyway later.
              _dereq_(3);
            }

            var Promise$1 = Promise;

            function executeCallback(promise, callback) {
              if (callback) {
                promise.then(function (result) {
                  callback(null, result);
                }, function (error) {
                  callback(error);
                });
              }
            }

            function executeTwoCallbacks(promise, callback, errorCallback) {
              if (typeof callback === 'function') {
                promise.then(callback);
              }

              if (typeof errorCallback === 'function') {
                promise["catch"](errorCallback);
              }
            }

            function normalizeKey(key) {
              // Cast the key to a string, as that's all we can set as a key.
              if (typeof key !== 'string') {
                console.warn(key + ' used as a key, but it is not a string.');
                key = String(key);
              }

              return key;
            }

            function getCallback() {
              if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
                return arguments[arguments.length - 1];
              }
            } // Some code originally from async_storage.js in
            // [Gaia](https://github.com/mozilla-b2g/gaia).


            var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
            var supportsBlobs = void 0;
            var dbContexts = {};
            var toString = Object.prototype.toString; // Transaction Modes

            var READ_ONLY = 'readonly';
            var READ_WRITE = 'readwrite'; // Transform a binary string to an array buffer, because otherwise
            // weird stuff happens when you try to work with the binary string directly.
            // It is known.
            // From http://stackoverflow.com/questions/14967647/ (continues on next line)
            // encode-decode-image-with-base64-breaks-image (2013-04-21)

            function _binStringToArrayBuffer(bin) {
              var length = bin.length;
              var buf = new ArrayBuffer(length);
              var arr = new Uint8Array(buf);

              for (var i = 0; i < length; i++) {
                arr[i] = bin.charCodeAt(i);
              }

              return buf;
            } //
            // Blobs are not supported in all versions of IndexedDB, notably
            // Chrome <37 and Android <5. In those versions, storing a blob will throw.
            //
            // Various other blob bugs exist in Chrome v37-42 (inclusive).
            // Detecting them is expensive and confusing to users, and Chrome 37-42
            // is at very low usage worldwide, so we do a hacky userAgent check instead.
            //
            // content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
            // 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
            // FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
            //
            // Code borrowed from PouchDB. See:
            // https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
            //


            function _checkBlobSupportWithoutCaching(idb) {
              return new Promise$1(function (resolve) {
                var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
                var blob = createBlob(['']);
                txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

                txn.onabort = function (e) {
                  // If the transaction aborts now its due to not being able to
                  // write to the database, likely due to the disk being full
                  e.preventDefault();
                  e.stopPropagation();
                  resolve(false);
                };

                txn.oncomplete = function () {
                  var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
                  var matchedEdge = navigator.userAgent.match(/Edge\//); // MS Edge pretends to be Chrome 42:
                  // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx

                  resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
                };
              })["catch"](function () {
                return false; // error, so assume unsupported
              });
            }

            function _checkBlobSupport(idb) {
              if (typeof supportsBlobs === 'boolean') {
                return Promise$1.resolve(supportsBlobs);
              }

              return _checkBlobSupportWithoutCaching(idb).then(function (value) {
                supportsBlobs = value;
                return supportsBlobs;
              });
            }

            function _deferReadiness(dbInfo) {
              var dbContext = dbContexts[dbInfo.name]; // Create a deferred object representing the current database operation.

              var deferredOperation = {};
              deferredOperation.promise = new Promise$1(function (resolve, reject) {
                deferredOperation.resolve = resolve;
                deferredOperation.reject = reject;
              }); // Enqueue the deferred operation.

              dbContext.deferredOperations.push(deferredOperation); // Chain its promise to the database readiness.

              if (!dbContext.dbReady) {
                dbContext.dbReady = deferredOperation.promise;
              } else {
                dbContext.dbReady = dbContext.dbReady.then(function () {
                  return deferredOperation.promise;
                });
              }
            }

            function _advanceReadiness(dbInfo) {
              var dbContext = dbContexts[dbInfo.name]; // Dequeue a deferred operation.

              var deferredOperation = dbContext.deferredOperations.pop(); // Resolve its promise (which is part of the database readiness
              // chain of promises).

              if (deferredOperation) {
                deferredOperation.resolve();
                return deferredOperation.promise;
              }
            }

            function _rejectReadiness(dbInfo, err) {
              var dbContext = dbContexts[dbInfo.name]; // Dequeue a deferred operation.

              var deferredOperation = dbContext.deferredOperations.pop(); // Reject its promise (which is part of the database readiness
              // chain of promises).

              if (deferredOperation) {
                deferredOperation.reject(err);
                return deferredOperation.promise;
              }
            }

            function _getConnection(dbInfo, upgradeNeeded) {
              return new Promise$1(function (resolve, reject) {
                dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

                if (dbInfo.db) {
                  if (upgradeNeeded) {
                    _deferReadiness(dbInfo);

                    dbInfo.db.close();
                  } else {
                    return resolve(dbInfo.db);
                  }
                }

                var dbArgs = [dbInfo.name];

                if (upgradeNeeded) {
                  dbArgs.push(dbInfo.version);
                }

                var openreq = idb.open.apply(idb, dbArgs);

                if (upgradeNeeded) {
                  openreq.onupgradeneeded = function (e) {
                    var db = openreq.result;

                    try {
                      db.createObjectStore(dbInfo.storeName);

                      if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                      }
                    } catch (ex) {
                      if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                      } else {
                        throw ex;
                      }
                    }
                  };
                }

                openreq.onerror = function (e) {
                  e.preventDefault();
                  reject(openreq.error);
                };

                openreq.onsuccess = function () {
                  resolve(openreq.result);

                  _advanceReadiness(dbInfo);
                };
              });
            }

            function _getOriginalConnection(dbInfo) {
              return _getConnection(dbInfo, false);
            }

            function _getUpgradedConnection(dbInfo) {
              return _getConnection(dbInfo, true);
            }

            function _isUpgradeNeeded(dbInfo, defaultVersion) {
              if (!dbInfo.db) {
                return true;
              }

              var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
              var isDowngrade = dbInfo.version < dbInfo.db.version;
              var isUpgrade = dbInfo.version > dbInfo.db.version;

              if (isDowngrade) {
                // If the version is not the default one
                // then warn for impossible downgrade.
                if (dbInfo.version !== defaultVersion) {
                  console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
                } // Align the versions to prevent errors.


                dbInfo.version = dbInfo.db.version;
              }

              if (isUpgrade || isNewStore) {
                // If the store is new then increment the version (if needed).
                // This will trigger an "upgradeneeded" event which is required
                // for creating a store.
                if (isNewStore) {
                  var incVersion = dbInfo.db.version + 1;

                  if (incVersion > dbInfo.version) {
                    dbInfo.version = incVersion;
                  }
                }

                return true;
              }

              return false;
            } // encode a blob for indexeddb engines that don't support blobs


            function _encodeBlob(blob) {
              return new Promise$1(function (resolve, reject) {
                var reader = new FileReader();
                reader.onerror = reject;

                reader.onloadend = function (e) {
                  var base64 = btoa(e.target.result || '');
                  resolve({
                    __local_forage_encoded_blob: true,
                    data: base64,
                    type: blob.type
                  });
                };

                reader.readAsBinaryString(blob);
              });
            } // decode an encoded blob


            function _decodeBlob(encodedBlob) {
              var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));

              return createBlob([arrayBuff], {
                type: encodedBlob.type
              });
            } // is this one of our fancy encoded blobs?


            function _isEncodedBlob(value) {
              return value && value.__local_forage_encoded_blob;
            } // Specialize the default `ready()` function by making it dependent
            // on the current database operations. Thus, the driver will be actually
            // ready when it's been initialized (default) *and* there are no pending
            // operations on the database (initiated by some other instances).


            function _fullyReady(callback) {
              var self = this;

              var promise = self._initReady().then(function () {
                var dbContext = dbContexts[self._dbInfo.name];

                if (dbContext && dbContext.dbReady) {
                  return dbContext.dbReady;
                }
              });

              executeTwoCallbacks(promise, callback, callback);
              return promise;
            } // Try to establish a new db connection to replace the
            // current one which is broken (i.e. experiencing
            // InvalidStateError while creating a transaction).


            function _tryReconnect(dbInfo) {
              _deferReadiness(dbInfo);

              var dbContext = dbContexts[dbInfo.name];
              var forages = dbContext.forages;

              for (var i = 0; i < forages.length; i++) {
                var forage = forages[i];

                if (forage._dbInfo.db) {
                  forage._dbInfo.db.close();

                  forage._dbInfo.db = null;
                }
              }

              dbInfo.db = null;
              return _getOriginalConnection(dbInfo).then(function (db) {
                dbInfo.db = db;

                if (_isUpgradeNeeded(dbInfo)) {
                  // Reopen the database for upgrading.
                  return _getUpgradedConnection(dbInfo);
                }

                return db;
              }).then(function (db) {
                // store the latest db reference
                // in case the db was upgraded
                dbInfo.db = dbContext.db = db;

                for (var i = 0; i < forages.length; i++) {
                  forages[i]._dbInfo.db = db;
                }
              })["catch"](function (err) {
                _rejectReadiness(dbInfo, err);

                throw err;
              });
            } // FF doesn't like Promises (micro-tasks) and IDDB store operations,
            // so we have to do it with callbacks


            function createTransaction(dbInfo, mode, callback, retries) {
              if (retries === undefined) {
                retries = 1;
              }

              try {
                var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
                callback(null, tx);
              } catch (err) {
                if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
                  return Promise$1.resolve().then(function () {
                    if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                      // increase the db version, to create the new ObjectStore
                      if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                      } // Reopen the database for upgrading.


                      return _getUpgradedConnection(dbInfo);
                    }
                  }).then(function () {
                    return _tryReconnect(dbInfo).then(function () {
                      createTransaction(dbInfo, mode, callback, retries - 1);
                    });
                  })["catch"](callback);
                }

                callback(err);
              }
            }

            function createDbContext() {
              return {
                // Running localForages sharing a database.
                forages: [],
                // Shared database.
                db: null,
                // Database readiness (promise).
                dbReady: null,
                // Deferred operations on the database.
                deferredOperations: []
              };
            } // Open the IndexedDB database (automatically creates one if one didn't
            // previously exist), using any options set in the config.


            function _initStorage(options) {
              var self = this;
              var dbInfo = {
                db: null
              };

              if (options) {
                for (var i in options) {
                  dbInfo[i] = options[i];
                }
              } // Get the current context of the database;


              var dbContext = dbContexts[dbInfo.name]; // ...or create a new context.

              if (!dbContext) {
                dbContext = createDbContext(); // Register the new context in the global container.

                dbContexts[dbInfo.name] = dbContext;
              } // Register itself as a running localForage in the current context.


              dbContext.forages.push(self); // Replace the default `ready()` function with the specialized one.

              if (!self._initReady) {
                self._initReady = self.ready;
                self.ready = _fullyReady;
              } // Create an array of initialization states of the related localForages.


              var initPromises = [];

              function ignoreErrors() {
                // Don't handle errors here,
                // just makes sure related localForages aren't pending.
                return Promise$1.resolve();
              }

              for (var j = 0; j < dbContext.forages.length; j++) {
                var forage = dbContext.forages[j];

                if (forage !== self) {
                  // Don't wait for itself...
                  initPromises.push(forage._initReady()["catch"](ignoreErrors));
                }
              } // Take a snapshot of the related localForages.


              var forages = dbContext.forages.slice(0); // Initialize the connection process only when
              // all the related localForages aren't pending.

              return Promise$1.all(initPromises).then(function () {
                dbInfo.db = dbContext.db; // Get the connection or open a new one without upgrade.

                return _getOriginalConnection(dbInfo);
              }).then(function (db) {
                dbInfo.db = db;

                if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
                  // Reopen the database for upgrading.
                  return _getUpgradedConnection(dbInfo);
                }

                return db;
              }).then(function (db) {
                dbInfo.db = dbContext.db = db;
                self._dbInfo = dbInfo; // Share the final connection amongst related localForages.

                for (var k = 0; k < forages.length; k++) {
                  var forage = forages[k];

                  if (forage !== self) {
                    // Self is already up-to-date.
                    forage._dbInfo.db = dbInfo.db;
                    forage._dbInfo.version = dbInfo.version;
                  }
                }
              });
            }

            function getItem(key, callback) {
              var self = this;
              key = normalizeKey(key);
              var promise = new Promise$1(function (resolve, reject) {
                self.ready().then(function () {
                  createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                    if (err) {
                      return reject(err);
                    }

                    try {
                      var store = transaction.objectStore(self._dbInfo.storeName);
                      var req = store.get(key);

                      req.onsuccess = function () {
                        var value = req.result;

                        if (value === undefined) {
                          value = null;
                        }

                        if (_isEncodedBlob(value)) {
                          value = _decodeBlob(value);
                        }

                        resolve(value);
                      };

                      req.onerror = function () {
                        reject(req.error);
                      };
                    } catch (e) {
                      reject(e);
                    }
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            } // Iterate over all items stored in database.


            function iterate(iterator, callback) {
              var self = this;
              var promise = new Promise$1(function (resolve, reject) {
                self.ready().then(function () {
                  createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                    if (err) {
                      return reject(err);
                    }

                    try {
                      var store = transaction.objectStore(self._dbInfo.storeName);
                      var req = store.openCursor();
                      var iterationNumber = 1;

                      req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                          var value = cursor.value;

                          if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                          }

                          var result = iterator(value, cursor.key, iterationNumber++); // when the iterator callback returns any
                          // (non-`undefined`) value, then we stop
                          // the iteration immediately

                          if (result !== void 0) {
                            resolve(result);
                          } else {
                            cursor["continue"]();
                          }
                        } else {
                          resolve();
                        }
                      };

                      req.onerror = function () {
                        reject(req.error);
                      };
                    } catch (e) {
                      reject(e);
                    }
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            }

            function setItem(key, value, callback) {
              var self = this;
              key = normalizeKey(key);
              var promise = new Promise$1(function (resolve, reject) {
                var dbInfo;
                self.ready().then(function () {
                  dbInfo = self._dbInfo;

                  if (toString.call(value) === '[object Blob]') {
                    return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                      if (blobSupport) {
                        return value;
                      }

                      return _encodeBlob(value);
                    });
                  }

                  return value;
                }).then(function (value) {
                  createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                    if (err) {
                      return reject(err);
                    }

                    try {
                      var store = transaction.objectStore(self._dbInfo.storeName); // The reason we don't _save_ null is because IE 10 does
                      // not support saving the `null` type in IndexedDB. How
                      // ironic, given the bug below!
                      // See: https://github.com/mozilla/localForage/issues/161

                      if (value === null) {
                        value = undefined;
                      }

                      var req = store.put(value, key);

                      transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                          value = null;
                        }

                        resolve(value);
                      };

                      transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                      };
                    } catch (e) {
                      reject(e);
                    }
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            }

            function removeItem(key, callback) {
              var self = this;
              key = normalizeKey(key);
              var promise = new Promise$1(function (resolve, reject) {
                self.ready().then(function () {
                  createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                    if (err) {
                      return reject(err);
                    }

                    try {
                      var store = transaction.objectStore(self._dbInfo.storeName); // We use a Grunt task to make this safe for IE and some
                      // versions of Android (including those used by Cordova).
                      // Normally IE won't like `.delete()` and will insist on
                      // using `['delete']()`, but we have a build step that
                      // fixes this for us now.

                      var req = store["delete"](key);

                      transaction.oncomplete = function () {
                        resolve();
                      };

                      transaction.onerror = function () {
                        reject(req.error);
                      }; // The request will be also be aborted if we've exceeded our storage
                      // space.


                      transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                      };
                    } catch (e) {
                      reject(e);
                    }
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            }

            function clear(callback) {
              var self = this;
              var promise = new Promise$1(function (resolve, reject) {
                self.ready().then(function () {
                  createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                    if (err) {
                      return reject(err);
                    }

                    try {
                      var store = transaction.objectStore(self._dbInfo.storeName);
                      var req = store.clear();

                      transaction.oncomplete = function () {
                        resolve();
                      };

                      transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                      };
                    } catch (e) {
                      reject(e);
                    }
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            }

            function length(callback) {
              var self = this;
              var promise = new Promise$1(function (resolve, reject) {
                self.ready().then(function () {
                  createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                    if (err) {
                      return reject(err);
                    }

                    try {
                      var store = transaction.objectStore(self._dbInfo.storeName);
                      var req = store.count();

                      req.onsuccess = function () {
                        resolve(req.result);
                      };

                      req.onerror = function () {
                        reject(req.error);
                      };
                    } catch (e) {
                      reject(e);
                    }
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            }

            function key(n, callback) {
              var self = this;
              var promise = new Promise$1(function (resolve, reject) {
                if (n < 0) {
                  resolve(null);
                  return;
                }

                self.ready().then(function () {
                  createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                    if (err) {
                      return reject(err);
                    }

                    try {
                      var store = transaction.objectStore(self._dbInfo.storeName);
                      var advanced = false;
                      var req = store.openKeyCursor();

                      req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                          // this means there weren't enough keys
                          resolve(null);
                          return;
                        }

                        if (n === 0) {
                          // We have the first key, return it if that's what they
                          // wanted.
                          resolve(cursor.key);
                        } else {
                          if (!advanced) {
                            // Otherwise, ask the cursor to skip ahead n
                            // records.
                            advanced = true;
                            cursor.advance(n);
                          } else {
                            // When we get here, we've got the nth key.
                            resolve(cursor.key);
                          }
                        }
                      };

                      req.onerror = function () {
                        reject(req.error);
                      };
                    } catch (e) {
                      reject(e);
                    }
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            }

            function keys(callback) {
              var self = this;
              var promise = new Promise$1(function (resolve, reject) {
                self.ready().then(function () {
                  createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                    if (err) {
                      return reject(err);
                    }

                    try {
                      var store = transaction.objectStore(self._dbInfo.storeName);
                      var req = store.openKeyCursor();
                      var keys = [];

                      req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                          resolve(keys);
                          return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                      };

                      req.onerror = function () {
                        reject(req.error);
                      };
                    } catch (e) {
                      reject(e);
                    }
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            }

            function dropInstance(options, callback) {
              callback = getCallback.apply(this, arguments);
              var currentConfig = this.config();
              options = typeof options !== 'function' && options || {};

              if (!options.name) {
                options.name = options.name || currentConfig.name;
                options.storeName = options.storeName || currentConfig.storeName;
              }

              var self = this;
              var promise;

              if (!options.name) {
                promise = Promise$1.reject('Invalid arguments');
              } else {
                var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;
                var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
                  var dbContext = dbContexts[options.name];
                  var forages = dbContext.forages;
                  dbContext.db = db;

                  for (var i = 0; i < forages.length; i++) {
                    forages[i]._dbInfo.db = db;
                  }

                  return db;
                });

                if (!options.storeName) {
                  promise = dbPromise.then(function (db) {
                    _deferReadiness(options);

                    var dbContext = dbContexts[options.name];
                    var forages = dbContext.forages;
                    db.close();

                    for (var i = 0; i < forages.length; i++) {
                      var forage = forages[i];
                      forage._dbInfo.db = null;
                    }

                    var dropDBPromise = new Promise$1(function (resolve, reject) {
                      var req = idb.deleteDatabase(options.name);

                      req.onerror = req.onblocked = function (err) {
                        var db = req.result;

                        if (db) {
                          db.close();
                        }

                        reject(err);
                      };

                      req.onsuccess = function () {
                        var db = req.result;

                        if (db) {
                          db.close();
                        }

                        resolve(db);
                      };
                    });
                    return dropDBPromise.then(function (db) {
                      dbContext.db = db;

                      for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];

                        _advanceReadiness(_forage._dbInfo);
                      }
                    })["catch"](function (err) {
                      (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                      throw err;
                    });
                  });
                } else {
                  promise = dbPromise.then(function (db) {
                    if (!db.objectStoreNames.contains(options.storeName)) {
                      return;
                    }

                    var newVersion = db.version + 1;

                    _deferReadiness(options);

                    var dbContext = dbContexts[options.name];
                    var forages = dbContext.forages;
                    db.close();

                    for (var i = 0; i < forages.length; i++) {
                      var forage = forages[i];
                      forage._dbInfo.db = null;
                      forage._dbInfo.version = newVersion;
                    }

                    var dropObjectPromise = new Promise$1(function (resolve, reject) {
                      var req = idb.open(options.name, newVersion);

                      req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                      };

                      req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                      };

                      req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                      };
                    });
                    return dropObjectPromise.then(function (db) {
                      dbContext.db = db;

                      for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;

                        _advanceReadiness(_forage2._dbInfo);
                      }
                    })["catch"](function (err) {
                      (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                      throw err;
                    });
                  });
                }
              }

              executeCallback(promise, callback);
              return promise;
            }

            var asyncStorage = {
              _driver: 'asyncStorage',
              _initStorage: _initStorage,
              _support: isIndexedDBValid(),
              iterate: iterate,
              getItem: getItem,
              setItem: setItem,
              removeItem: removeItem,
              clear: clear,
              length: length,
              key: key,
              keys: keys,
              dropInstance: dropInstance
            };

            function isWebSQLValid() {
              return typeof openDatabase === 'function';
            } // Sadly, the best way to save binary data in WebSQL/localStorage is serializing
            // it to Base64, so this is how we store it to prevent very strange errors with less
            // verbose ways of binary <-> string data storage.


            var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            var BLOB_TYPE_PREFIX = '~~local_forage_type~';
            var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
            var SERIALIZED_MARKER = '__lfsc__:';
            var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length; // OMG the serializations!

            var TYPE_ARRAYBUFFER = 'arbf';
            var TYPE_BLOB = 'blob';
            var TYPE_INT8ARRAY = 'si08';
            var TYPE_UINT8ARRAY = 'ui08';
            var TYPE_UINT8CLAMPEDARRAY = 'uic8';
            var TYPE_INT16ARRAY = 'si16';
            var TYPE_INT32ARRAY = 'si32';
            var TYPE_UINT16ARRAY = 'ur16';
            var TYPE_UINT32ARRAY = 'ui32';
            var TYPE_FLOAT32ARRAY = 'fl32';
            var TYPE_FLOAT64ARRAY = 'fl64';
            var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
            var toString$1 = Object.prototype.toString;

            function stringToBuffer(serializedString) {
              // Fill the string into a ArrayBuffer.
              var bufferLength = serializedString.length * 0.75;
              var len = serializedString.length;
              var i;
              var p = 0;
              var encoded1, encoded2, encoded3, encoded4;

              if (serializedString[serializedString.length - 1] === '=') {
                bufferLength--;

                if (serializedString[serializedString.length - 2] === '=') {
                  bufferLength--;
                }
              }

              var buffer = new ArrayBuffer(bufferLength);
              var bytes = new Uint8Array(buffer);

              for (i = 0; i < len; i += 4) {
                encoded1 = BASE_CHARS.indexOf(serializedString[i]);
                encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
                encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
                encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);
                /*jslint bitwise: true */

                bytes[p++] = encoded1 << 2 | encoded2 >> 4;
                bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
                bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
              }

              return buffer;
            } // Converts a buffer to a string to store, serialized, in the backend
            // storage library.


            function bufferToString(buffer) {
              // base64-arraybuffer
              var bytes = new Uint8Array(buffer);
              var base64String = '';
              var i;

              for (i = 0; i < bytes.length; i += 3) {
                /*jslint bitwise: true */
                base64String += BASE_CHARS[bytes[i] >> 2];
                base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
                base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
                base64String += BASE_CHARS[bytes[i + 2] & 63];
              }

              if (bytes.length % 3 === 2) {
                base64String = base64String.substring(0, base64String.length - 1) + '=';
              } else if (bytes.length % 3 === 1) {
                base64String = base64String.substring(0, base64String.length - 2) + '==';
              }

              return base64String;
            } // Serialize a value, afterwards executing a callback (which usually
            // instructs the `setItem()` callback/promise to be executed). This is how
            // we store binary data with localStorage.


            function serialize(value, callback) {
              var valueType = '';

              if (value) {
                valueType = toString$1.call(value);
              } // Cannot use `value instanceof ArrayBuffer` or such here, as these
              // checks fail when running the tests using casper.js...
              //
              // TODO: See why those tests fail and use a better solution.


              if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
                // Convert binary arrays to a string and prefix the string with
                // a special marker.
                var buffer;
                var marker = SERIALIZED_MARKER;

                if (value instanceof ArrayBuffer) {
                  buffer = value;
                  marker += TYPE_ARRAYBUFFER;
                } else {
                  buffer = value.buffer;

                  if (valueType === '[object Int8Array]') {
                    marker += TYPE_INT8ARRAY;
                  } else if (valueType === '[object Uint8Array]') {
                    marker += TYPE_UINT8ARRAY;
                  } else if (valueType === '[object Uint8ClampedArray]') {
                    marker += TYPE_UINT8CLAMPEDARRAY;
                  } else if (valueType === '[object Int16Array]') {
                    marker += TYPE_INT16ARRAY;
                  } else if (valueType === '[object Uint16Array]') {
                    marker += TYPE_UINT16ARRAY;
                  } else if (valueType === '[object Int32Array]') {
                    marker += TYPE_INT32ARRAY;
                  } else if (valueType === '[object Uint32Array]') {
                    marker += TYPE_UINT32ARRAY;
                  } else if (valueType === '[object Float32Array]') {
                    marker += TYPE_FLOAT32ARRAY;
                  } else if (valueType === '[object Float64Array]') {
                    marker += TYPE_FLOAT64ARRAY;
                  } else {
                    callback(new Error('Failed to get type for BinaryArray'));
                  }
                }

                callback(marker + bufferToString(buffer));
              } else if (valueType === '[object Blob]') {
                // Conver the blob to a binaryArray and then to a string.
                var fileReader = new FileReader();

                fileReader.onload = function () {
                  // Backwards-compatible prefix for the blob type.
                  var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);
                  callback(SERIALIZED_MARKER + TYPE_BLOB + str);
                };

                fileReader.readAsArrayBuffer(value);
              } else {
                try {
                  callback(JSON.stringify(value));
                } catch (e) {
                  console.error("Couldn't convert value into a JSON string: ", value);
                  callback(null, e);
                }
              }
            } // Deserialize data we've inserted into a value column/field. We place
            // special markers into our strings to mark them as encoded; this isn't
            // as nice as a meta field, but it's the only sane thing we can do whilst
            // keeping localStorage support intact.
            //
            // Oftentimes this will just deserialize JSON content, but if we have a
            // special marker (SERIALIZED_MARKER, defined above), we will extract
            // some kind of arraybuffer/binary data/typed array out of the string.


            function deserialize(value) {
              // If we haven't marked this string as being specially serialized (i.e.
              // something other than serialized JSON), we can just return it and be
              // done with it.
              if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
                return JSON.parse(value);
              } // The following code deals with deserializing some kind of Blob or
              // TypedArray. First we separate out the type of data we're dealing
              // with from the data itself.


              var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
              var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
              var blobType; // Backwards-compatible blob type serialization strategy.
              // DBs created with older versions of localForage will simply not have the blob type.

              if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
                var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
                blobType = matcher[1];
                serializedString = serializedString.substring(matcher[0].length);
              }

              var buffer = stringToBuffer(serializedString); // Return the right type based on the code/type set during
              // serialization.

              switch (type) {
                case TYPE_ARRAYBUFFER:
                  return buffer;

                case TYPE_BLOB:
                  return createBlob([buffer], {
                    type: blobType
                  });

                case TYPE_INT8ARRAY:
                  return new Int8Array(buffer);

                case TYPE_UINT8ARRAY:
                  return new Uint8Array(buffer);

                case TYPE_UINT8CLAMPEDARRAY:
                  return new Uint8ClampedArray(buffer);

                case TYPE_INT16ARRAY:
                  return new Int16Array(buffer);

                case TYPE_UINT16ARRAY:
                  return new Uint16Array(buffer);

                case TYPE_INT32ARRAY:
                  return new Int32Array(buffer);

                case TYPE_UINT32ARRAY:
                  return new Uint32Array(buffer);

                case TYPE_FLOAT32ARRAY:
                  return new Float32Array(buffer);

                case TYPE_FLOAT64ARRAY:
                  return new Float64Array(buffer);

                default:
                  throw new Error('Unkown type: ' + type);
              }
            }

            var localforageSerializer = {
              serialize: serialize,
              deserialize: deserialize,
              stringToBuffer: stringToBuffer,
              bufferToString: bufferToString
            };
            /*
             * Includes code from:
             *
             * base64-arraybuffer
             * https://github.com/niklasvh/base64-arraybuffer
             *
             * Copyright (c) 2012 Niklas von Hertzen
             * Licensed under the MIT license.
             */

            function createDbTable(t, dbInfo, callback, errorCallback) {
              t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
            } // Open the WebSQL database (automatically creates one if one didn't
            // previously exist), using any options set in the config.


            function _initStorage$1(options) {
              var self = this;
              var dbInfo = {
                db: null
              };

              if (options) {
                for (var i in options) {
                  dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
                }
              }

              var dbInfoPromise = new Promise$1(function (resolve, reject) {
                // Open the database; the openDatabase API will automatically
                // create it for us if it doesn't exist.
                try {
                  dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
                } catch (e) {
                  return reject(e);
                } // Create our key/value table if it doesn't exist.


                dbInfo.db.transaction(function (t) {
                  createDbTable(t, dbInfo, function () {
                    self._dbInfo = dbInfo;
                    resolve();
                  }, function (t, error) {
                    reject(error);
                  });
                }, reject);
              });
              dbInfo.serializer = localforageSerializer;
              return dbInfoPromise;
            }

            function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
              t.executeSql(sqlStatement, args, callback, function (t, error) {
                if (error.code === error.SYNTAX_ERR) {
                  t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                    if (!results.rows.length) {
                      // if the table is missing (was deleted)
                      // re-create it table and retry
                      createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                      }, errorCallback);
                    } else {
                      errorCallback(t, error);
                    }
                  }, errorCallback);
                } else {
                  errorCallback(t, error);
                }
              }, errorCallback);
            }

            function getItem$1(key, callback) {
              var self = this;
              key = normalizeKey(key);
              var promise = new Promise$1(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self._dbInfo;
                  dbInfo.db.transaction(function (t) {
                    tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                      var result = results.rows.length ? results.rows.item(0).value : null; // Check to see if this is serialized content we need to
                      // unpack.

                      if (result) {
                        result = dbInfo.serializer.deserialize(result);
                      }

                      resolve(result);
                    }, function (t, error) {
                      reject(error);
                    });
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            }

            function iterate$1(iterator, callback) {
              var self = this;
              var promise = new Promise$1(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self._dbInfo;
                  dbInfo.db.transaction(function (t) {
                    tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                      var rows = results.rows;
                      var length = rows.length;

                      for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value; // Check to see if this is serialized content
                        // we need to unpack.

                        if (result) {
                          result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1); // void(0) prevents problems with redefinition
                        // of `undefined`.

                        if (result !== void 0) {
                          resolve(result);
                          return;
                        }
                      }

                      resolve();
                    }, function (t, error) {
                      reject(error);
                    });
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            }

            function _setItem(key, value, callback, retriesLeft) {
              var self = this;
              key = normalizeKey(key);
              var promise = new Promise$1(function (resolve, reject) {
                self.ready().then(function () {
                  // The localStorage API doesn't return undefined values in an
                  // "expected" way, so undefined is always cast to null in all
                  // drivers. See: https://github.com/mozilla/localForage/pull/42
                  if (value === undefined) {
                    value = null;
                  } // Save the original value to pass to the callback.


                  var originalValue = value;
                  var dbInfo = self._dbInfo;
                  dbInfo.serializer.serialize(value, function (value, error) {
                    if (error) {
                      reject(error);
                    } else {
                      dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                          resolve(originalValue);
                        }, function (t, error) {
                          reject(error);
                        });
                      }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                          // We reject the callback outright for now, but
                          // it's worth trying to re-run the transaction.
                          // Even if the user accepts the prompt to use
                          // more storage on Safari, this error will
                          // be called.
                          //
                          // Try to re-run the transaction.
                          if (retriesLeft > 0) {
                            resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                            return;
                          }

                          reject(sqlError);
                        }
                      });
                    }
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            }

            function setItem$1(key, value, callback) {
              return _setItem.apply(this, [key, value, callback, 1]);
            }

            function removeItem$1(key, callback) {
              var self = this;
              key = normalizeKey(key);
              var promise = new Promise$1(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self._dbInfo;
                  dbInfo.db.transaction(function (t) {
                    tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                      resolve();
                    }, function (t, error) {
                      reject(error);
                    });
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            } // Deletes every item in the table.
            // TODO: Find out if this resets the AUTO_INCREMENT number.


            function clear$1(callback) {
              var self = this;
              var promise = new Promise$1(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self._dbInfo;
                  dbInfo.db.transaction(function (t) {
                    tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                      resolve();
                    }, function (t, error) {
                      reject(error);
                    });
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            } // Does a simple `COUNT(key)` to get the number of items stored in
            // localForage.


            function length$1(callback) {
              var self = this;
              var promise = new Promise$1(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self._dbInfo;
                  dbInfo.db.transaction(function (t) {
                    // Ahhh, SQL makes this one soooooo easy.
                    tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                      var result = results.rows.item(0).c;
                      resolve(result);
                    }, function (t, error) {
                      reject(error);
                    });
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            } // Return the key located at key index X; essentially gets the key from a
            // `WHERE id = ?`. This is the most efficient way I can think to implement
            // this rarely-used (in my experience) part of the API, but it can seem
            // inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
            // the ID of each key will change every time it's updated. Perhaps a stored
            // procedure for the `setItem()` SQL would solve this problem?
            // TODO: Don't change ID on `setItem()`.


            function key$1(n, callback) {
              var self = this;
              var promise = new Promise$1(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self._dbInfo;
                  dbInfo.db.transaction(function (t) {
                    tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                      var result = results.rows.length ? results.rows.item(0).key : null;
                      resolve(result);
                    }, function (t, error) {
                      reject(error);
                    });
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            }

            function keys$1(callback) {
              var self = this;
              var promise = new Promise$1(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self._dbInfo;
                  dbInfo.db.transaction(function (t) {
                    tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                      var keys = [];

                      for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                      }

                      resolve(keys);
                    }, function (t, error) {
                      reject(error);
                    });
                  });
                })["catch"](reject);
              });
              executeCallback(promise, callback);
              return promise;
            } // https://www.w3.org/TR/webdatabase/#databases
            // > There is no way to enumerate or delete the databases available for an origin from this API.


            function getAllStoreNames(db) {
              return new Promise$1(function (resolve, reject) {
                db.transaction(function (t) {
                  t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                    var storeNames = [];

                    for (var i = 0; i < results.rows.length; i++) {
                      storeNames.push(results.rows.item(i).name);
                    }

                    resolve({
                      db: db,
                      storeNames: storeNames
                    });
                  }, function (t, error) {
                    reject(error);
                  });
                }, function (sqlError) {
                  reject(sqlError);
                });
              });
            }

            function dropInstance$1(options, callback) {
              callback = getCallback.apply(this, arguments);
              var currentConfig = this.config();
              options = typeof options !== 'function' && options || {};

              if (!options.name) {
                options.name = options.name || currentConfig.name;
                options.storeName = options.storeName || currentConfig.storeName;
              }

              var self = this;
              var promise;

              if (!options.name) {
                promise = Promise$1.reject('Invalid arguments');
              } else {
                promise = new Promise$1(function (resolve) {
                  var db;

                  if (options.name === currentConfig.name) {
                    // use the db reference of the current instance
                    db = self._dbInfo.db;
                  } else {
                    db = openDatabase(options.name, '', '', 0);
                  }

                  if (!options.storeName) {
                    // drop all database tables
                    resolve(getAllStoreNames(db));
                  } else {
                    resolve({
                      db: db,
                      storeNames: [options.storeName]
                    });
                  }
                }).then(function (operationInfo) {
                  return new Promise$1(function (resolve, reject) {
                    operationInfo.db.transaction(function (t) {
                      function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                          t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                            resolve();
                          }, function (t, error) {
                            reject(error);
                          });
                        });
                      }

                      var operations = [];

                      for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                      }

                      Promise$1.all(operations).then(function () {
                        resolve();
                      })["catch"](function (e) {
                        reject(e);
                      });
                    }, function (sqlError) {
                      reject(sqlError);
                    });
                  });
                });
              }

              executeCallback(promise, callback);
              return promise;
            }

            var webSQLStorage = {
              _driver: 'webSQLStorage',
              _initStorage: _initStorage$1,
              _support: isWebSQLValid(),
              iterate: iterate$1,
              getItem: getItem$1,
              setItem: setItem$1,
              removeItem: removeItem$1,
              clear: clear$1,
              length: length$1,
              key: key$1,
              keys: keys$1,
              dropInstance: dropInstance$1
            };

            function isLocalStorageValid() {
              try {
                return typeof localStorage !== 'undefined' && 'setItem' in localStorage && // in IE8 typeof localStorage.setItem === 'object'
                !!localStorage.setItem;
              } catch (e) {
                return false;
              }
            }

            function _getKeyPrefix(options, defaultConfig) {
              var keyPrefix = options.name + '/';

              if (options.storeName !== defaultConfig.storeName) {
                keyPrefix += options.storeName + '/';
              }

              return keyPrefix;
            } // Check if localStorage throws when saving an item


            function checkIfLocalStorageThrows() {
              var localStorageTestKey = '_localforage_support_test';

              try {
                localStorage.setItem(localStorageTestKey, true);
                localStorage.removeItem(localStorageTestKey);
                return false;
              } catch (e) {
                return true;
              }
            } // Check if localStorage is usable and allows to save an item
            // This method checks if localStorage is usable in Safari Private Browsing
            // mode, or in any other case where the available quota for localStorage
            // is 0 and there wasn't any saved items yet.


            function _isLocalStorageUsable() {
              return !checkIfLocalStorageThrows() || localStorage.length > 0;
            } // Config the localStorage backend, using options set in the config.


            function _initStorage$2(options) {
              var self = this;
              var dbInfo = {};

              if (options) {
                for (var i in options) {
                  dbInfo[i] = options[i];
                }
              }

              dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

              if (!_isLocalStorageUsable()) {
                return Promise$1.reject();
              }

              self._dbInfo = dbInfo;
              dbInfo.serializer = localforageSerializer;
              return Promise$1.resolve();
            } // Remove all keys from the datastore, effectively destroying all data in
            // the app's key/value store!


            function clear$2(callback) {
              var self = this;
              var promise = self.ready().then(function () {
                var keyPrefix = self._dbInfo.keyPrefix;

                for (var i = localStorage.length - 1; i >= 0; i--) {
                  var key = localStorage.key(i);

                  if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                  }
                }
              });
              executeCallback(promise, callback);
              return promise;
            } // Retrieve an item from the store. Unlike the original async_storage
            // library in Gaia, we don't modify return values at all. If a key's value
            // is `undefined`, we pass that value to the callback function.


            function getItem$2(key, callback) {
              var self = this;
              key = normalizeKey(key);
              var promise = self.ready().then(function () {
                var dbInfo = self._dbInfo;
                var result = localStorage.getItem(dbInfo.keyPrefix + key); // If a result was found, parse it from the serialized
                // string into a JS object. If result isn't truthy, the key
                // is likely undefined and we'll pass it straight to the
                // callback.

                if (result) {
                  result = dbInfo.serializer.deserialize(result);
                }

                return result;
              });
              executeCallback(promise, callback);
              return promise;
            } // Iterate over all items in the store.


            function iterate$2(iterator, callback) {
              var self = this;
              var promise = self.ready().then(function () {
                var dbInfo = self._dbInfo;
                var keyPrefix = dbInfo.keyPrefix;
                var keyPrefixLength = keyPrefix.length;
                var length = localStorage.length; // We use a dedicated iterator instead of the `i` variable below
                // so other keys we fetch in localStorage aren't counted in
                // the `iterationNumber` argument passed to the `iterate()`
                // callback.
                //
                // See: github.com/mozilla/localForage/pull/435#discussion_r38061530

                var iterationNumber = 1;

                for (var i = 0; i < length; i++) {
                  var key = localStorage.key(i);

                  if (key.indexOf(keyPrefix) !== 0) {
                    continue;
                  }

                  var value = localStorage.getItem(key); // If a result was found, parse it from the serialized
                  // string into a JS object. If result isn't truthy, the
                  // key is likely undefined and we'll pass it straight
                  // to the iterator.

                  if (value) {
                    value = dbInfo.serializer.deserialize(value);
                  }

                  value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

                  if (value !== void 0) {
                    return value;
                  }
                }
              });
              executeCallback(promise, callback);
              return promise;
            } // Same as localStorage's key() method, except takes a callback.


            function key$2(n, callback) {
              var self = this;
              var promise = self.ready().then(function () {
                var dbInfo = self._dbInfo;
                var result;

                try {
                  result = localStorage.key(n);
                } catch (error) {
                  result = null;
                } // Remove the prefix from the key, if a key is found.


                if (result) {
                  result = result.substring(dbInfo.keyPrefix.length);
                }

                return result;
              });
              executeCallback(promise, callback);
              return promise;
            }

            function keys$2(callback) {
              var self = this;
              var promise = self.ready().then(function () {
                var dbInfo = self._dbInfo;
                var length = localStorage.length;
                var keys = [];

                for (var i = 0; i < length; i++) {
                  var itemKey = localStorage.key(i);

                  if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                    keys.push(itemKey.substring(dbInfo.keyPrefix.length));
                  }
                }

                return keys;
              });
              executeCallback(promise, callback);
              return promise;
            } // Supply the number of keys in the datastore to the callback function.


            function length$2(callback) {
              var self = this;
              var promise = self.keys().then(function (keys) {
                return keys.length;
              });
              executeCallback(promise, callback);
              return promise;
            } // Remove an item from the store, nice and simple.


            function removeItem$2(key, callback) {
              var self = this;
              key = normalizeKey(key);
              var promise = self.ready().then(function () {
                var dbInfo = self._dbInfo;
                localStorage.removeItem(dbInfo.keyPrefix + key);
              });
              executeCallback(promise, callback);
              return promise;
            } // Set a key's value and run an optional callback once the value is set.
            // Unlike Gaia's implementation, the callback function is passed the value,
            // in case you want to operate on that value only after you're sure it
            // saved, or something like that.


            function setItem$2(key, value, callback) {
              var self = this;
              key = normalizeKey(key);
              var promise = self.ready().then(function () {
                // Convert undefined values to null.
                // https://github.com/mozilla/localForage/pull/42
                if (value === undefined) {
                  value = null;
                } // Save the original value to pass to the callback.


                var originalValue = value;
                return new Promise$1(function (resolve, reject) {
                  var dbInfo = self._dbInfo;
                  dbInfo.serializer.serialize(value, function (value, error) {
                    if (error) {
                      reject(error);
                    } else {
                      try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                      } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                          reject(e);
                        }

                        reject(e);
                      }
                    }
                  });
                });
              });
              executeCallback(promise, callback);
              return promise;
            }

            function dropInstance$2(options, callback) {
              callback = getCallback.apply(this, arguments);
              options = typeof options !== 'function' && options || {};

              if (!options.name) {
                var currentConfig = this.config();
                options.name = options.name || currentConfig.name;
                options.storeName = options.storeName || currentConfig.storeName;
              }

              var self = this;
              var promise;

              if (!options.name) {
                promise = Promise$1.reject('Invalid arguments');
              } else {
                promise = new Promise$1(function (resolve) {
                  if (!options.storeName) {
                    resolve(options.name + '/');
                  } else {
                    resolve(_getKeyPrefix(options, self._defaultConfig));
                  }
                }).then(function (keyPrefix) {
                  for (var i = localStorage.length - 1; i >= 0; i--) {
                    var key = localStorage.key(i);

                    if (key.indexOf(keyPrefix) === 0) {
                      localStorage.removeItem(key);
                    }
                  }
                });
              }

              executeCallback(promise, callback);
              return promise;
            }

            var localStorageWrapper = {
              _driver: 'localStorageWrapper',
              _initStorage: _initStorage$2,
              _support: isLocalStorageValid(),
              iterate: iterate$2,
              getItem: getItem$2,
              setItem: setItem$2,
              removeItem: removeItem$2,
              clear: clear$2,
              length: length$2,
              key: key$2,
              keys: keys$2,
              dropInstance: dropInstance$2
            };

            var sameValue = function sameValue(x, y) {
              return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
            };

            var includes = function includes(array, searchElement) {
              var len = array.length;
              var i = 0;

              while (i < len) {
                if (sameValue(array[i], searchElement)) {
                  return true;
                }

                i++;
              }

              return false;
            };

            var isArray = Array.isArray || function (arg) {
              return Object.prototype.toString.call(arg) === '[object Array]';
            }; // Drivers are stored here when `defineDriver()` is called.
            // They are shared across all instances of localForage.


            var DefinedDrivers = {};
            var DriverSupport = {};
            var DefaultDrivers = {
              INDEXEDDB: asyncStorage,
              WEBSQL: webSQLStorage,
              LOCALSTORAGE: localStorageWrapper
            };
            var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];
            var OptionalDriverMethods = ['dropInstance'];
            var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);
            var DefaultConfig = {
              description: '',
              driver: DefaultDriverOrder.slice(),
              name: 'localforage',
              // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
              // we can use without a prompt.
              size: 4980736,
              storeName: 'keyvaluepairs',
              version: 1.0
            };

            function callWhenReady(localForageInstance, libraryMethod) {
              localForageInstance[libraryMethod] = function () {
                var _args = arguments;
                return localForageInstance.ready().then(function () {
                  return localForageInstance[libraryMethod].apply(localForageInstance, _args);
                });
              };
            }

            function extend() {
              for (var i = 1; i < arguments.length; i++) {
                var arg = arguments[i];

                if (arg) {
                  for (var _key in arg) {
                    if (arg.hasOwnProperty(_key)) {
                      if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                      } else {
                        arguments[0][_key] = arg[_key];
                      }
                    }
                  }
                }
              }

              return arguments[0];
            }

            var LocalForage = function () {
              function LocalForage(options) {
                _classCallCheck(this, LocalForage);

                for (var driverTypeKey in DefaultDrivers) {
                  if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                    var driver = DefaultDrivers[driverTypeKey];
                    var driverName = driver._driver;
                    this[driverTypeKey] = driverName;

                    if (!DefinedDrivers[driverName]) {
                      // we don't need to wait for the promise,
                      // since the default drivers can be defined
                      // in a blocking manner
                      this.defineDriver(driver);
                    }
                  }
                }

                this._defaultConfig = extend({}, DefaultConfig);
                this._config = extend({}, this._defaultConfig, options);
                this._driverSet = null;
                this._initDriver = null;
                this._ready = false;
                this._dbInfo = null;

                this._wrapLibraryMethodsWithReady();

                this.setDriver(this._config.driver)["catch"](function () {});
              } // Set any config values for localForage; can be called anytime before
              // the first API call (e.g. `getItem`, `setItem`).
              // We loop through options so we don't overwrite existing config
              // values.


              LocalForage.prototype.config = function config(options) {
                // If the options argument is an object, we use it to set values.
                // Otherwise, we return either a specified config value or all
                // config values.
                if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
                  // If localforage is ready and fully initialized, we can't set
                  // any new configuration values. Instead, we return an error.
                  if (this._ready) {
                    return new Error("Can't call config() after localforage " + 'has been used.');
                  }

                  for (var i in options) {
                    if (i === 'storeName') {
                      options[i] = options[i].replace(/\W/g, '_');
                    }

                    if (i === 'version' && typeof options[i] !== 'number') {
                      return new Error('Database version must be a number.');
                    }

                    this._config[i] = options[i];
                  } // after all config options are set and
                  // the driver option is used, try setting it


                  if ('driver' in options && options.driver) {
                    return this.setDriver(this._config.driver);
                  }

                  return true;
                } else if (typeof options === 'string') {
                  return this._config[options];
                } else {
                  return this._config;
                }
              }; // Used to define a custom driver, shared across all instances of
              // localForage.


              LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
                var promise = new Promise$1(function (resolve, reject) {
                  try {
                    var driverName = driverObject._driver;
                    var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver'); // A driver name should be defined and not overlap with the
                    // library-defined, default drivers.

                    if (!driverObject._driver) {
                      reject(complianceError);
                      return;
                    }

                    var driverMethods = LibraryMethods.concat('_initStorage');

                    for (var i = 0, len = driverMethods.length; i < len; i++) {
                      var driverMethodName = driverMethods[i]; // when the property is there,
                      // it should be a method even when optional

                      var isRequired = !includes(OptionalDriverMethods, driverMethodName);

                      if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                      }
                    }

                    var configureMissingMethods = function configureMissingMethods() {
                      var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                          var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                          var promise = Promise$1.reject(error);
                          executeCallback(promise, arguments[arguments.length - 1]);
                          return promise;
                        };
                      };

                      for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];

                        if (!driverObject[optionalDriverMethod]) {
                          driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                      }
                    };

                    configureMissingMethods();

                    var setDriverSupport = function setDriverSupport(support) {
                      if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                      }

                      DefinedDrivers[driverName] = driverObject;
                      DriverSupport[driverName] = support; // don't use a then, so that we can define
                      // drivers that have simple _support methods
                      // in a blocking manner

                      resolve();
                    };

                    if ('_support' in driverObject) {
                      if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                      } else {
                        setDriverSupport(!!driverObject._support);
                      }
                    } else {
                      setDriverSupport(true);
                    }
                  } catch (e) {
                    reject(e);
                  }
                });
                executeTwoCallbacks(promise, callback, errorCallback);
                return promise;
              };

              LocalForage.prototype.driver = function driver() {
                return this._driver || null;
              };

              LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
                var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));
                executeTwoCallbacks(getDriverPromise, callback, errorCallback);
                return getDriverPromise;
              };

              LocalForage.prototype.getSerializer = function getSerializer(callback) {
                var serializerPromise = Promise$1.resolve(localforageSerializer);
                executeTwoCallbacks(serializerPromise, callback);
                return serializerPromise;
              };

              LocalForage.prototype.ready = function ready(callback) {
                var self = this;

                var promise = self._driverSet.then(function () {
                  if (self._ready === null) {
                    self._ready = self._initDriver();
                  }

                  return self._ready;
                });

                executeTwoCallbacks(promise, callback, callback);
                return promise;
              };

              LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
                var self = this;

                if (!isArray(drivers)) {
                  drivers = [drivers];
                }

                var supportedDrivers = this._getSupportedDrivers(drivers);

                function setDriverToConfig() {
                  self._config.driver = self.driver();
                }

                function extendSelfWithDriver(driver) {
                  self._extend(driver);

                  setDriverToConfig();
                  self._ready = self._initStorage(self._config);
                  return self._ready;
                }

                function initDriver(supportedDrivers) {
                  return function () {
                    var currentDriverIndex = 0;

                    function driverPromiseLoop() {
                      while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;
                        self._dbInfo = null;
                        self._ready = null;
                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                      }

                      setDriverToConfig();
                      var error = new Error('No available storage method found.');
                      self._driverSet = Promise$1.reject(error);
                      return self._driverSet;
                    }

                    return driverPromiseLoop();
                  };
                } // There might be a driver initialization in progress
                // so wait for it to finish in order to avoid a possible
                // race condition to set _dbInfo


                var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
                  return Promise$1.resolve();
                }) : Promise$1.resolve();
                this._driverSet = oldDriverSetDone.then(function () {
                  var driverName = supportedDrivers[0];
                  self._dbInfo = null;
                  self._ready = null;
                  return self.getDriver(driverName).then(function (driver) {
                    self._driver = driver._driver;
                    setDriverToConfig();

                    self._wrapLibraryMethodsWithReady();

                    self._initDriver = initDriver(supportedDrivers);
                  });
                })["catch"](function () {
                  setDriverToConfig();
                  var error = new Error('No available storage method found.');
                  self._driverSet = Promise$1.reject(error);
                  return self._driverSet;
                });
                executeTwoCallbacks(this._driverSet, callback, errorCallback);
                return this._driverSet;
              };

              LocalForage.prototype.supports = function supports(driverName) {
                return !!DriverSupport[driverName];
              };

              LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
                extend(this, libraryMethodsAndProperties);
              };

              LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
                var supportedDrivers = [];

                for (var i = 0, len = drivers.length; i < len; i++) {
                  var driverName = drivers[i];

                  if (this.supports(driverName)) {
                    supportedDrivers.push(driverName);
                  }
                }

                return supportedDrivers;
              };

              LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
                // Add a stub for each driver API method that delays the call to the
                // corresponding driver method until localForage is ready. These stubs
                // will be replaced by the driver methods as soon as the driver is
                // loaded, so there is no performance impact.
                for (var i = 0, len = LibraryMethods.length; i < len; i++) {
                  callWhenReady(this, LibraryMethods[i]);
                }
              };

              LocalForage.prototype.createInstance = function createInstance(options) {
                return new LocalForage(options);
              };

              return LocalForage;
            }(); // The actual localForage object that we expose as a module or via a
            // global. It's extended by pulling in one of our other libraries.


            var localforage_js = new LocalForage();
            module.exports = localforage_js;
          }, {
            "3": 3
          }]
        }, {}, [4])(4);
      });
      /***/

    },

    /***/
    "./node_modules/@ionic/storage/dist/esm/index.js":
    /*!*******************************************************!*\
      !*** ./node_modules/@ionic/storage/dist/esm/index.js ***!
      \*******************************************************/

    /*! exports provided: Drivers, Storage */

    /***/
    function node_modulesIonicStorageDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Drivers", function () {
        return Drivers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Storage", function () {
        return Storage;
      });
      /* harmony import */


      var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! localforage */
      "../../../node_modules/localforage/dist/localforage.js");
      /* harmony import */


      var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);
      /** @hidden */


      var Drivers = {
        SecureStorage: 'ionicSecureStorage',
        IndexedDB: localforage__WEBPACK_IMPORTED_MODULE_0___default.a.INDEXEDDB,
        LocalStorage: localforage__WEBPACK_IMPORTED_MODULE_0___default.a.LOCALSTORAGE
      };
      var defaultConfig = {
        name: '_ionicstorage',
        storeName: '_ionickv',
        dbKey: '_ionickey',
        driverOrder: [Drivers.SecureStorage, Drivers.IndexedDB, Drivers.LocalStorage]
      };

      var Storage = /*#__PURE__*/function () {
        /**
         * Create a new Storage instance using the order of drivers and any additional config
         * options to pass to LocalForage.
         *
         * Possible default driverOrder options are: ['indexeddb', 'localstorage'] and the
         * default is that exact ordering.
         *
         * When using Ionic Secure Storage (enterprise only), use ['ionicSecureStorage', 'indexeddb', 'localstorage'] to ensure
         * Secure Storage is used when available, or fall back to IndexedDB or LocalStorage on the web.
         */
        function Storage() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig;

          _classCallCheck2(this, Storage);

          this._db = null;
          this._secureStorageDriver = null;
          var actualConfig = Object.assign({}, defaultConfig, config || {});
          this._config = actualConfig;
        }

        _createClass(Storage, [{
          key: "create",
          value: function () {
            var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var db;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      db = localforage__WEBPACK_IMPORTED_MODULE_0___default.a.createInstance(this._config);
                      this._db = db;
                      _context.next = 4;
                      return db.setDriver(this._config.driverOrder || []);

                    case 4:
                      return _context.abrupt("return", this);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function create() {
              return _create.apply(this, arguments);
            }

            return create;
          }()
          /**
           * Define a new Driver. Must be called before
           * initializing the database. Example:
           *
           * await storage.defineDriver(myDriver);
           * await storage.create();
           */

        }, {
          key: "defineDriver",
          value: function () {
            var _defineDriver = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(driver) {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (driver._driver === Drivers.SecureStorage) {
                        this._secureStorageDriver = driver;
                      }

                      return _context2.abrupt("return", localforage__WEBPACK_IMPORTED_MODULE_0___default.a.defineDriver(driver));

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function defineDriver(_x) {
              return _defineDriver.apply(this, arguments);
            }

            return defineDriver;
          }()
          /**
           * Get the name of the driver being used.
           * @returns Name of the driver
           */

        }, {
          key: "assertDb",
          value: function assertDb() {
            if (!this._db) {
              throw new Error('Database not created. Must call create() first');
            }

            return this._db;
          }
          /**
           * Get the value associated with the given key.
           * @param key the key to identify this value
           * @returns Returns a promise with the value of the given key
           */

        }, {
          key: "get",
          value: function get(key) {
            var db = this.assertDb();
            return db.getItem(key);
          }
          /**
           * Set the value for the given key.
           * @param key the key to identify this value
           * @param value the value for this key
           * @returns Returns a promise that resolves when the key and value are set
           */

        }, {
          key: "set",
          value: function set(key, value) {
            var db = this.assertDb();
            return db.setItem(key, value);
          }
          /**
           * Remove any value associated with this key.
           * @param key the key to identify this value
           * @returns Returns a promise that resolves when the value is removed
           */

        }, {
          key: "remove",
          value: function remove(key) {
            var db = this.assertDb();
            return db.removeItem(key);
          }
          /**
           * Clear the entire key value store. WARNING: HOT!
           * @returns Returns a promise that resolves when the store is cleared
           */

        }, {
          key: "clear",
          value: function clear() {
            var db = this.assertDb();
            return db.clear();
          }
          /**
           * @returns Returns a promise that resolves with the number of keys stored.
           */

        }, {
          key: "length",
          value: function length() {
            var db = this.assertDb();
            return db.length();
          }
          /**
           * @returns Returns a promise that resolves with the keys in the store.
           */

        }, {
          key: "keys",
          value: function keys() {
            var db = this.assertDb();
            return db.keys();
          }
          /**
           * Iterate through each key,value pair.
           * @param iteratorCallback a callback of the form (value, key, iterationNumber)
           * @returns Returns a promise that resolves when the iteration has finished.
           */

        }, {
          key: "forEach",
          value: function forEach(iteratorCallback) {
            var db = this.assertDb();
            return db.iterate(iteratorCallback);
          }
        }, {
          key: "setEncryptionKey",
          value: function setEncryptionKey(key) {
            var _a;

            if (!this._secureStorageDriver) {
              throw new Error('@ionic-enterprise/secure-storage not installed. Encryption support not available');
            } else {
              (_a = this._secureStorageDriver) === null || _a === void 0 ? void 0 : _a.setEncryptionKey(key);
            }
          }
        }, {
          key: "driver",
          get: function get() {
            var _a;

            return ((_a = this._db) === null || _a === void 0 ? void 0 : _a.driver()) || null;
          }
        }]);

        return Storage;
      }(); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pagamentos/pagamentos.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagamentos/pagamentos.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagamentosPagamentosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> PAGAMENTOS </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm(ionicForm.value)\" novalidate>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\">Valor</ion-label>\n            <ion-input type=\"float\" formControlName=\"valor\"> </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=8>\n          <ion-item>\n            <ion-label position=\"floating\">Numero Cartao</ion-label>\n            <ion-input (ionBlur)=\"buscaBandeira()\" formControlName=\"numCard\" type=\"text\">\n            </ion-input>\n          </ion-item>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.name.errors?.required\">\n            Numero do Cartão é requerido.\n          </span>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.name.errors?.minlength\">\n            Numero do Cartão aceita somente números .\n          </span>\n        </ion-col>\n        <ion-col size=4>\n          <ion-item>\n            <ion-thumbnail slot=\"start\"><img src={{thumbnail}}> </ion-thumbnail>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col col-4>\n          <ion-item>\n            <ion-label position=\"floating\">Ano Val. </ion-label>\n            <!-- 3 input tags suppose to show in the same line -->\n            <ion-input formControlName=\"anoValCard\" maxlength=\"4\" placeholder=\"ANO\" type=\"text\"></ion-input>\n\n          </ion-item>\n        </ion-col>\n        <ion-col col-4>\n          <ion-label position=\"floating\">Mês Val.</ion-label>\n          <ion-input formControlName=\"mesValCard\" maxlength=\"2\" placeholder=\"MES\" type=\"number\"></ion-input>\n        </ion-col>\n        <ion-col col-4>\n          <ion-label position=\"floating\">Cod Seg. </ion-label>\n          <ion-input formControlName=\"codSegCard\" maxlengh=\"3\" placeholder=\"COD\" type=\"number\"></ion-input>\n        </ion-col>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.anoValCard.errors?.required\">\n          Campo Obrigatorio.\n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.anoValCard.errors?.pattern\">\n          Campo Obrigatorio.\n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.anoValCard.errors?.maxLengh\">\n          Campo Obrigatorio.\n        </span>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\">Nome</ion-label>\n            <ion-input type=\"text\" formControlName=\"name\" placeholder=\"Nome\" required></ion-input>\n          </ion-item>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.name.errors?.required\">\n            Campo Obrigatorio.\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-label position=\"floating\">CPF</ion-label>\n            <ion-input type=\"text\" formControlName=\"cpf\" placeholder=\"CPF\" required></ion-input>\n          </ion-item>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.cpf.errors?.required\">\n            Campo Obrigatorio.\n          </span>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.cpf.errors?.pattern\">\n            Somente Números.\n          </span>\n        </ion-col>\n\n        <ion-col size=4>\n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Nascimento</ion-label>\n            <ion-datetime (ionChange)=\"getDate($event)\" formControlName=\"dtNasc\" [value]=\"defaultDate\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=4>\n          <ion-item>\n            <ion-label position=\"floating\">Telefone</ion-label>\n            <ion-input type=\"text\" formControlName=\"fone\"></ion-input>\n          </ion-item>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fone.errors?.pattern\">\n            Somente Numero.\n          </span>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input type=\"email\" formControlNamename=\"email\"></ion-input>\n          </ion-item>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n            Verifique Formato do email.\n          </span>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\n            Campo Obrigatório.\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"7\">\n          <ion-item>\n            <ion-label position=\"floating\">Endereço</ion-label>\n            <ion-input type=\"text\" formControlNamename=\"logradouro\"></ion-input>\n          </ion-item>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.logradouro.errors?.required\">\n            Campo Obrigatorio\n          </span>\n        </ion-col>\n        <ion-col>\n          <ion-item size=\"2\">\n            <ion-label position=\"floating\">Número</ion-label>\n            <ion-input type=\"text\" formControlNamename=\"numero\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-label position=\"floating\">CEP</ion-label>\n            <ion-input type=\"text\" formControlNamename=\"cep\"></ion-input>\n          </ion-item>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.cep.errors?.required\">\n            Campo Obrigatorio\n          </span>\n        </ion-col>\n\n        <ion-col size=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Estado</ion-label>\n            <ion-input type=\"text\" formControlNamename=\"estado\"></ion-input>\n          </ion-item>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.estado.errors?.required\">\n            Campo Obrigatorio\n          </span>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-item>\n            <ion-label position=\"floating\">Cidade</ion-label>\n            <ion-input type=\"text\" formControlName=\"cidade\"></ion-input>\n          </ion-item>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.cidade.errors?.required\">\n            Campo Obrigatorio\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <ion-item>\n        <ion-label>Parcelas</ion-label>\n        <ion-select formControlName=\"parcelas\" value=\"brown\" ok-text=\"OK\" cancel-text=\"Fechar\">\n          <ion-select-option *ngFor=\"let p of parcelas\"\n            [value]=\"[{ quantity: p['quantity'], installmentAmount: p['installmentAmount'] }]\">\n            {{ p['quantity'] + \"X \" + p['installmentAmount'] }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Submit</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n\n<script type=\"text/javascript\"\n  src=\"https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js\"></script>\n<!--\n<ion-content padding>\n  \n\n    \n    \n\n     \n    \n      \n\n   \n    \n  \n\n  </ion-list>\n\n  <button ion-button block (click)=\"pagseg.pagar()\">Salvar</button>\n\n</ion-content>-->";
      /***/
    },

    /***/
    "./src/app/pagamentos/pagamentos.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pagamentos/pagamentos.module.ts ***!
      \*************************************************/

    /*! exports provided: PagamentosPageModule */

    /***/
    function srcAppPagamentosPagamentosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagamentosPageModule", function () {
        return PagamentosPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/dist/esm/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _pagamentos_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pagamentos.page */
      "./src/app/pagamentos/pagamentos.page.ts");

      var routes = [{
        path: '',
        component: _pagamentos_page__WEBPACK_IMPORTED_MODULE_7__["PagamentosPage"]
      }];

      var PagamentosPageModule = function PagamentosPageModule() {
        _classCallCheck2(this, PagamentosPageModule);
      };

      PagamentosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_pagamentos_page__WEBPACK_IMPORTED_MODULE_7__["PagamentosPage"]],
        providers: [_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]]
      })], PagamentosPageModule);
      /***/
    },

    /***/
    "./src/app/pagamentos/pagamentos.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pagamentos/pagamentos.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagamentosPagamentosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-thumbnail {\n  --size: 10px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnYW1lbnRvcy9wYWdhbWVudG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2FtZW50b3MvcGFnYW1lbnRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGh1bWJuYWlsIHtcbiAgICAtLXNpemU6IDEwcHhcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pagamentos/pagamentos.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pagamentos/pagamentos.page.ts ***!
      \***********************************************/

    /*! exports provided: Dados, PagamentosPage */

    /***/
    function srcAppPagamentosPagamentosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dados", function () {
        return Dados;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagamentosPage", function () {
        return PagamentosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_pag_seguro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/pag-seguro.service */
      "./src/app/services/pag-seguro.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/dist/esm/index.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var Dados = function Dados(obj) {
        _classCallCheck2(this, Dados);

        this.telefone = '(77) 988997889';
        this.email = 'teste@sandbox.pagseguro.com.br';
        this.cpf = '957.937.874-61';
        this.nascimento = '16/09/1987';
        this.logradouro = 'Av Central';
        this.numero = '45';
        this.bairro = 'Centro';
        this.cep = '45002-055';
        this.cidade = 'Vitória da Conquista';
        this.estado = 'ba';
        this.parcelas = []; // preenchido dinamicamente

        Object.assign(this, obj, {}, {});
      };

      var ITEMS_KEY = 'credencial';

      var PagamentosPage = /*#__PURE__*/function () {
        function PagamentosPage(pagseg, storage, formBuilder) {
          _classCallCheck2(this, PagamentosPage);

          this.pagseg = pagseg;
          this.storage = storage;
          this.formBuilder = formBuilder;
          this.defaultDate = '1987-06-30';
          this.isSubmitted = false;
          this.parcelas = [];
          this.dados = new Dados();
          this.credenciais = {
            id: 'credenciais',
            email: 'wagfreitas@hotmail.com',
            token: '90FFE24A8F314FD98F0F29712BE30EEB',
            isSandbox: true,
            sessionId: '',
            urlTransacao: 'https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/',
            urlPagSeguroDirectPayment: 'https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js',
            numCard: '',
            bandCard: ''
          };
          this.ionicForm = this.formBuilder.group({
            numCard: ['4111111111111111', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]],
            mesValCard: ['02'],
            // [Validators.maxLength(2), Validators.required, Validators.pattern('^[0-9]+$')]] ,
            anoValCard: ['2020'],
            // [Validators.maxLength(4), Validators.required, Validators.pattern('^[0-9]+$')]] ,
            codSegCard: ['234'],
            // [Validators.maxLength(3), Validators.required, Validators.pattern('^[0-9]+$')]] ,
            fone: ['123123'],
            // [Validators.pattern('^[0-9]+$')]] ,
            cpf: ['22743910178'],
            // [Validators.maxLength(3), Validators.required, Validators.pattern('^[0-9]+$')]] ,
            name: ['wagner'],
            // [Validators.required, Validators.minLength(2)]],
            logradouro: ['teste'],
            // [Validators.required]],
            numero: ['201'],
            // [Validators.pattern('^[0-9]+$')]] ,
            cidade: ['sao paulo'],
            // [Validators.required]],
            estado: ['sp'],
            // [Validators.required]],
            bairro: ['centro'],
            // [Validators.required]],
            cep: ['05386'],
            // [Validators.maxLength(8),Validators.pattern('^[0-9]+$')]] ,
            parcelas: [''],
            valor: [''],
            email: ['wagfreitas@hotmail.com'],
            // [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            dtNasc: [this.defaultDate]
          });
        }

        _createClass(PagamentosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.create();
            this.thumbnail = '../../assets/icon/card.png';
            this.pagseg.obterIdSession(this.credenciais).subscribe(function (res) {
              _this.sessionId = res.session.id;

              _this.pagseg.carregaPagSeguroDirectPayment(_this.credenciais).then(function () {
                PagSeguroDirectPayment.setSessionId(_this.sessionId); // this.storage.set('credencial', this.credencial);

                _this.credenciais.sessionId = _this.sessionId;

                var result = _this.addCredential(_this.credenciais);

                console.log('set string in storage: ' + result);

                var resultget = _this.getCredential();

                console.log('storageGET: ' + 'credencial' + ': ' + resultget);
              });
            });
          }
        }, {
          key: "addCredential",
          value: function addCredential(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", this.storage.get(ITEMS_KEY).then(function (items) {
                        if (items) {
                          items.push(item);
                          console.log('items', items);
                          return _this2.storage.set(ITEMS_KEY, items);
                        } else {
                          return _this2.storage.set(ITEMS_KEY, [item]);
                        }
                      }));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getCredential",
          value: function getCredential() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", this.storage.get(ITEMS_KEY));

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "buscaBandeira",
          value: function buscaBandeira() {
            var _this3 = this;

            // console.log('entramos aqui ', this.ionicForm.value.parcelas, 'com o session', this.sessionId)
            var numCard = this.ionicForm.value.numCard;
            PagSeguroDirectPayment.setSessionId(this.sessionId);
            PagSeguroDirectPayment.getBrand({
              cardBin: numCard,
              success: function success(response) {
                _this3.credenciais.bandCard = response.brand.name;

                if (_this3.credenciais.bandCard === 'mastercard') {
                  _this3.thumbnail = '../../assets/icon/Mastercard.png';
                } else if (_this3.credenciais.bandCard === 'visa') {
                  _this3.thumbnail = '../../assets/icon/visa.png';
                } else {
                  _this3.thumbnail = '../../assets/icon/card.png';
                }

                console.log('Bandeira do cartão: ' + _this3.credenciais.bandCard);

                _this3.buscaParcelas(_this3.credenciais);
              },
              error: function error(response) {
                console.log('buscaBandeira', response);
              }
            });
          } // VERIFICA QUAL BANDEIRA FOI INFORMADA PELO CLIENTE AO DIGITAR OS DADOS DO CARTÃO E RETORNA AS
          // PARCELAS DISPONPIVEIS E VAI BUSCAR AS PARCELAS NA API DO PAGSEGURO PARA O CLIENTE ESCOLHER

        }, {
          key: "buscaParcelas",
          value: function buscaParcelas(dados) {
            var _this4 = this;

            dados.numCard = this.ionicForm.value.numCard;
            var val = this.ionicForm.value.valor;
            console.log('dados', dados);
            PagSeguroDirectPayment.getInstallments({
              amount: val.replace(',', '.'),
              brand: dados.bandCard,
              maxInstallmentNoInterest: 3,
              success: function success(response) {
                dados.parcelas = response.installments[dados.bandCard];
                _this4.parcelas = dados.parcelas;
                console.log('parcelas: ' + JSON.stringify(response.parcelas));
              },
              error: function error(response) {
                console.log('buscaParcelas', response);
              }
            });
          } // INICIA OS PROCESSOS PARA QUE SEJA REALIZADO O PAGAMENTO
          // AO CLICAR NO BOTÃO PAGAR

        }, {
          key: "pagar",
          value: function pagar() {
            var _this5 = this;

            // BUSCA O HASH DO COMPRADOR JUNTO A API DO PAGSEGURO
            this.dados.hashComprador = PagSeguroDirectPayment.getSenderHash(); //console.log("hash", this.dados.hashComprador)
            // CRIA O HASK DO CARTÃO DE CRÉDITO JUNTO A API DO PAGSEGURO

            PagSeguroDirectPayment.createCardToken({
              cardNumber: this.dados.numCard,
              cvv: this.dados.codSegCard,
              expirationMonth: this.dados.mesValidadeCard,
              expirationYear: this.dados.anoValidadeCard,
              brand: this.dados.bandCard,
              success: function success(response) {
                _this5.dados.hashCard = response.card.token;
                console.log('Hash do cartao', _this5.dados); // NESTE MOMENTO JÁ TEMOS TUDO QUE PRECISAMOS!
                // HORA DE ENVIAR OS DADOS PARA O SERVIDOR PARA CONCRETIZAR O PAGAMENTO

                _this5.enviaDadosParaServidor();
              },
              error: function error(response) {
                console.log(response);
              }
            });
          } // DISPARA OUTROS MÉTODOS PARA PODER CONSUMIR A API DO PAGSEGURO E CONCRETIZAR A TRANSAÇÃO

        }, {
          key: "enviaDadosParaServidor",
          value: function enviaDadosParaServidor() {
            this.pagarCheckoutTransp(this.dados); // .subscribe(result => console.log(result));
          } // MÉTODO QUE FAZ O CONSUMO COM TODOS OS DADOS NECESSÁRIOS PELA API
          // COM A FINALIDADE DE EFETUAR O PAGAMENTO

        }, {
          key: "pagarCheckoutTransp",
          value: function pagarCheckoutTransp(dados) {
            console.log('chegamos no pagamento');
            var pagDados = {
              email: 'vinassis@gmail.com',
              data: {
                payment: {
                  mode: 'default',
                  method: 'creditCard',
                  sender: {
                    hash: this.dados.hashComprador,
                    name: 'Jose Comprador',
                    email: 'teste@sandbox.pagseguro.com.br',
                    phone: {
                      areaCode: '11',
                      number: '30380000'
                    },
                    documents: {
                      document: {
                        type: 'CPF',
                        value: this.dados.cpf
                      }
                    }
                  },
                  currency: 'BRL',
                  notificationURL: null,
                  items: {
                    item: {
                      id: '1',
                      description: 'Manutenção de Portão',
                      quantity: '1',
                      amount: '30.00'
                    }
                  },
                  extraAmount: '0.00',
                  reference: 'R123456',
                  shipping: {
                    addressRequired: 'false'
                  },
                  creditCard: {
                    token: this.dados.hashCard,
                    installment: {
                      quantity: '1',
                      value: '20.00'
                    },
                    holder: {
                      name: 'Nome impresso no cartao',
                      documents: {
                        document: {
                          type: 'CPF',
                          value: '22111944785'
                        }
                      },
                      birthDate: '20/10/1980',
                      phone: {
                        areaCode: '11',
                        number: '999991111'
                      }
                    },
                    billingAddress: {
                      street: 'Av. Brigadeiro Faria Lima',
                      number: '1384',
                      complement: '1 andar',
                      district: 'Jardim Paulistano',
                      city: 'Sao Paulo',
                      state: 'SP',
                      country: 'BRA',
                      postalCode: '01452002'
                    }
                  }
                }
              }
            };
            console.log('body------', pagDados); //   this.pagseg.enviarPgto(pagDados).subscribe(res =>{
            //     console.log('res', res)
            // })
            // this.http.post(url2, body, {headers: headers});
          }
        }, {
          key: "getDate",
          value: function getDate(e) {
            var date = new Date(e.target.value).toISOString().substring(0, 10);
            this.ionicForm.get('dtNasc').setValue(date, {
              onlyself: true
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm(value) {
            console.log("valor recebido", value);
            this.isSubmitted = true;

            if (!this.ionicForm.valid) {
              console.log('Forneça todos os valores obrigatorios !');
              return false;
            } else {
              this.pagar();
            }
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.ionicForm.controls;
          }
        }]);

        return PagamentosPage;
      }();

      PagamentosPage.ctorParameters = function () {
        return [{
          type: _services_pag_seguro_service__WEBPACK_IMPORTED_MODULE_2__["PagSeguroService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      PagamentosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagamentos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./pagamentos.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pagamentos/pagamentos.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./pagamentos.page.scss */
        "./src/app/pagamentos/pagamentos.page.scss"))["default"]]
      })], PagamentosPage);
      /***/
    },

    /***/
    "./src/app/services/generic.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/generic.service.ts ***!
      \*********************************************/

    /*! exports provided: objToHttpParams, PageResult, SearchParams, GenericService */

    /***/
    function srcAppServicesGenericServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "objToHttpParams", function () {
        return objToHttpParams;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageResult", function () {
        return PageResult;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchParams", function () {
        return SearchParams;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenericService", function () {
        return GenericService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts"); //import { UtilUi } from '../../util/util-ui';

      /**
       * Prepara um objeto para uma pesquisa get com parâmetros
       */


      var objToHttpParams = function objToHttpParams(obj) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();

        for (var k in obj) {
          if (obj[k] !== null) {
            params = params.append(k, obj[k]);
          }
        }

        return params;
      };
      /**
       * Result para uma consulta paginada
       */


      var PageResult = /*#__PURE__*/function () {
        function PageResult() {
          _classCallCheck2(this, PageResult);

          this.currentPage = 0;
          this.totalElements = 0;
          this.totalPages = 0;
          this.size = 10;
          this.content = [];
        }

        _createClass(PageResult, [{
          key: "reload",
          value: function reload() {
            this.currentPage = 0;
            this.totalElements = 0;
            this.totalPages = 0;
            this.content = [];
          }
        }]);

        return PageResult;
      }();
      /**
       * Result para uma consulta paginada
       */


      var SearchParams = /*#__PURE__*/function () {
        function SearchParams() {
          _classCallCheck2(this, SearchParams);

          this.sorting = {};
          this.filters = {};
        }

        _createClass(SearchParams, [{
          key: "reloadPage",
          value: function reloadPage() {
            this.page = 0;
          }
        }]);

        return SearchParams;
      }();
      /**
       * @author Felipe Leonhardt
       * http://www.vision-ti.com.br
       */


      var GenericService = /*#__PURE__*/function () {
        function GenericService(_http, baseUrl) {
          _classCallCheck2(this, GenericService);

          this._http = _http;
          this.baseUrl = baseUrl;
          this.pageResult = new PageResult();
          this.URLAPI = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        }
        /**
         * post
         */


        _createClass(GenericService, [{
          key: "post",
          value: function post(param) {
            var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            return this._http.post("".concat(this.URLAPI).concat(this.baseUrl, "/").concat(url), param);
          }
          /**
           * retorna apenas um objeto pela cliente-api
           * @param id - asdasd
           * @returns - {Observable<R>}
           */

        }, {
          key: "findOne",
          value: function findOne(id) {
            return this.get({
              url: 'findOne/' + id
            });
          }
          /**
           * get
           */

        }, {
          key: "get",
          value: function get() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              url: '',
              params: undefined
            };

            if (config.params) {
              return this._http.get("".concat(this.URLAPI).concat(this.baseUrl, "/").concat(config.url), {
                params: objToHttpParams(config.params)
              });
            } else {
              return this._http.get("".concat(this.URLAPI).concat(this.baseUrl, "/").concat(config.url));
            }
          }
          /**
           * delete
           */

        }, {
          key: "delete",
          value: function _delete(id) {
            return this._http["delete"]("".concat(this.URLAPI).concat(this.baseUrl, "/").concat(id));
          }
          /**
           * put
           */

        }, {
          key: "put",
          value: function put() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              url: '',
              params: undefined,
              body: undefined
            };

            if (config.params) {
              return this._http.put("".concat(this.URLAPI).concat(this.baseUrl, "/").concat(config.url), config.body, {
                params: objToHttpParams(config.params)
              });
            } else {
              return this._http.put("".concat(this.URLAPI).concat(this.baseUrl, "/").concat(config.url), config.body);
            }
          }
        }, {
          key: "postWithFile",
          value: function postWithFile(url, postData, multiPartFile) {
            var formData = new FormData();

            if (multiPartFile) {
              multiPartFile.forEach(function (item) {
                if (item.file) {
                  formData.append(item.param, item.file, item.file ? item.file.name : null);
                }
              });
            }

            if (postData) {
              for (var property in postData) {
                if (postData.hasOwnProperty(property)) {
                  formData.append(property, JSON.stringify(postData[property]));
                }
              }
            }

            return this._http.post("".concat(this.URLAPI).concat(this.baseUrl, "/").concat(url), formData);
          }
          /**
           * Método generico pra criar um objeto ou salvar um existente, no backend
           * @param - obj
           * @returns - {Observable<R>}
           */

        }, {
          key: "save",
          value: function save(obj) {
            return this.post(obj, 'save');
          }
        }]);

        return GenericService;
      }();
      /***/

    },

    /***/
    "./src/app/services/pag-seguro.service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/pag-seguro.service.ts ***!
      \************************************************/

    /*! exports provided: PagSeguroService */

    /***/
    function srcAppServicesPagSeguroServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagSeguroService", function () {
        return PagSeguroService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _generic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./generic.service */
      "./src/app/services/generic.service.ts");

      var PagSeguroService = /*#__PURE__*/function (_generic_service__WEB) {
        _inherits(PagSeguroService, _generic_service__WEB);

        var _super = _createSuper(PagSeguroService);

        function PagSeguroService(_http) {
          _classCallCheck2(this, PagSeguroService);

          return _super.call(this, _http, '/api/pagseguro');
        }

        _createClass(PagSeguroService, [{
          key: "obterIdSession",
          value: function obterIdSession(obj) {
            return this.post(obj, 'session');
          }
        }, {
          key: "enviarPgto",
          value: function enviarPgto(obj) {
            console.log('obj', obj);
            return this.post(obj, 'pagamento');
          }
        }, {
          key: "carregaPagSeguroDirectPayment",
          value: function carregaPagSeguroDirectPayment(credencial) {
            return new Promise(function (resolve) {
              var script = document.createElement('script');
              script.addEventListener('load', function (r) {
                return resolve();
              });
              script.src = credencial.urlPagSeguroDirectPayment;
              document.head.appendChild(script);
            });
          }
        }]);

        return PagSeguroService;
      }(_generic_service__WEBPACK_IMPORTED_MODULE_3__["GenericService"]);

      PagSeguroService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      PagSeguroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PagSeguroService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pagamentos-pagamentos-module-es5.js.map