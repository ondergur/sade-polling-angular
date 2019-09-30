import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { Poll } from '../poll.model';
import { PollsService } from '../polls.service';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnInit {

  id: number;
  poll: Poll;

  constructor(private route: ActivatedRoute, private router: Router, private service: PollsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.service.getPoll(this.id).subscribe(data => {
      this.poll = data;
    });
  }

}
