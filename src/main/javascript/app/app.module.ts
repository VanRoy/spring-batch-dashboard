import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NoContentComponent } from './no-content/no-content.component';
import { HomeComponent } from './home/home.component';
import { JobListComponent } from './job/job-list.component';
import { JobDetailComponent } from './job/job-detail.component';
import { JobDetailResolve } from './job/job-detail-resolve.service';
import { JobService } from './job/job.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    NoContentComponent,
    HomeComponent,
    JobListComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    JobService,
    JobDetailResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
