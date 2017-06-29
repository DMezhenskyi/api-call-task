import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../core/github.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/finally';
import { PullRequest } from '../../core/interfaces';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

  queryControl: FormControl;
  isLoading = true;

  private _pullRequests: PullRequest[] = [];
  private _sortedRequests: PullRequest[] = [];

  get pullRequests(): PullRequest[] {
    return this._sortedRequests;
  }

  constructor(private _github: GithubService) { }

  ngOnInit() {
    this.queryControl = new FormControl();
    this.queryControl.valueChanges
      .debounceTime(250)
      .distinctUntilChanged()
      .subscribe(query => this.sortPullRequests(query));
    this._github.getPullRequests().finally(() => this.isLoading = false).subscribe(
      (pulls: PullRequest[]) => this._pullRequests = this._sortedRequests = pulls,
      error => console.error('Error: ', error)
    );
  }

  sortPullRequests(queryString: string) {
    const query = queryString.toLocaleLowerCase();
    this._sortedRequests = this._pullRequests.filter(
      req => req.title.toLocaleLowerCase().indexOf(query) !== -1);
  }

}
