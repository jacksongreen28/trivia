import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TitleCasePipe } from '@angular/common';
import { Question } from '../trivia-api/models';
import { SnakeToSentencePipe } from '../trivia-api/snake-to-sentence-pipe';

@Component({
  selector: 'app-question-card',
  imports: [TitleCasePipe, SnakeToSentencePipe],
  templateUrl: './question-card.html',
  styleUrl: './question-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCard {
  private readonly sanitizer = inject(DomSanitizer);
  public readonly question = input.required<Question>();

  protected possibleAnswers = computed(() => {
    const allAnswers = this.question().incorrectAnswers;
    allAnswers.push(this.question().correctAnswer);

    // Shuffle correct answer with the incorrect ones.
    // This shuffle is good enough for my needs here.
    return allAnswers
      .sort(() => Math.random() - Math.random())
      .map((answer) => this.sanitizer.bypassSecurityTrustHtml(answer));
  });

  protected safeQuestion = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.question().question.text));
}
