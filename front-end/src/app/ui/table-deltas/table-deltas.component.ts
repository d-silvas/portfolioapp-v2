import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-table-deltas',
  templateUrl: './table-deltas.component.html',
  styleUrls: ['./table-deltas.component.scss'],
})
export class TableDeltasComponent {
  @Input() title: string;
  @Input() numberFormat: string;
  @Input() showDelta = true;
  @Input() showCagrs5y = true;
  @Input() showCagrs10y = true;

  @Input() set data(data: number[]) {
    this.data$.next(data);
  }
  @Input() set deltas(deltas: number[]) {
    this.deltas$.next(deltas);
  }
  @Input() set cagrs5y(cagrs5y: number[]) {
    this.cagrs5y$.next(cagrs5y);
  }
  @Input() set cagrs10y(cagrs10y: number[]) {
    this.cagrs10y$.next(cagrs10y);
  }

  data$ = new BehaviorSubject<number[]>([]);
  deltas$ = new BehaviorSubject<number[]>([]);
  cagrs5y$ = new BehaviorSubject<number[]>([]);
  cagrs10y$ = new BehaviorSubject<number[]>([]);
  isExpanded$ = new BehaviorSubject<boolean>(false);

  private get _isExpanded(): boolean {
    return this.isExpanded$.getValue();
  }

  toggle() {
    this.isExpanded$.next(!this._isExpanded);
  }
}
