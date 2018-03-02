webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__useraccount_useraccount_component__ = __webpack_require__("./src/app/useraccount/useraccount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__useraccount_userachievement_userachievement_component__ = __webpack_require__("./src/app/useraccount/userachievement/userachievement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__useraccount_userhistory_userhistory_component__ = __webpack_require__("./src/app/useraccount/userhistory/userhistory.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/useraccount/achievement', pathMatch: 'full' },
    { path: 'useraccount', component: __WEBPACK_IMPORTED_MODULE_2__useraccount_useraccount_component__["a" /* UseraccountComponent */],
        children: [
            { path: '', redirectTo: 'achievement', pathMatch: 'full' },
            { path: 'achievement', component: __WEBPACK_IMPORTED_MODULE_3__useraccount_userachievement_userachievement_component__["a" /* UserachievementComponent */] },
            { path: 'history', component: __WEBPACK_IMPORTED_MODULE_4__useraccount_userhistory_userhistory_component__["a" /* UserhistoryComponent */] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#screen{\r\n\tmin-height: 100vh;\r\n\twidth: 100%;\r\n}\r\n#globalNavbar{\r\n\twidth: 15rem;\r\n\tcolor: #fff;\r\n}\r\n#globalNavbar>div.routerBar{\r\n\twidth: 100%;\r\n\theight: calc(100% - 100px);\r\n\tbackground-image: url('Navbar_BG.a693c83b2b3e29051d3e.jpg');\r\n\tbackground-repeat: round;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n}\r\n#globalNavbar>div.navbar-title{\r\n\twidth: 100%;\r\n\theight: 100px;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient:vertical;\r\n\t-webkit-box-direction:normal;\r\n\t    -ms-flex-direction:column;\r\n\t        flex-direction:column;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\tbackground-color: #002142;\r\n}\r\n#globalNavbar>div.navbar-title>h3{\r\n\tmargin-bottom: 0;\r\n\tfont-size: 1.55rem;\r\n}\r\n#globalNavbar>div.navbar-title>h3>img{\r\n\theight: 1.5rem;\r\n}\r\n#globalNavbar>div.navbar-title>p{\r\n\tfont-size: 0.9rem;\r\n\tmargin-bottom: 0;\r\n}\r\n#globalNavbar a[routerLink]{\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n}\r\n#globalNavbar a[routerLink]:hover{\r\n\tbackground-color: rgba(219, 56, 71, 0.5);\r\n\tcursor: pointer;\r\n\ttext-decoration: none;\r\n}\r\n#globalNavbar a[routerLink]>p{\r\n\tmargin: 0px;\r\n\tfont-weight: bold;\r\n\tfont-size: 1.25rem;\r\n\tcolor: #fff;\r\n}\r\n#globalNavbar a.actived{\r\n\tbackground-color: rgba(0, 120, 103, 0.83);\r\n}\r\n#globalContent{\r\n\theight: 100%;\r\n\twidth: calc(100% - 15rem);\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"screen\" class=\"d-flex justify-content-between\">\n\t<nav class=\"d-flex align-items-stretch flex-wrap\" id=\"globalNavbar\">\n\t\t<div class=\"navbar-title progress-bar-striped progress-bar-animated\">\n\t\t\t<h3>\n\t\t\t\t<img src=\"assets/img/Angular_LOGO.png\">\n\t\t\t\t5 Example\n\t\t\t</h3>\n\t\t\t<p>------- Created by Yaopeng Liu</p>\n\t\t</div>\n\t\t<div class=\"routerBar\">\n\t\t\t<a (mouseenter)=\"hoverRouter($event)\" (mouseleave)=\"hoverRouterEnd($event)\" \n\t\t\t   (click)=\"clickRouter($event)\" routerLink=\"useraccount\">\n\t\t\t\t<p><i class=\"fas fa-user-circle fa-2x\"></i></p>\n\t\t\t</a>\n\t\t\t<a (mouseenter)=\"hoverRouter($event)\" (mouseleave)=\"hoverRouterEnd($event)\" \n\t\t\t   (click)=\"clickRouter($event)\" routerLink=\"messagebox\">\n\t\t\t\t<p><i class=\"fas fa-comment-alt fa-2x\"></i></p>\n\t\t\t</a>\n\t\t\t<a (mouseenter)=\"hoverRouter($event)\" (mouseleave)=\"hoverRouterEnd($event)\" \n\t\t\t   (click)=\"clickRouter($event)\" routerLink=\"datalist\">\n\t\t\t\t<p><i class=\"fas fa-database fa-2x\"></i></p>\n\t\t\t</a>\n\t\t\t<a (mouseenter)=\"hoverRouter($event)\" (mouseleave)=\"hoverRouterEnd($event)\" \n\t\t\t   (click)=\"clickRouter($event)\" routerLink=\"community\">\n\t\t\t\t<p><i class=\"fas fa-globe fa-2x\"></i></p>\n\t\t\t</a>\n\t\t\t<a (mouseenter)=\"hoverRouter($event)\" (mouseleave)=\"hoverRouterEnd($event)\" \n\t\t\t   (click)=\"clickRouter($event)\" routerLink=\"help\">\n\t\t\t\t<p><i class=\"fas fa-question-circle fa-2x\"></i></p>\n\t\t\t</a>\n\t\t</div>\n\t</nav>\n\t<div id=\"globalContent\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.currentRouter = 'useraccount'; // by default
    }
    AppComponent.prototype.ngOnInit = function () {
        this.routerFontSize = Number($("#globalNavbar a[routerLink]>p").css("font-size").split("px").shift());
        $("a[routerLink='" + this.currentRouter + "']").addClass("actived progress-bar-striped");
    };
    AppComponent.prototype.hoverRouter = function (event) {
        var element = $(event.target).children("p");
        element.dequeue();
        var size = (this.routerFontSize * 2).toString();
        size += "px";
        element.animate({ fontSize: size }, 300, "swing");
    };
    AppComponent.prototype.hoverRouterEnd = function (event) {
        var element = $(event.target).children("p");
        element.dequeue();
        var size = this.routerFontSize.toString() + "px";
        element.animate({ fontSize: size }, 300, "swing");
    };
    AppComponent.prototype.clickRouter = function (event) {
        $("a[routerLink='" + this.currentRouter + "']").removeClass("actived progress-bar-striped");
        var element = $(event.target);
        if (element.attr("routerLink") === undefined)
            element = element.parents("a[routerLink]");
        this.currentRouter = element.attr("routerLink");
        element.addClass("actived progress-bar-striped");
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__useraccount_useraccount_component__ = __webpack_require__("./src/app/useraccount/useraccount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__useraccount_userachievement_userachievement_component__ = __webpack_require__("./src/app/useraccount/userachievement/userachievement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__useraccount_userachievement_achievementsnippet_achievementsnippet_component__ = __webpack_require__("./src/app/useraccount/userachievement/achievementsnippet/achievementsnippet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__useraccount_userhistory_userhistory_component__ = __webpack_require__("./src/app/useraccount/userhistory/userhistory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_globalvariables_achievementdata_service__ = __webpack_require__("./src/app/services/globalvariables/achievementdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__useraccount_useraccount_component__["a" /* UseraccountComponent */],
                __WEBPACK_IMPORTED_MODULE_6__useraccount_userachievement_userachievement_component__["a" /* UserachievementComponent */],
                __WEBPACK_IMPORTED_MODULE_7__useraccount_userachievement_achievementsnippet_achievementsnippet_component__["a" /* AchievementsnippetComponent */],
                __WEBPACK_IMPORTED_MODULE_8__useraccount_userhistory_userhistory_component__["a" /* UserhistoryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */] //FormModule is required if we want to use ngModel
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_globalvariables_achievementdata_service__["a" /* AchievementdataService */]
            ],
            /*
              All components about to be loaded "dynamically" need to be declared in the entryComponents array of
              app module definition. And of course, it needs be declared in declarations array as well.
            */
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__useraccount_userachievement_achievementsnippet_achievementsnippet_component__["a" /* AchievementsnippetComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/globalvariables/achievementdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AchievementdataService = /** @class */ (function () {
    function AchievementdataService() {
        this.data = [
            {
                subject: "Champion of Dentist Contest 2017",
                date: "2017-12-01",
                description: "Dr. Meow got the first place in the Supreme Doctor Tournament 2017 and is awarded by $10M"
            },
            {
                subject: "Best Psychologist in Ontario 2016",
                date: "2016-11-15",
                description: "Dr. Meow is selected as 'Best Psychologist' in an all-around social survey conducted by Ontario Government."
            }
        ];
    }
    AchievementdataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AchievementdataService);
    return AchievementdataService;
}());



/***/ }),

/***/ "./src/app/useraccount/useraccount.component.css":
/***/ (function(module, exports) {

module.exports = "#useraccountTopMenu{\r\n\tpadding: 0.675rem 0.375rem;\r\n\twidth: 100%;\r\n\tpadding-bottom: 1rem;\r\n\tbackground-color: rgb(34, 45, 66);\r\n}\r\n.useraccountTopMenuTitle{\r\n\tdisplay: inline-block;\r\n\ttext-align: center;\r\n\tcolor: rgb(255, 237, 237);\r\n\topacity: 1;\r\n\t-webkit-animation: titlefadeinout 4s infinite;\r\n\t        animation: titlefadeinout 4s infinite;\r\n\tborder-top: 1px solid rgb(255, 237, 237);\r\n\tborder-bottom: 1px solid rgb(255, 237, 237);\r\n\tpadding: 0.1rem 0.2rem;\r\n}\r\n@keyframes titlefadeinout{\r\n\t0% {opacity: 1;}  50% {opacity: 0;} 100% {opacity: 1;}\r\n}\r\n@-webkit-keyframes titlefadeinout{\r\n\t0% {opacity: 1;}  50% {opacity: 0;} 100% {opacity: 1;}\r\n}\r\n.useraccountTopMenuInfo{\r\n\twidth: 100%;\r\n\tmargin-top: 0.75rem;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: stretch;\r\n\t    -ms-flex-align: stretch;\r\n\t        align-items: stretch;\r\n}\r\n.profile{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n.infoblock{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-align: stretch;\r\n\t    -ms-flex-align: stretch;\r\n\t        align-items: stretch;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n.infoblock p, .infoblock a{\r\n\tcolor: #fff;\r\n\tmargin-bottom: 0;\r\n\tfont-size: 1.2rem;\r\n}\r\ndiv.infoblock div.progress-bar{\r\n\twidth: 0;\r\n\t-webkit-transition: width 5s;\r\n\ttransition: width 5s;\r\n\tposition: relative;\r\n\tborder-top-right-radius: 2rem;\r\n\tborder-bottom-right-radius: 2rem;\r\n}\r\ndiv.infoblock div.progress-bar>small{\r\n\tcolor: white;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-ms-flex-line-pack: center;\r\n\t    align-content: center;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tfont-size: 1rem;\r\n}\r\ndiv.infoblock>a.focused{\r\n\tcolor: white;\r\n\tbackground-color: #47c047e0;\r\n\tborder-color: #47c047e0;\r\n}\r\ndiv.infoblock>a:focus{\r\n\t-webkit-box-shadow: 0 0 0 0.2rem rgba(47, 204, 59, 0.5);\r\n\t        box-shadow: 0 0 0 0.2rem rgba(47, 204, 59, 0.5);\r\n}\r\n#userAccountContent{\r\n\twidth: 100%;\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex-positive: 1;\r\n\t        flex-grow: 1;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/useraccount/useraccount.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\" style=\"height: 100%;\">\n\t<div id=\"useraccountTopMenu\">\n\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t<h2 class=\"useraccountTopMenuTitle\">Welcome to <i class=\"fab fa-angular fa-lg\"></i>ngular</h2>\n\t\t</div>\n\t\t<div class=\"useraccountTopMenuInfo\">\n\t\t\t<div class=\"profile col-2\">\n\t\t\t\t<img src=\"assets/img/profile.jpg\" class=\"w-75\">\n\t\t\t</div>\n\t\t\t<div class=\"infoblock col-3\">\n\t\t\t\t<p>Dr. Meow</p>\n\t\t\t\t<p>Male</p>\n\t\t\t\t<p>2000-12-25</p>\n\t\t\t\t<p>Meow@doctor.ca</p>\n\t\t\t</div>\n\t\t\t<div class=\"infoblock col-4\">\n\t\t\t\t<div class=\"row w-100\">\n\t\t\t\t\t<p class=\"col-5\">Dental</p>\n\t\t\t\t\t<div class=\"col-7 progress pl-0 align-self-center\">\n\t\t\t\t\t\t<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-primary\">\n\t\t\t\t\t\t\t<small>70</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row w-100 align-items-stretch\">\n\t\t\t\t\t<p class=\"col-5\">Surgical</p>\n\t\t\t\t\t<div class=\"col-7 progress pl-0 align-self-center\">\n\t\t\t\t\t\t<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-info\">\n\t\t\t\t\t\t\t<small>60</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row w-100 align-items-stretch\">\n\t\t\t\t\t<p class=\"col-5\">Internal</p>\n\t\t\t\t\t<div class=\"col-7 progress pl-0 align-self-center\">\n\t\t\t\t\t\t<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-danger\">\n\t\t\t\t\t\t\t<small>45</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row w-100 align-items-stretch\">\n\t\t\t\t\t<p class=\"col-5\">Psycho</p>\n\t\t\t\t\t<div class=\"col-7 progress pl-0 align-self-center\">\n\t\t\t\t\t\t<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-success\">\n\t\t\t\t\t\t\t<small>90</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"infoblock col-3\">\n\t\t\t\t<a class=\"btn btn-outline-danger py-0 my-1\" routerLink=\"achievement\" (click)=\"clickRouter($event)\">Achievement</a>\n\t\t\t\t<a class=\"btn btn-outline-danger py-0 my-1\" routerLink=\"history\" (click)=\"clickRouter($event)\">History</a>\n\t\t\t\t<a class=\"btn btn-outline-danger py-0 my-1\" routerLink=\"connection\" (click)=\"clickRouter($event)\">Connection</a>\n\t\t\t\t<a class=\"btn btn-outline-danger py-0 my-1\" routerLink=\"setting\" (click)=\"clickRouter($event)\">Setting</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id=\"userAccountContent\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n<div>\n"

/***/ }),

/***/ "./src/app/useraccount/useraccount.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UseraccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UseraccountComponent = /** @class */ (function () {
    function UseraccountComponent() {
        this.titleDirection = false;
        this.currentRouter = 'achievement'; // by default
    }
    UseraccountComponent.prototype.ngOnInit = function () {
        var array = ['70%', '60%', '45%', '90%'];
        $("div.infoblock div.progress-bar").each(function (index, element) {
            $(element).css("width", array[index]);
        });
        $("a[routerLink='" + this.currentRouter + "']").addClass("focused");
    };
    UseraccountComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.titleTimer);
    };
    UseraccountComponent.prototype.clickRouter = function (event) {
        event.preventDefault();
        var element = $(event.target);
        $("a[routerLink='" + this.currentRouter + "']").removeClass("focused");
        this.currentRouter = element.attr("routerLink");
        element.addClass("focused");
    };
    UseraccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-useraccount',
            template: __webpack_require__("./src/app/useraccount/useraccount.component.html"),
            styles: [__webpack_require__("./src/app/useraccount/useraccount.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UseraccountComponent);
    return UseraccountComponent;
}());



/***/ }),

/***/ "./src/app/useraccount/userachievement/achievementsnippet/achievementsnippet.component.css":
/***/ (function(module, exports) {

module.exports = "div.snippet{\r\n\tfont-size: 0.9rem;\r\n\tpadding: 0.5rem;\r\n\tmargin: 0.5rem;\r\n\twidth: calc(100% - 1rem);\r\n\tborder: 1px solid rgb(56, 73, 105);\r\n\tborder-radius: 0.6rem;\r\n\tbackground-color: rgb(56, 73, 105);\r\n}\r\n\r\ndiv.input-group-prepend>span{\r\n\tbackground-color: #282c34;\r\n\tcolor: #61dafb;\r\n\tborder-color: #282c34;\r\n\tfont-weight: bold;\r\n}\r\n\r\ninput, textarea{\r\n\tpadding: 0.125rem 0.25rem;\r\n\tresize: none;\r\n\tfont-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/useraccount/userachievement/achievementsnippet/achievementsnippet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"snippet\">\n\t<div class=\"input-group mb-3\">\n  \t\t<div class=\"input-group-prepend\">\n    \t\t<span class=\"input-group-text\">Subject</span>\n  \t\t</div>\n  \t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"subject\">\n\t</div>\n\t<div class=\"input-group mb-3\">\n  \t\t<div class=\"input-group-prepend\">\n    \t\t<span class=\"input-group-text\">Date</span>\n  \t\t</div>\n  \t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"date\">\n\t</div>\n\t<div class=\"mb-3\">\n\t\t<textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"description\" placeholder=\"Description here...\"></textarea>\n\t</div>\n\t<div class=\"d-flex justify-content-center\">\n\t\t<button class=\"btn btn-danger\" (click)=\"deleteSnippet($event)\">Delete</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/useraccount/userachievement/achievementsnippet/achievementsnippet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementsnippetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AchievementsnippetComponent = /** @class */ (function () {
    //handle data/event pass to parent component
    function AchievementsnippetComponent() {
        this.deleteSnippetEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    AchievementsnippetComponent.prototype.deleteSnippet = function (event) {
        var element = $(event.target).parents("app-achievementsnippet");
        var number = element.prevAll("app-achievementsnippet").length; //how many snippet before current one
        this.deleteSnippetEvent.emit(number);
    };
    AchievementsnippetComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AchievementsnippetComponent.prototype, "subject", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AchievementsnippetComponent.prototype, "date", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AchievementsnippetComponent.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AchievementsnippetComponent.prototype, "comment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AchievementsnippetComponent.prototype, "deleteSnippetEvent", void 0);
    AchievementsnippetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-achievementsnippet',
            template: __webpack_require__("./src/app/useraccount/userachievement/achievementsnippet/achievementsnippet.component.html"),
            styles: [__webpack_require__("./src/app/useraccount/userachievement/achievementsnippet/achievementsnippet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AchievementsnippetComponent);
    return AchievementsnippetComponent;
}());



/***/ }),

/***/ "./src/app/useraccount/userachievement/userachievement.component.css":
/***/ (function(module, exports) {

module.exports = "#useraccountAchievementMain{\r\n\theight: 100%;\r\n\tbackground-color:  #ebf1ff;\r\n\tpadding: 0.75rem 1rem;\r\n}\r\n#useraccountAchievementMain div.card{\r\n\tborder-radius: 0.5rem;\r\n}\r\n#useraccountAchievementMain div.card-header{\r\n\tborder-top-left-radius: 0.5rem;\r\n\tborder-top-right-radius: 0.5rem;\r\n\tbackground-color: #282c34;\r\n}\r\n#useraccountAchievementMain div.card-header>p.title{\r\n\tcolor: #61dafb;\r\n\tfont-size: 1.55rem;\r\n\tmargin-bottom: 0;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}\r\n#useraccountAchievementMain div.card-header>p.title>span{\r\n\tcolor: #ffb01f;\r\n\tmargin-right: 0.5rem;\r\n\tborder-radius: 50%;\r\n\t-webkit-animation: trophyAnimate 4s infinite;\r\n\t        animation: trophyAnimate 4s infinite;\r\n}\r\n@keyframes trophyAnimate{\r\n\t0% {-webkit-box-shadow: 0px 0px 0.5rem 0.5rem rgba(47, 204, 59, 0.5);box-shadow: 0px 0px 0.5rem 0.5rem rgba(47, 204, 59, 0.5);}  \r\n\t50% {-webkit-box-shadow: 0px 0px 3rem 2rem rgba(47, 204, 59, 0.5);box-shadow: 0px 0px 3rem 2rem rgba(47, 204, 59, 0.5);} \r\n\t100% {-webkit-box-shadow: 0px 0px 0.5rem 0.5rem rgba(47, 204, 59, 0.5);box-shadow: 0px 0px 0.5rem 0.5rem rgba(47, 204, 59, 0.5);}\r\n}\r\n@-webkit-keyframes trophyAnimate{\r\n\t0% {-webkit-box-shadow: 0px 0px 0.5rem 0.5rem rgba(47, 204, 59, 0.5);box-shadow: 0px 0px 0.5rem 0.5rem rgba(47, 204, 59, 0.5);}  \r\n\t50% {-webkit-box-shadow: 0px 0px 3rem 2rem rgba(47, 204, 59, 0.5);box-shadow: 0px 0px 3rem 2rem rgba(47, 204, 59, 0.5);} \r\n\t100% {-webkit-box-shadow: 0px 0px 0.5rem 0.5rem rgba(47, 204, 59, 0.5);box-shadow: 0px 0px 0.5rem 0.5rem rgba(47, 204, 59, 0.5);}\r\n}\r\n#useraccountAchievementMain div.card-header>button.configureButton{\r\n\tcolor: #61dafb;\r\n\tfont-size: 1.33rem;\r\n\tmargin-bottom: 0;\r\n\tposition: absolute;\r\n\tright: 2.25rem;\r\n\ttop: 0.6rem;\r\n\tbackground-color: #b34545;\r\n}\r\n#useraccountAchievementMain div.card-header>button.configureButton:hover{\r\n\tcolor: #b34545;\r\n\tbackground-color: #61dafb;\r\n}\r\n#useraccountAchievementMain div.configDropdown{\r\n\tposition: absolute;\r\n\tright: 2.25rem;\r\n\ttop: 4rem;\r\n\twidth: 16rem;\r\n\tfont-size: 0.9rem;\r\n\tpadding: 0.5rem;\r\n\tbackground-color: #282c34;\r\n\tborder-radius: 0.6rem;\r\n\tdisplay: none;\r\n\tz-index: 2;\r\n}\r\n#useraccountAchievementMain div.configDropdown button.btn-outline-success{\r\n\twidth: 100%;\r\n\tborder-bottom-left-radius: 0;\r\n\tborder-bottom-right-radius: 0;\r\n\tfont-weight: bold;\r\n}\r\n#useraccountAchievementMain div.configDropdown button.btn-outline-danger{\r\n\twidth: 100%;\r\n\tborder-radius: 0;\r\n\tfont-weight: bold;\r\n}\r\n#useraccountAchievementMain div.configDropdown button.btn-outline-primary{\r\n\twidth: 100%;\r\n\tborder-top-left-radius: 0;\r\n\tborder-top-right-radius: 0;\r\n\tfont-weight: bold;\r\n}\r\n#useraccountAchievementMain div.configDropdown input{\r\n\tborder-top-left-radius: 0;\r\n}\r\n#useraccountAchievementMain div.card-body{\r\n\tborder-bottom-left-radius: 0.5rem;\r\n\tborder-bottom-right-radius: 0.5rem;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n}\r\n#useraccountAchievementMain div.confirmScreen{\r\n\tdisplay: none;\r\n\tbackground-color: rgba(25, 25, 25, 0.74);\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tmin-height: 100vh;\r\n\tmin-width: 100vw;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n#useraccountAchievementMain div.confirmScreen>div.confirmTextSave,\r\n#useraccountAchievementMain div.confirmScreen>div.confirmTextDelete\r\n{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\topacity: 0;\r\n\tcolor: #e1bcbced;\r\n\tfont-size: 2.5rem;\r\n\tfont-weight: bold;\r\n\tpadding: 3rem;\r\n\twidth: 20rem;\r\n\theight: 20rem;\r\n\tborder-radius: 50%;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n#useraccountAchievementMain div.confirmScreen>div.confirmTextSave{\r\n\tbackground-color: #1a8e1aba;\r\n}\r\n#useraccountAchievementMain div.confirmScreen>div.confirmTextDelete{\r\n\tbackground-color: red;\r\n}"

/***/ }),

/***/ "./src/app/useraccount/userachievement/userachievement.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"useraccountAchievementMain\">\n\t<div class=\"card\">\n  \t\t<div class=\"card-header\">\n    \t\t<p class=\"title\">\n\t\t\t\t<span><i class=\"fas fa-trophy\"></i></span>Achievement Record\n\t\t\t</p>\n\t\t\t<button class=\"configureButton btn px-3\" (click)=\"configDropdown($event)\">\n\t\t\t\t<span (click)=\"configDropdown($event)\">Menu <i class=\"fas fa-cogs\"></i></span>\n\t\t\t</button>\n  \t\t\t<div class=\"configDropdown\">\n\t\t\t\t<button class=\"btn btn-outline-success\" (click)=\"createSnippet()\">Append New Achievenment</button>\n\t\t\t\t<button class=\"btn btn-outline-danger\" (click)=\"removeSnippet()\">Delete All Achievement</button>\n\t\t\t\t<button class=\"btn btn-outline-primary\" (click)=\"saveSnippet()\">Save All Changes</button>\n\t\t\t</div>\n\t\t</div>\n  \t\t<div id=\"achievementSnippetContainer\" class=\"card-body\">\n\t\t\t<template #snippetContainer></template>\n  \t\t</div>\n\t</div>\n\t<div id=\"achievementConfirmScreen1\" class=\"confirmScreen\">\n\t\t<div class=\"confirmTextSave\">\n\t\t\t<p>Save <i class=\"fas fa-hdd\"></i></p>\n\t\t\t<p>Successfully!</p>\n\t\t</div>\n\t</div>\n\t<div id=\"achievementConfirmScreen2\" class=\"confirmScreen\">\n\t\t<div class=\"confirmTextDelete\">\n\t\t\t<p>Delete <i class=\"far fa-hdd\"></i></p>\n\t\t\t<p>Successfully!</p>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/useraccount/userachievement/userachievement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserachievementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__achievementsnippet_achievementsnippet_component__ = __webpack_require__("./src/app/useraccount/userachievement/achievementsnippet/achievementsnippet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globalvariables_achievementdata_service__ = __webpack_require__("./src/app/services/globalvariables/achievementdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserachievementComponent = /** @class */ (function () {
    function UserachievementComponent(resolver, achievementdata) {
        this.resolver = resolver;
        this.achievementdata = achievementdata;
        this.data = achievementdata.data; // gain global stored data from custom service
    }
    UserachievementComponent.prototype.ngOnInit = function () {
        $("app-userachievement").css("flex", "1");
        for (var i = 0; i < this.data.length; i++)
            this.createSnippet(this.data[i]);
    };
    UserachievementComponent.prototype.configDropdown = function (event) {
        event.stopPropagation();
        $("#useraccountAchievementMain div.configDropdown").slideToggle("slow");
    };
    UserachievementComponent.prototype.createSnippet = function (data) {
        var _this = this;
        //put prototype into ComponentFactory, before that, make sure add the component into entryComponents array of AppModule
        var snippetFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__achievementsnippet_achievementsnippet_component__["a" /* AchievementsnippetComponent */]);
        var snippetRef = this.entry.createComponent(snippetFactory);
        $(snippetRef.location.nativeElement).css("width", "50%");
        // each row can have two snippet
        snippetRef.instance.subject = data != undefined ? data.subject : "";
        snippetRef.instance.date = data != undefined ? data.date : "";
        snippetRef.instance.description = data != undefined ? data.description : "";
        snippetRef.instance.comment = data != undefined ? data.comment : "";
        //subscribe the raised custom event 'deleteSnippetEvent' from child component by using this.deleteSnippet as handler
        snippetRef.instance.deleteSnippetEvent.subscribe(function (number) { _this.deleteSnippet(number); });
        if (data === undefined)
            snippetRef.location.nativeElement.scrollIntoView({ behavior: "smooth" });
    };
    UserachievementComponent.prototype.deleteSnippet = function (number) {
        this.entry.remove(number);
    };
    UserachievementComponent.prototype.removeSnippet = function () {
        this.entry.clear();
        $("#achievementConfirmScreen2").css("display", "flex");
        $("#achievementConfirmScreen2 div.confirmTextDelete").animate({ opacity: '1' }, 1500, "linear", function () {
            $(this).animate({ opacity: '0' }, 1500, "linear");
            $("#achievementConfirmScreen2").fadeOut(1500);
        });
    };
    UserachievementComponent.prototype.saveSnippet = function () {
        var data = [];
        $("#achievementSnippetContainer>app-achievementsnippet").each(function () {
            var object = {
                subject: $(this).find("input").eq(0).val(),
                date: $(this).find("input").eq(1).val(),
                description: $(this).find("textarea").val()
            };
            data.push(object);
        });
        this.achievementdata.data = data;
        $("#achievementConfirmScreen1").css("display", "flex");
        $("#achievementConfirmScreen1 div.confirmTextSave").animate({ opacity: '1' }, 1500, "linear", function () {
            $(this).animate({ opacity: '0' }, 1500, "linear");
            $("#achievementConfirmScreen1").fadeOut(1500);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('snippetContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */])
    ], UserachievementComponent.prototype, "entry", void 0);
    UserachievementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userachievement',
            template: __webpack_require__("./src/app/useraccount/userachievement/userachievement.component.html"),
            styles: [__webpack_require__("./src/app/useraccount/userachievement/userachievement.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_2__services_globalvariables_achievementdata_service__["a" /* AchievementdataService */]])
    ], UserachievementComponent);
    return UserachievementComponent;
}());



/***/ }),

