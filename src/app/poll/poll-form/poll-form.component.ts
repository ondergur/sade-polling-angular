import { Component, OnInit} from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { PollFormService } from './poll-form.service';
import { PollsService } from '../polls.service';

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {

  pollForm: FormGroup;
  questions: FormArray;

  constructor(private pollFormService: PollFormService, private pollsService: PollsService) { }

  ngOnInit() {
    this.pollFormService.pollFormObservable
      .subscribe(currentPollForm => {
        this.pollForm = currentPollForm;
        this.questions = this.pollForm.get('questions') as FormArray;
    });
  }

  createQuestionForm() {
    this.pollFormService.createQuestionForm();
  }

  deleteQuestionForm(i: number) {
    this.pollFormService.deleteQuestionForm(i);
  }

  pollLog() {
    console.log(this.pollForm.value);
    console.log(this.pollForm);
  }

  submitPoll() {
    this.pollsService.addPoll(this.pollForm.value);
    this.pollForm.reset();
  }


}
