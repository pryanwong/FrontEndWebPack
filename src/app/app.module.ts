import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {NgsRevealModule} from 'ng2-scrollreveal';
import { AppComponent }        from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer.component';
import { NavBarNoLoginComponent } from './navbar_nologin.component'
import { NavBarLoggedInComponent} from './navbar_login.component'
import { routing } from './app.routes';
import { WindowRef } from './WindowRef';
import { Angular2TokenService , A2tUiModule } from 'angular2-token';

@NgModule({
  imports:      [ BrowserModule, routing, NgsRevealModule.forRoot(), HttpModule, RouterModule],
  declarations: [ AppComponent, HeaderComponent, HomeComponent, FooterComponent, NavBarNoLoginComponent, NavBarLoggedInComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WindowRef, Angular2TokenService  ]

})
export class AppModule {
   constructor(private _tokenService: Angular2TokenService) {
      this._tokenService.init({
        apiBase:                    'http://localhost:3100',
        apiPath:                    'v1',

        signInPath:                 'auth/sign_in',
        signInRedirect:             null,
        signInStoredUrlStorageKey:  null,

        signOutPath:                'auth/sign_out',
        validateTokenPath:          'auth/validate_token',
        signOutFailedValidate:      false,

        registerAccountPath:        'auth',
        deleteAccountPath:          'auth',
        registerAccountCallback:    window.location.href,

        updatePasswordPath:         'auth',
        resetPasswordPath:          'auth/password',
        resetPasswordCallback:      window.location.href,

        oAuthHost:                  window.location.origin,
        oAuthPaths: {
            github:                 'auth/github'
        },
        oAuthCallbackPath:          'oauth_callback',
        oAuthWindowType:            'sameWindow',
        oAuthWindowOptions:         null,

        userTypes:                  null,

        globalOptions: {
            headers: {
                'Content-Type':     'application/json',
                'Accept':           'application/json'
            }
        }
    });
   }
}
