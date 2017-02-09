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
var NavBarLoggedInComponent = (function () {
    function NavBarLoggedInComponent() {
    }
    NavBarLoggedInComponent.prototype.ngOnInit = function () {
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });
    };
    NavBarLoggedInComponent = __decorate([
        core_1.Component({
            selector: 'navbar-login',
            styleUrls: ['css/magnific-popup.css', 'css/mystyles.css', 'css/homepage.css'],
            template: "\n     <nav class='navbar navbar-inverse navbar-fixed-top' style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif\" role='navigation'>\n       <div class='container-fluid'>\n         <div class='navbar-header'>\n           <button class='navbar-toggle' data-target='#operationalNavbar' data-toggle='collapse' type='button'>\n              <span class='icon-bar'></span>\n              <span class='icon-bar'></span>\n              <span class='icon-bar'></span>\n           </button>\n           <a class='page-scroll pull-left' href='#home' style='font-size: 18px;PADDING-right: 15px; color:white; text-decoration : none'>\n             <img alt=\"Logo\" height=\"49\" src=\"/images/Logo4_no_text_sm.gif\" width=\"50\" />\n             Optecture\n           </a>\n        </div>\n      <div class='collapse navbar-collapse' id='operationalNavbar'>\n        <ul class='nav navbar-nav'>\n        </ul>\n        <ul class='nav navbar-nav navbar-right'>\n          <li>\n             <a class='page-scroll nav-link' href='#about'>About</a>\n          </li>\n          <li>\n             <a class='page-scroll nav-link' href='#services'>Services</a>\n          </li>\n          <li>\n            <a class='page-scroll nav-link' href='#portfolio'>Portfolio</a>\n          </li>\n          <li>\n             <a class='page-scroll nav-link' href='#blog'>Blog</a>\n          </li>\n          <li>\n             <a class='page-scroll nav-link' href='#contact'>Contact</a>\n          </li>\n          <li>\n            <a class='page-scroll nav-link' href='#login'>Sign In</a>\n          </li>\n       </ul>\n     </div>\n   </div>\n</nav>\n<div class='row' id='errordiv' style='background-color:#303F9F'>\n</div>\n<iframe id='logoutframe' src='https://accounts.google.com/logout' style='display: none'></iframe>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NavBarLoggedInComponent);
    return NavBarLoggedInComponent;
}());
exports.NavBarLoggedInComponent = NavBarLoggedInComponent;
//# sourceMappingURL=navbar_login.component.js.map