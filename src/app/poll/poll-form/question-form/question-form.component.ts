import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { PollFormService } from '../poll-form.service';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {


  @Input() questionForm: FormGroup;
  @Input() index: number;
  @Output() deleteQuestionFormEventEmitter: EventEmitter<number> = new EventEmitter();

  questionType: number;

  question: FormGroup;
  testChoices: FormArray;

  constructor(private pollFormService: PollFormService) { }

  ngOnInit() {
    this.pollFormService.pollFormObservable
      .subscribe(currentPollForm => {
        this.question = (currentPollForm.get('questions') as FormArray).at(this.index) as FormGroup;
        this.testChoices = this.question.get('testChoices') as FormArray;
      });
  }

  deleteQuestionForm() {
    this.deleteQuestionFormEventEmitter.emit(this.index);
  }

  setQuestionType(event) {
    this.pollFormService.setQuestionType(this.index, parseInt(event.value, 10));
    this.questionType = event.value;
  }

}
