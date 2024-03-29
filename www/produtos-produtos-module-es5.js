(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["produtos-produtos-module"], {
    /***/
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js ***!
      \************************************************************************************/

    /*! exports provided: AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument, AngularFirestoreModule, ENABLE_PERSISTENCE, PERSISTENCE_SETTINGS, SETTINGS, USE_EMULATOR, associateQuery, combineChange, combineChanges, docChanges, fromCollectionRef, fromDocRef, fromRef, sortedChanges, validateEventsArray */

    /***/
    function node_modulesAngularFire__ivy_ngcc__Fesm2015AngularFireFirestoreJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestore", function () {
        return AngularFirestore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollection", function () {
        return AngularFirestoreCollection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollectionGroup", function () {
        return AngularFirestoreCollectionGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestoreDocument", function () {
        return AngularFirestoreDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestoreModule", function () {
        return AngularFirestoreModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ENABLE_PERSISTENCE", function () {
        return ENABLE_PERSISTENCE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PERSISTENCE_SETTINGS", function () {
        return PERSISTENCE_SETTINGS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SETTINGS", function () {
        return SETTINGS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "USE_EMULATOR", function () {
        return USE_EMULATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "associateQuery", function () {
        return associateQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "combineChange", function () {
        return combineChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "combineChanges", function () {
        return combineChanges;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "docChanges", function () {
        return docChanges;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromCollectionRef", function () {
        return fromCollectionRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromDocRef", function () {
        return fromDocRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromRef", function () {
        return fromRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortedChanges", function () {
        return sortedChanges;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateEventsArray", function () {
        return validateEventsArray;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase/app */
      "./node_modules/firebase/app/dist/index.esm.js");
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! firebase/firestore */
      "./node_modules/firebase/firestore/dist/index.esm.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /**
       * @fileoverview added by tsickle
       * Generated from: observable/fromRef.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T, R
       * @param {?} ref
       * @param {?=} scheduler
       * @return {?}
       */


      function _fromRef(ref) {
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : rxjs__WEBPACK_IMPORTED_MODULE_1__["asyncScheduler"];
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
        /**
        * @param {?} subscriber
        * @return {?}
        */
        function (subscriber) {
          /** @type {?} */
          var unsubscribe;

          if (scheduler != null) {
            scheduler.schedule(
            /**
            * @return {?}
            */
            function () {
              unsubscribe = ref.onSnapshot({
                includeMetadataChanges: true
              }, subscriber);
            });
          } else {
            unsubscribe = ref.onSnapshot({
              includeMetadataChanges: true
            }, subscriber);
          }

          return (
            /**
            * @return {?}
            */
            function () {
              if (unsubscribe != null) {
                unsubscribe();
              }
            }
          );
        });
      }
      /**
       * @template R, T
       * @param {?} ref
       * @param {?=} scheduler
       * @return {?}
       */


      function fromRef(ref, scheduler) {
        return _fromRef(ref, scheduler);
      }
      /**
       * @template T
       * @param {?} ref
       * @param {?=} scheduler
       * @return {?}
       */


      function fromDocRef(ref, scheduler) {
        return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              priorPayload = _ref2[0],
              payload = _ref2[1];

          if (!payload.exists) {
            return {
              payload: payload,
              type: 'removed'
            };
          }

          if (!(priorPayload === null || priorPayload === void 0 ? void 0 : priorPayload.exists)) {
            return {
              payload: payload,
              type: 'added'
            };
          }

          return {
            payload: payload,
            type: 'modified'
          };
        }));
      }
      /**
       * @template T
       * @param {?} ref
       * @param {?=} scheduler
       * @return {?}
       */


      function fromCollectionRef(ref, scheduler) {
        return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} payload
        * @return {?}
        */
        function (payload) {
          return {
            payload: payload,
            type: 'query'
          };
        }));
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: collection/changes.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Return a stream of document changes on a query. These results are not in sort order but in
       * order of occurence.
       * @template T
       * @param {?} query
       * @param {?=} scheduler
       * @return {?}
       */


      function docChanges(query, scheduler) {
        return fromCollectionRef(query, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              priorAction = _ref4[0],
              action = _ref4[1];

          /** @type {?} */
          var docChanges = action.payload.docChanges();
          /** @type {?} */

          var actions = docChanges.map(
          /**
          * @param {?} change
          * @return {?}
          */
          function (change) {
            return {
              type: change.type,
              payload: change
            };
          }); // the metadata has changed from the prior emission

          if (priorAction && JSON.stringify(priorAction.payload.metadata) !== JSON.stringify(action.payload.metadata)) {
            // go through all the docs in payload and figure out which ones changed
            action.payload.docs.forEach(
            /**
            * @param {?} currentDoc
            * @param {?} currentIndex
            * @return {?}
            */
            function (currentDoc, currentIndex) {
              /** @type {?} */
              var docChange = docChanges.find(
              /**
              * @param {?} d
              * @return {?}
              */
              function (d) {
                return d.doc.ref.isEqual(currentDoc.ref);
              });
              /** @type {?} */

              var priorDoc = priorAction === null || priorAction === void 0 ? void 0 : priorAction.payload.docs.find(
              /**
              * @param {?} d
              * @return {?}
              */
              function (d) {
                return d.ref.isEqual(currentDoc.ref);
              });

              if (docChange && JSON.stringify(docChange.doc.metadata) === JSON.stringify(currentDoc.metadata) || !docChange && priorDoc && JSON.stringify(priorDoc.metadata) === JSON.stringify(currentDoc.metadata)) {// document doesn't appear to have changed, don't log another action
              } else {
                // since the actions are processed in order just push onto the array
                actions.push({
                  type: 'modified',
                  payload: {
                    oldIndex: currentIndex,
                    newIndex: currentIndex,
                    type: 'modified',
                    doc: currentDoc
                  }
                });
              }
            });
          }

          return (
            /** @type {?} */
            actions
          );
        }));
      }
      /**
       * Return a stream of document changes on a query. These results are in sort order.
       * @template T
       * @param {?} query
       * @param {?} events
       * @param {?=} scheduler
       * @return {?}
       */


      function sortedChanges(query, events, scheduler) {
        return docChanges(query, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
        /**
        * @param {?} current
        * @param {?} changes
        * @return {?}
        */
        function (current, changes) {
          return combineChanges(current, changes.map(
          /**
          * @param {?} it
          * @return {?}
          */
          function (it) {
            return it.payload;
          }), events);
        }, []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), // cut down on unneed change cycles
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} changes
        * @return {?}
        */
        function (changes) {
          return changes.map(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return (
              /** @type {?} */
              {
                type: c.type,
                payload: c
              }
            );
          });
        }));
      }
      /**
       * Combines the total result set from the current set of changes from an incoming set
       * of changes.
       * @template T
       * @param {?} current
       * @param {?} changes
       * @param {?} events
       * @return {?}
       */


      function combineChanges(current, changes, events) {
        changes.forEach(
        /**
        * @param {?} change
        * @return {?}
        */
        function (change) {
          // skip unwanted change types
          if (events.indexOf(change.type) > -1) {
            current = combineChange(current, change);
          }
        });
        return current;
      }
      /**
       * Splice arguments on top of a sliced array, to break top-level ===
       * this is useful for change-detection
       * @template T
       * @param {?} original
       * @param {?} start
       * @param {?} deleteCount
       * @param {...?} args
       * @return {?}
       */


      function sliceAndSplice(original, start, deleteCount) {
        /** @type {?} */
        var returnArray = original.slice();

        for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          args[_key - 3] = arguments[_key];
        }

        returnArray.splice.apply(returnArray, [start, deleteCount].concat(args));
        return returnArray;
      }
      /**
       * Creates a new sorted array from a new change.
       * Build our own because we allow filtering of action types ('added', 'removed', 'modified') before scanning
       * and so we have greater control over change detection (by breaking ===)
       * @template T
       * @param {?} combined
       * @param {?} change
       * @return {?}
       */


      function combineChange(combined, change) {
        switch (change.type) {
          case 'added':
            if (combined[change.newIndex] && combined[change.newIndex].doc.ref.isEqual(change.doc.ref)) {// Not sure why the duplicates are getting fired
            } else {
              return sliceAndSplice(combined, change.newIndex, 0, change);
            }

            break;

          case 'modified':
            if (combined[change.oldIndex] == null || combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
              // When an item changes position we first remove it
              // and then add it's new position
              if (change.oldIndex !== change.newIndex) {
                /** @type {?} */
                var copiedArray = combined.slice();
                copiedArray.splice(change.oldIndex, 1);
                copiedArray.splice(change.newIndex, 0, change);
                return copiedArray;
              } else {
                return sliceAndSplice(combined, change.newIndex, 1, change);
              }
            }

            break;

          case 'removed':
            if (combined[change.oldIndex] && combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
              return sliceAndSplice(combined, change.oldIndex, 1);
            }

            break;
        }

        return combined;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: collection/collection.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?=} events
       * @return {?}
       */


      function validateEventsArray(events) {
        if (!events || events.length === 0) {
          events = ['added', 'removed', 'modified'];
        }

        return events;
      }
      /**
       * AngularFirestoreCollection service
       *
       * This class creates a reference to a Firestore Collection. A reference and a query are provided in
       * in the constructor. The query can be the unqueried reference if no query is desired.The class
       * is generic which gives you type safety for data update methods and data streaming.
       *
       * This class uses Symbol.observable to transform into Observable using Observable.from().
       *
       * This class is rarely used directly and should be created from the AngularFirestore service.
       *
       * Example:
       *
       * const collectionRef = firebase.firestore.collection('stocks');
       * const query = collectionRef.where('price', '>', '0.01');
       * const fakeStock = new AngularFirestoreCollection<Stock>(collectionRef, query);
       *
       * // NOTE!: the updates are performed on the reference not the query
       * await fakeStock.add({ name: 'FAKE', price: 0.01 });
       *
       * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
       * fakeStock.valueChanges().subscribe(value => console.log(value));
       * @template T
       */


      var AngularFirestoreCollection = /*#__PURE__*/function () {
        /**
         * The constructor takes in a CollectionReference and Query to provide wrapper methods
         * for data operations and data streaming.
         *
         * Note: Data operation methods are done on the reference not the query. This means
         * when you update data it is not updating data to the window of your query unless
         * the data fits the criteria of the query. See the AssociatedRefence type for details
         * on this implication.
         * @param {?} ref
         * @param {?} query
         * @param {?} afs
         */
        function AngularFirestoreCollection(ref, query, afs) {
          _classCallCheck(this, AngularFirestoreCollection);

          this.ref = ref;
          this.query = query;
          this.afs = afs;
        }
        /**
         * Listen to the latest change in the stream. This method returns changes
         * as they occur and they are not sorted by query order. This allows you to construct
         * your own data structure.
         * @param {?=} events
         * @return {?}
         */


        _createClass(AngularFirestoreCollection, [{
          key: "stateChanges",
          value: function stateChanges(events) {
            /** @type {?} */
            var source = docChanges(this.query, this.afs.schedulers.outsideAngular);

            if (events && events.length > 0) {
              source = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
              /**
              * @param {?} actions
              * @return {?}
              */
              function (actions) {
                return actions.filter(
                /**
                * @param {?} change
                * @return {?}
                */
                function (change) {
                  return events.indexOf(change.type) > -1;
                });
              }));
            }

            return source.pipe( // We want to filter out empty arrays, but always emit at first, so the developer knows
            // that the collection has been resolve; even if it's empty
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  prior = _ref6[0],
                  current = _ref6[1];

              return current.length > 0 || !prior;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                  prior = _ref8[0],
                  current = _ref8[1];

              return current;
            }), this.afs.keepUnstableUntilFirst);
          }
          /**
           * Create a stream of changes as they occur it time. This method is similar to stateChanges()
           * but it collects each event in an array over time.
           * @param {?=} events
           * @return {?}
           */

        }, {
          key: "auditTrail",
          value: function auditTrail(events) {
            return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
            /**
            * @param {?} current
            * @param {?} action
            * @return {?}
            */
            function (current, action) {
              return [].concat(_toConsumableArray(current), _toConsumableArray(action));
            }, []));
          }
          /**
           * Create a stream of synchronized changes. This method keeps the local array in sorted
           * query order.
           * @param {?=} events
           * @return {?}
           */

        }, {
          key: "snapshotChanges",
          value: function snapshotChanges(events) {
            /** @type {?} */
            var validatedEvents = validateEventsArray(events);
            /** @type {?} */

            var scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
            return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
          }
          /**
           * @template K
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "valueChanges",
          value: function valueChanges() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return fromCollectionRef(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} actions
            * @return {?}
            */
            function (actions) {
              return actions.payload.docs.map(
              /**
              * @param {?} a
              * @return {?}
              */
              function (a) {
                if (options.idField) {
                  return (
                    /** @type {?} */
                    Object.assign(Object.assign({},
                    /** @type {?} */
                    a.data()), _defineProperty({}, options.idField, a.id))
                  );
                } else {
                  return a.data();
                }
              });
            }), this.afs.keepUnstableUntilFirst);
          }
          /**
           * Retrieve the results of the query once.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "get",
          value: function get(options) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
          }
          /**
           * Add data to a collection reference.
           *
           * Note: Data operation methods are done on the reference not the query. This means
           * when you update data it is not updating data to the window of your query unless
           * the data fits the criteria of the query.
           * @param {?} data
           * @return {?}
           */

        }, {
          key: "add",
          value: function add(data) {
            return this.ref.add(data);
          }
          /**
           * Create a reference to a single document in a collection.
           * @template T2
           * @param {?=} path
           * @return {?}
           */

        }, {
          key: "doc",
          value: function doc(path) {
            // TODO is there a better way to solve this type issue
            return new AngularFirestoreDocument(
            /** @type {?} */
            this.ref.doc(path), this.afs);
          }
        }]);

        return AngularFirestoreCollection;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: document/document.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * AngularFirestoreDocument service
       *
       * This class creates a reference to a Firestore Document. A reference is provided in
       * in the constructor. The class is generic which gives you type safety for data update
       * methods and data streaming.
       *
       * This class uses Symbol.observable to transform into Observable using Observable.from().
       *
       * This class is rarely used directly and should be created from the AngularFirestore service.
       *
       * Example:
       *
       * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
       * await fakeStock.set({ name: 'FAKE', price: 0.01 });
       * fakeStock.valueChanges().map(snap => {
       *   if(snap.exists) return snap.data();
       *   return null;
       * }).subscribe(value => console.log(value));
       * // OR! Transform using Observable.from() and the data is unwrapped for you
       * Observable.from(fakeStock).subscribe(value => console.log(value));
       * @template T
       */


      var AngularFirestoreDocument = /*#__PURE__*/function () {
        /**
         * The constructor takes in a DocumentReference to provide wrapper methods
         * for data operations, data streaming, and Symbol.observable.
         * @param {?} ref
         * @param {?} afs
         */
        function AngularFirestoreDocument(ref, afs) {
          _classCallCheck(this, AngularFirestoreDocument);

          this.ref = ref;
          this.afs = afs;
        }
        /**
         * Create or overwrite a single document.
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */


        _createClass(AngularFirestoreDocument, [{
          key: "set",
          value: function set(data, options) {
            return this.ref.set(data, options);
          }
          /**
           * Update some fields of a document without overwriting the entire document.
           * @param {?} data
           * @return {?}
           */

        }, {
          key: "update",
          value: function update(data) {
            return this.ref.update(data);
          }
          /**
           * Delete a document.
           * @return {?}
           */

        }, {
          key: "delete",
          value: function _delete() {
            return this.ref["delete"]();
          }
          /**
           * Create a reference to a sub-collection given a path and an optional query
           * function.
           * @template R
           * @param {?} path
           * @param {?=} queryFn
           * @return {?}
           */

        }, {
          key: "collection",
          value: function collection(path, queryFn) {
            /** @type {?} */
            var collectionRef =
            /** @type {?} */
            this.ref.collection(path);

            var _associateQuery = associateQuery(collectionRef, queryFn),
                ref = _associateQuery.ref,
                query = _associateQuery.query;

            return new AngularFirestoreCollection(ref, query, this.afs);
          }
          /**
           * Listen to snapshot updates from the document.
           * @return {?}
           */

        }, {
          key: "snapshotChanges",
          value: function snapshotChanges() {
            /** @type {?} */
            var scheduledFromDocRef$ = fromDocRef(this.ref, this.afs.schedulers.outsideAngular);
            return scheduledFromDocRef$.pipe(this.afs.keepUnstableUntilFirst);
          }
          /**
           * @template K
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "valueChanges",
          value: function valueChanges() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref9) {
              var payload = _ref9.payload;
              return options.idField ?
              /** @type {?} */
              Object.assign(Object.assign({}, payload.data()), _defineProperty({}, options.idField, payload.id)) : payload.data();
            }));
          }
          /**
           * Retrieve the document once.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "get",
          value: function get(options) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.ref.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
          }
        }]);

        return AngularFirestoreDocument;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: collection-group/collection-group.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * AngularFirestoreCollectionGroup service
       *
       * This class holds a reference to a Firestore Collection Group Query.
       *
       * This class uses Symbol.observable to transform into Observable using Observable.from().
       *
       * This class is rarely used directly and should be created from the AngularFirestore service.
       *
       * Example:
       *
       * const collectionGroup = firebase.firestore.collectionGroup('stocks');
       * const query = collectionRef.where('price', '>', '0.01');
       * const fakeStock = new AngularFirestoreCollectionGroup<Stock>(query, afs);
       *
       * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
       * fakeStock.valueChanges().subscribe(value => console.log(value));
       * @template T
       */


      var AngularFirestoreCollectionGroup = /*#__PURE__*/function () {
        /**
         * The constructor takes in a CollectionGroupQuery to provide wrapper methods
         * for data operations and data streaming.
         * @param {?} query
         * @param {?} afs
         */
        function AngularFirestoreCollectionGroup(query, afs) {
          _classCallCheck(this, AngularFirestoreCollectionGroup);

          this.query = query;
          this.afs = afs;
        }
        /**
         * Listen to the latest change in the stream. This method returns changes
         * as they occur and they are not sorted by query order. This allows you to construct
         * your own data structure.
         * @param {?=} events
         * @return {?}
         */


        _createClass(AngularFirestoreCollectionGroup, [{
          key: "stateChanges",
          value: function stateChanges(events) {
            if (!events || events.length === 0) {
              return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
            }

            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} actions
            * @return {?}
            */
            function (actions) {
              return actions.filter(
              /**
              * @param {?} change
              * @return {?}
              */
              function (change) {
                return events.indexOf(change.type) > -1;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /**
            * @param {?} changes
            * @return {?}
            */
            function (changes) {
              return changes.length > 0;
            }), this.afs.keepUnstableUntilFirst);
          }
          /**
           * Create a stream of changes as they occur it time. This method is similar to stateChanges()
           * but it collects each event in an array over time.
           * @param {?=} events
           * @return {?}
           */

        }, {
          key: "auditTrail",
          value: function auditTrail(events) {
            return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
            /**
            * @param {?} current
            * @param {?} action
            * @return {?}
            */
            function (current, action) {
              return [].concat(_toConsumableArray(current), _toConsumableArray(action));
            }, []));
          }
          /**
           * Create a stream of synchronized changes. This method keeps the local array in sorted
           * query order.
           * @param {?=} events
           * @return {?}
           */

        }, {
          key: "snapshotChanges",
          value: function snapshotChanges(events) {
            /** @type {?} */
            var validatedEvents = validateEventsArray(events);
            /** @type {?} */

            var scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
            return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
          }
          /**
           * @template K
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "valueChanges",
          value: function valueChanges() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            /** @type {?} */
            var fromCollectionRefScheduled$ = fromCollectionRef(this.query, this.afs.schedulers.outsideAngular);
            return fromCollectionRefScheduled$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} actions
            * @return {?}
            */
            function (actions) {
              return actions.payload.docs.map(
              /**
              * @param {?} a
              * @return {?}
              */
              function (a) {
                if (options.idField) {
                  return (
                    /** @type {?} */
                    Object.assign(_defineProperty({}, options.idField, a.id), a.data())
                  );
                } else {
                  return a.data();
                }
              });
            }), this.afs.keepUnstableUntilFirst);
          }
          /**
           * Retrieve the results of the query once.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "get",
          value: function get(options) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
          }
        }]);

        return AngularFirestoreCollectionGroup;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: firestore.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * The value of this token determines whether or not the firestore will have persistance enabled
       * @type {?}
       */


      var ENABLE_PERSISTENCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.enableFirestorePersistence');
      /** @type {?} */

      var PERSISTENCE_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.persistenceSettings');
      /** @type {?} */

      var SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.settings');
      /** @type {?} */

      var USE_EMULATOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.use-emulator');
      /**
       * A utility methods for associating a collection reference with
       * a query.
       *
       * @template T
       * @param {?} collectionRef - A collection reference to query
       * @param {?=} queryFn - The callback to create a query
       *
       * Example:
       * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
       *  return ref.where('age', '<', 200);
       * });
       * @return {?}
       */

      function associateQuery(collectionRef) {
        var queryFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :
        /**
        * @param {?} ref
        * @return {?}
        */
        function (ref) {
          return ref;
        };

        /** @type {?} */
        var query = queryFn(collectionRef);
        /** @type {?} */

        var ref = collectionRef;
        return {
          query: query,
          ref: ref
        };
      }
      /**
       * AngularFirestore Service
       *
       * This service is the main entry point for this feature module. It provides
       * an API for creating Collection and Reference services. These services can
       * then be used to do data updates and observable streams of the data.
       *
       * Example:
       *
       * import { Component } from '\@angular/core';
       * import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '\@angular/fire/firestore';
       * import { Observable } from 'rxjs/Observable';
       * import { from } from 'rxjs/observable';
       *
       * \@Component({
       *   selector: 'app-my-component',
       *   template: `
       *    <h2>Items for {{ (profile | async)?.name }}
       *    <ul>
       *       <li *ngFor="let item of items | async">{{ item.name }}</li>
       *    </ul>
       *    <div class="control-input">
       *       <input type="text" #itemname />
       *       <button (click)="addItem(itemname.value)">Add Item</button>
       *    </div>
       *   `
       * })
       * export class MyComponent implements OnInit {
       *
       *   // services for data operations and data streaming
       *   private readonly itemsRef: AngularFirestoreCollection<Item>;
       *   private readonly profileRef: AngularFirestoreDocument<Profile>;
       *
       *   // observables for template
       *   items: Observable<Item[]>;
       *   profile: Observable<Profile>;
       *
       *   // inject main service
       *   constructor(private readonly afs: AngularFirestore) {}
       *
       *   ngOnInit() {
       *     this.itemsRef = afs.collection('items', ref => ref.where('user', '==', 'davideast').limit(10));
       *     this.items = this.itemsRef.valueChanges().map(snap => snap.docs.map(data => doc.data()));
       *     // this.items = from(this.itemsRef); // you can also do this with no mapping
       *
       *     this.profileRef = afs.doc('users/davideast');
       *     this.profile = this.profileRef.valueChanges();
       *   }
       *
       *   addItem(name: string) {
       *     const user = 'davideast';
       *     this.itemsRef.add({ name, user });
       *   }
       * }
       */


      var AngularFirestore = /*#__PURE__*/function () {
        /**
         * Each Feature of AngularFire has a FirebaseApp injected. This way we
         * don't rely on the main Firebase App instance and we can create named
         * apps and use multiple apps.
         * @param {?} options
         * @param {?} nameOrConfig
         * @param {?} shouldEnablePersistence
         * @param {?} settings
         * @param {?} platformId
         * @param {?} zone
         * @param {?} persistenceSettings
         * @param {?} _useEmulator
         * @param {?} useAuthEmulator
         */
        function AngularFirestore(options, nameOrConfig, shouldEnablePersistence, settings, // tslint:disable-next-line:ban-types
        platformId, zone, persistenceSettings, _useEmulator, useAuthEmulator) {
          _classCallCheck(this, AngularFirestore);

          this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
          this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers);
          /** @type {?} */

          var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);

          if (!firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].auth && useAuthEmulator) {
            Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵlogAuthEmulatorError"])();
          }
          /** @type {?} */


          var useEmulator = _useEmulator;

          var _Object = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfetchInstance"])("".concat(app.name, ".firestore"), 'AngularFirestore', app,
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var firestore = zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return app.firestore();
            });

            if (settings) {
              firestore.settings(settings);
            }

            if (useEmulator) {
              firestore.useEmulator.apply(firestore, _toConsumableArray(useEmulator));
            }

            if (shouldEnablePersistence && !Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(platformId)) {
              // We need to try/catch here because not all enablePersistence() failures are caught
              // https://github.com/firebase/firebase-js-sdk/issues/608

              /** @type {?} */
              var enablePersistence =
              /**
              * @return {?}
              */
              function enablePersistence() {
                try {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(firestore.enablePersistence(persistenceSettings || undefined).then(
                  /**
                  * @return {?}
                  */
                  function () {
                    return true;
                  },
                  /**
                  * @return {?}
                  */
                  function () {
                    return false;
                  }));
                } catch (e) {
                  if (typeof console !== 'undefined') {
                    console.warn(e);
                  }

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                }
              };

              return [firestore, zone.runOutsideAngular(enablePersistence)];
            } else {
              return [firestore, Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false)];
            }
          }, [settings, useEmulator, shouldEnablePersistence]);

          var _Object2 = _slicedToArray(_Object, 2);

          this.firestore = _Object2[0];
          this.persistenceEnabled$ = _Object2[1];
        }
        /**
         * @template T
         * @param {?} pathOrRef
         * @param {?=} queryFn
         * @return {?}
         */


        _createClass(AngularFirestore, [{
          key: "collection",
          value: function collection(pathOrRef, queryFn) {
            /** @type {?} */
            var collectionRef;

            if (typeof pathOrRef === 'string') {
              collectionRef =
              /** @type {?} */
              this.firestore.collection(pathOrRef);
            } else {
              collectionRef = pathOrRef;
            }

            var _associateQuery2 = associateQuery(collectionRef, queryFn),
                ref = _associateQuery2.ref,
                query = _associateQuery2.query;
            /** @type {?} */


            var refInZone = this.schedulers.ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return ref;
            });
            return new AngularFirestoreCollection(refInZone, query, this);
          }
          /**
           * Create a reference to a Firestore Collection Group based on a collectionId
           * and an optional query function to narrow the result
           * set.
           * @template T
           * @param {?} collectionId
           * @param {?=} queryGroupFn
           * @return {?}
           */

        }, {
          key: "collectionGroup",
          value: function collectionGroup(collectionId, queryGroupFn) {
            /** @type {?} */
            var queryFn = queryGroupFn ||
            /**
            * @param {?} ref
            * @return {?}
            */
            function (ref) {
              return ref;
            };
            /** @type {?} */


            var collectionGroup =
            /** @type {?} */
            this.firestore.collectionGroup(collectionId);
            return new AngularFirestoreCollectionGroup(queryFn(collectionGroup), this);
          }
          /**
           * @template T
           * @param {?} pathOrRef
           * @return {?}
           */

        }, {
          key: "doc",
          value: function doc(pathOrRef) {
            /** @type {?} */
            var ref;

            if (typeof pathOrRef === 'string') {
              ref =
              /** @type {?} */
              this.firestore.doc(pathOrRef);
            } else {
              ref = pathOrRef;
            }
            /** @type {?} */


            var refInZone = this.schedulers.ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return ref;
            });
            return new AngularFirestoreDocument(refInZone, this);
          }
          /**
           * Returns a generated Firestore Document Id.
           * @return {?}
           */

        }, {
          key: "createId",
          value: function createId() {
            return this.firestore.collection('_').doc().id;
          }
        }]);

        return AngularFirestore;
      }();

      AngularFirestore.ɵfac = function AngularFirestore_Factory(t) {
        return new (t || AngularFirestore)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ENABLE_PERSISTENCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PERSISTENCE_SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](USE_EMULATOR, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["USE_EMULATOR"], 8));
      };
      /** @nocollapse */


      AngularFirestore.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [ENABLE_PERSISTENCE]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [SETTINGS]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [PERSISTENCE_SETTINGS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [USE_EMULATOR]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["USE_EMULATOR"]]
          }]
        }];
      };
      /** @nocollapse */


      AngularFirestore.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function AngularFirestore_Factory() {
          return new AngularFirestore(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ENABLE_PERSISTENCE, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(SETTINGS, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PERSISTENCE_SETTINGS, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(USE_EMULATOR, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["USE_EMULATOR"], 8));
        },
        token: AngularFirestore,
        providedIn: "any"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestore, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'any'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [ENABLE_PERSISTENCE]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [SETTINGS]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [PERSISTENCE_SETTINGS]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [USE_EMULATOR]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["USE_EMULATOR"]]
            }]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: firestore.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AngularFirestoreModule = /*#__PURE__*/function () {
        function AngularFirestoreModule() {
          _classCallCheck(this, AngularFirestoreModule);
        }

        _createClass(AngularFirestoreModule, null, [{
          key: "enablePersistence",

          /**
           * Attempt to enable persistent storage, if possible
           * @param {?=} persistenceSettings
           * @return {?}
           */
          value: function enablePersistence(persistenceSettings) {
            return {
              ngModule: AngularFirestoreModule,
              providers: [{
                provide: ENABLE_PERSISTENCE,
                useValue: true
              }, {
                provide: PERSISTENCE_SETTINGS,
                useValue: persistenceSettings
              }]
            };
          }
        }]);

        return AngularFirestoreModule;
      }();

      AngularFirestoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AngularFirestoreModule
      });
      AngularFirestoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AngularFirestoreModule_Factory(t) {
          return new (t || AngularFirestoreModule)();
        },
        providers: [AngularFirestore]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [AngularFirestore]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: interfaces.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       * @template T
       */


      function DocumentSnapshotExists() {}

      if (false) {}
      /**
       * @record
       */


      function DocumentSnapshotDoesNotExist() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function QueryDocumentSnapshot() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function QuerySnapshot() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function DocumentChange() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function DocumentChangeAction() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function Action() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function Reference() {}

      if (false) {}
      /**
       * A structure that provides an association between a reference
       * and a query on that reference. Note: Performing operations
       * on the reference can lead to confusing results with complicated
       * queries.
       *
       * Example:
       *
       * const query = ref.where('type', '==', 'Book').
       *                  .where('price', '>' 18.00)
       *                  .where('price', '<' 100.00)
       *                  .where('category', '==', 'Fiction')
       *                  .where('publisher', '==', 'BigPublisher')
       *
       * // This addition would not be a result of the query above
       * ref.add({
       *  type: 'Magazine',
       *  price: 4.99,
       *  category: 'Sports',
       *  publisher: 'SportsPublisher'
       * });
       * @record
       * @template T
       */


      function AssociatedReference() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: public_api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: angular-fire-firestore.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-fire-firestore.js.map

      /***/

    },

    /***/
    "./node_modules/@firebase/firestore/dist/index.esm.js":
    /*!************************************************************!*\
      !*** ./node_modules/@firebase/firestore/dist/index.esm.js ***!
      \************************************************************/

    /*! exports provided: __PRIVATE_registerFirestore */

    /***/
    function node_modulesFirebaseFirestoreDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__PRIVATE_registerFirestore", function () {
        return kc;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @firebase/app */
      "./node_modules/@firebase/app/dist/index.esm.js");
      /* harmony import */


      var _firebase_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @firebase/logger */
      "./node_modules/@firebase/logger/dist/index.esm.js");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @firebase/util */
      "./node_modules/@firebase/util/dist/index.esm.js");
      /* harmony import */


      var _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @firebase/webchannel-wrapper */
      "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @firebase/component */
      "./node_modules/@firebase/component/dist/index.esm.js");
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var E =
      /**
           * Constructs a DatabaseInfo using the provided host, databaseId and
           * persistenceKey.
           *
           * @param databaseId The database to use.
           * @param persistenceKey A unique identifier for this Firestore's local
           * storage (used in conjunction with the databaseId).
           * @param host The Firestore backend host to connect to.
           * @param ssl Whether to use SSL when connecting.
           * @param forceLongPolling Whether to use the forceLongPolling option
           * when using WebChannel as the network transport.
           * @param autoDetectLongPolling Whether to use the detectBufferingProxy
           * option when using WebChannel as the network transport.
           */
      function E(t, e, n, r, i, o) {
        this.t = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i, this.i = o;
      },
          T =
      /** @class */
      function () {
        function t(t, e) {
          this.projectId = t, this.database = e || "(default)";
        }

        return Object.defineProperty(t.prototype, "o", {
          get: function get() {
            return "(default)" === this.database;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.isEqual = function (e) {
          return e instanceof t && e.projectId === this.projectId && e.database === this.database;
        }, t;
      }(),
          N =
      /** @class */
      function () {
        function t(t) {
          this.uid = t;
        }

        return t.prototype.u = function () {
          return null != this.uid;
        },
        /**
         * Returns a key representing this user, suitable for inclusion in a
         * dictionary.
         */
        t.prototype.h = function () {
          return this.u() ? "uid:" + this.uid : "anonymous-user";
        }, t.prototype.isEqual = function (t) {
          return t.uid === this.uid;
        }, t;
      }();
      /** The default database name for a project. */

      /** Represents the database ID a Firestore client is associated with. */

      /** A user with a null UID. */


      N.UNAUTHENTICATED = new N(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
      // non-FirebaseAuth providers.
      N.l = new N("google-credentials-uid"), N._ = new N("first-party-uid");
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var A = new _firebase_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]("@firebase/firestore"); // Helper methods are needed because variables can't be exported as read/write

      function D() {
        return A.logLevel;
      }
      /**
       * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
       *
       * @param logLevel
       *   The verbosity you set for activity and error logging. Can be any of
       *   the following values:
       *
       *   <ul>
       *     <li>`debug` for the most verbose logging level, primarily for
       *     debugging.</li>
       *     <li>`error` to log errors only.</li>
       *     <li><code>`silent` to turn off logging.</li>
       *   </ul>
       */


      function x(t) {
        for (var e = [], n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }

        if (A.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].DEBUG) {
          var i = e.map(S);
          A.debug.apply(A, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(["Firestore (8.1.1): " + t], i));
        }
      }

      function k(t) {
        for (var e = [], n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }

        if (A.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].ERROR) {
          var i = e.map(S);
          A.error.apply(A, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(["Firestore (8.1.1): " + t], i));
        }
      }

      function O(t) {
        for (var e = [], n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }

        if (A.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].WARN) {
          var i = e.map(S);
          A.warn.apply(A, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(["Firestore (8.1.1): " + t], i));
        }
      }
      /**
       * Converts an additional log parameter to a string representation.
       */


      function S(t) {
        if ("string" == typeof t) return t;

        try {
          return e = t, JSON.stringify(e);
        } catch (e) {
          // Converting to JSON failed, just log the object directly
          return t;
        }
        /**
        * @license
        * Copyright 2020 Google LLC
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        *   http://www.apache.org/licenses/LICENSE-2.0
        *
        * Unless required by applicable law or agreed to in writing, software
        * distributed under the License is distributed on an "AS IS" BASIS,
        * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        * See the License for the specific language governing permissions and
        * limitations under the License.
        */

        /** Formats an object as a JSON string, suitable for logging. */


        var e;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Unconditionally fails, throwing an Error with the given message.
       * Messages are stripped in production builds.
       *
       * Returns `never` and can be used in expressions:
       * @example
       * let futureVar = fail('not implemented yet');
       */


      function P(t) {
        void 0 === t && (t = "Unexpected state"); // Log the failure in addition to throw an exception, just in case the
        // exception is swallowed.

        var e = "FIRESTORE (8.1.1) INTERNAL ASSERTION FAILED: " + t; // NOTE: We don't use FirestoreError here because these are internal failures
        // that cannot be handled by the user. (Also it would create a circular
        // dependency between the error and assert modules which doesn't work.)

        throw k(e), new Error(e)
        /**
        * Fails if the given assertion condition is false, throwing an Error with the
        * given message if it did.
        *
        * Messages are stripped in production builds.
        */
        ;
      }

      function C(t, e) {
        t || P();
      }
      /**
       * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
       * instance of `T` before casting.
       */


      function R(t, // eslint-disable-next-line @typescript-eslint/no-explicit-any
      e) {
        return t;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var V = {
        // Causes are copied from:
        // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h

        /** Not an error; returned on success. */
        OK: "ok",

        /** The operation was cancelled (typically by the caller). */
        CANCELLED: "cancelled",

        /** Unknown error or an error from a different error domain. */
        UNKNOWN: "unknown",

        /**
         * Client specified an invalid argument. Note that this differs from
         * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
         * problematic regardless of the state of the system (e.g., a malformed file
         * name).
         */
        INVALID_ARGUMENT: "invalid-argument",

        /**
         * Deadline expired before operation could complete. For operations that
         * change the state of the system, this error may be returned even if the
         * operation has completed successfully. For example, a successful response
         * from a server could have been delayed long enough for the deadline to
         * expire.
         */
        DEADLINE_EXCEEDED: "deadline-exceeded",

        /** Some requested entity (e.g., file or directory) was not found. */
        NOT_FOUND: "not-found",

        /**
         * Some entity that we attempted to create (e.g., file or directory) already
         * exists.
         */
        ALREADY_EXISTS: "already-exists",

        /**
         * The caller does not have permission to execute the specified operation.
         * PERMISSION_DENIED must not be used for rejections caused by exhausting
         * some resource (use RESOURCE_EXHAUSTED instead for those errors).
         * PERMISSION_DENIED must not be used if the caller can not be identified
         * (use UNAUTHENTICATED instead for those errors).
         */
        PERMISSION_DENIED: "permission-denied",

        /**
         * The request does not have valid authentication credentials for the
         * operation.
         */
        UNAUTHENTICATED: "unauthenticated",

        /**
         * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
         * entire file system is out of space.
         */
        RESOURCE_EXHAUSTED: "resource-exhausted",

        /**
         * Operation was rejected because the system is not in a state required for
         * the operation's execution. For example, directory to be deleted may be
         * non-empty, an rmdir operation is applied to a non-directory, etc.
         *
         * A litmus test that may help a service implementor in deciding
         * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
         *  (a) Use UNAVAILABLE if the client can retry just the failing call.
         *  (b) Use ABORTED if the client should retry at a higher-level
         *      (e.g., restarting a read-modify-write sequence).
         *  (c) Use FAILED_PRECONDITION if the client should not retry until
         *      the system state has been explicitly fixed. E.g., if an "rmdir"
         *      fails because the directory is non-empty, FAILED_PRECONDITION
         *      should be returned since the client should not retry unless
         *      they have first fixed up the directory by deleting files from it.
         *  (d) Use FAILED_PRECONDITION if the client performs conditional
         *      REST Get/Update/Delete on a resource and the resource on the
         *      server does not match the condition. E.g., conflicting
         *      read-modify-write on the same resource.
         */
        FAILED_PRECONDITION: "failed-precondition",

        /**
         * The operation was aborted, typically due to a concurrency issue like
         * sequencer check failures, transaction aborts, etc.
         *
         * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
         * and UNAVAILABLE.
         */
        ABORTED: "aborted",

        /**
         * Operation was attempted past the valid range. E.g., seeking or reading
         * past end of file.
         *
         * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
         * if the system state changes. For example, a 32-bit file system will
         * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
         * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
         * an offset past the current file size.
         *
         * There is a fair bit of overlap between FAILED_PRECONDITION and
         * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
         * when it applies so that callers who are iterating through a space can
         * easily look for an OUT_OF_RANGE error to detect when they are done.
         */
        OUT_OF_RANGE: "out-of-range",

        /** Operation is not implemented or not supported/enabled in this service. */
        UNIMPLEMENTED: "unimplemented",

        /**
         * Internal errors. Means some invariants expected by underlying System has
         * been broken. If you see one of these errors, Something is very broken.
         */
        INTERNAL: "internal",

        /**
         * The service is currently unavailable. This is a most likely a transient
         * condition and may be corrected by retrying with a backoff.
         *
         * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
         * and UNAVAILABLE.
         */
        UNAVAILABLE: "unavailable",

        /** Unrecoverable data loss or corruption. */
        DATA_LOSS: "data-loss"
      },
          L =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, n) || this).code = t, r.message = n, r.name = "FirebaseError", // HACK: We write a toString property directly because Error is not a real
          // class and so inheritance does not work correctly. We could alternatively
          // do the same "back-door inheritance" trick that FirebaseError does.
          r.toString = function () {
            return r.name + ": [code=" + r.code + "]: " + r.message;
          }, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(Error),
          U = function U(t, e) {
        this.user = e, this.type = "OAuth", this.T = {}, // Set the headers using Object Literal notation to avoid minification
        this.T.Authorization = "Bearer " + t;
      },
          M =
      /** @class */
      function () {
        function t() {
          /**
           * Stores the listener registered with setChangeListener()
           * This isn't actually necessary since the UID never changes, but we use this
           * to verify the listen contract is adhered to in tests.
           */
          this.I = null;
        }

        return t.prototype.getToken = function () {
          return Promise.resolve(null);
        }, t.prototype.m = function () {}, t.prototype.A = function (t) {
          this.I = t, // Fire with initial user.
          t(N.UNAUTHENTICATED);
        }, t.prototype.R = function () {
          this.I = null;
        }, t;
      }(),
          q =
      /** @class */
      function () {
        function t(t) {
          var e = this;
          /**
           * The auth token listener registered with FirebaseApp, retained here so we
           * can unregister it.
           */

          this.P = null,
          /** Tracks the current User. */
          this.currentUser = N.UNAUTHENTICATED, this.g = !1,
          /**
               * Counter used to detect if the token changed while a getToken request was
               * outstanding.
               */
          this.V = 0,
          /** The listener registered with setChangeListener(). */
          this.I = null, this.forceRefresh = !1, this.P = function () {
            e.V++, e.currentUser = e.p(), e.g = !0, e.I && e.I(e.currentUser);
          }, this.V = 0, this.auth = t.getImmediate({
            optional: !0
          }), this.auth ? this.auth.addAuthTokenListener(this.P) : ( // if auth is not available, invoke tokenListener once with null token
          this.P(null), t.get().then(function (t) {
            e.auth = t, e.P && // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.P);
          }, function () {}));
        }

        return t.prototype.getToken = function () {
          var t = this,
              e = this.V,
              n = this.forceRefresh; // Take note of the current value of the tokenCounter so that this method
          // can fail (with an ABORTED error) if there is a token change while the
          // request is outstanding.

          return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then(function (n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            return t.V !== e ? (x("FirebaseCredentialsProvider", "getToken aborted due to token change."), t.getToken()) : n ? (C("string" == typeof n.accessToken), new U(n.accessToken, t.currentUser)) : null;
          }) : Promise.resolve(null);
        }, t.prototype.m = function () {
          this.forceRefresh = !0;
        }, t.prototype.A = function (t) {
          this.I = t, // Fire the initial event
          this.g && t(this.currentUser);
        }, t.prototype.R = function () {
          this.auth && this.auth.removeAuthTokenListener(this.P), this.P = null, this.I = null;
        }, // Auth.getUid() can return null even with a user logged in. It is because
        // getUid() is synchronous, but the auth code populating Uid is asynchronous.
        // This method should only be called in the AuthTokenListener callback
        // to guarantee to get the actual user.
        t.prototype.p = function () {
          var t = this.auth && this.auth.getUid();
          return C(null === t || "string" == typeof t), new N(t);
        }, t;
      }(),
          j =
      /** @class */
      function () {
        function t(t, e) {
          this.v = t, this.S = e, this.type = "FirstParty", this.user = N._;
        }

        return Object.defineProperty(t.prototype, "T", {
          get: function get() {
            var t = {
              "X-Goog-AuthUser": this.S
            },
                e = this.v.auth.getAuthHeaderValueForFirstParty([]); // Use array notation to prevent minification

            return e && (t.Authorization = e), t;
          },
          enumerable: !1,
          configurable: !0
        }), t;
      }(),
          F =
      /** @class */
      function () {
        function t(t, e) {
          this.v = t, this.S = e;
        }

        return t.prototype.getToken = function () {
          return Promise.resolve(new j(this.v, this.S));
        }, t.prototype.A = function (t) {
          // Fire with initial uid.
          t(N._);
        }, t.prototype.R = function () {}, t.prototype.m = function () {}, t;
      }();
      /** An error returned by a Firestore operation. */

      /**
       * Builds a CredentialsProvider depending on the type of
       * the credentials passed in.
       */

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Generates `nBytes` of random bytes.
       *
       * If `nBytes < 0` , an error will be thrown.
       */


      function z(t) {
        // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
        var e = // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "undefined" != typeof self && (self.crypto || self.msCrypto),
            n = new Uint8Array(t);
        if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n);else // Falls back to Math.random
          for (var r = 0; r < t; r++) {
            n[r] = Math.floor(256 * Math.random());
          }
        return n;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var B =
      /** @class */
      function () {
        function t() {}

        return t.D = function () {
          for ( // Alphanumeric characters
          var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = "" // The largest byte value that is a multiple of `char.length`.
          ; n.length < 20;) {
            for (var r = z(40), i = 0; i < r.length; ++i) {
              // Only accept values that are [0, maxMultiple), this ensures they can
              // be evenly mapped to indices of `chars` via a modulo operation.
              n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
            }
          }

          return n;
        }, t;
      }();

      function G(t, e) {
        return t < e ? -1 : t > e ? 1 : 0;
      }
      /** Helper to compare arrays using isEqual(). */


      function K(t, e, n) {
        return t.length === e.length && t.every(function (t, r) {
          return n(t, e[r]);
        });
      }
      /**
       * Returns the immediate lexicographically-following string. This is useful to
       * construct an inclusive range for indexeddb iterators.
       */


      function W(t) {
        // Return the input string, with an additional NUL byte appended.
        return t + "\0";
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // The earlist date supported by Firestore timestamps (0001-01-01T00:00:00Z).

      /**
       * A `Timestamp` represents a point in time independent of any time zone or
       * calendar, represented as seconds and fractions of seconds at nanosecond
       * resolution in UTC Epoch time.
       *
       * It is encoded using the Proleptic Gregorian Calendar which extends the
       * Gregorian calendar backwards to year one. It is encoded assuming all minutes
       * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
       * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
       * 9999-12-31T23:59:59.999999999Z.
       *
       * @see https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto
       */


      var Q =
      /** @class */
      function () {
        /**
         * Creates a new timestamp.
         *
         * @param seconds The number of seconds of UTC time since Unix epoch
         *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
         *     9999-12-31T23:59:59Z inclusive.
         * @param nanoseconds The non-negative fractions of a second at nanosecond
         *     resolution. Negative second values with fractions must still have
         *     non-negative nanoseconds values that count forward in time. Must be
         *     from 0 to 999,999,999 inclusive.
         */
        function t(t, e) {
          if (this.seconds = t, this.nanoseconds = e, e < 0) throw new L(V.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
          if (e >= 1e9) throw new L(V.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
          if (t < -62135596800) throw new L(V.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t); // This will break in the year 10,000.

          if (t >= 253402300800) throw new L(V.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        }
        /**
         * Creates a new timestamp with the current date, with millisecond precision.
         *
         * @return a new timestamp representing the current date.
         */


        return t.now = function () {
          return t.fromMillis(Date.now());
        },
        /**
         * Creates a new timestamp from the given date.
         *
         * @param date The date to initialize the `Timestamp` from.
         * @return A new `Timestamp` representing the same point in time as the given
         *     date.
         */
        t.fromDate = function (e) {
          return t.fromMillis(e.getTime());
        },
        /**
         * Creates a new timestamp from the given number of milliseconds.
         *
         * @param milliseconds Number of milliseconds since Unix epoch
         *     1970-01-01T00:00:00Z.
         * @return A new `Timestamp` representing the same point in time as the given
         *     number of milliseconds.
         */
        t.fromMillis = function (e) {
          var n = Math.floor(e / 1e3);
          return new t(n, 1e6 * (e - 1e3 * n));
        },
        /**
         * Converts a `Timestamp` to a JavaScript `Date` object. This conversion causes
         * a loss of precision since `Date` objects only support millisecond precision.
         *
         * @return JavaScript `Date` object representing the same point in time as
         *     this `Timestamp`, with millisecond precision.
         */
        t.prototype.toDate = function () {
          return new Date(this.toMillis());
        },
        /**
         * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
         * epoch). This operation causes a loss of precision.
         *
         * @return The point in time corresponding to this timestamp, represented as
         *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
         */
        t.prototype.toMillis = function () {
          return 1e3 * this.seconds + this.nanoseconds / 1e6;
        }, t.prototype.C = function (t) {
          return this.seconds === t.seconds ? G(this.nanoseconds, t.nanoseconds) : G(this.seconds, t.seconds);
        },
        /**
         * Returns true if this `Timestamp` is equal to the provided one.
         *
         * @param other The `Timestamp` to compare against.
         * @return true if this `Timestamp` is equal to the provided one.
         */
        t.prototype.isEqual = function (t) {
          return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
        }, t.prototype.toString = function () {
          return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
        }, t.prototype.toJSON = function () {
          return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
          };
        },
        /**
         * Converts this object to a primitive string, which allows Timestamp objects to be compared
         * using the `>`, `<=`, `>=` and `>` operators.
         */
        t.prototype.valueOf = function () {
          // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
          // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
          // with zeroes to be a consistent length. Strings with this format then have a lexiographical
          // ordering that matches the expected ordering. The <seconds> translation is done to avoid
          // having a leading negative sign (i.e. a leading '-' character) in its string representation,
          // which would affect its lexiographical ordering.
          var t = this.seconds - -62135596800; // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.

          return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
        }, t;
      }(),
          H =
      /** @class */
      function () {
        function t(t) {
          this.timestamp = t;
        }

        return t.N = function (e) {
          return new t(e);
        }, t.min = function () {
          return new t(new Q(0, 0));
        }, t.prototype.F = function (t) {
          return this.timestamp.C(t.timestamp);
        }, t.prototype.isEqual = function (t) {
          return this.timestamp.isEqual(t.timestamp);
        },
        /** Returns a number representation of the version for use in spec tests. */
        t.prototype.O = function () {
          // Convert to microseconds.
          return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
        }, t.prototype.toString = function () {
          return "SnapshotVersion(" + this.timestamp.toString() + ")";
        }, t.prototype.M = function () {
          return this.timestamp;
        }, t;
      }(),
          Y =
      /** @class */
      function () {
        function t(t, e, n) {
          void 0 === e ? e = 0 : e > t.length && P(), void 0 === n ? n = t.length - e : n > t.length - e && P(), this.segments = t, this.offset = e, this.k = n;
        }

        return Object.defineProperty(t.prototype, "length", {
          get: function get() {
            return this.k;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.isEqual = function (e) {
          return 0 === t.$(this, e);
        }, t.prototype.child = function (e) {
          var n = this.segments.slice(this.offset, this.limit());
          return e instanceof t ? e.forEach(function (t) {
            n.push(t);
          }) : n.push(e), this.L(n);
        },
        /** The index of one past the last segment of the path. */
        t.prototype.limit = function () {
          return this.offset + this.length;
        }, t.prototype.B = function (t) {
          return t = void 0 === t ? 1 : t, this.L(this.segments, this.offset + t, this.length - t);
        }, t.prototype.q = function () {
          return this.L(this.segments, this.offset, this.length - 1);
        }, t.prototype.U = function () {
          return this.segments[this.offset];
        }, t.prototype.K = function () {
          return this.get(this.length - 1);
        }, t.prototype.get = function (t) {
          return this.segments[this.offset + t];
        }, t.prototype.W = function () {
          return 0 === this.length;
        }, t.prototype.j = function (t) {
          if (t.length < this.length) return !1;

          for (var e = 0; e < this.length; e++) {
            if (this.get(e) !== t.get(e)) return !1;
          }

          return !0;
        }, t.prototype.G = function (t) {
          if (this.length + 1 !== t.length) return !1;

          for (var e = 0; e < this.length; e++) {
            if (this.get(e) !== t.get(e)) return !1;
          }

          return !0;
        }, t.prototype.forEach = function (t) {
          for (var e = this.offset, n = this.limit(); e < n; e++) {
            t(this.segments[e]);
          }
        }, t.prototype.H = function () {
          return this.segments.slice(this.offset, this.limit());
        }, t.$ = function (t, e) {
          for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r),
                o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
          }

          return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
        }, t;
      }(),
          $ =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.L = function (t, e, r) {
          return new n(t, e, r);
        }, n.prototype.J = function () {
          // NOTE: The client is ignorant of any path segments containing escape
          // sequences (e.g. __id123__) and just passes them through raw (they exist
          // for legacy reasons and should not be used frequently).
          return this.H().join("/");
        }, n.prototype.toString = function () {
          return this.J();
        },
        /**
         * Creates a resource path from the given slash-delimited string. If multiple
         * arguments are provided, all components are combined. Leading and trailing
         * slashes from all components are ignored.
         */
        n.Y = function () {
          for (var t = [], e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          } // NOTE: The client is ignorant of any path segments containing escape
          // sequences (e.g. __id123__) and just passes them through raw (they exist
          // for legacy reasons and should not be used frequently).


          for (var r = [], i = 0, o = t; i < o.length; i++) {
            var u = o[i];
            if (u.indexOf("//") >= 0) throw new L(V.INVALID_ARGUMENT, "Invalid segment (" + u + "). Paths must not contain // in them."); // Strip leading and traling slashed.

            r.push.apply(r, u.split("/").filter(function (t) {
              return t.length > 0;
            }));
          }

          return new n(r);
        }, n.X = function () {
          return new n([]);
        }, n;
      }(Y),
          J = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
          X =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.L = function (t, e, r) {
          return new n(t, e, r);
        },
        /**
         * Returns true if the string could be used as a segment in a field path
         * without escaping.
         */
        n.Z = function (t) {
          return J.test(t);
        }, n.prototype.J = function () {
          return this.H().map(function (t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.Z(t) || (t = "`" + t + "`"), t;
          }).join(".");
        }, n.prototype.toString = function () {
          return this.J();
        },
        /**
         * Returns true if this field references the key of a document.
         */
        n.prototype.tt = function () {
          return 1 === this.length && "__name__" === this.get(0);
        },
        /**
         * The field designating the key of a document.
         */
        n.et = function () {
          return new n(["__name__"]);
        },
        /**
         * Parses a field string from the given server-formatted string.
         *
         * - Splitting the empty string is not allowed (for now at least).
         * - Empty segments within the string (e.g. if there are two consecutive
         *   separators) are not allowed.
         *
         * TODO(b/37244157): we should make this more strict. Right now, it allows
         * non-identifier path components, even if they aren't escaped.
         */
        n.nt = function (t) {
          for (var e = [], r = "", i = 0, o = function o() {
            if (0 === r.length) throw new L(V.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            e.push(r), r = "";
          }, u = !1; i < t.length;) {
            var s = t[i];

            if ("\\" === s) {
              if (i + 1 === t.length) throw new L(V.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
              var a = t[i + 1];
              if ("\\" !== a && "." !== a && "`" !== a) throw new L(V.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
              r += a, i += 2;
            } else "`" === s ? (u = !u, i++) : "." !== s || u ? (r += s, i++) : (o(), i++);
          }

          if (o(), u) throw new L(V.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
          return new n(e);
        }, n.X = function () {
          return new n([]);
        }, n;
      }(Y),
          Z =
      /** @class */
      function () {
        function t(t) {
          this.path = t;
        }

        return t.st = function (e) {
          return new t($.Y(e));
        }, t.it = function (e) {
          return new t($.Y(e).B(5));
        },
        /** Returns true if the document is in the specified collectionId. */
        t.prototype.rt = function (t) {
          return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
        }, t.prototype.isEqual = function (t) {
          return null !== t && 0 === $.$(this.path, t.path);
        }, t.prototype.toString = function () {
          return this.path.toString();
        }, t.$ = function (t, e) {
          return $.$(t.path, e.path);
        }, t.ot = function (t) {
          return t.length % 2 == 0;
        },
        /**
         * Creates and returns a new document key with the given segments.
         *
         * @param segments The segments of the path to the document
         * @return A new instance of DocumentKey
         */
        t.ct = function (e) {
          return new t(new $(e.slice()));
        }, t;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A version of a document in Firestore. This corresponds to the version
       * timestamp, such as update_time or read_time.
       */

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns whether a variable is either undefined or null.
       */


      function tt(t) {
        return null == t;
      }
      /** Returns whether the value represents -0. */


      function et(t) {
        // Detect if the value is -0.0. Based on polyfill from
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
        return 0 === t && 1 / t == -1 / 0;
      }
      /**
       * Returns whether a value is an integer and in the safe integer range
       * @param value The value to test for being an integer and in the safe range
       */


      function nt(t) {
        return "number" == typeof t && Number.isInteger(t) && !et(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Visible for testing


      var rt = function rt(t, e, n, r, i, o, u) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = u, this.ut = null;
      };
      /**
       * Initializes a Target with a path and optional additional query constraints.
       * Path must currently be empty if this is a collection group query.
       *
       * NOTE: you should always construct `Target` from `Query.toTarget` instead of
       * using this factory method, because `Query` provides an implicit `orderBy`
       * property.
       */


      function it(t, e, n, r, i, o, u) {
        return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === u && (u = null), new rt(t, e, n, r, i, o, u);
      }

      function ot(t) {
        var e = R(t);

        if (null === e.ut) {
          var n = e.path.J();
          null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map(function (t) {
            return function (t) {
              // TODO(b/29183165): Technically, this won't be unique if two values have
              // the same description, such as the int 3 and the string "3". So we should
              // add the types in here somehow, too.
              return t.field.J() + t.op.toString() + te(t.value);
            }(t);
          }).join(","), n += "|ob:", n += e.orderBy.map(function (t) {
            return function (t) {
              // TODO(b/29183165): Make this collision robust.
              return t.field.J() + t.dir;
            }(t);
          }).join(","), tt(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", n += rr(e.startAt)), e.endAt && (n += "|ub:", n += rr(e.endAt)), e.ut = n;
        }

        return e.ut;
      }

      function ut(t, e) {
        if (t.limit !== e.limit) return !1;
        if (t.orderBy.length !== e.orderBy.length) return !1;

        for (var n = 0; n < t.orderBy.length; n++) {
          if (!ar(t.orderBy[n], e.orderBy[n])) return !1;
        }

        if (t.filters.length !== e.filters.length) return !1;

        for (var r = 0; r < t.filters.length; r++) {
          if (i = t.filters[r], o = e.filters[r], i.op !== o.op || !i.field.isEqual(o.field) || !$t(i.value, o.value)) return !1;
        }

        var i, o;
        return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!or(t.startAt, e.startAt) && or(t.endAt, e.endAt);
      }

      function st(t) {
        return Z.ot(t.path) && null === t.collectionGroup && 0 === t.filters.length;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Converts a Base64 encoded string to a binary string. */

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Immutable class that represents a "proto" byte string.
       *
       * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
       * sent on the wire. This class abstracts away this differentiation by holding
       * the proto byte string in a common class that must be converted into a string
       * before being sent as a proto.
       */


      var at =
      /** @class */
      function () {
        function t(t) {
          this.at = t;
        }

        return t.fromBase64String = function (e) {
          return new t(atob(e));
        }, t.fromUint8Array = function (e) {
          return new t(
          /**
          * Helper function to convert an Uint8array to a binary string.
          */
          function (t) {
            for (var e = "", n = 0; n < t.length; ++n) {
              e += String.fromCharCode(t[n]);
            }

            return e;
          }(e));
        }, t.prototype.toBase64 = function () {
          return t = this.at, btoa(t);
          /** Converts a binary string to a Base64 encoded string. */

          var t;
          /** True if and only if the Base64 conversion functions are available. */
        }, t.prototype.toUint8Array = function () {
          return function (t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) {
              e[n] = t.charCodeAt(n);
            }

            return e;
          }(this.at);
        }, t.prototype.ht = function () {
          return 2 * this.at.length;
        }, t.prototype.F = function (t) {
          return G(this.at, t.at);
        }, t.prototype.isEqual = function (t) {
          return this.at === t.at;
        }, t;
      }();

      at.lt = new at("");

      var ct,
          ht,
          ft =
      /** @class */
      function () {
        function t(
        /** The target being listened to. */
        t,
        /**
         * The target ID to which the target corresponds; Assigned by the
         * LocalStore for user listens and by the SyncEngine for limbo watches.
         */
        e,
        /** The purpose of the target. */
        n,
        /**
         * The sequence number of the last transaction during which this target data
         * was modified.
         */
        r,
        /** The latest snapshot version seen for this target. */
        i
        /**
         * The maximum snapshot version at which the associated view
         * contained no limbo documents.
         */
        , o
        /**
         * An opaque, server-assigned token that allows watching a target to be
         * resumed after disconnecting without retransmitting all the data that
         * matches the target. The resume token essentially identifies a point in
         * time from which the server should resume sending results.
         */
        , u) {
          void 0 === i && (i = H.min()), void 0 === o && (o = H.min()), void 0 === u && (u = at.lt), this.target = t, this.targetId = e, this._t = n, this.sequenceNumber = r, this.ft = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = u;
        }
        /** Creates a new target data instance with an updated sequence number. */


        return t.prototype.dt = function (e) {
          return new t(this.target, this.targetId, this._t, e, this.ft, this.lastLimboFreeSnapshotVersion, this.resumeToken);
        },
        /**
         * Creates a new target data instance with an updated resume token and
         * snapshot version.
         */
        t.prototype.wt = function (e, n) {
          return new t(this.target, this.targetId, this._t, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
        },
        /**
         * Creates a new target data instance with an updated last limbo free
         * snapshot version number.
         */
        t.prototype.Et = function (e) {
          return new t(this.target, this.targetId, this._t, this.sequenceNumber, this.ft, e, this.resumeToken);
        }, t;
      }(),
          lt = // TODO(b/33078163): just use simplest form of existence filter for now
      function lt(t) {
        this.count = t;
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Determines whether an error code represents a permanent error when received
       * in response to a non-write operation.
       *
       * See isPermanentWriteError for classifying write errors.
       */


      function pt(t) {
        switch (t) {
          case V.OK:
            return P();

          case V.CANCELLED:
          case V.UNKNOWN:
          case V.DEADLINE_EXCEEDED:
          case V.RESOURCE_EXHAUSTED:
          case V.INTERNAL:
          case V.UNAVAILABLE: // Unauthenticated means something went wrong with our token and we need
          // to retry with new credentials which will happen automatically.

          case V.UNAUTHENTICATED:
            return !1;

          case V.INVALID_ARGUMENT:
          case V.NOT_FOUND:
          case V.ALREADY_EXISTS:
          case V.PERMISSION_DENIED:
          case V.FAILED_PRECONDITION: // Aborted might be retried in some scenarios, but that is dependant on
          // the context and should handled individually by the calling code.
          // See https://cloud.google.com/apis/design/errors.

          case V.ABORTED:
          case V.OUT_OF_RANGE:
          case V.UNIMPLEMENTED:
          case V.DATA_LOSS:
            return !0;

          default:
            return P();
        }
      }
      /**
       * Determines whether an error code represents a permanent error when received
       * in response to a write operation.
       *
       * Write operations must be handled specially because as of b/119437764, ABORTED
       * errors on the write stream should be retried too (even though ABORTED errors
       * are not generally retryable).
       *
       * Note that during the initial handshake on the write stream an ABORTED error
       * signals that we should discard our stream token (i.e. it is permanent). This
       * means a handshake error should be classified with isPermanentError, above.
       */

      /**
       * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
       * are not the same as HTTP status codes.
       *
       * @returns The Code equivalent to the given GRPC status code. Fails if there
       *     is no match.
       */


      function dt(t) {
        if (void 0 === t) // This shouldn't normally happen, but in certain error cases (like trying
          // to send invalid proto messages) we may get an error with no GRPC code.
          return k("GRPC error has no .code"), V.UNKNOWN;

        switch (t) {
          case ct.OK:
            return V.OK;

          case ct.CANCELLED:
            return V.CANCELLED;

          case ct.UNKNOWN:
            return V.UNKNOWN;

          case ct.DEADLINE_EXCEEDED:
            return V.DEADLINE_EXCEEDED;

          case ct.RESOURCE_EXHAUSTED:
            return V.RESOURCE_EXHAUSTED;

          case ct.INTERNAL:
            return V.INTERNAL;

          case ct.UNAVAILABLE:
            return V.UNAVAILABLE;

          case ct.UNAUTHENTICATED:
            return V.UNAUTHENTICATED;

          case ct.INVALID_ARGUMENT:
            return V.INVALID_ARGUMENT;

          case ct.NOT_FOUND:
            return V.NOT_FOUND;

          case ct.ALREADY_EXISTS:
            return V.ALREADY_EXISTS;

          case ct.PERMISSION_DENIED:
            return V.PERMISSION_DENIED;

          case ct.FAILED_PRECONDITION:
            return V.FAILED_PRECONDITION;

          case ct.ABORTED:
            return V.ABORTED;

          case ct.OUT_OF_RANGE:
            return V.OUT_OF_RANGE;

          case ct.UNIMPLEMENTED:
            return V.UNIMPLEMENTED;

          case ct.DATA_LOSS:
            return V.DATA_LOSS;

          default:
            return P();
        }
      }
      /**
       * Converts an HTTP response's error status to the equivalent error code.
       *
       * @param status An HTTP error response status ("FAILED_PRECONDITION",
       * "UNKNOWN", etc.)
       * @returns The equivalent Code. Non-matching responses are mapped to
       *     Code.UNKNOWN.
       */


      (ht = ct || (ct = {}))[ht.OK = 0] = "OK", ht[ht.CANCELLED = 1] = "CANCELLED", ht[ht.UNKNOWN = 2] = "UNKNOWN", ht[ht.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", ht[ht.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ht[ht.NOT_FOUND = 5] = "NOT_FOUND", ht[ht.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ht[ht.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", ht[ht.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ht[ht.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", ht[ht.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ht[ht.ABORTED = 10] = "ABORTED", ht[ht.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ht[ht.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", ht[ht.INTERNAL = 13] = "INTERNAL", ht[ht.UNAVAILABLE = 14] = "UNAVAILABLE", ht[ht.DATA_LOSS = 15] = "DATA_LOSS";
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // An immutable sorted map implementation, based on a Left-leaning Red-Black
      // tree.

      var vt =
      /** @class */
      function () {
        function t(t, e) {
          this.$ = t, this.root = e || mt.EMPTY;
        } // Returns a copy of the map, with the specified key/value added or replaced.


        return t.prototype.Tt = function (e, n) {
          return new t(this.$, this.root.Tt(e, n, this.$).copy(null, null, mt.It, null, null));
        }, // Returns a copy of the map, with the specified key removed.
        t.prototype.remove = function (e) {
          return new t(this.$, this.root.remove(e, this.$).copy(null, null, mt.It, null, null));
        }, // Returns the value of the node with the given key, or null.
        t.prototype.get = function (t) {
          for (var e = this.root; !e.W();) {
            var n = this.$(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
          }

          return null;
        }, // Returns the index of the element in this sorted map, or -1 if it doesn't
        // exist.
        t.prototype.indexOf = function (t) {
          for ( // Number of nodes that were pruned when descending right
          var e = 0, n = this.root; !n.W();) {
            var r = this.$(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : ( // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
          } // Node not found


          return -1;
        }, t.prototype.W = function () {
          return this.root.W();
        }, Object.defineProperty(t.prototype, "size", {
          // Returns the total number of nodes in the map.
          get: function get() {
            return this.root.size;
          },
          enumerable: !1,
          configurable: !0
        }), // Returns the minimum key in the map.
        t.prototype.At = function () {
          return this.root.At();
        }, // Returns the maximum key in the map.
        t.prototype.Rt = function () {
          return this.root.Rt();
        }, // Traverses the map in key order and calls the specified action function
        // for each key/value pair. If action returns true, traversal is aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        t.prototype.Pt = function (t) {
          return this.root.Pt(t);
        }, t.prototype.forEach = function (t) {
          this.Pt(function (e, n) {
            return t(e, n), !1;
          });
        }, t.prototype.toString = function () {
          var t = [];
          return this.Pt(function (e, n) {
            return t.push(e + ":" + n), !1;
          }), "{" + t.join(", ") + "}";
        }, // Traverses the map in reverse key order and calls the specified action
        // function for each key/value pair. If action returns true, traversal is
        // aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        t.prototype.gt = function (t) {
          return this.root.gt(t);
        }, // Returns an iterator over the SortedMap.
        t.prototype.yt = function () {
          return new yt(this.root, null, this.$, !1);
        }, t.prototype.Vt = function (t) {
          return new yt(this.root, t, this.$, !1);
        }, t.prototype.vt = function () {
          return new yt(this.root, null, this.$, !0);
        }, t.prototype.bt = function (t) {
          return new yt(this.root, t, this.$, !0);
        }, t;
      }(),
          yt =
      /** @class */
      function () {
        function t(t, e, n, r) {
          this.St = r, this.Dt = [];

          for (var i = 1; !t.W();) {
            if (i = e ? n(t.key, e) : 1, // flip the comparison if we're going in reverse
            r && (i *= -1), i < 0) // This node is less than our start key. ignore it
              t = this.St ? t.left : t.right;else {
              if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.Dt.push(t);
                break;
              } // This node is greater than our start key, add it to the stack and move
              // to the next one


              this.Dt.push(t), t = this.St ? t.right : t.left;
            }
          }
        }

        return t.prototype.Ct = function () {
          var t = this.Dt.pop(),
              e = {
            key: t.key,
            value: t.value
          };
          if (this.St) for (t = t.left; !t.W();) {
            this.Dt.push(t), t = t.right;
          } else for (t = t.right; !t.W();) {
            this.Dt.push(t), t = t.left;
          }
          return e;
        }, t.prototype.Nt = function () {
          return this.Dt.length > 0;
        }, t.prototype.xt = function () {
          if (0 === this.Dt.length) return null;
          var t = this.Dt[this.Dt.length - 1];
          return {
            key: t.key,
            value: t.value
          };
        }, t;
      }(),
          mt =
      /** @class */
      function () {
        function t(e, n, r, i, o) {
          this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
        } // Returns a copy of the current node, optionally replacing pieces of it.


        return t.prototype.copy = function (e, n, r, i, o) {
          return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
        }, t.prototype.W = function () {
          return !1;
        }, // Traverses the tree in key order and calls the specified action function
        // for each node. If action returns true, traversal is aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        t.prototype.Pt = function (t) {
          return this.left.Pt(t) || t(this.key, this.value) || this.right.Pt(t);
        }, // Traverses the tree in reverse key order and calls the specified action
        // function for each node. If action returns true, traversal is aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        t.prototype.gt = function (t) {
          return this.right.gt(t) || t(this.key, this.value) || this.left.gt(t);
        }, // Returns the minimum node in the tree.
        t.prototype.min = function () {
          return this.left.W() ? this : this.left.min();
        }, // Returns the maximum key in the tree.
        t.prototype.At = function () {
          return this.min().key;
        }, // Returns the maximum key in the tree.
        t.prototype.Rt = function () {
          return this.right.W() ? this.key : this.right.Rt();
        }, // Returns new tree, with the key/value added.
        t.prototype.Tt = function (t, e, n) {
          var r = this,
              i = n(t, r.key);
          return (r = i < 0 ? r.copy(null, null, null, r.left.Tt(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.Tt(t, e, n))).Ft();
        }, t.prototype.Ot = function () {
          if (this.left.W()) return t.EMPTY;
          var e = this;
          return e.left.Mt() || e.left.left.Mt() || (e = e.kt()), (e = e.copy(null, null, null, e.left.Ot(), null)).Ft();
        }, // Returns new tree, with the specified item removed.
        t.prototype.remove = function (e, n) {
          var r,
              i = this;
          if (n(e, i.key) < 0) i.left.W() || i.left.Mt() || i.left.left.Mt() || (i = i.kt()), i = i.copy(null, null, null, i.left.remove(e, n), null);else {
            if (i.left.Mt() && (i = i.$t()), i.right.W() || i.right.Mt() || i.right.left.Mt() || (i = i.Lt()), 0 === n(e, i.key)) {
              if (i.right.W()) return t.EMPTY;
              r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.Ot());
            }

            i = i.copy(null, null, null, null, i.right.remove(e, n));
          }
          return i.Ft();
        }, t.prototype.Mt = function () {
          return this.color;
        }, // Returns new tree after performing any needed rotations.
        t.prototype.Ft = function () {
          var t = this;
          return t.right.Mt() && !t.left.Mt() && (t = t.Bt()), t.left.Mt() && t.left.left.Mt() && (t = t.$t()), t.left.Mt() && t.right.Mt() && (t = t.qt()), t;
        }, t.prototype.kt = function () {
          var t = this.qt();
          return t.right.left.Mt() && (t = (t = (t = t.copy(null, null, null, null, t.right.$t())).Bt()).qt()), t;
        }, t.prototype.Lt = function () {
          var t = this.qt();
          return t.left.left.Mt() && (t = (t = t.$t()).qt()), t;
        }, t.prototype.Bt = function () {
          var e = this.copy(null, null, t.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, e, null);
        }, t.prototype.$t = function () {
          var e = this.copy(null, null, t.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, e);
        }, t.prototype.qt = function () {
          var t = this.left.copy(null, null, !this.left.color, null, null),
              e = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, t, e);
        }, // For testing.
        t.prototype.Ut = function () {
          var t = this.Qt();
          return Math.pow(2, t) <= this.size + 1;
        }, // In a balanced RB tree, the black-depth (number of black nodes) from root to
        // leaves is equal on both sides.  This function verifies that or asserts.
        t.prototype.Qt = function () {
          if (this.Mt() && this.left.Mt()) throw P();
          if (this.right.Mt()) throw P();
          var t = this.left.Qt();
          if (t !== this.right.Qt()) throw P();
          return t + (this.Mt() ? 0 : 1);
        }, t;
      }(); // end SortedMap
      // An iterator over an LLRBNode.
      // end LLRBNode
      // Empty node is shared between all LLRB trees.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      mt.EMPTY = null, mt.RED = !0, mt.It = !1, // end LLRBEmptyNode
      mt.EMPTY = new (
      /** @class */
      function () {
        function t() {
          this.size = 0;
        }

        return Object.defineProperty(t.prototype, "key", {
          get: function get() {
            throw P();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "value", {
          get: function get() {
            throw P();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "color", {
          get: function get() {
            throw P();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "left", {
          get: function get() {
            throw P();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "right", {
          get: function get() {
            throw P();
          },
          enumerable: !1,
          configurable: !0
        }), // Returns a copy of the current node.
        t.prototype.copy = function (t, e, n, r, i) {
          return this;
        }, // Returns a copy of the tree, with the specified key/value added.
        t.prototype.Tt = function (t, e, n) {
          return new mt(t, e);
        }, // Returns a copy of the tree, with the specified key removed.
        t.prototype.remove = function (t, e) {
          return this;
        }, t.prototype.W = function () {
          return !0;
        }, t.prototype.Pt = function (t) {
          return !1;
        }, t.prototype.gt = function (t) {
          return !1;
        }, t.prototype.At = function () {
          return null;
        }, t.prototype.Rt = function () {
          return null;
        }, t.prototype.Mt = function () {
          return !1;
        }, // For testing.
        t.prototype.Ut = function () {
          return !0;
        }, t.prototype.Qt = function () {
          return 0;
        }, t;
      }())();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * SortedSet is an immutable (copy-on-write) collection that holds elements
       * in order specified by the provided comparator.
       *
       * NOTE: if provided comparator returns 0 for two elements, we consider them to
       * be equal!
       */

      var gt =
      /** @class */
      function () {
        function t(t) {
          this.$ = t, this.data = new vt(this.$);
        }

        return t.prototype.has = function (t) {
          return null !== this.data.get(t);
        }, t.prototype.first = function () {
          return this.data.At();
        }, t.prototype.last = function () {
          return this.data.Rt();
        }, Object.defineProperty(t.prototype, "size", {
          get: function get() {
            return this.data.size;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.indexOf = function (t) {
          return this.data.indexOf(t);
        },
        /** Iterates elements in order defined by "comparator" */
        t.prototype.forEach = function (t) {
          this.data.Pt(function (e, n) {
            return t(e), !1;
          });
        },
        /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */
        t.prototype.Kt = function (t, e) {
          for (var n = this.data.Vt(t[0]); n.Nt();) {
            var r = n.Ct();
            if (this.$(r.key, t[1]) >= 0) return;
            e(r.key);
          }
        },
        /**
         * Iterates over `elem`s such that: start <= elem until false is returned.
         */
        t.prototype.Wt = function (t, e) {
          var n;

          for (n = void 0 !== e ? this.data.Vt(e) : this.data.yt(); n.Nt();) {
            if (!t(n.Ct().key)) return;
          }
        },
        /** Finds the least element greater than or equal to `elem`. */
        t.prototype.jt = function (t) {
          var e = this.data.Vt(t);
          return e.Nt() ? e.Ct().key : null;
        }, t.prototype.yt = function () {
          return new wt(this.data.yt());
        }, t.prototype.Vt = function (t) {
          return new wt(this.data.Vt(t));
        },
        /** Inserts or updates an element */
        t.prototype.add = function (t) {
          return this.copy(this.data.remove(t).Tt(t, !0));
        },
        /** Deletes an element */
        t.prototype["delete"] = function (t) {
          return this.has(t) ? this.copy(this.data.remove(t)) : this;
        }, t.prototype.W = function () {
          return this.data.W();
        }, t.prototype.Gt = function (t) {
          var e = this; // Make sure `result` always refers to the larger one of the two sets.

          return e.size < t.size && (e = t, t = this), t.forEach(function (t) {
            e = e.add(t);
          }), e;
        }, t.prototype.isEqual = function (e) {
          if (!(e instanceof t)) return !1;
          if (this.size !== e.size) return !1;

          for (var n = this.data.yt(), r = e.data.yt(); n.Nt();) {
            var i = n.Ct().key,
                o = r.Ct().key;
            if (0 !== this.$(i, o)) return !1;
          }

          return !0;
        }, t.prototype.H = function () {
          var t = [];
          return this.forEach(function (e) {
            t.push(e);
          }), t;
        }, t.prototype.toString = function () {
          var t = [];
          return this.forEach(function (e) {
            return t.push(e);
          }), "SortedSet(" + t.toString() + ")";
        }, t.prototype.copy = function (e) {
          var n = new t(this.$);
          return n.data = e, n;
        }, t;
      }(),
          wt =
      /** @class */
      function () {
        function t(t) {
          this.zt = t;
        }

        return t.prototype.Ct = function () {
          return this.zt.Ct().key;
        }, t.prototype.Nt = function () {
          return this.zt.Nt();
        }, t;
      }(),
          bt = new vt(Z.$);

      function _t() {
        return bt;
      }

      function It() {
        return _t();
      }

      var Et = new vt(Z.$);

      function Tt() {
        return Et;
      }

      var Nt = new vt(Z.$),
          At = new gt(Z.$);

      function Dt() {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        for (var n = At, r = 0, i = t; r < i.length; r++) {
          var o = i[r];
          n = n.add(o);
        }

        return n;
      }

      var xt = new gt(G);

      function kt() {
        return xt;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * DocumentSet is an immutable (copy-on-write) collection that holds documents
       * in order specified by the provided comparator. We always add a document key
       * comparator on top of what is provided to guarantee document equality based on
       * the key.
       */


      var Ot =
      /** @class */
      function () {
        /** The default ordering is by key if the comparator is omitted */
        function t(t) {
          // We are adding document key comparator to the end as it's the only
          // guaranteed unique property of a document.
          this.$ = t ? function (e, n) {
            return t(e, n) || Z.$(e.key, n.key);
          } : function (t, e) {
            return Z.$(t.key, e.key);
          }, this.Ht = Tt(), this.Jt = new vt(this.$)
          /**
          * Returns an empty copy of the existing DocumentSet, using the same
          * comparator.
          */
          ;
        }

        return t.Yt = function (e) {
          return new t(e.$);
        }, t.prototype.has = function (t) {
          return null != this.Ht.get(t);
        }, t.prototype.get = function (t) {
          return this.Ht.get(t);
        }, t.prototype.first = function () {
          return this.Jt.At();
        }, t.prototype.last = function () {
          return this.Jt.Rt();
        }, t.prototype.W = function () {
          return this.Jt.W();
        },
        /**
         * Returns the index of the provided key in the document set, or -1 if the
         * document key is not present in the set;
         */
        t.prototype.indexOf = function (t) {
          var e = this.Ht.get(t);
          return e ? this.Jt.indexOf(e) : -1;
        }, Object.defineProperty(t.prototype, "size", {
          get: function get() {
            return this.Jt.size;
          },
          enumerable: !1,
          configurable: !0
        }),
        /** Iterates documents in order defined by "comparator" */
        t.prototype.forEach = function (t) {
          this.Jt.Pt(function (e, n) {
            return t(e), !1;
          });
        },
        /** Inserts or updates a document with the same key */
        t.prototype.add = function (t) {
          // First remove the element if we have it.
          var e = this["delete"](t.key);
          return e.copy(e.Ht.Tt(t.key, t), e.Jt.Tt(t, null));
        },
        /** Deletes a document with a given key */
        t.prototype["delete"] = function (t) {
          var e = this.get(t);
          return e ? this.copy(this.Ht.remove(t), this.Jt.remove(e)) : this;
        }, t.prototype.isEqual = function (e) {
          if (!(e instanceof t)) return !1;
          if (this.size !== e.size) return !1;

          for (var n = this.Jt.yt(), r = e.Jt.yt(); n.Nt();) {
            var i = n.Ct().key,
                o = r.Ct().key;
            if (!i.isEqual(o)) return !1;
          }

          return !0;
        }, t.prototype.toString = function () {
          var t = [];
          return this.forEach(function (e) {
            t.push(e.toString());
          }), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
        }, t.prototype.copy = function (e, n) {
          var r = new t();
          return r.$ = this.$, r.Ht = e, r.Jt = n, r;
        }, t;
      }(),
          St =
      /** @class */
      function () {
        function t() {
          this.Xt = new vt(Z.$);
        }

        return t.prototype.track = function (t) {
          var e = t.doc.key,
              n = this.Xt.get(e);
          n ? // Merge the new change with the existing change.
          0
          /* Added */
          !== t.type && 3
          /* Metadata */
          === n.type ? this.Xt = this.Xt.Tt(e, t) : 3
          /* Metadata */
          === t.type && 1
          /* Removed */
          !== n.type ? this.Xt = this.Xt.Tt(e, {
            type: n.type,
            doc: t.doc
          }) : 2
          /* Modified */
          === t.type && 2
          /* Modified */
          === n.type ? this.Xt = this.Xt.Tt(e, {
            type: 2
            /* Modified */
            ,
            doc: t.doc
          }) : 2
          /* Modified */
          === t.type && 0
          /* Added */
          === n.type ? this.Xt = this.Xt.Tt(e, {
            type: 0
            /* Added */
            ,
            doc: t.doc
          }) : 1
          /* Removed */
          === t.type && 0
          /* Added */
          === n.type ? this.Xt = this.Xt.remove(e) : 1
          /* Removed */
          === t.type && 2
          /* Modified */
          === n.type ? this.Xt = this.Xt.Tt(e, {
            type: 1
            /* Removed */
            ,
            doc: n.doc
          }) : 0
          /* Added */
          === t.type && 1
          /* Removed */
          === n.type ? this.Xt = this.Xt.Tt(e, {
            type: 2
            /* Modified */
            ,
            doc: t.doc
          }) : // This includes these cases, which don't make sense:
          // Added->Added
          // Removed->Removed
          // Modified->Added
          // Removed->Modified
          // Metadata->Added
          // Removed->Metadata
          P() : this.Xt = this.Xt.Tt(e, t);
        }, t.prototype.Zt = function () {
          var t = [];
          return this.Xt.Pt(function (e, n) {
            t.push(n);
          }), t;
        }, t;
      }(),
          Pt =
      /** @class */
      function () {
        function t(t, e, n, r, i, o, u, s) {
          this.query = t, this.docs = e, this.te = n, this.docChanges = r, this.ee = i, this.fromCache = o, this.ne = u, this.se = s
          /** Returns a view snapshot as if all documents in the snapshot were added. */
          ;
        }

        return t.ie = function (e, n, r, i) {
          var o = [];
          return n.forEach(function (t) {
            o.push({
              type: 0
              /* Added */
              ,
              doc: t
            });
          }), new t(e, n, Ot.Yt(n), o, r, i,
          /* syncStateChanged= */
          !0,
          /* excludesMetadataChanges= */
          !1);
        }, Object.defineProperty(t.prototype, "hasPendingWrites", {
          get: function get() {
            return !this.ee.W();
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.isEqual = function (t) {
          if (!(this.fromCache === t.fromCache && this.ne === t.ne && this.ee.isEqual(t.ee) && zn(this.query, t.query) && this.docs.isEqual(t.docs) && this.te.isEqual(t.te))) return !1;
          var e = this.docChanges,
              n = t.docChanges;
          if (e.length !== n.length) return !1;

          for (var r = 0; r < e.length; r++) {
            if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
          }

          return !0;
        }, t;
      }(),
          Ct =
      /** @class */
      function () {
        function t(
        /**
         * The snapshot version this event brings us up to, or MIN if not set.
         */
        t,
        /**
         * A map from target to changes to the target. See TargetChange.
         */
        e,
        /**
         * A set of targets that is known to be inconsistent. Listens for these
         * targets should be re-established without resume tokens.
         */
        n,
        /**
         * A set of which documents have changed or been deleted, along with the
         * doc's new values (if not deleted).
         */
        r,
        /**
         * A set of which document updates are due only to limbo resolution targets.
         */
        i) {
          this.ft = t, this.re = e, this.oe = n, this.ce = r, this.ue = i;
        }
        /**
         * HACK: Views require RemoteEvents in order to determine whether the view is
         * CURRENT, but secondary tabs don't receive remote events. So this method is
         * used to create a synthesized RemoteEvent that can be used to apply a
         * CURRENT status change to a View, for queries executed in a different tab.
         */
        // PORTING NOTE: Multi-tab only


        return t.ae = function (e, n) {
          var r = new Map();
          return r.set(e, Rt.he(e, n)), new t(H.min(), r, kt(), _t(), Dt());
        }, t;
      }(),
          Rt =
      /** @class */
      function () {
        function t(
        /**
         * An opaque, server-assigned token that allows watching a query to be resumed
         * after disconnecting without retransmitting all the data that matches the
         * query. The resume token essentially identifies a point in time from which
         * the server should resume sending results.
         */
        t,
        /**
         * The "current" (synced) status of this target. Note that "current"
         * has special meaning in the RPC protocol that implies that a target is
         * both up-to-date and consistent with the rest of the watch stream.
         */
        e,
        /**
         * The set of documents that were newly assigned to this target as part of
         * this remote event.
         */
        n,
        /**
         * The set of documents that were already assigned to this target but received
         * an update during this remote event.
         */
        r,
        /**
         * The set of documents that were removed from this target as part of this
         * remote event.
         */
        i) {
          this.resumeToken = t, this.le = e, this._e = n, this.fe = r, this.de = i
          /**
          * This method is used to create a synthesized TargetChanges that can be used to
          * apply a CURRENT status change to a View (for queries executed in a different
          * tab) or for new queries (to raise snapshots with correct CURRENT status).
          */
          ;
        }

        return t.he = function (e, n) {
          return new t(at.lt, n, Dt(), Dt(), Dt());
        }, t;
      }(),
          Vt = function Vt(
      /** The new document applies to all of these targets. */
      t,
      /** The new document is removed from all of these targets. */
      e,
      /** The key of the document for this change. */
      n,
      /**
           * The new document or NoDocument if it was deleted. Is null if the
           * document went out of view without the server sending a new document.
           */
      r) {
        this.we = t, this.removedTargetIds = e, this.key = n, this.Ee = r;
      },
          Lt = function Lt(t, e) {
        this.targetId = t, this.Te = e;
      },
          Ut = function Ut(
      /** What kind of change occurred to the watch target. */
      t,
      /** The target IDs that were added/removed/set. */
      e,
      /**
           * An opaque, server-assigned token that allows watching a target to be
           * resumed after disconnecting without retransmitting all the data that
           * matches the target. The resume token essentially identifies a point in
           * time from which the server should resume sending results.
           */
      n
      /** An RPC error indicating why the watch failed. */
      , r) {
        void 0 === n && (n = at.lt), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r;
      },
          Mt =
      /** @class */
      function () {
        function t() {
          /**
           * The number of pending responses (adds or removes) that we are waiting on.
           * We only consider targets active that have no pending responses.
           */
          this.Ie = 0,
          /**
               * Keeps track of the document changes since the last raised snapshot.
               *
               * These changes are continuously updated as we receive document updates and
               * always reflect the current set of changes against the last issued snapshot.
               */
          this.me = Ft(),
          /** See public getters for explanations of these fields. */
          this.Ae = at.lt, this.Re = !1,
          /**
               * Whether this target state should be included in the next snapshot. We
               * initialize to true so that newly-added targets are included in the next
               * RemoteEvent.
               */
          this.Pe = !0;
        }

        return Object.defineProperty(t.prototype, "le", {
          /**
           * Whether this target has been marked 'current'.
           *
           * 'Current' has special meaning in the RPC protocol: It implies that the
           * Watch backend has sent us all changes up to the point at which the target
           * was added and that the target is consistent with the rest of the watch
           * stream.
           */
          get: function get() {
            return this.Re;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "resumeToken", {
          /** The last resume token sent to us for this target. */
          get: function get() {
            return this.Ae;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "ge", {
          /** Whether this target has pending target adds or target removes. */
          get: function get() {
            return 0 !== this.Ie;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "ye", {
          /** Whether we have modified any state that should trigger a snapshot. */
          get: function get() {
            return this.Pe;
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * Applies the resume token to the TargetChange, but only when it has a new
         * value. Empty resumeTokens are discarded.
         */
        t.prototype.Ve = function (t) {
          t.ht() > 0 && (this.Pe = !0, this.Ae = t);
        },
        /**
         * Creates a target change from the current set of changes.
         *
         * To reset the document changes after raising this snapshot, call
         * `clearPendingChanges()`.
         */
        t.prototype.pe = function () {
          var t = Dt(),
              e = Dt(),
              n = Dt();
          return this.me.forEach(function (r, i) {
            switch (i) {
              case 0
              /* Added */
              :
                t = t.add(r);
                break;

              case 2
              /* Modified */
              :
                e = e.add(r);
                break;

              case 1
              /* Removed */
              :
                n = n.add(r);
                break;

              default:
                P();
            }
          }), new Rt(this.Ae, this.Re, t, e, n);
        },
        /**
         * Resets the document changes and sets `hasPendingChanges` to false.
         */
        t.prototype.ve = function () {
          this.Pe = !1, this.me = Ft();
        }, t.prototype.be = function (t, e) {
          this.Pe = !0, this.me = this.me.Tt(t, e);
        }, t.prototype.Se = function (t) {
          this.Pe = !0, this.me = this.me.remove(t);
        }, t.prototype.De = function () {
          this.Ie += 1;
        }, t.prototype.Ce = function () {
          this.Ie -= 1;
        }, t.prototype.Ne = function () {
          this.Pe = !0, this.Re = !0;
        }, t;
      }(),
          qt =
      /** @class */
      function () {
        function t(t) {
          this.xe = t,
          /** The internal state of all tracked targets. */
          this.Fe = new Map(),
          /** Keeps track of the documents to update since the last raised snapshot. */
          this.Oe = _t(),
          /** A mapping of document keys to their set of target IDs. */
          this.Me = jt(),
          /**
               * A list of targets with existence filter mismatches. These targets are
               * known to be inconsistent and their listens needs to be re-established by
               * RemoteStore.
               */
          this.ke = new gt(G)
          /**
          * Processes and adds the DocumentWatchChange to the current set of changes.
          */
          ;
        }

        return t.prototype.$e = function (t) {
          for (var e = 0, n = t.we; e < n.length; e++) {
            var r = n[e];
            t.Ee instanceof xn ? this.Le(r, t.Ee) : t.Ee instanceof kn && this.Be(r, t.key, t.Ee);
          }

          for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var u = o[i];
            this.Be(u, t.key, t.Ee);
          }
        },
        /** Processes and adds the WatchTargetChange to the current set of changes. */
        t.prototype.qe = function (t) {
          var e = this;
          this.Ue(t, function (n) {
            var r = e.Qe(n);

            switch (t.state) {
              case 0
              /* NoChange */
              :
                e.Ke(n) && r.Ve(t.resumeToken);
                break;

              case 1
              /* Added */
              :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Ce(), r.ge || // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.ve(), r.Ve(t.resumeToken);
                break;

              case 2
              /* Removed */
              :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Ce(), r.ge || e.removeTarget(n);
                break;

              case 3
              /* Current */
              :
                e.Ke(n) && (r.Ne(), r.Ve(t.resumeToken));
                break;

              case 4
              /* Reset */
              :
                e.Ke(n) && ( // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.We(n), r.Ve(t.resumeToken));
                break;

              default:
                P();
            }
          });
        },
        /**
         * Iterates over all targetIds that the watch change applies to: either the
         * targetIds explicitly listed in the change or the targetIds of all currently
         * active targets.
         */
        t.prototype.Ue = function (t, e) {
          var n = this;
          t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Fe.forEach(function (t, r) {
            n.Ke(r) && e(r);
          });
        },
        /**
         * Handles existence filters and synthesizes deletes for filter mismatches.
         * Targets that are invalidated by filter mismatches are added to
         * `pendingTargetResets`.
         */
        t.prototype.je = function (t) {
          var e = t.targetId,
              n = t.Te.count,
              r = this.Ge(e);

          if (r) {
            var i = r.target;
            if (st(i)) {
              if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new Z(i.path);
                this.Be(e, o, new kn(o, H.min()));
              } else C(1 === n);
            } else this.ze(e) !== n && ( // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.We(e), this.ke = this.ke.add(e));
          }
        },
        /**
         * Converts the currently accumulated state into a remote event at the
         * provided snapshot version. Resets the accumulated changes before returning.
         */
        t.prototype.He = function (t) {
          var e = this,
              n = new Map();
          this.Fe.forEach(function (r, i) {
            var o = e.Ge(i);

            if (o) {
              if (r.le && st(o.target)) {
                // Document queries for document that don't exist can produce an empty
                // result set. To update our local cache, we synthesize a document
                // delete if we have not previously received the document. This
                // resolves the limbo state of the document, removing it from
                // limboDocumentRefs.
                // TODO(dimond): Ideally we would have an explicit lookup target
                // instead resulting in an explicit delete message and we could
                // remove this special logic.
                var u = new Z(o.target.path);
                null !== e.Oe.get(u) || e.Je(i, u) || e.Be(i, u, new kn(u, t));
              }

              r.ye && (n.set(i, r.pe()), r.ve());
            }
          });
          var r = Dt(); // We extract the set of limbo-only document updates as the GC logic
          // special-cases documents that do not appear in the target cache.
          // TODO(gsoltis): Expand on this comment once GC is available in the JS
          // client.

          this.Me.forEach(function (t, n) {
            var i = !0;
            n.Wt(function (t) {
              var n = e.Ge(t);
              return !n || 2
              /* LimboResolution */
              === n._t || (i = !1, !1);
            }), i && (r = r.add(t));
          });
          var i = new Ct(t, n, this.ke, this.Oe, r);
          return this.Oe = _t(), this.Me = jt(), this.ke = new gt(G), i;
        },
        /**
         * Adds the provided document to the internal list of document updates and
         * its document key to the given target's mapping.
         */
        // Visible for testing.
        t.prototype.Le = function (t, e) {
          if (this.Ke(t)) {
            var n = this.Je(t, e.key) ? 2
            /* Modified */
            : 0
            /* Added */
            ;
            this.Qe(t).be(e.key, n), this.Oe = this.Oe.Tt(e.key, e), this.Me = this.Me.Tt(e.key, this.Ye(e.key).add(t));
          }
        },
        /**
         * Removes the provided document from the target mapping. If the
         * document no longer matches the target, but the document's state is still
         * known (e.g. we know that the document was deleted or we received the change
         * that caused the filter mismatch), the new document can be provided
         * to update the remote document cache.
         */
        // Visible for testing.
        t.prototype.Be = function (t, e, n) {
          if (this.Ke(t)) {
            var r = this.Qe(t);
            this.Je(t, e) ? r.be(e, 1
            /* Removed */
            ) : // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.Se(e), this.Me = this.Me.Tt(e, this.Ye(e)["delete"](t)), n && (this.Oe = this.Oe.Tt(e, n));
          }
        }, t.prototype.removeTarget = function (t) {
          this.Fe["delete"](t);
        },
        /**
         * Returns the current count of documents in the target. This includes both
         * the number of documents that the LocalStore considers to be part of the
         * target as well as any accumulated changes.
         */
        t.prototype.ze = function (t) {
          var e = this.Qe(t).pe();
          return this.xe.Xe(t).size + e._e.size - e.de.size;
        },
        /**
         * Increment the number of acks needed from watch before we can consider the
         * server to be 'in-sync' with the client's active targets.
         */
        t.prototype.De = function (t) {
          this.Qe(t).De();
        }, t.prototype.Qe = function (t) {
          var e = this.Fe.get(t);
          return e || (e = new Mt(), this.Fe.set(t, e)), e;
        }, t.prototype.Ye = function (t) {
          var e = this.Me.get(t);
          return e || (e = new gt(G), this.Me = this.Me.Tt(t, e)), e;
        },
        /**
         * Verifies that the user is still interested in this target (by calling
         * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
         * from watch.
         */
        t.prototype.Ke = function (t) {
          var e = null !== this.Ge(t);
          return e || x("WatchChangeAggregator", "Detected inactive target", t), e;
        },
        /**
         * Returns the TargetData for an active target (i.e. a target that the user
         * is still interested in that has no outstanding target change requests).
         */
        t.prototype.Ge = function (t) {
          var e = this.Fe.get(t);
          return e && e.ge ? null : this.xe.Ze(t);
        },
        /**
         * Resets the state of a Watch target to its initial state (e.g. sets
         * 'current' to false, clears the resume token and removes its target mapping
         * from all documents).
         */
        t.prototype.We = function (t) {
          var e = this;
          this.Fe.set(t, new Mt()), this.xe.Xe(t).forEach(function (n) {
            e.Be(t, n,
            /*updatedDocument=*/
            null);
          });
        },
        /**
         * Returns whether the LocalStore considers the document to be part of the
         * specified target.
         */
        t.prototype.Je = function (t, e) {
          return this.xe.Xe(t).has(e);
        }, t;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
       * duplicate events for the same doc.
       */


      function jt() {
        return new vt(Z.$);
      }

      function Ft() {
        return new vt(Z.$);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function zt(t) {
        var e = 0;

        for (var n in t) {
          Object.prototype.hasOwnProperty.call(t, n) && e++;
        }

        return e;
      }

      function Bt(t, e) {
        for (var n in t) {
          Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
        }
      }

      function Gt(t) {
        for (var e in t) {
          if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        }

        return !0;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Represents a locally-applied ServerTimestamp.
       *
       * Server Timestamps are backed by MapValues that contain an internal field
       * `__type__` with a value of `server_timestamp`. The previous value and local
       * write time are stored in its `__previous_value__` and `__local_write_time__`
       * fields respectively.
       *
       * Notes:
       * - ServerTimestampValue instances are created as the result of applying a
       *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
       *   the local view of a document. Therefore they do not need to be parsed or
       *   serialized.
       * - When evaluated locally (e.g. for snapshot.data()), they by default
       *   evaluate to `null`. This behavior can be configured by passing custom
       *   FieldValueOptions to value().
       * - With respect to other ServerTimestampValues, they sort by their
       *   localWriteTime.
       */


      function Kt(t) {
        var e, n;
        return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
      }
      /**
       * Creates a new ServerTimestamp proto value (using the internal format).
       */

      /**
       * Returns the value of the field before this ServerTimestamp was set.
       *
       * Preserving the previous values allows the user to display the last resoled
       * value until the backend responds with the timestamp.
       */


      function Wt(t) {
        var e = t.mapValue.fields.__previous_value__;
        return Kt(e) ? Wt(e) : e;
      }
      /**
       * Returns the local time at which this timestamp was first set.
       */


      function Qt(t) {
        var e = ne(t.mapValue.fields.__local_write_time__.timestampValue);
        return new Q(e.seconds, e.nanos);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // A RegExp matching ISO 8601 UTC timestamps with optional fraction.


      var Ht = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
      /** Extracts the backend's type order for the provided value. */

      function Yt(t) {
        return "nullValue" in t ? 0
        /* NullValue */
        : "booleanValue" in t ? 1
        /* BooleanValue */
        : "integerValue" in t || "doubleValue" in t ? 2
        /* NumberValue */
        : "timestampValue" in t ? 3
        /* TimestampValue */
        : "stringValue" in t ? 5
        /* StringValue */
        : "bytesValue" in t ? 6
        /* BlobValue */
        : "referenceValue" in t ? 7
        /* RefValue */
        : "geoPointValue" in t ? 8
        /* GeoPointValue */
        : "arrayValue" in t ? 9
        /* ArrayValue */
        : "mapValue" in t ? Kt(t) ? 4
        /* ServerTimestampValue */
        : 10
        /* ObjectValue */
        : P();
      }
      /** Tests `left` and `right` for equality based on the backend semantics. */


      function $t(t, e) {
        var n = Yt(t);
        if (n !== Yt(e)) return !1;

        switch (n) {
          case 0
          /* NullValue */
          :
            return !0;

          case 1
          /* BooleanValue */
          :
            return t.booleanValue === e.booleanValue;

          case 4
          /* ServerTimestampValue */
          :
            return Qt(t).isEqual(Qt(e));

          case 3
          /* TimestampValue */
          :
            return function (t, e) {
              if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) // Use string equality for ISO 8601 timestamps
                return t.timestampValue === e.timestampValue;
              var n = ne(t.timestampValue),
                  r = ne(e.timestampValue);
              return n.seconds === r.seconds && n.nanos === r.nanos;
            }(t, e);

          case 5
          /* StringValue */
          :
            return t.stringValue === e.stringValue;

          case 6
          /* BlobValue */
          :
            return function (t, e) {
              return ie(t.bytesValue).isEqual(ie(e.bytesValue));
            }(t, e);

          case 7
          /* RefValue */
          :
            return t.referenceValue === e.referenceValue;

          case 8
          /* GeoPointValue */
          :
            return function (t, e) {
              return re(t.geoPointValue.latitude) === re(e.geoPointValue.latitude) && re(t.geoPointValue.longitude) === re(e.geoPointValue.longitude);
            }(t, e);

          case 2
          /* NumberValue */
          :
            return function (t, e) {
              if ("integerValue" in t && "integerValue" in e) return re(t.integerValue) === re(e.integerValue);

              if ("doubleValue" in t && "doubleValue" in e) {
                var n = re(t.doubleValue),
                    r = re(e.doubleValue);
                return n === r ? et(n) === et(r) : isNaN(n) && isNaN(r);
              }

              return !1;
            }(t, e);

          case 9
          /* ArrayValue */
          :
            return K(t.arrayValue.values || [], e.arrayValue.values || [], $t);

          case 10
          /* ObjectValue */
          :
            return function (t, e) {
              var n = t.mapValue.fields || {},
                  r = e.mapValue.fields || {};
              if (zt(n) !== zt(r)) return !1;

              for (var i in n) {
                if (n.hasOwnProperty(i) && (void 0 === r[i] || !$t(n[i], r[i]))) return !1;
              }

              return !0;
            }(t, e);

          default:
            return P();
        }
      }

      function Jt(t, e) {
        return void 0 !== (t.values || []).find(function (t) {
          return $t(t, e);
        });
      }

      function Xt(t, e) {
        var n = Yt(t),
            r = Yt(e);
        if (n !== r) return G(n, r);

        switch (n) {
          case 0
          /* NullValue */
          :
            return 0;

          case 1
          /* BooleanValue */
          :
            return G(t.booleanValue, e.booleanValue);

          case 2
          /* NumberValue */
          :
            return function (t, e) {
              var n = re(t.integerValue || t.doubleValue),
                  r = re(e.integerValue || e.doubleValue);
              return n < r ? -1 : n > r ? 1 : n === r ? 0 : // one or both are NaN.
              isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
            }(t, e);

          case 3
          /* TimestampValue */
          :
            return Zt(t.timestampValue, e.timestampValue);

          case 4
          /* ServerTimestampValue */
          :
            return Zt(Qt(t), Qt(e));

          case 5
          /* StringValue */
          :
            return G(t.stringValue, e.stringValue);

          case 6
          /* BlobValue */
          :
            return function (t, e) {
              var n = ie(t),
                  r = ie(e);
              return n.F(r);
            }(t.bytesValue, e.bytesValue);

          case 7
          /* RefValue */
          :
            return function (t, e) {
              for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = G(n[i], r[i]);
                if (0 !== o) return o;
              }

              return G(n.length, r.length);
            }(t.referenceValue, e.referenceValue);

          case 8
          /* GeoPointValue */
          :
            return function (t, e) {
              var n = G(re(t.latitude), re(e.latitude));
              return 0 !== n ? n : G(re(t.longitude), re(e.longitude));
            }(t.geoPointValue, e.geoPointValue);

          case 9
          /* ArrayValue */
          :
            return function (t, e) {
              for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = Xt(n[i], r[i]);
                if (o) return o;
              }

              return G(n.length, r.length);
            }(t.arrayValue, e.arrayValue);

          case 10
          /* ObjectValue */
          :
            return function (t, e) {
              var n = t.fields || {},
                  r = Object.keys(n),
                  i = e.fields || {},
                  o = Object.keys(i); // Even though MapValues are likely sorted correctly based on their insertion
              // order (e.g. when received from the backend), local modifications can bring
              // elements out of order. We need to re-sort the elements to ensure that
              // canonical IDs are independent of insertion order.

              r.sort(), o.sort();

              for (var u = 0; u < r.length && u < o.length; ++u) {
                var s = G(r[u], o[u]);
                if (0 !== s) return s;
                var a = Xt(n[r[u]], i[o[u]]);
                if (0 !== a) return a;
              }

              return G(r.length, o.length);
            }(t.mapValue, e.mapValue);

          default:
            throw P();
        }
      }

      function Zt(t, e) {
        if ("string" == typeof t && "string" == typeof e && t.length === e.length) return G(t, e);
        var n = ne(t),
            r = ne(e),
            i = G(n.seconds, r.seconds);
        return 0 !== i ? i : G(n.nanos, r.nanos);
      }

      function te(t) {
        return ee(t);
      }

      function ee(t) {
        return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function (t) {
          var e = ne(t);
          return "time(" + e.seconds + "," + e.nanos + ")";
        }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? ie(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, Z.it(n).toString()) : "geoPointValue" in t ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t ? function (t) {
          for (var e = "[", n = !0, r = 0, i = t.values || []; r < i.length; r++) {
            n ? n = !1 : e += ",", e += ee(i[r]);
          }

          return e + "]";
        }(t.arrayValue) : "mapValue" in t ? function (t) {
          for ( // Iteration order in JavaScript is not guaranteed. To ensure that we generate
          // matching canonical IDs for identical maps, we need to sort the keys.
          var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort(); r < i.length; r++) {
            var o = i[r];
            n ? n = !1 : e += ",", e += o + ":" + ee(t.fields[o]);
          }

          return e + "}";
        }(t.mapValue) : P();
        var e, n;
      }

      function ne(t) {
        // The json interface (for the browser) will return an iso timestamp string,
        // while the proto js library (for node) will return a
        // google.protobuf.Timestamp instance.
        if (C(!!t), "string" == typeof t) {
          // The date string can have higher precision (nanos) than the Date class
          // (millis), so we do some custom parsing here.
          // Parse the nanos right out of the string.
          var e = 0,
              n = Ht.exec(t);

          if (C(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
          } // Parse the date to get the seconds.


          var i = new Date(t);
          return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
          };
        }

        return {
          seconds: re(t.seconds),
          nanos: re(t.nanos)
        };
      }
      /**
       * Converts the possible Proto types for numbers into a JavaScript number.
       * Returns 0 if the value is not numeric.
       */


      function re(t) {
        // TODO(bjornick): Handle int64 greater than 53 bits.
        return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
      }
      /** Converts the possible Proto types for Blobs into a ByteString. */


      function ie(t) {
        return "string" == typeof t ? at.fromBase64String(t) : at.fromUint8Array(t);
      }
      /** Returns a reference value for the provided database and key. */


      function oe(t, e) {
        return {
          referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.J()
        };
      }
      /** Returns true if `value` is an IntegerValue . */


      function ue(t) {
        return !!t && "integerValue" in t;
      }
      /** Returns true if `value` is a DoubleValue. */

      /** Returns true if `value` is an ArrayValue. */


      function se(t) {
        return !!t && "arrayValue" in t;
      }
      /** Returns true if `value` is a NullValue. */


      function ae(t) {
        return !!t && "nullValue" in t;
      }
      /** Returns true if `value` is NaN. */


      function ce(t) {
        return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
      }
      /** Returns true if `value` is a MapValue. */


      function he(t) {
        return !!t && "mapValue" in t;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var fe = {
        asc: "ASCENDING",
        desc: "DESCENDING"
      },
          le = {
        "<": "LESS_THAN",
        "<=": "LESS_THAN_OR_EQUAL",
        ">": "GREATER_THAN",
        ">=": "GREATER_THAN_OR_EQUAL",
        "==": "EQUAL",
        "!=": "NOT_EQUAL",
        "array-contains": "ARRAY_CONTAINS",
        "in": "IN",
        "not-in": "NOT_IN",
        "array-contains-any": "ARRAY_CONTAINS_ANY"
      },
          pe = function pe(t, e) {
        this.t = t, this.tn = e;
      };
      /**
       * This class generates JsonObject values for the Datastore API suitable for
       * sending to either GRPC stub methods or via the JSON/HTTP REST API.
       *
       * The serializer supports both Protobuf.js and Proto3 JSON formats. By
       * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
       * format.
       *
       * For a description of the Proto3 JSON format check
       * https://developers.google.com/protocol-buffers/docs/proto3#json
       *
       * TODO(klimt): We can remove the databaseId argument if we keep the full
       * resource name in documents.
       */

      /**
       * Returns an IntegerValue for `value`.
       */


      function de(t) {
        return {
          integerValue: "" + t
        };
      }
      /**
       * Returns an DoubleValue for `value` that is encoded based the serializer's
       * `useProto3Json` setting.
       */


      function ve(t, e) {
        if (t.tn) {
          if (isNaN(e)) return {
            doubleValue: "NaN"
          };
          if (e === 1 / 0) return {
            doubleValue: "Infinity"
          };
          if (e === -1 / 0) return {
            doubleValue: "-Infinity"
          };
        }

        return {
          doubleValue: et(e) ? "-0" : e
        };
      }
      /**
       * Returns a value for a number that's appropriate to put into a proto.
       * The return value is an IntegerValue if it can safely represent the value,
       * otherwise a DoubleValue is returned.
       */


      function ye(t, e) {
        return nt(e) ? de(e) : ve(t, e);
      }
      /**
       * Returns a value for a Date that's appropriate to put into a proto.
       */


      function me(t, e) {
        return t.tn ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
          seconds: "" + e.seconds,
          nanos: e.nanoseconds
        };
      }
      /**
       * Returns a value for bytes that's appropriate to put in a proto.
       *
       * Visible for testing.
       */


      function ge(t, e) {
        return t.tn ? e.toBase64() : e.toUint8Array();
      }
      /**
       * Returns a ByteString based on the proto string value.
       */


      function we(t, e) {
        return me(t, e.M());
      }

      function be(t) {
        return C(!!t), H.N(function (t) {
          var e = ne(t);
          return new Q(e.seconds, e.nanos);
        }(t));
      }

      function _e(t, e) {
        return function (t) {
          return new $(["projects", t.projectId, "databases", t.database]);
        }(t).child("documents").child(e).J();
      }

      function Ie(t) {
        var e = $.Y(t);
        return C(Ke(e)), e;
      }

      function Ee(t, e) {
        return _e(t.t, e.path);
      }

      function Te(t, e) {
        var n = Ie(e);
        if (n.get(1) !== t.t.projectId) throw new L(V.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.t.projectId);
        if (n.get(3) !== t.t.database) throw new L(V.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.t.database);
        return new Z(xe(n));
      }

      function Ne(t, e) {
        return _e(t.t, e);
      }

      function Ae(t) {
        var e = Ie(t); // In v1beta1 queries for collections at the root did not have a trailing
        // "/documents". In v1 all resource paths contain "/documents". Preserve the
        // ability to read the v1beta1 form for compatibility with queries persisted
        // in the local target cache.

        return 4 === e.length ? $.X() : xe(e);
      }

      function De(t) {
        return new $(["projects", t.t.projectId, "databases", t.t.database]).J();
      }

      function xe(t) {
        return C(t.length > 4 && "documents" === t.get(4)), t.B(5)
        /** Creates a Document proto from key and fields (but no create/update time) */
        ;
      }

      function ke(t, e, n) {
        return {
          name: Ee(t, e),
          fields: n.proto.mapValue.fields
        };
      }

      function Oe(t, e) {
        var n;
        if (e instanceof yn) n = {
          update: ke(t, e.key, e.value)
        };else if (e instanceof In) n = {
          "delete": Ee(t, e.key)
        };else if (e instanceof mn) n = {
          update: ke(t, e.key, e.data),
          updateMask: Ge(e.en)
        };else if (e instanceof wn) n = {
          transform: {
            document: Ee(t, e.key),
            fieldTransforms: e.fieldTransforms.map(function (t) {
              return function (t, e) {
                var n = e.transform;
                if (n instanceof $e) return {
                  fieldPath: e.field.J(),
                  setToServerValue: "REQUEST_TIME"
                };
                if (n instanceof Je) return {
                  fieldPath: e.field.J(),
                  appendMissingElements: {
                    values: n.elements
                  }
                };
                if (n instanceof Ze) return {
                  fieldPath: e.field.J(),
                  removeAllFromArray: {
                    values: n.elements
                  }
                };
                if (n instanceof en) return {
                  fieldPath: e.field.J(),
                  increment: n.nn
                };
                throw P();
              }(0, t);
            })
          }
        };else {
          if (!(e instanceof En)) return P();
          n = {
            verify: Ee(t, e.key)
          };
        }
        return e.rn.sn || (n.currentDocument = function (t, e) {
          return void 0 !== e.updateTime ? {
            updateTime: we(t, e.updateTime)
          } : void 0 !== e.exists ? {
            exists: e.exists
          } : P();
        }(t, e.rn)), n;
      }

      function Se(t, e) {
        var n = e.currentDocument ? function (t) {
          return void 0 !== t.updateTime ? an.updateTime(be(t.updateTime)) : void 0 !== t.exists ? an.exists(t.exists) : an.on();
        }(e.currentDocument) : an.on();

        if (e.update) {
          e.update.name;
          var r = Te(t, e.update.name),
              i = new Tn({
            mapValue: {
              fields: e.update.fields
            }
          });

          if (e.updateMask) {
            var o = function (t) {
              var e = t.fieldPaths || [];
              return new on(e.map(function (t) {
                return X.nt(t);
              }));
            }(e.updateMask);

            return new mn(r, i, o, n);
          }

          return new yn(r, i, n);
        }

        if (e["delete"]) {
          var u = Te(t, e["delete"]);
          return new In(u, n);
        }

        if (e.transform) {
          var s = Te(t, e.transform.document),
              a = e.transform.fieldTransforms.map(function (e) {
            return function (t, e) {
              var n = null;
              if ("setToServerValue" in e) C("REQUEST_TIME" === e.setToServerValue), n = new $e();else if ("appendMissingElements" in e) {
                var r = e.appendMissingElements.values || [];
                n = new Je(r);
              } else if ("removeAllFromArray" in e) {
                var i = e.removeAllFromArray.values || [];
                n = new Ze(i);
              } else "increment" in e ? n = new en(t, e.increment) : P();
              var o = X.nt(e.fieldPath);
              return new un(o, n);
            }(t, e);
          });
          return C(!0 === n.exists), new wn(s, a);
        }

        if (e.verify) {
          var c = Te(t, e.verify);
          return new En(c, n);
        }

        return P();
      }

      function Pe(t, e) {
        return {
          documents: [Ne(t, e.path)]
        };
      }

      function Ce(t, e) {
        // Dissect the path into parent, collectionId, and optional key filter.
        var n = {
          structuredQuery: {}
        },
            r = e.path;
        null !== e.collectionGroup ? (n.parent = Ne(t, r), n.structuredQuery.from = [{
          collectionId: e.collectionGroup,
          allDescendants: !0
        }]) : (n.parent = Ne(t, r.q()), n.structuredQuery.from = [{
          collectionId: r.K()
        }]);

        var i = function (t) {
          if (0 !== t.length) {
            var e = t.map(function (t) {
              // visible for testing
              return function (t) {
                if ("=="
                /* EQUAL */
                === t.op) {
                  if (ce(t.value)) return {
                    unaryFilter: {
                      field: je(t.field),
                      op: "IS_NAN"
                    }
                  };
                  if (ae(t.value)) return {
                    unaryFilter: {
                      field: je(t.field),
                      op: "IS_NULL"
                    }
                  };
                } else if ("!="
                /* NOT_EQUAL */
                === t.op) {
                  if (ce(t.value)) return {
                    unaryFilter: {
                      field: je(t.field),
                      op: "IS_NOT_NAN"
                    }
                  };
                  if (ae(t.value)) return {
                    unaryFilter: {
                      field: je(t.field),
                      op: "IS_NOT_NULL"
                    }
                  };
                }

                return {
                  fieldFilter: {
                    field: je(t.field),
                    op: qe(t.op),
                    value: t.value
                  }
                };
              }(t);
            });
            return 1 === e.length ? e[0] : {
              compositeFilter: {
                op: "AND",
                filters: e
              }
            };
          }
        }(e.filters);

        i && (n.structuredQuery.where = i);

        var o = function (t) {
          if (0 !== t.length) return t.map(function (t) {
            // visible for testing
            return function (t) {
              return {
                field: je(t.field),
                direction: Me(t.dir)
              };
            }(t);
          });
        }(e.orderBy);

        o && (n.structuredQuery.orderBy = o);

        var u = function (t, e) {
          return t.tn || tt(e) ? e : {
            value: e
          };
        }(t, e.limit);

        return null !== u && (n.structuredQuery.limit = u), e.startAt && (n.structuredQuery.startAt = Le(e.startAt)), e.endAt && (n.structuredQuery.endAt = Le(e.endAt)), n;
      }

      function Re(t) {
        var e = Ae(t.parent),
            n = t.structuredQuery,
            r = n.from ? n.from.length : 0,
            i = null;

        if (r > 0) {
          C(1 === r);
          var o = n.from[0];
          o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
        }

        var u = [];
        n.where && (u = Ve(n.where));
        var s = [];
        n.orderBy && (s = n.orderBy.map(function (t) {
          return function (t) {
            return new ur(Fe(t.field), // visible for testing
            function (t) {
              switch (t) {
                case "ASCENDING":
                  return "asc"
                  /* ASCENDING */
                  ;

                case "DESCENDING":
                  return "desc"
                  /* DESCENDING */
                  ;

                default:
                  return;
              }
            }(t.direction));
          }(t);
        }));
        var a = null;
        n.limit && (a = function (t) {
          var e;
          return tt(e = "object" == typeof t ? t.value : t) ? null : e;
        }(n.limit));
        var c = null;
        n.startAt && (c = Ue(n.startAt));
        var h = null;
        return n.endAt && (h = Ue(n.endAt)), Pn(e, i, s, u, a, "F"
        /* First */
        , c, h);
      }

      function Ve(t) {
        return t ? void 0 !== t.unaryFilter ? [Be(t)] : void 0 !== t.fieldFilter ? [ze(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function (t) {
          return Ve(t);
        }).reduce(function (t, e) {
          return t.concat(e);
        }) : P() : [];
      }

      function Le(t) {
        return {
          before: t.before,
          values: t.position
        };
      }

      function Ue(t) {
        var e = !!t.before,
            n = t.values || [];
        return new nr(n, e);
      } // visible for testing


      function Me(t) {
        return fe[t];
      }

      function qe(t) {
        return le[t];
      }

      function je(t) {
        return {
          fieldPath: t.J()
        };
      }

      function Fe(t) {
        return X.nt(t.fieldPath);
      }

      function ze(t) {
        return Qn.create(Fe(t.fieldFilter.field), function (t) {
          switch (t) {
            case "EQUAL":
              return "=="
              /* EQUAL */
              ;

            case "NOT_EQUAL":
              return "!="
              /* NOT_EQUAL */
              ;

            case "GREATER_THAN":
              return ">"
              /* GREATER_THAN */
              ;

            case "GREATER_THAN_OR_EQUAL":
              return ">="
              /* GREATER_THAN_OR_EQUAL */
              ;

            case "LESS_THAN":
              return "<"
              /* LESS_THAN */
              ;

            case "LESS_THAN_OR_EQUAL":
              return "<="
              /* LESS_THAN_OR_EQUAL */
              ;

            case "ARRAY_CONTAINS":
              return "array-contains"
              /* ARRAY_CONTAINS */
              ;

            case "IN":
              return "in"
              /* IN */
              ;

            case "NOT_IN":
              return "not-in"
              /* NOT_IN */
              ;

            case "ARRAY_CONTAINS_ANY":
              return "array-contains-any"
              /* ARRAY_CONTAINS_ANY */
              ;

            case "OPERATOR_UNSPECIFIED":
            default:
              return P();
          }
        }(t.fieldFilter.op), t.fieldFilter.value);
      }

      function Be(t) {
        switch (t.unaryFilter.op) {
          case "IS_NAN":
            var e = Fe(t.unaryFilter.field);
            return Qn.create(e, "=="
            /* EQUAL */
            , {
              doubleValue: NaN
            });

          case "IS_NULL":
            var n = Fe(t.unaryFilter.field);
            return Qn.create(n, "=="
            /* EQUAL */
            , {
              nullValue: "NULL_VALUE"
            });

          case "IS_NOT_NAN":
            var r = Fe(t.unaryFilter.field);
            return Qn.create(r, "!="
            /* NOT_EQUAL */
            , {
              doubleValue: NaN
            });

          case "IS_NOT_NULL":
            var i = Fe(t.unaryFilter.field);
            return Qn.create(i, "!="
            /* NOT_EQUAL */
            , {
              nullValue: "NULL_VALUE"
            });

          case "OPERATOR_UNSPECIFIED":
          default:
            return P();
        }
      }

      function Ge(t) {
        var e = [];
        return t.fields.forEach(function (t) {
          return e.push(t.J());
        }), {
          fieldPaths: e
        };
      }

      function Ke(t) {
        // Resource names have at least 4 components (project ID, database ID)
        return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
      }
      /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Represents a transform within a TransformMutation. */


      var We = function We() {
        // Make sure that the structural type of `TransformOperation` is unique.
        // See https://github.com/microsoft/TypeScript/issues/5451
        this.cn = void 0;
      };
      /**
       * Computes the local transform result against the provided `previousValue`,
       * optionally using the provided localWriteTime.
       */


      function Qe(t, e, n) {
        return t instanceof $e ? function (t, e) {
          var n = {
            fields: {
              __type__: {
                stringValue: "server_timestamp"
              },
              __local_write_time__: {
                timestampValue: {
                  seconds: t.seconds,
                  nanos: t.nanoseconds
                }
              }
            }
          };
          return e && (n.fields.__previous_value__ = e), {
            mapValue: n
          };
        }(n, e) : t instanceof Je ? Xe(t, e) : t instanceof Ze ? tn(t, e) : function (t, e) {
          // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
          // precision and resolves overflows by reducing precision, we do not
          // manually cap overflows at 2^63.
          var n = Ye(t, e),
              r = nn(n) + nn(t.nn);
          return ue(n) && ue(t.nn) ? de(r) : ve(t.serializer, r);
        }(t, e);
      }
      /**
       * Computes a final transform result after the transform has been acknowledged
       * by the server, potentially using the server-provided transformResult.
       */


      function He(t, e, n) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return t instanceof Je ? Xe(t, e) : t instanceof Ze ? tn(t, e) : n;
      }
      /**
       * If this transform operation is not idempotent, returns the base value to
       * persist for this transform. If a base value is returned, the transform
       * operation is always applied to this base value, even if document has
       * already been updated.
       *
       * Base values provide consistent behavior for non-idempotent transforms and
       * allow us to return the same latency-compensated value even if the backend
       * has already applied the transform operation. The base value is null for
       * idempotent transforms, as they can be re-played even if the backend has
       * already applied them.
       *
       * @return a base value to store along with the mutation, or null for
       * idempotent transforms.
       */


      function Ye(t, e) {
        return t instanceof en ? ue(n = e) || function (t) {
          return !!t && "doubleValue" in t;
        }(n) ? e : {
          integerValue: 0
        } : null;
        var n;
      }
      /** Transforms a value into a server-generated timestamp. */


      var $e =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(We),
          Je =
      /** @class */
      function (e) {
        function n(t) {
          var n = this;
          return (n = e.call(this) || this).elements = t, n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(We);
      /** Transforms an array value via a union operation. */


      function Xe(t, e) {
        for (var n = rn(e), r = function r(t) {
          n.some(function (e) {
            return $t(e, t);
          }) || n.push(t);
        }, i = 0, o = t.elements; i < o.length; i++) {
          r(o[i]);
        }

        return {
          arrayValue: {
            values: n
          }
        };
      }
      /** Transforms an array value via a remove operation. */


      var Ze =
      /** @class */
      function (e) {
        function n(t) {
          var n = this;
          return (n = e.call(this) || this).elements = t, n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(We);

      function tn(t, e) {
        for (var n = rn(e), r = function r(t) {
          n = n.filter(function (e) {
            return !$t(e, t);
          });
        }, i = 0, o = t.elements; i < o.length; i++) {
          r(o[i]);
        }

        return {
          arrayValue: {
            values: n
          }
        };
      }
      /**
       * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
       * transforms. Converts all field values to integers or doubles, but unlike the
       * backend does not cap integer values at 2^63. Instead, JavaScript number
       * arithmetic is used and precision loss can occur for values greater than 2^53.
       */


      var en =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this) || this).serializer = t, r.nn = n, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(We);

      function nn(t) {
        return re(t.integerValue || t.doubleValue);
      }

      function rn(t) {
        return se(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Provides a set of fields that can be used to partially patch a document.
       * FieldMask is used in conjunction with ObjectValue.
       * Examples:
       *   foo - Overwrites foo entirely with the provided value. If foo is not
       *         present in the companion ObjectValue, the field is deleted.
       *   foo.bar - Overwrites only the field bar of the object foo.
       *             If foo is not an object, foo is replaced with an object
       *             containing foo
       */


      var on =
      /** @class */
      function () {
        function t(t) {
          this.fields = t, // TODO(dimond): validation of FieldMask
          // Sort the field mask to support `FieldMask.isEqual()` and assert below.
          t.sort(X.$)
          /**
          * Verifies that `fieldPath` is included by at least one field in this field
          * mask.
          *
          * This is an O(n) operation, where `n` is the size of the field mask.
          */
          ;
        }

        return t.prototype.un = function (t) {
          for (var e = 0, n = this.fields; e < n.length; e++) {
            if (n[e].j(t)) return !0;
          }

          return !1;
        }, t.prototype.isEqual = function (t) {
          return K(this.fields, t.fields, function (t, e) {
            return t.isEqual(e);
          });
        }, t;
      }(),
          un = function un(t, e) {
        this.field = t, this.transform = e;
      };
      /** A field path and the TransformOperation to perform upon it. */

      /** The result of successfully applying a mutation to the backend. */


      var sn = function sn(
      /**
           * The version at which the mutation was committed:
           *
           * - For most operations, this is the updateTime in the WriteResult.
           * - For deletes, the commitTime of the WriteResponse (because deletes are
           *   not stored and have no updateTime).
           *
           * Note that these versions can be different: No-op writes will not change
           * the updateTime even though the commitTime advances.
           */
      t,
      /**
           * The resulting fields returned from the backend after a
           * TransformMutation has been committed. Contains one FieldValue for each
           * FieldTransform that was in the mutation.
           *
           * Will be null if the mutation was not a TransformMutation.
           */
      e) {
        this.version = t, this.transformResults = e;
      },
          an =
      /** @class */
      function () {
        function t(t, e) {
          this.updateTime = t, this.exists = e
          /** Creates a new empty Precondition. */
          ;
        }

        return t.on = function () {
          return new t();
        },
        /** Creates a new Precondition with an exists flag. */
        t.exists = function (e) {
          return new t(void 0, e);
        },
        /** Creates a new Precondition based on a version a document exists at. */
        t.updateTime = function (e) {
          return new t(e);
        }, Object.defineProperty(t.prototype, "sn", {
          /** Returns whether this Precondition is empty. */
          get: function get() {
            return void 0 === this.updateTime && void 0 === this.exists;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.isEqual = function (t) {
          return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
        }, t;
      }();
      /**
       * Encodes a precondition for a mutation. This follows the model that the
       * backend accepts with the special case of an explicit "empty" precondition
       * (meaning no precondition).
       */

      /**
       * Returns true if the preconditions is valid for the given document
       * (or null if no document is available).
       */


      function cn(t, e) {
        return void 0 !== t.updateTime ? e instanceof xn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof xn;
      }
      /**
       * A mutation describes a self-contained change to a document. Mutations can
       * create, replace, delete, and update subsets of documents.
       *
       * Mutations not only act on the value of the document but also its version.
       *
       * For local mutations (mutations that haven't been committed yet), we preserve
       * the existing version for Set, Patch, and Transform mutations. For Delete
       * mutations, we reset the version to 0.
       *
       * Here's the expected transition table.
       *
       * MUTATION           APPLIED TO            RESULTS IN
       *
       * SetMutation        Document(v3)          Document(v3)
       * SetMutation        NoDocument(v3)        Document(v0)
       * SetMutation        null                  Document(v0)
       * PatchMutation      Document(v3)          Document(v3)
       * PatchMutation      NoDocument(v3)        NoDocument(v3)
       * PatchMutation      null                  null
       * TransformMutation  Document(v3)          Document(v3)
       * TransformMutation  NoDocument(v3)        NoDocument(v3)
       * TransformMutation  null                  null
       * DeleteMutation     Document(v3)          NoDocument(v0)
       * DeleteMutation     NoDocument(v3)        NoDocument(v0)
       * DeleteMutation     null                  NoDocument(v0)
       *
       * For acknowledged mutations, we use the updateTime of the WriteResponse as
       * the resulting version for Set, Patch, and Transform mutations. As deletes
       * have no explicit update time, we use the commitTime of the WriteResponse for
       * Delete mutations.
       *
       * If a mutation is acknowledged by the backend but fails the precondition check
       * locally, we return an `UnknownDocument` and rely on Watch to send us the
       * updated version.
       *
       * Note that TransformMutations don't create Documents (in the case of being
       * applied to a NoDocument), even though they would on the backend. This is
       * because the client always combines the TransformMutation with a SetMutation
       * or PatchMutation and we only want to apply the transform if the prior
       * mutation resulted in a Document (always true for a SetMutation, but not
       * necessarily for a PatchMutation).
       *
       * ## Subclassing Notes
       *
       * Subclasses of Mutation need to implement applyToRemoteDocument() and
       * applyToLocalView() to implement the actual behavior of applying the mutation
       * to some source document.
       */


      var hn = function hn() {};
      /**
       * Applies this mutation to the given MaybeDocument or null for the purposes
       * of computing a new remote document. If the input document doesn't match the
       * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
       * returned.
       *
       * @param mutation The mutation to apply.
       * @param maybeDoc The document to mutate. The input document can be null if
       *     the client has no knowledge of the pre-mutation state of the document.
       * @param mutationResult The result of applying the mutation from the backend.
       * @return The mutated document. The returned document may be an
       *     UnknownDocument if the mutation could not be applied to the locally
       *     cached base document.
       */


      function fn(t, e, n) {
        return t instanceof yn ? function (t, e, n) {
          // Unlike applySetMutationToLocalView, if we're applying a mutation to a
          // remote document the server has accepted the mutation so the precondition
          // must have held.
          return new xn(t.key, n.version, t.value, {
            hasCommittedMutations: !0
          });
        }(t, 0, n) : t instanceof mn ? function (t, e, n) {
          if (!cn(t.rn, e)) // Since the mutation was not rejected, we know that the  precondition
            // matched on the backend. We therefore must not have the expected version
            // of the document in our cache and return an UnknownDocument with the
            // known updateTime.
            return new On(t.key, n.version);
          var r = gn(t, e);
          return new xn(t.key, n.version, r, {
            hasCommittedMutations: !0
          });
        }(t, e, n) : t instanceof wn ? function (t, e, n) {
          if (C(null != n.transformResults), !cn(t.rn, e)) // Since the mutation was not rejected, we know that the  precondition
            // matched on the backend. We therefore must not have the expected version
            // of the document in our cache and return an UnknownDocument with the
            // known updateTime.
            return new On(t.key, n.version);

          var r = bn(t, e),
              i =
          /**
          * Creates a list of "transform results" (a transform result is a field value
          * representing the result of applying a transform) for use after a
          * TransformMutation has been acknowledged by the server.
          *
          * @param fieldTransforms The field transforms to apply the result to.
          * @param baseDoc The document prior to applying this mutation batch.
          * @param serverTransformResults The transform results received by the server.
          * @return The transform results list.
          */
          function (t, e, n) {
            var r = [];
            C(t.length === n.length);

            for (var i = 0; i < n.length; i++) {
              var o = t[i],
                  u = o.transform,
                  s = null;
              e instanceof xn && (s = e.field(o.field)), r.push(He(u, s, n[i]));
            }

            return r;
          }(t.fieldTransforms, e, n.transformResults),
              o = n.version,
              u = _n(t, r.data(), i);

          return new xn(t.key, o, u, {
            hasCommittedMutations: !0
          });
        }(t, e, n) : function (t, e, n) {
          // Unlike applyToLocalView, if we're applying a mutation to a remote
          // document the server has accepted the mutation so the precondition must
          // have held.
          return new kn(t.key, n.version, {
            hasCommittedMutations: !0
          });
        }(t, 0, n);
      }
      /**
       * Applies this mutation to the given MaybeDocument or null for the purposes
       * of computing the new local view of a document. Both the input and returned
       * documents can be null.
       *
       * @param mutation The mutation to apply.
       * @param maybeDoc The document to mutate. The input document can be null if
       *     the client has no knowledge of the pre-mutation state of the document.
       * @param baseDoc The state of the document prior to this mutation batch. The
       *     input document can be null if the client has no knowledge of the
       *     pre-mutation state of the document.
       * @param localWriteTime A timestamp indicating the local write time of the
       *     batch this mutation is a part of.
       * @return The mutated document. The returned document may be null, but only
       *     if maybeDoc was null and the mutation would not create a new document.
       */


      function ln(t, e, n, r) {
        return t instanceof yn ? function (t, e) {
          if (!cn(t.rn, e)) return e;
          var n = vn(e);
          return new xn(t.key, n, t.value, {
            an: !0
          });
        }(t, e) : t instanceof mn ? function (t, e) {
          if (!cn(t.rn, e)) return e;
          var n = vn(e),
              r = gn(t, e);
          return new xn(t.key, n, r, {
            an: !0
          });
        }(t, e) : t instanceof wn ? function (t, e, n, r) {
          if (!cn(t.rn, e)) return e;

          var i = bn(t, e),
              o = function (t, e, n, r) {
            for (var i = [], o = 0, u = t; o < u.length; o++) {
              var s = u[o],
                  a = s.transform,
                  c = null;
              n instanceof xn && (c = n.field(s.field)), null === c && r instanceof xn && ( // If the current document does not contain a value for the mutated
              // field, use the value that existed before applying this mutation
              // batch. This solves an edge case where a PatchMutation clears the
              // values in a nested map before the TransformMutation is applied.
              c = r.field(s.field)), i.push(Qe(a, c, e));
            }

            return i;
          }(t.fieldTransforms, n, e, r),
              u = _n(t, i.data(), o);

          return new xn(t.key, i.version, u, {
            an: !0
          });
        }(t, e, r, n) : function (t, e) {
          return cn(t.rn, e) ? new kn(t.key, H.min()) : e;
        }(t, e);
      }
      /**
       * If this mutation is not idempotent, returns the base value to persist with
       * this mutation. If a base value is returned, the mutation is always applied
       * to this base value, even if document has already been updated.
       *
       * The base value is a sparse object that consists of only the document
       * fields for which this mutation contains a non-idempotent transformation
       * (e.g. a numeric increment). The provided value guarantees consistent
       * behavior for non-idempotent transforms and allow us to return the same
       * latency-compensated value even if the backend has already applied the
       * mutation. The base value is null for idempotent mutations, as they can be
       * re-played even if the backend has already applied them.
       *
       * @return a base value to store along with the mutation, or null for
       * idempotent mutations.
       */


      function pn(t, e) {
        return t instanceof wn ? function (t, e) {
          for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
            var o = i[r],
                u = e instanceof xn ? e.field(o.field) : void 0,
                s = Ye(o.transform, u || null);
            null != s && (n = null == n ? new Nn().set(o.field, s) : n.set(o.field, s));
          }

          return n ? n.hn() : null;
        }(t, e) : null;
      }

      function dn(t, e) {
        return t.type === e.type && !!t.key.isEqual(e.key) && !!t.rn.isEqual(e.rn) && (0
        /* Set */
        === t.type ? t.value.isEqual(e.value) : 1
        /* Patch */
        === t.type ? t.data.isEqual(e.data) && t.en.isEqual(e.en) : 2
        /* Transform */
        !== t.type || K(t.fieldTransforms, t.fieldTransforms, function (t, e) {
          return function (t, e) {
            return t.field.isEqual(e.field) && function (t, e) {
              return t instanceof Je && e instanceof Je || t instanceof Ze && e instanceof Ze ? K(t.elements, e.elements, $t) : t instanceof en && e instanceof en ? $t(t.nn, e.nn) : t instanceof $e && e instanceof $e;
            }(t.transform, e.transform);
          }(t, e);
        }));
      }
      /**
       * Returns the version from the given document for use as the result of a
       * mutation. Mutations are defined to return the version of the base document
       * only if it is an existing document. Deleted and unknown documents have a
       * post-mutation version of SnapshotVersion.min().
       */


      function vn(t) {
        return t instanceof xn ? t.version : H.min();
      }
      /**
       * A mutation that creates or replaces the document at the given key with the
       * object value contents.
       */


      var yn =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this) || this).key = t, i.value = n, i.rn = r, i.type = 0
          /* Set */
          , i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(hn),
          mn =
      /** @class */
      function (e) {
        function n(t, n, r, i) {
          var o = this;
          return (o = e.call(this) || this).key = t, o.data = n, o.en = r, o.rn = i, o.type = 1
          /* Patch */
          , o;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(hn);

      function gn(t, e) {
        return function (t, e) {
          var n = new Nn(e);
          return t.en.fields.forEach(function (e) {
            if (!e.W()) {
              var r = t.data.field(e);
              null !== r ? n.set(e, r) : n["delete"](e);
            }
          }), n.hn();
        }(t, e instanceof xn ? e.data() : Tn.empty());
      }

      var wn =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this) || this).key = t, r.fieldTransforms = n, r.type = 2
          /* Transform */
          , // NOTE: We set a precondition of exists: true as a safety-check, since we
          // always combine TransformMutations with a SetMutation or PatchMutation which
          // (if successful) should end up with an existing document.
          r.rn = an.exists(!0), r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(hn);

      function bn(t, e) {
        return e;
      }

      function _n(t, e, n) {
        for (var r = new Nn(e), i = 0; i < t.fieldTransforms.length; i++) {
          var o = t.fieldTransforms[i];
          r.set(o.field, n[i]);
        }

        return r.hn();
      }
      /** A mutation that deletes the document at the given key. */


      var In =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this) || this).key = t, r.rn = n, r.type = 3
          /* Delete */
          , r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(hn),
          En =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this) || this).key = t, r.rn = n, r.type = 4
          /* Verify */
          , r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(hn),
          Tn =
      /** @class */
      function () {
        function t(t) {
          this.proto = t;
        }

        return t.empty = function () {
          return new t({
            mapValue: {}
          });
        },
        /**
         * Returns the value at the given path or null.
         *
         * @param path the path to search
         * @return The value at the path or if there it doesn't exist.
         */
        t.prototype.field = function (t) {
          if (t.W()) return this.proto;

          for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!he(e = e.mapValue.fields[t.get(n)])) return null;
          }

          return (e = (e.mapValue.fields || {})[t.K()]) || null;
        }, t.prototype.isEqual = function (t) {
          return $t(this.proto, t.proto);
        }, t;
      }(),
          Nn =
      /** @class */
      function () {
        /**
         * @param baseObject The object to mutate.
         */
        function t(t) {
          void 0 === t && (t = Tn.empty()), this.ln = t,
          /** A map that contains the accumulated changes in this builder. */
          this._n = new Map();
        }
        /**
         * Sets the field to the provided value.
         *
         * @param path The field path to set.
         * @param value The value to set.
         * @return The current Builder instance.
         */


        return t.prototype.set = function (t, e) {
          return this.fn(t, e), this;
        },
        /**
         * Removes the field at the specified path. If there is no field at the
         * specified path, nothing is changed.
         *
         * @param path The field path to remove.
         * @return The current Builder instance.
         */
        t.prototype["delete"] = function (t) {
          return this.fn(t, null), this;
        },
        /**
         * Adds `value` to the overlay map at `path`. Creates nested map entries if
         * needed.
         */
        t.prototype.fn = function (t, e) {
          for (var n = this._n, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r),
                o = n.get(i);
            o instanceof Map ? // Re-use a previously created map
            n = o : o && 10
            /* ObjectValue */
            === Yt(o) ? ( // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : ( // Create an empty map to represent the current nesting level
            o = new Map(), n.set(i, o), n = o);
          }

          n.set(t.K(), e);
        },
        /** Returns an ObjectValue with all mutations applied. */
        t.prototype.hn = function () {
          var t = this.dn(X.X(), this._n);
          return null != t ? new Tn(t) : this.ln;
        },
        /**
         * Applies any overlays from `currentOverlays` that exist at `currentPath`
         * and returns the merged data at `currentPath` (or null if there were no
         * changes).
         *
         * @param currentPath The path at the current nesting level. Can be set to
         * FieldValue.emptyPath() to represent the root.
         * @param currentOverlays The overlays at the current nesting level in the
         * same format as `overlayMap`.
         * @return The merged data at `currentPath` or null if no modifications
         * were applied.
         */
        t.prototype.dn = function (t, e) {
          var n = this,
              r = !1,
              i = this.ln.field(t),
              o = he(i) ? // If there is already data at the current path, base our
          Object.assign({}, i.mapValue.fields) : {};
          return e.forEach(function (e, i) {
            if (e instanceof Map) {
              var u = n.dn(t.child(i), e);
              null != u && (o[i] = u, r = !0);
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
          }), r ? {
            mapValue: {
              fields: o
            }
          } : null;
        }, t;
      }();
      /**
       * Returns a FieldMask built from all fields in a MapValue.
       */


      function An(t) {
        var e = [];
        return Bt(t.fields || {}, function (t, n) {
          var r = new X([t]);

          if (he(n)) {
            var i = An(n.mapValue).fields;
            if (0 === i.length) // Preserve the empty map by adding it to the FieldMask.
              e.push(r);else // For nested and non-empty ObjectValues, add the FieldPath of the
              // leaf nodes.
              for (var o = 0, u = i; o < u.length; o++) {
                var s = u[o];
                e.push(r.child(s));
              }
          } else // For nested and non-empty ObjectValues, add the FieldPath of the leaf
            // nodes.
            e.push(r);
        }), new on(e)
        /**
        * @license
        * Copyright 2017 Google LLC
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        *   http://www.apache.org/licenses/LICENSE-2.0
        *
        * Unless required by applicable law or agreed to in writing, software
        * distributed under the License is distributed on an "AS IS" BASIS,
        * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        * See the License for the specific language governing permissions and
        * limitations under the License.
        */

        /**
        * The result of a lookup for a given path may be an existing document or a
        * marker that this document does not exist at a given version.
        */
        ;
      }

      var Dn = function Dn(t, e) {
        this.key = t, this.version = e;
      },
          xn =
      /** @class */
      function (e) {
        function n(t, n, r, i) {
          var o = this;
          return (o = e.call(this, t, n) || this).wn = r, o.an = !!i.an, o.hasCommittedMutations = !!i.hasCommittedMutations, o;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.field = function (t) {
          return this.wn.field(t);
        }, n.prototype.data = function () {
          return this.wn;
        }, n.prototype.En = function () {
          return this.wn.proto;
        }, n.prototype.isEqual = function (t) {
          return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.an === t.an && this.hasCommittedMutations === t.hasCommittedMutations && this.wn.isEqual(t.wn);
        }, n.prototype.toString = function () {
          return "Document(" + this.key + ", " + this.version + ", " + this.wn.toString() + ", {hasLocalMutations: " + this.an + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
        }, Object.defineProperty(n.prototype, "hasPendingWrites", {
          get: function get() {
            return this.an || this.hasCommittedMutations;
          },
          enumerable: !1,
          configurable: !0
        }), n;
      }(Dn),
          kn =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this, t, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.toString = function () {
          return "NoDocument(" + this.key + ", " + this.version + ")";
        }, Object.defineProperty(n.prototype, "hasPendingWrites", {
          get: function get() {
            return this.hasCommittedMutations;
          },
          enumerable: !1,
          configurable: !0
        }), n.prototype.isEqual = function (t) {
          return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
        }, n;
      }(Dn),
          On =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.toString = function () {
          return "UnknownDocument(" + this.key + ", " + this.version + ")";
        }, Object.defineProperty(n.prototype, "hasPendingWrites", {
          get: function get() {
            return !0;
          },
          enumerable: !1,
          configurable: !0
        }), n.prototype.isEqual = function (t) {
          return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
        }, n;
      }(Dn),
          Sn =
      /**
           * Initializes a Query with a path and optional additional query constraints.
           * Path must currently be empty if this is a collection group query.
           */
      function Sn(t, e, n, r, i, o
      /* First */
      , u, s) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === u && (u = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.Tn = n, this.filters = r, this.limit = i, this.limitType = o, this.startAt = u, this.endAt = s, this.In = null, // The corresponding `Target` of this `Query` instance.
        this.mn = null, this.startAt, this.endAt;
      };
      /**
       * Represents a document in Firestore with a key, version, data and whether the
       * data has local mutations applied to it.
       */

      /** Creates a new Query instance with the options provided. */


      function Pn(t, e, n, r, i, o, u, s) {
        return new Sn(t, e, n, r, i, o, u, s);
      }
      /** Creates a new Query for a query that matches all documents at `path` */


      function Cn(t) {
        return new Sn(t);
      }
      /**
       * Helper to convert a collection group query into a collection query at a
       * specific path. This is used when executing collection group queries, since
       * we have to split the query into a set of collection queries at multiple
       * paths.
       */


      function Rn(t) {
        return !tt(t.limit) && "F"
        /* First */
        === t.limitType;
      }

      function Vn(t) {
        return !tt(t.limit) && "L"
        /* Last */
        === t.limitType;
      }

      function Ln(t) {
        return t.Tn.length > 0 ? t.Tn[0].field : null;
      }

      function Un(t) {
        for (var e = 0, n = t.filters; e < n.length; e++) {
          var r = n[e];
          if (r.An()) return r.field;
        }

        return null;
      }
      /**
       * Checks if any of the provided Operators are included in the query and
       * returns the first one that is, or null if none are.
       */

      /**
       * Returns whether the query matches a collection group rather than a specific
       * collection.
       */


      function Mn(t) {
        return null !== t.collectionGroup;
      }
      /**
       * Returns the implicit order by constraint that is used to execute the Query,
       * which can be different from the order by constraints the user provided (e.g.
       * the SDK and backend always orders by `__name__`).
       */


      function qn(t) {
        var e = R(t);

        if (null === e.In) {
          e.In = [];
          var n = Un(e),
              r = Ln(e);
          if (null !== n && null === r) // In order to implicitly add key ordering, we must also add the
            // inequality filter field for it to be a valid query.
            // Note that the default inequality field and key ordering is ascending.
            n.tt() || e.In.push(new ur(n)), e.In.push(new ur(X.et(), "asc"
            /* ASCENDING */
            ));else {
            for (var i = !1, o = 0, u = e.Tn; o < u.length; o++) {
              var s = u[o];
              e.In.push(s), s.field.tt() && (i = !0);
            }

            if (!i) {
              // The order of the implicit key ordering always matches the last
              // explicit order by
              var a = e.Tn.length > 0 ? e.Tn[e.Tn.length - 1].dir : "asc"
              /* ASCENDING */
              ;
              e.In.push(new ur(X.et(), a));
            }
          }
        }

        return e.In;
      }
      /**
       * Converts this `Query` instance to it's corresponding `Target` representation.
       */


      function jn(t) {
        var e = R(t);
        if (!e.mn) if ("F"
        /* First */
        === e.limitType) e.mn = it(e.path, e.collectionGroup, qn(e), e.filters, e.limit, e.startAt, e.endAt);else {
          for ( // Flip the orderBy directions since we want the last results
          var n = [], r = 0, i = qn(e); r < i.length; r++) {
            var o = i[r],
                u = "desc"
            /* DESCENDING */
            === o.dir ? "asc"
            /* ASCENDING */
            : "desc"
            /* DESCENDING */
            ;
            n.push(new ur(o.field, u));
          } // We need to swap the cursors to match the now-flipped query ordering.


          var s = e.endAt ? new nr(e.endAt.position, !e.endAt.before) : null,
              a = e.startAt ? new nr(e.startAt.position, !e.startAt.before) : null; // Now return as a LimitType.First query.

          e.mn = it(e.path, e.collectionGroup, n, e.filters, e.limit, s, a);
        }
        return e.mn;
      }

      function Fn(t, e, n) {
        return new Sn(t.path, t.collectionGroup, t.Tn.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
      }

      function zn(t, e) {
        return ut(jn(t), jn(e)) && t.limitType === e.limitType;
      } // TODO(b/29183165): This is used to get a unique string from a query to, for
      // example, use as a dictionary key, but the implementation is subject to
      // collisions. Make it collision-free.


      function Bn(t) {
        return ot(jn(t)) + "|lt:" + t.limitType;
      }

      function Gn(t) {
        return "Query(target=" + function (t) {
          var e = t.path.J();
          return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), t.filters.length > 0 && (e += ", filters: [" + t.filters.map(function (t) {
            return (e = t).field.J() + " " + e.op + " " + te(e.value);
            /** Returns a debug description for `filter`. */

            var e;
            /** Filter that matches on key fields (i.e. '__name__'). */
          }).join(", ") + "]"), tt(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map(function (t) {
            return function (t) {
              return t.field.J() + " (" + t.dir + ")";
            }(t);
          }).join(", ") + "]"), t.startAt && (e += ", startAt: " + rr(t.startAt)), t.endAt && (e += ", endAt: " + rr(t.endAt)), "Target(" + e + ")";
        }(jn(t)) + "; limitType=" + t.limitType + ")";
      }
      /** Returns whether `doc` matches the constraints of `query`. */


      function Kn(t, e) {
        return function (t, e) {
          var n = e.key.path;
          return null !== t.collectionGroup ? e.key.rt(t.collectionGroup) && t.path.j(n) : Z.ot(t.path) ? t.path.isEqual(n) : t.path.G(n);
        }(t, e) && function (t, e) {
          for (var n = 0, r = t.Tn; n < r.length; n++) {
            var i = r[n]; // order by key always matches

            if (!i.field.tt() && null === e.field(i.field)) return !1;
          }

          return !0;
        }(t, e) && function (t, e) {
          for (var n = 0, r = t.filters; n < r.length; n++) {
            if (!r[n].matches(e)) return !1;
          }

          return !0;
        }(t, e) && function (t, e) {
          return !(t.startAt && !ir(t.startAt, qn(t), e)) && (!t.endAt || !ir(t.endAt, qn(t), e));
        }(t, e);
      }

      function Wn(t) {
        return function (e, n) {
          for (var r = !1, i = 0, o = qn(t); i < o.length; i++) {
            var u = o[i],
                s = sr(u, e, n);
            if (0 !== s) return s;
            r = r || u.field.tt();
          }

          return 0;
        };
      }

      var Qn =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this) || this).field = t, i.op = n, i.value = r, i;
        }
        /**
         * Creates a filter based on the provided arguments.
         */


        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.create = function (t, e, r) {
          return t.tt() ? "in"
          /* IN */
          === e || "not-in"
          /* NOT_IN */
          === e ? this.Rn(t, e, r) : new Hn(t, e, r) : "array-contains"
          /* ARRAY_CONTAINS */
          === e ? new Xn(t, r) : "in"
          /* IN */
          === e ? new Zn(t, r) : "not-in"
          /* NOT_IN */
          === e ? new tr(t, r) : "array-contains-any"
          /* ARRAY_CONTAINS_ANY */
          === e ? new er(t, r) : new n(t, e, r);
        }, n.Rn = function (t, e, n) {
          return "in"
          /* IN */
          === e ? new Yn(t, n) : new $n(t, n);
        }, n.prototype.matches = function (t) {
          var e = t.field(this.field); // Types do not have to match in NOT_EQUAL filters.

          return "!="
          /* NOT_EQUAL */
          === this.op ? null !== e && this.Pn(Xt(e, this.value)) : null !== e && Yt(this.value) === Yt(e) && this.Pn(Xt(e, this.value)); // Only compare types with matching backend order (such as double and int).
        }, n.prototype.Pn = function (t) {
          switch (this.op) {
            case "<"
            /* LESS_THAN */
            :
              return t < 0;

            case "<="
            /* LESS_THAN_OR_EQUAL */
            :
              return t <= 0;

            case "=="
            /* EQUAL */
            :
              return 0 === t;

            case "!="
            /* NOT_EQUAL */
            :
              return 0 !== t;

            case ">"
            /* GREATER_THAN */
            :
              return t > 0;

            case ">="
            /* GREATER_THAN_OR_EQUAL */
            :
              return t >= 0;

            default:
              return P();
          }
        }, n.prototype.An = function () {
          return ["<"
          /* LESS_THAN */
          , "<="
          /* LESS_THAN_OR_EQUAL */
          , ">"
          /* GREATER_THAN */
          , ">="
          /* GREATER_THAN_OR_EQUAL */
          , "!="
          /* NOT_EQUAL */
          , "not-in"
          /* NOT_IN */
          ].indexOf(this.op) >= 0;
        }, n;
      }(function () {});

      var Hn =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this, t, n, r) || this).key = Z.it(r.referenceValue), i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.matches = function (t) {
          var e = Z.$(t.key, this.key);
          return this.Pn(e);
        }, n;
      }(Qn),
          Yn =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, t, "in"
          /* IN */
          , n) || this).keys = Jn("in"
          /* IN */
          , n), r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.matches = function (t) {
          return this.keys.some(function (e) {
            return e.isEqual(t.key);
          });
        }, n;
      }(Qn),
          $n =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, t, "not-in"
          /* NOT_IN */
          , n) || this).keys = Jn("not-in"
          /* NOT_IN */
          , n), r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.matches = function (t) {
          return !this.keys.some(function (e) {
            return e.isEqual(t.key);
          });
        }, n;
      }(Qn);
      /** Filter that matches on key fields within an array. */


      function Jn(t, e) {
        var n;
        return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map(function (t) {
          return Z.it(t.referenceValue);
        });
      }
      /** A Filter that implements the array-contains operator. */


      var Xn =
      /** @class */
      function (e) {
        function n(t, n) {
          return e.call(this, t, "array-contains"
          /* ARRAY_CONTAINS */
          , n) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.matches = function (t) {
          var e = t.field(this.field);
          return se(e) && Jt(e.arrayValue, this.value);
        }, n;
      }(Qn),
          Zn =
      /** @class */
      function (e) {
        function n(t, n) {
          return e.call(this, t, "in"
          /* IN */
          , n) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.matches = function (t) {
          var e = t.field(this.field);
          return null !== e && Jt(this.value.arrayValue, e);
        }, n;
      }(Qn),
          tr =
      /** @class */
      function (e) {
        function n(t, n) {
          return e.call(this, t, "not-in"
          /* NOT_IN */
          , n) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.matches = function (t) {
          if (Jt(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
          })) return !1;
          var e = t.field(this.field);
          return null !== e && !Jt(this.value.arrayValue, e);
        }, n;
      }(Qn),
          er =
      /** @class */
      function (e) {
        function n(t, n) {
          return e.call(this, t, "array-contains-any"
          /* ARRAY_CONTAINS_ANY */
          , n) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.matches = function (t) {
          var e = this,
              n = t.field(this.field);
          return !(!se(n) || !n.arrayValue.values) && n.arrayValue.values.some(function (t) {
            return Jt(e.value.arrayValue, t);
          });
        }, n;
      }(Qn),
          nr = function nr(t, e) {
        this.position = t, this.before = e;
      };
      /** A Filter that implements the IN operator. */


      function rr(t) {
        // TODO(b/29183165): Make this collision robust.
        return (t.before ? "b" : "a") + ":" + t.position.map(function (t) {
          return te(t);
        }).join(",");
      }
      /**
       * Returns true if a document sorts before a bound using the provided sort
       * order.
       */


      function ir(t, e, n) {
        for (var r = 0, i = 0; i < t.position.length; i++) {
          var o = e[i],
              u = t.position[i];
          if (r = o.field.tt() ? Z.$(Z.it(u.referenceValue), n.key) : Xt(u, n.field(o.field)), "desc"
          /* DESCENDING */
          === o.dir && (r *= -1), 0 !== r) break;
        }

        return t.before ? r <= 0 : r < 0;
      }

      function or(t, e) {
        if (null === t) return null === e;
        if (null === e) return !1;
        if (t.before !== e.before || t.position.length !== e.position.length) return !1;

        for (var n = 0; n < t.position.length; n++) {
          if (!$t(t.position[n], e.position[n])) return !1;
        }

        return !0;
      }
      /**
       * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
       */


      var ur = function ur(t, e
      /* ASCENDING */
      ) {
        void 0 === e && (e = "asc"), this.field = t, this.dir = e;
      };

      function sr(t, e, n) {
        var r = t.field.tt() ? Z.$(e.key, n.key) : function (t, e, n) {
          var r = e.field(t),
              i = n.field(t);
          return null !== r && null !== i ? Xt(r, i) : P();
        }(t.field, e, n);

        switch (t.dir) {
          case "asc"
          /* ASCENDING */
          :
            return r;

          case "desc"
          /* DESCENDING */
          :
            return -1 * r;

          default:
            return P();
        }
      }

      function ar(t, e) {
        return t.dir === e.dir && t.field.isEqual(e.field);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A batch of mutations that will be sent as one unit to the backend.
       */


      var cr =
      /** @class */
      function () {
        /**
         * @param batchId The unique ID of this mutation batch.
         * @param localWriteTime The original write time of this mutation.
         * @param baseMutations Mutations that are used to populate the base
         * values when this mutation is applied locally. This can be used to locally
         * overwrite values that are persisted in the remote document cache. Base
         * mutations are never sent to the backend.
         * @param mutations The user-provided mutations in this mutation batch.
         * User-provided mutations are applied both locally and remotely on the
         * backend.
         */
        function t(t, e, n, r) {
          this.batchId = t, this.gn = e, this.baseMutations = n, this.mutations = r
          /**
          * Applies all the mutations in this MutationBatch to the specified document
          * to create a new remote document
          *
          * @param docKey The key of the document to apply mutations to.
          * @param maybeDoc The document to apply mutations to.
          * @param batchResult The result of applying the MutationBatch to the
          * backend.
          */
          ;
        }

        return t.prototype.yn = function (t, e, n) {
          for (var r = n.Vn, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            o.key.isEqual(t) && (e = fn(o, e, r[i]));
          }

          return e;
        },
        /**
         * Computes the local view of a document given all the mutations in this
         * batch.
         *
         * @param docKey The key of the document to apply mutations to.
         * @param maybeDoc The document to apply mutations to.
         */
        t.prototype.pn = function (t, e) {
          // First, apply the base state. This allows us to apply non-idempotent
          // transform against a consistent set of values.
          for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            var i = r[n];
            i.key.isEqual(t) && (e = ln(i, e, e, this.gn));
          } // Second, apply all user-provided mutations.


          for (var o = e, u = 0, s = this.mutations; u < s.length; u++) {
            var a = s[u];
            a.key.isEqual(t) && (e = ln(a, e, o, this.gn));
          }

          return e;
        },
        /**
         * Computes the local view for all provided documents given the mutations in
         * this batch.
         */
        t.prototype.vn = function (t) {
          var e = this,
              n = t; // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
          // directly (as done in `applyToLocalView()`), we can reduce the complexity
          // to O(n).

          return this.mutations.forEach(function (r) {
            var i = e.pn(r.key, t.get(r.key));
            i && (n = n.Tt(r.key, i));
          }), n;
        }, t.prototype.keys = function () {
          return this.mutations.reduce(function (t, e) {
            return t.add(e.key);
          }, Dt());
        }, t.prototype.isEqual = function (t) {
          return this.batchId === t.batchId && K(this.mutations, t.mutations, function (t, e) {
            return dn(t, e);
          }) && K(this.baseMutations, t.baseMutations, function (t, e) {
            return dn(t, e);
          });
        }, t;
      }(),
          hr =
      /** @class */
      function () {
        function t(t, e, n,
        /**
         * A pre-computed mapping from each mutated document to the resulting
         * version.
         */
        r) {
          this.batch = t, this.bn = e, this.Vn = n, this.Sn = r
          /**
          * Creates a new MutationBatchResult for the given batch and results. There
          * must be one result for each mutation in the batch. This static factory
          * caches a document=>version mapping (docVersions).
          */
          ;
        }

        return t.from = function (e, n, r) {
          C(e.mutations.length === r.length);

          for (var i = Nt, o = e.mutations, u = 0; u < o.length; u++) {
            i = i.Tt(o[u].key, r[u].version);
          }

          return new t(e, n, r, i);
        }, t;
      }(),
          fr =
      /** @class */
      function () {
        function t(t, e) {
          this.Dn = t, this.Cn = e,
          /**
               * The inner map for a key -> value pair. Due to the possibility of
               * collisions we keep a list of entries that we do a linear search through
               * to find an actual match. Note that collisions should be rare, so we still
               * expect near constant time lookups in practice.
               */
          this.Nn = {}
          /** Get a value for this key, or undefined if it does not exist. */
          ;
        }

        return t.prototype.get = function (t) {
          var e = this.Dn(t),
              n = this.Nn[e];
          if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r],
                u = o[0],
                s = o[1];
            if (this.Cn(u, t)) return s;
          }
        }, t.prototype.has = function (t) {
          return void 0 !== this.get(t);
        },
        /** Put this key and value in the map. */
        t.prototype.set = function (t, e) {
          var n = this.Dn(t),
              r = this.Nn[n];

          if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) {
              if (this.Cn(r[i][0], t)) return void (r[i] = [t, e]);
            }

            r.push([t, e]);
          } else this.Nn[n] = [[t, e]];
        },
        /**
         * Remove this key from the map. Returns a boolean if anything was deleted.
         */
        t.prototype["delete"] = function (t) {
          var e = this.Dn(t),
              n = this.Nn[e];
          if (void 0 === n) return !1;

          for (var r = 0; r < n.length; r++) {
            if (this.Cn(n[r][0], t)) return 1 === n.length ? delete this.Nn[e] : n.splice(r, 1), !0;
          }

          return !1;
        }, t.prototype.forEach = function (t) {
          Bt(this.Nn, function (e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
              var o = i[r],
                  u = o[0],
                  s = o[1];
              t(u, s);
            }
          });
        }, t.prototype.W = function () {
          return Gt(this.Nn);
        }, t;
      }(),
          lr =
      /** @class */
      function () {
        function t(t) {
          var e = this; // NOTE: next/catchCallback will always point to our own wrapper functions,
          // not the user's raw next() or catch() callbacks.

          this.xn = null, this.Fn = null, // When the operation resolves, we'll set result or error and mark isDone.
          this.result = void 0, this.error = void 0, this.On = !1, // Set to true when .then() or .catch() are called and prevents additional
          // chaining.
          this.Mn = !1, t(function (t) {
            e.On = !0, e.result = t, e.xn && // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.xn(t);
          }, function (t) {
            e.On = !0, e.error = t, e.Fn && e.Fn(t);
          });
        }

        return t.prototype["catch"] = function (t) {
          return this.next(void 0, t);
        }, t.prototype.next = function (e, n) {
          var r = this;
          return this.Mn && P(), this.Mn = !0, this.On ? this.error ? this.kn(n, this.error) : this.$n(e, this.result) : new t(function (t, i) {
            r.xn = function (n) {
              r.$n(e, n).next(t, i);
            }, r.Fn = function (e) {
              r.kn(n, e).next(t, i);
            };
          });
        }, t.prototype.Ln = function () {
          var t = this;
          return new Promise(function (e, n) {
            t.next(e, n);
          });
        }, t.prototype.Bn = function (e) {
          try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
          } catch (e) {
            return t.reject(e);
          }
        }, t.prototype.$n = function (e, n) {
          return e ? this.Bn(function () {
            return e(n);
          }) : t.resolve(n);
        }, t.prototype.kn = function (e, n) {
          return e ? this.Bn(function () {
            return e(n);
          }) : t.reject(n);
        }, t.resolve = function (e) {
          return new t(function (t, n) {
            t(e);
          });
        }, t.reject = function (e) {
          return new t(function (t, n) {
            n(e);
          });
        }, t.qn = function ( // Accept all Promise types in waitFor().
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        e) {
          return new t(function (t, n) {
            var r = 0,
                i = 0,
                o = !1;
            e.forEach(function (e) {
              ++r, e.next(function () {
                ++i, o && i === r && t();
              }, function (t) {
                return n(t);
              });
            }), o = !0, i === r && t();
          });
        },
        /**
         * Given an array of predicate functions that asynchronously evaluate to a
         * boolean, implements a short-circuiting `or` between the results. Predicates
         * will be evaluated until one of them returns `true`, then stop. The final
         * result will be whether any of them returned `true`.
         */
        t.Un = function (e) {
          for (var n = t.resolve(!1), r = function r(e) {
            n = n.next(function (n) {
              return n ? t.resolve(n) : e();
            });
          }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
          }

          return n;
        }, t.forEach = function (t, e) {
          var n = this,
              r = [];
          return t.forEach(function (t, i) {
            r.push(e.call(n, t, i));
          }), this.qn(r);
        }, t;
      }(),
          pr =
      /** @class */
      function () {
        function t() {
          // A mapping of document key to the new cache entry that should be written (or null if any
          // existing cache entry should be removed).
          this.Qn = new fr(function (t) {
            return t.toString();
          }, function (t, e) {
            return t.isEqual(e);
          }), this.Kn = !1;
        }

        return t.prototype.Wn = function (t) {
          var e = this.Qn.get(t);
          return e ? e.readTime : H.min();
        },
        /**
         * Buffers a `RemoteDocumentCache.addEntry()` call.
         *
         * You can only modify documents that have already been retrieved via
         * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
         */
        t.prototype.jn = function (t, e) {
          this.Gn(), this.Qn.set(t.key, {
            zn: t,
            readTime: e
          });
        },
        /**
         * Buffers a `RemoteDocumentCache.removeEntry()` call.
         *
         * You can only remove documents that have already been retrieved via
         * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
         */
        t.prototype.Hn = function (t, e) {
          void 0 === e && (e = null), this.Gn(), this.Qn.set(t, {
            zn: null,
            readTime: e
          });
        },
        /**
         * Looks up an entry in the cache. The buffered changes will first be checked,
         * and if no buffered change applies, this will forward to
         * `RemoteDocumentCache.getEntry()`.
         *
         * @param transaction The transaction in which to perform any persistence
         *     operations.
         * @param documentKey The key of the entry to look up.
         * @return The cached Document or NoDocument entry, or null if we have nothing
         * cached.
         */
        t.prototype.Jn = function (t, e) {
          this.Gn();
          var n = this.Qn.get(e);
          return void 0 !== n ? lr.resolve(n.zn) : this.Yn(t, e);
        },
        /**
         * Looks up several entries in the cache, forwarding to
         * `RemoteDocumentCache.getEntry()`.
         *
         * @param transaction The transaction in which to perform any persistence
         *     operations.
         * @param documentKeys The keys of the entries to look up.
         * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
         *     entry cannot be found, the corresponding key will be mapped to a null
         *     value.
         */
        t.prototype.getEntries = function (t, e) {
          return this.Xn(t, e);
        },
        /**
         * Applies buffered changes to the underlying RemoteDocumentCache, using
         * the provided transaction.
         */
        t.prototype.apply = function (t) {
          return this.Gn(), this.Kn = !0, this.Zn(t);
        },
        /** Helper to assert this.changes is not null  */
        t.prototype.Gn = function () {}, t;
      }(),
          dr = function dr() {
        var t = this;
        this.promise = new Promise(function (e, n) {
          t.resolve = e, t.reject = n;
        });
      };
      /** The result of applying a mutation batch to the backend. */

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function vr(t) {
        return new pe(t,
        /* useProto3Json= */
        !0);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function yr(t) {
        /**
        * Returns true if obj is an object and contains at least one of the specified
        * methods.
        */
        return function (t, e) {
          if ("object" != typeof t || null === t) return !1;

          for (var n = t, r = 0, i = ["next", "error", "complete"]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
          }

          return !1;
        }(t);
      }

      var mr = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
          gr =
      /** @class */
      function () {
        function t() {
          this.ts = [];
        }

        return t.prototype.es = function (t) {
          this.ts.push(t);
        }, t.prototype.ns = function () {
          this.ts.forEach(function (t) {
            return t();
          });
        }, t;
      }(),
          wr =
      /** @class */
      function () {
        function t(t, e, n) {
          this.ss = t, this.rs = e, this.os = n
          /**
          * Get the local view of the document identified by `key`.
          *
          * @return Local view of the document or null if we don't have any cached
          * state for it.
          */
          ;
        }

        return t.prototype.cs = function (t, e) {
          var n = this;
          return this.rs.us(t, e).next(function (r) {
            return n.hs(t, e, r);
          });
        },
        /** Internal version of `getDocument` that allows reusing batches. */
        t.prototype.hs = function (t, e, n) {
          return this.ss.Jn(t, e).next(function (t) {
            for (var r = 0, i = n; r < i.length; r++) {
              t = i[r].pn(e, t);
            }

            return t;
          });
        }, // Returns the view of the given `docs` as they would appear after applying
        // all mutations in the given `batches`.
        t.prototype.ls = function (t, e, n) {
          var r = It();
          return e.forEach(function (t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
              e = o[i].pn(t, e);
            }

            r = r.Tt(t, e);
          }), r;
        },
        /**
         * Gets the local view of the documents identified by `keys`.
         *
         * If we don't have cached state for a document in `keys`, a NoDocument will
         * be stored for that key in the resulting set.
         */
        t.prototype._s = function (t, e) {
          var n = this;
          return this.ss.getEntries(t, e).next(function (e) {
            return n.fs(t, e);
          });
        },
        /**
         * Similar to `getDocuments`, but creates the local view from the given
         * `baseDocs` without retrieving documents from the local store.
         */
        t.prototype.fs = function (t, e) {
          var n = this;
          return this.rs.ds(t, e).next(function (r) {
            var i = n.ls(t, e, r),
                o = _t();

            return i.forEach(function (t, e) {
              // TODO(http://b/32275378): Don't conflate missing / deleted.
              e || (e = new kn(t, H.min())), o = o.Tt(t, e);
            }), o;
          });
        },
        /**
         * Performs a query against the local view of all documents.
         *
         * @param transaction The persistence transaction.
         * @param query The query to match documents against.
         * @param sinceReadTime If not set to SnapshotVersion.min(), return only
         *     documents that have been read since this snapshot version (exclusive).
         */
        t.prototype.ws = function (t, e, n) {
          /**
          * Returns whether the query matches a single document by path (rather than a
          * collection).
          */
          return function (t) {
            return Z.ot(t.path) && null === t.collectionGroup && 0 === t.filters.length;
          }(e) ? this.Es(t, e.path) : Mn(e) ? this.Ts(t, e, n) : this.Is(t, e, n);
        }, t.prototype.Es = function (t, e) {
          // Just do a simple document lookup.
          return this.cs(t, new Z(e)).next(function (t) {
            var e = Tt();
            return t instanceof xn && (e = e.Tt(t.key, t)), e;
          });
        }, t.prototype.Ts = function (t, e, n) {
          var r = this,
              i = e.collectionGroup,
              o = Tt();
          return this.os.As(t, i).next(function (u) {
            return lr.forEach(u, function (u) {
              var s = function (t, e) {
                return new Sn(e,
                /*collectionGroup=*/
                null, t.Tn.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
              }(e, u.child(i));

              return r.Is(t, s, n).next(function (t) {
                t.forEach(function (t, e) {
                  o = o.Tt(t, e);
                });
              });
            }).next(function () {
              return o;
            });
          });
        }, t.prototype.Is = function (t, e, n) {
          var r,
              i,
              o = this; // Query the remote documents and overlay mutations.

          return this.ss.ws(t, e, n).next(function (n) {
            return r = n, o.rs.Rs(t, e);
          }).next(function (e) {
            return i = e, o.Ps(t, i, r).next(function (t) {
              r = t;

              for (var e = 0, n = i; e < n.length; e++) {
                for (var o = n[e], u = 0, s = o.mutations; u < s.length; u++) {
                  var a = s[u],
                      c = a.key,
                      h = r.get(c),
                      f = ln(a, h, h, o.gn);
                  r = f instanceof xn ? r.Tt(c, f) : r.remove(c);
                }
              }
            });
          }).next(function () {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach(function (t, n) {
              Kn(e, n) || (r = r.remove(t));
            }), r;
          });
        }, t.prototype.Ps = function (t, e, n) {
          for (var r = Dt(), i = 0, o = e; i < o.length; i++) {
            for (var u = 0, s = o[i].mutations; u < s.length; u++) {
              var a = s[u];
              a instanceof mn && null === n.get(a.key) && (r = r.add(a.key));
            }
          }

          var c = n;
          return this.ss.getEntries(t, r).next(function (t) {
            return t.forEach(function (t, e) {
              null !== e && e instanceof xn && (c = c.Tt(t, e));
            }), c;
          });
        }, t;
      }(),
          br =
      /** @class */
      function () {
        function t(t, e, n, r) {
          this.targetId = t, this.fromCache = e, this.gs = n, this.ys = r;
        }

        return t.Vs = function (e, n) {
          for (var r = Dt(), i = Dt(), o = 0, u = n.docChanges; o < u.length; o++) {
            var s = u[o];

            switch (s.type) {
              case 0
              /* Added */
              :
                r = r.add(s.doc.key);
                break;

              case 1
              /* Removed */
              :
                i = i.add(s.doc.key);
              // do nothing
            }
          }

          return new t(e, n.fromCache, r, i);
        }, t;
      }(),
          _r =
      /** @class */
      function () {
        function t(t, e) {
          var n = this;
          this.previousValue = t, e && (e.ps = function (t) {
            return n.vs(t);
          }, this.bs = function (t) {
            return e.Ss(t);
          });
        }

        return t.prototype.vs = function (t) {
          return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
        }, t.prototype.next = function () {
          var t = ++this.previousValue;
          return this.bs && this.bs(t), t;
        }, t;
      }();
      /**
       * A base class representing a persistence transaction, encapsulating both the
       * transaction's sequence numbers as well as a list of onCommitted listeners.
       *
       * When you call Persistence.runTransaction(), it will create a transaction and
       * pass it to your callback. You then pass it to any method that operates
       * on persistence.
       */


      _r.Ds = -1;
      /**
       * A helper for running delayed tasks following an exponential backoff curve
       * between attempts.
       *
       * Each delay is made up of a "base" delay which follows the exponential
       * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
       * base delay. This prevents clients from accidentally synchronizing their
       * delays causing spikes of load to the backend.
       */

      var Ir =
      /** @class */
      function () {
        function t(
        /**
         * The AsyncQueue to run backoff operations on.
         */
        t,
        /**
         * The ID to use when scheduling backoff operations on the AsyncQueue.
         */
        e,
        /**
         * The initial delay (used as the base delay on the first retry attempt).
         * Note that jitter will still be applied, so the actual delay could be as
         * little as 0.5*initialDelayMs.
         */
        n
        /**
         * The multiplier to use to determine the extended base delay after each
         * attempt.
         */
        , r
        /**
         * The maximum base delay after which no further backoff is performed.
         * Note that jitter will still be applied, so the actual delay could be as
         * much as 1.5*maxDelayMs.
         */
        , i) {
          void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.Cs = t, this.Ns = e, this.xs = n, this.Fs = r, this.Os = i, this.Ms = 0, this.ks = null,
          /** The last backoff attempt, as epoch milliseconds. */
          this.$s = Date.now(), this.reset();
        }
        /**
         * Resets the backoff delay.
         *
         * The very next backoffAndWait() will have no delay. If it is called again
         * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
         * subsequent ones will increase according to the backoffFactor.
         */


        return t.prototype.reset = function () {
          this.Ms = 0;
        },
        /**
         * Resets the backoff delay to the maximum delay (e.g. for use after a
         * RESOURCE_EXHAUSTED error).
         */
        t.prototype.Ls = function () {
          this.Ms = this.Os;
        },
        /**
         * Returns a promise that resolves after currentDelayMs, and increases the
         * delay for any subsequent attempts. If there was a pending backoff operation
         * already, it will be canceled.
         */
        t.prototype.Bs = function (t) {
          var e = this; // Cancel any pending backoff operation.

          this.cancel(); // First schedule using the current base (which may be 0 and should be
          // honored as such).

          var n = Math.floor(this.Ms + this.qs()),
              r = Math.max(0, Date.now() - this.$s),
              i = Math.max(0, n - r); // Guard against lastAttemptTime being in the future due to a clock change.

          i > 0 && x("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Ms + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.ks = this.Cs.Us(this.Ns, i, function () {
            return e.$s = Date.now(), t();
          }), // Apply backoff factor to determine next delay and ensure it is within
          // bounds.
          this.Ms *= this.Fs, this.Ms < this.xs && (this.Ms = this.xs), this.Ms > this.Os && (this.Ms = this.Os);
        }, t.prototype.Qs = function () {
          null !== this.ks && (this.ks.Ks(), this.ks = null);
        }, t.prototype.cancel = function () {
          null !== this.ks && (this.ks.cancel(), this.ks = null);
        },
        /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
        t.prototype.qs = function () {
          return (Math.random() - .5) * this.Ms;
        }, t;
      }(),
          Er =
      /** @class */
      function () {
        /*
         * Creates a new SimpleDb wrapper for IndexedDb database `name`.
         *
         * Note that `version` must not be a downgrade. IndexedDB does not support
         * downgrading the schema version. We currently do not support any way to do
         * versioning outside of IndexedDB's versioning mechanism, as only
         * version-upgrade transactions are allowed to do things like create
         * objectstores.
         */
        function t(e, n, r) {
          this.name = e, this.version = n, this.Ws = r, // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
          // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
          // whatever reason it's much harder to hit after 12.2 so we only proactively
          // log on 12.2.
          12.2 === t.js(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["getUA"])()) && k("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
        }
        /** Deletes the specified database. */


        return t["delete"] = function (t) {
          return x("SimpleDb", "Removing database:", t), kr(window.indexedDB.deleteDatabase(t)).Ln();
        },
        /** Returns true if IndexedDB is available in the current environment. */
        t.Gs = function () {
          if ("undefined" == typeof indexedDB) return !1;
          if (t.zs()) return !0; // We extensively use indexed array values and compound keys,
          // which IE and Edge do not support. However, they still have indexedDB
          // defined on the window, so we need to check for them here and make sure
          // to return that persistence is not enabled for those browsers.
          // For tracking support of this feature, see here:
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
          // Check the UA string to find out the browser.

          var e = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["getUA"])(),
              n = t.js(e),
              r = 0 < n && n < 10,
              i = t.Hs(e),
              o = 0 < i && i < 4.5; // IE 10
          // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
          // IE 11
          // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
          // Edge
          // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
          // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
          // iOS Safari: Disable for users running iOS version < 10.

          return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || r || o);
        },
        /**
         * Returns true if the backing IndexedDB store is the Node IndexedDBShim
         * (see https://github.com/axemclion/IndexedDBShim).
         */
        t.zs = function () {
          var t;
          return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.Js);
        },
        /** Helper to get a typed SimpleDbStore from a transaction. */
        t.Ys = function (t, e) {
          return t.store(e);
        }, // visible for testing

        /** Parse User Agent to determine iOS version. Returns -1 if not found. */
        t.js = function (t) {
          var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
              n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
          return Number(n);
        }, // visible for testing

        /** Parse User Agent to determine Android version. Returns -1 if not found. */
        t.Hs = function (t) {
          var e = t.match(/Android ([\d.]+)/i),
              n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
          return Number(n);
        },
        /**
         * Opens the specified database, creating or upgrading it if necessary.
         */
        t.prototype.Xs = function (t) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e,
                r = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return this.db ? [3
                  /*break*/
                  , 2] : (x("SimpleDb", "Opening database:", this.name), e = this, [4
                  /*yield*/
                  , new Promise(function (e, n) {
                    // TODO(mikelehen): Investigate browser compatibility.
                    // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
                    // suggests IE9 and older WebKit browsers handle upgrade
                    // differently. They expect setVersion, as described here:
                    // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
                    var i = indexedDB.open(r.name, r.version);
                    i.onsuccess = function (t) {
                      var n = t.target.result;
                      e(n);
                    }, i.onblocked = function () {
                      n(new Nr(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
                    }, i.onerror = function (e) {
                      var r = e.target.error;
                      "VersionError" === r.name ? n(new L(V.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : n(new Nr(t, r));
                    }, i.onupgradeneeded = function (t) {
                      x("SimpleDb", 'Database "' + r.name + '" requires upgrade from version:', t.oldVersion);
                      var e = t.target.result;
                      r.Ws.createOrUpgrade(e, i.transaction, t.oldVersion, r.version).next(function () {
                        x("SimpleDb", "Database upgrade to version " + r.version + " complete");
                      });
                    };
                  })]);

                case 1:
                  e.db = n.sent(), n.label = 2;

                case 2:
                  return [2
                  /*return*/
                  , (this.Zs && (this.db.onversionchange = function (t) {
                    return r.Zs(t);
                  }), this.db)];
              }
            });
          });
        }, t.prototype.ti = function (t) {
          this.Zs = t, this.db && (this.db.onversionchange = function (e) {
            return t(e);
          });
        }, t.prototype.runTransaction = function (t, r, i, o) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e, u, s, a, c;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (h) {
              switch (h.label) {
                case 0:
                  e = "readonly" === r, u = 0, s = function s() {
                    var r, s, c, h, f;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                      switch (n.label) {
                        case 0:
                          ++u, n.label = 1;

                        case 1:
                          return n.trys.push([1, 4,, 5]), [4
                          /*yield*/
                          , a.Xs(t)];

                        case 2:
                          // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                          // fire), but still return the original transactionFnResult back to the
                          // caller.
                          return a.db = n.sent(), r = Dr.open(a.db, t, e ? "readonly" : "readwrite", i), s = o(r)["catch"](function (t) {
                            // Abort the transaction if there was an error.
                            return r.abort(t), lr.reject(t);
                          }).Ln(), c = {}, s["catch"](function () {}), [4
                          /*yield*/
                          , r.ei];

                        case 3:
                          return [2
                          /*return*/
                          , (c.value = ( // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                          // fire), but still return the original transactionFnResult back to the
                          // caller.
                          n.sent(), s), c)];

                        case 4:
                          return h = n.sent(), f = "FirebaseError" !== h.name && u < 3, x("SimpleDb", "Transaction failed with error:", h.message, "Retrying:", f), a.close(), f ? [3
                          /*break*/
                          , 5] : [2
                          /*return*/
                          , {
                            value: Promise.reject(h)
                          }];

                        case 5:
                          return [2
                          /*return*/
                          ];
                      }
                    });
                  }, a = this, h.label = 1;

                case 1:
                  return [5
                  /*yield**/
                  , s()];

                case 2:
                  if ("object" == typeof (c = h.sent())) return [2
                  /*return*/
                  , c.value];
                  h.label = 3;

                case 3:
                  return [3
                  /*break*/
                  , 1];

                case 4:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }, t.prototype.close = function () {
          this.db && this.db.close(), this.db = void 0;
        }, t;
      }(),
          Tr =
      /** @class */
      function () {
        function t(t) {
          this.ni = t, this.si = !1, this.ii = null;
        }

        return Object.defineProperty(t.prototype, "On", {
          get: function get() {
            return this.si;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "ri", {
          get: function get() {
            return this.ii;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "cursor", {
          set: function set(t) {
            this.ni = t;
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * This function can be called to stop iteration at any point.
         */
        t.prototype.done = function () {
          this.si = !0;
        },
        /**
         * This function can be called to skip to that next key, which could be
         * an index or a primary key.
         */
        t.prototype.oi = function (t) {
          this.ii = t;
        },
        /**
         * Delete the current cursor value from the object store.
         *
         * NOTE: You CANNOT do this with a keysOnly query.
         */
        t.prototype["delete"] = function () {
          return kr(this.ni["delete"]());
        }, t;
      }(),
          Nr =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, V.UNAVAILABLE, "IndexedDB transaction '" + t + "' failed: " + n) || this).name = "IndexedDbTransactionError", r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(L);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // References to `window` are guarded by SimpleDb.isAvailable()

      /* eslint-disable no-restricted-globals */

      /**
       * Provides a wrapper around IndexedDb with a simplified interface that uses
       * Promise-like return values to chain operations. Real promises cannot be used
       * since .then() continuations are executed asynchronously (e.g. via
       * .setImmediate), which would cause IndexedDB to end the transaction.
       * See PersistencePromise for more details.
       */

      /** Verifies whether `e` is an IndexedDbTransactionError. */


      function Ar(t) {
        // Use name equality, as instanceof checks on errors don't work with errors
        // that wrap other errors.
        return "IndexedDbTransactionError" === t.name;
      }
      /**
       * Wraps an IDBTransaction and exposes a store() method to get a handle to a
       * specific object store.
       */


      var Dr =
      /** @class */
      function () {
        function t(t, e) {
          var n = this;
          this.action = t, this.transaction = e, this.aborted = !1,
          /**
               * A promise that resolves with the result of the IndexedDb transaction.
               */
          this.ci = new dr(), this.transaction.oncomplete = function () {
            n.ci.resolve();
          }, this.transaction.onabort = function () {
            e.error ? n.ci.reject(new Nr(t, e.error)) : n.ci.resolve();
          }, this.transaction.onerror = function (e) {
            var r = Sr(e.target.error);
            n.ci.reject(new Nr(t, r));
          };
        }

        return t.open = function (e, n, r, i) {
          try {
            return new t(n, e.transaction(i, r));
          } catch (e) {
            throw new Nr(n, e);
          }
        }, Object.defineProperty(t.prototype, "ei", {
          get: function get() {
            return this.ci.promise;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.abort = function (t) {
          t && this.ci.reject(t), this.aborted || (x("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort());
        },
        /**
         * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
         * operations performed on the SimpleDbStore happen within the context of this
         * transaction and it cannot be used anymore once the transaction is
         * completed.
         *
         * Note that we can't actually enforce that the KeyType and ValueType are
         * correct, but they allow type safety through the rest of the consuming code.
         */
        t.prototype.store = function (t) {
          var e = this.transaction.objectStore(t);
          return new xr(e);
        }, t;
      }(),
          xr =
      /** @class */
      function () {
        function t(t) {
          this.store = t;
        }

        return t.prototype.put = function (t, e) {
          var n;
          return void 0 !== e ? (x("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (x("SimpleDb", "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), kr(n);
        },
        /**
         * Adds a new value into an Object Store and returns the new key. Similar to
         * IndexedDb's `add()`, this method will fail on primary key collisions.
         *
         * @param value The object to write.
         * @return The key of the value to add.
         */
        t.prototype.add = function (t) {
          return x("SimpleDb", "ADD", this.store.name, t, t), kr(this.store.add(t));
        },
        /**
         * Gets the object with the specified key from the specified store, or null
         * if no object exists with the specified key.
         *
         * @key The key of the object to get.
         * @return The object with the specified key or null if no object exists.
         */
        t.prototype.get = function (t) {
          var e = this; // We're doing an unsafe cast to ValueType.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any

          return kr(this.store.get(t)).next(function (n) {
            // Normalize nonexistence to null.
            return void 0 === n && (n = null), x("SimpleDb", "GET", e.store.name, t, n), n;
          });
        }, t.prototype["delete"] = function (t) {
          return x("SimpleDb", "DELETE", this.store.name, t), kr(this.store["delete"](t));
        },
        /**
         * If we ever need more of the count variants, we can add overloads. For now,
         * all we need is to count everything in a store.
         *
         * Returns the number of rows in the store.
         */
        t.prototype.count = function () {
          return x("SimpleDb", "COUNT", this.store.name), kr(this.store.count());
        }, t.prototype.ui = function (t, e) {
          var n = this.cursor(this.options(t, e)),
              r = [];
          return this.ai(n, function (t, e) {
            r.push(e);
          }).next(function () {
            return r;
          });
        }, t.prototype.hi = function (t, e) {
          x("SimpleDb", "DELETE ALL", this.store.name);
          var n = this.options(t, e);
          n.li = !1;
          var r = this.cursor(n);
          return this.ai(r, function (t, e, n) {
            return n["delete"]();
          });
        }, t.prototype._i = function (t, e) {
          var n;
          e ? n = t : (n = {}, e = t);
          var r = this.cursor(n);
          return this.ai(r, e);
        },
        /**
         * Iterates over a store, but waits for the given callback to complete for
         * each entry before iterating the next entry. This allows the callback to do
         * asynchronous work to determine if this iteration should continue.
         *
         * The provided callback should return `true` to continue iteration, and
         * `false` otherwise.
         */
        t.prototype.fi = function (t) {
          var e = this.cursor({});
          return new lr(function (n, r) {
            e.onerror = function (t) {
              var e = Sr(t.target.error);
              r(e);
            }, e.onsuccess = function (e) {
              var r = e.target.result;
              r ? t(r.primaryKey, r.value).next(function (t) {
                t ? r["continue"]() : n();
              }) : n();
            };
          });
        }, t.prototype.ai = function (t, e) {
          var n = [];
          return new lr(function (r, i) {
            t.onerror = function (t) {
              i(t.target.error);
            }, t.onsuccess = function (t) {
              var i = t.target.result;

              if (i) {
                var o = new Tr(i),
                    u = e(i.primaryKey, i.value, o);

                if (u instanceof lr) {
                  var s = u["catch"](function (t) {
                    return o.done(), lr.reject(t);
                  });
                  n.push(s);
                }

                o.On ? r() : null === o.ri ? i["continue"]() : i["continue"](o.ri);
              } else r();
            };
          }).next(function () {
            return lr.qn(n);
          });
        }, t.prototype.options = function (t, e) {
          var n = void 0;
          return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
            index: n,
            range: e
          };
        }, t.prototype.cursor = function (t) {
          var e = "next";

          if (t.reverse && (e = "prev"), t.index) {
            var n = this.store.index(t.index);
            return t.li ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
          }

          return this.store.openCursor(t.range, e);
        }, t;
      }();
      /**
       * A wrapper around an IDBObjectStore providing an API that:
       *
       * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
       * methods for acting against the object store.
       * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
       * method return a PersistencePromise instead.
       * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
       * intermediate IndexedDB types (IDBCursorWithValue, etc.)
       */

      /**
       * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
       * handlers to resolve / reject the PersistencePromise as appropriate.
       */


      function kr(t) {
        return new lr(function (e, n) {
          t.onsuccess = function (t) {
            var n = t.target.result;
            e(n);
          }, t.onerror = function (t) {
            var e = Sr(t.target.error);
            n(e);
          };
        });
      } // Guard so we only report the error once.


      var Or = !1;

      function Sr(t) {
        var e = Er.js(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["getUA"])());

        if (e >= 12.2 && e < 13) {
          var n = "An internal error was encountered in the Indexed Database server";

          if (t.message.indexOf(n) >= 0) {
            // Wrap error in a more descriptive one.
            var r = new L("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return Or || (Or = !0, // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout(function () {
              throw r;
            }, 0)), r;
          }
        }

        return t;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** The Platform's 'window' implementation or null if not available. */


      function Pr() {
        // `window` is not always available, e.g. in ReactNative and WebWorkers.
        // eslint-disable-next-line no-restricted-globals
        return "undefined" != typeof window ? window : null;
      }
      /** The Platform's 'document' implementation or null if not available. */


      function Cr() {
        // `document` is not always available, e.g. in ReactNative and WebWorkers.
        // eslint-disable-next-line no-restricted-globals
        return "undefined" != typeof document ? document : null;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Represents an operation scheduled to be run in the future on an AsyncQueue.
       *
       * It is created via DelayedOperation.createAndSchedule().
       *
       * Supports cancellation (via cancel()) and early execution (via skipDelay()).
       *
       * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
       * in newer versions of TypeScript defines `finally`, which is not available in
       * IE.
       */


      var Rr =
      /** @class */
      function () {
        function t(t, e, n, r, i) {
          this.di = t, this.Ns = e, this.wi = n, this.op = r, this.Ei = i, this.Ti = new dr(), this.then = this.Ti.promise.then.bind(this.Ti.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
          // and so we attach a dummy catch callback to avoid
          // 'UnhandledPromiseRejectionWarning' log spam.
          this.Ti.promise["catch"](function (t) {})
          /**
          * Creates and returns a DelayedOperation that has been scheduled to be
          * executed on the provided asyncQueue after the provided delayMs.
          *
          * @param asyncQueue The queue to schedule the operation on.
          * @param id A Timer ID identifying the type of operation this is.
          * @param delayMs The delay (ms) before the operation should be scheduled.
          * @param op The operation to run.
          * @param removalCallback A callback to be called synchronously once the
          *   operation is executed or canceled, notifying the AsyncQueue to remove it
          *   from its delayedOperations list.
          *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
          *   the DelayedOperation class public.
          */
          ;
        }

        return t.Ii = function (e, n, r, i, o) {
          var u = new t(e, n, Date.now() + r, i, o);
          return u.start(r), u;
        },
        /**
         * Starts the timer. This is called immediately after construction by
         * createAndSchedule().
         */
        t.prototype.start = function (t) {
          var e = this;
          this.mi = setTimeout(function () {
            return e.Ai();
          }, t);
        },
        /**
         * Queues the operation to run immediately (if it hasn't already been run or
         * canceled).
         */
        t.prototype.Ks = function () {
          return this.Ai();
        },
        /**
         * Cancels the operation if it hasn't already been executed or canceled. The
         * promise will be rejected.
         *
         * As long as the operation has not yet been run, calling cancel() provides a
         * guarantee that the operation will not be run.
         */
        t.prototype.cancel = function (t) {
          null !== this.mi && (this.clearTimeout(), this.Ti.reject(new L(V.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
        }, t.prototype.Ai = function () {
          var t = this;
          this.di.Ri(function () {
            return null !== t.mi ? (t.clearTimeout(), t.op().then(function (e) {
              return t.Ti.resolve(e);
            })) : Promise.resolve();
          });
        }, t.prototype.clearTimeout = function () {
          null !== this.mi && (this.Ei(this), clearTimeout(this.mi), this.mi = null);
        }, t;
      }(),
          Vr =
      /** @class */
      function () {
        function t() {
          var t = this; // The last promise in the queue.

          this.Pi = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
          // retried with backoff.
          this.gi = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
          // be changed again.
          this.yi = !1, // Operations scheduled to be queued in the future. Operations are
          // automatically removed after they are run or canceled.
          this.Vi = [], // visible for testing
          this.pi = null, // Flag set while there's an outstanding AsyncQueue operation, used for
          // assertion sanity-checks.
          this.vi = !1, // List of TimerIds to fast-forward delays for.
          this.bi = [], // Backoff timer used to schedule retries for retryable operations
          this.Si = new Ir(this, "async_queue_retry"
          /* AsyncQueueRetry */
          ), // Visibility handler that triggers an immediate retry of all retryable
          // operations. Meant to speed up recovery when we regain file system access
          // after page comes into foreground.
          this.Di = function () {
            var e = Cr();
            e && x("AsyncQueue", "Visibility state changed to " + e.visibilityState), t.Si.Qs();
          };
          var e = Cr();
          e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Di);
        }

        return Object.defineProperty(t.prototype, "Ci", {
          // Is this AsyncQueue being shut down? If true, this instance will not enqueue
          // any new operations, Promises from enqueue requests will not resolve.
          get: function get() {
            return this.yi;
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * Adds a new operation to the queue without waiting for it to complete (i.e.
         * we ignore the Promise result).
         */
        t.prototype.Ri = function (t) {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.enqueue(t);
        },
        /**
         * Regardless if the queue has initialized shutdown, adds a new operation to the
         * queue without waiting for it to complete (i.e. we ignore the Promise result).
         */
        t.prototype.Ni = function (t) {
          this.xi(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.Fi(t);
        },
        /**
         * Initialize the shutdown of this queue. Once this method is called, the
         * only possible way to request running an operation is through
         * `enqueueEvenWhileRestricted()`.
         */
        t.prototype.Oi = function () {
          if (!this.yi) {
            this.yi = !0;
            var t = Cr();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Di);
          }
        },
        /**
         * Adds a new operation to the queue. Returns a promise that will be resolved
         * when the promise returned by the new operation is (with its value).
         */
        t.prototype.enqueue = function (t) {
          return this.xi(), this.yi ? new Promise(function (t) {}) : this.Fi(t);
        },
        /**
         * Enqueue a retryable operation.
         *
         * A retryable operation is rescheduled with backoff if it fails with a
         * IndexedDbTransactionError (the error type used by SimpleDb). All
         * retryable operations are executed in order and only run if all prior
         * operations were retried successfully.
         */
        t.prototype.Mi = function (t) {
          var e = this;
          this.Ri(function () {
            return e.gi.push(t), e.ki();
          });
        },
        /**
         * Runs the next operation from the retryable queue. If the operation fails,
         * reschedules with backoff.
         */
        t.prototype.ki = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var t,
                e = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  if (0 === this.gi.length) return [3
                  /*break*/
                  , 5];
                  n.label = 1;

                case 1:
                  return n.trys.push([1, 3,, 4]), [4
                  /*yield*/
                  , this.gi[0]()];

                case 2:
                  return n.sent(), this.gi.shift(), this.Si.reset(), [3
                  /*break*/
                  , 4];

                case 3:
                  if (!Ar(t = n.sent())) throw t; // Failure will be handled by AsyncQueue

                  return x("AsyncQueue", "Operation failed with retryable error: " + t), [3
                  /*break*/
                  , 4];

                case 4:
                  this.gi.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
                  // This is necessary to run retryable operations that failed during
                  // their initial attempt since we don't know whether they are already
                  // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                  // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                  // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                  // call scheduled here.
                  // Since `backoffAndRun()` cancels an existing backoff and schedules a
                  // new backoff on every call, there is only ever a single additional
                  // operation in the queue.
                  this.Si.Bs(function () {
                    return e.ki();
                  }), n.label = 5;

                case 5:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }, t.prototype.Fi = function (t) {
          var e = this,
              n = this.Pi.then(function () {
            return e.vi = !0, t()["catch"](function (t) {
              // Re-throw the error so that this.tail becomes a rejected Promise and
              // all further attempts to chain (via .then) will just short-circuit
              // and return the rejected Promise.
              throw e.pi = t, e.vi = !1, k("INTERNAL UNHANDLED ERROR: ",
              /**
              * Chrome includes Error.message in Error.stack. Other browsers do not.
              * This returns expected output of message + stack when available.
              * @param error Error or FirestoreError
              */
              function (t) {
                var e = t.message || "";
                return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), e;
              }(t)), t;
            }).then(function (t) {
              return e.vi = !1, t;
            });
          });
          return this.Pi = n, n;
        },
        /**
         * Schedules an operation to be queued on the AsyncQueue once the specified
         * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
         * or fast-forward the operation prior to its running.
         */
        t.prototype.Us = function (t, e, n) {
          var r = this;
          this.xi(), // Fast-forward delays for timerIds that have been overriden.
          this.bi.indexOf(t) > -1 && (e = 0);
          var i = Rr.Ii(this, t, e, n, function (t) {
            return r.$i(t);
          });
          return this.Vi.push(i), i;
        }, t.prototype.xi = function () {
          this.pi && P();
        },
        /**
         * Verifies there's an operation currently in-progress on the AsyncQueue.
         * Unfortunately we can't verify that the running code is in the promise chain
         * of that operation, so this isn't a foolproof check, but it should be enough
         * to catch some bugs.
         */
        t.prototype.Li = function () {},
        /**
         * Waits until all currently queued tasks are finished executing. Delayed
         * operations are not run.
         */
        t.prototype.Bi = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var t;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4
                  /*yield*/
                  , t = this.Pi];

                case 1:
                  e.sent(), e.label = 2;

                case 2:
                  if (t !== this.Pi) return [3
                  /*break*/
                  , 0];
                  e.label = 3;

                case 3:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        },
        /**
         * For Tests: Determine if a delayed operation with a particular TimerId
         * exists.
         */
        t.prototype.qi = function (t) {
          for (var e = 0, n = this.Vi; e < n.length; e++) {
            if (n[e].Ns === t) return !0;
          }

          return !1;
        },
        /**
         * For Tests: Runs some or all delayed operations early.
         *
         * @param lastTimerId Delayed operations up to and including this TimerId will
         *  be drained. Pass TimerId.All to run all delayed operations.
         * @returns a Promise that resolves once all operations have been run.
         */
        t.prototype.Ui = function (t) {
          var e = this; // Note that draining may generate more delayed ops, so we do that first.

          return this.Bi().then(function () {
            // Run ops in the same order they'd run if they ran naturally.
            e.Vi.sort(function (t, e) {
              return t.wi - e.wi;
            });

            for (var n = 0, r = e.Vi; n < r.length; n++) {
              var i = r[n];
              if (i.Ks(), "all"
              /* All */
              !== t && i.Ns === t) break;
            }

            return e.Bi();
          });
        },
        /**
         * For Tests: Skip all subsequent delays for a timer id.
         */
        t.prototype.Qi = function (t) {
          this.bi.push(t);
        },
        /** Called once a DelayedOperation is run or canceled. */
        t.prototype.$i = function (t) {
          // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
          var e = this.Vi.indexOf(t);
          this.Vi.splice(e, 1);
        }, t;
      }();
      /**
       * Returns a FirestoreError that can be surfaced to the user if the provided
       * error is an IndexedDbTransactionError. Re-throws the error otherwise.
       */


      function Lr(t, e) {
        if (k("AsyncQueue", e + ": " + t), Ar(t)) return new L(V.UNAVAILABLE, e + ": " + t);
        throw t;
      }

      function Ur(t, e) {
        var n = t[0],
            r = t[1],
            i = e[0],
            o = e[1],
            u = G(n, i);
        return 0 === u ? G(r, o) : u;
      }
      /**
       * Used to calculate the nth sequence number. Keeps a rolling buffer of the
       * lowest n values passed to `addElement`, and finally reports the largest of
       * them in `maxValue`.
       */


      var Mr =
      /** @class */
      function () {
        function t(t) {
          this.Ki = t, this.buffer = new gt(Ur), this.Wi = 0;
        }

        return t.prototype.ji = function () {
          return ++this.Wi;
        }, t.prototype.Gi = function (t) {
          var e = [t, this.ji()];
          if (this.buffer.size < this.Ki) this.buffer = this.buffer.add(e);else {
            var n = this.buffer.last();
            Ur(e, n) < 0 && (this.buffer = this.buffer["delete"](n).add(e));
          }
        }, Object.defineProperty(t.prototype, "maxValue", {
          get: function get() {
            // Guaranteed to be non-empty. If we decide we are not collecting any
            // sequence numbers, nthSequenceNumber below short-circuits. If we have
            // decided that we are collecting n sequence numbers, it's because n is some
            // percentage of the existing sequence numbers. That means we should never
            // be in a situation where we are collecting sequence numbers but don't
            // actually have any.
            return this.buffer.last()[0];
          },
          enumerable: !1,
          configurable: !0
        }), t;
      }(),
          qr = {
        zi: !1,
        Hi: 0,
        Ji: 0,
        Yi: 0
      },
          jr =
      /** @class */
      function () {
        function t( // When we attempt to collect, we will only do so if the cache size is greater than this
        // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
        t, // The percentage of sequence numbers that we will attempt to collect
        e, // A cap on the total number of sequence numbers that will be collected. This prevents
        // us from collecting a huge number of sequence numbers if the cache has grown very large.
        n) {
          this.Xi = t, this.Zi = e, this.tr = n;
        }

        return t.er = function (e) {
          return new t(e, t.nr, t.sr);
        }, t;
      }();

      jr.nr = 10, jr.sr = 1e3, jr.ir = new jr(41943040, jr.nr, jr.sr), jr.rr = new jr(-1, 0, 0);
      /**
       * This class is responsible for the scheduling of LRU garbage collection. It handles checking
       * whether or not GC is enabled, as well as which delay to use before the next run.
       */

      var Fr =
      /** @class */
      function () {
        function t(t, e) {
          this.cr = t, this.di = e, this.ur = !1, this.ar = null;
        }

        return t.prototype.start = function (t) {
          -1 !== this.cr.params.Xi && this.hr(t);
        }, t.prototype.stop = function () {
          this.ar && (this.ar.cancel(), this.ar = null);
        }, Object.defineProperty(t.prototype, "lr", {
          get: function get() {
            return null !== this.ar;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.hr = function (t) {
          var r = this,
              i = this.ur ? 3e5 : 6e4;
          x("LruGarbageCollector", "Garbage collection scheduled in " + i + "ms"), this.ar = this.di.Us("lru_garbage_collection"
          /* LruGarbageCollection */
          , i, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
              var e;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    this.ar = null, this.ur = !0, n.label = 1;

                  case 1:
                    return n.trys.push([1, 3,, 7]), [4
                    /*yield*/
                    , t._r(this.cr)];

                  case 2:
                    return n.sent(), [3
                    /*break*/
                    , 7];

                  case 3:
                    return Ar(e = n.sent()) ? (x("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), [3
                    /*break*/
                    , 6]) : [3
                    /*break*/
                    , 4];

                  case 4:
                    return [4
                    /*yield*/
                    , vo(e)];

                  case 5:
                    n.sent(), n.label = 6;

                  case 6:
                    return [3
                    /*break*/
                    , 7];

                  case 7:
                    return [4
                    /*yield*/
                    , this.hr(t)];

                  case 8:
                    return n.sent(), [2
                    /*return*/
                    ];
                }
              });
            });
          });
        }, t;
      }(),
          zr =
      /** @class */
      function () {
        function t(t, e) {
          this.dr = t, this.params = e
          /** Given a percentile of target to collect, returns the number of targets to collect. */
          ;
        }

        return t.prototype.wr = function (t, e) {
          return this.dr.Er(t).next(function (t) {
            return Math.floor(e / 100 * t);
          });
        },
        /** Returns the nth sequence number, counting in order from the smallest. */
        t.prototype.Tr = function (t, e) {
          var n = this;
          if (0 === e) return lr.resolve(_r.Ds);
          var r = new Mr(e);
          return this.dr.Ue(t, function (t) {
            return r.Gi(t.sequenceNumber);
          }).next(function () {
            return n.dr.Ir(t, function (t) {
              return r.Gi(t);
            });
          }).next(function () {
            return r.maxValue;
          });
        },
        /**
         * Removes targets with a sequence number equal to or less than the given upper bound, and removes
         * document associations with those targets.
         */
        t.prototype.mr = function (t, e, n) {
          return this.dr.mr(t, e, n);
        },
        /**
         * Removes documents that have a sequence number equal to or less than the upper bound and are not
         * otherwise pinned.
         */
        t.prototype.Ar = function (t, e) {
          return this.dr.Ar(t, e);
        }, t.prototype.Rr = function (t, e) {
          var n = this;
          return -1 === this.params.Xi ? (x("LruGarbageCollector", "Garbage collection skipped; disabled"), lr.resolve(qr)) : this.Pr(t).next(function (r) {
            return r < n.params.Xi ? (x("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.Xi), qr) : n.gr(t, e);
          });
        }, t.prototype.Pr = function (t) {
          return this.dr.Pr(t);
        }, t.prototype.gr = function (t, e) {
          var n,
              r,
              i,
              o,
              s,
              a,
              c,
              h = this,
              f = Date.now();
          return this.wr(t, this.params.Zi).next(function (e) {
            // Cap at the configured max
            return e > h.params.tr ? (x("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.tr + " from " + e), r = h.params.tr) : r = e, o = Date.now(), h.Tr(t, r);
          }).next(function (r) {
            return n = r, s = Date.now(), h.mr(t, n, e);
          }).next(function (e) {
            return i = e, a = Date.now(), h.Ar(t, n);
          }).next(function (t) {
            return c = Date.now(), D() <= _firebase_logger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].DEBUG && x("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (o - f) + "ms\n\tDetermined least recently used " + r + " in " + (s - o) + "ms\n\tRemoved " + i + " targets in " + (a - s) + "ms\n\tRemoved " + t + " documents in " + (c - a) + "ms\nTotal Duration: " + (c - f) + "ms"), lr.resolve({
              zi: !0,
              Hi: r,
              Ji: i,
              Yi: t
            });
          });
        }, t;
      }();
      /** Implements the steps for LRU garbage collection. */

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Encodes a resource path into a IndexedDb-compatible string form.
       */


      function Br(t) {
        for (var e = "", n = 0; n < t.length; n++) {
          e.length > 0 && (e = Kr(e)), e = Gr(t.get(n), e);
        }

        return Kr(e);
      }
      /** Encodes a single segment of a resource path into the given result */


      function Gr(t, e) {
        for (var n = e, r = t.length, i = 0; i < r; i++) {
          var o = t.charAt(i);

          switch (o) {
            case "\0":
              n += "";
              break;

            case "":
              n += "";
              break;

            default:
              n += o;
          }
        }

        return n;
      }
      /** Encodes a path separator into the given result */


      function Kr(t) {
        return t + "";
      }
      /**
       * Decodes the given IndexedDb-compatible string form of a resource path into
       * a ResourcePath instance. Note that this method is not suitable for use with
       * decoding resource names from the server; those are One Platform format
       * strings.
       */


      function Wr(t) {
        // Event the empty path must encode as a path of at least length 2. A path
        // with exactly 2 must be the empty path.
        var e = t.length;
        if (C(e >= 2), 2 === e) return C("" === t.charAt(0) && "" === t.charAt(1)), $.X(); // Escape characters cannot exist past the second-to-last position in the
        // source value.

        for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
          // The last two characters of a valid encoded path must be a separator, so
          // there must be an end to this segment.
          var u = t.indexOf("", o);

          switch ((u < 0 || u > n) && P(), t.charAt(u + 1)) {
            case "":
              var s = t.substring(o, u),
                  a = void 0;
              0 === i.length ? // Avoid copying for the common case of a segment that excludes \0
              // and \001
              a = s : (a = i += s, i = ""), r.push(a);
              break;

            case "":
              i += t.substring(o, u), i += "\0";
              break;

            case "":
              // The escape character can be used in the output to encode itself.
              i += t.substring(o, u + 1);
              break;

            default:
              P();
          }

          o = u + 2;
        }

        return new $(r);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Serializer for values stored in the LocalStore. */


      var Qr = function Qr(t) {
        this.yr = t;
      };
      /** Decodes a remote document from storage locally to a Document. */


      function Hr(t, e) {
        if (e.document) return function (t, e, n) {
          var r = Te(t, e.name),
              i = be(e.updateTime),
              o = new Tn({
            mapValue: {
              fields: e.fields
            }
          });
          return new xn(r, i, o, {
            hasCommittedMutations: !!n
          });
        }(t.yr, e.document, !!e.hasCommittedMutations);

        if (e.noDocument) {
          var n = Z.ct(e.noDocument.path),
              r = Zr(e.noDocument.readTime);
          return new kn(n, r, {
            hasCommittedMutations: !!e.hasCommittedMutations
          });
        }

        if (e.unknownDocument) {
          var i = Z.ct(e.unknownDocument.path),
              o = Zr(e.unknownDocument.version);
          return new On(i, o);
        }

        return P();
      }
      /** Encodes a document for storage locally. */


      function Yr(t, e, n) {
        var r = $r(n),
            i = e.key.path.q().H();

        if (e instanceof xn) {
          var o = function (t, e) {
            return {
              name: Ee(t, e.key),
              fields: e.En().mapValue.fields,
              updateTime: me(t, e.version.M())
            };
          }(t.yr, e),
              u = e.hasCommittedMutations;

          return new Ai(
          /* unknownDocument= */
          null,
          /* noDocument= */
          null, o, u, r, i);
        }

        if (e instanceof kn) {
          var s = e.key.path.H(),
              a = Xr(e.version),
              c = e.hasCommittedMutations;
          return new Ai(
          /* unknownDocument= */
          null, new Ti(s, a),
          /* document= */
          null, c, r, i);
        }

        if (e instanceof On) {
          var h = e.key.path.H(),
              f = Xr(e.version);
          return new Ai(new Ni(h, f),
          /* noDocument= */
          null,
          /* document= */
          null,
          /* hasCommittedMutations= */
          !0, r, i);
        }

        return P();
      }

      function $r(t) {
        var e = t.M();
        return [e.seconds, e.nanoseconds];
      }

      function Jr(t) {
        var e = new Q(t[0], t[1]);
        return H.N(e);
      }

      function Xr(t) {
        var e = t.M();
        return new wi(e.seconds, e.nanoseconds);
      }

      function Zr(t) {
        var e = new Q(t.seconds, t.nanoseconds);
        return H.N(e);
      }
      /** Encodes a batch of mutations into a DbMutationBatch for local storage. */

      /** Decodes a DbMutationBatch into a MutationBatch */


      function ti(t, e) {
        var n = (e.baseMutations || []).map(function (e) {
          return Se(t.yr, e);
        }),
            r = e.mutations.map(function (e) {
          return Se(t.yr, e);
        }),
            i = Q.fromMillis(e.localWriteTimeMs);
        return new cr(e.batchId, i, n, r);
      }
      /** Decodes a DbTarget into TargetData */


      function ei(t) {
        var e,
            n,
            r = Zr(t.readTime),
            i = void 0 !== t.lastLimboFreeSnapshotVersion ? Zr(t.lastLimboFreeSnapshotVersion) : H.min();
        return void 0 !== t.query.documents ? (C(1 === (n = t.query).documents.length), e = jn(Cn(Ae(n.documents[0])))) : e = function (t) {
          return jn(Re(t));
        }(t.query), new ft(e, t.targetId, 0
        /* Listen */
        , t.lastListenSequenceNumber, r, i, at.fromBase64String(t.resumeToken))
        /** Encodes TargetData into a DbTarget for storage locally. */
        ;
      }

      function ni(t, e) {
        var n,
            r = Xr(e.ft),
            i = Xr(e.lastLimboFreeSnapshotVersion);
        n = st(e.target) ? Pe(t.yr, e.target) : Ce(t.yr, e.target); // We can't store the resumeToken as a ByteString in IndexedDb, so we
        // convert it to a base64 string for storage.

        var o = e.resumeToken.toBase64(); // lastListenSequenceNumber is always 0 until we do real GC.

        return new xi(e.targetId, ot(e.target), r, o, e.sequenceNumber, i, n);
      }
      /**
       * A helper function for figuring out what kind of query has been stored.
       */

      /**
       * Encodes a `BundledQuery` from bundle proto to a Query object.
       *
       * This reconstructs the original query used to build the bundle being loaded,
       * including features exists only in SDKs (for example: limit-to-last).
       */


      function ri(t) {
        var e = Re({
          parent: t.parent,
          structuredQuery: t.structuredQuery
        });
        return "LAST" === t.limitType ? Fn(e, e.limit, "L"
        /* Last */
        ) : e;
      }
      /** Encodes a NamedQuery proto object to a NamedQuery model object. */

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** A mutation queue for a specific user, backed by IndexedDB. */


      var ii =
      /** @class */
      function () {
        function t(
        /**
         * The normalized userId (e.g. null UID => "" userId) used to store /
         * retrieve mutations.
         */
        t, e, n, r) {
          this.userId = t, this.serializer = e, this.os = n, this.Vr = r,
          /**
               * Caches the document keys for pending mutation batches. If the mutation
               * has been removed from IndexedDb, the cached value may continue to
               * be used to retrieve the batch's document keys. To remove a cached value
               * locally, `removeCachedMutationKeys()` should be invoked either directly
               * or through `removeMutationBatches()`.
               *
               * With multi-tab, when the primary client acknowledges or rejects a mutation,
               * this cache is used by secondary clients to invalidate the local
               * view of the documents that were previously affected by the mutation.
               */
          // PORTING NOTE: Multi-tab only.
          this.pr = {}
          /**
          * Creates a new mutation queue for the given user.
          * @param user The user for which to create a mutation queue.
          * @param serializer The serializer to use when persisting to IndexedDb.
          */
          ;
        }

        return t.vr = function (e, n, r, i) {
          // TODO(mcg): Figure out what constraints there are on userIDs
          // In particular, are there any reserved characters? are empty ids allowed?
          // For the moment store these together in the same mutations table assuming
          // that empty userIDs aren't allowed.
          return C("" !== e.uid), new t(e.u() ? e.uid : "", n, r, i);
        }, t.prototype.br = function (t) {
          var e = !0,
              n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
          return si(t)._i({
            index: Ii.userMutationsIndex,
            range: n
          }, function (t, n, r) {
            e = !1, r.done();
          }).next(function () {
            return e;
          });
        }, t.prototype.Sr = function (t, e, n, r) {
          var i = this,
              o = ai(t),
              u = si(t); // The IndexedDb implementation in Chrome (and Firefox) does not handle
          // compound indices that include auto-generated keys correctly. To ensure
          // that the index entry is added correctly in all browsers, we perform two
          // writes: The first write is used to retrieve the next auto-generated Batch
          // ID, and the second write populates the index and stores the actual
          // mutation batch.
          // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
          // We write an empty object to obtain key
          // eslint-disable-next-line @typescript-eslint/no-explicit-any

          return u.add({}).next(function (s) {
            C("number" == typeof s);

            for (var a = new cr(s, e, n, r), c = function (t, e, n) {
              var r = n.baseMutations.map(function (e) {
                return Oe(t.yr, e);
              }),
                  i = n.mutations.map(function (e) {
                return Oe(t.yr, e);
              });
              return new Ii(e, n.batchId, n.gn.toMillis(), r, i);
            }(i.serializer, i.userId, a), h = [], f = new gt(function (t, e) {
              return G(t.J(), e.J());
            }), l = 0, p = r; l < p.length; l++) {
              var d = p[l],
                  v = Ei.key(i.userId, d.key.path, s);
              f = f.add(d.key.path.q()), h.push(u.put(c)), h.push(o.put(v, Ei.PLACEHOLDER));
            }

            return f.forEach(function (e) {
              h.push(i.os.Dr(t, e));
            }), t.es(function () {
              i.pr[s] = a.keys();
            }), lr.qn(h).next(function () {
              return a;
            });
          });
        }, t.prototype.Cr = function (t, e) {
          var n = this;
          return si(t).get(e).next(function (t) {
            return t ? (C(t.userId === n.userId), ti(n.serializer, t)) : null;
          });
        },
        /**
         * Returns the document keys for the mutation batch with the given batchId.
         * For primary clients, this method returns `null` after
         * `removeMutationBatches()` has been called. Secondary clients return a
         * cached result until `removeCachedMutationKeys()` is invoked.
         */
        // PORTING NOTE: Multi-tab only.
        t.prototype.Nr = function (t, e) {
          var n = this;
          return this.pr[e] ? lr.resolve(this.pr[e]) : this.Cr(t, e).next(function (t) {
            if (t) {
              var r = t.keys();
              return n.pr[e] = r, r;
            }

            return null;
          });
        }, t.prototype.Fr = function (t, e) {
          var n = this,
              r = e + 1,
              i = IDBKeyRange.lowerBound([this.userId, r]),
              o = null;
          return si(t)._i({
            index: Ii.userMutationsIndex,
            range: i
          }, function (t, e, i) {
            e.userId === n.userId && (C(e.batchId >= r), o = ti(n.serializer, e)), i.done();
          }).next(function () {
            return o;
          });
        }, t.prototype.Or = function (t) {
          var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
              n = -1;
          return si(t)._i({
            index: Ii.userMutationsIndex,
            range: e,
            reverse: !0
          }, function (t, e, r) {
            n = e.batchId, r.done();
          }).next(function () {
            return n;
          });
        }, t.prototype.Mr = function (t) {
          var e = this,
              n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
          return si(t).ui(Ii.userMutationsIndex, n).next(function (t) {
            return t.map(function (t) {
              return ti(e.serializer, t);
            });
          });
        }, t.prototype.us = function (t, e) {
          var n = this,
              r = Ei.prefixForPath(this.userId, e.path),
              i = IDBKeyRange.lowerBound(r),
              o = []; // Scan the document-mutation index starting with a prefix starting with
          // the given documentKey.

          return ai(t)._i({
            range: i
          }, function (r, i, u) {
            var s = r[0],
                a = r[1],
                c = r[2],
                h = Wr(a); // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.

            if (s === n.userId && e.path.isEqual(h)) // Look up the mutation batch in the store.
              return si(t).get(c).next(function (t) {
                if (!t) throw P();
                C(t.userId === n.userId), o.push(ti(n.serializer, t));
              });
            u.done();
          }).next(function () {
            return o;
          });
        }, t.prototype.ds = function (t, e) {
          var n = this,
              r = new gt(G),
              i = [];
          return e.forEach(function (e) {
            var o = Ei.prefixForPath(n.userId, e.path),
                u = IDBKeyRange.lowerBound(o),
                s = ai(t)._i({
              range: u
            }, function (t, i, o) {
              var u = t[0],
                  s = t[1],
                  a = t[2],
                  c = Wr(s); // Only consider rows matching exactly the specific key of
              // interest. Note that because we order by path first, and we
              // order terminators before path separators, we'll encounter all
              // the index rows for documentKey contiguously. In particular, all
              // the rows for documentKey will occur before any rows for
              // documents nested in a subcollection beneath documentKey so we
              // can stop as soon as we hit any such row.

              u === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done();
            });

            i.push(s);
          }), lr.qn(i).next(function () {
            return n.kr(t, r);
          });
        }, t.prototype.Rs = function (t, e) {
          var n = this,
              r = e.path,
              i = r.length + 1,
              o = Ei.prefixForPath(this.userId, r),
              u = IDBKeyRange.lowerBound(o),
              s = new gt(G);
          return ai(t)._i({
            range: u
          }, function (t, e, o) {
            var u = t[0],
                a = t[1],
                c = t[2],
                h = Wr(a);
            u === n.userId && r.j(h) ? // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            h.length === i && (s = s.add(c)) : o.done();
          }).next(function () {
            return n.kr(t, s);
          });
        }, t.prototype.kr = function (t, e) {
          var n = this,
              r = [],
              i = []; // TODO(rockwood): Implement this using iterate.

          return e.forEach(function (e) {
            i.push(si(t).get(e).next(function (t) {
              if (null === t) throw P();
              C(t.userId === n.userId), r.push(ti(n.serializer, t));
            }));
          }), lr.qn(i).next(function () {
            return r;
          });
        }, t.prototype.$r = function (t, e) {
          var n = this;
          return ui(t.Lr, this.userId, e).next(function (r) {
            return t.es(function () {
              n.Br(e.batchId);
            }), lr.forEach(r, function (e) {
              return n.Vr.qr(t, e);
            });
          });
        },
        /**
         * Clears the cached keys for a mutation batch. This method should be
         * called by secondary clients after they process mutation updates.
         *
         * Note that this method does not have to be called from primary clients as
         * the corresponding cache entries are cleared when an acknowledged or
         * rejected batch is removed from the mutation queue.
         */
        // PORTING NOTE: Multi-tab only
        t.prototype.Br = function (t) {
          delete this.pr[t];
        }, t.prototype.Ur = function (t) {
          var e = this;
          return this.br(t).next(function (n) {
            if (!n) return lr.resolve(); // Verify that there are no entries in the documentMutations index if
            // the queue is empty.

            var r = IDBKeyRange.lowerBound(Ei.prefixForUser(e.userId)),
                i = [];
            return ai(t)._i({
              range: r
            }, function (t, n, r) {
              if (t[0] === e.userId) {
                var o = Wr(t[1]);
                i.push(o);
              } else r.done();
            }).next(function () {
              C(0 === i.length);
            });
          });
        }, t.prototype.Qr = function (t, e) {
          return oi(t, this.userId, e);
        }, // PORTING NOTE: Multi-tab only (state is held in memory in other clients).

        /** Returns the mutation queue's metadata from IndexedDb. */
        t.prototype.Kr = function (t) {
          var e = this;
          return ci(t).get(this.userId).next(function (t) {
            return t || new _i(e.userId, -1,
            /*lastStreamToken=*/
            "");
          });
        }, t;
      }();
      /**
       * @return true if the mutation queue for the given user contains a pending
       *         mutation for the given key.
       */


      function oi(t, e, n) {
        var r = Ei.prefixForPath(e, n.path),
            i = r[1],
            o = IDBKeyRange.lowerBound(r),
            u = !1;
        return ai(t)._i({
          range: o,
          li: !0
        }, function (t, n, r) {
          var o = t[0],
              s = t[1];
          t[2];
          o === e && s === i && (u = !0), r.done();
        }).next(function () {
          return u;
        });
      }
      /** Returns true if any mutation queue contains the given document. */

      /**
       * Delete a mutation batch and the associated document mutations.
       * @return A PersistencePromise of the document mutations that were removed.
       */


      function ui(t, e, n) {
        var r = t.store(Ii.store),
            i = t.store(Ei.store),
            o = [],
            u = IDBKeyRange.only(n.batchId),
            s = 0,
            a = r._i({
          range: u
        }, function (t, e, n) {
          return s++, n["delete"]();
        });

        o.push(a.next(function () {
          C(1 === s);
        }));

        for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
          var l = f[h],
              p = Ei.key(e, l.key.path, n.batchId);
          o.push(i["delete"](p)), c.push(l.key);
        }

        return lr.qn(o).next(function () {
          return c;
        });
      }
      /**
       * Helper to get a typed SimpleDbStore for the mutations object store.
       */


      function si(t) {
        return Yi.Ys(t, Ii.store);
      }
      /**
       * Helper to get a typed SimpleDbStore for the mutationQueues object store.
       */


      function ai(t) {
        return Yi.Ys(t, Ei.store);
      }
      /**
       * Helper to get a typed SimpleDbStore for the mutationQueues object store.
       */


      function ci(t) {
        return Yi.Ys(t, _i.store);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * The RemoteDocumentCache for IndexedDb. To construct, invoke
       * `newIndexedDbRemoteDocumentCache()`.
       */


      var hi =
      /** @class */
      function () {
        /**
         * @param serializer The document serializer.
         * @param indexManager The query indexes that need to be maintained.
         */
        function t(t, e) {
          this.serializer = t, this.os = e
          /**
          * Adds the supplied entries to the cache.
          *
          * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
          * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
          */
          ;
        }

        return t.prototype.jn = function (t, e, n) {
          return pi(t).put(di(e), n);
        },
        /**
         * Removes a document from the cache.
         *
         * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
         * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
         */
        t.prototype.Hn = function (t, e) {
          var n = pi(t),
              r = di(e);
          return n["delete"](r);
        },
        /**
         * Updates the current cache size.
         *
         * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
         * cache's metadata.
         */
        t.prototype.updateMetadata = function (t, e) {
          var n = this;
          return this.getMetadata(t).next(function (r) {
            return r.byteSize += e, n.Wr(t, r);
          });
        }, t.prototype.Jn = function (t, e) {
          var n = this;
          return pi(t).get(di(e)).next(function (t) {
            return n.jr(t);
          });
        },
        /**
         * Looks up an entry in the cache.
         *
         * @param documentKey The key of the entry to look up.
         * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
         */
        t.prototype.Gr = function (t, e) {
          var n = this;
          return pi(t).get(di(e)).next(function (t) {
            var e = n.jr(t);
            return e ? {
              zn: e,
              size: vi(t)
            } : null;
          });
        }, t.prototype.getEntries = function (t, e) {
          var n = this,
              r = It();
          return this.zr(t, e, function (t, e) {
            var i = n.jr(e);
            r = r.Tt(t, i);
          }).next(function () {
            return r;
          });
        },
        /**
         * Looks up several entries in the cache.
         *
         * @param documentKeys The set of keys entries to look up.
         * @return A map of MaybeDocuments indexed by key (if a document cannot be
         *     found, the key will be mapped to null) and a map of sizes indexed by
         *     key (zero if the key cannot be found).
         */
        t.prototype.Hr = function (t, e) {
          var n = this,
              r = It(),
              i = new vt(Z.$);
          return this.zr(t, e, function (t, e) {
            var o = n.jr(e);
            o ? (r = r.Tt(t, o), i = i.Tt(t, vi(e))) : (r = r.Tt(t, null), i = i.Tt(t, 0));
          }).next(function () {
            return {
              Jr: r,
              Yr: i
            };
          });
        }, t.prototype.zr = function (t, e, n) {
          if (e.W()) return lr.resolve();
          var r = IDBKeyRange.bound(e.first().path.H(), e.last().path.H()),
              i = e.yt(),
              o = i.Ct();
          return pi(t)._i({
            range: r
          }, function (t, e, r) {
            // Go through keys not found in cache.
            for (var u = Z.ct(t); o && Z.$(o, u) < 0;) {
              n(o, null), o = i.Ct();
            }

            o && o.isEqual(u) && ( // Key found in cache.
            n(o, e), o = i.Nt() ? i.Ct() : null), // Skip to the next key (if there is one).
            o ? r.oi(o.path.H()) : r.done();
          }).next(function () {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (; o;) {
              n(o, null), o = i.Nt() ? i.Ct() : null;
            }
          });
        }, t.prototype.ws = function (t, e, n) {
          var r = this,
              i = Tt(),
              o = e.path.length + 1,
              u = {};

          if (n.isEqual(H.min())) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            var s = e.path.H();
            u.range = IDBKeyRange.lowerBound(s);
          } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            var a = e.path.H(),
                c = $r(n);
            u.range = IDBKeyRange.lowerBound([a, c],
            /* open= */
            !0), u.index = Ai.collectionReadTimeIndex;
          }

          return pi(t)._i(u, function (t, n, u) {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length === o) {
              var s = Hr(r.serializer, n);
              e.path.j(s.key.path) ? s instanceof xn && Kn(e, s) && (i = i.Tt(s.key, s)) : u.done();
            }
          }).next(function () {
            return i;
          });
        }, t.prototype.Xr = function (t) {
          return new fi(this, !!t && t.Zr);
        }, t.prototype.eo = function (t) {
          return this.getMetadata(t).next(function (t) {
            return t.byteSize;
          });
        }, t.prototype.getMetadata = function (t) {
          return li(t).get(Di.key).next(function (t) {
            return C(!!t), t;
          });
        }, t.prototype.Wr = function (t, e) {
          return li(t).put(Di.key, e);
        },
        /**
         * Decodes `remoteDoc` and returns the document (or null, if the document
         * corresponds to the format used for sentinel deletes).
         */
        t.prototype.jr = function (t) {
          if (t) {
            var e = Hr(this.serializer, t);
            return e instanceof kn && e.version.isEqual(H.min()) ? null : e;
          }

          return null;
        }, t;
      }(),
          fi =
      /** @class */
      function (e) {
        /**
         * @param documentCache The IndexedDbRemoteDocumentCache to apply the changes to.
         * @param trackRemovals Whether to create sentinel deletes that can be tracked by
         * `getNewDocumentChanges()`.
         */
        function n(t, n) {
          var r = this;
          return (r = e.call(this) || this).no = t, r.Zr = n, // A map of document sizes prior to applying the changes in this buffer.
          r.so = new fr(function (t) {
            return t.toString();
          }, function (t, e) {
            return t.isEqual(e);
          }), r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.Zn = function (t) {
          var e = this,
              n = [],
              r = 0,
              i = new gt(function (t, e) {
            return G(t.J(), e.J());
          });
          return this.Qn.forEach(function (o, u) {
            var s = e.so.get(o);

            if (u.zn) {
              var a = Yr(e.no.serializer, u.zn, e.Wn(o));
              i = i.add(o.path.q());
              var c = vi(a);
              r += c - s, n.push(e.no.jn(t, o, a));
            } else if (r -= s, e.Zr) {
              // In order to track removals, we store a "sentinel delete" in the
              // RemoteDocumentCache. This entry is represented by a NoDocument
              // with a version of 0 and ignored by `maybeDecodeDocument()` but
              // preserved in `getNewDocumentChanges()`.
              var h = Yr(e.no.serializer, new kn(o, H.min()), e.Wn(o));
              n.push(e.no.jn(t, o, h));
            } else n.push(e.no.Hn(t, o));
          }), i.forEach(function (r) {
            n.push(e.no.os.Dr(t, r));
          }), n.push(this.no.updateMetadata(t, r)), lr.qn(n);
        }, n.prototype.Yn = function (t, e) {
          var n = this; // Record the size of everything we load from the cache so we can compute a delta later.

          return this.no.Gr(t, e).next(function (t) {
            return null === t ? (n.so.set(e, 0), null) : (n.so.set(e, t.size), t.zn);
          });
        }, n.prototype.Xn = function (t, e) {
          var n = this; // Record the size of everything we load from the cache so we can compute
          // a delta later.

          return this.no.Hr(t, e).next(function (t) {
            var e = t.Jr; // Note: `getAllFromCache` returns two maps instead of a single map from
            // keys to `DocumentSizeEntry`s. This is to allow returning the
            // `NullableMaybeDocumentMap` directly, without a conversion.

            return t.Yr.forEach(function (t, e) {
              n.so.set(t, e);
            }), e;
          });
        }, n;
      }(pr);
      /**
       * Creates a new IndexedDbRemoteDocumentCache.
       *
       * @param serializer The document serializer.
       * @param indexManager The query indexes that need to be maintained.
       */

      /**
       * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
       *
       * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
       * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
       * when we apply the changes.
       */


      function li(t) {
        return Yi.Ys(t, Di.store);
      }
      /**
       * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
       */


      function pi(t) {
        return Yi.Ys(t, Ai.store);
      }

      function di(t) {
        return t.path.H();
      }
      /**
       * Retrusn an approximate size for the given document.
       */


      function vi(t) {
        var e;
        if (t.document) e = t.document;else if (t.unknownDocument) e = t.unknownDocument;else {
          if (!t.noDocument) throw P();
          e = t.noDocument;
        }
        return JSON.stringify(e).length;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * An in-memory implementation of IndexManager.
       */


      var yi =
      /** @class */
      function () {
        function t() {
          this.io = new mi();
        }

        return t.prototype.Dr = function (t, e) {
          return this.io.add(e), lr.resolve();
        }, t.prototype.As = function (t, e) {
          return lr.resolve(this.io.getEntries(e));
        }, t;
      }(),
          mi =
      /** @class */
      function () {
        function t() {
          this.index = {};
        } // Returns false if the entry already existed.


        return t.prototype.add = function (t) {
          var e = t.K(),
              n = t.q(),
              r = this.index[e] || new gt($.$),
              i = !r.has(n);
          return this.index[e] = r.add(n), i;
        }, t.prototype.has = function (t) {
          var e = t.K(),
              n = t.q(),
              r = this.index[e];
          return r && r.has(n);
        }, t.prototype.getEntries = function (t) {
          return (this.index[t] || new gt($.$)).H();
        }, t;
      }(),
          gi =
      /** @class */
      function () {
        function t(t) {
          this.serializer = t;
        }
        /**
         * Performs database creation and schema upgrades.
         *
         * Note that in production, this method is only ever used to upgrade the schema
         * to SCHEMA_VERSION. Different values of toVersion are only used for testing
         * and local feature development.
         */


        return t.prototype.createOrUpgrade = function (t, e, n, r) {
          var i = this;
          C(n < r && n >= 0 && r <= 11);
          var o = new Dr("createOrUpgrade", e);
          n < 1 && r >= 1 && (function (t) {
            t.createObjectStore(bi.store);
          }(t), function (t) {
            t.createObjectStore(_i.store, {
              keyPath: _i.keyPath
            }), t.createObjectStore(Ii.store, {
              keyPath: Ii.keyPath,
              autoIncrement: !0
            }).createIndex(Ii.userMutationsIndex, Ii.userMutationsKeyPath, {
              unique: !0
            }), t.createObjectStore(Ei.store);
          }(t), Pi(t), function (t) {
            t.createObjectStore(Ai.store);
          }(t)); // Migration 2 to populate the targetGlobal object no longer needed since
          // migration 3 unconditionally clears it.

          var u = lr.resolve();
          return n < 3 && r >= 3 && ( // Brand new clients don't need to drop and recreate--only clients that
          // potentially have corrupt data.
          0 !== n && (function (t) {
            t.deleteObjectStore(ki.store), t.deleteObjectStore(xi.store), t.deleteObjectStore(Oi.store);
          }(t), Pi(t)), u = u.next(function () {
            /**
            * Creates the target global singleton row.
            *
            * @param {IDBTransaction} txn The version upgrade transaction for indexeddb
            */
            return function (t) {
              var e = t.store(Oi.store),
                  n = new Oi(
              /*highestTargetId=*/
              0,
              /*lastListenSequenceNumber=*/
              0, H.min().M(),
              /*targetCount=*/
              0);
              return e.put(Oi.key, n);
            }(o);
          })), n < 4 && r >= 4 && (0 !== n && ( // Schema version 3 uses auto-generated keys to generate globally unique
          // mutation batch IDs (this was previously ensured internally by the
          // client). To migrate to the new schema, we have to read all mutations
          // and write them back out. We preserve the existing batch IDs to guarantee
          // consistency with other object stores. Any further mutation batch IDs will
          // be auto-generated.
          u = u.next(function () {
            return function (t, e) {
              return e.store(Ii.store).ui().next(function (n) {
                t.deleteObjectStore(Ii.store), t.createObjectStore(Ii.store, {
                  keyPath: Ii.keyPath,
                  autoIncrement: !0
                }).createIndex(Ii.userMutationsIndex, Ii.userMutationsKeyPath, {
                  unique: !0
                });
                var r = e.store(Ii.store),
                    i = n.map(function (t) {
                  return r.put(t);
                });
                return lr.qn(i);
              });
            }(t, o);
          })), u = u.next(function () {
            !function (t) {
              t.createObjectStore(Ci.store, {
                keyPath: Ci.keyPath
              });
            }(t);
          })), n < 5 && r >= 5 && (u = u.next(function () {
            return i.removeAcknowledgedMutations(o);
          })), n < 6 && r >= 6 && (u = u.next(function () {
            return function (t) {
              t.createObjectStore(Di.store);
            }(t), i.addDocumentGlobal(o);
          })), n < 7 && r >= 7 && (u = u.next(function () {
            return i.ensureSequenceNumbers(o);
          })), n < 8 && r >= 8 && (u = u.next(function () {
            return i.createCollectionParentIndex(t, o);
          })), n < 9 && r >= 9 && (u = u.next(function () {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function (t) {
              t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function (t) {
              var e = t.objectStore(Ai.store);
              e.createIndex(Ai.readTimeIndex, Ai.readTimeIndexPath, {
                unique: !1
              }), e.createIndex(Ai.collectionReadTimeIndex, Ai.collectionReadTimeIndexPath, {
                unique: !1
              });
            }(e);
          })), n < 10 && r >= 10 && (u = u.next(function () {
            return i.rewriteCanonicalIds(o);
          })), n < 11 && r >= 11 && (u = u.next(function () {
            !function (t) {
              t.createObjectStore(Ri.store, {
                keyPath: Ri.keyPath
              });
            }(t), function (t) {
              t.createObjectStore(Vi.store, {
                keyPath: Vi.keyPath
              });
            }(t);
          })), u;
        }, t.prototype.addDocumentGlobal = function (t) {
          var e = 0;
          return t.store(Ai.store)._i(function (t, n) {
            e += vi(n);
          }).next(function () {
            var n = new Di(e);
            return t.store(Di.store).put(Di.key, n);
          });
        }, t.prototype.removeAcknowledgedMutations = function (t) {
          var e = this,
              n = t.store(_i.store),
              r = t.store(Ii.store);
          return n.ui().next(function (n) {
            return lr.forEach(n, function (n) {
              var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
              return r.ui(Ii.userMutationsIndex, i).next(function (r) {
                return lr.forEach(r, function (r) {
                  C(r.userId === n.userId);
                  var i = ti(e.serializer, r);
                  return ui(t, n.userId, i).next(function () {});
                });
              });
            });
          });
        },
        /**
         * Ensures that every document in the remote document cache has a corresponding sentinel row
         * with a sequence number. Missing rows are given the most recently used sequence number.
         */
        t.prototype.ensureSequenceNumbers = function (t) {
          var e = t.store(ki.store),
              n = t.store(Ai.store);
          return t.store(Oi.store).get(Oi.key).next(function (t) {
            var r = [];
            return n._i(function (n, i) {
              var o = new $(n),
                  u = function (t) {
                return [0, Br(t)];
              }(o);

              r.push(e.get(u).next(function (n) {
                return n ? lr.resolve() : function (n) {
                  return e.put(new ki(0, Br(n), t.highestListenSequenceNumber));
                }(o);
              }));
            }).next(function () {
              return lr.qn(r);
            });
          });
        }, t.prototype.createCollectionParentIndex = function (t, e) {
          // Create the index.
          t.createObjectStore(Si.store, {
            keyPath: Si.keyPath
          });

          var n = e.store(Si.store),
              r = new mi(),
              i = function i(t) {
            if (r.add(t)) {
              var e = t.K(),
                  i = t.q();
              return n.put({
                collectionId: e,
                parent: Br(i)
              });
            }
          }; // Helper to add an index entry iff we haven't already written it.
          // Index existing remote documents.


          return e.store(Ai.store)._i({
            li: !0
          }, function (t, e) {
            var n = new $(t);
            return i(n.q());
          }).next(function () {
            return e.store(Ei.store)._i({
              li: !0
            }, function (t, e) {
              t[0];
              var n = t[1],
                  r = (t[2], Wr(n));
              return i(r.q());
            });
          });
        }, t.prototype.rewriteCanonicalIds = function (t) {
          var e = this,
              n = t.store(xi.store);
          return n._i(function (t, r) {
            var i = ei(r),
                o = ni(e.serializer, i);
            return n.put(o);
          });
        }, t;
      }(),
          wi = function wi(t, e) {
        this.seconds = t, this.nanoseconds = e;
      },
          bi = function bi(t,
      /** Whether to allow shared access from multiple tabs. */
      e, n) {
        this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
      };
      /**
       * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
       * Also used for in-memory caching by IndexedDbIndexManager and initial index population
       * in indexeddb_schema.ts
       */

      /**
       * Name of the IndexedDb object store.
       *
       * Note that the name 'owner' is chosen to ensure backwards compatibility with
       * older clients that only supported single locked access to the persistence
       * layer.
       */


      bi.store = "owner",
      /**
           * The key string used for the single object that exists in the
           * DbPrimaryClient store.
           */
      bi.key = "owner";

      var _i = function _i(
      /**
           * The normalized user ID to which this queue belongs.
           */
      t,
      /**
           * An identifier for the highest numbered batch that has been acknowledged
           * by the server. All MutationBatches in this queue with batchIds less
           * than or equal to this value are considered to have been acknowledged by
           * the server.
           *
           * NOTE: this is deprecated and no longer used by the code.
           */
      e,
      /**
           * A stream token that was previously sent by the server.
           *
           * See StreamingWriteRequest in datastore.proto for more details about
           * usage.
           *
           * After sending this token, earlier tokens may not be used anymore so
           * only a single stream token is retained.
           *
           * NOTE: this is deprecated and no longer used by the code.
           */
      n) {
        this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
      };
      /** Name of the IndexedDb object store.  */


      _i.store = "mutationQueues",
      /** Keys are automatically assigned via the userId property. */
      _i.keyPath = "userId";
      /**
       * An object to be stored in the 'mutations' store in IndexedDb.
       *
       * Represents a batch of user-level mutations intended to be sent to the server
       * in a single write. Each user-level batch gets a separate DbMutationBatch
       * with a new batchId.
       */

      var Ii = function Ii(
      /**
           * The normalized user ID to which this batch belongs.
           */
      t,
      /**
           * An identifier for this batch, allocated using an auto-generated key.
           */
      e,
      /**
           * The local write time of the batch, stored as milliseconds since the
           * epoch.
           */
      n,
      /**
           * A list of "mutations" that represent a partial base state from when this
           * write batch was initially created. During local application of the write
           * batch, these baseMutations are applied prior to the real writes in order
           * to override certain document fields from the remote document cache. This
           * is necessary in the case of non-idempotent writes (e.g. `increment()`
           * transforms) to make sure that the local view of the modified documents
           * doesn't flicker if the remote document cache receives the result of the
           * non-idempotent write before the write is removed from the queue.
           *
           * These mutations are never sent to the backend.
           */
      r,
      /**
           * A list of mutations to apply. All mutations will be applied atomically.
           *
           * Mutations are serialized via toMutation().
           */
      i) {
        this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i;
      };
      /** Name of the IndexedDb object store.  */


      Ii.store = "mutations",
      /** Keys are automatically assigned via the userId, batchId properties. */
      Ii.keyPath = "batchId",
      /** The index name for lookup of mutations by user. */
      Ii.userMutationsIndex = "userMutationsIndex",
      /** The user mutations index is keyed by [userId, batchId] pairs. */
      Ii.userMutationsKeyPath = ["userId", "batchId"];

      var Ei =
      /** @class */
      function () {
        function t() {}
        /**
         * Creates a [userId] key for use in the DbDocumentMutations index to iterate
         * over all of a user's document mutations.
         */


        return t.prefixForUser = function (t) {
          return [t];
        },
        /**
         * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
         * index to iterate over all at document mutations for a given path or lower.
         */
        t.prefixForPath = function (t, e) {
          return [t, Br(e)];
        },
        /**
         * Creates a full index key of [userId, encodedPath, batchId] for inserting
         * and deleting into the DbDocumentMutations index.
         */
        t.key = function (t, e, n) {
          return [t, Br(e), n];
        }, t;
      }();

      Ei.store = "documentMutations",
      /**
           * Because we store all the useful information for this store in the key,
           * there is no useful information to store as the value. The raw (unencoded)
           * path cannot be stored because IndexedDb doesn't store prototype
           * information.
           */
      Ei.PLACEHOLDER = new Ei();

      var Ti = function Ti(t, e) {
        this.path = t, this.readTime = e;
      },
          Ni = function Ni(t, e) {
        this.path = t, this.version = e;
      },
          Ai = // TODO: We are currently storing full document keys almost three times
      // (once as part of the primary key, once - partly - as `parentPath` and once
      // inside the encoded documents). During our next migration, we should
      // rewrite the primary key as parentPath + document ID which would allow us
      // to drop one value.
      function Ai(
      /**
           * Set to an instance of DbUnknownDocument if the data for a document is
           * not known, but it is known that a document exists at the specified
           * version (e.g. it had a successful update applied to it)
           */
      t,
      /**
           * Set to an instance of a DbNoDocument if it is known that no document
           * exists.
           */
      e,
      /**
           * Set to an instance of a Document if there's a cached version of the
           * document.
           */
      n,
      /**
           * Documents that were written to the remote document store based on
           * a write acknowledgment are marked with `hasCommittedMutations`. These
           * documents are potentially inconsistent with the backend's copy and use
           * the write's commit version as their document version.
           */
      r,
      /**
           * When the document was read from the backend. Undefined for data written
           * prior to schema version 9.
           */
      i,
      /**
           * The path of the collection this document is part of. Undefined for data
           * written prior to schema version 9.
           */
      o) {
        this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o;
      };
      /**
       * Represents a document that is known to exist but whose data is unknown.
       * Stored in IndexedDb as part of a DbRemoteDocument object.
       */


      Ai.store = "remoteDocuments",
      /**
           * An index that provides access to all entries sorted by read time (which
           * corresponds to the last modification time of each row).
           *
           * This index is used to provide a changelog for Multi-Tab.
           */
      Ai.readTimeIndex = "readTimeIndex", Ai.readTimeIndexPath = "readTime",
      /**
           * An index that provides access to documents in a collection sorted by read
           * time.
           *
           * This index is used to allow the RemoteDocumentCache to fetch newly changed
           * documents in a collection.
           */
      Ai.collectionReadTimeIndex = "collectionReadTimeIndex", Ai.collectionReadTimeIndexPath = ["parentPath", "readTime"];
      /**
       * Contains a single entry that has metadata about the remote document cache.
       */

      var Di =
      /**
           * @param byteSize Approximately the total size in bytes of all the documents in the document
           * cache.
           */
      function Di(t) {
        this.byteSize = t;
      };

      Di.store = "remoteDocumentGlobal", Di.key = "remoteDocumentGlobalKey";

      var xi = function xi(
      /**
           * An auto-generated sequential numeric identifier for the query.
           *
           * Queries are stored using their canonicalId as the key, but these
           * canonicalIds can be quite long so we additionally assign a unique
           * queryId which can be used by referenced data structures (e.g.
           * indexes) to minimize the on-disk cost.
           */
      t,
      /**
           * The canonical string representing this query. This is not unique.
           */
      e,
      /**
           * The last readTime received from the Watch Service for this query.
           *
           * This is the same value as TargetChange.read_time in the protos.
           */
      n,
      /**
           * An opaque, server-assigned token that allows watching a query to be
           * resumed after disconnecting without retransmitting all the data
           * that matches the query. The resume token essentially identifies a
           * point in time from which the server should resume sending results.
           *
           * This is related to the snapshotVersion in that the resumeToken
           * effectively also encodes that value, but the resumeToken is opaque
           * and sometimes encodes additional information.
           *
           * A consequence of this is that the resumeToken should be used when
           * asking the server to reason about where this client is in the watch
           * stream, but the client should use the snapshotVersion for its own
           * purposes.
           *
           * This is the same value as TargetChange.resume_token in the protos.
           */
      r,
      /**
           * A sequence number representing the last time this query was
           * listened to, used for garbage collection purposes.
           *
           * Conventionally this would be a timestamp value, but device-local
           * clocks are unreliable and they must be able to create new listens
           * even while disconnected. Instead this should be a monotonically
           * increasing number that's incremented on each listen call.
           *
           * This is different from the queryId since the queryId is an
           * immutable identifier assigned to the Query on first use while
           * lastListenSequenceNumber is updated every time the query is
           * listened to.
           */
      i,
      /**
           * Denotes the maximum snapshot version at which the associated query view
           * contained no limbo documents.  Undefined for data written prior to
           * schema version 9.
           */
      o,
      /**
           * The query for this target.
           *
           * Because canonical ids are not unique we must store the actual query. We
           * use the proto to have an object we can persist without having to
           * duplicate translation logic to and from a `Query` object.
           */
      u) {
        this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = u;
      };

      xi.store = "targets",
      /** Keys are automatically assigned via the targetId property. */
      xi.keyPath = "targetId",
      /** The name of the queryTargets index. */
      xi.queryTargetsIndexName = "queryTargetsIndex",
      /**
           * The index of all canonicalIds to the targets that they match. This is not
           * a unique mapping because canonicalId does not promise a unique name for all
           * possible queries, so we append the targetId to make the mapping unique.
           */
      xi.queryTargetsKeyPath = ["canonicalId", "targetId"];
      /**
       * An object representing an association between a target and a document, or a
       * sentinel row marking the last sequence number at which a document was used.
       * Each document cached must have a corresponding sentinel row before lru
       * garbage collection is enabled.
       *
       * The target associations and sentinel rows are co-located so that orphaned
       * documents and their sequence numbers can be identified efficiently via a scan
       * of this store.
       */

      var ki = function ki(
      /**
           * The targetId identifying a target or 0 for a sentinel row.
           */
      t,
      /**
           * The path to the document, as encoded in the key.
           */
      e,
      /**
           * If this is a sentinel row, this should be the sequence number of the last
           * time the document specified by `path` was used. Otherwise, it should be
           * `undefined`.
           */
      n) {
        this.targetId = t, this.path = e, this.sequenceNumber = n;
      };
      /** Name of the IndexedDb object store.  */


      ki.store = "targetDocuments",
      /** Keys are automatically assigned via the targetId, path properties. */
      ki.keyPath = ["targetId", "path"],
      /** The index name for the reverse index. */
      ki.documentTargetsIndex = "documentTargetsIndex",
      /** We also need to create the reverse index for these properties. */
      ki.documentTargetsKeyPath = ["path", "targetId"];
      /**
       * A record of global state tracked across all Targets, tracked separately
       * to avoid the need for extra indexes.
       *
       * This should be kept in-sync with the proto used in the iOS client.
       */

      var Oi = function Oi(
      /**
           * The highest numbered target id across all targets.
           *
           * See DbTarget.targetId.
           */
      t,
      /**
           * The highest numbered lastListenSequenceNumber across all targets.
           *
           * See DbTarget.lastListenSequenceNumber.
           */
      e,
      /**
           * A global snapshot version representing the last consistent snapshot we
           * received from the backend. This is monotonically increasing and any
           * snapshots received from the backend prior to this version (e.g. for
           * targets resumed with a resumeToken) should be suppressed (buffered)
           * until the backend has caught up to this snapshot version again. This
           * prevents our cache from ever going backwards in time.
           */
      n,
      /**
           * The number of targets persisted.
           */
      r) {
        this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r;
      };
      /**
       * The key string used for the single object that exists in the
       * DbTargetGlobal store.
       */


      Oi.key = "targetGlobalKey", Oi.store = "targetGlobal";
      /**
       * An object representing an association between a Collection id (e.g. 'messages')
       * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
       * This is used to efficiently find all collections to query when performing
       * a Collection Group query.
       */

      var Si = function Si(
      /**
           * The collectionId (e.g. 'messages')
           */
      t,
      /**
           * The path to the parent (either a document location or an empty path for
           * a root-level collection).
           */
      e) {
        this.collectionId = t, this.parent = e;
      };
      /** Name of the IndexedDb object store. */


      function Pi(t) {
        t.createObjectStore(ki.store, {
          keyPath: ki.keyPath
        }).createIndex(ki.documentTargetsIndex, ki.documentTargetsKeyPath, {
          unique: !0
        }), // NOTE: This is unique only because the TargetId is the suffix.
        t.createObjectStore(xi.store, {
          keyPath: xi.keyPath
        }).createIndex(xi.queryTargetsIndexName, xi.queryTargetsKeyPath, {
          unique: !0
        }), t.createObjectStore(Oi.store);
      }

      Si.store = "collectionParents",
      /** Keys are automatically assigned via the collectionId, parent properties. */
      Si.keyPath = ["collectionId", "parent"];

      var Ci = function Ci( // Note: Previous schema versions included a field
      // "lastProcessedDocumentChangeId". Don't use anymore.

      /** The auto-generated client id assigned at client startup. */
      t,
      /** The last time this state was updated. */
      e,
      /** Whether the client's network connection is enabled. */
      n,
      /** Whether this client is running in a foreground tab. */
      r) {
        this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
      };
      /** Name of the IndexedDb object store. */


      Ci.store = "clientMetadata",
      /** Keys are automatically assigned via the clientId properties. */
      Ci.keyPath = "clientId";

      var Ri = function Ri(
      /** The ID of the loaded bundle. */
      t,
      /** The create time of the loaded bundle. */
      e,
      /** The schema version of the loaded bundle. */
      n) {
        this.bundleId = t, this.createTime = e, this.version = n;
      };
      /** Name of the IndexedDb object store. */


      Ri.store = "bundles", Ri.keyPath = "bundleId";

      var Vi = function Vi(
      /** The name of the query. */
      t,
      /** The read time of the results saved in the bundle from the named query. */
      e,
      /** The query saved in the bundle. */
      n) {
        this.name = t, this.readTime = e, this.bundledQuery = n;
      };
      /** Name of the IndexedDb object store. */


      Vi.store = "namedQueries", Vi.keyPath = "name";

      var Li = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([_i.store, Ii.store, Ei.store, Ai.store, xi.store, bi.store, Oi.store, ki.store], [Ci.store]), [Di.store]), [Si.store]), [Ri.store, Vi.store]),
          Ui =
      /** @class */
      function () {
        function t(t) {
          this.serializer = t;
        }

        return t.prototype.ro = function (t, e) {
          return Mi(t).get(e).next(function (t) {
            if (t) return {
              id: (e = t).bundleId,
              createTime: Zr(e.createTime),
              version: e.version
            };
            /** Encodes a DbBundle to a Bundle. */

            var e;
            /** Encodes a BundleMetadata to a DbBundle. */
          });
        }, t.prototype.oo = function (t, e) {
          return Mi(t).put({
            bundleId: (n = e).id,
            createTime: Xr(be(n.createTime)),
            version: n.version
          });
          var n;
          /** Encodes a DbNamedQuery to a NamedQuery. */
        }, t.prototype.co = function (t, e) {
          return qi(t).get(e).next(function (t) {
            if (t) return {
              name: (e = t).name,
              query: ri(e.bundledQuery),
              readTime: Zr(e.readTime)
            };
            var e;
            /** Encodes a NamedQuery from a bundle proto to a DbNamedQuery. */
          });
        }, t.prototype.uo = function (t, e) {
          return qi(t).put(function (t) {
            return {
              name: t.name,
              readTime: Xr(be(t.readTime)),
              bundledQuery: t.bundledQuery
            };
          }(e));
        }, t;
      }(); // V2 is no longer usable (see comment at top of file)
      // Visible for testing

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Helper to get a typed SimpleDbStore for the bundles object store.
       */


      function Mi(t) {
        return Yi.Ys(t, Ri.store);
      }
      /**
       * Helper to get a typed SimpleDbStore for the namedQueries object store.
       */


      function qi(t) {
        return Yi.Ys(t, Vi.store);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A persisted implementation of IndexManager.
       */


      var ji =
      /** @class */
      function () {
        function t() {
          /**
           * An in-memory copy of the index entries we've already written since the SDK
           * launched. Used to avoid re-writing the same entry repeatedly.
           *
           * This is *NOT* a complete cache of what's in persistence and so can never be used to
           * satisfy reads.
           */
          this.ao = new mi();
        }
        /**
         * Adds a new entry to the collection parent index.
         *
         * Repeated calls for the same collectionPath should be avoided within a
         * transaction as IndexedDbIndexManager only caches writes once a transaction
         * has been committed.
         */


        return t.prototype.Dr = function (t, e) {
          var n = this;

          if (!this.ao.has(e)) {
            var r = e.K(),
                i = e.q();
            t.es(function () {
              // Add the collection to the in memory cache only if the transaction was
              // successfully committed.
              n.ao.add(e);
            });
            var o = {
              collectionId: r,
              parent: Br(i)
            };
            return Fi(t).put(o);
          }

          return lr.resolve();
        }, t.prototype.As = function (t, e) {
          var n = [],
              r = IDBKeyRange.bound([e, ""], [W(e), ""],
          /*lowerOpen=*/
          !1,
          /*upperOpen=*/
          !0);
          return Fi(t).ui(r).next(function (t) {
            for (var r = 0, i = t; r < i.length; r++) {
              var o = i[r]; // This collectionId guard shouldn't be necessary (and isn't as long
              // as we're running in a real browser), but there's a bug in
              // indexeddbshim that breaks our range in our tests running in node:
              // https://github.com/axemclion/IndexedDBShim/issues/334

              if (o.collectionId !== e) break;
              n.push(Wr(o.parent));
            }

            return n;
          });
        }, t;
      }();
      /**
       * Helper to get a typed SimpleDbStore for the collectionParents
       * document store.
       */


      function Fi(t) {
        return Yi.Ys(t, Si.store);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Offset to ensure non-overlapping target ids. */

      /**
       * Generates monotonically increasing target IDs for sending targets to the
       * watch stream.
       *
       * The client constructs two generators, one for the target cache, and one for
       * for the sync engine (to generate limbo documents targets). These
       * generators produce non-overlapping IDs (by using even and odd IDs
       * respectively).
       *
       * By separating the target ID space, the query cache can generate target IDs
       * that persist across client restarts, while sync engine can independently
       * generate in-memory target IDs that are transient and can be reused after a
       * restart.
       */


      var zi =
      /** @class */
      function () {
        function t(t) {
          this.ho = t;
        }

        return t.prototype.next = function () {
          return this.ho += 2, this.ho;
        }, t.lo = function () {
          // The target cache generator must return '2' in its first call to `next()`
          // as there is no differentiation in the protocol layer between an unset
          // number and the number '0'. If we were to sent a target with target ID
          // '0', the backend would consider it unset and replace it with its own ID.
          return new t(0);
        }, t._o = function () {
          // Sync engine assigns target IDs for limbo document detection.
          return new t(-1);
        }, t;
      }(),
          Bi =
      /** @class */
      function () {
        function t(t, e) {
          this.Vr = t, this.serializer = e;
        } // PORTING NOTE: We don't cache global metadata for the target cache, since
        // some of it (in particular `highestTargetId`) can be modified by secondary
        // tabs. We could perhaps be more granular (and e.g. still cache
        // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
        // to IndexedDb whenever we need to read metadata. We can revisit if it turns
        // out to have a meaningful performance impact.


        return t.prototype.fo = function (t) {
          var e = this;
          return this.wo(t).next(function (n) {
            var r = new zi(n.highestTargetId);
            return n.highestTargetId = r.next(), e.Eo(t, n).next(function () {
              return n.highestTargetId;
            });
          });
        }, t.prototype.To = function (t) {
          return this.wo(t).next(function (t) {
            return H.N(new Q(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
          });
        }, t.prototype.Io = function (t) {
          return this.wo(t).next(function (t) {
            return t.highestListenSequenceNumber;
          });
        }, t.prototype.mo = function (t, e, n) {
          var r = this;
          return this.wo(t).next(function (i) {
            return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.M()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.Eo(t, i);
          });
        }, t.prototype.Ao = function (t, e) {
          var n = this;
          return this.Ro(t, e).next(function () {
            return n.wo(t).next(function (r) {
              return r.targetCount += 1, n.Po(e, r), n.Eo(t, r);
            });
          });
        }, t.prototype.yo = function (t, e) {
          return this.Ro(t, e);
        }, t.prototype.Vo = function (t, e) {
          var n = this;
          return this.po(t, e.targetId).next(function () {
            return Gi(t)["delete"](e.targetId);
          }).next(function () {
            return n.wo(t);
          }).next(function (e) {
            return C(e.targetCount > 0), e.targetCount -= 1, n.Eo(t, e);
          });
        },
        /**
         * Drops any targets with sequence number less than or equal to the upper bound, excepting those
         * present in `activeTargetIds`. Document associations for the removed targets are also removed.
         * Returns the number of targets removed.
         */
        t.prototype.mr = function (t, e, n) {
          var r = this,
              i = 0,
              o = [];
          return Gi(t)._i(function (u, s) {
            var a = ei(s);
            a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.Vo(t, a)));
          }).next(function () {
            return lr.qn(o);
          }).next(function () {
            return i;
          });
        },
        /**
         * Call provided function with each `TargetData` that we have cached.
         */
        t.prototype.Ue = function (t, e) {
          return Gi(t)._i(function (t, n) {
            var r = ei(n);
            e(r);
          });
        }, t.prototype.wo = function (t) {
          return Ki(t).get(Oi.key).next(function (t) {
            return C(null !== t), t;
          });
        }, t.prototype.Eo = function (t, e) {
          return Ki(t).put(Oi.key, e);
        }, t.prototype.Ro = function (t, e) {
          return Gi(t).put(ni(this.serializer, e));
        },
        /**
         * In-place updates the provided metadata to account for values in the given
         * TargetData. Saving is done separately. Returns true if there were any
         * changes to the metadata.
         */
        t.prototype.Po = function (t, e) {
          var n = !1;
          return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n;
        }, t.prototype.vo = function (t) {
          return this.wo(t).next(function (t) {
            return t.targetCount;
          });
        }, t.prototype.bo = function (t, e) {
          // Iterating by the canonicalId may yield more than one result because
          // canonicalId values are not required to be unique per target. This query
          // depends on the queryTargets index to be efficient.
          var n = ot(e),
              r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]),
              i = null;
          return Gi(t)._i({
            range: r,
            index: xi.queryTargetsIndexName
          }, function (t, n, r) {
            var o = ei(n); // After finding a potential match, check that the target is
            // actually equal to the requested target.

            ut(e, o.target) && (i = o, r.done());
          }).next(function () {
            return i;
          });
        }, t.prototype.So = function (t, e, n) {
          var r = this,
              i = [],
              o = Wi(t); // PORTING NOTE: The reverse index (documentsTargets) is maintained by
          // IndexedDb.

          return e.forEach(function (e) {
            var u = Br(e.path);
            i.push(o.put(new ki(n, u))), i.push(r.Vr.Do(t, n, e));
          }), lr.qn(i);
        }, t.prototype.Co = function (t, e, n) {
          var r = this,
              i = Wi(t); // PORTING NOTE: The reverse index (documentsTargets) is maintained by
          // IndexedDb.

          return lr.forEach(e, function (e) {
            var o = Br(e.path);
            return lr.qn([i["delete"]([n, o]), r.Vr.No(t, n, e)]);
          });
        }, t.prototype.po = function (t, e) {
          var n = Wi(t),
              r = IDBKeyRange.bound([e], [e + 1],
          /*lowerOpen=*/
          !1,
          /*upperOpen=*/
          !0);
          return n["delete"](r);
        }, t.prototype.xo = function (t, e) {
          var n = IDBKeyRange.bound([e], [e + 1],
          /*lowerOpen=*/
          !1,
          /*upperOpen=*/
          !0),
              r = Wi(t),
              i = Dt();
          return r._i({
            range: n,
            li: !0
          }, function (t, e, n) {
            var r = Wr(t[1]),
                o = new Z(r);
            i = i.add(o);
          }).next(function () {
            return i;
          });
        }, t.prototype.Qr = function (t, e) {
          var n = Br(e.path),
              r = IDBKeyRange.bound([n], [W(n)],
          /*lowerOpen=*/
          !1,
          /*upperOpen=*/
          !0),
              i = 0;
          return Wi(t)._i({
            index: ki.documentTargetsIndex,
            li: !0,
            range: r
          }, function (t, e, n) {
            var r = t[0]; // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.

            t[1];
            0 !== r && (i++, n.done());
          }).next(function () {
            return i > 0;
          });
        },
        /**
         * Looks up a TargetData entry by target ID.
         *
         * @param targetId The target ID of the TargetData entry to look up.
         * @return The cached TargetData entry, or null if the cache has no entry for
         * the target.
         */
        // PORTING NOTE: Multi-tab only.
        t.prototype.Ze = function (t, e) {
          return Gi(t).get(e).next(function (t) {
            return t ? ei(t) : null;
          });
        }, t;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Helper to get a typed SimpleDbStore for the queries object store.
       */


      function Gi(t) {
        return Yi.Ys(t, xi.store);
      }
      /**
       * Helper to get a typed SimpleDbStore for the target globals object store.
       */


      function Ki(t) {
        return Yi.Ys(t, Oi.store);
      }
      /**
       * Helper to get a typed SimpleDbStore for the document target object store.
       */


      function Wi(t) {
        return Yi.Ys(t, ki.store);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var Qi = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
          Hi =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this) || this).Lr = t, r.Fo = n, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(gr),
          Yi =
      /** @class */
      function () {
        function t(
        /**
         * Whether to synchronize the in-memory state of multiple tabs and share
         * access to local persistence.
         */
        e, n, r, i, o, u, s, a, c,
        /**
         * If set to true, forcefully obtains database access. Existing tabs will
         * no longer be able to access IndexedDB.
         */
        h) {
          if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, this.Cs = o, this.window = u, this.document = s, this.Oo = c, this.Mo = h, this.ko = null, this.$o = !1, this.isPrimary = !1, this.networkEnabled = !0,
          /** Our window.unload handler, if registered. */
          this.Lo = null, this.inForeground = !1,
          /** Our 'visibilitychange' listener if registered. */
          this.Bo = null,
          /** The client metadata refresh task. */
          this.qo = null,
          /** The last time we garbage collected the client metadata object store. */
          this.Uo = Number.NEGATIVE_INFINITY,
          /** A listener to notify on primary state changes. */
          this.Qo = function (t) {
            return Promise.resolve();
          }, !t.Gs()) throw new L(V.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
          this.Vr = new Xi(this, i), this.Ko = n + "main", this.serializer = new Qr(a), this.Wo = new Er(this.Ko, 11, new gi(this.serializer)), this.jo = new Bi(this.Vr, this.serializer), this.os = new ji(), this.ss = function (t, e) {
            return new hi(t, e);
          }(this.serializer, this.os), this.Go = new Ui(this.serializer), this.window && this.window.localStorage ? this.zo = this.window.localStorage : (this.zo = null, !1 === h && k("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
        }

        return t.Ys = function (t, e) {
          if (t instanceof Hi) return Er.Ys(t.Lr, e);
          throw P();
        },
        /**
         * Attempt to start IndexedDb persistence.
         *
         * @return {Promise<void>} Whether persistence was enabled.
         */
        t.prototype.start = function () {
          var t = this; // NOTE: This is expected to fail sometimes (in the case of another tab
          // already having the persistence lock), so it's the first thing we should
          // do.

          return this.Ho().then(function () {
            if (!t.isPrimary && !t.allowTabSynchronization) // Fail `start()` if `synchronizeTabs` is disabled and we cannot
              // obtain the primary lease.
              throw new L(V.FAILED_PRECONDITION, Qi);
            return t.Jo(), t.Yo(), t.Xo(), t.runTransaction("getHighestListenSequenceNumber", "readonly", function (e) {
              return t.jo.Io(e);
            });
          }).then(function (e) {
            t.ko = new _r(e, t.Oo);
          }).then(function () {
            t.$o = !0;
          })["catch"](function (e) {
            return t.Wo && t.Wo.close(), Promise.reject(e);
          });
        },
        /**
         * Registers a listener that gets called when the primary state of the
         * instance changes. Upon registering, this listener is invoked immediately
         * with the current primary state.
         *
         * PORTING NOTE: This is only used for Web multi-tab.
         */
        t.prototype.Zo = function (t) {
          var r = this;
          return this.Qo = function (i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                return this.lr ? [2
                /*return*/
                , t(i)] : [2
                /*return*/
                ];
              });
            });
          }, t(this.isPrimary);
        },
        /**
         * Registers a listener that gets called when the database receives a
         * version change event indicating that it has deleted.
         *
         * PORTING NOTE: This is only used for Web multi-tab.
         */
        t.prototype.tc = function (t) {
          var r = this;
          this.Wo.ti(function (i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                switch (e.label) {
                  case 0:
                    return null === i.newVersion ? [4
                    /*yield*/
                    , t()] : [3
                    /*break*/
                    , 2];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          });
        },
        /**
         * Adjusts the current network state in the client's metadata, potentially
         * affecting the primary lease.
         *
         * PORTING NOTE: This is only used for Web multi-tab.
         */
        t.prototype.ec = function (t) {
          var r = this;
          this.networkEnabled !== t && (this.networkEnabled = t, // Schedule a primary lease refresh for immediate execution. The eventual
          // lease update will be propagated via `primaryStateListener`.
          this.Cs.Ri(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.lr ? [4
                    /*yield*/
                    , this.Ho()] : [3
                    /*break*/
                    , 2];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          }));
        },
        /**
         * Updates the client metadata in IndexedDb and attempts to either obtain or
         * extend the primary lease for the local client. Asynchronously notifies the
         * primary state listener if the client either newly obtained or released its
         * primary lease.
         */
        t.prototype.Ho = function () {
          var t = this;
          return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", function (e) {
            return Ji(e).put(new Ci(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next(function () {
              if (t.isPrimary) return t.nc(e).next(function (e) {
                e || (t.isPrimary = !1, t.Cs.Mi(function () {
                  return t.Qo(!1);
                }));
              });
            }).next(function () {
              return t.sc(e);
            }).next(function (n) {
              return t.isPrimary && !n ? t.ic(e).next(function () {
                return !1;
              }) : !!n && t.rc(e).next(function () {
                return !0;
              });
            });
          })["catch"](function (e) {
            if (Ar(e)) // Proceed with the existing state. Any subsequent access to
              // IndexedDB will verify the lease.
              return x("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
            if (!t.allowTabSynchronization) throw e;
            return x("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e),
            /* isPrimary= */
            !1;
          }).then(function (e) {
            t.isPrimary !== e && t.Cs.Mi(function () {
              return t.Qo(e);
            }), t.isPrimary = e;
          });
        }, t.prototype.nc = function (t) {
          var e = this;
          return $i(t).get(bi.key).next(function (t) {
            return lr.resolve(e.oc(t));
          });
        }, t.prototype.cc = function (t) {
          return Ji(t)["delete"](this.clientId);
        },
        /**
         * If the garbage collection threshold has passed, prunes the
         * RemoteDocumentChanges and the ClientMetadata store based on the last update
         * time of all clients.
         */
        t.prototype.uc = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e,
                r,
                i,
                o,
                u = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return !this.isPrimary || this.ac(this.Uo, 18e5) ? [3
                  /*break*/
                  , 2] : (this.Uo = Date.now(), [4
                  /*yield*/
                  , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function (e) {
                    var n = t.Ys(e, Ci.store);
                    return n.ui().next(function (t) {
                      var e = u.hc(t, 18e5),
                          r = t.filter(function (t) {
                        return -1 === e.indexOf(t);
                      }); // Delete metadata for clients that are no longer considered active.

                      return lr.forEach(r, function (t) {
                        return n["delete"](t.clientId);
                      }).next(function () {
                        return r;
                      });
                    });
                  })["catch"](function () {
                    return [];
                  })]);

                case 1:
                  // Delete potential leftover entries that may continue to mark the
                  // inactive clients as zombied in LocalStorage.
                  // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                  // the client atomically, but we can't. So we opt to delete the IndexedDb
                  // entries first to avoid potentially reviving a zombied client.
                  if (e = n.sent(), this.zo) for (r = 0, i = e; r < i.length; r++) {
                    o = i[r], this.zo.removeItem(this.lc(o.clientId));
                  }
                  n.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        },
        /**
         * Schedules a recurring timer to update the client metadata and to either
         * extend or acquire the primary lease if the client is eligible.
         */
        t.prototype.Xo = function () {
          var t = this;
          this.qo = this.Cs.Us("client_metadata_refresh"
          /* ClientMetadataRefresh */
          , 4e3, function () {
            return t.Ho().then(function () {
              return t.uc();
            }).then(function () {
              return t.Xo();
            });
          });
        },
        /** Checks whether `client` is the local client. */
        t.prototype.oc = function (t) {
          return !!t && t.ownerId === this.clientId;
        },
        /**
         * Evaluate the state of all active clients and determine whether the local
         * client is or can act as the holder of the primary lease. Returns whether
         * the client is eligible for the lease, but does not actually acquire it.
         * May return 'false' even if there is no active leaseholder and another
         * (foreground) client should become leaseholder instead.
         */
        t.prototype.sc = function (t) {
          var e = this;
          return this.Mo ? lr.resolve(!0) : $i(t).get(bi.key).next(function (n) {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            // - the `forceOwningTab` setting was passed in.
            if (null !== n && e.ac(n.leaseTimestampMs, 5e3) && !e._c(n.ownerId)) {
              if (e.oc(n) && e.networkEnabled) return !0;

              if (!e.oc(n)) {
                if (!n.allowTabSynchronization) // Fail the `canActAsPrimary` check if the current leaseholder has
                  // not opted into multi-tab synchronization. If this happens at
                  // client startup, we reject the Promise returned by
                  // `enablePersistence()` and the user can continue to use Firestore
                  // with in-memory persistence.
                  // If this fails during a lease refresh, we will instead block the
                  // AsyncQueue from executing further operations. Note that this is
                  // acceptable since mixing & matching different `synchronizeTabs`
                  // settings is not supported.
                  // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                  // no longer be turned off.
                  throw new L(V.FAILED_PRECONDITION, Qi);
                return !1;
              }
            }

            return !(!e.networkEnabled || !e.inForeground) || Ji(t).ui().next(function (t) {
              return void 0 === e.hc(t, 5e3).find(function (t) {
                if (e.clientId !== t.clientId) {
                  var n = !e.networkEnabled && t.networkEnabled,
                      r = !e.inForeground && t.inForeground,
                      i = e.networkEnabled === t.networkEnabled;
                  if (n || r && i) return !0;
                }

                return !1;
              });
            });
          }).next(function (t) {
            return e.isPrimary !== t && x("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t;
          });
        }, t.prototype.fc = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var t = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                  // has obtained the primary lease.
                  // The shutdown() operations are idempotent and can be called even when
                  // start() aborted (e.g. because it couldn't acquire the persistence lease).
                  return this.$o = !1, this.dc(), this.qo && (this.qo.cancel(), this.qo = null), this.wc(), this.Ec(), [4
                  /*yield*/
                  , this.Wo.runTransaction("shutdown", "readwrite", [bi.store, Ci.store], function (e) {
                    var n = new Hi(e, _r.Ds);
                    return t.ic(n).next(function () {
                      return t.cc(n);
                    });
                  })];

                case 1:
                  // The shutdown() operations are idempotent and can be called even when
                  // start() aborted (e.g. because it couldn't acquire the persistence lease).
                  // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                  // has obtained the primary lease.
                  return e.sent(), this.Wo.close(), // Remove the entry marking the client as zombied from LocalStorage since
                  // we successfully deleted its metadata from IndexedDb.
                  this.Tc(), [2
                  /*return*/
                  ];
              }
            });
          });
        },
        /**
         * Returns clients that are not zombied and have an updateTime within the
         * provided threshold.
         */
        t.prototype.hc = function (t, e) {
          var n = this;
          return t.filter(function (t) {
            return n.ac(t.updateTimeMs, e) && !n._c(t.clientId);
          });
        },
        /**
         * Returns the IDs of the clients that are currently active. If multi-tab
         * is not supported, returns an array that only contains the local client's
         * ID.
         *
         * PORTING NOTE: This is only used for Web multi-tab.
         */
        t.prototype.Ic = function () {
          var t = this;
          return this.runTransaction("getActiveClients", "readonly", function (e) {
            return Ji(e).ui().next(function (e) {
              return t.hc(e, 18e5).map(function (t) {
                return t.clientId;
              });
            });
          });
        }, Object.defineProperty(t.prototype, "lr", {
          get: function get() {
            return this.$o;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.mc = function (t) {
          return ii.vr(t, this.serializer, this.os, this.Vr);
        }, t.prototype.Ac = function () {
          return this.jo;
        }, t.prototype.Rc = function () {
          return this.ss;
        }, t.prototype.Pc = function () {
          return this.os;
        }, t.prototype.gc = function () {
          return this.Go;
        }, t.prototype.runTransaction = function (t, e, n) {
          var r = this;
          x("IndexedDbPersistence", "Starting transaction:", t);
          var i,
              o = "readonly" === e ? "readonly" : "readwrite"; // Do all transactions as readwrite against all object stores, since we
          // are the only reader/writer.

          return this.Wo.runTransaction(t, o, Li, function (o) {
            return i = new Hi(o, r.ko ? r.ko.next() : _r.Ds), "readwrite-primary" === e ? r.nc(i).next(function (t) {
              return !!t || r.sc(i);
            }).next(function (e) {
              if (!e) throw k("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, r.Cs.Mi(function () {
                return r.Qo(!1);
              }), new L(V.FAILED_PRECONDITION, mr);
              return n(i);
            }).next(function (t) {
              return r.rc(i).next(function () {
                return t;
              });
            }) : r.yc(i).next(function () {
              return n(i);
            });
          }).then(function (t) {
            return i.ns(), t;
          });
        },
        /**
         * Verifies that the current tab is the primary leaseholder or alternatively
         * that the leaseholder has opted into multi-tab synchronization.
         */
        // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
        // be turned off.
        t.prototype.yc = function (t) {
          var e = this;
          return $i(t).get(bi.key).next(function (t) {
            if (null !== t && e.ac(t.leaseTimestampMs, 5e3) && !e._c(t.ownerId) && !e.oc(t) && !(e.Mo || e.allowTabSynchronization && t.allowTabSynchronization)) throw new L(V.FAILED_PRECONDITION, Qi);
          });
        },
        /**
         * Obtains or extends the new primary lease for the local client. This
         * method does not verify that the client is eligible for this lease.
         */
        t.prototype.rc = function (t) {
          var e = new bi(this.clientId, this.allowTabSynchronization, Date.now());
          return $i(t).put(bi.key, e);
        }, t.Gs = function () {
          return Er.Gs();
        },
        /** Checks the primary lease and removes it if we are the current primary. */
        t.prototype.ic = function (t) {
          var e = this,
              n = $i(t);
          return n.get(bi.key).next(function (t) {
            return e.oc(t) ? (x("IndexedDbPersistence", "Releasing primary lease."), n["delete"](bi.key)) : lr.resolve();
          });
        },
        /** Verifies that `updateTimeMs` is within `maxAgeMs`. */
        t.prototype.ac = function (t, e) {
          var n = Date.now();
          return !(t < n - e || t > n && (k("Detected an update time that is in the future: " + t + " > " + n), 1));
        }, t.prototype.Jo = function () {
          var t = this;
          null !== this.document && "function" == typeof this.document.addEventListener && (this.Bo = function () {
            t.Cs.Ri(function () {
              return t.inForeground = "visible" === t.document.visibilityState, t.Ho();
            });
          }, this.document.addEventListener("visibilitychange", this.Bo), this.inForeground = "visible" === this.document.visibilityState);
        }, t.prototype.wc = function () {
          this.Bo && (this.document.removeEventListener("visibilitychange", this.Bo), this.Bo = null);
        },
        /**
         * Attaches a window.unload handler that will synchronously write our
         * clientId to a "zombie client id" location in LocalStorage. This can be used
         * by tabs trying to acquire the primary lease to determine that the lease
         * is no longer valid even if the timestamp is recent. This is particularly
         * important for the refresh case (so the tab correctly re-acquires the
         * primary lease). LocalStorage is used for this rather than IndexedDb because
         * it is a synchronous API and so can be used reliably from  an unload
         * handler.
         */
        t.prototype.Yo = function () {
          var t,
              e = this;
          "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Lo = function () {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            e.dc(), e.Cs.Ri(function () {
              return e.fc();
            });
          }, this.window.addEventListener("unload", this.Lo));
        }, t.prototype.Ec = function () {
          this.Lo && (this.window.removeEventListener("unload", this.Lo), this.Lo = null);
        },
        /**
         * Returns whether a client is "zombied" based on its LocalStorage entry.
         * Clients become zombied when their tab closes without running all of the
         * cleanup logic in `shutdown()`.
         */
        t.prototype._c = function (t) {
          var e;

          try {
            var n = null !== (null === (e = this.zo) || void 0 === e ? void 0 : e.getItem(this.lc(t)));
            return x("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), n;
          } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return k("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
          }
        },
        /**
         * Record client as zombied (a client that had its tab closed). Zombied
         * clients are ignored during primary tab selection.
         */
        t.prototype.dc = function () {
          if (this.zo) try {
            this.zo.setItem(this.lc(this.clientId), String(Date.now()));
          } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            k("Failed to set zombie client id.", t);
          }
        },
        /** Removes the zombied client entry if it exists. */
        t.prototype.Tc = function () {
          if (this.zo) try {
            this.zo.removeItem(this.lc(this.clientId));
          } catch (t) {// Ignore
          }
        }, t.prototype.lc = function (t) {
          return "firestore_zombie_" + this.persistenceKey + "_" + t;
        }, t;
      }();
      /**
       * Oldest acceptable age in milliseconds for client metadata before the client
       * is considered inactive and its associated data is garbage collected.
       */

      /**
       * Helper to get a typed SimpleDbStore for the primary client object store.
       */


      function $i(t) {
        return Yi.Ys(t, bi.store);
      }
      /**
       * Helper to get a typed SimpleDbStore for the client metadata object store.
       */


      function Ji(t) {
        return Yi.Ys(t, Ci.store);
      }
      /** Provides LRU functionality for IndexedDB persistence. */


      var Xi =
      /** @class */
      function () {
        function t(t, e) {
          this.db = t, this.cr = new zr(this, e);
        }

        return t.prototype.Er = function (t) {
          var e = this.Vc(t);
          return this.db.Ac().vo(t).next(function (t) {
            return e.next(function (e) {
              return t + e;
            });
          });
        }, t.prototype.Vc = function (t) {
          var e = 0;
          return this.Ir(t, function (t) {
            e++;
          }).next(function () {
            return e;
          });
        }, t.prototype.Ue = function (t, e) {
          return this.db.Ac().Ue(t, e);
        }, t.prototype.Ir = function (t, e) {
          return this.vc(t, function (t, n) {
            return e(n);
          });
        }, t.prototype.Do = function (t, e, n) {
          return Zi(t, n);
        }, t.prototype.No = function (t, e, n) {
          return Zi(t, n);
        }, t.prototype.mr = function (t, e, n) {
          return this.db.Ac().mr(t, e, n);
        }, t.prototype.qr = function (t, e) {
          return Zi(t, e);
        },
        /**
         * Returns true if anything would prevent this document from being garbage
         * collected, given that the document in question is not present in any
         * targets and has a sequence number less than or equal to the upper bound for
         * the collection run.
         */
        t.prototype.bc = function (t, e) {
          return function (t, e) {
            var n = !1;
            return ci(t).fi(function (r) {
              return oi(t, r, e).next(function (t) {
                return t && (n = !0), lr.resolve(!t);
              });
            }).next(function () {
              return n;
            });
          }(t, e);
        }, t.prototype.Ar = function (t, e) {
          var n = this,
              r = this.db.Rc().Xr(),
              i = [],
              o = 0;
          return this.vc(t, function (u, s) {
            if (s <= e) {
              var a = n.bc(t, u).next(function (e) {
                if (!e) // Our size accounting requires us to read all documents before
                  // removing them.
                  return o++, r.Jn(t, u).next(function () {
                    return r.Hn(u), Wi(t)["delete"]([0, Br(u.path)]);
                  });
              });
              i.push(a);
            }
          }).next(function () {
            return lr.qn(i);
          }).next(function () {
            return r.apply(t);
          }).next(function () {
            return o;
          });
        }, t.prototype.removeTarget = function (t, e) {
          var n = e.dt(t.Fo);
          return this.db.Ac().yo(t, n);
        }, t.prototype.Sc = function (t, e) {
          return Zi(t, e);
        },
        /**
         * Call provided function for each document in the cache that is 'orphaned'. Orphaned
         * means not a part of any target, so the only entry in the target-document index for
         * that document will be the sentinel row (targetId 0), which will also have the sequence
         * number for the last time the document was accessed.
         */
        t.prototype.vc = function (t, e) {
          var n,
              r = Wi(t),
              i = _r.Ds;
          return r._i({
            index: ki.documentTargetsIndex
          }, function (t, r) {
            var o = t[0],
                u = (t[1], r.path),
                s = r.sequenceNumber;
            0 === o ? ( // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            i !== _r.Ds && e(new Z(Wr(n)), i), // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            i = s, n = u) : // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            i = _r.Ds;
          }).next(function () {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            i !== _r.Ds && e(new Z(Wr(n)), i);
          });
        }, t.prototype.Pr = function (t) {
          return this.db.Rc().eo(t);
        }, t;
      }();

      function Zi(t, e) {
        return Wi(t).put(
        /**
        * @return A value suitable for writing a sentinel row in the target-document
        * store.
        */
        function (t, e) {
          return new ki(0, Br(t.path), e);
        }(e, t.Fo));
      }
      /**
       * Generates a string used as a prefix when storing data in IndexedDB and
       * LocalStorage.
       */


      function to(t, e) {
        // Use two different prefix formats:
        //   * firestore / persistenceKey / projectID . databaseID / ...
        //   * firestore / persistenceKey / projectID / ...
        // projectIDs are DNS-compatible names and cannot contain dots
        // so there's no danger of collisions.
        var n = t.projectId;
        return t.o || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
        /**
        * Implements `LocalStore` interface.
        *
        * Note: some field defined in this class might have public access level, but
        * the class is not exported so they are only accessible from this module.
        * This is useful to implement optional features (like bundles) in free
        * functions, such that they are tree-shakeable.
        */
        ;
      }

      var eo =
      /** @class */
      function () {
        function t(
        /** Manages our in-memory or durable persistence. */
        t, e, n, r) {
          this.persistence = t, this.Dc = e, this.serializer = r,
          /**
               * Maps a targetID to data about its target.
               *
               * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
               * of `applyRemoteEvent()` idempotent.
               */
          this.Cc = new vt(G),
          /** Maps a target to its targetID. */
          // TODO(wuandy): Evaluate if TargetId can be part of Target.
          this.Nc = new fr(function (t) {
            return ot(t);
          }, ut),
          /**
               * The read time of the last entry processed by `getNewDocumentChanges()`.
               *
               * PORTING NOTE: This is only used for multi-tab synchronization.
               */
          this.xc = H.min(), this.rs = t.mc(n), this.Fc = t.Rc(), this.jo = t.Ac(), this.Oc = new wr(this.Fc, this.rs, this.persistence.Pc()), this.Go = t.gc(), this.Dc.Mc(this.Oc);
        }

        return t.prototype._r = function (t) {
          var e = this;
          return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function (n) {
            return t.Rr(n, e.Cc);
          });
        }, t;
      }();

      function no(
      /** Manages our in-memory or durable persistence. */
      t, e, n, r) {
        return new eo(t, e, n, r);
      }
      /**
       * Tells the LocalStore that the currently authenticated user has changed.
       *
       * In response the local store switches the mutation queue to the new user and
       * returns any resulting document changes.
       */
      // PORTING NOTE: Android and iOS only return the documents affected by the
      // change.


      function ro(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o, u;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return e = R(t), i = e.rs, o = e.Oc, [4
                /*yield*/
                , e.persistence.runTransaction("Handle user change", "readonly", function (t) {
                  // Swap out the mutation queue, grabbing the pending mutation batches
                  // before and after.
                  var n;
                  return e.rs.Mr(t).next(function (u) {
                    return n = u, i = e.persistence.mc(r), // Recreate our LocalDocumentsView using the new
                    // MutationQueue.
                    o = new wr(e.Fc, i, e.persistence.Pc()), i.Mr(t);
                  }).next(function (e) {
                    for (var r = [], i = [], u = Dt(), s = 0, a = n // Union the old/new changed keys.
                    ; s < a.length; s++) {
                      var c = a[s];
                      r.push(c.batchId);

                      for (var h = 0, f = c.mutations; h < f.length; h++) {
                        var l = f[h];
                        u = u.add(l.key);
                      }
                    }

                    for (var p = 0, d = e; p < d.length; p++) {
                      var v = d[p];
                      i.push(v.batchId);

                      for (var y = 0, m = v.mutations; y < m.length; y++) {
                        var g = m[y];
                        u = u.add(g.key);
                      }
                    } // Return the set of all (potentially) changed documents and the list
                    // of mutation batch IDs that were affected by change.


                    return o._s(t, u).next(function (t) {
                      return {
                        kc: t,
                        $c: r,
                        Lc: i
                      };
                    });
                  });
                })];

              case 1:
                return u = n.sent(), [2
                /*return*/
                , (e.rs = i, e.Oc = o, e.Dc.Mc(e.Oc), u)];
            }
          });
        });
      }
      /* Accepts locally generated Mutations and commit them to storage. */

      /**
       * Acknowledges the given batch.
       *
       * On the happy path when a batch is acknowledged, the local store will
       *
       *  + remove the batch from the mutation queue;
       *  + apply the changes to the remote document cache;
       *  + recalculate the latency compensated view implied by those changes (there
       *    may be mutations in the queue that affect the documents but haven't been
       *    acknowledged yet); and
       *  + give the changed documents back the sync engine
       *
       * @returns The resulting (modified) documents.
       */


      function io(t, e) {
        var n = R(t);
        return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function (t) {
          var r = e.batch.keys(),
              i = n.Fc.Xr({
            Zr: !0
          });
          return function (t, e, n, r) {
            var i = n.batch,
                o = i.keys(),
                u = lr.resolve();
            return o.forEach(function (t) {
              u = u.next(function () {
                return r.Jn(e, t);
              }).next(function (e) {
                var o = e,
                    u = n.Sn.get(t);
                C(null !== u), (!o || o.version.F(u) < 0) && (o = i.yn(t, o, n)) && // We use the commitVersion as the readTime rather than the
                // document's updateTime since the updateTime is not advanced
                // for updates that do not modify the underlying document.
                r.jn(o, n.bn);
              });
            }), u.next(function () {
              return t.rs.$r(e, i);
            });
          }(n, t, e, i).next(function () {
            return i.apply(t);
          }).next(function () {
            return n.rs.Ur(t);
          }).next(function () {
            return n.Oc._s(t, r);
          });
        });
      }
      /**
       * Removes mutations from the MutationQueue for the specified batch;
       * LocalDocuments will be recalculated.
       *
       * @returns The resulting modified documents.
       */

      /**
       * Returns the last consistent snapshot processed (used by the RemoteStore to
       * determine whether to buffer incoming snapshots from the backend).
       */


      function oo(t) {
        var e = R(t);
        return e.persistence.runTransaction("Get last remote snapshot version", "readonly", function (t) {
          return e.jo.To(t);
        });
      }
      /**
       * Updates the "ground-state" (remote) documents. We assume that the remote
       * event reflects any write batches that have been acknowledged or rejected
       * (i.e. we do not re-apply local mutations to updates from this event).
       *
       * LocalDocuments are re-calculated if there are remaining mutations in the
       * queue.
       */


      function uo(t, e) {
        var n = R(t),
            r = e.ft,
            i = n.Cc;
        return n.persistence.runTransaction("Apply remote event", "readwrite-primary", function (t) {
          var o = n.Fc.Xr({
            Zr: !0
          }); // Reset newTargetDataByTargetMap in case this transaction gets re-run.

          i = n.Cc;
          var u = [];
          e.re.forEach(function (e, o) {
            var s = i.get(o);

            if (s) {
              // Only update the remote keys if the target is still active. This
              // ensures that we can persist the updated target data along with
              // the updated assignment.
              u.push(n.jo.Co(t, e.de, o).next(function () {
                return n.jo.So(t, e._e, o);
              }));
              var a = e.resumeToken; // Update the resume token if the change includes one.

              if (a.ht() > 0) {
                var c = s.wt(a, r).dt(t.Fo);
                i = i.Tt(o, c), // Update the target data if there are target changes (or if
                // sufficient time has passed since the last update).

                /**
                * Returns true if the newTargetData should be persisted during an update of
                * an active target. TargetData should always be persisted when a target is
                * being released and should not call this function.
                *
                * While the target is active, TargetData updates can be omitted when nothing
                * about the target has changed except metadata like the resume token or
                * snapshot version. Occasionally it's worth the extra write to prevent these
                * values from getting too stale after a crash, but this doesn't have to be
                * too frequent.
                */
                function (t, e, n) {
                  // Always persist target data if we don't already have a resume token.
                  return C(e.resumeToken.ht() > 0), 0 === t.resumeToken.ht() || // Don't allow resume token changes to be buffered indefinitely. This
                  // allows us to be reasonably up-to-date after a crash and avoids needing
                  // to loop over all active queries on shutdown. Especially in the browser
                  // we may not get time to do anything interesting while the current tab is
                  // closing.
                  e.ft.O() - t.ft.O() >= 3e8 || n._e.size + n.fe.size + n.de.size > 0;
                }(s, c, e) && u.push(n.jo.yo(t, c));
              }
            }
          });

          var s = _t(); // HACK: The only reason we allow a null snapshot version is so that we
          // can synthesize remote events when we get permission denied errors while
          // trying to resolve the state of a locally cached document that is in
          // limbo.


          if (e.ce.forEach(function (r, i) {
            e.ue.has(r) && u.push(n.persistence.Vr.Sc(t, r));
          }), // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
          // documents in advance in a single call.
          u.push(
          /**
          * Populates document change buffer with documents from backend or a bundle.
          * Returns the document changes resulting from applying those documents.
          *
          * @param txn Transaction to use to read existing documents from storage.
          * @param documentBuffer Document buffer to collect the resulted changes to be
          *        applied to storage.
          * @param documents Documents to be applied.
          * @param globalVersion A `SnapshotVersion` representing the read time if all
          *        documents have the same read time.
          * @param documentVersions A DocumentKey-to-SnapshotVersion map if documents
          *        have their own read time.
          *
          * Note: this function will use `documentVersions` if it is defined;
          * when it is not defined, resorts to `globalVersion`.
          */
          function (t, e, n, r, // TODO(wuandy): We could add `readTime` to MaybeDocument instead to remove
          // this parameter.
          i) {
            var o = Dt();
            return n.forEach(function (t) {
              return o = o.add(t);
            }), e.getEntries(t, o).next(function (t) {
              var i = _t();

              return n.forEach(function (n, o) {
                var u = t.get(n),
                    s = r; // Note: The order of the steps below is important, since we want
                // to ensure that rejected limbo resolutions (which fabricate
                // NoDocuments with SnapshotVersion.min()) never add documents to
                // cache.

                o instanceof kn && o.version.isEqual(H.min()) ? ( // NoDocuments with SnapshotVersion.min() are used in manufactured
                // events. We remove these documents from cache since we lost
                // access.
                e.Hn(n, s), i = i.Tt(n, o)) : null == u || o.version.F(u.version) > 0 || 0 === o.version.F(u.version) && u.hasPendingWrites ? (e.jn(o, s), i = i.Tt(n, o)) : x("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", u.version, " Watch version:", o.version);
              }), i;
            });
          }(t, o, e.ce, r).next(function (t) {
            s = t;
          })), !r.isEqual(H.min())) {
            var a = n.jo.To(t).next(function (e) {
              return n.jo.mo(t, t.Fo, r);
            });
            u.push(a);
          }

          return lr.qn(u).next(function () {
            return o.apply(t);
          }).next(function () {
            return n.Oc.fs(t, s);
          });
        }).then(function (t) {
          return n.Cc = i, t;
        });
      }
      /**
       * Gets the mutation batch after the passed in batchId in the mutation queue
       * or null if empty.
       * @param afterBatchId If provided, the batch to search after.
       * @returns The next mutation or null if there wasn't one.
       */


      function so(t, e) {
        var n = R(t);
        return n.persistence.runTransaction("Get next mutation batch", "readonly", function (t) {
          return void 0 === e && (e = -1), n.rs.Fr(t, e);
        });
      }
      /**
       * Reads the current value of a Document with a given key or null if not
       * found - used for testing.
       */

      /**
       * Assigns the given target an internal ID so that its results can be pinned so
       * they don't get GC'd. A target must be allocated in the local store before
       * the store can be used to manage its view.
       *
       * Allocating an already allocated `Target` will return the existing `TargetData`
       * for that `Target`.
       */


      function ao(t, e) {
        var n = R(t);
        return n.persistence.runTransaction("Allocate target", "readwrite", function (t) {
          var r;
          return n.jo.bo(t, e).next(function (i) {
            return i ? ( // This target has been listened to previously, so reuse the
            // previous targetID.
            // TODO(mcg): freshen last accessed date?
            r = i, lr.resolve(r)) : n.jo.fo(t).next(function (i) {
              return r = new ft(e, i, 0
              /* Listen */
              , t.Fo), n.jo.Ao(t, r).next(function () {
                return r;
              });
            });
          });
        }).then(function (t) {
          // If Multi-Tab is enabled, the existing target data may be newer than
          // the in-memory data
          var r = n.Cc.get(t.targetId);
          return (null === r || t.ft.F(r.ft) > 0) && (n.Cc = n.Cc.Tt(t.targetId, t), n.Nc.set(e, t.targetId)), t;
        });
      }
      /**
       * Returns the TargetData as seen by the LocalStore, including updates that may
       * have not yet been persisted to the TargetCache.
       */
      // Visible for testing.

      /**
       * Unpins all the documents associated with the given target. If
       * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
       * directly removes the associated target data from the target cache.
       *
       * Releasing a non-existing `Target` is a no-op.
       */
      // PORTING NOTE: `keepPersistedTargetData` is multi-tab only.


      function co(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, o, u, s;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = R(t), o = e.Cc.get(r), u = i ? "readwrite" : "readwrite-primary", n.label = 1;

              case 1:
                return n.trys.push([1, 4,, 5]), i ? [3
                /*break*/
                , 3] : [4
                /*yield*/
                , e.persistence.runTransaction("Release target", u, function (t) {
                  return e.persistence.Vr.removeTarget(t, o);
                })];

              case 2:
                n.sent(), n.label = 3;

              case 3:
                return [3
                /*break*/
                , 5];

              case 4:
                if (!Ar(s = n.sent())) throw s; // All `releaseTarget` does is record the final metadata state for the
                // target, but we've been recording this periodically during target
                // activity. If we lose this write this could cause a very slight
                // difference in the order of target deletion during GC, but we
                // don't define exact LRU semantics so this is acceptable.

                return x("LocalStore", "Failed to update sequence numbers for target " + r + ": " + s), [3
                /*break*/
                , 5];

              case 5:
                return e.Cc = e.Cc.remove(r), e.Nc["delete"](o.target), [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Runs the specified query against the local store and returns the results,
       * potentially taking advantage of query data from previous executions (such
       * as the set of remote keys).
       *
       * @param usePreviousResults Whether results from previous executions can
       * be used to optimize this query execution.
       */


      function ho(t, e, n) {
        var r = R(t),
            i = H.min(),
            o = Dt();
        return r.persistence.runTransaction("Execute query", "readonly", function (t) {
          return function (t, e, n) {
            var r = R(t),
                i = r.Nc.get(n);
            return void 0 !== i ? lr.resolve(r.Cc.get(i)) : r.jo.bo(e, n);
          }(r, t, jn(e)).next(function (e) {
            if (e) return i = e.lastLimboFreeSnapshotVersion, r.jo.xo(t, e.targetId).next(function (t) {
              o = t;
            });
          }).next(function () {
            return r.Dc.ws(t, e, n ? i : H.min(), n ? o : Dt());
          }).next(function (t) {
            return {
              documents: t,
              Bc: o
            };
          });
        });
      } // PORTING NOTE: Multi-Tab only.


      function fo(t, e) {
        var n = R(t),
            r = R(n.jo),
            i = n.Cc.get(e);
        return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", function (t) {
          return r.Ze(t, e).next(function (t) {
            return t ? t.target : null;
          });
        });
      }
      /**
       * Returns the set of documents that have been updated since the last call.
       * If this is the first call, returns the set of changes since client
       * initialization. Further invocations will return document that have changed
       * since the prior call.
       */
      // PORTING NOTE: Multi-Tab only.


      function lo(t) {
        var e = R(t);
        return e.persistence.runTransaction("Get new document changes", "readonly", function (t) {
          return function (t, e, n) {
            var r = R(t),
                i = _t(),
                o = $r(n),
                u = pi(e),
                s = IDBKeyRange.lowerBound(o, !0);

            return u._i({
              index: Ai.readTimeIndex,
              range: s
            }, function (t, e) {
              // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
              // the documents directly since we want to keep sentinel deletes.
              var n = Hr(r.serializer, e);
              i = i.Tt(n.key, n), o = e.readTime;
            }).next(function () {
              return {
                qc: i,
                readTime: Jr(o)
              };
            });
          }(e.Fc, t, e.xc);
        }).then(function (t) {
          var n = t.qc,
              r = t.readTime;
          return e.xc = r, n;
        });
      }
      /**
       * Reads the newest document change from persistence and moves the internal
       * synchronization marker forward so that calls to `getNewDocumentChanges()`
       * only return changes that happened after client initialization.
       */
      // PORTING NOTE: Multi-Tab only.


      function po(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            return [2
            /*return*/
            , (e = R(t)).persistence.runTransaction("Synchronize last document change read time", "readonly", function (t) {
              return function (t) {
                var e = pi(t),
                    n = H.min(); // If there are no existing entries, we return SnapshotVersion.min().

                return e._i({
                  index: Ai.readTimeIndex,
                  reverse: !0
                }, function (t, e, r) {
                  e.readTime && (n = Jr(e.readTime)), r.done();
                }).next(function () {
                  return n;
                });
              }(t);
            }).then(function (t) {
              e.xc = t;
            })];
          });
        });
      }
      /**
       * Verifies the error thrown by a LocalStore operation. If a LocalStore
       * operation fails because the primary lease has been taken by another client,
       * we ignore the error (the persistence layer will immediately call
       * `applyPrimaryLease` to propagate the primary state change). All other errors
       * are re-thrown.
       *
       * @param err An error returned by a LocalStore operation.
       * @return A Promise that resolves after we recovered, or the original error.
       */


      function vo(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
            if (t.code !== V.FAILED_PRECONDITION || t.message !== mr) throw t;
            return x("LocalStore", "Unexpectedly lost primary lease"), [2
            /*return*/
            ];
          });
        });
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A PersistentStream is an abstract base class that represents a streaming RPC
       * to the Firestore backend. It's built on top of the connections own support
       * for streaming RPCs, and adds several critical features for our clients:
       *
       *   - Exponential backoff on failure
       *   - Authentication via CredentialsProvider
       *   - Dispatching all callbacks into the shared worker queue
       *   - Closing idle streams after 60 seconds of inactivity
       *
       * Subclasses of PersistentStream implement serialization of models to and
       * from the JSON representation of the protocol buffers for a specific
       * streaming RPC.
       *
       * ## Starting and Stopping
       *
       * Streaming RPCs are stateful and need to be start()ed before messages can
       * be sent and received. The PersistentStream will call the onOpen() function
       * of the listener once the stream is ready to accept requests.
       *
       * Should a start() fail, PersistentStream will call the registered onClose()
       * listener with a FirestoreError indicating what went wrong.
       *
       * A PersistentStream can be started and stopped repeatedly.
       *
       * Generic types:
       *  SendType: The type of the outgoing message of the underlying
       *    connection stream
       *  ReceiveType: The type of the incoming message of the underlying
       *    connection stream
       *  ListenerType: The type of the listener that will be used for callbacks
       */


      var yo =
      /** @class */
      function () {
        function t(t, e, n, r, i, o) {
          this.Cs = t, this.Uc = n, this.Qc = r, this.Kc = i, this.listener = o, this.state = 0
          /* Initial */
          ,
          /**
               * A close count that's incremented every time the stream is closed; used by
               * getCloseGuardedDispatcher() to invalidate callbacks that happen after
               * close.
               */
          this.Wc = 0, this.jc = null, this.stream = null, this.Si = new Ir(t, e)
          /**
          * Returns true if start() has been called and no error has occurred. True
          * indicates the stream is open or in the process of opening (which
          * encompasses respecting backoff, getting auth tokens, and starting the
          * actual RPC). Use isOpen() to determine if the stream is open and ready for
          * outbound requests.
          */
          ;
        }

        return t.prototype.Gc = function () {
          return 1
          /* Starting */
          === this.state || 2
          /* Open */
          === this.state || 4
          /* Backoff */
          === this.state;
        },
        /**
         * Returns true if the underlying RPC is open (the onOpen() listener has been
         * called) and the stream is ready for outbound requests.
         */
        t.prototype.zc = function () {
          return 2
          /* Open */
          === this.state;
        },
        /**
         * Starts the RPC. Only allowed if isStarted() returns false. The stream is
         * not immediately ready for use: onOpen() will be invoked when the RPC is
         * ready for outbound requests, at which point isOpen() will return true.
         *
         * When start returns, isStarted() will return true.
         */
        t.prototype.start = function () {
          3
          /* Error */
          !== this.state ? this.auth() : this.Hc();
        },
        /**
         * Stops the RPC. This call is idempotent and allowed regardless of the
         * current isStarted() state.
         *
         * When stop returns, isStarted() and isOpen() will both return false.
         */
        t.prototype.stop = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.Gc() ? [4
                  /*yield*/
                  , this.close(0
                  /* Initial */
                  )] : [3
                  /*break*/
                  , 2];

                case 1:
                  t.sent(), t.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        },
        /**
         * After an error the stream will usually back off on the next attempt to
         * start it. If the error warrants an immediate restart of the stream, the
         * sender can use this to indicate that the receiver should not back off.
         *
         * Each error will call the onClose() listener. That function can decide to
         * inhibit backoff if required.
         */
        t.prototype.Jc = function () {
          this.state = 0
          /* Initial */
          , this.Si.reset();
        },
        /**
         * Marks this stream as idle. If no further actions are performed on the
         * stream for one minute, the stream will automatically close itself and
         * notify the stream's onClose() handler with Status.OK. The stream will then
         * be in a !isStarted() state, requiring the caller to start the stream again
         * before further use.
         *
         * Only streams that are in state 'Open' can be marked idle, as all other
         * states imply pending network operations.
         */
        t.prototype.Yc = function () {
          var t = this; // Starts the idle time if we are in state 'Open' and are not yet already
          // running a timer (in which case the previous idle timeout still applies).

          this.zc() && null === this.jc && (this.jc = this.Cs.Us(this.Uc, 6e4, function () {
            return t.Xc();
          }));
        },
        /** Sends a message to the underlying stream. */
        t.prototype.Zc = function (t) {
          this.tu(), this.stream.send(t);
        },
        /** Called by the idle timer when the stream should close due to inactivity. */
        t.prototype.Xc = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
              return this.zc() ? [2
              /*return*/
              , this.close(0
              /* Initial */
              )] : [2
              /*return*/
              ];
            });
          });
        },
        /** Marks the stream as active again. */
        t.prototype.tu = function () {
          this.jc && (this.jc.cancel(), this.jc = null);
        },
        /**
         * Closes the stream and cleans up as necessary:
         *
         * * closes the underlying GRPC stream;
         * * calls the onClose handler with the given 'error';
         * * sets internal stream state to 'finalState';
         * * adjusts the backoff timer based on the error
         *
         * A new stream can be opened by calling start().
         *
         * @param finalState the intended state of the stream after closing.
         * @param error the error the connection was closed with.
         */
        t.prototype.close = function (t, r) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  // Notify the listener that the stream closed.
                  // Cancel any outstanding timers (they're guaranteed not to execute).
                  return this.tu(), this.Si.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
                  // underlying stream), guaranteeing they won't execute.
                  this.Wc++, 3
                  /* Error */
                  !== t ? // If this is an intentional close ensure we don't delay our next connection attempt.
                  this.Si.reset() : r && r.code === V.RESOURCE_EXHAUSTED ? ( // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                  k(r.toString()), k("Using maximum backoff delay to prevent overloading the backend."), this.Si.Ls()) : r && r.code === V.UNAUTHENTICATED && // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                  // just expired.
                  this.Kc.m(), // Clean up the underlying stream because we are no longer interested in events.
                  null !== this.stream && (this.eu(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
                  // inhibit backoff or otherwise manipulate the state in its non-started state.
                  this.state = t, [4
                  /*yield*/
                  , this.listener.nu(r)];

                case 1:
                  // Cancel any outstanding timers (they're guaranteed not to execute).
                  // Notify the listener that the stream closed.
                  return e.sent(), [2
                  /*return*/
                  ];
              }
            });
          });
        },
        /**
         * Can be overridden to perform additional cleanup before the stream is closed.
         * Calling super.tearDown() is not required.
         */
        t.prototype.eu = function () {}, t.prototype.auth = function () {
          var t = this;
          this.state = 1
          /* Starting */
          ;
          var e = this.su(this.Wc),
              n = this.Wc; // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.

          this.Kc.getToken().then(function (e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.Wc === n && // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.iu(e);
          }, function (n) {
            e(function () {
              var e = new L(V.UNKNOWN, "Fetching auth token failed: " + n.message);
              return t.ru(e);
            });
          });
        }, t.prototype.iu = function (t) {
          var e = this,
              n = this.su(this.Wc);
          this.stream = this.ou(t), this.stream.cu(function () {
            n(function () {
              return e.state = 2
              /* Open */
              , e.listener.cu();
            });
          }), this.stream.nu(function (t) {
            n(function () {
              return e.ru(t);
            });
          }), this.stream.onMessage(function (t) {
            n(function () {
              return e.onMessage(t);
            });
          });
        }, t.prototype.Hc = function () {
          var t = this;
          this.state = 4
          /* Backoff */
          , this.Si.Bs(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(t, void 0, void 0, function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
                return this.state = 0
                /* Initial */
                , this.start(), [2
                /*return*/
                ];
              });
            });
          });
        }, // Visible for tests
        t.prototype.ru = function (t) {
          // In theory the stream could close cleanly, however, in our current model
          // we never expect this to happen because if we stop a stream ourselves,
          // this callback will never be called. To prevent cases where we retry
          // without a backoff accidentally, we set the stream to error in all cases.
          return x("PersistentStream", "close with error: " + t), this.stream = null, this.close(3
          /* Error */
          , t);
        },
        /**
         * Returns a "dispatcher" function that dispatches operations onto the
         * AsyncQueue but only runs them if closeCount remains unchanged. This allows
         * us to turn auth / stream callbacks into no-ops if the stream is closed /
         * re-opened, etc.
         */
        t.prototype.su = function (t) {
          var e = this;
          return function (n) {
            e.Cs.Ri(function () {
              return e.Wc === t ? n() : (x("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve());
            });
          };
        }, t;
      }(),
          mo =
      /** @class */
      function (e) {
        function n(t, n, r, i, o) {
          var u = this;
          return (u = e.call(this, t, "listen_stream_connection_backoff"
          /* ListenStreamConnectionBackoff */
          , "listen_stream_idle"
          /* ListenStreamIdle */
          , n, r, o) || this).serializer = i, u;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.ou = function (t) {
          return this.Qc.uu("Listen", t);
        }, n.prototype.onMessage = function (t) {
          // A successful response means the stream is healthy
          this.Si.reset();

          var e = function (t, e) {
            var n;

            if ("targetChange" in e) {
              e.targetChange; // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
              // if unset

              var r = function (t) {
                return "NO_CHANGE" === t ? 0
                /* NoChange */
                : "ADD" === t ? 1
                /* Added */
                : "REMOVE" === t ? 2
                /* Removed */
                : "CURRENT" === t ? 3
                /* Current */
                : "RESET" === t ? 4
                /* Reset */
                : P();
              }(e.targetChange.targetChangeType || "NO_CHANGE"),
                  i = e.targetChange.targetIds || [],
                  o = function (t, e) {
                return t.tn ? (C(void 0 === e || "string" == typeof e), at.fromBase64String(e || "")) : (C(void 0 === e || e instanceof Uint8Array), at.fromUint8Array(e || new Uint8Array()));
              }(t, e.targetChange.resumeToken),
                  u = e.targetChange.cause,
                  s = u && function (t) {
                var e = void 0 === t.code ? V.UNKNOWN : dt(t.code);
                return new L(e, t.message || "");
              }(u);

              n = new Ut(r, i, o, s || null);
            } else if ("documentChange" in e) {
              e.documentChange;
              var a = e.documentChange;
              a.document, a.document.name, a.document.updateTime;
              var c = Te(t, a.document.name),
                  h = be(a.document.updateTime),
                  f = new Tn({
                mapValue: {
                  fields: a.document.fields
                }
              }),
                  l = new xn(c, h, f, {}),
                  p = a.targetIds || [],
                  d = a.removedTargetIds || [];
              n = new Vt(p, d, l.key, l);
            } else if ("documentDelete" in e) {
              e.documentDelete;
              var v = e.documentDelete;
              v.document;
              var y = Te(t, v.document),
                  m = v.readTime ? be(v.readTime) : H.min(),
                  g = new kn(y, m),
                  w = v.removedTargetIds || [];
              n = new Vt([], w, g.key, g);
            } else if ("documentRemove" in e) {
              e.documentRemove;
              var b = e.documentRemove;
              b.document;

              var _ = Te(t, b.document),
                  I = b.removedTargetIds || [];

              n = new Vt([], I, _, null);
            } else {
              if (!("filter" in e)) return P();
              e.filter;
              var E = e.filter;
              E.targetId;
              var T = E.count || 0,
                  N = new lt(T),
                  A = E.targetId;
              n = new Lt(A, N);
            }

            return n;
          }(this.serializer, t),
              n = function (t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return H.min();
            var e = t.targetChange;
            return e.targetIds && e.targetIds.length ? H.min() : e.readTime ? be(e.readTime) : H.min();
          }(t);

          return this.listener.au(e, n);
        },
        /**
         * Registers interest in the results of the given target. If the target
         * includes a resumeToken it will be included in the request. Results that
         * affect the target will be streamed back as WatchChange messages that
         * reference the targetId.
         */
        n.prototype.hu = function (t) {
          var e = {};
          e.database = De(this.serializer), e.addTarget = function (t, e) {
            var n,
                r = e.target;
            return (n = st(r) ? {
              documents: Pe(t, r)
            } : {
              query: Ce(t, r)
            }).targetId = e.targetId, e.resumeToken.ht() > 0 ? n.resumeToken = ge(t, e.resumeToken) : e.ft.F(H.min()) > 0 && ( // TODO(wuandy): Consider removing above check because it is most likely true.
            // Right now, many tests depend on this behaviour though (leaving min() out
            // of serialization).
            n.readTime = me(t, e.ft.M())), n;
          }(this.serializer, t);

          var n = function (t, e) {
            var n = function (t, e) {
              switch (e) {
                case 0
                /* Listen */
                :
                  return null;

                case 1
                /* ExistenceFilterMismatch */
                :
                  return "existence-filter-mismatch";

                case 2
                /* LimboResolution */
                :
                  return "limbo-document";

                default:
                  return P();
              }
            }(0, e._t);

            return null == n ? null : {
              "goog-listen-tags": n
            };
          }(this.serializer, t);

          n && (e.labels = n), this.Zc(e);
        },
        /**
         * Unregisters interest in the results of the target associated with the
         * given targetId.
         */
        n.prototype.lu = function (t) {
          var e = {};
          e.database = De(this.serializer), e.removeTarget = t, this.Zc(e);
        }, n;
      }(yo),
          go =
      /** @class */
      function (e) {
        function n(t, n, r, i, o) {
          var u = this;
          return (u = e.call(this, t, "write_stream_connection_backoff"
          /* WriteStreamConnectionBackoff */
          , "write_stream_idle"
          /* WriteStreamIdle */
          , n, r, o) || this).serializer = i, u._u = !1, u;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), Object.defineProperty(n.prototype, "fu", {
          /**
           * Tracks whether or not a handshake has been successfully exchanged and
           * the stream is ready to accept mutations.
           */
          get: function get() {
            return this._u;
          },
          enumerable: !1,
          configurable: !0
        }), // Override of PersistentStream.start
        n.prototype.start = function () {
          this._u = !1, this.lastStreamToken = void 0, e.prototype.start.call(this);
        }, n.prototype.eu = function () {
          this._u && this.du([]);
        }, n.prototype.ou = function (t) {
          return this.Qc.uu("Write", t);
        }, n.prototype.onMessage = function (t) {
          if ( // Always capture the last stream token.
          C(!!t.streamToken), this.lastStreamToken = t.streamToken, this._u) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.Si.reset();

            var e = function (t, e) {
              return t && t.length > 0 ? (C(void 0 !== e), t.map(function (t) {
                return function (t, e) {
                  // NOTE: Deletes don't have an updateTime.
                  var n = t.updateTime ? be(t.updateTime) : be(e);
                  n.isEqual(H.min()) && ( // The Firestore Emulator currently returns an update time of 0 for
                  // deletes of non-existing documents (rather than null). This breaks the
                  // test "get deleted doc while offline with source=cache" as NoDocuments
                  // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
                  // TODO(#2149): Remove this when Emulator is fixed
                  n = be(e));
                  var r = null;
                  return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), new sn(n, r);
                }(t, e);
              })) : [];
            }(t.writeResults, t.commitTime),
                n = be(t.commitTime);

            return this.listener.wu(n, e);
          } // The first response is always the handshake response


          return C(!t.writeResults || 0 === t.writeResults.length), this._u = !0, this.listener.Eu();
        },
        /**
         * Sends an initial streamToken to the server, performing the handshake
         * required to make the StreamingWrite RPC work. Subsequent
         * calls should wait until onHandshakeComplete was called.
         */
        n.prototype.Tu = function () {
          // TODO(dimond): Support stream resumption. We intentionally do not set the
          // stream token on the handshake, ignoring any stream token we might have.
          var t = {};
          t.database = De(this.serializer), this.Zc(t);
        },
        /** Sends a group of mutations to the Firestore backend to apply. */
        n.prototype.du = function (t) {
          var e = this,
              n = {
            streamToken: this.lastStreamToken,
            writes: t.map(function (t) {
              return Oe(e.serializer, t);
            })
          };
          this.Zc(n);
        }, n;
      }(yo),
          wo =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this) || this).credentials = t, i.Qc = n, i.serializer = r, i.Iu = !1, i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.mu = function () {
          if (this.Iu) throw new L(V.FAILED_PRECONDITION, "The client has already been terminated.");
        },
        /** Gets an auth token and invokes the provided RPC. */
        n.prototype.Au = function (t, e, n) {
          var r = this;
          return this.mu(), this.credentials.getToken().then(function (i) {
            return r.Qc.Au(t, e, n, i);
          })["catch"](function (t) {
            throw t.code === V.UNAUTHENTICATED && r.credentials.m(), t;
          });
        },
        /** Gets an auth token and invokes the provided RPC with streamed results. */
        n.prototype.Ru = function (t, e, n) {
          var r = this;
          return this.mu(), this.credentials.getToken().then(function (i) {
            return r.Qc.Ru(t, e, n, i);
          })["catch"](function (t) {
            throw t.code === V.UNAUTHENTICATED && r.credentials.m(), t;
          });
        }, n.prototype.terminate = function () {
          this.Iu = !1;
        }, n;
      }(function () {}),
          bo =
      /** @class */
      function () {
        function t(t, e) {
          this.di = t, this.Pu = e,
          /** The current OnlineState. */
          this.state = "Unknown"
          /* Unknown */
          ,
          /**
               * A count of consecutive failures to open the stream. If it reaches the
               * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
               * Offline.
               */
          this.gu = 0,
          /**
               * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
               * transition from OnlineState.Unknown to OnlineState.Offline without waiting
               * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
               */
          this.yu = null,
          /**
               * Whether the client should log a warning message if it fails to connect to
               * the backend (initially true, cleared after a successful stream, or if we've
               * logged the message already).
               */
          this.Vu = !0
          /**
          * Called by RemoteStore when a watch stream is started (including on each
          * backoff attempt).
          *
          * If this is the first attempt, it sets the OnlineState to Unknown and starts
          * the onlineStateTimer.
          */
          ;
        }

        return t.prototype.pu = function () {
          var t = this;
          0 === this.gu && (this.vu("Unknown"
          /* Unknown */
          ), this.yu = this.di.Us("online_state_timeout"
          /* OnlineStateTimeout */
          , 1e4, function () {
            return t.yu = null, t.bu("Backend didn't respond within 10 seconds."), t.vu("Offline"
            /* Offline */
            ), Promise.resolve();
          }));
        },
        /**
         * Updates our OnlineState as appropriate after the watch stream reports a
         * failure. The first failure moves us to the 'Unknown' state. We then may
         * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
         * actually transition to the 'Offline' state.
         */
        t.prototype.Su = function (t) {
          "Online"
          /* Online */
          === this.state ? this.vu("Unknown"
          /* Unknown */
          ) : (this.gu++, this.gu >= 1 && (this.Du(), this.bu("Connection failed 1 times. Most recent error: " + t.toString()), this.vu("Offline"
          /* Offline */
          )));
        },
        /**
         * Explicitly sets the OnlineState to the specified state.
         *
         * Note that this resets our timers / failure counters, etc. used by our
         * Offline heuristics, so must not be used in place of
         * handleWatchStreamStart() and handleWatchStreamFailure().
         */
        t.prototype.set = function (t) {
          this.Du(), this.gu = 0, "Online"
          /* Online */
          === t && ( // We've connected to watch at least once. Don't warn the developer
          // about being offline going forward.
          this.Vu = !1), this.vu(t);
        }, t.prototype.vu = function (t) {
          t !== this.state && (this.state = t, this.Pu(t));
        }, t.prototype.bu = function (t) {
          var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
          this.Vu ? (k(e), this.Vu = !1) : x("OnlineStateTracker", e);
        }, t.prototype.Du = function () {
          null !== this.yu && (this.yu.cancel(), this.yu = null);
        }, t;
      }(),
          _o = function _o(
      /**
           * The local store, used to fill the write pipeline with outbound mutations.
           */
      t,
      /** The client-side proxy for interacting with the backend. */
      r, i, o, u) {
        var s = this;
        this.Cu = t, this.Nu = r, this.di = i, this.xu = {},
        /**
                 * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
                 * LocalStore via fillWritePipeline() and have or will send to the write
                 * stream.
                 *
                 * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
                 * restart the write stream. When the stream is established the writes in the
                 * pipeline will be sent in order.
                 *
                 * Writes remain in writePipeline until they are acknowledged by the backend
                 * and thus will automatically be re-sent if the stream is interrupted /
                 * restarted before they're acknowledged.
                 *
                 * Write responses from the backend are linked to their originating request
                 * purely based on order, and so we can just shift() writes from the front of
                 * the writePipeline as we receive responses.
                 */
        this.Fu = [],
        /**
                 * A mapping of watched targets that the client cares about tracking and the
                 * user has explicitly called a 'listen' for this target.
                 *
                 * These targets may or may not have been sent to or acknowledged by the
                 * server. On re-establishing the listen stream, these targets should be sent
                 * to the server. The targets removed with unlistens are removed eagerly
                 * without waiting for confirmation from the listen stream.
                 */
        this.Ou = new Map(),
        /**
                 * A set of reasons for why the RemoteStore may be offline. If empty, the
                 * RemoteStore may start its network connections.
                 */
        this.Mu = new Set(),
        /**
                 * Event handlers that get called when the network is disabled or enabled.
                 *
                 * PORTING NOTE: These functions are used on the Web client to create the
                 * underlying streams (to support tree-shakeable streams). On Android and iOS,
                 * the streams are created during construction of RemoteStore.
                 */
        this.ku = [], this.$u = u, this.$u.Lu(function (t) {
          i.Ri(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(s, void 0, void 0, function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
                switch (t.label) {
                  case 0:
                    return Oo(this) ? (x("RemoteStore", "Restarting streams for network reachability change."), [4
                    /*yield*/
                    , function (t) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                        var e;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return (e = R(t)).Mu.add(4
                              /* ConnectivityChange */
                              ), [4
                              /*yield*/
                              , Eo(e)];

                            case 1:
                              return n.sent(), e.Bu.set("Unknown"
                              /* Unknown */
                              ), e.Mu["delete"](4
                              /* ConnectivityChange */
                              ), [4
                              /*yield*/
                              , Io(e)];

                            case 2:
                              return n.sent(), [2
                              /*return*/
                              ];
                          }
                        });
                      });
                    }(this)]) : [3
                    /*break*/
                    , 2];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          });
        }), this.Bu = new bo(i, o);
      };
      /**
       * A PersistentStream that implements the Listen RPC.
       *
       * Once the Listen stream has called the onOpen() listener, any number of
       * listen() and unlisten() calls can be made to control what changes will be
       * sent from the server for ListenResponses.
       */


      function Io(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, r;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                if (!Oo(t)) return [3
                /*break*/
                , 4];
                e = 0, r = t.ku, n.label = 1;

              case 1:
                return e < r.length ? [4
                /*yield*/
                , (0, r[e])(
                /* enabled= */
                !0)] : [3
                /*break*/
                , 4];

              case 2:
                n.sent(), n.label = 3;

              case 3:
                return e++, [3
                /*break*/
                , 1];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Temporarily disables the network. The network can be re-enabled using
       * enableNetwork().
       */


      function Eo(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, r;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = 0, r = t.ku, n.label = 1;

              case 1:
                return e < r.length ? [4
                /*yield*/
                , (0, r[e])(
                /* enabled= */
                !1)] : [3
                /*break*/
                , 4];

              case 2:
                n.sent(), n.label = 3;

              case 3:
                return e++, [3
                /*break*/
                , 1];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Starts new listen for the given target. Uses resume token if provided. It
       * is a no-op if the target of given `TargetData` is already being listened to.
       */


      function To(t, e) {
        var n = R(t);
        n.Ou.has(e.targetId) || ( // Mark this as something the client is currently listening for.
        n.Ou.set(e.targetId, e), ko(n) ? // The listen will be sent in onWatchStreamOpen
        xo(n) : Ko(n).zc() && Ao(n, e));
      }
      /**
       * Removes the listen from server. It is a no-op if the given target id is
       * not being listened to.
       */


      function No(t, e) {
        var n = R(t),
            r = Ko(n);
        n.Ou["delete"](e), r.zc() && Do(n, e), 0 === n.Ou.size && (r.zc() ? r.Yc() : Oo(n) && // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        n.Bu.set("Unknown"
        /* Unknown */
        ));
      }
      /**
       * We need to increment the the expected number of pending responses we're due
       * from watch so we wait for the ack to process any messages from this target.
       */


      function Ao(t, e) {
        t.qu.De(e.targetId), Ko(t).hu(e)
        /**
        * We need to increment the expected number of pending responses we're due
        * from watch so we wait for the removal on the server before we process any
        * messages from this target.
        */
        ;
      }

      function Do(t, e) {
        t.qu.De(e), Ko(t).lu(e);
      }

      function xo(t) {
        t.qu = new qt({
          Xe: function Xe(e) {
            return t.xu.Xe(e);
          },
          Ze: function Ze(e) {
            return t.Ou.get(e) || null;
          }
        }), Ko(t).start(), t.Bu.pu()
        /**
        * Returns whether the watch stream should be started because it's necessary
        * and has not yet been started.
        */
        ;
      }

      function ko(t) {
        return Oo(t) && !Ko(t).Gc() && t.Ou.size > 0;
      }

      function Oo(t) {
        return 0 === R(t).Mu.size;
      }

      function So(t) {
        t.qu = void 0;
      }

      function Po(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
            return t.Ou.forEach(function (e, n) {
              Ao(t, e);
            }), [2
            /*return*/
            ];
          });
        });
      }

      function Co(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
            return So(t), // If we still need the watch stream, retry the connection.
            ko(t) ? (t.Bu.Su(r), xo(t)) : // No need to restart watch stream because there are no active targets.
            // The online state is set to unknown because there is no active attempt
            // at establishing a connection
            t.Bu.set("Unknown"
            /* Unknown */
            ), [2
            /*return*/
            ];
          });
        });
      }

      function Ro(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var o, u, s;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (a) {
            switch (a.label) {
              case 0:
                if (t.Bu.set("Online"
                /* Online */
                ), !(r instanceof Ut && 2
                /* Removed */
                === r.state && r.cause)) // Mark the client as online since we got a message from the server
                  return [3
                  /*break*/
                  , 6];
                a.label = 1;

              case 1:
                return a.trys.push([1, 3,, 5]), [4
                /*yield*/
                ,
                /** Handles an error on a target */
                function (t, r) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var e, i, o, u;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                      switch (n.label) {
                        case 0:
                          e = r.cause, i = 0, o = r.targetIds, n.label = 1;

                        case 1:
                          return i < o.length ? (u = o[i], t.Ou.has(u) ? [4
                          /*yield*/
                          , t.xu.Uu(u, e)] : [3
                          /*break*/
                          , 3]) : [3
                          /*break*/
                          , 5];

                        case 2:
                          n.sent(), t.Ou["delete"](u), t.qu.removeTarget(u), n.label = 3;

                        case 3:
                          n.label = 4;

                        case 4:
                          return i++, [3
                          /*break*/
                          , 1];

                        case 5:
                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }(t, r)];

              case 2:
                return a.sent(), [3
                /*break*/
                , 5];

              case 3:
                return o = a.sent(), x("RemoteStore", "Failed to remove targets %s: %s ", r.targetIds.join(","), o), [4
                /*yield*/
                , Vo(t, o)];

              case 4:
                return a.sent(), [3
                /*break*/
                , 5];

              case 5:
                return [3
                /*break*/
                , 13];

              case 6:
                if (r instanceof Vt ? t.qu.$e(r) : r instanceof Lt ? t.qu.je(r) : t.qu.qe(r), i.isEqual(H.min())) return [3
                /*break*/
                , 13];
                a.label = 7;

              case 7:
                return a.trys.push([7, 11,, 13]), [4
                /*yield*/
                , oo(t.Cu)];

              case 8:
                return u = a.sent(), i.F(u) >= 0 ? [4
                /*yield*/
                ,
                /**
                 * Takes a batch of changes from the Datastore, repackages them as a
                 * RemoteEvent, and passes that on to the listener, which is typically the
                 * SyncEngine.
                 */
                function (t, e) {
                  var n = t.qu.He(e); // Update in-memory resume tokens. LocalStore will update the
                  // persistent view of these when applying the completed RemoteEvent.

                  return n.re.forEach(function (n, r) {
                    if (n.resumeToken.ht() > 0) {
                      var i = t.Ou.get(r); // A watched target might have been removed already.

                      i && t.Ou.set(r, i.wt(n.resumeToken, e));
                    }
                  }), // Re-establish listens for the targets that have been invalidated by
                  // existence filter mismatches.
                  n.oe.forEach(function (e) {
                    var n = t.Ou.get(e);

                    if (n) {
                      // Clear the resume token for the target, since we're in a known mismatch
                      // state.
                      t.Ou.set(e, n.wt(at.lt, n.ft)), // Cause a hard reset by unwatching and rewatching immediately, but
                      // deliberately don't send a resume token so that we get a full update.
                      Do(t, e); // Mark the target we send as being on behalf of an existence filter
                      // mismatch, but don't actually retain that in listenTargets. This ensures
                      // that we flag the first re-listen this way without impacting future
                      // listens of this target (that might happen e.g. on reconnect).

                      var r = new ft(n.target, e, 1
                      /* ExistenceFilterMismatch */
                      , n.sequenceNumber);
                      Ao(t, r);
                    }
                  }), t.xu.Qu(n);
                }(t, i)] : [3
                /*break*/
                , 10];
              // We have received a target change with a global snapshot if the snapshot
              // version is not equal to SnapshotVersion.min().

              case 9:
                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                a.sent(), a.label = 10;

              case 10:
                return [3
                /*break*/
                , 13];

              case 11:
                return x("RemoteStore", "Failed to raise snapshot:", s = a.sent()), [4
                /*yield*/
                , Vo(t, s)];

              case 12:
                return a.sent(), [3
                /*break*/
                , 13];

              case 13:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Recovery logic for IndexedDB errors that takes the network offline until
       * `op` succeeds. Retries are scheduled with backoff using
       * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
       * validated via a generic operation.
       *
       * The returned Promise is resolved once the network is disabled and before
       * any retry attempt.
       */


      function Vo(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var o = this;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (u) {
            switch (u.label) {
              case 0:
                if (!Ar(r)) throw r; // Disable network and raise offline snapshots

                return t.Mu.add(1
                /* IndexedDbFailed */
                ), [4
                /*yield*/
                , Eo(t)];

              case 1:
                // Disable network and raise offline snapshots
                return u.sent(), t.Bu.set("Offline"
                /* Offline */
                ), i || ( // Use a simple read operation to determine if IndexedDB recovered.
                // Ideally, we would expose a health check directly on SimpleDb, but
                // RemoteStore only has access to persistence through LocalStore.
                i = function i() {
                  return oo(t.Cu);
                }), // Probe IndexedDB periodically and re-enable network
                t.di.Mi(function () {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(o, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return x("RemoteStore", "Retrying IndexedDB access"), [4
                          /*yield*/
                          , i()];

                        case 1:
                          return e.sent(), t.Mu["delete"](1
                          /* IndexedDbFailed */
                          ), [4
                          /*yield*/
                          , Io(t)];

                        case 2:
                          return e.sent(), [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }), [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Executes `op`. If `op` fails, takes the network offline until `op`
       * succeeds. Returns after the first attempt.
       */


      function Lo(t, e) {
        return e()["catch"](function (n) {
          return Vo(t, n, e);
        });
      }

      function Uo(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, r, i, o, u;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = R(t), r = Wo(e), i = e.Fu.length > 0 ? e.Fu[e.Fu.length - 1].batchId : -1, n.label = 1;

              case 1:
                if (!
                /**
                * Returns true if we can add to the write pipeline (i.e. the network is
                * enabled and the write pipeline is not full).
                */
                function (t) {
                  return Oo(t) && t.Fu.length < 10;
                }
                /**
                * Queues additional writes to be sent to the write stream, sending them
                * immediately if the write stream is established.
                */
                (e)) return [3
                /*break*/
                , 7];
                n.label = 2;

              case 2:
                return n.trys.push([2, 4,, 6]), [4
                /*yield*/
                , so(e.Cu, i)];

              case 3:
                return null === (o = n.sent()) ? (0 === e.Fu.length && r.Yc(), [3
                /*break*/
                , 7]) : (i = o.batchId, function (t, e) {
                  t.Fu.push(e);
                  var n = Wo(t);
                  n.zc() && n.fu && n.du(e.mutations);
                }(e, o), [3
                /*break*/
                , 6]);

              case 4:
                return u = n.sent(), [4
                /*yield*/
                , Vo(e, u)];

              case 5:
                return n.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [3
                /*break*/
                , 1];

              case 7:
                return Mo(e) && qo(e), [2
                /*return*/
                ];
            }
          });
        });
      }

      function Mo(t) {
        return Oo(t) && !Wo(t).Gc() && t.Fu.length > 0;
      }

      function qo(t) {
        Wo(t).start();
      }

      function jo(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
            return Wo(t).Tu(), [2
            /*return*/
            ];
          });
        });
      }

      function Fo(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, r, i, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            // Send the write pipeline now that the stream is established.
            for (e = Wo(t), r = 0, i = t.Fu; r < i.length; r++) {
              o = i[r], e.du(o.mutations);
            }

            return [2
            /*return*/
            ];
          });
        });
      }

      function zo(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return e = t.Fu.shift(), o = hr.from(e, r, i), [4
                /*yield*/
                , Lo(t, function () {
                  return t.xu.Ku(o);
                })];

              case 1:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return n.sent(), [4
                /*yield*/
                , Uo(t)];

              case 2:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return n.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }

      function Bo(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (i) {
            switch (i.label) {
              case 0:
                return r && Wo(t).fu ? [4
                /*yield*/
                , function (t, r) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var e, i;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return pt(i = r.code) && i !== V.ABORTED ? (e = t.Fu.shift(), // In this case it's also unlikely that the server itself is melting
                          // down -- this was just a bad request so inhibit backoff on the next
                          // restart.
                          Wo(t).Jc(), [4
                          /*yield*/
                          , Lo(t, function () {
                            return t.xu.Wu(e.batchId, r);
                          })]) : [3
                          /*break*/
                          , 3];

                        case 1:
                          // It's possible that with the completion of this mutation
                          // another slot has freed up.
                          return n.sent(), [4
                          /*yield*/
                          , Uo(t)];

                        case 2:
                          // In this case it's also unlikely that the server itself is melting
                          // down -- this was just a bad request so inhibit backoff on the next
                          // restart.
                          // It's possible that with the completion of this mutation
                          // another slot has freed up.
                          n.sent(), n.label = 3;

                        case 3:
                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }(t, r)] : [3
                /*break*/
                , 2];
              // This error affects the actual write.

              case 1:
                // This error affects the actual write.
                i.sent(), i.label = 2;

              case 2:
                // If the write stream closed after the write handshake completes, a write
                // operation failed and we fail the pending operation.
                // The write stream might have been started by refilling the write
                // pipeline for failed writes
                return Mo(t) && qo(t), [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Toggles the network state when the client gains or loses its primary lease.
       */


      function Go(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return e = R(t), r ? (e.Mu["delete"](2
                /* IsSecondary */
                ), [4
                /*yield*/
                , Io(e)]) : [3
                /*break*/
                , 2];

              case 1:
                return n.sent(), [3
                /*break*/
                , 5];

              case 2:
                return (i = r) ? [3
                /*break*/
                , 4] : (e.Mu.add(2
                /* IsSecondary */
                ), [4
                /*yield*/
                , Eo(e)]);

              case 3:
                n.sent(), i = e.Bu.set("Unknown"
                /* Unknown */
                ), n.label = 4;

              case 4:
                i, n.label = 5;

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * If not yet initialized, registers the WatchStream and its network state
       * callback with `remoteStoreImpl`. Returns the existing stream if one is
       * already available.
       *
       * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
       * This is not done on Web to allow it to be tree-shaken.
       */


      function Ko(t) {
        var r = this;
        return t.ju || ( // Create stream (but note that it is not started yet).
        t.ju = function (t, e, n) {
          var r = R(t);
          return r.mu(), new mo(e, r.Qc, r.credentials, r.serializer, n);
        }(t.Nu, t.di, {
          cu: Po.bind(null, t),
          nu: Co.bind(null, t),
          au: Ro.bind(null, t)
        }), t.ku.push(function (i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  return i ? (t.ju.Jc(), ko(t) ? xo(t) : t.Bu.set("Unknown"
                  /* Unknown */
                  ), [3
                  /*break*/
                  , 3]) : [3
                  /*break*/
                  , 1];

                case 1:
                  return [4
                  /*yield*/
                  , t.ju.stop()];

                case 2:
                  e.sent(), So(t), e.label = 3;

                case 3:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        })), t.ju
        /**
        * If not yet initialized, registers the WriteStream and its network state
        * callback with `remoteStoreImpl`. Returns the existing stream if one is
        * already available.
        *
        * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
        * This is not done on Web to allow it to be tree-shaken.
        */
        ;
      }

      function Wo(t) {
        var r = this;
        return t.Gu || ( // Create stream (but note that it is not started yet).
        t.Gu = function (t, e, n) {
          var r = R(t);
          return r.mu(), new go(e, r.Qc, r.credentials, r.serializer, n);
        }(t.Nu, t.di, {
          cu: jo.bind(null, t),
          nu: Bo.bind(null, t),
          Eu: Fo.bind(null, t),
          wu: zo.bind(null, t)
        }), t.ku.push(function (i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  return i ? (t.Gu.Jc(), [4
                  /*yield*/
                  , Uo(t)]) : [3
                  /*break*/
                  , 2];

                case 1:
                  // This will start the write stream if necessary.
                  return e.sent(), [3
                  /*break*/
                  , 4];

                case 2:
                  return [4
                  /*yield*/
                  , t.Gu.stop()];

                case 3:
                  e.sent(), t.Fu.length > 0 && (x("RemoteStore", "Stopping write stream with " + t.Fu.length + " pending writes"), t.Fu = []), e.label = 4;

                case 4:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        })), t.Gu
        /**
        * @license
        * Copyright 2017 Google LLC
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        *   http://www.apache.org/licenses/LICENSE-2.0
        *
        * Unless required by applicable law or agreed to in writing, software
        * distributed under the License is distributed on an "AS IS" BASIS,
        * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        * See the License for the specific language governing permissions and
        * limitations under the License.
        */

        /**
        * Holds the listeners and the last received ViewSnapshot for a query being
        * tracked by EventManager.
        */
        ;
      }

      var Qo = function Qo() {
        this.zu = void 0, this.listeners = [];
      },
          Ho = function Ho() {
        this.queries = new fr(function (t) {
          return Bn(t);
        }, zn), this.onlineState = "Unknown"
        /* Unknown */
        , this.Hu = new Set();
      };

      function Yo(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o, u, s, a, c;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                if (e = R(t), i = r.query, o = !1, (u = e.queries.get(i)) || (o = !0, u = new Qo()), !o) return [3
                /*break*/
                , 4];
                n.label = 1;

              case 1:
                return n.trys.push([1, 3,, 4]), s = u, [4
                /*yield*/
                , e.Ju(i)];

              case 2:
                return s.zu = n.sent(), [3
                /*break*/
                , 4];

              case 3:
                return a = n.sent(), c = Lr(a, "Initialization of query '" + Gn(r.query) + "' failed"), [2
                /*return*/
                , void r.onError(c)];

              case 4:
                return e.queries.set(i, u), u.listeners.push(r), // Run global snapshot listeners if a consistent snapshot has been emitted.
                r.Yu(e.onlineState), u.zu && r.Xu(u.zu) && Zo(e), [2
                /*return*/
                ];
            }
          });
        });
      }

      function $o(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o, u, s;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            return e = R(t), i = r.query, o = !1, (u = e.queries.get(i)) && (s = u.listeners.indexOf(r)) >= 0 && (u.listeners.splice(s, 1), o = 0 === u.listeners.length), o ? [2
            /*return*/
            , (e.queries["delete"](i), e.Zu(i))] : [2
            /*return*/
            ];
          });
        });
      }

      function Jo(t, e) {
        for (var n = R(t), r = !1, i = 0, o = e; i < o.length; i++) {
          var u = o[i],
              s = u.query,
              a = n.queries.get(s);

          if (a) {
            for (var c = 0, h = a.listeners; c < h.length; c++) {
              h[c].Xu(u) && (r = !0);
            }

            a.zu = u;
          }
        }

        r && Zo(n);
      }

      function Xo(t, e, n) {
        var r = R(t),
            i = r.queries.get(e);
        if (i) for (var o = 0, u = i.listeners; o < u.length; o++) {
          u[o].onError(n);
        } // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.

        r.queries["delete"](e);
      } // Call all global snapshot listeners that have been set.


      function Zo(t) {
        t.Hu.forEach(function (t) {
          t.next();
        });
      }
      /**
       * QueryListener takes a series of internal view snapshots and determines
       * when to raise the event.
       *
       * It uses an Observer to dispatch events.
       */


      var tu =
      /** @class */
      function () {
        function t(t, e, n) {
          this.query = t, this.ta = e,
          /**
               * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
               * observer. This flag is set to true once we've actually raised an event.
               */
          this.ea = !1, this.na = null, this.onlineState = "Unknown"
          /* Unknown */
          , this.options = n || {}
          /**
          * Applies the new ViewSnapshot to this listener, raising a user-facing event
          * if applicable (depending on what changed, whether the user has opted into
          * metadata-only changes, etc.). Returns true if a user-facing event was
          * indeed raised.
          */
          ;
        }

        return t.prototype.Xu = function (t) {
          if (!this.options.includeMetadataChanges) {
            for ( // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
              var i = r[n];
              3
              /* Metadata */
              !== i.type && e.push(i);
            }

            t = new Pt(t.query, t.docs, t.te, e, t.ee, t.fromCache, t.ne,
            /* excludesMetadataChanges= */
            !0);
          }

          var o = !1;
          return this.ea ? this.sa(t) && (this.ta.next(t), o = !0) : this.ia(t, this.onlineState) && (this.ra(t), o = !0), this.na = t, o;
        }, t.prototype.onError = function (t) {
          this.ta.error(t);
        },
        /** Returns whether a snapshot was raised. */
        t.prototype.Yu = function (t) {
          this.onlineState = t;
          var e = !1;
          return this.na && !this.ea && this.ia(this.na, t) && (this.ra(this.na), e = !0), e;
        }, t.prototype.ia = function (t, e) {
          // Always raise the first event when we're synced
          if (!t.fromCache) return !0; // NOTE: We consider OnlineState.Unknown as online (it should become Offline
          // or Online if we wait long enough).

          var n = "Offline"
          /* Offline */
          !== e; // Don't raise the event if we're online, aren't synced yet (checked
          // above) and are waiting for a sync.

          return !(this.options.oa && n || t.docs.W() && "Offline"
          /* Offline */
          !== e); // Raise data from cache if we have any documents or we are offline
        }, t.prototype.sa = function (t) {
          // We don't need to handle includeDocumentMetadataChanges here because
          // the Metadata only changes have already been stripped out if needed.
          // At this point the only changes we will see are the ones we should
          // propagate.
          if (t.docChanges.length > 0) return !0;
          var e = this.na && this.na.hasPendingWrites !== t.hasPendingWrites;
          return !(!t.ne && !e) && !0 === this.options.includeMetadataChanges; // Generally we should have hit one of the cases above, but it's possible
          // to get here if there were only metadata docChanges and they got
          // stripped out.
        }, t.prototype.ra = function (t) {
          t = Pt.ie(t.query, t.docs, t.ee, t.fromCache), this.ea = !0, this.ta.next(t);
        }, t;
      }(),
          eu =
      /** @class */
      function () {
        function t() {
          // A set of outstanding references to a document sorted by key.
          this.ca = new gt(nu.ua), // A set of outstanding references to a document sorted by target id.
          this.aa = new gt(nu.ha)
          /** Returns true if the reference set contains no references. */
          ;
        }

        return t.prototype.W = function () {
          return this.ca.W();
        },
        /** Adds a reference to the given document key for the given ID. */
        t.prototype.Do = function (t, e) {
          var n = new nu(t, e);
          this.ca = this.ca.add(n), this.aa = this.aa.add(n);
        },
        /** Add references to the given document keys for the given ID. */
        t.prototype.la = function (t, e) {
          var n = this;
          t.forEach(function (t) {
            return n.Do(t, e);
          });
        },
        /**
         * Removes a reference to the given document key for the given
         * ID.
         */
        t.prototype.No = function (t, e) {
          this._a(new nu(t, e));
        }, t.prototype.fa = function (t, e) {
          var n = this;
          t.forEach(function (t) {
            return n.No(t, e);
          });
        },
        /**
         * Clears all references with a given ID. Calls removeRef() for each key
         * removed.
         */
        t.prototype.da = function (t) {
          var e = this,
              n = new Z(new $([])),
              r = new nu(n, t),
              i = new nu(n, t + 1),
              o = [];
          return this.aa.Kt([r, i], function (t) {
            e._a(t), o.push(t.key);
          }), o;
        }, t.prototype.wa = function () {
          var t = this;
          this.ca.forEach(function (e) {
            return t._a(e);
          });
        }, t.prototype._a = function (t) {
          this.ca = this.ca["delete"](t), this.aa = this.aa["delete"](t);
        }, t.prototype.Ea = function (t) {
          var e = new Z(new $([])),
              n = new nu(e, t),
              r = new nu(e, t + 1),
              i = Dt();
          return this.aa.Kt([n, r], function (t) {
            i = i.add(t.key);
          }), i;
        }, t.prototype.Qr = function (t) {
          var e = new nu(t, 0),
              n = this.ca.jt(e);
          return null !== n && t.isEqual(n.key);
        }, t;
      }(),
          nu =
      /** @class */
      function () {
        function t(t, e) {
          this.key = t, this.Ta = e
          /** Compare by key then by ID */
          ;
        }

        return t.ua = function (t, e) {
          return Z.$(t.key, e.key) || G(t.Ta, e.Ta);
        },
        /** Compare by ID then by key */
        t.ha = function (t, e) {
          return G(t.Ta, e.Ta) || Z.$(t.key, e.key);
        }, t;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A collection of references to a document from some kind of numbered entity
       * (either a target ID or batch ID). As references are added to or removed from
       * the set corresponding events are emitted to a registered garbage collector.
       *
       * Each reference is represented by a DocumentReference object. Each of them
       * contains enough information to uniquely identify the reference. They are all
       * stored primarily in a set sorted by key. A document is considered garbage if
       * there's no references in that set (this can be efficiently checked thanks to
       * sorting by key).
       *
       * ReferenceSet also keeps a secondary set that contains references sorted by
       * IDs. This one is used to efficiently implement removal of all references by
       * some target ID.
       */

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // The format of the LocalStorage key that stores the client state is:
      //     firestore_clients_<persistence_prefix>_<instance_key>

      /** Assembles the key for a client state in WebStorage */


      function ru(t, e) {
        return "firestore_clients_" + t + "_" + e;
      } // The format of the WebStorage key that stores the mutation state is:
      //     firestore_mutations_<persistence_prefix>_<batch_id>
      //     (for unauthenticated users)
      // or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
      // 'user_uid' is last to avoid needing to escape '_' characters that it might
      // contain.

      /** Assembles the key for a mutation batch in WebStorage */


      function iu(t, e, n) {
        var r = "firestore_mutations_" + t + "_" + n;
        return e.u() && (r += "_" + e.uid), r;
      } // The format of the WebStorage key that stores a query target's metadata is:
      //     firestore_targets_<persistence_prefix>_<target_id>

      /** Assembles the key for a query state in WebStorage */


      function ou(t, e) {
        return "firestore_targets_" + t + "_" + e;
      } // The WebStorage prefix that stores the primary tab's online state. The
      // format of the key is:
      //     firestore_online_state_<persistence_prefix>

      /**
       * Holds the state of a mutation batch, including its user ID, batch ID and
       * whether the batch is 'pending', 'acknowledged' or 'rejected'.
       */
      // Visible for testing


      var uu =
      /** @class */
      function () {
        function t(t, e, n, r) {
          this.user = t, this.batchId = e, this.state = n, this.error = r
          /**
          * Parses a MutationMetadata from its JSON representation in WebStorage.
          * Logs a warning and returns null if the format of the data is not valid.
          */
          ;
        }

        return t.Ia = function (e, n, r) {
          var i = JSON.parse(r),
              o = "object" == typeof i && -1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error),
              u = void 0;
          return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (u = new L(i.error.code, i.error.message)), o ? new t(e, n, i.state, u) : (k("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), null);
        }, t.prototype.ma = function () {
          var t = {
            state: this.state,
            updateTimeMs: Date.now()
          };
          return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
          }), JSON.stringify(t);
        }, t;
      }(),
          su =
      /** @class */
      function () {
        function t(t, e, n) {
          this.targetId = t, this.state = e, this.error = n
          /**
          * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
          * Logs a warning and returns null if the format of the data is not valid.
          */
          ;
        }

        return t.Ia = function (e, n) {
          var r = JSON.parse(n),
              i = "object" == typeof r && -1 !== ["not-current", "current", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
              o = void 0;
          return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new L(r.error.code, r.error.message)), i ? new t(e, r.state, o) : (k("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), null);
        }, t.prototype.ma = function () {
          var t = {
            state: this.state,
            updateTimeMs: Date.now()
          };
          return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
          }), JSON.stringify(t);
        }, t;
      }(),
          au =
      /** @class */
      function () {
        function t(t, e) {
          this.clientId = t, this.activeTargetIds = e
          /**
          * Parses a RemoteClientState from the JSON representation in WebStorage.
          * Logs a warning and returns null if the format of the data is not valid.
          */
          ;
        }

        return t.Ia = function (e, n) {
          for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = kt(), u = 0; i && u < r.activeTargetIds.length; ++u) {
            i = nt(r.activeTargetIds[u]), o = o.add(r.activeTargetIds[u]);
          }

          return i ? new t(e, o) : (k("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), null);
        }, t;
      }(),
          cu =
      /** @class */
      function () {
        function t(t, e) {
          this.clientId = t, this.onlineState = e
          /**
          * Parses a SharedOnlineState from its JSON representation in WebStorage.
          * Logs a warning and returns null if the format of the data is not valid.
          */
          ;
        }

        return t.Ia = function (e) {
          var n = JSON.parse(e);
          return "object" == typeof n && -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (k("SharedClientState", "Failed to parse online state: " + e), null);
        }, t;
      }(),
          hu =
      /** @class */
      function () {
        function t() {
          this.activeTargetIds = kt();
        }

        return t.prototype.Aa = function (t) {
          this.activeTargetIds = this.activeTargetIds.add(t);
        }, t.prototype.Ra = function (t) {
          this.activeTargetIds = this.activeTargetIds["delete"](t);
        },
        /**
         * Converts this entry into a JSON-encoded format we can use for WebStorage.
         * Does not encode `clientId` as it is part of the key in WebStorage.
         */
        t.prototype.ma = function () {
          var t = {
            activeTargetIds: this.activeTargetIds.H(),
            updateTimeMs: Date.now()
          };
          return JSON.stringify(t);
        }, t;
      }(),
          fu =
      /** @class */
      function () {
        function t(t, e, n, r, i) {
          this.window = t, this.Cs = e, this.persistenceKey = n, this.Pa = r, this.ga = null, this.Pu = null, this.ps = null, this.ya = this.Va.bind(this), this.pa = new vt(G), this.lr = !1,
          /**
               * Captures WebStorage events that occur before `start()` is called. These
               * events are replayed once `WebStorageSharedClientState` is started.
               */
          this.va = []; // Escape the special characters mentioned here:
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

          var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          this.storage = this.window.localStorage, this.currentUser = i, this.ba = ru(this.persistenceKey, this.Pa), this.Sa =
          /** Assembles the key for the current sequence number. */
          function (t) {
            return "firestore_sequence_number_" + t;
          }(this.persistenceKey), this.pa = this.pa.Tt(this.Pa, new hu()), this.Da = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.Ca = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.Na = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.xa =
          /** Assembles the key for the online state of the primary tab. */
          function (t) {
            return "firestore_online_state_" + t;
          }(this.persistenceKey), this.Fa = function (t) {
            return "firestore_bundle_loaded_" + t;
          }(this.persistenceKey), // Rather than adding the storage observer during start(), we add the
          // storage observer during initialization. This ensures that we collect
          // events before other components populate their initial state (during their
          // respective start() calls). Otherwise, we might for example miss a
          // mutation that is added after LocalStore's start() processed the existing
          // mutations but before we observe WebStorage events.
          this.window.addEventListener("storage", this.ya);
        }
        /** Returns 'true' if WebStorage is available in the current environment. */


        return t.Gs = function (t) {
          return !(!t || !t.localStorage);
        }, t.prototype.start = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var t,
                e,
                r,
                i,
                o,
                u,
                s,
                a,
                c,
                h,
                f,
                l = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.ga.Ic()];

                case 1:
                  for (t = n.sent(), e = 0, r = t; e < r.length; e++) {
                    (i = r[e]) !== this.Pa && (o = this.getItem(ru(this.persistenceKey, i))) && (u = au.Ia(i, o)) && (this.pa = this.pa.Tt(u.clientId, u));
                  }

                  for (this.Oa(), (s = this.storage.getItem(this.xa)) && (a = this.Ma(s)) && this.ka(a), c = 0, h = this.va; c < h.length; c++) {
                    f = h[c], this.Va(f);
                  }

                  return this.va = [], // Register a window unload hook to remove the client metadata entry from
                  // WebStorage even if `shutdown()` was not called.
                  this.window.addEventListener("unload", function () {
                    return l.fc();
                  }), this.lr = !0, [2
                  /*return*/
                  ];
              }
            });
          });
        }, t.prototype.Ss = function (t) {
          this.setItem(this.Sa, JSON.stringify(t));
        }, t.prototype.$a = function () {
          return this.La(this.pa);
        }, t.prototype.Ba = function (t) {
          var e = !1;
          return this.pa.forEach(function (n, r) {
            r.activeTargetIds.has(t) && (e = !0);
          }), e;
        }, t.prototype.qa = function (t) {
          this.Ua(t, "pending");
        }, t.prototype.Qa = function (t, e, n) {
          this.Ua(t, e, n), // Once a final mutation result is observed by other clients, they no longer
          // access the mutation's metadata entry. Since WebStorage replays events
          // in order, it is safe to delete the entry right after updating it.
          this.Ka(t);
        }, t.prototype.Wa = function (t) {
          var e = "not-current"; // Lookup an existing query state if the target ID was already registered
          // by another tab

          if (this.Ba(t)) {
            var n = this.storage.getItem(ou(this.persistenceKey, t));

            if (n) {
              var r = su.Ia(t, n);
              r && (e = r.state);
            }
          }

          return this.ja.Aa(t), this.Oa(), e;
        }, t.prototype.Ga = function (t) {
          this.ja.Ra(t), this.Oa();
        }, t.prototype.za = function (t) {
          return this.ja.activeTargetIds.has(t);
        }, t.prototype.Ha = function (t) {
          this.removeItem(ou(this.persistenceKey, t));
        }, t.prototype.Ja = function (t, e, n) {
          this.Ya(t, e, n);
        }, t.prototype.Xa = function (t, e, n) {
          var r = this;
          e.forEach(function (t) {
            r.Ka(t);
          }), this.currentUser = t, n.forEach(function (t) {
            r.qa(t);
          });
        }, t.prototype.Za = function (t) {
          this.th(t);
        }, t.prototype.eh = function () {
          this.nh();
        }, t.prototype.fc = function () {
          this.lr && (this.window.removeEventListener("storage", this.ya), this.removeItem(this.ba), this.lr = !1);
        }, t.prototype.getItem = function (t) {
          var e = this.storage.getItem(t);
          return x("SharedClientState", "READ", t, e), e;
        }, t.prototype.setItem = function (t, e) {
          x("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
        }, t.prototype.removeItem = function (t) {
          x("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
        }, t.prototype.Va = function (t) {
          var r = this,
              i = t; // Note: The function is typed to take Event to be interface-compatible with
          // `Window.addEventListener`.

          if (i.storageArea === this.storage) {
            if (x("SharedClientState", "EVENT", i.key, i.newValue), i.key === this.ba) return void k("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this.Cs.Mi(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                var t, e, r, o, u, s;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                  if (this.lr) {
                    if (null !== i.key) if (this.Da.test(i.key)) {
                      if (null == i.newValue) return t = this.sh(i.key), [2
                      /*return*/
                      , this.ih(t, null)];
                      if (e = this.rh(i.key, i.newValue)) return [2
                      /*return*/
                      , this.ih(e.clientId, e)];
                    } else if (this.Ca.test(i.key)) {
                      if (null !== i.newValue && (r = this.oh(i.key, i.newValue))) return [2
                      /*return*/
                      , this.uh(r)];
                    } else if (this.Na.test(i.key)) {
                      if (null !== i.newValue && (o = this.ah(i.key, i.newValue))) return [2
                      /*return*/
                      , this.hh(o)];
                    } else if (i.key === this.xa) {
                      if (null !== i.newValue && (u = this.Ma(i.newValue))) return [2
                      /*return*/
                      , this.ka(u)];
                    } else if (i.key === this.Sa) (s = function (t) {
                      var e = _r.Ds;
                      if (null != t) try {
                        var n = JSON.parse(t);
                        C("number" == typeof n), e = n;
                      } catch (t) {
                        k("SharedClientState", "Failed to read sequence number from WebStorage", t);
                      }
                      return e;
                    }(i.newValue)) !== _r.Ds && this.ps(s);else if (i.key === this.Fa) return [2
                    /*return*/
                    , this.ga.lh()];
                  } else this.va.push(i);

                  return [2
                  /*return*/
                  ];
                });
              });
            });
          }
        }, Object.defineProperty(t.prototype, "ja", {
          get: function get() {
            return this.pa.get(this.Pa);
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.Oa = function () {
          this.setItem(this.ba, this.ja.ma());
        }, t.prototype.Ua = function (t, e, n) {
          var r = new uu(this.currentUser, t, e, n),
              i = iu(this.persistenceKey, this.currentUser, t);
          this.setItem(i, r.ma());
        }, t.prototype.Ka = function (t) {
          var e = iu(this.persistenceKey, this.currentUser, t);
          this.removeItem(e);
        }, t.prototype.th = function (t) {
          var e = {
            clientId: this.Pa,
            onlineState: t
          };
          this.storage.setItem(this.xa, JSON.stringify(e));
        }, t.prototype.Ya = function (t, e, n) {
          var r = ou(this.persistenceKey, t),
              i = new su(t, e, n);
          this.setItem(r, i.ma());
        }, t.prototype.nh = function () {
          this.setItem(this.Fa, "value-not-used");
        },
        /**
         * Parses a client state key in WebStorage. Returns null if the key does not
         * match the expected key format.
         */
        t.prototype.sh = function (t) {
          var e = this.Da.exec(t);
          return e ? e[1] : null;
        },
        /**
         * Parses a client state in WebStorage. Returns 'null' if the value could not
         * be parsed.
         */
        t.prototype.rh = function (t, e) {
          var n = this.sh(t);
          return au.Ia(n, e);
        },
        /**
         * Parses a mutation batch state in WebStorage. Returns 'null' if the value
         * could not be parsed.
         */
        t.prototype.oh = function (t, e) {
          var n = this.Ca.exec(t),
              r = Number(n[1]),
              i = void 0 !== n[2] ? n[2] : null;
          return uu.Ia(new N(i), r, e);
        },
        /**
         * Parses a query target state from WebStorage. Returns 'null' if the value
         * could not be parsed.
         */
        t.prototype.ah = function (t, e) {
          var n = this.Na.exec(t),
              r = Number(n[1]);
          return su.Ia(r, e);
        },
        /**
         * Parses an online state from WebStorage. Returns 'null' if the value
         * could not be parsed.
         */
        t.prototype.Ma = function (t) {
          return cu.Ia(t);
        }, t.prototype.uh = function (t) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              return t.user.uid === this.currentUser.uid ? [2
              /*return*/
              , this.ga._h(t.batchId, t.state, t.error)] : (x("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), [2
              /*return*/
              ]);
            });
          });
        }, t.prototype.hh = function (t) {
          return this.ga.fh(t.targetId, t.state, t.error);
        }, t.prototype.ih = function (t, e) {
          var n = this,
              r = e ? this.pa.Tt(t, e) : this.pa.remove(t),
              i = this.La(this.pa),
              o = this.La(r),
              u = [],
              s = [];
          return o.forEach(function (t) {
            i.has(t) || u.push(t);
          }), i.forEach(function (t) {
            o.has(t) || s.push(t);
          }), this.ga.dh(u, s).then(function () {
            n.pa = r;
          });
        }, t.prototype.ka = function (t) {
          // We check whether the client that wrote this online state is still active
          // by comparing its client ID to the list of clients kept active in
          // IndexedDb. If a client does not update their IndexedDb client state
          // within 5 seconds, it is considered inactive and we don't emit an online
          // state event.
          this.pa.get(t.clientId) && this.Pu(t.onlineState);
        }, t.prototype.La = function (t) {
          var e = kt();
          return t.forEach(function (t, n) {
            e = e.Gt(n.activeTargetIds);
          }), e;
        }, t;
      }(),
          lu =
      /** @class */
      function () {
        function t() {
          this.wh = new hu(), this.Eh = {}, this.Pu = null, this.ps = null;
        }

        return t.prototype.qa = function (t) {// No op.
        }, t.prototype.Qa = function (t, e, n) {// No op.
        }, t.prototype.Wa = function (t) {
          return this.wh.Aa(t), this.Eh[t] || "not-current";
        }, t.prototype.Ja = function (t, e, n) {
          this.Eh[t] = e;
        }, t.prototype.Ga = function (t) {
          this.wh.Ra(t);
        }, t.prototype.za = function (t) {
          return this.wh.activeTargetIds.has(t);
        }, t.prototype.Ha = function (t) {
          delete this.Eh[t];
        }, t.prototype.$a = function () {
          return this.wh.activeTargetIds;
        }, t.prototype.Ba = function (t) {
          return this.wh.activeTargetIds.has(t);
        }, t.prototype.start = function () {
          return this.wh = new hu(), Promise.resolve();
        }, t.prototype.Xa = function (t, e, n) {// No op.
        }, t.prototype.Za = function (t) {// No op.
        }, t.prototype.fc = function () {}, t.prototype.Ss = function (t) {}, t.prototype.eh = function () {// No op.
        }, t;
      }(),
          pu = function pu(t) {
        this.key = t;
      },
          du = function du(t) {
        this.key = t;
      },
          vu =
      /** @class */
      function () {
        function t(t,
        /** Documents included in the remote target */
        e) {
          this.query = t, this.Th = e, this.Ih = null,
          /**
               * A flag whether the view is current with the backend. A view is considered
               * current after it has seen the current flag from the backend and did not
               * lose consistency within the watch stream (e.g. because of an existence
               * filter mismatch).
               */
          this.le = !1,
          /** Documents in the view but not in the remote target */
          this.mh = Dt(),
          /** Document Keys that have local changes */
          this.ee = Dt(), this.Ah = Wn(t), this.Rh = new Ot(this.Ah);
        }

        return Object.defineProperty(t.prototype, "Ph", {
          /**
           * The set of remote documents that the server has told us belongs to the target associated with
           * this view.
           */
          get: function get() {
            return this.Th;
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * Iterates over a set of doc changes, applies the query limit, and computes
         * what the new results should be, what the changes were, and whether we may
         * need to go back to the local cache for more results. Does not make any
         * changes to the view.
         * @param docChanges The doc changes to apply to this view.
         * @param previousChanges If this is being called with a refill, then start
         *        with this set of docs and changes instead of the current view.
         * @return a new set of docs, changes, and refill flag.
         */
        t.prototype.gh = function (t, e) {
          var n = this,
              r = e ? e.yh : new St(),
              i = e ? e.Rh : this.Rh,
              o = e ? e.ee : this.ee,
              u = i,
              s = !1,
              a = Rn(this.query) && i.size === this.query.limit ? i.last() : null,
              c = Vn(this.query) && i.size === this.query.limit ? i.first() : null; // Drop documents out to meet limit/limitToLast requirement.

          if (t.Pt(function (t, e) {
            var h = i.get(t),
                f = e instanceof xn ? e : null;
            f && (f = Kn(n.query, f) ? f : null);
            var l = !!h && n.ee.has(h.key),
                p = !!f && (f.an || // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.ee.has(f.key) && f.hasCommittedMutations),
                d = !1; // Calculate change

            h && f ? h.data().isEqual(f.data()) ? l !== p && (r.track({
              type: 3
              /* Metadata */
              ,
              doc: f
            }), d = !0) : n.Vh(h, f) || (r.track({
              type: 2
              /* Modified */
              ,
              doc: f
            }), d = !0, (a && n.Ah(f, a) > 0 || c && n.Ah(f, c) < 0) && ( // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            s = !0)) : !h && f ? (r.track({
              type: 0
              /* Added */
              ,
              doc: f
            }), d = !0) : h && !f && (r.track({
              type: 1
              /* Removed */
              ,
              doc: h
            }), d = !0, (a || c) && ( // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            s = !0)), d && (f ? (u = u.add(f), o = p ? o.add(t) : o["delete"](t)) : (u = u["delete"](t), o = o["delete"](t)));
          }), Rn(this.query) || Vn(this.query)) for (; u.size > this.query.limit;) {
            var h = Rn(this.query) ? u.last() : u.first();
            u = u["delete"](h.key), o = o["delete"](h.key), r.track({
              type: 1
              /* Removed */
              ,
              doc: h
            });
          }
          return {
            Rh: u,
            yh: r,
            ph: s,
            ee: o
          };
        }, t.prototype.Vh = function (t, e) {
          // We suppress the initial change event for documents that were modified as
          // part of a write acknowledgment (e.g. when the value of a server transform
          // is applied) as Watch will send us the same document again.
          // By suppressing the event, we only raise two user visible events (one with
          // `hasPendingWrites` and the final state of the document) instead of three
          // (one with `hasPendingWrites`, the modified document with
          // `hasPendingWrites` and the final state of the document).
          return t.an && e.hasCommittedMutations && !e.an;
        },
        /**
         * Updates the view with the given ViewDocumentChanges and optionally updates
         * limbo docs and sync state from the provided target change.
         * @param docChanges The set of changes to make to the view's docs.
         * @param updateLimboDocuments Whether to update limbo documents based on this
         *        change.
         * @param targetChange A target change to apply for computing limbo docs and
         *        sync state.
         * @return A new ViewChange with the given docs, changes, and sync state.
         */
        // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
        t.prototype.Zn = function (t, e, n) {
          var r = this,
              i = this.Rh;
          this.Rh = t.Rh, this.ee = t.ee; // Sort changes based on type and query comparator

          var o = t.yh.Zt();
          o.sort(function (t, e) {
            return function (t, e) {
              var n = function n(t) {
                switch (t) {
                  case 0
                  /* Added */
                  :
                    return 1;

                  case 2
                  /* Modified */
                  :
                  case 3
                  /* Metadata */
                  :
                    // A metadata change is converted to a modified change at the public
                    // api layer.  Since we sort by document key and then change type,
                    // metadata and modified changes must be sorted equivalently.
                    return 2;

                  case 1
                  /* Removed */
                  :
                    return 0;

                  default:
                    return P();
                }
              };

              return n(t) - n(e);
            }(t.type, e.type) || r.Ah(t.doc, e.doc);
          }), this.bh(n);
          var u = e ? this.Sh() : [],
              s = 0 === this.mh.size && this.le ? 1
          /* Synced */
          : 0
          /* Local */
          ,
              a = s !== this.Ih;
          return this.Ih = s, 0 !== o.length || a ? {
            snapshot: new Pt(this.query, t.Rh, i, o, t.ee, 0
            /* Local */
            === s, a,
            /* excludesMetadataChanges= */
            !1),
            Dh: u
          } : {
            Dh: u
          }; // no changes
        },
        /**
         * Applies an OnlineState change to the view, potentially generating a
         * ViewChange if the view's syncState changes as a result.
         */
        t.prototype.Yu = function (t) {
          return this.le && "Offline"
          /* Offline */
          === t ? ( // If we're offline, set `current` to false and then call applyChanges()
          // to refresh our syncState and generate a ViewChange as appropriate. We
          // are guaranteed to get a new TargetChange that sets `current` back to
          // true once the client is back online.
          this.le = !1, this.Zn({
            Rh: this.Rh,
            yh: new St(),
            ee: this.ee,
            ph: !1
          },
          /* updateLimboDocuments= */
          !1)) : {
            Dh: []
          };
        },
        /**
         * Returns whether the doc for the given key should be in limbo.
         */
        t.prototype.Ch = function (t) {
          // If the remote end says it's part of this query, it's not in limbo.
          return !this.Th.has(t) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
          !!this.Rh.has(t) && !this.Rh.get(t).an;
        },
        /**
         * Updates syncedDocuments, current, and limbo docs based on the given change.
         * Returns the list of changes to which docs are in limbo.
         */
        t.prototype.bh = function (t) {
          var e = this;
          t && (t._e.forEach(function (t) {
            return e.Th = e.Th.add(t);
          }), t.fe.forEach(function (t) {}), t.de.forEach(function (t) {
            return e.Th = e.Th["delete"](t);
          }), this.le = t.le);
        }, t.prototype.Sh = function () {
          var t = this; // We can only determine limbo documents when we're in-sync with the server.

          if (!this.le) return []; // TODO(klimt): Do this incrementally so that it's not quadratic when
          // updating many documents.

          var e = this.mh;
          this.mh = Dt(), this.Rh.forEach(function (e) {
            t.Ch(e.key) && (t.mh = t.mh.add(e.key));
          }); // Diff the new limbo docs with the old limbo docs.

          var n = [];
          return e.forEach(function (e) {
            t.mh.has(e) || n.push(new du(e));
          }), this.mh.forEach(function (t) {
            e.has(t) || n.push(new pu(t));
          }), n;
        },
        /**
         * Update the in-memory state of the current view with the state read from
         * persistence.
         *
         * We update the query view whenever a client's primary status changes:
         * - When a client transitions from primary to secondary, it can miss
         *   LocalStorage updates and its query views may temporarily not be
         *   synchronized with the state on disk.
         * - For secondary to primary transitions, the client needs to update the list
         *   of `syncedDocuments` since secondary clients update their query views
         *   based purely on synthesized RemoteEvents.
         *
         * @param queryResult.documents - The documents that match the query according
         * to the LocalStore.
         * @param queryResult.remoteKeys - The keys of the documents that match the
         * query according to the backend.
         *
         * @return The ViewChange that resulted from this synchronization.
         */
        // PORTING NOTE: Multi-tab only.
        t.prototype.Nh = function (t) {
          this.Th = t.Bc, this.mh = Dt();
          var e = this.gh(t.documents);
          return this.Zn(e,
          /*updateLimboDocuments=*/
          !0);
        },
        /**
         * Returns a view snapshot as if this query was just listened to. Contains
         * a document add for every existing document and the `fromCache` and
         * `hasPendingWrites` status of the already established view.
         */
        // PORTING NOTE: Multi-tab only.
        t.prototype.xh = function () {
          return Pt.ie(this.query, this.Rh, this.ee, 0
          /* Local */
          === this.Ih);
        }, t;
      }(),
          yu = function yu(
      /**
           * The query itself.
           */
      t,
      /**
           * The target number created by the client that is used in the watch
           * stream to identify this query.
           */
      e,
      /**
           * The view is responsible for computing the final merged truth of what
           * docs are in the query. It gets notified of local and remote changes,
           * and applies the query filters and limits to determine the most correct
           * possible results.
           */
      n) {
        this.query = t, this.targetId = e, this.view = n;
      },
          mu = function mu(t) {
        this.key = t,
        /**
                 * Set to true once we've received a document. This is used in
                 * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
                 * decide whether it needs to manufacture a delete event for the target once
                 * the target is CURRENT.
                 */
        this.Fh = !1;
      },
          gu =
      /** @class */
      function () {
        function t(t, e, n, // PORTING NOTE: Manages state synchronization in multi-tab environments.
        r, i, o) {
          this.Cu = t, this.Oh = e, this.Mh = n, this.kh = r, this.currentUser = i, this.$h = o, this.Lh = {}, this.Bh = new fr(function (t) {
            return Bn(t);
          }, zn), this.qh = new Map(),
          /**
               * The keys of documents that are in limbo for which we haven't yet started a
               * limbo resolution query.
               */
          this.Uh = [],
          /**
               * Keeps track of the target ID for each document that is in limbo with an
               * active target.
               */
          this.Qh = new vt(Z.$),
          /**
               * Keeps track of the information about an active limbo resolution for each
               * active target ID that was started for the purpose of limbo resolution.
               */
          this.Kh = new Map(), this.Wh = new eu(),
          /** Stores user completion handlers, indexed by User and BatchId. */
          this.jh = {},
          /** Stores user callbacks waiting for all pending writes to be acknowledged. */
          this.Gh = new Map(), this.zh = zi._o(), this.onlineState = "Unknown"
          /* Unknown */
          , // The primary state is set to `true` or `false` immediately after Firestore
          // startup. In the interim, a client should only be considered primary if
          // `isPrimary` is true.
          this.Hh = void 0;
        }

        return Object.defineProperty(t.prototype, "Jh", {
          get: function get() {
            return !0 === this.Hh;
          },
          enumerable: !1,
          configurable: !0
        }), t;
      }();
      /**
       * Holds the state of a query target, including its target ID and whether the
       * target is 'not-current', 'current' or 'rejected'.
       */
      // Visible for testing

      /**
       * Initiates the new listen, resolves promise when listen enqueued to the
       * server. All the subsequent view snapshots or errors are sent to the
       * subscribed handlers. Returns the initial snapshot.
       */


      function wu(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o, u, s, a;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return e = Hu(t), (u = e.Bh.get(r)) ? ( // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                // already exists when EventManager calls us for the first time. This
                // happens when the primary tab is already listening to this query on
                // behalf of another tab and the user of the primary also starts listening
                // to the query. EventManager will not have an assigned target ID in this
                // case and calls `listen` to obtain this ID.
                i = u.targetId, e.kh.Wa(i), o = u.view.xh(), [3
                /*break*/
                , 4]) : [3
                /*break*/
                , 1];

              case 1:
                return [4
                /*yield*/
                , ao(e.Cu, jn(r))];

              case 2:
                return s = n.sent(), a = e.kh.Wa(s.targetId), i = s.targetId, [4
                /*yield*/
                , bu(e, r, i, "current" === a)];

              case 3:
                o = n.sent(), e.Jh && To(e.Oh, s), n.label = 4;

              case 4:
                return [2
                /*return*/
                , o];
            }
          });
        });
      }
      /**
       * Registers a view for a previously unknown query and computes its initial
       * snapshot.
       */


      function bu(t, r, i, o) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var u, s, a, c, h, f;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (l) {
            switch (l.label) {
              case 0:
                // PORTING NOTE: On Web only, we inject the code that registers new Limbo
                // targets based on view changes. This allows us to only depend on Limbo
                // changes when user code includes queries.
                return t.Yh = function (r, i, o) {
                  return function (t, r, i, o) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                      var e, u, s;
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return e = r.view.gh(i), e.ph ? [4
                            /*yield*/
                            , ho(t.Cu, r.query,
                            /* usePreviousResults= */
                            !1).then(function (t) {
                              var n = t.documents;
                              return r.view.gh(n, e);
                            })] : [3
                            /*break*/
                            , 2];

                          case 1:
                            // The query has a limit and some docs were removed, so we need
                            // to re-run the query against the local store to make sure we
                            // didn't lose any good docs that had been past the limit.
                            e = n.sent(), n.label = 2;

                          case 2:
                            return u = o && o.re.get(r.targetId), s = r.view.Zn(e,
                            /* updateLimboDocuments= */
                            t.Jh, u), [2
                            /*return*/
                            , (Cu(t, r.targetId, s.Dh), s.snapshot)];
                        }
                      });
                    });
                  }(t, r, i, o);
                }, [4
                /*yield*/
                , ho(t.Cu, r,
                /* usePreviousResults= */
                !0)];

              case 1:
                return u = l.sent(), s = new vu(r, u.Bc), a = s.gh(u.documents), c = Rt.he(i, o && "Offline"
                /* Offline */
                !== t.onlineState), h = s.Zn(a,
                /* updateLimboDocuments= */
                t.Jh, c), Cu(t, i, h.Dh), f = new yu(r, i, s), [2
                /*return*/
                , (t.Bh.set(r, f), t.qh.has(i) ? t.qh.get(i).push(r) : t.qh.set(i, [r]), h.snapshot)];
            }
          });
        });
      }
      /** Stops listening to the query. */


      function _u(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return e = R(t), i = e.Bh.get(r), (o = e.qh.get(i.targetId)).length > 1 ? [2
                /*return*/
                , (e.qh.set(i.targetId, o.filter(function (t) {
                  return !zn(t, r);
                })), void e.Bh["delete"](r))] : e.Jh ? ( // We need to remove the local query target first to allow us to verify
                // whether any other client is still interested in this target.
                e.kh.Ga(i.targetId), e.kh.Ba(i.targetId) ? [3
                /*break*/
                , 2] : [4
                /*yield*/
                , co(e.Cu, i.targetId,
                /*keepPersistedTargetData=*/
                !1).then(function () {
                  e.kh.Ha(i.targetId), No(e.Oh, i.targetId), Su(e, i.targetId);
                })["catch"](vo)]) : [3
                /*break*/
                , 3];

              case 1:
                n.sent(), n.label = 2;

              case 2:
                return [3
                /*break*/
                , 5];

              case 3:
                return Su(e, i.targetId), [4
                /*yield*/
                , co(e.Cu, i.targetId,
                /*keepPersistedTargetData=*/
                !0)];

              case 4:
                n.sent(), n.label = 5;

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Initiates the write of local mutation batch which involves adding the
       * writes to the mutation queue, notifying the remote store about new
       * mutations and raising events for any changes this write caused.
       *
       * The promise returned by this call is resolved when the above steps
       * have completed, *not* when the write was acked by the backend. The
       * userCallback is resolved once the write was acked/rejected by the
       * backend (or failed locally for any other reason).
       */


      function Iu(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, o, u, s;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = Yu(t), n.label = 1;

              case 1:
                return n.trys.push([1, 5,, 6]), [4
                /*yield*/
                , function (t, e) {
                  var n,
                      r = R(t),
                      i = Q.now(),
                      o = e.reduce(function (t, e) {
                    return t.add(e.key);
                  }, Dt());
                  return r.persistence.runTransaction("Locally write mutations", "readwrite", function (t) {
                    return r.Oc._s(t, o).next(function (o) {
                      n = o;

                      for ( // For non-idempotent mutations (such as `FieldValue.increment()`),
                      // we record the base state in a separate patch mutation. This is
                      // later used to guarantee consistent values and prevents flicker
                      // even if the backend sends us an update that already includes our
                      // transform.
                      var u = [], s = 0, a = e; s < a.length; s++) {
                        var c = a[s],
                            h = pn(c, n.get(c.key));
                        null != h && // NOTE: The base state should only be applied if there's some
                        // existing document to override, so use a Precondition of
                        // exists=true
                        u.push(new mn(c.key, h, An(h.proto.mapValue), an.exists(!0)));
                      }

                      return r.rs.Sr(t, i, u, e);
                    });
                  }).then(function (t) {
                    var e = t.vn(n);
                    return {
                      batchId: t.batchId,
                      Qn: e
                    };
                  });
                }(e.Cu, r)];

              case 2:
                return o = n.sent(), e.kh.qa(o.batchId), function (t, e, n) {
                  var r = t.jh[t.currentUser.h()];
                  r || (r = new vt(G)), r = r.Tt(e, n), t.jh[t.currentUser.h()] = r;
                }(e, o.batchId, i), [4
                /*yield*/
                , Lu(e, o.Qn)];

              case 3:
                return n.sent(), [4
                /*yield*/
                , Uo(e.Oh)];

              case 4:
                return n.sent(), [3
                /*break*/
                , 6];

              case 5:
                return u = n.sent(), s = Lr(u, "Failed to persist write"), i.reject(s), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Applies one remote event to the sync engine, notifying any views of the
       * changes, and releasing any pending mutation batches that would become
       * visible because of the snapshot version the remote event contains.
       */


      function Eu(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = R(t), n.label = 1;

              case 1:
                return n.trys.push([1, 4,, 6]), [4
                /*yield*/
                , uo(e.Cu, r)];

              case 2:
                return i = n.sent(), // Update `receivedDocument` as appropriate for any limbo targets.
                r.re.forEach(function (t, n) {
                  var r = e.Kh.get(n);
                  r && ( // Since this is a limbo resolution lookup, it's for a single document
                  // and it could be added, modified, or removed, but not a combination.
                  C(t._e.size + t.fe.size + t.de.size <= 1), t._e.size > 0 ? r.Fh = !0 : t.fe.size > 0 ? C(r.Fh) : t.de.size > 0 && (C(r.Fh), r.Fh = !1));
                }), [4
                /*yield*/
                , Lu(e, i, r)];

              case 3:
                // Update `receivedDocument` as appropriate for any limbo targets.
                return n.sent(), [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , vo(n.sent())];

              case 5:
                return n.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Applies an OnlineState change to the sync engine and notifies any views of
       * the change.
       */


      function Tu(t, e, n) {
        var r = R(t); // If we are the secondary client, we explicitly ignore the remote store's
        // online state (the local client may go offline, even though the primary
        // tab remains online) and only apply the primary tab's online state from
        // SharedClientState.

        if (r.Jh && 0
        /* RemoteStore */
        === n || !r.Jh && 1
        /* SharedClientState */
        === n) {
          var i = [];
          r.Bh.forEach(function (t, n) {
            var r = n.view.Yu(e);
            r.snapshot && i.push(r.snapshot);
          }), function (t, e) {
            var n = R(t);
            n.onlineState = e;
            var r = !1;
            n.queries.forEach(function (t, n) {
              for (var i = 0, o = n.listeners; i < o.length; i++) {
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                o[i].Yu(e) && (r = !0);
              }
            }), r && Zo(n);
          }(r.Mh, e), i.length && r.Lh.au(i), r.onlineState = e, r.Jh && r.kh.Za(e);
        }
      }
      /**
       * Rejects the listen for the given targetID. This can be triggered by the
       * backend for any active target.
       *
       * @param syncEngine The sync engine implementation.
       * @param targetId The targetID corresponds to one previously initiated by the
       * user as part of TargetData passed to listen() on RemoteStore.
       * @param err A description of the condition that has forced the rejection.
       * Nearly always this will be an indication that the user is no longer
       * authorized to see the data matching the target.
       */


      function Nu(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, o, u, s, a, c;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                // PORTING NOTE: Multi-tab only.
                return (e = R(t)).kh.Ja(r, "rejected", i), o = e.Kh.get(r), (u = o && o.key) ? (s = (s = new vt(Z.$)).Tt(u, new kn(u, H.min())), a = Dt().add(u), c = new Ct(H.min(),
                /* targetChanges= */
                new Map(),
                /* targetMismatches= */
                new gt(G), s, a), [4
                /*yield*/
                , Eu(e, c)]) : [3
                /*break*/
                , 2];

              case 1:
                return n.sent(), // Since this query failed, we won't want to manually unlisten to it.
                // We only remove it from bookkeeping after we successfully applied the
                // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                // this query when the RemoteStore restarts the Watch stream, which should
                // re-trigger the target failure.
                e.Qh = e.Qh.remove(u), e.Kh["delete"](r), Vu(e), [3
                /*break*/
                , 4];

              case 2:
                return [4
                /*yield*/
                , co(e.Cu, r,
                /* keepPersistedTargetData */
                !1).then(function () {
                  return Su(e, r, i);
                })["catch"](vo)];

              case 3:
                n.sent(), n.label = 4;

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function Au(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = R(t), i = r.batch.batchId, n.label = 1;

              case 1:
                return n.trys.push([1, 4,, 6]), [4
                /*yield*/
                , io(e.Cu, r)];

              case 2:
                return o = n.sent(), // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                Ou(e, i,
                /*error=*/
                null), ku(e, i), e.kh.Qa(i, "acknowledged"), [4
                /*yield*/
                , Lu(e, o)];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                return n.sent(), [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , vo(n.sent())];

              case 5:
                return n.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function Du(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = R(t), n.label = 1;

              case 1:
                return n.trys.push([1, 4,, 6]), [4
                /*yield*/
                , function (t, e) {
                  var n = R(t);
                  return n.persistence.runTransaction("Reject batch", "readwrite-primary", function (t) {
                    var r;
                    return n.rs.Cr(t, e).next(function (e) {
                      return C(null !== e), r = e.keys(), n.rs.$r(t, e);
                    }).next(function () {
                      return n.rs.Ur(t);
                    }).next(function () {
                      return n.Oc._s(t, r);
                    });
                  });
                }(e.Cu, r)];

              case 2:
                return o = n.sent(), // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                Ou(e, r, i), ku(e, r), e.kh.Qa(r, "rejected", i), [4
                /*yield*/
                , Lu(e, o)];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                return n.sent(), [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , vo(n.sent())];

              case 5:
                return n.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Registers a user callback that resolves when all pending mutations at the moment of calling
       * are acknowledged .
       */


      function xu(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o, u, s;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                Oo((e = R(t)).Oh) || x("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), n.label = 1;

              case 1:
                return n.trys.push([1, 3,, 4]), [4
                /*yield*/
                , function (t) {
                  var e = R(t);
                  return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function (t) {
                    return e.rs.Or(t);
                  });
                }(e.Cu)];

              case 2:
                return -1 === (i = n.sent()) ? [2
                /*return*/
                , void r.resolve()] : ((o = e.Gh.get(i) || []).push(r), e.Gh.set(i, o), [3
                /*break*/
                , 4]);

              case 3:
                return u = n.sent(), s = Lr(u, "Initialization of waitForPendingWrites() operation failed"), r.reject(s), [3
                /*break*/
                , 4];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
       * if there are any.
       */


      function ku(t, e) {
        (t.Gh.get(e) || []).forEach(function (t) {
          t.resolve();
        }), t.Gh["delete"](e)
        /** Reject all outstanding callbacks waiting for pending writes to complete. */
        ;
      }

      function Ou(t, e, n) {
        var r = R(t),
            i = r.jh[r.currentUser.h()]; // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.

        if (i) {
          var o = i.get(e);
          o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.jh[r.currentUser.h()] = i;
        }
      }

      function Su(t, e, n) {
        void 0 === n && (n = null), t.kh.Ga(e);

        for (var r = 0, i = t.qh.get(e); r < i.length; r++) {
          var o = i[r];
          t.Bh["delete"](o), n && t.Lh.Xh(o, n);
        }

        t.qh["delete"](e), t.Jh && t.Wh.da(e).forEach(function (e) {
          t.Wh.Qr(e) || // We removed the last reference for this key
          Pu(t, e);
        });
      }

      function Pu(t, e) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var n = t.Qh.get(e);
        null !== n && (No(t.Oh, n), t.Qh = t.Qh.remove(e), t.Kh["delete"](n), Vu(t));
      }

      function Cu(t, e, n) {
        for (var r = 0, i = n; r < i.length; r++) {
          var o = i[r];
          o instanceof pu ? (t.Wh.Do(o.key, e), Ru(t, o)) : o instanceof du ? (x("SyncEngine", "Document no longer in limbo: " + o.key), t.Wh.No(o.key, e), t.Wh.Qr(o.key) || // We removed the last reference for this key
          Pu(t, o.key)) : P();
        }
      }

      function Ru(t, e) {
        var n = e.key;
        t.Qh.get(n) || (x("SyncEngine", "New document in limbo: " + n), t.Uh.push(n), Vu(t));
      }
      /**
       * Starts listens for documents in limbo that are enqueued for resolution,
       * subject to a maximum number of concurrent resolutions.
       *
       * Without bounding the number of concurrent resolutions, the server can fail
       * with "resource exhausted" errors which can lead to pathological client
       * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
       */


      function Vu(t) {
        for (; t.Uh.length > 0 && t.Qh.size < t.$h;) {
          var e = t.Uh.shift(),
              n = t.zh.next();
          t.Kh.set(n, new mu(e)), t.Qh = t.Qh.Tt(e, n), To(t.Oh, new ft(jn(Cn(e.path)), n, 2
          /* LimboResolution */
          , _r.Ds));
        }
      }

      function Lu(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var o, u, s, a;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (c) {
            switch (c.label) {
              case 0:
                return o = R(t), u = [], s = [], a = [], o.Bh.W() ? [3
                /*break*/
                , 3] : (o.Bh.forEach(function (t, e) {
                  a.push(o.Yh(e, r, i).then(function (t) {
                    if (t) {
                      o.Jh && o.kh.Ja(e.targetId, t.fromCache ? "not-current" : "current"), u.push(t);
                      var n = br.Vs(e.targetId, t);
                      s.push(n);
                    }
                  }));
                }), [4
                /*yield*/
                , Promise.all(a)]);

              case 1:
                return c.sent(), o.Lh.au(u), [4
                /*yield*/
                , function (t, r) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var e, i, o, u, s, a, c, h, f;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                      switch (n.label) {
                        case 0:
                          e = R(t), n.label = 1;

                        case 1:
                          return n.trys.push([1, 3,, 4]), [4
                          /*yield*/
                          , e.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function (t) {
                            return lr.forEach(r, function (n) {
                              return lr.forEach(n.gs, function (r) {
                                return e.persistence.Vr.Do(t, n.targetId, r);
                              }).next(function () {
                                return lr.forEach(n.ys, function (r) {
                                  return e.persistence.Vr.No(t, n.targetId, r);
                                });
                              });
                            });
                          })];

                        case 2:
                          return n.sent(), [3
                          /*break*/
                          , 4];

                        case 3:
                          if (!Ar(i = n.sent())) throw i; // If `notifyLocalViewChanges` fails, we did not advance the sequence
                          // number for the documents that were included in this transaction.
                          // This might trigger them to be deleted earlier than they otherwise
                          // would have, but it should not invalidate the integrity of the data.

                          return x("LocalStore", "Failed to update sequence numbers: " + i), [3
                          /*break*/
                          , 4];

                        case 4:
                          for (o = 0, u = r; o < u.length; o++) {
                            s = u[o], a = s.targetId, s.fromCache || (c = e.Cc.get(a), h = c.ft, f = c.Et(h), // Advance the last limbo free snapshot version
                            e.Cc = e.Cc.Tt(a, f));
                          }

                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }(o.Cu, s)];

              case 2:
                c.sent(), c.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function Uu(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return (e = R(t)).currentUser.isEqual(r) ? [3
                /*break*/
                , 3] : (x("SyncEngine", "User change. New user:", r.h()), [4
                /*yield*/
                , ro(e.Cu, r)]);

              case 1:
                return i = n.sent(), e.currentUser = r, // Fails tasks waiting for pending writes requested by previous user.
                function (t, e) {
                  t.Gh.forEach(function (t) {
                    t.forEach(function (t) {
                      t.reject(new L(V.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
                    });
                  }), t.Gh.clear();
                }(e), // TODO(b/114226417): Consider calling this only in the primary tab.
                e.kh.Xa(r, i.$c, i.Lc), [4
                /*yield*/
                , Lu(e, i.kc)];

              case 2:
                n.sent(), n.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function Mu(t, e) {
        var n = R(t),
            r = n.Kh.get(e);
        if (r && r.Fh) return Dt().add(r.key);
        var i = Dt(),
            o = n.qh.get(e);
        if (!o) return i;

        for (var u = 0, s = o; u < s.length; u++) {
          var a = s[u],
              c = n.Bh.get(a);
          i = i.Gt(c.view.Ph);
        }

        return i;
      }
      /**
       * Reconcile the list of synced documents in an existing view with those
       * from persistence.
       */


      function qu(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return [4
                /*yield*/
                , ho((e = R(t)).Cu, r.query,
                /* usePreviousResults= */
                !0)];

              case 1:
                return i = n.sent(), o = r.view.Nh(i), [2
                /*return*/
                , (e.Jh && Cu(e, r.targetId, o.Dh), o)];
            }
          });
        });
      }
      /**
       * Retrieves newly changed documents from remote document cache and raises
       * snapshots if needed.
       */
      // PORTING NOTE: Multi-Tab only.


      function ju(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            return [2
            /*return*/
            , lo((e = R(t)).Cu).then(function (t) {
              return Lu(e, t);
            })];
          });
        });
      }
      /** Applies a mutation state to an existing batch.  */
      // PORTING NOTE: Multi-Tab only.


      function Fu(t, r, i, o) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, u;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return [4
                /*yield*/
                , function (t, e) {
                  var n = R(t),
                      r = R(n.rs);
                  return n.persistence.runTransaction("Lookup mutation documents", "readonly", function (t) {
                    return r.Nr(t, e).next(function (e) {
                      return e ? n.Oc._s(t, e) : lr.resolve(null);
                    });
                  });
                }((e = R(t)).Cu, r)];

              case 1:
                return null === (u = n.sent()) ? [3
                /*break*/
                , 6] : "pending" !== i ? [3
                /*break*/
                , 3] : [4
                /*yield*/
                , Uo(e.Oh)];

              case 2:
                // If we are the primary client, we need to send this write to the
                // backend. Secondary clients will ignore these writes since their remote
                // connection is disabled.
                return n.sent(), [3
                /*break*/
                , 4];

              case 3:
                "acknowledged" === i || "rejected" === i ? ( // NOTE: Both these methods are no-ops for batches that originated from
                // other clients.
                Ou(e, r, o || null), ku(e, r), function (t, e) {
                  R(R(t).rs).Br(e);
                }(e.Cu, r)) : P(), n.label = 4;

              case 4:
                return [4
                /*yield*/
                , Lu(e, u)];

              case 5:
                return n.sent(), [3
                /*break*/
                , 7];

              case 6:
                // A throttled tab may not have seen the mutation before it was completed
                // and removed from the mutation queue, in which case we won't have cached
                // the affected documents. In this case we can safely ignore the update
                // since that means we didn't apply the mutation locally at all (if we
                // had, we would have cached the affected documents), and so we will just
                // see any resulting document changes via normal remote document updates
                // as applicable.
                x("SyncEngine", "Cannot apply mutation batch with id: " + r), n.label = 7;

              case 7:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /** Applies a query target change from a different tab. */
      // PORTING NOTE: Multi-Tab only.


      function zu(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o, u, s, a, c, h;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return Hu(e = R(t)), Yu(e), !0 !== r || !0 === e.Hh ? [3
                /*break*/
                , 3] : (i = e.kh.$a(), [4
                /*yield*/
                , Bu(e, i.H())]);

              case 1:
                return o = n.sent(), e.Hh = !0, [4
                /*yield*/
                , Go(e.Oh, !0)];

              case 2:
                for (n.sent(), u = 0, s = o; u < s.length; u++) {
                  a = s[u], To(e.Oh, a);
                }

                return [3
                /*break*/
                , 7];

              case 3:
                return !1 !== r || !1 === e.Hh ? [3
                /*break*/
                , 7] : (c = [], h = Promise.resolve(), e.qh.forEach(function (t, n) {
                  e.kh.za(n) ? c.push(n) : h = h.then(function () {
                    return Su(e, n), co(e.Cu, n,
                    /*keepPersistedTargetData=*/
                    !0);
                  }), No(e.Oh, n);
                }), [4
                /*yield*/
                , h]);

              case 4:
                return n.sent(), [4
                /*yield*/
                , Bu(e, c)];

              case 5:
                return n.sent(), // PORTING NOTE: Multi-Tab only.
                function (t) {
                  var e = R(t);
                  e.Kh.forEach(function (t, n) {
                    No(e.Oh, n);
                  }), e.Wh.wa(), e.Kh = new Map(), e.Qh = new vt(Z.$);
                }(e), e.Hh = !1, [4
                /*yield*/
                , Go(e.Oh, !1)];

              case 6:
                n.sent(), n.label = 7;

              case 7:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function Bu(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o, u, s, a, c, h, f, l, p, d, v, y;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = R(t), i = [], o = [], u = 0, s = r, n.label = 1;

              case 1:
                return u < s.length ? (a = s[u], c = void 0, (h = e.qh.get(a)) && 0 !== h.length ? [4
                /*yield*/
                , ao(e.Cu, jn(h[0]))] : [3
                /*break*/
                , 7]) : [3
                /*break*/
                , 13];

              case 2:
                // For queries that have a local View, we fetch their current state
                // from LocalStore (as the resume token and the snapshot version
                // might have changed) and reconcile their views with the persisted
                // state (the list of syncedDocuments may have gotten out of sync).
                c = n.sent(), f = 0, l = h, n.label = 3;

              case 3:
                return f < l.length ? (p = l[f], d = e.Bh.get(p), [4
                /*yield*/
                , qu(e, d)]) : [3
                /*break*/
                , 6];

              case 4:
                (v = n.sent()).snapshot && o.push(v.snapshot), n.label = 5;

              case 5:
                return f++, [3
                /*break*/
                , 3];

              case 6:
                return [3
                /*break*/
                , 11];

              case 7:
                return [4
                /*yield*/
                , fo(e.Cu, a)];

              case 8:
                return y = n.sent(), [4
                /*yield*/
                , ao(e.Cu, y)];

              case 9:
                return c = n.sent(), [4
                /*yield*/
                , bu(e, Gu(y), a,
                /*current=*/
                !1)];

              case 10:
                n.sent(), n.label = 11;

              case 11:
                i.push(c), n.label = 12;

              case 12:
                return u++, [3
                /*break*/
                , 1];

              case 13:
                return [2
                /*return*/
                , (e.Lh.au(o), i)];
            }
          });
        });
      }
      /**
       * Creates a `Query` object from the specified `Target`. There is no way to
       * obtain the original `Query`, so we synthesize a `Query` from the `Target`
       * object.
       *
       * The synthesized result might be different from the original `Query`, but
       * since the synthesized `Query` should return the same results as the
       * original one (only the presentation of results might differ), the potential
       * difference will not cause issues.
       */
      // PORTING NOTE: Multi-Tab only.


      function Gu(t) {
        return Pn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F"
        /* First */
        , t.startAt, t.endAt);
      }
      /** Returns the IDs of the clients that are currently active. */
      // PORTING NOTE: Multi-Tab only.


      function Ku(t) {
        var e = R(t);
        return R(R(e.Cu).persistence).Ic();
      }
      /** Applies a query target change from a different tab. */
      // PORTING NOTE: Multi-Tab only.


      function Wu(t, r, i, o) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, u, s;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return (e = R(t)).Hh ? ( // If we receive a target state notification via WebStorage, we are
                // either already secondary or another tab has taken the primary lease.
                x("SyncEngine", "Ignoring unexpected query state notification."), [3
                /*break*/
                , 8]) : [3
                /*break*/
                , 1];

              case 1:
                if (!e.qh.has(r)) return [3
                /*break*/
                , 8];

                switch (i) {
                  case "current":
                  case "not-current":
                    return [3
                    /*break*/
                    , 2];

                  case "rejected":
                    return [3
                    /*break*/
                    , 5];
                }

                return [3
                /*break*/
                , 7];

              case 2:
                return [4
                /*yield*/
                , lo(e.Cu)];

              case 3:
                return u = n.sent(), s = Ct.ae(r, "current" === i), [4
                /*yield*/
                , Lu(e, u, s)];

              case 4:
                return n.sent(), [3
                /*break*/
                , 8];

              case 5:
                return [4
                /*yield*/
                , co(e.Cu, r,
                /* keepPersistedTargetData */
                !0)];

              case 6:
                return n.sent(), Su(e, r, o), [3
                /*break*/
                , 8];

              case 7:
                P(), n.label = 8;

              case 8:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /** Adds or removes Watch targets for queries from different tabs. */


      function Qu(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, o, u, s, a, c, h, f, l, p;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (d) {
            switch (d.label) {
              case 0:
                if (!(e = Hu(t)).Hh) return [3
                /*break*/
                , 10];
                o = 0, u = r, d.label = 1;

              case 1:
                return o < u.length ? (s = u[o], e.qh.has(s) ? ( // A target might have been added in a previous attempt
                x("SyncEngine", "Adding an already active target " + s), [3
                /*break*/
                , 5]) : [4
                /*yield*/
                , fo(e.Cu, s)]) : [3
                /*break*/
                , 6];

              case 2:
                return a = d.sent(), [4
                /*yield*/
                , ao(e.Cu, a)];

              case 3:
                return c = d.sent(), [4
                /*yield*/
                , bu(e, Gu(a), c.targetId,
                /*current=*/
                !1)];

              case 4:
                d.sent(), To(e.Oh, c), d.label = 5;

              case 5:
                return o++, [3
                /*break*/
                , 1];

              case 6:
                h = function h(t) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return e.qh.has(t) ? [4
                        /*yield*/
                        , co(e.Cu, t,
                        /* keepPersistedTargetData */
                        !1).then(function () {
                          No(e.Oh, t), Su(e, t);
                        })["catch"](vo)] : [3
                        /*break*/
                        , 2];
                      // Release queries that are still active.

                      case 1:
                        // Release queries that are still active.
                        n.sent(), n.label = 2;

                      case 2:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                }, f = 0, l = i, d.label = 7;

              case 7:
                return f < l.length ? (p = l[f], [5
                /*yield**/
                , h(p)]) : [3
                /*break*/
                , 10];

              case 8:
                d.sent(), d.label = 9;

              case 9:
                return f++, [3
                /*break*/
                , 7];

              case 10:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function Hu(t) {
        var e = R(t);
        return e.Oh.xu.Qu = Eu.bind(null, e), e.Oh.xu.Xe = Mu.bind(null, e), e.Oh.xu.Uu = Nu.bind(null, e), e.Lh.au = Jo.bind(null, e.Mh), e.Lh.Xh = Xo.bind(null, e.Mh), e;
      }

      function Yu(t) {
        var e = R(t);
        return e.Oh.xu.Ku = Au.bind(null, e), e.Oh.xu.Wu = Du.bind(null, e), e;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // TOOD(b/140938512): Drop SimpleQueryEngine and rename IndexFreeQueryEngine.

      /**
       * A query engine that takes advantage of the target document mapping in the
       * QueryCache. The IndexFreeQueryEngine optimizes query execution by only
       * reading the documents that previously matched a query plus any documents that were
       * edited after the query was last listened to.
       *
       * There are some cases where Index-Free queries are not guaranteed to produce
       * the same results as full collection scans. In these cases, the
       * IndexFreeQueryEngine falls back to full query processing. These cases are:
       *
       * - Limit queries where a document that matched the query previously no longer
       *   matches the query.
       *
       * - Limit queries where a document edit may cause the document to sort below
       *   another document that is in the local cache.
       *
       * - Queries that have never been CURRENT or free of Limbo documents.
       */


      var $u =
      /** @class */
      function () {
        function t() {}

        return t.prototype.Mc = function (t) {
          this.Zh = t;
        }, t.prototype.ws = function (t, e, n, r) {
          var i = this; // Queries that match all documents don't benefit from using
          // IndexFreeQueries. It is more efficient to scan all documents in a
          // collection, rather than to perform individual lookups.

          return function (t) {
            return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.Tn.length || 1 === t.Tn.length && t.Tn[0].field.tt());
          }(e) || n.isEqual(H.min()) ? this.tl(t, e) : this.Zh._s(t, r).next(function (o) {
            var s = i.el(e, o);
            return (Rn(e) || Vn(e)) && i.ph(e.limitType, s, r, n) ? i.tl(t, e) : (D() <= _firebase_logger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].DEBUG && x("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), Gn(e)), i.Zh.ws(t, e, n).next(function (t) {
              // We merge `previousResults` into `updateResults`, since
              // `updateResults` is already a DocumentMap. If a document is
              // contained in both lists, then its contents are the same.
              return s.forEach(function (e) {
                t = t.Tt(e.key, e);
              }), t;
            }));
          }); // Queries that have never seen a snapshot without limbo free documents
          // should also be run as a full collection scan.
        },
        /** Applies the query filter and sorting to the provided documents.  */
        t.prototype.el = function (t, e) {
          // Sort the documents and re-apply the query filter since previously
          // matching documents do not necessarily still match the query.
          var n = new gt(Wn(t));
          return e.forEach(function (e, r) {
            r instanceof xn && Kn(t, r) && (n = n.add(r));
          }), n;
        },
        /**
         * Determines if a limit query needs to be refilled from cache, making it
         * ineligible for index-free execution.
         *
         * @param sortedPreviousResults The documents that matched the query when it
         * was last synchronized, sorted by the query's comparator.
         * @param remoteKeys The document keys that matched the query at the last
         * snapshot.
         * @param limboFreeSnapshotVersion The version of the snapshot when the query
         * was last synchronized.
         */
        t.prototype.ph = function (t, e, n, r) {
          // The query needs to be refilled if a previously matching document no
          // longer matches.
          if (n.size !== e.size) return !0; // Limit queries are not eligible for index-free query execution if there is
          // a potential that an older document from cache now sorts before a document
          // that was previously part of the limit. This, however, can only happen if
          // the document at the edge of the limit goes out of limit.
          // If a document that is not the limit boundary sorts differently,
          // the boundary of the limit itself did not change and documents from cache
          // will continue to be "rejected" by this boundary. Therefore, we can ignore
          // any modifications that don't affect the last document.

          var i = "F"
          /* First */
          === t ? e.last() : e.first();
          return !!i && (i.hasPendingWrites || i.version.F(r) > 0);
        }, t.prototype.tl = function (t, e) {
          return D() <= _firebase_logger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].DEBUG && x("IndexFreeQueryEngine", "Using full collection scan to execute query:", Gn(e)), this.Zh.ws(t, e, H.min());
        }, t;
      }(),
          Ju =
      /** @class */
      function () {
        function t(t, e) {
          this.os = t, this.Vr = e,
          /**
               * The set of all mutations that have been sent but not yet been applied to
               * the backend.
               */
          this.rs = [],
          /** Next value to use when assigning sequential IDs to each mutation batch. */
          this.nl = 1,
          /** An ordered mapping between documents and the mutations batch IDs. */
          this.sl = new gt(nu.ua);
        }

        return t.prototype.br = function (t) {
          return lr.resolve(0 === this.rs.length);
        }, t.prototype.Sr = function (t, e, n, r) {
          var i = this.nl;
          this.nl++, this.rs.length > 0 && this.rs[this.rs.length - 1];
          var o = new cr(i, e, n, r);
          this.rs.push(o); // Track references by document key and index collection parents.

          for (var u = 0, s = r; u < s.length; u++) {
            var a = s[u];
            this.sl = this.sl.add(new nu(a.key, i)), this.os.Dr(t, a.key.path.q());
          }

          return lr.resolve(o);
        }, t.prototype.Cr = function (t, e) {
          return lr.resolve(this.il(e));
        }, t.prototype.Fr = function (t, e) {
          var n = e + 1,
              r = this.rl(n),
              i = r < 0 ? 0 : r; // The requested batchId may still be out of range so normalize it to the
          // start of the queue.

          return lr.resolve(this.rs.length > i ? this.rs[i] : null);
        }, t.prototype.Or = function () {
          return lr.resolve(0 === this.rs.length ? -1 : this.nl - 1);
        }, t.prototype.Mr = function (t) {
          return lr.resolve(this.rs.slice());
        }, t.prototype.us = function (t, e) {
          var n = this,
              r = new nu(e, 0),
              i = new nu(e, Number.POSITIVE_INFINITY),
              o = [];
          return this.sl.Kt([r, i], function (t) {
            var e = n.il(t.Ta);
            o.push(e);
          }), lr.resolve(o);
        }, t.prototype.ds = function (t, e) {
          var n = this,
              r = new gt(G);
          return e.forEach(function (t) {
            var e = new nu(t, 0),
                i = new nu(t, Number.POSITIVE_INFINITY);
            n.sl.Kt([e, i], function (t) {
              r = r.add(t.Ta);
            });
          }), lr.resolve(this.ol(r));
        }, t.prototype.Rs = function (t, e) {
          // Use the query path as a prefix for testing if a document matches the
          // query.
          var n = e.path,
              r = n.length + 1,
              i = n; // Construct a document reference for actually scanning the index. Unlike
          // the prefix the document key in this reference must have an even number of
          // segments. The empty segment can be used a suffix of the query path
          // because it precedes all other segments in an ordered traversal.

          Z.ot(i) || (i = i.child(""));
          var o = new nu(new Z(i), 0),
              u = new gt(G); // Find unique batchIDs referenced by all documents potentially matching the
          // query.

          return this.sl.Wt(function (t) {
            var e = t.key.path;
            return !!n.j(e) && ( // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (u = u.add(t.Ta)), !0);
          }, o), lr.resolve(this.ol(u));
        }, t.prototype.ol = function (t) {
          var e = this,
              n = []; // Construct an array of matching batches, sorted by batchID to ensure that
          // multiple mutations affecting the same document key are applied in order.

          return t.forEach(function (t) {
            var r = e.il(t);
            null !== r && n.push(r);
          }), n;
        }, t.prototype.$r = function (t, e) {
          var n = this;
          C(0 === this.cl(e.batchId, "removed")), this.rs.shift();
          var r = this.sl;
          return lr.forEach(e.mutations, function (i) {
            var o = new nu(i.key, e.batchId);
            return r = r["delete"](o), n.Vr.qr(t, i.key);
          }).next(function () {
            n.sl = r;
          });
        }, t.prototype.Br = function (t) {// No-op since the memory mutation queue does not maintain a separate cache.
        }, t.prototype.Qr = function (t, e) {
          var n = new nu(e, 0),
              r = this.sl.jt(n);
          return lr.resolve(e.isEqual(r && r.key));
        }, t.prototype.Ur = function (t) {
          return this.rs.length, lr.resolve();
        },
        /**
         * Finds the index of the given batchId in the mutation queue and asserts that
         * the resulting index is within the bounds of the queue.
         *
         * @param batchId The batchId to search for
         * @param action A description of what the caller is doing, phrased in passive
         * form (e.g. "acknowledged" in a routine that acknowledges batches).
         */
        t.prototype.cl = function (t, e) {
          return this.rl(t);
        },
        /**
         * Finds the index of the given batchId in the mutation queue. This operation
         * is O(1).
         *
         * @return The computed index of the batch with the given batchId, based on
         * the state of the queue. Note this index can be negative if the requested
         * batchId has already been remvoed from the queue or past the end of the
         * queue if the batchId is larger than the last added batch.
         */
        t.prototype.rl = function (t) {
          return 0 === this.rs.length ? 0 : t - this.rs[0].batchId; // Examine the front of the queue to figure out the difference between the
          // batchId and indexes in the array. Note that since the queue is ordered
          // by batchId, if the first batch has a larger batchId then the requested
          // batchId doesn't exist in the queue.
        },
        /**
         * A version of lookupMutationBatch that doesn't return a promise, this makes
         * other functions that uses this code easier to read and more efficent.
         */
        t.prototype.il = function (t) {
          var e = this.rl(t);
          return e < 0 || e >= this.rs.length ? null : this.rs[e];
        }, t;
      }(),
          Xu =
      /** @class */
      function () {
        /**
         * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
         * return 0 to avoid unnecessarily doing the work of calculating the size.
         */
        function t(t, e) {
          this.os = t, this.ul = e,
          /** Underlying cache of documents and their read times. */
          this.docs = new vt(Z.$),
          /** Size of all cached documents. */
          this.size = 0
          /**
          * Adds the supplied entry to the cache and updates the cache size as appropriate.
          *
          * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
          * returned by `newChangeBuffer()`.
          */
          ;
        }

        return t.prototype.jn = function (t, e, n) {
          var r = e.key,
              i = this.docs.get(r),
              o = i ? i.size : 0,
              u = this.ul(e);
          return this.docs = this.docs.Tt(r, {
            zn: e,
            size: u,
            readTime: n
          }), this.size += u - o, this.os.Dr(t, r.path.q());
        },
        /**
         * Removes the specified entry from the cache and updates the cache size as appropriate.
         *
         * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
         * returned by `newChangeBuffer()`.
         */
        t.prototype.Hn = function (t) {
          var e = this.docs.get(t);
          e && (this.docs = this.docs.remove(t), this.size -= e.size);
        }, t.prototype.Jn = function (t, e) {
          var n = this.docs.get(e);
          return lr.resolve(n ? n.zn : null);
        }, t.prototype.getEntries = function (t, e) {
          var n = this,
              r = It();
          return e.forEach(function (t) {
            var e = n.docs.get(t);
            r = r.Tt(t, e ? e.zn : null);
          }), lr.resolve(r);
        }, t.prototype.ws = function (t, e, n) {
          for (var r = Tt(), i = new Z(e.path.child("")), o = this.docs.Vt(i) // Documents are ordered by key, so we can use a prefix scan to narrow down
          // the documents we need to match the query against.
          ; o.Nt();) {
            var u = o.Ct(),
                s = u.key,
                a = u.value,
                c = a.zn,
                h = a.readTime;
            if (!e.path.j(s.path)) break;
            h.F(n) <= 0 || c instanceof xn && Kn(e, c) && (r = r.Tt(c.key, c));
          }

          return lr.resolve(r);
        }, t.prototype.al = function (t, e) {
          return lr.forEach(this.docs, function (t) {
            return e(t);
          });
        }, t.prototype.Xr = function (t) {
          // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
          // a separate changelog and does not need special handling for removals.
          return new Zu(this);
        }, t.prototype.eo = function (t) {
          return lr.resolve(this.size);
        }, t;
      }(),
          Zu =
      /** @class */
      function (e) {
        function n(t) {
          var n = this;
          return (n = e.call(this) || this).no = t, n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.Zn = function (t) {
          var e = this,
              n = [];
          return this.Qn.forEach(function (r, i) {
            i && i.zn ? n.push(e.no.jn(t, i.zn, e.Wn(r))) : e.no.Hn(r);
          }), lr.qn(n);
        }, n.prototype.Yn = function (t, e) {
          return this.no.Jn(t, e);
        }, n.prototype.Xn = function (t, e) {
          return this.no.getEntries(t, e);
        }, n;
      }(pr),
          ts =
      /** @class */
      function () {
        function t(t) {
          this.persistence = t,
          /**
               * Maps a target to the data about that target
               */
          this.hl = new fr(function (t) {
            return ot(t);
          }, ut),
          /** The last received snapshot version. */
          this.lastRemoteSnapshotVersion = H.min(),
          /** The highest numbered target ID encountered. */
          this.highestTargetId = 0,
          /** The highest sequence number encountered. */
          this.ll = 0,
          /**
               * A ordered bidirectional mapping between documents and the remote target
               * IDs.
               */
          this._l = new eu(), this.targetCount = 0, this.fl = zi.lo();
        }

        return t.prototype.Ue = function (t, e) {
          return this.hl.forEach(function (t, n) {
            return e(n);
          }), lr.resolve();
        }, t.prototype.To = function (t) {
          return lr.resolve(this.lastRemoteSnapshotVersion);
        }, t.prototype.Io = function (t) {
          return lr.resolve(this.ll);
        }, t.prototype.fo = function (t) {
          return this.highestTargetId = this.fl.next(), lr.resolve(this.highestTargetId);
        }, t.prototype.mo = function (t, e, n) {
          return n && (this.lastRemoteSnapshotVersion = n), e > this.ll && (this.ll = e), lr.resolve();
        }, t.prototype.Ro = function (t) {
          this.hl.set(t.target, t);
          var e = t.targetId;
          e > this.highestTargetId && (this.fl = new zi(e), this.highestTargetId = e), t.sequenceNumber > this.ll && (this.ll = t.sequenceNumber);
        }, t.prototype.Ao = function (t, e) {
          return this.Ro(e), this.targetCount += 1, lr.resolve();
        }, t.prototype.yo = function (t, e) {
          return this.Ro(e), lr.resolve();
        }, t.prototype.Vo = function (t, e) {
          return this.hl["delete"](e.target), this._l.da(e.targetId), this.targetCount -= 1, lr.resolve();
        }, t.prototype.mr = function (t, e, n) {
          var r = this,
              i = 0,
              o = [];
          return this.hl.forEach(function (u, s) {
            s.sequenceNumber <= e && null === n.get(s.targetId) && (r.hl["delete"](u), o.push(r.po(t, s.targetId)), i++);
          }), lr.qn(o).next(function () {
            return i;
          });
        }, t.prototype.vo = function (t) {
          return lr.resolve(this.targetCount);
        }, t.prototype.bo = function (t, e) {
          var n = this.hl.get(e) || null;
          return lr.resolve(n);
        }, t.prototype.So = function (t, e, n) {
          return this._l.la(e, n), lr.resolve();
        }, t.prototype.Co = function (t, e, n) {
          this._l.fa(e, n);

          var r = this.persistence.Vr,
              i = [];
          return r && e.forEach(function (e) {
            i.push(r.qr(t, e));
          }), lr.qn(i);
        }, t.prototype.po = function (t, e) {
          return this._l.da(e), lr.resolve();
        }, t.prototype.xo = function (t, e) {
          var n = this._l.Ea(e);

          return lr.resolve(n);
        }, t.prototype.Qr = function (t, e) {
          return lr.resolve(this._l.Qr(e));
        }, t;
      }(),
          es =
      /** @class */
      function () {
        function t(t) {
          this.serializer = t, this.dl = new Map(), this.wl = new Map();
        }

        return t.prototype.ro = function (t, e) {
          return lr.resolve(this.dl.get(e));
        }, t.prototype.oo = function (t, e) {
          /** Encodes a BundleMetadata proto object to a Bundle model object. */
          var n;
          return this.dl.set(e.id, {
            id: (n = e).id,
            version: n.version,
            createTime: be(n.createTime)
          }), lr.resolve();
        }, t.prototype.co = function (t, e) {
          return lr.resolve(this.wl.get(e));
        }, t.prototype.uo = function (t, e) {
          var n;
          return this.wl.set(e.name, {
            name: (n = e).name,
            query: ri(n.bundledQuery),
            readTime: be(n.readTime)
          }), lr.resolve();
        }, t;
      }(),
          ns =
      /** @class */
      function () {
        /**
         * The constructor accepts a factory for creating a reference delegate. This
         * allows both the delegate and this instance to have strong references to
         * each other without having nullable fields that would then need to be
         * checked or asserted on every access.
         */
        function t(t, e) {
          var n = this;
          this.El = {}, this.ko = new _r(0), this.$o = !1, this.$o = !0, this.Vr = t(this), this.jo = new ts(this), this.os = new yi(), this.ss = function (t, e) {
            return new Xu(t, function (t) {
              return n.Vr.Tl(t);
            });
          }(this.os), this.serializer = new Qr(e), this.Go = new es(this.serializer);
        }

        return t.prototype.start = function () {
          return Promise.resolve();
        }, t.prototype.fc = function () {
          // No durable state to ensure is closed on shutdown.
          return this.$o = !1, Promise.resolve();
        }, Object.defineProperty(t.prototype, "lr", {
          get: function get() {
            return this.$o;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.tc = function () {// No op.
        }, t.prototype.ec = function () {// No op.
        }, t.prototype.Pc = function () {
          return this.os;
        }, t.prototype.mc = function (t) {
          var e = this.El[t.h()];
          return e || (e = new Ju(this.os, this.Vr), this.El[t.h()] = e), e;
        }, t.prototype.Ac = function () {
          return this.jo;
        }, t.prototype.Rc = function () {
          return this.ss;
        }, t.prototype.gc = function () {
          return this.Go;
        }, t.prototype.runTransaction = function (t, e, n) {
          var r = this;
          x("MemoryPersistence", "Starting transaction:", t);
          var i = new rs(this.ko.next());
          return this.Vr.Il(), n(i).next(function (t) {
            return r.Vr.ml(i).next(function () {
              return t;
            });
          }).Ln().then(function (t) {
            return i.ns(), t;
          });
        }, t.prototype.Al = function (t, e) {
          return lr.Un(Object.values(this.El).map(function (n) {
            return function () {
              return n.Qr(t, e);
            };
          }));
        }, t;
      }(),
          rs =
      /** @class */
      function (e) {
        function n(t) {
          var n = this;
          return (n = e.call(this) || this).Fo = t, n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(gr),
          is =
      /** @class */
      function () {
        function t(t) {
          this.persistence = t,
          /** Tracks all documents that are active in Query views. */
          this.Rl = new eu(),
          /** The list of documents that are potentially GCed after each transaction. */
          this.Pl = null;
        }

        return t.gl = function (e) {
          return new t(e);
        }, Object.defineProperty(t.prototype, "yl", {
          get: function get() {
            if (this.Pl) return this.Pl;
            throw P();
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.Do = function (t, e, n) {
          return this.Rl.Do(n, e), this.yl["delete"](n.toString()), lr.resolve();
        }, t.prototype.No = function (t, e, n) {
          return this.Rl.No(n, e), this.yl.add(n.toString()), lr.resolve();
        }, t.prototype.qr = function (t, e) {
          return this.yl.add(e.toString()), lr.resolve();
        }, t.prototype.removeTarget = function (t, e) {
          var n = this;
          this.Rl.da(e.targetId).forEach(function (t) {
            return n.yl.add(t.toString());
          });
          var r = this.persistence.Ac();
          return r.xo(t, e.targetId).next(function (t) {
            t.forEach(function (t) {
              return n.yl.add(t.toString());
            });
          }).next(function () {
            return r.Vo(t, e);
          });
        }, t.prototype.Il = function () {
          this.Pl = new Set();
        }, t.prototype.ml = function (t) {
          var e = this,
              n = this.persistence.Rc().Xr(); // Remove newly orphaned documents.

          return lr.forEach(this.yl, function (r) {
            var i = Z.st(r);
            return e.Vl(t, i).next(function (t) {
              t || n.Hn(i);
            });
          }).next(function () {
            return e.Pl = null, n.apply(t);
          });
        }, t.prototype.Sc = function (t, e) {
          var n = this;
          return this.Vl(t, e).next(function (t) {
            t ? n.yl["delete"](e.toString()) : n.yl.add(e.toString());
          });
        }, t.prototype.Tl = function (t) {
          // For eager GC, we don't care about the document size, there are no size thresholds.
          return 0;
        }, t.prototype.Vl = function (t, e) {
          var n = this;
          return lr.Un([function () {
            return lr.resolve(n.Rl.Qr(e));
          }, function () {
            return n.persistence.Ac().Qr(t, e);
          }, function () {
            return n.persistence.Al(t, e);
          }]);
        }, t;
      }(),
          os =
      /** @class */
      function () {
        function t(t) {
          this.pl = t.pl, this.vl = t.vl;
        }

        return t.prototype.cu = function (t) {
          this.bl = t;
        }, t.prototype.nu = function (t) {
          this.Sl = t;
        }, t.prototype.onMessage = function (t) {
          this.Dl = t;
        }, t.prototype.close = function () {
          this.vl();
        }, t.prototype.send = function (t) {
          this.pl(t);
        }, t.prototype.Cl = function () {
          this.bl();
        }, t.prototype.Nl = function (t) {
          this.Sl(t);
        }, t.prototype.xl = function (t) {
          this.Dl(t);
        }, t;
      }(),
          us = {
        BatchGetDocuments: "batchGet",
        Commit: "commit",
        RunQuery: "runQuery"
      },
          ss =
      /** @class */
      function (e) {
        function n(t) {
          var n = this;
          return (n = e.call(this, t) || this).forceLongPolling = t.forceLongPolling, n.i = t.i, n;
        }
        /**
         * Base class for all Rest-based connections to the backend (WebChannel and
         * HTTP).
         */


        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.Ll = function (t, e, n, r) {
          return new Promise(function (i, o) {
            var u = new _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["XhrIo"]();
            u.listenOnce(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["EventType"].COMPLETE, function () {
              try {
                switch (u.getLastErrorCode()) {
                  case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].NO_ERROR:
                    var e = u.getResponseJson();
                    x("Connection", "XHR received:", JSON.stringify(e)), i(e);
                    break;

                  case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].TIMEOUT:
                    x("Connection", 'RPC "' + t + '" timed out'), o(new L(V.DEADLINE_EXCEEDED, "Request time out"));
                    break;

                  case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].HTTP_ERROR:
                    var n = u.getStatus();

                    if (x("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), n > 0) {
                      var r = u.getResponseJson().error;

                      if (r && r.status && r.message) {
                        var s = function (t) {
                          var e = t.toLowerCase().replace("_", "-");
                          return Object.values(V).indexOf(e) >= 0 ? e : V.UNKNOWN;
                        }(r.status);

                        o(new L(s, r.message));
                      } else o(new L(V.UNKNOWN, "Server responded with status " + u.getStatus()));
                    } else // If we received an HTTP_ERROR but there's no status code,
                      // it's most probably a connection issue
                      o(new L(V.UNAVAILABLE, "Connection failed."));

                    break;

                  default:
                    P();
                }
              } finally {
                x("Connection", 'RPC "' + t + '" completed.');
              }
            });
            var s = JSON.stringify(r);
            u.send(e, "POST", s, n, 15);
          });
        }, n.prototype.uu = function (t, e) {
          var n = [this.Ol, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
              r = Object(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["createWebChannelTransport"])(),
              i = Object(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["getStatEventTarget"])(),
              o = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
              // This param is used to improve routing and project isolation by the
              // backend and must be included in every request.
              database: "projects/" + this.t.projectId + "/databases/" + this.t.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
              // Override the default timeout (randomized between 10-20 seconds) since
              // a large write batch on a slow internet connection may take a long
              // time to send to the backend. Rather than have WebChannel impose a
              // tight timeout which could lead to infinite timeouts and retries, we
              // set it very large (5-10 minutes) and rely on the browser's builtin
              // timeouts to kick in if the request isn't working.
              forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling,
            detectBufferingProxy: this.i
          };
          this.$l(o.initMessageHeaders, e), // Sending the custom headers we just added to request.initMessageHeaders
          // (Authorization, etc.) will trigger the browser to make a CORS preflight
          // request because the XHR will no longer meet the criteria for a "simple"
          // CORS request:
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
          // Therefore to avoid the CORS preflight request (an extra network
          // roundtrip), we use the httpHeadersOverwriteParam option to specify that
          // the headers should instead be encoded into a special "$httpHeaders" query
          // parameter, which is recognized by the webchannel backend. This is
          // formally defined here:
          // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
          // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
          // doesn't have an Origin header. So we have to exclude a few browser environments that are
          // known to (sometimes) not include an Origin. See
          // https://github.com/firebase/firebase-js-sdk/issues/1491.
          Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isMobileCordova"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isReactNative"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isElectron"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isIE"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isUWP"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isBrowserExtension"])() || (o.httpHeadersOverwriteParam = "$httpHeaders");
          var u = n.join("");
          x("Connection", "Creating WebChannel: " + u, o);

          var s = r.createWebChannel(u, o),
              d = !1,
              v = !1,
              y = new os({
            pl: function pl(t) {
              v ? x("Connection", "Not sending because WebChannel is closed:", t) : (d || (x("Connection", "Opening WebChannel transport."), s.open(), d = !0), x("Connection", "WebChannel sending:", t), s.send(t));
            },
            vl: function vl() {
              return s.close();
            }
          }),
              I = function I(t, e, n) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            t.listen(e, function (t) {
              try {
                n(t);
              } catch (t) {
                setTimeout(function () {
                  throw t;
                }, 0);
              }
            });
          }; // WebChannel supports sending the first message with the handshake - saving
          // a network round trip. However, it will have to call send in the same
          // JS event loop as open. In order to enforce this, we delay actually
          // opening the WebChannel until send is called. Whether we have called
          // open is tracked with this variable.
          // Closure events are guarded and exceptions are swallowed, so catch any
          // exception and rethrow using a setTimeout so they become visible again.
          // Note that eventually this function could go away if we are confident
          // enough the code is exception free.


          return I(s, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["WebChannel"].EventType.OPEN, function () {
            v || x("Connection", "WebChannel transport opened.");
          }), I(s, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["WebChannel"].EventType.CLOSE, function () {
            v || (v = !0, x("Connection", "WebChannel transport closed"), y.Nl());
          }), I(s, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["WebChannel"].EventType.ERROR, function (t) {
            v || (v = !0, O("Connection", "WebChannel transport errored:", t), y.Nl(new L(V.UNAVAILABLE, "The operation could not be completed")));
          }), I(s, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["WebChannel"].EventType.MESSAGE, function (t) {
            var e;

            if (!v) {
              var n = t.data[0];
              C(!!n); // TODO(b/35143891): There is a bug in One Platform that caused errors
              // (and only errors) to be wrapped in an extra array. To be forward
              // compatible with the bug we need to check either condition. The latter
              // can be removed once the fix has been rolled out.
              // Use any because msgData.error is not typed.

              var r = n,
                  i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);

              if (i) {
                x("Connection", "WebChannel received error:", i); // error.status will be a string like 'OK' or 'NOT_FOUND'.

                var o = i.status,
                    u = function (t) {
                  // lookup by string
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  var e = ct[t];
                  if (void 0 !== e) return dt(e);
                }(o),
                    a = i.message;

                void 0 === u && (u = V.INTERNAL, a = "Unknown error status: " + o + " with message " + i.message), // Mark closed so no further events are propagated
                v = !0, y.Nl(new L(u, a)), s.close();
              } else x("Connection", "WebChannel received:", n), y.xl(n);
            }
          }), I(i, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["Event"].STAT_EVENT, function (t) {
            t.stat === _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["Stat"].PROXY ? x("Connection", "Detected buffering proxy") : t.stat === _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["Stat"].NOPROXY && x("Connection", "Detected no buffering proxy");
          }), setTimeout(function () {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            y.Cl();
          }, 0), y;
        }, n;
      }(
      /** @class */
      function () {
        function t(t) {
          this.Fl = t, this.t = t.t;
          var e = t.ssl ? "https" : "http";
          this.Ol = e + "://" + t.host, this.Ml = "projects/" + this.t.projectId + "/databases/" + this.t.database + "/documents";
        }

        return t.prototype.Au = function (t, e, n, r) {
          var i = this.kl(t, e);
          x("RestConnection", "Sending: ", i, n);
          var o = {};
          return this.$l(o, r), this.Ll(t, i, o, n).then(function (t) {
            return x("RestConnection", "Received: ", t), t;
          }, function (e) {
            throw O("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), e;
          });
        }, t.prototype.Ru = function (t, e, n, r) {
          // The REST API automatically aggregates all of the streamed results, so we
          // can just use the normal invoke() method.
          return this.Au(t, e, n, r);
        },
        /**
         * Modifies the headers for a request, adding any authorization token if
         * present and any additional headers for the request.
         */
        t.prototype.$l = function (t, e) {
          if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.1.1", // Content-Type: text/plain will avoid preflight requests which might
          // mess with CORS and redirects by proxies. If we add custom headers
          // we will need to change this code to potentially use the $httpOverwrite
          // parameter supported by ESF to avoid triggering preflight requests.
          t["Content-Type"] = "text/plain", e) for (var n in e.T) {
            e.T.hasOwnProperty(n) && (t[n] = e.T[n]);
          }
        }, t.prototype.kl = function (t, e) {
          var n = us[t];
          return this.Ol + "/v1/" + e + ":" + n;
        }, t;
      }()),
          as =
      /** @class */
      function () {
        function t() {
          var t = this;
          this.Bl = function () {
            return t.ql();
          }, this.Ul = function () {
            return t.Ql();
          }, this.Kl = [], this.Wl();
        }

        return t.prototype.Lu = function (t) {
          this.Kl.push(t);
        }, t.prototype.fc = function () {
          window.removeEventListener("online", this.Bl), window.removeEventListener("offline", this.Ul);
        }, t.prototype.Wl = function () {
          window.addEventListener("online", this.Bl), window.addEventListener("offline", this.Ul);
        }, t.prototype.ql = function () {
          x("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");

          for (var t = 0, e = this.Kl; t < e.length; t++) {
            (0, e[t])(0
            /* AVAILABLE */
            );
          }
        }, t.prototype.Ql = function () {
          x("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");

          for (var t = 0, e = this.Kl; t < e.length; t++) {
            (0, e[t])(1
            /* UNAVAILABLE */
            );
          }
        }, // TODO(chenbrian): Consider passing in window either into this component or
        // here for testing via FakeWindow.

        /** Checks that all used attributes of window are available. */
        t.Gs = function () {
          return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
        }, t;
      }(),
          cs =
      /** @class */
      function () {
        function t() {}

        return t.prototype.Lu = function (t) {// No-op.
        }, t.prototype.fc = function () {// No-op.
        }, t;
      }(),
          hs =
      /** @class */
      function () {
        function t() {
          this.synchronizeTabs = !1;
        }

        return t.prototype.initialize = function (t) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.serializer = vr(t.Fl.t), this.kh = this.jl(t), this.persistence = this.Gl(t), [4
                  /*yield*/
                  , this.persistence.start()];

                case 1:
                  return e.sent(), this.zl = this.Hl(t), this.Cu = this.Jl(t), [2
                  /*return*/
                  ];
              }
            });
          });
        }, t.prototype.Hl = function (t) {
          return null;
        }, t.prototype.Jl = function (t) {
          return no(this.persistence, new $u(), t.Yl, this.serializer);
        }, t.prototype.Gl = function (t) {
          return new ns(is.gl, this.serializer);
        }, t.prototype.jl = function (t) {
          return new lu();
        }, t.prototype.terminate = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.zl && this.zl.stop(), [4
                  /*yield*/
                  , this.kh.fc()];

                case 1:
                  return t.sent(), [4
                  /*yield*/
                  , this.persistence.fc()];

                case 2:
                  return t.sent(), [2
                  /*return*/
                  ];
              }
            });
          });
        }, t;
      }(),
          fs =
      /** @class */
      function (r) {
        function i(t, e, n) {
          var i = this;
          return (i = r.call(this) || this).Xl = t, i.cacheSizeBytes = e, i.forceOwnership = n, i.synchronizeTabs = !1, i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(i, r), i.prototype.initialize = function (t) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4
                  /*yield*/
                  , r.prototype.initialize.call(this, t)];

                case 1:
                  return e.sent(), [4
                  /*yield*/
                  , po(this.Cu)];

                case 2:
                  return e.sent(), [4
                  /*yield*/
                  , this.Xl.initialize(this, t)];

                case 3:
                  // Enqueue writes from a previous session
                  return e.sent(), [4
                  /*yield*/
                  , Yu(this.Xl.ga)];

                case 4:
                  // Enqueue writes from a previous session
                  return e.sent(), [4
                  /*yield*/
                  , Uo(this.Xl.Oh)];

                case 5:
                  return e.sent(), [2
                  /*return*/
                  ];
              }
            });
          });
        }, i.prototype.Jl = function (t) {
          return no(this.persistence, new $u(), t.Yl, this.serializer);
        }, i.prototype.Hl = function (t) {
          var e = this.persistence.Vr.cr;
          return new Fr(e, t.di);
        }, i.prototype.Gl = function (t) {
          var e = to(t.Fl.t, t.Fl.persistenceKey),
              n = void 0 !== this.cacheSizeBytes ? jr.er(this.cacheSizeBytes) : jr.ir;
          return new Yi(this.synchronizeTabs, e, t.clientId, n, t.di, Pr(), Cr(), this.serializer, this.kh, !!this.forceOwnership);
        }, i.prototype.jl = function (t) {
          return new lu();
        }, i;
      }(hs),
          ls =
      /** @class */
      function (r) {
        function i(t, e) {
          var n = this;
          return (n = r.call(this, t, e,
          /* forceOwnership= */
          !1) || this).Xl = t, n.cacheSizeBytes = e, n.synchronizeTabs = !0, n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(i, r), i.prototype.initialize = function (t) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i,
                o = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (u) {
              switch (u.label) {
                case 0:
                  return [4
                  /*yield*/
                  , r.prototype.initialize.call(this, t)];

                case 1:
                  return u.sent(), i = this.Xl.ga, this.kh instanceof fu ? (this.kh.ga = {
                    _h: Fu.bind(null, i),
                    fh: Wu.bind(null, i),
                    dh: Qu.bind(null, i),
                    Ic: Ku.bind(null, i),
                    lh: ju.bind(null, i)
                  }, [4
                  /*yield*/
                  , this.kh.start()]) : [3
                  /*break*/
                  , 3];

                case 2:
                  u.sent(), u.label = 3;

                case 3:
                  // NOTE: This will immediately call the listener, so we make sure to
                  // set it after localStore / remoteStore are started.
                  return [4
                  /*yield*/
                  , this.persistence.Zo(function (t) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(o, void 0, void 0, function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return [4
                            /*yield*/
                            , zu(this.Xl.ga, t)];

                          case 1:
                            return e.sent(), this.zl && (t && !this.zl.lr ? this.zl.start(this.Cu) : t || this.zl.stop()), [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  })];

                case 4:
                  // NOTE: This will immediately call the listener, so we make sure to
                  // set it after localStore / remoteStore are started.
                  return u.sent(), [2
                  /*return*/
                  ];
              }
            });
          });
        }, i.prototype.jl = function (t) {
          var e = Pr();
          if (!fu.Gs(e)) throw new L(V.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
          var n = to(t.Fl.t, t.Fl.persistenceKey);
          return new fu(e, t.di, n, t.clientId, t.Yl);
        }, i;
      }(fs),
          ps =
      /** @class */
      function () {
        function t() {}

        return t.prototype.initialize = function (t, r) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return this.Cu ? [3
                  /*break*/
                  , 2] : (this.Cu = t.Cu, this.kh = t.kh, this.Nu = this.Zl(r), this.Oh = this.t_(r), this.Mh = this.e_(r), this.ga = this.n_(r,
                  /* startAsPrimary=*/
                  !t.synchronizeTabs), this.kh.Pu = function (t) {
                    return Tu(e.ga, t, 1
                    /* SharedClientState */
                    );
                  }, this.Oh.xu.s_ = Uu.bind(null, this.ga), [4
                  /*yield*/
                  , Go(this.Oh, this.ga.Jh)]);

                case 1:
                  n.sent(), n.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }, t.prototype.e_ = function (t) {
          return new Ho();
        }, t.prototype.Zl = function (t) {
          var e,
              n = vr(t.Fl.t),
              r = (e = t.Fl, new ss(e));
          /** Return the Platform-specific connectivity monitor. */

          return function (t, e, n) {
            return new wo(t, e, n);
          }(t.credentials, r, n);
        }, t.prototype.t_ = function (t) {
          var e,
              n,
              r,
              i,
              o,
              u = this;
          return e = this.Cu, n = this.Nu, r = t.di, i = function i(t) {
            return Tu(u.ga, t, 0
            /* RemoteStore */
            );
          }, o = as.Gs() ? new as() : new cs(), new _o(e, n, r, i, o);
        }, t.prototype.n_ = function (t, e) {
          return function (t, e, n, // PORTING NOTE: Manages state synchronization in multi-tab environments.
          r, i, o, u) {
            var s = new gu(t, e, n, r, i, o);
            return u && (s.Hh = !0), s;
          }(this.Cu, this.Oh, this.Mh, this.kh, t.Yl, t.$h, e);
        }, t.prototype.terminate = function () {
          return function (t) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
              var e;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    return e = R(t), x("RemoteStore", "RemoteStore shutting down."), e.Mu.add(5
                    /* Shutdown */
                    ), [4
                    /*yield*/
                    , Eo(e)];

                  case 1:
                    return n.sent(), e.$u.fc(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                    // triggering spurious listener events with cached data, etc.
                    e.Bu.set("Unknown"
                    /* Unknown */
                    ), [2
                    /*return*/
                    ];
                }
              });
            });
          }(this.Oh);
        }, t;
      }(),
          ds =
      /** @class */
      function () {
        function t(t) {
          this.observer = t,
          /**
               * When set to true, will not raise future events. Necessary to deal with
               * async detachment of listener.
               */
          this.muted = !1;
        }

        return t.prototype.next = function (t) {
          this.observer.next && this.i_(this.observer.next, t);
        }, t.prototype.error = function (t) {
          this.observer.error ? this.i_(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
        }, t.prototype.r_ = function () {
          this.muted = !0;
        }, t.prototype.i_ = function (t, e) {
          var n = this;
          this.muted || setTimeout(function () {
            n.muted || t(e);
          }, 0);
        }, t;
      }(),
          vs = function vs(t) {
        this.o_ = t;
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function ys(t, e, n) {
        if (!n) throw new L(V.INVALID_ARGUMENT, "Function " + t + "() cannot be called with an empty " + e + ".");
      }

      function ms(t, e) {
        if (void 0 === e) return {
          merge: !1
        };
        if (void 0 !== e.mergeFields && void 0 !== e.merge) throw new L(V.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
        return e;
      }
      /**
       * Validates that two boolean options are not set at the same time.
       */


      function gs(t, e, n, r) {
        if (!0 === e && !0 === r) throw new L(V.INVALID_ARGUMENT, t + " and " + n + " cannot be used together.");
      }
      /**
       * Validates that `path` refers to a document (indicated by the fact it contains
       * an even numbers of segments).
       */


      function ws(t) {
        if (!Z.ot(t)) throw new L(V.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t + " has " + t.length + ".");
      }
      /**
       * Validates that `path` refers to a collection (indicated by the fact it
       * contains an odd numbers of segments).
       */


      function bs(t) {
        if (Z.ot(t)) throw new L(V.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t + " has " + t.length + ".");
      }
      /**
       * Returns true if it's a non-null object without a custom prototype
       * (i.e. excludes Array, Date, etc.).
       */

      /** Returns a string describing the type / value of the provided input. */


      function _s(t) {
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
        if ("number" == typeof t || "boolean" == typeof t) return "" + t;

        if ("object" == typeof t) {
          if (t instanceof Array) return "an array";

          var e =
          /** Hacky method to try to get the constructor name for an object. */
          function (t) {
            if (t.constructor) {
              var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
              if (e && e.length > 1) return e[1];
            }

            return null;
          }(t);

          return e ? "a custom " + e + " object" : "an object";
        }

        return "function" == typeof t ? "a function" : P();
      }

      function Is(t, // eslint-disable-next-line @typescript-eslint/no-explicit-any
      e) {
        if (t instanceof vs && (t = t.o_), !(t instanceof e)) {
          if (e.name === t.constructor.name) throw new L(V.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");

          var n = _s(t);

          throw new L(V.INVALID_ARGUMENT, "Expected type '" + e.name + "', but it was: " + n);
        }

        return t;
      }

      function Es(t, e) {
        if (e <= 0) throw new L(V.INVALID_ARGUMENT, "Function " + t + "() requires a positive number, but it was: " + e + ".");
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Sentinel values that can be used when writing document fields with `set()`
       * or `update()`.
       */


      var Ts =
      /**
           * @param _methodName The public API endpoint that returns this class.
           */
      function Ts(t) {
        this.c_ = t;
      },
          Ns =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.u_ = function (t) {
          if (2
          /* MergeSet */
          !== t.a_) throw 1
          /* Update */
          === t.a_ ? t.h_(this.c_ + "() can only appear at the top level of your update data") : t.h_(this.c_ + "() cannot be used with set() unless you pass {merge:true}"); // No transform to add for a delete, but we need to add it to our
          // fieldMask so it gets deleted.

          return t.en.push(t.path), null;
        }, n.prototype.isEqual = function (t) {
          return t instanceof n;
        }, n;
      }(Ts);
      /**
       * Returns a sentinel for use with {@link updateDoc()} or
       * {@link setDoc `setDoc({}, { merge: true })`} to mark a field for deletion.
       */

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Creates a child context for parsing SerializableFieldValues.
       *
       * This is different than calling `ParseContext.contextWith` because it keeps
       * the fieldTransforms and fieldMask separate.
       *
       * The created context has its `dataSource` set to `UserDataSource.Argument`.
       * Although these values are used with writes, any elements in these FieldValues
       * are not considered writes since they cannot contain any FieldValue sentinels,
       * etc.
       *
       * @param fieldValue The sentinel FieldValue for which to create a child
       *     context.
       * @param context The parent context.
       * @param arrayElement Whether or not the FieldValue has an array.
       */


      function As(t, e, n) {
        return new ka({
          a_: 3
          /* Argument */
          ,
          l_: e.settings.l_,
          methodName: t.c_,
          __: n
        }, e.t, e.serializer, e.ignoreUndefinedProperties);
      }

      var Ds =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.u_ = function (t) {
          return new un(t.path, new $e());
        }, n.prototype.isEqual = function (t) {
          return t instanceof n;
        }, n;
      }(Ts),
          xs =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, t) || this).f_ = n, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.u_ = function (t) {
          var e = As(this, t,
          /*array=*/
          !0),
              n = this.f_.map(function (t) {
            return Va(t, e);
          }),
              r = new Je(n);
          return new un(t.path, r);
        }, n.prototype.isEqual = function (t) {
          // TODO(mrschmidt): Implement isEquals
          return this === t;
        }, n;
      }(Ts),
          ks =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, t) || this).f_ = n, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.u_ = function (t) {
          var e = As(this, t,
          /*array=*/
          !0),
              n = this.f_.map(function (t) {
            return Va(t, e);
          }),
              r = new Ze(n);
          return new un(t.path, r);
        }, n.prototype.isEqual = function (t) {
          // TODO(mrschmidt): Implement isEquals
          return this === t;
        }, n;
      }(Ts),
          Os =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, t) || this).d_ = n, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.u_ = function (t) {
          var e = new en(t.serializer, ye(t.serializer, this.d_));
          return new un(t.path, e);
        }, n.prototype.isEqual = function (t) {
          // TODO(mrschmidt): Implement isEquals
          return this === t;
        }, n;
      }(Ts),
          Ss =
      /** @class */
      function () {
        /**
         * Creates a new immutable `GeoPoint` object with the provided latitude and
         * longitude values.
         * @param latitude The latitude as number between -90 and 90.
         * @param longitude The longitude as number between -180 and 180.
         */
        function t(t, e) {
          if (!isFinite(t) || t < -90 || t > 90) throw new L(V.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
          if (!isFinite(e) || e < -180 || e > 180) throw new L(V.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
          this.w_ = t, this.E_ = e;
        }

        return Object.defineProperty(t.prototype, "latitude", {
          /**
           * The latitude of this `GeoPoint` instance.
           */
          get: function get() {
            return this.w_;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "longitude", {
          /**
           * The longitude of this `GeoPoint` instance.
           */
          get: function get() {
            return this.E_;
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * Returns true if this `GeoPoint` is equal to the provided one.
         *
         * @param other The `GeoPoint` to compare against.
         * @return true if this `GeoPoint` is equal to the provided one.
         */
        t.prototype.isEqual = function (t) {
          return this.w_ === t.w_ && this.E_ === t.E_;
        }, t.prototype.toJSON = function () {
          return {
            latitude: this.w_,
            longitude: this.E_
          };
        },
        /**
         * Actually private to JS consumers of our API, so this function is prefixed
         * with an underscore.
         */
        t.prototype.C = function (t) {
          return G(this.w_, t.w_) || G(this.E_, t.E_);
        }, t;
      }(),
          Ps =
      /** @class */
      function () {
        function t(t) {
          this.T_ = t;
        }
        /**
         * Creates a new `Bytes` object from the given Base64 string, converting it to
         * bytes.
         *
         * @param base64 The Base64 string used to create the `Bytes` object.
         */


        return t.fromBase64String = function (e) {
          try {
            return new t(at.fromBase64String(e));
          } catch (e) {
            throw new L(V.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e);
          }
        },
        /**
         * Creates a new `Bytes` object from the given Uint8Array.
         *
         * @param array The Uint8Array used to create the `Bytes` object.
         */
        t.fromUint8Array = function (e) {
          return new t(at.fromUint8Array(e));
        },
        /**
         * Returns the underlying bytes as a Base64-encoded string.
         *
         * @return The Base64-encoded string created from the `Bytes` object.
         */
        t.prototype.toBase64 = function () {
          return this.T_.toBase64();
        },
        /**
         * Returns the underlying bytes in a new `Uint8Array`.
         *
         * @return The Uint8Array created from the `Bytes` object.
         */
        t.prototype.toUint8Array = function () {
          return this.T_.toUint8Array();
        },
        /**
         * Returns a string representation of the `Bytes` object.
         *
         * @return A string representation of the `Bytes` object.
         */
        t.prototype.toString = function () {
          return "Bytes(base64: " + this.toBase64() + ")";
        },
        /**
         * Returns true if this `Bytes` object is equal to the provided one.
         *
         * @param other The `Bytes` object to compare against.
         * @return true if this `Bytes` object is equal to the provided one.
         */
        t.prototype.isEqual = function (t) {
          return this.T_.isEqual(t.T_);
        }, t;
      }(),
          Cs = new Map(),
          Rs =
      /** @class */
      function () {
        function t(t) {
          var e;

          if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new L(V.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
          } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;

          if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040;else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new L(V.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
          }
          this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, gs("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
        }

        return t.prototype.isEqual = function (t) {
          return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
        }, t;
      }(),
          Vs =
      /** @class */
      function () {
        function t(t, e) {
          this.I_ = "(lite)", this.m_ = new Rs({}), this.A_ = !1, t instanceof T ? (this.R_ = t, this.P_ = new M()) : (this.g_ = t, this.R_ = function (t) {
            if (!Object.prototype.hasOwnProperty.apply(t.options, ["projectId"])) throw new L(V.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
            return new T(t.options.projectId);
          }(t), this.P_ = new q(e));
        }

        return Object.defineProperty(t.prototype, "app", {
          /**
           * The {@link FirebaseApp app} associated with this `Firestore` service
           * instance.
           */
          get: function get() {
            if (!this.g_) throw new L(V.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.g_;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "y_", {
          get: function get() {
            return this.A_;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "V_", {
          get: function get() {
            return void 0 !== this.p_;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.v_ = function (t) {
          if (this.A_) throw new L(V.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
          this.m_ = new Rs(t), void 0 !== t.credentials && (this.P_ = function (t) {
            if (!t) return new M();

            switch (t.type) {
              case "gapi":
                var e = t.client; // Make sure this really is a Gapi client.

                return C(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new F(e, t.sessionIndex || "0");

              case "provider":
                return t.client;

              default:
                throw new L(V.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
          }(t.credentials));
        }, t.prototype.b_ = function () {
          return this.m_;
        }, t.prototype.S_ = function () {
          return this.A_ = !0, this.m_;
        }, t.prototype._delete = function () {
          return this.p_ || (this.p_ = this.D_()), this.p_;
        },
        /**
         * Terminates all components used by this client. Subclasses can override
         * this method to clean up their own dependencies, but must also call this
         * method.
         *
         * Only ever called once.
         */
        t.prototype.D_ = function () {
          /**
          * Removes all components associated with the provided instance. Must be called
          * when the `Firestore` instance is terminated.
          */
          return function (t) {
            var e = Cs.get(t);
            e && (x("ComponentProvider", "Removing Datastore"), Cs["delete"](t), e.terminate());
          }(this), Promise.resolve();
        }, t;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Helper function to assert Uint8Array is available at runtime. */


      function Ls() {
        if ("undefined" == typeof Uint8Array) throw new L(V.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
      }
      /** Helper function to assert Base64 functions are available at runtime. */


      function Us() {
        if ("undefined" == typeof atob) throw new L(V.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
      }
      /** Immutable class holding a blob (binary data) */


      var Ms =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.fromBase64String = function (t) {
          return Us(), new n(Ps.fromBase64String(t));
        }, n.fromUint8Array = function (t) {
          return Ls(), new n(Ps.fromUint8Array(t));
        }, n.prototype.toBase64 = function () {
          return Us(), this.o_.toBase64();
        }, n.prototype.toUint8Array = function () {
          return Ls(), this.o_.toUint8Array();
        }, n.prototype.isEqual = function (t) {
          return this.o_.isEqual(t.o_);
        }, n.prototype.toString = function () {
          return "Blob(base64: " + this.toBase64() + ")";
        }, n;
      }(vs),
          qs =
      /** @class */
      function () {
        function t() {}

        return t.prototype.C_ = function (t, e) {
          switch (void 0 === e && (e = "none"), Yt(t)) {
            case 0
            /* NullValue */
            :
              return null;

            case 1
            /* BooleanValue */
            :
              return t.booleanValue;

            case 2
            /* NumberValue */
            :
              return re(t.integerValue || t.doubleValue);

            case 3
            /* TimestampValue */
            :
              return this.N_(t.timestampValue);

            case 4
            /* ServerTimestampValue */
            :
              return this.x_(t, e);

            case 5
            /* StringValue */
            :
              return t.stringValue;

            case 6
            /* BlobValue */
            :
              return this.F_(ie(t.bytesValue));

            case 7
            /* RefValue */
            :
              return this.O_(t.referenceValue);

            case 8
            /* GeoPointValue */
            :
              return this.M_(t.geoPointValue);

            case 9
            /* ArrayValue */
            :
              return this.k_(t.arrayValue, e);

            case 10
            /* ObjectValue */
            :
              return this.L_(t.mapValue, e);

            default:
              throw P();
          }
        }, t.prototype.L_ = function (t, e) {
          var n = this,
              r = {};
          return Bt(t.fields || {}, function (t, i) {
            r[t] = n.C_(i, e);
          }), r;
        }, t.prototype.M_ = function (t) {
          return new Ss(re(t.latitude), re(t.longitude));
        }, t.prototype.k_ = function (t, e) {
          var n = this;
          return (t.values || []).map(function (t) {
            return n.C_(t, e);
          });
        }, t.prototype.x_ = function (t, e) {
          switch (e) {
            case "previous":
              var n = Wt(t);
              return null == n ? null : this.C_(n, e);

            case "estimate":
              return this.N_(Qt(t));

            default:
              return null;
          }
        }, t.prototype.N_ = function (t) {
          var e = ne(t);
          return new Q(e.seconds, e.nanos);
        }, t.prototype.B_ = function (t, e) {
          var n = $.Y(t);
          C(Ke(n));
          var r = new T(n.get(1), n.get(3)),
              i = new Z(n.B(5));
          return r.isEqual(e) || // TODO(b/64130202): Somehow support foreign references.
          k("Document " + i + " contains a document reference within a different database (" + r.projectId + "/" + r.database + ") which is not supported. It will be treated as a reference in the current database (" + e.projectId + "/" + e.database + ") instead."), i;
        }, t;
      }(),
          js =
      /** @class */
      function (e) {
        function n(t) {
          var n = this;
          return (n = e.call(this) || this).firestore = t, n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.F_ = function (t) {
          return new Ms(new Ps(t));
        }, n.prototype.O_ = function (t) {
          var e = this.B_(t, this.firestore.R_);
          return pc.q_(e, this.firestore,
          /* converter= */
          null);
        }, n;
      }(qs),
          Fs =
      /** @class */
      function () {
        // Note: This class is stripped down version of the DocumentSnapshot in
        // the legacy SDK. The changes are:
        // - No support for SnapshotMetadata.
        // - No support for SnapshotOptions.
        function t(t, e, n, r, i) {
          this.U_ = t, this.Q_ = e, this.K_ = n, this.W_ = r, this.j_ = i;
        }

        return Object.defineProperty(t.prototype, "id", {
          /** Property of the `DocumentSnapshot` that provides the document's ID. */
          get: function get() {
            return this.K_.path.K();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "ref", {
          /**
           * The `DocumentReference` for the document included in the `DocumentSnapshot`.
           */
          get: function get() {
            return new ia(this.U_, this.j_, this.K_);
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * Signals whether or not the document at the snapshot's location exists.
         *
         * @return true if the document exists.
         */
        t.prototype.exists = function () {
          return null !== this.W_;
        },
        /**
         * Retrieves all fields in the document as an `Object`. Returns `undefined` if
         * the document doesn't exist.
         *
         * @return An `Object` containing all fields in the document or `undefined`
         * if the document doesn't exist.
         */
        t.prototype.data = function () {
          if (this.W_) {
            if (this.j_) {
              // We only want to use the converter and create a new DocumentSnapshot
              // if a converter has been provided.
              var t = new zs(this.U_, this.Q_, this.K_, this.W_,
              /* converter= */
              null);
              return this.j_.fromFirestore(t);
            }

            return this.Q_.C_(this.W_.En());
          }
        },
        /**
         * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
         * document or field doesn't exist.
         *
         * @param fieldPath The path (for example 'foo' or 'foo.bar') to a specific
         * field.
         * @return The data at the specified field location or undefined if no such
         * field exists in the document.
         */
        // We are using `any` here to avoid an explicit cast by our users.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        t.prototype.get = function (t) {
          if (this.W_) {
            var e = this.W_.data().field(Bs("DocumentSnapshot.get", t));
            if (null !== e) return this.Q_.C_(e);
          }
        }, t;
      }(),
          zs =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }
        /**
         * Retrieves all fields in the document as an `Object`.
         *
         * @override
         * @return An `Object` containing all fields in the document.
         */


        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.data = function () {
          return e.prototype.data.call(this);
        }, n;
      }(Fs);
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Converts Firestore's internal types to the JavaScript types that we expose
       * to the user.
       */

      /**
       * Helper that calls fromDotSeparatedString() but wraps any error thrown.
       */


      function Bs(t, e) {
        return "string" == typeof e ? Fa(t, e) : e instanceof vs ? e.o_.G_ : e.G_;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A `FieldPath` refers to a field in a document. The path may consist of a
       * single field name (referring to a top-level field in the document), or a
       * list of field names (referring to a nested field in the document).
       *
       * Create a `FieldPath` by providing field names. If more than one field
       * name is provided, the path will point to a nested field in a document.
       */


      var Gs =
      /** @class */
      function () {
        /**
         * Creates a FieldPath from the provided field names. If more than one field
         * name is provided, the path will point to a nested field in a document.
         *
         * @param fieldNames A list of field names.
         */
        function t() {
          for (var t = [], e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          }

          for (var n = 0; n < t.length; ++n) {
            if (0 === t[n].length) throw new L(V.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
          }

          this.G_ = new X(t);
        }
        /**
         * Returns true if this `FieldPath` is equal to the provided one.
         *
         * @param other The `FieldPath` to compare against.
         * @return true if this `FieldPath` is equal to the provided one.
         */


        return t.prototype.isEqual = function (t) {
          return this.G_.isEqual(t.G_);
        }, t;
      }(),
          Ks =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, t, n) || this).z_ = new Vr(), r.I_ = "name" in t ? t.name : "[DEFAULT]", r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.D_ = function () {
          return this.H_ || // The client must be initialized to ensure that all subsequent API
          // usage throws an exception.
          hc(this), this.H_.terminate();
        }, n;
      }(Vs);
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** DOMException error code constants. */

      /**
       * The Cloud Firestore service interface.
       *
       * Do not call this constructor directly. Instead, use {@link getFirestore()}.
       */

      /**
       * Attempts to enable persistent storage, if possible.
       *
       * Must be called before any other functions (other than
       * {@link initializeFirestore()}, {@link getFirestore()} or
       * {@link clearIndexedDbPersistence()}.
       *
       * If this fails, `enableIndexedDbPersistence()` will reject the promise it
       * returns. Note that even after this failure, the `Firestore` instance will
       * remain usable, however offline persistence will be disabled.
       *
       * There are several reasons why this can fail, which can be identified by
       * the `code` on the error.
       *
       *   * failed-precondition: The app is already open in another browser tab.
       *   * unimplemented: The browser is incompatible with the offline
       *     persistence implementation.
       *
       * @param firestore The `Firestore` instance to enable persistence for.
       * @param persistenceSettings Optional settings object to configure persistence.
       * @return A promise that represents successfully enabling persistent storage.
       */

      /**
       * Registers both the `OfflineComponentProvider` and `OnlineComponentProvider`.
       * If the operation fails with a recoverable error (see
       * `canRecoverFromIndexedDbError()` below), the returned Promise is rejected
       * but the client remains usable.
       */


      function Ws(t, r, i) {
        var o = this,
            u = new dr();
        return t.di.enqueue(function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(o, void 0, void 0, function () {
            var e;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 3,, 4]), [4
                  /*yield*/
                  , Qa(t, i)];

                case 1:
                  return n.sent(), [4
                  /*yield*/
                  , Ha(t, r)];

                case 2:
                  return n.sent(), u.resolve(), [3
                  /*break*/
                  , 4];

                case 3:
                  if (!
                  /**
                  * Decides whether the provided error allows us to gracefully disable
                  * persistence (as opposed to crashing the client).
                  */
                  function (t) {
                    return "FirebaseError" === t.name ? t.code === V.FAILED_PRECONDITION || t.code === V.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 22 === t.code || 20 === t.code || // Firefox Private Browsing mode disables IndexedDb and returns
                    // INVALID_STATE for any usage.
                    11 === t.code;
                  }(e = n.sent())) throw e;
                  return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + e), u.reject(e), [3
                  /*break*/
                  , 4];

                case 4:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }).then(function () {
          return u.promise;
        });
      }

      function Qs(t) {
        if (t.y_ || t.V_) throw new L(V.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A `DocumentSnapshot` contains data read from a document in your Firestore
       * database. The data can be extracted with `.data()` or `.get(<field>)` to
       * get a specific field.
       *
       * For a `DocumentSnapshot` that points to a non-existing document, any data
       * access will return 'undefined'. You can use the `exists()` method to
       * explicitly verify a document's existence.
       */


      var Hs =
      /** @class */
      function (e) {
        function n(t, n, r, i, o, u) {
          var s = this;
          return (s = e.call(this, t, n, r, i, u) || this).U_ = t, s.J_ = t, s.metadata = o, s;
        }
        /**
         * Property of the `DocumentSnapshot` that signals whether or not the data
         * exists. True if the document exists.
         */


        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.exists = function () {
          return e.prototype.exists.call(this);
        },
        /**
         * Retrieves all fields in the document as an `Object`. Returns `undefined` if
         * the document doesn't exist.
         *
         * By default, `FieldValue.serverTimestamp()` values that have not yet been
         * set to their final value will be returned as `null`. You can override
         * this by passing an options object.
         *
         * @param options An options object to configure how data is retrieved from
         * the snapshot (for example the desired behavior for server timestamps that
         * have not yet been set to their final value).
         * @return An `Object` containing all fields in the document or `undefined` if
         * the document doesn't exist.
         */
        n.prototype.data = function (t) {
          if (void 0 === t && (t = {}), this.W_) {
            if (this.j_) {
              // We only want to use the converter and create a new DocumentSnapshot
              // if a converter has been provided.
              var e = new Ys(this.U_, this.Q_, this.K_, this.W_, this.metadata,
              /* converter= */
              null);
              return this.j_.fromFirestore(e, t);
            }

            return this.Q_.C_(this.W_.En(), t.serverTimestamps);
          }
        },
        /**
         * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
         * document or field doesn't exist.
         *
         * By default, a `FieldValue.serverTimestamp()` that has not yet been set to
         * its final value will be returned as `null`. You can override this by
         * passing an options object.
         *
         * @param fieldPath The path (for example 'foo' or 'foo.bar') to a specific
         * field.
         * @param options An options object to configure how the field is retrieved
         * from the snapshot (for example the desired behavior for server timestamps
         * that have not yet been set to their final value).
         * @return The data at the specified field location or undefined if no such
         * field exists in the document.
         */
        // We are using `any` here to avoid an explicit cast by our users.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        n.prototype.get = function (t, e) {
          if (void 0 === e && (e = {}), this.W_) {
            var n = this.W_.data().field(Bs("DocumentSnapshot.get", t));
            if (null !== n) return this.Q_.C_(n, e.serverTimestamps);
          }
        }, n;
      }(Fs),
          Ys =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }
        /**
         * Retrieves all fields in the document as an `Object`.
         *
         * By default, `FieldValue.serverTimestamp()` values that have not yet been
         * set to their final value will be returned as `null`. You can override
         * this by passing an options object.
         *
         * @override
         * @param options An options object to configure how data is retrieved from
         * the snapshot (for example the desired behavior for server timestamps that
         * have not yet been set to their final value).
         * @return An `Object` containing all fields in the document.
         */


        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.data = function (t) {
          return void 0 === t && (t = {}), e.prototype.data.call(this, t);
        }, n;
      }(Hs),
          $s =
      /** @class */
      function () {
        function t(t, e, n, r) {
          this.U_ = t, this.Q_ = e, this.Y_ = r, this.metadata = new mc(r.hasPendingWrites, r.fromCache), this.query = n;
        }

        return Object.defineProperty(t.prototype, "docs", {
          /** An array of all the documents in the `QuerySnapshot`. */
          get: function get() {
            var t = [];
            return this.forEach(function (e) {
              return t.push(e);
            }), t;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "size", {
          /** The number of documents in the `QuerySnapshot`. */
          get: function get() {
            return this.Y_.docs.size;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "empty", {
          /** True if there are no documents in the `QuerySnapshot`. */
          get: function get() {
            return 0 === this.size;
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * Enumerates all of the documents in the `QuerySnapshot`.
         *
         * @param callback A callback to be called with a `QueryDocumentSnapshot` for
         * each document in the snapshot.
         * @param thisArg The `this` binding for the callback.
         */
        t.prototype.forEach = function (t, e) {
          var n = this;
          this.Y_.docs.forEach(function (r) {
            t.call(e, new Ys(n.U_, n.Q_, r.key, r, new mc(n.Y_.ee.has(r.key), n.Y_.fromCache), n.query.j_));
          });
        },
        /**
         * Returns an array of the documents changes since the last snapshot. If this
         * is the first snapshot, all documents will be in the list as 'added'
         * changes.
         *
         * @param options `SnapshotListenOptions` that control whether metadata-only
         * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
         * snapshot events.
         */
        t.prototype.docChanges = function (t) {
          void 0 === t && (t = {});
          var e = !!t.includeMetadataChanges;
          if (e && this.Y_.se) throw new L(V.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
          return this.X_ && this.Z_ === e || (this.X_ =
          /** Calculates the array of DocumentChanges for a given ViewSnapshot. */
          function (t, e) {
            if (t.Y_.te.W()) {
              // Special case the first snapshot because index calculation is easy and
              // fast
              var n = 0;
              return t.Y_.docChanges.map(function (e) {
                var r = new Ys(t.U_, t.Q_, e.doc.key, e.doc, new mc(t.Y_.ee.has(e.doc.key), t.Y_.fromCache), t.query.j_);
                return e.doc, {
                  type: "added",
                  doc: r,
                  oldIndex: -1,
                  newIndex: n++
                };
              });
            } // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.


            var r = t.Y_.te;
            return t.Y_.docChanges.filter(function (t) {
              return e || 3
              /* Metadata */
              !== t.type;
            }).map(function (e) {
              var n = new Ys(t.U_, t.Q_, e.doc.key, e.doc, new mc(t.Y_.ee.has(e.doc.key), t.Y_.fromCache), t.query.j_),
                  i = -1,
                  o = -1;
              return 0
              /* Added */
              !== e.type && (i = r.indexOf(e.doc.key), r = r["delete"](e.doc.key)), 1
              /* Removed */
              !== e.type && (o = (r = r.add(e.doc)).indexOf(e.doc.key)), {
                type: Js(e.type),
                doc: n,
                oldIndex: i,
                newIndex: o
              };
            });
          }(this, e), this.Z_ = e), this.X_;
        }, t;
      }();
      /**
       * A `QueryDocumentSnapshot` contains data read from a document in your
       * Firestore database as part of a query. The document is guaranteed to exist
       * and its data can be extracted with `.data()` or `.get(<field>)` to get a
       * specific field.
       *
       * A `QueryDocumentSnapshot` offers the same API surface as a
       * `DocumentSnapshot`. Since query results contain only existing documents, the
       * `exists` property will always be true and `data()` will never return
       * 'undefined'.
       */


      function Js(t) {
        switch (t) {
          case 0
          /* Added */
          :
            return "added";

          case 2
          /* Modified */
          :
          case 3
          /* Metadata */
          :
            return "modified";

          case 1
          /* Removed */
          :
            return "removed";

          default:
            return P();
        }
      } // TODO(firestoreexp): Add tests for snapshotEqual with different snapshot
      // metadata

      /**
       * Returns true if the provided snapshots are equal.
       *
       * @param left A snapshot to compare.
       * @param right A snapshot to compare.
       * @return true if the snapshots are equal.
       */


      function Xs(t, e) {
        return t instanceof Hs && e instanceof Hs ? t.U_ === e.U_ && t.K_.isEqual(e.K_) && (null === t.W_ ? null === e.W_ : t.W_.isEqual(e.W_)) && t.j_ === e.j_ : t instanceof $s && e instanceof $s && t.U_ === e.U_ && Ea(t.query, e.query) && t.metadata.isEqual(e.metadata) && t.Y_.isEqual(e.Y_);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Reads the document referred to by this `DocumentReference`.
       *
       * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
       * for data from the server, but it may return cached data or fail if you are
       * offline and the server cannot be reached. To specify this behavior, invoke
       * {@link getDocFromCache()} or {@link getDocFromServer()}.
       *
       * @param reference The reference of the document to fetch.
       * @return A Promise resolved with a `DocumentSnapshot` containing the
       * current document contents.
       */


      var Zs =
      /** @class */
      function (e) {
        function n(t) {
          var n = this;
          return (n = e.call(this) || this).firestore = t, n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.F_ = function (t) {
          return new Ps(t);
        }, n.prototype.O_ = function (t) {
          var e = this.B_(t, this.firestore.R_);
          return new ia(this.firestore,
          /* converter= */
          null, e);
        }, n;
      }(qs);
      /**
       * Reads the document referred to by this `DocumentReference` from cache.
       * Returns an error if the document is not currently cached.
       *
       * @return A Promise resolved with a `DocumentSnapshot` containing the
       * current document contents.
       */

      /**
       * Executes the query and returns the results as a `QuerySnapshot` from the
       * server. Returns an error if the network is not available.
       *
       * @return A Promise that will be resolved with the results of the query.
       */


      function ta(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++) {
          r[i - 3] = arguments[i];
        }

        var o = Is(t.firestore, Ks),
            u = Ta(o); // For Compat types, we have to "extract" the underlying types before
        // performing validation.

        return e instanceof vs && (e = e.o_), na(o, ("string" == typeof e || e instanceof Gs ? Ca(u, "updateDoc", t.K_, e, n, r) : Pa(u, "updateDoc", t.K_, e)).ef(t.K_, an.exists(!0)));
      }
      /**
       * Deletes the document referred to by the specified `DocumentReference`.
       *
       * @param reference A reference to the document to delete.
       * @return A Promise resolved once the document has been successfully
       * deleted from the backend (note that it won't resolve while you're offline).
       */


      function ea(t) {
        for (var r, i, o, u = this, s = [], a = 1; a < arguments.length; a++) {
          s[a - 1] = arguments[a];
        }

        var c = {
          includeMetadataChanges: !1
        },
            h = 0;
        "object" != typeof s[h] || yr(s[h]) || (c = s[h], h++);
        var f,
            l,
            p,
            d = {
          includeMetadataChanges: c.includeMetadataChanges
        };

        if (yr(s[h])) {
          var v = s[h];
          s[h] = null === (r = v.next) || void 0 === r ? void 0 : r.bind(v), s[h + 1] = null === (i = v.error) || void 0 === i ? void 0 : i.bind(v), s[h + 2] = null === (o = v.complete) || void 0 === o ? void 0 : o.bind(v);
        }

        if (t instanceof ia) l = Is(t.firestore, Ks), p = Cn(t.K_.path), f = {
          next: function next(e) {
            s[h] && s[h](ra(l, t, e));
          },
          error: s[h + 1],
          complete: s[h + 2]
        };else {
          l = Is(t.firestore, Ks), p = t.tf;
          var y = new Zs(l);
          f = {
            next: function next(e) {
              s[h] && s[h](new $s(l, y, t, e));
            },
            error: s[h + 1],
            complete: s[h + 2]
          }, ma(t.tf);
        }
        var m = cc(l),
            g = new ds(f),
            w = new tu(p, g, d);
        return l.z_.Ri(function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(u, void 0, void 0, function () {
            var t;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  return t = Yo, [4
                  /*yield*/
                  , ec(m)];

                case 1:
                  return [2
                  /*return*/
                  , t.apply(void 0, [e.sent(), w])];
              }
            });
          });
        }), function () {
          g.r_(), l.z_.Ri(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(u, void 0, void 0, function () {
              var t;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                switch (e.label) {
                  case 0:
                    return t = $o, [4
                    /*yield*/
                    , ec(m)];

                  case 1:
                    return [2
                    /*return*/
                    , t.apply(void 0, [e.sent(), w])];
                }
              });
            });
          });
        };
      }
      /** Locally writes `mutations` on the async queue. */


      function na(t, r) {
        return function (t, r) {
          var i = this,
              o = new dr();
          return t.di.Ri(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(i, void 0, void 0, function () {
              var e;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    return e = Iu, [4
                    /*yield*/
                    , tc(t)];

                  case 1:
                    return [2
                    /*return*/
                    , e.apply(void 0, [n.sent(), r, o])];
                }
              });
            });
          }), o.promise;
        }(cc(t), r);
      }
      /**
       * Converts a ViewSnapshot that contains the single document specified by `ref`
       * to a DocumentSnapshot.
       */


      function ra(t, e, n) {
        var r = n.docs.get(e.K_),
            i = new Zs(t);
        return new Hs(t, i, e.K_, r, new mc(n.hasPendingWrites, n.fromCache), e.j_);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A `DocumentReference` refers to a document location in a Firestore database
       * and can be used to write, read, or listen to the location. The document at
       * the referenced location may or may not exist.
       */


      var ia =
      /** @class */
      function () {
        function t(t, e, n) {
          this.j_ = e, this.K_ = n,
          /** The type of this Firestore reference. */
          this.type = "document", this.firestore = t;
        }

        return Object.defineProperty(t.prototype, "nf", {
          get: function get() {
            return this.K_.path;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "id", {
          /**
           * The document's identifier within its collection.
           */
          get: function get() {
            return this.K_.path.K();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "path", {
          /**
           * A string representing the path of the referenced document (relative
           * to the root of the database).
           */
          get: function get() {
            return this.K_.path.J();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "parent", {
          /**
           * The collection this `DocumentReference` belongs to.
           */
          get: function get() {
            return new ga(this.firestore, this.j_, this.K_.path.q());
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * Applies a custom data converter to this `DocumentReference`, allowing you
         * to use your own custom model objects with Firestore. When you call {@link
         * setDoc()}, {@link getDoc()}, etc. with the returned `DocumentReference`
         * instance, the provided converter will convert between Firestore data and
         * your custom type `U`.
         *
         * @param converter Converts objects to and from Firestore.
         * @return A `DocumentReference<U>` that uses the provided converter.
         */
        t.prototype.withConverter = function (e) {
          return new t(this.firestore, e, this.K_);
        }, t;
      }(),
          oa =
      /** @class */
      function () {
        // This is the lite version of the Query class in the main SDK.
        function t(t, e, n) {
          this.j_ = e, this.tf = n,
          /** The type of this Firestore reference. */
          this.type = "query", this.firestore = t
          /**
          * Applies a custom data converter to this query, allowing you to use your own
          * custom model objects with Firestore. When you call {@link getDocs()} with
          * the returned query, the provided converter will convert between Firestore
          * data and your custom type `U`.
          *
          * @param converter Converts objects to and from Firestore.
          * @return A `Query<U>` that uses the provided converter.
          */
          ;
        }

        return t.prototype.withConverter = function (e) {
          return new t(this.firestore, e, this.tf);
        }, t;
      }(),
          ua = function ua() {};
      /**
       * A `Query` refers to a Query which you can read or listen to. You can also
       * construct refined `Query` objects by adding filters and ordering.
       */

      /**
       * Creates a new immutable instance of `query` that is extended to also include
       * additional query constraints.
       *
       * @param query The query instance to use as a base for the new constraints.
       * @param queryConstraints The list of `QueryConstraint`s to apply.
       * @throws if any of the provided query constraints cannot be combined with the
       * existing or new constraints.
       */


      function sa(t) {
        for (var e = [], n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }

        for (var r = 0, i = e; r < i.length; r++) {
          var o = i[r];
          t = o.sf(t);
        }

        return t;
      }

      var aa =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this) || this).rf = t, i.cf = n, i.uf = r, i.type = "where", i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.sf = function (t) {
          var e = Ta(t.firestore),
              n = function (t, e, n, r, i, o, u) {
            var s;

            if (i.tt()) {
              if ("array-contains"
              /* ARRAY_CONTAINS */
              === o || "array-contains-any"
              /* ARRAY_CONTAINS_ANY */
              === o) throw new L(V.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");

              if ("in"
              /* IN */
              === o || "not-in"
              /* NOT_IN */
              === o) {
                va(u, o);

                for (var a = [], c = 0, h = u; c < h.length; c++) {
                  var f = h[c];
                  a.push(da(r, t, f));
                }

                s = {
                  arrayValue: {
                    values: a
                  }
                };
              } else s = da(r, t, u);
            } else "in"
            /* IN */
            !== o && "not-in"
            /* NOT_IN */
            !== o && "array-contains-any"
            /* ARRAY_CONTAINS_ANY */
            !== o || va(u, o), s = Ra(n, "where", u,
            /* allowArrays= */
            "in"
            /* IN */
            === o || "not-in"
            /* NOT_IN */
            === o);

            var l = Qn.create(i, o, s);
            return function (t, e) {
              if (e.An()) {
                var n = Un(t);
                if (null !== n && !n.isEqual(e.field)) throw new L(V.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
                var r = Ln(t);
                null !== r && ya(t, e.field, r);
              }

              var i = function (t, e) {
                for (var n = 0, r = t.filters; n < r.length; n++) {
                  var i = r[n];
                  if (e.indexOf(i.op) >= 0) return i.op;
                }

                return null;
              }(t,
              /**
              * Given an operator, returns the set of operators that cannot be used with it.
              *
              * Operators in a query must adhere to the following set of rules:
              * 1. Only one array operator is allowed.
              * 2. Only one disjunctive operator is allowed.
              * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
              * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
              *
              * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
              * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
              */
              function (t) {
                switch (t) {
                  case "!="
                  /* NOT_EQUAL */
                  :
                    return ["!="
                    /* NOT_EQUAL */
                    , "not-in"
                    /* NOT_IN */
                    ];

                  case "array-contains"
                  /* ARRAY_CONTAINS */
                  :
                    return ["array-contains"
                    /* ARRAY_CONTAINS */
                    , "array-contains-any"
                    /* ARRAY_CONTAINS_ANY */
                    , "not-in"
                    /* NOT_IN */
                    ];

                  case "in"
                  /* IN */
                  :
                    return ["array-contains-any"
                    /* ARRAY_CONTAINS_ANY */
                    , "in"
                    /* IN */
                    , "not-in"
                    /* NOT_IN */
                    ];

                  case "array-contains-any"
                  /* ARRAY_CONTAINS_ANY */
                  :
                    return ["array-contains"
                    /* ARRAY_CONTAINS */
                    , "array-contains-any"
                    /* ARRAY_CONTAINS_ANY */
                    , "in"
                    /* IN */
                    , "not-in"
                    /* NOT_IN */
                    ];

                  case "not-in"
                  /* NOT_IN */
                  :
                    return ["array-contains"
                    /* ARRAY_CONTAINS */
                    , "array-contains-any"
                    /* ARRAY_CONTAINS_ANY */
                    , "in"
                    /* IN */
                    , "not-in"
                    /* NOT_IN */
                    , "!="
                    /* NOT_EQUAL */
                    ];

                  default:
                    return [];
                }
              }(e.op));

              if (null !== i) // Special case when it's a duplicate op to give a slightly clearer error message.
                throw i === e.op ? new L(V.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new L(V.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.");
            }(t, l), l;
          }(t.tf, 0, e, t.firestore.R_, this.rf, this.cf, this.uf);

          return new oa(t.firestore, t.j_, function (t, e) {
            var n = t.filters.concat([e]);
            return new Sn(t.path, t.collectionGroup, t.Tn.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
          }(t.tf, n));
        }, n;
      }(ua),
          ca =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this) || this).rf = t, r.af = n, r.type = "orderBy", r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.sf = function (t) {
          var e = function (t, e, n) {
            if (null !== t.startAt) throw new L(V.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t.endAt) throw new L(V.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            var r = new ur(e, n);
            return function (t, e) {
              if (null === Ln(t)) {
                // This is the first order by. It must match any inequality.
                var n = Un(t);
                null !== n && ya(t, n, e.field);
              }
            }(t, r), r;
          }(t.tf, this.rf, this.af);

          return new oa(t.firestore, t.j_, function (t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            var n = t.Tn.concat([e]);
            return new Sn(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
          }(t.tf, e));
        }, n;
      }(ua),
          ha =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this) || this).type = t, i.hf = n, i.lf = r, i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.sf = function (t) {
          return new oa(t.firestore, t.j_, Fn(t.tf, this.hf, this.lf));
        }, n;
      }(ua),
          fa =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this) || this).type = t, i._f = n, i.ff = r, i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.sf = function (t) {
          var e = pa(t, this.type, this._f, this.ff);
          return new oa(t.firestore, t.j_, function (t, e) {
            return new Sn(t.path, t.collectionGroup, t.Tn.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt);
          }(t.tf, e));
        }, n;
      }(ua),
          la =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this) || this).type = t, i._f = n, i.ff = r, i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.sf = function (t) {
          var e = pa(t, this.type, this._f, this.ff);
          return new oa(t.firestore, t.j_, function (t, e) {
            return new Sn(t.path, t.collectionGroup, t.Tn.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e);
          }(t.tf, e));
        }, n;
      }(ua);
      /**
       * Creates a `QueryConstraint` that enforces that documents must contain the
       * specified field and that the value should satisfy the relation constraint
       * provided.
       *
       * @param fieldPath The path to compare
       * @param opStr The operation string (e.g "<", "<=", "==", ">", ">=", "!=").
       * @param value The value for comparison
       * @return The created `Query`.
       */

      /** Helper function to create a bound from a document or fields */


      function pa(t, e, n, r) {
        if (n[0] instanceof vs && (n[0] = n[0].o_), n[0] instanceof Fs) return function (t, e, n, r, i) {
          if (!r) throw new L(V.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "()."); // Because people expect to continue/end a query at the exact document
          // provided, we need to use the implicit sort order rather than the explicit
          // sort order, because it's guaranteed to contain the document key. That way
          // the position becomes unambiguous and the query continues/ends exactly at
          // the provided document. Without the key (by using the explicit sort
          // orders), multiple documents could match the position, yielding duplicate
          // results.

          for (var o = [], u = 0, s = qn(t); u < s.length; u++) {
            var a = s[u];
            if (a.field.tt()) o.push(oe(e, r.key));else {
              var c = r.field(a.field);
              if (Kt(c)) throw new L(V.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');

              if (null === c) {
                var h = a.field.J();
                throw new L(V.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
              }

              o.push(c);
            }
          }

          return new nr(o, i);
        }(t.tf, t.firestore.R_, e, n[0].W_, r);
        var i = Ta(t.firestore);
        return function (t, e, n, r, i, o) {
          // Use explicit order by's because it has to match the query the user made
          var u = t.Tn;
          if (i.length > u.length) throw new L(V.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");

          for (var s = [], a = 0; a < i.length; a++) {
            var c = i[a];

            if (u[a].field.tt()) {
              if ("string" != typeof c) throw new L(V.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof c);
              if (!Mn(t) && -1 !== c.indexOf("/")) throw new L(V.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash.");
              var h = t.path.child($.Y(c));
              if (!Z.ot(h)) throw new L(V.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
              var f = new Z(h);
              s.push(oe(e, f));
            } else {
              var l = Ra(n, r, c);
              s.push(l);
            }
          }

          return new nr(s, o);
        }(t.tf, t.firestore.R_, i, e, n, r);
      }

      function da(t, e, n) {
        if (n instanceof vs && (n = n.o_), "string" == typeof n) {
          if ("" === n) throw new L(V.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
          if (!Mn(e) && -1 !== n.indexOf("/")) throw new L(V.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
          var r = e.path.child($.Y(n));
          if (!Z.ot(r)) throw new L(V.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
          return oe(t, new Z(r));
        }

        if (n instanceof ia) return oe(t, n.K_);
        throw new L(V.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + _s(n) + ".");
      }
      /**
       * Validates that the value passed into a disjunctive filter satisfies all
       * array requirements.
       */


      function va(t, e) {
        if (!Array.isArray(t) || 0 === t.length) throw new L(V.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
        if (t.length > 10) throw new L(V.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
      }

      function ya(t, e, n) {
        if (!n.isEqual(e)) throw new L(V.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first argument to orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.");
      }

      function ma(t) {
        if (Vn(t) && 0 === t.Tn.length) throw new L(V.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
      }
      /**
       * A `CollectionReference` object can be used for adding documents, getting
       * document references, and querying for documents (using {@link query()}`).
       */


      var ga =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this, t, n, Cn(r)) || this).firestore = t, i.nf = r, i.type = "collection", i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), Object.defineProperty(n.prototype, "id", {
          /** The collection's identifier. */
          get: function get() {
            return this.tf.path.K();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "path", {
          /**
           * A string representing the path of the referenced collection (relative
           * to the root of the database).
           */
          get: function get() {
            return this.tf.path.J();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "parent", {
          /**
           * A reference to the containing `DocumentReference` if this is a
           * subcollection. If this isn't a subcollection, the reference is null.
           */
          get: function get() {
            var t = this.nf.q();
            return t.W() ? null : new ia(this.firestore,
            /* converter= */
            null, new Z(t));
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * Applies a custom data converter to this CollectionReference, allowing you
         * to use your own custom model objects with Firestore. When you call {@link
         * addDoc()} with the returned `CollectionReference` instance, the provided
         * converter will convert between Firestore data and your custom type `U`.
         *
         * @param converter Converts objects to and from Firestore.
         * @return A `CollectionReference<U>` that uses the provided converter.
         */
        n.prototype.withConverter = function (t) {
          return new n(this.firestore, t, this.nf);
        }, n;
      }(oa);

      function wa(t, e) {
        for (var n = [], i = 2; i < arguments.length; i++) {
          n[i - 2] = arguments[i];
        }

        if (ys("collection", "path", e), t instanceof Vs) {
          var o = $.Y.apply($, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([e], n));
          return bs(o), new ga(t,
          /* converter= */
          null, o);
        }

        if (!(t instanceof ia || t instanceof ga)) throw new L(V.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        var u = $.Y.apply($, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([t.path], n)).child($.Y(e));
        return bs(u), new ga(t.firestore,
        /* converter= */
        null, u);
      } // TODO(firestorelite): Consider using ErrorFactory -
      // https://github.com/firebase/firebase-js-sdk/blob/0131e1f/packages/util/src/errors.ts#L106

      /**
       * Creates and returns a new `Query` instance that includes all documents in the
       * database that are contained in a collection or subcollection with the
       * given `collectionId`.
       *
       * @param firestore A reference to the root Firestore instance.
       * @param collectionId Identifies the collections to query over. Every
       * collection or subcollection with this ID as the last segment of its path
       * will be included. Cannot contain a slash.
       * @return The created `Query`.
       */


      function ba(t, e) {
        for (var n = [], i = 2; i < arguments.length; i++) {
          n[i - 2] = arguments[i];
        }

        if ( // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        1 === arguments.length && (e = B.D()), ys("doc", "path", e), t instanceof Vs) {
          var o = $.Y.apply($, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([e], n));
          return ws(o), new ia(t,
          /* converter= */
          null, new Z(o));
        }

        if (!(t instanceof ia || t instanceof ga)) throw new L(V.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        var u = t.nf.child($.Y.apply($, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([e], n)));
        return ws(u), new ia(t.firestore, t instanceof ga ? t.j_ : null, new Z(u));
      }

      var _a =
      /** @class */
      function (e) {
        function n(t) {
          var n = this;
          return (n = e.call(this) || this).firestore = t, n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.F_ = function (t) {
          return new Ps(t);
        }, n.prototype.O_ = function (t) {
          var e = this.B_(t, this.firestore.R_);
          return new ia(this.firestore,
          /* converter= */
          null, e);
        }, n;
      }(qs);
      /**
       * Returns true if the provided references are equal.
       *
       * @param left A reference to compare.
       * @param right A reference to compare.
       * @return true if the references point to the same location in the same
       * Firestore database.
       */


      function Ia(t, e) {
        return (t instanceof ia || t instanceof ga) && (e instanceof ia || e instanceof ga) && t.firestore === e.firestore && t.path === e.path && t.j_ === e.j_;
      }
      /**
       * Returns true if the provided queries point to the same collection and apply
       * the same constraints.
       *
       * @param left A `Query` to compare.
       * @param right A Query` to compare.
       * @return true if the references point to the same location in the same
       * Firestore database.
       */


      function Ea(t, e) {
        return t instanceof oa && e instanceof oa && t.firestore === e.firestore && zn(t.tf, e.tf) && t.j_ === e.j_;
      }

      function Ta(t) {
        var e = t.S_(),
            n = vr(t.R_);
        return new Oa(t.R_, !!e.ignoreUndefinedProperties, n);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var Na = /^__.*__$/,
          Aa =
      /** @class */
      function () {
        function t(t, e, n) {
          this.data = t, this.en = e, this.fieldTransforms = n;
        }

        return t.prototype.ef = function (t, e) {
          var n = [];
          return null !== this.en ? n.push(new mn(t, this.data, this.en, e)) : n.push(new yn(t, this.data, e)), this.fieldTransforms.length > 0 && n.push(new wn(t, this.fieldTransforms)), n;
        }, t;
      }(),
          Da =
      /** @class */
      function () {
        function t(t, e, n) {
          this.data = t, this.en = e, this.fieldTransforms = n;
        }

        return t.prototype.ef = function (t, e) {
          var n = [new mn(t, this.data, this.en, e)];
          return this.fieldTransforms.length > 0 && n.push(new wn(t, this.fieldTransforms)), n;
        }, t;
      }();
      /** The result of parsing document data (e.g. for a setData call). */


      function xa(t) {
        switch (t) {
          case 0
          /* Set */
          : // fall through

          case 2
          /* MergeSet */
          : // fall through

          case 1
          /* Update */
          :
            return !0;

          case 3
          /* Argument */
          :
          case 4
          /* ArrayArgument */
          :
            return !1;

          default:
            throw P();
        }
      }
      /** A "context" object passed around while parsing user data. */


      var ka =
      /** @class */
      function () {
        /**
         * Initializes a ParseContext with the given source and path.
         *
         * @param settings The settings for the parser.
         * @param databaseId The database ID of the Firestore instance.
         * @param serializer The serializer to use to generate the Value proto.
         * @param ignoreUndefinedProperties Whether to ignore undefined properties
         * rather than throw.
         * @param fieldTransforms A mutable list of field transforms encountered while
         *     parsing the data.
         * @param fieldMask A mutable list of field paths encountered while parsing
         *     the data.
         *
         * TODO(b/34871131): We don't support array paths right now, so path can be
         * null to indicate the context represents any location within an array (in
         * which case certain features will not work and errors will be somewhat
         * compromised).
         */
        function t(t, e, n, r, i, o) {
          this.settings = t, this.t = e, this.serializer = n, this.ignoreUndefinedProperties = r, // Minor hack: If fieldTransforms is undefined, we assume this is an
          // external call and we need to validate the entire path.
          void 0 === i && this.df(), this.fieldTransforms = i || [], this.en = o || [];
        }

        return Object.defineProperty(t.prototype, "path", {
          get: function get() {
            return this.settings.path;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "a_", {
          get: function get() {
            return this.settings.a_;
          },
          enumerable: !1,
          configurable: !0
        }),
        /** Returns a new context with the specified settings overwritten. */
        t.prototype.wf = function (e) {
          return new t(Object.assign(Object.assign({}, this.settings), e), this.t, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.en);
        }, t.prototype.Ef = function (t) {
          var e,
              n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              r = this.wf({
            path: n,
            __: !1
          });
          return r.Tf(t), r;
        }, t.prototype.If = function (t) {
          var e,
              n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              r = this.wf({
            path: n,
            __: !1
          });
          return r.df(), r;
        }, t.prototype.mf = function (t) {
          // TODO(b/34871131): We don't support array paths right now; so make path
          // undefined.
          return this.wf({
            path: void 0,
            __: !0
          });
        }, t.prototype.h_ = function (t) {
          return za(t, this.settings.methodName, this.settings.Af || !1, this.path, this.settings.l_);
        },
        /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
        t.prototype.contains = function (t) {
          return void 0 !== this.en.find(function (e) {
            return t.j(e);
          }) || void 0 !== this.fieldTransforms.find(function (e) {
            return t.j(e.field);
          });
        }, t.prototype.df = function () {
          // TODO(b/34871131): Remove null check once we have proper paths for fields
          // within arrays.
          if (this.path) for (var t = 0; t < this.path.length; t++) {
            this.Tf(this.path.get(t));
          }
        }, t.prototype.Tf = function (t) {
          if (0 === t.length) throw this.h_("Document fields must not be empty");
          if (xa(this.a_) && Na.test(t)) throw this.h_('Document fields cannot begin and end with "__"');
        }, t;
      }(),
          Oa =
      /** @class */
      function () {
        function t(t, e, n) {
          this.t = t, this.ignoreUndefinedProperties = e, this.serializer = n || vr(t)
          /** Creates a new top-level parse context. */
          ;
        }

        return t.prototype.Rf = function (t, e, n, r) {
          return void 0 === r && (r = !1), new ka({
            a_: t,
            methodName: e,
            l_: n,
            path: X.X(),
            __: !1,
            Af: r
          }, this.t, this.serializer, this.ignoreUndefinedProperties);
        }, t;
      }();
      /**
       * Helper for parsing raw user input (provided via the API) into internal model
       * classes.
       */

      /** Parse document data from a set() call. */


      function Sa(t, e, n, r, i, o) {
        void 0 === o && (o = {});
        var u = t.Rf(o.merge || o.mergeFields ? 2
        /* MergeSet */
        : 0
        /* Set */
        , e, n, i);
        Ma("Data must be an object, but it was:", u, r);
        var s,
            a,
            c = La(r, u);
        if (o.merge) s = new on(u.en), a = u.fieldTransforms;else if (o.mergeFields) {
          for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
            var p = qa(e, l[f], n);
            if (!u.contains(p)) throw new L(V.INVALID_ARGUMENT, "Field '" + p + "' is specified in your field mask but missing from your input data.");
            Ba(h, p) || h.push(p);
          }

          s = new on(h), a = u.fieldTransforms.filter(function (t) {
            return s.un(t.field);
          });
        } else s = null, a = u.fieldTransforms;
        return new Aa(new Tn(c), s, a);
      }
      /** Parse update data from an update() call. */


      function Pa(t, e, n, r) {
        var i = t.Rf(1
        /* Update */
        , e, n);
        Ma("Data must be an object, but it was:", i, r);
        var o = [],
            u = new Nn();
        Bt(r, function (t, r) {
          var s = Fa(e, t, n); // For Compat types, we have to "extract" the underlying types before
          // performing validation.

          r instanceof vs && (r = r.o_);
          var a = i.If(s);
          if (r instanceof Ns) // Add it to the field mask, but don't add anything to updateData.
            o.push(s);else {
            var c = Va(r, a);
            null != c && (o.push(s), u.set(s, c));
          }
        });
        var s = new on(o);
        return new Da(u.hn(), s, i.fieldTransforms);
      }
      /** Parse update data from a list of field/value arguments. */


      function Ca(t, e, n, r, i, o) {
        var u = t.Rf(1
        /* Update */
        , e, n),
            s = [qa(e, r, n)],
            a = [i];
        if (o.length % 2 != 0) throw new L(V.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");

        for (var c = 0; c < o.length; c += 2) {
          s.push(qa(e, o[c])), a.push(o[c + 1]);
        } // We iterate in reverse order to pick the last value for a field if the
        // user specified the field multiple times.


        for (var h = [], f = new Nn(), l = s.length - 1; l >= 0; --l) {
          if (!Ba(h, s[l])) {
            var p = s[l],
                d = a[l]; // For Compat types, we have to "extract" the underlying types before
            // performing validation.

            d instanceof vs && (d = d.o_);
            var v = u.If(p);
            if (d instanceof Ns) // Add it to the field mask, but don't add anything to updateData.
              h.push(p);else {
              var y = Va(d, v);
              null != y && (h.push(p), f.set(p, y));
            }
          }
        }

        var m = new on(h);
        return new Da(f.hn(), m, u.fieldTransforms);
      }
      /**
       * Parse a "query value" (e.g. value in a where filter or a value in a cursor
       * bound).
       *
       * @param allowArrays Whether the query value is an array that may directly
       * contain additional arrays (e.g. the operand of an `in` query).
       */


      function Ra(t, e, n, r) {
        return void 0 === r && (r = !1), Va(n, t.Rf(r ? 4
        /* ArrayArgument */
        : 3
        /* Argument */
        , e));
      }
      /**
       * Parses user data to Protobuf Values.
       *
       * @param input Data to be parsed.
       * @param context A context object representing the current path being parsed,
       * the source of the data being parsed, etc.
       * @return The parsed value, or null if the value was a FieldValue sentinel
       * that should not be included in the resulting parsed data.
       */


      function Va(t, e) {
        if ( // Unwrap the API type from the Compat SDK. This will return the API type
        // from firestore-exp.
        t instanceof vs && (t = t.o_), Ua(t)) return Ma("Unsupported field value:", e, t), La(t, e);
        if (t instanceof Ts) // FieldValues usually parse into transforms (except FieldValue.delete())
          // in which case we do not want to include this field in our parsed data
          // (as doing so will overwrite the field directly prior to the transform
          // trying to transform it). So we don't add this location to
          // context.fieldMask and we return null as our parsing result.

          /**
           * "Parses" the provided FieldValueImpl, adding any necessary transforms to
           * context.fieldTransforms.
           */
          return function (t, e) {
            // Sentinels are only supported with writes, and not within arrays.
            if (!xa(e.a_)) throw e.h_(t.c_ + "() can only be used with update() and set()");
            if (!e.path) throw e.h_(t.c_ + "() is not currently supported inside arrays");
            var n = t.u_(e);
            n && e.fieldTransforms.push(n);
          }(t, e), null;

        if ( // If context.path is null we are inside an array and we don't support
        // field mask paths more granular than the top-level array.
        e.path && e.en.push(e.path), t instanceof Array) {
          // TODO(b/34871131): Include the path containing the array in the error
          // message.
          // In the case of IN queries, the parsed data is an array (representing
          // the set of values to be included for the IN query) that may directly
          // contain additional arrays (each representing an individual field
          // value), so we disable this validation.
          if (e.settings.__ && 4
          /* ArrayArgument */
          !== e.a_) throw e.h_("Nested arrays are not supported");
          return function (t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
              var u = Va(o[i], e.mf(r));
              null == u && ( // Just include nulls in the array for fields being replaced with a
              // sentinel.
              u = {
                nullValue: "NULL_VALUE"
              }), n.push(u), r++;
            }

            return {
              arrayValue: {
                values: n
              }
            };
          }(t, e);
        }

        return function (t, e) {
          if (t instanceof vs && (t = t.o_), null === t) return {
            nullValue: "NULL_VALUE"
          };
          if ("number" == typeof t) return ye(e.serializer, t);
          if ("boolean" == typeof t) return {
            booleanValue: t
          };
          if ("string" == typeof t) return {
            stringValue: t
          };

          if (t instanceof Date) {
            var n = Q.fromDate(t);
            return {
              timestampValue: me(e.serializer, n)
            };
          }

          if (t instanceof Q) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            var r = new Q(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
              timestampValue: me(e.serializer, r)
            };
          }

          if (t instanceof Ss) return {
            geoPointValue: {
              latitude: t.latitude,
              longitude: t.longitude
            }
          };
          if (t instanceof Ps) return {
            bytesValue: ge(e.serializer, t.T_)
          };

          if (t instanceof ia) {
            var i = e.t,
                o = t.firestore.R_;
            if (!o.isEqual(i)) throw e.h_("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
            return {
              referenceValue: _e(t.firestore.R_ || e.t, t.K_.path)
            };
          }

          if (void 0 === t && e.ignoreUndefinedProperties) return null;
          throw e.h_("Unsupported field value: " + _s(t));
        }(t, e);
      }

      function La(t, e) {
        var n = {};
        return Gt(t) ? // If we encounter an empty object, we explicitly add it to the update
        // mask to ensure that the server creates a map entry.
        e.path && e.path.length > 0 && e.en.push(e.path) : Bt(t, function (t, r) {
          var i = Va(r, e.Ef(t));
          null != i && (n[t] = i);
        }), {
          mapValue: {
            fields: n
          }
        };
      }

      function Ua(t) {
        return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof Q || t instanceof Ss || t instanceof Ps || t instanceof ia || t instanceof Ts);
      }

      function Ma(t, e, n) {
        if (!Ua(n) || !function (t) {
          return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
        }(n)) {
          var r = _s(n);

          throw "an object" === r ? e.h_(t + " a custom object") : e.h_(t + " " + r);
        }
      }
      /**
       * Helper that calls fromDotSeparatedString() but wraps any error thrown.
       */


      function qa(t, e, n) {
        if ( // If required, replace the FieldPath Compat class with with the firestore-exp
        // FieldPath.
        e instanceof vs && (e = e.o_), e instanceof Gs) return e.G_;
        if ("string" == typeof e) return Fa(t, e);
        throw za("Field path arguments must be of type string or FieldPath.", t,
        /* hasConverter= */
        !1,
        /* path= */
        void 0, n);
      }
      /**
       * Matches any characters in a field path string that are reserved.
       */


      var ja = new RegExp("[~\\*/\\[\\]]");
      /**
       * Wraps fromDotSeparatedString with an error message about the method that
       * was thrown.
       * @param methodName The publicly visible method name
       * @param path The dot-separated string form of a field path which will be split
       * on dots.
       * @param targetDoc The document against which the field path will be evaluated.
       */

      function Fa(t, e, n) {
        if (e.search(ja) >= 0) throw za("Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'", t,
        /* hasConverter= */
        !1,
        /* path= */
        void 0, n);

        try {
          return new (Gs.bind.apply(Gs, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([void 0], e.split("."))))().G_;
        } catch (r) {
          throw za("Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'", t,
          /* hasConverter= */
          !1,
          /* path= */
          void 0, n);
        }
      }

      function za(t, e, n, r, i) {
        var o = r && !r.W(),
            u = void 0 !== i,
            s = "Function " + e + "() called with invalid data";
        n && (s += " (via `toFirestore()`)");
        var a = "";
        return (o || u) && (a += " (found", o && (a += " in field " + r), u && (a += " in document " + i), a += ")"), new L(V.INVALID_ARGUMENT, (s += ". ") + t + a)
        /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */
        ;
      }

      function Ba(t, e) {
        return t.some(function (t) {
          return t.isEqual(e);
        });
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Internal transaction object responsible for accumulating the mutations to
       * perform and the base versions for any documents read.
       */


      var Ga =
      /** @class */
      function () {
        function t(t) {
          this.Nu = t, // The version of each document that was read during this transaction.
          this.Pf = new Map(), this.mutations = [], this.gf = !1,
          /**
               * A deferred usage error that occurred previously in this transaction that
               * will cause the transaction to fail once it actually commits.
               */
          this.yf = null,
          /**
               * Set of documents that have been written in the transaction.
               *
               * When there's more than one write to the same key in a transaction, any
               * writes after the first are handled differently.
               */
          this.Vf = new Set();
        }

        return t.prototype.pf = function (t) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var r,
                i = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (o) {
              switch (o.label) {
                case 0:
                  if (this.vf(), this.mutations.length > 0) throw new L(V.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                  return [4
                  /*yield*/
                  , function (t, r) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                      var e, i, o, u, s, a;
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return e = R(t), i = De(e.serializer) + "/documents", o = {
                              documents: r.map(function (t) {
                                return Ee(e.serializer, t);
                              })
                            }, [4
                            /*yield*/
                            , e.Ru("BatchGetDocuments", i, o)];

                          case 1:
                            return u = n.sent(), s = new Map(), u.forEach(function (t) {
                              var n = function (t, e) {
                                return "found" in e ? function (t, e) {
                                  C(!!e.found), e.found.name, e.found.updateTime;
                                  var n = Te(t, e.found.name),
                                      r = be(e.found.updateTime),
                                      i = new Tn({
                                    mapValue: {
                                      fields: e.found.fields
                                    }
                                  });
                                  return new xn(n, r, i, {});
                                }(t, e) : "missing" in e ? function (t, e) {
                                  C(!!e.missing), C(!!e.readTime);
                                  var n = Te(t, e.missing),
                                      r = be(e.readTime);
                                  return new kn(n, r);
                                }(t, e) : P();
                              }(e.serializer, t);

                              s.set(n.key.toString(), n);
                            }), a = [], [2
                            /*return*/
                            , (r.forEach(function (t) {
                              var e = s.get(t.toString());
                              C(!!e), a.push(e);
                            }), a)];
                        }
                      });
                    });
                  }(this.Nu, t)];

                case 1:
                  return [2
                  /*return*/
                  , ((r = o.sent()).forEach(function (t) {
                    t instanceof kn || t instanceof xn ? i.bf(t) : P();
                  }), r)];
              }
            });
          });
        }, t.prototype.set = function (t, e) {
          this.write(e.ef(t, this.rn(t))), this.Vf.add(t.toString());
        }, t.prototype.update = function (t, e) {
          try {
            this.write(e.ef(t, this.Sf(t)));
          } catch (t) {
            this.yf = t;
          }

          this.Vf.add(t.toString());
        }, t.prototype["delete"] = function (t) {
          this.write([new In(t, this.rn(t))]), this.Vf.add(t.toString());
        }, t.prototype.commit = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var t,
                r = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (i) {
              switch (i.label) {
                case 0:
                  if (this.vf(), this.yf) throw this.yf;
                  return t = this.Pf, // For each mutation, note that the doc was written.
                  this.mutations.forEach(function (e) {
                    t["delete"](e.key.toString());
                  }), // For each document that was read but not written to, we want to perform
                  // a `verify` operation.
                  t.forEach(function (t, e) {
                    var n = Z.st(e);
                    r.mutations.push(new En(n, r.rn(n)));
                  }), [4
                  /*yield*/
                  , function (t, r) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                      var e, i, o;
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return e = R(t), i = De(e.serializer) + "/documents", o = {
                              writes: r.map(function (t) {
                                return Oe(e.serializer, t);
                              })
                            }, [4
                            /*yield*/
                            , e.Au("Commit", i, o)];

                          case 1:
                            return n.sent(), [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  }(this.Nu, this.mutations)];

                case 1:
                  // For each mutation, note that the doc was written.
                  return i.sent(), this.gf = !0, [2
                  /*return*/
                  ];
              }
            });
          });
        }, t.prototype.bf = function (t) {
          var e;
          if (t instanceof xn) e = t.version;else {
            if (!(t instanceof kn)) throw P(); // For deleted docs, we must use baseVersion 0 when we overwrite them.

            e = H.min();
          }
          var n = this.Pf.get(t.key.toString());

          if (n) {
            if (!e.isEqual(n)) // This transaction will fail no matter what.
              throw new L(V.ABORTED, "Document version changed between two reads.");
          } else this.Pf.set(t.key.toString(), e);
        },
        /**
         * Returns the version of this document when it was read in this transaction,
         * as a precondition, or no precondition if it was not read.
         */
        t.prototype.rn = function (t) {
          var e = this.Pf.get(t.toString());
          return !this.Vf.has(t.toString()) && e ? an.updateTime(e) : an.on();
        },
        /**
         * Returns the precondition for a document if the operation is an update.
         */
        t.prototype.Sf = function (t) {
          var e = this.Pf.get(t.toString()); // The first time a document is written, we want to take into account the
          // read time and existence

          if (!this.Vf.has(t.toString()) && e) {
            if (e.isEqual(H.min())) // The document doesn't exist, so fail the transaction.
              // This has to be validated locally because you can't send a
              // precondition that a document does not exist without changing the
              // semantics of the backend write to be an insert. This is the reverse
              // of what we want, since we want to assert that the document doesn't
              // exist but then send the update and have it fail. Since we can't
              // express that to the backend, we have to validate locally.
              // Note: this can change once we can send separate verify writes in the
              // transaction.
              throw new L(V.INVALID_ARGUMENT, "Can't update a document that doesn't exist."); // Document exists, base precondition on document update time.

            return an.updateTime(e);
          } // Document was not read, so we just use the preconditions for a blind
          // update.


          return an.exists(!0);
        }, t.prototype.write = function (t) {
          this.vf(), this.mutations = this.mutations.concat(t);
        }, t.prototype.vf = function () {}, t;
      }(),
          Ka =
      /** @class */
      function () {
        function t(t, e, n, r) {
          this.di = t, this.Nu = e, this.updateFunction = n, this.Ti = r, this.Df = 5, this.Si = new Ir(this.di, "transaction_retry"
          /* TransactionRetry */
          )
          /** Runs the transaction and sets the result on deferred. */
          ;
        }

        return t.prototype.run = function () {
          this.Cf();
        }, t.prototype.Cf = function () {
          var t = this;
          this.Si.Bs(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(t, void 0, void 0, function () {
              var t,
                  e,
                  r = this;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                return t = new Ga(this.Nu), (e = this.Nf(t)) && e.then(function (e) {
                  r.di.Ri(function () {
                    return t.commit().then(function () {
                      r.Ti.resolve(e);
                    })["catch"](function (t) {
                      r.xf(t);
                    });
                  });
                })["catch"](function (t) {
                  r.xf(t);
                }), [2
                /*return*/
                ];
              });
            });
          });
        }, t.prototype.Nf = function (t) {
          try {
            var e = this.updateFunction(t);
            return !tt(e) && e["catch"] && e.then ? e : (this.Ti.reject(Error("Transaction callback must return a Promise")), null);
          } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.Ti.reject(t), null;
          }
        }, t.prototype.xf = function (t) {
          var e = this;
          this.Df > 0 && this.Ff(t) ? (this.Df -= 1, this.di.Ri(function () {
            return e.Cf(), Promise.resolve();
          })) : this.Ti.reject(t);
        }, t.prototype.Ff = function (t) {
          if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !pt(e);
          }

          return !1;
        }, t;
      }(),
          Wa =
      /** @class */
      function () {
        function t(t,
        /**
         * Asynchronous queue responsible for all of our internal processing. When
         * we get incoming work from the user (via public API) or the network
         * (incoming GRPC messages), we should always schedule onto this queue.
         * This ensures all of our work is properly serialized (e.g. we don't
         * start processing a new operation while the previous one is waiting for
         * an async I/O to complete).
         */
        e, n) {
          var r = this;
          this.credentials = t, this.di = e, this.Fl = n, this.user = N.UNAUTHENTICATED, this.clientId = B.D(), this.Of = function () {}, this.g = new dr(), this.credentials.A(function (t) {
            x("FirestoreClient", "Received user=", t.uid), r.user.isEqual(t) || (r.user = t, r.Of(t)), r.g.resolve();
          });
        }

        return t.prototype.getConfiguration = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.g.promise];

                case 1:
                  return [2
                  /*return*/
                  , (t.sent(), {
                    di: this.di,
                    Fl: this.Fl,
                    clientId: this.clientId,
                    credentials: this.credentials,
                    Yl: this.user,
                    $h: 100
                  })];
              }
            });
          });
        }, t.prototype.Mf = function (t) {
          var e = this;
          this.Of = t, // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.g.promise.then(function () {
            return e.Of(e.user);
          });
        },
        /**
         * Checks that the client has not been terminated. Ensures that other methods on
         * this class cannot be called after the client is terminated.
         */
        t.prototype.kf = function () {
          if (this.di.Ci) throw new L(V.FAILED_PRECONDITION, "The client has already been terminated.");
        }, t.prototype.terminate = function () {
          var t = this;
          this.di.Oi();
          var r = new dr();
          return this.di.Ni(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(t, void 0, void 0, function () {
              var t, e;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    return n.trys.push([0, 5,, 6]), this.$f ? [4
                    /*yield*/
                    , this.$f.terminate()] : [3
                    /*break*/
                    , 2];

                  case 1:
                    n.sent(), n.label = 2;

                  case 2:
                    return this.Lf ? [4
                    /*yield*/
                    , this.Lf.terminate()] : [3
                    /*break*/
                    , 4];

                  case 3:
                    n.sent(), n.label = 4;

                  case 4:
                    // `removeChangeListener` must be called after shutting down the
                    // RemoteStore as it will prevent the RemoteStore from retrieving
                    // auth tokens.
                    return this.credentials.R(), r.resolve(), [3
                    /*break*/
                    , 6];

                  case 5:
                    return t = n.sent(), e = Lr(t, "Failed to shutdown persistence"), r.reject(e), [3
                    /*break*/
                    , 6];

                  case 6:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          }), r.promise;
        }, t;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * TransactionRunner encapsulates the logic needed to run and retry transactions
       * with backoff.
       */


      function Qa(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var i,
              o = this;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (u) {
            switch (u.label) {
              case 0:
                return t.di.Li(), x("FirestoreClient", "Initializing OfflineComponentProvider"), [4
                /*yield*/
                , t.getConfiguration()];

              case 1:
                return i = u.sent(), [4
                /*yield*/
                , r.initialize(i)];

              case 2:
                return u.sent(), t.Mf(function (i) {
                  return t.di.Mi(function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(o, void 0, void 0, function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return [4
                            /*yield*/
                            , ro(r.Cu, i)];

                          case 1:
                            return t.sent(), [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  });
                }), // When a user calls clearPersistence() in one client, all other clients
                // need to be terminated to allow the delete to succeed.
                r.persistence.tc(function () {
                  return t.terminate();
                }), t.Lf = r, [2
                /*return*/
                ];
            }
          });
        });
      }

      function Ha(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var i, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (u) {
            switch (u.label) {
              case 0:
                return t.di.Li(), [4
                /*yield*/
                , Ya(t)];

              case 1:
                return i = u.sent(), x("FirestoreClient", "Initializing OnlineComponentProvider"), [4
                /*yield*/
                , t.getConfiguration()];

              case 2:
                return o = u.sent(), [4
                /*yield*/
                , r.initialize(i, o)];

              case 3:
                return u.sent(), // The CredentialChangeListener of the online component provider takes
                // precedence over the offline component provider.
                t.Mf(function (i) {
                  return t.di.Mi(function () {
                    return function (t, r) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                        var e, i;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return (e = R(t)).di.Li(), x("RemoteStore", "RemoteStore received new credentials"), i = Oo(e), // Tear down and re-create our network streams. This will ensure we get a
                              // fresh auth token for the new user and re-fill the write pipeline with
                              // new mutations from the LocalStore (since mutations are per-user).
                              e.Mu.add(3
                              /* CredentialChange */
                              ), [4
                              /*yield*/
                              , Eo(e)];

                            case 1:
                              return n.sent(), i && // Don't set the network status to Unknown if we are offline.
                              e.Bu.set("Unknown"
                              /* Unknown */
                              ), [4
                              /*yield*/
                              , e.xu.s_(r)];

                            case 2:
                              return n.sent(), e.Mu["delete"](3
                              /* CredentialChange */
                              ), [4
                              /*yield*/
                              , Io(e)];

                            case 3:
                              // Tear down and re-create our network streams. This will ensure we get a
                              // fresh auth token for the new user and re-fill the write pipeline with
                              // new mutations from the LocalStore (since mutations are per-user).
                              return n.sent(), [2
                              /*return*/
                              ];
                          }
                        });
                      });
                    }(r.Oh, i);
                  });
                }), t.$f = r, [2
                /*return*/
                ];
            }
          });
        });
      }

      function Ya(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
            switch (e.label) {
              case 0:
                return t.Lf ? [3
                /*break*/
                , 2] : (x("FirestoreClient", "Using default OfflineComponentProvider"), [4
                /*yield*/
                , Qa(t, new hs())]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [2
                /*return*/
                , t.Lf];
            }
          });
        });
      }

      function $a(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
            switch (e.label) {
              case 0:
                return t.$f ? [3
                /*break*/
                , 2] : (x("FirestoreClient", "Using default OnlineComponentProvider"), [4
                /*yield*/
                , Ha(t, new ps())]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [2
                /*return*/
                , t.$f];
            }
          });
        });
      }

      function Ja(t) {
        return Ya(t).then(function (t) {
          return t.persistence;
        });
      }

      function Xa(t) {
        return Ya(t).then(function (t) {
          return t.Cu;
        });
      }

      function Za(t) {
        return $a(t).then(function (t) {
          return t.Oh;
        });
      }

      function tc(t) {
        return $a(t).then(function (t) {
          return t.ga;
        });
      }

      function ec(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, r;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return [4
                /*yield*/
                , $a(t)];

              case 1:
                return e = n.sent(), [2
                /*return*/
                , ((r = e.Mh).Ju = wu.bind(null, e.ga), r.Zu = _u.bind(null, e.ga), r)];
            }
          });
        });
      }

      function nc(t, e, n, r, i) {
        var o = new ds({
          next: function next(o) {
            // Remove query first before passing event to user to avoid
            // user actions affecting the now stale query.
            e.Ri(function () {
              return $o(t, u);
            });
            var s = o.docs.has(n);
            !s && o.fromCache ? // TODO(dimond): If we're online and the document doesn't
            // exist then we resolve with a doc.exists set to false. If
            // we're offline however, we reject the Promise in this
            // case. Two options: 1) Cache the negative response from
            // the server so we can deliver that even when you're
            // offline 2) Actually reject the Promise in the online case
            // if the document doesn't exist.
            i.reject(new L(V.UNAVAILABLE, "Failed to get document because the client is offline.")) : s && o.fromCache && r && "server" === r.source ? i.reject(new L(V.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(o);
          },
          error: function error(t) {
            return i.reject(t);
          }
        }),
            u = new tu(Cn(n.path), o, {
          includeMetadataChanges: !0,
          oa: !0
        });
        return Yo(t, u);
      }

      function rc(t, e, n, r, i) {
        var o = new ds({
          next: function next(n) {
            // Remove query first before passing event to user to avoid
            // user actions affecting the now stale query.
            e.Ri(function () {
              return $o(t, u);
            }), n.fromCache && "server" === r.source ? i.reject(new L(V.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n);
          },
          error: function error(t) {
            return i.reject(t);
          }
        }),
            u = new tu(n, o, {
          includeMetadataChanges: !0,
          oa: !0
        });
        return Yo(t, u);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A write batch, used to perform multiple writes as a single atomic unit.
       *
       * A `WriteBatch` object can be acquired by calling {@link writeBatch()}. It
       * provides methods for adding writes to the write batch. None of the writes
       * will be committed (or visible locally) until {@link WriteBatch#commit()} is
       * called.
       */


      var ic =
      /** @class */
      function () {
        function t(t, e) {
          this.U_ = t, this.Bf = e, this.qf = [], this.Uf = !1, this.Qf = Ta(t);
        }

        return t.prototype.set = function (t, e, n) {
          this.Kf();
          var r = oc(t, this.U_),
              i = Nc(r.j_, e, n),
              o = Sa(this.Qf, "WriteBatch.set", r.K_, i, null !== r.j_, n);
          return this.qf = this.qf.concat(o.ef(r.K_, an.on())), this;
        }, t.prototype.update = function (t, e, n) {
          for (var r = [], i = 3; i < arguments.length; i++) {
            r[i - 3] = arguments[i];
          }

          this.Kf();
          var o,
              u = oc(t, this.U_); // For Compat types, we have to "extract" the underlying types before
          // performing validation.

          return e instanceof vs && (e = e.o_), o = "string" == typeof e || e instanceof Gs ? Ca(this.Qf, "WriteBatch.update", u.K_, e, n, r) : Pa(this.Qf, "WriteBatch.update", u.K_, e), this.qf = this.qf.concat(o.ef(u.K_, an.exists(!0))), this;
        },
        /**
         * Deletes the document referred to by the provided {@link DocumentReference}.
         *
         * @param documentRef A reference to the document to be deleted.
         * @return This `WriteBatch` instance. Used for chaining method calls.
         */
        t.prototype["delete"] = function (t) {
          this.Kf();
          var e = oc(t, this.U_);
          return this.qf = this.qf.concat(new In(e.K_, an.on())), this;
        },
        /**
         * Commits all of the writes in this write batch as a single atomic unit.
         *
         * The result of these writes will only be reflected in document reads that
         * occur after the returned Promise resolves. If the client is offline, the
         * write fails. If you would like to see local modifications or buffer writes
         * until the client is online, use the full Firestore SDK.
         *
         * @return A Promise resolved once all of the writes in the batch have been
         * successfully written to the backend as an atomic unit (note that it won't
         * resolve while you're offline).
         */
        t.prototype.commit = function () {
          return this.Kf(), this.Uf = !0, this.qf.length > 0 ? this.Bf(this.qf) : Promise.resolve();
        }, t.prototype.Kf = function () {
          if (this.Uf) throw new L(V.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
        }, t;
      }();

      function oc(t, e) {
        if (t instanceof vs && (t = t.o_), t.firestore !== e) throw new L(V.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return t;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
      // legacy SDK.

      /**
       * A reference to a transaction.
       *
       * The `Transaction` object passed to a transaction's `updateFunction` provides
       * the methods to read and write data within the transaction context. See
       * {@link runTransaction()}.
       */

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A reference to a transaction.
       *
       * The `Transaction` object passed to a transaction's `updateFunction` provides
       * the methods to read and write data within the transaction context. See
       * {@link runTransaction()}.
       */


      var uc =
      /** @class */
      function (e) {
        // This class implements the same logic as the Transaction API in the Lite SDK
        // but is subclassed in order to return its own DocumentSnapshot types.
        function n(t, n) {
          var r = this;
          return (r = e.call(this, t, n) || this).U_ = t, r;
        }
        /**
         * Reads the document referenced by the provided {@link DocumentReference}.
         *
         * @param documentRef A reference to the document to be read.
         * @return A `DocumentSnapshot` with the read data.
         */


        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.get = function (t) {
          var n = this,
              r = oc(t, this.U_),
              i = new Zs(this.U_);
          return e.prototype.get.call(this, t).then(function (t) {
            return new Hs(n.U_, i, r.K_, t.W_, new mc(
            /* hasPendingWrites= */
            !1,
            /* fromCache= */
            !1), r.j_);
          });
        }, n;
      }(
      /** @class */
      function () {
        function t(t, e) {
          this.U_ = t, this.Wf = e, this.Qf = Ta(t)
          /**
          * Reads the document referenced by the provided {@link DocumentReference}.
          *
          * @param documentRef A reference to the document to be read.
          * @return A `DocumentSnapshot` with the read data.
          */
          ;
        }

        return t.prototype.get = function (t) {
          var e = this,
              n = oc(t, this.U_),
              r = new _a(this.U_);
          return this.Wf.pf([n.K_]).then(function (t) {
            if (!t || 1 !== t.length) return P();
            var i = t[0];
            if (i instanceof kn) return new Fs(e.U_, r, n.K_, null, n.j_);
            if (i instanceof xn) return new Fs(e.U_, r, i.key, i, n.j_);
            throw P();
          });
        }, t.prototype.set = function (t, e, n) {
          var r = oc(t, this.U_),
              i = Nc(r.j_, e, n),
              o = Sa(this.Qf, "Transaction.set", r.K_, i, null !== r.j_, n);
          return this.Wf.set(r.K_, o), this;
        }, t.prototype.update = function (t, e, n) {
          for (var r = [], i = 3; i < arguments.length; i++) {
            r[i - 3] = arguments[i];
          }

          var o,
              u = oc(t, this.U_); // For Compat types, we have to "extract" the underlying types before
          // performing validation.

          return e instanceof vs && (e = e.o_), o = "string" == typeof e || e instanceof Gs ? Ca(this.Qf, "Transaction.update", u.K_, e, n, r) : Pa(this.Qf, "Transaction.update", u.K_, e), this.Wf.update(u.K_, o), this;
        },
        /**
         * Deletes the document referred to by the provided {@link DocumentReference}.
         *
         * @param documentRef A reference to the document to be deleted.
         * @return This `Transaction` instance. Used for chaining method calls.
         */
        t.prototype["delete"] = function (t) {
          var e = oc(t, this.U_);
          return this.Wf["delete"](e.K_), this;
        }, t;
      }()),
          sc =
      /** @class */
      function () {
        function t() {}

        return t.prototype.enableIndexedDbPersistence = function (t, e) {
          return function (t, e) {
            Qs(t);
            var n = cc(t),
                r = t.S_(),
                i = new ps();
            return Ws(n, i, new fs(i, r.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
          }(t.o_, {
            forceOwnership: e
          });
        }, t.prototype.enableMultiTabIndexedDbPersistence = function (t) {
          return function (t) {
            Qs(t);
            var e = cc(t),
                n = t.S_(),
                r = new ps();
            return Ws(e, r, new ls(r, n.cacheSizeBytes));
          }(t.o_);
        }, t.prototype.clearIndexedDbPersistence = function (t) {
          return function (t) {
            var r = this;
            if (t.y_ && !t.V_) throw new L(V.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
            var i = new dr();
            return t.z_.Ni(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                var r;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return o.trys.push([0, 2,, 3]), [4
                      /*yield*/
                      , function (t) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                          var e;
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return Er.Gs() ? (e = t + "main", [4
                                /*yield*/
                                , Er["delete"](e)]) : [2
                                /*return*/
                                , Promise.resolve()];

                              case 1:
                                return n.sent(), [2
                                /*return*/
                                ];
                            }
                          });
                        });
                      }(to(t.R_, t.I_))];

                    case 1:
                      return o.sent(), i.resolve(), [3
                      /*break*/
                      , 3];

                    case 2:
                      return r = o.sent(), i.reject(r), [3
                      /*break*/
                      , 3];

                    case 3:
                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            }), i.promise
            /**
            * Waits until all currently pending writes for the active user have been
            * acknowledged by the backend.
            *
            * The returned Promise resolves immediately if there are no outstanding writes.
            * Otherwise, the Promise waits for all previously issued writes (including
            * those written in a previous app session), but it does not wait for writes
            * that were added after the function is called. If you want to wait for
            * additional writes, call `waitForPendingWrites()` again.
            *
            * Any outstanding `waitForPendingWrites()` Promises are rejected during user
            * changes.
            *
            * @return A Promise which resolves when all currently pending writes have been
            * acknowledged by the backend.
            */
            ;
          }(t.o_);
        }, t;
      }(),
          ac =
      /** @class */
      function (r) {
        function i(t, e, n) {
          var i = this;
          return (i = r.call(this, e) || this).jf = n, i.INTERNAL = {
            "delete": function _delete() {
              return i.terminate();
            }
          }, t instanceof T || (i.Gf = t), i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(i, r), Object.defineProperty(i.prototype, "R_", {
          get: function get() {
            return this.o_.R_;
          },
          enumerable: !1,
          configurable: !0
        }), i.prototype.settings = function (t) {
          t.merge && // Remove the property from the settings once the merge is completed
          delete (t = Object.assign(Object.assign({}, this.o_.b_()), t)).merge, this.o_.v_(t);
        }, i.prototype.useEmulator = function (t, e) {
          "firestore.googleapis.com" !== this.o_.b_().host && O("Host has been set in both settings() and useEmulator(), emulator host will be used"), this.settings({
            host: t + ":" + e,
            ssl: !1,
            merge: !0
          });
        }, i.prototype.enableNetwork = function () {
          /**
          * Re-enables use of the network for this Firestore instance after a prior
          * call to {@link disableNetwork()}.
          *
          * @return A promise that is resolved once the network has been enabled.
          */
          return function (t) {
            /** Enables the network connection and re-enqueues all pending operations. */
            return function (t) {
              var r = this;
              return t.di.enqueue(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                  var e, r;
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , Ja(t)];

                      case 1:
                        return e = n.sent(), [4
                        /*yield*/
                        , Za(t)];

                      case 2:
                        return r = n.sent(), [2
                        /*return*/
                        , (e.ec(!0), function (t) {
                          var e = R(t);
                          return e.Mu["delete"](0
                          /* UserDisabled */
                          ), Io(e);
                        }(r))];
                    }
                  });
                });
              });
            }(cc(t));
          }
          /**
          * Disables network usage for this instance. It can be re-enabled via {@link
          * enableNetwork()}. While the network is disabled, any snapshot listeners,
          * `getDoc()` or `getDocs()` calls will return results from cache, and any write
          * operations will be queued until the network is restored.
          *
          * @return A promise that is resolved once the network has been disabled.
          */
          (this.o_);
        }, i.prototype.disableNetwork = function () {
          return function (t) {
            return function (t) {
              var r = this;
              return t.di.enqueue(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                  var r, i;
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , Ja(t)];

                      case 1:
                        return r = o.sent(), [4
                        /*yield*/
                        , Za(t)];

                      case 2:
                        return i = o.sent(), [2
                        /*return*/
                        , (r.ec(!1), function (t) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                            var e;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                              switch (n.label) {
                                case 0:
                                  return (e = R(t)).Mu.add(0
                                  /* UserDisabled */
                                  ), [4
                                  /*yield*/
                                  , Eo(e)];

                                case 1:
                                  return n.sent(), // Set the OnlineState to Offline so get()s return from cache, etc.
                                  e.Bu.set("Offline"
                                  /* Offline */
                                  ), [2
                                  /*return*/
                                  ];
                              }
                            });
                          });
                        }(i))];
                    }
                  });
                });
              });
            }(cc(t));
          }(this.o_);
        }, i.prototype.enablePersistence = function (t) {
          var e = !1,
              n = !1;
          return t && gs("synchronizeTabs", e = !!t.synchronizeTabs, "experimentalForceOwningTab", n = !!t.experimentalForceOwningTab), e ? this.jf.enableMultiTabIndexedDbPersistence(this) : this.jf.enableIndexedDbPersistence(this, n);
        }, i.prototype.clearPersistence = function () {
          return this.jf.clearIndexedDbPersistence(this);
        }, i.prototype.terminate = function () {
          return this.app._removeServiceInstance("firestore"), this.app._removeServiceInstance("firestore-exp"), this.o_._delete();
        }, i.prototype.waitForPendingWrites = function () {
          return function (t) {
            /**
            * Returns a Promise that resolves when all writes that were pending at the time
            * this method was called received server acknowledgement. An acknowledgement
            * can be either acceptance or rejection.
            */
            return function (t) {
              var r = this,
                  i = new dr();
              return t.di.Ri(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                  var e;
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return e = xu, [4
                        /*yield*/
                        , tc(t)];

                      case 1:
                        return [2
                        /*return*/
                        , e.apply(void 0, [n.sent(), i])];
                    }
                  });
                });
              }), i.promise;
            }(cc(t));
          }(this.o_);
        }, i.prototype.onSnapshotsInSync = function (t) {
          return function (t, r) {
            var i = this,
                o = cc(t),
                u = yr(r) ? r : {
              next: r
            },
                s = new ds(u);
            return t.z_.Ri(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(i, void 0, void 0, function () {
                var t;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return t = function t(_t2, e) {
                        R(_t2).Hu.add(e), // Immediately fire an initial event, indicating all existing listeners
                        // are in-sync.
                        e.next();
                      }, [4
                      /*yield*/
                      , ec(o)];

                    case 1:
                      return t.apply(void 0, [e.sent(), s]), [2
                      /*return*/
                      ];
                  }
                });
              });
            }), function () {
              s.r_(), t.z_.Ri(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(i, void 0, void 0, function () {
                  var t;
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return t = function t(_t3, e) {
                          R(_t3).Hu["delete"](e);
                        }, [4
                        /*yield*/
                        , ec(o)];

                      case 1:
                        return t.apply(void 0, [e.sent(), s]), [2
                        /*return*/
                        ];
                    }
                  });
                });
              });
            };
          }(this.o_, t);
        }, Object.defineProperty(i.prototype, "app", {
          get: function get() {
            if (!this.Gf) throw new L(V.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.Gf;
          },
          enumerable: !1,
          configurable: !0
        }), i.prototype.collection = function (t) {
          try {
            return new Ec(this, wa(this.o_, t));
          } catch (t) {
            throw dc(t, "collection()", "Firestore.collection()");
          }
        }, i.prototype.doc = function (t) {
          try {
            return new pc(this, ba(this.o_, t));
          } catch (t) {
            throw dc(t, "doc()", "Firestore.doc()");
          }
        }, i.prototype.collectionGroup = function (t) {
          try {
            return new bc(this, function (t, e) {
              if (ys("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new L(V.INVALID_ARGUMENT, "Invalid collection ID '" + e + "' passed to function collectionGroup(). Collection IDs must not contain '/'.");
              return new oa(t,
              /* converter= */
              null, function (t) {
                return new Sn($.X(), t);
              }(e));
            }(this.o_, t));
          } catch (t) {
            throw dc(t, "collectionGroup()", "Firestore.collectionGroup()");
          }
        }, i.prototype.runTransaction = function (t) {
          var r = this;
          return function (t, r) {
            return function (t, r) {
              var i = this,
                  o = new dr();
              return t.di.Ri(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(i, void 0, void 0, function () {
                  var e;
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , function (t) {
                          return $a(t).then(function (t) {
                            return t.Nu;
                          });
                        }(t)];

                      case 1:
                        return e = n.sent(), new Ka(t.di, e, r, o).run(), [2
                        /*return*/
                        ];
                    }
                  });
                });
              }), o.promise;
            }(cc(t), function (e) {
              return r(new uc(t, e));
            });
          }(this.o_, function (e) {
            return t(new fc(r, e));
          });
        }, i.prototype.batch = function () {
          var t = this;
          return cc(this.o_), new lc(new ic(this.o_, function (e) {
            return na(t.o_, e);
          }));
        }, i;
      }(vs);
      /**
       * Executes the given `updateFunction` and then attempts to commit the changes
       * applied within the transaction. If any document read within the transaction
       * has changed, Cloud Firestore retries the `updateFunction`. If it fails to
       * commit after 5 attempts, the transaction fails.
       *
       * The maximum number of writes allowed in a single transaction is 500.
       *
       * @param firestore A reference to the Firestore database to run this
       * transaction against.
       * @param updateFunction The function to execute within the transaction context.
       * @return If the transaction completed successfully or was explicitly aborted
       * (the `updateFunction` returned a failed promise), the promise returned by the
       * `updateFunction `is returned here. Otherwise, if the transaction failed, a
       * rejected promise with the corresponding failure error is returned.
       */

      /**
       * The persistence provider included with the full Firestore SDK.
       */


      function cc(t) {
        return t.H_ || hc(t), t.H_.kf(), t.H_;
      }

      function hc(t) {
        var e = t.S_(),
            n = function (t, e, n) {
          return new E(t, e, n.host, n.ssl, n.experimentalForceLongPolling, n.experimentalAutoDetectLongPolling);
        }(t.R_, t.I_, e);

        t.H_ = new Wa(t.P_, t.z_, n);
      }
      /**
       * A reference to a transaction.
       */


      var fc =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, n) || this).U_ = t, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.get = function (t) {
          var e = this,
              n = Tc(t);
          return this.o_.get(n).then(function (t) {
            return new gc(e.U_, t);
          });
        }, n.prototype.set = function (t, e, n) {
          var r = Tc(t);
          return n ? (ms("Transaction.set", n), this.o_.set(r, e, n)) : this.o_.set(r, e), this;
        }, n.prototype.update = function (t, e, n) {
          for (var i, o = [], u = 3; u < arguments.length; u++) {
            o[u - 3] = arguments[u];
          }

          var s = Tc(t);
          return 2 === arguments.length ? this.o_.update(s, e) : (i = this.o_).update.apply(i, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([s, e, n], o)), this;
        }, n.prototype["delete"] = function (t) {
          var e = Tc(t);
          return this.o_["delete"](e), this;
        }, n;
      }(vs),
          lc =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.set = function (t, e, n) {
          var r = Tc(t);
          return n ? (ms("WriteBatch.set", n), this.o_.set(r, e, n)) : this.o_.set(r, e), this;
        }, n.prototype.update = function (t, e, n) {
          for (var i, o = [], u = 3; u < arguments.length; u++) {
            o[u - 3] = arguments[u];
          }

          var s = Tc(t);
          return 2 === arguments.length ? this.o_.update(s, e) : (i = this.o_).update.apply(i, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([s, e, n], o)), this;
        }, n.prototype["delete"] = function (t) {
          var e = Tc(t);
          return this.o_["delete"](e), this;
        }, n.prototype.commit = function () {
          return this.o_.commit();
        }, n;
      }(vs),
          pc =
      /** @class */
      function (i) {
        function o(t, e) {
          var n = this;
          return (n = i.call(this, e) || this).firestore = t, n.Q_ = new js(t), n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(o, i), o.zf = function (t, e, n) {
          if (t.length % 2 != 0) throw new L(V.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.J() + " has " + t.length);
          return new o(e, new ia(e.o_, n, new Z(t)));
        }, o.q_ = function (t, e, n) {
          return new o(e, new ia(e.o_, n, t));
        }, Object.defineProperty(o.prototype, "id", {
          get: function get() {
            return this.o_.id;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(o.prototype, "parent", {
          get: function get() {
            return new Ec(this.firestore, this.o_.parent);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(o.prototype, "path", {
          get: function get() {
            return this.o_.path;
          },
          enumerable: !1,
          configurable: !0
        }), o.prototype.collection = function (t) {
          try {
            return new Ec(this.firestore, wa(this.o_, t));
          } catch (t) {
            throw dc(t, "collection()", "DocumentReference.collection()");
          }
        }, o.prototype.isEqual = function (t) {
          return t instanceof vs && (t = t.o_), t instanceof ia && Ia(this.o_, t);
        }, o.prototype.set = function (t, e) {
          e = ms("DocumentReference.set", e);

          try {
            return function (t, e, n) {
              var r = Is(t.firestore, Ks),
                  i = Nc(t.j_, e, n);
              return na(r, Sa(Ta(r), "setDoc", t.K_, i, null !== t.j_, n).ef(t.K_, an.on()));
            }(this.o_, t, e);
          } catch (t) {
            throw dc(t, "setDoc()", "DocumentReference.set()");
          }
        }, o.prototype.update = function (t, e) {
          for (var n = [], i = 2; i < arguments.length; i++) {
            n[i - 2] = arguments[i];
          }

          try {
            return 1 === arguments.length ? ta(this.o_, t) : ta.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([this.o_, t, e], n));
          } catch (t) {
            throw dc(t, "updateDoc()", "DocumentReference.update()");
          }
        }, o.prototype["delete"] = function () {
          return na(Is((t = this.o_).firestore, Ks), [new In(t.K_, an.on())]);
          var t;
          /**
          * Add a new document to specified `CollectionReference` with the given data,
          * assigning it a document ID automatically.
          *
          * @param reference A reference to the collection to add this document to.
          * @param data An Object containing the data for the new document.
          * @return A Promise resolved with a `DocumentReference` pointing to the
          * newly created document after it has been written to the backend (Note that it
          * won't resolve while you're offline).
          */
        }, o.prototype.onSnapshot = function () {
          for (var t = this, e = [], n = 0; n < arguments.length; n++) {
            e[n] = arguments[n];
          }

          var r = vc(e),
              i = yc(e, function (e) {
            return new gc(t.firestore, new Hs(t.firestore.o_, t.Q_, e.K_, e.W_, e.metadata, t.o_.j_));
          });
          return ea(this.o_, r, i);
        }, o.prototype.get = function (t) {
          var r = this;
          return ("cache" === (null == t ? void 0 : t.source) ? function (t) {
            var r = this,
                i = Is(t.firestore, Ks),
                o = cc(i),
                u = new Zs(i),
                s = new dr();
            return i.z_.Ri(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , Xa(o)];

                    case 1:
                      return [4
                      /*yield*/
                      , function (t, r, i) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                          var e, o, u;
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return n.trys.push([0, 2,, 3]), [4
                                /*yield*/
                                , function (t, e) {
                                  var n = R(t);
                                  return n.persistence.runTransaction("read document", "readonly", function (t) {
                                    return n.Oc.cs(t, e);
                                  });
                                }(t, r)];

                              case 1:
                                return (e = n.sent()) instanceof xn ? i.resolve(e) : e instanceof kn ? i.resolve(null) : i.reject(new L(V.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3
                                /*break*/
                                , 3];

                              case 2:
                                return o = n.sent(), u = Lr(o, "Failed to get document '" + r + " from cache"), i.reject(u), [3
                                /*break*/
                                , 3];

                              case 3:
                                return [2
                                /*return*/
                                ];
                            }
                          });
                        });
                      }(r.sent(), t.K_, s)];

                    case 2:
                      return r.sent(), [2
                      /*return*/
                      ];
                  }
                });
              });
            }), s.promise.then(function (e) {
              return new Hs(i, u, t.K_, e, new mc(e instanceof xn && e.an,
              /* fromCache= */
              !0), t.j_);
            })
            /**
            * Reads the document referred to by this `DocumentReference` from the server.
            * Returns an error if the network is not available.
            *
            * @return A Promise resolved with a `DocumentSnapshot` containing the
            * current document contents.
            */

            /**
            * Executes the query and returns the results as a `QuerySnapshot` from cache.
            * Returns an error if the document is not currently cached.
            *
            * @return A Promise that will be resolved with the results of the query.
            */
            ;
          }(this.o_) : "server" === (null == t ? void 0 : t.source) ? function (t) {
            var r = this,
                i = Is(t.firestore, Ks),
                o = cc(i),
                u = new dr();
            return i.z_.Ri(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , ec(o)];

                    case 1:
                      return [4
                      /*yield*/
                      , nc(e.sent(), i.z_, t.K_, {
                        source: "server"
                      }, u)];

                    case 2:
                      return e.sent(), [2
                      /*return*/
                      ];
                  }
                });
              });
            }), u.promise.then(function (e) {
              return ra(i, t, e);
            });
          }(this.o_) : function (t) {
            var r = this,
                i = Is(t.firestore, Ks),
                o = cc(i),
                u = new dr();
            return i.z_.Ri(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , ec(o)];

                    case 1:
                      return [4
                      /*yield*/
                      , nc(e.sent(), i.z_, t.K_, {
                        source: "default"
                      }, u)];

                    case 2:
                      return e.sent(), [2
                      /*return*/
                      ];
                  }
                });
              });
            }), u.promise.then(function (e) {
              return ra(i, t, e);
            });
          }(this.o_)).then(function (t) {
            return new gc(r.firestore, new Hs(r.firestore.o_, r.Q_, t.K_, t.W_, t.metadata, r.o_.j_));
          });
        }, o.prototype.withConverter = function (t) {
          return new o(this.firestore, this.o_.withConverter(t));
        }, o;
      }(vs);
      /**
       * Replaces the function name in an error thrown by the firestore-exp API
       * with the function names used in the classic API.
       */


      function dc(t, e, n) {
        return t.message = t.message.replace(e, n), t
        /**
        * Iterates the list of arguments from an `onSnapshot` call and returns the
        * first argument that may be an `SnapshotListenOptions` object. Returns an
        * empty object if none is found.
        */
        ;
      }

      function vc(t) {
        for (var e = 0, n = t; e < n.length; e++) {
          var r = n[e];
          if ("object" == typeof r && !yr(r)) return r;
        }

        return {};
      }
      /**
       * Creates an observer that can be passed to the firestore-exp SDK. The
       * observer converts all observed values into the format expected by the classic
       * SDK.
       *
       * @param args The list of arguments from an `onSnapshot` call.
       * @param wrapper The function that converts the firestore-exp type into the
       * type used by this shim.
       */


      function yc(t, e) {
        var n, r, i;
        return {
          next: function next(t) {
            i.next && i.next(e(t));
          },
          error: null === (n = (i = yr(t[0]) ? t[0] : yr(t[1]) ? t[1] : "function" == typeof t[0] ? {
            next: t[0],
            error: t[1],
            complete: t[2]
          } : {
            next: t[1],
            error: t[2],
            complete: t[3]
          }).error) || void 0 === n ? void 0 : n.bind(i),
          complete: null === (r = i.complete) || void 0 === r ? void 0 : r.bind(i)
        };
      }
      /**
       * Metadata about a snapshot, describing the state of the snapshot.
       */


      var mc =
      /** @class */
      function () {
        function t(t, e) {
          this.hasPendingWrites = t, this.fromCache = e
          /**
          * Returns true if this `SnapshotMetadata` is equal to the provided one.
          *
          * @param other The `SnapshotMetadata` to compare against.
          * @return true if this `SnapshotMetadata` is equal to the provided one.
          */
          ;
        }

        return t.prototype.isEqual = function (t) {
          return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
        }, t;
      }(),
          gc =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, n) || this).U_ = t, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), Object.defineProperty(n.prototype, "ref", {
          get: function get() {
            return new pc(this.U_, this.o_.ref);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "id", {
          get: function get() {
            return this.o_.id;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "metadata", {
          get: function get() {
            return this.o_.metadata;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "exists", {
          get: function get() {
            return this.o_.exists();
          },
          enumerable: !1,
          configurable: !0
        }), n.prototype.data = function (t) {
          return this.o_.data(t);
        }, n.prototype.get = function (t, e) {
          return this.o_.get(t, e);
        }, n.prototype.isEqual = function (t) {
          return Xs(this.o_, t.o_);
        }, n;
      }(vs),
          wc =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.data = function (t) {
          return this.o_.data(t);
        }, n;
      }(gc),
          bc =
      /** @class */
      function (r) {
        function i(t, e) {
          var n = this;
          return (n = r.call(this, e) || this).firestore = t, n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(i, r), i.prototype.where = function (t, e, n) {
          try {
            // The "as string" cast is a little bit of a hack. `where` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new i(this.firestore, sa(this.o_, function (t, e, n) {
              var r = e,
                  i = Bs("where", t);
              return new aa(i, r, n);
            }(t, e, n)));
          } catch (t) {
            throw dc(t, /(orderBy|where)\(\)/, "Query.$1()");
          }
        }, i.prototype.orderBy = function (t, e) {
          try {
            // The "as string" cast is a little bit of a hack. `orderBy` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new i(this.firestore, sa(this.o_, function (t, e) {
              void 0 === e && (e = "asc");
              var n = e,
                  r = Bs("orderBy", t);
              return new ca(r, n);
            }(t, e)));
          } catch (t) {
            throw dc(t, /(orderBy|where)\(\)/, "Query.$1()");
          }
        }, i.prototype.limit = function (t) {
          try {
            return new i(this.firestore, sa(this.o_, function (t) {
              return Es("limit", t), new ha("limit", t, "F"
              /* First */
              );
            }(t)));
          } catch (t) {
            throw dc(t, "limit()", "Query.limit()");
          }
        }, i.prototype.limitToLast = function (t) {
          try {
            return new i(this.firestore, sa(this.o_, function (t) {
              return Es("limitToLast", t), new ha("limitToLast", t, "L"
              /* Last */
              );
            }(t)));
          } catch (t) {
            throw dc(t, "limitToLast()", "Query.limitToLast()");
          }
        }, i.prototype.startAt = function () {
          for (var t = [], e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          }

          try {
            return new i(this.firestore, sa(this.o_, function () {
              for (var t = [], e = 0; e < arguments.length; e++) {
                t[e] = arguments[e];
              }

              return new fa("startAt", t,
              /*before=*/
              !0);
            }.apply(void 0, t)));
          } catch (t) {
            throw dc(t, "startAt()", "Query.startAt()");
          }
        }, i.prototype.startAfter = function () {
          for (var t = [], e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          }

          try {
            return new i(this.firestore, sa(this.o_, function () {
              for (var t = [], e = 0; e < arguments.length; e++) {
                t[e] = arguments[e];
              }

              return new fa("startAfter", t,
              /*before=*/
              !1);
            }.apply(void 0, t)));
          } catch (t) {
            throw dc(t, "startAfter()", "Query.startAfter()");
          }
        }, i.prototype.endBefore = function () {
          for (var t = [], e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          }

          try {
            return new i(this.firestore, sa(this.o_, function () {
              for (var t = [], e = 0; e < arguments.length; e++) {
                t[e] = arguments[e];
              }

              return new la("endBefore", t,
              /*before=*/
              !0);
            }.apply(void 0, t)));
          } catch (t) {
            throw dc(t, "endBefore()", "Query.endBefore()");
          }
        }, i.prototype.endAt = function () {
          for (var t = [], e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          }

          try {
            return new i(this.firestore, sa(this.o_, function () {
              for (var t = [], e = 0; e < arguments.length; e++) {
                t[e] = arguments[e];
              }

              return new la("endAt", t,
              /*before=*/
              !1);
            }.apply(void 0, t)));
          } catch (t) {
            throw dc(t, "endAt()", "Query.endAt()");
          }
        }, i.prototype.isEqual = function (t) {
          return Ea(this.o_, t.o_);
        }, i.prototype.get = function (t) {
          var r = this;
          return ("cache" === (null == t ? void 0 : t.source) ? function (t) {
            var r = this,
                i = Is(t.firestore, Ks),
                o = cc(i),
                u = new Zs(i),
                s = new dr();
            return i.z_.Ri(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , Xa(o)];

                    case 1:
                      return [4
                      /*yield*/
                      , function (t, r, i) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                          var e, o, u, s, a, c;
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return n.trys.push([0, 2,, 3]), [4
                                /*yield*/
                                , ho(t, r,
                                /* usePreviousResults= */
                                !0)];

                              case 1:
                                return e = n.sent(), o = new vu(r, e.Bc), u = o.gh(e.documents), s = o.Zn(u,
                                /* updateLimboDocuments= */
                                !1), i.resolve(s.snapshot), [3
                                /*break*/
                                , 3];

                              case 2:
                                return a = n.sent(), c = Lr(a, "Failed to execute query '" + r + " against cache"), i.reject(c), [3
                                /*break*/
                                , 3];

                              case 3:
                                return [2
                                /*return*/
                                ];
                            }
                          });
                        });
                      }(r.sent(), t.tf, s)];

                    case 2:
                      return r.sent(), [2
                      /*return*/
                      ];
                  }
                });
              });
            }), s.promise.then(function (e) {
              return new $s(i, u, t, e);
            });
          }(this.o_) : "server" === (null == t ? void 0 : t.source) ? function (t) {
            var r = this,
                i = Is(t.firestore, Ks),
                o = cc(i),
                u = new Zs(i),
                s = new dr();
            return i.z_.Ri(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , ec(o)];

                    case 1:
                      return [4
                      /*yield*/
                      , rc(e.sent(), i.z_, t.tf, {
                        source: "server"
                      }, s)];

                    case 2:
                      return e.sent(), [2
                      /*return*/
                      ];
                  }
                });
              });
            }), s.promise.then(function (e) {
              return new $s(i, u, t, e);
            });
          }(this.o_) : function (t) {
            var r = this,
                i = Is(t.firestore, Ks),
                o = cc(i),
                u = new Zs(i);
            ma(t.tf);
            var s = new dr();
            return i.z_.Ri(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , ec(o)];

                    case 1:
                      return [4
                      /*yield*/
                      , rc(e.sent(), i.z_, t.tf, {
                        source: "default"
                      }, s)];

                    case 2:
                      return e.sent(), [2
                      /*return*/
                      ];
                  }
                });
              });
            }), s.promise.then(function (e) {
              return new $s(i, u, t, e);
            });
          }(this.o_)).then(function (t) {
            return new Ic(r.firestore, t);
          });
        }, i.prototype.onSnapshot = function () {
          for (var t = this, e = [], n = 0; n < arguments.length; n++) {
            e[n] = arguments[n];
          }

          var r = vc(e),
              i = yc(e, function (e) {
            return new Ic(t.firestore, e);
          });
          return ea(this.o_, r, i);
        }, i.prototype.withConverter = function (t) {
          return new i(this.firestore, this.o_.withConverter(t));
        }, i;
      }(vs),
          _c =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, n) || this).U_ = t, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), Object.defineProperty(n.prototype, "type", {
          get: function get() {
            return this.o_.type;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "doc", {
          get: function get() {
            return new wc(this.U_, this.o_.doc);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "oldIndex", {
          get: function get() {
            return this.o_.oldIndex;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "newIndex", {
          get: function get() {
            return this.o_.newIndex;
          },
          enumerable: !1,
          configurable: !0
        }), n;
      }(vs),
          Ic =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, n) || this).U_ = t, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), Object.defineProperty(n.prototype, "query", {
          get: function get() {
            return new bc(this.U_, this.o_.query);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "metadata", {
          get: function get() {
            return this.o_.metadata;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "size", {
          get: function get() {
            return this.o_.size;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "empty", {
          get: function get() {
            return this.o_.empty;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "docs", {
          get: function get() {
            var t = this;
            return this.o_.docs.map(function (e) {
              return new wc(t.U_, e);
            });
          },
          enumerable: !1,
          configurable: !0
        }), n.prototype.docChanges = function (t) {
          var e = this;
          return this.o_.docChanges(t).map(function (t) {
            return new _c(e.U_, t);
          });
        }, n.prototype.forEach = function (t, e) {
          var n = this;
          this.o_.forEach(function (r) {
            t.call(e, new wc(n.U_, r));
          });
        }, n.prototype.isEqual = function (t) {
          return Xs(this.o_, t.o_);
        }, n;
      }(vs),
          Ec =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, t, n) || this).firestore = t, r.o_ = n, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), Object.defineProperty(n.prototype, "id", {
          get: function get() {
            return this.o_.id;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "path", {
          get: function get() {
            return this.o_.path;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "parent", {
          get: function get() {
            var t = this.o_.parent;
            return t ? new pc(this.firestore, t) : null;
          },
          enumerable: !1,
          configurable: !0
        }), n.prototype.doc = function (t) {
          try {
            return new pc(this.firestore, void 0 === t ? ba(this.o_) : ba(this.o_, t));
          } catch (t) {
            throw dc(t, "doc()", "CollectionReference.doc()");
          }
        }, n.prototype.add = function (t) {
          var e = this;
          return function (t, e) {
            var n = Is(t.firestore, Ks),
                r = ba(t),
                i = Nc(t.j_, e);
            return na(n, Sa(Ta(t.firestore), "addDoc", r.K_, i, null !== t.j_, {}).ef(r.K_, an.exists(!1))).then(function () {
              return r;
            });
          }(this.o_, t).then(function (t) {
            return new pc(e.firestore, t);
          });
        }, n.prototype.isEqual = function (t) {
          return Ia(this.o_, t.o_);
        }, n.prototype.withConverter = function (t) {
          return new n(this.firestore, this.o_.withConverter(t));
        }, n;
      }(bc);

      function Tc(t) {
        return t instanceof vs && (t = t.o_), Is(t, ia)
        /**
        * Converts custom model object of type T into DocumentData by applying the
        * converter if it exists.
        *
        * This function is used when converting user objects to DocumentData
        * because we want to provide the user with a more specific error message if
        * their set() or fails due to invalid data originating from a toFirestore()
        * call.
        */
        ;
      }

      function Nc(t, e, n) {
        // Cast to `any` in order to satisfy the union type constraint on
        // toFirestore().
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // The objects that are a part of this API are exposed to third-parties as
      // compiled javascript so we want to flag our private members with a leading
      // underscore to discourage their use.

      /**
       * A `FieldPath` refers to a field in a document. The path may consist of a
       * single field name (referring to a top-level field in the document), or a list
       * of field names (referring to a nested field in the document).
       */


      var Ac =
      /** @class */
      function (e) {
        /**
         * Creates a FieldPath from the provided field names. If more than one field
         * name is provided, the path will point to a nested field in a document.
         *
         * @param fieldNames A list of field names.
         */
        function n() {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n];
          }

          return e.call(this, new (Gs.bind.apply(Gs, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([void 0], t)))()) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.documentId = function () {
          /**
           * Internal Note: The backend doesn't technically support querying by
           * document ID. Instead it queries by the entire document name (full path
           * included), but in the cases we currently support documentId(), the net
           * effect is the same.
           */
          return new n(X.et().J());
        }, n.prototype.isEqual = function (t) {
          return t instanceof vs && (t = t.o_), t instanceof Gs && this.o_.G_.isEqual(t.G_);
        }, n;
      }(vs),
          Dc =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.serverTimestamp = function () {
          var t = new Ds("serverTimestamp");
          return t.c_ = "FieldValue.serverTimestamp", new n(t);
        }, n["delete"] = function () {
          var t = new Ns("deleteField");
          return t.c_ = "FieldValue.delete", new n(t);
        }, n.arrayUnion = function () {
          for (var t = [], e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          }

          var r =
          /**
          * Returns a special value that can be used with {@link setDoc()} or {@link
          * updateDoc()} that tells the server to union the given elements with any array
          * value that already exists on the server. Each specified element that doesn't
          * already exist in the array will be added to the end. If the field being
          * modified is not already an array it will be overwritten with an array
          * containing exactly the specified elements.
          *
          * @param elements The elements to union into the array.
          * @return The `FieldValue` sentinel for use in a call to `setDoc()` or
          * `updateDoc()`.
          */
          function () {
            for (var t = [], e = 0; e < arguments.length; e++) {
              t[e] = arguments[e];
            } // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.


            return new xs("arrayUnion", t);
          }.apply(void 0, t);

          return r.c_ = "FieldValue.arrayUnion", new n(r);
        }, n.arrayRemove = function () {
          for (var t = [], e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          }

          var r = function () {
            for (var t = [], e = 0; e < arguments.length; e++) {
              t[e] = arguments[e];
            } // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.


            return new ks("arrayRemove", t);
          }.apply(void 0, t);

          return r.c_ = "FieldValue.arrayRemove", new n(r);
        }, n.increment = function (t) {
          var e = function (t) {
            return new Os("increment", t);
          }(t);

          return e.c_ = "FieldValue.increment", new n(e);
        }, n.prototype.isEqual = function (t) {
          return this.o_.isEqual(t.o_);
        }, n;
      }(vs),
          xc = {
        Firestore: ac,
        GeoPoint: Ss,
        Timestamp: Q,
        Blob: Ms,
        Transaction: fc,
        WriteBatch: lc,
        DocumentReference: pc,
        DocumentSnapshot: gc,
        Query: bc,
        QueryDocumentSnapshot: wc,
        QuerySnapshot: Ic,
        CollectionReference: Ec,
        FieldPath: Ac,
        FieldValue: Dc,
        setLogLevel: function setLogLevel(t) {
          var e;
          e = t, A.setLogLevel(e);
        },
        CACHE_SIZE_UNLIMITED: -1
      };
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Configures Firestore as part of the Firebase SDK by calling registerService.
       *
       * @param firebase The FirebaseNamespace to register Firestore with
       * @param firestoreFactory A factory function that returns a new Firestore
       *    instance.
       */

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Registers the main Firestore build with the components framework.
       * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
       */


      function kc(t) {
        !function (t, e) {
          t.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_5__["Component"]("firestore", function (t) {
            return function (t, e) {
              return new ac(t, new Ks(t, e), new sc());
            }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
          }, "PUBLIC"
          /* PUBLIC */
          ).setServiceProps(Object.assign({}, xc)));
        }(t), t.registerVersion("@firebase/firestore", "2.0.4");
      }

      kc(_firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"]); //# sourceMappingURL=index.esm.js.map

      /***/
    },

    /***/
    "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js ***!
      \*********************************************************************/

    /*! exports provided: default, ErrorCode, Event, EventType, Stat, WebChannel, XhrIo, createWebChannelTransport, getStatEventTarget */

    /***/
    function node_modulesFirebaseWebchannelWrapperDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorCode", function () {
        return ErrorCode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Event", function () {
        return Event;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventType", function () {
        return EventType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Stat", function () {
        return Stat;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebChannel", function () {
        return WebChannel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XhrIo", function () {
        return XhrIo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createWebChannelTransport", function () {
        return createWebChannelTransport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStatEventTarget", function () {
        return getStatEventTarget;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
      var h,
          goog = goog || {},
          k = commonjsGlobal || self;

      function aa() {}

      function ba(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length;
      }

      function n(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b;
      }

      function ca(a) {
        return Object.prototype.hasOwnProperty.call(a, da) && a[da] || (a[da] = ++ea);
      }

      var da = "closure_uid_" + (1E9 * Math.random() >>> 0),
          ea = 0;

      function fa(a, b, c) {
        return a.call.apply(a.bind, arguments);
      }

      function ha(a, b, c) {
        if (!a) throw Error();

        if (2 < arguments.length) {
          var d = Array.prototype.slice.call(arguments, 2);
          return function () {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e);
          };
        }

        return function () {
          return a.apply(b, arguments);
        };
      }

      function p(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = fa : p = ha;
        return p.apply(null, arguments);
      }

      function ja(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
          var d = c.slice();
          d.push.apply(d, arguments);
          return a.apply(this, d);
        };
      }

      function q() {
        return Date.now();
      }

      function r(a, b) {
        function c() {}

        c.prototype = b.prototype;
        a.X = b.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;

        a.Kb = function (d, e, f) {
          for (var g = Array(arguments.length - 2), m = 2; m < arguments.length; m++) {
            g[m - 2] = arguments[m];
          }

          return b.prototype[e].apply(d, g);
        };
      }

      function t() {
        this.j = this.j;
        this.i = this.i;
      }

      var ka = 0;
      t.prototype.j = !1;

      t.prototype.ja = function () {
        if (!this.j && (this.j = !0, this.G(), 0 != ka)) {
          var a = ca(this);
        }
      };

      t.prototype.G = function () {
        if (this.i) for (; this.i.length;) {
          this.i.shift()();
        }
      };

      var ma = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      } : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);

        for (var c = 0; c < a.length; c++) {
          if (c in a && a[c] === b) return c;
        }

        return -1;
      },
          na = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c);
      } : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) {
          f in e && b.call(c, e[f], f, a);
        }
      };

      function oa(a) {
        a: {
          var b = pa;

          for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) {
            if (e in d && b.call(void 0, d[e], e, a)) {
              b = e;
              break a;
            }
          }

          b = -1;
        }

        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
      }

      function qa(a) {
        return Array.prototype.concat.apply([], arguments);
      }

      function ra(a) {
        var b = a.length;

        if (0 < b) {
          for (var c = Array(b), d = 0; d < b; d++) {
            c[d] = a[d];
          }

          return c;
        }

        return [];
      }

      function sa(a) {
        return /^[\s\xa0]*$/.test(a);
      }

      var ta = String.prototype.trim ? function (a) {
        return a.trim();
      } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };

      function v(a, b) {
        return -1 != a.indexOf(b);
      }

      function ua(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
      }

      var w;

      a: {
        var va = k.navigator;

        if (va) {
          var wa = va.userAgent;

          if (wa) {
            w = wa;
            break a;
          }
        }

        w = "";
      }

      function za(a, b, c) {
        for (var d in a) {
          b.call(c, a[d], d, a);
        }
      }

      function Aa(a) {
        var b = {};

        for (var c in a) {
          b[c] = a[c];
        }

        return b;
      }

      var Ba = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

      function Ca(a, b) {
        var c, d;

        for (var e = 1; e < arguments.length; e++) {
          d = arguments[e];

          for (c in d) {
            a[c] = d[c];
          }

          for (var f = 0; f < Ba.length; f++) {
            c = Ba[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
          }
        }
      }

      function Da(a) {
        Da[" "](a);
        return a;
      }

      Da[" "] = aa;

      function Ea(a, b) {
        var c = Fa;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
      }

      var Ga = v(w, "Opera"),
          x = v(w, "Trident") || v(w, "MSIE"),
          Ha = v(w, "Edge"),
          Ia = Ha || x,
          Ja = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge"),
          Ka = v(w.toLowerCase(), "webkit") && !v(w, "Edge");

      function La() {
        var a = k.document;
        return a ? a.documentMode : void 0;
      }

      var Ma;

      a: {
        var Na = "",
            Oa = function () {
          var a = w;
          if (Ja) return /rv:([^\);]+)(\)|;)/.exec(a);
          if (Ha) return /Edge\/([\d\.]+)/.exec(a);
          if (x) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
          if (Ka) return /WebKit\/(\S+)/.exec(a);
          if (Ga) return /(?:Version)[ \/]?(\S+)/.exec(a);
        }();

        Oa && (Na = Oa ? Oa[1] : "");

        if (x) {
          var Pa = La();

          if (null != Pa && Pa > parseFloat(Na)) {
            Ma = String(Pa);
            break a;
          }
        }

        Ma = Na;
      }

      var Fa = {};

      function Qa(a) {
        return Ea(a, function () {
          {
            var b = 0;
            var e = ta(String(Ma)).split("."),
                f = ta(String(a)).split("."),
                g = Math.max(e.length, f.length);

            for (var m = 0; 0 == b && m < g; m++) {
              var c = e[m] || "",
                  d = f[m] || "";

              do {
                c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
                d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
                if (0 == c[0].length && 0 == d[0].length) break;
                b = ua(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || ua(0 == c[2].length, 0 == d[2].length) || ua(c[2], d[2]);
                c = c[3];
                d = d[3];
              } while (0 == b);
            }
          }
          return 0 <= b;
        });
      }

      var Ra;

      if (k.document && x) {
        var Sa = La();
        Ra = Sa ? Sa : parseInt(Ma, 10) || void 0;
      } else Ra = void 0;

      var Ta = Ra;

      var Ua = !x || 9 <= Number(Ta),
          Va = x && !Qa("9"),
          Wa = function () {
        if (!k.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
          get: function get() {
            a = !0;
          }
        });

        try {
          k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
        } catch (c) {}

        return a;
      }();

      function y(a, b) {
        this.type = a;
        this.a = this.target = b;
        this.defaultPrevented = !1;
      }

      y.prototype.b = function () {
        this.defaultPrevented = !0;
      };

      function z(a, b) {
        y.call(this, a ? a.type : "");
        this.relatedTarget = this.a = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.c = null;

        if (a) {
          var c = this.type = a.type,
              d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
          this.target = a.target || a.srcElement;
          this.a = b;

          if (b = a.relatedTarget) {
            if (Ja) {
              a: {
                try {
                  Da(b.nodeName);
                  var e = !0;
                  break a;
                } catch (f) {}

                e = !1;
              }

              e || (b = null);
            }
          } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);

          this.relatedTarget = b;
          d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
          this.button = a.button;
          this.key = a.key || "";
          this.ctrlKey = a.ctrlKey;
          this.altKey = a.altKey;
          this.shiftKey = a.shiftKey;
          this.metaKey = a.metaKey;
          this.pointerId = a.pointerId || 0;
          this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Xa[a.pointerType] || "";
          this.c = a;
          a.defaultPrevented && this.b();
        }
      }

      r(z, y);
      var Xa = {
        2: "touch",
        3: "pen",
        4: "mouse"
      };

      z.prototype.b = function () {
        z.X.b.call(this);
        var a = this.c;
        if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Va) try {
          if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
        } catch (b) {}
      };

      var A = "closure_listenable_" + (1E6 * Math.random() | 0),
          Ya = 0;

      function Za(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.ca = e;
        this.key = ++Ya;
        this.Y = this.Z = !1;
      }

      function $a(a) {
        a.Y = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.ca = null;
      }

      function ab(a) {
        this.src = a;
        this.a = {};
        this.b = 0;
      }

      ab.prototype.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.b++);
        var g = bb(a, b, d, e);
        -1 < g ? (b = a[g], c || (b.Z = !1)) : (b = new Za(b, this.src, f, !!d, e), b.Z = c, a.push(b));
        return b;
      };

      function cb(a, b) {
        var c = b.type;

        if (c in a.a) {
          var d = a.a[c],
              e = ma(d, b),
              f;
          (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
          f && ($a(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        }
      }

      function bb(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
          var f = a[e];
          if (!f.Y && f.listener == b && f.capture == !!c && f.ca == d) return e;
        }

        return -1;
      }

      var db = "closure_lm_" + (1E6 * Math.random() | 0),
          eb = {};

      function gb(a, b, c, d, e) {
        if (d && d.once) return hb(a, b, c, d, e);

        if (Array.isArray(b)) {
          for (var f = 0; f < b.length; f++) {
            gb(a, b[f], c, d, e);
          }

          return null;
        }

        c = ib(c);
        return a && a[A] ? a.va(b, c, n(d) ? !!d.capture : !!d, e) : jb(a, b, c, !1, d, e);
      }

      function jb(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = n(e) ? !!e.capture : !!e;
        if (g && !Ua) return null;
        var m = kb(a);
        m || (a[db] = m = new ab(a));
        c = m.add(b, c, d, g, f);
        if (c.proxy) return c;
        d = lb();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Wa || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(mb(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
        return c;
      }

      function lb() {
        var a = nb,
            b = Ua ? function (c) {
          return a.call(b.src, b.listener, c);
        } : function (c) {
          c = a.call(b.src, b.listener, c);
          if (!c) return c;
        };
        return b;
      }

      function hb(a, b, c, d, e) {
        if (Array.isArray(b)) {
          for (var f = 0; f < b.length; f++) {
            hb(a, b[f], c, d, e);
          }

          return null;
        }

        c = ib(c);
        return a && a[A] ? a.wa(b, c, n(d) ? !!d.capture : !!d, e) : jb(a, b, c, !0, d, e);
      }

      function ob(a, b, c, d, e) {
        if (Array.isArray(b)) for (var f = 0; f < b.length; f++) {
          ob(a, b[f], c, d, e);
        } else (d = n(d) ? !!d.capture : !!d, c = ib(c), a && a[A]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = bb(f, c, d, e), -1 < c && ($a(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = kb(a)) && (b = a.a[b.toString()], a = -1, b && (a = bb(b, c, d, e)), (c = -1 < a ? b[a] : null) && pb(c));
      }

      function pb(a) {
        if ("number" !== typeof a && a && !a.Y) {
          var b = a.src;
          if (b && b[A]) cb(b.c, a);else {
            var c = a.type,
                d = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(mb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            (c = kb(b)) ? (cb(c, a), 0 == c.b && (c.src = null, b[db] = null)) : $a(a);
          }
        }
      }

      function mb(a) {
        return a in eb ? eb[a] : eb[a] = "on" + a;
      }

      function qb(a, b) {
        var c = a.listener,
            d = a.ca || a.src;
        a.Z && pb(a);
        return c.call(d, b);
      }

      function nb(a, b) {
        if (a.Y) return !0;

        if (!Ua) {
          if (!b) a: {
            b = ["window", "event"];

            for (var c = k, d = 0; d < b.length; d++) {
              if (c = c[b[d]], null == c) {
                b = null;
                break a;
              }
            }

            b = c;
          }
          b = new z(b, this);
          return qb(a, b);
        }

        return qb(a, new z(b, this));
      }

      function kb(a) {
        a = a[db];
        return a instanceof ab ? a : null;
      }

      var sb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

      function ib(a) {
        if ("function" === typeof a) return a;
        a[sb] || (a[sb] = function (b) {
          return a.handleEvent(b);
        });
        return a[sb];
      }

      function D() {
        t.call(this);
        this.c = new ab(this);
        this.J = this;
        this.C = null;
      }

      r(D, t);
      D.prototype[A] = !0;
      h = D.prototype;

      h.addEventListener = function (a, b, c, d) {
        gb(this, a, b, c, d);
      };

      h.removeEventListener = function (a, b, c, d) {
        ob(this, a, b, c, d);
      };

      function E(a, b) {
        var c,
            d = a.C;
        if (d) for (c = []; d; d = d.C) {
          c.push(d);
        }
        a = a.J;
        d = b.type || b;
        if ("string" === typeof b) b = new y(b, a);else if (b instanceof y) b.target = b.target || a;else {
          var e = b;
          b = new y(d, a);
          Ca(b, e);
        }
        e = !0;
        if (c) for (var f = c.length - 1; 0 <= f; f--) {
          var g = b.a = c[f];
          e = tb(g, d, !0, b) && e;
        }
        g = b.a = a;
        e = tb(g, d, !0, b) && e;
        e = tb(g, d, !1, b) && e;
        if (c) for (f = 0; f < c.length; f++) {
          g = b.a = c[f], e = tb(g, d, !1, b) && e;
        }
      }

      h.G = function () {
        D.X.G.call(this);

        if (this.c) {
          var a = this.c,
              c;

          for (c in a.a) {
            for (var d = a.a[c], e = 0; e < d.length; e++) {
              $a(d[e]);
            }

            delete a.a[c];
            a.b--;
          }
        }

        this.C = null;
      };

      h.va = function (a, b, c, d) {
        return this.c.add(String(a), b, !1, c, d);
      };

      h.wa = function (a, b, c, d) {
        return this.c.add(String(a), b, !0, c, d);
      };

      function tb(a, b, c, d) {
        b = a.c.a[String(b)];
        if (!b) return !0;
        b = b.concat();

        for (var e = !0, f = 0; f < b.length; ++f) {
          var g = b[f];

          if (g && !g.Y && g.capture == c) {
            var m = g.listener,
                l = g.ca || g.src;
            g.Z && cb(a.c, g);
            e = !1 !== m.call(l, d) && e;
          }
        }

        return e && !d.defaultPrevented;
      }

      var ub = k.JSON.stringify;

      function vb() {
        this.b = this.a = null;
      }

      var xb = new (
      /** @class */
      function () {
        function class_1(a, b) {
          this.c = a;
          this.f = b;
          this.b = 0;
          this.a = null;
        }

        class_1.prototype.get = function () {
          var a;
          0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
          return a;
        };

        return class_1;
      }())(function () {
        return new wb();
      }, function (a) {
        a.reset();
      });

      vb.prototype.add = function (a, b) {
        var c = xb.get();
        c.set(a, b);
        this.b ? this.b.next = c : this.a = c;
        this.b = c;
      };

      function yb() {
        var a = zb,
            b = null;
        a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
        return b;
      }

      function wb() {
        this.next = this.b = this.a = null;
      }

      wb.prototype.set = function (a, b) {
        this.a = a;
        this.b = b;
        this.next = null;
      };

      wb.prototype.reset = function () {
        this.next = this.b = this.a = null;
      };

      function Ab(a) {
        k.setTimeout(function () {
          throw a;
        }, 0);
      }

      function Bb(a, b) {
        Cb || Db();
        Eb || (Cb(), Eb = !0);
        zb.add(a, b);
      }

      var Cb;

      function Db() {
        var a = k.Promise.resolve(void 0);

        Cb = function Cb() {
          a.then(Fb);
        };
      }

      var Eb = !1,
          zb = new vb();

      function Fb() {
        for (var a; a = yb();) {
          try {
            a.a.call(a.b);
          } catch (c) {
            Ab(c);
          }

          var b = xb;
          b.f(a);
          100 > b.b && (b.b++, a.next = b.a, b.a = a);
        }

        Eb = !1;
      }

      function Gb(a, b) {
        D.call(this);
        this.b = a || 1;
        this.a = b || k;
        this.f = p(this.Za, this);
        this.g = q();
      }

      r(Gb, D);
      h = Gb.prototype;
      h.aa = !1;
      h.M = null;

      h.Za = function () {
        if (this.aa) {
          var a = q() - this.g;
          0 < a && a < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), E(this, "tick"), this.aa && (Hb(this), this.start()));
        }
      };

      h.start = function () {
        this.aa = !0;
        this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q());
      };

      function Hb(a) {
        a.aa = !1;
        a.M && (a.a.clearTimeout(a.M), a.M = null);
      }

      h.G = function () {
        Gb.X.G.call(this);
        Hb(this);
        delete this.a;
      };

      function Ib(a, b, c) {
        if ("function" === typeof a) c && (a = p(a, c));else if (a && "function" == typeof a.handleEvent) a = p(a.handleEvent, a);else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0);
      }

      function Jb(a) {
        a.a = Ib(function () {
          a.a = null;
          a.c && (a.c = !1, Jb(a));
        }, a.h);
        var b = a.b;
        a.b = null;
        a.g.apply(null, b);
      }

      var Kb =
      /** @class */
      function (_super) {
        __extends(Kb, _super);

        function Kb(a, b) {
          var _this = _super.call(this) || this;

          _this.g = a;
          _this.h = b;
          _this.b = null;
          _this.c = !1;
          _this.a = null;
          return _this;
        }

        Kb.prototype.f = function (a) {
          this.b = arguments;
          this.a ? this.c = !0 : Jb(this);
        };

        Kb.prototype.G = function () {
          _super.prototype.G.call(this);

          this.a && (k.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null);
        };

        return Kb;
      }(t);

      function F(a) {
        t.call(this);
        this.b = a;
        this.a = {};
      }

      r(F, t);
      var Lb = [];

      function Mb(a, b, c, d) {
        Array.isArray(c) || (c && (Lb[0] = c.toString()), c = Lb);

        for (var e = 0; e < c.length; e++) {
          var f = gb(b, c[e], d || a.handleEvent, !1, a.b || a);
          if (!f) break;
          a.a[f.key] = f;
        }
      }

      function Nb(a) {
        za(a.a, function (b, c) {
          this.a.hasOwnProperty(c) && pb(b);
        }, a);
        a.a = {};
      }

      F.prototype.G = function () {
        F.X.G.call(this);
        Nb(this);
      };

      F.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
      };

      function Ob() {
        this.a = !0;
      }

      function Pb(a, b, c, d, e, f) {
        a.info(function () {
          if (a.a) {
            if (f) {
              var g = "";

              for (var m = f.split("&"), l = 0; l < m.length; l++) {
                var u = m[l].split("=");

                if (1 < u.length) {
                  var C = u[0];
                  u = u[1];
                  var B = C.split("_");
                  g = 2 <= B.length && "type" == B[1] ? g + (C + "=" + u + "&") : g + (C + "=redacted&");
                }
              }
            } else g = null;
          } else g = f;
          return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + g;
        });
      }

      function Qb(a, b, c, d, e, f, g) {
        a.info(function () {
          return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + g;
        });
      }

      function G(a, b, c, d) {
        a.info(function () {
          return "XMLHTTP TEXT (" + b + "): " + Rb(a, c) + (d ? " " + d : "");
        });
      }

      function Sb(a, b) {
        a.info(function () {
          return "TIMEOUT: " + b;
        });
      }

      Ob.prototype.info = function () {};

      function Rb(a, b) {
        if (!a.a) return b;
        if (!b) return null;

        try {
          var c = JSON.parse(b);
          if (c) for (a = 0; a < c.length; a++) {
            if (Array.isArray(c[a])) {
              var d = c[a];

              if (!(2 > d.length)) {
                var e = d[1];

                if (Array.isArray(e) && !(1 > e.length)) {
                  var f = e[0];
                  if ("noop" != f && "stop" != f && "close" != f) for (var g = 1; g < e.length; g++) {
                    e[g] = "";
                  }
                }
              }
            }
          }
          return ub(c);
        } catch (m) {
          return b;
        }
      }

      var H = {},
          Tb = null;

      function Ub() {
        return Tb = Tb || new D();
      }

      H.Fa = "serverreachability";

      function Vb(a) {
        y.call(this, H.Fa, a);
      }

      r(Vb, y);

      function I(a) {
        var b = Ub();
        E(b, new Vb(b, a));
      }

      H.STAT_EVENT = "statevent";

      function Wb(a, b) {
        y.call(this, H.STAT_EVENT, a);
        this.stat = b;
      }

      r(Wb, y);

      function J(a) {
        var b = Ub();
        E(b, new Wb(b, a));
      }

      H.Ga = "timingevent";

      function Xb(a) {
        y.call(this, H.Ga, a);
      }

      r(Xb, y);

      function K(a, b) {
        if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
        return k.setTimeout(function () {
          a();
        }, b);
      }

      var Yb = {
        NO_ERROR: 0,
        $a: 1,
        nb: 2,
        mb: 3,
        hb: 4,
        lb: 5,
        ob: 6,
        Da: 7,
        TIMEOUT: 8,
        rb: 9
      };
      var Zb = {
        fb: "complete",
        Bb: "success",
        Ea: "error",
        Da: "abort",
        tb: "ready",
        ub: "readystatechange",
        TIMEOUT: "timeout",
        pb: "incrementaldata",
        sb: "progress",
        ib: "downloadprogress",
        Jb: "uploadprogress"
      };

      function $b() {}

      $b.prototype.a = null;

      function ac(a) {
        var b;
        (b = a.a) || (b = a.a = {});
        return b;
      }

      function bc() {}

      var L = {
        OPEN: "a",
        eb: "b",
        Ea: "c",
        qb: "d"
      };

      function cc() {
        y.call(this, "d");
      }

      r(cc, y);

      function dc() {
        y.call(this, "c");
      }

      r(dc, y);
      var ec;

      function fc() {}

      r(fc, $b);
      ec = new fc();

      function M(a, b, c, d) {
        this.g = a;
        this.c = b;
        this.f = c;
        this.S = d || 1;
        this.J = new F(this);
        this.P = gc;
        a = Ia ? 125 : void 0;
        this.R = new Gb(a);
        this.B = null;
        this.b = !1;
        this.j = this.l = this.i = this.H = this.u = this.T = this.o = null;
        this.s = [];
        this.a = null;
        this.D = 0;
        this.h = this.m = null;
        this.N = -1;
        this.A = !1;
        this.O = 0;
        this.F = null;
        this.V = this.C = this.U = this.I = !1;
      }

      var gc = 45E3,
          hc = {},
          ic = {};
      h = M.prototype;

      h.setTimeout = function (a) {
        this.P = a;
      };

      function jc(a, b, c) {
        a.H = 1;
        a.i = kc(N(b));
        a.j = c;
        a.I = !0;
        lc(a, null);
      }

      function lc(a, b) {
        a.u = q();
        mc(a);
        a.l = N(a.i);
        var c = a.l,
            d = a.S;
        Array.isArray(d) || (d = [String(d)]);
        nc(c.b, "t", d);
        a.D = 0;
        a.a = oc(a.g, a.g.C ? b : null);
        0 < a.O && (a.F = new Kb(p(a.Ca, a, a.a), a.O));
        Mb(a.J, a.a, "readystatechange", a.Xa);
        b = a.B ? Aa(a.B) : {};
        a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b));
        I(1);
        Pb(a.c, a.m, a.l, a.f, a.S, a.j);
      }

      h.Xa = function (a) {
        a = a.target;
        var b = this.F;
        b && 3 == O(a) ? b.f() : this.Ca(a);
      };

      h.Ca = function (a) {
        try {
          if (a == this.a) a: {
            var b = O(this.a),
                c = this.a.ua(),
                d = this.a.W();

            if (!(3 > b || 3 == b && !Ia && !this.a.$())) {
              this.A || 4 != b || 7 == c || (8 == c || 0 >= d ? I(3) : I(2));
              pc(this);
              var e = this.a.W();
              this.N = e;
              var f = this.a.$();
              this.b = 200 == e;
              Qb(this.c, this.m, this.l, this.f, this.S, b, e);

              if (this.b) {
                if (this.U && !this.C) {
                  b: {
                    if (this.a) {
                      var g,
                          m = this.a;

                      if ((g = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !sa(g)) {
                        var l = g;
                        break b;
                      }
                    }

                    l = null;
                  }

                  if (l) G(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"), this.C = !0, qc(this, l);else {
                    this.b = !1;
                    this.h = 3;
                    J(12);
                    P(this);
                    rc(this);
                    break a;
                  }
                }

                this.I ? (sc(this, b, f), Ia && this.b && 3 == b && (Mb(this.J, this.R, "tick", this.Wa), this.R.start())) : (G(this.c, this.f, f, null), qc(this, f));
                4 == b && P(this);
                this.b && !this.A && (4 == b ? uc(this.g, this) : (this.b = !1, mc(this)));
              } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, J(12)) : (this.h = 0, J(13)), P(this), rc(this);
            }
          }
        } catch (u) {} finally {}
      };

      function sc(a, b, c) {
        for (var d = !0; !a.A && a.D < c.length;) {
          var e = vc(a, c);

          if (e == ic) {
            4 == b && (a.h = 4, J(14), d = !1);
            G(a.c, a.f, null, "[Incomplete Response]");
            break;
          } else if (e == hc) {
            a.h = 4;
            J(15);
            G(a.c, a.f, c, "[Invalid Chunk]");
            d = !1;
            break;
          } else G(a.c, a.f, e, null), qc(a, e);
        }

        4 == b && 0 == c.length && (a.h = 1, J(16), d = !1);
        a.b = a.b && d;
        d ? 0 < c.length && !a.V && (a.V = !0, b = a.g, b.a == a && b.U && !b.F && (b.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), wc(b), b.F = !0, J(11))) : (G(a.c, a.f, c, "[Invalid Chunked Response]"), P(a), rc(a));
      }

      h.Wa = function () {
        if (this.a) {
          var a = O(this.a),
              b = this.a.$();
          this.D < b.length && (pc(this), sc(this, a, b), this.b && 4 != a && mc(this));
        }
      };

      function vc(a, b) {
        var c = a.D,
            d = b.indexOf("\n", c);
        if (-1 == d) return ic;
        c = Number(b.substring(c, d));
        if (isNaN(c)) return hc;
        d += 1;
        if (d + c > b.length) return ic;
        b = b.substr(d, c);
        a.D = d + c;
        return b;
      }

      h.cancel = function () {
        this.A = !0;
        P(this);
      };

      function mc(a) {
        a.T = q() + a.P;
        yc(a, a.P);
      }

      function yc(a, b) {
        if (null != a.o) throw Error("WatchDog timer not null");
        a.o = K(p(a.Va, a), b);
      }

      function pc(a) {
        a.o && (k.clearTimeout(a.o), a.o = null);
      }

      h.Va = function () {
        this.o = null;
        var a = q();
        0 <= a - this.T ? (Sb(this.c, this.l), 2 != this.H && (I(3), J(17)), P(this), this.h = 2, rc(this)) : yc(this, this.T - a);
      };

      function rc(a) {
        0 == a.g.v || a.A || uc(a.g, a);
      }

      function P(a) {
        pc(a);
        var b = a.F;
        b && "function" == typeof b.ja && b.ja();
        a.F = null;
        Hb(a.R);
        Nb(a.J);
        a.a && (b = a.a, a.a = null, b.abort(), b.ja());
      }

      function qc(a, b) {
        try {
          var c = a.g;
          if (0 != c.v && (c.a == a || zc(c.b, a))) if (c.I = a.N, !a.C && zc(c.b, a) && 3 == c.v) {
            try {
              var d = c.ka.a.parse(b);
            } catch (tc) {
              d = null;
            }

            if (Array.isArray(d) && 3 == d.length) {
              var e = d;
              if (0 == e[0]) a: {
                if (!c.j) {
                  if (c.a) if (c.a.u + 3E3 < a.u) Ac(c), Bc(c);else break a;
                  Cc(c);
                  J(18);
                }
              } else c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && 0 == c.o && !c.m && (c.m = K(p(c.Sa, c), 6E3));

              if (1 >= Dc(c.b) && c.ea) {
                try {
                  c.ea();
                } catch (tc) {}

                c.ea = void 0;
              }
            } else Q(c, 11);
          } else if ((a.C || c.a == a) && Ac(c), !sa(b)) for (b = d = c.ka.a.parse(b), d = 0; d < b.length; d++) {
            if (e = b[d], c.P = e[0], e = e[1], 2 == c.v) {
              if ("c" == e[0]) {
                c.J = e[1];
                c.ga = e[2];
                var f = e[3];
                null != f && (c.ha = f, c.c.info("VER=" + c.ha));
                var g = e[4];
                null != g && (c.pa = g, c.c.info("SVER=" + c.pa));
                var m = e[5];

                if (null != m && "number" === typeof m && 0 < m) {
                  var l = 1.5 * m;
                  c.D = l;
                  c.c.info("backChannelRequestTimeoutMs_=" + l);
                }

                l = c;
                var u = a.a;

                if (u) {
                  var C = u.a ? u.a.getResponseHeader("X-Client-Wire-Protocol") : null;

                  if (C) {
                    var B = l.b;
                    !B.a && (v(C, "spdy") || v(C, "quic") || v(C, "h2")) && (B.f = B.g, B.a = new Set(), B.b && (Ec(B, B.b), B.b = null));
                  }

                  if (l.A) {
                    var rb = u.a ? u.a.getResponseHeader("X-HTTP-Session-Id") : null;
                    rb && (l.na = rb, R(l.B, l.A, rb));
                  }
                }

                c.v = 3;
                c.f && c.f.ta();
                c.U && (c.N = q() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
                l = c;
                var xa = a;
                l.la = Fc(l, l.C ? l.ga : null, l.fa);

                if (xa.C) {
                  Gc(l.b, xa);
                  var ya = xa,
                      xc = l.D;
                  xc && ya.setTimeout(xc);
                  ya.o && (pc(ya), mc(ya));
                  l.a = xa;
                } else Hc(l);

                0 < c.g.length && Ic(c);
              } else "stop" != e[0] && "close" != e[0] || Q(c, 7);
            } else 3 == c.v && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? Q(c, 7) : Jc(c) : "noop" != e[0] && c.f && c.f.sa(e), c.o = 0);
          }
          I(4);
        } catch (tc) {}
      }

      function Kc(a) {
        if (a.K && "function" == typeof a.K) return a.K();
        if ("string" === typeof a) return a.split("");

        if (ba(a)) {
          for (var b = [], c = a.length, d = 0; d < c; d++) {
            b.push(a[d]);
          }

          return b;
        }

        b = [];
        c = 0;

        for (d in a) {
          b[c++] = a[d];
        }

        return a = b;
      }

      function Lc(a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (ba(a) || "string" === typeof a) na(a, b, void 0);else {
          if (a.L && "function" == typeof a.L) var c = a.L();else if (a.K && "function" == typeof a.K) c = void 0;else if (ba(a) || "string" === typeof a) {
            c = [];

            for (var d = a.length, e = 0; e < d; e++) {
              c.push(e);
            }
          } else for (e in c = [], d = 0, a) {
            c[d++] = e;
          }
          d = Kc(a);
          e = d.length;

          for (var f = 0; f < e; f++) {
            b.call(void 0, d[f], c && c[f], a);
          }
        }
      }

      function S(a, b) {
        this.b = {};
        this.a = [];
        this.c = 0;
        var c = arguments.length;

        if (1 < c) {
          if (c % 2) throw Error("Uneven number of arguments");

          for (var d = 0; d < c; d += 2) {
            this.set(arguments[d], arguments[d + 1]);
          }
        } else if (a) if (a instanceof S) for (c = a.L(), d = 0; d < c.length; d++) {
          this.set(c[d], a.get(c[d]));
        } else for (d in a) {
          this.set(d, a[d]);
        }
      }

      h = S.prototype;

      h.K = function () {
        Mc(this);

        for (var a = [], b = 0; b < this.a.length; b++) {
          a.push(this.b[this.a[b]]);
        }

        return a;
      };

      h.L = function () {
        Mc(this);
        return this.a.concat();
      };

      function Mc(a) {
        if (a.c != a.a.length) {
          for (var b = 0, c = 0; b < a.a.length;) {
            var d = a.a[b];
            T(a.b, d) && (a.a[c++] = d);
            b++;
          }

          a.a.length = c;
        }

        if (a.c != a.a.length) {
          var e = {};

          for (c = b = 0; b < a.a.length;) {
            d = a.a[b], T(e, d) || (a.a[c++] = d, e[d] = 1), b++;
          }

          a.a.length = c;
        }
      }

      h.get = function (a, b) {
        return T(this.b, a) ? this.b[a] : b;
      };

      h.set = function (a, b) {
        T(this.b, a) || (this.c++, this.a.push(a));
        this.b[a] = b;
      };

      h.forEach = function (a, b) {
        for (var c = this.L(), d = 0; d < c.length; d++) {
          var e = c[d],
              f = this.get(e);
          a.call(b, f, e, this);
        }
      };

      function T(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }

      var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

      function Oc(a, b) {
        if (a) {
          a = a.split("&");

          for (var c = 0; c < a.length; c++) {
            var d = a[c].indexOf("="),
                e = null;

            if (0 <= d) {
              var f = a[c].substring(0, d);
              e = a[c].substring(d + 1);
            } else f = a[c];

            b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
          }
        }
      }

      function U(a, b) {
        this.c = this.j = this.f = "";
        this.h = null;
        this.i = this.g = "";
        this.a = !1;

        if (a instanceof U) {
          this.a = void 0 !== b ? b : a.a;
          Pc(this, a.f);
          this.j = a.j;
          Qc(this, a.c);
          Rc(this, a.h);
          this.g = a.g;
          b = a.b;
          var c = new Sc();
          c.c = b.c;
          b.a && (c.a = new S(b.a), c.b = b.b);
          Tc(this, c);
          this.i = a.i;
        } else a && (c = String(a).match(Nc)) ? (this.a = !!b, Pc(this, c[1] || "", !0), this.j = Uc(c[2] || ""), Qc(this, c[3] || "", !0), Rc(this, c[4]), this.g = Uc(c[5] || "", !0), Tc(this, c[6] || "", !0), this.i = Uc(c[7] || "")) : (this.a = !!b, this.b = new Sc(null, this.a));
      }

      U.prototype.toString = function () {
        var a = [],
            b = this.f;
        b && a.push(Vc(b, Wc, !0), ":");
        var c = this.c;
        if (c || "file" == b) a.push("//"), (b = this.j) && a.push(Vc(b, Wc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c));
        if (c = this.g) this.c && "/" != c.charAt(0) && a.push("/"), a.push(Vc(c, "/" == c.charAt(0) ? Xc : Yc, !0));
        (c = this.b.toString()) && a.push("?", c);
        (c = this.i) && a.push("#", Vc(c, Zc));
        return a.join("");
      };

      function N(a) {
        return new U(a);
      }

      function Pc(a, b, c) {
        a.f = c ? Uc(b, !0) : b;
        a.f && (a.f = a.f.replace(/:$/, ""));
      }

      function Qc(a, b, c) {
        a.c = c ? Uc(b, !0) : b;
      }

      function Rc(a, b) {
        if (b) {
          b = Number(b);
          if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
          a.h = b;
        } else a.h = null;
      }

      function Tc(a, b, c) {
        b instanceof Sc ? (a.b = b, $c(a.b, a.a)) : (c || (b = Vc(b, ad)), a.b = new Sc(b, a.a));
      }

      function R(a, b, c) {
        a.b.set(b, c);
      }

      function kc(a) {
        R(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36));
        return a;
      }

      function bd(a) {
        return a instanceof U ? N(a) : new U(a, void 0);
      }

      function cd(a, b, c, d) {
        var e = new U(null, void 0);
        a && Pc(e, a);
        b && Qc(e, b);
        c && Rc(e, c);
        d && (e.g = d);
        return e;
      }

      function Uc(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
      }

      function Vc(a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, dd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
      }

      function dd(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
      }

      var Wc = /[#\/\?@]/g,
          Yc = /[#\?:]/g,
          Xc = /[#\?]/g,
          ad = /[#\?@]/g,
          Zc = /#/g;

      function Sc(a, b) {
        this.b = this.a = null;
        this.c = a || null;
        this.f = !!b;
      }

      function V(a) {
        a.a || (a.a = new S(), a.b = 0, a.c && Oc(a.c, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
      }

      h = Sc.prototype;

      h.add = function (a, b) {
        V(this);
        this.c = null;
        a = W(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b += 1;
        return this;
      };

      function ed(a, b) {
        V(a);
        b = W(a, b);
        T(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, T(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Mc(a)));
      }

      function fd(a, b) {
        V(a);
        b = W(a, b);
        return T(a.a.b, b);
      }

      h.forEach = function (a, b) {
        V(this);
        this.a.forEach(function (c, d) {
          na(c, function (e) {
            a.call(b, e, d, this);
          }, this);
        }, this);
      };

      h.L = function () {
        V(this);

        for (var a = this.a.K(), b = this.a.L(), c = [], d = 0; d < b.length; d++) {
          for (var e = a[d], f = 0; f < e.length; f++) {
            c.push(b[d]);
          }
        }

        return c;
      };

      h.K = function (a) {
        V(this);
        var b = [];
        if ("string" === typeof a) fd(this, a) && (b = qa(b, this.a.get(W(this, a))));else {
          a = this.a.K();

          for (var c = 0; c < a.length; c++) {
            b = qa(b, a[c]);
          }
        }
        return b;
      };

      h.set = function (a, b) {
        V(this);
        this.c = null;
        a = W(this, a);
        fd(this, a) && (this.b -= this.a.get(a).length);
        this.a.set(a, [b]);
        this.b += 1;
        return this;
      };

      h.get = function (a, b) {
        if (!a) return b;
        a = this.K(a);
        return 0 < a.length ? String(a[0]) : b;
      };

      function nc(a, b, c) {
        ed(a, b);
        0 < c.length && (a.c = null, a.a.set(W(a, b), ra(c)), a.b += c.length);
      }

      h.toString = function () {
        if (this.c) return this.c;
        if (!this.a) return "";

        for (var a = [], b = this.a.L(), c = 0; c < b.length; c++) {
          var d = b[c],
              e = encodeURIComponent(String(d));
          d = this.K(d);

          for (var f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
            a.push(g);
          }
        }

        return this.c = a.join("&");
      };

      function W(a, b) {
        b = String(b);
        a.f && (b = b.toLowerCase());
        return b;
      }

      function $c(a, b) {
        b && !a.f && (V(a), a.c = null, a.a.forEach(function (c, d) {
          var e = d.toLowerCase();
          d != e && (ed(this, d), nc(this, e, c));
        }, a));
        a.f = b;
      }

      var gd =
      /** @class */
      function () {
        function gd(a, b) {
          this.b = a;
          this.a = b;
        }

        return gd;
      }();

      function hd(a) {
        this.g = a || id;
        k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ia && k.ia.ya && k.ia.ya() && k.ia.ya().Lb);
        this.f = a ? this.g : 1;
        this.a = null;
        1 < this.f && (this.a = new Set());
        this.b = null;
        this.c = [];
      }

      var id = 10;

      function jd(a) {
        return a.b ? !0 : a.a ? a.a.size >= a.f : !1;
      }

      function Dc(a) {
        return a.b ? 1 : a.a ? a.a.size : 0;
      }

      function zc(a, b) {
        return a.b ? a.b == b : a.a ? a.a.has(b) : !1;
      }

      function Ec(a, b) {
        a.a ? a.a.add(b) : a.b = b;
      }

      function Gc(a, b) {
        a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a["delete"](b);
      }

      hd.prototype.cancel = function () {
        var e_1, _a;

        this.c = kd(this);
        if (this.b) this.b.cancel(), this.b = null;else if (this.a && 0 !== this.a.size) {
          try {
            for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var a = _c.value;
              a.cancel();
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }

          this.a.clear();
        }
      };

      function kd(a) {
        var e_2, _a;

        if (null != a.b) return a.c.concat(a.b.s);

        if (null != a.a && 0 !== a.a.size) {
          var b = a.c;

          try {
            for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var c = _c.value;
              b = b.concat(c.s);
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_2) throw e_2.error;
            }
          }

          return b;
        }

        return ra(a.c);
      }

      function ld() {}

      ld.prototype.stringify = function (a) {
        return k.JSON.stringify(a, void 0);
      };

      ld.prototype.parse = function (a) {
        return k.JSON.parse(a, void 0);
      };

      function md() {
        this.a = new ld();
      }

      function nd(a, b, c) {
        var d = c || "";

        try {
          Lc(a, function (e, f) {
            var g = e;
            n(e) && (g = ub(e));
            b.push(d + f + "=" + encodeURIComponent(g));
          });
        } catch (e) {
          throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
        }
      }

      function od(a, b) {
        var c = new Ob();

        if (k.Image) {
          var d = new Image();
          d.onload = ja(pd, c, d, "TestLoadImage: loaded", !0, b);
          d.onerror = ja(pd, c, d, "TestLoadImage: error", !1, b);
          d.onabort = ja(pd, c, d, "TestLoadImage: abort", !1, b);
          d.ontimeout = ja(pd, c, d, "TestLoadImage: timeout", !1, b);
          k.setTimeout(function () {
            if (d.ontimeout) d.ontimeout();
          }, 1E4);
          d.src = a;
        } else b(!1);
      }

      function pd(a, b, c, d, e) {
        try {
          b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
        } catch (f) {}
      }

      var qd = k.JSON.parse;

      function X(a) {
        D.call(this);
        this.headers = new S();
        this.H = a || null;
        this.b = !1;
        this.s = this.a = null;
        this.B = "";
        this.h = 0;
        this.f = "";
        this.g = this.A = this.l = this.u = !1;
        this.o = 0;
        this.m = null;
        this.I = rd;
        this.D = this.F = !1;
      }

      r(X, D);
      var rd = "",
          sd = /^https?$/i,
          td = ["POST", "PUT"];
      h = X.prototype;

      h.ba = function (a, b, c, d) {
        if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.B = a;
        this.f = "";
        this.h = 0;
        this.u = !1;
        this.b = !0;
        this.a = new XMLHttpRequest();
        this.s = this.H ? ac(this.H) : ac(ec);
        this.a.onreadystatechange = p(this.za, this);

        try {
          this.A = !0, this.a.open(b, String(a), !0), this.A = !1;
        } catch (f) {
          ud(this, f);
          return;
        }

        a = c || "";
        var e = new S(this.headers);
        d && Lc(d, function (f, g) {
          e.set(g, f);
        });
        d = oa(e.L());
        c = k.FormData && a instanceof k.FormData;
        !(0 <= ma(td, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function (f, g) {
          this.a.setRequestHeader(g, f);
        }, this);
        this.I && (this.a.responseType = this.I);
        "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);

        try {
          vd(this), 0 < this.o && ((this.D = wd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Ib(this.xa, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
        } catch (f) {
          ud(this, f);
        }
      };

      function wd(a) {
        return x && Qa(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout;
      }

      function pa(a) {
        return "content-type" == a.toLowerCase();
      }

      h.xa = function () {
        "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, E(this, "timeout"), this.abort(8));
      };

      function ud(a, b) {
        a.b = !1;
        a.a && (a.g = !0, a.a.abort(), a.g = !1);
        a.f = b;
        a.h = 5;
        xd(a);
        yd(a);
      }

      function xd(a) {
        a.u || (a.u = !0, E(a, "complete"), E(a, "error"));
      }

      h.abort = function (a) {
        this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, E(this, "complete"), E(this, "abort"), yd(this));
      };

      h.G = function () {
        this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), yd(this, !0));
        X.X.G.call(this);
      };

      h.za = function () {
        this.j || (this.A || this.l || this.g ? zd(this) : this.Ua());
      };

      h.Ua = function () {
        zd(this);
      };

      function zd(a) {
        if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != O(a) || 2 != a.W())) if (a.l && 4 == O(a)) Ib(a.za, 0, a);else if (E(a, "readystatechange"), 4 == O(a)) {
          a.b = !1;

          try {
            {
              var l = a.W();

              a: switch (l) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  var b = !0;
                  break a;

                default:
                  b = !1;
              }

              var c;

              if (!(c = b)) {
                var d;

                if (d = 0 === l) {
                  var e = String(a.B).match(Nc)[1] || null;

                  if (!e && k.self && k.self.location) {
                    var f = k.self.location.protocol;
                    e = f.substr(0, f.length - 1);
                  }

                  d = !sd.test(e ? e.toLowerCase() : "");
                }

                c = d;
              }

              var g = c;
            }
            if (g) E(a, "complete"), E(a, "success");else {
              a.h = 6;

              try {
                var m = 2 < O(a) ? a.a.statusText : "";
              } catch (l) {
                m = "";
              }

              a.f = m + " [" + a.W() + "]";
              xd(a);
            }
          } finally {
            yd(a);
          }
        }
      }

      function yd(a, b) {
        if (a.a) {
          vd(a);
          var c = a.a,
              d = a.s[0] ? aa : null;
          a.a = null;
          a.s = null;
          b || E(a, "ready");

          try {
            c.onreadystatechange = d;
          } catch (e) {}
        }
      }

      function vd(a) {
        a.a && a.D && (a.a.ontimeout = null);
        a.m && (k.clearTimeout(a.m), a.m = null);
      }

      function O(a) {
        return a.a ? a.a.readyState : 0;
      }

      h.W = function () {
        try {
          return 2 < O(this) ? this.a.status : -1;
        } catch (a) {
          return -1;
        }
      };

      h.$ = function () {
        try {
          return this.a ? this.a.responseText : "";
        } catch (a) {
          return "";
        }
      };

      h.Pa = function (a) {
        if (this.a) {
          var b = this.a.responseText;
          a && 0 == b.indexOf(a) && (b = b.substring(a.length));
          return qd(b);
        }
      };

      h.ua = function () {
        return this.h;
      };

      h.Qa = function () {
        return "string" === typeof this.f ? this.f : String(this.f);
      };

      function Ad(a) {
        var b = "";
        za(a, function (c, d) {
          b += d;
          b += ":";
          b += c;
          b += "\r\n";
        });
        return b;
      }

      function Bd(a, b, c) {
        a: {
          for (d in c) {
            var d = !1;
            break a;
          }

          d = !0;
        }

        d || (c = Ad(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : R(a, b, c));
      }

      function Cd(a, b, c) {
        return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
      }

      function Dd(a) {
        this.pa = 0;
        this.g = [];
        this.c = new Ob();
        this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.V = this.i = this.O = this.l = null;
        this.Oa = this.R = 0;
        this.La = Cd("failFast", !1, a);
        this.H = this.m = this.j = this.h = this.f = null;
        this.S = !0;
        this.I = this.oa = this.P = -1;
        this.T = this.o = this.u = 0;
        this.Ha = Cd("baseRetryDelayMs", 5E3, a);
        this.Ra = Cd("retryDelaySeedMs", 1E4, a);
        this.Ma = Cd("forwardChannelMaxRetries", 2, a);
        this.ma = Cd("forwardChannelRequestTimeoutMs", 2E4, a);
        this.Na = a && a.g || void 0;
        this.D = void 0;
        this.C = a && a.supportsCrossDomainXhr || !1;
        this.J = "";
        this.b = new hd(a && a.concurrentRequestLimit);
        this.ka = new md();
        this.da = a && a.fastHandshake || !1;
        this.Ia = a && a.b || !1;
        a && a.f && (this.c.a = !1);
        a && a.forceLongPolling && (this.S = !1);
        this.U = !this.da && this.S && a && a.detectBufferingProxy || !1;
        this.ea = void 0;
        this.N = 0;
        this.F = !1;
        this.s = null;
        (this.Ka = a && a.c || !1) && this.c.info("Opt-in to enable Chrome Origin Trials.");
      }

      h = Dd.prototype;
      h.ha = 8;
      h.v = 1;

      function Jc(a) {
        Ed(a);

        if (3 == a.v) {
          var b = a.R++,
              c = N(a.B);
          R(c, "SID", a.J);
          R(c, "RID", b);
          R(c, "TYPE", "terminate");
          Fd(a, c);
          b = new M(a, a.c, b, void 0);
          b.H = 2;
          b.i = kc(N(c));
          c = !1;
          k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.i.toString(), ""));
          !c && k.Image && (new Image().src = b.i, c = !0);
          c || (b.a = oc(b.g, null), b.a.ba(b.i));
          b.u = q();
          mc(b);
        }

        Gd(a);
      }

      function Bc(a) {
        a.a && (wc(a), a.a.cancel(), a.a = null);
      }

      function Ed(a) {
        Bc(a);
        a.j && (k.clearTimeout(a.j), a.j = null);
        Ac(a);
        a.b.cancel();
        a.h && ("number" === typeof a.h && k.clearTimeout(a.h), a.h = null);
      }

      function Hd(a, b) {
        a.g.push(new gd(a.Oa++, b));
        3 == a.v && Ic(a);
      }

      function Ic(a) {
        jd(a.b) || a.h || (a.h = !0, Bb(a.Ba, a), a.u = 0);
      }

      function Id(a, b) {
        if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0)) return !1;
        if (a.h) return a.g = b.s.concat(a.g), !0;
        if (1 == a.v || 2 == a.v || a.u >= (a.La ? 0 : a.Ma)) return !1;
        a.h = K(p(a.Ba, a, b), Jd(a, a.u));
        a.u++;
        return !0;
      }

      h.Ba = function (a) {
        if (this.h) if (this.h = null, 1 == this.v) {
          if (!a) {
            this.R = Math.floor(1E5 * Math.random());
            a = this.R++;
            var b = new M(this, this.c, a, void 0),
                c = this.l;
            this.O && (c ? (c = Aa(c), Ca(c, this.O)) : c = this.O);
            null === this.i && (b.B = c);
            var d;
            if (this.da) a: {
              for (var e = d = 0; e < this.g.length; e++) {
                b: {
                  var f = this.g[e];

                  if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                    f = f.length;
                    break b;
                  }

                  f = void 0;
                }

                if (void 0 === f) break;
                d += f;

                if (4096 < d) {
                  d = e;
                  break a;
                }

                if (4096 === d || e === this.g.length - 1) {
                  d = e + 1;
                  break a;
                }
              }

              d = 1E3;
            } else d = 1E3;
            d = Kd(this, b, d);
            e = N(this.B);
            R(e, "RID", a);
            R(e, "CVER", 22);
            this.A && R(e, "X-HTTP-Session-Id", this.A);
            Fd(this, e);
            this.i && c && Bd(e, this.i, c);
            Ec(this.b, b);
            this.Ia && R(e, "TYPE", "init");
            this.da ? (R(e, "$req", d), R(e, "SID", "null"), b.U = !0, jc(b, e, null)) : jc(b, e, d);
            this.v = 2;
          }
        } else 3 == this.v && (a ? Ld(this, a) : 0 == this.g.length || jd(this.b) || Ld(this));
      };

      function Ld(a, b) {
        var c;
        b ? c = b.f : c = a.R++;
        var d = N(a.B);
        R(d, "SID", a.J);
        R(d, "RID", c);
        R(d, "AID", a.P);
        Fd(a, d);
        a.i && a.l && Bd(d, a.i, a.l);
        c = new M(a, a.c, c, a.u + 1);
        null === a.i && (c.B = a.l);
        b && (a.g = b.s.concat(a.g));
        b = Kd(a, c, 1E3);
        c.setTimeout(Math.round(.5 * a.ma) + Math.round(.5 * a.ma * Math.random()));
        Ec(a.b, c);
        jc(c, d, b);
      }

      function Fd(a, b) {
        a.f && Lc({}, function (c, d) {
          R(b, d, c);
        });
      }

      function Kd(a, b, c) {
        c = Math.min(a.g.length, c);
        var d = a.f ? p(a.f.Ja, a.f, a) : null;

        a: for (var e = a.g, f = -1;;) {
          var g = ["count=" + c];
          -1 == f ? 0 < c ? (f = e[0].b, g.push("ofs=" + f)) : f = 0 : g.push("ofs=" + f);

          for (var m = !0, l = 0; l < c; l++) {
            var u = e[l].b,
                C = e[l].a;
            u -= f;
            if (0 > u) f = Math.max(0, e[l].b - 100), m = !1;else try {
              nd(C, g, "req" + u + "_");
            } catch (B) {
              d && d(C);
            }
          }

          if (m) {
            d = g.join("&");
            break a;
          }
        }

        a = a.g.splice(0, c);
        b.s = a;
        return d;
      }

      function Hc(a) {
        a.a || a.j || (a.T = 1, Bb(a.Aa, a), a.o = 0);
      }

      function Cc(a) {
        if (a.a || a.j || 3 <= a.o) return !1;
        a.T++;
        a.j = K(p(a.Aa, a), Jd(a, a.o));
        a.o++;
        return !0;
      }

      h.Aa = function () {
        this.j = null;
        Md(this);

        if (this.U && !(this.F || null == this.a || 0 >= this.N)) {
          var a = 2 * this.N;
          this.c.info("BP detection timer enabled: " + a);
          this.s = K(p(this.Ta, this), a);
        }
      };

      h.Ta = function () {
        this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, J(10), Bc(this), Md(this));
      };

      function wc(a) {
        null != a.s && (k.clearTimeout(a.s), a.s = null);
      }

      function Md(a) {
        a.a = new M(a, a.c, "rpc", a.T);
        null === a.i && (a.a.B = a.l);
        a.a.O = 0;
        var b = N(a.la);
        R(b, "RID", "rpc");
        R(b, "SID", a.J);
        R(b, "CI", a.H ? "0" : "1");
        R(b, "AID", a.P);
        Fd(a, b);
        R(b, "TYPE", "xmlhttp");
        a.i && a.l && Bd(b, a.i, a.l);
        a.D && a.a.setTimeout(a.D);
        var c = a.a;
        a = a.ga;
        c.H = 1;
        c.i = kc(N(b));
        c.j = null;
        c.I = !0;
        lc(c, a);
      }

      h.Sa = function () {
        null != this.m && (this.m = null, Bc(this), Cc(this), J(19));
      };

      function Ac(a) {
        null != a.m && (k.clearTimeout(a.m), a.m = null);
      }

      function uc(a, b) {
        var c = null;

        if (a.a == b) {
          Ac(a);
          wc(a);
          a.a = null;
          var d = 2;
        } else if (zc(a.b, b)) c = b.s, Gc(a.b, b), d = 1;else return;

        a.I = b.N;
        if (0 != a.v) if (b.b) {
          if (1 == d) {
            c = b.j ? b.j.length : 0;
            b = q() - b.u;
            var e = a.u;
            d = Ub();
            E(d, new Xb(d, c, b, e));
            Ic(a);
          } else Hc(a);
        } else if (e = b.h, 3 == e || 0 == e && 0 < a.I || !(1 == d && Id(a, b) || 2 == d && Cc(a))) switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
          case 1:
            Q(a, 5);
            break;

          case 4:
            Q(a, 10);
            break;

          case 3:
            Q(a, 6);
            break;

          default:
            Q(a, 2);
        }
      }

      function Jd(a, b) {
        var c = a.Ha + Math.floor(Math.random() * a.Ra);
        a.f || (c *= 2);
        return c * b;
      }

      function Q(a, b) {
        a.c.info("Error code " + b);

        if (2 == b) {
          var c = null;
          a.f && (c = null);
          var d = p(a.Ya, a);
          c || (c = new U("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Pc(c, "https"), kc(c));
          od(c.toString(), d);
        } else J(2);

        a.v = 0;
        a.f && a.f.ra(b);
        Gd(a);
        Ed(a);
      }

      h.Ya = function (a) {
        a ? (this.c.info("Successfully pinged google.com"), J(2)) : (this.c.info("Failed to ping google.com"), J(1));
      };

      function Gd(a) {
        a.v = 0;
        a.I = -1;

        if (a.f) {
          if (0 != kd(a.b).length || 0 != a.g.length) a.b.c.length = 0, ra(a.g), a.g.length = 0;
          a.f.qa();
        }
      }

      function Fc(a, b, c) {
        var d = bd(c);
        if ("" != d.c) b && Qc(d, b + "." + d.c), Rc(d, d.h);else {
          var e = k.location;
          d = cd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
        }
        a.V && za(a.V, function (f, g) {
          R(d, g, f);
        });
        b = a.A;
        c = a.na;
        b && c && R(d, b, c);
        R(d, "VER", a.ha);
        Fd(a, d);
        return d;
      }

      function oc(a, b) {
        if (b && !a.C) throw Error("Can't create secondary domain capable XhrIo object.");
        b = new X(a.Na);
        b.F = a.C;
        return b;
      }

      function Nd() {}

      h = Nd.prototype;

      h.ta = function () {};

      h.sa = function () {};

      h.ra = function () {};

      h.qa = function () {};

      h.Ja = function () {};

      function Od() {
        if (x && !(10 <= Number(Ta))) throw Error("Environmental error: no available transport.");
      }

      Od.prototype.a = function (a, b) {
        return new Y(a, b);
      };

      function Y(a, b) {
        D.call(this);
        this.a = new Dd(b);
        this.o = a;
        this.b = b && b.messageUrlParams || null;
        a = b && b.messageHeaders || null;
        b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
          "X-Client-Protocol": "webchannel"
        });
        this.a.l = a;
        a = b && b.initMessageHeaders || null;
        b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = {
          "X-WebChannel-Content-Type": b.messageContentType
        });
        b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = {
          "X-WebChannel-Client-Profile": b.a
        });
        this.a.O = a;
        (a = b && b.httpHeadersOverwriteParam) && !sa(a) && (this.a.i = a);
        this.m = b && b.supportsCrossDomainXhr || !1;
        this.l = b && b.sendRawJson || !1;
        (b = b && b.httpSessionIdParam) && !sa(b) && (this.a.A = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
        this.f = new Z(this);
      }

      r(Y, D);

      Y.prototype.g = function () {
        this.a.f = this.f;
        this.m && (this.a.C = !0);
        var a = this.a,
            b = this.o,
            c = this.b || void 0;
        J(0);
        a.fa = b;
        a.V = c || {};
        a.H = a.S;
        a.B = Fc(a, null, a.fa);
        Ic(a);
      };

      Y.prototype.close = function () {
        Jc(this.a);
      };

      Y.prototype.h = function (a) {
        if ("string" === typeof a) {
          var b = {};
          b.__data__ = a;
          Hd(this.a, b);
        } else this.l ? (b = {}, b.__data__ = ub(a), Hd(this.a, b)) : Hd(this.a, a);
      };

      Y.prototype.G = function () {
        this.a.f = null;
        delete this.f;
        Jc(this.a);
        delete this.a;
        Y.X.G.call(this);
      };

      function Pd(a) {
        cc.call(this);
        var b = a.__sm__;

        if (b) {
          a: {
            for (var c in b) {
              a = c;
              break a;
            }

            a = void 0;
          }

          (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
        } else this.data = a;
      }

      r(Pd, cc);

      function Qd() {
        dc.call(this);
        this.status = 1;
      }

      r(Qd, dc);

      function Z(a) {
        this.a = a;
      }

      r(Z, Nd);

      Z.prototype.ta = function () {
        E(this.a, "a");
      };

      Z.prototype.sa = function (a) {
        E(this.a, new Pd(a));
      };

      Z.prototype.ra = function (a) {
        E(this.a, new Qd(a));
      };

      Z.prototype.qa = function () {
        E(this.a, "b");
      };
      /*
      Copyright 2017 Google LLC
      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
      */


      Od.prototype.createWebChannel = Od.prototype.a;
      Y.prototype.send = Y.prototype.h;
      Y.prototype.open = Y.prototype.g;
      Y.prototype.close = Y.prototype.close;
      Yb.NO_ERROR = 0;
      Yb.TIMEOUT = 8;
      Yb.HTTP_ERROR = 6;
      Zb.COMPLETE = "complete";
      bc.EventType = L;
      L.OPEN = "a";
      L.CLOSE = "b";
      L.ERROR = "c";
      L.MESSAGE = "d";
      D.prototype.listen = D.prototype.va;
      X.prototype.listenOnce = X.prototype.wa;
      X.prototype.getLastError = X.prototype.Qa;
      X.prototype.getLastErrorCode = X.prototype.ua;
      X.prototype.getStatus = X.prototype.W;
      X.prototype.getResponseJson = X.prototype.Pa;
      X.prototype.getResponseText = X.prototype.$;
      X.prototype.send = X.prototype.ba;

      var createWebChannelTransport = function createWebChannelTransport() {
        return new Od();
      };

      var getStatEventTarget = function getStatEventTarget() {
        return Ub();
      };

      var ErrorCode = Yb;
      var EventType = Zb;
      var Event = H;
      var Stat = {
        gb: 0,
        jb: 1,
        kb: 2,
        Db: 3,
        Ib: 4,
        Fb: 5,
        Gb: 6,
        Eb: 7,
        Cb: 8,
        Hb: 9,
        PROXY: 10,
        NOPROXY: 11,
        Ab: 12,
        wb: 13,
        xb: 14,
        vb: 15,
        yb: 16,
        zb: 17,
        bb: 18,
        ab: 19,
        cb: 20
      };
      var WebChannel = bc;
      var XhrIo = X;
      var esm = {
        createWebChannelTransport: createWebChannelTransport,
        getStatEventTarget: getStatEventTarget,
        ErrorCode: ErrorCode,
        EventType: EventType,
        Event: Event,
        Stat: Stat,
        WebChannel: WebChannel,
        XhrIo: XhrIo
      };
      /* harmony default export */

      __webpack_exports__["default"] = esm; //# sourceMappingURL=index.esm.js.map

      /***/
    },

    /***/
    "./node_modules/firebase/firestore/dist/index.esm.js":
    /*!***********************************************************!*\
      !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
      \***********************************************************/

    /*! no exports provided */

    /***/
    function node_modulesFirebaseFirestoreDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/firestore */
      "./node_modules/@firebase/firestore/dist/index.esm.js"); //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProdutosProdutosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>produtos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size=\"6\" *ngFor=\"let produto of produtos; let i=index;\">\n        <ion-card>\n          <img class=\"full-image\" src=\"{{produto.url}}\" alt=\"{{produto.servico}}\"/>\n          <ion-card-header>\n            <ion-card-title>{{produto.servico}}</ion-card-title>\n             <ion-card-title>{{produto.preco}}</ion-card-title>\n           \n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-card-subtitle>{{produto.descricao}}</ion-card-subtitle>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/produtos/produtos-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/produtos/produtos-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ProdutosPageRoutingModule */

    /***/
    function srcAppProdutosProdutosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutosPageRoutingModule", function () {
        return ProdutosPageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _produtos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./produtos.page */
      "./src/app/produtos/produtos.page.ts");

      var routes = [{
        path: '',
        component: _produtos_page__WEBPACK_IMPORTED_MODULE_3__["ProdutosPage"]
      }];

      var ProdutosPageRoutingModule = function ProdutosPageRoutingModule() {
        _classCallCheck(this, ProdutosPageRoutingModule);
      };

      ProdutosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProdutosPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/produtos/produtos.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/produtos/produtos.module.ts ***!
      \*********************************************/

    /*! exports provided: ProdutosPageModule */

    /***/
    function srcAppProdutosProdutosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutosPageModule", function () {
        return ProdutosPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _produtos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./produtos-routing.module */
      "./src/app/produtos/produtos-routing.module.ts");
      /* harmony import */


      var _produtos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./produtos.page */
      "./src/app/produtos/produtos.page.ts");

      var ProdutosPageModule = function ProdutosPageModule() {
        _classCallCheck(this, ProdutosPageModule);
      };

      ProdutosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _produtos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProdutosPageRoutingModule"]],
        declarations: [_produtos_page__WEBPACK_IMPORTED_MODULE_6__["ProdutosPage"]]
      })], ProdutosPageModule);
      /***/
    },

    /***/
    "./src/app/produtos/produtos.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/produtos/produtos.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppProdutosProdutosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".full-image {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHV0b3MvcHJvZHV0b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG9zL3Byb2R1dG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/produtos/produtos.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/produtos/produtos.page.ts ***!
      \*******************************************/

    /*! exports provided: ProdutosPage */

    /***/
    function srcAppProdutosProdutosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutosPage", function () {
        return ProdutosPage;
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


      var _services_produtos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/produtos.service */
      "./src/app/services/produtos.service.ts");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

      var ProdutosPage = /*#__PURE__*/function () {
        function ProdutosPage(prodServices, afs) {
          _classCallCheck(this, ProdutosPage);

          this.prodServices = prodServices;
          this.afs = afs;
          this.produtos = [];
        }

        _createClass(ProdutosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.afs.collection("produtos").get().subscribe(function (res) {
              res.forEach(function (doc) {
                _this2.produtos.push(doc.data());
              });
              console.log(_this2.produtos);
            });
          }
        }]);

        return ProdutosPage;
      }();

      ProdutosPage.ctorParameters = function () {
        return [{
          type: _services_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }];
      };

      ProdutosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produtos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./produtos.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./produtos.page.scss */
        "./src/app/produtos/produtos.page.scss"))["default"]]
      })], ProdutosPage);
      /***/
    },

    /***/
    "./src/app/services/produtos.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/produtos.service.ts ***!
      \**********************************************/

    /*! exports provided: ProdutosService */

    /***/
    function srcAppServicesProdutosServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutosService", function () {
        return ProdutosService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

      var ProdutosService = /*#__PURE__*/function () {
        function ProdutosService(firestore) {
          _classCallCheck(this, ProdutosService);

          this.firestore = firestore;
        }

        _createClass(ProdutosService, [{
          key: "getProdutos",
          value: function getProdutos() {
            return this.firestore.collection("produtos").snapshotChanges();
          }
        }]);

        return ProdutosService;
      }();

      ProdutosService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      ProdutosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProdutosService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=produtos-produtos-module-es5.js.map