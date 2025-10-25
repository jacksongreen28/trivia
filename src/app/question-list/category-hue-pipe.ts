import { Pipe, PipeTransform } from '@angular/core';
import { Categories } from '../trivia-api/models';

@Pipe({
  name: 'categoryHue',
})
export class CategoryHuePipe implements PipeTransform {
  // Not technically pure because we rely on the outside list of categories,
  // but since the list won't change for the life of the app I'm ok with it.
  private readonly categories = Categories;

  transform(category: string): number {
    const hueStep = Math.round(240 / this.categories.length);
    const index = this.categories.findIndex((c) => c === category);

    return index * hueStep;
  }
}
