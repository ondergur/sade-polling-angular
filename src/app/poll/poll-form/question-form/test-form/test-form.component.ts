import { Component, OnInit, Input } from '@angular/core';
import { FormArray } from '@angular/forms';
import { PollFormService } from '../../poll-form.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  @Input() testChoices: FormArray;
  @Input() questionIndex: number;

  constructor(private pollFormService: PollFormService) { }

  ngOnInit() { }

  addChoice() {
    this.pollFormService.addTestChoice(this.testChoices);
  }

  deleteTestChoice(choiceIndex: number) {
    this.pollFormService.deleteTestChoice(this.testChoices, choiceIndex, this.questionIndex);
  }

}
