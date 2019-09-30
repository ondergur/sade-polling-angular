import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PollFormService } from '../../../poll-form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-choice',
  templateUrl: './test-choice.component.html',
  styleUrls: ['./test-choice.component.css']
})
export class TestChoiceComponent implements OnInit {

  @Input() index: number;
  @Input() testChoice: FormGroup;
  @Output() deleteTestChoiceEventEmitter: EventEmitter<number> = new EventEmitter();

  constructor(private pollFormService: PollFormService) { }

  ngOnInit() {
  }

  deleteChoice() {
    this.deleteTestChoiceEventEmitter.emit(this.index);
  }

}
