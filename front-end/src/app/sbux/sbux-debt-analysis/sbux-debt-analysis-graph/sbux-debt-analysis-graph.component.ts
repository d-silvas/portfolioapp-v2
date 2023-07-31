import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { BehaviorSubject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SbuxDebtAnalysisTableInfo } from '../models';

@UntilDestroy()
@Component({
  selector: 'app-sbux-debt-analysis-graph',
  templateUrl: './sbux-debt-analysis-graph.component.html',
  styleUrls: ['./sbux-debt-analysis-graph.component.scss'],
})
export class SbuxDebtAnalysisGraphComponent implements OnInit {
  private _tableInfo$ = new BehaviorSubject<SbuxDebtAnalysisTableInfo>(null);
  @Input() set sbuxDebtAnalysisTableInfo(i: SbuxDebtAnalysisTableInfo) {
    this._tableInfo$.next(i);
  }
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions$ = new BehaviorSubject<Highcharts.Options>(null);

  ngOnInit(): void {
    this._tableInfo$
      .pipe(untilDestroyed(this))
      .subscribe((tableInfo: SbuxDebtAnalysisTableInfo) => {
        this.chartOptions$.next({
          credits: { enabled: false },
          title: { text: null },
          series: [
            {
              name: 'Revenue',
              data: tableInfo.netRevenue,
              type: 'column',
              yAxis: 0,
              color: Highcharts.getOptions().colors[0],
            },
            {
              name: 'Operating income (EBIT)',
              data: tableInfo.ebit,
              type: 'column',
              yAxis: 0,
              color: Highcharts.getOptions().colors[1],
            },
            {
              name: 'Net income',
              data: tableInfo.netIncome,
              type: 'column',
              yAxis: 0,
              color: Highcharts.getOptions().colors[2],
            },
            {
              name: 'Gross margin',
              data: tableInfo.grossProfitAsProportionOfRevenues.map(
                (n) => n * 100
              ),
              type: 'spline',
              yAxis: 1,
              color: Highcharts.getOptions().colors[0],
            },
            {
              name: 'Operating margin',
              data: tableInfo.ebitAsProportionOfRevenues.map((n) => n * 100),
              type: 'spline',
              yAxis: 1,
              color: Highcharts.getOptions().colors[1],
            },
            {
              name: 'Net margin',
              data: tableInfo.netIncomeAsProportionOfRevenues.map(
                (n) => n * 100
              ),
              type: 'spline',
              yAxis: 1,
              color: Highcharts.getOptions().colors[2],
            },
          ],
          xAxis: {
            title: { text: 'Period' },
            categories: tableInfo.period,
          },
          yAxis: [
            {
              title: {
                text: 'Value',
              },
            },
            {
              title: {
                text: 'Percent',
              },
              opposite: true,
            },
          ],
        });
      });
  }
}
