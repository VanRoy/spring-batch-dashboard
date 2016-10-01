import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { AppState } from './app.service';
import { Home } from './home';
import { Header } from './header';
import { Footer } from './footer';
import { Navigation } from './navigation';
import { NoContent } from './no-content';
import { JobList, JobDetail, JobDetailResolve } from "./job";
import { JobService } from "./job/job.service";

// Application wide providers
const APP_PROVIDERS = [
    JobService,
    JobDetailResolve,
    AppState
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [ App ],
    declarations: [
        App,
        Home,
        NoContent,
        JobList,
        JobDetail,
        Header,
        Footer,
        Navigation
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule {
    constructor(public appRef: ApplicationRef, public appState: AppState) {}
}
