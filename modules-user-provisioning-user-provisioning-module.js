(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-provisioning-user-provisioning-module"],{

/***/ "./src/app/modules/user-provisioning/business-role/business-role.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/user-provisioning/business-role/business-role.component.ts ***!
  \************************************************************************************/
/*! exports provided: BusinessRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessRoleComponent", function() { return BusinessRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_provisioning_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-provisioning.service */ "./src/app/modules/user-provisioning/user-provisioning.service.ts");
/* harmony import */ var src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/api.service */ "./src/app/shared/service/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function BusinessRoleComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
} }
function BusinessRoleComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
} }
function BusinessRoleComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.name);
} }
function BusinessRoleComponent_ng_container_26_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.name);
} }
function BusinessRoleComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BusinessRoleComponent_ng_container_26_option_1_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isRoleAlreadySelected(item_r8.id));
} }
function BusinessRoleComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessRoleComponent_li_30_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const role_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.removeRole(role_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r11.name, " ");
} }
class BusinessRoleComponent {
    constructor(router, service, formBuilder, apiService) {
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.list = [];
        this.selectedRoles = [];
        this.businessRoles = [
            {
                id: 'sales-manager',
                name: 'Sales Manager'
            },
            {
                id: 'support',
                name: 'Support'
            },
            {
                id: 'order-support',
                name: 'Order Support'
            },
            {
                id: 'manager',
                name: 'Manager'
            },
            {
                id: 'frontline',
                name: 'Frontline'
            },
            {
                id: 'supervisor',
                name: 'Supervisor'
            }
        ];
        this.jobDuties = [
            {
                id: 'QOM',
                name: 'QOM'
            },
            {
                id: 'Call Center / CSS',
                name: 'Call Center / CSS'
            },
            {
                id: 'Service Center / SC',
                name: 'Service Center / SC'
            },
            {
                id: 'Inbound Sales (call center) / IBS',
                name: 'Inbound Sales (call center) / IBS'
            },
            {
                id: 'Smart Charge / SCS',
                name: 'Smart Charge / SCS'
            },
            {
                id: 'Outbound Sales (call center) / OBS',
                name: 'Outbound Sales (call center) / OBS'
            },
            {
                id: 'NowTV / VCC',
                name: 'NowTV / VCC'
            },
            {
                id: 'Direct Sales / DS6',
                name: 'Direct Sales / DS6'
            },
            {
                id: 'Fulfiment / CFM1',
                name: 'Fulfiment / CFM1'
            },
            {
                id: 'IBS',
                name: 'IBS'
            },
            {
                id: 'Retention / RET',
                name: 'Retention / RET'
            },
            {
                id: 'Retail Sales / RS',
                name: 'Retail Sales / RS'
            },
            {
                id: 'Direct Sales 5',
                name: 'Direct Sales 5'
            },
            {
                id: 'Direct Sales / DS2',
                name: 'Direct Sales / DS2'
            },
            {
                id: 'Direct Sales / DS3',
                name: 'Direct Sales / DS3'
            },
            {
                id: 'Premium Team / PTA',
                name: 'Premium Team / PTA'
            },
            {
                id: 'Premium Team / PTC',
                name: 'Premium Team / PTC'
            },
            {
                id: 'NowTV / VDS',
                name: 'NowTV / VDS'
            },
            {
                id: 'Premium Team / PTR',
                name: 'Premium Team / PTR'
            },
            {
                id: 'VCC',
                name: 'VCC'
            },
            {
                id: 'Direct Sales / DS1',
                name: 'Direct Sales / DS1'
            },
            {
                id: 'NowTV / VDT',
                name: 'NowTV / VDT'
            },
            {
                id: 'Outsource Sales / OSS',
                name: 'Outsource Sales / OSS'
            },
            {
                id: 'Premium Team / PTH',
                name: 'Premium Team / PTH'
            },
            {
                id: 'Premium Team / PTF',
                name: 'Premium Team / PTF'
            },
            {
                id: 'Direct Sales /DS4',
                name: 'Direct Sales /DS4'
            },
            {
                id: 'Premium Team / PTT',
                name: 'Premium Team / PTT'
            },
            {
                id: 'Premium Team / PTP',
                name: 'Premium Team / PTP'
            },
            {
                id: 'Premium Team / PTE',
                name: 'Premium Team / PTE'
            },
            {
                id: 'Premium Team / PTM',
                name: 'Premium Team / PTM'
            },
            {
                id: 'Fulfilment / CFM',
                name: 'Fulfilment / CFM'
            },
            {
                id: 'Roadshow (MDV)',
                name: 'Roadshow (MDV)'
            },
            {
                id: 'Customer Account Payment / CAP',
                name: 'Customer Account Payment / CAP'
            },
            {
                id: 'Smart Living / SLV',
                name: 'Smart Living / SLV'
            },
            {
                id: 'Warehouse / WH',
                name: 'Warehouse / WH'
            },
            {
                id: 'Fixed Number Porting / CARRIER(LTS)',
                name: 'Fixed Number Porting / CARRIER(LTS)'
            },
            {
                id: 'Customer Data Access Logging (CDAL)',
                name: 'Customer Data Access Logging (CDAL)'
            },
            {
                id: 'Retail Sales / RSD',
                name: 'Retail Sales / RSD'
            },
            {
                id: 'Smart Living Engineer / SLE',
                name: 'Smart Living Engineer / SLE'
            }
        ];
        this.channels = [
            {
                id: 'QSI__D01',
                name: 'QSI__D01'
            },
            {
                id: 'YIMS_D01',
                name: 'YIMS_D01'
            },
            {
                id: 'OTHERSQA',
                name: 'OTHERSQA'
            },
            {
                id: 'CES__D05',
                name: 'CES__D05'
            },
            {
                id: 'CS_SC_12',
                name: 'CS_SC_12'
            },
            {
                id: 'PTV01',
                name: 'PTV01'
            },
            {
                id: 'TVCC5',
                name: 'TVCC5'
            },
            {
                id: 'TVCC6',
                name: 'TVCC6'
            },
            {
                id: 'TVCC9',
                name: 'TVCC9'
            },
            {
                id: 'TVCC1',
                name: 'TVCC1'
            },
            {
                id: 'TVCC13',
                name: 'TVCC13'
            },
            {
                id: 'TVCC2',
                name: 'TVCC2'
            },
            {
                id: 'TVCC3',
                name: 'TVCC3'
            },
            {
                id: 'TVCC4',
                name: 'TVCC4'
            },
            {
                id: 'TVCC15',
                name: 'TVCC15'
            },
            {
                id: 'TVCC11',
                name: 'TVCC11'
            },
            {
                id: 'TVCC12',
                name: 'TVCC12'
            }
        ];
        this.teams = [
            {
                id: 1,
                name: 'Team A'
            },
            {
                id: 2,
                name: 'Team B'
            }
        ];
    }
    ngOnInit() {
        // TEMP
        const staffProv = localStorage.getItem('staffProvisioning');
        this.staffProvisioning = staffProv ? JSON.parse(staffProv) : {};
        this.form = this.formBuilder.group({
            businessRole: ['', []],
            channel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            jobDuty: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            team: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        const savedData = this.staffProvisioning.businessRole;
        if (savedData) {
            this.selectedRoles = savedData.business_role_ids;
            delete savedData.business_role_ids;
            this.form.setValue(savedData);
        }
        this.loadData();
    }
    addRole() {
        const roleField = this.form.get('businessRole');
        if (roleField.value.length < 1) {
            return;
        }
        const selectedRole = this.businessRoles.filter(x => x.id.toString() === roleField.value);
        this.selectedRoles.push(selectedRole[0]);
        roleField.reset();
    }
    removeRole(id) {
        this.selectedRoles = this.selectedRoles.filter(x => x.id !== id);
    }
    isRoleAlreadySelected(id) {
        return this.selectedRoles.filter(x => x.id === id).length > 0;
    }
    loadData() {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].staticData) {
            return;
        }
        this.apiService.list('business-role', { limit: 100, offset: 0 }).subscribe(x => {
            this.businessRoles = x;
        });
        this.apiService.list('channel', { limit: 100, offset: 0 }).subscribe(x => {
            if (x.length > 0) { // TEMP
                this.channels = x;
            }
        });
        this.apiService.list('job-duty', { limit: 100, offset: 0 }).subscribe(x => {
            this.jobDuties = x;
        });
        this.apiService.list('team', { limit: 100, offset: 0 }).subscribe(x => {
            console.log(x);
            this.teams = x;
        });
    }
    add() {
        if (this.form.invalid) {
            return;
        }
        this.list.push(this.form.value);
        this.form.reset();
    }
    remove(index) {
        this.list.splice(index, 1);
    }
    next() {
        if (this.form.invalid || this.selectedRoles.length === 0) {
            return;
        }
        this.staffProvisioning.businessRole = Object.assign(Object.assign({}, this.form.value), { business_role_ids: this.selectedRoles });
        localStorage.setItem('staffProvisioning', JSON.stringify(this.staffProvisioning));
        this.service.nextStep('staffinfo');
        this.router.navigate(['provisioning', 'staffinfo']);
    }
}
BusinessRoleComponent.ɵfac = function BusinessRoleComponent_Factory(t) { return new (t || BusinessRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_provisioning_service__WEBPACK_IMPORTED_MODULE_4__["UserProvisioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
BusinessRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BusinessRoleComponent, selectors: [["app-business-role"]], decls: 33, vars: 6, consts: [[3, "formGroup"], [1, "form-group"], ["formControlName", "jobDuty", 1, "form-control", "form-control-sm"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "channel", 1, "form-control", "form-control-sm"], ["formControlName", "team", 1, "form-control", "form-control-sm"], ["formControlName", "businessRole", 1, "form-control", "form-control-sm"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "value"], [3, "value", 4, "ngIf"], [3, "click"]], template: function BusinessRoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BusinessRoleComponent_option_7_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BusinessRoleComponent_option_13_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BusinessRoleComponent_option_19_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Application Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BusinessRoleComponent_ng_container_26_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessRoleComponent_Template_button_click_27_listener() { return ctx.addRole(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BusinessRoleComponent_li_30_Template, 4, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessRoleComponent_Template_button_click_31_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobDuties);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.channels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.businessRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedRoles);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n  display: flex;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 50rem;\n  padding: 2rem 0;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 1rem;\n}\n\nform[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\nform[_ngcontent-%COMP%]    > div.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n}\n\nform[_ngcontent-%COMP%]    > div.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 17rem;\n}\n\nform[_ngcontent-%COMP%]    > div.form-group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\nform[_ngcontent-%COMP%]    > div.form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n\nform[_ngcontent-%COMP%]    > div.form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 2rem;\n  border-bottom: 1px dashed #ddd;\n  font-size: 0.9rem;\n}\n\nform[_ngcontent-%COMP%]    > div.form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: blue;\n  cursor: pointer;\n}\n\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 10rem;\n  margin: 0;\n}\n\n.application[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 0.5rem;\n}\n\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  flex: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9idXNpbmVzcy1yb2xlL2J1c2luZXNzLXJvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBQUo7O0FBRUk7RUFDSSxPQUFBO0FBQVI7O0FBRVE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUFaOztBQUVZO0VBQ0ksWUFBQTtBQUFoQjs7QUFHWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFEaEI7O0FBSVk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUZoQjs7QUFJZ0I7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBRnBCOztBQUlvQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFGeEI7O0FBU0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFQUjs7QUFTUTtFQUNJLFlBQUE7RUFDQSxTQUFBO0FBUFo7O0FBWUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUFUSjs7QUFXSTtFQUNJLE9BQUE7RUFDQSxvQkFBQTtBQVRSOztBQVdRO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFUWiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm92aXNpb25pbmcvYnVzaW5lc3Mtcm9sZS9idXNpbmVzcy1yb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNTByZW07XHJcbiAgICBwYWRkaW5nOjJyZW0gMDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICA+IGRpdntcclxuICAgICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgICAmLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTdyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID4gZGl2e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZ2FwOi41cmVtO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6Ymx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGdhcDogLjVyZW07XHJcblxyXG4gICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFwcGxpY2F0aW9ue1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICAgID4gZGl2e1xyXG4gICAgICAgIGZsZXg6MTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusinessRoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-business-role',
                templateUrl: './business-role.component.html',
                styleUrls: ['./business-role.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _user_provisioning_service__WEBPACK_IMPORTED_MODULE_4__["UserProvisioningService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-provisioning/department-hierarchy/department-hierarchy.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/user-provisioning/department-hierarchy/department-hierarchy.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DepartmentHierarchyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentHierarchyComponent", function() { return DepartmentHierarchyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_provisioning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-provisioning.service */ "./src/app/modules/user-provisioning/user-provisioning.service.ts");
/* harmony import */ var src_app_shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/hierarchy/hierarchy.service */ "./src/app/shared/components/hierarchy/hierarchy.service.ts");
/* harmony import */ var src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/api.service */ "./src/app/shared/service/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/hierarchy/hierarchy.component */ "./src/app/shared/components/hierarchy/hierarchy.component.ts");









const _c0 = function (a0) { return { "selected": a0 }; };
function DepartmentHierarchyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentHierarchyComponent_ng_template_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const node_r3 = ctx.node; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.select(node_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = ctx.node;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, (ctx_r1.staffProvisioning == null ? null : ctx_r1.staffProvisioning.department == null ? null : ctx_r1.staffProvisioning.department.id) === node_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", node_r3.name, " ");
} }
function DepartmentHierarchyComponent_app_hierarchy_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hierarchy", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", ctx_r2.node)("nodeTemplate", _r0);
} }
class DepartmentHierarchyComponent {
    constructor(router, service, hierarchyService, apiService) {
        this.router = router;
        this.service = service;
        this.hierarchyService = hierarchyService;
        this.apiService = apiService;
        this.node = [
            { id: 1, name: 'Channel Fulfillment Management (CFM)', parent_id: null, type: 'department' },
            { id: 2, name: 'Fulfillment & Services (F&S) - HK', parent_id: 1, type: 'department' },
            { id: 3, name: 'Fulfillment & Services (F&S) - PRC', parent_id: 1, type: 'department' },
            { id: 4, name: 'HK - CPE Team', parent_id: 2, type: 'department' },
            { id: 5, name: 'HK - Order Team', parent_id: 2, type: 'department' },
            { id: 6, name: 'HK - Misc. Support', parent_id: 2, type: 'department' },
            { id: 7, name: 'HK - Others', parent_id: 2, type: 'department' },
            { id: 8, name: 'PY - Order Team', parent_id: 3, type: 'department' },
            { id: 9, name: 'PY - COS & QC Team', parent_id: 3, type: 'department' },
            { id: 10, name: 'PY - Others', parent_id: 3, type: 'department' }
        ];
    }
    ngOnInit() {
        this.node = this.hierarchyService.formatOrg(this.node);
        // TEMP
        const staffProv = localStorage.getItem('staffProvisioning');
        this.staffProvisioning = staffProv ? JSON.parse(staffProv) : {};
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].staticData) {
            this.node = null;
        }
        this.loadData();
    }
    loadData() {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].staticData) {
            return;
        }
        this.apiService.list('department/hierarchy', {
            from_hierarchy_level: 1,
            organization_id: this.staffProvisioning.organization.id,
            to_hierarchy_level: 99
        }).subscribe(x => {
            if (x.length === 0) {
                this.node = null;
                return;
            }
            const results = x.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    parent_id: item.parentId === 0 ? null : item.parentId,
                    type: item.type
                };
            });
            this.node = this.hierarchyService.formatOrg(results);
        });
    }
    // next(): void {
    //   this.service.nextStep('businessrole');
    //   this.router.navigate(['provisioning', 'businessrole']);
    // }
    select(node) {
        this.staffProvisioning.department = node;
        localStorage.setItem('staffProvisioning', JSON.stringify(this.staffProvisioning));
        setTimeout(x => {
            this.service.nextStep('businessrole');
            this.router.navigate(['provisioning', 'businessrole']);
        }, 250);
    }
}
DepartmentHierarchyComponent.ɵfac = function DepartmentHierarchyComponent_Factory(t) { return new (t || DepartmentHierarchyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_provisioning_service__WEBPACK_IMPORTED_MODULE_3__["UserProvisioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_4__["HierarchyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
DepartmentHierarchyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentHierarchyComponent, selectors: [["app-department-hierarchy"]], decls: 4, vars: 1, consts: [["nodeTemplate", ""], [1, "hierarchy"], [3, "node", "nodeTemplate", 4, "ngIf"], ["href", "javascript:;", 3, "ngClass", "click"], [3, "node", "nodeTemplate"]], template: function DepartmentHierarchyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DepartmentHierarchyComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DepartmentHierarchyComponent_app_hierarchy_3_Template, 1, 2, "app-hierarchy", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.node);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _shared_components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_7__["HierarchyComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n}\n\n.hierarchy[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.next[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.selected[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 3px #204873;\n  color: #333;\n  background: #fff;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9kZXBhcnRtZW50LWhpZXJhcmNoeS9kZXBhcnRtZW50LWhpZXJhcmNoeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBS0E7RUFDSSxvQkFBQTtBQUZKOztBQUtBO0VBQ0ksK0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9kZXBhcnRtZW50LWhpZXJhcmNoeS9kZXBhcnRtZW50LWhpZXJhcmNoeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG4uaGllcmFyY2h5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNXJlbSk7XHJcbiAgICAvLyBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm5leHR7XHJcbiAgICBhbGlnbi1zZWxmOmZsZXgtZW5kO1xyXG59XHJcblxyXG4uc2VsZWN0ZWR7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCAjMjA0ODczO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentHierarchyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-department-hierarchy',
                templateUrl: './department-hierarchy.component.html',
                styleUrls: ['./department-hierarchy.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _user_provisioning_service__WEBPACK_IMPORTED_MODULE_3__["UserProvisioningService"] }, { type: src_app_shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_4__["HierarchyService"] }, { type: src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-provisioning/organization-hierarchy/organization-hierarchy.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/user-provisioning/organization-hierarchy/organization-hierarchy.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: OrganizationHierarchyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationHierarchyComponent", function() { return OrganizationHierarchyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_provisioning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-provisioning.service */ "./src/app/modules/user-provisioning/user-provisioning.service.ts");
/* harmony import */ var _shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/hierarchy/hierarchy.service */ "./src/app/shared/components/hierarchy/hierarchy.service.ts");
/* harmony import */ var src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/api.service */ "./src/app/shared/service/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/hierarchy/hierarchy.component */ "./src/app/shared/components/hierarchy/hierarchy.component.ts");










const _c0 = function (a0) { return { "selected": a0 }; };
function OrganizationHierarchyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationHierarchyComponent_ng_template_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const node_r4 = ctx.node; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.select(node_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r4 = ctx.node;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, (ctx_r1.staffProvisioning == null ? null : ctx_r1.staffProvisioning.organization == null ? null : ctx_r1.staffProvisioning.organization.id) === node_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r4.name);
} }
function OrganizationHierarchyComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const org_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", org_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](org_r7.name);
} }
function OrganizationHierarchyComponent_app_hierarchy_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hierarchy", 9);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", ctx_r3.node)("nodeTemplate", _r0);
} }
class OrganizationHierarchyComponent {
    constructor(router, service, hierarchyService, apiService) {
        this.router = router;
        this.service = service;
        this.hierarchyService = hierarchyService;
        this.apiService = apiService;
        this.orgs = [
            {
                name: 'CRM',
                id: 'crm'
            },
            {
                name: 'Consumer Group',
                id: 'consumer_group'
            },
            {
                name: 'HKT Premier',
                id: 'hkt_premier'
            }
        ];
        this.node = [
            { id: 10, name: 'Mobile Sales and Marketing', parent_id: null },
            { id: 1, name: 'Consumer Mobile', parent_id: 10 },
            { id: 2, name: 'CSL Marketing & Prepaid ', parent_id: 1 },
            { id: 3, name: 'Marketing Operation', parent_id: 1 },
            { id: 4, name: 'Brand & Communications', parent_id: 1 },
            { id: 5, name: 'Human Resources', parent_id: 1 },
            { id: 6, name: 'Finance', parent_id: 1 },
        ];
    }
    ngOnInit() {
        this.node = this.hierarchyService.formatOrg(this.node);
        // TEMP
        const staffProv = localStorage.getItem('staffProvisioning');
        this.staffProvisioning = staffProv ? JSON.parse(staffProv) : {};
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].staticData) {
            this.orgs = [];
            this.apiService.list('organization/roots', {
                limit: 999,
                offset: 0
            }).subscribe(x => {
                this.orgs = x;
            });
            this.node = this.staffProvisioning.orgHierarchy;
        }
    }
    orgSelect(select) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].staticData) {
            return;
        }
        if (select.target.value.length === 0) {
            this.node = null;
            return;
        }
        this.node = [
            {
                id: select.target.value,
                name: this.orgs.filter(x => x.id.toString() === select.target.value)[0].name,
                parent_id: null
            },
        ];
        this.apiService.list('organization/hierarchy', {
            from_hierarchy_level: 1,
            root_id: select.target.value,
            to_hierarchy_level: 999
        }).subscribe(x => {
            if (x.length > 0) {
                if (x.length > 0) {
                    const toPush = x.map(org => {
                        return Object.assign(Object.assign({}, org), { parent_id: org.parentId });
                    });
                    const nodes = [...this.node, ...toPush];
                    this.node = this.hierarchyService.formatOrg(nodes);
                    this.staffProvisioning.orgHierarchy = this.node;
                }
            }
            // this.store.dispatch(setNode({ hierarchy }));
            // console.log(x);
            // this.node = this.hierarchyService.formatOrg(this.node);
        });
    }
    // next(): void {
    //   this.service.nextStep('department');
    //   this.router.navigate(['provisioning', 'department']);
    // }
    select(node) {
        this.staffProvisioning.organization = node;
        localStorage.setItem('staffProvisioning', JSON.stringify(this.staffProvisioning));
        setTimeout(x => {
            this.service.nextStep('department');
            this.router.navigate(['provisioning', 'department']);
        }, 250);
    }
}
OrganizationHierarchyComponent.ɵfac = function OrganizationHierarchyComponent_Factory(t) { return new (t || OrganizationHierarchyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_provisioning_service__WEBPACK_IMPORTED_MODULE_3__["UserProvisioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_4__["HierarchyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
OrganizationHierarchyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrganizationHierarchyComponent, selectors: [["app-organization-hierarchy"]], decls: 11, vars: 2, consts: [["nodeTemplate", ""], [1, "form-group", "form-inline"], ["for", "exampleFormControlSelect1"], [1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "hierarchy"], [3, "node", "nodeTemplate", 4, "ngIf"], ["href", "javascript:;", 3, "ngClass", "click"], [3, "value"], [3, "node", "nodeTemplate"]], template: function OrganizationHierarchyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrganizationHierarchyComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OrganizationHierarchyComponent_Template_select_change_6_listener($event) { return ctx.orgSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrganizationHierarchyComponent_option_8_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrganizationHierarchyComponent_app_hierarchy_10_Template, 1, 2, "app-hierarchy", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.node);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _shared_components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_8__["HierarchyComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n}\n\n.hierarchy[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.next[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.selected[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 3px #204873;\n  color: #333;\n  background: #fff;\n  font-weight: bold;\n}\n\n.form-inline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9vcmdhbml6YXRpb24taGllcmFyY2h5L29yZ2FuaXphdGlvbi1oaWVyYXJjaHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUtBO0VBQ0ksb0JBQUE7QUFGSjs7QUFLQTtFQUNJLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNJLG9CQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXItcHJvdmlzaW9uaW5nL29yZ2FuaXphdGlvbi1oaWVyYXJjaHkvb3JnYW5pemF0aW9uLWhpZXJhcmNoeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG4uaGllcmFyY2h5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNXJlbSk7XHJcbiAgICAvLyBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm5leHR7XHJcbiAgICBhbGlnbi1zZWxmOmZsZXgtZW5kO1xyXG59XHJcblxyXG4uc2VsZWN0ZWR7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCAjMjA0ODczO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSBsYWJlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrganizationHierarchyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-organization-hierarchy',
                templateUrl: './organization-hierarchy.component.html',
                styleUrls: ['./organization-hierarchy.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _user_provisioning_service__WEBPACK_IMPORTED_MODULE_3__["UserProvisioningService"] }, { type: _shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_4__["HierarchyService"] }, { type: src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-provisioning/provisioning/provisioning.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/user-provisioning/provisioning/provisioning.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProvisioningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisioningComponent", function() { return ProvisioningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_provisioning_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-provisioning.service */ "./src/app/modules/user-provisioning/user-provisioning.service.ts");
/* harmony import */ var _shared_components_stepper_stepper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/stepper/stepper.service */ "./src/app/shared/components/stepper/stepper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/stepper/stepper.component */ "./src/app/shared/components/stepper/stepper.component.ts");






class ProvisioningComponent {
    constructor(service, stepperService, router) {
        this.service = service;
        this.stepperService = stepperService;
        this.router = router;
        this.subs = [];
        this.isSuperAdmin = false;
        // public departmentAdminSteps: IStep[] = [
        //   {
        //     id: 'businessrole',
        //     label: 'Business Role'
        //   },
        //   {
        //     id: 'staffinfo',
        //     label: 'Staff Information'
        //   }
        // ];
        this.superAdminSteps = [
            {
                id: 'organization',
                label: 'Organization'
            },
            {
                id: 'department',
                label: 'Department'
            },
            {
                id: 'businessrole',
                label: 'Business Role'
            },
            {
                id: 'staffinfo',
                label: 'Staff Information'
            }
        ];
        this.steps = [];
    }
    ngOnInit() {
        var _a;
        this.isSuperAdmin = ((_a = JSON.parse(localStorage.getItem('user'))) === null || _a === void 0 ? void 0 : _a.type) === 1;
        // this.steps = this.isSuperAdmin ? this.superAdminSteps : this.departmentAdminSteps;
        this.steps = this.superAdminSteps;
        const savedSteps = localStorage.getItem('steps');
        this.subs.push(this.service.step.subscribe(step => this.watchStepChange(step)));
        if (savedSteps) {
            this.steps = JSON.parse(savedSteps);
        }
    }
    watchStepChange(step) {
        if (!step) {
            return;
        }
        switch (step.action) {
            case 'next':
                this.stepperService.next(this.steps);
                this.saveSteps();
                break;
            case 'reset':
                this.stepperService.reset(this.steps);
                this.saveSteps();
                break;
            default:
                break;
        }
    }
    saveSteps() {
        localStorage.setItem('steps', JSON.stringify(this.steps));
    }
    stepChanged(step) {
        this.saveSteps();
        this.router.navigate(['provisioning', step.id]);
    }
    ngOnDestroy() {
        localStorage.removeItem('staffProvisioning');
        this.service.clearStepSource();
        localStorage.removeItem('steps');
        this.subs.forEach(x => x.unsubscribe());
    }
}
ProvisioningComponent.ɵfac = function ProvisioningComponent_Factory(t) { return new (t || ProvisioningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_provisioning_service__WEBPACK_IMPORTED_MODULE_1__["UserProvisioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_stepper_stepper_service__WEBPACK_IMPORTED_MODULE_2__["StepperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProvisioningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProvisioningComponent, selectors: [["app-provisioning"]], decls: 3, vars: 1, consts: [[3, "steps", "onchanged"], [1, "step"]], template: function ProvisioningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-stepper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onchanged", function ProvisioningComponent_Template_app_stepper_onchanged_0_listener($event) { return ctx.stepChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("steps", ctx.steps);
    } }, directives: [_shared_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_4__["StepperComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".step[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9wcm92aXNpb25pbmcvcHJvdmlzaW9uaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9wcm92aXNpb25pbmcvcHJvdmlzaW9uaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXB7XHJcbiAgICBwYWRkaW5nOi41cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProvisioningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-provisioning',
                templateUrl: './provisioning.component.html',
                styleUrls: ['./provisioning.component.scss']
            }]
    }], function () { return [{ type: _user_provisioning_service__WEBPACK_IMPORTED_MODULE_1__["UserProvisioningService"] }, { type: _shared_components_stepper_stepper_service__WEBPACK_IMPORTED_MODULE_2__["StepperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-provisioning/staff-information/staff-information.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/user-provisioning/staff-information/staff-information.component.ts ***!
  \********************************************************************************************/
/*! exports provided: StaffInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffInformationComponent", function() { return StaffInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_provisioning_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-provisioning.service */ "./src/app/modules/user-provisioning/user-provisioning.service.ts");
/* harmony import */ var src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/api.service */ "./src/app/shared/service/api.service.ts");








class StaffInformationComponent {
    constructor(router, service, formBuilder, apiService) {
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            staffNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            toDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    save() {
        if (this.form.invalid) {
            return;
        }
        const formData = this.form.value;
        const localData = JSON.parse(localStorage.getItem('staffProvisioning'));
        const data = {
            department_id: localData.department.id,
            organization_id: localData.organization.id,
            business_role_ids: localData.businessRole.business_role_ids.map(x => x.id),
            channel_id: localData.businessRole.channel,
            jobDuty_id: localData.businessRole.jobDuty,
            teams_id: localData.businessRole.team,
            name: formData.name,
            staff_number: formData.staffNumber,
            email: formData.email,
            to_date: formData.toDate,
            from_date: formData.fromDate,
        };
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].staticData) {
            localStorage.removeItem('staffProvisioning');
            this.service.resetSTep();
            this.router.navigate(['provisioning', 'organization']);
            return;
        }
        this.apiService.create('staff', data).subscribe(x => {
            alert('Success');
            localStorage.removeItem('staffProvisioning');
            this.service.resetSTep();
            this.router.navigate(['provisioning', 'organization']);
        });
    }
}
StaffInformationComponent.ɵfac = function StaffInformationComponent_Factory(t) { return new (t || StaffInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_provisioning_service__WEBPACK_IMPORTED_MODULE_4__["UserProvisioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
StaffInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StaffInformationComponent, selectors: [["app-staff-information"]], decls: 24, vars: 1, consts: [[3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "staffNumber", 1, "form-control"], ["type", "text", "formControlName", "name", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], [1, "form-group", "date"], ["type", "date", "formControlName", "fromDate", 1, "form-control"], ["type", "date", "formControlName", "toDate", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function StaffInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Staff Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "To Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StaffInformationComponent_Template_button_click_22_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-flow: column;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 22rem;\n  padding: 2rem 0;\n}\n\n.date[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.date[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 49%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9zdGFmZi1pbmZvcm1hdGlvbi9zdGFmZi1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVJO0VBQ0ksVUFBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9zdGFmZi1pbmZvcm1hdGlvbi9zdGFmZi1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDIycmVtO1xyXG4gICAgcGFkZGluZzoycmVtIDA7XHJcbn1cclxuXHJcbi5kYXRle1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaffInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-staff-information',
                templateUrl: './staff-information.component.html',
                styleUrls: ['./staff-information.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _user_provisioning_service__WEBPACK_IMPORTED_MODULE_4__["UserProvisioningService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-provisioning/user-provisioning-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/user-provisioning/user-provisioning-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: UserProvisioningRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProvisioningRoutingModule", function() { return UserProvisioningRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provisioning/provisioning.component */ "./src/app/modules/user-provisioning/provisioning/provisioning.component.ts");
/* harmony import */ var _organization_hierarchy_organization_hierarchy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organization-hierarchy/organization-hierarchy.component */ "./src/app/modules/user-provisioning/organization-hierarchy/organization-hierarchy.component.ts");
/* harmony import */ var _department_hierarchy_department_hierarchy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./department-hierarchy/department-hierarchy.component */ "./src/app/modules/user-provisioning/department-hierarchy/department-hierarchy.component.ts");
/* harmony import */ var _business_role_business_role_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./business-role/business-role.component */ "./src/app/modules/user-provisioning/business-role/business-role.component.ts");
/* harmony import */ var _staff_information_staff_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staff-information/staff-information.component */ "./src/app/modules/user-provisioning/staff-information/staff-information.component.ts");










const routes = [
    {
        path: '',
        component: _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_3__["ProvisioningComponent"],
        children: [
            { path: '', redirectTo: 'organization', pathMatch: 'full' },
            // {path: 'organization', component: OrganizationHierarchyComponent, canActivate: [ SuperAdminGuard ]},
            { path: 'organization', component: _organization_hierarchy_organization_hierarchy_component__WEBPACK_IMPORTED_MODULE_4__["OrganizationHierarchyComponent"] },
            { path: 'department', component: _department_hierarchy_department_hierarchy_component__WEBPACK_IMPORTED_MODULE_5__["DepartmentHierarchyComponent"] },
            { path: 'businessrole', component: _business_role_business_role_component__WEBPACK_IMPORTED_MODULE_6__["BusinessRoleComponent"] },
            { path: 'staffinfo', component: _staff_information_staff_information_component__WEBPACK_IMPORTED_MODULE_7__["StaffInformationComponent"] },
        ]
    }
];
class UserProvisioningRoutingModule {
}
UserProvisioningRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserProvisioningRoutingModule });
UserProvisioningRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserProvisioningRoutingModule_Factory(t) { return new (t || UserProvisioningRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProvisioningRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProvisioningRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/user-provisioning/user-provisioning.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/user-provisioning/user-provisioning.module.ts ***!
  \***********************************************************************/
/*! exports provided: UserProvisioningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProvisioningModule", function() { return UserProvisioningModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _user_provisioning_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-provisioning-routing.module */ "./src/app/modules/user-provisioning/user-provisioning-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _organization_hierarchy_organization_hierarchy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organization-hierarchy/organization-hierarchy.component */ "./src/app/modules/user-provisioning/organization-hierarchy/organization-hierarchy.component.ts");
/* harmony import */ var _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./provisioning/provisioning.component */ "./src/app/modules/user-provisioning/provisioning/provisioning.component.ts");
/* harmony import */ var _department_hierarchy_department_hierarchy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./department-hierarchy/department-hierarchy.component */ "./src/app/modules/user-provisioning/department-hierarchy/department-hierarchy.component.ts");
/* harmony import */ var _business_role_business_role_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./business-role/business-role.component */ "./src/app/modules/user-provisioning/business-role/business-role.component.ts");
/* harmony import */ var _staff_information_staff_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./staff-information/staff-information.component */ "./src/app/modules/user-provisioning/staff-information/staff-information.component.ts");











class UserProvisioningModule {
}
UserProvisioningModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserProvisioningModule });
UserProvisioningModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserProvisioningModule_Factory(t) { return new (t || UserProvisioningModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _user_provisioning_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserProvisioningRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProvisioningModule, { declarations: [_organization_hierarchy_organization_hierarchy_component__WEBPACK_IMPORTED_MODULE_5__["OrganizationHierarchyComponent"],
        _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_6__["ProvisioningComponent"],
        _department_hierarchy_department_hierarchy_component__WEBPACK_IMPORTED_MODULE_7__["DepartmentHierarchyComponent"],
        _business_role_business_role_component__WEBPACK_IMPORTED_MODULE_8__["BusinessRoleComponent"],
        _staff_information_staff_information_component__WEBPACK_IMPORTED_MODULE_9__["StaffInformationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _user_provisioning_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserProvisioningRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProvisioningModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _organization_hierarchy_organization_hierarchy_component__WEBPACK_IMPORTED_MODULE_5__["OrganizationHierarchyComponent"],
                    _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_6__["ProvisioningComponent"],
                    _department_hierarchy_department_hierarchy_component__WEBPACK_IMPORTED_MODULE_7__["DepartmentHierarchyComponent"],
                    _business_role_business_role_component__WEBPACK_IMPORTED_MODULE_8__["BusinessRoleComponent"],
                    _staff_information_staff_information_component__WEBPACK_IMPORTED_MODULE_9__["StaffInformationComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _user_provisioning_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserProvisioningRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/user-provisioning/user-provisioning.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/user-provisioning/user-provisioning.service.ts ***!
  \************************************************************************/
/*! exports provided: UserProvisioningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProvisioningService", function() { return UserProvisioningService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class UserProvisioningService {
    constructor() {
        this.stepSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.step = this.stepSource.asObservable();
    }
    nextStep(page) {
        this.stepSource.next({
            action: 'next',
            to: page,
        });
    }
    previousStep(page) {
        this.stepSource.next({
            action: 'back',
            to: page,
        });
    }
    resetSTep() {
        this.stepSource.next({
            action: 'reset',
        });
    }
    clearStepSource() {
        this.stepSource.next(null);
    }
}
UserProvisioningService.ɵfac = function UserProvisioningService_Factory(t) { return new (t || UserProvisioningService)(); };
UserProvisioningService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserProvisioningService, factory: UserProvisioningService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProvisioningService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/hierarchy/hierarchy.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/hierarchy/hierarchy.service.ts ***!
  \******************************************************************/
/*! exports provided: HierarchyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HierarchyService", function() { return HierarchyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HierarchyService {
    constructor() { }
    formatOrg(hierarchy) {
        const rootNode = this.getRootNode(hierarchy);
        return Object.assign(Object.assign({}, rootNode), { subNodes: this.findChildren(rootNode, hierarchy) });
    }
    findChildren(root, hierarchy) {
        // tslint:disable-next-line: triple-equals
        const children = hierarchy.filter(item => item.parent_id == root.id);
        return children.map(item => {
            return Object.assign(Object.assign({}, item), { subNodes: this.findChildren(item, hierarchy) });
        });
    }
    getRootNode(hierarchy) {
        return hierarchy.filter(item => !item.parent_id)[0];
    }
}
HierarchyService.ɵfac = function HierarchyService_Factory(t) { return new (t || HierarchyService)(); };
HierarchyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HierarchyService, factory: HierarchyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HierarchyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/stepper/stepper.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/stepper/stepper.service.ts ***!
  \**************************************************************/
/*! exports provided: StepperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperService", function() { return StepperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StepperService {
    constructor() { }
    next(steps) {
        let activeIndex = this.getActiveIndex(steps);
        if (steps.length === activeIndex + 1) {
            return;
        }
        steps[activeIndex].active = false;
        steps[activeIndex].finished = true;
        activeIndex += 1;
        steps[activeIndex].active = true;
    }
    back(steps) {
        let activeIndex = this.getActiveIndex(steps);
        if (activeIndex === 0) {
            return;
        }
        steps[activeIndex].active = false;
        activeIndex -= 1;
        steps[activeIndex].active = true;
    }
    reset(steps) {
        steps.forEach(x => {
            x.finished = false;
            x.active = false;
        });
        steps[0].active = true;
    }
    getActiveIndex(steps) {
        let activeIndex = 0;
        steps.forEach((x, i) => {
            if (x.active) {
                activeIndex = i;
            }
        });
        return activeIndex;
    }
}
StepperService.ɵfac = function StepperService_Factory(t) { return new (t || StepperService)(); };
StepperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StepperService, factory: StepperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
//# sourceMappingURL=modules-user-provisioning-user-provisioning-module.js.map