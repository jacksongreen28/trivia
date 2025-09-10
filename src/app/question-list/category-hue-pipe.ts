import { inject, Pipe, PipeTransform } from '@angular/core';
import { OpenTriviaService } from '../open-trivia/open-trivia';

@Pipe({
  name: 'categoryHue',
})
export class CategoryHuePipe implements PipeTransform {
  // Not technically pure because we rely on the outside list of categories,
  // but since the list won't change for the life of the app I'm ok with it.
  protected readonly categories = inject(OpenTriviaService).categories;

  transform(category: string): number {
    const hueStep = Math.round(360 / this.categories().length);
    const index = this.categories().findIndex((c) => c.name === category);

    return Math.round(((index + 1) * hueStep) % 360);
  }
}
