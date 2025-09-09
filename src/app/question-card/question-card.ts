import { Component, computed, inject, input } from '@angular/core';
import { TriviaResult } from '../open-trivia/models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-question-card',
  imports: [],
  templateUrl: './question-card.html',
  styleUrl: './question-card.css',
})
export class QuestionCard {
  private readonly sanatizer = inject(DomSanitizer);
  public readonly triviaResult = input.required<TriviaResult>();

  protected safeQuestion = computed(() => this.sanatizer.bypassSecurityTrustHtml(this.triviaResult().question));
}
