import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoryResponse, TriviaFilters, TriviaResponse } from './models';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenTriviaService {
  private readonly basePath = 'https://opentdb.com';
  private readonly http = inject(HttpClient);

  public readonly categories = toSignal(
    this.getCategories().pipe(
      map((response) => response.trivia_categories.sort((a, b) => a.name.localeCompare(b.name)))
    ),
    { initialValue: [] }
  );

  public getTriviaResponse(filters: TriviaFilters) {
    if (filters.category === 0) {
      return this.http.get<TriviaResponse>(`${this.basePath}/api.php?`, { params: { amount: filters.amount } });
    }
    return this.http.get<TriviaResponse>(`${this.basePath}/api.php?`, { params: { ...filters } });

  }

  private getCategories() {
    return this.http.get<CategoryResponse>(`${this.basePath}/api_category.php`);
  }
}
