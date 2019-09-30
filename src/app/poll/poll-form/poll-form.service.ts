import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { BaseCdkCell } from '@angular/cdk/table';

@Injectable({
  providedIn: 'root'
})
export class PollFormService {

  public pollFormComponents = {
    name: [, Validators.required],
    explanation: [, Validators.required],
    questions: this.formBuilder.array([])
  };

  pollForm: BehaviorSubject<FormGroup | undefined> =
    new BehaviorSubject(this.formBuilder.group(this.pollFormComponents));

  pollFormObservable: Observable<FormGroup> = this.pollForm.asObservable();

  constructor(private formBuilder: FormBuilder) { }

  createQuestionForm() {

    const questionFormCompontents = {
      text: ['', Validators.required],
      type: ['', Validators.required],
      testChoices: this.formBuilder.array([])
    };

    const currentPollForm = this.pollForm.getValue();
    const questionsArray = currentPollForm.get('questions') as FormArray;
    const newQuestionGroup: FormGroup = this.formBuilder.group(questionFormCompontents);
    questionsArray.push(newQuestionGroup);
    this.pollForm.next(currentPollForm);

  }

  deleteQuestionForm(i: number) {
    const currentPollForm = this.pollForm.getValue();
    const currentQuestions = currentPollForm.get('questions') as FormArray;
    currentQuestions.removeAt(i);
    // this.pollForm.next(currentPollForm);
  }

  setQuestionType(i: number, value: number ) {

    const currentPollForm = this.pollForm.getValue();
    const currentQuestions = currentPollForm.get('questions') as FormArray;
    const currentQuestion = currentQuestions.at(i);

    if (value === 0) {
      if (currentQuestion.get('type').value === 1) {
        currentQuestion.patchValue({
          type: value
        });
        this.initializeTest(currentQuestion);
      } else {
        currentQuestion.patchValue({
          type: value
        });
        this.initializeTest(currentQuestion);
      }
    } else if (value === 1) {
      if (currentQuestion.get('type').value === 1) {
        currentQuestion.patchValue({
          type: value
        });
      } else {
        this.clearAllTestChoices(currentQuestion);
        currentQuestion.patchValue({
          type: value
        });
      }
    }
  }

  initializeTest(currentQuestion) {
    const currentTestChoices = currentQuestion.get('testChoices') as FormArray;
    this.addTestChoice(currentTestChoices);
    this.addTestChoice(currentTestChoices);
  }

  clearAllTestChoices(currentQuestion) {
    const currentTestChoices = currentQuestion.get('testChoices') as FormArray;
    while (currentTestChoices.length !== 0) {
      currentTestChoices.removeAt(0);
    }
  }

  addTestChoice(testChoices: FormArray) {
    const testChoiceGroup = {
      text: ['', Validators.required]
    };
    const newTestChoice = this.formBuilder.group(testChoiceGroup);
    testChoices.push(newTestChoice);
  }

  deleteTestChoice(testChoices: FormArray, choiceIndex: number, questionIndex: number) {
    // buraya sadece bir test seçeneğini silmek için bir kod yazılacak.
    // template'den index gelmesi gerekiyor
    // en son bookmark'ladığım medium yazısı bunu anlatıyor olabilir.
    // önce ona bak
    const currentPollForm = this.pollForm.getValue();
    const currentQuestions = currentPollForm.get('questions') as FormArray;
    const currentQuestion = currentQuestions.at(questionIndex);
    const currentTestChoices = currentQuestion.get('testChoices') as FormArray;
    currentTestChoices.removeAt(choiceIndex);
  }
}
