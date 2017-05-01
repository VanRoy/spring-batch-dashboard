import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { JobService } from './job.service';

@Injectable()
export class JobDetailResolve implements Resolve<Object> {
  constructor(private jobService: JobService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Object> {
    const id: string = route.params[ 'id' ];
    return this.jobService.getJob(id);
  }
}
