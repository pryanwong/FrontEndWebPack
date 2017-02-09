"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var ng2_scrollreveal_1 = require('ng2-scrollreveal');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header.component');
var home_component_1 = require('./home.component');
var footer_component_1 = require('./footer.component');
var navbar_nologin_component_1 = require('./navbar_nologin.component');
var navbar_login_component_1 = require('./navbar_login.component');
var app_routes_1 = require('./app.routes');
var WindowRef_1 = require('./WindowRef');
var angular2_token_1 = require('angular2-token');
var AppModule = (function () {
    function AppModule(_tokenService) {
        this._tokenService = _tokenService;
        this._tokenService.init({
            apiBase: 'http://localhost:3100',
            apiPath: 'v1',
            signInPath: 'auth/sign_in',
            signInRedirect: null,
            signInStoredUrlStorageKey: null,
            signOutPath: 'auth/sign_out',
            validateTokenPath: 'auth/validate_token',
            signOutFailedValidate: false,
            registerAccountPath: 'auth',
            deleteAccountPath: 'auth',
            registerAccountCallback: window.location.href,
            updatePasswordPath: 'auth',
            resetPasswordPath: 'auth/password',
            resetPasswordCallback: window.location.href,
            oAuthHost: window.location.origin,
            oAuthPaths: {
                github: 'auth/github'
            },
            oAuthCallbackPath: 'oauth_callback',
            oAuthWindowType: 'sameWindow',
            oAuthWindowOptions: null,
            userTypes: null,
            globalOptions: {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        });
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing, ng2_scrollreveal_1.NgsRevealModule.forRoot(), http_1.HttpModule, router_1.RouterModule],
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, home_component_1.HomeComponent, footer_component_1.FooterComponent, navbar_nologin_component_1.NavBarNoLoginComponent, navbar_login_component_1.NavBarLoggedInComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [WindowRef_1.WindowRef, angular2_token_1.Angular2TokenService]
        }), 
        __metadata('design:paramtypes', [angular2_token_1.Angular2TokenService])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map