/***/ "./src/app/useraccount/userhistory/userhistory.component.css":
/***/ (function(module, exports) {

module.exports = "#useraccountHistoryMain{\r\n\theight: 100%;\r\n\tbackground-color:  #ebf1ff;\r\n\tpadding: 0.75rem 1rem;\r\n}\r\n#useraccountHistoryMain div.card{\r\n\tborder-radius: 0.5rem;\r\n}\r\n#useraccountHistoryMain div.card-header{\r\n\tborder-top-left-radius: 0.5rem;\r\n\tborder-top-right-radius: 0.5rem;\r\n\tbackground-color: #282c34;\r\n}\r\n#useraccountHistoryMain div.card-header>p.title{\r\n\tdisplay: none;\r\n\tcolor: #61dafb;\r\n\tfont-size: 1.55rem;\r\n\tmargin-bottom: 0;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n}\r\n#useraccountHistoryContainer{\r\n\tfont-size: 0.9rem;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\t-webkit-box-align: stretch;\r\n\t    -ms-flex-align: stretch;\r\n\t        align-items: stretch;\r\n}\r\n#useraccountHistoryContainer figure.imagesStackContainer{\r\n\t min-width: 17.6rem;\r\n\t min-height: 15rem;\r\n\t position: relative;\r\n\t margin-bottom: 0rem;\r\n}\r\n#useraccountHistoryContainer figure.imagesStackContainer>div{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tpadding: 0.6rem 0.8rem;\r\n\tborder: 1px solid #b6a3a3d1;\r\n\tbackground-color: #fff5f5;\r\n\tborder-radius: 0.5rem;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tposition: absolute;\r\n}\r\n#useraccountHistoryContainer figure.imagesStackContainer figcaption{\r\n\t font-size: 1.2rem;\r\n\t line-height: 1.2rem;\r\n\t font-weight: bold;\r\n\t margin-bottom: 0.5rem;\r\n\t opacity: 0.65;\r\n}\r\n#useraccountHistoryContainer figure.imagesStackContainer img{\r\n\t width: 16rem;\r\n\t height: 12rem;\r\n\t border: 1px solid #fff;\r\n\t border-radius: 0.5rem;\r\n}\r\n#useraccountHistoryContainer div.buttonGroup{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\twidth: 14rem;\r\n\tmin-height: 15rem;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\tpadding: 0.6rem 0.8rem;\r\n\tborder: 1px solid #b6a3a3d1;\r\n\tbackground-color: #fff5f5;\r\n\tborder-radius: 0.5rem;\r\n}\r\n#useraccountHistoryContainer div.buttonGroup button,\r\n#useraccountHistoryContainer div.buttonGroup button{\r\n\tpadding: 0.375rem 0.625rem;\r\n\tfont-weight: bold;\r\n\tborder-radius: 0.5rem;\r\n\tbackground-color: #282c34;\r\n\tborder: 1px solid #282c34;\r\n\tcolor: #61dafb;\r\n\toutline: none;\r\n}\r\n#useraccountHistoryContainer div.buttonGroup button:hover{\r\n\tbackground-color: #61dafb;\r\n\tborder: 1px solid #61dafb;\r\n\tcolor: #282c34;\r\n\tcursor: pointer;\r\n}\r\n#useraccountHistoryContainer div.buttonGroup button:active{\r\n\tbackground-color: rgba(220, 53, 69, 0.8);\r\n\tborder: 1px solid rgba(220, 53, 69, 0.8);\r\n\tcolor: #fff;\r\n}\r\n#useraccountHistoryContainer div.input-group-prepend>label.input-group-text{\r\n\tborder-top-left-radius: 0.5rem;\r\n\tborder-bottom-left-radius: 0.5rem;\r\n\tbackground-color: #282c34;\r\n\tborder: 1px solid #282c34;\r\n\tcolor: #61dafb;\r\n\tfont-weight: bold;\r\n}\r\n#useraccountHistoryContainer select{\r\n\tborder-top-right-radius: 0.5rem;\r\n\tborder-bottom-right-radius: 0.5rem;\r\n}\r\n/*------------      For cube style  ----------------*/\r\n#useraccountHistoryContainer{\r\n\t-webkit-perspective: 10000rem;\r\n\t        perspective: 10000rem;\t\t\t\t\t\t\t\t\t\t\t/*enlarge the distance enough so it will rightly face to front-side*/\r\n\t-webkit-perspective-origin: 0 0;\r\n\t        perspective-origin: 0 0;\r\n}\r\n#useraccountHistoryContainer figure.imagesStackContainer{\r\n\t -webkit-transform-style: preserve-3d;\r\n\t         transform-style: preserve-3d;\r\n\t position: relative;\r\n}\r\n/* We don't need top and bottom side */\r\n#historyimage01 {\r\n\t-webkit-transform: translateZ(8.8rem);\r\n\t        transform: translateZ(8.8rem);\t\t\t\t\t\t\t\t/*move forward 9rem*/\r\n}\r\n#historyimage03 {\r\n\t-webkit-transform: translateZ(-8.8rem) rotateY(180deg);\r\n\t        transform: translateZ(-8.8rem) rotateY(180deg);\t/*move backward 9rem, rotateY 180 deg to backside*/\r\n}\r\n#historyimage02 {\r\n\t-webkit-transform:  rotateY(-270deg) translateX(8.8rem) ;\r\n\t        transform:  rotateY(-270deg) translateX(8.8rem) ;\t  /*rotateY -270 deg to rightside and move rightward 100px, */\r\n\t-webkit-transform-origin: center right;\r\n\t        transform-origin: center right;\t\t\t\t\t\t\t\t   /*when rotate, this element has transform origin at center/right */\r\n}\r\n#historyimage04 {\r\n\t-webkit-transform:  rotateY(270deg) translateX(-8.8rem) ;\r\n\t        transform:  rotateY(270deg) translateX(-8.8rem) ;\t  /* rotateY 270 deg to leftside and move leftward 100px,*/\r\n\t-webkit-transform-origin: center left;\r\n\t        transform-origin: center left;\t\t\t\t\t\t\t\t\t/*when rotate, this element has transform origin at center/left */\r\n}\r\n#useraccountHistoryContainer div.contentGroup{\r\n\toverflow: auto;\r\n\tposition: relative;\r\n\twidth: 30rem;\r\n\tmin-height: 15rem;\r\n}\r\n#useraccountHistoryContainer div.contentGroup>div{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\tpadding: 0.6rem 0.8rem;\r\n\tborder: 1px solid #b6a3a3d1;\r\n\tbackground-color: #fff5f5;\r\n\tborder-radius: 0.5rem;\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 1.25s;\r\n\ttransition: opacity 1.25s;\r\n}\r\n#useraccountHistoryContainer div.contentGroup>div.show{\r\n\topacity: 1;\r\n}\r\n#useraccountHistoryContainer div.contentGroup>div .card-header{\r\n\tbackground-color: #282c34;\r\n\tcolor: #61dafb;\r\n\tfont-weight: bold;\r\n\tfont-size: 1rem;\r\n\tpadding: 0.5rem;\r\n\ttext-align: center;\r\n}\r\n#useraccountHistoryContainer div.contentGroup>div .card-body{\r\n\tpadding: 0;\r\n}\r\n#useraccountHistoryContainer div.contentGroup>div .card-body>table{\r\n\tmargin-bottom: 0;\r\n}\r\n#useraccountHistoryContainer div.contentGroup>div .card-body th,\r\n#useraccountHistoryContainer div.contentGroup>div .card-body td,{\r\n\tpadding: 0.125rem 0.25rem;\r\n}\r\n/*\r\n#useraccountHistoryContainer svg{\r\n\theight: 10rem;\r\n}\r\n#useraccountHistoryContainer tr.chartHovered{\r\n\tbackground-color: #4e9cedc4;\r\n\tcolor: #fff;\r\n}\r\n#useraccountHistoryContainer div.chart{\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tposition: relative;\r\n}\r\n*/\r\n\r\n"

/***/ }),

