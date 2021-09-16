(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Desktop\algo-trade\src\main.ts */"zUnb");


/***/ }),

/***/ "2yFA":
/*!**************************************************************************!*\
  !*** ./src/app/core/services/api/money-control/money-control.service.ts ***!
  \**************************************************************************/
/*! exports provided: MoneyControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyControlService", function() { return MoneyControlService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class MoneyControlService {
    constructor(http) {
        this.http = http;
    }
    search(text) {
        const url = 'https://www.moneycontrol.com/mccode/common/autosuggestion_solr.php?type=1&format=json&query=' + text;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({});
        const options = { headers: headers };
        return this.http.get(url, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => this.handleError(err, 'Failed to search.')));
    }
    info(sc_did) {
        const url = 'https://www.moneycontrol.com/stocks/company_info/get_vwap_chart_data.php?sc_did=' + sc_did;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({});
        const options = { headers: headers };
        return this.http.get(url, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => this.handleError(err, 'Failed to fetch information.')));
    }
    handleError(error, where) {
        // this.toastr.error(error.message);
        switch (error.code) {
            case 400:
                for (const err of error.error) {
                    // this.toastr.error(err.message);
                }
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error || 'Server error');
    }
}
MoneyControlService.ɵfac = function MoneyControlService_Factory(t) { return new (t || MoneyControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
MoneyControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MoneyControlService, factory: MoneyControlService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MoneyControlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "6EaX":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7of8":
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ "+0xr");


// Material Form Controls









// Material Navigation



// Material Layout








// Material Buttons & Indicators








// Material Popups & Modals




// Material Data tables




class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]
        ], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]
                ],
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "7v15":
/*!************************************************************************************!*\
  !*** ./src/app/shared/common/input-auto-complete/input-auto-complete.component.ts ***!
  \************************************************************************************/
/*! exports provided: InputAutoCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputAutoCompleteComponent", function() { return InputAutoCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_services_api_money_control_money_control_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api/money-control/money-control.service */ "2yFA");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












function InputAutoCompleteComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r2.pdt_dis_nm, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class InputAutoCompleteComponent {
    constructor(moneyControl) {
        this.moneyControl = moneyControl;
        this.options = ['One', 'Two', 'Three'];
        this.autoCompleteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        this.autoCompleteOptions$ = this.autoCompleteControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), 
        // delay emits
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), 
        // use switch map so as to cancel previous subscribed events, before creating new once
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(value => {
            if (value !== '') {
                // lookup from github
                return this.lookup(value);
            }
            else {
                // if no value is present, return null
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }
        }));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    lookup(value) {
        return this.moneyControl.search(value.toLowerCase());
    }
    displayFn(item) {
        return item && item.stock_name ? item.stock_name : '';
    }
    selectedOption(evt) {
        console.log(evt);
    }
}
InputAutoCompleteComponent.ɵfac = function InputAutoCompleteComponent_Factory(t) { return new (t || InputAutoCompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_api_money_control_money_control_service__WEBPACK_IMPORTED_MODULE_4__["MoneyControlService"])); };
InputAutoCompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputAutoCompleteComponent, selectors: [["app-input-auto-complete"]], decls: 8, vars: 6, consts: [[1, "example-full-width"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete", "optionSelected"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "innerHTML"]], template: function InputAutoCompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search Stock or Indice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function InputAutoCompleteComponent_Template_input_optionSelected_3_listener($event) { return ctx.selectedOption($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InputAutoCompleteComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.autoCompleteControl)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx.autoCompleteOptions$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".example-form[_ngcontent-%COMP%] {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbW1vbi9pbnB1dC1hdXRvLWNvbXBsZXRlL2lucHV0LWF1dG8tY29tcGxldGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbW1vbi9pbnB1dC1hdXRvLWNvbXBsZXRlL2lucHV0LWF1dG8tY29tcGxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputAutoCompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-auto-complete',
                templateUrl: './input-auto-complete.component.html',
                styleUrls: ['./input-auto-complete.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_api_money_control_money_control_service__WEBPACK_IMPORTED_MODULE_4__["MoneyControlService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
    production: false
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

/***/ "FjNO":
/*!***************************************************************!*\
  !*** ./src/app/modules/money-control/money-control.module.ts ***!
  \***************************************************************/
/*! exports provided: MoneyControlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyControlModule", function() { return MoneyControlModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _money_control_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./money-control-routing.module */ "d00+");
/* harmony import */ var _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/navigation/navigation.component */ "mXJB");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");











class MoneyControlModule {
}
MoneyControlModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoneyControlModule });
MoneyControlModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoneyControlModule_Factory(t) { return new (t || MoneyControlModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _money_control_routing_module__WEBPACK_IMPORTED_MODULE_2__["MoneyControlRoutingModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoneyControlModule, { declarations: [_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _money_control_routing_module__WEBPACK_IMPORTED_MODULE_2__["MoneyControlRoutingModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoneyControlModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _money_control_routing_module__WEBPACK_IMPORTED_MODULE_2__["MoneyControlRoutingModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "IZGT":
/*!************************************************************************!*\
  !*** ./src/app/shared/layout/right-sidebar/right-sidebar.component.ts ***!
  \************************************************************************/
/*! exports provided: RightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return RightSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RightSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) { return new (t || RightSidebarComponent)(); };
RightSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RightSidebarComponent, selectors: [["app-right-sidebar"]], decls: 2, vars: 0, template: function RightSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "right-sidebar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvcmlnaHQtc2lkZWJhci9yaWdodC1zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-right-sidebar',
                templateUrl: './right-sidebar.component.html',
                styleUrls: ['./right-sidebar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/layout/navigation/navigation.component */ "sTtT");



class AppComponent {
    constructor() {
        this.title = 'algo-trade';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
    } }, directives: [_shared_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/layout/header/header.component */ "6EaX");
/* harmony import */ var _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/layout/footer/footer.component */ "r7Ig");
/* harmony import */ var _shared_layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/layout/right-sidebar/right-sidebar.component */ "IZGT");
/* harmony import */ var _shared_layout_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/layout/left-sidebar/left-sidebar.component */ "hlFf");
/* harmony import */ var _shared_common_input_auto_complete_input_auto_complete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/common/input-auto-complete/input-auto-complete.component */ "7v15");
/* harmony import */ var _shared_common_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/common/dynamic-table/dynamic-table.component */ "uctB");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/material/material.module */ "7of8");
/* harmony import */ var _modules_money_control_money_control_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/money-control/money-control.module */ "FjNO");
/* harmony import */ var _shared_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/layout/navigation/navigation.component */ "sTtT");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _shared_layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/layout/dashboard/dashboard.component */ "cCQY");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ "STbY");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _modules_material_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
            _modules_money_control_money_control_module__WEBPACK_IMPORTED_MODULE_13__["MoneyControlModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _shared_layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["RightSidebarComponent"],
        _shared_layout_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["LeftSidebarComponent"],
        _shared_common_input_auto_complete_input_auto_complete_component__WEBPACK_IMPORTED_MODULE_9__["InputAutoCompleteComponent"],
        _shared_common_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_10__["DynamicTableComponent"],
        _shared_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__["NavigationComponent"],
        _shared_layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _modules_material_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
        _modules_money_control_money_control_module__WEBPACK_IMPORTED_MODULE_13__["MoneyControlModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _shared_layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["RightSidebarComponent"],
                    _shared_layout_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["LeftSidebarComponent"],
                    _shared_common_input_auto_complete_input_auto_complete_component__WEBPACK_IMPORTED_MODULE_9__["InputAutoCompleteComponent"],
                    _shared_common_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_10__["DynamicTableComponent"],
                    _shared_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__["NavigationComponent"],
                    _shared_layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _modules_material_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                    _modules_money_control_money_control_module__WEBPACK_IMPORTED_MODULE_13__["MoneyControlModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cCQY":
/*!****************************************************************!*\
  !*** ./src/app/shared/layout/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _common_input_auto_complete_input_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/input-auto-complete/input-auto-complete.component */ "7v15");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function DashboardComponent_mat_grid_tile_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Expand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Card Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", card_r1.cols)("rowspan", card_r1.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
} }
class DashboardComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ matches }) => {
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 10, vars: 3, consts: [[1, "grid-container"], [1, "mat-h1"], ["cols", "1", "rowHeight", "100px"], [1, "dashboard-card"], [1, "dashboard-card-content"], ["cols", "2", "rowHeight", "350px"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "more-button", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-input-auto-complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_mat_grid_tile_8_Template, 17, 4, "mat-grid-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 1, ctx.cards));
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _common_input_auto_complete_input_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__["InputAutoCompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3R0b206IDE1cHg7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "d00+":
/*!***********************************************************************!*\
  !*** ./src/app/modules/money-control/money-control-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: MoneyControlRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyControlRoutingModule", function() { return MoneyControlRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class MoneyControlRoutingModule {
}
MoneyControlRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoneyControlRoutingModule });
MoneyControlRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoneyControlRoutingModule_Factory(t) { return new (t || MoneyControlRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoneyControlRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoneyControlRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hlFf":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layout/left-sidebar/left-sidebar.component.ts ***!
  \**********************************************************************/
/*! exports provided: LeftSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSidebarComponent", function() { return LeftSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LeftSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
LeftSidebarComponent.ɵfac = function LeftSidebarComponent_Factory(t) { return new (t || LeftSidebarComponent)(); };
LeftSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftSidebarComponent, selectors: [["app-left-sidebar"]], decls: 2, vars: 0, template: function LeftSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "left-sidebar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvbGVmdC1zaWRlYmFyL2xlZnQtc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-left-sidebar',
                templateUrl: './left-sidebar.component.html',
                styleUrls: ['./left-sidebar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mXJB":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/money-control/layout/navigation/navigation.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function NavigationComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavigationComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 21, vars: 12, consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", "href", "#"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavigationComponent_button_17_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "algo-trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 10, ctx.isHandset$));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tb25leS1jb250cm9sL2xheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tb25leS1jb250cm9sL2xheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "r7Ig":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sTtT":
/*!******************************************************************!*\
  !*** ./src/app/shared/layout/navigation/navigation.component.ts ***!
  \******************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "cCQY");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function NavigationComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavigationComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 22, vars: 12, consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", "href", "#"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavigationComponent_button_17_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "algo-trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 10, ctx.isHandset$));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "uctB":
/*!************************************************************************!*\
  !*** ./src/app/shared/common/dynamic-table/dynamic-table.component.ts ***!
  \************************************************************************/
/*! exports provided: DynamicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicTableComponent", function() { return DynamicTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function DynamicTableComponent_ng_container_2_mat_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r4.header);
} }
function DynamicTableComponent_ng_container_2_mat_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r4.cell(row_r8));
} }
function DynamicTableComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicTableComponent_ng_container_2_mat_header_cell_1_Template, 2, 1, "mat-header-cell", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicTableComponent_ng_container_2_mat_cell_2_Template, 2, 1, "mat-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkColumnDef", column_r4.columnDef);
} }
function DynamicTableComponent_mat_header_row_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function DynamicTableComponent_mat_row_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
class DynamicTableComponent {
    ngOnInit() {
        // Get list of columns by gathering unique keys of objects found in DATA.
        const columns = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(this.columns);
        // .reduce((columns, row) => {
        //   return [...columns, ...Object.keys(row)]
        // }, [])
        // .reduce((columns, column) => {
        //   return columns.includes(column)
        //     ? columns
        //     : [...columns, column]
        // }, [])
        console.log(columns);
        // Describe the columns for <mat-table>.
        this.tableColumns = columns.map(column => {
            return Object.assign(Object.assign({}, column), { cell: (element) => `${lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(element, column.columnDef) ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(element, column.columnDef) : ``}` });
        });
        console.log(this.tableColumns);
        this.displayedColumns = this.tableColumns.map(c => c.columnDef);
        console.log(this.columns);
        // Set the dataSource for <mat-table>.
        this.dataSource = this.data;
        // console.log('', this.dataSource);
    }
    ngOnChanges(changes) {
        // Extract changes to the input property by its name
        const data = changes['data'];
        if (data && data.currentValue) {
            // console.log('data', data);
            console.log('dynamic-table', data);
            this.ngOnInit();
        }
        const columns = changes['columns'];
        if (columns && columns.currentValue) {
            // console.log('data', data);
            console.log('dynamic-table', columns);
            this.ngOnInit();
        }
    }
}
DynamicTableComponent.ɵfac = function DynamicTableComponent_Factory(t) { return new (t || DynamicTableComponent)(); };
DynamicTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicTableComponent, selectors: [["app-dynamic-table"]], inputs: { columns: "columns", data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 4, consts: [[3, "dataSource"], ["table", ""], [3, "cdkColumnDef", 4, "ngFor", "ngForOf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "cdkColumnDef"], [4, "cdkHeaderCellDef"], [4, "cdkCellDef"]], template: function DynamicTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicTableComponent_ng_container_2_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicTableComponent_mat_header_row_3_Template, 1, 0, "mat-header-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicTableComponent_mat_row_4_Template, 1, 0, "mat-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21tb24vZHluYW1pYy10YWJsZS9keW5hbWljLXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dynamic-table',
                templateUrl: './dynamic-table.component.html',
                styleUrls: ['./dynamic-table.component.scss']
            }]
    }], null, { columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map