import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { TriviaResult } from '../open-trivia/models';
import { DomSanitizer } from '@angular/platform-browser';
import { TitleCasePipe } from '@angular/common';
import { AmpersandPipe } from './ampersand-pipe';

@Component({
  selector: 'app-question-card',
  imports: [TitleCasePipe, AmpersandPipe],
  templateUrl: './question-card.html',
  styleUrl: './question-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCard {
  private readonly sanitizer = inject(DomSanitizer);
  public readonly triviaResult = input.required<TriviaResult>();

  protected possibleAnswers = computed(() => {
    const allAnswers = this.triviaResult().incorrect_answers;
    allAnswers.push(this.triviaResult().correct_answer);

    // Shuffle correct answer with the incorrect ones.
    // This shuffle is good enough for my needs here.
    return allAnswers
      .sort(() => Math.random() - Math.random())
      .map((answer) => this.sanitizer.bypassSecurityTrustHtml(answer));
  });

  protected safeQuestion = computed(() => {
    let question = this.triviaResult().question;
    if (this.triviaResult().type === 'boolean') {
      question = '<strong>True or false: </strong>' + question;
    }
    return this.sanitizer.bypassSecurityTrustHtml(question);
  });
}
