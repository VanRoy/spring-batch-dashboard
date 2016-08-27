import {Component} from "@angular/core";
import {JobService} from "./job.service";

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'jobs',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [JobService],
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styleUrls: [],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './job-list.template.html'
})
export class JobList {

    errorMessage:string;
    jobs:Object[];

    constructor(private jobService:JobService) {
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
            case "COMPLETED":
                return "pficon-ok list-view-pf-icon-success";
            case "RUNNING":
                return "pficon-history list-view-pf-icon-info";
            case "FAILED":
                return "pficon-error-circle-o list-view-pf-icon-danger";

            // Warning if required
            //pficon-warning-triangle-o list-view-pf-icon-warning
        }

        return "pficon-info list-view-pf-icon-info";
    }

}