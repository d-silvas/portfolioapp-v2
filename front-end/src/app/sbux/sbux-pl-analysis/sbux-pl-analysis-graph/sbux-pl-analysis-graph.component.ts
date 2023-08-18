import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SbuxPlAnalysisTableInfo } from '../models';
import HC_bellcurve from 'highcharts/modules/histogram-bellcurve';
HC_bellcurve(Highcharts);

@UntilDestroy()
@Component({
  selector: 'app-sbux-pl-analysis-graph',
  templateUrl: './sbux-pl-analysis-graph.component.html',
  styleUrls: ['./sbux-pl-analysis-graph.component.scss'],
})
export class SbuxPlAnalysisGraphComponent implements OnInit {
  private _tableInfo$ = new BehaviorSubject<SbuxPlAnalysisTableInfo>(null);
  @Input() set sbuxPlAnalysisTableInfo(i: SbuxPlAnalysisTableInfo) {
    this._tableInfo$.next(i);
  }
  Highcharts: typeof Highcharts = Highcharts;
  allProfitsChartOptions$ = new BehaviorSubject<Highcharts.Options>(null);
  ebitdaMarginChartOptions$: Observable<Highcharts.Options>;

  ngOnInit(): void {
    this._tableInfo$
      .pipe(untilDestroyed(this))
      .subscribe((tableInfo: SbuxPlAnalysisTableInfo) => {
        this.allProfitsChartOptions$.next({
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
    this.ebitdaMarginChartOptions$ = this._tableInfo$.pipe(
      map((tableInfo: SbuxPlAnalysisTableInfo) => {
        const pointsInInterval = 4;
        const data = tableInfo.ebitdaAsProportionOfRevenues.map((n) => n * 100);
        return {
          credits: { enabled: false },
          title: { text: null },
          series: [
            {
              name: 'EBITDA margin',
              type: 'bellcurve',
              xAxis: 1,
              yAxis: 1,
              baseSeries: 1,
              intervals: 3,
              pointsInInterval,
              marker: { enabled: true },
            },
            {
              name: 'Data',
              type: 'scatter',
              data,
              visible: false,
            },
          ],
          xAxis: [
            {
              title: { text: null },
            },
            {
              title: { text: null },
            },
          ],
          yAxis: [
            {
              title: { text: null },
            },
            {
              title: { text: null },
              visible: false,
            },
          ],
          chart: {
            events: {
              load: function () {
                console.log('LOADD');
                console.log((this as any).series[0].data);
                // Data not available when load is called so we use setTimeout
                setTimeout(() => {
                  Highcharts.each(
                    (this as any).series[0].data,
                    function (point: any, i: any) {
                      const labels = ['3σ', '2σ', 'σ', 'μ', 'σ', '2σ', '3σ'];
                      if (i % pointsInInterval === 0) {
                        point.update({
                          color: 'black',
                          dataLabels: {
                            enabled: true,
                            format: labels[Math.floor(i / pointsInInterval)],
                            overflow: 'none',
                            crop: false,
                            y: -2,
                            style: { fontSize: '13px' },
                          },
                        });
                      }
                    }
                  );
                }, 1000);
              },
            },
          },
        };
      })
    );
  }
}
