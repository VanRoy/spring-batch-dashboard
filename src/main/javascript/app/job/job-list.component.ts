import { Component, OnInit } from '@angular/core';
import { JobService } from './job.service';

@Component({
  selector: 'app-jobs',
  providers: [ JobService ],
  templateUrl: './job-list.component.html',
  styleUrls: [ './job-list.component.css' ]
})
export class JobListComponent implements OnInit {

  errorMessage: string;
  jobs: Object[];

  constructor(private jobService: JobService) {
  }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.jobService.getJobs()
    .subscribe(
      jobs => this.jobs = jobs,
      error => this.errorMessage = <any>error);
  }

  getIcon(job) {

    switch (job.jobExecution.status) {
      case 'COMPLETED':
        return 'pficon-ok list-view-pf-icon-success';
      case 'RUNNING':
        return 'pficon-history list-view-pf-icon-info';
      case 'FAILED':
        return 'pficon-error-circle-o list-view-pf-icon-danger';

      // Warning if required
      // pficon-warning-triangle-o list-view-pf-icon-warning
    }

    return 'pficon-info list-view-pf-icon-info';
  }
}
