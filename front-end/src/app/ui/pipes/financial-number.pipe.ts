import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { FinancialNumberDivider } from './financial-number-divider';

@Pipe({ name: 'financialNumber' })
export class FinancialNumberPipe implements PipeTransform {
  constructor(private readonly _decimalPipe: DecimalPipe) {}

  // TODO ? accept different dividers (thousands, millions, etc)
  // TODO ? parenthesis and RED if negative
  transform(value: string | number, format: string = '1.2-2'): string {
    if (!value) {
      return null;
    }

    try {
      const numberValue = Number(value);
      const billions = numberValue / FinancialNumberDivider.OneBillion;
      if (billions > 0.5 || billions < -0.5) {
        return this._decimalPipe.transform(billions, format) + ' B';
      }
      const millions = numberValue / FinancialNumberDivider.OneMillion;
      if (millions > 0.5 || millions < -0.5) {
        return this._decimalPipe.transform(millions, format) + ' M';
      }
      const thousands = numberValue / FinancialNumberDivider.OneThousand;
      if (thousands > 0.5 || thousands < -0.5) {
        return this._decimalPipe.transform(thousands, format) + ' K';
      }
      return this._decimalPipe.transform(Number(numberValue), format);
    } catch {
      console.warn(`[FinancialNumberPipe] Could not transform ${value}`);
    }

    return null;
  }
}
