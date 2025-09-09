import { Component, input } from '@angular/core';
import { TriviaResult } from '../open-trivia/models';
import { QuestionCard } from '../question-card/question-card';

@Component({
  selector: 'app-question-list',
  imports: [QuestionCard],
  templateUrl: './question-list.html',
  styleUrl: './question-list.css'
})
export class QuestionList {
  public readonly results = input.required<TriviaResult[]>();
}
