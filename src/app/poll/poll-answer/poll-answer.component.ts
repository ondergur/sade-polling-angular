import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Poll } from '../poll.model';
import { PollsService } from '../polls.service';
import { Answer } from './answer.model';

@Component({
  selector: 'app-poll-answer',
  templateUrl: './poll-answer.component.html',
  styleUrls: ['./poll-answer.component.css']
})
export class PollAnswerComponent implements OnInit {

  id: number;
  poll: Poll;
  answer: Answer = {
    poll_id: null,
    answers: [],
  };
  options: any = [];
  option: any = [];
  radioOptions;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pollService: PollsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.pollService.getPoll(this.id).subscribe(data => {
      this.poll = data;
      this.answer.poll_id = this.poll.id;
    });
  }

  pollLog() {
    console.log(this.option, this.options);
  }

}
