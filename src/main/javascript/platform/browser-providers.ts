/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import {HTTP_PROVIDERS} from "@angular/http";
import {provideRouter} from "@angular/router";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {provideWebpack} from "@angularclass/webpack-toolkit";
import {providePrefetchIdleCallbacks} from "@angularclass/request-idle-callback";
import {routes, asyncRoutes, prefetchRouteCallbacks} from "../app/app.routes";
// Angular 2 Http
// Angular 2 Router
// Angular 2 forms

// AngularClass
/*
 * Application Providers/Directives/Pipes
 * providers/directives/pipes that only live in our browser environment
 */
export const APPLICATION_PROVIDERS = [
    // new Angular 2 forms
    disableDeprecatedForms(),
    provideForms(),

    provideRouter(routes),
    provideWebpack(asyncRoutes),
    providePrefetchIdleCallbacks(prefetchRouteCallbacks),

    ...HTTP_PROVIDERS

];

export const PROVIDERS = [
    ...APPLICATION_PROVIDERS
];
