import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TriviaResult } from '../open-trivia/models';
import { QuestionCard } from '../question-card/question-card';
import { CategoryHuePipe } from './category-hue-pipe';

@Component({
  selector: 'app-question-list',
  imports: [QuestionCard, CategoryHuePipe],
  templateUrl: './question-list.html',
  styleUrl: './question-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionList {
  public readonly results = input.required<TriviaResult[]>();
}
