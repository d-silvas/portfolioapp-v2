import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PlAnalysisTableInfo } from '../models';
import HC_bellcurve from 'highcharts/modules/histogram-bellcurve';
HC_bellcurve(Highcharts);

@UntilDestroy()
@Component({
  selector: 'app-pl-analysis-graph',
  // templateUrl: './pl-analysis-graph.component.html',
  template: `
    <div class="app-graph">
      <highcharts-chart
        [Highcharts]="Highcharts"
        [options]="allProfitsChartOptions$ | async"
        style="width: 99%; height: 400px; display: block"
      ></highcharts-chart>
    </div>
    <div class="app-graph">
      <highcharts-chart
        [Highcharts]="Highcharts"
        [options]="marginsChartOptions$ | async"
        style="width: 99%; height: 400px; display: block"
      ></highcharts-chart>
    </div>
    <div class="app-graph">
      <highcharts-chart
        [Highcharts]="Highcharts"
        [options]="profitsCogs5yChartOptions$ | async"
        style="width: 99%; height: 400px; display: block"
      ></highcharts-chart>
    </div>
    <!-- <div class="app-graph">
      <highcharts-chart
        [Highcharts]="Highcharts"
        [options]="ebitdaMarginChartOptions$ | async"
        style="width: 99%; height: 400px; display: block"
      ></highcharts-chart>
    </div> -->
    <div class="app-graph">
      <highcharts-chart
        [Highcharts]="Highcharts"
        [options]="netIncomeMarginHistogramChartOptions$ | async"
        style="width: 99%; height: 400px; display: block"
      ></highcharts-chart>
    </div>
  `,
})
export class PlAnalysisGraphComponent implements OnInit {
  private _tableInfo$ = new BehaviorSubject<PlAnalysisTableInfo>(null);
  @Input() set plAnalysisTableInfo(i: PlAnalysisTableInfo) {
    this._tableInfo$.next(i);
  }
  Highcharts: typeof Highcharts = Highcharts;
  allProfitsChartOptions$ = new BehaviorSubject<Highcharts.Options>(null);
  marginsChartOptions$ = new BehaviorSubject<Highcharts.Options>(null);
  profitsCogs5yChartOptions$ = new BehaviorSubject<Highcharts.Options>(null);
  ebitdaMarginChartOptions$ = new BehaviorSubject<Highcharts.Options>(null);
  netIncomeMarginHistogramChartOptions$ =
    new BehaviorSubject<Highcharts.Options>(null);

  ngOnInit(): void {
    this._tableInfo$
      .pipe(filter(Boolean), untilDestroyed(this))
      .subscribe((t) => {
        this.allProfitsChartOptions$.next(this._getProfitsChartOptions(t));
        this.marginsChartOptions$.next(this._getMarginsChartOptions(t));
        this.profitsCogs5yChartOptions$.next(
          this._getProfitsCagr5yChartOptions(t),
        );
        // TODO figure out distributions
        // this.ebitdaMarginChartOptions$.next(this._getEbitdaMarginChartOptions(t));
        this.netIncomeMarginHistogramChartOptions$.next(
          this._getNetIncomeMarginHistogramChartOptions(t),
        );
      });
  }

