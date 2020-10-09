(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guard_route_guard_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/route-guard.guard */ "./src/app/guard/route-guard.guard.ts");
/* harmony import */ var _guard_staff_provisioning_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/staff-provisioning.guard */ "./src/app/guard/staff-provisioning.guard.ts");






const routes = [
    { path: '', redirectTo: 'provisioning', pathMatch: 'full' },
    // {
    //   path: 'login',
    //   loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    // },
    {
        path: 'provisioning',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-user-provisioning-user-provisioning-module */ "modules-user-provisioning-user-provisioning-module").then(__webpack_require__.bind(null, /*! ./modules/user-provisioning/user-provisioning.module */ "./src/app/modules/user-provisioning/user-provisioning.module.ts")).then(m => m.UserProvisioningModule),
        canActivate: [_guard_route_guard_guard__WEBPACK_IMPORTED_MODULE_2__["RouteGuardGuard"], _guard_staff_provisioning_guard__WEBPACK_IMPORTED_MODULE_3__["StaffProvisioningGuard"]]
    },
    {
        path: 'staffs',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-staff-staff-module */ "default~modules-organization-organization-module~modules-staff-staff-module").then(__webpack_require__.bind(null, /*! ./modules/staff/staff.module */ "./src/app/modules/staff/staff.module.ts")).then(m => m.StaffModule),
        canActivate: [_guard_route_guard_guard__WEBPACK_IMPORTED_MODULE_2__["RouteGuardGuard"]]
    },
    {
        path: 'organization',
        loadChildren: () => Promise.all(/*! import() | modules-organization-organization-module */[__webpack_require__.e("default~modules-organization-organization-module~modules-staff-staff-module"), __webpack_require__.e("modules-organization-organization-module")]).then(__webpack_require__.bind(null, /*! ./modules/organization/organization.module */ "./src/app/modules/organization/organization.module.ts")).then(m => m.OrganizationModule),
        canActivate: [_guard_route_guard_guard__WEBPACK_IMPORTED_MODULE_2__["RouteGuardGuard"]]
    },
    {
        path: 'applications',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-application-application-module */ "modules-application-application-module").then(__webpack_require__.bind(null, /*! ./modules/application/application.module */ "./src/app/modules/application/application.module.ts")).then(m => m.ApplicationModule),
        canActivate: [_guard_route_guard_guard__WEBPACK_IMPORTED_MODULE_2__["RouteGuardGuard"]]
    },
    {
        path: 'businessroles',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-business-role-business-role-module */ "modules-business-role-business-role-module").then(__webpack_require__.bind(null, /*! ./modules/business-role/business-role.module */ "./src/app/modules/business-role/business-role.module.ts")).then(m => m.BusinessRoleModule),
        canActivate: [_guard_route_guard_guard__WEBPACK_IMPORTED_MODULE_2__["RouteGuardGuard"]]
    },
    {
        path: 'jobduties',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-job-duty-job-duty-module */ "modules-job-duty-job-duty-module").then(__webpack_require__.bind(null, /*! ./modules/job-duty/job-duty.module */ "./src/app/modules/job-duty/job-duty.module.ts")).then(m => m.JobDutyModule),
        canActivate: [_guard_route_guard_guard__WEBPACK_IMPORTED_MODULE_2__["RouteGuardGuard"]]
    },
    {
        path: 'channels',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-channel-channel-module */ "modules-channel-channel-module").then(__webpack_require__.bind(null, /*! ./modules/channel/channel.module */ "./src/app/modules/channel/channel.module.ts")).then(m => m.ChannelModule),
        canActivate: [_guard_route_guard_guard__WEBPACK_IMPORTED_MODULE_2__["RouteGuardGuard"]]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_component_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/component/settings/settings.component */ "./src/app/shared/component/settings/settings.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var jk_wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jk-wait */ "./node_modules/jk-wait/__ivy_ngcc__/fesm2015/jk-wait.js");





