import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {JobService} from "./job.service";

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'job',  // <home></home>
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
    templateUrl: './job-detail.template.html'
})
export class JobDetail {

    icon;
    job;
    jobExecution;
    jobParameters:Object;
    jobParametersKeys:Array<Object>;
    stepExecutions;
    selectedStepId;

    constructor(private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.forEach((data:{ job:Object }) => {
            this.job = data.job;
            this.jobExecution = this.job.jobExecution;
            this.jobParameters = this.job.jobExecution.jobParameters.parameters;
            this.jobParametersKeys = Object.keys(this.jobParameters);
            this.stepExecutions = this.jobExecution.stepExecutions;
            this.icon = this.getIcon(this.job);
        });
    }

    isSelected(step) {
        return step.id === this.selectedStepId;
    }

    onSelect(step) {
        if (this.isSelected(step)) {
            this.selectedStepId = null;
        } else {
            this.selectedStepId = step.id;
        }
    }

    getIcon(job) {

        switch (job.jobExecution.status) {
            case "COMPLETED":
                return "pficon-ok";
            case "RUNNING":
                return "pficon-history";
            case "FAILED":
                return "pficon-error-circle-o";

            // Warning if required
            //pficon-warning-triangle-o list-view-pf-icon-warning
        }

        return "pficon-info";
    }

}
