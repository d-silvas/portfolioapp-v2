import { Component, Input } from '@angular/core';
import { SbuxSegmentInfoAnalysisTableInfo } from '../models';
import * as Highcharts from 'highcharts';
import { BehaviorSubject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-sbux-revenue-per-store-graph',
  template: `
    <div class="app-graph">
      <highcharts-chart
        [Highcharts]="Highcharts"
        [options]="chartOptions$ | async"
        style="width: 99%; height: 400px; display: block"
      ></highcharts-chart>
    </div>
  `,
})
export class SbuxRevenuePerStoreGraphComponent {
  private _tableInfo$ = new BehaviorSubject<SbuxSegmentInfoAnalysisTableInfo>(
    null,
  );

  @Input() set tableInfo(i: SbuxSegmentInfoAnalysisTableInfo) {
    this._tableInfo$.next(i);
  }
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions$ = new BehaviorSubject<Highcharts.Options>(null);

  ngOnInit(): void {
    this._tableInfo$
      .pipe(untilDestroyed(this))
      .subscribe((tableInfo: SbuxSegmentInfoAnalysisTableInfo) => {
        const northAmericaRevenuePerStore = this._mapMillions(
          tableInfo.northAmericaRevenuePerStore,
        );
        const internationalRevenuePerStore = this._mapMillions(
          tableInfo.internationalRevenuePerStore,
        );

        this.chartOptions$.next({
          // chart: { type: 'spline' },
          credits: { enabled: false },
          title: { text: 'Revenues per store per region' },
          tooltip: {
            useHTML: true,
            formatter: function () {
              return `<span style="color:${this.series.color}">${this.series.name}</span>: $${this.point.y} million<br/>`;
            },
          },
          series: [
            {
              name: 'North America',
              data: northAmericaRevenuePerStore,
              color: Highcharts.getOptions().colors[0],
              type: 'spline',
            },
            {
              name: 'International',
              data: internationalRevenuePerStore,
              color: Highcharts.getOptions().colors[1],
              type: 'spline',
            },
          ],
          xAxis: {
            title: { text: 'Period' },
            categories: tableInfo.period,
          },
          yAxis: [{ title: { text: 'Revenue per store ($ million)' } }],
        });
      });
  }

  private _mapMillions(numbers: number[]) {
    return numbers.map((n: number) => {
      if (n === null || n === undefined) {
        return null;
      }
      return Number(Number(n / 1000000).toFixed(2));
    });
  }
}
