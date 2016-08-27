// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import {AppState} from "./app.service";
import {JobService} from "./job/job.service";
import {JobDetailResolve} from "./job/job-detail-resolve.service";

// Application wide providers
export const APP_PROVIDERS = [
    AppState,
    JobService,
    JobDetailResolve
];