class AppComponent {
    ngOnInit() {
        localStorage.setItem('user', '{"username":"admin","password":"admin","name":"Joe Evans","type":2}');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 0, consts: [[1, "header"], [1, "flex-1"], [1, "main"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "UAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ng-jk-wait");
    } }, directives: [_shared_component_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__["SettingsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], jk_wait__WEBPACK_IMPORTED_MODULE_3__["JkWaitComponent"]], styles: [".flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksT0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtMSB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcbiAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _store_reducers_hierarchy_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducers/hierarchy.reducer */ "./src/app/store/reducers/hierarchy.reducer.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var jk_wait__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jk-wait */ "./node_modules/jk-wait/__ivy_ngcc__/fesm2015/jk-wait.js");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            jk_wait__WEBPACK_IMPORTED_MODULE_7__["JkWaitModule"].forRoot({ type: 'SPINNER' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({ hierarchy: _store_reducers_hierarchy_reducer__WEBPACK_IMPORTED_MODULE_3__["hierarchyReducer"] })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], jk_wait__WEBPACK_IMPORTED_MODULE_7__["JkWaitModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    jk_wait__WEBPACK_IMPORTED_MODULE_7__["JkWaitModule"].forRoot({ type: 'SPINNER' }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({ hierarchy: _store_reducers_hierarchy_reducer__WEBPACK_IMPORTED_MODULE_3__["hierarchyReducer"] })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data/user.ts":
/*!******************************!*\
  !*** ./src/app/data/user.ts ***!
  \******************************/
/*! exports provided: IPermission, DATA_USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPermission", function() { return IPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_USERS", function() { return DATA_USERS; });
var IPermission;
(function (IPermission) {
    IPermission[IPermission["SUPER_ADMIN"] = 1] = "SUPER_ADMIN";
    IPermission[IPermission["DEPARTMENT_ADMIN"] = 2] = "DEPARTMENT_ADMIN";
})(IPermission || (IPermission = {}));
const DATA_USERS = [
    {
        username: 'superadmin',
        password: 'admin',
        name: 'Joe Evans',
        type: IPermission.SUPER_ADMIN
    },
    {
        username: 'admin',
        password: 'admin',
        name: 'Cris Patt',
        type: IPermission.DEPARTMENT_ADMIN
    }
];


/***/ }),

/***/ "./src/app/guard/route-guard.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guard/route-guard.guard.ts ***!
  \********************************************/
/*! exports provided: RouteGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardGuard", function() { return RouteGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RouteGuardGuard {
    canActivate(next, state) {
        const ret = localStorage.getItem('user') !== null;
        return ret;
    }
}
RouteGuardGuard.ɵfac = function RouteGuardGuard_Factory(t) { return new (t || RouteGuardGuard)(); };
RouteGuardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouteGuardGuard, factory: RouteGuardGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteGuardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/guard/staff-provisioning.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/guard/staff-provisioning.guard.ts ***!
  \***************************************************/
/*! exports provided: StaffProvisioningGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffProvisioningGuard", function() { return StaffProvisioningGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/user */ "./src/app/data/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class StaffProvisioningGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        const ret = JSON.parse(localStorage.getItem('user'));
        const isSuperAdmin = ret.type === _data_user__WEBPACK_IMPORTED_MODULE_1__["IPermission"].SUPER_ADMIN;
        if (isSuperAdmin) {
            this.router.navigate(['organization']);
        }
        return !isSuperAdmin;
    }
}
StaffProvisioningGuard.ɵfac = function StaffProvisioningGuard_Factory(t) { return new (t || StaffProvisioningGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StaffProvisioningGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StaffProvisioningGuard, factory: StaffProvisioningGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaffProvisioningGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/component/settings/settings.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/component/settings/settings.component.ts ***!
  \*****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_local_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/local-data.service */ "./src/app/shared/service/local-data.service.ts");





function SettingsComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SettingsComponent_ul_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Organizations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Business Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Job Duties");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Channels");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SettingsComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_ul_0_li_1_Template, 3, 0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SettingsComponent_ul_0_ng_container_2_Template, 16, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isSuperAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSuperAdmin);
} }
class SettingsComponent {
    constructor(location, router, localDataService) {
        this.location = location;
        this.router = router;
        this.localDataService = localDataService;
        this.subs = [];
        this.isLoginPage = false;
        this.isSuperAdmin = false;
    }
    ngOnInit() {
        this.subs[0] = this.router.events.subscribe(x => {
            var _a;
            this.isLoginPage = this.location.path().indexOf('login') >= 0;
            this.isSuperAdmin = ((_a = JSON.parse(localStorage.getItem('user'))) === null || _a === void 0 ? void 0 : _a.type) === 1;
        });
    }
    ngOnDestroy() {
        this.subs.forEach(x => x.unsubscribe());
    }
    logout() {
        this.localDataService.clear();
        localStorage.removeItem('user');
        this.router.navigate(['login']);
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_local_data_service__WEBPACK_IMPORTED_MODULE_3__["LocalDataService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 1, vars: 1, consts: [["class", "nav justify-content-end", 4, "ngIf"], [1, "nav", "justify-content-end"], ["class", "nav-item", 4, "ngIf"], [4, "ngIf"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/organization", 1, "nav-link"], ["routerLink", "/applications", 1, "nav-link"], ["routerLink", "/businessroles", 1, "nav-link"], ["routerLink", "/jobduties", 1, "nav-link"], ["routerLink", "/channels", 1, "nav-link"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SettingsComponent_ul_0_Template, 3, 2, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoginPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC1zaXplOi45cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_local_data_service__WEBPACK_IMPORTED_MODULE_3__["LocalDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/hierarchy-node-list/hierarchy-node-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/hierarchy-node-list/hierarchy-node-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HierarchyNodeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HierarchyNodeListComponent", function() { return HierarchyNodeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hierarchy_node_hierarchy_node_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hierarchy-node/hierarchy-node.component */ "./src/app/shared/components/hierarchy-node/hierarchy-node.component.ts");




const _c0 = ["appHierarchyNodeList", ""];
function HierarchyNodeListComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 1);
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodeTemplate", ctx_r0.nodeTemplate)("node", node_r1);
} }
class HierarchyNodeListComponent {
    constructor() {
        this.subNodes = [];
    }
}
HierarchyNodeListComponent.ɵfac = function HierarchyNodeListComponent_Factory(t) { return new (t || HierarchyNodeListComponent)(); };
HierarchyNodeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HierarchyNodeListComponent, selectors: [["", "appHierarchyNodeList", ""]], inputs: { nodeTemplate: "nodeTemplate", subNodes: "subNodes" }, attrs: _c0, decls: 1, vars: 1, consts: [["appHierarchyNode", "", 3, "nodeTemplate", "node", 4, "ngFor", "ngForOf"], ["appHierarchyNode", "", 3, "nodeTemplate", "node"]], template: function HierarchyNodeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HierarchyNodeListComponent_li_0_Template, 1, 2, "li", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subNodes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _hierarchy_node_hierarchy_node_component__WEBPACK_IMPORTED_MODULE_2__["HierarchyNodeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hpZXJhcmNoeS1ub2RlLWxpc3QvaGllcmFyY2h5LW5vZGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HierarchyNodeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[appHierarchyNodeList]',
                templateUrl: './hierarchy-node-list.component.html',
                styleUrls: ['./hierarchy-node-list.component.scss']
            }]
    }], null, { nodeTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subNodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/hierarchy-node/hierarchy-node.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/hierarchy-node/hierarchy-node.component.ts ***!
  \******************************************************************************/
/*! exports provided: HierarchyNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HierarchyNodeComponent", function() { return HierarchyNodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["appHierarchyNode", ""];
function HierarchyNodeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function HierarchyNodeComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ul", 2);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodeTemplate", ctx_r1.nodeTemplate)("subNodes", ctx_r1.node.subNodes);
} }
const _c1 = function (a0) { return { node: a0 }; };
class HierarchyNodeComponent {
    constructor() {
        this.node = {
            name: '',
            subNodes: []
        };
    }
}
HierarchyNodeComponent.ɵfac = function HierarchyNodeComponent_Factory(t) { return new (t || HierarchyNodeComponent)(); };
HierarchyNodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HierarchyNodeComponent, selectors: [["", "appHierarchyNode", ""]], inputs: { nodeTemplate: "nodeTemplate", node: "node" }, attrs: _c0, decls: 2, vars: 5, consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["appHierarchyNodeList", "", 3, "nodeTemplate", "subNodes", 4, "ngIf"], ["appHierarchyNodeList", "", 3, "nodeTemplate", "subNodes"]], template: function HierarchyNodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HierarchyNodeComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HierarchyNodeComponent_ul_1_Template, 1, 2, "ul", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.nodeTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.node));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.node.subNodes && ctx.node.subNodes.length > 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hpZXJhcmNoeS1ub2RlL2hpZXJhcmNoeS1ub2RlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HierarchyNodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[appHierarchyNode]',
                templateUrl: './hierarchy-node.component.html',
                styleUrls: ['./hierarchy-node.component.scss']
            }]
    }], null, { nodeTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/hierarchy/hierarchy.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/hierarchy/hierarchy.component.ts ***!
  \********************************************************************/
/*! exports provided: HierarchyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HierarchyComponent", function() { return HierarchyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hierarchy_node_list_hierarchy_node_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hierarchy-node-list/hierarchy-node-list.component */ "./src/app/shared/components/hierarchy-node-list/hierarchy-node-list.component.ts");