/***/ "./src/app/useraccount/userhistory/userhistory.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"useraccountHistoryMain\">\n\t<div class=\"card\">\n  \t\t<div class=\"card-header\">\n    \t\t<p class=\"title\">\n\t\t\t\tHistroy Event Record\n\t\t\t</p>\n\t\t</div>\n  \t\t<div id=\"useraccountHistoryContainer\" class=\"card-body\">\n\t\t\t<figure class=\"imagesStackContainer\">\n\t\t\t\t<div id=\"historyimage04\">\n\t\t\t\t\t<figcaption>Meet in Markham</figcaption>\n\t\t\t\t\t<img src=\"assets/img/historyevent04.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div id=\"historyimage03\">\n\t\t\t\t\t<figcaption>Meet in Mississauga</figcaption>\n\t\t\t\t\t<img src=\"assets/img/historyevent03.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div id=\"historyimage02\">\n\t\t\t\t\t<figcaption>Meet in North York</figcaption>\n\t\t\t\t\t<img src=\"assets/img/historyevent02.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div id=\"historyimage01\">\n\t\t\t\t\t<figcaption>Meet in Downtown</figcaption>\n\t\t\t\t\t<img src=\"assets/img/historyevent01.jpg\">\n\t\t\t\t</div>\n\t\t\t</figure>\n\t\t\t<div class=\"buttonGroup\">\n\t\t\t\t<button (click)=\"prevImage()\">Prev</button>\n\t\t\t\t<button (click)=\"nextImage()\">Next</button>\n\t\t\t\t<div class=\"input-group\">\n  \t\t\t\t\t<div class=\"input-group-prepend\">\n    \t\t\t\t\t<label class=\"input-group-text\" for=\"imageStackSelect\">Go to</label>\n  \t\t\t\t\t</div>\n\t\t\t\t\t<select class=\"custom-select\" id=\"imageStackSelect\" (change)=\"changeImage($event)\">\n    \t\t\t\t\t<option value=\"0\" selected>1st Record</option>\n    \t\t\t\t\t<option value=\"1\">2nd Record</option>\n    \t\t\t\t\t<option value=\"2\">3rd Record</option>\n\t\t\t\t\t\t<option value=\"3\">4th Record</option>\n  \t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"contentGroup\">\n\t\t\t\t<div class=\"card\" [class.show]=\"currentIndex===0\">\n  \t\t\t\t\t<h4 class=\"card-header\">Together with Mr.Liu</h4>\n  \t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Date</th>\n      \t\t\t\t\t\t\t\t<td>2018-2-15</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Location</th>\n      \t\t\t\t\t\t\t\t<td>Dowontown, Toronto</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Member</th>\n      \t\t\t\t\t\t\t\t<td>Mr.Liu</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Description</th>\n      \t\t\t\t\t\t\t\t<td>Met with Mr.Liu in Chine restaurant of downtown and have a dinner together</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\" [class.show]=\"currentIndex===1\">\n  \t\t\t\t\t<h4 class=\"card-header\">Together with Miss.Yui</h4>\n  \t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Date</th>\n      \t\t\t\t\t\t\t\t<td>2018-2-11</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Location</th>\n      \t\t\t\t\t\t\t\t<td>North York, Toronto</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Member</th>\n      \t\t\t\t\t\t\t\t<td>Miss.Yui</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Description</th>\n      \t\t\t\t\t\t\t\t<td>Met with Miss.Yui in Walmart and shopping together the whole day</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\" [class.show]=\"currentIndex===2\">\n\t\t\t\t\t<h4 class=\"card-header\">Together with THA</h4>\n  \t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Date</th>\n      \t\t\t\t\t\t\t\t<td>2018-1-29</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Location</th>\n      \t\t\t\t\t\t\t\t<td>Mississauga, Toronto</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Member</th>\n      \t\t\t\t\t\t\t\t<td>Toronto Healcare Association</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Description</th>\n      \t\t\t\t\t\t\t\t<td>Met with other association members and disscus the current problems and future plans</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\" [class.show]=\"currentIndex===3\">\n\t\t\t\t\t<h4 class=\"card-header\">Together with Apprentices</h4>\n  \t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Date</th>\n      \t\t\t\t\t\t\t\t<td>2018-1-25</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Location</th>\n      \t\t\t\t\t\t\t\t<td>Markham, Toronto</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Member</th>\n      \t\t\t\t\t\t\t\t<td>Apprentices</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Description</th>\n      \t\t\t\t\t\t\t\t<td>Met with most of apprentices and gave speech to show the cutting-edge operation techs</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n  \t\t</div>\n\t</div>\n</div>\n\n\n\n\n\n<!--\n\t\t\t<div class=\"chart\">\n\t\t\t\t<svg viewBox=\"-1 -1 2 2\"></svg>\n\t\t\t</div>\t\n-->\n"

