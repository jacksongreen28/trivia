import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { QuestionCard } from '../question-card/question-card';
import { CategoryHuePipe } from './category-hue-pipe';
import { Question } from '../trivia-api/models';

@Component({
  selector: 'app-question-list',
  imports: [QuestionCard, CategoryHuePipe],
  templateUrl: './question-list.html',
  styleUrl: './question-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionList {
  public readonly questions = input.required<Question[]>();
}
