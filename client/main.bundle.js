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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__useraccount_usercollection_usercollection_component__ = __webpack_require__("./src/app/useraccount/usercollection/usercollection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__useraccount_usersetting_usersetting_component__ = __webpack_require__("./src/app/useraccount/usersetting/usersetting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messagebox_messagebox_component__ = __webpack_require__("./src/app/messagebox/messagebox.component.ts");
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
            { path: 'history', component: __WEBPACK_IMPORTED_MODULE_4__useraccount_userhistory_userhistory_component__["a" /* UserhistoryComponent */] },
            { path: 'collection', component: __WEBPACK_IMPORTED_MODULE_5__useraccount_usercollection_usercollection_component__["a" /* UsercollectionComponent */] },
            { path: 'setting', component: __WEBPACK_IMPORTED_MODULE_6__useraccount_usersetting_usersetting_component__["a" /* UsersettingComponent */] }
        ]
    },
    { path: 'messagebox', component: __WEBPACK_IMPORTED_MODULE_7__messagebox_messagebox_component__["a" /* MessageboxComponent */] }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_scrollbar__ = __webpack_require__("./node_modules/ngx-scrollbar/esm5/ngx-scrollbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__useraccount_useraccount_component__ = __webpack_require__("./src/app/useraccount/useraccount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__useraccount_userachievement_userachievement_component__ = __webpack_require__("./src/app/useraccount/userachievement/userachievement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__useraccount_userachievement_achievementsnippet_achievementsnippet_component__ = __webpack_require__("./src/app/useraccount/userachievement/achievementsnippet/achievementsnippet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__useraccount_userhistory_userhistory_component__ = __webpack_require__("./src/app/useraccount/userhistory/userhistory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_globalvariables_achievementdata_service__ = __webpack_require__("./src/app/services/globalvariables/achievementdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__useraccount_usercollection_usercollection_component__ = __webpack_require__("./src/app/useraccount/usercollection/usercollection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__useraccount_usersetting_usersetting_component__ = __webpack_require__("./src/app/useraccount/usersetting/usersetting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_globalvariables_usersetting_service__ = __webpack_require__("./src/app/services/globalvariables/usersetting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__messagebox_messagebox_component__ = __webpack_require__("./src/app/messagebox/messagebox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* --------	3rd party module --------  */












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__useraccount_useraccount_component__["a" /* UseraccountComponent */],
                __WEBPACK_IMPORTED_MODULE_7__useraccount_userachievement_userachievement_component__["a" /* UserachievementComponent */],
                __WEBPACK_IMPORTED_MODULE_8__useraccount_userachievement_achievementsnippet_achievementsnippet_component__["a" /* AchievementsnippetComponent */],
                __WEBPACK_IMPORTED_MODULE_9__useraccount_userhistory_userhistory_component__["a" /* UserhistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__useraccount_usercollection_usercollection_component__["a" /* UsercollectionComponent */],
                __WEBPACK_IMPORTED_MODULE_12__useraccount_usersetting_usersetting_component__["a" /* UsersettingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__messagebox_messagebox_component__["a" /* MessageboxComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_scrollbar__["b" /* ScrollbarModule */] //3rd party module for custom scrollbar in Angular
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_globalvariables_achievementdata_service__["a" /* AchievementdataService */], __WEBPACK_IMPORTED_MODULE_13__services_globalvariables_usersetting_service__["a" /* UsersettingService */]
            ],
            /*
              All components about to be loaded "dynamically" need to be declared in the entryComponents array of
              app module definition. And of course, it needs be declared in declarations array as well.
            */
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__useraccount_userachievement_achievementsnippet_achievementsnippet_component__["a" /* AchievementsnippetComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/messagebox/messagebox.component.css":
/***/ (function(module, exports) {

module.exports = "#globalMessageBoxMain{\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n}\r\n#chatBarForMessage{\r\n\twidth: 15rem;\r\n\theight: 100%;\r\n\tborder-right: 1px solid #282c34;\r\n}\r\n#MessageBoxContent{\r\n\twidth: calc(100% - 30rem);\r\n\theight: 100%;\r\n}\r\n#chatMessageLog{\r\n\twidth: 15rem;\r\n\theight: 100%;\r\n}\r\n#chatBarForMessage div.chatBarTitle{\r\n\theight: 4rem; \r\n\tdisplay: -webkit-box; \r\n\tdisplay: -ms-flexbox; \r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tbackground-color: #282c34;\r\n}\r\n#chatBarForMessage div.chatBarTitle>span{\r\n\tfont-weight: bold;\r\n\tcolor: #61dafb;\r\n}\r\n#chatBarForMessage div.chatBarTitle>img{\r\n\theight: 2.5rem;\r\n\tmargin-right: 0.675rem;\r\n}\r\n#chatBarForMessage div.chatList{\r\n\theight: 6rem;\r\n}\r\n#chatBarForMessage div.chatList>div.chatGroupBlock{\r\n\theight: 50%;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n}\r\n#chatBarForMessage div.chatList>div.chatGroupBlock>button{\r\n\twidth: 33.33%;\r\n\theight: 100%;\r\n\tbackground-color: #fff;\r\n\toutline: none;\r\n\tborder: 0.2px solid #d4d0d0d4;\r\n}\r\n#chatBarForMessage div.chatList>div.chatGroupBlock>button:hover{\r\n\tcursor: pointer;\r\n\tbackground-color: #46d8efd9;\r\n\tborder: 1px solid #46d8efd9;\r\n}\r\n#chatBarForMessage div.chatList>div.chatGroupBlock>button.actived{\r\n\tbackground-color: #45b2ff;\r\n\tborder: 1px solid #45b2ff;\r\n}\r\n#chatBarForMessage div.chatList>div.chatGroupBlock>button>img{\r\n\theight: 100%;\r\n\tpadding: 0.125rem 0.25rem;\r\n}\r\n#chatBarForMessage div.chatList>div.chatGroupIndicator{\r\n\theight: 50%;\r\n\tfont-size: 1.2rem;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tborder-bottom: 1px solid #282c34;\r\n\tbackground-color: #282c34;\r\n}\r\n#chatBarForMessage div.chatList>div.chatGroupIndicator>p{\r\n\tmargin-bottom: 0;\r\n\tcolor: #61dafb;\r\n\tfont-weight: bold;\r\n}\r\n#chatBarForMessage div.currentChatList{\r\n\twidth: 100%;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\tpadding: 0.5rem;\r\n}\r\n#chatBarForMessage div.currentChatList>div.shortcutForChatter{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\theight: 7rem;\r\n\tborder: 0.75px solid #c6dff1d1;\r\n\tpadding: 0 0.5rem 0.5rem 0.5rem;\r\n\tborder-radius: 0.5rem;\r\n\tmargin-bottom: 0.5rem;\r\n\tfont-size: 0.9rem;\r\n\tbackground-color: #c6dff1d1;\r\n}\r\n#chatBarForMessage div.currentChatList>div.shortcutForChatter:hover{\r\n\tcursor: pointer;\r\n}\r\n#chatBarForMessage div.currentChatList>div.shortcutForChatter>h4{\r\n\theight: 2rem;\r\n\tpadding: 0.25rem;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n}\r\n#chatBarForMessage div.currentChatList>div.shortcutForChatter>div{\r\n\theight: 4rem;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n}\r\n#chatBarForMessage div.currentChatList>div.shortcutForChatter>div>img{\r\n\theight: 100%;\r\n\tmargin-right: 0.75rem;\r\n}\r\n#chatBarForMessage div.currentChatList>div.shortcutForChatter>div>div{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n}\r\n#chatBarForMessage div.currentChatList>div.shortcutForChatter>div>div>p{\r\n\tmargin-bottom: 0;\r\n\tfont-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/messagebox/messagebox.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"globalMessageBoxMain\">\n\t<div id=\"chatBarForMessage\">\n\t\t<div class=\"chatBarTitle\">\n\t\t\t<img src=\"assets/img/charBar_icon.png\"><span>Contact List</span>\n\t\t</div>\n\t\t<div class=\"chatList\">\n\t\t\t<div class=\"chatGroupBlock\">\n\t\t\t\t<button [attr.chattype]=\"1\" (click)=\"chatTypeChange($event)\">\n\t\t\t\t\t<img src=\"assets/img/friendChat_icon.png\">\n\t\t\t\t</button>\n\t\t\t\t<button [attr.chattype]=\"2\" (click)=\"chatTypeChange($event)\">\n\t\t\t\t\t<img src=\"assets/img/groupChat_icon.png\">\n\t\t\t\t</button>\n\t\t\t\t<button [attr.chattype]=\"3\" (click)=\"chatTypeChange($event)\">\n\t\t\t\t\t<img src=\"assets/img/strangerChat_icon.png\">\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"chatGroupIndicator\">\n\t\t\t\t<p *ngIf=\"chatType===1\">Chat with Friends</p>\n\t\t\t\t<p *ngIf=\"chatType===2\">Chat in Groups</p>\n\t\t\t\t<p *ngIf=\"chatType===3\">Chat with Strangers</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"chatListContent\">\n\t\t\t<div class=\"currentChatList\" *ngIf=\"chatType===1\">\n\t\t\t\t<div class=\"shortcutForChatter\">\n\t\t\t\t\t<h4>Yaopeng Liu</h4>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<img src=\"assets/img/avatar/Avatar_01.png\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p>Status: <span class=\"text-success\">Online</span></p>\n\t\t\t\t\t\t\t<p>Level: 15</p>\n\t\t\t\t\t\t\t<p>Location: ON</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"shortcutForChatter\">\n\t\t\t\t\t<h4>Alice Eden</h4>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<img src=\"assets/img/avatar/Avatar_02.png\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p>Status: <span class=\"text-danger\">Offline</span></p>\n\t\t\t\t\t\t\t<p>Level: 11</p>\n\t\t\t\t\t\t\t<p>Location: QC</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"shortcutForChatter\">\n\t\t\t\t\t<h4>Bruce Lee</h4>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<img src=\"assets/img/avatar/Avatar_03.png\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p>Status: <span class=\"text-danger\">Offline</span></p>\n\t\t\t\t\t\t\t<p>Level: 13</p>\n\t\t\t\t\t\t\t<p>Location: BC</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"shortcutForChatter\">\n\t\t\t\t\t<h4>James Cocordan</h4>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<img src=\"assets/img/avatar/Avatar_04.png\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p>Status: <span class=\"text-success\">Online</span></p>\n\t\t\t\t\t\t\t<p>Level: 5</p>\n\t\t\t\t\t\t\t<p>Location: ON</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id=\"MessageBoxContent\">\n\t\n\t</div>\n\t<div id=\"chatMessageLog\">\n\t\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/messagebox/messagebox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageboxComponent; });
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

var MessageboxComponent = /** @class */ (function () {
    function MessageboxComponent() {
        this.chatType = 1;
    }
    MessageboxComponent.prototype.ngOnInit = function () {
        $("#chatBarForMessage div.chatList>div.chatGroupBlock>button").eq(this.chatType - 1).toggleClass("actived");
    };
    MessageboxComponent.prototype.chatTypeChange = function (event) {
        var type = $(event.target).attr("chattype");
        if (type === undefined)
            type = $(event.target).parent("button").attr("chattype");
        $("#chatBarForMessage div.chatList>div.chatGroupBlock>button").eq(this.chatType - 1).toggleClass("actived");
        this.chatType = Number(type);
        $("#chatBarForMessage div.chatList>div.chatGroupBlock>button").eq(this.chatType - 1).toggleClass("actived");
    };
    MessageboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messagebox',
            template: __webpack_require__("./src/app/messagebox/messagebox.component.html"),
            styles: [__webpack_require__("./src/app/messagebox/messagebox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageboxComponent);
    return MessageboxComponent;
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

/***/ "./src/app/services/globalvariables/usersetting.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersettingService; });
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

var UsersettingService = /** @class */ (function () {
    function UsersettingService() {
        this.security = {
            password: "", phone: "", email: "", allowance1: true, allowance2: false, allowance3: true,
            province: "", notification: false
        };
        this.privacy = {
            profileAllowance: "2", searchAllowance: "1", addAllowance: "1"
        };
        this.blocklist = {
            blockEnable01: false, blockEnable02: true, blockEnable03: false, blockEnable04: true,
            blockEnable05: false, blockEnable06: false, blockEnable07: true
        };
        this.payment = {
            method: "3", number: "", name: "", code: ""
        };
    }
    UsersettingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UsersettingService);
    return UsersettingService;
}());



/***/ }),

/***/ "./src/app/useraccount/useraccount.component.css":
/***/ (function(module, exports) {

module.exports = "#useraccountTopMenu{\r\n\tpadding: 0.675rem 0.375rem;\r\n\twidth: 100%;\r\n\tpadding-bottom: 1rem;\r\n\tbackground-color: rgb(34, 45, 66);\r\n}\r\n.useraccountTopMenuTitle{\r\n\tdisplay: inline-block;\r\n\ttext-align: center;\r\n\tcolor: rgb(255, 237, 237);\r\n\topacity: 1;\r\n\t-webkit-animation: titlefadeinout 4s infinite;\r\n\t        animation: titlefadeinout 4s infinite;\r\n\tborder-top: 1px solid rgb(255, 237, 237);\r\n\tborder-bottom: 1px solid rgb(255, 237, 237);\r\n\tpadding: 0.1rem 0.2rem;\r\n}\r\n@keyframes titlefadeinout{\r\n\t0% {opacity: 1;}  50% {opacity: 0;} 100% {opacity: 1;}\r\n}\r\n@-webkit-keyframes titlefadeinout{\r\n\t0% {opacity: 1;}  50% {opacity: 0;} 100% {opacity: 1;}\r\n}\r\n.useraccountTopMenuInfo{\r\n\twidth: 100%;\r\n\tmargin-top: 0.75rem;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: stretch;\r\n\t    -ms-flex-align: stretch;\r\n\t        align-items: stretch;\r\n}\r\n.profile{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n.infoblock{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-align: stretch;\r\n\t    -ms-flex-align: stretch;\r\n\t        align-items: stretch;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n.infoblock p, .infoblock a{\r\n\tcolor: #fff;\r\n\tmargin-bottom: 0;\r\n\tfont-size: 1.2rem;\r\n}\r\ndiv.infoblock div.progress-bar{\r\n\twidth: 0;\r\n\t-webkit-transition: width 5s;\r\n\ttransition: width 5s;\r\n\tposition: relative;\r\n\tborder-top-right-radius: 2rem;\r\n\tborder-bottom-right-radius: 2rem;\r\n}\r\ndiv.infoblock div.progress-bar>small{\r\n\tcolor: white;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-ms-flex-line-pack: center;\r\n\t    align-content: center;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tfont-size: 1rem;\r\n}\r\ndiv.infoblock>a.focused{\r\n\tcolor: white;\r\n\tbackground-color: #47c047e0;\r\n\tborder-color: #47c047e0;\r\n}\r\ndiv.infoblock>a:focus{\r\n\t-webkit-box-shadow: 0 0 0 0.2rem rgba(47, 204, 59, 0.5);\r\n\t        box-shadow: 0 0 0 0.2rem rgba(47, 204, 59, 0.5);\r\n}\r\n#userAccountContent{\r\n\twidth: 100%;\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex-positive: 1;\r\n\t        flex-grow: 1;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/useraccount/useraccount.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\" style=\"height: 100%;\">\n\t<div id=\"useraccountTopMenu\">\n\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t<h2 class=\"useraccountTopMenuTitle\">Welcome to <i class=\"fab fa-angular fa-lg\"></i>ngular</h2>\n\t\t</div>\n\t\t<div class=\"useraccountTopMenuInfo\">\n\t\t\t<div class=\"profile col-2\">\n\t\t\t\t<img src=\"assets/img/profile.jpg\" class=\"w-75\">\n\t\t\t</div>\n\t\t\t<div class=\"infoblock col-3\">\n\t\t\t\t<p>Dr. Meow</p>\n\t\t\t\t<p>Male</p>\n\t\t\t\t<p>2000-12-25</p>\n\t\t\t\t<p>Meow@doctor.ca</p>\n\t\t\t</div>\n\t\t\t<div class=\"infoblock col-4\">\n\t\t\t\t<div class=\"row w-100\">\n\t\t\t\t\t<p class=\"col-5\">Dental</p>\n\t\t\t\t\t<div class=\"col-7 progress pl-0 align-self-center\">\n\t\t\t\t\t\t<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-primary\">\n\t\t\t\t\t\t\t<small>70</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row w-100 align-items-stretch\">\n\t\t\t\t\t<p class=\"col-5\">Surgical</p>\n\t\t\t\t\t<div class=\"col-7 progress pl-0 align-self-center\">\n\t\t\t\t\t\t<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-info\">\n\t\t\t\t\t\t\t<small>60</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row w-100 align-items-stretch\">\n\t\t\t\t\t<p class=\"col-5\">Internal</p>\n\t\t\t\t\t<div class=\"col-7 progress pl-0 align-self-center\">\n\t\t\t\t\t\t<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-danger\">\n\t\t\t\t\t\t\t<small>45</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row w-100 align-items-stretch\">\n\t\t\t\t\t<p class=\"col-5\">Psycho</p>\n\t\t\t\t\t<div class=\"col-7 progress pl-0 align-self-center\">\n\t\t\t\t\t\t<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-success\">\n\t\t\t\t\t\t\t<small>90</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"infoblock col-3\">\n\t\t\t\t<a class=\"btn btn-outline-danger py-0 my-1\" routerLink=\"achievement\" (click)=\"clickRouter($event)\">Achievement</a>\n\t\t\t\t<a class=\"btn btn-outline-danger py-0 my-1\" routerLink=\"history\" (click)=\"clickRouter($event)\">History</a>\n\t\t\t\t<a class=\"btn btn-outline-danger py-0 my-1\" routerLink=\"collection\" (click)=\"clickRouter($event)\">Collection</a>\n\t\t\t\t<a class=\"btn btn-outline-danger py-0 my-1\" routerLink=\"setting\" (click)=\"clickRouter($event)\">Setting</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id=\"userAccountContent\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n<div>\n"

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

module.exports = "#useraccountAchievementMain{\r\n\theight: 100%;\r\n\tbackground-color:  #ebf1ff;\r\n\tpadding: 0.75rem 1rem;\r\n}\r\n#useraccountAchievementMain div.card{\r\n\tborder-radius: 0.5rem;\r\n}\r\n#useraccountAchievementMain div.card-header{\r\n\tborder-top-left-radius: 0.5rem;\r\n\tborder-top-right-radius: 0.5rem;\r\n\tbackground-color: #282c34;\r\n}\r\n#useraccountAchievementMain div.card-header>p.title{\r\n\tcolor: #61dafb;\r\n\tfont-size: 1.55rem;\r\n\tmargin-bottom: 0;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n#useraccountAchievementMain div.card-header>p.title>span{\r\n\tmargin-right: 0.5rem;\r\n\t-webkit-animation: trophyAnimate 4s infinite;\r\n\t        animation: trophyAnimate 4s infinite;\r\n\tdisplay: -webkit-inline-box;\r\n\tdisplay: -ms-inline-flexbox;\r\n\tdisplay: inline-flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tbackground-color: rgba(234, 209, 22, 0.71);\r\n\tborder-radius: 50%;\r\n}\r\n@keyframes trophyAnimate{\r\n\t0% {-webkit-box-shadow: 0px 0px 0.25rem 0.25rem rgba(234, 209, 22, 0.71);box-shadow: 0px 0px 0.25rem 0.25rem rgba(234, 209, 22, 0.71);}  \r\n\t50% {-webkit-box-shadow: 0px 0px 1.5rem 1rem rgba(234, 209, 22, 0.71);box-shadow: 0px 0px 1.5rem 1rem rgba(234, 209, 22, 0.71);} \r\n\t100% {-webkit-box-shadow: 0px 0px 0.25rem 0.25rem rgba(234, 209, 22, 0.71);box-shadow: 0px 0px 0.25rem 0.25rem rgba(234, 209, 22, 0.71);}\r\n}\r\n@-webkit-keyframes trophyAnimate{\r\n\t0% {-webkit-box-shadow: 0px 0px 0.25rem 0.25rem rgba(234, 209, 22, 0.71);box-shadow: 0px 0px 0.25rem 0.25rem rgba(234, 209, 22, 0.71);}  \r\n\t50% {-webkit-box-shadow: 0px 0px 1.5rem 1rem rgba(234, 209, 22, 0.71);box-shadow: 0px 0px 1.5rem 1rem rgba(234, 209, 22, 0.71);} \r\n\t100% {-webkit-box-shadow: 0px 0px 0.25rem 0.25rem rgba(234, 209, 22, 0.71);box-shadow: 0px 0px 0.25rem 0.25rem rgba(234, 209, 22, 0.71);}\r\n}\r\n#useraccountAchievementMain div.card-header>p.title>span>img{\r\n\twidth: 2rem;\r\n}\r\n#useraccountAchievementMain div.card-header>button.configureButton{\r\n\tcolor: #61dafb;\r\n\tfont-size: 1.33rem;\r\n\tmargin-bottom: 0;\r\n\tposition: absolute;\r\n\tright: 2.25rem;\r\n\ttop: 0.6rem;\r\n\tbackground-color: #b34545;\r\n}\r\n#useraccountAchievementMain div.card-header>button.configureButton:hover{\r\n\tcolor: #b34545;\r\n\tbackground-color: #61dafb;\r\n}\r\n#useraccountAchievementMain div.configDropdown{\r\n\tposition: absolute;\r\n\tright: 2.25rem;\r\n\ttop: 4rem;\r\n\twidth: 16rem;\r\n\tfont-size: 0.9rem;\r\n\tpadding: 0.5rem;\r\n\tbackground-color: #282c34;\r\n\tborder-radius: 0.6rem;\r\n\tdisplay: none;\r\n\tz-index: 2;\r\n}\r\n#useraccountAchievementMain div.configDropdown button.btn-outline-success{\r\n\twidth: 100%;\r\n\tborder-bottom-left-radius: 0;\r\n\tborder-bottom-right-radius: 0;\r\n\tfont-weight: bold;\r\n}\r\n#useraccountAchievementMain div.configDropdown button.btn-outline-danger{\r\n\twidth: 100%;\r\n\tborder-radius: 0;\r\n\tfont-weight: bold;\r\n}\r\n#useraccountAchievementMain div.configDropdown button.btn-outline-primary{\r\n\twidth: 100%;\r\n\tborder-top-left-radius: 0;\r\n\tborder-top-right-radius: 0;\r\n\tfont-weight: bold;\r\n}\r\n#useraccountAchievementMain div.configDropdown input{\r\n\tborder-top-left-radius: 0;\r\n}\r\n#useraccountAchievementMain div.card-body{\r\n\tborder-bottom-left-radius: 0.5rem;\r\n\tborder-bottom-right-radius: 0.5rem;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n}\r\n#useraccountAchievementMain div.confirmScreen{\r\n\tdisplay: none;\r\n\tbackground-color: rgba(25, 25, 25, 0.74);\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tmin-height: 100vh;\r\n\tmin-width: 100vw;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n#useraccountAchievementMain div.confirmScreen>div.confirmTextSave,\r\n#useraccountAchievementMain div.confirmScreen>div.confirmTextDelete\r\n{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\topacity: 0;\r\n\tcolor: #e1bcbced;\r\n\tfont-size: 2.5rem;\r\n\tfont-weight: bold;\r\n\tpadding: 3rem;\r\n\twidth: 20rem;\r\n\theight: 20rem;\r\n\tborder-radius: 50%;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n#useraccountAchievementMain div.confirmScreen>div.confirmTextSave{\r\n\tbackground-color: #1a8e1aba;\r\n}\r\n#useraccountAchievementMain div.confirmScreen>div.confirmTextDelete{\r\n\tbackground-color: red;\r\n}"

/***/ }),

/***/ "./src/app/useraccount/userachievement/userachievement.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"useraccountAchievementMain\">\n\t<div class=\"card\">\n  \t\t<div class=\"card-header\">\n    \t\t<p class=\"title\">\n\t\t\t\t<span>\n\t\t\t\t\t<img src=\"assets/img/Trophy.png\">\n\t\t\t\t</span>Achievement Record\n\t\t\t</p>\n\t\t\t<button class=\"configureButton btn px-3\" (click)=\"configDropdown($event)\">\n\t\t\t\t<span (click)=\"configDropdown($event)\">Menu <i class=\"fas fa-cogs\"></i></span>\n\t\t\t</button>\n  \t\t\t<div class=\"configDropdown\">\n\t\t\t\t<button class=\"btn btn-outline-success\" (click)=\"createSnippet()\">Append New Achievenment</button>\n\t\t\t\t<button class=\"btn btn-outline-danger\" (click)=\"removeSnippet()\">Delete All Achievement</button>\n\t\t\t\t<button class=\"btn btn-outline-primary\" (click)=\"saveSnippet()\">Save All Changes</button>\n\t\t\t</div>\n\t\t</div>\n  \t\t<div id=\"achievementSnippetContainer\" class=\"card-body\">\n\t\t\t<template #snippetContainer></template>\n  \t\t</div>\n\t</div>\n\t<div id=\"achievementConfirmScreen1\" class=\"confirmScreen\">\n\t\t<div class=\"confirmTextSave\">\n\t\t\t<p>Save <i class=\"fas fa-hdd\"></i></p>\n\t\t\t<p>Successfully!</p>\n\t\t</div>\n\t</div>\n\t<div id=\"achievementConfirmScreen2\" class=\"confirmScreen\">\n\t\t<div class=\"confirmTextDelete\">\n\t\t\t<p>Delete <i class=\"far fa-hdd\"></i></p>\n\t\t\t<p>Successfully!</p>\n\t\t</div>\n\t</div>\n</div>\n"

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

/***/ "./src/app/useraccount/usercollection/usercollection.component.css":
/***/ (function(module, exports) {

module.exports = "#useraccountCollectionMain{\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tbackground-color:  #ebf1ff;\r\n\tpadding: 0.75rem 1rem;\r\n}\r\n#useraccountCollectionMain div.card{\r\n\tborder-radius: 0.5rem;\r\n}\r\n#useraccountCollectionMain div.card-header{\r\n\tborder-top-left-radius: 0.5rem;\r\n\tborder-top-right-radius: 0.5rem;\r\n\tbackground-color: #282c34;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n}\r\n#useraccountCollectionMain div.card-header>div{\r\n\tcolor: #61dafb;\r\n\tfont-size: 1.55rem;\r\n\tmargin-bottom: 0;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n}\r\n#useraccountCollectionMain div.card-header>div:first-child{\r\n\t-webkit-animation: collectionTitleAnimate 2.4s infinite;\r\n\t        animation: collectionTitleAnimate 2.4s infinite;\r\n\tcolor: red;\r\n\tmargin-right: 0.75rem;\r\n}\r\n#useraccountCollectionMain div.card-header>div:last-child{\r\n\t-webkit-animation: collectionTitleAnimate 2.4s infinite;\r\n\t        animation: collectionTitleAnimate 2.4s infinite;\r\n\tcolor: red;\r\n\tmargin-left: 0.75rem;\r\n}\r\n@-webkit-keyframes collectionTitleAnimate{\r\n\t0% {-webkit-transform: scale(0.75);transform: scale(0.75)}\t50% {-webkit-transform: scale(1.5);transform: scale(1.5)}\t100% {-webkit-transform: scale(0.75);transform: scale(0.75)}\r\n}\r\n@keyframes collectionTitleAnimate{\r\n\t0% {-webkit-transform: scale(0.75);transform: scale(0.75)}\t50% {-webkit-transform: scale(1.5);transform: scale(1.5)}\t100% {-webkit-transform: scale(0.75);transform: scale(0.75)}\r\n}\r\n#useraccountCollectionMain div.card-body{\r\n\tpadding: 0.5rem 0.75rem;\r\n}\r\n#useraccountCollectionMain div.useraccountCollectionContainer{\r\n\tfont-size: 0.9rem;\r\n\twidth: 100%;\r\n\theight: 16rem;\r\n\tposition: relative;\r\n\twhite-space: nowrap;\r\n\t-webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n#useraccountCollectionMain div.useraccountCollectionContainer figure.useraccountCollectionItem{\r\n\tposition: relative;\r\n\tfont-size: 0.9rem;\r\n\tdisplay: -webkit-inline-box;\r\n\tdisplay: -ms-inline-flexbox;\r\n\tdisplay: inline-flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\tborder: 1px solid #282c34;\r\n\tborder-radius: 0.5rem;\r\n\tmargin-top: 0;\r\n\tmargin-bottom: 0.5rem;\r\n\tmargin-right: 1rem;\r\n}\r\n#useraccountCollectionMain figure.useraccountCollectionItem>h4{\r\n\tfont-size: 0.9rem;\r\n\theight: 2rem;\r\n\tpadding: 0.25rem 0.5rem;\r\n\tfont-size: 1.2rem;\r\n\tbackground-color: #282c34;\r\n\tcolor: #61dafb;\r\n\tborder-top-left-radius: 0.5rem;\r\n\tborder-top-right-radius: 0.5rem;\r\n\tmargin-bottom: 0;\r\n\ttext-align: center;\r\n}\r\n#useraccountCollectionMain figure.useraccountCollectionItem>div{\r\n\theight: 12rem;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\tpadding: 1rem 2rem;\r\n}\r\n#useraccountCollectionMain figure.useraccountCollectionItem>div.blur{\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tleft: 0;\r\n\ttop: 2rem;\r\n\tbackground-color: black;\r\n\topacity: 0;\r\n\tborder-bottom-left-radius: 0.5rem;\r\n\tborder-bottom-right-radius: 0.5rem;\r\n\t-webkit-transition: opacity 0.5s ease;\r\n\ttransition: opacity 0.5s ease;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tfont-weight: bold;\r\n\tcolor: white;\r\n\tfont-size: 1.1rem;\r\n}\r\n#useraccountCollectionMain figure.useraccountCollectionItem>div.blurShown{\r\n\topacity: 0.6;\r\n\tcursor: pointer;\r\n}\r\n#useraccountCollectionMain figure.useraccountCollectionItem>div>img{\r\n\theight: 100%;\r\n}\r\n#useraccountCollectionMain div.blackscreen{\r\n\tbackground-color: rgba(25, 25, 25, 0.88);\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tmin-height: 100vh;\r\n\tmin-width: 100vw;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tz-index: 10;\r\n\tpadding: 1vh 0;\r\n\tdisplay: none;\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.8s;\r\n\ttransition: opacity 0.8s;\r\n}\r\n#useraccountCollectionMain div.blackscreen>img{\r\n\theight: 45vh;\r\n\tmargin-bottom: 5vh;\r\n}\r\n#useraccountCollectionMain div.blackscreen>table{\r\n\twidth: 40%;\r\n\tfont-size: 0.8rem;\r\n\ttext-align: center;\r\n\tborder-bottom: 1px solid #fff;\r\n}\r\n#useraccountCollectionMain div.blackscreen th{\r\n\tcolor: #61dafb;\r\n}\r\n#useraccountCollectionMain div.blackscreen td{\r\n\tcolor: #fff;\r\n\tfont-weight: bold;\r\n}\r\n#useraccountCollectionMain div.blackscreen tr:hover{\r\n\tbackground-color: #b65252bd;\r\n}"

/***/ }),

/***/ "./src/app/useraccount/usercollection/usercollection.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"useraccountCollectionMain\">\n\t<div class=\"card\">\n  \t\t<div class=\"card-header\">\n\t\t\t<div>\n\t\t\t\t<i class=\"fas fa-heart\"></i>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\tCollection Repository\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<i class=\"fas fa-heart\"></i>\n\t\t\t</div>\t\t\n\t\t</div>\n  \t\t<div class=\"card-body\">\n\t\t\t<div class=\"useraccountCollectionContainer\">\n\t\t\t\t<ng-scrollbar #scrollRef>\n\t\t\t\t\t<figure class=\"useraccountCollectionItem\" *ngFor=\"let item of collectionList; let i=index;\">\n\t\t\t\t\t\t<h4>Favorite {{item.name}}</h4>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<img src={{item.url}}>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"blur\" (mouseenter)=\"itemHovered($event)\" (mouseleave)=\"itemHover($event)\" \n\t\t\t\t\t\t\t (click)=\"itemClicked($event)\"  [attr.itemindex]=\"i\">\n\t\t\t\t\t\t\tClick to view detail\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</figure>\n\t\t\t\t</ng-scrollbar>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"blackscreen\" (click)=\"removeBlackScreen($event)\">\n\t\t<img>\n\t\t<table class=\"table\">\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let entry of itemDetail\">\n\t\t\t\t\t<th>{{entry}}</th>\n\t\t\t\t\t<td></td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/useraccount/usercollection/usercollection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsercollectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_scrollbar__ = __webpack_require__("./node_modules/ngx-scrollbar/esm5/ngx-scrollbar.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsercollectionComponent = /** @class */ (function () {
    function UsercollectionComponent() {
        this.collectionList = [
            { name: "Smartphone", url: "assets/img/collect01.png", start: "2018-01-01", end: "2018-04-01", price: "$888", location: "Amazon", discount: "32%" },
            { name: "Album", url: "assets/img/collect02.png", start: "2017-06-01", end: "2018-09-01", price: "$125", location: "Ebay", discount: "21%" },
            { name: "Disc", url: "assets/img/collect03.png", start: "2018-03-15", end: "2018-03-25", price: "$108", location: "Amazon", discount: "19%" },
            { name: "Laptop", url: "assets/img/collect04.png", start: "2018-03-05", end: "2018-04-12", price: "$2250", location: "CanadaComputer", discount: "15%" },
            { name: "Headphone", url: "assets/img/collect05.png", start: "2018-01-09", end: "2018-06-11", price: "$300", location: "CanadaComputer", discount: "25%" },
            { name: "Keyboard", url: "assets/img/collect06.png", start: "2018-01-11", end: "2018-03-26", price: "$209", location: "Amazon", discount: "30%" },
            { name: "Desklamp", url: "assets/img/collect07.png", start: "2017-12-01", end: "2018-04-05", price: "$133", location: "Ebay", discount: "22%" },
            { name: "Camera", url: "assets/img/collect08.png", start: "2018-02-15", end: "2018-07-03", price: "$2775", location: "Amazon", discount: "45%" },
            { name: "Watch", url: "assets/img/collect09.png", start: "2018-04-01", end: "2018-06-04", price: "$1024", location: "Taobao", discount: "15%" },
            { name: "Sunglass", url: "assets/img/collect10.png", start: "2018-06-06", end: "2018-06-09", price: "$99", location: "Amazon", discount: "25%" }
        ];
        this.itemDetail = ["Name", "Start Date", "End Date", "Price", "Location", "Discount"];
    }
    UsercollectionComponent.prototype.ngOnInit = function () {
        $("app-usercollection").css("max-width", "100%");
        this.scrollRef.trackX = true;
        this.scrollRef.trackY = false;
        var bar = this.scrollRef.barXRef.nativeElement;
        var thumb = this.scrollRef.thumbXRef.nativeElement;
        $(bar).css({
            "height": "0.5rem", "border-radius": "0.5rem", "background": "rgba(237, 204, 204, 0.88)"
        });
        $(thumb).css({
            "border-radius": "0.5rem", "background": "rgba(35, 137, 255, 0.74)",
            "background-image": "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)",
            "background-size": "1rem 1rem", "animation": "progress-bar-stripes 0.5s linear infinite"
        });
    };
    UsercollectionComponent.prototype.ngAfterViewInit = function () {
        this.scrollRef.scrollXTo(1, 50);
        this.scrollRef.scrollXTo(0, 50);
    };
    UsercollectionComponent.prototype.itemHovered = function (event) {
        $(event.target).addClass("blurShown");
    };
    UsercollectionComponent.prototype.itemHover = function (event) {
        $(event.target).removeClass("blurShown");
    };
    UsercollectionComponent.prototype.itemClicked = function (event) {
        var _this = this;
        var index = Number($(event.target).attr("itemindex"));
        var element = $("#useraccountCollectionMain div.blackscreen");
        element.find("img").attr("src", this.collectionList[index].url);
        element.find("td").each(function (i, e) {
            if (i === 0) {
                $(e).text(_this.collectionList[index].name);
            }
            else {
                var property = Object.keys(_this.collectionList[index])[i + 1];
                $(e).text(_this.collectionList[index][property]);
            }
        });
        element.css("display", "flex");
        setTimeout(function () {
            element.css("opacity", "1");
        }, 200);
    };
    UsercollectionComponent.prototype.removeBlackScreen = function (event) {
        var element = $(event.target);
        if (element.hasClass("blackscreen")) {
            element.css("opacity", "0");
            setTimeout(function () {
                element.css("display", "none");
            }, 800);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ngx_scrollbar__["a" /* ScrollbarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_scrollbar__["a" /* ScrollbarComponent */])
    ], UsercollectionComponent.prototype, "scrollRef", void 0);
    UsercollectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-usercollection',
            template: __webpack_require__("./src/app/useraccount/usercollection/usercollection.component.html"),
            styles: [__webpack_require__("./src/app/useraccount/usercollection/usercollection.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsercollectionComponent);
    return UsercollectionComponent;
}());



/***/ }),

/***/ "./src/app/useraccount/userhistory/userhistory.component.css":
/***/ (function(module, exports) {

module.exports = "#useraccountHistoryMain{\r\n\theight: 100%;\r\n\tbackground-color:  #ebf1ff;\r\n\tpadding: 0.75rem 1rem;\r\n}\r\n#useraccountHistoryMain div.card{\r\n\tborder-radius: 0.5rem;\r\n}\r\n#useraccountHistoryMain div.card-header{\r\n\tborder-top-left-radius: 0.5rem;\r\n\tborder-top-right-radius: 0.5rem;\r\n\tbackground-color: #282c34;\r\n}\r\n#useraccountHistoryMain div.card-header>p.title{\r\n\tdisplay: none;\r\n\tcolor: #61dafb;\r\n\tfont-size: 1.55rem;\r\n\tmargin-bottom: 0;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n}\r\n#useraccountHistoryContainer{\r\n\tfont-size: 0.9rem;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\t-webkit-box-align: stretch;\r\n\t    -ms-flex-align: stretch;\r\n\t        align-items: stretch;\r\n}\r\n#useraccountHistoryContainer figure.imagesStackContainer{\r\n\t min-width: 17.6rem;\r\n\t min-height: 15rem;\r\n\t position: relative;\r\n\t margin-bottom: 0rem;\r\n}\r\n#useraccountHistoryContainer figure.imagesStackContainer>div{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tpadding: 0.6rem 0.8rem;\r\n\tborder: 1px solid #b6a3a3d1;\r\n\tbackground-color: #fff5f5;\r\n\tborder-radius: 0.5rem;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tposition: absolute;\r\n}\r\n#useraccountHistoryContainer figure.imagesStackContainer figcaption{\r\n\t font-size: 1.2rem;\r\n\t line-height: 1.2rem;\r\n\t font-weight: bold;\r\n\t margin-bottom: 0.5rem;\r\n\t opacity: 0.65;\r\n}\r\n#useraccountHistoryContainer figure.imagesStackContainer img{\r\n\t width: 16rem;\r\n\t height: 12rem;\r\n\t border: 1px solid #fff;\r\n\t border-radius: 0.5rem;\r\n}\r\n#useraccountHistoryContainer div.buttonGroup{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\twidth: 13rem;\r\n\tmin-height: 15rem;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\tpadding: 0.6rem 0.8rem;\r\n\tborder: 1px solid #b6a3a3d1;\r\n\tbackground-color: #fff5f5;\r\n\tborder-radius: 0.5rem;\r\n}\r\n#useraccountHistoryContainer div.buttonGroup button,\r\n#useraccountHistoryContainer div.buttonGroup button{\r\n\tpadding: 0.375rem 0.625rem;\r\n\tfont-weight: bold;\r\n\tborder-radius: 0.5rem;\r\n\tbackground-color: #282c34;\r\n\tborder: 1px solid #282c34;\r\n\tcolor: #61dafb;\r\n\toutline: none;\r\n}\r\n#useraccountHistoryContainer div.buttonGroup button:hover{\r\n\tbackground-color: #61dafb;\r\n\tborder: 1px solid #61dafb;\r\n\tcolor: #282c34;\r\n\tcursor: pointer;\r\n}\r\n#useraccountHistoryContainer div.buttonGroup button:active{\r\n\tbackground-color: rgba(220, 53, 69, 0.8);\r\n\tborder: 1px solid rgba(220, 53, 69, 0.8);\r\n\tcolor: #fff;\r\n}\r\n#useraccountHistoryContainer div.input-group-prepend>label.input-group-text{\r\n\tborder-top-left-radius: 0.5rem;\r\n\tborder-bottom-left-radius: 0.5rem;\r\n\tbackground-color: #282c34;\r\n\tborder: 1px solid #282c34;\r\n\tcolor: #61dafb;\r\n\tfont-weight: bold;\r\n}\r\n#useraccountHistoryContainer select{\r\n\tborder-top-right-radius: 0.5rem;\r\n\tborder-bottom-right-radius: 0.5rem;\r\n}\r\n/*------------      For cube style  ----------------*/\r\n#useraccountHistoryContainer{\r\n\t-webkit-perspective: 10000rem;\r\n\t        perspective: 10000rem;\t\t\t\t\t\t\t\t\t\t\t/*enlarge the distance enough so it will rightly face to front-side*/\r\n\t-webkit-perspective-origin: 0 0;\r\n\t        perspective-origin: 0 0;\r\n}\r\n#useraccountHistoryContainer figure.imagesStackContainer{\r\n\t -webkit-transform-style: preserve-3d;\r\n\t         transform-style: preserve-3d;\r\n\t position: relative;\r\n}\r\n/* We don't need top and bottom side */\r\n#historyimage01 {\r\n\t-webkit-transform: translateZ(8.8rem);\r\n\t        transform: translateZ(8.8rem);\t\t\t\t\t\t\t\t/*move forward 8.8rem*/\r\n}\r\n#historyimage03 {\r\n\t-webkit-transform: translateZ(-8.8rem) rotateY(180deg);\r\n\t        transform: translateZ(-8.8rem) rotateY(180deg);\t/*move backward 8.8rem, rotateY 180 deg to backside*/\r\n}\r\n#historyimage02 {\r\n\t-webkit-transform:  rotateY(-270deg) translateX(8.8rem) ;\r\n\t        transform:  rotateY(-270deg) translateX(8.8rem) ;\t  /*rotateY -270 deg to rightside and move rightward 8.8rem, */\r\n\t-webkit-transform-origin: center right;\r\n\t        transform-origin: center right;\t\t\t\t\t\t\t\t   /*when rotate, this element has transform origin at center/right */\r\n}\r\n#historyimage04 {\r\n\t-webkit-transform:  rotateY(270deg) translateX(-8.8rem) ;\r\n\t        transform:  rotateY(270deg) translateX(-8.8rem) ;\t  /* rotateY 270 deg to leftside and move leftward 8.8rem,*/\r\n\t-webkit-transform-origin: center left;\r\n\t        transform-origin: center left;\t\t\t\t\t\t\t\t\t/*when rotate, this element has transform origin at center/left */\r\n}\r\n#useraccountHistoryContainer div.contentGroup{\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n\twidth: 20rem;\r\n\tmin-height: 15rem;\r\n}\r\n#useraccountHistoryContainer div.contentGroup>div{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\tpadding: 0.6rem 0.8rem;\r\n\tborder: 1px solid #b6a3a3d1;\r\n\tbackground-color: #fff5f5;\r\n\tborder-radius: 0.5rem;\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 1.25s;\r\n\ttransition: opacity 1.25s;\r\n}\r\n#useraccountHistoryContainer div.contentGroup>div.show{\r\n\topacity: 1;\r\n}\r\n#useraccountHistoryContainer div.contentGroup>div .card-header{\r\n\tbackground-color: #282c34;\r\n\tcolor: #61dafb;\r\n\tfont-weight: bold;\r\n\tfont-size: 1rem;\r\n\tpadding: 0.375rem;\r\n\ttext-align: center;\r\n\tborder-radius: 0.5rem;\r\n\tmargin-bottom: 0.375rem;\r\n}\r\n#useraccountHistoryContainer div.contentGroup div.card-body{\r\n\tpadding: 0;\r\n}\r\n#useraccountHistoryContainer div.contentGroup div.card-body>table{\r\n\tmargin-bottom: 0;\r\n}\r\n#useraccountHistoryContainer div.contentGroup div.card-body th,\r\n#useraccountHistoryContainer div.contentGroup div.card-body td{\r\n\tpadding: 0.375rem 0.25rem;\r\n\ttext-align: justify;\r\n}\r\n/*\r\n#useraccountHistoryContainer svg{\r\n\theight: 10rem;\r\n}\r\n#useraccountHistoryContainer tr.chartHovered{\r\n\tbackground-color: #4e9cedc4;\r\n\tcolor: #fff;\r\n}\r\n#useraccountHistoryContainer div.chart{\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tposition: relative;\r\n}\r\n*/\r\n\r\n"

/***/ }),

/***/ "./src/app/useraccount/userhistory/userhistory.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"useraccountHistoryMain\">\n\t<div class=\"card\">\n  \t\t<div class=\"card-header\">\n    \t\t<p class=\"title\">\n\t\t\t\tHistroy Event Record\n\t\t\t</p>\n\t\t</div>\n  \t\t<div id=\"useraccountHistoryContainer\" class=\"card-body\">\n\t\t\t<figure class=\"imagesStackContainer\">\n\t\t\t\t<div id=\"historyimage04\">\n\t\t\t\t\t<figcaption>Met in Markham</figcaption>\n\t\t\t\t\t<img src=\"assets/img/historyevent04.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div id=\"historyimage03\">\n\t\t\t\t\t<figcaption>Met in Mississauga</figcaption>\n\t\t\t\t\t<img src=\"assets/img/historyevent03.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div id=\"historyimage02\">\n\t\t\t\t\t<figcaption>Met in North York</figcaption>\n\t\t\t\t\t<img src=\"assets/img/historyevent02.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div id=\"historyimage01\">\n\t\t\t\t\t<figcaption>Met in Downtown</figcaption>\n\t\t\t\t\t<img src=\"assets/img/historyevent01.jpg\">\n\t\t\t\t</div>\n\t\t\t</figure>\n\t\t\t<div class=\"buttonGroup\">\n\t\t\t\t<button (click)=\"prevImage()\">Prev</button>\n\t\t\t\t<button (click)=\"nextImage()\">Next</button>\n\t\t\t\t<div class=\"input-group\">\n  \t\t\t\t\t<div class=\"input-group-prepend\">\n    \t\t\t\t\t<label class=\"input-group-text\" for=\"imageStackSelect\">Go to</label>\n  \t\t\t\t\t</div>\n\t\t\t\t\t<select class=\"custom-select\" id=\"imageStackSelect\" (change)=\"changeImage($event)\">\n    \t\t\t\t\t<option value=\"0\" selected>1st Record</option>\n    \t\t\t\t\t<option value=\"1\">2nd Record</option>\n    \t\t\t\t\t<option value=\"2\">3rd Record</option>\n\t\t\t\t\t\t<option value=\"3\">4th Record</option>\n  \t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"contentGroup\">\n\t\t\t\t<div class=\"card\" [class.show]=\"currentIndex===0\">\n  \t\t\t\t\t<h4 class=\"card-header\">Together with Mr. Liu</h4>\n  \t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<table class=\"table table-hover\">\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Date</th>\n      \t\t\t\t\t\t\t\t<td>2018-2-15</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Location</th>\n      \t\t\t\t\t\t\t\t<td>Dowontown, Toronto</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Member</th>\n      \t\t\t\t\t\t\t\t<td>Mr. Liu</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Description</th>\n      \t\t\t\t\t\t\t\t<td>Met with Mr. Liu in Chinese restaurant of downtown and have a dinner together</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\" [class.show]=\"currentIndex===1\">\n  \t\t\t\t\t<h4 class=\"card-header\">Together with Miss. Yui</h4>\n  \t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Date</th>\n      \t\t\t\t\t\t\t\t<td>2018-2-11</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Location</th>\n      \t\t\t\t\t\t\t\t<td>North York, Toronto</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Member</th>\n      \t\t\t\t\t\t\t\t<td>Miss. Yui</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Description</th>\n      \t\t\t\t\t\t\t\t<td>Met with Miss. Yui in Walmart and shopping together the whole day</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\" [class.show]=\"currentIndex===2\">\n\t\t\t\t\t<h4 class=\"card-header\">Together with THA</h4>\n  \t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Date</th>\n      \t\t\t\t\t\t\t\t<td>2018-1-29</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Location</th>\n      \t\t\t\t\t\t\t\t<td>Mississauga, Toronto</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Member</th>\n      \t\t\t\t\t\t\t\t<td>Toronto Healthcare Association</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Description</th>\n      \t\t\t\t\t\t\t\t<td>Met with other association members regarding current problems and future plans</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\" [class.show]=\"currentIndex===3\">\n\t\t\t\t\t<h4 class=\"card-header\">Together with Apprentices</h4>\n  \t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Date</th>\n      \t\t\t\t\t\t\t\t<td>2018-1-25</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Location</th>\n      \t\t\t\t\t\t\t\t<td>Markham, Toronto</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Member</th>\n      \t\t\t\t\t\t\t\t<td>Apprentices</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n      \t\t\t\t\t\t\t\t<th>Description</th>\n      \t\t\t\t\t\t\t\t<td>Met with most of apprentices and gave speech to show the cutting-edge operation techs</td>\n    \t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n  \t\t</div>\n\t</div>\n</div>\n\n\n\n\n\n<!--\n\t\t\t<div class=\"chart\">\n\t\t\t\t<svg viewBox=\"-1 -1 2 2\"></svg>\n\t\t\t</div>\t\n-->\n"

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

/***/ "./src/app/useraccount/usersetting/usersetting.component.css":
/***/ (function(module, exports) {

module.exports = "#useraccountSettingMain{\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tbackground-color:  #ebf1ff;\r\n\tpadding: 1.25rem 1.5rem;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingBar{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingBar>button{\r\n\theight: 4.3rem;\r\n\twidth: 12rem;\r\n\tfont-size: 1.2rem;\r\n\tline-height:1.2rem;\r\n\tborder: 1px solid #282c34;\r\n\tborder-bottom: 1px solid white;\r\n\tbackground-color: #282c34;\r\n\tcolor: #61dafb;\r\n\toutline: none;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingBar>button:hover{\r\n\tbackground-color: #61dafb;\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n\t-webkit-animation: userSettingBarFont 0.5s;\r\n\t        animation: userSettingBarFont 0.5s;\r\n}\r\n\r\n@-webkit-keyframes userSettingBarFont{\r\n\t0% {font-size: 1.2rem; line-height:1.2rem;}\r\n\t50% {font-size: 1.65rem; line-height:1.65rem;}\r\n\t100% {font-size: 1.2rem; line-height:1.2rem;}\r\n}\r\n\r\n@keyframes userSettingBarFont{\r\n\t0% {font-size: 1.2rem; line-height:1.2rem;}\r\n\t50% {font-size: 1.65rem; line-height:1.65rem;}\r\n\t100% {font-size: 1.2rem; line-height:1.2rem;}\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingBar>button:active,\r\n#useraccountSettingMain div.useraccountSettingBar>button.active{\r\n\tbackground-color: #0d992beb;\r\n\tcolor: white;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingBar>button:first-child{\r\n\tborder-top-left-radius: 0.5rem;\r\n\tborder-top-right-radius: 0.5rem;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingBar>button:last-child{\r\n\tborder-bottom-left-radius: 0.5rem;\r\n\tborder-bottom-right-radius: 0.5rem;\r\n\tborder-bottom: 0px;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent{\r\n\theight: auto;\r\n\twidth: 36rem;\r\n\tborder: 1px solid rgb(34, 45, 66);\r\n\tborder-radius: 0.5rem;\r\n\tpadding: 0.675rem 1.25rem;\r\n\tbackground-color: rgb(34, 45, 66);\r\n\tfont-size: 1rem;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent label{\r\n\tfont-weight: bold;\r\n\tcolor: white;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent input[type=\"password\"],\r\n#useraccountSettingMain div.useraccountSettingContent input[type=\"email\"],\r\n#useraccountSettingMain div.useraccountSettingContent input[type=\"number\"],\r\n#useraccountSettingMain div.useraccountSettingContent div.selectDiv,\r\n#useraccountSettingMain div.useraccountSettingContent div.checkboxDiv{\r\n\tpadding: 0.125rem 0.25rem;\r\n}\r\n\r\n#userSettingProvince{\r\n\twidth: 100%;\r\n\tborder-radius: 0.25rem;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent input[type=\"checkbox\"]{\r\n\tdisplay: none;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent div.selectDiv{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n\tposition: relative;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent div.selectDiv:hover{\r\n\tcursor: pointer;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent div.selectOptionDiv{\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\tposition: absolute;\r\n\tleft: 0.75rem;\r\n\ttop: 2.25rem;\r\n\tbackground-color: #282c34;\r\n\tborder: 1px solid #282c34;\r\n\theight: auto;\r\n\twidth: calc (100% - 1.5rem);\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\tz-index: 3;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent div.hide{\r\n\tdisplay: none;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent div.selectOptionDiv>p{\r\n\tcolor: #fff;\r\n\tpadding: 0.375rem;\r\n\tmargin: 0.125rem;\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex-positive: 1;\r\n\t        flex-grow: 1;\r\n\ttext-align: center;\r\n\tborder: 0.5px solid #fff;\r\n\twidth: 2.5rem;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent div.selectOptionDiv>p:hover{\r\n\tbackground-color: orange;\r\n\tcursor: pointer;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent div.checkboxDiv{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent div.No{\r\n\tbackground-color: #f5f5f5c2;\r\n\tborder-color: #f5f5f5c2;\r\n\tcolor: black;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent div.Yes{\r\n\tbackground-color: green;\r\n\tborder-color: green;\r\n\tcolor: #fff;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent div.checkboxDiv:hover{\r\n\tcursor: pointer;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent div.checkboxDiv>div{\r\n\theight: 1.45rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#useraccountSettingMain div.useraccountSettingContent div.checkboxDiv>div>span{\r\n\tfont-size: 1.2rem;\r\n\tline-height: 1.2rem;\r\n}\r\n\r\n#useraccountSettingMain .custom-checkbox .custom-control-input:checked~.custom-control-label::before{\r\n\tbackground-color: #23b323f0;\r\n}\r\n\r\n#useraccountSettingMain .custom-checkbox .custom-control-label::before{\r\n\tborder-radius: 0.5rem;\r\n}\r\n\r\n#useraccountSettingMain label.custom-control-label:hover{\r\n\tcursor: pointer;\r\n}\r\n\r\n#useraccountSettingMain div.profileChoice>input[type=\"radio\"]{\r\n\tdisplay: none;\r\n}\r\n\r\n#useraccountSettingMain div.profileChoice{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n#useraccountSettingMain div.profileChoice>input[type=\"radio\"]~label{\r\n\tborder: 1px solid #fff;\r\n\tpadding: 0.125rem 1rem;\r\n\ttext-align: center;\r\n\tmargin-bottom: 0;\r\n\tborder-radius: 0.5rem;\r\n\twidth: 9rem;\r\n\tfont-size: 0.9rem;\r\n}\r\n\r\n#useraccountSettingMain div.profileChoice>input[type=\"radio\"]~label:hover{\r\n\tcursor: pointer;\r\n}\r\n\r\n#useraccountSettingMain div.profileChoice>input[type=\"radio\"]:checked~label{\r\n\tborder: 1px solid #2db82dd6;\r\n\tbackground-color: #2db82dd6;\r\n}\r\n\r\n#useraccountSettingMain table.blockTable{\r\n\tbackground-color: white;\r\n\tfont-size: 0.9rem;\r\n\tmargin-bottom: 0;\r\n\tborder-radius: 0.5rem;\r\n}\r\n\r\n#useraccountSettingMain table.blockTable>thead{\r\n\tbackground-color: #9d2c2ce3;\r\n\tcolor: #2dd2ff;\r\n}\r\n\r\n#useraccountSettingMain table.blockTable>thead>tr>th:first-child{\r\n\tborder-top-left-radius: 0.5rem;\r\n}\r\n\r\n#useraccountSettingMain table.blockTable>thead>tr>th:last-child{\r\n\tborder-top-right-radius: 0.5rem;\r\n}\r\n\r\n#useraccountSettingMain table.blockTable th,\r\n#useraccountSettingMain table.blockTable td{\r\n\tvertical-align: middle;\r\n\ttext-align: center;\r\n\tpadding: 0.325rem 0.5rem;\r\n\tborder: 0;\r\n}\r\n\r\n#useraccountSettingMain table.blockTable td>input[type=\"checkbox\"]{\r\n\tdisplay: none;\r\n}\r\n\r\n#useraccountSettingMain table.blockTable td>input[type=\"checkbox\"]~label{\r\n\tcolor: white;\r\n\tbackground-color: grey;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 0;\r\n\twidth: 75%;\r\n\tborder-radius: 0.5rem;\r\n}\r\n\r\n#useraccountSettingMain table.blockTable td>input[type=\"checkbox\"]~label:after{\r\n\tcontent: \"Enable\";\r\n}\r\n\r\n#useraccountSettingMain table.blockTable td>input[type=\"checkbox\"]:checked~label{\r\n\tcolor: white;\r\n\tbackground-color: green;\r\n}\r\n\r\n#useraccountSettingMain table.blockTable td>input[type=\"checkbox\"]:checked~label:after{\r\n\tcontent: \"Disable\";\r\n}\r\n\r\n#useraccountSettingMain table.blockTable td>label:hover{\r\n\tcursor: pointer;\r\n}\r\n\r\n#useraccountSettingMain div.paymentBlock input[type=\"radio\"]{\r\n\tdisplay:none;\r\n}\r\n\r\n#useraccountSettingMain label.paymentIcon{\r\n\tdisplay: -webkit-inline-box;\r\n\tdisplay: -ms-inline-flexbox;\r\n\tdisplay: inline-flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n#useraccountSettingMain label.paymentIcon>img{\r\n\twidth: 100%;\r\n\tpadding: 0.25rem;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 0.5rem;\r\n\tbackground-color: #e9e8e8;\r\n}\r\n\r\n#useraccountSettingMain input[type=\"radio\"]:checked~label.paymentIcon>img{\r\n\tborder: 0.25rem solid #07ff07;\r\n\tbackground-color: #b5ffb5;\r\n}\r\n\r\n#useraccountSettingMain label.paymentIcon>img:hover{\r\n\tcursor: pointer;\r\n}\r\n\r\n#useraccountSettingMain div.paymentInfo div.input-group-prepend{\r\n\twidth: 25%;\r\n}\r\n\r\n#useraccountSettingMain div.paymentInfo div.input-group-prepend>span{\r\n\twidth: 100%;\r\n\tbackground-color: #282c34;\r\n\tcolor: #61dafb;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#useraccountSettingMain div.paymentInfo>div.input-group input{\r\n\tpadding: 0.375rem 0.75rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/useraccount/usersetting/usersetting.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"useraccountSettingMain\">\n\t<div class=\"useraccountSettingBar\">\n\t\t<button [attr.menuid]=\"1\" (click)=\"MenubarClicked($event)\">Security</button>\n\t\t<button [attr.menuid]=\"2\" (click)=\"MenubarClicked($event)\">Privacy</button>\n\t\t<button [attr.menuid]=\"3\" (click)=\"MenubarClicked($event)\">Block List</button>\n\t\t<button [attr.menuid]=\"4\" (click)=\"MenubarClicked($event)\">Payment</button>\n\t</div>\n\t<div class=\"useraccountSettingContent\" *ngIf=\"currentOpenID===1\">\n\t\t<div class=\"row\">\n\t\t\t<label for=\"userSettingPassword\" class=\"col\">Password</label>\n\t\t\t<label for=\"userSettingPhone\" class=\"col\">Phone Number</label>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<input id=\"userSettingPassword\" type=\"password\" class=\"form-control\" \n\t\t\t\t\t   [(ngModel)]=\"security.password\" placeholder=\"Your password...\">\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<input id=\"userSettingPhone\" type=\"number\" class=\"form-control\" \n\t\t\t\t\t   [(ngModel)]=\"security.phone\" placeholder=\"Your phone number...\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row mt-4\">\n\t\t\t<label for=\"userSettingEmail\" class=\"col\">Emergency Email</label>\n\t\t\t<label class=\"col\">Devices Allowance</label>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<input id=\"userSettingEmail\" type=\"email\" class=\"form-control\" \n\t\t\t\t\t   [(ngModel)]=\"security.email\" placeholder=\"Your email...\">\n\t\t\t</div>\n\t\t\t<div class=\"col d-flex justify-content-between\">\n\t\t\t\t<div class=\"custom-control custom-checkbox\">\n  \t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"devicesAllowance01\" [(ngModel)]=\"security.allowance1\">\n  \t\t\t\t\t<label class=\"custom-control-label\" for=\"devicesAllowance01\">Laptop</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"custom-control custom-checkbox\">\n  \t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"devicesAllowance02\" [(ngModel)]=\"security.allowance2\">\n  \t\t\t\t\t<label class=\"custom-control-label\" for=\"devicesAllowance02\">Phone</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"custom-control custom-checkbox\">\n  \t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"devicesAllowance03\" [(ngModel)]=\"security.allowance3\">\n  \t\t\t\t\t<label class=\"custom-control-label\" for=\"devicesAllowance03\">Tablet</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row mt-4\">\n\t\t\t<label for=\"userSettingProvince\" class=\"col\">Province Lock</label>\n\t\t\t<label for=\"userSettingNotification\" class=\"col\">Login Notification</label>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<div class=\"form-control selectDiv\" [attr.value]=\"security.province\" (click)=\"openSelect()\">\n\t\t\t\t\t<span *ngIf=\"security.province.length!=0\">{{security.province}}</span> \n\t\t\t\t\t<span *ngIf=\"security.province.length===0\">Click to browse...</span> \n\t\t\t\t\t<a><i class=\"fas fa-chevron-circle-down\"></i></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"selectOptionDiv hide\">\n\t\t\t\t\t<p *ngFor=\"let item of province\" (click)=\"chooseSelect($event)\">{{item}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<div *ngIf=\"security.notification===false\" class=\"form-control checkboxDiv No\" (click)=\"toggleNotification()\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\tNO Notification <span><i class=\"far fa-frown\"></i></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"security.notification===true\" class=\"form-control checkboxDiv Yes\" (click)=\"toggleNotification()\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\tNotification Actived <span><i class=\"far fa-smile\"></i></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"useraccountSettingContent\" *ngIf=\"currentOpenID===2\">\n\t\t<div class=\"row\">\n\t\t\t<label class=\"col col-form-label\">Who can see your profile?</label>\n\t\t</div>\n\t\t<div class=\"row mt-2\">\n\t\t\t<div class=\"col profileChoice\">\n  \t\t\t\t<input type=\"radio\" id=\"profileAllowance1\" name=\"profileAllowance\" value=\"1\" [(ngModel)]=\"privacy.profileAllowance\">\n  \t\t\t\t<label for=\"profileAllowance1\">Friends Only</label>\n\t\t\t</div>\n\t\t\t<div class=\"col profileChoice\">\n  \t\t\t\t<input type=\"radio\" id=\"profileAllowance2\" name=\"profileAllowance\" value=\"2\" [(ngModel)]=\"privacy.profileAllowance\">\n  \t\t\t\t<label for=\"profileAllowance2\">Any User</label>\n\t\t\t</div>\n\t\t\t<div class=\"col profileChoice\">\n  \t\t\t\t<input type=\"radio\" id=\"profileAllowance3\" name=\"profileAllowance\" value=\"3\" [(ngModel)]=\"privacy.profileAllowance\">\n  \t\t\t\t<label for=\"profileAllowance3\">No One</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row mt-3\">\n\t\t\t<label class=\"col col-form-label\">Who can search to find you on community?</label>\n\t\t</div>\n\t\t<div class=\"row mt-2\">\n\t\t\t<div class=\"col profileChoice\">\n  \t\t\t\t<input type=\"radio\" id=\"searchAllowance1\" name=\"searchAllowance\" value=\"1\" [(ngModel)]=\"privacy.searchAllowance\">\n  \t\t\t\t<label for=\"searchAllowance1\">Same Province</label>\n\t\t\t</div>\n\t\t\t<div class=\"col profileChoice\">\n  \t\t\t\t<input type=\"radio\" id=\"searchAllowance2\" name=\"searchAllowance\" value=\"2\" [(ngModel)]=\"privacy.searchAllowance\">\n  \t\t\t\t<label for=\"searchAllowance2\">Any User</label>\n\t\t\t</div>\n\t\t\t<div class=\"col profileChoice\">\n  \t\t\t\t<input type=\"radio\" id=\"searchAllowance3\" name=\"searchAllowance\" value=\"3\" [(ngModel)]=\"privacy.searchAllowance\">\n  \t\t\t\t<label for=\"searchAllowance3\">No One</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row mt-3\">\n\t\t\t<label class=\"col col-form-label\">Who can send invitation/add you as friend?</label>\n\t\t</div>\n\t\t<div class=\"row mt-2\">\n\t\t\t<div class=\"col profileChoice\">\n  \t\t\t\t<input type=\"radio\" id=\"addAllowance1\" name=\"addAllowance\" value=\"1\" [(ngModel)]=\"privacy.addAllowance\">\n  \t\t\t\t<label for=\"addAllowance1\">Authenticated</label>\n\t\t\t</div>\n\t\t\t<div class=\"col profileChoice\">\n  \t\t\t\t<input type=\"radio\" id=\"addAllowance2\" name=\"addAllowance\" value=\"2\" [(ngModel)]=\"privacy.addAllowance\">\n  \t\t\t\t<label for=\"addAllowance2\">Any User</label>\n\t\t\t</div>\n\t\t\t<div class=\"col profileChoice\">\n  \t\t\t\t<input type=\"radio\" id=\"addAllowance3\" name=\"addAllowance\" value=\"3\" [(ngModel)]=\"privacy.addAllowance\">\n  \t\t\t\t<label for=\"addAllowance3\">No One</label>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"useraccountSettingContent\" *ngIf=\"currentOpenID===3\">\n\t\t<table class=\"blockTable table table-striped table-hover\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>ID</th>\n      \t\t\t\t<th>Blocked Date</th>\n      \t\t\t\t<th>Reason</th>\n      \t\t\t\t<th>Enable Toggle</th>\n    \t\t\t</tr>\n  \t\t\t</thead>\n  \t\t\t<tbody>\n    \t\t\t<tr>\n      \t\t\t\t<th>11437</th>\n\t\t\t\t\t<td>2016-12-20</td>\n\t\t\t\t\t<td>Advertisement</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<input type=\"checkbox\" id=\"blockEnable01\" [(ngModel)]=\"blocklist.blockEnable01\">\n\t\t\t\t\t\t<label for=\"blockEnable01\"></label>\n\t\t\t\t\t</td>\n    \t\t\t</tr>\n\t\t\t\t<tr>\n      \t\t\t\t<th>11576</th>\n\t\t\t\t\t<td>2017-04-15</td>\n\t\t\t\t\t<td>Fraud</td>\n\t\t\t\t\t<td><input type=\"checkbox\" id=\"blockEnable02\"  [(ngModel)]=\"blocklist.blockEnable02\">\n\t\t\t\t\t\t<label for=\"blockEnable02\"></label>\n\t\t\t\t\t</td>\n    \t\t\t</tr>\n\t\t\t\t<tr>\n      \t\t\t\t<th>13456</th>\n\t\t\t\t\t<td>2017-06-25</td>\n\t\t\t\t\t<td>Agency</td>\n\t\t\t\t\t<td><input type=\"checkbox\" id=\"blockEnable03\"  [(ngModel)]=\"blocklist.blockEnable03\">\n\t\t\t\t\t\t<label for=\"blockEnable03\"></label>\n\t\t\t\t\t</td>\n    \t\t\t</tr>\n\t\t\t\t<tr>\n      \t\t\t\t<th>13757</th>\n\t\t\t\t\t<td>2017-05-02</td>\n\t\t\t\t\t<td>Fraud</td>\n\t\t\t\t\t<td><input type=\"checkbox\" id=\"blockEnable04\"  [(ngModel)]=\"blocklist.blockEnable04\">\n\t\t\t\t\t\t<label for=\"blockEnable04\" ></label>\n\t\t\t\t\t</td>\n    \t\t\t</tr>\n\t\t\t\t<tr>\n      \t\t\t\t<th>14001</th>\n\t\t\t\t\t<td>2017-04-27</td>\n\t\t\t\t\t<td>Crank Call</td>\n\t\t\t\t\t<td><input type=\"checkbox\" id=\"blockEnable05\"  [(ngModel)]=\"blocklist.blockEnable05\">\n\t\t\t\t\t\t<label for=\"blockEnable05\"></label>\n\t\t\t\t\t</td>\n    \t\t\t</tr>\n\t\t\t\t<tr>\n      \t\t\t\t<th>14451</th>\n\t\t\t\t\t<td>2017-06-21</td>\n\t\t\t\t\t<td>Agency</td>\n\t\t\t\t\t<td><input type=\"checkbox\" id=\"blockEnable06\"  [(ngModel)]=\"blocklist.blockEnable06\">\n\t\t\t\t\t\t<label for=\"blockEnable06\"></label>\n\t\t\t\t\t</td>\n    \t\t\t</tr>\n\t\t\t\t<tr>\n      \t\t\t\t<th>16352</th>\n\t\t\t\t\t<td>2017-07-19</td>\n\t\t\t\t\t<td>Advertisement</td>\n\t\t\t\t\t<td><input type=\"checkbox\" id=\"blockEnable07\"  [(ngModel)]=\"blocklist.blockEnable07\">\n\t\t\t\t\t\t<label for=\"blockEnable07\"></label>\n\t\t\t\t\t</td>\n    \t\t\t</tr>\n  \t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<div class=\"useraccountSettingContent\" *ngIf=\"currentOpenID===4\">\n\t\t<div class=\"row\">\n\t\t\t<label class=\"col\">Your Payment Method</label>\n\t\t</div>\n\t\t<div class=\"paymentBlock row mt-1\">\n\t\t\t<div class=\"col-2\">\n\t\t\t\t<input type=\"radio\" id=\"paymentMethod01\" name=\"paymentMethod\" value=\"1\" [(ngModel)]=\"payment.method\">\n\t\t\t\t<label class=\"paymentIcon\" for=\"paymentMethod01\"><img src=\"assets/img/visa_icon.png\"></label>\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\t<input type=\"radio\" id=\"paymentMethod02\" name=\"paymentMethod\" value=\"2\" [(ngModel)]=\"payment.method\">\n\t\t\t\t<label class=\"paymentIcon\" for=\"paymentMethod02\"><img src=\"assets/img/mastercard_icon.png\"></label>\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\t<input type=\"radio\" id=\"paymentMethod03\" name=\"paymentMethod\" value=\"3\" [(ngModel)]=\"payment.method\">\n\t\t\t\t<label class=\"paymentIcon\" for=\"paymentMethod03\"><img src=\"assets/img/paypal_icon.png\"></label>\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\t<input type=\"radio\" id=\"paymentMethod04\" name=\"paymentMethod\" value=\"4\" [(ngModel)]=\"payment.method\">\n\t\t\t\t<label class=\"paymentIcon\" for=\"paymentMethod04\"><img src=\"assets/img/bitcoin_icon.png\"></label>\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\t<input type=\"radio\" id=\"paymentMethod05\" name=\"paymentMethod\" value=\"5\" [(ngModel)]=\"payment.method\">\n\t\t\t\t<label class=\"paymentIcon\" for=\"paymentMethod05\"><img src=\"assets/img/american_express_icon.png\"></label>\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\t<input type=\"radio\" id=\"paymentMethod06\" name=\"paymentMethod\" value=\"6\" [(ngModel)]=\"payment.method\">\n\t\t\t\t<label class=\"paymentIcon\" for=\"paymentMethod06\"><img src=\"assets/img/google_wallet_icon.png\"></label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"paymentInfo row mt-2\">\n\t\t\t<div class=\"input-group col\">\n\t\t\t\t<div class=\"input-group-prepend\">\n    \t\t\t\t<span class=\"input-group-text\" id=\"paymentCardNumber\">Card Number</span>\n  \t\t\t\t</div>\n  \t\t\t\t<input type=\"number\" class=\"form-control\" id=\"paymentCardNumber\"\n\t\t\t\t\t   placeholder=\"Enter your number...\" [(ngModel)]=\"payment.number\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"paymentInfo row mt-2\">\n\t\t\t<div class=\"input-group col\">\n\t\t\t\t<div class=\"input-group-prepend\">\n    \t\t\t\t<span class=\"input-group-text\" id=\"paymentHolderName\">Holder Name</span>\n  \t\t\t\t</div>\n  \t\t\t\t<input type=\"text\" class=\"form-control\" id=\"paymentHolderName\"\n\t\t\t\t\t   placeholder=\"Enter your name...\" [(ngModel)]=\"payment.name\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"paymentInfo row mt-2\">\t\n\t\t\t<div class=\"input-group col\">\n\t\t\t\t<div class=\"input-group-prepend\">\n    \t\t\t\t<span class=\"input-group-text\" id=\"paymentPIN\">Security Code</span>\n  \t\t\t\t</div>\n  \t\t\t\t<input type=\"number\" class=\"form-control\" id=\"paymentPIN\"\n\t\t\t\t\t   placeholder=\"Enter your PIN...\" [(ngModel)]=\"payment.code\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/useraccount/usersetting/usersetting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_globalvariables_usersetting_service__ = __webpack_require__("./src/app/services/globalvariables/usersetting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersettingComponent = /** @class */ (function () {
    function UsersettingComponent(usersetting) {
        this.usersetting = usersetting;
        this.currentOpenID = 4; //default is 1
        this.province = ["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT"];
        this.security = usersetting.security;
        this.privacy = usersetting.privacy;
        this.blocklist = usersetting.blocklist;
        this.payment = usersetting.payment;
    }
    UsersettingComponent.prototype.ngOnInit = function () {
        $("app-usersetting").css("flex", "1");
        $("#useraccountSettingMain div.useraccountSettingBar>button").eq(this.currentOpenID - 1).addClass("active");
    };
    UsersettingComponent.prototype.MenubarClicked = function (event) {
        $("#useraccountSettingMain div.useraccountSettingBar>button").eq(this.currentOpenID - 1).removeClass("active");
        this.currentOpenID = Number($(event.target).attr("menuid"));
        $("#useraccountSettingMain div.useraccountSettingBar>button").eq(this.currentOpenID - 1).addClass("active");
    };
    UsersettingComponent.prototype.openSelect = function () {
        $("#useraccountSettingMain div.useraccountSettingContent div.selectOptionDiv").toggleClass("hide");
    };
    UsersettingComponent.prototype.chooseSelect = function (event) {
        var value = $(event.target).text();
        this.security.province = value;
    };
    UsersettingComponent.prototype.toggleNotification = function () {
        this.security.notification = !this.security.notification;
    };
    UsersettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-usersetting',
            template: __webpack_require__("./src/app/useraccount/usersetting/usersetting.component.html"),
            styles: [__webpack_require__("./src/app/useraccount/usersetting/usersetting.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_globalvariables_usersetting_service__["a" /* UsersettingService */]])
    ], UsersettingComponent);
    return UsersettingComponent;
}());



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