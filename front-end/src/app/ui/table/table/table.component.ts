import {
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { TABLE_CLASS } from '../constants';

@Component({
  selector: 'table[appTable]',
  template: ` <ng-content></ng-content> `,
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit {
  @Input() appTable: 'asReported' | null;
  @HostBinding('class') classes: string;
  @HostBinding('cellspacing') cellSpacing = 0;

  ngOnInit(): void {
    this.classes = `${TABLE_CLASS} ${TABLE_CLASS}--${this.appTable}`;
  }
}
