(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'NOTIFICATIONS' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p *ngIf=\"notifications.length == 0\" style=\"margin-top: 5px; text-align: center\">{{ 'NO_NOTIFICATIONS_FOUND' | translate }}</p>\n  <ion-list lines=\"none\">\n    <ion-item *ngFor=\"let n of notifications\">\n      <ion-label>\n        <ion-text>\n          <h3>{{n.title}}</h3>\n        </ion-text>\n        <ion-text>\n          <p style=\"white-space: pre-wrap;\">{{n.description}}</p>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/notifications/notifications-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/notifications/notifications-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: NotificationsPageRoutingModule */

    /***/
    function srcAppNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function () {
        return NotificationsPageRoutingModule;
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


      var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notifications.page */
      "./src/app/notifications/notifications.page.ts");

      var routes = [{
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
      }];

      var NotificationsPageRoutingModule = function NotificationsPageRoutingModule() {
        _classCallCheck(this, NotificationsPageRoutingModule);
      };

      NotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotificationsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/notifications/notifications.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/notifications/notifications.module.ts ***!
      \*******************************************************/

    /*! exports provided: NotificationsPageModule */

    /***/
    function srcAppNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
        return NotificationsPageModule;
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


      var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notifications-routing.module */
      "./src/app/notifications/notifications-routing.module.ts");
      /* harmony import */


      var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notifications.page */
      "./src/app/notifications/notifications.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var NotificationsPageModule = function NotificationsPageModule() {
        _classCallCheck(this, NotificationsPageModule);
      };

      NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
      })], NotificationsPageModule);
      /***/
    },

    /***/
    "./src/app/notifications/notifications.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/notifications/notifications.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppNotificationsNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h3 {\n  font-size: 20px;\n  font-weight: 500;\n}\n\np {\n  white-space: pre-wrap;\n  color: #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIGNvbG9yOiAjNTU1O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/notifications/notifications.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/notifications/notifications.page.ts ***!
      \*****************************************************/

    /*! exports provided: NotificationsPage */

    /***/
    function srcAppNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
        return NotificationsPage;
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


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/common.service */
      "./src/app/services/common.service.ts");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");

      var NotificationsPage = /*#__PURE__*/function () {
        function NotificationsPage(db, cs, afAuth) {
          _classCallCheck(this, NotificationsPage);

          this.db = db;
          this.cs = cs;
          this.afAuth = afAuth;
          this.notifications = [];
        }

        _createClass(NotificationsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.cs.showLoader();
            this.db.list('notifications').snapshotChanges().subscribe(function (snap) {
              if (snap != null) {
                var tmp = [];
                snap.forEach(function (n) {
                  if (n.payload.val().type == 'drivers' || n.payload.val().type == 'both') tmp.push(Object.assign({
                    key: n.key
                  }, n.payload.val()));
                  return false;
                });
                _this.notifications = tmp.reverse();
              }

              _this.cs.hideLoader();
            });
          }
        }]);

        return NotificationsPage;
      }();

      NotificationsPage.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }];
      };

      NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./notifications.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./notifications.page.scss */
        "./src/app/notifications/notifications.page.scss"))["default"]]
      })], NotificationsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=notifications-notifications-module-es5.js.map