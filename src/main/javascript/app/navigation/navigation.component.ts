import {Component} from "@angular/core";

@Component({
    selector: 'navigation',  // <navigation></navigation>
    templateUrl: './navigation.template.html'
})
export class Navigation {

    navItems:Object[];

    // TypeScript public modifiers
    constructor() {
    }

    ngOnInit() {
        this.navItems = [
            {title: 'Dashboard', state: 'home', sref: 'home', icon: 'fa fa-dashboard'},
            {title: 'Jobs', state: 'jobs', sref: 'jobs', icon: 'fa fa-dashboard'}
        ];
    }

}
