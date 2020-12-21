(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "/6OK":
/*!**********************************************************************!*\
  !*** ./src/app/home/components/social-icon/social-icon.component.ts ***!
  \**********************************************************************/
/*! exports provided: Social, SocialIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Social", function() { return Social; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialIconComponent", function() { return SocialIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var Social;
(function (Social) {
    Social[Social["Facebook"] = 0] = "Facebook";
    Social[Social["Github"] = 1] = "Github";
    Social[Social["LinkedIn"] = 2] = "LinkedIn";
    Social[Social["Twitter"] = 3] = "Twitter";
    Social[Social["Stackoverflow"] = 4] = "Stackoverflow";
    Social[Social["Youtube"] = 5] = "Youtube";
    Social[Social["Email"] = 6] = "Email";
})(Social || (Social = {}));
;
const socialIcons = {
    [Social.Github]: `M13.18,11.309c-0.718,0-1.3,0.807-1.3,1.799c0,0.994,0.582,1.801,1.3,1.801s1.3-0.807,1.3-1.801
  C14.479,12.116,13.898,11.309,13.18,11.309z M17.706,6.626c0.149-0.365,0.155-2.439-0.635-4.426c0,0-1.811,0.199-4.551,2.08
  c-0.575-0.16-1.548-0.238-2.519-0.238c-0.973,0-1.945,0.078-2.52,0.238C4.74,2.399,2.929,2.2,2.929,2.2
  C2.14,4.187,2.148,6.261,2.295,6.626C1.367,7.634,0.8,8.845,0.8,10.497c0,7.186,5.963,7.301,7.467,7.301
  c0.342,0,1.018,0.002,1.734,0.002c0.715,0,1.392-0.002,1.732-0.002c1.506,0,7.467-0.115,7.467-7.301
  C19.2,8.845,18.634,7.634,17.706,6.626z M10.028,16.915H9.972c-3.771,0-6.709-0.449-6.709-4.115c0-0.879,0.31-1.693,1.047-2.369
  c1.227-1.127,3.305-0.531,5.662-0.531c0.01,0,0.02,0,0.029,0c0.01,0,0.018,0,0.027,0c2.357,0,4.436-0.596,5.664,0.531
  c0.735,0.676,1.045,1.49,1.045,2.369C16.737,16.466,13.8,16.915,10.028,16.915z M6.821,11.309c-0.718,0-1.3,0.807-1.3,1.799
  c0,0.994,0.582,1.801,1.3,1.801c0.719,0,1.301-0.807,1.301-1.801C8.122,12.116,7.54,11.309,6.821,11.309z`,
    [Social.Facebook]: `M17,1H3C1.9,1,1,1.9,1,3v14c0,1.101,0.9,2,2,2h7v-7H8V9.525h2V7.475c0-2.164,1.212-3.684,3.766-3.684l1.803,
  0.002v2.605h-1.197C13.378,6.398,13,7.144,13,7.836v1.69h2.568L15,12h-2v7h4c1.1,0,2-0.899,2-2V3C19,1.9,18.1,1,17,1z`,
    [Social.Twitter]: `M17.316,6.246c0.008,0.162,0.011,0.326,0.011,0.488c0,4.99-3.797,10.742-10.74,10.742c-2.133,0-4.116-0.625-5.787-1.697
  c0.296,0.035,0.596,0.053,0.9,0.053c1.77,0,3.397-0.604,4.688-1.615c-1.651-0.031-3.046-1.121-3.526-2.621
  c0.23,0.043,0.467,0.066,0.71,0.066c0.345,0,0.679-0.045,0.995-0.131c-1.727-0.348-3.028-1.873-3.028-3.703c0-0.016,0-0.031,0-0.047
  c0.509,0.283,1.092,0.453,1.71,0.473c-1.013-0.678-1.68-1.832-1.68-3.143c0-0.691,0.186-1.34,0.512-1.898
  C3.942,5.498,6.725,7,9.862,7.158C9.798,6.881,9.765,6.594,9.765,6.297c0-2.084,1.689-3.773,3.774-3.773
  c1.086,0,2.067,0.457,2.756,1.191c0.859-0.17,1.667-0.484,2.397-0.916c-0.282,0.881-0.881,1.621-1.66,2.088
  c0.764-0.092,1.49-0.293,2.168-0.594C18.694,5.051,18.054,5.715,17.316,6.246z`,
    [Social.LinkedIn]: `M5,3c0,1.1-0.7,2-2,2C1.8,5,1,4.1,1,3.1C1,2,1.8,1,3,1S5,1.9,5,3z M1,19h4V6H1V19z M14.6,6.2c-2.1,0-3.3,1.2-3.8,2h-0.1
  l-0.2-1.7H6.9C6.9,7.6,7,8.9,7,10.4V19h4v-7.1c0-0.4,0-0.7,0.1-1c0.3-0.7,0.8-1.6,1.9-1.6c1.4,0,2,1.2,2,2.8V19h4v-7.4
  C19,7.9,17.1,6.2,14.6,6.2z`,
    [Social.Stackoverflow]: `M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z`,
    [Social.Youtube]: `M10,2.3C0.172,2.3,0,3.174,0,10s0.172,7.7,10,7.7s10-0.874,10-7.7S19.828,2.3,10,2.3z M13.205,10.334l-4.49,2.096
  C8.322,12.612,8,12.408,8,11.974V8.026C8,7.593,8.322,7.388,8.715,7.57l4.49,2.096C13.598,9.85,13.598,10.15,13.205,10.334z`,
    [Social.Email]: `M1.574,5.286c0.488,0.262,7.248,3.894,7.5,4.029C9.326,9.45,9.652,9.514,9.98,9.514c0.328,0,0.654-0.064,0.906-0.199s7.012-3.767,7.5-4.029C18.875,5.023,19.337,4,18.44,4H1.521C0.624,4,1.086,5.023,1.574,5.286zM18.613,7.489c-0.555,0.289-7.387,3.849-7.727,4.027s-0.578,0.199-0.906,0.199s-0.566-0.021-0.906-0.199S1.941,7.777,1.386,7.488C0.996,7.284,1,7.523,1,7.707S1,15,1,15c0,0.42,0.566,1,1,1h16c0.434,0,1-0.58,1-1c0,0,0-7.108,0-7.292S19.004,7.285,18.613,7.489z`
};
class SocialIconComponent {
    constructor() {
        this.socialTag = '';
        this.socialData = '';
    }
    ngOnChanges() {
        if (!this.socialId) {
            this.socialTag = '';
            this.socialData = '';
            return;
        }
        this.socialTag = Social[this.socialId];
        this.socialData = socialIcons[this.socialId];
    }
}
SocialIconComponent.ɵfac = function SocialIconComponent_Factory(t) { return new (t || SocialIconComponent)(); };
SocialIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialIconComponent, selectors: [["app-social-icon"]], hostAttrs: [1, "w-10", "h-10"], inputs: { socialId: "socialId", link: "link" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 4, consts: [["rel", "noreferrer", "target", "_blank", 1, "w-full", "h-full", "rounded-full", "overflow-hidden", "flex", "items-center", "justify-center", "cursor-pointer", "border", "border-gray-300", "hover:text-primary", "hover:border-primary", "transition-colors", "duration-200", "ease-in-out", 3, "href"], ["stroke", "currentColor", "fill", "currentColor", "stroke-width", "0", "xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "viewBox", "0 0 20 20", "enable-background", "new 0 0 20 20", 0, "xml", "space", "preserve", 1, "text-xs", "w-1/2", 3, "id"]], template: function SocialIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Link to " + ctx.socialTag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.socialTag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx.socialData);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-icon',
                template: `
    <a class="w-full h-full rounded-full overflow-hidden flex items-center justify-center cursor-pointer border border-gray-300 hover:text-primary hover:border-primary transition-colors duration-200 ease-in-out"
       [href]="link"
       rel="noreferrer"
       target="_blank"
       [attr.aria-label]="'Link to ' + socialTag"
    >
      <svg class="text-xs w-1/2"
           stroke="currentColor"
           fill="currentColor"
           stroke-width="0"
           [id]="socialTag"
           xmlns="http://www.w3.org/2000/svg"
           x="0px"
           y="0px"
           viewBox="0 0 20 20"
           enable-background="new 0 0 20 20"
           xml:space="preserve"
      >
          <path [attr.d]="socialData" />
      </svg>
    </a>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    class: 'w-10 h-10',
                }
            }]
    }], null, { socialId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "/CmE":
/*!********************************************************************!*\
  !*** ./src/app/home/components/navigation/navigation.component.ts ***!
  \********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function () { return ["/about"]; };
class NavigationComponent {
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 5, vars: 8, consts: [[1, "flex", "flex-row", "lg:flex-col", "items-center", "lg:items-start", "mb-4"], ["routerLinkActive", "text-primary underline", 1, "mb-0", "lg:mb-2", "transition-colors", "duration-200", "ease-in-out", "hover:underline", "hover:text-primary", "cursor-pointer", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "text-primary underline", 1, "mb-0", "ml-2", "lg:mb-2", "lg:ml-0", "transition-colors", "duration-200", "ease-in-out", "hover:underline", "hover:text-primary", "cursor-pointer", 3, "routerLink", "routerLinkActiveOptions"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                template: `
    <nav class="flex flex-row lg:flex-col items-center lg:items-start mb-4">
      <a class="mb-0 lg:mb-2 transition-colors duration-200 ease-in-out hover:underline hover:text-primary cursor-pointer"
         [routerLink]="['/']"
         routerLinkActive="text-primary underline"
         [routerLinkActiveOptions]="{ exact: true }"
      >Blog</a>
      <a class="mb-0 ml-2 lg:mb-2 lg:ml-0 transition-colors duration-200 ease-in-out hover:underline hover:text-primary cursor-pointer"
         [routerLink]="['/about']"
         routerLinkActive="text-primary underline"
         [routerLinkActiveOptions]="{ exact: true }"
      >Welcome</a>
    </nav>
  `,
                styles: [],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_theme_toggler_theme_toggler_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/theme-toggler/theme-toggler.component */ "ECIX");
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/avatar/avatar.component */ "x+lr");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/info/info.component */ "n2wJ");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "/CmE");
/* harmony import */ var _components_socials_socials_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/socials/socials.component */ "k/rx");
/* harmony import */ var _components_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/copyright/copyright.component */ "Mj98");
/* harmony import */ var _components_credits_credits_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/credits/credits.component */ "wc3C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 0, consts: [[1, "grid", "gap-x-4", "grid-cols-1", "lg:grid-cols-4"], [1, "col-span-4", "lg:col-span-1"], [1, "max-w-full", "lg:max-w-sm", "rounded", "overflow-hidden", "shadow-common", "p-4", "relative"], ["positionClass", "absolute top-1 right-1"], [1, "col-span-4", "lg:col-span-3"], [1, "rounded", "overflow-hidden", "shadow-common", "p-4", "lg:overflow-auto", "lg:max-h-220"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aside", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-theme-toggler", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-socials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-copyright");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-credits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_theme_toggler_theme_toggler_component__WEBPACK_IMPORTED_MODULE_1__["ThemeTogglerComponent"], _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_2__["AvatarComponent"], _components_info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"], _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _components_socials_socials_component__WEBPACK_IMPORTED_MODULE_5__["SocialsComponent"], _components_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_6__["CopyrightComponent"], _components_credits_credits_component__WEBPACK_IMPORTED_MODULE_7__["CreditsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: homeRoutingComponents, HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRoutingComponents", function() { return homeRoutingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "9vUh");





