import { Question } from '../question/question.model';

export interface Poll {
  id: number;
  name: string;
  explanation: string;
  questions: Question[];
}
