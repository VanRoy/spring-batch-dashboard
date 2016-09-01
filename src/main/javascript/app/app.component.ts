/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from "@angular/core";
import {Header} from "./header";
import {Footer} from "./footer";
import {Navigation} from "./navigation";

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    directives: [
        Header, Footer, Navigation
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