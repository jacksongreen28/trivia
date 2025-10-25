import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaxValue } from './max-value';
import { Categories, QuestionsQueryParams } from '../trivia-api/models';
import { SnakeToSentencePipe } from '../trivia-api/snake-to-sentence-pipe';
import { toParams } from './to-params';

@Component({
  selector: 'app-filters',
  imports: [FormsModule, MaxValue, SnakeToSentencePipe],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Filters {
  public readonly filtersChange = output<QuestionsQueryParams>();

  protected readonly limit = signal(10);
  protected readonly category = signal<string | undefined>(undefined);
  protected categories = Categories;

  protected emitFilters() {
    this.filtersChange.emit(toParams({ limit: this.limit(), categories: this.category() }));
  }
}