/***/ }),

/***/ "./src/app/useraccount/userhistory/userhistory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserhistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserhistoryComponent = /** @class */ (function () {
    function UserhistoryComponent() {
        this.currentIndex = 0;
        this.maxNumber = 4;
        this.currentRotate = 0;
    }
    UserhistoryComponent.prototype.ngOnInit = function () {
        $("app-userhistory").css("flex", "1");
        $("#useraccountHistoryMain div.card-header>p.title").slideDown("slow");
    };
    UserhistoryComponent.prototype.prevImage = function (number) {
        if (number === void 0) { number = 1; }
        var element = $("figure.imagesStackContainer");
        var rotated = this.currentRotate;
        element.animate({ borderSpacing: -90 * number }, {
            step: function (now, fx) {
                $(this).css('-webkit-transform', 'rotateY(' + (rotated - now) + 'deg)');
                $(this).css('-moz-transform', 'rotateY(' + (rotated - now) + 'deg)');
                $(this).css('-webkit-transform', 'rotateY(' + (rotated - now) + 'deg)');
            },
            duration: 'slow'
        }, 'linear', function () {
            $(this).css("borderSpacing", 0);
        });
        this.currentRotate = (this.currentRotate + 90 * number) % 360;
        this.currentIndex = this.currentIndex - number;
        if (this.currentIndex < 0)
            this.currentIndex += this.maxNumber;
    };
    UserhistoryComponent.prototype.nextImage = function (number) {
        if (number === void 0) { number = 1; }
        var element = $("figure.imagesStackContainer");
        var rotated = this.currentRotate;
        element.animate({ borderSpacing: -90 * number }, {
            step: function (now, fx) {
                $(this).css('-webkit-transform', 'rotateY(' + (rotated + now) + 'deg)');
                $(this).css('-moz-transform', 'rotateY(' + (rotated + now) + 'deg)');
                $(this).css('-webkit-transform', 'rotateY(' + (rotated + now) + 'deg)');
            },
            duration: 'slow'
        }, 'linear', function () {
            $(this).css("borderSpacing", 0);
        });
        this.currentRotate = (this.currentRotate - 90 * number) % 360;
        this.currentIndex = this.currentIndex + number;
        if (this.currentIndex >= this.maxNumber)
            this.currentIndex -= this.maxNumber;
    };
    UserhistoryComponent.prototype.changeImage = function (event) {
        var targetIndex = Number(event.target.value);
        var indexDifference = targetIndex - this.currentIndex;
        if (indexDifference < 0)
            this.prevImage(Math.abs(indexDifference));
        if (indexDifference > 0)
            this.nextImage(indexDifference);
    };
    UserhistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userhistory',
            template: __webpack_require__("./src/app/useraccount/userhistory/userhistory.component.html"),
            styles: [__webpack_require__("./src/app/useraccount/userhistory/userhistory.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserhistoryComponent);
    return UserhistoryComponent;
}());

