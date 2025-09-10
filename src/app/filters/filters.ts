import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TriviaFilters } from '../open-trivia/models';
import { OpenTriviaService } from '../open-trivia/open-trivia';

@Component({
  selector: 'app-filters',
  imports: [FormsModule],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
})
export class Filters {
  public readonly filtersChange = output<TriviaFilters>();
  protected readonly categories = inject(OpenTriviaService).categories;

  protected readonly amount = signal(10);
  protected readonly category = signal(0);

  protected emitFilters() {
    this.filtersChange.emit({ amount: this.amount(), category: this.category() });
  }
}
