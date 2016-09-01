import { Routes, RouterModule } from '@angular/router';
import {Home} from "./home";
import {NoContent} from "./no-content";
import {JobList, JobDetail, JobDetailResolve} from "./job";

export const ROUTES: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'jobs', component: JobList},
    {path: 'jobs/:id', component: JobDetail, resolve: {job: JobDetailResolve}},
    {path: '**', component: NoContent},
];
