(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-channel-channel-module"],{

/***/ "./src/app/modules/channel/channel.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/channel/channel.module.ts ***!
  \***************************************************/
/*! exports provided: ChannelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelModule", function() { return ChannelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/modules/channel/channel/channel.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    { path: '', component: _channel_channel_component__WEBPACK_IMPORTED_MODULE_2__["ChannelComponent"] },
];
class ChannelModule {
}
ChannelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChannelModule });
ChannelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChannelModule_Factory(t) { return new (t || ChannelModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChannelModule, { declarations: [_channel_channel_component__WEBPACK_IMPORTED_MODULE_2__["ChannelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_channel_channel_component__WEBPACK_IMPORTED_MODULE_2__["ChannelComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/channel/channel/channel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/channel/channel/channel.component.ts ***!
  \**************************************************************/
/*! exports provided: ChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelComponent", function() { return ChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/api.service */ "./src/app/shared/service/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_local_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/local-data.service */ "./src/app/shared/service/local-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");










function ChannelComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelComponent_tr_15_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const c_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectApp(c_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelComponent_tr_15_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const c_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showAppForm("edit", c_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelComponent_tr_15_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const c_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteApp(c_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r1.name);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ChannelComponent {
    constructor(formBuilder, apiService, router, localDataService) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.router = router;
        this.localDataService = localDataService;
        this.entity = 'channel';
        this.showModal = false;
        this.channels = [];
        this.staticChannels = [
            {
                id: 'crm',
                name: 'CRM'
            },
            {
                id: 'oat',
                name: 'OAT'
            },
            {
                id: 'ist',
                name: 'IST'
            }
        ];
    }
    ngOnInit() {
        this.buildForm();
        // TEMP
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].staticData) {
            this.channels = this.staticChannels;
            return;
        }
        this.apiService.list(this.entity, { limit: 100, offset: 0 }).subscribe(x => {
            this.channels = x;
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            id: '',
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    showAppForm(type, br) {
        if (type === 'add') {
            this.modalTitle = 'New Channel';
        }
        else {
            this.modalTitle = `Edit ${br.name}`;
            this.form.setValue(br);
        }
        this.showModal = true;
    }
    closeModal() {
        this.form.reset();
        this.showModal = false;
    }
    submitForm() {
        this.form.markAllAsTouched();
        if (this.form.invalid) {
            return;
        }
        this.showModal = false;
        const { id, name } = this.form.value;
        if (id) {
            this.update({ id, name });
        }
        else {
            this.create({ name });
        }
        this.form.reset();
    }
    deleteApp(app) {
        const sure = confirm('Are you sure?');
        if (sure) {
            // TEMP
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].staticData) {
                this.channels = this.channels.filter(o => o.id !== app.id);
                return;
            }
            this.apiService.delete(this.entity, app.id).subscribe(x => {
                this.channels = this.channels.filter(o => o.id !== app.id);
            });
        }
    }
    update({ id, name }) {
        // TEMP
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].staticData) {
            this.channels.map(x => {
                if (id === x.id) {
                    x.name = name;
                }
            });
            return;
        }
        this.apiService.update(this.entity, id, {
            name
        }).subscribe(x => {
            this.channels.map(o => {
                if (id === o.id) {
                    o.name = name;
                }
            });
        });
    }
    create({ name }) {
        // TEMP
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].staticData) {
            this.channels.push({
                id: new Date().getTime().toString(),
                name
            });
            return;
        }
        this.apiService.create(this.entity, {
            name
        }).subscribe(x => {
            this.channels.push({
                id: x.id,
                name
            });
        });
    }
    selectApp(app) {
        // this.localDataService.save('application', app);
        // this.router.navigate(['/businessroles/', app.id]);
    }
}
ChannelComponent.ɵfac = function ChannelComponent_Factory(t) { return new (t || ChannelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_local_data_service__WEBPACK_IMPORTED_MODULE_5__["LocalDataService"])); };
ChannelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChannelComponent, selectors: [["app-channel"]], decls: 23, vars: 9, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item", "active"], [1, "table-search"], ["type", "search", "placeholder", "Search", 1, "form-control", "form-control-sm"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "table", "table-sm", "table-striped"], [1, ""], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "show", "saveBtn", "closeBtn", "title", "close", "submit"], [3, "formGroup"], ["formControlName", "id", "type", "hidden"], [1, "form-group"], ["formControlName", "name", "type", "text", 1, "form-control", "is-invalid", 3, "ngClass"], [1, "btn", "btn-link", "btn-sm", 3, "click"], [1, "actions"], [1, "btn-link", "btn-sm", 3, "click"]], template: function ChannelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelComponent_Template_button_click_6_listener() { return ctx.showAppForm("add"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add New Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChannelComponent_tr_15_Template, 9, 1, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-modal", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ChannelComponent_Template_app_modal_close_16_listener() { return ctx.closeModal(); })("submit", function ChannelComponent_Template_app_modal_submit_16_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.channels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.showModal)("saveBtn", "Save")("closeBtn", "Cancel")("title", ctx.modalTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.form.controls.name.invalid && ctx.form.controls.name.touched));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hhbm5lbC9jaGFubmVsL2NoYW5uZWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-channel',
                templateUrl: './channel.component.html',
                styleUrls: ['./channel.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_shared_service_local_data_service__WEBPACK_IMPORTED_MODULE_5__["LocalDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/service/api.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/service/api.service.ts ***!
  \***********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var jk_wait__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jk-wait */ "./node_modules/jk-wait/__ivy_ngcc__/fesm2015/jk-wait.js");






class ApiService {
    constructor(http, wait) {
        this.http = http;
        this.wait = wait;
        this.configUrl = 'assets/config.json';
    }
    create(what, data) {
        this.wait.start();
        const endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${what}/`;
        return this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => {
            this.wait.end();
            return x;
        }));
    }
    update(what, id, data) {
        this.wait.start();
        const endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${what}/${id}`;
        return this.http.put(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => {
            this.wait.end();
            return x;
        }));
    }
    delete(what, id) {
        this.wait.start();
        const endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${what}/${id}`;
        return this.http.delete(endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => {
            this.wait.end();
            return x;
        }));
    }
    delete2(what, id) {
        this.wait.start();
        const endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${what}?id=${id}`;
        return this.http.delete(endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => {
            this.wait.end();
            return x;
        }));
    }
    list(ofWhat, params) {
        this.wait.start();
        const paramString = params ? `?${this.objectToParams(params)}` : '';
        const endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${ofWhat}/${paramString}`;
        return this.http.get(endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => {
            this.wait.end();
            return x;
        }));
    }
    listMap(ofWhat, params) {
        this.wait.start();
        const paramString = params ? `?${this.objectToParams(params)}` : '';
        const endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${ofWhat}/${paramString}`;
        return this.http.get(endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((x) => {
            this.wait.end();
            return {
                data: x.content,
                count: x.totalElements,
                totalPage: x.totalPages
            };
        }));
    }
    objectToParams(obj) {
        const keys = Object.keys(obj);
        let paramsString = '';
        keys.forEach(key => {
            paramsString += `${key}=${obj[key]}&`;
        });
        return paramsString.slice(0, -1);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](jk_wait__WEBPACK_IMPORTED_MODULE_4__["JkWaitService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: jk_wait__WEBPACK_IMPORTED_MODULE_4__["JkWaitService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-channel-channel-module.js.map