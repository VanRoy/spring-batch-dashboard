import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class JobService {

  private jobsUrl = 'api/v1/jobs/';  // URL to web API

  constructor(private http: Http) {
  }

  getJobs(): Observable<Object[]> {
    return this.http.get(this.jobsUrl)
    .map(this.extractList)
    .catch(this.handleError);
  }

  getJob(id: string): Observable<Object> {
    return this.http.get(this.jobsUrl + id)
    .map(res => res.json())
    .catch(this.handleError);
  }

  private extractList(res: Response) {
    const body = res.json();
    return body._embedded.jobs || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
