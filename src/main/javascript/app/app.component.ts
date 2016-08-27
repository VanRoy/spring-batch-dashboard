/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from "@angular/core";
import {Header} from "./header";
import {Footer} from "./footer";
import {Nav} from "./nav";
import "./rxjs-operators";

// Add the RxJS Observable operators we need in this app.

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    directives: [
        Header, Footer, Nav
    ],
    styleUrls: [
        './app.style.css'
    ],
    templateUrl: 'app.template.html'
})
export class App {

    constructor() {
    }

    ngOnInit() {
    }

}