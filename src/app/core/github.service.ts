import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { PullRequest } from './interfaces';

@Injectable()
export class GithubService {

  constructor(private _http: Http) { }

  getPullRequests(): Observable<PullRequest[]> {
    // opened pull requests by default
    return this._http.get('https://api.github.com/repos/Microsoft/TypeScript/pulls')
      .map(response => response.json());
  }
}
