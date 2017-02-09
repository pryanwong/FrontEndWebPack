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
var WindowRef_1 = require('./WindowRef');
var ng2_scrollreveal_1 = require('ng2-scrollreveal');
var home_service_1 = require('./home.service');
var angular2_token_1 = require('angular2-token');
var HomeComponent = (function () {
    function HomeComponent(winRef, homeService, _tokenService) {
        this.winRef = winRef;
        this.homeService = homeService;
        this._tokenService = _tokenService;
        console.log('Window object', winRef.nativeWindow);
        this.innerHeight = winRef.nativeWindow.innerHeight;
        console.log("Height:", this.innerHeight);
        this.portfolios = homeService.getPortfolios();
    }
    HomeComponent.prototype.gitHubOAuth = function () {
        console.log("Clicked gitHubOAuth");
        this._tokenService.signInOAuth('github').subscribe(function (res) { return console.log(res); }, function (error) { return console.log(error); });
    };
    HomeComponent.prototype.onResize = function (event) {
        this.innerHeight = event.target.innerHeight;
    };
    HomeComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#wrapper').css('top', $('#cssmenu').outerHeight());
        });
        var mainbottom = 100;
        $(window).on('scroll', function () {
            // we round here to reduce a little workload
            var stop = Math.round($(window).scrollTop());
            if (stop > mainbottom) {
                $('.navbar-inverse').addClass('nav-lower');
            }
            else {
                $('.navbar-inverse').removeClass('nav-lower');
            }
        });
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });
        // Highlight the top nav as scrolling occurs
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 51
        });
        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function () {
            $('.navbar-toggle:visible').click();
        });
        // Offset for Main Navigation
        $('#mainNav').affix({
            offset: {
                top: 100
            }
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        //Copy in all the js code from the script.js. Typescript will complain but it works just fine
        // Initialize and Configure Magnific Popup Lightbox Plugin
        $('.popup-gallery')['magnificPopup']({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            styleUrls: ['css/mystyles.css', 'css/homepage.css'],
            providers: [ng2_scrollreveal_1.NgsRevealModule, home_service_1.HomeService],
            template: "\n  <header id='home' [style.height.px]=\"innerHeight\" (window:resize)=\"onResize($event)\">\n    <div class='header-content'>\n      <div class='header-content-inner'>\n        <h1>Optecture</h1>\n        <h2>Draw Your Solution - Generate a Quote</h2>\n        <hr class='light'>\n        <p>Optecture's Powerful Diagram to Quotation Cloud Service will save time, improve accuracy and capture what's needed to grow opportunities.</p>\n        <a class='btn btn-primary btn-xl page-scroll' href='#about'>Find Out More</a>\n      </div>\n   </div>\n  </header>\n  <section class='bg-primary' id='about'>\n     <div class='container'>\n        <div class='row'>\n          <div class='col-lg-8 col-lg-offset-2 text-center'>\n            <h2 class='section-heading'>Draw and Price</h2>\n            <hr class='light'>\n            <p class='text-faded' style=\"font-weight:600\">Cloud based software converts sales drawings directly to quotations</p>\n            <p class='text-faded' style=\"font-weight:600\">Capture and Share Requirements, Instantly Generate Quote, Grow Deal Sizes</p>\n            <a class='page-scroll btn btn-default btn-xl sr-button' href='#login'>Get Started!</a>\n         </div>\n      </div>\n    </div>\n  </section>\n  <section id='services' style='background-color: #fff;' [ngsRevealSet]=\"{ reset:true}\" [ngsInterval]=\"50\" [ngsSelector]=\"'.sr-icons'\">\n    <div class='container'>\n      <div class='row'>\n        <div class='col-lg-12 text-center'>\n           <h2 class='section-heading'>At Your Service</h2>\n           <hr class='primary'>\n        </div>\n      </div>\n    </div>\n    <div class='container'>\n      <div class='row'>\n        <div class='col-lg-3 col-md-6 text-center'>\n          <div class='service-box'>\n             <i class='fa fa-4x fa-object-group text-primary sr-icons'></i>\n             <h3>Diagram to Quote</h3>\n             <p class='text-muted' style=\"font-weight:700\">Quickly map out solutions using your products and configurations</p>\n          </div>\n        </div>\n        <div class='col-lg-3 col-md-6 text-center'>\n           <div class='service-box'>\n             <i class='fa fa-4x fa-phone text-primary sr-icons'></i>\n             <h3>Ideal for Teleconferences</h3>\n             <p class='text-muted' style=\"font-weight:700\">Better capture and communicate customer problems, and quickly close deals</p>\n           </div>\n        </div>\n        <div class='col-lg-3 col-md-6 text-center'>\n          <div class='service-box'>\n            <i class='fa fa-4x fa-line-chart text-primary sr-icons'></i>\n            <h3>Analytics</h3>\n            <p class='text-muted' style=\"font-weight:700\">Reports and Analysis to grow opportunity size</p>\n          </div>\n        </div>\n        <div class='col-lg-3 col-md-6 text-center'>\n          <div class='service-box'>\n            <i class='fa fa-4x fa-gears text-primary sr-icons'></i>\n            <h3>Integration</h3>\n            <p class='text-muted' style=\"font-weight:700; font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\">Save time by sending results directly to CRM</p>\n          </div>\n        </div>\n     </div>\n    </div>\n   </section>\n   <section class='no-padding' id='portfolio'>\n       <div class='container-fluid'>\n         <div class='row no-gutter popup-gallery'>\n           <div class='col-lg-4 col-sm-6' *ngFor=\"let portfolio of portfolios; let l = last\">\n             <a class=\"portfolio-box\" href=\"{{portfolio.large_img}}\">\n               <img alt=\"Software\" class=\"img-responsive\" src=\"{{portfolio.thumbnail_img}}\" />\n               <div class='portfolio-box-caption'>\n                 <div class='portfolio-box-caption-content'>\n                   <div class='project-category text-faded'>\n                     {{portfolio.product_cat}}\n                   </div>\n                   <div class='project-name'>\n                     {{portfolio.project}}\n                   </div>\n                </div>\n              </div>\n           </a>\n        </div>\n     </div>\n   </div>\n</section>\n<section id='blog'>\n   <aside class='bg-dark'>\n      <div class='container text-center'>\n         <div class='call-to-action'>\n             <h2>Visit Our Blog on Sales and Marketing</h2>\n             <a class='btn btn-default btn-xl sr-button' href='http://blog.optecture.com' ngsReveal>Blog</a>\n         </div>\n      </div>\n   </aside>\n</section>\n<section id='contact'>\n   <div class='container'>\n      <div class='row'>\n        <div class='col-lg-8 col-lg-offset-2 text-center'>\n           <h2 class='section-heading'>Let's Get In Touch!</h2>\n           <hr class='primary'>\n           <p style=\"font-weight:700\">Ready to explore drawing to quote solutions with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>\n        </div>\n        <div class='col-lg-4 col-lg-offset-4 text-center'>\n          <i class='fa fa-envelope-o fa-3x sr-contact' ngsReveal></i>\n          <p>\n             <a href='mailto:sales@optecture.com' style=\"font-weight:700\">sales@optecture.com</a>\n          </p>\n        </div>\n      </div>\n   </div>\n</section>\n<section class='bg-primary' id='login'>\n   <div class='container'>\n     <div class='row row-centered'>\n        <div class='col-sm-offset-4 col-sm-4'>\n           <form accept-charset=\"UTF-8\" action=\"/users/sign_in\" class=\"new_user\" id=\"new_user\" method=\"post\">\n              <div style=\"display:none\">\n                <input name=\"utf8\" type=\"hidden\" value=\"&#x2713;\" />\n                <input name=\"authenticity_token\" type=\"hidden\" value=\"4r72L/rdJOTBn2S/WELBbD0+xnMkKIQ0ShMA0ihmtUM=\" />\n              </div>\n              <fieldset class='form-group'>\n                <label for=\"user_Email\">Email</label>\n                <input class=\"form-control\" id=\"user_email\" name=\"user[email]\" type=\"email\" value=\"\" />\n              </fieldset>\n              <fieldset class='form-group'>\n                <label for=\"user_Password\">Password</label>\n                <input autocomplete=\"off\" class=\"form-control\" id=\"user_password\" name=\"user[password]\" type=\"password\" />\n              </fieldset>\n              <fieldset class='form-group'>\n                <input name=\"user[remember_me]\" type=\"hidden\" value=\"0\" /><input id=\"user_remember_me\" name=\"user[remember_me]\" type=\"checkbox\" value=\"1\" />\n                <label for=\"user_Remember Me\">Remember me</label>\n              </fieldset>\n              <div class='form-group'>\n                 <input class=\"btn btn-default\" name=\"commit\" type=\"submit\" value=\"Login\" />\n                 <a href=\"/users/password/new\" style=\"font-weight:700\" id=\"forgot_password\">Forgot your password?</a>\n              </div>\n          </form>\n\n     <hr class='light'>\n     <a class=\"btn btn-block btn-social btn-linkedin\" href=\"/users/auth/linkedin\" id=\"sign_in\" style=\"border-radius:5px\"><span class='fa fa-linkedin'></span>\n       Sign in with LinkedIn\n     </a>\n     <a class=\"btn btn-block btn-social btn-google\" href=\"/users/auth/google_oauth2\" id=\"sign_in\" style=\"border-radius:5px\"><span class='fa fa-google-plus' id='googlebutton' style=\"padding-left:4px;\"></span>\n       Sign in with Google\n    </a>\n    <a class=\"btn btn-block btn-social btn-google\" (click)=\"gitHubOAuth()\" id=\"sign_in\" style=\"border-radius:5px\"><span class='fa fa-google-plus' id='googlebutton' style=\"padding-left:4px;\"></span>\n      Sign in with Test\n   </a>\n  </div>\n</div>\n</div>\n</section>\n\n  "
        }), 
        __metadata('design:paramtypes', [WindowRef_1.WindowRef, home_service_1.HomeService, angular2_token_1.Angular2TokenService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map