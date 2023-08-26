import { Directive, HostBinding } from '@angular/core';
import { TABLE_CLASS } from './constants';

@Directive({ selector: '[appTableElementBorderBottom]' })
export class TableElementBorderBottomDirective {
  @HostBinding(`class.${TABLE_CLASS}-element`) tableElementClass = true;
  @HostBinding(`class.${TABLE_CLASS}-element--border-bottom`)
  tableElementBorderBottomClass = true;
}
