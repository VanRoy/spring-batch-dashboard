import {Component} from "@angular/core";

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'footer'
    selector: 'footer',  // <footer></footer>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [],
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styleUrls: [],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './footer.template.html'
})
export class Footer {

    // TypeScript public modifiers
    constructor() {
    }

    ngOnInit() {
        console.log('Footer component init');
    }

}