const homeRoutingComponents = [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]];
const routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | blog-list-blog-list-module */ "blog-list-blog-list-module").then(__webpack_require__.bind(null, /*! ./blog-list/blog-list.module */ "uIET")).then(m => m.BlogListModule)
            },
            {
                path: 'about',
                loadChildren: () => __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ./about/about.module */ "Wka3")).then(m => m.AboutModule)
            }
        ]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Mj98":
/*!******************************************************************!*\
  !*** ./src/app/home/components/copyright/copyright.component.ts ***!
  \******************************************************************/
/*! exports provided: CopyrightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightComponent", function() { return CopyrightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CopyrightComponent {
}
CopyrightComponent.ɵfac = function CopyrightComponent_Factory(t) { return new (t || CopyrightComponent)(); };
CopyrightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CopyrightComponent, selectors: [["app-copyright"]], hostAttrs: [1, "flex", "flex-row", "lg:flex-col"], decls: 2, vars: 0, consts: [[1, "text-gray-medium", "font-thin", "text-sm"]], template: function CopyrightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pierre Raoul \u00A9 2020 - All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CopyrightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-copyright',
                template: `
    <p class="text-gray-medium font-thin text-sm">Pierre Raoul © 2020 - All rights reserved</p>
  `,
                styles: [],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    class: 'flex flex-row lg:flex-col',
                }
            }]
    }], null, null); })();


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "/CmE");
/* harmony import */ var _shared_components_theme_toggler_theme_toggler_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/theme-toggler/theme-toggler.module */ "L1Gp");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/info/info.component */ "n2wJ");
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/avatar/avatar.component */ "x+lr");
/* harmony import */ var _components_socials_socials_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/socials/socials.component */ "k/rx");
/* harmony import */ var _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/social-icon/social-icon.component */ "/6OK");
/* harmony import */ var _components_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/copyright/copyright.component */ "Mj98");
/* harmony import */ var _components_credits_credits_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/credits/credits.component */ "wc3C");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home.component */ "9vUh");













