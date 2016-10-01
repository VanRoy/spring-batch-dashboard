import {Component} from "@angular/core";

@Component({
    selector: 'home',  // <home></home>
    styleUrls: ['./home.style.css'],
    templateUrl: './home.template.html'
})
export class Home {

    // TypeScript public modifiers
    constructor() {

    }

    ngOnInit() {
        console.log('hello `Home` component');
        // this.title.getData().subscribe(data => this.data = data);
    }

}
