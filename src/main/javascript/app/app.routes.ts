import {RouterConfig} from "@angular/router";
import {Home} from "./home";
import {NoContent} from "./no-content";
import {JobList, JobDetail, JobDetailResolve} from "./job";

export const routes:RouterConfig = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'jobs', component: JobList},
    {path: 'jobs/:id', component: JobDetail, resolve: {job: JobDetailResolve}},
    {path: '**', component: NoContent},
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes:AsyncRoutes = {
    // we have to use the alternative syntax for es6-promise-loader to grab the routes
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks:Array<IdleCallbacks> = [
    // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
