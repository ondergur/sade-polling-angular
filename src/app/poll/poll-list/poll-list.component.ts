import { Component, OnInit, OnDestroy} from '@angular/core';
import { PollsService } from '../polls.service';
import { Poll } from '../poll.model';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit, OnDestroy {

  polls: Poll[] = [];

  constructor(public pollsService: PollsService) { }

  ngOnInit() {
    this.pollsService.getPolls().subscribe(data => {
      this.polls = data;
    });
  }

  ngOnDestroy() {
  }

}
