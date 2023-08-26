import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableElementBoldDirective } from './table-element-bold.directive';
import { TableElementBorderBottomDirective } from './table-element-border-bottom.directive';
import { TableElementBorderTopDirective } from './table-element-border-top.directive';
import { TableElementDoubleBorderBottomDirective } from './table-element-double-border-bottom.directive';
import { TableElementDollarSignDirective } from './table-element-dollar-sign.directive';

@NgModule({
  declarations: [
    TableComponent,
    TableElementBoldDirective,
    TableElementBorderBottomDirective,
    TableElementDoubleBorderBottomDirective,
    TableElementBorderTopDirective,
    TableElementDollarSignDirective,
  ],
  imports: [CommonModule],
  exports: [
    TableComponent,
    TableElementBoldDirective,
    TableElementBorderBottomDirective,
    TableElementDoubleBorderBottomDirective,
    TableElementBorderTopDirective,
    TableElementDollarSignDirective,
  ],
})
export class TableModule {}
