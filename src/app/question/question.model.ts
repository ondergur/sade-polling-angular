import { TestChoice } from './test-choice.model';

export interface Question {
  id: number;
  text: string;
  type: number;
  test_choices: TestChoice[];
}