class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_components_theme_toggler_theme_toggler_module__WEBPACK_IMPORTED_MODULE_4__["ThemeTogglerModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _components_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"], _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__["AvatarComponent"], _components_socials_socials_component__WEBPACK_IMPORTED_MODULE_7__["SocialsComponent"], _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_8__["SocialIconComponent"], _components_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_9__["CopyrightComponent"], _components_credits_credits_component__WEBPACK_IMPORTED_MODULE_10__["CreditsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_components_theme_toggler_theme_toggler_module__WEBPACK_IMPORTED_MODULE_4__["ThemeTogglerModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]], exports: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _components_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"], _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__["AvatarComponent"], _components_socials_socials_component__WEBPACK_IMPORTED_MODULE_7__["SocialsComponent"], _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_8__["SocialIconComponent"], _components_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_9__["CopyrightComponent"], _components_credits_credits_component__WEBPACK_IMPORTED_MODULE_10__["CreditsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [..._home_routing_module__WEBPACK_IMPORTED_MODULE_2__["homeRoutingComponents"], _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _components_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"], _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__["AvatarComponent"], _components_socials_socials_component__WEBPACK_IMPORTED_MODULE_7__["SocialsComponent"], _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_8__["SocialIconComponent"], _components_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_9__["CopyrightComponent"], _components_credits_credits_component__WEBPACK_IMPORTED_MODULE_10__["CreditsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_components_theme_toggler_theme_toggler_module__WEBPACK_IMPORTED_MODULE_4__["ThemeTogglerModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
                ],
                exports: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _components_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"], _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__["AvatarComponent"], _components_socials_socials_component__WEBPACK_IMPORTED_MODULE_7__["SocialsComponent"], _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_8__["SocialIconComponent"], _components_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_9__["CopyrightComponent"], _components_credits_credits_component__WEBPACK_IMPORTED_MODULE_10__["CreditsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "k/rx":
/*!**************************************************************!*\
  !*** ./src/app/home/components/socials/socials.component.ts ***!
  \**************************************************************/
/*! exports provided: SocialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialsComponent", function() { return SocialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../social-icon/social-icon.component */ "/6OK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SocialsComponent_app_social_icon_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-social-icon", 1);
} if (rf & 2) {
    const social_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("socialId", social_r1.id)("link", social_r1.link);
} }
const socials = [
    { id: _social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_1__["Social"].Github, link: 'https://github.com/atao60' },
    { id: _social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_1__["Social"].Stackoverflow, link: 'https://stackoverflow.com/users/1921503/atao' },
    { id: _social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_1__["Social"].Email, link: 'mailto:atao60.dev@gmail.com' }
];
class SocialsComponent {
    constructor() {
        this.socials = socials;
    }
}
SocialsComponent.ɵfac = function SocialsComponent_Factory(t) { return new (t || SocialsComponent)(); };
SocialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialsComponent, selectors: [["app-socials"]], hostAttrs: [1, "w-full", "lg:w-1/2", "grid", "grid-cols-6", "lg:grid-cols-3", "gap-2", "mb-4"], decls: 1, vars: 1, consts: [[3, "socialId", "link", 4, "ngFor", "ngForOf"], [3, "socialId", "link"]], template: function SocialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SocialsComponent_app_social_icon_0_Template, 1, 2, "app-social-icon", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socials);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_1__["SocialIconComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-socials',
                template: `
    <app-social-icon
      *ngFor="let social of socials"
      [socialId]="social.id"
      [link]="social.link"
    ></app-social-icon>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    class: 'w-full lg:w-1/2 grid grid-cols-6 lg:grid-cols-3 gap-2 mb-4',
                },
            }]
    }], null, null); })();


/***/ }),

/***/ "n2wJ":
/*!********************************************************!*\
  !*** ./src/app/home/components/info/info.component.ts ***!
  \********************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InfoComponent {
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], decls: 4, vars: 0, consts: [[1, "font-bold", "mb-4", "text-xl"], [1, "font-hairline", "mb-4"]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PopTech Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Yet another dev blog... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info',
                template: `
    <p class="font-bold mb-4 text-xl">PopTech Blog</p>
    <p class="font-hairline mb-4">
      Yet another dev blog...
    </p>
  `,
                styles: [],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "wc3C":
/*!**************************************************************!*\
  !*** ./src/app/home/components/credits/credits.component.ts ***!
  \**************************************************************/
/*! exports provided: CreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsComponent", function() { return CreditsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CreditsComponent {
}
CreditsComponent.ɵfac = function CreditsComponent_Factory(t) { return new (t || CreditsComponent)(); };
CreditsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreditsComponent, selectors: [["app-credits"]], decls: 10, vars: 0, consts: [[1, "text-gray-medium", "font-thin", "text-sm", "ml-1", "mt-0", "lg:mt-2", "lg:ml-0"], ["href", "https://angular.io", "rel", "noreferrer", "target", "_blank", 1, "cursor-pointer", "text-primary", "hover:underline"], ["href", "https://scully.io", "rel", "noreferrer", "target", "_blank", 1, "cursor-pointer", "text-primary", "hover:underline"], ["href", "https://tailwindcss.com", "rel", "noreferrer", "target", "_blank", 1, "cursor-pointer", "text-primary", "hover:underline"]], template: function CreditsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Built with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " , ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Scully ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Tailwind ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-credits',
                template: `
    <p class="text-gray-medium font-thin text-sm ml-1 mt-0 lg:mt-2 lg:ml-0">
      Built with
      <a
        href="https://angular.io"
        rel="noreferrer"
        target="_blank"
        class="cursor-pointer text-primary hover:underline"
      >
        Angular
      </a>
      , 
      <a
        href="https://scully.io"
        rel="noreferrer"
        target="_blank"
        class="cursor-pointer text-primary hover:underline"
      >
        Scully
      </a>
      and 
      <a
        href="https://tailwindcss.com"
        rel="noreferrer"
        target="_blank"
        class="cursor-pointer text-primary hover:underline"
      >
        Tailwind
      </a>
    </p>
  `,
                styles: [],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "x+lr":
/*!************************************************************!*\
  !*** ./src/app/home/components/avatar/avatar.component.ts ***!
  \************************************************************/
/*! exports provided: AvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AvatarComponent {
}
AvatarComponent.ɵfac = function AvatarComponent_Factory(t) { return new (t || AvatarComponent)(); };
AvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AvatarComponent, selectors: [["app-avatar"]], decls: 3, vars: 0, consts: [["role", "img", "aria-label", "Avatar of the blog author", 1, "w-16", "h-16", "relative", "mb-4", "pointer-events-none"], [1, "group", "w-full", "h-full", "rounded-full", "border-4", "border-transparent", "text-center", "flex", "items-center", "relative", "avatar"], ["src", "assets/img/poptech.jpg", "alt", "avatar", "width", "64", "height", "64", 1, "object-cover", "object-center", "rounded-full", "w-full", "h-full", "visible", "group-hover:hidden"]], template: function AvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".avatar[_ngcontent-%COMP%] {\n  background-clip: padding-box;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtFQUE4QixlQUFBO0FBRWhDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDsgLyogIWltcG9ydGFudCAqL1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvatarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-avatar',
                template: `
    <div
      class="w-16 h-16 relative mb-4 pointer-events-none"
      role="img"
      aria-label="Avatar of the blog author"
    >
      <div
        class="group w-full h-full rounded-full border-4 border-transparent text-center flex items-center relative avatar"
      >
        <img
          src="assets/img/poptech.jpg"
          alt="avatar"
          class="object-cover object-center rounded-full w-full h-full visible group-hover:hidden"
          width="64"
          height="64"
        />
      </div>
    </div>
  `,
                styleUrls: ['./avatar.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map