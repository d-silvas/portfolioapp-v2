import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TableDeltasComponent } from './table-deltas.component';
import { PipesModule } from '../pipes/pipes.module';
import { TableToCsvModule } from 'src/app/table-to-csv/table-to-csv.module';

@NgModule({
  declarations: [TableDeltasComponent],
  imports: [CommonModule, MatIconModule, PipesModule, TableToCsvModule],
  exports: [TableDeltasComponent],
})
export class TableDeltasModule {}
