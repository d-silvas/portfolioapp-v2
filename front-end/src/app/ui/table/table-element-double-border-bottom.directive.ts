import { Directive, HostBinding } from '@angular/core';
import { TABLE_CLASS } from './constants';

@Directive({ selector: '[appTableElementDoubleBorderBottom]' })
export class TableElementDoubleBorderBottomDirective {
  @HostBinding(`class.${TABLE_CLASS}-element`) tableElementClass = true;
  @HostBinding(`class.${TABLE_CLASS}-element--double-border-bottom`)
  tableElementDoubleBorderBottomClass = true;
}
