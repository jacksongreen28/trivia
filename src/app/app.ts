import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Filters } from './filters/filters';
import type { Observable } from 'rxjs';
import { QuestionList } from './question-list/question-list';
import { About } from './about/about';
import { TriviaService } from './trivia-api/trivia-api';
import { Question, QuestionsQueryParams } from './trivia-api/models';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, Filters, QuestionList, About],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly triviaApi = inject(TriviaService);

  protected questions$?: Observable<Question[]>;

  protected getQuestions(params: QuestionsQueryParams) {
    this.questions$ = this.triviaApi.getQuestions(params);
  }
}
