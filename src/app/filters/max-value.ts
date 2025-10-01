import { Directive, forwardRef, input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

/**
 * Custom maxValue validator directive is used because the `amount` in the filter form is a string.
 * Built in and angular validator have to be on a number input.
 */
@Directive({
  selector: '[appMaxValue]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxValue),
      multi: true,
    },
  ],
})
export class MaxValue implements Validator {
  public readonly maxValue = input<number>(50, { alias: 'appMaxValue' });

  validate(control: AbstractControl): ValidationErrors | null {
    const numberValue = +control.value;

    if (isNaN(numberValue) || numberValue <= this.maxValue()) {
      return null;
    }

    return { maxValue: { value: numberValue } };
  }
}
