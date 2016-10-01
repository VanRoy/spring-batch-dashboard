import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {JobService} from "./job.service";

@Component({
    selector: 'job',  // <home></home>
    providers: [JobService],
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
            this.icon = this.getIcon(this.job.jobExecution.status);
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

    getIcon(status) {

        switch (status) {
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
