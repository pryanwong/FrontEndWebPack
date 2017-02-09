import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
             <router-outlet name="header"></router-outlet>
             <router-outlet name="navbar"></router-outlet>
             <router-outlet></router-outlet>
             <router-outlet name="footer"></router-outlet>`
})

export class AppComponent  { }
