import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ampersand',
})
export class AmpersandPipe implements PipeTransform {
  // Not the most necessary pipe, but I got tired of having to use the sanitizer.
  transform(value: string): string {
    return value.replace('&amp;', '&');
  }
}
