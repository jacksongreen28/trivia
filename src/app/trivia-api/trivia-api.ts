import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Question, QuestionsQueryParams } from './models';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  private readonly basePath = 'https://the-trivia-api.com/v2';
  private readonly http = inject(HttpClient);

  public getQuestions(params: QuestionsQueryParams) {
    return this.http.get<Question[]>(`${this.basePath}/questions`, { params: { ...params } });
  }
}
