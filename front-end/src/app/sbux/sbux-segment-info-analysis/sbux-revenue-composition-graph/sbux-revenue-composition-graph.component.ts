import { Component, Input } from '@angular/core';
import { SbuxSegmentInfoAnalysisTableInfo } from '../models';
import * as Highcharts from 'highcharts';
import { BehaviorSubject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-sbux-revenue-composition-graph',
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
export class SbuxRevenueCompositionGraphComponent {
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
        const northAmericaRevenues = this._mapBillions(
          tableInfo.northAmericaRevenues,
        );
        const internationalRevenues = this._mapBillions(
          tableInfo.internationalRevenues,
        );
        const channelDevelopmentRevenues = this._mapBillions(
          tableInfo.channelDevelopmentRevenues,
        );
        const otherRevenues = this._mapBillions(tableInfo.otherRevenues);

        this.chartOptions$.next({
          credits: { enabled: false },
          title: { text: 'Revenue composition' },
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
              }</span>: <b>${Number(this.point.percentage).toFixed(2)}%</b> ($${
                this.point.y
              } billion)<br/>`;
            },
          },
          series: [
            {
              name: 'North America',
              data: northAmericaRevenues,
              color: Highcharts.getOptions().colors[0],
              type: 'area',
            },
            {
              name: 'International',
              data: internationalRevenues,
              color: Highcharts.getOptions().colors[1],
              type: 'area',
            },
            {
              name: 'Channel Development',
              data: channelDevelopmentRevenues,
              color: Highcharts.getOptions().colors[2],
              type: 'area',
            },
            {
              name: 'Other',
              data: otherRevenues,
              color: Highcharts.getOptions().colors[3],
              type: 'area',
            },
          ],
          xAxis: {
            title: { text: 'Period' },
            categories: tableInfo.period,
          },
          yAxis: [{ title: { text: 'USD Billion' } }],
        });
      });
  }

  private _mapBillions(numbers: number[]) {
    return numbers.map((n: number) => {
      if (n === null || n === undefined) {
        return null;
      }
      return Number(Number(n / 1000000000).toFixed(2));
    });
  }
}
