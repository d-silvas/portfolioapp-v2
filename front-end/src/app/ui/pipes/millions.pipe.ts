import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { FinancialNumberDivider } from './financial-number-divider';

/**
 * To be used in "as-reported" components. By default, it uses a dash for 0 and
 * parentheses for negative numbers
 */
@Pipe({ name: 'millions' })
export class MillionsPipe implements PipeTransform {
  constructor(private readonly _decimalPipe: DecimalPipe) {}

  transform(value: string | number, format: string = '1.0-0'): string {
    let formattedNumber: string = null;

    try {
      const millions: number =
        Number(value) / FinancialNumberDivider.OneMillion;
      formattedNumber = this._decimalPipe.transform(millions, format);
    } catch {
      console.warn(`[MillionsPipe] Could not transform ${value}`);
    }

    if (!formattedNumber || formattedNumber === '0') {
      return '—';
    }
    if (Number(formattedNumber) < 0) {
      formattedNumber = formattedNumber.replace(/^-/, '');
      return `(${formattedNumber})`;
    }
    return formattedNumber;
  }
}
