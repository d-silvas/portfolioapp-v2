import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FinancialNumberPipe } from './financial-number.pipe';
import { MillionsPipe } from './millions.pipe';

@NgModule({
  declarations: [FinancialNumberPipe, MillionsPipe],
  providers: [DecimalPipe],
  imports: [CommonModule],
  exports: [FinancialNumberPipe, MillionsPipe],
})
export class PipesModule {}
