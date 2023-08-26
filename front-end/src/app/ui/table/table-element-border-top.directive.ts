import { Directive, HostBinding } from '@angular/core';
import { TABLE_CLASS } from './constants';

@Directive({ selector: '[appTableElementBorderTop]' })
export class TableElementBorderTopDirective {
  @HostBinding(`class.${TABLE_CLASS}-element`) tableElementClass = true;
  @HostBinding(`class.${TABLE_CLASS}-element--border-top`)
  tableElementBorderTopClass = true;
}
