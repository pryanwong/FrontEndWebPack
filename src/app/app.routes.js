"use strict";
var router_1 = require('@angular/router');
var header_component_1 = require('./header.component');
var footer_component_1 = require('./footer.component');
var home_component_1 = require('./home.component');
var navbar_nologin_component_1 = require('./navbar_nologin.component');
var navbar_login_component_1 = require('./navbar_login.component');
exports.routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'loggedin', children: [
            { path: '', component: navbar_nologin_component_1.NavBarNoLoginComponent, outlet: 'navbar' },
            { path: '', component: header_component_1.HeaderComponent, outlet: 'header' },
            { path: '', component: footer_component_1.FooterComponent, outlet: 'footer' }
        ] },
    { path: 'home', children: [
            { path: '', component: navbar_login_component_1.NavBarLoggedInComponent, outlet: 'navbar' },
            { path: '', component: home_component_1.HomeComponent }
        ] },
    { path: 'about', component: footer_component_1.FooterComponent },
    { path: 'contact', component: header_component_1.HeaderComponent },
    { path: 'contactus', redirectTo: 'contact' },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map