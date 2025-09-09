import { Component, effect, inject, signal } from '@angular/core';
import { Filters } from './filters/filters';
import { Observable } from 'rxjs';
import { ResponseMessages, TriviaFilters, TriviaResponse } from './open-trivia/models';
import { OpenTriviaSerivce } from './open-trivia/open-trivia';
import { QuestionList } from './question-list/question-list';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, Filters, QuestionList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly openTrivia = inject(OpenTriviaSerivce);

  protected errorCodes = ResponseMessages;
  protected response$?: Observable<TriviaResponse>;

  protected getQuestions(filters: TriviaFilters) {
    this.response$ = this.openTrivia.getTriviaResponse(filters);
  }
}
