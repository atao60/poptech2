(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "ECIX":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/theme-toggler/theme-toggler.component.ts ***!
  \****************************************************************************/
/*! exports provided: ThemeTogglerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeTogglerComponent", function() { return ThemeTogglerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/theme.service */ "ETNk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ThemeTogglerComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83C\uDF1C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ThemeTogglerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83C\uDF1E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ThemeTogglerComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.positionClass = '';
        this.ariaLabel = 'Dark and Light mode toggle button';
        this.current = _services_theme_service__WEBPACK_IMPORTED_MODULE_1__["Scheme"][this.themeService.scheme];
    }
    // For disabling Angular
    // @HostBinding('id') togglerId = 'themeToggler';
    get themeTogglerClasses() {
        return `w-10 h-10 lg:flex lg:items-center lg:justify-center cursor-pointer ${this.positionClass}`;
    }
    onClick() {
        this.themeService.update();
        this.current = _services_theme_service__WEBPACK_IMPORTED_MODULE_1__["Scheme"][this.themeService.scheme];
    }
}
ThemeTogglerComponent.ɵfac = function ThemeTogglerComponent_Factory(t) { return new (t || ThemeTogglerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"])); };
ThemeTogglerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThemeTogglerComponent, selectors: [["app-theme-toggler"]], hostVars: 3, hostBindings: function ThemeTogglerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemeTogglerComponent_click_HostBindingHandler() { return ctx.onClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.themeTogglerClasses);
    } }, inputs: { positionClass: "positionClass" }, decls: 4, vars: 2, consts: [[1, "w-full", "h-full", "text-2xl"], [4, "ngIf", "ngIfElse"], ["light", ""]], template: function ThemeTogglerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ThemeTogglerComponent_span_1_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ThemeTogglerComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === "dark")("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeTogglerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-theme-toggler',
                template: `
    <div class="w-full h-full text-2xl">
      <span *ngIf="current === 'dark'; else light">🌜</span>
      <ng-template #light>
        <span>🌞</span>
      </ng-template>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }]; }, { positionClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], themeTogglerClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-label']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "L1Gp":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/theme-toggler/theme-toggler.module.ts ***!
  \*************************************************************************/
/*! exports provided: ThemeTogglerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeTogglerModule", function() { return ThemeTogglerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _theme_toggler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-toggler.component */ "ECIX");




class ThemeTogglerModule {
}
ThemeTogglerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ThemeTogglerModule });
ThemeTogglerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ThemeTogglerModule_Factory(t) { return new (t || ThemeTogglerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThemeTogglerModule, { declarations: [_theme_toggler_component__WEBPACK_IMPORTED_MODULE_2__["ThemeTogglerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_theme_toggler_component__WEBPACK_IMPORTED_MODULE_2__["ThemeTogglerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeTogglerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_theme_toggler_component__WEBPACK_IMPORTED_MODULE_2__["ThemeTogglerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_theme_toggler_component__WEBPACK_IMPORTED_MODULE_2__["ThemeTogglerComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map