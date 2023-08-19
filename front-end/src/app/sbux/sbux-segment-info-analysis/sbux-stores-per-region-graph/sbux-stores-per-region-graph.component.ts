import { Component, Input } from '@angular/core';
import { SbuxSegmentInfoAnalysisTableInfo } from '../models';
import * as Highcharts from 'highcharts';
import { BehaviorSubject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-sbux-stores-per-region-graph',
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
export class SbuxStoresPerRegionGraphComponent {
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
        this.chartOptions$.next({
          // chart: { type: 'area' },
          credits: { enabled: false },
          title: { text: 'Stores per region' },
          plotOptions: {
            area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                lineWidth: 1,
                lineColor: '#666666',
              },
            },
          },
          tooltip: {
            useHTML: true,
            formatter: function () {
              return `<span style="color:${this.series.color}">${
                this.series.name
              }</span>: <b>${Number(this.point.percentage).toFixed(2)}%</b> (${
                this.point.y
              })<br/>`;
            },
          },
          series: [
            {
              name: 'North America',
              data: tableInfo.northAmericaNumStores,
              color: Highcharts.getOptions().colors[0],
              type: 'area',
            },
            {
              name: 'International',
              data: tableInfo.internationalNumStores,
              color: Highcharts.getOptions().colors[1],
              type: 'area',
            },
          ],
          xAxis: {
            title: { text: 'Period' },
            categories: tableInfo.period,
          },
          yAxis: [{ title: { text: 'Store number' } }],
        });
      });
  }
}
