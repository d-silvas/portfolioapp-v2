import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { HighchartsChartModule } from 'highcharts-angular';
import { TableDeltasModule } from './table-deltas/table-deltas.module';
import { PipesModule } from './pipes/pipes.module';
import { TableToCsvModule } from '../table-to-csv/table-to-csv.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule,
    HighchartsChartModule,
    MatTabsModule,
    PipesModule,
    TableDeltasModule,
    // TODO move ??
    TableToCsvModule,
  ],
})
export class UiModule {}