  private _getProfitsChartOptions(
    tableInfo: PlAnalysisTableInfo,
  ): Highcharts.Options {
    return {
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
      ],
      xAxis: {
        title: { text: 'Period' },
        categories: tableInfo.period,
      },
      yAxis: [{ title: { text: 'Value' } }],
    };
  }

  private _getMarginsChartOptions(
    tableInfo: PlAnalysisTableInfo,
  ): Highcharts.Options {
    return {
      credits: { enabled: false },
      title: { text: null },
      series: [
        {
          name: 'Gross margin',
          data: tableInfo.grossProfitAsProportionOfRevenues.map((n) => n * 100),
          type: 'spline',
          color: Highcharts.getOptions().colors[0],
        },
        {
          name: 'Operating margin',
          data: tableInfo.ebitAsProportionOfRevenues.map((n) => n * 100),
          type: 'spline',
          color: Highcharts.getOptions().colors[1],
        },
        {
          name: 'Net margin',
          data: tableInfo.netIncomeAsProportionOfRevenues.map((n) => n * 100),
          type: 'spline',
          color: Highcharts.getOptions().colors[2],
        },
      ],
      xAxis: {
        title: { text: 'Period' },
        categories: tableInfo.period,
      },
      yAxis: [{ title: { text: 'Percent' } }],
    };
  }

  private _getProfitsCagr5yChartOptions(
    tableInfo: PlAnalysisTableInfo,
  ): Highcharts.Options {
    // Checking gross profit cagrs. Note: if gross profit for a year (say 2015) is negative, then
    // the CAGR 5y for 2015+5=2020 will not exist and we will see one data point missing at
    // the end of the series
    const sliceFrom = tableInfo.grossProfitCagr5.findIndex((p) => p !== null);
    return {
      credits: { enabled: false },
      title: { text: null },
      series: [
        {
          name: 'Gross margin CAGR 5y',
          data: tableInfo.grossProfitCagr5.slice(sliceFrom).map((n) => n * 100),
          type: 'spline',
          color: Highcharts.getOptions().colors[0],
        },
        {
          name: 'Operating margin CAGR 5y',
          data: tableInfo.ebitCagr5.slice(sliceFrom).map((n) => n * 100),
          type: 'spline',
          color: Highcharts.getOptions().colors[1],
        },
        {
          name: 'Net margin CAGR 5y',
          data: tableInfo.netIncomeCagr5.slice(sliceFrom).map((n) => n * 100),
          type: 'spline',
          color: Highcharts.getOptions().colors[2],
        },
        {
          name: 'Diluted EPS CAGR 5y',
          data: tableInfo.dilutedEpsCagr5.slice(sliceFrom).map((n) => n * 100),
          type: 'spline',
          color: Highcharts.getOptions().colors[3],
        },
      ],
      xAxis: {
        title: { text: 'Period' },
        categories: tableInfo.period.slice(sliceFrom),
      },
      yAxis: [{ title: { text: 'Percent' } }],
    };
  }

  private _getNetIncomeMarginHistogramChartOptions(
    tableInfo: PlAnalysisTableInfo,
  ): Highcharts.Options {
    // TODO these functions are always getting called with an empty tableInfo (the one that comes
    // from the store), that has all empty arrays. Maybe that's not ideal
    const median = (arr: number[]): number => {
      const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
      return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    };

    return {
      credits: { enabled: false },
      title: { text: null },
      series: [
        {
          name: 'Histogram',
          type: 'histogram',
          xAxis: 0,
          yAxis: 1,
          baseSeries: 's1',
          zIndex: -1,
        },
        {
          name: 'Data',
          type: 'scatter',
          data: tableInfo.netIncomeAsProportionOfRevenues.map((n) => n * 100),
          id: 's1',
          marker: {
            radius: 1.5,
          },
        },
      ],
      xAxis: [
        {
          title: { text: 'Histogram' },
          alignTicks: false,
        },
      ],
      yAxis: [
        {
          title: { text: 'Data' },
        },
        {
          title: { text: 'Histogram' },
          opposite: true,
        },
      ],
      chart: {
        events: {
          redraw: function () {
            const medianValue =
              median(tableInfo.netIncomeAsProportionOfRevenues) * 100;
            this.xAxis[0].addPlotLine({
              value: medianValue,
              color: 'red',
              width: 2,
              label: { text: `${medianValue.toFixed(2)}%` },
            });
          },
        },
      },
    };
  }

  private _getEbitdaMarginChartOptions(
    tableInfo: PlAnalysisTableInfo,
  ): Highcharts.Options {
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
                },
              );
            }, 1000);
          },
        },
      },
    };
  }
}
