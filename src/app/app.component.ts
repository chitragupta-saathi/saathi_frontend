import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'app';
  isLogedIn = false;
  pageUrl;
  constructor(private router:  Router) { }
  ngOnInit() {
    setTimeout(function() {
      $('.button-collapse').sideNav({closeOnClick: true});
    }, 500);
    this.router.events.subscribe(url => { // fires on every URL change
      if(localStorage.getItem('isLogedIn') === 'true') {
        this.isLogedIn =  true;
      } else {
        this.isLogedIn =  false;
      }
    if(url instanceof NavigationEnd) {
      this.pageUrl = url['url'].split('/')[1];
      console.log(this.pageUrl);
    }
      });

  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
