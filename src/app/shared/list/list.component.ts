import { Component, Input, OnInit } from '@angular/core';
import { PullRequest } from '../../core/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() pullRequest: PullRequest;

  constructor() { }

  ngOnInit() {
  }

}
