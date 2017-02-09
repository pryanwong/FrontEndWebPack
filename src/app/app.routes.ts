import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';

import { NavBarNoLoginComponent } from './navbar_nologin.component'
import { NavBarLoggedInComponent} from './navbar_login.component'

export const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: 'loggedin', children:[
     { path: '', component: NavBarNoLoginComponent, outlet: 'navbar'},
     { path: '' , component: HeaderComponent, outlet: 'header'},
     { path: '' , component: FooterComponent, outlet: 'footer'}
  ]},
 { path: 'home', children:[
     { path: '', component: NavBarLoggedInComponent, outlet: 'navbar'},
     { path: '', component: HomeComponent}
  ]},
 { path: 'about', component: FooterComponent },
 { path: 'contact', component: HeaderComponent },
 { path: 'contactus', redirectTo: 'contact' },
 // { path: '**', redirectTo: 'home'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
