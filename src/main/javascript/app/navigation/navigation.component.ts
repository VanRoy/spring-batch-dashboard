import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.css' ]
})
export class NavigationComponent implements OnInit {

  navItems: Object[];

  constructor() {
  }

  ngOnInit() {
    this.navItems = [
      { title: 'Dashboard', state: 'home', sref: 'home', icon: 'fa fa-dashboard' },
      { title: 'Jobs', state: 'jobs', sref: 'jobs', icon: 'fa fa-cubes' }
    ];

  }

}
