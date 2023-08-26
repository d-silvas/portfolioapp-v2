import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableToCsvRawValueDirective } from './table-to-csv-raw-value.directive';
import { TableToCsvDirective } from './table-to-csv.directive';
import { TableToCsvButtonComponent } from './table-to-csv-button/table-to-csv-button.component';

@NgModule({
  declarations: [
    TableToCsvRawValueDirective,
    TableToCsvDirective,
    TableToCsvButtonComponent,
  ],
  imports: [CommonModule],
  exports: [TableToCsvButtonComponent, TableToCsvRawValueDirective],
})
export class TableToCsvModule {}