const _c0 = function (a0) { return [a0]; };
class HierarchyComponent {
    constructor() {
        this.node = {
            name: '',
            subNodes: []
        };
    }
}
HierarchyComponent.ɵfac = function HierarchyComponent_Factory(t) { return new (t || HierarchyComponent)(); };
HierarchyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HierarchyComponent, selectors: [["app-hierarchy"]], inputs: { nodeTemplate: "nodeTemplate", node: "node" }, decls: 2, vars: 4, consts: [[1, "tree"], ["appHierarchyNodeList", "", 3, "subNodes", "nodeTemplate"]], template: function HierarchyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("subNodes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.node))("nodeTemplate", ctx.nodeTemplate);
    } }, directives: [_hierarchy_node_list_hierarchy_node_list_component__WEBPACK_IMPORTED_MODULE_1__["HierarchyNodeListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hpZXJhcmNoeS9oaWVyYXJjaHkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HierarchyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hierarchy',
                templateUrl: './hierarchy.component.html',
                styleUrls: ['./hierarchy.component.scss']
            }]
    }], null, { nodeTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/menu/menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "show": a0 }; };
const _c1 = ["*"];
class MenuComponent {
    constructor() {
        this.name = '';
        this.position = 'left';
        this.show = false;
    }
    ngOnInit() {
        this.positionCls = `dropdown-menu-${this.position}`;
    }
    clickout() {
        this.show = false;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], hostBindings: function MenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_click_HostBindingHandler() { return ctx.clickout(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { name: "name", position: "position" }, ngContentSelectors: _c1, decls: 5, vars: 10, consts: [[1, "dropdown", 3, "ngClass"], ["type", "button", 1, "btn", "btn-success", "dropdown-toggle", 3, "click"], ["aria-labelledby", "dropdownMenuButton", 3, "ngClass"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_1_listener($event) { ctx.show = !ctx.show; return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.show));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dropdown-menu ", ctx.positionCls, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.show));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], null, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ModalComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.close.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);
} }
function ModalComponent_div_0_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_div_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.submit.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.saveBtn);
} }
function ModalComponent_div_0_div_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_div_6_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.close.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.closeBtn);
} }
function ModalComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalComponent_div_0_div_6_button_1_Template, 2, 1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalComponent_div_0_div_6_button_2_Template, 2, 1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.saveBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.closeBtn);
} }
function ModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.close.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalComponent_div_0_div_3_Template, 6, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModalComponent_div_0_div_6_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.footer);
} }
const _c0 = ["*"];
class ModalComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.show = false;
        this.saveBtn = '';
        this.closeBtn = '';
        this.title = '';
        this.footer = true;
        this.header = true;
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { show: "show", saveBtn: "saveBtn", closeBtn: "closeBtn", title: "title", footer: "footer", header: "header" }, outputs: { close: "close", submit: "submit" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "modal fade show", "style", "display: block; background: #00000080;", "tabindex", "-1", "role", "dialog", 3, "click", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", 2, "display", "block", "background", "#00000080", 3, "click"], ["role", "document", 1, "modal-dialog", 3, "click"], [1, "modal-content"], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-footer"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalComponent_div_0_Template, 7, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], null, { close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], submit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], saveBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/stepper/stepper.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/stepper/stepper.component.ts ***!
  \****************************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1) { return { "stepper__step--current": a0, "stepper__step--finished": a1 }; };
function StepperComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperComponent_li_1_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const step_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.select(step_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, step_r1.active, step_r1.finished));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
} }
class StepperComponent {
    constructor() {
        this.steps = [];
        this.onchanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.setDefaultSelected();
    }
    setDefaultSelected() {
        if (this.steps.length === 0) {
            return;
        }
        const currentActive = this.steps.find(x => x.active);
        if (!currentActive) {
            this.steps[0].active = true;
        }
    }
    select(step) {
        if (!step.finished) {
            return;
        }
        this.steps.forEach(x => x.active = false);
        step.active = true;
        this.onchanged.emit(step);
    }
}
StepperComponent.ɵfac = function StepperComponent_Factory(t) { return new (t || StepperComponent)(); };
StepperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepperComponent, selectors: [["app-stepper"]], inputs: { steps: "steps" }, outputs: { onchanged: "onchanged" }, decls: 2, vars: 1, consts: [[1, "stepper"], ["class", "stepper__step", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "stepper__step", 3, "ngClass"], [1, "stepper__label"], [1, "stepper__number", 3, "click"], [1, "stepper__line"]], template: function StepperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StepperComponent_li_1_Template, 6, 6, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.stepper[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin: 0;\n}\n\n.stepper__step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  justify-content: center;\n  flex-flow: column;\n  position: relative;\n}\n\n.stepper__step[_ngcontent-%COMP%]:first-child   .stepper__line[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.stepper__step--finished[_ngcontent-%COMP%]   .stepper__number[_ngcontent-%COMP%] {\n  background: #28c728;\n  font-weight: bold;\n  cursor: pointer;\n  border: 2px solid #fff;\n  box-shadow: 0px 0px 0px 2px #28c728, 0px 0px 0px 6px #fff;\n}\n\n.stepper__step--finished[_ngcontent-%COMP%]   .stepper__line[_ngcontent-%COMP%] {\n  background: #28c728;\n}\n\n.stepper__step--current[_ngcontent-%COMP%]   .stepper__number[_ngcontent-%COMP%] {\n  background: #0aa2ea;\n  font-weight: bold;\n  transform: scale(1.2);\n  border: 2px solid #fff;\n  box-shadow: 0px 0px 0px 2px #0aa2ea, 0px 0px 0px 6px #fff;\n}\n\n.stepper__step--current[_ngcontent-%COMP%]   .stepper__line[_ngcontent-%COMP%] {\n  background: #0aa2ea;\n}\n\n.stepper__step--current[_ngcontent-%COMP%]   .stepper__label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.stepper__label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-size: 0.9rem;\n  transition: all 0.25s ease-in-out;\n}\n\n.stepper__number[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  background: #969696;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  position: relative;\n  z-index: 1;\n  font-size: 0.8rem;\n  box-shadow: 0px 0px 0px 6px #fff;\n  transition: all 0.25s ease-in-out;\n}\n\n.stepper__line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2px;\n  background: #969696;\n  position: absolute;\n  bottom: 0;\n  top: 1.9rem;\n  margin: auto;\n  left: -50%;\n  transition: all 0.25s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBRUo7O0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRVI7O0FBQ1k7RUFDSSxhQUFBO0FBQ2hCOztBQUlZO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHlEQUFBO0FBRmhCOztBQUtZO0VBQ0ksbUJBQUE7QUFIaEI7O0FBUVk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlEQUFBO0FBTmhCOztBQVNZO0VBQ0ksbUJBQUE7QUFQaEI7O0FBVVk7RUFDSSxpQkFBQTtBQVJoQjs7QUFhSTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQVhSOztBQWNJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FBWlI7O0FBZUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7QUFiUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgZGlzcGxheTpibG9jaztcclxufVxyXG4uc3RlcHBlcntcclxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46MDtcclxuXHJcbiAgICAmX19zdGVwe1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47ICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlOyAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgLnN0ZXBwZXJfX2xpbmV7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtLWZpbmlzaGVke1xyXG4gICAgICAgICAgICAuc3RlcHBlcl9fbnVtYmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMjhjNzI4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggIzI4YzcyOCwgMHB4IDBweCAwcHggNnB4ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdGVwcGVyX19saW5le1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI4YzcyODtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtLWN1cnJlbnR7XHJcbiAgICAgICAgICAgIC5zdGVwcGVyX19udW1iZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMwYWEyZWE7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggIzBhYTJlYSwgMHB4IDBweCAwcHggNnB4ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdGVwcGVyX19saW5le1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzBhYTJlYTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN0ZXBwZXJfX2xhYmVse1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGFiZWx7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTouNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0OyBcclxuICAgIH1cclxuXHJcbiAgICAmX19udW1iZXIge1xyXG4gICAgICAgIHdpZHRoOjEuNzVyZW07XHJcbiAgICAgICAgaGVpZ2h0OjEuNzVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDojOTY5Njk2O1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6MTtcclxuICAgICAgICBmb250LXNpemU6IC44cmVtOyBcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCA2cHggI2ZmZjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDsgXHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGluZXtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDoycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDojOTY5Njk2O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgdG9wOiAxLjlyZW07XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGxlZnQ6IC01MCU7ICBcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDsgXHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stepper',
                templateUrl: './stepper.component.html',
                styleUrls: ['./stepper.component.scss']
            }]
    }], function () { return []; }, { steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onchanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onchanged']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/tab/tab.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/tab/tab.component.ts ***!
  \********************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "active": a0 }; };
function TabComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.select(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1.selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
} }
const _c1 = ["*"];
class TabComponent {
    constructor() {
        this.onselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.setDefaultSelectedTab();
    }
    setDefaultSelectedTab() {
        if (this.items.length === 0) {
            return;
        }
        // default selected
        let selected = this.items.find(x => x.selected);
        if (!selected) {
            selected = this.items[0];
        }
        selected.selected = true;
        this.selectedTab = selected;
    }
    select(item) {
        if (this.selectedTab) {
            this.selectedTab.selected = false;
        }
        item.selected = true;
        this.selectedTab = item;
        this.onselect.emit(item);
    }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(); };
TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabComponent, selectors: [["app-tab"]], inputs: { items: "items" }, outputs: { onselect: "onselect" }, ngContentSelectors: _c1, decls: 5, vars: 1, consts: [["role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-link", "aria-controls", "nav-home", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["aria-controls", "nav-home", 1, "nav-link", 3, "ngClass", "click"]], template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabComponent_a_2_Template, 2, 4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".nav[_ngcontent-%COMP%] {\n  border-color: #007bff;\n}\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.25s ease-in-out;\n  background: #eee;\n  border-color: #fff;\n}\n.nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: #fff;\n  border-color: transparent;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFiL3RhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVRO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFBWjtBQUtBO0VBQ0ksaUJBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RhYi90YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcclxuICAgIFxyXG4gICAgYXtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiNlZWU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgXHJcbiAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGFiLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOi41cmVtIDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tab',
                templateUrl: './tab.component.html',
                styleUrls: ['./tab.component.scss']
            }]
    }], function () { return []; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onselect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onselect']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/service/local-data.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/service/local-data.service.ts ***!
  \******************************************************/
/*! exports provided: LocalDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDataService", function() { return LocalDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LocalDataService {
    constructor() { }
    save(what, data) {
        let newData = {
            [what]: data
        };
        if (!this.isEmpty(this.current)) {
            newData = Object.assign(Object.assign({}, this.current), { [what]: data });
        }
        localStorage.setItem('localData', JSON.stringify(newData));
    }
    get data() {
        return this.current;
    }
    get(what) {
        if (this.isEmpty(this.current)) {
            return;
        }
        return this.current[what];
    }
    delete(what) {
        if (this.isEmpty(this.current)) {
            return;
        }
        const clone = this.cloneObject(this.current);
        delete clone[what];
        localStorage.setItem('localData', JSON.stringify(clone));
    }
    clear() {
        localStorage.removeItem('localData');
    }
    cloneObject(obj) {
        const str = JSON.stringify(obj);
        return JSON.parse(str);
    }
    get current() {
        const data = localStorage.getItem('localData');
        return data ? JSON.parse(data) : {};
    }
    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
}
LocalDataService.ɵfac = function LocalDataService_Factory(t) { return new (t || LocalDataService)(); };
LocalDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalDataService, factory: LocalDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tab/tab.component */ "./src/app/shared/components/tab/tab.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var _components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hierarchy/hierarchy.component */ "./src/app/shared/components/hierarchy/hierarchy.component.ts");
/* harmony import */ var _components_hierarchy_node_list_hierarchy_node_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/hierarchy-node-list/hierarchy-node-list.component */ "./src/app/shared/components/hierarchy-node-list/hierarchy-node-list.component.ts");
/* harmony import */ var _components_hierarchy_node_hierarchy_node_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/hierarchy-node/hierarchy-node.component */ "./src/app/shared/components/hierarchy-node/hierarchy-node.component.ts");
/* harmony import */ var _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/stepper/stepper.component */ "./src/app/shared/components/stepper/stepper.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/shared/components/menu/menu.component.ts");
/* harmony import */ var _component_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/settings/settings.component */ "./src/app/shared/component/settings/settings.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"],
        _components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_4__["HierarchyComponent"],
        _components_hierarchy_node_list_hierarchy_node_list_component__WEBPACK_IMPORTED_MODULE_5__["HierarchyNodeListComponent"],
        _components_hierarchy_node_hierarchy_node_component__WEBPACK_IMPORTED_MODULE_6__["HierarchyNodeComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
        _component_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
        _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__["StepperComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]], exports: [_components_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"],
        _components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_4__["HierarchyComponent"],
        _components_hierarchy_node_list_hierarchy_node_list_component__WEBPACK_IMPORTED_MODULE_5__["HierarchyNodeListComponent"],
        _components_hierarchy_node_hierarchy_node_component__WEBPACK_IMPORTED_MODULE_6__["HierarchyNodeComponent"],
        _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__["StepperComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
        _component_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"],
                    _components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_4__["HierarchyComponent"],
                    _components_hierarchy_node_list_hierarchy_node_list_component__WEBPACK_IMPORTED_MODULE_5__["HierarchyNodeListComponent"],
                    _components_hierarchy_node_hierarchy_node_component__WEBPACK_IMPORTED_MODULE_6__["HierarchyNodeComponent"],
                    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                    _component_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
                    _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__["StepperComponent"],
                ],
                exports: [
                    _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"],
                    _components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_4__["HierarchyComponent"],
                    _components_hierarchy_node_list_hierarchy_node_list_component__WEBPACK_IMPORTED_MODULE_5__["HierarchyNodeListComponent"],
                    _components_hierarchy_node_hierarchy_node_component__WEBPACK_IMPORTED_MODULE_6__["HierarchyNodeComponent"],
                    _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__["StepperComponent"],
                    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                    _component_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
                ],
                providers: [],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_components_hierarchy_node_hierarchy_node_component__WEBPACK_IMPORTED_MODULE_6__["HierarchyNodeComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"],
    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"],
    _components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_4__["HierarchyComponent"],
    _components_hierarchy_node_list_hierarchy_node_list_component__WEBPACK_IMPORTED_MODULE_5__["HierarchyNodeListComponent"],
    _components_hierarchy_node_hierarchy_node_component__WEBPACK_IMPORTED_MODULE_6__["HierarchyNodeComponent"],
    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
    _component_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
    _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__["StepperComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/store/actions/hierarchy.action.ts":
/*!***************************************************!*\
  !*** ./src/app/store/actions/hierarchy.action.ts ***!
  \***************************************************/
/*! exports provided: setNode, addNode, removeNode, editNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNode", function() { return setNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNode", function() { return addNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return removeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editNode", function() { return editNode; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const setNode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Hierarchy] set node', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addNode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Hierarchy] add node', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removeNode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Hierarchy] remove node', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editNode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Hierarchy] edit node', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/reducers/hierarchy.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/reducers/hierarchy.reducer.ts ***!
  \*****************************************************/
/*! exports provided: initialState, hierarchyReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hierarchyReducer", function() { return hierarchyReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _actions_hierarchy_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/hierarchy.action */ "./src/app/store/actions/hierarchy.action.ts");


const initialState = [];
const _hierarchyReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_hierarchy_action__WEBPACK_IMPORTED_MODULE_1__["addNode"], (state, payload) => {
    return [
        ...state,
        payload
    ];
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_hierarchy_action__WEBPACK_IMPORTED_MODULE_1__["setNode"], (state, payload) => {
    return payload.hierarchy;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_hierarchy_action__WEBPACK_IMPORTED_MODULE_1__["removeNode"], (state, payload) => {
    return state.filter(item => item.id !== payload.id);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_hierarchy_action__WEBPACK_IMPORTED_MODULE_1__["editNode"], (state, payload) => {
    return state.map(item => {
        if (item.id === payload.id) {
            return payload;
        }
        return item;
    });
}));
function hierarchyReducer(state, action) {
    return _hierarchyReducer(state, action);
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiURL: 'http://localhost:4003/api/',
    apiURL: 'https://moody-newt-51.loca.lt/api/',
    staticData: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\81254807\Desktop\UAM\project\UAM-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map