/*
function drawFanChart(){
    var element = $("#useraccountHistoryContainer svg")[0];
    var slices = [
        { percent: 0.2, color: 'rgba(217, 62, 76, 0.7)', colorHover: 'rgb(217, 62, 76)' },
        { percent: 0.15, color: 'rgba(48, 135, 229, 0.7)', colorHover: 'rgb(48, 135, 229)'},
        { percent: 0.4, color: 'rgba(221, 180, 32, 0.7)', colorHover: 'rgb(221, 180, 32)' },
        { percent: 0.25, color: 'rgba(45, 179, 76, 0.7)', colorHover: 'rgb(45, 179, 76)' }
    ];
    var cumulativePercent = 0;

    var getCoordinatesForPercent= function(percent) {
        var x = Math.cos(2 * Math.PI * percent);
        var y = Math.sin(2 * Math.PI * percent);
        return [x, y];
    }

    slices.forEach((slice, index) => {
        // destructuring assignment sets the two variables at once
        var [startX, startY] = getCoordinatesForPercent(cumulativePercent);
        // each slice starts where the last slice ended, so keep a cumulative percent
        cumulativePercent += slice.percent;
        var [endX, endY] = getCoordinatesForPercent(cumulativePercent);
        // if the slice is more than 50%, take the large arc (the long way around)
        var largeArcFlag = slice.percent > 0.5 ? 1 : 0;
        // create an array and join it just for code readability
        var pathData = [
            `M ${startX} ${startY}`, // Move
            `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
            `L 0 0`, // Line
        ].join(' ');
        // create a <path> and append it to the <svg> element
        var pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        $(pathElement).attr('d', pathData);
        $(pathElement).attr('fill', slice.color);
        $(pathElement).attr('id', index+1);

        $(pathElement).hover(function(event){
            $(this).attr("fill",slice.colorHover);
            $("#useraccountHistoryContainer table>tbody>tr").eq(index).addClass("chartHovered");
            var top=$(this).offset().top - $(element).parent().offset().top;
            var left=$(this).offset().left - $(element).parent().offset().left;
            console.log(event.pageX, left, event.pageY, top);
            $("#useraccountHistoryContainer div.chart>p").eq(index).css(
                {"left":event.pageX, "top": event.pageY}
            ).fadeIn();
        },function(){
            $(this).attr("fill",slice.color);
            $("#useraccountHistoryContainer table>tbody>tr").eq(index).removeClass("chartHovered");
            $("#useraccountHistoryContainer div.chart>p").eq(index).fadeOut();
        });
        $(element).append(pathElement);
        var left
        var textElement = document.createElement("p");
        $(textElement).css({
            "color": "white", "background-color": "rgb(43, 37, 44)", "padding": "0.5rem",
            "z-index": "3", "position": "absolute", "opacity": "0.35", "border-radius": "0.5rem",
            "font-weight": "bold", display: "none"
        });
        $(textElement).text(slice.percent*100+"%");
        $(element).parent().append(textElement);
    });
}
*/


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map