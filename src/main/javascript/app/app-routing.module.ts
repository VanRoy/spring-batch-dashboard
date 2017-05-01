import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';
import { JobListComponent } from './job/job-list.component';
import { JobDetailComponent } from './job/job-detail.component';
import { JobDetailResolve } from './job/job-detail-resolve.service';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:id', component: JobDetailComponent, resolve: { job: JobDetailResolve } },
  { path: '**', component: NoContentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
