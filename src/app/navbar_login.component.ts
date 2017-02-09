import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'navbar-login',
  styleUrls:   ['css/magnific-popup.css','css/mystyles.css','css/homepage.css'],
  template: `
     <nav class='navbar navbar-inverse navbar-fixed-top' style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif" role='navigation'>
       <div class='container-fluid'>
         <div class='navbar-header'>
           <button class='navbar-toggle' data-target='#operationalNavbar' data-toggle='collapse' type='button'>
              <span class='icon-bar'></span>
              <span class='icon-bar'></span>
              <span class='icon-bar'></span>
           </button>
           <a class='page-scroll pull-left' href='#home' style='font-size: 18px;PADDING-right: 15px; color:white; text-decoration : none'>
             <img alt="Logo" height="49" src="/images/Logo4_no_text_sm.gif" width="50" />
             Optecture
           </a>
        </div>
      <div class='collapse navbar-collapse' id='operationalNavbar'>
        <ul class='nav navbar-nav'>
        </ul>
        <ul class='nav navbar-nav navbar-right'>
          <li>
             <a class='page-scroll nav-link' href='#about'>About</a>
          </li>
          <li>
             <a class='page-scroll nav-link' href='#services'>Services</a>
          </li>
          <li>
            <a class='page-scroll nav-link' href='#portfolio'>Portfolio</a>
          </li>
          <li>
             <a class='page-scroll nav-link' href='#blog'>Blog</a>
          </li>
          <li>
             <a class='page-scroll nav-link' href='#contact'>Contact</a>
          </li>
          <li>
            <a class='page-scroll nav-link' href='#login'>Sign In</a>
          </li>
       </ul>
     </div>
   </div>
</nav>
<div class='row' id='errordiv' style='background-color:#303F9F'>
</div>
<iframe id='logoutframe' src='https://accounts.google.com/logout' style='display: none'></iframe>
  `
})

export class NavBarLoggedInComponent implements OnInit {
ngOnInit(){

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event: any) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });
  }
}
